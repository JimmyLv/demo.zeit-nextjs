// @flow

import type { GuyType } from './state.flow'

export const actionTypes = {
  SAY_HELLO: 'SAY_HELLO',
  SAY_HELLO_DONE: 'SAY_HELLO_DONE',
  SAY_HELLO_ERROR: 'SAY_HELLO_ERROR'
}

// refer: https://github.com/acdlite/flux-standard-action
export type HelloAction = {
  type: $Keys<typeof actionTypes>;
  payload: {
    guys: Array<GuyType>
  };
  error?: boolean;
  meta?: any;
}
