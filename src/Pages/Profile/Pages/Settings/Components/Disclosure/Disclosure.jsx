import { Disclosure } from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/20/solid"
export default function Example({ children, props }) {
  return (
    <div className="w-full px-4  ">
      <div className="mx-auto w-full  rounded-2xl p-2">
        <Disclosure>
          {({ open }) => (
            <div>
              <Disclosure.Button className="shadow-md p-4 rounded-md flex justify-between  items-center w-[72.5%] mx-auto ">
                {props}
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm bg-white  rounded-b-md rounded-s-sm text-gray-500 w-[72.5%] mx-auto">
                  {children}
                </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
