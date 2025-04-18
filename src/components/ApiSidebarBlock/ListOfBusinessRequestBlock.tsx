import { Check, Copy } from 'lucide-react';
import { useState } from 'react'

const ListOfBusinessRequestBlock = () => {
    const [activeTab, setActiveTab] = useState("JavaScript");
    const [codeCopied, setCodeCopied] = useState(false);
  
    const copyToClipboard = (text: string, type: "code" | "response") => {
      navigator.clipboard.writeText(text);
      if (type === "code") {
        setCodeCopied(true);
        setTimeout(() => setCodeCopied(false), 2000);
      }
    };
  
    const tabs = ["cURL", "Python", "JavaScript", "PHP", "Go", "Java"];
  
    const codeSnippet = `const options = {method: 'GET', headers: {Authorization: 'Bearer YOUR_API_KEY'}};
  
  fetch('https://sandbox.layerfi.com/v1/businesses', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));`;
  return (
    <div className="code-block rounded-lg overflow-hidden bg-[#121212] shadow-lg">
      {/* Tabs */}
      <div className="flex items-center overflow-x-auto border-b border-gray-700 px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-3 px-3 text-sm font-medium whitespace-nowrap relative ${
              activeTab === tab
                ? "text-blue-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"></span>
            )}
          </button>
        ))}

        <button
          className="ml-auto text-gray-400 hover:text-gray-300 p-2 flex-shrink-0"
          onClick={() => copyToClipboard(codeSnippet, "code")}
          aria-label="Copy code"
        >
          {codeCopied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-hidden">
        <pre className="text-sm font-mono overflow-x-auto overflow-y-auto whitespace-pre text-left w-full">
          <code>
            <span className="text-blue-400">const</span>{" "}
            <span className="text-gray-300">options</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-gray-300">{"{"}</span>
            <span className="text-blue-400">method</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-orange-400">'GET'</span>
            <span className="text-gray-300">,</span>{" "}
            <span className="text-blue-400">headers</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-gray-300">{"{"}</span>
            <span className="text-blue-400">Authorization</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-orange-400">'Bearer YOUR_API_KEY'</span>
            <span className="text-gray-300">{"}"}</span>
            <span className="text-gray-300">{"}"}</span>
            <span className="text-gray-300">;</span>
            <br />
            <br />
            <span className="text-yellow-400">fetch</span>
            <span className="text-gray-300">(</span>
            <span className="text-orange-400">
              'https://sandbox.layerfi.com/v1/businesses'
            </span>
            <span className="text-gray-300">,</span>{" "}
            <span className="text-gray-300">options</span>
            <span className="text-gray-300">)</span>
            <br />
            <span className="text-gray-300"> .</span>
            <span className="text-yellow-400">then</span>
            <span className="text-gray-300">(</span>
            <span className="text-blue-400">response</span>{" "}
            <span className="text-gray-400">=&gt;</span>{" "}
            <span className="text-blue-400">response</span>
            <span className="text-gray-300">.</span>
            <span className="text-yellow-400">json</span>
            <span className="text-gray-300">()</span>
            <span className="text-gray-300">)</span>
            <br />
            <span className="text-gray-300"> .</span>
            <span className="text-yellow-400">then</span>
            <span className="text-gray-300">(</span>
            <span className="text-blue-400">response</span>{" "}
            <span className="text-gray-400">{"=>"}</span>{" "}
            <span className="text-yellow-400">console</span>
            <span className="text-gray-300">.</span>
            <span className="text-yellow-400">log</span>
            <span className="text-gray-300">(</span>
            <span className="text-blue-400">response</span>
            <span className="text-gray-300">)</span>
            <span className="text-gray-300">)</span>
            <br />
            <span className="text-gray-300"> .</span>
            <span className="text-yellow-400">catch</span>
            <span className="text-gray-300">(</span>
            <span className="text-blue-400">err</span>{" "}
            <span className="text-gray-400">{`=>`}</span>{" "}
            <span className="text-yellow-400">console</span>
            <span className="text-gray-300">.</span>
            <span className="text-red-400">error</span>
            <span className="text-gray-300">(</span>
            <span className="text-blue-400">err</span>
            <span className="text-gray-300">)</span>
            <span className="text-gray-300">)</span>
            <span className="text-gray-300">;</span>
          </code>
        </pre>
      </div>
    </div>
  )
}

export default ListOfBusinessRequestBlock
