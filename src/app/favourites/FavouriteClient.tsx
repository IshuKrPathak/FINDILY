import React from "react";
import { SafeUser, safeListings } from "../types";

import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listing/ListingCard";

interface FavouriteClientProps {
  listings: safeListings[];
  currentUser?: SafeUser | null;
}
const FavouriteClient: React.FC<FavouriteClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading
        title="Favourites"
        subtitle="List of places you have favourite added"
      />
      <div
        className=" grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 
       "
      >
        {listings.map((listings) => (
          <ListingCard
            currentUser={currentUser}
            key={listings.id}
            data={listings}
          />
        ))}
      </div>
    </Container>
  );
};
export default FavouriteClient;
