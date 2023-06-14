import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import { HomeScreen, ProductDetails } from "./screens";
// import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="my-3">
          <Container>
            <h1> VOIDCODES</h1>
            <Routes>
              <Route path="/" exact element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
