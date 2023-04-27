
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const input = document.querySelector('.word-input');
const form = document.querySelector('.form');
const containerWord = document.querySelector('.reluts-word')
const soundButtonGB = document.querySelector('.uk-lang')
const soundButtonUS = document.querySelector('.us-lang')

let state = {
    word:''
}

const handleSubmit = async (e) =>{
    e.preventDefault();

    const response = await fetch(`${url}${state.value}`)
}

const handleKeyup=(e) =>{
    const value = e.target.value
    state.word = value;
}
input.addEventListener('keyup', handleKeyup)
form.addEventListener('submit', handleSubmit)