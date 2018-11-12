export default function (state = null, action) {
    const activeQuestion = action.questionSelector;
    console.log(activeQuestion);
    switch (action.type) {
        case 'UPDATE_QUESTION':
            return {...state, [activeQuestion]:activeQuestion};
            break;
    }
    return state;
}
