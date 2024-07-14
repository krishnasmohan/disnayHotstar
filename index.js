//sliding container function
let next = document.querySelector('.left');
let prev = document.querySelector('.right');

prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

next.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

//card slider

let cardContainer = document.querySelectorAll('.card-container');
let preBtn = document.querySelectorAll('.prev-btn');
let nextBtn = document.querySelectorAll('.next-btn');

cardContainer.forEach((items,i)=>{
  let containerDimensions = items.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener("click", () => {
    items.scrollLeft += containerWidth - 200;
  });
  preBtn[i].addEventListener("click", () => {
    items.scrollLeft -= containerWidth + 200;
  });
})

//videoplay


function videoPlay(videoId){
  var video = document.getElementById(videoId)
  video.play();
}

//subscribe

function subscribeOpen(){
  window.open('subscribe.html')
}
