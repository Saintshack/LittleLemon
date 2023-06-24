import { render, screen } from '@testing-library/react';
import App from './App';
import { renderHook, act } from '@testing-library/react-hooks';
import { initializeTimes, updateTimes } from './Main';



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


jest.mock('./fetchAPI', () => ({
  fetchAPI: jest.fn(() => Promise.resolve(['time1', 'time2', 'time3'])),
}));

describe('initializeTimes', () => {
  it('should return the expected initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => initializeTimes());

   
    await waitForNextUpdate();

    const initialTimes = result.current;

    expect(initialTimes).toEqual(['time1', 'time2', 'time3']);


  });
});

describe('updateTimes', () => {
  it('should return the same value as the provided state', () => {
    const state = ['time1', 'time2', 'time3'];
    const { result } = renderHook(() => updateTimes(state));
    const updatedTimes = result.current;

    expect(updatedTimes).toEqual(state);

  });
});
