let repeat = document.getElementById(`repeat`)
let submitButton = document.getElementById(`submitButton`)
let box = document.getElementById(`box`)

submitButton.addEventListener(`click`, submit)

function submit() {
  let repeatValue = repeat.value.trim()

  if (repeatValue != `` && !isNaN(repeatValue)) {
    box.innerHTML = ``

    for (let i = 1; i <= repeatValue; i++) {
      let image = document.createElement(`img`)
      image.src = `donkey-kong.png`
      image.style.width = `${i}px`

      box.appendChild(image)
    }
  }
}