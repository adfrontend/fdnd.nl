var link = document.querySelector('#hackaton_video');
var video = document.querySelector('video');
var pix = document.querySelector('img[src="img/hackatonweb6.jpg"]');
// console.log("link", link);
// console.log("video", video);
// console.log("pix", pix);

/* VIDEO ***
  Croppen,Trimmen, exporteren https://online-video-cutter.com
  MOV to MP4 https://www.onlineconverter.com/mov-to-mp4
*/

link.addEventListener("click",function(){
    pix.classList.add('hide');
    video.classList.remove('hide');
    video.play();
    //video.src="img/hackaton.mp4";
  }
);

/* INTERSECTION OBSERVER ****
  MDN https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  https://alligator.io/js/intersection-observer
*/

const navigatie = document.querySelector('nav');
const header = document.querySelector('header');

observer = new IntersectionObserver((entry, observer) => {
  // console.log('entry:', entry);
  // console.log('observer:', observer);
  // console.log("entry.isIntersecting",entry[0].isIntersecting);

  if (entry[0].isIntersecting) {
    // console.log('in the view');
    navigatie.classList.remove('show');
  } else {
    // console.log('out of view');
    navigatie.classList.add('show');
  }

});
observer.observe(header);
