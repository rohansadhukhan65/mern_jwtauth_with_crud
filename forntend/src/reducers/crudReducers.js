const crudReducers = (state = [], action)=>{
        switch (action.type) {
            case 'CREATE':
                
                return state = state.append(action.data) ;
            default: return state
        }
};

export default crudReducers;