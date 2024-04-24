import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown({ onOptionSelect }) {
  const [option, setOption] = useState(null);
  const handleClick = (item) => {
    setOption(item);
    onOptionSelect(item + " Login");
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-mono font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200">
          User Type
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    option === 'Administrator' ? 'bg-blue-400 text-gray-900' : 'text-gray-700'
                  )}
                  onClick={() => handleClick('Administrator')}
                >
                  Administrator
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    option === 'Manager' ? 'bg-blue-400 text-gray-900' : 'text-gray-700'
                  )}
                  onClick={() => handleClick('Manager')}
                >
                  Manager
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    option === 'Staff Member' ? 'bg-blue-400 text-gray-900' : 'text-gray-700'
                  )}
                  onClick={() => handleClick('Staff Member')}
                >
                  Staff Member
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                    option === 'Employee' ? 'bg-blue-400 text-gray-900' : 'text-gray-700'
                  )}
                  onClick={() => handleClick('Employee')}
                >
                  Employee
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}