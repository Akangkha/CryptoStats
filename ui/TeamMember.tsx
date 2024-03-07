import { TeamMemberProps } from "@/app/types/TeamMember";
import Image from "next/image";
import React from "react";

function TeamMember({ name, image, designation,children }: Readonly<{ children: React.ReactNode }> & TeamMemberProps) {
  return (
    <div
      className="flex gap-5 p-2 pt-4 pb-2  z-100 w-fit mb-10 flex-col md:flex-row items-center md:items-baseline justify-center md:justify-normal rounded-lg"
      style={{ backgroundColor: "#E8F4FD" }}
    >
      <div
        className="flex flex-col items-center justify-center text-center "
       
      >
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="rounded-lg  "
        />
        <div className="font-bold">{name}</div>
        <div className="font-sm">{designation}</div>
      </div>
      <div style={{ width: "70%" }} className="text-sm">
        {children}
      </div>
    </div>
  );
}

export default TeamMember;
