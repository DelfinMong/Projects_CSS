const label = document.querySelectorAll('.form-control label')

label.forEach( label => {
    label.innerHTML = label.innerText
        .split('')
        .map( (letter, idx) => `<span>${letter}</span>` )
        .join('')
})