import "./styles.css";
import Accordion from "./Accordion";

export default function App() {
  return (
    <div className="accordion">
      <Accordion
        title="Item 1 - Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
      <Accordion
        title="Item 2 - Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
      <Accordion
        title="Item 3 - Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
      <Accordion
        title="Item 4 - Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      />
    </div>
  );
}
