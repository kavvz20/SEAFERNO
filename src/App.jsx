import './styles.css';
import Header from './Header';
import Hero from './Hero';
import EventDetails from "./EventDetails";
import Sponsors from './Sponsors';

export default function App() {
  return (
    <div className="frame">
      <Header />
      <main>
        <Hero />
        <EventDetails />
        <Sponsors />
      </main>
    </div>
  );
}
