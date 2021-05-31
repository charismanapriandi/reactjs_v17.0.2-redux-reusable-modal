const initialstate = {
    name: null,
    status: false
}

const rootReducers = (state = initialstate, action) => {

    switch (action.type) {
        case 'PROJECT_MODAL' :
            return {
                name: 'PROJECT MODAL',
                status: true
            }
        case 'USER_MODAL' :
            return {
                name: 'USER MODAL',
                status: true
            }
        case 'DELETE_MODAL' :
            return {
                name: 'DELETE MODAL CONFIRMATION',
                status: true
            }
        case 'CLOSE_MODAL' :
            return {
                state
            }
        default : 
            return state;
    }   
    
}

export default rootReducers;