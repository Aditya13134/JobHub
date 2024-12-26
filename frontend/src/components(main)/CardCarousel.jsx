import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import image1 from '@/assets/beauty.jpeg';
import image2 from '@/assets/cutie.jpg';
import image3 from '@/assets/man1.jpg';
import image4 from '@/assets/man2.jpg';
import image5 from '@/assets/nigga.jpg';
import image6 from '@/assets/waaoo.jpg';

const reviews = [
  { id: 1, name: 'Sarah L.', review: 'I found my dream job within a week of signing up!', image: image1 },
  { id: 2, name: 'Rajesh P.', review: 'Great platform for employers to manage applicants.', image: image2 },
  { id: 3, name: 'Amanda C.', review: 'Real-time job notifications are a game-changer!', image: image3 },
  { id: 4, name: 'David M.', review: 'Good experience but needs more listings.', image: image4 },
  { id: 5, name: 'Karen T.', review: 'Efficient and reliable for job seekers.', image: image5 },
  { id: 6, name: 'Miguel R.', review: 'Helpful even for freelancers.', image: image6 },
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review) => (
            <div key={review.id} className="w-full flex-shrink-0">
              <div className="p-5 bg-white shadow-lg rounded-lg">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-60 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-gray-600 mt-2">{review.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CardCarousel;
