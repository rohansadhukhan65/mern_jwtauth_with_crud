import {userActionTypes} from '../constants/actionTypes'

export const userLogin = (userData) =>{
	return {
		type : userActionTypes.LOGIN,
		payload : userData
	}
}

export const userRegister = (userData) =>{
	return {
		type : userActionTypes.REGISTER,
		payload : userData
	}
}