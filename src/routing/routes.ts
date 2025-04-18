// src/routes.ts
import { CommonLayout } from "../layout";
import { AccountingOverview, EmbaddedComp, HowItWorks, InitialSetup } from "../pages";
import BusinessListDoc from "../pages/ApiDocPage/BusinessListDoc";

// Define route interface
export interface AppRoute {
  title: string;
  element: React.FC;
  path: string;
  children?: AppRoute[];
  index?: boolean;
}

// Route list
export const AppRoutes: AppRoute[] = [{
  title: "DashBoard",
  path: "/",
  element: CommonLayout,
  children: [
    {
      title: "Overview",
      path: "overview",
      element: AccountingOverview,
    },
    {
      title: 'How It Works',
      path: 'guides/how-it-works',
      element: HowItWorks,
    },
    {
      title: "Initial Setup",
      path: "guides/initial-setup",
      element: InitialSetup,
    },
    {
      title: 'Embedded Components',
      path: 'embedded-components/guides',
      element: EmbaddedComp,
    },
    {
      title: 'API Reference',
      path: 'api-reference/v1/list-businesses',
      element: BusinessListDoc,
    },
    {
      title: 'API Reference',
      path: 'api-reference/v1/archive-document',
      element: AccountingOverview,
    }
  ]
}
];
