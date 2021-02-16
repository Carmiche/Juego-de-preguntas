var pro = {
    contadorPositivo: 0,
    contadorNegativo: 0,
    gameOver: 0,
    gameSave: 0,
    sorteo: 0,
    repeticiones: 0,
    mostrar: false,
    guardado: " ",
    res: " ",


    divResultados: document.querySelector(".resultados-juego"),
    resultadoPositivo: document.querySelector('.resultados-juego-positivo'),
    resultadoNegativo: document.querySelector('.resultados-juego-negativo'),
    divPreguntas: document.querySelector(".preguntas"),
    h3Pregunta: document.querySelector(".pregunta"),
    liRespuestas: document.querySelectorAll(".respuestas"),
    botonComenzar: document.querySelector('.boton'),


    preguntas: [
        {
            pregunta: '¿Simón Bolivar es el libertador de?',
            respuesta1: 'Venezuela, Colombia, Bolivia, Panamá y Ecuador',
            respuesta2: 'Venezuela, Colombia, Peru, Ecuador y Panamá',
            respuesta3: 'Colombia, Uruguay, Peru y Bolivia',
            respuesta4: 'Colombia, Panamá, Ecuador, Bolivia, Chile',
            mostrado: false,
        },
        {
            pregunta: '¿Cuál es el río más largo del mundo?',
            respuesta1: 'Amazonas',
            respuesta2: 'Nilo',
            respuesta3: 'Río amarillo',
            respuesta4: 'Yangtsé',
            mostrado: false,
        },

        {
            pregunta: '¿Cual es la capital de Estados Unidos?',
            respuesta1: 'Washington',
            respuesta2: 'Texas',
            respuesta3: 'Florida',
            respuesta4: 'Nevada',
            mostrado: false,
        },

        {
            pregunta: '¿Quien fue un integrante de la banda Queen?',
            respuesta1: 'Freddy Mercury',
            respuesta2: 'Elton John',
            respuesta3: 'Marco Tercero',
            respuesta4: 'Bonjovi',
            mostrado: false,
        },

        {
            pregunta: '¿Cual fue la cancion mas "Pegadiza" del 2012?',
            respuesta1: 'Gamnamg Style de Psy',
            respuesta2: 'Call Me Maybe de Rae Jepsen',
            respuesta3: 'Diamonds de Rihanna',
            respuesta4: 'Shake it off de Taylor Swift',
            mostrado: false,
        },

        {
            pregunta: '¿Cual es el famoso sobrenombre de Michael Jackson?',
            respuesta1: 'El rey del Pop',
            respuesta2: 'El principe del Rap',
            respuesta3: 'El creador del Pop',
            respuesta4: 'Maestro del baile',
            mostrado: false,
        },

        {
            pregunta: '¿Quien es el protagonista de Terminator?',
            respuesta1: 'Arnold Schwarzenegger',
            respuesta2: 'Linda Hamilton',
            respuesta3: 'James Cameron',
            respuesta4: 'Billy Anders',
            mostrado: false,
        },
        {
            pregunta: '¿Cuál de estos no es un pokémon?',
            respuesta1: 'Poodle',
            respuesta2: 'Corsola',
            respuesta3: 'Gloom',
            respuesta4: 'Charizard',
            mostrado: false
        },
        {
            pregunta: '¿Cuál de estos es un digimon?',
            respuesta1: 'Sukamon',
            respuesta2: 'kroemon',
            respuesta3: 'Diabloromon',
            respuesta4: 'Porlemon',
            mostrado: false
        },
        {
            pregunta: '¿Cuál de estos es un pokémon?',
            respuesta1: 'Tailow',
            respuesta2: 'Shagon',
            respuesta3: 'Lowster',
            respuesta4: 'Beeley',
            mostrado: false
        },
        {
            pregunta: '¿Quien ha sido un Robin (de Batman)?',
            respuesta1: 'Tim Drake',
            respuesta2: 'Ninguno a sido un Robin',
            respuesta3: 'Barbara Gordon',
            respuesta4: 'Jason Gray',
            mostrado: false
        },
        {
            pregunta: '¿Cuál fue el juego más vendido de 2019?',
            respuesta1: 'FIFA 19',
            respuesta2: 'Red Dead Redemption 2',
            respuesta3: 'Pokémon Espada y Escudo',
            respuesta4: "Link's Awakening",
            mostrado: false
        },
        {
            pregunta: '¿Que personaje de Star Wars tiene un sable de luz morado?',
            respuesta1: 'Mace Windu',
            respuesta2: 'Yoda',
            respuesta3: 'Asoka',
            respuesta4: 'No hay ningun personaje que tenga un sable morado',
            mostrado: false
        },
        {
            pregunta: '¿Cuál de estos no es un personaje elegible de Diablo II (expansión incluida)?',
            respuesta1: 'Daedra',
            respuesta2: 'Druida',
            respuesta3: 'Nicromante',
            respuesta4: 'Paladin',
            mostrado: false
        },
        {
            pregunta: '¿Cuál fue la consola más vendida de la historia?',
            respuesta1: 'PlayStation 2',
            respuesta2: 'PlayStation 4',
            respuesta3: 'Nintendo DS',
            respuesta4: 'Wii',
            mostrado: false
        },
        {
            pregunta: '¿Cuál es el videojuego más vendido de la historia?',
            respuesta1: 'Minecraft',
            respuesta2: 'GTA 5',
            respuesta3: 'Wii Sports',
            respuesta4: 'PUG',
            mostrado: false
        },
        {
            pregunta: '¿En que saga de videojuegos aparece como protagonista Samus (Aran)?',
            respuesta1: 'Metroid',
            respuesta2: 'Super Smash Bros',
            respuesta3: 'Halo',
            respuesta4: 'Mother',
            mostrado: false
        },
        {
            pregunta: '¿Cuál personaje es el protagonista en GTA San Andreas?',
            respuesta1: 'Carl Johnson',
            respuesta2: 'Niko Bellic',
            respuesta3: 'Toni Cipriani',
            respuesta4: 'Frankil',
            mostrado: false
        },
        {
            pregunta: '¿Que tipo de medio digital usa la extension de archivo ".MP3"?',
            respuesta1: 'Audio',
            respuesta2: 'Video',
            respuesta3: 'Imagen',
            respuesta4: 'Texto',
            mostrado: false
        },
        {
            pregunta: '¿Con que unidad de medida se mide la tensión electrica?',
            respuesta1: 'V de Voltio',
            respuesta2: 'A de Ampere',
            respuesta3: 'W de vatio',
            respuesta4: 'U de Ohmio',
            mostrado: false
        },
        {
            pregunta: '¿Con que unidad de medida se mide el potencial electrico?',
            respuesta1: 'W de vatio',
            respuesta2: 'A de Ampere',
            respuesta3: 'V de voltio',
            respuesta4: 'J de Julios',
            mostrado: false
        },
        {
            pregunta: '¿Cuál es la unidad con la que se mide la intensidad de corriente electrica?',
            respuesta1: 'A de Ampere',
            respuesta2: 'C de Columbu',
            respuesta3: 'J de Julio',
            respuesta4: 'W de Voltio',
            mostrado: false
        },
        {
            pregunta: '¿Qué significado tiene la abreviación "S.O?"',
            respuesta1: 'Sistema Operativo',
            respuesta2: 'Sopa de Orchata',
            respuesta3: 'Silencio y Oscuridad',
            respuesta4: 'sistema Ohmio',
            mostrado: false
        },
        {
            pregunta: '¿Cuál es el lenguaje de marcado de hipertexto?',
            respuesta1: 'HTML',
            respuesta2: 'CSS',
            respuesta3: 'JS',
            respuesta4: 'Python',
            mostrado: false
        },
        {
            pregunta: '¿Cuál es el lenguaje de diseño grafico para definir la presentación de documentos HTML y XML?',
            respuesta1: 'CSS',
            respuesta2: 'JavaScript',
            respuesta3: 'Bootstrap',
            respuesta4: 'Animated.io',
            mostrado: false
        },
        {
            pregunta: '¿Cuál es el lenguaje de programación que se comunica con el navegador?',
            respuesta1: 'JavaScript',
            respuesta2: 'Java',
            respuesta3: 'PHP',
            respuesta4: 'SLint',
            mostrado: false
        },
        {
            pregunta: '¿Cuál de estos es el planeta más cerca de La Tierra?',
            respuesta1: 'Venus',
            respuesta2: 'Mercurio',
            respuesta3: 'Jupiter',
            respuesta4: 'Saturno',
            mostrado: false
        },
        {
            pregunta: '¿Cuál es el planeta mas alejado del Sol?',
            respuesta1: 'Neptuno',
            respuesta2: 'Pluton',
            respuesta3: 'Urano',
            respuesta4: 'Saturno',
            mostrado: false
        },
        {
            pregunta: '¿Cuál servicio de red Peer-to-Peer (P2P) fue creado antes?',
            respuesta1: 'LimeWire',
            respuesta2: 'WireShare',
            respuesta3: 'Utorrent',
            respuesta4: 'BitTorrent',
            mostrado: false
        },
        {
            pregunta: '¿Cuál de estos tipo de USBs es mas rapido?',
            respuesta1: 'Azul',
            respuesta2: 'Blanco',
            respuesta3: 'Negro',
            respuesta4: 'No tiene color especifico',
            mostrado: false
        },
        {
            pregunta: '¿Cuál de estos no es un creador de procesadores en la actualidad (2021)?',
            respuesta1: 'Atari',
            respuesta2: 'Intel',
            respuesta3: 'AMD',
            respuesta4: 'ARM',
            mostrado: false
        },
        
        {
            pregunta: '¿Cuál es la menor unidad de información digital?',
            respuesta1: 'Bits',
            respuesta2: 'Byte',
            respuesta3: 'MegaByte',
            respuesta4: 'GigaByte',
            mostrado: false
        },
        {
            pregunta: 'En placa madre de las computadoras existe el puente norte, ¿de que se encarga?',
            respuesta1: 'De los puertos PCI, CPU, Graficos, RAM',
            respuesta2: 'De los Puertos PCI, USB, SATA, Audio',
            respuesta3: 'De la RAM, Audio, CPU, BIOS y IDE',
            respuesta4: 'De la RAM, PCI, USB, BIOS y SATA',
            mostrado: false
        },


        {
            pregunta: 'En placa madre de las computadoras existe el puente sur, ¿de que se encarga?',
            respuesta1: 'De PCI, USB, SATA, IDE, BIOS, Audio',
            respuesta2: 'De PCI, CPU, Graficos, RAM',
            respuesta3: 'De PCI, USB, SATA, RAM',
            respuesta4: 'De PCI, BIOS, Graficos, CPU',
            mostrado: false
        },
        {
            pregunta: '¿Qué es un programa portable?',
            respuesta1: 'Un programa que se ejecuta sin instalarse',
            respuesta2: 'Un programa que se instala y luego ejecuta',
            respuesta3: 'Un programa ya instalado por el sistema operativo (Windows, Linux, Mac OS)',
            respuesta4: 'Un programa que es necesario para el funcionamiento del sistema operativo',
            mostrado: false
        },
        {
            pregunta: '¿Que es caché (informatica)?',
            respuesta1: 'Una memoria temporal',
            respuesta2: 'Un cumuló de datos personales',
            respuesta3: 'Un proceso más del navegador',
            respuesta4: 'Una extensión',
            mostrado: false
        },
        {
            pregunta: '¿Qué es una cookie (informatica)?',
            respuesta1: 'Un archivo enviado por un sitio web y almacenado en el navegador del visitante',
            respuesta2: 'Un archivo emitido por el navegador para saber cuales paginas visitaste',
            respuesta3: 'Una información que cambia cosas pequeñas en las paginas que visitaste',
            respuesta4: 'Una especie de caché de inicios de sesión',
            mostrado: false
        },
        {
            pregunta: '¿Cuál es el océano más grande del mundo?',
            respuesta1: 'El océano Pacífico',
            respuesta2: 'El océano Atlántico',
            respuesta3: 'El océano Índico',
            respuesta4: 'El océano Antartico',
            mostrado: false
        },
        {
            pregunta: '¿Cuál es el disco más vendido de la historia?',
            respuesta1: 'Their Gratest Hits de The Eagles',
            respuesta2: 'Hotel California de The Eagles',
            respuesta3: 'Thriller de Michael Jackson',
            respuesta4: 'The Beatles de The Beatles',
            mostrado: false
        },
        {
            pregunta: '¿Cuál es el país más grande del mundo?',
            respuesta1: 'Rusia',
            respuesta2: 'Canada',
            respuesta3: 'China',
            respuesta4: 'Antartida',
            mostrado: false
        },
        {
            pregunta: 'Si el opuesto de verde es magenta, ¿el opuesto de rojo es?',
            respuesta1: 'Cian',
            respuesta2: 'Azul',
            respuesta3: 'Verde',
            respuesta4: 'Naranja',
            mostrado: false
        },
        {
            pregunta: 'Si el opuesto de Azul es amarillo, ¿el opuesto de ultramar (azul semi-oscuro) es?',
            respuesta1: 'Naranja',
            respuesta2: 'Amarillo',
            respuesta3: 'Carmesí',
            respuesta4: 'Verde',
            mostrado: false
        },
        {
            pregunta: 'Si el opuesto de purpura es verde-amarillo, ¿el opuesto de carmesí es?',
            respuesta1: 'Azul verde',
            respuesta2: 'Azul',
            respuesta3: 'Magenta',
            respuesta4: 'Purpura',
            mostrado: false
        },
        {
            pregunta: '¿Donde nació Pablo Neruda "El poeta"?',
            respuesta1: 'Chile',
            respuesta2: 'Venezuela',
            respuesta3: 'España',
            respuesta4: 'Portugal',
            mostrado: false
        },
        {
            pregunta: '¿De donde proviene el castellano?',
            respuesta1: 'Latín',
            respuesta2: 'Ingles',
            respuesta3: 'Español',
            respuesta4: 'Portugues',
            mostrado: false
        },
        {
            pregunta: '¿Donde cayó la primera bomba atómica?',
            respuesta1: 'Enewetak',
            respuesta2: 'Nagasaki',
            respuesta3: 'Islas virgenes',
            respuesta4: 'Hiroshima',
            mostrado: false
        },
        {
            pregunta: '¿En que año se produjeron los atentados sobre las Torres Gemelas de New York?',
            respuesta1: '2001',
            respuesta2: '2011',
            respuesta3: '2000',
            respuesta4: '1991',
            mostrado: false
        },
        {
            pregunta: '¿Quién dirigió "El Lobo de Wall Street"?',
            respuesta1: 'Martin Scorsese',
            respuesta2: 'George Lucas',
            respuesta3: 'Tarantino',
            respuesta4: 'Christopher Nolan',
            mostrado: false
        },
        {
            pregunta: 'En la serie de animación "Yung Justice", ¿quién es el jefe del grupo?',
            respuesta1: 'Aqualad',
            respuesta2: 'Robin',
            respuesta3: 'SuperBoy',
            respuesta4: 'Kid flash',
            mostrado: false
        },
        {
            pregunta: '¿Quién fue el primer presidente de los Estados Unidos?',
            respuesta1: 'George Washington',
            respuesta2: 'Theodore Roosevelt',
            respuesta3: 'Abraham Lincoln',
            respuesta4: 'Thomas Jefferson',
            mostrado: false
        },
        {
            pregunta: '¿Qué vitamina pueden sintetizar la mayoría de mamíferos exponiendose al sol?',
            respuesta1: 'Vitamina D',
            respuesta2: 'Vitamina C',
            respuesta3: 'Vitamina A',
            respuesta4: 'Vitamina B',
            mostrado: false
        },
        {
            pregunta: '¿Cuál es la capital de Canadá?',
            respuesta1: 'Ottawa',
            respuesta2: 'Aiowa',
            respuesta3: 'Toronto',
            respuesta4: 'Vancouver',
            mostrado: false
        },
        {
            pregunta: '¿Cuál es la fosa más profunda del océano?',
            respuesta1: 'Fosa de las Marianas',
            respuesta2: 'Fosa de Filipinas',
            respuesta3: 'Fosa de Tonga',
            respuesta4: 'Fosa de las kuriles',
            mostrado: false
        },
        
        {
            pregunta: '¿Qué es HTTPS?',
            respuesta1: 'Protocolo de comunicación de informacion',
            respuesta2: 'Nombre de sub-dominio',
            respuesta3: 'Nombre de dominio',
            respuesta4: 'Raiz de la pagina web',
            mostrado: false
        },
        {
            pregunta: '¿Qué significa el error 404 HTTP?',
            respuesta1: 'No se encontro el archivo',
            respuesta2: 'No se pudo completar la petición',
            respuesta3: 'La petición tardo mucho en ser respondida',
            respuesta4: 'El archivo no se encuentra disponible',
            mostrado: false
        },
        {
            pregunta: '¿Qué significa el error 403 HTTP?',
            respuesta1: 'El archivo tiene protección',
            respuesta2: 'No se pudo completar la petición',
            respuesta3: 'El Archivo no se encuentra disponible',
            respuesta4: 'No se encontro el archivo',
            mostrado: false
        },
        {
            pregunta: '¿Cuál es la nacionalidad de Ludwig Van Beethoven?',
            respuesta1: 'Aleman',
            respuesta2: 'Polaco',
            respuesta3: 'Austriaco',
            respuesta4: 'britanico',
            mostrado: false
        },
        {
            pregunta: '¿En que país nació Picasso?',
            respuesta1: 'España',
            respuesta2: 'Italia',
            respuesta3: 'Francia',
            respuesta4: 'Reino Unido',
            mostrado: false
        },
   /*     
        Plantilla
        {
            pregunta: '¿?',
            respuesta1: '',
            respuesta2: '',
            respuesta3: '',
            respuesta4: '',
            mostrado: false
        },
*/
    ],
}
var mets = {
    inicio: function() {
        pro.botonComenzar.addEventListener("click", function() {
            if (pro.guardado == " ") {
                pro.guardado = pro.preguntas;
            }

            if (pro.botonComenzar.innerHTML === "Comenzar" || pro.botonComenzar.innerHTML === "Volver a empezar") {
                pro.sorteo = Math.floor(Math.random() * pro.preguntas.length);
                pro.botonComenzar.innerHTML = "Terminar";
                pro.divPreguntas.className = 'preguntas true';
                pro.divResultados.className = 'resultados-juego true';
            } else {
                pro.botonComenzar.innerHTML = "Volver a empezar";
                pro.divPreguntas.className = 'preguntas false';
                pro.divResultados.className = 'resultados-juego false';
                pro.gameOver = 0;
                pro.gameSave = 0;
                pro.contadorNegativo = 0;
                pro.resultadoNegativo.innerHTML = pro.contadorNegativo;
                pro.contadorPositivo = 0;
                pro.resultadoPositivo.innerHTML = pro.contadorPositivo;
                pro.preguntas = pro.guardado;
                for (let i = 0; i < pro.preguntas.length; i++) {
                    pro.preguntas[i].mostrado = false;
                };
            }
            mets.respuestas();
        })
    },
    respuestas: function(s1, s2, s3, s4) {
        if (pro.preguntas[pro.sorteo].mostrado == false) {
            pro.h3Pregunta.innerHTML = pro.preguntas[pro.sorteo].pregunta;
            do {
                s1 = Math.floor(Math.random() * 4);
                s2 = Math.floor(Math.random() * 4);
                s3 = Math.floor(Math.random() * 4);
                s4 = Math.floor(Math.random() * 4);
            } while (s1 == s2 || s1 == s3 || s1 == s4 ||
                    s2 == s3 || s3 == s4 || s2 == s4)
            if (pro.gameOver < 3) {
                pro.liRespuestas[s1].innerHTML = pro.preguntas[pro.sorteo].respuesta1;
                pro.liRespuestas[s2].innerHTML = pro.preguntas[pro.sorteo].respuesta2;
                pro.liRespuestas[s3].innerHTML = pro.preguntas[pro.sorteo].respuesta3;
                pro.liRespuestas[s4].innerHTML = pro.preguntas[pro.sorteo].respuesta4;
            } else {
                pro.h3Pregunta.innerHTML = pro.preguntas[0].pregunta;
                pro.liRespuestas[0].innerHTML = pro.preguntas[0].respuesta1;
                pro.liRespuestas[1].innerHTML = pro.preguntas[0].respuesta2;
                pro.liRespuestas[2].innerHTML = pro.preguntas[0].respuesta3;
                pro.liRespuestas[3].innerHTML = pro.preguntas[0].respuesta4;
            }
        } else {
            pro.repeticiones = 0
            while (pro.preguntas[pro.sorteo].mostrado == true || pro.repeticiones <= 100) {
                pro.sorteo = Math.floor(Math.random() * pro.preguntas.length);
                pro.repeticiones++;
                if (pro.repeticiones > 200) {
                    pro.gameOver = 3
                    pro.preguntas = [{
                        pregunta: "Haz completado el juego",
                        respuesta1: "Numero de aciertos",
                        respuesta2: pro.contadorPositivo,
                        respuesta3: "Numero de fallos",
                        respuesta4: pro.contadorNegativo,
                        mostrado: false
                    }]
                    pro.h3Pregunta.innerHTML = pro.preguntas[0].pregunta;
                    pro.liRespuestas[0].innerHTML = pro.preguntas[0].respuesta1;
                    pro.liRespuestas[1].innerHTML = pro.preguntas[0].respuesta2;
                    pro.liRespuestas[2].innerHTML = pro.preguntas[0].respuesta3;
                    pro.liRespuestas[3].innerHTML = pro.preguntas[0].respuesta4;
                };
            }
            if (pro.preguntas[pro.sorteo].mostrado == false) {
                mets.respuestas();

            };
        }
    },
    respondio: function() {
        for (let i = 0; i < pro.liRespuestas.length; i++) {
            pro.liRespuestas[i].addEventListener("click", function(res) {
                if (pro.gameOver < 3) {
                    pro.res = res.target.innerHTML;
                }

                if (pro.res == pro.preguntas[pro.sorteo].respuesta1 && pro.gameOver < 3) {
                    pro.contadorPositivo++;
                    pro.gameSave++;
                    if (pro.gameSave == 10) {
                        pro.gameSave = 0;
                        pro.gameOver--;
                    };
                    pro.resultadoPositivo.innerHTML = pro.contadorPositivo;

                } else if (pro.gameOver < 3) {
                    pro.contadorNegativo++;
                    pro.gameOver++;
                    pro.resultadoNegativo.innerHTML = pro.contadorNegativo;
                }
                if (pro.gameOver >= 3) {
                    pro.preguntas = [{
                        pregunta: "Haz completado el juego",
                        respuesta1: "Numero de aciertos",
                        respuesta2: pro.contadorPositivo,
                        respuesta3: "Numero de fallos",
                        respuesta4: pro.contadorNegativo,
                        mostrado: false

                    }]
                    pro.h3Pregunta.innerHTML = pro.preguntas[0].pregunta;
                    pro.liRespuestas[0].innerHTML = pro.preguntas[0].respuesta1;
                    pro.liRespuestas[1].innerHTML = pro.preguntas[0].respuesta2;
                    pro.liRespuestas[2].innerHTML = pro.preguntas[0].respuesta3;
                    pro.liRespuestas[3].innerHTML = pro.preguntas[0].respuesta4;

                }
                if (pro.preguntas.length == 1 || pro.gameOver >= 3) {
                    pro.preguntas[0].mostrado = false;

                } else {

                    pro.preguntas[pro.sorteo].mostrado = true;
                }
                pro.sorteo = Math.floor(Math.random() * pro.preguntas.length);
                mets.respuestas();
            })
        }
    },
}
mets.inicio();
mets.respondio()