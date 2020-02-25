import {useCallback, useState} from 'react';

const useInput = (initial) => {
  const [value, setValue] = useState(initial);
  const toggleValue = useCallback((event) => setValue(event.target.value), []);
  return [value, toggleValue];
};

export default useInput;
