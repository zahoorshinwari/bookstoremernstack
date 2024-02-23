import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
    return (
        <div className='fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-60'
             onClick={onClose}>
            <div onClick={(event) => event.stopPropagation()}
                 className='w-96 h-96 bg-white rounded-xl p-4 flex flex-col relative'>
                <AiOutlineClose className='absolute top-2 right-2 text-3xl text-red-600 cursor-pointer'
                                onClick={onClose} />
                <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>{book.publishYear}</h2>
                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className='flex justify-start items-center gap-x'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <p>this is book explanation</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam rem, dolorum officia cum fuga harum, amet unde neque commodi ab mollitia facilis ipsa modi nostrum necessitatibus molestiae, corrupti assumenda!</p>
            </div>
        </div>
    );
};

export default BookModal;
