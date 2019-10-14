import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // This action is triggered when the application starts
  goToFirebasePage: null,
})

export const FirebaseTestTypes = Types
export default Creators
