
import './App.css'
import Cart from './components/cart/Cart'
import Courses from './components/courses/Courses'

function App() {
 

  return (
    <>
    <div className='bg-gray-300'>
      <h1 className='text-3xl font-bold text-center py-6'>Course Registration</h1>
      <div className='grid grid-cols-4'>
        <Courses></Courses>
        <Cart></Cart>
      </div>
      
    </div>
      
      
    </>
  )
}

export default App
