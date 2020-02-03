import {toNumber} from './../../helper/number';
import {ERROR_DIV_ZERO, ERROR_VALUE} from './../../error';

export const SYMBOL = '/';

export default function func(first, ...rest) {
  const result = rest.reduce((acc, value) => acc / toNumber(value), toNumber(first));

  if (result === Infinity) {
    // handle 1/0, return as 0 rather than Infinity
    return 0
  }
  if (isNaN(result)) {
    if (toNumber(rest[0]) === 0) {
      // handle 0/0, this returns NaN
      return 0
    }
    throw Error(ERROR_VALUE);
  }

  return result;
}

func.SYMBOL = SYMBOL;
