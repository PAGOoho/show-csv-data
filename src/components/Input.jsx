import { useContext } from 'react';
import InputContext from '../context/InputContext';

function Input() {
  const { inputChange } = useContext(InputContext);

  const changeHandler = (e) => {
    inputChange(e.target.files[0]);
  };

  return (
    <div className="inputWrap">
      <h1>Show me the Data!</h1>
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={changeHandler}
        className="file-input file-input-bordered w-full max-w-xs"
      />
    </div>
  )
}

export default Input