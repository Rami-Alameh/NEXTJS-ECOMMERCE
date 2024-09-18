import { adminNavOptions, componentStyles, navOptions } from '@/utils';
import { Fragment } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';

const isadminView = false;
const isAuthUser = true;
const user = {
  role: 'admin'
};

function NavItems() {
  return (
    <div className='items-center md:flex justify-center w-full md:w-auto' id='nav-items'>
      <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0'>
        {isadminView ? adminNavOptions.map((item) => (
          <li className='cursor-pointer block py-2 pl-3 pr-4 text-black rounded md:p-0' key={item.id}>
            {item.label}
          </li>
        )) : navOptions.map((item)=>(<li className='cursor-pointer py-2 pl-3 pr-4 text-white rounded md:p-0' key={item.id}>
        {item.label}
        </li>))}
      </ul>
    </div>
  )
}

export default function Navbar() {
  return (
    <>
      <nav className="text-white bg-cyan-500 w-full top-0 left-0 border-black z-20 fixed">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-5">
          <div className="flex items-center cursor-pointer text-black">
            <span className="text-3xl whitespace-nowrap self-center border-black bg-red-300">
              MyEcommerceShop
            </span>
          </div>
          <NavItems></NavItems>
          <div className="flex md:order-2 gap-2">
            {!isadminView && isAuthUser ? (//check if not adminand is authenticated 
              <Fragment>
                <button>
                  <AiOutlineShoppingCart />
                </button>
                <button>
                  <MdAccountCircle />
                </button>
              </Fragment>
            ) : null}
            {user?.role === 'admin' ? (//if has admin role and authentticated show admin dashboard
              isadminView ? (
                <button className='mt-1.5 inline-block bg-green-500 text-s font-medium px-5 py-3 text-white tracking-wide'>Shop</button>
              ) : (
                <button className='mt-1.5 inline-block bg-green-500 text-s font-medium px-5 py-3 text-white tracking-wide'>Admin Dashboard</button>
              )
            ) : null}
            {isAuthUser ? <button className='mt-1.5 inline-block bg-green-500 text-s font-medium px-5 py-3 text-white tracking-wide'>logout</button> : <button className='mt-1.5 inline-block bg-green-500 text-s font-medium px-5 py-3 text-white tracking-wide'>Login</button>}
            <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillrule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
            </div>

          
        </div>
      </nav>
    </>
  );
}
