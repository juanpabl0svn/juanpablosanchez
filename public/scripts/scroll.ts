const header = document.querySelector('header')! as HTMLElement;


let innerScroll = window.scrollY


window.addEventListener('scroll', (e) => {
    const scroll = window.scrollY;
    if (scroll > innerScroll) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    innerScroll = scroll;
});