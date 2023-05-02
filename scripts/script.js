
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const input = document.querySelector('.word-input')
const form = document.getElementById('input-form')
const containerWord = document.querySelector('.reluts-word')
const soundButtonGB = document.querySelector('.uk-lang')
const soundButtonUS = document.querySelector('.us-lang')
const resultDefinition = document.querySelector('.result-item-definition')
const resultsList = document.querySelector('.results-list')

const renderItem = (item) =>{
    const itemDefinition = item.definitions[0]
    return `<div class="results-item-part">${item.partOfSpeech}</div>
    <div class="results-item-definitions">
        <div class="result-item-definition">
            <p>${itemDefinition.definition}</p>
        </div>
        <div class="result-item-example">
            <div class="example">
                ${itemDefinition.example}
            </div>
        </div>
    </div>`

}

const showResults = () =>{
    resultsList.innerHTML = ''
    state.meanings.forEach((item)=>(resultsList.innerHTML += renderItem(item)))
    }




let state = {
    word:'',
    meanings:[],
    phonetics:[],
}

const insertWord = () =>{
    containerWord.innerText = state.word;
}

const handleSubmit = async (e) =>{
    e.preventDefault();
    if(state.word.length ==0){
        return
    }
    const response = await fetch(`${url}${state.word}`)
    const data = await response.json()
    if(response.ok && data.length){
        const item = data[0]

        state = {
            ...state,
            meanings: item.meanings,
            phonetics: item.phonetics,
        }
        insertWord()
        showResults()
        renderItem()
    }
}

const handleKeyup=(e) =>{
    const value = e.target.value
    state.word = value;
}

const handleSoundGB = () => {
    if(state.phonetics.length){
        const soundGB = state.phonetics[0]

        if(soundGB.audio){
            new Audio(soundGB.audio).play()
        }
    }
    // else{
    //     const soundGB = state.phonetics[0]

    //     if(soundGB.audio){
    //         new Audio(soundGB.audio).play()
    //     }
    // }
}

const handleSoundUS = () =>{
    if(state.phonetics.length > 0){
        const soundUS = state.phonetics[1]

        if(soundUS.audio){
            new Audio(soundUS.audio).play()
        }
    }
    // else{
    //     const soundUS = state.phonetics[0]

    //     if(soundUS.audio){
    //         new Audio(soundUS.audio).play()
    //     }
    // } 
}

input.addEventListener('keyup', handleKeyup)
form.addEventListener('submit', handleSubmit)
soundButtonGB.addEventListener('click',handleSoundGB)
soundButtonUS.addEventListener('click',handleSoundUS)
