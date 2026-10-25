document.addEventListener("DOMContentLoaded", () => {

    const cover = document.getElementById("coverButton");
    const openBook = document.getElementById("openBook");
    const prev = document.getElementById("prevPage");
    const next = document.getElementById("nextPage");
    const backToCover = document.getElementById("backToCover");
    const languageButtons = document.querySelectorAll(".language-card");

    let language ="es";

    const status = document.getElementById("pageStatus");

    const title = document.getElementById("pageTitle");
    const left = document.getElementById("pageText");
    const right = document.getElementById("pageTextRight");

    const numLeft = document.getElementById("pageNumber");
    const numRight = document.getElementById("pageNumberRight");

    // AQUÍ PEGAREMOS LA HISTORIA COMPLETA
    const chapters = [
        {
            title: "Capítulo 1: El marciano que no encajaba",

            left: `En un lugar muy lejano de la Tierra existía un planeta llamado Marcian.

A simple vista, podía parecer un planeta como cualquier otro. Tenía ciudades, viviendas, escuelas, lugares de trabajo y enormes espacios destinados al entretenimiento.

Sus habitantes seguían sus rutinas, estudiaban, trabajaban y buscaban maneras de disfrutar de su tiempo libre.

Sin embargo, entre todos ellos vivía un marciano llamado Tomás que sentía que algo le faltaba.

No era que odiara su planeta ni que estuviera descontento con su familia. Simplemente, sentía que la vida debía ofrecer algo más que repetir las mismas actividades todos los días.

Tomás era curioso, observador y soñador. Le gustaba hacerse preguntas, descubrir cosas nuevas y buscar experiencias que le permitieran ver el mundo de otra manera.

Mientras muchos habitantes de Marcian estaban conformes con su rutina, él se preguntaba si existía algo diferente esperándolo en algún lugar del universo.

A veces miraba el cielo durante horas, imaginando qué habría más allá de las estrellas.
            `,

            right: `Además de sus responsabilidades, Tomás disfrutaba practicando Lobel, un deporte que le permitía divertirse, compartir con otros y poner a prueba sus habilidades.

Aunque encontraba momentos de felicidad, seguía sintiendo que necesitaba descubrir algo que diera un nuevo sentido a su vida.

No quería pasar los años preguntándose qué habría podido hacer si se hubiera atrevido a explorar.

Quería aprender, experimentar y conocer lugares que nunca había visto.

Una noche, mientras contemplaba el cielo, observó un pequeño punto azul que llamó poderosamente su atención.

Era la Tierra.

Había escuchado hablar de aquel planeta, pero nunca se había detenido a imaginar cómo sería vivir allí.

Pensó en sus océanos, sus montañas, sus animales y sus habitantes. ¿Cómo sería un mundo tan diferente del suyo? ¿Qué podría aprender de él?

Tomás comprendió que no encontraría las respuestas si se quedaba esperando.

Tendría que actuar.

Aunque todavía no sabía cómo lograrlo, comenzó a imaginar una aventura que lo llevaría mucho más lejos de lo que jamás había pensado.

Aquella noche había comenzado el primer capítulo de una historia que cambiaría su vida para siempre.

            `
        },

        {
            title: "Capítulo 2: El primer descubrimiento",

            left: `Durante los meses siguientes, Tomás dedicó gran parte de su tiempo a investigar cómo podía viajar hasta la Tierra.

Buscó información, estudió las rutas espaciales y comenzó a diseñar una nave que pudiera llevarlo hasta aquel misterioso planeta azul.

Su proyecto parecía imposible.

Algunas personas no comprendían su idea y le decían que estaba perdiendo el tiempo.

—La Tierra está demasiado lejos —le comentó un investigador—. No tiene sentido arriesgar tanto por un lugar que ni siquiera conoces.

Otros simplemente lo ignoraban.

Pero Tomás no quería abandonar su sueño solo porque los demás no lo entendieran.

Cada error le enseñaba algo nuevo.

Un motor se sobrecalentó. Un sistema de navegación falló. Una prueba terminó con una nube de humo que cubrió todo el taller.

Tomás se frustró muchas veces. Hubo noches en las que pensó que los demás tenían razón.

Entonces volvía a pensar en la Tierra.

Y continuaba.

Una madrugada descubrió una combinación de energía y materiales que permitía mantener la nave estable durante viajes espaciales de larga distancia.

No era una solución perfecta, pero sí el avance que necesitaba.

—¡Lo conseguí! —exclamó.

            `,

            right: `Había construido una nave pequeña, plateada y de forma ovalada. Decidió llamarla Esperanza.

Para Tomás, aquel nombre representaba mucho más que un vehículo espacial. Era la posibilidad de demostrar que un sueño podía abrir caminos que antes parecían imposibles.

Antes del lanzamiento, invitó a su familia al taller.

Su madre lo abrazó con fuerza.

—Siempre has querido encontrar algo diferente —le dijo—. Solo prométeme que recordarás que ser valiente no significa dejar de tener cuidado.

—Te lo prometo —respondió Tomás.

Su padre, que rara vez expresaba sus emociones, le entregó una pequeña piedra rojiza.

—La encontré cuando era joven. Viene de las montañas donde nacimos. Llévala contigo para que recuerdes de dónde vienes.

Tomás guardó la piedra en un compartimento de su traje.

Al día siguiente, la nave estaba lista.

Cuando las compuertas se cerraron, sintió miedo. Era la primera vez que se alejaba tanto de todo lo que conocía.

Pero también sintió emoción.

Los motores comenzaron a rugir. La nave se elevó sobre la superficie de su planeta y se dirigió hacia las estrellas.

Tomás miró por la ventana cómo Marcian se hacía cada vez más pequeño.

—Espérame, Tierra —dijo—. Voy a descubrir tus secretos.

Y comenzó el viaje.

            `
        },

        {
            title: "Capítulo 3: El viaje comienza",

            left: `El espacio era más silencioso de lo que Tomás había imaginado.

Desde la ventana de la Esperanza, las estrellas parecían pequeñas luces suspendidas en una oscuridad infinita. Marcian quedó atrás, convertido en una esfera que poco a poco desapareció de su vista.

Durante los primeros días, todo marchó según lo previsto.

Tomás revisaba los instrumentos, estudiaba las imágenes de la Tierra y registraba sus observaciones en su diario de viaje.

Sin embargo, el universo también tenía sorpresas.

Una tormenta de partículas solares alteró los sistemas de navegación. Varias alarmas comenzaron a sonar al mismo tiempo y la nave perdió parte de su estabilidad.

—Vamos, Esperanza. No me falles ahora —dijo Tomás mientras intentaba recuperar el control.

Las luces del tablero parpadearon. El motor principal dejó de responder y la nave comenzó a desviarse de su trayectoria.

Por unos instantes, Tomás creyó que su aventura terminaría antes de llegar a su destino.

Recordó las palabras de su madre: ser valiente no significaba dejar de tener cuidado.

Respiró profundamente, desconectó los sistemas dañados y utilizó la energía de reserva para estabilizar la nave.

Después de varios minutos que le parecieron interminables, las alarmas se apagaron.

Tomás se dejó caer en su asiento.

—Eso estuvo demasiado cerca.

            `,

            right: `Reparó los componentes afectados y reanudó el viaje con más precaución. Aquel incidente le enseñó que el universo no iba a adaptarse a sus planes. Él tendría que aprender a adaptarse a él.

Finalmente, la Tierra apareció ante sus ojos.

Era mucho más hermosa de lo que había imaginado. Las nubes blancas se extendían sobre océanos azules, mientras grandes masas de tierra dibujaban formas sorprendentes bajo la luz del Sol.

Tomás se quedó inmóvil.

Había pasado mucho tiempo mirando aquel pequeño punto desde su planeta. Ahora lo tenía frente a él.

—Es real —susurró emocionado.

La nave comenzó el descenso. Atravesó las capas superiores de la atmósfera y sintió cómo aumentaba la vibración.

El cielo pasó de negro a azul y, por primera vez, Tomás vio el planeta que había ocupado tantos de sus pensamientos.

Buscó un lugar apartado para aterrizar.

Encontró una zona verde rodeada de árboles, cerca de unas montañas. La nave descendió lentamente hasta posarse sobre el terreno.

Los motores se apagaron.

Tomás abrió la compuerta y bajó con cautela.

El aire era diferente. Había humedad, aromas desconocidos y sonidos que no aparecían en ninguna de sus grabaciones. Escuchó el viento entre las hojas, el canto de unos pájaros y el murmullo de un arroyo cercano.

Se arrodilló y tocó la hierba.

Era suave.

Tomás sonrió con asombro.

Había viajado millones de kilómetros para descubrir que, a veces, las maravillas más grandes podían encontrarse en algo tan sencillo como una hoja movida por el viento.

Entonces escuchó una voz detrás de él.

—¿Quién eres tú?

Tomás se giró de golpe.

Una mujer lo observaba a pocos metros de distancia.

Y aquel encuentro cambiaría su destino más que cualquier descubrimiento científico.

            `
        },

        {
            title: "Capítulo 4: El planeta azul",

            left: `La mujer se llamaba Milena.

Tenía el cabello oscuro, ojos expresivos y una mirada en la que se mezclaban la sorpresa y la desconfianza. Había salido a caminar por aquella zona cuando vio descender un objeto plateado entre los árboles.

Al acercarse, descubrió algo que nunca habría imaginado encontrar.

Un ser de otro planeta.

Tomás levantó lentamente las manos para demostrar que no quería hacerle daño.

—Mi nombre es Tomás —dijo con una voz un poco temblorosa—. Vengo de Marcian.

Milena lo miró durante varios segundos.

—¿Marcian? ¿De dónde vienes exactamente?

—De un planeta lejano. He viajado hasta aquí porque quería conocer un mundo diferente.

Ella pensó que quizá estaba soñando. Sin embargo, la nave seguía allí, y aquel extraño visitante parecía tan nervioso como ella.

En lugar de salir corriendo, Milena decidió hacer preguntas.

Quería saber cómo había llegado, por qué estaba allí y si existían otros seres como él. Tomás le explicó su viaje, sus investigaciones y el deseo que había tenido desde pequeño de conocer otro mundo.

Milena escuchó con atención.

—Entonces cruzaste todo el espacio porque querías descubrir algo diferente —dijo.

—Sí. Pero ahora que estoy aquí, no sé qué hacer.

Ella sonrió.

—Podrías empezar por conocer el lugar al que tanto querías llegar.

            `,

            right: `Durante los días siguientes, Milena le mostró los alrededores. Le enseñó los árboles, los ríos y las montañas. Le explicó cómo las personas cultivaban sus alimentos, cuidaban a sus animales y dependían de la naturaleza para sobrevivir.

Tomás descubrió que la Tierra tenía una riqueza que no podía medirse únicamente con máquinas.

Había vida en todas partes.

Pero también descubrió algo más complicado: los humanos podían construir cosas maravillosas y, al mismo tiempo, destruirlas. Algunos lugares estaban llenos de contaminación; otros sufrían conflictos por los recursos y las diferencias entre las personas.

—¿Por qué se hacen daño si pueden ayudarse? —preguntó Tomás una tarde.

Milena se quedó pensando.

—A veces las personas tienen miedo de perder lo que poseen. Otras veces creen que quienes son diferentes quieren quitarles algo.

—En mi planeta pensamos que la tecnología puede resolverlo todo.

—La tecnología puede ayudar mucho —respondió ella—, pero no puede obligarnos a comprendernos.

Tomás empezó a comprender que conocer un lugar también significaba aprender de sus problemas.

Con el paso del tiempo, él y Milena se hicieron amigos. Hablaban durante horas sobre sus mundos, sus familias y sus sueños.

Tomás le enseñó imágenes de las ciudades de Marcian y le mostró cómo funcionaban sus sistemas de energía. Milena le habló de las personas que amaba, de sus recuerdos y de las pequeñas cosas que hacían especial su hogar.

Una noche, sentados junto al arroyo, observaron las estrellas.

—¿Extrañas tu planeta? —preguntó Milena.

—Extraño a mi familia. Extraño mi hogar. Pero aquí he encontrado algo que no sabía que estaba buscando.

—¿Qué cosa?

Tomás sintió que su corazón se aceleraba.

—A alguien con quien puedo ser yo mismo.

Ella sonrió y tomó su mano.

Bajo el cielo de la Tierra, dos seres de mundos distintos comprendieron que la distancia entre los planetas no era tan importante como la confianza que comenzaba a crecer entre ellos.

            `
        },

        {
            title: "Capítulo 5: El secreto de Tomás",

            left: `Tomás había encontrado en la Tierra un hogar inesperado, pero sabía que no podía quedarse allí para siempre sin enfrentar las consecuencias de su viaje.

Su nave necesitaba reparaciones, y su familia en Marcian no sabía si seguía vivo.

Una mañana, mientras revisaba los sistemas de comunicación, recibió una señal procedente de su planeta.

Era un mensaje urgente.

Los científicos habían detectado una anomalía energética cerca de la Tierra. Al no tener noticias de Tomás, algunos dirigentes sospechaban que había sufrido un accidente o que había sido capturado.

Otros temían que los habitantes del planeta azul representaran una amenaza.

Tomás escuchó el mensaje varias veces.

Sabía que, si regresaba sin explicar lo que había descubierto, el miedo podría convertirse en una decisión peligrosa.

Debía contarles la verdad.

Sin embargo, antes de poder enviar una respuesta, ocurrió algo inesperado.

Un grupo de personas había encontrado rastros de la nave y comenzó a investigar la zona. Las imágenes de un objeto desconocido se difundieron rápidamente. Pronto surgieron rumores sobre una posible invasión extraterrestre.

El temor creció tanto en la Tierra como en Marcian.

Milena se preocupó.

—¿Y si vienen a buscarte? —preguntó.

—Mi familia no quiere hacer daño a nadie —respondió Tomás—. Pero no sé qué harán los dirigentes si creen que estoy en peligro.

Por primera vez desde que se conocieron, ambos sintieron que su relación podía quedar atrapada entre dos mundos que no se comprendían.

            `,

            right: `Tomás tomó una decisión.

Utilizaría la nave para enviar un mensaje abierto a los dos planetas. Explicaría quién era, por qué había viajado y todo lo que había aprendido durante su estancia en la Tierra.

Milena lo ayudó a preparar el mensaje.

Grabaron imágenes de los paisajes terrestres, de las personas trabajando juntas y de los lugares donde la tecnología podía convivir con la naturaleza. Tomás también mostró fotografías de Marcian y explicó que sus habitantes tenían sus propios temores y esperanzas.

Al terminar, miró a Milena.

—No sé si nos creerán.

—No podemos controlar lo que piensen —dijo ella—. Pero sí podemos decir la verdad.

Tomás activó el transmisor.

El mensaje viajó hacia Marcian y fue recibido por los científicos, que lo compartieron con sus dirigentes. En la Tierra, las imágenes también comenzaron a difundirse.

Algunos sintieron miedo. Otros dudaron de lo que veían. Pero muchas personas comenzaron a hacerse una pregunta diferente.

¿Y si aquel encuentro no era una amenaza, sino una oportunidad?

Tomás recibió una respuesta de su familia. Su madre lloraba de alegría al verlo vivo. Su padre, que siempre había sido reservado, le dijo que estaba orgulloso de él.

Sin embargo, también le advirtieron que debía regresar para ayudar a evitar un conflicto.

Tomás sabía que tenía que hacerlo.

Antes de partir, tomó las manos de Milena.

—Tengo que volver a Marcian y explicarles lo que he aprendido. Pero no quiero que esto sea el final de nuestra historia.

Milena lo abrazó.

—Entonces hagamos que sea el comienzo de algo más grande.

Se despidieron bajo el cielo estrellado, sabiendo que el camino no sería sencillo.

Tomás subió a la Esperanza y puso rumbo a casa.

Esta vez no viajaba únicamente para descubrir un mundo nuevo.

Regresaba para enseñar a su propio mundo que no debía tener miedo de conocerlo.
            `
        },

        {
            title: "Capítulo 6: Dos mundos, un solo corazón",

            left: `Cuando Tomás regresó a Marcian, miles de personas se reunieron para recibirlo.

Algunos querían escuchar sus descubrimientos científicos. Otros deseaban conocer a los habitantes de la Tierra. Muchos simplemente querían saber cómo era posible que alguien hubiera cruzado el espacio y regresado con una historia tan extraordinaria.

Tomás habló ante los dirigentes y los ciudadanos.

Les contó sobre los océanos, los bosques y los animales. Les explicó que los humanos no eran perfectos, pero que también tenían la capacidad de aprender, colaborar y cambiar.

—La Tierra tiene problemas que todavía debe resolver —dijo—, pero nosotros tampoco somos perfectos. Si utilizamos nuestros conocimientos para ayudarnos, quizá podamos construir algo que ninguno de los dos planetas lograría por separado.

Al principio hubo desacuerdos.

Algunos dirigentes temían compartir su tecnología. Otros pensaban que los recursos de Marcian debían reservarse para sus propios habitantes.

Pero Tomás no se rindió.

Mostró cómo los sistemas de energía de Marcian podrían ayudar a reducir la contaminación terrestre. A cambio, los científicos humanos podrían compartir conocimientos sobre agricultura, biodiversidad y recuperación de ecosistemas.

Poco a poco, las discusiones se transformaron en conversaciones.

Finalmente, ambos mundos acordaron iniciar un programa de cooperación. Primero intercambiarían información científica; después, organizarían visitas controladas y proyectos conjuntos.

Tomás volvió a la Tierra acompañado por una pequeña delegación de científicos de Marcian.

Milena lo esperaba cerca del lugar donde se habían conocido.

Cuando lo vio bajar de la nave, corrió hacia él y lo abrazó.

—Pensé que tardarías una eternidad —dijo sonriendo.

—Tuve que convencer a todo un planeta —respondió Tomás—. No fue precisamente rápido.

Ambos rieron.

            `,

            right: `A partir de aquel día, su historia dejó de ser solamente una aventura personal y se convirtió en un símbolo de esperanza para dos civilizaciones.

Los años pasaron.

Tomás y Milena construyeron una vida juntos. Con el tiempo formaron una familia y tuvieron cuatro hijos, que crecieron escuchando historias sobre los dos mundos de sus padres.

Sus hijos aprendieron las costumbres de la Tierra y las tradiciones de Marcian. Para ellos, tener raíces en dos planetas no era una dificultad, sino un regalo.

Mientras tanto, la cooperación entre las dos civilizaciones continuó creciendo.

Los científicos desarrollaron tecnologías para aprovechar mejor la energía. Los agricultores compartieron técnicas que ayudaron a producir alimentos con menos recursos. Las comunidades intercambiaron conocimientos para recuperar zonas dañadas y proteger la vida.

No todos los problemas desaparecieron.

Todavía había discusiones, desacuerdos y decisiones difíciles. Pero ahora existía algo que antes faltaba: la voluntad de escucharse antes de juzgarse.

Una tarde, muchos años después de su primer viaje, Tomás regresó con Milena al lugar donde había aterrizado su nave.

Los árboles habían crecido y el arroyo seguía recorriendo el mismo camino. Desde allí podían ver el cielo cambiar de color mientras el Sol descendía detrás de las montañas.

Tomás sacó del bolsillo la pequeña piedra rojiza que su padre le había entregado antes de su primer viaje.

—Cuando salí de Marcian, creía que necesitaba encontrar otro mundo para descubrir quién era —dijo.

Milena apoyó la cabeza sobre su hombro.

—¿Y lo encontraste?

Tomás sonrió.

—Encontré mucho más. Aprendí que no tenemos que dejar de ser quienes somos para comprender a los demás.

Miró el cielo, donde las primeras estrellas comenzaban a aparecer.

Durante mucho tiempo había pensado que no encajaba en su propio hogar. Ahora comprendía que su diferencia no era una debilidad. Era precisamente aquello que le había permitido cruzar una frontera que otros ni siquiera se atrevían a imaginar.

Tomás tomó la mano de Milena.

Juntos observaron el cielo en silencio.

Y mientras las estrellas iluminaban la noche, dos mundos continuaron su camino hacia un futuro compartido.

Porque, al final, Tomás descubrió que el universo era inmenso y que siempre habría nuevas preguntas por responder.

Pero también descubrió algo que ninguna máquina podía calcular:

No importa cuán lejos viajemos ni cuántas diferencias existan entre nosotros. Cuando aprendemos a escuchar, respetar y amar, podemos convertir dos mundos distintos en un solo hogar.

Fin.

            `
        }
    ];

    
let index = -1;

function renderChapter() {
    const chapter = language === "en"
        ? window.englishChapters[index]
        : chapters[index];

    title.textContent = chapter.title;
    left.textContent = chapter.left.trim();
    right.textContent = chapter.right.trim();

    numLeft.textContent = index * 2 + 1;
    numRight.textContent = index * 2 + 2;

    status.textContent =
        `Capítulo ${index + 1} de ${chapters.length}`;

    prev.disabled = index === 0;

    next.textContent =
        index === chapters.length - 1
            ? "Volver a la portada ↺"
            : "Siguiente capítulo →";
}

function open() {
    if (index === -1) {
        index = 0;

        cover.classList.add("opened");
        openBook.hidden = false;

        renderChapter();
    }
}

function animatePageTurn(direction) {
    openBook.classList.remove("turn-next", "turn-prev");

    void openBook.offsetWidth;

    openBook.classList.add(
        direction === "next" ? "turn-next" : "turn-prev"
    );

    setTimeout(() => {
        openBook.classList.remove("turn-next", "turn-prev");
    }, 700);
}

cover.addEventListener("click", open);

next.addEventListener("click", () => {
    if (index === -1) {
        open();
        return;
    }

    if (index < chapters.length - 1) {
        animatePageTurn("next");

        setTimeout(() => {
            index++;
            renderChapter();
        }, 350);
    } else {
        index = -1;

        openBook.hidden = true;
        cover.classList.remove("opened");

        prev.disabled = true;
        next.textContent = "Abrir libro →";
        status.textContent = "Portada";
        
    }
});

prev.addEventListener("click", () => {
    if (index > 0) {
        animatePageTurn("prev");

        setTimeout(() => {
            index--;
            renderChapter();
        }, 350);
    }
});

backToCover.addEventListener("click", () => {
    index = -1;

    openBook.hidden = true;
    cover.classList.remove("opened");

    prev.disabled = true;
    next.textContent = "Abrir libro →";
    status.textContent = "Portada";
});


languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        language = button.dataset.language;

        languageButtons.forEach((item) => {
            item.classList.toggle("active", item === button);
        });

        if (index >= 0) {
            renderChapter();
        }
    });
});
});

