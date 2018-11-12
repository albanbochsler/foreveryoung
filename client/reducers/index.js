import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import PersonReducer from '../data/person-reducer';
import QuestionReducer from '../data/question-reducer';
import ActiveQuestionReducer from '../data/active-question-reducer';
import UpdateQuestionReducer from '../data/update-question-reducer';

const allReducer = combineReducers({
    persons: PersonReducer,
    questions: QuestionReducer,
    ActiveQuestion: ActiveQuestionReducer,
    UpdateQuestion: UpdateQuestionReducer,
    routing:routerReducer
})

//import videos from './videos';
 //import persons from './persons';
 //import questionReducer from './questionReducer';

//const rootReducer = combineReducers( {videos, persons,questionReducer, routing:routerReducer});

export default allReducer;