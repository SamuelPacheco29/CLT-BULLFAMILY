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

    // Manejo del formulario de productos
    const productForm = document.getElementById('productForm');
    const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];

    productForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const name = document.getElementById('productName').value;
        const description = document.getElementById('productDescription').value;
        const price = document.getElementById('productPrice').value;
        const quantity = document.getElementById('productQuantity').value;
        const category = document.getElementById('productCategory').value;

        // Crear una nueva fila en la tabla
        const newRow = productTable.insertRow();
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${description}</td>
            <td>$${price}</td>
            <td>${quantity}</td>
            <td>${category}</td>
            <td>
                <button class="btn-icon edit-product" aria-label="Editar producto">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon delete-product" aria-label="Eliminar producto">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;

        // Limpiar el formulario
        productForm.reset();

        // Agregar event listeners para editar y eliminar
        const editButton = newRow.querySelector('.edit-product');
        const deleteButton = newRow.querySelector('.delete-product');

        editButton.addEventListener('click', function() {
            // Aquí iría la lógica para editar el producto
            alert('Función de edición no implementada');
        });

        deleteButton.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
                productTable.deleteRow(newRow.rowIndex - 1);
            }
        });
    });

    // Cargar algunos productos de ejemplo
    const sampleProducts = [
        { name: 'Hamburguesa Clásica', description: 'Carne de res, lechuga, tomate, queso', price: 10.99, quantity: 50, category: 'Platos Principales' },
        { name: 'Ensalada César', description: 'Lechuga romana, crutones, parmesano, aderezo César', price: 8.99, quantity: 30, category: 'Entradas' },
        { name:  'Refresco de Cola', description: 'Bebida gaseosa sabor cola', price: 2.50, quantity: 100, category: 'Bebidas' }
    ];

    sampleProducts.forEach(product => {
        const newRow = productTable.insertRow();
        newRow.innerHTML = `
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>$${product.price}</td>
            <td>${product.quantity}</td>
            <td>${product.category}</td>
            <td>
                <button class="btn-icon edit-product" aria-label="Editar producto">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon delete-product" aria-label="Eliminar producto">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;

        const editButton = newRow.querySelector('.edit-product');
        const deleteButton = newRow.querySelector('.delete-product');

        editButton.addEventListener('click', function() {
            alert('Función de edición no implementada');
        });

        deleteButton.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
                productTable.deleteRow(newRow.rowIndex - 1);
            }
        });
    });
});