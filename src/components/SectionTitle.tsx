import React from "react";

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <div className={`flex items-center w-fit gap-4 ${className}`}>
      <span className="bg-secondary rounded-full size-[38px]"></span>
      <h1 className="font-bold text-[32px]">{title}</h1>
    </div>
  );
};

export default SectionTitle;
