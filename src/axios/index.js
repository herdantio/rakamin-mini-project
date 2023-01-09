import axios from "axios";

export default axios.create({
    baseURL: 'https://todo-api-18-140-52-65.rakamin.com',
    headers: {
        Authorization:  `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJleHAiOjE2ODE4MzMzMTN9.W9boHCH0UCOwKjRuqtEYKls8nlIL-_yiAKi8rFtvG5k`
    }
})

// const instance = axios.create({
//     baseURL: 'https://todo-api-18-140-52-65.rakamin.com',
//     headers: {
//         Authorization:  `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJleHAiOjE2ODE4MzMzMTN9.W9boHCH0UCOwKjRuqtEYKls8nlIL-_yiAKi8rFtvG5k`
//     }
// })

// instance.get('/todos').then(res=> {
//     console.log(res.data)
// })