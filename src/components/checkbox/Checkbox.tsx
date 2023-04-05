import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { FiCheck } from "react-icons/fi";

const Checkbox = () => (
  <form>
    <div className="w-64" style={{ display: "flex", alignItems: "center" }}>
      <RadixCheckbox.Root
        className="w-8 h-8 hover:bg-blue-200"
        style={{ boxShadow: "0px 0px 0px 2px blue" }}
        defaultChecked
        id="c1"
      >
        <RadixCheckbox.Indicator className="flex justify-center">
          <FiCheck />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label className="pl-4 text-color-black" htmlFor="c1">
        Accept terms and conditions.
      </label>
    </div>
  </form>
);

export default Checkbox;
