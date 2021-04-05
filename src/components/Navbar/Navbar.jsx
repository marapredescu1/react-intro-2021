import { Container } from '../Layout';

import styles from './Navbar.module.scss';

export const Navbar = ({
  children,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={[className, styles.navbar].filter(Boolean).join(' ')}
  >
    <Container direction="horizontal" split>
      {children}
    </Container>
  </div>
);

export default Navbar;
