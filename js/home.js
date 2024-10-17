

    function trocarTema() {
        const select = document.getElementById('slt_tema');
        const temaSelecionado = select.value;
        document.getElementById('themeStylesheet').setAttribute('href', temaSelecionado);
    
    const fraseEspecial = document.getElementById('fraseEspecial');
            if (temaSelecionado === '../css/ultravio.css') {
                fraseEspecial.textContent = 'ULTRAVIOLENCE EDITION';
            }
            else if(temaSelecionado === '../css/home.css') {
                fraseEspecial.textContent = 'Heaven is a place on earth with you.'
            }
            else if(temaSelecionado === '../css/btd.css') {
                fraseEspecial.textContent = 'BORN TO DIE EDITION'
            }
            else if(temaSelecionado === '../css/honeymoon.css') {
                fraseEspecial.textContent = 'HONEYMOON EDITION'
            }
            else if(temaSelecionado === '../css/paradise.css') {
                fraseEspecial.textContent = 'PARADISE EDITION'
            }
            else if(temaSelecionado === '../css/lfl.css') {
                fraseEspecial.textContent = 'Lust For Life Edition'
            }
            else if(temaSelecionado === '../css/nfr.css') {
                fraseEspecial.textContent = 'Norman Fucking Rockwell! Edition'
            }
            else if(temaSelecionado === '../css/blueb.css') {
                fraseEspecial.textContent = 'Blue Banisters Edition'
            }
            else if(temaSelecionado === '../css/cotcc.css') {
                fraseEspecial.textContent = 'Edition'
            }
            else if(temaSelecionado === '../css/dykttatuob.css') {
                fraseEspecial.textContent = 'Did you know that there´s a tunnel under Ocean Blvd Edition'
            }
        }
        
