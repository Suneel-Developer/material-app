"use client";

interface CardProps {
    title: string,
    label: string,
    heading: string,
    diff: string
}

const Card: React.FC<CardProps> = ({title, label, heading, diff}) => {
  return (
    <div className="bg-white p-4 rounded">
      <div className="flex items-center justify-between ">
        <p className="font-medium">{title}</p>
        <p className="p-1 px-2 text-white bg-primary rounded-full text-sm">{label}</p>
      </div>
      <h1 className="py-2 text-2xl font-semibold">{heading}</h1>
      <div className="flex items-center gap-4">
        <p className="text-green">{diff}</p>
        <p className="text-dark_grey">Since last week</p>
      </div>
    </div>
  );
};

export default Card;
