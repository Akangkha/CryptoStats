import { CardImageContainerProps } from "@/app/types/Cards";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function CardImageContainer({
    buttonText,
    buttonLink,
    text,
    image,
    gradient,
  }: CardImageContainerProps) {
    return (
      <div
        className="p-3 rounded-lg flex items-start gap-5"
        style={{ backgroundImage: gradient }}
      >
        <Image
          src={image}
          alt={text}
          width={200}
          height={200}
          className="rounded-lg object-cover w-40 h-40"
        />
        <div>
          <span className="text-white text-2xl font-semibold my-5">{text}</span>
          <Link
            href={buttonLink}
            className="rounded-lg text-black bg-white flex items-center p-3 gap-4 font-semibold w-fit my-5"
          >
            {buttonText}
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0658 5.77144L1.56577 5.77144"
                stroke="#0F1629"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.02426 0.751099L14.0659 5.7711L9.02426 10.7919"
                stroke="#0F1629"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    );
  }
  