/**
 * Tu tarea es gestionar las ventas en una tienda de electrónica que vende 
 * diferentes productos como smartphones, laptops y cámaras. 
 * Cada venta contiene la información del cliente, los productos vendidos y sus cantidades.
 * Debes calcular el subtotal de cada venta, el total de las ventas, 
 * extraer todos los productos vendidos y calcular la cantidad de productos 
 * vendidos por categoría (smartphones, laptops y cámaras).
 */
const ventas = [
  {
    cliente: "Juan",
    productos: [
      { nombre: "smartphone", cantidad: 1, precio: 350 },
      { nombre: "laptop", cantidad: 1, precio: 800 },
    ],
  },
  {
    cliente: "Ana",
    productos: [
      { nombre: "smartphone", cantidad: 2, precio: 350 },
      { nombre: "cámara", cantidad: 1, precio: 250 },
    ],
  },
  {
    cliente: "Pedro",
    productos: [
      { nombre: "laptop", cantidad: 1, precio: 800 },
      { nombre: "cámara", cantidad: 2, precio: 250 },
    ],
  },
];

// Escribe tu código aquí
// 1. Calcular el subtotal de cada venta
const subtotales = ventas.map((venta) => {
  const subtotal = venta.productos
    .map((producto) => producto.cantidad * producto.precio)
    .reduce((a, b) => a + b, 0);
  return { ...venta, subtotal };
});

// 2. Calcular el total recaudado
const totalRecaudado = subtotales
  .map((pedido) => pedido.subtotal)
  .reduce((a, b) => a + b, 0);

console.log("Total recaudado: ", totalRecaudado);

// 3. Extraer todos los productos vendidos
const todosLosproductos = ventas.reduce((productos, pedido) => {
  return productos.concat(pedido.productos);
}, []);

console.log(todosLosproductos);

// 4. Calcular la cantidad de productos vendidos por tipo
const productosVendidos = todosLosproductos.reduce((contador, producto) => {
  if (!contador[producto.nombre]) {
    contador[producto.nombre] = 0;
  }
  contador[producto.nombre] += producto.cantidad;
  return contador;
}, {});

console.log("productos venidos por tipo: ", productosVendidos);

