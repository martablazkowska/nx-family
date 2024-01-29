import Link from 'next/link';

import { NavbarPros } from './navbar.types';
import styles from './navbar.module.scss';

export const Navbar = ({ items }: NavbarPros) => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.logo} href="/">
        <span className={styles.colored}>F</span>BL
      </Link>
      <ul className={styles.links}>
        {items.map(({ label, path }) => (
          <li key={`NAVBAR_ITEM_${label}`}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
