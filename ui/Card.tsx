import { CardImageContainerProps } from "@/app/types/Cards";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function CardContainer({ children }: { children: React.ReactNode }) {
  return <div className="p-4 mb-10 bg-blue-200 z-10">{children}</div>;
}

export function CardTitle({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <h3 className="text-2xl font-bold">{children}</h3>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function CardSubHeading({
  children,
  icon,
}: Readonly<{ children: React.ReactNode }> & { icon?: string }) {
  return (
    <h3 className="text-xl">
      <>{children}</>
      {icon && <> &emsp; {icon}</>}
    </h3>
  );
}

export function CardImageContainer({
  buttonText,
  buttonLink,
  text,
  image,
}: CardImageContainerProps) {
  return (
    <div className="p-3">
      <Image
        src={image}
        alt={text}
        width={200}
        height={200}
        className="rounded-lg object-cover"
      />
      <span className="text-white">{text}</span>
      <Link href={buttonLink} className="rounded-lg text-black bg-white">
        {buttonText} &emsp; right_arrow
      </Link>
    </div>
  );
}
