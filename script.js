const inputNombre = document.getElementById('reg-nombre');
const inputEmail = document.getElementById('reg-email');
const inputPass = document.getElementById('reg-password');
const inputConfirm = document.getElementById('reg-confirm-password');

const errNombre = document.getElementById('err-nombre');
const errEmail = document.getElementById('err-email');
const errPass = document.getElementById('err-password');
const errConfirm = document.getElementById('err-confirm-password');

const sectionRegister = document.getElementById('section-register');
const sectionWelcome = document.getElementById('section-welcome');
const welcomeName = document.getElementById('welcome-name');
const welcomeDetailName = document.getElementById('welcome-detail-name');
const welcomeDetailEmail = document.getElementById('welcome-detail-email');

function togglePasswordVisibility(targetId, buttonElement) {
    const targetInput = document.getElementById(targetId);
    const icon = buttonElement.querySelector('.material-symbols-outlined');
    if (targetInput && targetInput.type === 'password') {
        targetInput.type = 'text';
        icon.textContent = 'visibility_off';
    } else if (targetInput) {
        targetInput.type = 'password';
        icon.textContent = 'visibility';
    }
}

function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

function checkFields() {
    let isValid = true;

    if (inputNombre) {
        if (!inputNombre.value.trim() || inputNombre.value.trim().length < 3) {
            if (errNombre) errNombre.classList.remove('hidden');
            isValid = false;
        } else {
            if (errNombre) errNombre.classList.add('hidden');
        }
    }

    if (inputEmail) {
        if (!validateEmail(inputEmail.value.trim())) {
            if (errEmail) errEmail.classList.remove('hidden');
            isValid = false;
        } else {
            if (errEmail) errEmail.classList.add('hidden');
        }
    }

    if (inputPass) {
        if (!inputPass.value || inputPass.value.length < 8) {
            if (errPass) errPass.classList.remove('hidden');
            isValid = false;
        } else {
            if (errPass) errPass.classList.add('hidden');
        }
    }

    if (inputConfirm && inputPass) {
        if (inputConfirm.value !== inputPass.value || !inputConfirm.value) {
            if (errConfirm) errConfirm.classList.remove('hidden');
            isValid = false;
        } else {
            if (errConfirm) errConfirm.classList.add('hidden');
        }
    }

    return isValid;
}

[inputNombre, inputEmail, inputPass, inputConfirm].forEach(input => {
    if (input) {
        input.addEventListener('input', () => {
            const errElem = document.getElementById('err-' + input.name);
            if (errElem) errElem.classList.add('hidden');
        });
    }
});

function procesarRegistro() {
    if (checkFields()) {
        const alias = inputNombre.value.trim();
        const mail = inputEmail.value.trim();


        const userSession = {
            nombre: alias,
            email: mail,
            registrado: true
        };
        sessionStorage.setItem('tennoUser', JSON.stringify(userSession));

        if (welcomeName) welcomeName.textContent = `¡Bienvenido, ${alias}!`;
        if (welcomeDetailName) welcomeDetailName.textContent = alias;
        if (welcomeDetailEmail) welcomeDetailEmail.textContent = mail;

        showWelcomeView();
    }
}

function showWelcomeView() {
    if (sectionRegister) sectionRegister.classList.add('hidden');
    if (sectionWelcome) sectionWelcome.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showRegisterView() {
    if (sectionWelcome) sectionWelcome.classList.add('hidden');
    if (sectionRegister) sectionRegister.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volverRegistro() {
    showRegisterView();
}

function entrarPrincipal() {
    window.location.href = 'Bienvenida.html';
}

const glowCursor = document.getElementById('glow-cursor');
if (glowCursor) {
    let ticking = false;
    document.addEventListener('mousemove', (e) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                glowCursor.style.opacity = '1';
                glowCursor.style.setProperty('--mouse-x', `${e.clientX}px`);
                glowCursor.style.setProperty('--mouse-y', `${e.clientY}px`);
                ticking = false;
            });
            ticking = true;
        }
    });
}
