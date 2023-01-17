import { createContext, useState } from 'react';

import Papa from 'papaparse';
import { toast } from 'react-toastify';

const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState(null);

  const inputChange = (data) => {
    setIsLoading(true);
    // Passing file data (data) to parse using Papa.parse
    Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
      error: function (err) {
        setIsLoading(false);
        toast.error(err);
      },
      complete: function (results) {
        setInputData(results.data);
        setIsLoading(false);
        toast.success('Parsing complete.');
      },
    });
  }

  const resetData = () => {
    setInputData(null);
  }

  return (
     <InputContext.Provider value={{
      inputChange,
      resetData,
      isLoading,
      inputData,
    }}>
      {children}
    </InputContext.Provider>
  );
};

export default InputContext;