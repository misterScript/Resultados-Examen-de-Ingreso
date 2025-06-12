const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxIFSsKMvfVTYA-_36gKWob-qL77esBaX9QwK7xaJKYBo7HDf3yu9TrQhbpZ51RmqP3Iw/exec";

// --- BANCO DE 29 PREGUNTAS ---
const preguntasBanco = [
    {
        pregunta: "¿Qué es un ROV?",
        opciones: [
            "Robot Operativo de Vectores",
            "Remotely Operated Vehicle",
            "Recorrido Operativo Visual",
            "Registro de Observación Vertical"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es la función principal de un ROV en operaciones submarinas?",
        opciones: [
            "Explorar la superficie terrestre",
            "Realizar tareas bajo el agua controlado remotamente",
            "Medir la presión atmosférica",
            "Transportar personas"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué componente permite la visualización en tiempo real bajo el agua?",
        opciones: [
            "GPS",
            "Sensor de presión",
            "Cámara",
            "Acelerómetro"
        ],
        correcta: 2
    },
    {
        pregunta: "¿Qué cable conecta el ROV con la superficie?",
        opciones: [
            "Cable coaxial",
            "Cable de cobre",
            "Umbilical",
            "Cable de fibra óptica"
        ],
        correcta: 2
    },
    {
        pregunta: "¿Qué significa la sigla ROV?",
        opciones: [
            "Remotely Operated Vehicle",
            "Remote Oceanic Vehicle",
            "Robot Operativo Vehicular",
            "Registro Operativo Visual"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es el principal riesgo eléctrico en un ROV?",
        opciones: [
            "Corto circuito en la superficie",
            "Fuga de corriente en el agua",
            "Descarga atmosférica",
            "Interferencia electromagnética"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué instrumento mide la profundidad en un ROV?",
        opciones: [
            "Sensor de presión",
            "Cámara",
            "GPS",
            "Acelerómetro"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué se debe revisar antes de sumergir un ROV?",
        opciones: [
            "El color del ROV",
            "La presión atmosférica",
            "La estanqueidad y conexiones eléctricas",
            "La temperatura ambiente"
        ],
        correcta: 2
    },
    {
        pregunta: "¿Qué tipo de energía suele usar un ROV pequeño?",
        opciones: [
            "Energía solar",
            "Baterías eléctricas",
            "Combustible fósil",
            "Energía eólica"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué permite la fibra óptica en el umbilical de un ROV?",
        opciones: [
            "Mayor resistencia mecánica",
            "Transmisión de energía",
            "Transmisión de datos a alta velocidad",
            "Flotabilidad"
        ],
        correcta: 2
    },
    {
        pregunta: "¿Qué debe hacer el operador si detecta una fuga de agua en el ROV?",
        opciones: [
            "Detener la operación y recuperar el ROV",
            "Ignorar la fuga",
            "Aumentar la potencia",
            "Sumergir más el ROV"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué accesorio permite manipular objetos bajo el agua?",
        opciones: [
            "Cámara",
            "Sensor de presión",
            "Pinza o brazo manipulador",
            "Acelerómetro"
        ],
        correcta: 2
    },
    {
        pregunta: "¿Qué parámetro es fundamental para la navegación de un ROV?",
        opciones: [
            "Profundidad",
            "Color del agua",
            "Temperatura ambiente",
            "Presión atmosférica"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué acción es correcta al terminar una operación con ROV?",
        opciones: [
            "Dejarlo en el agua",
            "Desconectar y limpiar el equipo",
            "Apagar la cámara solamente",
            "Aumentar la presión interna"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué puede causar la pérdida de señal de video en un ROV?",
        opciones: [
            "Baja temperatura",
            "Falla en el umbilical",
            "Color del agua",
            "Presión atmosférica"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué es la estanqueidad en un ROV?",
        opciones: [
            "Capacidad de resistir el ingreso de agua",
            "Capacidad de flotar",
            "Capacidad de transmitir datos",
            "Capacidad de moverse rápido"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué debe hacer el operador si el ROV queda atascado?",
        opciones: [
            "Intentar liberarlo suavemente",
            "Aumentar la potencia al máximo",
            "Ignorar el problema",
            "Desconectar el umbilical"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué función cumple el lastre en un ROV?",
        opciones: [
            "Aumentar la velocidad",
            "Controlar la flotabilidad",
            "Transmitir energía",
            "Medir la presión"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué es el umbilical?",
        opciones: [
            "Un tipo de sensor",
            "El cable que conecta el ROV con la superficie",
            "Un sistema de propulsión",
            "Un accesorio de cámara"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué se debe hacer si el ROV pierde comunicación?",
        opciones: [
            "Esperar a que vuelva la señal",
            "Recuperar el ROV inmediatamente",
            "Aumentar la profundidad",
            "Apagar el sistema"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es la principal ventaja de un ROV frente a un buzo humano?",
        opciones: [
            "Mayor velocidad",
            "Mayor seguridad en ambientes peligrosos",
            "Menor costo",
            "Mayor tamaño"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué componente permite ver en la oscuridad bajo el agua?",
        opciones: [
            "Luces LED",
            "Sensor de presión",
            "GPS",
            "Acelerómetro"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué debe revisarse antes de cada inmersión?",
        opciones: [
            "Estanqueidad y conexiones eléctricas",
            "Color del ROV",
            "Temperatura ambiente",
            "Presión atmosférica"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué puede dañar el umbilical de un ROV?",
        opciones: [
            "Enrollarse o doblarse excesivamente",
            "Baja temperatura",
            "Alta presión",
            "Color del agua"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué acción es incorrecta durante la operación de un ROV?",
        opciones: [
            "Ignorar las alarmas del sistema",
            "Monitorear constantemente los parámetros",
            "Revisar la estanqueidad",
            "Verificar la comunicación"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué parámetro NO es relevante para la operación de un ROV?",
        opciones: [
            "Profundidad",
            "Presión",
            "Color del agua",
            "Temperatura"
        ],
        correcta: 2
    },
    {
        pregunta: "¿Qué accesorio ayuda a la navegación precisa del ROV?",
        opciones: [
            "GPS",
            "Cámara",
            "Pinza",
            "Sensor de presión"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué debe hacer el operador si detecta un mal funcionamiento?",
        opciones: [
            "Detener la operación y revisar el equipo",
            "Ignorar el problema",
            "Aumentar la potencia",
            "Sumergir más el ROV"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es fundamental para la seguridad en la operación de un ROV?",
        opciones: [
            "Seguir los procedimientos y checklists",
            "Aumentar la velocidad",
            "Ignorar las alarmas",
            "Reducir la comunicación"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué puede causar una imagen borrosa en la cámara del ROV?",
        opciones: [
            "Suciedad en el lente",
            "Alta presión",
            "Baja temperatura",
            "Color del agua"
        ],
        correcta: 0
    }
];

// --- SELECCIÓN DE 15 PREGUNTAS ALEATORIAS ---
function obtenerPreguntasAleatorias(banco, cantidad) {
    const copia = [...banco];
    const seleccionadas = [];
    while (seleccionadas.length < cantidad && copia.length > 0) {
        const idx = Math.floor(Math.random() * copia.length);
        seleccionadas.push(copia.splice(idx, 1)[0]);
    }
    return seleccionadas;
}
const preguntasSeleccionadas = obtenerPreguntasAleatorias(preguntasBanco, 15);

// --- RENDERIZAR PREGUNTAS EN EL HTML ---
const contenedor = document.getElementById('contenedor-preguntas');
preguntasSeleccionadas.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = "pregunta";
    div.innerHTML = `
        <fieldset>
            <legend>${i + 1}. ${p.pregunta}</legend>
            ${p.opciones.map((op, idx) =>
                `<label><input type="radio" name="respuesta${i + 1}" value="${["A","B","C","D"][idx]}"> ${["A","B","C","D"][idx]}) ${op}</label><br>`
            ).join('')}
        </fieldset>
        <br>
    `;
    contenedor.appendChild(div);
});

// --- MENSAJE DE PORCENTAJE DE APROBACIÓN ---
const infoAprobacion = document.createElement('div');
infoAprobacion.style.textAlign = "center";
infoAprobacion.style.margin = "20px 0";
infoAprobacion.style.fontWeight = "bold";
infoAprobacion.style.color = "#00509e";
infoAprobacion.textContent = "El porcentaje mínimo de aprobación de la prueba es 80%.";
document.querySelector('main').insertBefore(infoAprobacion, document.getElementById('form-prueba'));

// --- BLOQUEO Y DATOS ---
const datosPiloto = JSON.parse(localStorage.getItem('datosPilotoROV') || '{}');
if (!datosPiloto || !datosPiloto.cedula) {
    alert("No se encontraron datos del postulante. Vuelva a iniciar el proceso.");
    window.location.href = "Datos.html";
}

const bloqueos = JSON.parse(localStorage.getItem('bloqueosPilotoROV') || '{}');
const rut = datosPiloto.cedula;

if (bloqueos[rut]) {
    const bloqueo = bloqueos[rut];
    const ahora = Date.now();
    if (bloqueo.estado === "aprobado") {
        alert("Ya aprobaste la prueba. No puedes volver a rendirla.");
        window.location.href = "Datos.html";
    } else if (bloqueo.estado === "reprobado" && ahora < bloqueo.hasta) {
        alert("Reprobaste la prueba. Vuelve a intentarlo el próximo año.");
        window.location.href = "Datos.html";
    } else if (bloqueo.estado === "reprobado" && ahora >= bloqueo.hasta) {
        delete bloqueos[rut];
        localStorage.setItem('bloqueosPilotoROV', JSON.stringify(bloqueos));
    }
}

// --- PREVENCIÓN DE COPIAR/PEGAR, CLICK DERECHO, CAMBIO DE PESTAÑA Y REFRESCO DE PÁGINA ---
document.addEventListener('copy', e => e.preventDefault());
document.addEventListener('cut', e => e.preventDefault());
document.addEventListener('paste', e => e.preventDefault());
document.addEventListener('contextmenu', e => e.preventDefault());

window.onblur = function() {
    alert("No puedes cambiar de pestaña o ventana durante la prueba. Serás devuelto al inicio.");
    window.location.href = "Datos.html";
};

window.addEventListener('beforeunload', function(e) {
    localStorage.removeItem('datosPilotoROV');
    e.preventDefault();
    e.returnValue = '';
});

document.addEventListener('keydown', function(e) {
    if (
        (e.ctrlKey && ['r', 'R', 'u', 'U', 's', 'S', 'p', 'P'].includes(e.key)) ||
        e.key === 'F5' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        e.key === 'F12'
    ) {
        e.preventDefault();
        alert("Acción bloqueada durante la prueba.");
        return false;
    }
});

// --- ENVÍO Y CORRECCIÓN ---
document.getElementById('form-prueba').addEventListener('submit', async function(e) {
    e.preventDefault();

    let puntaje = 0;
    let respuestasSeleccionadas = [];

    preguntasSeleccionadas.forEach((p, i) => {
        const radios = document.getElementsByName('respuesta' + (i + 1));
        let seleccion = '';
        let seleccionIdx = -1;
        for (let j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                seleccion = radios[j].value;
                seleccionIdx = j;
                break;
            }
        }
        respuestasSeleccionadas.push(seleccion);
        if (seleccionIdx === p.correcta) {
            puntaje++;
        }
    });

    const porcentaje = (puntaje / preguntasSeleccionadas.length) * 100;
    datosPiloto.puntaje = puntaje;
    datosPiloto.porcentaje = porcentaje.toFixed(2);
    datosPiloto.respuestas = respuestasSeleccionadas;
    datosPiloto.preguntas = preguntasSeleccionadas.map(p => p.pregunta);

    // Bloqueo y mensajes
    const bloqueos = JSON.parse(localStorage.getItem('bloqueosPilotoROV') || '{}');
    const mensajeDiv = document.getElementById('mensaje-resultado');
    if (porcentaje >= 80) {
        bloqueos[rut] = { estado: "aprobado" };
        localStorage.setItem('bloqueosPilotoROV', JSON.stringify(bloqueos));
        mensajeDiv.style.display = "block";
        mensajeDiv.style.color = "green";
        mensajeDiv.textContent = "¡Has aprobado esta prueba de ingreso! Desde ahora quedarás en nuestra base de datos y cuando estemos listos con el siguiente proceso te llamaremos.";
        setTimeout(() => {
            alert("Has aprobado esta prueba de ingreso. Desde ahora quedarás en nuestra base de datos y cuando estemos listos con el siguiente proceso te llamaremos.");
        }, 100);
    } else {
        bloqueos[rut] = { estado: "reprobado", hasta: Date.now() + 365 * 24 * 60 * 60 * 1000 };
        localStorage.setItem('bloqueosPilotoROV', JSON.stringify(bloqueos));
        mensajeDiv.style.display = "block";
        mensajeDiv.style.color = "red";
        mensajeDiv.textContent = "Reprobaste. Vuelve a intentarlo el próximo año.";
        alert("Reprobaste. Vuelve a intentarlo el próximo año.");
    }

    // Enviar a Google Sheets
    await enviarDatosASheets(datosPiloto);

    // Limpiar datos y volver al inicio
    localStorage.removeItem('datosPilotoROV');
    setTimeout(() => {
        window.location.href = "Datos.html";
    }, 2000);
});

// --- FUNCIÓN PARA ENVIAR A GOOGLE SHEETS ---
async function enviarDatosASheets(datos) {
    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log('Success:', result);
        return true;
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}
