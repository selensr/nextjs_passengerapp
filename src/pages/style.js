import styled from "styled-components";

export const Container = styled.div`
  background-color: #8fcfd1;
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

export const UserCard = styled.a`
  display: flex;
  margin: 0 auto;
  background-color: #f9f9f9;
  height: 150px;
  border-radius: 8px;
  width: 65%;
  margin-bottom: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 100px;
  }
`;

export const AirlineLogo = styled.div`
  width: 30%;
  height: 100%;
  background-color: #f6efa6;
  border-radius: 8px;
  padding: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: fit-content;
  max-width: fit-content;
`;

export const UserDetails = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  .name {
    font-size: 2em;
    color: #df5e88;
  }

  @media (max-width: 768px) {
    width: 60%;
    padding: 10px;

    .name {
      font-size: 1em;
    }
  }
`;

export const Title = styled.h1`
  display: block;
  width: fit-content;
  margin: 40px auto;
  color: #f6efa6;
  font-size: 3em;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  background-color: #f9f9f9;
  height: 90%;
  border-radius: 8px;
  width: 80%;
  .username-container {
    margin-top: 10%;
    @media (min-width: 1024px) {
      margin-top: 5%;
    }
  }
`;

export const UserName = styled.h1`
  display: block;
  width: fit-content;
  margin: 20px auto;
  color: #df5e88;
`;

export const UserTrips = styled.h2`
  display: block;
  width: fit-content;
  margin: 20px auto;
  color: #df5e88;
`;

export const AirlineDetails = styled.h2`
  display: block;
  width: fit-content;
  margin: 20px auto;
  color: #1f4068;
  font-size: 2em;
  @media (max-width: 320px) {
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 1.5em;
  }
`;

export const AirlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 60vh;
  padding: 20px;
  background-color: #f6efa6;
  border-radius: 8px;
  margin: 0 auto;
  text-align: center;
`;

export const Detail = styled.p`
  font-size: 1em;
  margin: 10px;
  color: #1f4068;
  @media (max-width: 320px) {
    margin: 8px;
  }
`;
