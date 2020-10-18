import Head from "next/head";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import {
  Container,
  UserCard,
  Title,
  AirlineLogo,
  UserDetails,
  Logo,
} from "./style";

function Home({ users, page }) {
  const passengers = users.data;
  const router = useRouter();

  const pagginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  return (
    <>
      <Head>
        <title>Passenger App</title>
      </Head>
      <Container>
        <header>
          <Title>Passenger App</Title>
        </header>

        <main>
          <section>
            {passengers.map((passenger) => (
              <Link href={`/users/${passenger._id}`}>
                <UserCard>
                  <AirlineLogo>
                    <Logo
                      src={passenger.airline.logo}
                      alt={passenger.airline.name}
                    />
                  </AirlineLogo>
                  <UserDetails>
                    <p className="name">{passenger.name}</p>
                  </UserDetails>
                </UserCard>
              </Link>
            ))}
          </section>
        </main>

        <footer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              activeClassName={"active"}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              initialPage={page - 1}
              pageCount={users.totalPages}
              marginPagesDisplayed={1}
              pageRangeDisplayed={1}
              onPageChange={pagginationHandler}
            />
          </div>
        </footer>
      </Container>
    </>
  );
}

export async function getServerSideProps(props) {
  const page = props.query.page || 1;
  const res = await fetch(
    `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
  );
  const users = await res.json();

  return {
    props: {
      users,
      page,
    },
  };
}

export default Home;
