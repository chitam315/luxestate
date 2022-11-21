function changeLang() {
    var headerLangEle = document.querySelector('.header__language')
    langCurr = document.querySelector('.header__language-current span')
    langSelect = document.querySelectorAll('.header__language-select a')
    headerLangEle.addEventListener('click', (e) => {
        e.stopPropagation();
        headerLangEle.classList.add('--active')
        langCurrContent = langCurr.innerText
        window.onclick = () => {
            headerLangEle.classList.remove('--active')
        }
    })
    langSelect.forEach((current) => {
        current.addEventListener('click', (e) => {
            e.stopPropagation();
            langCurr.innerText = current.innerText
            current.innerText = langCurrContent
            headerLangEle.classList.remove('--active')
        })
    })
}

function scrollFunction() {
    var headerEle = document.querySelector('.header')
    var slider = document.querySelector('.scslider')

    var backToTop = document.querySelector('.backtotop')

    sectionList = document.querySelectorAll('section')
    navList = document.querySelectorAll('.header__nav ul a')

    backToTop.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.onscroll = () => {
        // changeHeader
        if (window.scrollY >= slider.offsetHeight - 80) {
            headerEle.style.backgroundColor = '#000'
        }
        else {
            headerEle.style.backgroundColor = 'transparent'
        }

        // backToTop
        if (window.scrollY > 0) {
            backToTop.classList.add('--active')
        }
        else {
            backToTop.classList.remove('--active')
        }

        //change color in nav header
        sectionList.forEach((current,index) => {
            if(window.scrollY >= current.offsetTop - 80 && window.scrollY < sectionList[index+1].offsetTop){
                if(!(navList[index].classList.contains('--active'))){
                    navList.forEach((curr)=>{curr.classList.remove('--active')})
                    navList[index].classList.add('--active')
                }
                // console.log(current);
            }
        })
    }
}

function popUpVideo() {
    popUpVideo = document.querySelector('.popUpVideo')
    closeBtn = popUpVideo.querySelector('.closeBtn')
    closeBtn.addEventListener('click', () => {
        popUpVideo.classList.remove('--active')
        popUpVideo.querySelector('iframe').setAttribute('src', '')
    })
    videoList = document.querySelectorAll('.scproduct__video .list__video-item .circle__video')
    videoList.forEach((current) => {
        current.addEventListener('click', () => {
            idVideo = current.getAttribute('id-video')
            video = popUpVideo.querySelector('iframe')
            video.setAttribute('src', `https://www.youtube.com/embed/${idVideo}`)
            popUpVideo.classList.add('--active')
        })
    })


}

function scrollToSection() {
    sectionList = document.querySelectorAll('section')
    navList = document.querySelectorAll('.header__nav ul a')
    navList.forEach((current, index) => {
        current.addEventListener('click', (e) => {
            e.preventDefault()
            window.scrollTo({
                top: sectionList[index].offsetTop - 80,
                behavior: "smooth"
            })
        })
    })
}

function sliderFlickity() {
    var slider = document.querySelector('.scslider__list');
    number = document.querySelector('.scslider__static-number .number')
    dotList = document.querySelectorAll('.scslider__static-number ul li')
    var flkty = new Flickity(slider, {
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        on: {
            ready: function () {
                number.innerText = '01'
                dotList[0].classList.add('--active')
            },
            change: function (index) {
                number.innerText = `0${index + 1}`
                dotList.forEach((current) => {
                    current.classList.remove('--active')
                })
                dotList[index].classList.add('--active')
            }
        }
    });

    prevBtn = document.querySelector('.scslider__static-paging .btn.--prev')
    nextBtn = document.querySelector('.scslider__static-paging .btn.--next')

    prevBtn.addEventListener('click', (e) => {
        flkty.previous(true)
    })
    nextBtn.addEventListener('click', (e) => {
        flkty.next(true)
    })

    dotList.forEach((current, index) => {
        current.addEventListener('click', (e) => {
            flkty.select(index, true)
        })
    })
}

function scimgFlickity() {
    var scimg = document.querySelector('.scimg');
    var flkty = new Flickity(scimg, {
        // options
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false
    });
}

function tabActive(){
    scnewsList = document.querySelectorAll('.scnews__list')
    scnewsTab = document.querySelectorAll('.scnews__tab-item')

    scnewsTab.forEach((current,index) => {
        current.addEventListener('click',(e) => {
            scnewsTab.forEach((cur) => {cur.classList.remove('--active')})
            scnewsList.forEach((cur) => {cur.classList.remove('--active')})
            current.classList.add('--active')
            scnewsList[index].classList.add('--active')
        })
    })
}

window.addEventListener('load',() => {
    scimgFlickity()
})

tabActive()

sliderFlickity()

scrollFunction()

changeLang()

popUpVideo()

scrollToSection()