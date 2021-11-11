import crudActionTypes from '../constants/crudActionTpes';

const initialRead = 
[
    {
		fullName : 'Rohan Sadhukhan',
		email : 'rs@gmail.com',
		pwd : "123456"	
    },
    {
		fullName : 'Rohan Sadhukhan',
		email : 'rs@gmail.com',
		pwd : "123456"	
    },
]


export const createReducer = (state = {}, {type, payload})=>{
        switch (type) {
            case crudActionTypes.CREATE:
                return state;
            default:
                return state;
        }
}

export const readReducer = (state = initialRead, {type, payload})=>{
    switch (type) {
        case crudActionTypes.READ:
            return state;
        default:
            return state;
    }
}