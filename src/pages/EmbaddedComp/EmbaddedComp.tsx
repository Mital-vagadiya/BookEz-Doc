import DocLayout from "../../layout/DocLayout/DocLayout";
import AnchorHeading from "../../components/AnchorHeading/AnchorHeading";

const EmbaddedComp = () => {
  const tocItems = [
    { id: "react-setup", title: "React Setup" },
    { id: "react-setup", title: "React Setup" },
    {
      id: "backend-setup",
      title: "Backend Setup",
    },
  ];

  return (
    <DocLayout
      title="Get Started"
      subTitle="Embedded Components"
      subText="Using Layer’s prebuilt React UI components."
      tocItems={tocItems}
      pagination={{
        prev: { href: "/overview", label: "Overview" },
        next: { href: "/guides/initial-setup", label: "Initial Setup" },
      }}
    >
      <div className="prose">
        <p>
          Layer publishes pre-built UI components to npm that can be dropped
          into any existing React app. These components handle all integration
          with Layer’s API with the exception of authentication, which must be
          done on your backend to avoid exposing credentials in your client-side
          apps. See the Embedded Components section for a full list of
          components and pre-built Layouts.
        </p>

        <AnchorHeading
          id="displaying-accounting-interfaces"
          level={2}
          title="React Setup"
        />
      </div>
    </DocLayout>
  );
};

export default EmbaddedComp;
