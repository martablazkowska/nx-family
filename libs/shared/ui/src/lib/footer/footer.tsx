import { FooterProps } from './footer.types';

import styles from './footer.module.scss';
import Link from 'next/link';

export function Footer({ items }: FooterProps) {
  return (
    <ul className={styles.footer}>
      {items.map(({ label, path }) => (
        <li key={`FOOTER_ITEM_${label}`}>
          <Link href={path}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Footer;
