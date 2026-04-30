    const MOTTO_CONFIG = {
        // ESTADO DE LA TIENDA
        isSoldOut: true,          // Cambia a true si te quedas sin inventario (bloquea la página)

        // HORARIOS DE OPERACIÓN (Formato 24 hrs)
        startHour: 23,             // 6:00 PM
        endHour: 24+1,               // 8:00 PM

        // PRECIOS Y DESCUENTOS
        precioBowl: 800,           // Precio normal del bowl
        descuentoBienvenida: 70,   // Descuento en pesos para clientes nuevos
        descuentoSegundo: 100,   // Descuento en pesos para 2dos pedidos
        // CONEXIÓN A BASE DE DATOS
        scriptURL: 'https://script.google.com/macros/s/AKfycbw6OPIj8OqZQ_fhgrL8-kyEHn9V0wmrHzUNP3xOvEA6QJxS4QrAKySt7Z1Z_2MoowSsRw/exec'
    };
