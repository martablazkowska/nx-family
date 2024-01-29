import { Footer } from '@nx-family/shared-ui';

import { FOOTER_ITEMS } from './feature-footer.const';

export function FeatureFooter() {
  return <Footer items={FOOTER_ITEMS} />;
}

export default FeatureFooter;
