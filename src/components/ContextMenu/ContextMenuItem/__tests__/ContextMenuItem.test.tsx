import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { FaFolder } from 'react-icons/fa';
import { theme } from '../../../../styles/theme';
import GlobalStyles from '../../../../styles/global';
import ContextMenuItem from '..';

describe('ContextMenuItem', () => {
  it('renders correctly', () => {
    const handler = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextMenuItem label="Test item" event="test-event" onClick={handler} />
      </ThemeProvider>
    );

    const menuItem = screen.getByText(/Test item/i);
    expect(menuItem).toBeInTheDocument();
  });

  it('renders text and icon', () => {
    const handler = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextMenuItem
          label="Test item"
          event="test-event"
          onClick={handler}
          icon={<FaFolder data-testid="icon" />}
        />
      </ThemeProvider>
    );

    const menuItem = screen.getByText(/Test item/i);
    const icon = screen.getByTestId('icon');
    expect(menuItem).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('responds to click events', () => {
    const handler = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextMenuItem
          label="Test item"
          event="test-event"
          onClick={handler}
          icon={<FaFolder data-testid="icon" />}
        />
      </ThemeProvider>
    );

    const item = screen.getByTestId('menu-item');
    fireEvent.click(item);

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0]).toEqual('test-event');
  });
});
