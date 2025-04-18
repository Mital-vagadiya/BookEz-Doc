import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuItem {
  id: string;
  name: string;
  href: string;
  method?: string;
  children?: MenuItem[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuSectionsMapping {
  [key: string]: MenuSection[];
}

const menuSectionsMapping: MenuSectionsMapping = {
  api: [
    {
      title: "Businesses",
      items: [
        {
          id: "business",
          name: "Business",
          href: "/business",
          children: [
            {
              id: "fetch-document",
              name: "Fetch Document",
              href: "/api-reference/v1/list-businesses",
              method: "GET",
            },
            {
              id: "archive-document",
              name: "Archive Document",
              href: "/api-reference/v1/archive-document",
              method: "POST",
            },
          ],
        },
        {
          id: "financial-accounts",
          name: "Financial Accounts",
          href: "/financial-accounts",
        },
        {
          id: "documents",
          name: "Documents",
          href: "#",
          children: [
            {
              id: "fetch-document",
              name: "Fetch Document",
              href: "/api-reference/v1/fetch-document",
              method: "GET",
            },
            {
              id: "archive-document",
              name: "Archive Document",
              href: "/api-reference/v1/archive-document1",
              method: "POST",
            },
          ],
        },
        {
          id: "scoped-authentication",
          name: "Scoped Authentication",
          href: "/scoped-authentication",
        },
        { id: "configuration", name: "Configuration", href: "/configuration" },
        {
          id: "tasks-notifications",
          name: "Tasks & Notifications",
          href: "/tasks-notifications",
        },
      ],
    },
    {
      title: "Financial Activity",
      items: [
        {
          id: "accounts-receivable",
          name: "Accounts Receivable",
          href: "/accounts-receivable",
        },
        {
          id: "accounts-payable",
          name: "Accounts Payable",
          href: "/accounts-payable",
        },
        {
          id: "bank-transactions",
          name: "Bank Transactions",
          href: "/bank-transactions",
        },
        {
          id: "general-ledger",
          name: "General Ledger",
          href: "/general-ledger",
        },
        { id: "tags", name: "Tags", href: "/tags" },
      ],
    },
    {
      title: "Accounting Reports",
      items: [
        { id: "profit-loss", name: "Profit and Loss", href: "/profit-loss" },
        { id: "balance-sheet", name: "Balance Sheet", href: "/balance-sheet" },
        {
          id: "cash-flow-statement",
          name: "Cash Flow Statement",
          href: "/cash-flow-statement",
        },
      ],
    },
    {
      title: "Platform Configuration",
      items: [
        { id: "plaid", name: "Plaid", href: "/plaid" },
        { id: "sms", name: "SMS", href: "/sms" },
      ],
    },
    {
      title: "Activity Metrics",
      items: [
        {
          id: "platform-wide-activity",
          name: "Platform wide activity",
          href: "/platform-wide-activity",
        },
        {
          id: "business-activity",
          name: "Business Activity",
          href: "/business-activity",
        },
      ],
    },
  ],
  doc: [
    {
      title: "Get Started",
      items: [
        { id: "/overview", name: "Overview", href: "/overview" },
        {
          id: "/guides/how-it-works",
          name: "How It Works",
          href: "/guides/how-it-works",
        },
        {
          id: "/guides/initial-setup",
          name: "Initial Setup",
          href: "/guides/initial-setup",
        },
        {
          id: "/embedded-components/guides",
          name: "Embedded Components",
          href: "/embedded-components/guides",
        },
        {
          id: "/guides/business-onboarding",
          name: "Onboarding a Business",
          href: "/guides/business-onboarding",
        },
      ],
    },
    {
      title: "Importing Financial Activity",
      items: [
        {
          id: "/guides/importing-data-overview",
          name: "Overview",
          href: "/guides/importing-data-overview",
        },
        {
          id: "/guides/importing-invoices",
          name: "Invoices and Payments",
          href: "/guides/importing-invoices",
        },
        {
          id: "/guides/importing-bank-transactions-plaid",
          name: "Bank Transactions - Plaid",
          href: "/guides/importing-bank-transactions-plaid",
        },
        {
          id: "/guides/importing-bank-transactions-direct",
          name: "Bank Transactions - Direct",
          href: "/guides/importing-bank-transactions-direct",
        },
      ],
    },
    {
      title: "Offering Accounting",
      items: [
        {
          id: "/guides/offering-accounting-overview",
          name: "Overview",
          href: "/guides/offering-accounting-overview",
        },
        {
          id: "/guides/transaction-categorization",
          name: "Transaction Categorization",
          href: "/guides/transaction-categorization",
        },
        {
          id: "/guides/reporting",
          name: "Accounting Reports",
          href: "/guides/reporting",
        },
      ],
    },
    {
      title: "API Details",
      items: [
        {
          id: "/api-details/json-data",
          name: "JSON Data",
          href: "/api-details/json-data",
        },
        {
          id: "/api-details/idempotency",
          name: "Idempotency",
          href: "/api-details/idempotency",
        },
        {
          id: "/api-details/pagination",
          name: "Pagination",
          href: "/api-details/pagination",
        },
        {
          id: "/api-details/rate-limiting",
          name: "Rate Limiting",
          href: "/api-details/rate-limiting",
        },
      ],
    },
  ],
  comp: [
    {
      title: "Components",
      items: [
        { id: "button", name: "Button", href: "/components/button" },
        { id: "form", name: "Form", href: "/components/form" },
      ],
    },
  ],
};

interface SidebarContextType {
  menuSections: MenuSection[];
  expandedItems: Record<string, boolean>;
  toggleExpand: (id: string) => void;
  currentPath: string;
  closeMobileMenu: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{
  children: React.ReactNode;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ children, setIsMobileMenuOpen }) => {
  const [menuSections, setMenuSections] = useState<MenuSection[]>(
    menuSectionsMapping["doc"]
  );
  const location = useLocation();
  const currentPath: string = location.pathname;

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    const pathSegments = currentPath.split("/");
    switch (pathSegments[1]) {
      case "overview":
        setMenuSections(menuSectionsMapping["doc"]);
        break;

      case "api-reference":
        setMenuSections(menuSectionsMapping["api"]);
        break;

      case "embedded-components":
        setMenuSections(menuSectionsMapping["comp"]);
        break;
    }

    // Automatically expand parent items with active children
    const idsToExpand = new Set<string>();
    
    // Improved path matching logic
    Object.values(menuSectionsMapping).forEach(sections => {
      sections.forEach(section => {
        section.items.forEach(item => {
          // Check if the current path starts with the item's href (for parent routes)
          // But don't expand for very short hrefs like "/" or "#" to prevent over-expansion
          if (item.href !== "/" && item.href !== "#" && currentPath.startsWith(item.href) && item.children?.length) {
            idsToExpand.add(item.id);
          }
          
          // Check if current path matches or starts with any child's href
          item.children?.forEach(child => {
            if (currentPath === child.href || currentPath.startsWith(child.href)) {
              idsToExpand.add(item.id);
            }
          });
        });
      });
    });
  
    // Update expanded items state
    setExpandedItems(prev => ({
      ...prev,
      ...Object.fromEntries([...idsToExpand].map(id => [id, true]))
    }));
    
  }, [currentPath]);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const value = {
    menuSections,
    expandedItems,
    toggleExpand,
    currentPath,
    closeMobileMenu,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
