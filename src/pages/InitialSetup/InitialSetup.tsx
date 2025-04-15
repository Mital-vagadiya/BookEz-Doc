import React from "react";
import DocLayout from "../../layout/DocLayout/DocLayout";
import CodeBlock from "../../components/CodeBlock/Codeblock";

const InitialSetup = () => {
  return (
    <DocLayout
      title="Get Started"
      subTitle="Initial Setup"
      subText="Get started making calls to the Layer API"
      tocItems={[]}
      pagination={{
        prev: { href: "/overview", label: "Overview" },
        next: { href: "/guides/initial-setup", label: "Initial Setup" },
      }}
    >
      <div className="mt-8 prose-gray">
        <div role="list" className="ml-3.5 mt-10 mb-6">
          <div role="listitem" className="relative flex items-start pb-2">
            <div className="absolute w-px h-[calc(100%-2.75rem)] top-[2.75rem] bg-gray-200/70"></div>
            <div className="absolute ml-[-14px] py-2">
              <div className="w-7 h-7 shrink-0 rounded-lg bg-gray-100 dark:text-white text-sm text-gray-800 font-semibold flex items-center justify-center">
                1
              </div>
            </div>
            <div className="w-full overflow-hidden pl-12 pr-px">
              <p className="mt-2 font-semibold prose dark:prose-invert text-gray-900 dark:text-gray-200">
                Obtain your client credentials
              </p>
              <div>
                <p className="prose">
                  Layer uses OAuth2’s client credentials flow to authenticate
                  API clients. To start your development, we will give you a set
                  of <code className="">client_id</code> and{" "}
                  <code>client_secret</code> tokens.
                </p>
                <CodeBlock code={""} theme="white" isCopy={false}>
                  <div className="flex">
                    <div className="mt-0.5 w-4">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-none w-5 h-5 text-zinc-400 dark:text-zinc-300"
                        aria-label="Info"
                      >
                        <path d="M8 0C3.58125 0 0 3.58125 0 8C0 12.4187 3.58125 16 8 16C12.4187 16 16 12.4187 16 8C16 3.58125 12.4187 0 8 0ZM8 14.5C4.41563 14.5 1.5 11.5841 1.5 8C1.5 4.41594 4.41563 1.5 8 1.5C11.5844 1.5 14.5 4.41594 14.5 8C14.5 11.5841 11.5844 14.5 8 14.5ZM9.25 10.5H8.75V7.75C8.75 7.3375 8.41563 7 8 7H7C6.5875 7 6.25 7.3375 6.25 7.75C6.25 8.1625 6.5875 8.5 7 8.5H7.25V10.5H6.75C6.3375 10.5 6 10.8375 6 11.25C6 11.6625 6.3375 12 6.75 12H9.25C9.66406 12 10 11.6641 10 11.25C10 10.8359 9.66563 10.5 9.25 10.5ZM8 6C8.55219 6 9 5.55219 9 5C9 4.44781 8.55219 4 8 4C7.44781 4 7 4.44687 7 5C7 5.55313 7.44687 6 8 6Z"></path>
                      </svg>
                    </div>
                    <div className="text-sm min-w-0 pl-2 w-full">
                      <p className="text-zinc-900 text-sm">
                        To obtain a set of client credentials, reach out to your
                        Layer contact or contact our team{" "}
                        <a
                          href="https://layerfi.com/#contact-sale"
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold underline underline-offset-4 decoration-gray-400"
                        >
                          here
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </CodeBlock>
              </div>
            </div>
          </div>
          <div role="listitem" className="relative flex items-start pb-2">
            <div className="absolute w-px h-[calc(100%-2.75rem)] top-[2.75rem] bg-gray-200/70 dark:bg-white/10"></div>
            <div className="absolute ml-[-14px] py-2">
              <div className="w-7 h-7 shrink-0 rounded-lg bg-gray-100 dark:text-white dark:bg-[#26292E] text-sm text-gray-800 font-semibold flex items-center justify-center">
                2
              </div>
            </div>
            <div className="w-full overflow-hidden pl-12 pr-px">
              <p className="mt-2 font-semibold prose text-gray-900 dark:text-gray-200">
                Get a bearer token
              </p>
              <div className="">
                <p>
                  Calls to the Layer API require a bearer access token. To
                  receive an access token and make calls to other API endpoints,
                  provide your <code>client_id</code> and{" "}
                  <code>client_secret</code> in the body of a POST request to
                  Layer’s authorization server as shown below.
                </p>
                {/* <div className="mt-5 mb-8 not-prose rounded-2xl relative group text-gray-50 bg-[#0F1117] dark:bg-codeblock ring-1 ring-transparent dark:ring-gray-800/50 codeblock-dark"> */}
                <CodeBlock code={""}>
                  <span className="text-token">curl</span>
                  <span className="text-variable"> -X </span>
                  POST https://auth.layerfi.com/oauth2/token
                  <span className="text-punctuation">&#123;</span>
                  business_id
                  <span className="text-punctuation">&#125;</span>
                  /invoices
                  <span className="text-punctuation"> \</span>
                  <br />
                  &nbsp;
                  <span className="text-variable"> -U </span>
                  <span className="">
                    <span className="text-punctuation">&lt;</span>client_id
                    <span className="text-punctuation">&gt;</span>
                    <span className="text-punctuation">:</span>
                    <span className="text-punctuation">&lt;</span>client_secret
                    <span className="text-punctuation">&gt;</span>
                  </span>
                  <span className="text-punctuation"> \</span> <br />
                  &nbsp;
                  <span className="text-variable"> -H </span>
                  <span className="text-string">
                    "Content-Type: application/x-www-form-urlencoded"
                  </span>
                  <span className="text-punctuation"> \</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="">--data-urlencode</span>{" "}
                  <span className="text-string">
                    "grant_type=client_credentials"
                  </span>
                  <span className="text-punctuation"> \</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="">--data-urlencode</span>{" "}
                  <span className="text-string">
                    "scope=https://sandbox.layerfi.com/sandbox"
                  </span>
                  <span className="text-punctuation"> \</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="">--data-urlencode</span>{" "}
                  <span className="text-string">
                    "client_id=&lt;client_id&gt;"
                  </span>
                  <span className="text-punctuation"> \</span>
                  <br />
                </CodeBlock>
                {/* </div> */}
                <p>
                  The authorization server will respond with your granted access
                  token.
                  <div
                    className="callout my-4 px-5 py-4 overflow-hidden rounded-2xl flex gap-3 border border-sky-500/20 bg-sky-50/50 dark:border-sky-500/30 dark:bg-sky-500/10"
                    data-callout-type="note"
                  >
                    <div className="mt-0.5 w-4">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-sky-500"
                        aria-label="Note"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7 1.3C10.14 1.3 12.7 3.86 12.7 7C12.7 10.14 10.14 12.7 7 12.7C5.48908 12.6974 4.0408 12.096 2.97241 11.0276C1.90403 9.9592 1.30264 8.51092 1.3 7C1.3 3.86 3.86 1.3 7 1.3ZM7 0C3.14 0 0 3.14 0 7C0 10.86 3.14 14 7 14C10.86 14 14 10.86 14 7C14 3.14 10.86 0 7 0ZM8 3H6V8H8V3ZM8 9H6V11H8V9Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="text-sm  min-w-0 w-full text-sky-900 dark:text-sky-200">
                      If you are using production credentials, set the scope to{" "}
                      <a
                        href="https://api.layerfi.com/production"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold underline underline-offset-4 decoration-gray-400"
                      >
                        https://api.layerfi.com/production
                      </a>{" "}
                      instead.
                    </div>
                  </div>
                </p>
                <CodeBlock code={""}>
                  <pre className="language-json">
                    <code className="language-json">
                      <span className="">
                        <span className="token punctuation">{"{"}</span>
                      </span>
                      <br />
                      &nbsp;
                      <span className="">
                        {" "}
                        <span className="text-variable"> "access_token": </span>
                        <span className="text-string">
                          "&lt;access_token&gt;"
                        </span>
                        <span className="token punctuation">,</span>
                      </span>
                      <br />
                      &nbsp;
                      <span className="">
                        {" "}
                        <span className="text-variable"> "expires_in": </span>
                        <span className="text-string">"3600"</span>
                        <span className="token punctuation">,</span>
                      </span>
                      <br />
                      &nbsp;
                      <span className="">
                        {" "}
                        <span className="text-variable"> "token_type": </span>
                        <span className="text-string">"Bearer"</span>
                      </span>
                      <br />
                      <span className="">
                        <span className="token punctuation">{"}"}</span>
                      </span>
                    </code>
                  </pre>
                </CodeBlock>
              </div>
            </div>
          </div>
          <CodeBlock code={""} theme="white" isCopy={false}>
            <div className="flex">
              <div className="mt-0.5 w-4">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-none w-5 h-5 text-zinc-400 dark:text-zinc-300"
                  aria-label="Info"
                >
                  <path d="M8 0C3.58125 0 0 3.58125 0 8C0 12.4187 3.58125 16 8 16C12.4187 16 16 12.4187 16 8C16 3.58125 12.4187 0 8 0ZM8 14.5C4.41563 14.5 1.5 11.5841 1.5 8C1.5 4.41594 4.41563 1.5 8 1.5C11.5844 1.5 14.5 4.41594 14.5 8C14.5 11.5841 11.5844 14.5 8 14.5ZM9.25 10.5H8.75V7.75C8.75 7.3375 8.41563 7 8 7H7C6.5875 7 6.25 7.3375 6.25 7.75C6.25 8.1625 6.5875 8.5 7 8.5H7.25V10.5H6.75C6.3375 10.5 6 10.8375 6 11.25C6 11.6625 6.3375 12 6.75 12H9.25C9.66406 12 10 11.6641 10 11.25C10 10.8359 9.66563 10.5 9.25 10.5ZM8 6C8.55219 6 9 5.55219 9 5C9 4.44781 8.55219 4 8 4C7.44781 4 7 4.44687 7 5C7 5.55313 7.44687 6 8 6Z"></path>
                </svg>
              </div>
              <div className="text-sm min-w-0 pl-2 w-full">
                <p className="text-zinc-900 text-sm">
                  Access tokens expire after 1 hour. To refresh your access
                  token, make another call to Layer’s authorization endpoint
                  with your client_id and client_secret. We recommend refreshing
                  tokens for new sets of requests rather than persisting access
                  tokens.
                </p>
              </div>
            </div>
          </CodeBlock>
        </div>
      </div>
    </DocLayout>
  );
};

export default InitialSetup;
