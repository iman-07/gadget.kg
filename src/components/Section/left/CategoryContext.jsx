import { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const setCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ activeCategory, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  return useContext(CategoryContext);
};
