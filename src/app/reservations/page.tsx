import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

const ReservationPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized people"
          subtitle="Please login with your authorized credentials"
        />
      </ClientOnly>
    );
  }
  const reservations = await getReservations({
    authorId: currentUser.id,
  });
  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Property found"
          subtitle="Looks like you havenot shared any property for service "
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};
export default ReservationPage;
