import Checkbox from "./components/checkbox/Checkbox";
import Multiselect from "./components/multiselect/Multiselect";
import "./components/radix.css";

function App() {
  return (
    <div className="p-8">
      <div className="font-semibold">Radix time</div>
      <Checkbox />
      <div className="font-semibold pt-2">Headless UI time</div>
      <Multiselect />
    </div>
  );
}

export default App;
