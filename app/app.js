// ==========================================
// 1. CLASE MODELO: DATOS Y FILTRADO DE STOCK
// ==========================================
class Tienda {
    constructor() {
        this.stock = [
            { id: 'm1', cat: 'meds', nombre: 'Paracetamol 500mg', precio: 2.50, img: 'Imagenes/paracetamol.webp', promo: '3x1 🔥' },
            { id: 'm2', cat: 'meds', nombre: 'Ibuprofeno 400mg', precio: 5.00, img: 'Imagenes/Ibuprofeno.jpg' },
            { id: 'm3', cat: 'meds', nombre: 'Amoxicilina 500mg', precio: 15.00, img: 'Imagenes/Amoxicilina.png' },
            { id: 'm4', cat: 'meds', nombre: 'Losartán 50mg', precio: 18.20, img: 'Imagenes/Losartan.webp', promo: '-10%' },
            { id: 'm5', cat: 'meds', nombre: 'Azitromicina 500mg', precio: 22.00, img: 'Imagenes/Azitromicina.jpg' },
            { id: 'm6', cat: 'meds', nombre: 'Omeprazol 20mg', precio: 8.50, img: 'Imagenes/Omeprazol.jpg' },
            { id: 'm7', cat: 'meds', nombre: 'Loratadina 10mg', precio: 4.50, img: 'Imagenes/Loratadina.webp' },
            { id: 'm8', cat: 'meds', nombre: 'Metformina 850mg', precio: 12.00, img: 'Imagenes/Metformina.png' },
            { id: 'm9', cat: 'meds', nombre: 'Naproxeno 550mg', precio: 9.20, img: 'Imagenes/Naproxeno.jpg' },
            { id: 'm10', cat: 'meds', nombre: 'Ciprofloxacino 500mg', precio: 19.50, img: 'Imagenes/Ciprofloxacino.webp' },
            { id: 'c1', cat: 'cuidado', nombre: 'Protector Solar ISDIN', precio: 85.00, img: 'Imagenes/Bloqueador.webp', promo: '-20% Dscto' },
            { id: 'c2', cat: 'cuidado', nombre: 'Agua Micelar Bioderma', precio: 45.00, img: 'Imagenes/AguaMicelar.webp' },
            { id: 'c3', cat: 'cuidado', nombre: 'Gel Limpiador CeraVe', precio: 65.00, img: 'Imagenes/Gel_Limpiador.webp' },
            { id: 'c4', cat: 'cuidado', nombre: 'Champú Tío Nacho', precio: 32.50, img: 'Imagenes/ChampuTioNacho.webp', promo: '2x1' },
            { id: 'c5', cat: 'cuidado', nombre: 'Pasta Dental Colgate', precio: 8.90, img: 'Imagenes/PastaDental.webp' },
            { id: 'c6', cat: 'cuidado', nombre: 'Desodorante Rexona', precio: 14.50, img: 'Imagenes/DesodoranteRexona.webp' },
            { id: 'c7', cat: 'cuidado', nombre: 'Crema Nivea Q10', precio: 28.00, img: 'Imagenes/CremaNivea.webp' },
            { id: 'c8', cat: 'cuidado', nombre: 'Jabón Asepxia (Pack 3)', precio: 18.00, img: 'Imagenes/JabonAsepxia.jpg' },
            { id: 'c9', cat: 'cuidado', nombre: 'Toallas Nosotras', precio: 11.20, img: 'Imagenes/ToallaNosotras.webp' },
            { id: 'c10', cat: 'cuidado', nombre: 'Enjuague Listerine', precio: 21.90, img: 'Imagenes/Enjuague.webp' },
            { id: 'b1', cat: 'bienestar', nombre: 'Vitamina C + Zinc', precio: 25.90, img: 'Imagenes/Vitamina.jpg', promo: 'Lleva 2 Paga 1' },
            { id: 'b2', cat: 'bienestar', nombre: 'Alcohol Medicinal 70°', precio: 8.50, img: 'Imagenes/AlcoholMedicinal.jpg' },
            { id: 'b3', cat: 'bienestar', nombre: 'Termómetro Digital', precio: 25.00, img: 'Imagenes/Termometro.webp' },
            { id: 'b4', cat: 'bienestar', nombre: 'Magnesol Efervescente', precio: 24.90, img: 'Imagenes/Magnesol.jpg' },
            { id: 'b5', cat: 'bienestar', nombre: 'Curitas (Caja 100u)', precio: 10.50, img: 'Imagenes/Curitas.jpg' },
            { id: 'b6', cat: 'bienestar', nombre: 'Gasas Estériles', precio: 5.50, img: 'Imagenes/Gasas.webp' },
            { id: 'b7', cat: 'bienestar', nombre: 'Ensure Advance', precio: 65.00, img: 'Imagenes/EnsureAdvance.png' },
            { id: 'b8', cat: 'bienestar', nombre: 'Pañales Huggies XXG', precio: 55.00, img: 'Imagenes/Pañales.webp' },
            { id: 'b9', cat: 'bienestar', nombre: 'Colágeno Hidrolizado', precio: 89.90, img: 'Imagenes/Colageno.jpg', promo: '-30%' },
            { id: 'b10', cat: 'bienestar', nombre: 'Omega 3', precio: 45.00, img: 'Imagenes/Omega3.webp' }
        ];
    }

