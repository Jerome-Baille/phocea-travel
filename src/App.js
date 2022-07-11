import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Activity from './components/Activities/Detail-page';
import Hosting from './components/Hosting/Detail-page';
import Popular from './components/Popular/Detail-page';
import Error404 from './components/Error';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="activity/:id" element={<Activity />} />
        <Route path="hosting/:id" element={<Hosting />} />
        <Route path="popular/:id" element={<Popular />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
