class Scroll  {
    constructor (el) {
        this.el = el;

    }
    
    goUp() {
        let timeOut;
        let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        if(top > 0) {
        window.scrollBy(0,-100);
        timeOut = setTimeout(this.goUp(),20);
        } else {
            clearTimeout(timeOut);
        }
    }
    goDawn(){
        
        window.scrollBy(0, window.innerHeight);

    }

}

let scrollToTop = new Scroll(document.querySelector('#scrollToTop'));
let scrollToDawn = new Scroll(document.querySelector('#scrollToDawn'));




const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {

  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1);
    
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  });
});