    buscar(txt) {
        const q = txt.toLowerCase().trim();
        const resultados = q ? this.stock.filter(p => p.nombre.toLowerCase().includes(q)) : this.stock.slice();
        return this._ordenarAlfabeticamente(resultados);
    }

    // NUEVO: antes los productos salían en el orden en que estaban escritos
    // en el arreglo (sin ningún criterio). Ahora todo se muestra A-Z.
    obtenerPorCategoria(categoria) {
        const lista = (!categoria || categoria === 'todos')
            ? this.stock.slice()
            : this.stock.filter(p => p.cat === categoria);
        return this._ordenarAlfabeticamente(lista);
    }

    _ordenarAlfabeticamente(lista) {
        return lista.slice().sort((a, b) => a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' }));
    }

    obtenerProductoPorId(id) {
        return this.stock.find(p => p.id === id) || null;
    }

    resolverRutaImagen(img) {
        if (!img) return this.IMG_RESPALDO;
        if (img.startsWith('http') || img.startsWith('//')) return img;
        const prefix = window.location.pathname.replace(/\\/g, '/').includes('/pages/') ? '../' : '';
        return `${prefix}${img}`;
    }

    // NUEVO: descripción genérica por categoría, usada en la página de
    // detalle de producto (producto.html) cuando el producto no trae una
    // descripción propia.
    descripcionGenerica(cat) {
        const textos = {
            meds: 'Medicamento indicado para el alivio de síntomas leves a moderados. Consulte a su médico o químico farmacéutico antes de usar, respete la dosis indicada en el empaque y conserve en un lugar fresco y seco, fuera del alcance de los niños.',
            cuidado: 'Producto de cuidado personal formulado para uso diario. Aplique según las indicaciones del empaque y suspenda su uso si nota alguna reacción en la piel.',
            bienestar: 'Producto de bienestar y salud general. Úselo siguiendo las indicaciones del fabricante o la recomendación de un profesional de la salud.'
        };
        return textos[cat] || 'Producto disponible en nuestras tiendas FarmaNova, tanto en línea como en botica física.';
    }

    nombreCategoria(cat) {
        const nombres = { meds: 'Medicamentos', cuidado: 'Cuidado Personal', bienestar: 'Bienestar' };
        return nombres[cat] || cat;
    }
}


// 2. CLASE LOGIC: GESTIÓN DE DATOS DEL CARRITO
class Carrito {
    constructor() {
        this.items = this._leerStorage();
    }

    // BUGFIX: localStorage puede fallar (modo incógnito, cuota llena, etc.)
    // Antes una excepción aquí rompía la carga de TODA la página.
    _leerStorage() {
        try {
            return JSON.parse(localStorage.getItem('carritoFarmaNova')) || [];
        } catch (e) {
            console.warn('No se pudo leer el carrito guardado:', e);
            return [];
        }
    }

    add(id, stockCompleto, cantidad = 1) {
        const prod = stockCompleto.find(p => p.id === id);
        if (!prod) return;
        const existe = this.items.find(x => x.id === id);
        existe ? existe.cantidad += cantidad : this.items.push({ ...prod, cantidad });
        this.guardar();
    }

    modificar(id, cant) {
        const item = this.items.find(x => x.id === id);
        if (item) {
            item.cantidad += cant;
            if (item.cantidad <= 0) this.items = this.items.filter(x => x.id !== id);
            this.guardar();
        }
    }

    eliminar(id) {
        this.items = this.items.filter(x => x.id !== id);
        this.guardar();
    }

    guardar() {
        try {
            localStorage.setItem('carritoFarmaNova', JSON.stringify(this.items));
        } catch (e) {
            console.warn('No se pudo guardar el carrito:', e);
        }
        if (window.appUI) window.appUI.actualizarCarritoUI();
    }

    get total() { return this.items.reduce((acc, x) => acc + (x.precio * x.cantidad), 0); }
    get cantidadTotal() { return this.items.reduce((acc, x) => acc + x.cantidad, 0); }
}

// ==========================================
// 3. CLASE INTERFAZ: RENDERIZADO Y EVENTOS (UI)
// ==========================================
class UI {
    constructor(tienda, carrito) {
        this.tienda = tienda;
        this.carrito = carrito;
        this.filtroActual = 'todos';   // recuerda qué categoría está activa en el catálogo
        this.dom = {
            cont: document.getElementById('contadorCarrito'),
            total: document.getElementById('totalCarrito'),
            box: document.getElementById('carritoItems'),
            btnPagar: document.getElementById('btnIrAPagar')
        };
    }

