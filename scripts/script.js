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

    // Gráfico de ventas mensuales
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [{
                label: 'Ventas Mensuales',
                data: [1400, 1800, 2200, 2600, 3000, 3500],
                borderColor: '#007bff',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de pedidos por día
    const ordersCtx = document.getElementById('ordersChart').getContext('2d');
    new  Chart(ordersCtx, {
        type: 'bar',
        data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
            datasets: [{
                label: 'Pedidos por Día',
                data: [45, 52, 49, 60, 72, 80, 65],
                backgroundColor: '#28a745'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});