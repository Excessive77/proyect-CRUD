import axios from 'axios'


const getUsers = async () => {

    const url = 'https://users-crud1.herokuapp.com/users/'
    const req = await axios.get(url)
  return req
}

export default getUsers