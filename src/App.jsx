import './styles.css';
import Header from './Header';
import Hero from './Hero';

export default function App() {
  return (
    <div className="frame">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
