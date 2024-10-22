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

    // Elementos del formulario de personalización
    const logoUpload = document.getElementById('logoUpload');
    const primaryColor = document.getElementById('primaryColor');
    const secondaryColor = document.getElementById('secondaryColor');
    const fontFamily = document.getElementById('fontFamily');
    const fontSize = document.getElementById('fontSize');
    const fontSizeValue = document.getElementById('fontSizeValue');
    const customizationForm = document.getElementById('customizationForm');

    // Elementos de la vista previa
    const menuPreview = document.getElementById('menuPreview');
    const previewLogo = document.getElementById('previewLogo');

    // Cargar configuración guardada
    loadSavedCustomization();

    // Evento de cambio para el logo
    logoUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewLogo.src = e.target.result;
                localStorage.setItem('logoSrc', e.target.result);
            }
            reader.readAsDataURL(file);
        }
    });

    // Eventos de cambio para colores
    primaryColor.addEventListener('input', updatePreview);
    secondaryColor.addEventListener('input', updatePreview);

    // Evento de cambio para la fuente
    
    fontFamily.addEventListener('change', updatePreview);

    // Evento de cambio para el tamaño de fuente
    fontSize.addEventListener('input', function() {
        fontSizeValue.textContent = `${this.value}px`;
        updatePreview();
    });

    // Evento de envío del formulario
    customizationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        saveCustomization();
        alert('Cambios guardados con éxito!');
    });

    function updatePreview() {
        menuPreview.style.setProperty('--primary-color', primaryColor.value);
        menuPreview.style.setProperty('--secondary-color', secondaryColor.value);
        menuPreview.style.fontFamily = fontFamily.value;
        menuPreview.style.fontSize = `${fontSize.value}px`;
    }

    function saveCustomization() {
        localStorage.setItem('primaryColor', primaryColor.value);
        localStorage.setItem('secondaryColor', secondaryColor.value);
        localStorage.setItem('fontFamily', fontFamily.value);
        localStorage.setItem('fontSize', fontSize.value);
    }

    function loadSavedCustomization() {
        const savedPrimaryColor = localStorage.getItem('primaryColor');
        const savedSecondaryColor = localStorage.getItem('secondaryColor');
        const savedFontFamily = localStorage.getItem('fontFamily');
        const savedFontSize = localStorage.getItem('fontSize');
        const savedLogoSrc = localStorage.getItem('logoSrc');

        if (savedPrimaryColor) primaryColor.value = savedPrimaryColor;
        if (savedSecondaryColor) secondaryColor.value = savedSecondaryColor;
        if (savedFontFamily) fontFamily.value = savedFontFamily;
        if (savedFontSize) {
            fontSize.value = savedFontSize;
            fontSizeValue.textContent = `${savedFontSize}px`;
        }
        if (savedLogoSrc) previewLogo.src = savedLogoSrc;

        updatePreview();
    }
});