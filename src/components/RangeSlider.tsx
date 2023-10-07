"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { searchContext } from "@/app/(with_nav)/SearchContextProvider";

export default function RangeSlider({
  min,
  max,
}: {
  min: number;
  max: number;
}) {
  const { searchParams, setSearchParams } = useContext(searchContext);
  const [val, setVal] = useState(parseInt(searchParams.budget ?? "3000"));
  const rangeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (rangeInput && rangeInput.current) {
      rangeInput.current.style.backgroundSize =
        ((val - min) * 100) / (max - min) + "% 100%";
    }
  });
  return (
    <Disclosure as="div" className="border-t border-zinc-300 max-lg:px-4 py-6">
      {({ open }) => (
        <>
          <h3 className="flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between bg-transparent py-3 text-zinc-400 hover:text-gray-500">
              <span className="font-medium text-zinc-900">Budget</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <div className="">
            <div
              className={
                "flex flex-col items-center overflow-hidden " +
                (open ? "mt-6 pt-2 max-h-fit" : "max-h-0")
              }
            >
              <input
                ref={rangeInput}
                type="range"
                id="budget"
                name="budget"
                min={min}
                max={max}
                value={val}
                onChange={(e) => {
                  setVal(parseInt(e.target.value));
                  setSearchParams({
                    ...searchParams,
                    budget: e.target.value,
                    submit: false,
                  });
                }}
              />
              <div className="mt-6 flex items-center">
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 p-1 hover:bg-zinc-300 active:bg-zinc-400 rounded-sm"
                    onClick={() => {
                      let newBudget = val - 100;
                      if (newBudget < min) {
                        newBudget = min;
                      }
                      setVal(newBudget);
                      setSearchParams({
                        ...searchParams,
                        budget: newBudget + "",
                        submit: false,
                      });
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </button>
                <p className="px-2 py-1 mx-4 w-[4.5rem] text-center rounded-sm bg-white focus:ring-green-400 focus:border-none">
                  ${val}
                </p>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 p-1 hover:bg-zinc-300 active:bg-zinc-400 rounded-sm"
                    onClick={() => {
                      let newBudget = val + 100;
                      if (newBudget > max) {
                        newBudget = max;
                      }
                      setVal(newBudget);
                      setSearchParams({
                        ...searchParams,
                        budget: newBudget + "",
                        submit: false,
                      });
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
