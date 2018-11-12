export function changeQuestion(questionSelector) {
    console.log('you clicked a question')
    return {
        type: 'CHANGE_QUESTION',
        questionSelector: questionSelector
    }
}


export function updateQuestion(questionSelector) {
    return {
        type: 'UPDATE_QUESTION',
        questionSelector: questionSelector
    }
}


/*
 // increment
 export function increment(index) {
 return {
 type: 'INCREMENT_LIKES',
 index
 }

 }
 // add comment
 export function addComment(postId, author, comment) {
 return {
 type: 'ADD_COMMENT',
 postId,
 author,
 comment
 }
 }
 // Change question


 /!*export function changeQuestion(questionOne, questionTwo, questionThree,
 questionFour, questionFive, questionSix, questionSeven, questionEight,
 questionNine, questionTen) {
 return {
 type: 'CHANGE_QUESTION',
 questionOne, questionTwo, questionThree,
 questionFour, questionFive, questionSix, questionSeven,
 questionEight, questionNine, questionTen
 }
 }*!/

 export function changeQuestion(questionSelector) {
 return {
 type: 'CHANGE_QUESTION',
 questionSelector: questionSelector
 }
 }*/
