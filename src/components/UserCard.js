

const UserCard = ({userObj, onDelete, onEdit}) => {

    
  return (

      <div className="card">
        <div clasNames="card-body">
          <h1 className="card-title">{userObj.first_name} {userObj.last_name}</h1>
          <p className="card-text">{userObj.email}</p>
          <p className="card-text">{userObj.birthday}</p>
          <button onClick={() => onDelete(userObj.id)} className='btn btn-danger me-5'>Eliminar usuario</button>
          <button onClick={() => onEdit(userObj)} className='btn btn-primary'>Editar usuario</button>
        </div>
      </div>
  )
}

export default UserCard