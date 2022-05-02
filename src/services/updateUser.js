import axios from 'axios'


const updateUser = async (id, userObj) => {
    
    const url = `https://users-crud1.herokuapp.com/users/${id}/`
    const req = await axios.put(url, userObj)
  return req
}

export default updateUser