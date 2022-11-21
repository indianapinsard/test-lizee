import React, { createContext, useState, useMemo } from 'react';
import { ItemListResponseType } from './types';

interface ContextType {
  data: ItemListResponseType;
  setData: React.Dispatch<React.SetStateAction<{ page: number; pages: number; items: never[]; }>>;
}

const initialContext = {
  setData: () => {},
  data: {
    page: 0,
    pages: 0,
    items: [],
  },
};

export const Context = createContext<ContextType>(initialContext);

interface Props {
  children: React.ReactNode;
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState(initialContext.data);

  return (
    <Context.Provider value={useMemo(() => ({data, setData}), [data, setData])}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
