document.addEventListener('DOMContentLoaded', function() {
    // Manejo del sidebar en dispositivos móviles
    const sidebar = document.querySelector('.sidebar');
    const openSidebarBtn = document.getElementById('open-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');

    openSidebarBtn.addEventListener('click', () => {
        sidebar.classList.add('show');
    });

    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('show');
    });

    // Manejo del dropdown del usuario
    const userDropdown = document.querySelector('.dropdown');
    const userDropdownMenu = document.querySelector('.dropdown-menu');

    userDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        
        userDropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        userDropdownMenu.classList.remove('show');
    });

    // Cargar datos del usuario
    loadUserData();

    // Manejar cambio de foto de perfil
    const changeProfilePictureBtn = document.getElementById('changeProfilePicture');
    const profilePictureInput = document.getElementById('profilePictureInput');
    const profilePicture = document.getElementById('profilePicture');

    changeProfilePictureBtn.addEventListener('click', () => {
        profilePictureInput.click();
    });

    profilePictureInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePicture.src = e.target.result;
                localStorage.setItem('profilePicture', e.target.result);
            }
            reader.readAsDataURL(file);
        }
    });

    // Manejar envío del formulario de perfil
    const userProfileForm = document.getElementById('userProfileForm');
    userProfileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveUserData();
        alert('Perfil actualizado con éxito');
    });

    // Manejar cambio de contraseña
    const changePasswordBtn = document.getElementById('changePasswordBtn');
    const changePasswordModal = document.getElementById('changePasswordModal');
    const cancelPasswordChangeBtn = document.getElementById('cancelPasswordChange');
    const changePasswordForm = document.getElementById('changePasswordForm');

    changePasswordBtn.addEventListener('click', () => {
        changePasswordModal.style.display = 'block';
    });

    cancelPasswordChangeBtn.addEventListener('click', () => {
        changePasswordModal.style.display = 'none';
    });

    changePasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Aquí iría la lógica para cambiar la contraseña en el servidor
        alert('Contraseña cambiada con éxito');
        changePasswordModal.style.display = 'none';
        changePasswordForm.reset();
    });

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener('click', (e) => {
        if (e.target === changePasswordModal) {
            changePasswordModal.style.display = 'none';
        }
    });

    function loadUserData() {
        // Simulamos la carga de datos del usuario desde localStorage
        const userData = JSON.parse(localStorage.getItem('userData')) || {
            name: 'Juan Pérez',
            email: 'juan@example.com',
            phone: '123-456-7890',
            role: 'Administrador',
            ordersManaged: 150,
            productsAdded: 75,
            lastLogin: '2023-05-15 10:30:00',
            avgSessionTime: 45
        };

        document.getElementById('userName').value = userData.name;
        document.getElementById('userEmail').value = userData.email;
        document.getElementById('userPhone').value = userData.phone;
        document.getElementById('userRole').value = userData.role;

        document.getElementById('ordersManaged').textContent = userData.ordersManaged;
        document.getElementById('productsAdded').textContent = userData.productsAdded;
        document.getElementById('lastLogin').textContent = userData.lastLogin;
        document.getElementById('avgSessionTime').textContent = `${userData.avgSessionTime} minutos`;

        const savedProfilePicture = localStorage.getItem('profilePicture');
        if (savedProfilePicture) {
            profilePicture.src = savedProfilePicture;
        }
    }

    function saveUserData() {
        const userData = {
            name: document.getElementById('userName').value,
            email: document.getElementById('userEmail').value,
            phone: document.getElementById('userPhone').value,
            role: document.getElementById('userRole').value,
            ordersManaged: parseInt(document.getElementById('ordersManaged').textContent),
            productsAdded: parseInt(document.getElementById('productsAdded').textContent),
            lastLogin: document.getElementById('lastLogin').textContent,
            avgSessionTime: parseInt(document.getElementById('avgSessionTime').textContent)
        };

        localStorage.setItem('userData', JSON.stringify(userData));
    }
});