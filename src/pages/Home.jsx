import { useContext } from 'react';

import InputContext from '../context/InputContext';

import Spinner from '../components/Spinner';
import Input from '../components/Input';
import Table from '../components/Table';

function Home() {
  const { inputData, isLoading } = useContext(InputContext);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {!inputData ? <Input /> : <Table />}
    </>
  )
}

export default Home