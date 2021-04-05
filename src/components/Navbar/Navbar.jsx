import { useEffect, useState } from 'react';
import Measure from 'react-measure';
import { Container } from '../Layout';
import styles from './Navbar.module.scss';

export const Navbar = ({
  children,
  className,
  ...rest
}) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(
    () => {
      window.onscroll = () => {
        setScrollOffset(window.scrollY);
      };
    },
    [setScrollOffset],
  );

  useEffect(
    () => {
      if (scrollOffset - navbarHeight >= 0) {
        setIsFixed(true);
        document.body.style.paddingTop = `${navbarHeight}px`;
      } else {
        setIsFixed(false);
        document.body.style.paddingTop = '0px';
      }
    },
    [scrollOffset, navbarHeight],
  );

  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        setNavbarHeight(contentRect.bounds.height);
      }}
    >
      {({ measureRef }) => (
        <>
          <div
            {...rest}
            className={[
              className,
              styles.navbar,
              isFixed && styles.isFixed,
            ].filter(Boolean).join(' ')}
            ref={measureRef}
          >
            <Container direction="horizontal" split center>
              {children}
            </Container>
          </div>
        </>
      )}
    </Measure>
  );
};

export default Navbar;
