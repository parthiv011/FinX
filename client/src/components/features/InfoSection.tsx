import React from "react";

interface TextProps extends React.HtmlHTMLAttributes<HTMLElement> {
  head: string;
  paragraph: string;
  title: string;
  info: string;
}
export function InfoSection({
  head,
  paragraph,
  title,
  info,
}: TextProps) {
  return (
    <div className="flex flex-col w-2/4 justify-center items-center p-16">
      <h3 className="text-5xl font-extrabold mb-6">{head}</h3>
      <p className="text-xl text-slate-700">{paragraph}</p>
      <div className="flex gap-4 mt-8">
        <div className="flex flex-col">
        <img src="credit-card.png" alt="image" 
            className="w-24 h-24"
        />
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-lg text-slate-700">{info}</p>
        </div>
        <div className="flex flex-col">
        <img src="credit-card.png" alt="image" 
            className="w-24 h-24"
        />
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-lg text-slate-700">{info}</p>
        </div>
      </div>
    </div>
  );
}
