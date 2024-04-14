// Descripción de la idea general del simulador
const descripcion = "Este simulador calcula el costo total de la compra de un producto en función de su precio unitario y la cantidad deseada.";

// Productos disponibles y sus precios unitarios
const productos = [
    { nombre: "Producto A", precioUnitario: 10 },
    { nombre: "Producto B", precioUnitario: 15 },
    { nombre: "Producto C", precioUnitario: 20 }
];

// Función para mostrar los productos disponibles
function mostrarProductos() {
    console.log("Productos disponibles:");
    productos.forEach(producto => {
        console.log(`${producto.nombre}: $${producto.precioUnitario}`);
    });
}

// Función para obtener los datos de entrada
function obtenerDatosEntrada() {
    const productoSeleccionado = parseInt(prompt("Seleccione el número del producto deseado:\n1. Producto A\n2. Producto B\n3. Producto C"));
    const cantidad = parseInt(prompt("Ingrese la cantidad deseada del producto:"));
    return { productoSeleccionado, cantidad };
}

// Función para procesar los datos y calcular el costo total
function calcularCostoTotal(productoSeleccionado, cantidad) {
    const precioUnitario = productos[productoSeleccionado - 1].precioUnitario;
    const costoTotal = precioUnitario * cantidad;
    return costoTotal;
}

// Función para mostrar el resultado de salida
function mostrarResultado(costoTotal) {
    alert(`El costo total de la compra es: $${costoTotal.toFixed(2)}`);
}

// Llamada a las funciones
function simularCompra() {
    console.log(descripcion);
    mostrarProductos();
    const { productoSeleccionado, cantidad } = obtenerDatosEntrada();
    const costoTotal = calcularCostoTotal(productoSeleccionado, cantidad);
    mostrarResultado(costoTotal);
}

// Invocar la función principal para simular una compra
simularCompra();