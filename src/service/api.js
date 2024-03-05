import axios from 'axios'

 const api = axios.create({
    baseURL:"https://blue-violet-seahorse-suit.cyclic.app"
})

export default api