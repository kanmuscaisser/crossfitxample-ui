import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { postEvent } from '../../util/httpEvents'
import { useForm } from 'react-hook-form'
import '../../styles/Events/CreateEvent.scss'
import { putPostEventAlert } from '../../util/eventAlerts'
import { BsSave } from 'react-icons/bs'

const CreateEvent = ({ children }) => {
    const [response, setResponse] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm()  
    const navigate = useNavigate()

    const onSubmit = newEvent => postEvent(setResponse, newEvent);
    
    useEffect(()=> {
        if (response) {
           putPostEventAlert(response, navigate)           
        }        
    },[response])

    return (
        <>
            {children}
            <main className='createEvent-main'>
                <h1>Create Event</h1>
                <form className='newEvent-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='newEvent-container'>
                        <label>Name</label>
                        <input type="text" {...register('name', { required: true})} />
                        {errors?.name?.type === 'required' && <p className='errorMessage'>Name is required</p>}
                    </div>
                    <div className='newEvent-container'>
                        <label htmlFor="photo">Logo</label>
                        <input type="file" id="photo" {...register('photo', { required: false })} accept="image/png, .jpeg, .jpg" />
                    </div>
                    <div className='newEvent-container'>
                        <label >Discipline</label>
                        <input type='text' className='eventDiscipline' {...register('discipline', { required: false })} />
                    </div>
                    <div className='newEvent-container'>
                        <label>Country</label>
                        <input className='eventCountry' {...register('country', { required: true })} />
                        {errors?.country?.type === 'required' && <p className='errorMessage'>Country is required</p>}
                    </div>
                    <div className='newEvent-container'>
                        <label>Address</label>
                        <input type='text' className='eventAdress' {...register('address', { required: true })} />
                        {errors?.address?.type === 'required' && <p className='errorMessage'>Address is required</p>}
                    </div>
                    <div className='newEvent-container'>
                        <label>Date</label>
                        <input className='eventDate' type='date' {...register('date', { required: true })} />
                        {errors?.date?.type === 'required' && <p className='errorMessage'>Date is required</p>}
                    </div>
                    <div className='newEvent-container'>
                        <label>Director</label>
                        <input type='text' className='eventDirector'  {...register('director', { required: true })} />
                        {errors?.director?.type === 'required' && <p className='errorMessage'>Director is required</p>}
                    </div>
                    <button className='saveBtn' type='submit'><BsSave className='save' /></button>
                </form>
            </main>
        </>
    )
}

export default CreateEvent