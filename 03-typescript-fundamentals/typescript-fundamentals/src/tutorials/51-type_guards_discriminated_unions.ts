// TYPE GUARDS - DISCRIMINATED UNIONS
type IncrementAction = {
  type: 'increment'; // Unique literal property (Discriminator)
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: 'decrement'; // Unique literal property (Discriminator)
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
  switch (action.type) {
    case 'increment':
      return action.amount + state;
    case 'decrement':
      return action.amount - state;
    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action: ${unexpectedAction}`);
  }
}

const newState = reducer(15, {
  type: 'increment',
  amount: 5,
  timestamp: 123456,
  user: 'john',
});
