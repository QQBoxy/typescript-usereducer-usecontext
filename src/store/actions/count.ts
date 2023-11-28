export type countActions = {
  addCount: (payload: number) => {
    type: 'ADD_COUNT';
    payload: number;
  };
  resetCount: () => { type: 'RESET_COUNT' };
};

export default countActions;
