const zvuki=document.querySelectorAll('.zov');
const piggle=document.querySelector('.pig')
piggle.addEventListener('click',()=>{
    let i=getRandomInt(5)
    zvuki[i].play()   
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }