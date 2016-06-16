import firebase from 'firebase';

const firebaseConf = {
  apiKey: "AIzaSyAHHNXxfL04NxxSYBIawr1qG15p6L9gex0",
  authDomain: "bobonroast.firebaseapp.com",
  databaseURL: "https://bobonroast.firebaseio.com",
  storageBucket: "bobonroast.appspot.com"
};
firebase.initializeApp(firebaseConf);

const C = {
  // Auth actions.
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGOUT: 'LOGOUT',
  LISTENING_TO_AUTH: 'LISTENING_TO_AUTH',

  // Roasts actions.
  FETCHING_ROASTS: 'FETCHING_ROASTS',
  FETCHED_ROASTS: 'FETCHED_ROASTS',
  COMPARE_ROASTS: 'COMPARE_ROASTS',
  ADD_FIRST_CRACK: 'ADD_FIRST_CRACK',

  CREATING_NEW_ROAST: 'CREATING_NEW_ROAST',
  REMOVE_ROAST: 'REMOVE_ROAST',
  CREATE_NEW_ROAST_SUCCESS: 'CREATE_NEW_ROAST_SUCCESS',
  CREATE_NEW_ROAST_FAILED: 'CREATE_NEW_ROAST_FAILED',
  UPDATE_ROAST_VALUE: 'UPDATE_ROAST_VALUE',
  UPDATE_CURRENT_ROAST_VALUE: 'UPDATE_CURRENT_ROAST_VALUE',
  TOGGLE_EDITING_FIELD: 'TOGGLE_EDITING_FIELD',

  // Editing types.
  FIELD_POST_ROAST_NOTE: 'FIELD_POST_ROAST_NOTE',

  // Editing field staatus.
  FIELD_STATUS_LOADING: 'FIELD_STATUS_LOADING',
  FIELD_STATUS_EDITING: 'FIELD_STATUS_EDITING',
  FIELD_STATUS_NOT_EDITING: 'FIELD_STATUS_NOT_EDITING',

  // Roasting actions.
  ROAST_START: 'ROAST_START',
  CHECK_ROAST_IN_PROGRESS: 'CHECK_ROAST_IN_PROGRESS',
  CLEAR_ROAST_IN_PROGRESS: 'CLEAR_ROAST_IN_PROGRESS',

  // StopWatch actions.
  STOPWATCH_START: 'STOPWATCH_START',
  STOPWATCH_TICK: 'STOPWATCH_TICK',
  STOPWATCH_STOP: 'STOPWATCH_STOP',
  STOPWATCH_RESUME: 'STOPWATCH_STOP',

  // New roast status.
  ROAST_UNSAVED: 'ROAST_UNSAVED',
  ROAST_PENDING: 'ROAST_PENDING',
  ROAST_CREATED: 'ROAST_CREATED',
  ROAST_IN_PROGRESS: 'ROAST_IN_PROGRESS',
  ROAST_COMPLETED: 'ROAST_COMPLETED',

  // Auth states.
  LOGGED_IN: 'LOGGED_IN',
  LOGGING_IN: 'LOGGING_IN',
  LOGGED_OUT: 'LOGGED_OUT',

  // Dialog.
  SHOW_DIALOG: 'SHOW_DIALOG',
  CLEAR_DIALOG: 'CLEAR_DIALOG',

  // MISC.
  FIREBASE: firebase,
  CHART_COLORS: ['#B71C1C', '#F9A825', '#AD1457', '#00796B', '#26C6DA', '#388E3C'],

  // Data loading.
  LOADING_DATA: 'LOADING_DATA',
  LOADED_DATA: 'LOADED_DATA',

  // Google analytics
  GOOGLE_ANALYTICS_CODE: 'UA-79419231-1'
};

export default C;
