import React, { useRef, useState } from "react";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiAirplane,
  mdiAppleKeyboardCommand,
  mdiGithub,
  mdiMagnify,
  mdiMenu,
  mdiWeatherSunset
} from "@mdi/js";
import ThemeSwitch from "@components/styled/ThemeSwitch";

const tabs = ['Home', 'Recipes', 'Ingredients', 'Drink', 'Liked'];

const Header = () => {
  const [isShowNavScreen, setIsShowNavScreen] = useState<boolean>(false);
  const navScreen = useRef<HTMLDivElement>(null);

  const toggleNavScreen = () => {
    const body: HTMLBodyElement =
      document.querySelector<HTMLBodyElement>('body')!;
    if (!isShowNavScreen) {
      setIsShowNavScreen(true);
      body.style.overflowY = 'scroll';
      body.style.position = 'fixed';
      navScreen.current!.style.top = '3.05rem';
      navScreen.current!.style.opacity = '1';
    } else {
      setIsShowNavScreen(false);
      body.style.overflowY = 'auto';
      body.style.position = 'static';
      navScreen.current!.style.top = '-100vh';
      navScreen.current!.style.opacity = '0';
    }
  };

  return (
    <header>
      <div className="navbar">
        <div className="navbar__left">
          <div className="navbar__left_logo ">
            <img src="/logo.svg" alt="foodlify logo" />
            <p>foodlify</p>
          </div>
          <div className="navbar__left_tabs">
            {tabs.map((tab) => (
              <a href="" key={tab}>
                {tab}
              </a>
            ))}
          </div>
        </div>
        <div className="navbar__right">
          <div className="navbar__right__search">
            <Icon path={mdiMagnify}/>
            <p>Search</p>
            <div className="navbar__right__search_keycap">
              <Icon path={mdiAppleKeyboardCommand}/>
              <span>K</span>
            </div>
          </div>
          <button className="navbar__right_base-btn">Logins</button>
          <button className="navbar__right_base-btn">Register</button>
          <button className="navbar__right_theme-btn">
            <Icon path={mdiWeatherSunset} />
          </button>
          <button className="navbar__right_menu-btn" onClick={toggleNavScreen}>
            <Icon path={mdiMenu} />
          </button>
        </div>
      </div>
      <div className="nav-screen-container" ref={navScreen}>
        <div className="nav-screen">
          <nav>
            {tabs.map((tab) => (
              <p key={tab}>{tab}</p>
            ))}
          </nav>
          <div className="nav-screen__appearance">
            <p>Appearance</p>
            <ThemeSwitch />
          </div>
          <div className="nav-screen__social">
            <Icon path={mdiAccount} />
            <Icon path={mdiGithub}  />
            <Icon path={mdiAirplane}  />
          </div>
        </div>
        </div>
    </header>
  );
};

export default Header;
