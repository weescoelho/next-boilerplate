import { render, screen } from '@testing-library/react';
import { Main } from '.';

describe('<Main/>', () => {
  it('should render main component', () => {
    const { container } = render(<Main />);
    expect(
      screen.getByRole('heading', { name: /Next Boilerplate/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render the colors correctly', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveStyle({ color: 'blueviolet' });
  });
});
