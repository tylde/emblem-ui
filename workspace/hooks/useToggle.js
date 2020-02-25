import {useCallback, useState} from 'react';

const useToggle = (initial) => {
  const [value, setValue] = useState(initial);
  const toggleValue = useCallback(() => setValue((prevValue) => !prevValue), []);
  return [value, toggleValue];
};

export default useToggle;
