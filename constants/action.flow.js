// @flow

import type { Guy } from './state.flow'

// refer: https://github.com/acdlite/flux-standard-action
export type HelloAction = {
  type: string;
  payload: {
    guys: Array<Guy>
  };
  error?: boolean;
  meta?: any;
}
