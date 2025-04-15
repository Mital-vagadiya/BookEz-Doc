// src/routes.ts
import { CommonLayout } from "../layout";
import { AccountingOverview, EmbaddedComp, HowItWorks, InitialSetup } from "../pages";

// Define route interface
export interface AppRoute {
  title: string;
  element: React.FC;
  path: string;
  children?: AppRoute[]
}

// Route list
export const AppRoutes: AppRoute[] = [{
  title: "DashBoard",
  path: "/",
  element: CommonLayout,
  children: [
    {
      title: "Overview",
      path: "overview", // /dashboard
      element: AccountingOverview,
    },
    {
      title: 'How It Works',
      path: 'guides/how-it-works', // /guides/how-it-works
      element: HowItWorks,
    },
    {
      title: "Initial Setup",
      path: "guides/initial-setup", // /setup
      element: InitialSetup,
    },
    {
      title: 'Embedded Components',
      path: 'guides/embedded-components', // /guides/how-it-works
      element: EmbaddedComp,
    }
  ]
}
];
