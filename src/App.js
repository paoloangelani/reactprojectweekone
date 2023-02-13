import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyMoviesList from "./components/MyMoviesList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MyNav />
      <MyMoviesList />
      <Footer />
    </>
  );
}

export default App;

