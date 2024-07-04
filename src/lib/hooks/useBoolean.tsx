'use client'
import { useState } from 'react';

type UseBooleanReturn<Name extends string> = {
  [K in `is${Name}Open` | `toggle${Name}` | `close${Name}`]: K extends `is${Name}Open`
    ? boolean
    : () => void;
};

function useBoolean<Name extends string>(name: Name): UseBooleanReturn<Name> {
  const [value, setValue] = useState(false);

  const toggle = () => setValue((prev) => !prev);
  const close = () => setValue(false);

  return {
    [`is${name}Open`]: value,
    [`toggle${name}`]: toggle,
    [`close${name}`]: close,
  } as UseBooleanReturn<Name>;
}

export default useBoolean;
