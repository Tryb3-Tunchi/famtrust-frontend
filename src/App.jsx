import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/Layout/MainLayout';
import TopBar from './components/TopBar';
import Transaction from './pages/transaction';
import FundRequest from './pages/fundRequest';
import Submit from './pages/submit';
import NewsLetter from './pages/newsLetter';
import ModalCreateNewSub from './pages/SubAcctCreation/ModalCreateNewSub';
import SuBAcctCreation from './pages/SubAcctCreation/SuBAcctCreation';
import Created from './pages/SubAcctCreation/created';
import SignUpForm from './pages/SubAcctCreation/sign-upForm';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/transaction.jsx" element={<Transaction />} />
          <Route path="/fundRequest.jsx" element={<FundRequest />} />
          <Route path="/submit.jsx" element={<Submit />} />
          <Route path="/newsLetter.jsx" element={<NewsLetter />} />
          <Route path="/sign-upForm.jsx" element={<SignUpForm />} />
          <Route
            path="/ModalCreateNewSub.jsx"
            element={<ModalCreateNewSub />}
          />
          <Route path="/SuBAcctCreation.jsx" element={<SuBAcctCreation />} />
          <Route path="/created.jsx" element={<Created />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
