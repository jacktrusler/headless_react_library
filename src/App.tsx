import { useState } from "react";
import Checkbox from "@/components/radix/Checkbox";
import Drawer from "@/components/vanilla/Drawer";
import Multiselect from "@/components/headless_ui/Multiselect";
import "@/components/radix/_css/radix.css";
import useMountTransition from "@/hooks/useMountTransition";
import FetchRequest from "./components/FetchRequest";
import DropdownMenu from "./components/vanilla/DropdownMenu";
import LoadingCircles from "./components/vanilla/LoadingCircles";

function App() {
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const hasTransitionedIn = useMountTransition(isMounted, 400);

  return (
    <div className="p-8">

      <div className="font-semibold">Radix time</div>
      <Checkbox />

      <div className="font-semibold pt-2">Headless UI time</div>
      <Multiselect />

      <div className="font-semibold pt-2">Vanilla Time</div>
      <div className="flex flex-row gap-4">
        <button onClick={() => setOpenLeft(!openLeft)}>Open left</button>
        <button onClick={() => setOpenRight(!openRight)}>Open right</button>
      </div>

      <Drawer
        isOpen={openLeft}
        position='left'
        onClose={() => setOpenLeft(false)}
      >
        <div>
          {openLeft && (
            <FetchRequest />
          )}
        </div>
      </Drawer>
      <Drawer
        isOpen={openRight}
        position='right'
        onClose={() => setOpenRight(false)}
      >
        <div>xD</div>
      </Drawer>

      <DropdownMenu />

      <LoadingCircles />

      <div className="font-semibold pt-2">Hooks</div>
      <div className="flex flex-col items-center w-40">
        <button onClick={() => setIsMounted(!isMounted)}>
          {`${isMounted ? 'Hide' : 'Show'} Element`}
        </button>

        <div className="content">
          {(hasTransitionedIn || isMounted) && (
            <div className={`card ${isMounted && hasTransitionedIn ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
              <div className="h-20 w-32 bg-orange-300">
                Some Card
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default App;
