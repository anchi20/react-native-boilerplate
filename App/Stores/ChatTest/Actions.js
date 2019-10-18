import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // This action is triggered when the application starts
  goToChatPage: null,
})

export const ChatTestTypes = Types
export default Creators
