import Head from "next/head";
import {
  Container,
  User,
  UserName,
  UserTrips,
  AirlineDetails,
  AirlineContainer,
  Detail,
} from "../style";

function UserDetail({ passanger }) {
  return (
    <>
      <Head>
        <title>Passenger App</title>
      </Head>
      <Container>
        <User>
          <header>
            <div className="username-container">
              <UserName>{passanger.name}</UserName>
              <UserTrips>Trips: {passanger.trips}</UserTrips>
            </div>
          </header>

          <main>
            <section>
              <AirlineContainer>
                <AirlineDetails>Airline details</AirlineDetails>
                <Detail>Name: {passanger.airline.name}</Detail>
                <Detail>Country: {passanger.airline.country}</Detail>
                {passanger.airline.slogan && (
                  <Detail>Slogan: {passanger.airline.slogan}</Detail>
                )}
                {passanger.airline.head_quaters && (
                  <Detail>
                    Head Quarters: {passanger.airline.head_quaters}
                  </Detail>
                )}
                <Detail>
                  Website:{" "}
                  <a href={passanger.airline.website}>
                    {passanger.airline.name}
                  </a>
                </Detail>
                {passanger.airline.established && (
                  <Detail>Established: {passanger.airline.established}</Detail>
                )}
              </AirlineContainer>
            </section>
          </main>
        </User>
      </Container>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://api.instantwebtools.net/v1/passenger/${params.id}`
  );
  const passanger = await res.json();

  return {
    props: {
      passanger,
    },
  };
}

export default UserDetail;
