import { render } from '@testing-library/react';

import FeatureNavbar from './feature-navbar';

describe('FeatureNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
