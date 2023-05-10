import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { useBreakpoints } from '../useBreakpoints';
import { fireResize } from '../../utils/testHelpers';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('useBreakpoints', () => {
  it('should detect mobile screen width', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useBreakpoints(), {
      wrapper: ({ children }: { children: React.ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    });

    await waitFor(() => {
      fireResize(380, 600);
    });

    await waitForNextUpdate();

    expect(result.current.isMobile).toEqual(true);
    expect(result.current.isTablet).toEqual(false);
    expect(result.current.isDesktop).toEqual(false);
  });

  it('should detect tablet screen width', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useBreakpoints(), {
      wrapper: ({ children }: { children: React.ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    });

    await waitFor(() => {
      fireResize(992, 600);
    });

    await waitForNextUpdate();

    expect(result.current.isMobile).toEqual(false);
    expect(result.current.isTablet).toEqual(true);
    expect(result.current.isDesktop).toEqual(false);
  });

  it('should detect desktop screen width', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useBreakpoints(), {
      wrapper: ({ children }: { children: React.ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    });

    await waitFor(() => {
      fireResize(1200, 800);
    });

    await waitForNextUpdate();

    expect(result.current.isMobile).toEqual(false);
    expect(result.current.isTablet).toEqual(true);
    expect(result.current.isDesktop).toEqual(false);
  });
});
