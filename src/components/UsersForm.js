
import { useForm } from 'react-hook-form'



const UsersForm = ({onCreate}) => {

    const {register, handleSubmit, reset} = useForm()

    const emptyValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: ''
    }
    


    const onSubmit = (res) => {
        onCreate(res)
        reset(emptyValues)
    }

 

   
  return (
    <div className='userForm mb-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Nuevo Usuario</h2>
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
            <input type="submit" value="Registrar" className='btn btn-success mb-10'/>
        </form>
    </div>
  )
}

export default UsersForm