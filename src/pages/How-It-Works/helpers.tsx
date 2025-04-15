const codeToCopy = `
curl -X POST https://sandbox.layerfi.com/v1/businesses/business_id/invoices \\
  -H "Authorization: Bearer <access_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "external_id": "019234",
    "sent_at": "2024-04-02T09:02:00Z",
    "due_at": "2023-04-02T09:02:00Z",
    "invoice_number": "1",
    "customer_external_id": "customer-john-doe",
    "line_items": [
      {
        "product": "Cleaner Solution Pro",
        "unit_price": 1299,
        "quantity": 2,
        "sales_taxes": [
          {
            "tax_account": {
              "type": "Tax_Name",
              "name": "CALIFORNIA_VAT"
            },
            "amount": 218
          }
        ]
      },
      {
        "product": "Full drain cleaning service",
        "unit_price": 25000,
        "quantity": 1
      }
    ],
    "additional_discount": 250
  }'
    `;

const codeToCopyResponse = `
{
"data": {
  "type": "Invoice",
  "id": "d01c9839-0378-4d44-b409-a0ae1e5dbb59",
  "business_id": "83d8fb80-31ee-4d57-b684-44b4aaa5e01f",
  "external_id": "234988",
  "status": "PAID",
  "sent_at": "2024-05-12T14:13:07Z",
  "due_at": "2024-06-12T14:13:07Z",
  "paid_at": "2024-04-19T02:24:00.009658Z",
  "voided_at": null,
  "invoice_number": "2",
  "customer": {
    "id": "a4c38874-8c01-4986-b8d0-4f159a52dd39",
    "external_id": "customer-john-doe",
    "individual_name": null,
    "company_name": null,
    "email": null,
    "mobile_phone": null,
    "office_phone": null,
    "address_string": null,
    "notes": null,
    "status": "ACTIVE"
  },
  "line_items": [
    {
      "id": "fd60aa16-a0a6-40de-a814-b01836acfd36",
      "invoice_id": "d01c9839-0378-4d44-b409-a0ae1e5dbb59",
      "account_identifier": null,
      "description": null,
      "product": "Cleaner Solution Pro",
      "unit_price": 1299,
      "quantity": "1.00",
      "subtotal": 1299,
      "discount_amount": 0,
      "sales_taxes_total": 114,
      "sales_taxes": [
        {
          "tax_account": {
            "type": "AccountId",
            "id": "ba1a5e91-d04a-4c67-919e-f09a20d6e151"
          },
          "amount": 114
        }
      ],
      "total_amount": 1413
    },
    {
      "id": "4dd7708a-cad4-46e6-b5ff-34248a0b141e",
      "invoice_id": "d01c9839-0378-4d44-b409-a0ae1e5dbb59",
      "account_identifier": null,
      "description": null,
      "product": "Cleanout snake",
      "unit_price": 18000,
      "quantity": "1.00",
      "subtotal": 18000,
      "discount_amount": 0,
      "sales_taxes_total": 0,
      "total_amount": 18000
    }
  ],
  "subtotal": 19299,
  "additional_discount": 0,
  "additional_sales_taxes_total": 1291,
  "additional_sales_taxes": [
    {
      "tax_account": {
        "type": "AccountId",
        "id": "ba1a5e91-d04a-4c67-919e-f09a20d6e151"
      },
      "amount": 1291
    }
  ],
  "tips": 0,
  "total_amount": 20704,
  "outstanding_balance": 0,
  "payment_allocations": [
    {
      "invoice_id": "d01c9839-0378-4d44-b409-a0ae1e5dbb59",
      "payment_id": "4d769e05-a101-4a16-8de5-6c37fbcec088",
      "amount": 20704,
      "transaction_tags": []
    }
  ],
  "imported_at": "2024-04-19T02:24:00.009658Z",
  "updated_at": null,
  "transaction_tags": []
}
}`;

export { codeToCopy, codeToCopyResponse };
