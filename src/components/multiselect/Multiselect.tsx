import { Fragment, useState } from "react";
import { Listbox } from "@headlessui/react";
import { FiCheck } from "react-icons/fi";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

type People = {
  id: number;
  name: string;
  unavailable: boolean;
};

export default function Multiselect() {
  const [selectedPeople, setSelectedPeople] = useState<People[]>([]);

  return (
    <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
      <Listbox.Button
        style={{ boxShadow: "0px 0px 0px 2px #000" }}
        className={"p-3 bg-white border-2 border-black rounded"}
      >
        {selectedPeople.map((person) => person.name).join(", ")}
      </Listbox.Button>
      <div>
        <Listbox.Options
          style={{ boxShadow: "0px 0px 0px 2px #000" }}
          className="w-48 mt-2 disabled:text-red-300 rounded overflow-hidden"
        >
          {people.map((person) => (
            /* Use the `active` state to conditionally style the active option. */
            /* Use the `selected` state to conditionally style the selected option. */
            <Listbox.Option key={person.id} value={person} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`flex ${
                    active ? "bg-blue-500 text-white" : "bg-white text-black"
                  }`}
                >
                  {selected && <FiCheck />}
                  {person.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
