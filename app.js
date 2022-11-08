const word = document.querySelector('.p');
const words = ['Writing','Speaking','Listening','Una Asesoría Online 🙋‍♂️']
const time = [1000,2000,3000,4000];
// for(j=0;j<time.length;j++){
//     for(i=0;i<words.length;i++){
//         setTimeout(function(){
//             word.innerHTML = words[i];
//         },time[j]);   
//     }
// }

function change_word(){
    setTimeout(function(){
        word.textContent = words[0];
    },1000);
    setTimeout(function(){
        word.textContent = words[1];
    },2000);
    setTimeout(function(){
        word.textContent = words[2];
    },3000);
    setTimeout(function(){
        word.textContent = words[3];
    },4000);
}
setInterval(() => {
    change_word();
}, 1000);


