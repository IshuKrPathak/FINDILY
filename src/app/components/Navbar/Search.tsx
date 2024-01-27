"use client";
import useSearchModel from "@/app/hooks/useSearchModel copy";
import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModel = useSearchModel();

  return (
    <div
      className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-lg transition cursor-pointer "
      onClick={searchModel.onOpen}
    >
      <div className=" flex flex-row items-center justify-between ">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div
          className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center
         "
        >
          Any week{" "}
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block"> Add Guest</div>
          <div className="p-2 bg-green-500 rounded-full text-white">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
