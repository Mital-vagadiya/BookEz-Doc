import { FC } from 'react';
import {  CopyBlock, xt256 } from 'react-code-blocks';

interface Props {
  text: string;
  language: string;
  showLineNumbers?: boolean;
  theme?: any;
  wrapLongLines?: boolean;
}

const customCodeBlockStyle = {
    height: 'auto',
    maxHeight: '500px',
    overflow: 'auto',
    borderRadius: '0',
    margin: '0',
    fontSize: '0.875rem',
};

const ResponseCodeBlock : FC<Props> = ({text,language,showLineNumbers = false,theme = xt256,wrapLongLines = false}) => {

  return (
    <div className="rounded-lg overflow-hidden bg-gray-900 shadow-lg" >
      {/* Response Header */}
      <div className="flex items-center border-b border-gray-700 px-4 py-2">
        <span className="text-green-400 font-mono text-sm">200</span>
      </div>

      {/* Response Content with custom class for scrollbar styling */}
      <div className="overflow-hidden response-code-block">
        <CopyBlock
          text={text}
          language={language}
          showLineNumbers={showLineNumbers}
          theme={theme}
          customStyle={customCodeBlockStyle}
          wrapLongLines={wrapLongLines}
        />
      </div>
    </div>
  );
};

export default ResponseCodeBlock;