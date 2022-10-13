    const img = Array.from(document.getElementsByClassName("img"))

    let pesquisa = "off"

    for (let i = 0; i <= img.length; i++) {
        img[i].addEventListener("click", function () {
            if (pesquisa == "off") {
                img[0].className = "img pimgabrir"
                img[1].className = "img simgabrir"
                pesquisa = "on"
            } else {
                img[0].className = "img pimgfechar"
                img[1].className = "img simgfechar"
                pesquisa = "off"
            }
        })
    }