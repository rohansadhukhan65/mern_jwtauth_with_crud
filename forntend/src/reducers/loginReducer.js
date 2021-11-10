

const loginReducer = (state = {name : "", pwd:""}, action)=>{

    switch(action.type){
        case 'LOGIN':
            return state = action.data
        default : return state
    }

}




export default loginReducer;