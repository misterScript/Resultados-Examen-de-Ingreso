const comunasPorRegion = {
    "XV": ["Arica", "Camarones", "Putre", "General Lagos"],
    "I": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
    "II": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
    "III": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
    "IV": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
    "V": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
    "RM": ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"],
    "VI": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
    "VII": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
    "XVI": ["Chillán", "Bulnes", "Chillán Viejo", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Quirihue", "Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Ránquil", "Treguaco", "San Carlos", "Coihueco", "Ñiquén", "San Fabián", "San Nicolás"],
    "VIII": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualpén", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Lebu", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"],
    "IX": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
    "XIV": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
    "X": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
    "XI": ["Coihaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas", "Cochrane", "O'Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
    "XII": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
};

function cargarComunas() {
    const regionSelect = document.getElementById("region");
    const comunaSelect = document.getElementById("comuna");
    const regionCodigo = regionSelect.value;

    comunaSelect.innerHTML = '';
    comunaSelect.disabled = true;

    if (regionCodigo && comunasPorRegion[regionCodigo]) {
        comunaSelect.disabled = false;
        comunaSelect.innerHTML = '<option value="">Seleccione una comuna</option>';
        comunasPorRegion[regionCodigo].forEach(comuna => {
            const option = document.createElement("option");
            option.value = comuna;
            option.textContent = comuna;
            comunaSelect.appendChild(option);
        });
    } else {
        comunaSelect.innerHTML = '<option value="">Primero seleccione una región</option>';
    }
}

function mostrarModal() {
    const modal = document.getElementById("confirmacionModal");
    modal.style.display = "block";
}

function cerrarModal() {
    const modal = document.getElementById("confirmacionModal");
    modal.style.display = "none";
}

async function enviarDatosASheets(datos) {
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxNBG_BnhpbZzHaq5U5oCF-0ppBy4mGUDRi72sjNF_s0lYo_AqY3PzL5WJwAw5vwarhCw/exec";
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

async function manejarEnvioFormulario(event) {
    event.preventDefault();
    const puestoSeleccionado = document.querySelector('input[name="puesto_postulacion"]:checked').value;

    const formData = new FormData(document.getElementById('postulacionForm'));
    const datos = {};
    formData.forEach((value, key) => {
        if (key === "otros_documentos") {
            // Captura todos los nombres de los archivos seleccionados
            const files = document.getElementById('otros').files;
            datos[key] = [];
            for (let i = 0; i < files.length; i++) {
                datos[key].push(files[i].name);
            }
        } else if (value instanceof File) {
            datos[key] = value.name;
        } else {
            datos[key] = value;
        }
    });
    datos.timestamp = new Date().toISOString();

    if (puestoSeleccionado === 'piloto-rov') {
        // Guarda los datos personales completos en localStorage y redirige a la prueba
        localStorage.setItem('datosPilotoROV', JSON.stringify(datos));
        window.location.href = 'prueba.html';
    } else {
        const envioExitoso = await enviarDatosASheets(datos);
        if (envioExitoso) {
            mostrarModal();
            document.getElementById('postulacionForm').reset();
        } else {
            alert('Hubo un error al enviar la postulación. Por favor, inténtelo nuevamente.');
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('postulacionForm');
    formulario.addEventListener('submit', manejarEnvioFormulario);

    const radioButtons = document.querySelectorAll('input[name="puesto_postulacion"]');
    const boton = document.getElementById('boton-postulacion');

    function actualizarBoton() {
        const puestoSeleccionado = document.querySelector('input[name="puesto_postulacion"]:checked');
        if (!puestoSeleccionado) return;
        if (puestoSeleccionado.value === 'piloto-rov') {
            boton.textContent = 'Continuar con postulación';
            boton.classList.add('boton-continuar');
            boton.classList.remove('boton-enviar');
        } else {
            boton.textContent = 'Enviar postulación';
            boton.classList.add('boton-enviar');
            boton.classList.remove('boton-continuar');
        }
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', actualizarBoton);
    });

    actualizarBoton();

    const modal = document.getElementById("confirmacionModal");
    const span = document.getElementsByClassName("close")[0];
    const btnCerrar = document.getElementById("cerrarModal");

    span.onclick = cerrarModal;
    btnCerrar.onclick = cerrarModal;

    window.onclick = function (event) {
        if (event.target == modal) {
            cerrarModal();
        }
    }

    const regionSelect = document.getElementById("region");
    if (regionSelect) {
        regionSelect.addEventListener("change", cargarComunas);
    }
});