import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../';
import { theme } from '../../../styles/theme';
import GlobalStyles from '../../../styles/global';

describe('Button component', () => {
  it('renders button correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Button label="Test button" />
      </ThemeProvider>
    );

    const btn = screen.getByText(/Test button/);
    expect(btn).toBeInTheDocument();
  });

  it('renders as "primary" by default', () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Button label="Test button" />
      </ThemeProvider>
    );

    const btn = screen.getByText(/Test button/);
    expect(btn).toHaveStyle(`
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    `);
  });

  it('renders as "secondary" appearance', () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Button appearance="secondary" label="Test button" />
      </ThemeProvider>
    );

    const btn = screen.getByText(/Test button/);
    expect(btn).toHaveStyle(`
      background-color: transparent;
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primaryText};
    `);
  });

  it('should respond to click', () => {
    const handler = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Button appearance="secondary" label="Test button" onClick={handler} />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText(/Test button/i));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('should not fire click event if disabled', () => {
    const handler = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Button disabled appearance="secondary" label="Test button" onClick={handler} />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText(/Test button/i));
    expect(handler).not.toHaveBeenCalled();
  });
});
