import { toast, ToastContainer } from 'react-toastify';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ExplorePage from './pages/ExplorePage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';

import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';
import { IInitSpinnerState } from './redux/reducers/spinnerReducer';

const Loader = styled(Spinner)`
  position: fixed;
  top: 20%;
  margin: 0 auto;

  z-index: 942904029;

  width: 500px;
  height: 500px;

  color: var(--primary);
`;

function App() {
  const spinnerData = useSelector((state: any) => state.spinner);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile/" element={<ProfilePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      {spinnerData.active && (
        <Loader animation="grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </Loader>
      )}
    </div>
  );
}

export default App;
