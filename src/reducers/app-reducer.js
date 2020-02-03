const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

const initialState = {
  modalIsOpen: false
};

const appReducer = function(state = initialState, action) {
  switch(action.type) {

    case OPEN_MODAL:
      return { ...state, modalIsOpen: true }

    case CLOSE_MODAL:
      return { ...state, modalIsOpen: false }

    default:
      return state
  }
}

export const openModal = () => ({type: OPEN_MODAL})
export const closeModal = () => ({type: CLOSE_MODAL})

export default appReducer;