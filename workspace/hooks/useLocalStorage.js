import {useState} from 'react';

const getStoredValue = (key, initialValue) => {
  try {
    const item = window.localStorage.getItem(key);
    if (typeof item === 'string') {
      return JSON.parse(item);
    }
    return initialValue;
  } catch (error) {
    return initialValue;
  }
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(getStoredValue(key, initialValue));

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {}
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
