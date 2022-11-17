import React, { useRef, useState } from 'react';
import Navbar from '@components/Header/Navbar';
import NavScreen from '@components/Header/NavScreen';

const Header = () => {
  const tabs: string[] = ['Home', 'Recipes', 'Ingredients', 'Drink', 'Liked'];
  const [isShowNavScreen, setIsShowNavScreen] = useState<boolean>(false);
  const navScreen = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleNavScreen = () => {
    const body: HTMLBodyElement =
      document.querySelector<HTMLBodyElement>('body')!;
    if (!isShowNavScreen) {
      setIsShowNavScreen(true);
      body.style.overflowY = 'scroll';
      body.style.position = 'fixed';
      navScreen.current!.style.height = '100%';
      navScreen.current!.style.opacity = '1';
    } else {
      setIsShowNavScreen(false);
      body.style.overflowY = 'auto';
      body.style.position = 'static';
      navScreen.current!.style.height = '0%';
      navScreen.current!.style.opacity = '0';
    }
  };

  return (
    <header>
      <Navbar
        toggleNavScreen={toggleNavScreen}
        isDark={isDark}
        isShowNavScreen={isShowNavScreen}
        tabs={tabs}
      />
      <NavScreen tabs={tabs} navScreen={navScreen} />
    </header>
  );
};

export default Header;
