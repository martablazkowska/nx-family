import { Button } from '@nx-family/shared-ui';

import styles from './page.module.scss';
import Link from 'next/link';

export default async function Index() {
  return (
    <div className={styles.page}>
      <h1 className={styles.hero}>
        Co <span className={styles.coloured}>dzisiaj</span> robimy?
      </h1>
      <div className={styles.buttons}>
        <Link href="/plans" passHref>
          <Button>Plany lekcji</Button>
        </Link>
        <Link href="/receipts" passHref>
          <Button>Przepisy</Button>
        </Link>
      </div>
    </div>
  );
}
