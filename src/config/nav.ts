export type NavItem = { href: string; label: string };

export const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" }, // консультация + подготовка клиента
  { href: "/process", label: "Process" }, // как это работает
  { href: "/compliance", label: "Compliance" }, // AML/KYC
  { href: "/partners", label: "Partners" }, // банки, нотариусы, юристы
  { href: "/contact", label: "Contact" }, // форма + офисы
];
