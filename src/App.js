import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ManageGraphForm from './components/ManageGraphForm';
import GraphListing from './components/GraphListing';
import ViewGraph from './components/ViewGraph';
import GraphApp from './GraphApp';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
        <Route path="/manage-graph" element={<ManageGraphForm />} />
        
        <Route path="/graph-listing" element={<GraphListing />} />
        
        <Route path="/view-graph/:id" element={<ViewGraph />} />

        {/* <Route path="/graphs" element={<GraphApp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
