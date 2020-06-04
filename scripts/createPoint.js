

function populateUfs(){
    let ufSelect = document.querySelector('select[name=uf]')
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then(function(res){
        return res.json()
    })
    .then(function(states){

        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    })
}

populateUfs()

function getCities(){
    let citySelect = document.querySelector('select[name=city]')

    const ufValue = event.target.value
    console.log(ufValue)
}

document.querySelector('select[name=uf]').addEventListener('change', getCities)
