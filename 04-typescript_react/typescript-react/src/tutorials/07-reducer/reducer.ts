export type CounterState = {
  count: number;
  status: string;
};

// Initial state
export const initialState: CounterState = {
  count: 0,
  status: 'Pending',
};

// Counter reducer
export const counterReducer = (
  state: CounterState,
  action: any
): CounterState => {
  return state;
};
