const save = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value)); //преобразованиe объектов в JSON
    } catch (err) {
      throw new Error();
    }
};

const get = (key) => {
    try {
      const items = localStorage.getItem(key);
      return items
        ? JSON.parse(items) //преобразованиe JSON обратно в объект
        : null;
    } catch (err) {
      throw new Error();
    }
};

export default { save, get };
