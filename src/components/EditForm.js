import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const EditForm = ({defValues, onEdit}) => {

    const { register, handleSubmit, reset } = useForm();

    const emptyValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: ''
    }

    useEffect(() => {
        if(defValues){
            reset(defValues)
        }
    }, [reset, defValues])


    const onSubmit = (res) => {
        onEdit(res)
        reset(emptyValues)
    }


  return (
    <div className='userForm'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Actualizar usuario</h2>
            <div className="item">
                <label htmlFor="first-name"><i class="bi bi-person-circle"></i></label>
                <div className="name-item">
                    <input type="text" required={true} {...register('first_name')} placeholder='Nombre(s)' id='first-name' className='me-3'/>    
                    <input type="text" required={true} {...register('last_name')} placeholder='Apellido(s)' className='mb-5' />
                </div>
            </div>
            <div className="item">
                <label htmlFor="password"><i className="bi bi-key-fill"></i></label>
                <input type="password" placeholder='password' id='password' required={true} {...register('password')} className='ms-3 mb-5'/>
            </div>
            <div className="item">
                <label htmlFor="email"><i className="bi bi-envelope-fill"></i></label>
                <input type="email" placeholder='email' id='email' required={true} {...register('email')} className='ms-3 mb-5'/>
            </div>
            <div className="item">
                <label htmlFor="birthday"><i className="bi bi-balloon-fill"></i></label>
                <input type="date" placeholder='Fecha de nacimiento' id="birthday" required={true} {...register('birthday')} className='ms-3' />
            </div>
            <input type="submit" value="Actualizar" className='btn btn-warning'/>
        </form>
    </div>
  )
}

export default EditForm