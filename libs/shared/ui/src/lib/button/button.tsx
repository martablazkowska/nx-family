import { ButtonProps } from './button.types';
import styles from './button.module.scss';

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};
