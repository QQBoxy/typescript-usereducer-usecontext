export type listActions = {
  addList: (payload: string) => {
    type: 'ADD_LIST';
    payload: string;
  };
  resetList: () => { type: 'RESET_LIST' };
};

export default listActions;
