// CAMBIAR PANTALLA
document.getElementById('boton_peryedu').onclick = function () {
    document.getElementById('peryedu').style.display = 'block';
    document.getElementById('exp').style.display = 'none';
    document.getElementById('ref').style.display = 'none';
}

document.getElementById('boton_exp').onclick = function () {
    document.getElementById('peryedu').style.display = 'none';
    document.getElementById('exp').style.display = 'block';
    document.getElementById('ref').style.display = 'block';
}

// BOTONES CONTACTOS
// Telefono
document.getElementById('tel').addEventListener('mouseenter', function () {
    setTimeout(() => {funON('tel')}, 500);
})

document.getElementById('tel').addEventListener('mouseleave', function () {
    setTimeout(() => {funOFF('tel')}, 500);
})

// Gmail
document.getElementById('gmail').addEventListener('mouseenter', function () {
    setTimeout(() => {funON('gmail')}, 500);
})

document.getElementById('gmail').addEventListener('mouseleave', function () {
    setTimeout(() => {funOFF('gmail')}, 500);
})

// Ubicacion
document.getElementById('ubi').addEventListener('mouseenter', function () {
    setTimeout(() => {funON('ubi')}, 500);
})

document.getElementById('ubi').addEventListener('mouseleave', function () {
    setTimeout(() => {funOFF('ubi')}, 500);
})

// Facebook
document.getElementById('fb').addEventListener('mouseenter', function () {
    setTimeout(() => {funON('fb')}, 500);
})

document.getElementById('fb').addEventListener('mouseleave', function () {
    setTimeout(() => {funOFF('fb')}, 500);
})

// Instagram
document.getElementById('insta').addEventListener('mouseenter', function () {
    setTimeout(() => {funON('insta')}, 500);
})

document.getElementById('insta').addEventListener('mouseleave', function () {
    setTimeout(() => {funOFF('insta')}, 500);
})

// Funciones contactos
function funON (id) {
    if (id === 'tel') {
        document.getElementById('tel').classList.remove("bi-telephone-fill")
        document.getElementById('tel').innerHTML = '(846) 690-0992'
    
    } else if (id === 'gmail') {
        document.getElementById('gmail').classList.remove("bi-envelope-at-fill")
        document.getElementById('gmail').innerHTML = 'jojoestar@gmail.com'
    
    } else if (id === 'ubi') {
        document.getElementById('ubi').classList.remove("bi-geo-alt-fill")
        document.getElementById('ubi').innerHTML = '2569 Country Club Rd'
    
    } else if (id === 'fb') {
        document.getElementById('fb').classList.remove("bi-facebook")
        document.getElementById('fb').innerHTML = 'Jonathan Jooestar'
    
    } else if (id === 'insta') {
        document.getElementById('insta').classList.remove("bi-instagram")
        document.getElementById('insta').innerHTML = '@JoJoestar'
    }
}

function funOFF (id) {
    if (id === 'tel') {
        document.getElementById('tel').classList.add("bi-telephone-fill")
        document.getElementById('tel').innerHTML = ''
    
    } else if (id === 'gmail') {
        document.getElementById('gmail').classList.add("bi-envelope-at-fill")
        document.getElementById('gmail').innerHTML = ''
    
    } else if (id === 'ubi') {
        document.getElementById('ubi').classList.add("bi-geo-alt-fill")
        document.getElementById('ubi').innerHTML = ''
    
    } else if (id === 'fb') {
        document.getElementById('fb').classList.add("bi-facebook")
        document.getElementById('fb').innerHTML = ''
    
    } else if (id === 'insta') {
        document.getElementById('insta').classList.add("bi-instagram")
        document.getElementById('insta').innerHTML = ''
    }
}
