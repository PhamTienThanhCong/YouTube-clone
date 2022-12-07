let focus_search = document.getElementById('search-input')

focus_search.addEventListener('focus', function(){
    document.getElementsByClassName('icon-search-hidden')[0].style.display = 'block';
    // style border search
    document.getElementsByClassName('group-search')[0].classList.add('group-search-active');
    document.getElementsByClassName('btn-search')[0].classList.add('btn-search-active');
})

focus_search.addEventListener('blur', function(){
    document.getElementsByClassName('icon-search-hidden')[0].style.display = 'none';
    document.getElementsByClassName('group-search')[0].classList.remove('group-search-active');
    document.getElementsByClassName('btn-search')[0].classList.remove('btn-search-active');
})
const navMenu = document.getElementsByClassName('js-menu')[0]
const showMenu = document.getElementsByClassName('js-nav-slide-2')[0]
const closeMenu = document.getElementsByClassName('js-close-menu')[0]
const miniMenu = document.getElementsByClassName('nav-select')[0]
// navMenu.addEventListener('click',function(){
//     showMenu.classList.add('open')
// })
// closeMenu.addEventListener('click',function(){
//     showMenu.classList.remove('open')
// })
navMenu.onclick = () => {showMenu.classList.toggle('open')
miniMenu.classList.toggle('open')
}
// showMenu.classList.toggle('open')
