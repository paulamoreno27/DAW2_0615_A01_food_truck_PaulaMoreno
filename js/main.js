// ================= LOGIN =================
function loginSubmit() {
    // Obtener el valor del input
    var usernameInput = document.getElementById('username');
    var user = usernameInput.value.trim();
    
    // Cambiar el texto de bienvenida si el usuario no está vacío
    if (user !== "") {
        document.getElementById("welcomeText").innerText = "Benvingut " + user + "!";
    }
    
    // Cerrar el modal
    var modalEl = document.getElementById('loginModal');
    var modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) {
        modal.hide();
    }
    
    // Limpiar el input
    usernameInput.value = '';
    
    // Opcional: limpiar también el password
    document.getElementById('password').value = '';
}

// ================= LOGOUT =================
function logout() {
    document.getElementById("welcomeText").innerText = "Benvingut!";
}

// ================= TOOLTIPS =================
// Inicializar todos los tooltips cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});