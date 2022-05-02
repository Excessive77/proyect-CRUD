
import './App.css';
import UsersForm from './components/UsersForm';
import UserCard from './components/UserCard';
import postNewUser from './services/postNewUser';
import deleteUser from './services/deleteUser';
import getUsers from './services/getUsers';
import { useEffect, useState } from 'react';
import updateUser from './services/updateUser';
import EditForm from './components/EditForm';



function App() {

  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({})
  const [deleteId, setDeleteId] = useState('')
  const [editDefValues, setEditDefValues] = useState({})
  const [displayForm, setDisplayForm] = useState(false)
  const [editFormRes, setEditFormRes] = useState({})

  useEffect(() => {
    getUsers()
    .then((res) => {
      console.log(res.data)
      setUsers(res.data)
    })
  }, [])


  useEffect(() => {
    if(newUser.first_name){
      postNewUser(newUser)
      .then((res) => {
        console.log(res.data)
        setUsers([...users, res.data])
        setNewUser({})
      })
    } else {
      console.log('No hay valores')
    }
  }, [newUser, users])
  


  useEffect(() => {
      
    const filterUser = (id) => {
      const newArr = users.filter((user) => id !== user.id)
      return newArr
    }
    if(deleteId){
      deleteUser(deleteId)
      .then(() => {
        setUsers(filterUser(deleteId))
      })
    } 
  }, [deleteId, users])


  useEffect(() => {

    const filterUser = (id) => {
      const newArr = users.filter((user) => id !== user.id)
      return newArr
    }

    if(editFormRes.id){
      updateUser(editFormRes.id, editFormRes)
      .then((res) => {
        setUsers([res.data, ...filterUser(editFormRes.id)])
        setEditFormRes({})
      })
    }
  }, [editFormRes, users])

  // const filterUser = (id) => {
  //   const newArr = users.filter((user) => id !== user.id)
  //   return newArr
  // }

  const handlerOnCreateUser = (event) => {
    setNewUser(event)
  }

  const handlerOnDelete = (id) => {
    setDeleteId(id)
  }

  const handlerOnEdit = (obj) => {
    setEditDefValues(obj)
  }

  const handlerOnEditUser = (data) => {
    setEditFormRes(data)
  }

  const userList = users.map((item) => <UserCard userObj={item} onDelete={handlerOnDelete} onEdit={handlerOnEdit} key={item.id}/>)

  return (
    <div className="App">
      <header className="App-header">
        <EditForm onEdit={handlerOnEditUser} defValues={editDefValues}/>
        <button onClick={() => setDisplayForm(!displayForm)} className='mt-5 mb-3'>Crear nuevo usuario</button>
        {
          displayForm && <UsersForm onCreate={handlerOnCreateUser} />
        }

        <div className="container-cards">

          {userList}

        </div>
        
      </header>
    </div>
  );
}

export default App;
