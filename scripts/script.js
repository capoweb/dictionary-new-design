
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const input = document.querySelector('.word-input');
const form = document.getElementById('input-form');
const containerWord = document.querySelector('.reluts-word')
const soundButtonGB = document.querySelector('.uk-lang')
const soundButtonUS = document.querySelector('.us-lang')

let state = {
    word:''
}

const handleSubmit = async (e) =>{
    e.preventDefault();
    if(state.word.length ==0){
        return
    }

    const response = await fetch(`${url}${state.word}`)
    const data = await response.json()
    console.log(data)
}

const handleKeyup=(e) =>{
    const value = e.target.value
    state.word = value;
}
input.addEventListener('keyup', handleKeyup)
form.addEventListener('submit', handleSubmit)
