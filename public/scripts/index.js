let buttonSearch = document.querySelector('#page-home main a')
let modal = document.querySelector('.modal')
let close = document.querySelector('.modal .header a')

buttonSearch.addEventListener('click', function(){
    modal.classList.remove('hide')
})

close.addEventListener('click', function(){
    modal.classList.add('hide')
})