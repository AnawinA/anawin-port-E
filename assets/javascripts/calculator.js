
let header = document.getElementById('head')
let btnHeader = document.getElementById('btn-head')

let numClick = 1

btnHeader.onclick = () => {
    numClick++
    if (numClick % 2 === 0) {
        header.innerHTML = `Hi ${numClick} times!` 
    } else {
        header.innerHTML = `Hello ${numClick} times!`
    }
}