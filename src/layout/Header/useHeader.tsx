const useHeader = () => {
  interface MenuItem {
    id: "guides" | "api-reference" | "embedded-components"; // Unique identifier for the menu item
    name: string; // Label for the menu item
    href: string; // URL or link for the menu item
  }
  const MenuData: MenuItem[] = [
    {
      id: "guides",
      name: "Documentation",
      href: "/overview",
    },
    {
      id: "api-reference",
      name: "API Reference",
      href: "/api-reference/v1/list-businesses",
    },
    {
      id: "embedded-components",
      name: "Embadded Components",
      href: "/embedded-components/guides",
    },
  ];

  return { MenuData };
};

export default useHeader;
