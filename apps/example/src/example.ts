export const setFooAction = (newFoo: string) => ({
  type: 'SET_FOO',
  payload: {
    foo: newFoo,
  },
});

export default function reducer(state: { foo?: string } = {}, action) {
  if (action.type === 'SET_FOO') {
    const state2 = state || {};
    const action2 = action || {};
    return {
      ...state2,
      foo: action2.payload.foo,
    };
  }
  return state;
}
