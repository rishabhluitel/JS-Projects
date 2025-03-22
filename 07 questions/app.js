//using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach(question => {
    let btn=question.querySelector('.question-btn');
    btn.addEventListener('click',()=>{
        questions.forEach(element => {
            console.log(element)
            if (element!==question){
                element.classList.remove('show-text');
            }
        }); 
            question.classList.toggle('show-text');
    })
});


// traversing the dom

// let btns=document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//      btn.addEventListener('click',(e)=>{
//         let changeBtn=e.currentTarget.parentElement.parentElement;
//         changeBtn.classList.toggle('show-text');
//     })
// });
