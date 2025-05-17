const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    console.log('Button clicked!');
    const myLinks = document.getElementById('myLinks');
    if (myLinks.classList.contains('hide')) {
        myLinks.classList.remove('hide');
    } else {
        myLinks.classList.add('hide');
    }
});

function handleResize() {
    console.log('Button clicked!');
    const myLinks = document.getElementById('myLinks');
  if (window.innerWidth > 1000) {
    myLinks.classList.remove("hide");
  } else {
    myLinks.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

const gallery = document.querySelector('.gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close-viewer');

gallery.addEventListener('click', function(event) {
    const clickedImg = event.target.closest('img');
    if (!clickedImg) return;

    const smallSrc = clickedImg.getAttribute('src');
    const baseName = smallSrc.split('-')[0];
    const fullSrc = baseName + '-full.jpeg';

    modalImg.src = fullSrc;
    modalImg.alt = clickedImg.alt;
    modal.showModal();
});

closeBtn.addEventListener('click',() => {
    modal.close();
});