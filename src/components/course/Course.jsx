import { FaDollarSign } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Course = ({course , handleAddCourse}) => {
    const {id, image,title,credit_hour,price,course_details } = course
    return (
        <div className=''>
            <div className='flex flex-col h-full p-4 bg-white rounded-xl'>
                <div>
                    <img className='rounded-lg' src={image} alt="" />
                    <h1 className='text-lg font-semibold'>{title}</h1>
                    <p className='text-sm'>{course_details}</p>
                </div>
                
                <div className='mt-auto'>
                    <div className='flex justify-between mt-4 px-2'>
                        <div className='flex items-center gap-2'>
                            <FaDollarSign></FaDollarSign>
                            <p className='font-medium'>Price: {price}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaBookOpen></FaBookOpen>
                            <p className='font-medium'>Credit: {credit_hour} hr</p>
                        </div>
                    </div>
                    <button 
                    onClick={ function() {handleAddCourse(course)} } 
                    className='mt-6 w-full bg-[#2015FF] font-semibold text-lg p-2 hover:bg-[#201A53] text-white rounded-lg'>Select</button>
                </div>

            </div> 
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object,
    handleAddCourse: PropTypes.func,
}

export default Course;