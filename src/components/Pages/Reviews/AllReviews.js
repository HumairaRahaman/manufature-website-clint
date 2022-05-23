import React from 'react'
import useReview from '../../../hooks/useReview'
import Reviews from './Reviews'

const AllReviews = () => {
    const [reviews, setReviews] = useReview([])
    return (
        <>
        <div className=' px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <p className='text-center text-3xl font-bold text-cyan-600 mb-8'>See All The Reviews</p>
            <div className=' mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 justify-items-center'>
            {
                reviews.map(review =>(
                    
                    <Reviews key={review._id} review = {review}></Reviews>
                   
                ))
            }
            </div>
        </div>
       
       </>
    );
};

export default AllReviews;