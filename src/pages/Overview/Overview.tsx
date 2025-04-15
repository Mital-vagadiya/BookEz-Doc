import AnchorHeading from "../../components/AnchorHeading/AnchorHeading";
import DocLayout from "../../layout/DocLayout/DocLayout";

const Overview = () => {
  const tocItems = [
    { id: "api-environments", title: "API Environments" },
    { id: "getting-an-api-key", title: "Getting an API key" },
    { id: "getting-started", title: "Getting started" },
  ];

  return (
    <>
      <DocLayout
        title="Get Started"
        subTitle="Overview"
        subText="The Embedded Accounting Integration Process"
        tocItems={tocItems}
        pagination={{
          next: { href: "/guides/how-it-works", label: "How It Works" },
        }}
      >
        <div className="prose">
          <p>
            The Layer API provides access to Layer’s embeddable accounting
            software. Using the API, you can seamlessly pass your customers’
            financial data into Layer’s accounting software and surface a
            complete SMB accounting product within your platform.
          </p>
          <AnchorHeading
            id="api-environments"
            level={2}
            title="API Environments"
          />
          <p>The Layer API has two environments:</p>
          <ul>
            <li>
              <strong>Sandbox:</strong> <code>sandbox.layerfi.com</code> - Test
              environment for building your integration with Layer.
            </li>
            <li>
              <strong>Production:</strong> <code>api.layerfi.com</code> -
              Production environment for live usage with your SMB customers.
            </li>
          </ul>
          <AnchorHeading
            id="getting-an-api-key"
            level={2}
            title="Getting an API key"
          />
          <p>
            The first step to getting started is to contact us to obtain an API
            key. We will first send you a sandbox API key to use during
            development. Once you feel ready to go live and we review your
            integration, we’ll provide your production API key.
          </p>
          <p>
            To obtain your API key and get started, reach out to our team{" "}
            <a
              href="https://layerfi.com/#contact-sale"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
          <AnchorHeading
            id="getting-started"
            level={2}
            title="Getting started"
          />
          <p>
            If you’re just getting started, read about authenticating to our API
            and then check out our guides.
          </p>
        </div>
      </DocLayout>
    </>
  );
};

export default Overview;
