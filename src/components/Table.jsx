import { useContext } from 'react';
import InputContext from '../context/InputContext';

function Table() {
  const { resetData, inputData } = useContext(InputContext);

  const rows = [];
  const values = [];

  // Iterating data to get column name and their values
  inputData.map((d) => {
    rows.push(Object.keys(d));
    values.push(Object.values(d));
  });

  const columnNames = rows[0];

  return (
    <div>
      <div className="centerWrap">
        <button className="btn" onClick={resetData}>Reset Data</button>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              {columnNames.map((rows, index) => {
                return <th key={index}>{rows}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {values.map((value, index) => {
              return (
                <tr key={index}>
                  {value.map((val, i) => {
                    return <td key={i}>{val}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table