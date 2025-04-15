import React from "react";

const Request = () => {
  return (
    <>
      <span className="text-token">curl</span>
      <span className="text-variable"> -X </span>
      POST https://sandbox.layerfi.com/v1/businesses/
      <span className="text-punctuation">&#123;</span>
      business_id
      <span className="text-punctuation">&#125;</span>
      /invoices
      <span className="text-punctuation"> \</span>
      <br />
      <span className="text-variable"> -H </span>
      <span className="text-string">
        "Authorization: Bearer &lt;access_token&gt;"
      </span>
      <span className="text-punctuation"> \</span> <br />
      <span className="text-variable"> -H </span>
      <span className="text-string">"Content-Type: application/json"</span>
      <span className="text-punctuation"> \</span>
      <br />
      <span className="text-variable"> -d </span>'
      <span className="text-punctuation">&#123;</span> <br />
      &nbsp;&nbsp; <span className="text-string">
        "external_id": "019234",
      </span>{" "}
      <br />
      &nbsp;&nbsp;{" "}
      <span className="text-string">
        "sent_at": "2024-04-02T09:02:00Z",
      </span>{" "}
      <br />
      &nbsp;&nbsp;{" "}
      <span className="text-string">
        "due_at": "2023-04-02T09:02:00Z",
      </span>{" "}
      <br />
      &nbsp;&nbsp; <span className="text-string">
        "invoice_number": "1",
      </span>{" "}
      <br />
      &nbsp;&nbsp;{" "}
      <span className="text-string">
        "customer_external_id": "customer-john-doe",
      </span>{" "}
      <br />
      &nbsp;&nbsp; <span className="text-string">"line_items": </span>
      <span className="text-punctuation">[</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">&#123;</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-string">
        "product": "Cleaner Solution Pro",
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-string">"unit_price": 1299,</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-string">"quantity": 2,</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-string">"sales_taxes": </span>
      <span className="text-punctuation">[</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">&#123;</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-string">"tax_account": </span>
      <span className="text-punctuation">&#123;</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-string">"type": "Tax_Name",</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-string">"name": "CALIFORNIA_VAT"</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">&#125;</span>, <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-string">
        "amount": <span className="text-unit">218</span>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">&#125;</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">]</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">&#125;</span>, <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">&#123;</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-string">
        "product": "Full drain cleaning service",
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-string">
        "unit_price": <span className="text-unit">25000</span>,
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-string">
        "quantity": <span className="text-unit">1</span>
      </span>{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">&#125;</span> <br />
      &nbsp;&nbsp;<span className="text-punctuation">]</span>, <br />
      &nbsp;&nbsp;{" "}
      <span className="text-string">
        "additional_discount":
        <span className="text-unit">250</span>
      </span>{" "}
      <br />
      &nbsp;<span className="text-punctuation">&#125;'</span> <br />
    </>
  );
};

const Response = () => {
  return (
    <>
      <span className="text-punctuation">&#123;</span> <br />
      <span className="text-property">
        "data": <span className="text-punctuation">&#123;</span>{" "}
      </span>{" "}
      <br />
      &nbsp;&nbsp;
      <span>
        <span className="text-property">"type":</span>{" "}
        <span className="text-string"> "Invoice"</span>
        <span className="text-punctuation">,</span>
      </span>
      <br />
      &nbsp;&nbsp;
      <span>
        <span className="text-property">"id":</span>{" "}
        <span className="text-string">
          {" "}
          "6d0c298f-3e4e-4538-9a71-1d5359c22f71"
        </span>
        <span className="text-punctuation">,</span>
      </span>
      <br />
      &nbsp;&nbsp;
      <span>
        <span className="text-property">"business_id":</span>{" "}
        <span className="text-string">
          {" "}
          "6d0c298f-3e4e-4538-9a71-1d5359c22f71"
        </span>
        <span className="text-punctuation">,</span>
      </span>
      <br />
      &nbsp;&nbsp;
      <span className="text-property">
        "customer": <span className="text-punctuation">&#123;</span>{" "}
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <span className="text-property">"business_id":</span>{" "}
        <span className="text-string">
          {" "}
          "6d0c298f-3e4e-4538-9a71-1d5359c22f71"
        </span>
        <span className="text-punctuation">,</span>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <span className="text-property">"paid_at":</span>{" "}
        <span className="text-string"> "null"</span>
        <span className="text-punctuation">,</span>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">&#125;</span>
      {","}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-property">
        "line_items": <span className="text-punctuation">[</span>{" "}
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">&#123;</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <span className="text-property">"business_id":</span>{" "}
        <span className="text-string">
          {" "}
          "6d0c298f-3e4e-4538-9a71-1d5359c22f71"
        </span>
        <span className="text-punctuation">,</span>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <span className="text-property">"paid_at":</span>{" "}
        <span className="text-string"> "null"</span>
        <span className="text-punctuation">,</span>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">&#125;</span>
      {","}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">&#123;</span> <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <span className="text-property">"business_id":</span>{" "}
        <span className="text-string">
          {" "}
          "6d0c298f-3e4e-4538-9a71-1d5359c22f71"
        </span>
        <span className="text-punctuation">,</span>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <span className="text-property">"paid_at":</span>{" "}
        <span className="text-string"> "null"</span>
        <span className="text-punctuation">,</span>
      </span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">&#125;</span>
      {","}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-punctuation">]</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-punctuation">&#125;</span> <br />
      &nbsp;
      <span className="text-punctuation">&#125;</span>{" "}
    </>
  );
};
export { Request, Response };
