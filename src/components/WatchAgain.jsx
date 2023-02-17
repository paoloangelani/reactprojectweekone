import { Component } from "react";
import { Alert, ListGroup, Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class WatchAgain extends Component {
  state = {
    movies: [],
    isLoading: true,
    hasError: false,
    showErrorMessage: "",
  };

  fetchMovies = async () => {
    try {
      const res = await fetch(
        "http://www.omdbapi.com/?apikey=b401938f&type=movie&s=avatar"
      );
      if (res.ok) {
        const data = await res.json();
        if (data.Response === "False") {
          this.setState({
            isLoading: false,
            hasError: true,
            showErrorMessage: `Si è verificato un errore durante il caricamento del contenuto. Prova ad aggiornare la pagina e, se l'errore persiste, contattaci. Error: ${res.status}.`,
          });
        } else {
          this.setState({ movies: data.Search.splice(0, 6), isLoading: false });
        }
        
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          showErrorMessage: `Si è verificato un errore durante il caricamento del contenuto. Prova ad aggiornare la pagina e, se l'errore persiste, contattaci. Error: ${res.status}.`,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        showErrorMessage: `Errore irreversibile durante il caricamento del contenuto, riprova più tardi. Error: ${error}`,
      });
    }
  };

  componentDidMount = () => {
    
    this.fetchMovies();
  };

  render() {
    
    return (
      <>
        <h4 className="mt-2">Watch it Again:</h4>
        <Row xs={1} md={2} lg={4} xl={6}>
          {this.state.hasError && (
            <Alert className="w-100 text-center" variant="danger">
              {this.state.showErrorMessage}
            </Alert>
          )}
          {this.state.isLoading && (
            <div className="text-center m-auto">
              <Spinner animation="border" variant="success" />
            </div>
          )}
          {this.state.movies.length === 0 &&
            !this.state.isLoading &&
            !this.state.hasError && (
              <ListGroup>
                Sembra che non ci siano Trending Movies al momento
              </ListGroup>
            )}
          {this.state.movies.map((movies) => (
            <SingleMovie SingleMovie={movies} key={movies.imdbID} />
          ))}
        </Row>
      </>
    );
  }
}
export default WatchAgain;