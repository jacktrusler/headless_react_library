import { useState } from "react";
import Checkbox from "@/components/radix/checkbox/Checkbox";
import Drawer from "@/components/vanilla/drawer/Drawer";
import Multiselect from "@/components/headless_ui/multiselect/Multiselect";
import "@/components/radix/_css/radix.css";
import useMountTransition from "./components/_hooks/useMountTransition";

function App() {
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const leftTransitionedIn = useMountTransition(openLeft, 350);
  const rightTransitionedIn = useMountTransition(openRight, 350);
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

      {(leftTransitionedIn || openLeft) && (
        <Drawer
          isOpen={openLeft}
          hasTransitionedIn={leftTransitionedIn}
          position='left'
          onClose={() => setOpenLeft(false)}
        >
          <div>lmao</div>
        </Drawer>
      )}
      {(rightTransitionedIn || openRight) && (
        <Drawer
          isOpen={openRight}
          hasTransitionedIn={rightTransitionedIn}
          position='right'
          onClose={() => setOpenRight(false)}
        >
          <div>xD</div>
        </Drawer>
      )}

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
