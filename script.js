document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const currentDay = today.getDate();
    const currentWeekDay = today.getDay();

    const currentDayElement = document.getElementById('current-day');
    if (currentDayElement) {
        currentDayElement.textContent = currentDay;
    }

    const daySelect = document.getElementById('day-select');
    if (daySelect) {
        for (let i = 1; i <= 31; i++) {
            if (!daySelect.querySelector(`option[value="${i}"]`)) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = i;
                daySelect.appendChild(option);
            }
        }
    }

    const quotesDatabase = {
        money: {
            
                1: "El dinero fluye hacia quienes lo gestionan con sabiduría. ¿Qué decisión financiera inteligente tomarás hoy?",
                2: "Cada euro ahorrado es un soldado en tu ejército financiero. ¿A dónde enviarás tus tropas hoy?",
                3: "La riqueza se construye diariamente. ¿Qué hábito de millonario practicarás hoy?",
                4: "Tu mente es tu mejor herramienta para generar riqueza. ¿Qué idea lucrativa has estado posponiendo?",
                5: "El miedo paraliza, la acción prospera. ¿Qué paso darás hoy para mejorar tus finanzas?",
                6: "Los ingresos extras son el oxígeno de tu libertad financiera. ¿Qué fuente adicional crearás?",
                7: "El conocimiento financiero es tu superpoder. ¿Qué concepto monetario aprenderás hoy?",
                8: "Las oportunidades disfrazadas están en todas partes. ¿Qué negocio o inversión reconocerás hoy?",
                9: "Tu tiempo vale más que el dinero. ¿Qué actividad bien remunerada priorizarás?",
                10: "La consistencia vence a la intensidad. ¿Qué pequeña acción financiera repetirás hoy?",
                11: "Los ricos invierten primero en sí mismos. ¿En qué formación o herramienta invertirás?",
                12: "El valor que creas determina tu riqueza. ¿Qué habilidad rentable mejorarás hoy?",
                13: "Las deudas son cadenas, los activos son alas. ¿Qué deuda reducirás o qué activo adquirirás?",
                14: "Tu red de contactos es tu red de seguridad financiera. ¿A qué persona valiosa conectarás hoy?",
                15: "El dinero ama la velocidad. ¿Qué trámite financiero acelerarás hoy?",
                16: "Los gastos inconscientes erosionan tu futuro. ¿Qué compra innecesaria evitarás?",
                17: "La libertad financiera comienza con un presupuesto claro. ¿Qué número financiero revisarás hoy?",
                18: "Los millonarios piensan en escalar. ¿Qué sistema o proceso automatizarás hoy?",
                19: "Tu actitud atrae prosperidad. ¿Qué pensamiento limitante sobre dinero soltarás hoy?",
                20: "El valor agregado genera ingresos pasivos. ¿Qué producto o servicio crearás?",
                21: "El riesgo calculado es el camino. ¿Qué oportunidad financiera evaluarás hoy?",
                22: "Los ingresos residuales construyen libertad. ¿Qué fuente de ingresos pasivos iniciarás?",
                23: "El dinero sigue a la excelencia. ¿En qué área profesional te volverás indispensable?",
                24: "Las metas financieras necesitan plazos. ¿Qué objetivo monetario establecerás hoy?",
                25: "La riqueza es un juego mental. ¿Qué creencia empoderante adoptarás sobre el dinero?",
                26: "Los pequeños márgenes generan grandes fortunas. ¿Qué gasto reducirás o ingreso aumentarás?",
                27: "El mercado paga por resolver problemas. ¿Qué necesidad lucrativa identificarás hoy?",
                28: "La abundancia comienza con gratitud. ¿Por qué aspecto financiero estarás agradecido hoy?",
                29: "El cashflow es el rey. ¿Qué flujo de ingresos fortalecerás este mes?",
                30: "Tu futuro financiero se decide hoy. ¿Qué acción con impacto a largo plazo tomarás?",
                31: "La disciplina financiera hoy crea libertad mañana. ¿Qué compromiso monetario renovarás?"
            
        },
        daily: {
            1: "¿Qué energía, espacio, conciencia y elección puedo ser para recibir más dinero de lo que jamás imaginé, con total facilidad?",
            2: "¿Qué tomaría para que el dinero me busque a mí como yo busco el café en las mañanas?",
            3: "Si no tuviera ningún punto de vista sobre el dinero, ¿cuánto podría recibir hoy?",
            4: "¿Y si el dinero fuera mi amante, cómo le estaría tratando?",
            5: "¿Qué está creando escasez en mi vida que podría soltar ahora mismo?",
            6: "¿Qué es el dinero para mí... y de quién aprendí eso?",
            7: "¿Qué juicios estoy usando para limitar el dinero que puedo elegir?",
            8: "¿Qué me impide reconocer que ya soy una energía de riqueza?",
            9: "¿Cuánto más dinero podría tener si me atreviera a disfrutar sin culpa?",
            10: "¿Qué posibilidades infinitas con el dinero están disponibles hoy que aún no he reconocido?",
            11: "¿Qué debo dejar de controlar para que el dinero fluya con más gozo?",
            12: "¿Estoy dispuesta a recibir dinero de formas inesperadas y sin esfuerzo?",
            13: "¿Qué estoy evitando o defendiendo que me impide ser millonaria?",
            14: "¿Qué más es posible con el dinero que nunca nadie me enseñó?",
            15: "¿Qué pasaría si dejara de rechazar ser rica?",
            16: "¿Y si el dinero no fuera un problema… qué elegiría hoy?",
            17: "¿Qué estoy copiando de mi familia sobre el dinero que ya no me sirve?",
            18: "¿Qué tomaría para que el dinero se muestre hoy con facilidad, alegría y gloria?",
            19: "¿Qué nivel de gratitud y gozo puedo ser hoy para duplicar mis ingresos?",
            20: "¿Cuánto dinero estoy dispuesto(a) a tener sin perder mi esencia?",
            21: "¿Qué conciencia del dinero estoy listo(a) para recibir hoy?",
            22: "¿Qué energía puedo ser para atraer clientes que me paguen con gozo?",
            23: "¿Qué más puedo vender, crear o elegir que sea una contribución financiera para mí y para el mundo?",
            24: "¿Qué estoy haciendo más difícil de lo que realmente es con el dinero?",
            25: "¿Qué parte de mi magia estoy ignorando que crearía más dinero de inmediato?",
            26: "¿Qué me impide ser el imán que realmente soy para el dinero?",
            27: "¿Qué tomaría para elegir más dinero sin tener que justificarlo?",
            28: "¿Y si el dinero no fuera serio ni pesado, cómo sería?",
            29: "¿Qué riqueza energética está disponible para mí ahora mismo?",
            30: "¿Qué puedo ser o hacer hoy que cree más dinero ahora y para toda la eternidad?",
            31: "stay hard"
        },
        love: {
            1: "El amor no se mide por cuánto tiempo esperas, sino por cuánto estás dispuesto a crecer junto a alguien.",
            2: "Amar es encontrar en la felicidad de otro tu propia felicidad.",
            3: "El verdadero amor no es encontrar a alguien perfecto, sino ver perfectamente a alguien imperfecto.",
            4: "En el amor, las pequeñas cosas son las grandes cosas.",
            5: "El amor no necesita ser perfecto, solo necesita ser verdadero.",
            6: "Amar no es mirarse el uno al otro, sino mirar juntos en la misma dirección.",
            7: "El amor es cuando alguien puede traer paz a tu caos sin apagarlo.",
            8: "El mejor amor es aquel que despierta el alma y nos hace aspirar a más.",
            9: "El amor no es posesión, es apreciación. No es control, es libertad.",
            10: "Cuando el amor es real, no hay necesidad de explicaciones ni excusas.",
            11: "El amor maduro es cuando la comodidad silenciosa es más valiosa que las palabras bonitas.",
            12: "Amar es elegir todos los días construir puentes donde podrían levantarse muros.",
            13: "El amor verdadero no te cambia, te revela la mejor versión de ti mismo.",
            14: "El secreto del amor no está en encontrar a la persona perfecta, sino en amar perfectamente a una persona real.",
            15: "El amor no es cuántas veces te dicen 'te amo', sino cuántas lo demuestran cuando no lo dicen.",
            16: "El amor más fuerte no es el que grita, sino el que susurra en los momentos más silenciosos.",
            17: "Amar es cuando tu felicidad no depende de la otra persona, pero es más completa con ella.",
            18: "El amor no es encontrar a alguien con quien vivir, sino encontrar a alguien sin quien no puedes vivir.",
            19: "El verdadero amor no tiene final feliz, porque nunca termina.",
            20: "El amor es paciente cuando se trata de esperar, pero nunca cuando se trata de demostrarse.",
            21: "Amar es reconocer que incluso en los días grises, el otro sigue siendo tu sol.",
            22: "El amor no es cuestión de tiempo, sino de conexión. Puedes conocer a alguien toda la vida y no amarlo, o amarlo desde el primer instante.",
            23: "El amor verdadero no te completa, te complementa. No llena vacíos, expande horizontes.",
            24: "El mejor amor es aquel que te hace una mejor persona sin cambiarte en alguien distinto.",
            25: "Amar es cuando el hogar no es un lugar, sino una persona.",
            26: "El amor no es cuánto estás dispuesto a recibir, sino cuánto das sin llevar la cuenta.",
            27: "El amor más puro es aquel que da sin pedir, que escucha sin juzgar y que permanece sin condiciones.",
            28: "Amar es encontrar belleza incluso en lo que otros considerarían imperfecto.",
            29: "El verdadero amor no es romántico, es real. No es perfecto, es perseverante.",
            30: "El amor no es encontrar a alguien que te haga feliz, sino alguien con quien quieras construir felicidad.",
            31: "El amor no se trata de cuánto tiempo llevas juntos, sino de cuánto valoras cada momento compartido."
        },
        motivation: {
            1: "El éxito no es final, el fracaso no es fatal: lo que cuenta es el coraje para continuar.",
            2: "No esperes el momento perfecto. Toma el momento y hazlo perfecto.",
            3: "Tu única limitación es la que estableces en tu mente.",
            4: "Si te caes 7 veces, levántate 8. La resistencia construye carácter.",
            5: "El dolor que sientes hoy será la fuerza que sentirás mañana.",
            6: "No cuentes los días, haz que los días cuenten.",
            7: "La disciplina es el puente entre tus metas y tus logros.",
            8: "Si no puedes volar, corre; si no puedes correr, camina; si no puedes caminar, arrástrate. Pero nunca dejes de avanzar.",
            9: "El miedo es solo una ilusión. La acción es la cura.",
            10: "Los ganantes son perdedores que nunca se rindieron.",
            11: "Tu futuro es creado por lo que haces hoy, no mañana.",
            12: "La grandeza nace de pequeños comienzos repetidos cada día.",
            13: "No eres producto de tus circunstancias, eres producto de tus decisiones.",
            14: "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
            15: "Si no estás dispuesto a arriesgar, estás listo para fracasar.",
            16: "La mente que se abre a una nueva idea jamás volverá a su tamaño original.",
            17: "El fracaso es simplemente la oportunidad de comenzar de nuevo, esta vez con más inteligencia.",
            18: "La diferencia entre lo imposible y lo posible está en tu determinación.",
            19: "No busques la hora perfecta, usa la hora que tienes y hazla perfecta.",
            20: "La excelencia no es un acto, es un hábito.",
            21: "Tu potencial es como un amanecer. ¿Hasta qué altura dejarás que se eleve?",
            22: "Los obstáculos son esas cosas espantosas que ves cuando apartas los ojos de tu meta.",
            23: "La pasión es el motor, la consistencia es el combustible.",
            24: "Hoy es el día para construir el 'tú' que serás mañana.",
            25: "La vida no es esperar a que pase la tormenta, es aprender a bailar bajo la lluvia.",
            26: "Si no puedes hacer grandes cosas, haz pequeñas cosas de manera grandiosa.",
            27: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
            28: "Tu actitud, no tu aptitud, determina tu altitud.",
            29: "El momento en que estás listo para rendirte es cuando la magia sucede.",
            30: "No midas tu progreso comparándote con otros. Mídelo por cómo superas tus propios límites.",
            31: "El único día fácil fue ayer. Hoy es otra oportunidad para ser más fuerte."
        },
        wisdom: {
            1: "Conócete a ti mismo, y conocerás los secretos de los dioses y del universo. — Inscripción en el Oráculo de Delfos (Grecia antigua)",
            2: "La vida es como un eco: todo lo que envías al universo, te regresa; todo lo que siembras, cosecharás. — Proverbio universal de sabiduría popular",
            3: "El verdadero sabio no dice todo lo que piensa, pero siempre piensa cuidadosamente todo lo que decide decir. — Aristóteles (filósofo griego)",
            4: "Quien es capaz de dominar su ira, ha vencido a su peor enemigo. — Confucio (filósofo chino, Analectas)",
            5: "El árbol más majestuoso nace de una semilla diminuta; el viaje más largo comienza con un simple paso. — Lao Tse (Tao Te Ching, capítulo 64)",
            6: "Nunca juzgues a otro hasta que hayas caminado dos lunas con sus mocasines puestos. — Proverbio de la tribu Sioux (Nativos Americanos)",
            7: "El silencio es el santuario donde mora la prudencia, y el escudo impenetrable contra la necedad. — Ibn Gabirol (poeta y filósofo judío español)",
            8: "La verdadera riqueza no se mide por lo que posees, sino por aquello que eres capaz de dejar atrás sin sufrir. — Epicteto (estoico griego, Enquiridión)",
            9: "La paciencia es como una raíz amarga que nadie quiere probar, pero cuyo fruto es el más dulce de todos. — Jean-Jacques Rousseau (filósofo suizo)",
            10: "Cuando señalas los errores de otros con un dedo, recuerda que tres dedos de esa misma mano te señalan a ti mismo. — Proverbio védico (India antigua)",
            11: "El conocimiento puede darte poder, pero solo la sabiduría te dará verdadera libertad. — Jimi Hendrix (músico y poeta moderno)",
            12: "Ningún hombre puede bañarse dos veces en las mismas aguas de un río, porque ni el hombre ni el río serán los mismos. — Heráclito de Éfeso (filósofo presocrático)",
            13: "Aquellos que verdaderamente saben, no necesitan hablar; aquellos que hablan sin cesar, usualmente no saben. — Lao Tse (Tao Te Ching, capítulo 56)",
            14: "Una verdad descubierta en el debate entre amigos vale más que mil consensos entre necios. — Bertrand Russell (filósofo y matemático británico)",
            15: "El necio corre tras los placeres como si fueran mariposas, y solo atrapa polvo; el sabio cultiva su jardín y atrae belleza. — Adaptación de proverbios budistas",
            16: "Vive cada día como si fuera tu último, pero aprende como si fueras a vivir para siempre. — Mahatma Gandhi (líder espiritual indio)",
            17: "La paz interior no es la ausencia de tormentas, sino la capacidad de bailar bajo la lluvia de la vida. — Pema Chödrön (monja budista moderna)",
            18: "Las aguas más profundas son las que fluyen con más silencio; las mentes más sabias son las que hablan con más mesura. — William Shakespeare (Julio César, Acto I)",
            19: "Conocer a los demás es demostrar inteligencia; conocerse profundamente a sí mismo es revelar verdadera sabiduría. — Lao Tse (Tao Te Ching, capítulo 33)",
            20: "No es el peso de la carga lo que nos derrumba, sino la forma en que decidimos llevarla. — Proverbio del Talmud judío",
            21: "Un sabio puede sentarse sobre un hormiguero por curiosidad, pero solo un necio permanece allí cuando las hormigas comienzan a picar. — Proverbio Yoruba (África Occidental)",
            22: "El ayer es historia escrita, el mañana es un misterio por descifrar, pero el hoy... el hoy es un regalo. Por eso se llama 'presente'. — Rosalynn Carter (popularizado en Kung Fu Panda)",
            23: "Solo hay una cosa que sé con certeza: que no sé nada. Y este conocimiento ya me hace más sabio que quienes creen saberlo todo. — Sócrates (según Platón en 'Apología')",
            24: "El corazón humano tiene razones que la fría razón jamás podrá comprender. — Blaise Pascal (filósofo francés, Pensées)",
            25: "No busques el camino en mapas ajenos; la verdadera senda está grabada en tu propio corazón. — Buda (Siddhartha Gautama, Dhammapada)",
            26: "No mires afuera buscando respuestas; todas las verdades esenciales ya habitan dentro de ti. — Proverbio de los místicos sufíes",
            27: "Incluso la montaña más imponente del mundo comenzó siendo una simple piedra en el valle. — Proverbio chino de la dinastía Tang",
            28: "Para el barco que no sabe a qué puerto dirigirse, ningún viento le será favorable. — Séneca (filósofo estoico romano, Cartas a Lucilio)",
            29: "Una palabra amable es como un árbol de dátiles: dulce al paladar, fuerte en sus raíces, y generoso en su sombra. — Proverbio beduino del desierto arábigo",
            30: "Mientras los necios construyen muros para separarse, los sabios tejen puentes para unir. — Proverbio escocés de las Tierras Altas",
            31: "La cumbre de la sabiduría humana es reconocer humildemente nuestra propia ignorancia. — Sócrates (según Platón en 'Fedón')"
        }
    };

    const wellnessTips = {
        0: "Domingo: Dedica tiempo a meditar y reflexionar. Es un buen día para planificar la semana con calma.",
        1: "Lunes: Empieza la semana con un desayuno nutritivo y 10 minutos de estiramientos para activar tu cuerpo.",
        2: "Martes: Hidrátate bien hoy. Prueba infusiones o agua con limón para mantener tu energía.",
        3: "Miércoles: Tómate pausas activas cada hora si trabajas sentado/a. Camina un poco y estira las piernas.",
        4: "Jueves: Practica la gratitud hoy. Escribe 3 cosas por las que estés agradecido/a.",
        5: "Viernes: Socializa o conecta con seres queridos. Las relaciones positivas nutren la mente y el alma.",
        6: "Sábado: Movimiento alegre! Baila, camina en la naturaleza o haz algo que disfrutes para activar tu cuerpo."
    };

    const quoteElement = document.getElementById('daily-quote');
    const wellnessElement = document.getElementById('wellness-advice');
    const menuOptions = document.querySelectorAll('.menu-option');


    function updateContent(day, category) {
        if (!category) {
            category = localStorage.getItem('selectedCategory') || 'daily';
        }
        if (quoteElement) {
            const quotes = quotesDatabase[category] || quotesDatabase.daily;
            quoteElement.textContent = quotes[day] || "Hoy es un lienzo en blanco. ¡Píntalo con tus mejores colores!";
        }
        
        if (wellnessElement) {
            wellnessElement.textContent = wellnessTips[currentWeekDay] || "Hoy es un buen día para escuchar a tu cuerpo y darle lo que necesita.";
        }
        
        const dateCircle = document.querySelector('.date-circle');
        if (dateCircle) {
            const gradients = [
                'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
                'linear-gradient(45deg, #a1c4fd 0%, #c2e9fb 100%)',
                'linear-gradient(45deg, #ffecd2 0%, #fcb69f 100%)',
                'linear-gradient(45deg, #84fab0 0%, #8fd3f4 100%)',
                'linear-gradient(45deg, #a6c1ee 0%, #fbc2eb 100%)',
                'linear-gradient(45deg, #fdcbf1 0%, #e6dee9 100%)'
            ];
            dateCircle.style.background = gradients[day % gradients.length];
        }
    }


    if (daySelect) {
        daySelect.addEventListener('change', function() {
            const selectedDay = this.value === "0" ? currentDay : parseInt(this.value);
            if (currentDayElement) {
                currentDayElement.textContent = selectedDay;
            }
            updateContent(selectedDay);
        });
    }


    if (menuOptions.length > 0) {
        menuOptions.forEach(option => {
            option.addEventListener('click', function() {
                const category = this.getAttribute('data-type');

                localStorage.setItem('selectedCategory', category);

                window.location.href = 'quotes.html';
            });
        });
    }

    if (window.location.pathname.includes('quotes.html')) {
        const category = localStorage.getItem('selectedCategory') || 'money';
        updateContent(currentDay, category);
    } else if (quoteElement) {
        updateContent(currentDay);
    }

    const favoriteBtn = document.getElementById('favorite-btn');
    const showFavoritesBtn = document.getElementById('show-favorites');
    const favoritesSection = document.getElementById('favorites-section');
    const favoritesList = document.getElementById('favorites-list');

    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function() {
            if (quoteElement) {
                const currentQuote = quoteElement.textContent;
                let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                
                if (!favorites.includes(currentQuote)) {
                    favorites.push(currentQuote);
                    localStorage.setItem('favorites', JSON.stringify(favorites));
                    alert('Frase añadida a favoritos');
                } else {
                    alert('Esta frase ya está en tus favoritos');
                }
            }
        });
    }

    if (showFavoritesBtn && favoritesSection && favoritesList) {
        showFavoritesBtn.addEventListener('click', function() {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            favoritesList.innerHTML = '';
            
            if (favorites.length === 0) {
                favoritesList.innerHTML = '<p>No tienes frases favoritas aún.</p>';
            } else {
                favorites.forEach((quote, index) => {
                    const favoriteItem = document.createElement('div');
                    favoriteItem.className = 'favorite-item';
                    favoriteItem.innerHTML = `
                        <p>${quote}</p>
                        <button class="remove-favorite" data-index="${index}">
                            <i class="fas fa-times"></i>
                        </button>
                    `;
                    favoritesList.appendChild(favoriteItem);
                });
            }
            
            favoritesSection.style.display = favoritesSection.style.display === 'block' ? 'none' : 'block';
        });

        favoritesList.addEventListener('click', function(e) {
            if (e.target.closest('.remove-favorite')) {
                const index = e.target.closest('.remove-favorite').getAttribute('data-index');
                let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                favorites.splice(index, 1);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                
               
                showFavoritesBtn.click();
            }
        });
    }
});