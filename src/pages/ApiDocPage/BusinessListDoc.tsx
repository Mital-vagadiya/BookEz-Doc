// BusinessListDoc.jsx
import ListOfBusinessRequestBlock from "../../components/ApiSidebarBlock/ListOfBusinessRequestBlock";
import ListOfBusinessResponseBlock from "../../components/ApiSidebarBlock/ListOfBusinessResponseBlock";
import ResponseCodeBlock from "../../components/CodeBlock/ResponseCodeBlock";
import DocLayout from "../../layout/DocLayout/DocLayout";

const apiResponse = `[
  {
    "id": "3c98c3cc-8d44-4b50-8888-8dd25736052a",
    "type": "Business",
    "externalId": "test-acme-id",
    "legalName": "ACME LLC",
    "entityType": "SOLE_PROP",
    "phoneNumber": "+16584651359",
    "naicsCode": "484110",
    "plaidItems": [
      {
        "accessToken": "access-sandbox-a67d0be8-abcd-1234-",
        "institution": {
          "id": "ins_1",
          "name": "Bank of America",
          "logo": "iVBORw0KGoAAAANSUhEUgAAAJgAAACYCAMAAAA"
        },
        "itemId": "V3jv0Ny9xbroJVaRnm6o1AqWv5QzsTrNyLdL",
        "syncTransactions": true
      }
    ]
  }
]`;

const BusinessListDoc = () => {
  return (
    <DocLayout
      title="Business"
      subTitle="List businesses"
      subText=" Returns a list of all active businesses that have been registered in
            Layer."
      requestBlock={<ListOfBusinessRequestBlock />}
      responseBlock={<ResponseCodeBlock language="json" text={apiResponse} />}
    >
      <div className=" text-gray-800 font-sans">
        {/* Section: Title and Description */}
        <div>
          {/* GET Method */}
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-md inline-block font-mono text-sm mb-8">
            <span className="font-bold">GET</span> /v1/businesses
          </div>
        </div>
        {/* Section: Authorizations */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Authorizations</h2>
          <div className="mb-2">
            <span className="text-green-600 font-mono">Authorization</span>{" "}
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded font-mono text-sm">
              string
            </span>{" "}
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded font-mono text-sm">
              header
            </span>{" "}
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-mono text-sm">
              required
            </span>
          </div>
          <p className="text-gray-600 text-sm">
            Bearer authentication header of the form{" "}
            <code className="bg-gray-100 text-black px-1 rounded font-mono">
              Bearer &lt;token&gt;
            </code>
            , where <code className="font-mono">&lt;token&gt;</code> is your
            auth token.
          </p>
        </div>

        {/* Section: Request Parameters */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Query Parameters</h2>
          <table className="w-full text-sm border border-gray-200 rounded overflow-hidden">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="py-2 px-3 border-b">Name</th>
                <th className="py-2 px-3 border-b">Type</th>
                <th className="py-2 px-3 border-b">Required</th>
                <th className="py-2 px-3 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-3 font-mono">page</td>
                <td className="py-2 px-3">integer</td>
                <td className="py-2 px-3 text-gray-500">No</td>
                <td className="py-2 px-3">Page number for pagination</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-3 font-mono">limit</td>
                <td className="py-2 px-3">integer</td>
                <td className="py-2 px-3 text-gray-500">No</td>
                <td className="py-2 px-3">Number of results per page</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Section: Request Example */}
        <div className="mb-10 xl:hidden">
          <ListOfBusinessRequestBlock />
        </div>

        {/* Section: Response Fields */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Response Fields</h2>
          <table className="w-full text-sm border border-gray-200 rounded overflow-hidden">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="py-2 px-3 border-b">Field</th>
                <th className="py-2 px-3 border-b">Type</th>
                <th className="py-2 px-3 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-3 font-mono">id</td>
                <td className="py-2 px-3">string</td>
                <td className="py-2 px-3">Unique identifier of the business</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-3 font-mono">legalName</td>
                <td className="py-2 px-3">string</td>
                <td className="py-2 px-3">Registered legal name</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-3 font-mono">entityType</td>
                <td className="py-2 px-3">string</td>
                <td className="py-2 px-3">
                  Business structure (e.g., SOLE_PROP)
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-3 font-mono">phoneNumber</td>
                <td className="py-2 px-3">string</td>
                <td className="py-2 px-3">Contact phone number</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-3 font-mono">plaidItems</td>
                <td className="py-2 px-3">array</td>
                <td className="py-2 px-3">
                  Linked financial institutions and tokens
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: Response Example */}
        <div className="mb-10 xl:hidden">
          <ResponseCodeBlock language="json" text={apiResponse} />
        </div>
      </div>
    </DocLayout>
  );
};

export default BusinessListDoc;
