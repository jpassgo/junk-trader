import actions from '../store/actions';

export const init = (name: string) => {
  return {
    type: actions.INITIALIZE,
    username: name,
  }
}
