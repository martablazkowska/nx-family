'use client';
import { useContext } from 'react';
import cls from 'classnames';
import styles from './mode-toggle.module.scss';
import { ThemeContext } from '@nx-family/shell';

export const ModeToggle = () => {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div
      className={cls(styles.toggle, styles[mode])}
      onClick={() => toggle(mode)}
    >
      <div className={styles.icon}>☾</div>
      <div className={styles.icon}>☀</div>
      <div className={styles.dot} />
    </div>
  );
};
