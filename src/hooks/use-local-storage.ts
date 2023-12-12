import { useCallback, useEffect, useState } from 'react';

export default function useLocalStorage(key: string, defaultValue?: unknown) {
  const getLocalStorage = useCallback(() => {
    const cleansedKey = key.toLowerCase();

    try {
      const item = localStorage.getItem(cleansedKey);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.log(error);
      return defaultValue ?? null;
    }
  }, [defaultValue, key]);

  const setLocalStorage = (newValue: unknown) => {
    const cleansedKey = key.toLowerCase();

    try {
      localStorage.setItem(cleansedKey, JSON.stringify(newValue));
      setValue(newValue);
    } catch (error) {
      console.log(error);
    }
  }

  const [value, setValue] = useState(getLocalStorage);

  useEffect(() => {
    const item = getLocalStorage();
    if (item) {
      setValue(item);
    }
  }, [getLocalStorage]);

  return [value, setLocalStorage];
}