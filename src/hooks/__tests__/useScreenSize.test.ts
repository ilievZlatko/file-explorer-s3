import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { useScreenSize } from '../useScreenSize';
import { fireResize } from '../../utils/testHelpers';

describe('useScreenSize', () => {
  it('should return the correct screen width', async () => {
    const { result } = renderHook(() => useScreenSize());

    await waitFor(() => {
      fireResize(800, 600);
    });

    expect(result.current.width).toEqual(800);
  });

  it('should return the correct screen height', async () => {
    const { result } = renderHook(() => useScreenSize());

    await waitFor(() => {
      fireResize(800, 600);
    });

    expect(result.current.height).toEqual(600);
  });
});
