document.addEventListener("DOMContentLoaded", () => {

    // Mostrar y ocultar los formularios
    const loginSection = document.getElementById("loginSection");
    const registerSection = document.getElementById("registerSection");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");

    if (showRegister && registerSection && loginSection) {
        showRegister.addEventListener("click", () => {
            loginSection.hidden = true;
            registerSection.hidden = false;
        });
    }

    if (showLogin && registerSection && loginSection) {
        showLogin.addEventListener("click", () => {
            registerSection.hidden = true;
            loginSection.hidden = false;
        });
    }

    // Obtener usuarios registrados en este navegador
    function getUsers() {
        try {
            return JSON.parse(
                localStorage.getItem("bookhandUsers") || "[]"
            );
        } catch {
            return [];
        }
    }

    // Registro de usuarios
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", event => {
            event.preventDefault();

            const name = document
                .getElementById("registerName").value.trim();

            const email = document
                .getElementById("registerEmail").value.trim().toLowerCase();

            const password = document
                .getElementById("registerPassword").value;

            const message = document.getElementById("registerMessage");
            const users = getUsers();

            const existingUser = users.some(user => user.email === email);

            if (existingUser) {
                message.textContent =
                    "Este correo ya está registrado en este navegador.";
                return;
            }

            users.push({ name, email, password });

            try {
                localStorage.setItem(
                    "bookhandUsers",
                    JSON.stringify(users)
                );

                message.textContent =
                    "¡Registro exitoso! Ahora puedes iniciar sesión.";

                registerForm.reset();

                setTimeout(() => {
                    if (loginSection && registerSection) {
                        registerSection.hidden = true;
                        loginSection.hidden = false;
                    }
                }, 1000);

            } catch {
                message.textContent =
                    "No se pudo guardar el registro en este navegador.";
            }
        });
    }

    // Inicio de sesión
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", event => {
            event.preventDefault();

            const email = document
                .getElementById("email").value.trim().toLowerCase();

            const password = document
                .getElementById("password").value;

            const message = document.getElementById("loginMessage");
            const users = getUsers();

            const user = users.find(
                item => item.email === email && item.password === password
            );

            if (user) {
                message.textContent =
                    `¡Bienvenido, ${user.name}! Entrando a la biblioteca...`;

                sessionStorage.setItem("bookhandLoggedIn", user.email);

                setTimeout(() => {
                    window.location.href = "biblioteca.html";
                }, 900);

            } else {
                message.textContent =
                    "Correo o contraseña incorrectos. Si no tienes cuenta, regístrate.";
            }
        });
    }

    // Validación del código de acceso al libro
    const codeForm = document.getElementById("codeForm");

    if (codeForm) {
        codeForm.addEventListener("submit", event => {
            event.preventDefault();

            const code = document
                .getElementById("accessCode")
                .value.trim().toUpperCase();

            const message = document.getElementById("codeMessage");

            if (code === "CBTC-2026*") {
                message.textContent =
                    "¡Código aceptado! Puedes entrar al libro.";

                sessionStorage.setItem("bookhandCodeAccepted", "true");

                setTimeout(() => {
                    window.location.href = "libro.html";
                }, 700);

            } else {
                message.textContent =
                    "Código incorrecto. Inténtalo nuevamente.";
            }
        });
    }

});