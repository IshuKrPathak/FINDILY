"use client"
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiBoatFishing, GiCastle, GiIsland, GiWindmill,GiForestCamp, GiCaveEntrance, GiCactus, GiBarn } from "react-icons/gi";
import {FaSkiing} from "react-icons/fa"
import {BsSnow } from "react-icons/bs"
import {IoDiamond} from "react-icons/io5"
import { MdOutlineVilla } from "react-icons/md";
import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { useSearchParams, usePathname } from "next/navigation";
export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to beach ",
  },
  {
    label: "Windmill",
    icon: GiWindmill,
    description: "This property has windmills ",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property has windmills ",
  },
  {
    label: "CountrySide",
    icon: TbMountain,
    description: "This property is in countryside ",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has pool ",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an Island ",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is closed to a lake  ",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities  ",
  },
  {
    label: "Castle",
    icon: GiCastle,
    description: "This property has Castle  ",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activities "
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property contains cave "
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in desert "
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property has camping activities "
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is luxiorious "
  },

];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className=" pt-4 flex flex-row items-center justify-between overflow-x-auto ">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
