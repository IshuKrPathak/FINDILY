"use client";

import { Value } from "@prisma/client/runtime/library";
import React from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (Value: string) => void;
}
const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`rounded-xl border-2 p-2 flex flex-col gap-3 hover:border-green-500 transition cursor-pointer ${
        selected ? "border-green-500" : "border-gray-400"
      } `}
    >
      <Icon size={20} />
      <div className=" font-semibold">{label}</div>
    </div>
  );
};
export default CategoryInput;
