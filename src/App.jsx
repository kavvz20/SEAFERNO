import './styles.css';
import Header from './Header';
import Hero from './Hero';
import EventDetails from "./EventDetails";

export default function App() {
  return (
    <div className="frame">
      <Header />
      <main>
        <Hero />
        <EventDetails />
      </main>
    </div>
  );
}
