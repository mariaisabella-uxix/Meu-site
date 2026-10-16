// Lógica de Controle do Slide (JavaScript Moderno com addEventListener) 
function mostrarPagina(numeroPagina) {
   const wrapper = document.getElementById('sliderWrapper');
   const btns = document.querySelectorAll('.tab-btn');

    // Atualiza o estado ativo dos botões das abas
    btns.forEach((btn, index) => {
        if (index === numeroPagina - 1) {
            btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            // Aplica ou remove a classe que desliza o container para -50%
            if (numeroPagina === 2) {
                wrapper.classList.add('show-page-2');
            } else {
                wrapper.classList.remove('show-page-2');
            }
        }

