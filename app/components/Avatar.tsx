'use client';

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
  variant: string
}

const Avatar: React.FC<AvatarProps> = ({ src, variant }) => {
  return ( 
    <Image 
      className="rounded-full" 
      width={variant === "large" ? 130 : 25}
      height={variant === "large" ? 130 : 25}
      alt="Avatar" 
      src={src || '/images/placeholder.jpg'}
    />
   );
}
 
export default Avatar;