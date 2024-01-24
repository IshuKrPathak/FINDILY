"use client";
import { Toast, toast } from "react-hot-toast";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { safeReservations, SafeUser } from "../types";
import Heading from "../components/Heading";
import ListingCard from "../components/listing/ListingCard";
import Container from "../components/Container";
interface ReservationsClientProps {
  reservations: safeReservations[];
  currentUser: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation camcelleed");
          router.refresh();
        })
        .catch(() => {
          toast.error("something went wrong");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  return (
    <Container>
      <Heading title="Reservations" subtitle="Bookings on your properties" />
      <div
        className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8
       "
      >
        {reservations.map((reservations) => (
          <ListingCard
            key={reservations.id}
            data={reservations.listing}
            reservation={reservations}
            actionId={reservations.id}
            disabled={deletingId === reservations.id}
            actionLabel="Cancel guest reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ReservationsClient;
