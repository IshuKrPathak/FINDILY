"use client";
import { useRouter } from "next/navigation";
import { SafeUser, safeListings, safeReservations } from "../types";

import Heading from "../components/Heading";
import Container from "../components/Container";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../components/listing/ListingCard";

interface PropertiesClientProps {
  listings: safeListings[],
  currentUser?: SafeUser | null,
}

const TripsClient: React.FC<PropertiesClientProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios.delete(`/api/listing/${id}`)
        .then(() => {
          toast.success("Listings Deleted");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title="Properties"
        subtitle="List of your properties"
      />

      <div className=" mt-10 grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listings) => (
          <ListingCard
            key={listings.id}
            data={listings}
            actionId={listings.id}
            onAction={onCancel}
            disabled={deletingId === listings.id}
            actionLabel="Delete Properties"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
