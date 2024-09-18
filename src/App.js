import React, { useEffect } from 'react'
import './App.css';
import NavBar from './components/navbar/Navbar';
// import Card from './components/Card/Card';
import DashBoard from './components/dashboard/Dashboard';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from './actions/DataAction';
const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])
  return allTickets ? (
    <div style={{ paddingTop: "10px" }} >
      <NavBar />
      <hr style={{ marginTop: "10px" }} />
      <DashBoard />
    </div>
  ) : null
}
export default App