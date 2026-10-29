/**
 * Animated SVG vehicles for the "Find the Right Solution" cards.
 * Wheels spin, the body bounces and the road moves.
 * The animation CSS (.wheel, .vehicle-body, .road-line) is in src/index.css.
 *
 * Every vehicle is drawn facing LEFT, then flipped so it drives to the RIGHT.
 * To add a vehicle: write a function below, then add it to `vehicles` and `colors`.
 */

// Change vehicle colours here.
// body   = [light top, dark bottom] of the main body
// accent = darker detail colour (trim, cab, roof)
const colors = {
    bike: { body: ["#fb923c", "#ea580c"], accent: "#7c2d12" },   // orange
    car: { body: ["#f87171", "#dc2626"], accent: "#7f1d1d" },    // red
    auto: { body: ["#fde047", "#eab308"], accent: "#16a34a" },   // yellow + green roof
    pickup: { body: ["#34d399", "#059669"], accent: "#064e3b" }, // green
    truck: { body: ["#3b82f6", "#1d4ed8"], accent: "#f97316" },  // blue box + orange cab
    bus: { body: ["#a78bfa", "#7c3aed"], accent: "#4c1d95" },    // violet
};

const DARK = "#1e293b";
const NAVY = "#0f2a5c";
const LAMP = "#fde68a";
const TAIL = "#ef4444";

// Tyre with tread, silver rim, 3 spokes, brake disc and hub.
// The tread dashes and spokes make the spinning easy to see.
function Wheel({ cx, cy, r }) {
    return (
        <g className="wheel">
            <circle cx={cx} cy={cy} r={r} fill={DARK} />
            <circle cx={cx} cy={cy} r={r - 1.6} fill="none" stroke="#475569" strokeWidth="1.2" strokeDasharray="2 2.4" />
            <circle cx={cx} cy={cy} r={r * 0.68} fill="#e2e8f0" />
            {[0, 60, 120].map((angle) => (
                <line
                    key={angle}
                    x1={cx - r * 0.62} y1={cy} x2={cx + r * 0.62} y2={cy}
                    stroke="#94a3b8" strokeWidth="1.8"
                    transform={`rotate(${angle} ${cx} ${cy})`}
                />
            ))}
            <circle cx={cx} cy={cy} r={r * 0.3} fill="#94a3b8" />
            <circle cx={cx} cy={cy} r={r * 0.14} fill={DARK} />
        </g>
    );
}

/* ----------------------------- VEHICLES ----------------------------- */
/* Each receives: body (gradient fill), accent (solid colour), glass.   */

const Bike = ({ body, accent }) => (
    <>
        {/* rider: leg, torso, arm, helmet */}
        <path d="M84 30 L74 42 L70 52" stroke={accent} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M84 30 L68 15" stroke={NAVY} strokeWidth="9" strokeLinecap="round" />
        <path d="M68 17 L50 25" stroke={NAVY} strokeWidth="4" strokeLinecap="round" />
        <circle cx="63" cy="8" r="6.5" fill="#f8fafc" />
        <path d="M57 8 H62 V12 H58 Z" fill={DARK} opacity=".75" />
        {/* swing arm and exhaust */}
        <path d="M82 52 L112 55" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M84 58 L110 53" stroke="#64748b" strokeWidth="4.5" strokeLinecap="round" />
        <rect x="56" y="44" width="28" height="13" rx="3" fill={DARK} />
        <rect x="62" y="48" width="10" height="5" rx="1" fill="#475569" />
        {/* seat, rear fender, tail light */}
        <path d="M72 32 H104 Q110 32 108 37 H76 Z" fill={DARK} />
        <path d="M100 38 Q116 36 120 46 H108 Z" fill={body} />
        <rect x="117" y="42" width="4" height="3" rx="1" fill={TAIL} />
        {/* fuel tank with shine */}
        <path d="M48 36 Q58 24 76 29 L86 42 H54 Z" fill={body} />
        <path d="M56 32 Q64 27 74 31" stroke="#fff" strokeOpacity=".5" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* front fork, handlebar, headlight, fender */}
        <path d="M28 55 L42 28" stroke="#cbd5e1" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M38 25 H52" stroke={DARK} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M36 32 Q28 34 24 42 H34 Z" fill={body} />
        <circle cx="35" cy="30" r="4.5" fill={LAMP} stroke={DARK} strokeWidth="1.2" />
        <Wheel cx={28} cy={55} r={13} />
        <Wheel cx={112} cy={55} r={13} />
    </>
);

