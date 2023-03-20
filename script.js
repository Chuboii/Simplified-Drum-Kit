let drumKits = document.querySelector(".drum-set")
let audio = document.querySelectorAll("audio")
let img = document.querySelectorAll("img")


const imgw = [
    "crash",
    "kick",
    "tom",
    "snare"
]

const kits = [
    "snare",
    "crash",
    "tom",
    "kick",

]

const keys = [
    "s",
    "c",
    "t",
    "k"
]

kits.forEach(el => {
    let btn = document.createElement("button")

    drumKits.append(btn)
    btn.classList.add("a")
    
    btn.innerHTML = `<div class="text">${el}</div>`
    let img = document.createElement("img")

    btn.append(img)
    img.src = el + ".jpg"

    let audio = document.createElement("audio")
    drumKits.append(audio)

    audio.src = el + ".mp3"

    btn.addEventListener("click", () => {
        audio.play()
        btn.style.transform = "scale(.9)"
        setTimeout(() => {
            btn.style.transform = "scale(1)"
        }, 100);
        
    })

    window.addEventListener("keydown", (event) => {
        if (event.key == el.slice(0, 1)) {
            audio.play()

            console.log(event.key);
            btn.style.transform = "scale(.9)"
            setTimeout(() => {
                btn.style.transform = "scale(1)"
            }, 100);

    }
    })


})
