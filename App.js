import React, { useState } from 'react'; // Import React
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router-related components
import Header from './Component/Header'; // Import Header component
import PrivateRoutes from './Routes/PrivateRoutes';
function App() {

  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  return (
    <Router>
      <Header onFilterChange={handleFilterChange} />
      <PrivateRoutes filterValue={filterValue} />
    </Router>
  );
}


export default App;
