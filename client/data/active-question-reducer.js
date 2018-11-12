export default function (state = 0, action) {
    switch (action.type) {
        case 'CHANGE_QUESTION':
            return action.questionSelector;
            break;
    }
    return state;
}
