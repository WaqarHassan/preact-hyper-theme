import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import errorsReducer from "../reducers/errorsReducer";
// import jobReducer from './jobReducer'
// import testReducer from './testReducer'
// import employmentQuestionReducer from './employmentQuestionReducer'
// import companyReducer from './companyReducer'
// import departmentReducer from './departmentReducer'
// import educationReducer from './educationReducer'
// import userTestsReducer from './userTestsReducer'
// import { reducer as formReducer } from 'redux-form'

// export default combineReducers({
//   auth: authReducer,
//   errors: errorReducer,
//   jobsData: jobReducer,
//   testsData: testReducer,
//   employmentQuestionsData: employmentQuestionReducer,
//   companiesData: companyReducer,
//   departmentsData: departmentReducer,
//   educationsData: educationReducer,
//   userTestsData: userTestsReducer,
//   form: formReducer
// })

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer
});
