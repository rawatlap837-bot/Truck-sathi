/**
 * Deploy this script as a Web App (execute as you; access: anyone).
 * Store the deployment URL in VITE_GOOGLE_SHEETS_SCRIPT_URL.
 * Protect the sheet with a filter and restrict spreadsheet access to your team.
 */
const SHEET_NAME = "Bookings";

function doPost(event) {
  try {
    const data = JSON.parse(event.postData.contents || "{}");
    if (!data.name || !data.phone || !data.address || !data.payment?.id) {
      return json({ success: false, message: "Name, phone, address and payment confirmation are required." });
    }
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
      || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Submitted at", "Name", "Phone", "Email", "Delivery address", "Product", "Amount (paise)", "Currency", "Razorpay payment ID"]);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date(), safe(data.name), safe(data.phone), safe(data.email), safe(data.address), safe(data.product), Number(data.amount), safe(data.currency), safe(data.payment.id)]);
    return json({ success: true });
  } catch (error) {
    return json({ success: false, message: "Unable to record booking." });
  }
}

function safe(value) {
  const text = String(value || "").trim().slice(0, 1000);
  return /^[=+@\-]/.test(text) ? "'" + text : text;
}

function json(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}
