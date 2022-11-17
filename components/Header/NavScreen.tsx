import React from 'react';
import Icon from '@mdi/react';
import { mdiAccount, mdiGithub, mdiSendCircleOutline } from '@mdi/js';
import ThemeSwitch from '@components/styled/ThemeSwitch';

const Header = (props: any) => {
  return (
    <div className="nav-screen-container" ref={props.navScreen}>
      <div className="nav-screen">
        <nav>
          {props.tabs.map((tab: string) => (
            <a key={tab}>{tab}</a>
          ))}
        </nav>
        <div className="nav-screen__appearance">
          <p>Appearance</p>
          <ThemeSwitch />
        </div>
        <div className="nav-screen__social">
          <button type="button">
            <Icon aria-label="account-icon" path={mdiAccount} />
          </button>
          <button type="button">
            <Icon aria-label="github-icon" path={mdiGithub} />
          </button>
          <button type="button">
            <Icon
              aria-label="telegram-icon"
              path={mdiSendCircleOutline}
              className="nav-screen__social_tg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
