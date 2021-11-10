let registerDetails = {
    name    :"",
    email   :"", 
    pwd     :""
}
const registrationReducer = (state = registerDetails, action)=>{
    switch (action.type) {
        case 'REGISTER':
            
            return state = action.data;
    
        default:
            return state
    }
}

export default registrationReducer;