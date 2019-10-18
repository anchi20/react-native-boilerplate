import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { FirebaseTestTypes } from 'App/Stores/FirebaseTest/Actions'
import { ChatTestTypes } from 'App/Stores/ChatTest/Actions'

import { goToFirebase } from './FirebaseTestSaga'
import { goToChat} from './ChatTestSaga'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    takeLatest(FirebaseTestTypes.GO_TO_FIREBASE_PAGE, goToFirebase),
    takeLatest(ChatTestTypes.GO_TO_CHAT_PAGE, goToChat)
  ])
}
