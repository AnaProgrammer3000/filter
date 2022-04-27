let allFilter = document.querySelectorAll('.filter__checkbox__content')
for (let i = 0; i < allFilter.length; i++) {// Переключаем оформление если есть\нет скролла
    if (allFilter[i].scrollHeight === allFilter[i].clientHeight) {
        let parent = allFilter[i].parentNode
        parent.classList.add('none-scroll')
    }
}

//Удаление категорий декстоп
function themeToggle() {//удаление\добавление категорий, из выбранных инпутов, блока "ТЕМА"
    let checkInpt = document.querySelectorAll('#theme input:checked')
    let allInpt = document.querySelectorAll('#theme input')
    let intArea = document.getElementById('area')


    for (let i = 0; i < checkInpt.length; i++) {//Добавляем все инпуты у которых checked
        let textInpt = checkInpt[i].nextElementSibling.innerText
        let dataId = checkInpt[i].dataset.id

        let div = document.createElement('div')
        div.className = 'filer__selected__btn'
        div.innerHTML = textInpt
        div.dataset.id = dataId
        intArea.appendChild(div)

        let div1 = document.createElement('div')
        div1.className = 'close'
        div.appendChild(div1)
    }
    ;

    allInpt.forEach(el => el.addEventListener('click', function (e) {//Добавляем\удаляем нажатый инпут в список
        let tisId = el.dataset.id
        let areaBtn = document.querySelectorAll('.filer__selected__btn')

        if (el.checked) {
            let checkId = el.dataset.id
            let elVal = el.nextElementSibling.innerText

            let div3 = document.createElement('div')
            div3.className = 'filer__selected__btn'
            div3.innerHTML = elVal
            div3.dataset.id = checkId
            intArea.appendChild(div3)

            let div4 = document.createElement('div')
            div4.className = 'close'
            div3.appendChild(div4)
            delTheme()
        } else {
            delTheme()
        }

        areaBtn.forEach(elm => {
            if (elm.dataset.id == tisId) {
                elm.remove()
            }
        })
    }))
}

function delTheme() {//Удаляем элементы при нажатии на крестик
    let btnClose = document.querySelectorAll('.filer__selected__btn .close')
    btnClose.forEach(elc => elc.addEventListener('click', function () {
        let elcId = elc.parentElement.dataset.id
        let allInpt = document.querySelectorAll('#theme input')
        elc.parentElement.remove()

        allInpt.forEach(ela => {
            if (ela.dataset.id == elcId) {
                ela.checked = false
            }
        })
    }))
}
//Удаление категорий декстоп --конец--


//Удаление категорий мобильная версия
function themeToggleMob() {//удаление\добавление категорий, из выбранных инпутов, блока "ТЕМА"
    let checkInpt = document.querySelectorAll('#theme-mob input:checked')
    let allInpt = document.querySelectorAll('#theme-mob input')
    let intArea = document.getElementById('area-mob')


    for (let i = 0; i < checkInpt.length; i++) {//Добавляем все инпуты у которых checked
        let textInpt = checkInpt[i].nextElementSibling.innerText
        let dataId = checkInpt[i].dataset.id

        let div = document.createElement('div')
        div.className = 'filer__selected__btn'
        div.innerHTML = textInpt
        div.dataset.id = dataId
        intArea.appendChild(div)

        let div1 = document.createElement('div')
        div1.className = 'close'
        div.appendChild(div1)
    }
    ;

    allInpt.forEach(el => el.addEventListener('click', function (e) {//Добавляем\удаляем нажатый инпут в список
        let tisId = el.dataset.id
        let areaBtn = document.querySelectorAll('.filer__selected__btn')

        if (el.checked) {
            let checkId = el.dataset.id
            let elVal = el.nextElementSibling.innerText

            let div3 = document.createElement('div')
            div3.className = 'filer__selected__btn'
            div3.innerHTML = elVal
            div3.dataset.id = checkId
            intArea.appendChild(div3)

            let div4 = document.createElement('div')
            div4.className = 'close'
            div3.appendChild(div4)
            delTheme()
        } else {
            delTheme()
        }

        areaBtn.forEach(elm => {
            if (elm.dataset.id == tisId) {
                elm.remove()
            }
        })
    }))
}

function delThemeMob() {//Удаляем элементы при нажатии на крестик
    let btnClose = document.querySelectorAll('.filer__selected__btn .close')
    btnClose.forEach(elc => elc.addEventListener('click', function () {
        let elcId = elc.parentElement.dataset.id
        let allInpt = document.querySelectorAll('#theme-mob input')
        elc.parentElement.remove()

        allInpt.forEach(ela => {
            if (ela.dataset.id == elcId) {
                ela.checked = false
            }
        })
    }))
}
//Удаление категорий мобильная версия --конец--


//Мобильные табы
let btnFilter = document.querySelector('.mob__filter__btn')
let tabFilter = document.querySelector('.mob__tab__filter')
let btnSort = document.querySelector('.filter__sort__btn')
let tabSort = document.querySelector('.mob__tab__sort')

btnFilter.addEventListener('click', function (e) {
    this.classList.toggle('active')
    if (btnSort.classList.contains('active')) {
        btnSort.classList.toggle('active')
    }
    tabFilter.classList.toggle('active')
    tabSort.classList.remove('active')
})
btnSort.addEventListener('click', function () {
    this.classList.toggle('active')
    if (btnFilter.classList.contains('active')) {
        btnFilter.classList.toggle('active')
    }
    tabFilter.classList.remove('active')
    tabSort.classList.toggle('active')
})
//Мобильные табы --конец--


//Мобильные табы, фильтры/cортировка внутри
let filterItem = document.querySelectorAll('.filter__checkbox__title')
filterItem.forEach(elq => elq.addEventListener('click', function () {
    elq.classList.toggle('active')
}))

let sortItem = document.querySelectorAll('.sort__item')
sortItem.forEach(elq => elq.addEventListener('click', function () {
    sortItem.forEach(elw => elw.classList.remove('active'))
    elq.classList.toggle('active')
}))
//Мобильные табы, фильтры/cортировка внутри  --конец--

themeToggle()
delTheme()
themeToggleMob()
delThemeMob()


var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 50000,
    from = 0,
    to = 0;

$range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 500,
    to: 50000,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });
});

