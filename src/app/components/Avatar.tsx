"use client";
import React from "react";
import Image from "next/image";
import user from "../../../public/assets/placeholder.jpg";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      src={user}
      alt="Avatar"
    />
  );
};

export default Avatar;
