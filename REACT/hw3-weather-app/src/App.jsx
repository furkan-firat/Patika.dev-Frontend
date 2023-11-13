import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { CityProvider } from "./contexts/CityContext";
import { WeatherProvider } from "./contexts/WeatherContext";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
  return (
    <CityProvider>
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </CityProvider>
  );
}

export default App;
