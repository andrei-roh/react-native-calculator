export const setToggleState = (
  id: string,
  toggles: Map<string, boolean>,
  setToggles: React.Dispatch<React.SetStateAction<Map<string, boolean>>>,
): void => {
  const currentValue = toggles.get(id);

  toggles.forEach((value, key) => {
    if (key === id) {
      setToggles(toggles.set(id, !currentValue));
    } else if (value === true) {
      setToggles(toggles.set(key, !value));
    }
  });
};
