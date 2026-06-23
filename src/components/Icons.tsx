import * as React from "react";
import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

// ================= QUICK ACTIONS =================
export const IconPreApprove = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="10" cy="8" r="4" />
    <path d="M10 14c-4.418 0-8 2.5-8 5v1h11" />
    <path d="M19 14v6" />
    <path d="M16 17h6" />
  </svg>
);

export const IconPayments = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <rect x="8" y="7" width="8" height="10" rx="1" />
    <path d="M11 10h2" />
    <path d="M11 14h2" />
    <path d="M12 10v4" />
  </svg>
);

export const IconHelpdesk = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="10" cy="8" r="3" />
    <path d="M10 13c-3 0-5 2-5 4v1h6" />
    <path d="M16 12l-2 2 4 4 2-2-4-4z" />
    <path d="M19 15l2 2" />
  </svg>
);

export const IconPosts = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 10h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1l-3 3v-3h-3a2 2 0 0 1-2-2v-1" />
    <path d="M14 10V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v3l3-3h1" />
  </svg>
);

export const IconSecurity = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 10v2a6 6 0 0 0 12 0v-2" />
    <path d="M5 10c0-2 2-6 7-6s7 4 7 6" />
    <path d="M4 10h16" />
    <path d="M10 14v2M14 14v2" />
    <path d="M8 18h8" />
  </svg>
);

export const IconDirectory = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <circle cx="12" cy="10" r="2.5" />
    <path d="M8 17c0-2.2 1.8-3 4-3s4 .8 4 3" />
  </svg>
);

export const IconViewMore = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

// ================= CATEGORIES (Buy & Sell) =================
export const IconFurniture = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 10v6h16v-6" />
    <path d="M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
    <path d="M4 16v3M20 16v3M4 10h2v6H4zM18 10h2v6h-2z" />
  </svg>
);

export const IconFood = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 17h14v2H5z" />
    <path d="M7 17l1-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2l1 6" />
    <path d="M12 9V5M12 5l-1 2M12 5l1 2" />
  </svg>
);

export const IconServices = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="6" width="12" height="12" rx="2" />
    <circle cx="10" cy="10" r="2" />
    <path d="M6 16c0-1.5 1.5-2.5 4-2.5s4 1 4 2.5" />
    <path d="M16 14h4v4h-4z" />
  </svg>
);

export const IconHomeDecor = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="6" y="5" width="12" height="15" rx="3" />
    <path d="M12 2v3M10 2h4" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconElectronics = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="4" width="14" height="16" rx="2" />
    <circle cx="12" cy="13" r="4" />
    <path d="M8 7h2M14 7h2" />
  </svg>
);

export const IconVehicles = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 16h14a2 2 0 0 0 2-2v-3l-2.5-4h-9L5 11v3a2 2 0 0 0 2 2z" />
    <circle cx="7.5" cy="16" r="1.5" />
    <circle cx="16.5" cy="16" r="1.5" />
    <path d="M6 11h12" />
  </svg>
);

export const IconKids = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 18s4 2 8 2 8-2 8-2" />
    <path d="M6 15l2-6s1-2 3-2h3" />
    <path d="M14 7h2l1 3" />
    <path d="M9 15v3M15 15v3M6 15h12" />
  </svg>
);

export const IconOthers = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="12" height="16" rx="2" />
    <path d="M8 8h4M8 12h4M8 16h4" />
    <path d="M18 6l2 2-8 8H10v-2l8-8z" />
  </svg>
);

// ================= BOTTOM NAV =================
export const IconNavSocial = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <path d="M14 14h7v7h-7z" fill="currentColor" />
  </svg>
);

export const IconNavBuySell = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 10l8-7 8 7v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10z" />
    <circle cx="12" cy="14" r="3" />
    <path d="M14.5 16.5L17 19" />
  </svg>
);

export const IconNavCommunity = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="3" />
    <path d="M12 13c-3.5 0-6 2.5-6 5v1h12v-1c0-2.5-2.5-5-6-5z" />
    <circle cx="6" cy="10" r="2" />
    <path d="M4 15c-1.5 0-3 1-3 2v1h4" />
    <circle cx="18" cy="10" r="2" />
    <path d="M20 15c1.5 0 3 1 3 2v1h-4" />
  </svg>
);

