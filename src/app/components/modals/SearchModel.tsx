"use client";

import useSearchModel from "@/app/hooks/useSearchModel copy";
import Modal from "./Modal";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const searchModel = () => {
  const searchModel = useSearchModel();
  const router = useRouter();
  const params = useSearchParams();

  const [setep, setStep] = useState();
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  // const [dateRange, setDateRange] = useState<Range>({
  //   startDate: new Date(),
  //   endDate: new Date(), 
  //   key: "selection",
  // });

  return (
    <Modal
      isOpen={searchModel.isOpen}
      onClose={searchModel.onClose}
      onSubmit={searchModel.onOpen}
      title="Filters"
      actionLabel="Search"
    />
  );
};
export default searchModel;
