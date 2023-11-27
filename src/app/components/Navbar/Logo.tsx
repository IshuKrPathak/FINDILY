"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../../../public/assets/Findily-logo.png";
const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      className=" hidden md:block cursor-pointer"
      height={100}
      width={100}
      src={logo}
      alt={"logo"}
    />
  );
};
export default Logo;
