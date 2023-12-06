import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Bars3Icon,
  HomeIcon,
  UsersIcon,
  ArchiveBoxIcon,
  ArrowLeftOnRectangleIcon,
  DocumentTextIcon
  /*MinusIcon,
  PlusIcon,*/
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

function App() {

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  return (
    <>
      {/* PULSANTE APERTURA MENU MOBILE */}
      <button onClick={toggleMobileMenu} data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="w-6 h-6" />
      </button>

      {/* SIDEBAR */}
      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-full transition-transform ${mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Link to={'/'} className="flex items-center ps-2.5 mb-5">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
            <span className="self-center text-md font-semibold whitespace-nowrap dark:text-white xl:text-xl">E-commerce CMS</span>
          </Link>
          {/* VOCI SIDEBAR */}
          <ul className="h-2/3 space-y-2 font-medium">
            <li>
              <Link to={'/'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <HomeIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                {/*<span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>*/}
              </Link>
            </li>
            <li>
              <Link to={'/utenti'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <UsersIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Utenti</span>
                {/*<span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>*/}
              </Link>
            </li>
            <li>
              <Link to={'/prodotti'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <ArchiveBoxIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Prodotti</span>
                {/*<span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>*/}
              </Link>
            </li>
          </ul>
          {/* PARTE BASSA DELLA SIDEBAR [ PROFILO - LOGOUT - DOCUMENTAZIONE ] */}
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li className="flex gap-3 items-center bg-zinc-100 p-5 border rounded-md">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2>Pasquale Cannavacciuolo</h2>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <ArrowLeftOnRectangleIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Logout</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <DocumentTextIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Documentazione</span>
              </a>
            </li>
          </ul>
        </div>
        {/* PULSANTE CHIUSURA MENU MOBILE */}
        {mobileFiltersOpen && (
          <button
            className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:ring-gray-600"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Chiudi la barra laterale</span>
            <XMarkIcon className="w-6 h-6" />
          </button>
        )}
      </aside>

      {/* ROUTER OUTLET */}
      <div className="p-3 xl:p-10 xl:ml-64">
        <Outlet />
      </div>
    </>
  );
}

export default App
