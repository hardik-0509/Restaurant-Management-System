const BASE_URL = 'http://localhost:3000/api'

export const getMenu = async () => {
    const res = await fetch(`${BASE_URL}/menu`)
    return await res.json()
}

export const getConsumers = async () => {
    const res = await fetch(`${BASE_URL}/consumers`)
    return await res.json()
}

export const addConsumer = async (data) => {
    const res = await fetch(`${BASE_URL}/menu`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    return res
}

export const addMenuItem = async (data) => {
    const res = await fetch(`${BASE_URL}/menu`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    return res
}

export const signup = async(data)=>{
   const res = await fetch(`${BASE_URL}/auth/signup`,{
      method:'POST',
      headers:{
         'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
   })

   return await res.json();
}
export const login = async(data)=>{
   const res = await fetch(`${BASE_URL}/auth/login`,{
      method:'POST',
      headers:{
         'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
   })

   return await res.json();
}
export const searchMenu = async(name)=>{

    const res = await fetch(
        `${BASE_URL}/menu/search?name=${name}`
    );

    return await res.json();
}