const Car = ({ body, accent, glass }) => (
    <>
        {/* body with wheel arches */}
        <path
            d="M8 56 V47 Q8 42 16 40 L34 36 L48 22 Q50 20 54 20 H88 Q93 20 96 23 L110 36 L124 40 Q132 42 132 48 V56 Q132 58 130 58 H117 A13 13 0 0 0 91 58 H49 A13 13 0 0 0 23 58 H10 Q8 58 8 56 Z"
            fill={body}
        />
        {/* windows and headrests */}
        <path d="M38 36 L50 24 H68 V36 Z" fill={glass} />
        <path d="M72 24 H88 Q91 24 93 27 L103 36 H72 Z" fill={glass} />
        <circle cx="58" cy="30" r="3" fill={accent} opacity=".55" />
        <circle cx="80" cy="30" r="3" fill={accent} opacity=".55" />
        {/* roof shine, door line, handle, mirror */}
        <path d="M52 21 H88" stroke="#fff" strokeOpacity=".55" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M70 24 V52" stroke={accent} strokeOpacity=".4" />
        <rect x="76" y="40" width="8" height="2" rx="1" fill={accent} opacity=".6" />
        <rect x="41" y="33" width="6" height="4" rx="1.5" fill={accent} />
        <path d="M14 44 H126" stroke="#fff" strokeOpacity=".3" />
        {/* bumpers and lamps */}
        <rect x="8" y="51" width="12" height="4" rx="2" fill={accent} />
        <rect x="120" y="51" width="12" height="4" rx="2" fill={accent} />
        <rect x="9" y="44" width="9" height="4" rx="2" fill={LAMP} />
        <rect x="122" y="44" width="9" height="4" rx="2" fill={TAIL} />
        <Wheel cx={36} cy={57} r={11} />
        <Wheel cx={104} cy={57} r={11} />
    </>
);

const Auto = ({ body, accent }) => (
    <>
        {/* lower body */}
        <path d="M24 56 V42 Q24 38 28 38 H40 V30 H122 V56 H109 A13 13 0 0 0 83 56 Z" fill={body} />
        <path d="M40 46 H122" stroke="#fff" strokeOpacity=".4" />
        {/* open cabin: seat and driver */}
        <rect x="46" y="22" width="72" height="16" fill={DARK} opacity=".22" />
        <rect x="62" y="28" width="40" height="10" rx="3" fill="#b45309" />
        <circle cx="51" cy="27" r="4" fill="#78350f" />
        <rect x="47" y="31" width="9" height="8" rx="2" fill="#78350f" />
        {/* windshield and roof */}
        <path d="M30 22 H42 V38 H34 Z" fill="#bae6fd" />
        <path d="M30 12 H124 Q128 12 128 16 V22 H30 Q26 22 26 18 Q26 12 30 12 Z" fill={accent} />
        <path d="M34 14 H120" stroke="#fff" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="30" y="22" width="3" height="16" fill={accent} />
        <rect x="120" y="22" width="4" height="10" fill={accent} />
        {/* front mudguard, lamps, handlebar */}
        <path d="M10 58 Q22 44 36 58 Z" fill={NAVY} />
        <circle cx="25" cy="41" r="3.5" fill={LAMP} stroke={DARK} strokeWidth="1" />
        <path d="M30 30 H40" stroke={DARK} strokeWidth="2" strokeLinecap="round" />
        <rect x="121" y="44" width="5" height="4" rx="1.5" fill={TAIL} />
        <Wheel cx={22} cy={60} r={8} />
        <Wheel cx={96} cy={57} r={11} />
    </>
);

const Pickup = ({ body, accent, glass }) => (
    <>
        {/* cargo boxes and roll bar */}
        <rect x="76" y="20" width="22" height="14" rx="1.5" fill="#f59e0b" />
        <rect x="100" y="25" width="18" height="9" rx="1.5" fill="#fbbf24" />
        <path d="M68 30 V16 H124 V30" stroke={accent} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        {/* bed */}
        <path d="M66 34 H130 V56 H119 A13 13 0 0 0 93 56 H66 Z" fill={body} />
        <rect x="66" y="30" width="64" height="5" rx="1.5" fill={accent} />
        <path d="M70 44 H126" stroke="#fff" strokeOpacity=".3" />
        {/* cab with wheel arches */}
        <path d="M8 56 V44 Q8 40 14 39 L30 36 L42 22 H64 V56 H47 A13 13 0 0 0 21 56 H10 Q8 56 8 56 Z" fill={body} />
        <path d="M33 35 L44 25 H60 V35 Z" fill={glass} />
        <circle cx="53" cy="30" r="3" fill={accent} opacity=".55" />
        <path d="M44 23 H62" stroke="#fff" strokeOpacity=".55" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M62 24 V52" stroke={accent} strokeOpacity=".4" />
        <rect x="54" y="40" width="6" height="2" rx="1" fill={accent} opacity=".6" />
        <rect x="30" y="31" width="6" height="4" rx="1.5" fill={accent} />
        {/* bumpers and lamps */}
        <rect x="8" y="51" width="12" height="4" rx="2" fill={accent} />
        <rect x="9" y="43" width="8" height="4" rx="2" fill={LAMP} />
        <rect x="125" y="42" width="5" height="4" rx="1.5" fill={TAIL} />
        <Wheel cx={34} cy={57} r={11} />
        <Wheel cx={106} cy={57} r={11} />
    </>
);

