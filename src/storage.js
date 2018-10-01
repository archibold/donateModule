const storage = () => {
  const getItem = (item) => {
    return localStorage.getItem(item);
  }

  const setItem = (item, value) => {
    return localStorage.setItem(item, value);
  }

  const removeItem = (item) => {
    return localStorage.removeItem(item);
  }

  const getAll = () => {
    return localStorage;
  }

  return {
    getAll,
    getItem,
    setItem,
    removeItem,
  }
}

export default storage();
