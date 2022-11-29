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