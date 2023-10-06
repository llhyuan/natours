"use client";
import { Fragment, ReactNode, useContext, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon, MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import Sort from "@/components/Sort";
import Link from "next/link";
import { Lato } from "next/font/google";
import { searchContext } from "../../SearchContextProvider";
import { useRouter } from "next/navigation";

const latoSemiBold = Lato({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

const subCategories = [
  { name: "Top Picks", href: "#" },
  { name: "Most Popular", href: "#" },
];
const filters = [
  {
    id: "field",
    name: "Search By:",
    options: [
      { value: "name", label: "Name" },
      { value: "size", label: "Group Size" },
      { value: "duration", label: "Duration" },
    ],
  },
];

export default function SearchLayout({ children }: { children: ReactNode }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { searchParams, setSearchParams } = useContext(searchContext);
  const router = useRouter();

  return (
    <div className="bg-zinc-200">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-zinc-100 pt-20 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-zinc-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-zinc-100 p-2 text-zinc-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-zinc-400">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-zinc-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-zinc-400 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-zinc-100 px-2 py-3 text-zinc-400 hover:text-gray-500">
                                <span className="font-medium text-zinc-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="radio"
                                      defaultChecked={
                                        option.value === searchParams.field
                                      }
                                      className="h-4 w-4 rounded border-zinc-300 text-green-600 focus:ring-green-500"
                                      onChange={(e) => {
                                        setSearchParams({
                                          ...searchParams,
                                          field: e.target.value,
                                        });
                                      }}
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-zinc-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-[125rem] px-4">
          <div className="flex max-lg:flex-col items-center justify-between border-b border-zinc-200 pb-6 pt-24">
            <h1
              className={
                latoSemiBold.className +
                " text-[2.25rem] lg:text-[3rem] bg-gradient-to-br text-transparent bg-clip-text from-[#7dd56f] to-[#28b487]"
              }
            >
              Find Your Dream Tour
            </h1>

            <div className="flex items-center lg:self-end">
              <div className="mx-2 sm:mx-4">
                <form
                  className="relative group flex max-sm:flex-col w-fit mx-auto my-[2rem] text-[1rem] lg:text-[1.3rem] items-center bg-zinc-100"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (searchParams.value) {
                      router.replace(
                        `/tours/search?${searchParams.field}=${searchParams.value}`,
                      );
                    } else {
                      router.replace("/tours/search");
                    }
                  }}
                >
                  <div className="flex items-center border-solid border-zinc-700 border-[1px] rounded-md shadow-md pl-2 max-w-[370px] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                      className="md:w-[2rem] mr-2"
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                    {searchParams.field === "name" ? (
                      <input
                        name="value"
                        type="text"
                        value={searchParams.value}
                        placeholder="Type in to search..."
                        className="appearance-none border-none bg-transparent focus:outline-none focus:ring-0 text-left p-1 rounded-md text-zinc-800 w-[40vw] max-w-[750px]"
                        onChange={(e) => {
                          setSearchParams({
                            ...searchParams,
                            value: e.target.value,
                            submit: true,
                          });

                          if (searchParams.value) {
                            router.replace(
                              `/tours/search?${searchParams.field}=${searchParams.value}`,
                            );
                          } else {
                            router.replace("/tours/search");
                          }
                        }}
                      />
                    ) : (
                      <input
                        name="value"
                        type="number"
                        placeholder="Maximum: 20"
                        min={1}
                        max={20}
                        step={1}
                        value={searchParams.value}
                        className="appearance-none border-none bg-transparent focus:outline-none focus:ring-0 text-left p-1 rounded-md text-zinc-800 w-[40vw] max-w-[750px]"
                        onChange={(e) => {
                          setSearchParams({
                            ...searchParams,
                            value: e.target.value,
                            submit: true,
                          });

                          if (searchParams.value) {
                            router.replace(
                              `/tours/search?${searchParams.field}=${searchParams.value}`,
                            );
                          } else {
                            router.replace("/tours/search");
                          }
                        }}
                      />
                    )}
                  </div>
                </form>
              </div>
              <Sort />

              <button
                type="button"
                className="ml-2 p-2 text-zinc-400 hover:text-gray-500 sm:ml-4 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24">
            <h2 id="products-heading" className="sr-only">
              Tours
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5 text-lg">
              {/* Filters */}
              <form className="hidden lg:block bg-zinc-200">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-zinc-400 pb-6 font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-zinc-400 bg-zinc-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-zinc-200 py-3 text-zinc-400 hover:text-gray-500 text-lg">
                            <span className="text-zinc-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="radio"
                                  defaultChecked={
                                    option.value === searchParams.field
                                  }
                                  className="h-4 w-4 rounded border-zinc-300 text-green-600 focus:ring-green-500"
                                  onChange={(e) => {
                                    setSearchParams({
                                      ...searchParams,
                                      field: e.target.value,
                                    });
                                  }}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-zinc-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              <div className="lg:col-span-4">
                <div>{children}</div>
                <div className="flex flex-col items-center my-20 text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem]">
                  <p
                    className={
                      latoSemiBold.className +
                      " text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] mb-4 bg-gradient-to-br text-transparent bg-clip-text from-[#7dd56f] to-[#28b487]"
                    }
                  >
                    Didn&apos;t find what you are looking for?
                  </p>
                  <p className="text-zinc-700 w-fit px-6">
                    Find like minded people in our{" "}
                    <Link
                      href="#"
                      className="underline decoration-1 hover:decoration-green-500 underline-offset-2 bg-gradient-to-br hover:text-transparent bg-clip-text from-[#7dd56f] to-[#28b487]"
                    >
                      community
                    </Link>{" "}
                    and join thousands of other tours organized by other
                    members. Or even better, you can{" "}
                    <Link
                      href="#"
                      className="underline decoration-1 hover:decoration-green-500 underline-offset-2 bg-gradient-to-br hover:text-transparent bg-clip-text from-[#7dd56f]/90 to-[#28b487]"
                    >
                      organize your own dream tour
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
