"use client";
import { useRouter } from "next/navigation";
import { SafeUser, safeReservations } from "../types";

import Heading from "../components/Heading";
import Container from "../components/Container";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../components/listing/ListingCard";

interface TripsClientProps {
  reservations: safeReservations[];
  currentUser?: SafeUser | null;
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const onCancel = useCallback((id: string) => {
    setDeletingId(id);
    axios
      .delete(`/api/reservations/${id}`)
      .then(() => {
        toast.success("Reservations Cancelled");
        router.refresh()

      })
      .catch((error) => {
        toast.error(error?.response?.data?.error);
      });
    // .finally(()=>{
    //     setDeletingId("")
    // })
  }, [router]);
  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you haver been and where you are going ."
      />

      <div className=" mt-10 grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations.map((reservations)=>(
            <ListingCard
            key={reservations.id}
            data={reservations.listing}
            reservation={reservations}
            actionId={reservations.id}
            onAction={onCancel}
            disabled = {deletingId === reservations.id}
            actionLabel="Cancel Reservation"
            currentUser={currentUser}

            
            />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
