import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useSnackbar } from 'notistack' // Import useSnackbar
import { enqueueSnackbar } from 'notistack' // Import enqueueSnackbar

const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  const { enqueueSnackbar } = useSnackbar() // Use useSnackbar correctly

  const handleDeleteBook = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setLoading(false)
        enqueueSnackbar('Deleted Book successfully', { variant: 'success' }) // Correct usage
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        enqueueSnackbar('Error', { variant: 'error' }) // Correct usage
        console.log(error);
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3>Are You Sure You want to delete this book?</h3>
      
        <button 
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>

      </div>
    </div>
  )
}

export default DeleteBook