const Truck = ({ body, accent, glass }) => (
    <>
        {/* exhaust stack and fuel tank */}
        <rect x="39" y="2" width="4" height="22" rx="2" fill="#94a3b8" />
        <rect x="44" y="59" width="22" height="7" rx="3" fill="#94a3b8" />
        {/* chassis */}
        <rect x="8" y="55" width="126" height="5" rx="2" fill={DARK} />
        {/* container: ribs, rear doors, location pin */}
        <rect x="44" y="6" width="90" height="50" rx="3" fill={body} />
        {[56, 68, 80, 92, 104, 116].map((x) => (
            <line key={x} x1={x} y1="10" x2={x} y2="52" stroke="#fff" strokeOpacity=".22" />
        ))}
        <rect x="130" y="6" width="4" height="50" rx="1.5" fill={NAVY} opacity=".4" />
        <circle cx="89" cy="30" r="8" fill="#fff" opacity=".92" />
        <circle cx="89" cy="30" r="3.2" fill="#1d4ed8" />
        {/* cab */}
        <path d="M6 58 V32 Q6 28 10 26 L18 14 H40 V58 Z" fill={accent} />
        <path d="M12 26 L19 18 H36 V30 H10 Z" fill={glass} />
        <path d="M10 40 H40" stroke="#fff" strokeOpacity=".4" />
        <rect x="3" y="24" width="4" height="8" rx="1.5" fill={DARK} />
        <rect x="6" y="52" width="10" height="4" rx="2" fill={DARK} />
        <rect x="7" y="45" width="6" height="5" rx="1.5" fill={LAMP} />
        <rect x="130" y="46" width="4" height="5" rx="1.5" fill={TAIL} />
        <Wheel cx={24} cy={58} r={10} />
        <Wheel cx={82} cy={58} r={10} />
        <Wheel cx={108} cy={58} r={10} />
    </>
);

const Bus = ({ body, accent, glass }) => (
    <>
        <rect x="6" y="10" width="128" height="48" rx="8" fill={body} />
        {/* roof AC unit and destination board */}
        <rect x="60" y="6" width="42" height="5" rx="2" fill="#94a3b8" />
        <rect x="12" y="11" width="18" height="4" rx="1.5" fill={DARK} />
        {/* windshield, side windows, passengers */}
        <rect x="10" y="16" width="20" height="22" rx="3" fill={glass} />
        {[36, 55, 74, 93, 112].map((x, i) => (
            <g key={x}>
                <rect x={x} y="16" width="15" height="16" rx="2.5" fill={glass} />
                {i % 2 === 0 && <circle cx={x + 7.5} cy="26" r="3.2" fill={accent} opacity=".5" />}
            </g>
        ))}
        {/* stripe, mirror, lamps */}
        <rect x="6" y="40" width="128" height="4" fill={accent} opacity=".8" />
        <path d="M12 12 H128" stroke="#fff" strokeOpacity=".4" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="3" y="22" width="4" height="9" rx="1.5" fill={DARK} />
        <rect x="7" y="47" width="6" height="5" rx="1.5" fill={LAMP} />
        <rect x="128" y="47" width="5" height="5" rx="1.5" fill={TAIL} />
        <Wheel cx={32} cy={58} r={10} />
        <Wheel cx={106} cy={58} r={10} />
    </>
);

const vehicles = { bike: Bike, car: Car, auto: Auto, pickup: Pickup, truck: Truck, bus: Bus };

/* ------------------------------ WRAPPER ------------------------------ */

export default function VehicleIcon({ type = "car", label }) {
    const key = vehicles[type] ? type : "car";
    const Vehicle = vehicles[key];
    const { body, accent } = colors[key];
    const bodyId = `body-${key}`;
    const glassId = `glass-${key}`;

    return (
        <svg viewBox="0 0 140 76" role="img" aria-label={label} className="h-full w-full">
            <defs>
                <linearGradient id={bodyId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor={body[0]} />
                    <stop offset="1" stopColor={body[1]} />
                </linearGradient>
                <linearGradient id={glassId} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#e0f2fe" />
                    <stop offset="1" stopColor="#7dd3fc" />
                </linearGradient>
            </defs>

            {/* ground shadow and moving road */}
            <ellipse cx="70" cy="69" rx="58" ry="3" fill={NAVY} opacity=".12" />
            <line className="road-line" x1="0" y1="72" x2="140" y2="72" stroke="#94a3b8" strokeWidth="2" strokeDasharray="10 8" />

            {/* flip so the vehicle faces right */}
            <g transform="translate(140 0) scale(-1 1)">
                <g className="vehicle-body">
                    <Vehicle body={`url(#${bodyId})`} accent={accent} glass={`url(#${glassId})`} />
                </g>
            </g>
        </svg>
    );
}