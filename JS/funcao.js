function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src="media/menu/menu_white_36dp.svg";

    }
    else { 
    menuMobile.classList.add('open');
    document.querySelector('.icon').src="media/menu/close_white_36dp.svg";
    }
}

function mensagemEnviada(){
    document.getElementById("enviado")
    alert("Seus dados foram enviados com Sucesso!")
}