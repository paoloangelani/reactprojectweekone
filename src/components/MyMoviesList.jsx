import { Component } from "react";
import Header from "./Header";
import NewRelease from "./NewRelease";
import Trending from "./Trending";
import WatchAgain from "./WatchAgain";

class MyMoviesList extends Component {
  render() {
    return (
      <>
        <div className="px-4">
          <Header />
          <Trending />
          <WatchAgain />
          <NewRelease />
        </div>
      </>
    );
  }
}

export default MyMoviesList;