    init() {
        // Inicializar Modal automático de bienvenida
        const modal = document.getElementById('modalOferta');
        if (modal) {
            setTimeout(() => modal.style.display = 'flex', 500);
            document.getElementById('cerrarModal').onclick = () => modal.style.display = 'none';
            document.getElementById('btnAprovechar').onclick = () => modal.style.display = 'none';
        }

        // Toggles para abrir/cerrar el Carrito lateral
        const btnAbrir = document.getElementById('abrirCarrito');
        const btnCerrar = document.getElementById('cerrarCarrito');
        if (btnAbrir) btnAbrir.onclick = (e) => { e.preventDefault(); document.getElementById('carritoPanel').classList.add('open'); };
        if (btnCerrar) btnCerrar.onclick = () => document.getElementById('carritoPanel').classList.remove('open');

        // Menú hamburguesa responsive
        const menu = document.querySelector('.menu');
        if (menu) {
            const toggle = document.createElement('button');
            toggle.type = 'button';
            toggle.className = 'menu-toggle';
            toggle.setAttribute('aria-label', 'Abrir menú');
            toggle.innerHTML = '<span></span><span></span><span></span>';
            menu.insertBefore(toggle, menu.firstChild);

            const updateMenuState = () => {
                if (window.innerWidth <= 768) {
                    if (window.pageYOffset > 80) {
                        menu.classList.add('compact');
                        menu.classList.remove('open');
                        toggle.setAttribute('aria-expanded', 'false');
                    } else {
                        menu.classList.remove('compact', 'open');
                        toggle.setAttribute('aria-expanded', 'false');
                    }
                } else {
                    menu.classList.remove('compact', 'open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            };

            toggle.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    const isOpen = menu.classList.toggle('open');
                    toggle.setAttribute('aria-expanded', String(isOpen));
                }
            });

            window.addEventListener('scroll', updateMenuState);
            window.addEventListener('resize', updateMenuState);
            updateMenuState();
        }

        // Buscador con "debounce" para no re-renderizar en cada tecla
        const buscador = document.getElementById('inputBuscador');
        if (buscador) {
            let temporizador = null;
            buscador.addEventListener('input', (e) => {
                clearTimeout(temporizador);
                const valor = e.target.value;
                temporizador = setTimeout(() => this.ejecutarBusqueda(valor), 200);
            });
        }

        // Botones de filtro por categoría (si existen en la página actual)
        document.querySelectorAll('.btn-filtro[data-filtro]').forEach(btn => {
            btn.addEventListener('click', () => this.filtrar(btn.dataset.filtro));
        });

        // Botón "Buscar" del catálogo: dispara la búsqueda al instante
        const btnBuscar = document.getElementById('btnBuscar');
        if (btnBuscar && buscador) btnBuscar.addEventListener('click', () => this.ejecutarBusqueda(buscador.value));

        // Modal de afiliación NovaClub (pide los mismos datos que el checkout)
        this.initModalAfiliacion();

        // Modal de Inicio de Sesión (Facebook / Google / Apple / Correo)
        this.initModalLogin();

        // Cargar renders dinámicos dependiendo de la página abierta
        if (document.getElementById('ofertas-preview')) this.renderizarPaginaInicio();
        // Si venimos de un enlace como "Pack Botiquín" con ?filtro=bienestar,
        // abrimos el catálogo directamente en esa categoría en vez de "todos".
        if (document.getElementById('seccion-meds')) {
            const filtroUrl = new URLSearchParams(window.location.search).get('filtro');
            const categoriasValidas = ['todos', 'meds', 'cuidado', 'bienestar'];
            const filtroInicial = categoriasValidas.includes(filtroUrl) ? filtroUrl : 'todos';
            this.filtrar(filtroInicial);

            if (filtroInicial !== 'todos') {
                const seccionDestino = document.getElementById(`seccion-${filtroInicial}`);
                if (seccionDestino) {
                    setTimeout(() => seccionDestino.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
                }
            }
        }
        if (document.getElementById('detalleProducto')) this.initPaginaProducto();

        this.actualizarCarritoUI();
    }

    // NUEVO: página de detalle de producto (producto.html?id=XXX), similar
    // a la ficha de producto de una tienda real (imagen, precio, descripción,
    // selector de cantidad y "Agregar al carrito").
    initPaginaProducto() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const producto = id ? this.tienda.obtenerProductoPorId(id) : null;

        const wrapOk = document.getElementById('detalleProducto');
        const wrapError = document.getElementById('productoNoEncontrado');

        if (!producto) {
            if (wrapOk) wrapOk.style.display = 'none';
            if (wrapError) wrapError.style.display = 'block';
            return;
        }

        if (wrapError) wrapError.style.display = 'none';
        if (wrapOk) wrapOk.style.display = 'grid';

        document.title = `${producto.nombre} - FarmaNova`;

        const set = (id, valor) => { const el = document.getElementById(id); if (el) el.innerHTML = valor; };

        set('prodMigaCategoria', this.escapar(this.tienda.nombreCategoria(producto.cat)));
        set('prodMigaNombre', this.escapar(producto.nombre));
        set('prodNombre', this.escapar(producto.nombre));
        set('prodCategoria', this.escapar(this.tienda.nombreCategoria(producto.cat)));
        set('prodPrecio', `S/ ${producto.precio.toFixed(2)}`);
        set('prodDescripcion', this.escapar(producto.desc || this.tienda.descripcionGenerica(producto.cat)));

        const imgEl = document.getElementById('prodImagen');
        if (imgEl) {
            imgEl.src = this.tienda.resolverRutaImagen(producto.img);
            imgEl.alt = producto.nombre;
            imgEl.onerror = () => { imgEl.onerror = null; imgEl.src = this.IMG_RESPALDO; };
        }

        const promoEl = document.getElementById('prodPromo');
        if (promoEl) promoEl.style.display = producto.promo ? 'inline-block' : 'none';
        if (promoEl && producto.promo) promoEl.textContent = producto.promo;

        // Selector de cantidad + Agregar al carrito
        const inputCant = document.getElementById('prodCantidad');
        const btnAgregar = document.getElementById('btnAgregarDetalle');
        const mensajeOk = document.getElementById('prodMensajeExito');

        if (btnAgregar) {
            btnAgregar.addEventListener('click', () => {
                const cantidad = Math.max(1, parseInt(inputCant ? inputCant.value : 1, 10) || 1);
                this.agregarAlCarrito(producto.id, cantidad);
                if (mensajeOk) {
                    mensajeOk.style.display = 'block';
                    clearTimeout(this._timeoutMensajeProducto);
                    this._timeoutMensajeProducto = setTimeout(() => mensajeOk.style.display = 'none', 2500);
                }
            });
        }

        // Productos relacionados: misma categoría, sin incluir el actual
        const relacionadosGrid = document.getElementById('prodRelacionados');
        if (relacionadosGrid) {
            const relacionados = this.tienda.obtenerPorCategoria(producto.cat)
                .filter(p => p.id !== producto.id)
                .slice(0, 4);
            relacionadosGrid.innerHTML = relacionados.map(p => this.generarCardHTML(p)).join('');
        }
    }

