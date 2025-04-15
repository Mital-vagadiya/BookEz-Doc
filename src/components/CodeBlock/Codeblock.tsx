import React, { ReactNode } from "react";

interface CodeBlockProps {
  code?: string; // The code content to display
  type?: string; // Optional: type for syntax highlighting (default: "bash")
  children: ReactNode;
  theme?: string;
  isCopy?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  type,
  children,
  theme = "black",
  isCopy = true,
}) => {
  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    }
  };

  return (
    <div
      className={`mt-5 mb-8 p-4 codeblock rounded-2xl relative text-gray-50
    ${theme == "black" ? "bg-[#0F1117]" : "bg-zinc-50/50 border border-zinc-500/20"} ring-1 ring-transparent`}
    >
      {/* Header */}
      {type && (
        <div className="flex rounded-t-2xl text-gray-400 text-xs leading-6 border-b font-medium bg-black/40 border-gray-900/80">
          <div className="flex-none border-b px-4 pt-2.5 pb-2 flex items-center text-primary-light border-primary-light">
            {type}
          </div>
        </div>
      )}
      {/* copy icon */}
      {isCopy && (
        <div className="z-10 absolute end-5 top-4">
          <button
            className="h-7 w-7 flex items-center justify-center rounded-md backdrop-blur peer group/copy-button"
            data-testid="copy-code-button"
            aria-label="Copy the contents from the code block"
            onClick={handleCopy}
          >
            <svg
              className="w-4 h-4 bg-white/40 group-hover/copy-button:bg-white/60"
              style={{
                maskImage:
                  "url('https://mintlify.b-cdn.net/v6.6.0/regular/clone.svg')",
                maskRepeat: "no-repeat",
                maskPosition: "center center",
              }}
            ></svg>
          </button>
          <div
            aria-hidden="true"
            className="absolute top-11 left-1/2 transform -translate-x-1/2 -translate-y-1/2 peer-hover:opacity-100 opacity-0 text-white rounded-lg px-1.5 py-0.5 text-xs bg-primary-dark"
          >
            Copy
          </div>
        </div>
      )}
      {/* Code Block */}
      <div
        className="w-full max-w-full relative
         text-sm leading-6 overflow-hidden"
        style={{
          fontVariantLigatures: "none",
          height: "auto",
          maxWidth: "calc(100vw - 90px)",
        }}
      >
        <div
          className={`overflow-x-auto h-full min-w-2xs w-full ${code ? "p-5" : "p-2"} overflow-y-hidden scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-white/20 hover:scrollbar-thumb-white/25 active:scrollbar-thumb-white/25`}
        >
          <code>{children}</code>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
