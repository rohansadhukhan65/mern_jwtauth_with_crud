const UserLogin = (data)=>{
    return{
        type: 'LOGIN',
        data: data
    }
}

const UserRegister = (data)=>{
    return{
        type: 'REGISTER',
        data: data
    }
}


export {
    UserLogin,
    UserRegister 
}