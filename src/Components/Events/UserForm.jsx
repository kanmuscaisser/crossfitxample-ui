import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { BsSave } from 'react-icons/bs'
import defaultImg from '../../resources/img/defaultImg.png'
import { putEvent } from '../../util/httpEvents'
import { putPostEventAlert, deleteEventAlert } from '../../util/eventAlerts'


const UserForm = ({ preloadedValues, id }) => {
    const [edit, setEdit] = useState(true)
    const [response, setResponse] = useState(null)
    const [saveData, setSaveData] = useState({})
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: preloadedValues
    })

    const onSubmit = eventData => {
        setSaveData(eventData)
        putEvent(setResponse, id, eventData)
    }
    const onDelete = id => deleteEventAlert(setResponse, id, navigate)

    const setSaveEdit = () => {
        if (saveData.country && saveData.address && saveData.date && saveData.director && saveData.name) {
            setEdit(!edit)
        }
    }

    useEffect(() => {
        if (response) {
            if (response.includes('updated')) {
                putPostEventAlert(response, navigate)
            }
        }
    }, [response])


    return (<>
        <form onSubmit={handleSubmit(onSubmit)} className='eventForm'>
            <input className='eventName' {...register('name', { required: true })} type='text' readOnly={edit} disabled={edit} />
            {errors?.name?.type === 'required' && <p className='errorMessage'>Name is required</p>}

            <div className='eventOptions-container'>
                <p className='optionEvent' onClick={() => setEdit(!edit)}>Edit<AiOutlineEdit /></p>
                <p className='optionEvent' onClick={() => onDelete(id)}>Delete  <AiOutlineDelete /></p>
            </div>
            <div className='eventDetailInfo-container'>
                <div className='eventImg-container'>
                    {edit ?
                        <img src={preloadedValues.photo || defaultImg} />
                        : <input type="image" {...register('photo')} placeholder='event photo' />}
                </div>
                <hr />
                <div className='info-container'>
                    <div className='input-container' >
                        <label>Discipline: </label>
                        <input className='eventDiscipline' {...register('discipline')} readOnly={edit} disabled={edit} />
                    </div>

                    <div className='input-container'>
                        <label>Country: </label>
                        <input className='eventCountry' {...register('country', { required: true })} readOnly={edit} disabled={edit} />
                        {errors?.country?.type === 'required' && <p className='errorMessage'>Country is required</p>}
                    </div>

                    <div className='input-container'>
                        <label>Address: </label>
                        <input className='eventAdress' {...register('address', { required: true })} readOnly={edit} disabled={edit} />
                        {errors?.address?.type === 'required' && <p className='errorMessage'>Address is required</p>}

                    </div>

                    <div className='input-container'>
                        <label>Date: </label>
                        <input className='eventDate' type='date' {...register('date', { required: true })} readOnly={edit} disabled={edit} />
                        {errors?.date?.type === 'required' && <p className='errorMessage'>Date is required</p>}

                    </div>

                    <div className='input-container'>
                        <label>Director: </label>
                        <input className='eventDirector'  {...register('director', { required: true })} readOnly={edit} disabled={edit} />
                        {errors?.director?.type === 'required' && <p className='errorMessage'>Director is required</p>}

                    </div>

                </div>
                <div className={edit ? 'save-containerOff' : 'save-container'}>
                    <button onClick={() => setSaveEdit()} className='saveBtn' type='submit'>Save<br /><BsSave className='save' /></button>
                </div>
            </div>
        </form>
    </>
    )
}

export default UserForm