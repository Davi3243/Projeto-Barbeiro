document.addEventListener("DOMContentLoaded", function () {

    console.log("Will Barbershop - JavaScript carregado!");

    // ==========================================
    // 1. ANIMAÇÃO DE ENTRADA DA LOGO
    // ==========================================

    const logo = document.querySelector(".logo__img");

    if (logo) {
        logo.style.opacity = "0";
        logo.style.transform = "scale(0.7)";
        logo.style.transition = "opacity 1s ease, transform 1s ease";

        setTimeout(function () {
            logo.style.opacity = "1";
            logo.style.transform = "scale(1)";
        }, 300);
    }


    // ==========================================
    // 2. ANIMAÇÃO AO DESCER A PÁGINA
    // ==========================================

    const elementos = document.querySelectorAll(
        ".video__frame, .agendamento__wpp, .social__link"
    );

    elementos.forEach(function (elemento) {

        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(50px)";
        elemento.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    });

    const observador = new IntersectionObserver(
        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";
                    entrada.target.style.transform = "translateY(0)";

                    observador.unobserve(entrada.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elementos.forEach(function (elemento) {
        observador.observe(elemento);
    });


    // ==========================================
    // 3. WHATSAPP PULSANDO
    // ==========================================

    const whatsapp = document.querySelector(".whats-float");

    if (whatsapp) {

        setInterval(function () {

            whatsapp.style.transform = "scale(1.15)";

            setTimeout(function () {
                whatsapp.style.transform = "scale(1)";
            }, 300);

        }, 3000);

    }


    // ==========================================
    // 4. ZOOM NA FOTO DO CORTE
    // ==========================================

    const foto = document.querySelector(".video__media--img");

    if (foto) {

        foto.style.transition = "transform 0.5s ease";

        foto.addEventListener("mouseenter", function () {
            foto.style.transform = "scale(1.05)";
        });

        foto.addEventListener("mouseleave", function () {
            foto.style.transform = "scale(1)";
        });

    }


    // ==========================================
    // 5. EFEITO NO BOTÃO DE AGENDAMENTO
    // ==========================================

    const agendamento = document.querySelector(".agendamento__wpp");

    if (agendamento) {

        agendamento.addEventListener("mouseenter", function () {
            agendamento.style.transform = "scale(1.03)";
        });

        agendamento.addEventListener("mouseleave", function () {
            agendamento.style.transform = "scale(1)";
        });

        agendamento.addEventListener("mousedown", function () {
            agendamento.style.transform = "scale(0.97)";
        });

        agendamento.addEventListener("mouseup", function () {
            agendamento.style.transform = "scale(1.03)";
        });

    }


    // ==========================================
    // 6. BOTÃO VOLTAR AO TOPO
    // ==========================================

    const botaoTopo = document.createElement("button");

    botaoTopo.innerHTML = "↑";
    botaoTopo.title = "Voltar ao topo";

    botaoTopo.style.position = "fixed";
    botaoTopo.style.left = "20px";
    botaoTopo.style.bottom = "20px";
    botaoTopo.style.width = "45px";
    botaoTopo.style.height = "45px";
    botaoTopo.style.border = "none";
    botaoTopo.style.borderRadius = "50%";
    botaoTopo.style.backgroundColor = "#e08a1e";
    botaoTopo.style.color = "#000";
    botaoTopo.style.fontSize = "25px";
    botaoTopo.style.cursor = "pointer";
    botaoTopo.style.opacity = "0";
    botaoTopo.style.pointerEvents = "none";
    botaoTopo.style.transition = "0.3s";
    botaoTopo.style.zIndex = "100";

    document.body.appendChild(botaoTopo);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            botaoTopo.style.opacity = "1";
            botaoTopo.style.pointerEvents = "auto";
        } else {
            botaoTopo.style.opacity = "0";
            botaoTopo.style.pointerEvents = "none";
        }

    });

    botaoTopo.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // ==========================================
    // 7. PARALLAX NO FUNDO DA LOGO
    // ==========================================

    const secaoLogo = document.querySelector(".logo");

    window.addEventListener("scroll", function () {

        if (secaoLogo) {

            const movimento = window.scrollY * 0.25;

            secaoLogo.style.backgroundPosition =
                "center " + movimento + "px";

        }

    });

});