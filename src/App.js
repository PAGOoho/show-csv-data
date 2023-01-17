import { InputProvider } from './context/InputContext';

import Home from './pages/Home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css'

function App() {
  return (
    <InputProvider>
      <Home />
      <ToastContainer />
    </InputProvider>
  );
}

export default App;
