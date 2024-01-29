import { Navbar } from '@nx-family/shared-ui';

import { MENU_ITEMS } from './feature-navbar.const';
import { ModeToggle } from './mode-toggle';

export const FeatureNavbar = () => {
  return (
    <div>
      <ModeToggle />
      <Navbar items={MENU_ITEMS} />
    </div>
  );
};
