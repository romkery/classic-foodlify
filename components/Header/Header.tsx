import React from 'react';
import Icon from '@mdi/react';
import { mdiAppleKeyboardCommand, mdiMagnify, mdiWeatherSunset } from '@mdi/js';

const tabs = ['Home', 'Recipes', 'Ingredients', 'Drink', 'Liked'];

const Header = () => {
  return (
    <header className="sticky top-0 flex flex-row items-center justify-between w-full h-12 p-5 backdrop-blur bg-tp-white-60">
      <div className="items-center hidden gap-12 sm:flex">
        <div className="cursor-pointer">
          <img src="/logo.svg" alt="foodlify logo" />
          <p className="text-font-default">foodlify</p>
        </div>
        <div className="flex gap-9 sm:gap-10">
          {tabs.map((tab) => (
            <a
              href=""
              key={tab}
              className="py-4 text-font-default-500/60 hover:text-font-default-500 transition ease-in-out duration-250"
            >
              {tab}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row items-center px-2 cursor-pointer border-[0.1rem] py-[0.4rem] rounded-xl border-font-default-500/60 hover:border-customGreen-400">
          <Icon path={mdiMagnify} color="black" size="20" />
          <p className="w-24 ml-2 cursor-pointer text-font-default-500/50">
            Search
          </p>
          <div className="flex flex-row items-center justify-center w-12 h-6 border border-solid rounded-lg border-font-default-500/60 gap-1">
            <Icon path={mdiAppleKeyboardCommand} color="black" size="15" />
            <span>K</span>
          </div>
        </div>
        <button className="px-2 border rounded-xl py-1.5 border-customGreen-200 hover:border-customGreen-400 transition duration-300 ease-in-out">
          Login
        </button>
        <button className="border p-1.5 border-customGreen-200 rounded-xl bg-customGreen-200 hover:bg-customGreen-400 transition duration-300 ease-in-out">
          Register
        </button>
        <Icon
          path={mdiWeatherSunset}
          color="black"
          size="20"
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
