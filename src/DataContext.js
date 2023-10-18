import React, { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export const MyProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    // Carga el archivo JSON con las variables globales
    fetch((`http://localhost:3000/data.json`))
      .then((response) => response.json())
      .then((data) => setGlobalData(data))
  }, []);

  return (
    <DataContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(DataContext);
};
// export default DataContext;