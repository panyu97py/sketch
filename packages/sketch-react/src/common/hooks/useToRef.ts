import { useRef } from 'react';

export const useToRef = <T = any>(value: T) => {
  const valueRef = useRef<T>(value);
  valueRef.current = value;
  return valueRef;
};