    // NUEVO: el botón "Afiliarse sin costo" antes no hacía nada. Ahora abre
    // un modal que pide exactamente los mismos datos que se piden al comprar
    // un producto (nombre, DNI, correo, teléfono y dirección).
    initModalAfiliacion() {
        const modal = document.getElementById('modalAfiliacion');
        if (!modal) return;

        const btnAbrir = document.getElementById('btnAfiliarse');
        const btnCerrar = document.getElementById('cerrarModalAfiliacion');
        const form = document.getElementById('formAfiliacion');
        const vistaForm = document.getElementById('formAfiliacionWrap');
        const vistaExito = document.getElementById('afiliacionExito');

        if (btnAbrir) {
            btnAbrir.addEventListener('click', () => {
                if (form) form.reset();
                if (vistaForm) vistaForm.style.display = 'block';
                if (vistaExito) vistaExito.style.display = 'none';
                modal.style.display = 'flex';
            });
        }

        if (btnCerrar) btnCerrar.addEventListener('click', () => modal.style.display = 'none');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (vistaForm) vistaForm.style.display = 'none';
                if (vistaExito) vistaExito.style.display = 'block';
            });
        }
    }

    // NUEVO: Inicio de sesión. El botón "Iniciar sesión" del menú abre un
    // modal con las opciones de Facebook/Google/Apple/Correo (como en el
    // mockup); cualquiera de esas opciones -o "Regístrate"- lleva al mismo
    // formulario que pide los datos (mismos campos que NovaClub + contraseña).
    // Como el modal no vive en cada página, se inyecta una sola vez aquí.
    initModalLogin() {
        const btnAbrir = document.getElementById('abrirLogin');
        if (!btnAbrir) return;

        if (!document.getElementById('modalLogin')) {
            document.body.insertAdjacentHTML('beforeend', `
                <div id="modalLogin" class="modal-overlay">
                    <div class="modal-content modal-formulario">
                        <button id="cerrarModalLogin" class="btn-cerrar-modal"><i class="fa-solid fa-xmark"></i></button>

                        <div id="loginVistaOpciones">
                            <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                                <i class="fa-solid fa-circle-user" style="font-size:1.8rem; color:#144D6C;"></i>
                                <h2 style="color:#144D6C; margin:0;">Iniciar sesión</h2>
                            </div>
                            <p style="color:#555; margin-bottom:20px;">Ingresa a tu cuenta para una mejor experiencia</p>

                            <div class="login-opciones">
                                <button type="button" class="btn-login-opcion" data-proveedor="Facebook"><i class="fa-brands fa-facebook" style="color:#1877F2;"></i> Ingresa con Facebook</button>
                                <button type="button" class="btn-login-opcion" data-proveedor="Google"><i class="fa-brands fa-google" style="color:#EA4335;"></i> Ingresa con Google</button>
                                <button type="button" class="btn-login-opcion" data-proveedor="Apple"><i class="fa-brands fa-apple" style="color:#000;"></i> Ingresa con Apple</button>
                                <button type="button" class="btn-login-opcion btn-login-correo" data-proveedor="Correo"><i class="fa-solid fa-envelope"></i> Ingresa con correo electrónico</button>
                            </div>

                            <div class="login-enlaces" style="text-align:center; margin-top:20px;">
                                <a href="#" id="linkOlvideContrasena" style="font-size:0.9rem;">¿Olvidaste tu contraseña?</a>
                                <p style="margin-top:12px; font-size:0.9rem; color:#555;">¿Aún no tienes cuenta? <a href="#" id="linkRegistrate">Regístrate</a></p>
                            </div>
                        </div>

                        <div id="loginVistaFormulario" style="display:none;">
                            <h2 id="loginFormTitulo" style="color:#144D6C; text-align:left;"><i class="fa-solid fa-user-lock" style="color:#20A477;"></i> Ingresa tus datos</h2>
                            <p style="text-align:left; color:#555; margin-bottom:20px;" id="loginFormSubtitulo">Completa tus datos para continuar.</p>
                            <form id="formLogin">
                                <div class="grupo-input-generico">
                                    <label for="logNombre">Nombre Completo</label>
                                    <input type="text" id="logNombre" name="nombre" placeholder="Ej. Juan Pérez" required>
                                </div>
                                <div class="grupo-input-generico">
                                    <label for="logDni">Documento de Identidad</label>
                                    <input type="text" id="logDni" name="dni" placeholder="Ej. 74589632" required>
                                </div>
                                <div class="grupo-input-generico">
                                    <label for="logCorreo">Correo Electrónico</label>
                                    <input type="email" id="logCorreo" name="correo" placeholder="juan.perez@correo.com" required>
                                </div>
                                <div class="grupo-input-generico">
                                    <label for="logContrasena">Contraseña</label>
                                    <input type="password" id="logContrasena" name="contrasena" placeholder="••••••••" required minlength="6">
                                </div>
                                <div class="grupo-input-generico">
                                    <label for="logTelefono">Número de Celular</label>
                                    <input type="tel" id="logTelefono" name="telefono" placeholder="Ej. 999 999 999" required>
                                </div>
                                <div class="grupo-input-generico">
                                    <label for="logDireccion">Dirección</label>
                                    <input type="text" id="logDireccion" name="direccion" placeholder="Av. Larco 123, Trujillo" required>
                                </div>
                                <button type="submit" class="btn-novaclub" style="width:100%; margin-top:10px;">Ingresar</button>
                            </form>
                            <p style="text-align:center; margin-top:15px;">
                                <a href="#" id="linkVolverOpciones" style="color:#144D6C; font-size:0.85rem;"><i class="fa-solid fa-arrow-left"></i> Volver</a>
                            </p>
                        </div>

                        <div id="loginVistaRecuperar" style="display:none; text-align:left;">
                            <h2 style="color:#144D6C;"><i class="fa-solid fa-key" style="color:#F2C278;"></i> Recuperar contraseña</h2>
                            <p style="color:#555; margin-bottom:20px;">Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña.</p>
                            <form id="formRecuperar">
                                <div class="grupo-input-generico">
                                    <label for="recCorreo">Correo Electrónico</label>
                                    <input type="email" id="recCorreo" placeholder="juan.perez@correo.com" required>
                                </div>
                                <button type="submit" class="btn-novaclub" style="width:100%;">Enviar enlace</button>
                            </form>
                            <p style="text-align:center; margin-top:15px;">
                                <a href="#" id="linkVolverOpciones2" style="color:#144D6C; font-size:0.85rem;"><i class="fa-solid fa-arrow-left"></i> Volver</a>
                            </p>
                        </div>

                        <div id="loginVistaExito" style="display:none; text-align:center; padding: 10px 0;">
                            <i class="fa-solid fa-circle-check" style="font-size: 3.5rem; color: #20A477; margin-bottom: 15px;"></i>
                            <h2 style="color: #144D6C;" id="loginExitoTitulo">¡Bienvenido a FarmaNova!</h2>
                            <p style="color:#555;" id="loginExitoTexto">Iniciaste sesión correctamente.</p>
                        </div>
                    </div>
                </div>
            `);
        }

        const modal = document.getElementById('modalLogin');
        const vistaOpciones = document.getElementById('loginVistaOpciones');
        const vistaFormulario = document.getElementById('loginVistaFormulario');
        const vistaRecuperar = document.getElementById('loginVistaRecuperar');
        const vistaExito = document.getElementById('loginVistaExito');
        const formTitulo = document.getElementById('loginFormTitulo');
        const formSubtitulo = document.getElementById('loginFormSubtitulo');
        const form = document.getElementById('formLogin');
        const formRecuperar = document.getElementById('formRecuperar');

        const mostrarVista = (vista) => {
            [vistaOpciones, vistaFormulario, vistaRecuperar, vistaExito].forEach(v => { if (v) v.style.display = 'none'; });
            if (vista) vista.style.display = vista === vistaOpciones ? 'block' : 'block';
        };

        // Si ya había una sesión guardada de una visita anterior, lo reflejamos en el menú
        this.pintarUsuarioEnNav(this.obtenerUsuario());

        btnAbrir.addEventListener('click', (e) => {
            e.preventDefault();
            const actual = this.obtenerUsuario();
            if (actual) {
                if (confirm(`¿Cerrar sesión de ${actual.nombre}?`)) {
                    localStorage.removeItem('usuarioFarmaNova');
                    this.pintarUsuarioEnNav(null);
                }
                return;
            }
            if (form) form.reset();
            mostrarVista(vistaOpciones);
            modal.style.display = 'flex';
        });

        const btnCerrar = document.getElementById('cerrarModalLogin');
        if (btnCerrar) btnCerrar.addEventListener('click', () => modal.style.display = 'none');

        document.querySelectorAll('.btn-login-opcion').forEach(btn => {
            btn.addEventListener('click', () => {
                const proveedor = btn.dataset.proveedor;
                form.dataset.modo = 'login';
                formTitulo.innerHTML = `<i class="fa-solid fa-user-lock" style="color:#20A477;"></i> ${proveedor === 'Correo' ? 'Ingresa tus datos' : 'Continuar con ' + proveedor}`;
                formSubtitulo.textContent = 'Completa tus datos para continuar (los mismos que en NovaClub).';
                mostrarVista(vistaFormulario);
            });
        });

        const linkRegistrate = document.getElementById('linkRegistrate');
        if (linkRegistrate) linkRegistrate.addEventListener('click', (e) => {
            e.preventDefault();
            form.dataset.modo = 'registro';
            formTitulo.innerHTML = `<i class="fa-solid fa-user-plus" style="color:#20A477;"></i> Crear cuenta`;
            formSubtitulo.textContent = 'Regístrate con los mismos datos que usamos en NovaClub.';
            mostrarVista(vistaFormulario);
        });

        const linkOlvide = document.getElementById('linkOlvideContrasena');
        if (linkOlvide) linkOlvide.addEventListener('click', (e) => { e.preventDefault(); mostrarVista(vistaRecuperar); });

        const linkVolver1 = document.getElementById('linkVolverOpciones');
        if (linkVolver1) linkVolver1.addEventListener('click', (e) => { e.preventDefault(); mostrarVista(vistaOpciones); });

        const linkVolver2 = document.getElementById('linkVolverOpciones2');
        if (linkVolver2) linkVolver2.addEventListener('click', (e) => { e.preventDefault(); mostrarVista(vistaOpciones); });

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const nombre = document.getElementById('logNombre').value.trim();
                const correo = document.getElementById('logCorreo').value.trim();
                const esRegistro = form.dataset.modo === 'registro';

                localStorage.setItem('usuarioFarmaNova', JSON.stringify({ nombre, correo }));

                document.getElementById('loginExitoTitulo').textContent = esRegistro ? '¡Cuenta creada!' : `¡Bienvenido, ${nombre.split(' ')[0] || ''}!`;
                document.getElementById('loginExitoTexto').textContent = esRegistro
                    ? 'Tu cuenta se creó con éxito. Ya iniciaste sesión.'
                    : 'Iniciaste sesión correctamente.';

                mostrarVista(vistaExito);
                this.pintarUsuarioEnNav({ nombre, correo });
                form.reset();
                setTimeout(() => { modal.style.display = 'none'; }, 1800);
            });
        }

        if (formRecuperar) {
            formRecuperar.addEventListener('submit', (e) => {
                e.preventDefault();
                document.getElementById('loginExitoTitulo').textContent = 'Revisa tu correo';
                document.getElementById('loginExitoTexto').textContent = 'Si el correo existe en nuestro sistema, te enviamos un enlace para restablecer tu contraseña.';
                mostrarVista(vistaExito);
                formRecuperar.reset();
                setTimeout(() => { modal.style.display = 'none'; }, 2200);
            });
        }
    }

    // Lee la sesión guardada (si el usuario ya inició sesión antes en este navegador)
    obtenerUsuario() {
        try {
            return JSON.parse(localStorage.getItem('usuarioFarmaNova'));
        } catch (e) {
            return null;
        }
    }

    // Refleja el estado de sesión en el enlace "Iniciar sesión" del menú
    pintarUsuarioEnNav(usuario) {
        const btnAbrir = document.getElementById('abrirLogin');
        const texto = document.getElementById('textoLogin');
        if (!btnAbrir || !texto) return;
        const icono = btnAbrir.querySelector('i');
        if (usuario && usuario.nombre) {
            texto.textContent = `Hola, ${usuario.nombre.split(' ')[0]}`;
            if (icono) icono.className = 'fa-solid fa-circle-user';
        } else {
            texto.textContent = 'Iniciar sesión';
            if (icono) icono.className = 'fa-solid fa-right-to-bracket';
        }
    }

    // Evita inyección accidental de HTML si en el futuro los nombres vinieran de una API/BD
    escapar(texto) {
        const div = document.createElement('div');
        div.textContent = texto;
        return div.innerHTML;
    }

    // Imagen de respaldo en SVG (sin depender de un servicio externo) para
    // cuando la foto del producto no carga. Antes, una imagen rota colapsaba
    // el ancho de la tarjeta y por eso unas se veían más grandes que otras.
    IMG_RESPALDO = "data:image/svg+xml;utf8," + encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200'>
            <rect width='100%' height='100%' fill='#e8f4f1'/>
            <text x='50%' y='50%' font-family='sans-serif' font-size='20' text-anchor='middle' fill='#144D6C' dy='.3em'>FarmaNova</text>
        </svg>`
    );

    generarCardHTML(p) {
        const nombreSeguro = this.escapar(p.nombre);
        const prefix = window.location.pathname.replace(/\\/g, '/').includes('/pages/') ? '' : 'pages/';
        return `
        <div class="card-producto">
            <a href="${prefix}producto.html?id=${encodeURIComponent(p.id)}" class="card-producto-link" aria-label="Ver detalle de ${nombreSeguro}">
                <div class="card-producto-imgwrap">
                    ${p.promo ? `<span class="card-producto-promo">${this.escapar(p.promo)}</span>` : ''}
                    <img src="${this.tienda.resolverRutaImagen(p.img)}" alt="${nombreSeguro}" loading="lazy" onerror="this.onerror=null; this.src='${this.IMG_RESPALDO}';">
                </div>
                <h4 class="card-producto-nombre">${nombreSeguro}</h4>
                <p class="card-producto-precio">S/ ${p.precio.toFixed(2)}</p>
            </a>
            <button class="card-producto-btn" onclick="window.appUI.agregarAlCarrito('${p.id}')">Agregar <i class="fa-solid fa-cart-plus"></i></button>
        </div>`;
    }

    renderizarPaginaInicio() {
        const ofertas = this.tienda.stock.filter(p => p.promo).slice(0, 4);
        const derma = this.tienda.obtenerPorCategoria('cuidado').slice(0, 4);
        const boti = this.tienda.obtenerPorCategoria('bienestar').slice(0, 4);

        document.getElementById('ofertas-preview').innerHTML = ofertas.map(p => this.generarCardHTML(p)).join('');
        document.getElementById('derma-preview').innerHTML = derma.map(p => this.generarCardHTML(p)).join('');
        document.getElementById('botiquin-preview').innerHTML = boti.map(p => this.generarCardHTML(p)).join('');
    }

    // NUEVO: el catálogo ahora vive en 3 secciones físicamente separadas
    // (#seccion-meds, #seccion-cuidado, #seccion-bienestar), cada una con su
    // propio grid. Esto deja 100% claro, a simple vista, que Medicamentos,
    // Cuidado Personal y Bienestar son grupos distintos — que era justamente
    // lo que no se veía con un único grid mezclado.
    CATEGORIAS_CATALOGO = [
        { cat: 'meds', seccionId: 'seccion-meds', gridId: 'grid-meds' },
        { cat: 'cuidado', seccionId: 'seccion-cuidado', gridId: 'grid-cuidado' },
        { cat: 'bienestar', seccionId: 'seccion-bienestar', gridId: 'grid-bienestar' }
    ];

    renderizarCatalogoCompleto(textoBusqueda) {
        const q = (textoBusqueda || '').toLowerCase().trim();
        let totalVisible = 0;

        this.CATEGORIAS_CATALOGO.forEach(({ cat, seccionId, gridId }) => {
            const seccionEl = document.getElementById(seccionId);
            const grid = document.getElementById(gridId);
            if (!seccionEl || !grid) return;

            // Respeta el filtro de categoría activo: si el filtro es "todos"
            // se muestran las 3 secciones; si es una categoría específica,
            // solo esa sección queda visible.
            const categoriaPermitida = this.filtroActual === 'todos' || this.filtroActual === cat;
            if (!categoriaPermitida) {
                seccionEl.style.display = 'none';
                return;
            }

            let productos = this.tienda.obtenerPorCategoria(cat);
            if (q) productos = productos.filter(p => p.nombre.toLowerCase().includes(q));

            grid.innerHTML = productos.map(p => this.generarCardHTML(p)).join('');
            seccionEl.style.display = productos.length ? '' : 'none';
            totalVisible += productos.length;
        });

        const sinResultados = document.getElementById('sinResultadosCatalogo');
        if (sinResultados) sinResultados.style.display = totalVisible ? 'none' : 'block';
    }

    // Antes: catalogo.html llamaba a "app.filtrar(...)", pero nunca existió
    // ni la variable global "app" ni el método "filtrar". Ahora sí existe,
    // separa realmente por categoría y marca visualmente el botón activo.
    filtrar(categoria) {
        this.filtroActual = categoria;

        document.querySelectorAll('.btn-filtro[data-filtro]').forEach(btn => {
            btn.classList.toggle('activo', btn.dataset.filtro === categoria);
        });

        const buscador = document.getElementById('inputBuscador');
        this.renderizarCatalogoCompleto(buscador ? buscador.value : '');
    }

    // Antes: al escribir en el buscador se llamaba a una función que
    // apuntaba a IDs inexistentes. Ahora busca dentro del filtro activo,
    // en las 3 secciones a la vez.
    ejecutarBusqueda(texto) {
        this.renderizarCatalogoCompleto(texto);
    }

    agregarAlCarrito(id, cantidad = 1) {
        this.carrito.add(id, this.tienda.stock, cantidad);
    }

    actualizarCarritoUI() {
        if (!this.dom.box) return; // por si alguna página no tiene el panel de carrito

        if (!this.carrito.items.length) {
            this.dom.box.innerHTML = '<p style="padding: 20px; text-align: center; color: #7f8c8d; font-style: italic;">Carrito vacío.</p>';
            this.dom.cont.textContent = '0';
            this.dom.total.textContent = 'S/ 0.00';
            if (this.dom.btnPagar) { this.dom.btnPagar.classList.add('disabled'); this.dom.btnPagar.style.pointerEvents = 'none'; }
            return;
        }

        if (this.dom.btnPagar) { this.dom.btnPagar.classList.remove('disabled'); this.dom.btnPagar.style.pointerEvents = 'auto'; }

        this.dom.box.innerHTML = this.carrito.items.map(x => `
        <div style="border-bottom: 1px solid #e2e8f0; padding: 15px 0; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h4 style="margin: 0; font-size: 0.9rem; color: #004b79;">${this.escapar(x.nombre)}</h4>
                <p style="margin: 5px 0 0 0; color: #20A477; font-weight:600;">S/ ${x.precio.toFixed(2)}</p>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
                <button onclick="window.appUI.modificarCantidad('${x.id}', -1)" style="width:25px; height:25px; border-radius:50%; border:none; background:#f1f2f6; cursor:pointer;">-</button>
                <span style="font-weight:600; font-size:0.9rem;">${x.cantidad}</span>
                <button onclick="window.appUI.modificarCantidad('${x.id}', 1)" style="width:25px; height:25px; border-radius:50%; border:none; background:#f1f2f6; cursor:pointer;">+</button>
                <button onclick="window.appUI.eliminarDelCarrito('${x.id}')" style="background: #ffebeb; color: #e74c3c; border: none; border-radius: 4px; padding: 5px 10px; cursor: pointer; margin-left:5px;"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`).join('');

        this.dom.cont.textContent = this.carrito.cantidadTotal;
        this.dom.total.textContent = `S/ ${this.carrito.total.toFixed(2)}`;
    }

    modificarCantidad(id, cant) { this.carrito.modificar(id, cant); }
    eliminarDelCarrito(id) { this.carrito.eliminar(id); }
}

// ==========================================
// 4. INSTANCIACIÓN DE LA APP (SINGLETON GLOBAL)
// ==========================================
const appTienda = new Tienda();
const appCarrito = new Carrito();
window.appUI = new UI(appTienda, appCarrito);

// Arranca cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', () => window.appUI.init());
