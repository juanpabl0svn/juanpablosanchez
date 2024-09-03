const header = document.querySelector('header');


let innerScroll = window.scrollY

console.log(innerScroll);

window.addEventListener('scroll', (e) => {
    const scroll = window.scrollY;
    console.log(scroll > innerScroll);
    if (scroll > innerScroll) {
        header.classList.add('hide-header');
    } else {
        header.classList.remove('hide-header');
    }
    innerScroll = scroll;
});