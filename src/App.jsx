import "./App.css";
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <HeroBanner />
        <div className="all-sections">

          <section className="props-section">
            <Card highlighted>
              <h2>Props</h2>
              <p>Props......................................................................</p>
            </Card>
            <Card>
              <h2>Chips</h2>
            </Card>
          </section>

        </div>
      </main>
    </>
  );
}

export default App;
