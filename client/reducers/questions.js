// reducer takes two things:

// 1. the action (info what happend)
// 2. copy of current state

function questions(state = [], action) {
    switch (action.type) {
        case 'CHANGE_QUESTION' :
            console.log('question selected')
            console.log(action.questionSelector)
            return action.questionSelector;
            break;

    }
    return state;
}

export default questions;