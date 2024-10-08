// Menu toggle para dispositivos móveis
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Adicionando o botão de fechar
const closeButton = document.createElement('button');
closeButton.classList.add('close-menu');
closeButton.innerText = 'X';
navLinks.prepend(closeButton); // Adiciona o botão de sair no início do menu

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar o menu ao clicar no botão "sair"
closeButton.addEventListener('click', () => {
    navLinks.classList.remove('active');
});
