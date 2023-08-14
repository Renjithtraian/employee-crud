
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import MainNavigation from './components/MainNavigation';
import {  useEffect, useState } from 'react';
import EditEmploye from './pages/EditEmploye';
import PopupMsg from './UI/PopupMsg';
import useFetch from './hooks/useFetch';


function App() {

  const navigate = useNavigate()

  const [loading,setLoading] = useState(false)
  const [errors,setErrors] = useState();

  const [showPopup, setShowPopup] = useState(false);
  const perPage = 6; 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const [filtered,setFiltered] = useState([])
  console.log("filteredd",filtered);

  const { sendRequest } = useFetch()

  const fetchUsers = async() => {
    setLoading(true)
    try{
      const response  = await fetch('http://trainingsite.zerone-consulting.net/api.publish/api/employee')
        if(!response.ok){
          throw new Error("Request failed")
        }
        const data = await response.json()
        const totalPages = Math.ceil(data.length / perPage);
        setTotalPages(totalPages);
        setLastPage(totalPages)
        const startIndex = (currentPage - 1) * perPage;
        const endIndex = startIndex + perPage;
        const usersForCurrentPage = data.slice(startIndex, endIndex);
        setFiltered(usersForCurrentPage)
      }
      catch(error){
        setErrors(error.message);
      }
      setLoading(false)
  };

  useEffect(() => {
    fetchUsers()
  },[currentPage])

  const updatedSection = (updatedUser) => {
    console.log("up",updatedUser);
    setFiltered((prevFiltered) =>
      prevFiltered.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
    fetchUsers()
  };
  
  const updatedForm = async(newList) => {
    console.log(newList,"newList");
    setFiltered((prevData) => (
      [newList,...prevData]
    ))
    fetchUsers()
    setCurrentPage(lastPage)
    }

  const deleteItem = async (id) => {
    try {
      await sendRequest({
        url: `http://trainingsite.zerone-consulting.net/api.publish/api/employee/${id}`,
        method: 'DELETE',
      });
      const filteredRes = filtered.filter((item) => item.id !== id);
      setFiltered(filteredRes);
      await fetchUsers();
    } catch (error) {
      setErrors(error.message);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  
  return (
    <div className="App">
      {loading && <PopupMsg title="Loading..."/>}
      {showPopup && <PopupMsg title="Employee data added auccessfully"/>}
      <MainNavigation/>
      <main className='main'>
      <Routes>
        <Route path='/' element={<Home errors={errors} deleteItem={deleteItem} employeData={filtered} handleNextPage={handleNextPage} currentPage={currentPage} totalPages={totalPages} handlePrevPage={handlePrevPage}/>}/>
        <Route path='Add-employee' element={<AddEmployee setShowPopup={setShowPopup}  updatedForm={updatedForm}/>}/>
        <Route path=':id' element={<EditEmploye updatedSection={updatedSection}/>}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
