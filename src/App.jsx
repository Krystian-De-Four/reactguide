import "./App.css";
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Card from "./components/Card/Card";
import Chip from "./components/Chip/Chip";
import xIcon from "./assets/icons/X.png";
import { chipUsageCode, chipComponentCode } from "./CodeSnippets"
import CodeBlock from "./components/CodeBlock/CodeBlock";


function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <HeroBanner />
        <div className="all-sections">
          <PropsSection/>
        </div>
      </main>
    </>
  );
}


function PropsSection(){
  return(
    <section className="props-section">
    <div className="props-row">

      <Card highlighted>
        <h2>Props</h2>
        <p>Props allow the components to accept information to use.
          This is why not every component made from a template looks the same, they recieve different data
          The data could be text to display, link to use, or even what action to take on click.</p>
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
          { }
          <Chip text="test 1" />
          <Chip text="highlighted one" isHighlighted />
          <Chip text="icon test" icon={xIcon} />
        </div>
        <div className="chips-complete">
          { }
        </div>
      </Card>
    </div>
    <Card isRow >
      <CodeBlock
        language="jsx"
        title="Internal Components"
        code={chipComponentCode}
      />
      <div className="vertical-line"/>
      <CodeBlock
        language="jsx"
        title="Usage Example"
        code={chipUsageCode} />
    </Card>
  </section>
  )
}

export default App; 