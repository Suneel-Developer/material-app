"use client";

interface Labelrops {
  text: string;
  primary?:boolean
}

const Container: React.FC<Labelrops> = ({ text, primary }) => {
  return (
    <label className={`block ${primary? "text-primary":"text-light_gray"} font-medium text-base pb-2`}>
     {text}
    </label>
  );
};

export default Container;
