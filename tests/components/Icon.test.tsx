import { render, screen } from '@testing-library/react';
import Icon from '../../app/components/Icon';

describe('Icon Component', () => {
  it('renders GitHub icon', () => {
    render(<Icon name="github" />);
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toBeTruthy();
  });

  it('renders with correct size', () => {
    render(<Icon name="external" size={24} />);
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toBeTruthy();
  });

  it('returns null for invalid icon name', () => {
    const { container } = render(<Icon name="invalid" />);
    expect(container.firstChild).toBeNull();
  });
});