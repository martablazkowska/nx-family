import React from 'react';
import styles from './page.module.scss';

import { ReceiptsGallery } from '@nx-family/feature-receipts';

const ReceiptsPage = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Katalog <span className={styles.coloured}>przepisów</span>
      </h1>
      <h2>Przepisy na róne okazje</h2>
      <ReceiptsGallery />
    </div>
  );
};

export default ReceiptsPage;
