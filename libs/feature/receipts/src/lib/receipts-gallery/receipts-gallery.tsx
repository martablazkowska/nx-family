import Image from 'next/image';
import Img1 from '/public/assets/img/desery.jpg';
import Img2 from '/public/assets/img/cieple_napoje.jpg';
import Img3 from '/public/assets/img/pieczywo.jpg';
import Img4 from '/public/assets/img/przekaski.jpg';

import styles from './receipts-gallery.module.scss';

export const ReceiptsGallery = () => {
  return (
    <div className={styles.gallery}>
      <div>
        <Image
          src={Img1}
          alt="desery"
          fill={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div>
        <Image
          src={Img2}
          alt="ciepłe napoje"
          fill={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div>
        <Image
          src={Img3}
          alt="pieczywo"
          fill={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div>
        <Image
          src={Img4}
          alt="przekąski"
          fill={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};
