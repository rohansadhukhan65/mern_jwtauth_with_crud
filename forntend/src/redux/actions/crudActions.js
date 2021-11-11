import crudActionTypes from '../constants/crudActionTpes';


export const Read = () =>{
	return {
		type : crudActionTypes.READ,
		payload : ''
	}
}



export const Create = (userData) =>{
	return {
		type : crudActionTypes.CREATE,
		payload : userData
	}
}