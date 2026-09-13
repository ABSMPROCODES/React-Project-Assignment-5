import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './Components/Nav';
import Bannar from './Components/Bannar';
import Technology from './Components/Technology';
import Footer from './Components/Footer';
import type { Tprops } from './type';

const Technologyfetch = async (): Promise<Tprops[]> => {
  const res = await fetch('/data.json');
  const data: Tprops[] = await res.json();

  return data;
};

function App() {
  const Technologys = Technologyfetch();

  return (
    <>
      <Nav />

      <Bannar />

      <Suspense fallback={<div>Loading...</div>}>
        <Technology Technologies={Technologys} />
      </Suspense>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
      />
    </>
  );
}

export default App;