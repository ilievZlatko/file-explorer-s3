import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Text } from '../';
import { theme } from '../../../styles/theme';
import GlobalStyles from '../../../styles/global';

describe('Text component', () => {
  it('renders correctly', () => {
    const testTheme = { ...theme };
    render(
      <ThemeProvider theme={testTheme}>
        <GlobalStyles />
        <Text>This is test</Text>
      </ThemeProvider>
    );

    const text = screen.getByText(/This is test/);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('This is test');
  });

  it('renders correct font style with props variant="p1" and tag="p"', () => {
    const testTheme = { ...theme };
    render(
      <ThemeProvider theme={testTheme}>
        <GlobalStyles />
        <Text variant="p1" tag="p">
          This is test
        </Text>
      </ThemeProvider>
    );

    const text = screen.getByText(/This is test/);
    expect(text).toHaveStyle(`
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    `);
  });

  it('renders correct font style with props variant="p2" and tag="p"', () => {
    const testTheme = { ...theme };
    render(
      <ThemeProvider theme={testTheme}>
        <GlobalStyles />
        <Text variant="p2" tag="p">
          This is test
        </Text>
      </ThemeProvider>
    );

    const text = screen.getByText(/This is test/);
    expect(text).toHaveStyle(`
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
    `);
  });

  it('renders correct font style with props tag="p" and variant="button"', () => {
    const testTheme = { ...theme };
    render(
      <ThemeProvider theme={testTheme}>
        <GlobalStyles />
        <Text variant="button" tag="p">
          This is test
        </Text>
      </ThemeProvider>
    );

    const text = screen.getByText(/This is test/);
    expect(text).toHaveStyle(`
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    `);
  });

  it('renders correct font style with props tag="p" and variant="message"', () => {
    const testTheme = { ...theme };
    render(
      <ThemeProvider theme={testTheme}>
        <GlobalStyles />
        <Text variant="message" tag="p">
          This is test
        </Text>
      </ThemeProvider>
    );

    const text = screen.getByText(/This is test/);
    expect(text).toHaveStyle(`
      font-size: 12px;
      font-weight: 300;
      line-height: 16px;
    `);
  });

  it('renders correct font style with props tag="h1" and variant="h1"', () => {
    const testTheme = { ...theme };
    render(
      <ThemeProvider theme={testTheme}>
        <GlobalStyles />
        <Text variant="h1" tag="h1">
          This is test
        </Text>
      </ThemeProvider>
    );

    const text = screen.getByText(/This is test/);
    expect(text).toHaveStyle(`
      font-size: 32px;
      font-weight: 600;
      line-height: 40px;
    `);
  });

  it('renders correct font style with props tag="h2" and variant="h2"', () => {
    const testTheme = { ...theme };
    render(
      <ThemeProvider theme={testTheme}>
        <GlobalStyles />
        <Text variant="h2" tag="h2">
          This is test
        </Text>
      </ThemeProvider>
    );

    const text = screen.getByText(/This is test/);
    expect(text).toHaveStyle(`
      font-size: 28px;
      font-weight: 600;
      line-height: 36px;
    `);
  });

  it('renders correct font style with props tag="h3" and variant="h3"', () => {
    const testTheme = { ...theme };
    render(
      <ThemeProvider theme={testTheme}>
        <GlobalStyles />
        <Text variant="h3" tag="h3">
          This is test
        </Text>
      </ThemeProvider>
    );

    const text = screen.getByText(/This is test/);
    expect(text).toHaveStyle(`
      font-size: 24px;
      font-weight: 600;
      line-height: 24px;
    `);
  });

  it('renders correct font style with props tag="h4" and variant="h4"', () => {
    const testTheme = { ...theme };
    render(
      <ThemeProvider theme={testTheme}>
        <GlobalStyles />
        <Text variant="h4" tag="h4">
          This is test
        </Text>
      </ThemeProvider>
    );

    const text = screen.getByText(/This is test/);
    expect(text).toHaveStyle(`
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
    `);
  });

  it('takes the variant with higher priority over the tag', () => {
    const testTheme = { ...theme };
    render(
      <ThemeProvider theme={testTheme}>
        <GlobalStyles />
        <Text variant="h1" tag="span">
          This is test
        </Text>
      </ThemeProvider>
    );

    const text = screen.getByText(/This is test/);
    expect(text).toHaveStyle(`
      font-size: 32px;
      font-weight: 600;
      line-height: 40px;
    `);
  });
});
