import {  CopyBlock, xt256 } from 'react-code-blocks';

const ListOfBusinessResponseBlock = () => {

  const responseJson = `[
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
  // Custom CSS for the component
  const customCodeBlockStyle = {
    height: 'auto',
    maxHeight: '500px',
    overflow: 'auto',
    borderRadius: '0',
    margin: '0',
    fontSize: '0.875rem',
};

  return (
    <div className="rounded-lg overflow-hidden bg-gray-900 shadow-lg" >
      {/* Response Header */}
      <div className="flex items-center border-b border-gray-700 px-4 py-2">
        <span className="text-green-400 font-mono text-sm">200</span>
      </div>

      {/* Response Content with custom class for scrollbar styling */}
      <div className="overflow-hidden response-code-block">
        <CopyBlock
          text={responseJson}
          language="json"
          showLineNumbers={false}
          theme={xt256}
          customStyle={customCodeBlockStyle}
          wrapLongLines={false}
        />
      </div>
    </div>
  );
};

export default ListOfBusinessResponseBlock;