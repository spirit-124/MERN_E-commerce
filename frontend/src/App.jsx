import "./App.css";
import { Container } from "react-bootstrap";
import { Footer, Header } from "./components";
// import { HomeScreen } from "./screens";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <main className="my-3">
        <Container>
          <h1> VOIDCODES</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
