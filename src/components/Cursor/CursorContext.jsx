import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext({
  cursorType: 'default',
  cursorText: '',
  setCursor: () => {},
  resetCursor: () => {}
});

export function CursorProvider({ children }) {
  const [cursorState, setCursorState] = useState({
    type: 'default',
    text: ''
  });

  const setCursor = (type = 'default', text = '') => {
    setCursorState({ type, text });
  };

  const resetCursor = () => {
    setCursorState({ type: 'default', text: '' });
  };

  return (
    <CursorContext.Provider
      value={{
        cursorType: cursorState.type,
        cursorText: cursorState.text,
        setCursor,
        resetCursor
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export const useCursor = () => useContext(CursorContext);
