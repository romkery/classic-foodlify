import { MutableRefObject, useEffect } from 'react';

const useReceiptCardAnimation = (
  container: MutableRefObject<HTMLDivElement>,
  receipt: MutableRefObject<HTMLDivElement>
) => {
  useEffect(() => {
    container.current.addEventListener('mousemove', (e: MouseEvent) =>
      setElementAnimation(e)
    );
    receipt.current.addEventListener('mouseleave', () => {
      resetElementAnimation();
    });
  }, []);

  useEffect(
    () => () => {
      container.current.removeEventListener('mousemove', (e: MouseEvent) =>
        setElementAnimation(e)
      );
      receipt.current.removeEventListener('mouseleave', () => {
        resetElementAnimation();
      });
    },
    []
  );

  const resetElementAnimation = () => {
    container.current.style.transform = `initial`;
    container.current.style.background = `initial`;
  };

  const setElementAnimation = (e: MouseEvent) => {
    const getRotateValue = (type: string) => {
      const half = container.current.clientWidth / 2;
      if (type === 'X')
        return ((e.pageY - container.current.offsetTop - half) / half) * 1.5;
      else
        return -((e.pageX - container.current.offsetLeft - half) / half) * 1.5;
    };

    container.current.style.transform = `perspective(500px) 
      rotateX(${getRotateValue('X')}deg) 
      rotateY(${getRotateValue('Y')}deg)`;

    container.current.style.background = `radial-gradient(circle at 
      ${e.pageX - container.current.offsetLeft}px 
      ${
        e.pageY - container.current.offsetTop
      }px, #2C78734D, hsl(83, 52%, 85%))`;
  };

  return { container, receipt, resetElementAnimation, setElementAnimation };
};

export default useReceiptCardAnimation;
