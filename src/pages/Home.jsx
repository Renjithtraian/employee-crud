import React from 'react'
import "./details.scss";
import EmployeCard from '../components/EmployeCard';
import Pagination from './Pagination';

const Home = ({employeData,deleteItem,errors,handleNextPage,handlePrevPage,totalPages,currentPage}) => {
 
  return (
    <div>
    <div className='home'>
      {errors && <p>{errors}</p>}
      {
        employeData?.map((list) => (
              <EmployeCard key={list.employeeID} deleteItem={deleteItem} list={list}/>
        ))
      }
     </div>
      <Pagination handleNextPage={handleNextPage} currentPage={currentPage} totalPages={totalPages} handlePrevPage={handlePrevPage}/>
    </div>
  )
}

export default Home