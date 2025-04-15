import DocLayout from "../../layout/DocLayout/DocLayout";
import AnchorHeading from "../../components/AnchorHeading/AnchorHeading";
import CodeBlock from "../../components/CodeBlock/Codeblock";
import { Request, Response } from "./Request";
import { codeToCopy, codeToCopyResponse } from "./helpers";

const HowItWorks = () => {
  const tocItems = [
    { id: "workflow", title: "Workflow" },
    {
      id: "displaying-accounting-interfaces",
      title: "Displaying accounting interfaces",
    },
    {
      id: "use-cases",
      title: "Use Cases",
      children: [
        { id: "core-accounting", title: "Core Accounting" },
        { id: "advanced-accounting", title: "Advanced Accounting" },
        { id: "full-service-bookkeeping", title: "Full Service Bookkeeping" },
      ],
    },
  ];

  return (
    <DocLayout
      title="How It Works"
      subTitle="Overview"
      subText="The Embedded Accounting Integration Process"
      tocItems={tocItems}
      pagination={{
        prev: { href: "/overview", label: "Overview" },
        next: { href: "/guides/initial-setup", label: "Initial Setup" },
      }}
    >
      <div className="prose">
        <AnchorHeading id="workflow" level={2} title="Workflow" />
        <p>
          With Layer, you can provide a complete accounting and bookkeeping
          experience to your SMB customers, directly within your platform. The
          process for offering accounting using Layer has four broad steps:
        </p>
        <ol className="list-decimal">
          <li>
            <strong>Set up your Platform account and API access</strong> - Reach
            out to Layer to set up a <code>Platform</code> for your business and
            obtain your API credentials. During this process, Layer team will
            configure your <code>Platform</code> chart of accounts and enable
            any data integrations needed for your use case.
          </li>
          <li>
            <strong>Onboard your SMB customers to Layer</strong> - In order to
            offer accounting features to one of your SMBs, they must first be
            onboarded to Layer. This is done by creating a <code>Business</code>
            . When a <code>Business</code> is created, they also receive an
            associated <code>General Ledger</code> where all of their accounting
            data will be stored. For more info see{" "}
            <a href="/guides/business-onboarding">Onboarding a Business</a>.
          </li>
          <li>
            <strong>Import SMB Financial Activity</strong> - Start passing the
            financial activity data of your SMBs to Layer via the Layer API.
            This is how your SMBs’ financial data will be displayed within
            Layer’s Embedded Accounting views. For more info see{" "}
            <a href="/guides/importing-data-overview">
              Importing Financial Activity
            </a>
          </li>
          <li>
            <strong>Display accounting interfaces in your product</strong> -
            Once you are passing SMB Financial Activity to Layer, you can begin
            offering embedded accounting and bookkeeping features within the
            product. The exact set of accounting interfaces you use will depend
            on your use case and can range from a screen to connect bank
            accounts to a profit and loss report. For more info see{" "}
            <a href="/guides/offering-accounting-overview">
              Offering Accounting
            </a>
            .
          </li>
        </ol>

        <AnchorHeading
          id="displaying-accounting-interfaces"
          level={2}
          title="Displaying accounting interfaces"
        />
        <p>
          There are two ways to surface accounting features within your product
          using Layer.
        </p>
        <ul>
          <li>
            <strong>Embedded Components</strong> - Layer provides a suite of
            pre-built React UI components you can use directly within your
            frontend. For more information see{" "}
            <a href="/guides/embedded-components">Embedded Components</a>.
          </li>
          <li>
            <strong>API</strong> - Build your own accounting UIs directly on top
            of the Layer API for full control of your customer’s accounting
            experience.
          </li>
        </ul>

        <AnchorHeading id="use-cases" level={2} title="Use Cases" />
        <p>
          Using Layer, you can offer anything from a simple cashflow
          visualization tool to your customers, all the way to a complete
          monthly bookkeeping service. The right set of accounting features will
          depend on your platform and your SMB customers. Your Layer point of
          contact can provide guidance on which accounting package is right for
          your platform. Below are some example accounting packages.
        </p>

        <AnchorHeading id="core-accounting" level={3} title="Core Accounting" />
        <p>
          This package offers simple cash-based accounting features to track
          business profitability and prepare for taxes. SMBs can import their
          revenue and bank account data, categorize/reconcile transactions,
          upload receipts, and generate easy-to-understand profitability
          reports.
        </p>

        <AnchorHeading
          id="advanced-accounting"
          level={3}
          title="Advanced Accounting"
        />
        <p>
          This package offers a more comprehensive accounting experience
          designed for SMBs looking for deeper accounting functionality. This
          package supports both cash and accrual basis accounting as well as
          more complex reports such as the Balance Sheet and Cash Flow
          statement. SMBs can directly manage the general ledger in this
          package.
        </p>

        <AnchorHeading
          id="full-service-bookkeeping"
          level={3}
          title="Full Service Bookkeeping"
        />
        <p>
          Some SMBs want professional help managing their accounting. For these
          businesses, Layer provides a full bookkeeping service that handles
          organizing your customers' transactions and closing their books each
          month. All your SMBs need to do is respond to questions about their
          business activity and Layer’s bookkeeping team handles the rest. To
          learn more about Full Service Bookkeeping, reach out to your Layer
          contact.
        </p>
      </div>

      <CodeBlock code={codeToCopy} type="Request">
        <Request />
      </CodeBlock>
      {/* <CodeBlock code={codeToCopyResponse} type="Response">
        <Response />
      </CodeBlock> */}
    </DocLayout>
  );
};

export default HowItWorks;
