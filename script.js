console.log('this is new garage')

document.getElementById('icon').addEventListener('click', () => {
    if (navbar.style.transform != 'translate(0rem, 0rem)') {
        navbar.style.transform = 'translate(0rem, 0rem)'
        burgar.classList.remove('fa-bars')
        setTimeout(() => {
            burgar.classList.add('fa-xmark')
        }, 300);
    } else {
        navbar.style.transform = 'translate(50rem, 0rem)'
        burgar.classList.remove('fa-xmark')
        burgar.classList.add('fa-bars')
    }
})

function clearErroes() {
    let boxsing = document.getElementsByClassName('errorform')
    for (let item of boxsing) {
        item.innerHTML = '';
    }
}

function seterror(id, error) {
    let element = document.getElementById(id)
    element.getElementsByClassName('errorform')[0].innerHTML = error;
}

function sbtform() {
    clearErroes()
    let rtn = true

    let text = document.forms['myform']['ftext'].value;
    if (text.length < 3) {
        seterror('text', '*')
        rtn = false
    }

    let name = document.forms['myform']['fname'].value;
    if (name.length < 5) {
        seterror('name', '*')
        rtn = false
    }

    let email = document.forms['myform']['femail'].value;
    if (email.length > 25) {
        seterror('email', '*')
        rtn = false
    }

    let number = document.forms['myform']['fnumber'].value;
    if (number.length != 10) {
        seterror('number', '*')
        rtn = false
    }

    let MASSAGE = document.forms['myform']['fMASSAGE'].value;
    if (MASSAGE.length > 100) {
        seterror('MASSAGE', '*')
        rtn = false
    }

    return rtn
}