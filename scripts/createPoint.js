

alert('ll')

let ufSelect = document.querySelector('#uf').addEventListener('click', function(){
    alert('l')
})


/*function populateUfs(){

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then(function(res){
        return res.json()
    })
    .then(function(states){
        ufSelect.innerHTML = `<option value="1">valossssr</option>`


    })
}

populateUfs()*/
