import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasePage from './pages/BasePages';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="new-video" element={<NewVideo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
