import React from "react";

interface AnchorHeadingProps {
  id: string;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
}

const AnchorHeading: React.FC<AnchorHeadingProps> = ({
  id,
  className = "",
  level = 2,
  title = "Heading",
}) => {
  const HeadingTag = `h${level}` as const;

  return (
    <HeadingTag
      className={`flex whitespace-pre-wrap font-semibold !${className}`}
      id={id}
    >
      <span className="cursor-pointer">{title}</span>
    </HeadingTag>
  );
};

export default AnchorHeading;
