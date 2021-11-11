import {userActionTypes} from '../constants/actionTypes';


const initialState = {
	loginData :{
		email : 'sd@gmail.com',
		pwd : "123456"
	}
}




export const loginReducer = (state = initialState , {type , payload}) =>{

	switch(type){
		case  userActionTypes.LOGIN: return state

		default : return state; 
	}
}