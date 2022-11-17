import React from 'react';
import Icon from '@mdi/react';
import {
  mdiAppleKeyboardCommand,
  mdiMagnify,
  mdiMenu,
  mdiWeatherNight,
  mdiWeatherSunny,
} from '@mdi/js';

const Header = (props: any) => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__left_logo ">
          <img src="/logo.svg" alt="foodlify logo" />
          <p>foodlify</p>
        </div>
        <div className="navbar__left_tabs">
          {props.tabs.map((tab: string) => (
            <a href="" key={tab}>
              {tab}
            </a>
          ))}
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__right__search">
          <Icon path={mdiMagnify} />
          <p>Search</p>
          <div className="navbar__right__search_keycap">
            <Icon path={mdiAppleKeyboardCommand} />
            <span>K</span>
          </div>
        </div>
        <button className="navbar__right_base-btn" type="button">
          Logins
        </button>
        <button className="navbar__right_base-btn" type="button">
          Register
        </button>
        <button className="navbar__right_theme-btn" type="button">
          {props.isDark ? (
            <Icon path={mdiWeatherNight} aria-label="theme-moon-icon" />
          ) : (
            <Icon path={mdiWeatherSunny} aria-label="theme-sun-icon" />
          )}
        </button>
        <button
          className="navbar__right_menu-btn"
          aria-label="telegram-icon"
          onClick={props.toggleNavScreen}
          type="button"
        >
          <Icon path={mdiMenu} />
        </button>
      </div>
    </div>
  );
};

export default Header;
