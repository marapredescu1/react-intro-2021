import { useMemo } from 'react';
import styles from './Button.module.css';

const validColors = ['primary', 'secondary', 'default'];
const validVariants = ['raised', 'outlined', 'default'];

export const Button = ({
  children = [],
  className,
  color = 'default',
  variant = 'default',
  disabled,
  ...rest
}) => {
  const isIcon = useMemo(
    () => !Array.isArray(children) && children.type && children.type.type && children.type.type.name.endsWith('Icon'),
    [children],
  );
  return (
    <button
      {...rest}
      className={[
        className,
        styles.button,
        validVariants.includes(variant) && styles[variant],
        validColors.includes(color) && styles[color],
        isIcon && styles.icon,
      ].filter(Boolean).join(' ')}
      disabled={disabled}
    >
      {variant !== 'raised' && !disabled && <div className={styles.background} />}
      {variant === 'outlined' && <div className={styles.outline} />}
      {children}
      {variant === 'raised' && <div className={styles.overlay} />}
    </button>
  );
};

export default Button;
