import { TeamMemberProps } from "@/app/types/TeamMember";
import Image from "next/image";
import React from "react";

function TeamMember({ name, image, designation,children }: Readonly<{ children: React.ReactNode }> & TeamMemberProps) {
  return (
    <div
      className="flex gap-5 p-4 pt-4 pb-2  z-100 w-fit mb-10"
      style={{ backgroundColor: "#E8F4FD" }}
    >
      <div
        className="flex flex-col items-center justify-center text-center "
        style={{ width: "15%" }}
      >
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded-lg object-cover"
        />
        <div className="font-bold">{name}</div>
        <div className="font-sm">{designation}</div>
      </div>
      <div style={{ width: "70%" }}>
        {children}
      </div>
    </div>
  );
}

export default TeamMember;
