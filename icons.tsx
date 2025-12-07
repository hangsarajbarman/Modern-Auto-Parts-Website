import React from 'react';

// Helper for icon wrapper
interface IconWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

const IconWrapper = ({ children, className = "w-full h-full" }: IconWrapperProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    {children}
  </svg>
);

export const IconCalendarCheck = () => (
  <IconWrapper>
    <rect x="10" y="14" width="44" height="40" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M18 10V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M46 10V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 24H54" stroke="currentColor" strokeWidth="2"/>
    <path d="M26 38L30 42L40 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
);

export const IconSprayGun = () => (
  <IconWrapper>
    <path d="M12 44H24V54H12z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 30H22V44H14z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 30L30 16L48 34" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M52 30L58 24M54 36L60 34M50 26L54 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </IconWrapper>
);

export const IconHomeCar = () => (
  <IconWrapper>
    <path d="M32 8L8 26V56H56V26L32 8Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 56V36H44V56" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="46" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
  </IconWrapper>
);

export const IconAcSnowflake = () => (
  <IconWrapper>
    <rect x="8" y="20" width="48" height="32" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 28H50" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 34H50" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 14V46" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </IconWrapper>
);

export const IconCarWash = () => (
  <IconWrapper>
    <path d="M12 40C12 40 16 34 24 34C32 34 36 40 36 40" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M46 20H54V46H46z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M50 14V20" stroke="currentColor" strokeWidth="2"/>
    <circle cx="20" cy="46" r="8" fill="currentColor" fillOpacity="0.2"/>
  </IconWrapper>
);

export const IconCarShiny = () => (
  <IconWrapper>
    <path d="M8 36H56V48H8z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 36L20 16H44L52 36" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M18 10L24 4M40 4L46 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </IconWrapper>
);

export const IconBatteryBolt = () => (
  <IconWrapper>
    <rect x="12" y="20" width="40" height="32" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 20V14H26V20" stroke="currentColor" strokeWidth="2"/>
    <path d="M38 20V14H44V20" stroke="currentColor" strokeWidth="2"/>
    <path d="M36 28L26 36H32L30 44L40 34H34L36 28Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </IconWrapper>
);

export const IconWiper = () => (
  <IconWrapper>
    <path d="M10 46C10 46 20 16 32 16C44 16 54 46 54 46" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 46V28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M16 28L48 28" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
  </IconWrapper>
);

export const IconTowTruck = () => (
  <IconWrapper>
    <path d="M8 38H40V50H8z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M40 30H50L56 40V50H40V30z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="50" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="48" cy="50" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M14 38L32 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 14L32 22" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 14L40 22" stroke="currentColor" strokeWidth="2"/>
  </IconWrapper>
);

// Common UI Icons
export const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

export const IconShoppingCart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
);

export const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

export const IconTrash = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
);

export const IconCar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path><circle cx="6.5" cy="16.5" r="2.5"></circle><circle cx="16.5" cy="16.5" r="2.5"></circle></svg>
);

export const IconCheck = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

export const IconRobot = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>
);

export const IconSend = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);

export const IconChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

export const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

export const IconCalendarMini = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

export const IconZap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);

export const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

export const IconStarFilled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

export const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

export const IconChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);

export const IconRupee = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="M6 13l8.5 10"/><path d="M6 13h3"/><path d="M9 13c6.627 0 12-5.373 12-12"/></svg>
);

export const IconHomeFilled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
);

export const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

export const IconAlertCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
);

export const IconShieldCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

export const IconCheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

export const IconLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

export const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

export const IconQuote = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
);

export const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

export const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export const IconTwitter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

export const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

export const getIcon = (name: string) => {
  switch (name) {
    case 'calendar_check': return <IconCalendarCheck />;
    case 'spray_gun': return <IconSprayGun />;
    case 'home_car': return <IconHomeCar />;
    case 'ac_snowflake': return <IconAcSnowflake />;
    case 'car_wash': return <IconCarWash />;
    case 'car_shiny': return <IconCarShiny />;
    case 'battery_bolt': return <IconBatteryBolt />;
    case 'wiper': return <IconWiper />;
    case 'tow_truck': return <IconTowTruck />;
    default: return <IconCalendarCheck />;
  }
};