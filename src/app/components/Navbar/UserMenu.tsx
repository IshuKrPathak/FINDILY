"use client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModel from "@/app/hooks/useRegisterModel";
import useLoginModel from "@/app/hooks/useLoginModel";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModel();
  const loginModel = useLoginModel();
  const [isopen, setIsopen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsopen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className=" flex flex-row items-center gap-3">
        <div
          className=" hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer "
          onClick={() => {
            toggleOpen;
          }}
        >
          Add you Service
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-neutral-200 flex flex-row items-center gap-3 rounded-full
        cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image}  />
          </div>
        </div>
      </div>
      {isopen && (
        <div
          className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12
            text-sm "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My Booking" />
                <MenuItem onClick={() => {}} label="My searches" />
                <MenuItem onClick={() => {}} label="My Property" />
                <MenuItem onClick={() => {}} label="My Home" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModel.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Signup" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
