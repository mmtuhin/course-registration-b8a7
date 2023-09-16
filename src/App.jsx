
import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/cart/Cart'
import Courses from './components/courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItem, setCartItem ] = useState([])

  const initialTotalCredit = cartItem.reduce((total, item) => total + item.credit_hour, 0);
    const [totalCredit, setTotalCredit] = useState(initialTotalCredit);

    useEffect(() => {
        const newTotalCredit = cartItem.reduce((total, item) => total + item.credit_hour, 0);
        
            setTotalCredit(newTotalCredit);
        
        
    }, [cartItem]);

  const handleAddCourse = (course) => {

    const isExist = cartItem.find(item => item.id == course.id)
    
    if(!isExist){
      const newTotalCredit = totalCredit + course.credit_hour;
      if (newTotalCredit <= 20) {
        const newCartItems = [...cartItem, course];
        setCartItem(newCartItems);
        setTotalCredit(newTotalCredit);
    } else {
      toast("You can't take more than 20 credits!");
    }
    }
    else{
      toast("This course is already added!")
    }
  }
  

  return (
    <>
    <div className='bg-gray-300 px-4'>
      <h1 className='text-3xl font-bold text-center py-6'>Course Registration</h1>
      <div className='grid grid-cols-4 gap-3'>
        <Courses handleAddCourse={handleAddCourse}></Courses>
        <Cart cartItem={cartItem} totalCredit={totalCredit}></Cart>
      </div>
      <ToastContainer></ToastContainer>
      
    </div>
      
      
    </>
  )
}

export default App
