import React from "react";
import { SafeUser, safeListings } from "../types";

import Heading from "../components/Heading";
import Container from "../components/Container";

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
    </Container>
  );
};
export default FavouriteClient;
