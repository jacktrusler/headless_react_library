import { useState } from "react";
import Checkbox from "./components/checkbox/Checkbox";
import Drawer from "./components/drawer/Drawer";
import Multiselect from "./components/multiselect/Multiselect";
import "./components/radix.css";

function App() {
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  return (
    <div className="p-8">
      <div className="font-semibold">Radix time</div>
      <Checkbox />
      <div className="font-semibold pt-2">Headless UI time</div>
      <Multiselect />
      <div className="font-semibold pt-2">Vanilla Time</div>
      <div className="flex flex-row gap-4">
        <button onClick={() => setOpenLeft(true)}>Open left</button>
        <button onClick={() => setOpenRight(true)}>Open right</button>
      </div>
      <Drawer
        isOpen={openLeft}
        position='left'
        onClose={() => setOpenLeft(false)}
      >
        <div>lmao</div>
      </Drawer>
      <Drawer
        isOpen={openRight}
        position='right'
        onClose={() => setOpenRight(false)}
      >
        <div>xD</div>
      </Drawer>
    </div>
  );
}

export default App;
