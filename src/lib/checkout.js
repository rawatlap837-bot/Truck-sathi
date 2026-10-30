const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT_URL;

const loadRazorpay = () => new Promise((resolve, reject) => {
  if (window.Razorpay) return resolve();
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.onload = resolve;
  script.onerror = () => reject(new Error("Razorpay checkout could not be loaded."));
  document.head.appendChild(script);
});

export async function startCheckout(extra = "") {
  const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
  if (!key) {
    window.location.assign("/checkout?setup=payment");
    return;
  }

  try {
    await loadRazorpay();
    const checkout = new window.Razorpay({
      key,
      amount: 19900,
      currency: "INR",
      name: "Truck Sathi",
      description: "GPS Vehicle Tracker booking",
      image: "/images/truck%20sathi.png",
      notes: { product: "GPS Vehicle Tracker", campaign: extra },
      handler: (payment) => {
        sessionStorage.setItem("truckSathiPayment", JSON.stringify({
          id: payment.razorpay_payment_id,
          orderId: payment.razorpay_order_id || "",
          signature: payment.razorpay_signature || "",
        }));
        window.location.assign("/checkout?payment=success");
      },
      modal: { ondismiss: () => {} },
      theme: { color: "#1d6cf2" },
    });
    checkout.open();
  } catch (error) {
    console.error(error);
    window.location.assign("/checkout?setup=payment");
  }
}

export async function submitBooking(data, payment) {
  if (!SCRIPT_URL) throw new Error("The Google Sheets endpoint is not configured yet.");
  const response = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ ...data, payment, product: "GPS Vehicle Tracker", amount: 19900, currency: "INR" }),
  });
  if (!response.ok) throw new Error("Could not save your details. Please try again.");
  const result = await response.json();
  if (!result.success) throw new Error(result.message || "Could not save your details. Please try again.");
  return result;
}