export const IconNavServices = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export const IconNavDevices = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <path d="M12 18h.01M9 10h6M9 14h6" />
  </svg>
);

// ================= COMMUNITY SCREEN =================
export const IconDocuments = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
    <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
  </svg>
);

export const IconCarHelp = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 16h14a2 2 0 0 0 2-2v-3l-2.5-4h-9L5 11v3a2 2 0 0 0 2 2z" />
    <circle cx="7.5" cy="16" r="1.5" />
    <circle cx="16.5" cy="16" r="1.5" />
    <path d="M6 11h12" />
    {/* Question mark bubble */}
    <circle cx="18" cy="6" r="5" fill="white" />
    <path d="M17 5c0-.6.4-1 1-1s1 .4 1 1-.5 1.5-1 1.5v.5M18 9v.01" />
  </svg>
);

export const IconChat = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// ================= SERVICES SCREEN =================
export const IconShoppingCart = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export const IconClipboard = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M9 14h6M9 10h6" />
  </svg>
);

export const IconPackers = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="M3.27 6.96L12 12.01l8.73-5.05" />
    <path d="M12 22.08V12" />
  </svg>
);

export const IconTaxi = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H12c-.6 0-1.2.3-1.6.8L8 10s-2.7.6-4.5 1.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
    <path d="M10 7V4h4v3" />
    <path d="M14 10h5M5 10h5" />
  </svg>
);

export const IconProperty = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 13a4 4 0 0 0 8 0V7.5L14 4l-4 3.5V13z" />
    <path d="M14 13v-3" />
    <path d="M4 17h16c1.1 0 2 .9 2 2s-.9 2-2 2H4c-1.1 0-2-.9-2-2s.9-2 2-2z" />
  </svg>
);

// ================= SETTINGS SCREEN =================
export const IconBackArrow = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export const IconHelpCircle = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" />
  </svg>
);

export const IconQRCode = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    {/* Top Left */}
    <path d="M4 4h6v6H4V4zm2 2v2h2V6H6z" />
    {/* Top Right */}
    <path d="M14 4h6v6h-6V4zm2 2v2h2V6h-2z" />
    {/* Bottom Left */}
    <path d="M4 14h6v6H4v-6zm2 2v2h2v-2H6z" />
    {/* Assorted Middle Blocks */}
    <rect x="14" y="14" width="2" height="2" />
    <rect x="18" y="14" width="2" height="2" />
    <rect x="14" y="18" width="2" height="2" />
    <rect x="18" y="18" width="2" height="2" />
    <rect x="16" y="16" width="2" height="2" />
    <rect x="11" y="4" width="2" height="2" />
    <rect x="11" y="8" width="2" height="2" />
    <rect x="11" y="14" width="2" height="2" />
    <rect x="11" y="18" width="2" height="2" />
    <rect x="4" y="11" width="2" height="2" />
    <rect x="8" y="11" width="2" height="2" />
    <rect x="14" y="11" width="2" height="2" />
    <rect x="18" y="11" width="2" height="2" />
  </svg>
);

export const IconPaw = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
    <path d="M6 10c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    <path d="M18 10c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    <path d="M9 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    <path d="M15 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

export const IconBell = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const IconRadioWaves = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
  </svg>
);

export const IconFeed = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="8" y="8" width="8" height="4" rx="1" />
    <path d="M8 16h8" />
  </svg>
);

export const IconBox = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="M3.27 6.96L12 12.01l8.73-5.05" />
    <path d="M12 22.08V12" />
  </svg>
);

export const IconCrown = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
  </svg>
);

export const IconHouse = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const IconShareArrow = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 3h6v6M9 21v-4c0-3.3 2.7-6 6-6h6" />
    <path d="M15 8l6-5" />
  </svg>
);

export const IconPerson = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 0 0-16 0" />
  </svg>
);

export const IconLogout = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
  </svg>
);
