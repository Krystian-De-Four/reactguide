import "./App.css";
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Card from "./components/Card/Card";
import Chip from "./components/Chip/Chip";
import xIcon from "./assets/icons/X.png";


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
              <p>This element is collonly called 'Chips'</p>
              <p>Common Features</p>
              <ul>
                <li>Optional Icons</li>
                <li>Highlighted State</li>
                <li>Often deleteable, a nice visual way to represent options from a form</li>
              </ul>
              <div className="chips-example">
                {}
                <Chip text="test 1"/>
                <Chip text="highlighted one" isHighlighted/>
                <Chip text="icon test" icon={xIcon}/>
              </div>
              <div className ="chips-complete">
                {}
              </div>
            </Card>
          </section>

        </div>
      </main>
    </>
  );
}

export default App;
