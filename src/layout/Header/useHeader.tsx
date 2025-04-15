const useHeader = () => {
  interface MenuItem {
    id: "doc" | "api" | "comp"; // Unique identifier for the menu item
    name: string; // Label for the menu item
    href: string; // URL or link for the menu item
  }
  const MenuData: MenuItem[] = [
    {
      id: "doc",
      name: "Documentation",
      href: "/overview",
    },
    {
      id: "api",
      name: "API Reference",
      href: "/overview",
    },
    {
      id: "comp",
      name: "Embadded Components",
      href: "/embadded/components",
    },
  ];

  return { MenuData };
};

export default useHeader;
