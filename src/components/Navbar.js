// Navbar.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-neutral-200 shadow-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <img
                  alt="Logo"
                  src="https://cdn.cookielaw.org/logos/4052793d-fe64-49f6-b413-d40734f1c397/c94e1293-1a55-452b-80ff-f96987f53bce/016259d0-06e5-42c6-9159-a856209ce765/ust-logo.png"
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    classNames(
                      isActive ? 'bg-zinc-900 text-white' : 'text-zinc-700 font-bold hover:bg-zinc-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    classNames(
                      isActive ? 'bg-zinc-900 text-white' : 'text-zinc-700 font-bold hover:bg-zinc-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )
                  }
                >
                  Dashboard
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Disclosure.Button
            as={NavLink}
            to="/"
            className={({ isActive }) =>
              classNames(
                isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )
            }
          >
            Home
          </Disclosure.Button>
          <Disclosure.Button
            as={NavLink}
            to="/dashboard"
            className={({ isActive }) =>
              classNames(
                isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )
            }
          >
            Dashboard
          </Disclosure.Button>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
