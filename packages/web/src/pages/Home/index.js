/**
 * NPM Packages
 */
import React from "react";
import { Subscription } from "react-apollo";
import gql from "graphql-tag";

/**
 * The subscription
 */
const randomNumbersGeneratorSubscription = gql`
  subscription {
    numberGenerated {
      number
      timeAwaited
    }
  }
`;

/**
 * Definition
 */
const Home = () => (
  <Subscription subscription={randomNumbersGeneratorSubscription}>
    {({ data, error, loading }) => {
      if (error) {
        return window.alert(error);
      }

      if (loading) {
        return <p style={{ textAlign: "center" }}>Loading...</p>;
      }

      const { number, timeAwaited } = data.numberGenerated;

      return (
        <h4 style={{ textAlign: "center" }}>
          Letest number: {number} | Time waited: {timeAwaited} s
        </h4>
      );
    }}
  </Subscription>
);

export default Home;
