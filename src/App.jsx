import './styles.css';
import Header from './Header';
import Hero from './Hero';
import EventDetails from "./EventDetails";
import Sponsors from "./Sponsors";
import Contact from './Contact';

export default function App() {
  return (
    <div className="frame">
      <Header />
      <main>
        <Hero />
        <EventDetails />
        <Sponsors />
        <Contact />
      </main>
    </div>
  );
}
