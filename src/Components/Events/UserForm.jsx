import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { BsSave } from 'react-icons/bs'


 const UserForm = ({ preloadedValues }) => {
     const [edit, setEdit] = useState(true)
    const { register, handleSubmit } = useForm({
        defaultValues: preloadedValues
    })

    const onSubmit = eventData => {
        console.log(eventData)
    }

    return (<>
        <form onSubmit={handleSubmit(onSubmit)} className='eventForm'>
            <input className='eventName' {...register('name', { required: true })} type='text' readOnly={edit} disabled= {edit} />
            <div className='eventOptions-container'>
                <p className='optionEvent' onClick={()=> setEdit(!edit)}>Edit  <AiOutlineEdit /></p>
                <p className='optionEvent'>Delete  <AiOutlineDelete /></p>
            </div>
            <div className='eventDetailInfo-container'>
                <div className='eventImg-container'>
                    {edit? 
                    <img src={preloadedValues.photo} />                   
                    :  <input type="image" {...register('photo')} placeholder='event photo'/>}
                </div>
                <hr />
                <div className='info-container'>
                    <div className='input-container'>
                        <label>Discipline: </label>
                        <input className='eventDiscipline'  {...register('discipline', { required: true })}readOnly={edit} disabled= {edit}/>
                    </div>

                    <div className='input-container'>
                        <label>Country: </label>
                        <input className='eventCountry' {...register('country', { required: true })} readOnly={edit} disabled= {edit}/>
                    </div>

                    <div className='input-container'>
                        <label>Address: </label>
                        <input className='eventAdress' {...register('address', { required: true })} readOnly={edit} disabled= {edit}/>
                    </div>

                    <div className='input-container'>
                        <label>Date: </label>
                        <input className='eventDate' {...register('date', { required: true })} readOnly={edit} disabled= {edit}/>
                    </div>

                    <div className='input-container'>
                        <label>Director: </label>
                        <input className='eventDirector'  {...register('director')} readOnly={edit} disabled= {edit}/>
                    </div>

                </div>
                <div className={edit?'save-containerOff': 'save-container'}>
                    <button onClick={()=> setEdit(!edit)} className='saveBtn' type='submit'>Save<br /><BsSave className='save' /></button>
                </div>
            </div>
        </form>
    </>
    )
}

export default UserForm