import { useState } from "react";
import { useLocation } from "react-router-dom";

interface MenuItem {
  id: string; // Unique identifier for the menu item
  name: string; // Display name of the menu item
  href: string; // URL or link for the menu item
  method?: string; // Optional HTTP method (e.g., GET, POST)
  children?: MenuItem[]; // Optional nested children for expandable items
}

interface MenuSection {
  title: string; // Title of the menu section
  items: MenuItem[]; // List of menu items in the section
}

interface MenuSectionsMapping {
  [key: string]: MenuSection[]; // Mapping of tab IDs to their respective menu sections
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
              href: "/api-reference/v1/fetch-document",
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
              href: "/api-reference/v1/archive-document",
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
        { id: "/overview", name: "Overview", href: "/overview", active: true },
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
          id: "/guides/embedded-components",
          name: "Embedded Components",
          href: "/guides/embedded-components",
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
};
interface AppUseSidebarProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useSidebar = ({ setIsMobileMenuOpen }: AppUseSidebarProps) => {
  const [selectedTab, setSelectedTab] = useState<"doc" | "api" | "comp">("doc");
  const [menuSections, setMenuSections] = useState<MenuSection[]>(
    menuSectionsMapping[selectedTab]
  );
  const location = useLocation();
  const currentPath: string = location.pathname;

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  // Toggle the expanded state of a parent item
  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleTabChange = (tabId: "doc" | "api" | "comp") => {
    console.log("🚀 ~ handleTabChange ~ tabId:", tabId);
    setSelectedTab(tabId);
    setMenuSections(menuSectionsMapping[tabId]);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return {
    closeMobileMenu,
    menuSections,
    toggleExpand,
    expandedItems,
    currentPath,
    handleTabChange,
  };
};

export default useSidebar;
