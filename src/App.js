import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={router} fallbackElement={<div className='w-3/12 mx-auto'><progress className="progress w-56 mt-36 text-center"></progress></div>}></RouterProvider>
    </div>
  );
}

export default App;
