export type Fact = { prompt: string; answer: string; wrong: [string, string]; explanation: string };
export type Topic = { id: string; title: string; category: string; icon: string; color: string; description: string; facts: Fact[] };
const f = (prompt: string, answer: string, a: string, b: string, explanation: string): Fact => ({ prompt, answer, wrong: [a, b], explanation });
export const topics: Topic[] = [
{ id:'egipto', title:'Antiguo Egipto', category:'Historia', icon:'sunny', color:'#D89A00', description:'Una civilización a orillas del Nilo.', facts:[
f('¿Qué río sostenía la agricultura egipcia?','El Nilo','El Tigris','El Danubio','Las crecidas del Nilo dejaban sedimentos fértiles en sus orillas.'),
f('¿Cómo se llamaba el gobernante del Antiguo Egipto?','Faraón','Cónsul','Dux','El faraón reunía poder político y una función religiosa central.'),
f('¿Para qué se construyeron las grandes pirámides de Guiza?','Como tumbas reales','Como teatros','Como mercados','Las pirámides formaban parte de complejos funerarios de los faraones.'),
f('¿Qué material vegetal se usaba para escribir?','Papiro','Bambú','Corteza de abedul','El papiro se elaboraba con tiras del tallo de una planta de zonas húmedas.'),
f('¿Qué sistema de escritura incluía signos con figuras?','Jeroglíficos','Alfabeto cirílico','Escritura rúnica','Los jeroglíficos combinaban signos para sonidos, palabras y categorías de significado.'),
f('¿Por qué es célebre la piedra de Rosetta?','Ayudó a descifrar jeroglíficos','Contiene el primer mapa lunar','Es una pieza de una pirámide','Su texto en tres escrituras permitió comparar el griego con las escrituras egipcias.'),
f('¿Qué buscaba la momificación?','Conservar el cuerpo','Fabricar armas','Medir las crecidas','La conservación del cuerpo estaba vinculada con las creencias sobre la vida después de la muerte.') ]},
{ id:'grecia', title:'Grecia antigua', category:'Historia', icon:'library', color:'#D89A00', description:'Polis, filosofía y los primeros Juegos.', facts:[
f('¿Qué era una polis?','Una ciudad-Estado','Una moneda romana','Una nave vikinga','Una polis tenía instituciones propias y un territorio que incluía la ciudad y su entorno.'),
f('¿Qué ciudad se asocia con el nacimiento de la democracia antigua?','Atenas','Cartago','Babilonia','La democracia ateniense permitía participar a los ciudadanos varones, pero excluía a muchos habitantes.'),
f('¿Dónde se celebraban los Juegos Olímpicos antiguos?','Olimpia','Delfos','Alejandría','Los juegos se celebraban en Olimpia como parte de una festividad religiosa.'),
f('¿Quién fue maestro de Platón?','Sócrates','Arquímedes','Heródoto','Platón fue discípulo de Sócrates y lo convirtió en protagonista de muchos diálogos.'),
f('¿A qué diosa estaba dedicado el Partenón?','Atenea','Afrodita','Artemisa','El Partenón de la Acrópolis de Atenas estaba dedicado a Atenea.'),
f('¿Qué obras se atribuyen a Homero?','La Ilíada y la Odisea','La Eneida y las Metamorfosis','La República y la Política','La Ilíada y la Odisea son poemas épicos transmitidos durante siglos.'),
f('¿Qué gobernante extendió su imperio desde Macedonia hasta Asia?','Alejandro Magno','Pericles','Solón','Las conquistas de Alejandro impulsaron la expansión de la cultura helenística.') ]},
{ id:'roma', title:'El mundo romano', category:'Historia', icon:'business', color:'#D89A00', description:'De la República a un gran imperio.', facts:[
f('¿Qué ciudad fue el centro del Imperio romano?','Roma','Esparta','Persépolis','Roma dio nombre a la civilización y fue su principal centro político durante siglos.'),
f('¿Qué lengua predominaba en la administración del occidente romano?','Latín','Sánscrito','Náhuatl','El latín influyó en las lenguas romances, como el español, el italiano y el francés.'),
f('¿Para qué servían los acueductos?','Transportar agua','Almacenar grano','Medir el tiempo','Los acueductos conducían agua aprovechando pendientes cuidadosamente calculadas.'),
f('¿Quién fue el primer emperador romano?','Augusto','Nerón','Trajano','Augusto consolidó el poder imperial a finales del siglo I antes de nuestra era.'),
f('¿Qué edificio romano acogía combates de gladiadores?','El Coliseo','El Panteón','La biblioteca de Celso','El Coliseo es un anfiteatro construido para espectáculos públicos.'),
f('¿Qué ocurrió con Pompeya en el año 79?','La cubrió una erupción volcánica','Se convirtió en capital imperial','Fue fundada por Augusto','La erupción del Vesubio sepultó Pompeya y preservó numerosos restos de la vida cotidiana.'),
f('¿Qué eran las calzadas romanas?','Caminos construidos','Prendas militares','Monedas de plata','Las calzadas facilitaron el transporte de tropas, mercancías e información.') ]},
{ id:'mesoamerica', title:'Mesoamérica', category:'Historia', icon:'map', color:'#D89A00', description:'Ciudades, conocimientos y culturas diversas.', facts:[
f('¿Qué cultivo fue fundamental en Mesoamérica?','Maíz','Centeno','Avena','El maíz fue una base alimentaria y un elemento central de muchas tradiciones mesoamericanas.'),
f('¿Qué cultura es conocida por sus cabezas colosales?','La olmeca','La inca','La fenicia','Las cabezas colosales olmecas fueron talladas en grandes bloques de piedra.'),
f('¿Qué ciudad fue capital mexica?','Tenochtitlan','Cuzco','Tikal','Tenochtitlan se fundó en una isla del lago de Texcoco.'),
f('¿Qué civilización desarrolló una escritura con signos fonéticos y logogramas?','La maya','La vikinga','La etrusca','La escritura maya representaba sonidos y palabras mediante distintos tipos de signos.'),
f('¿Qué eran las chinampas?','Parcelas de cultivo en zonas lacustres','Torres de vigilancia','Monedas ceremoniales','Las chinampas aprovechaban suelos fértiles y agua en áreas poco profundas de los lagos.'),
f('¿Dónde se encuentran las pirámides del Sol y de la Luna?','Teotihuacan','Palenque','Monte Albán','Teotihuacan fue una gran ciudad del centro de lo que hoy es México.'),
f('¿Qué bebida se elaboraba con semillas de cacao?','Una bebida de cacao','Café','Té negro','El cacao se preparaba en bebidas y sus semillas también se emplearon en intercambios.') ]},
{ id:'revolucion-industrial', title:'Revolución industrial', category:'Historia', icon:'cog', color:'#D89A00', description:'Máquinas que cambiaron la vida cotidiana.', facts:[
f('¿Dónde comenzó la primera Revolución industrial?','Gran Bretaña','Australia','Japón','Gran Bretaña fue el principal foco inicial de industrialización en el siglo XVIII.'),
f('¿Qué combustible alimentó muchas máquinas de vapor?','Carbón','Uranio','Hidrógeno líquido','La quema de carbón calentaba el agua para producir vapor.'),
f('¿Qué sector fue clave en la primera mecanización?','El textil','La aviación','La informática','La hilatura y el tejido incorporaron máquinas que aumentaron la producción.'),
f('¿Qué transporte terrestre se expandió con el vapor?','El ferrocarril','El helicóptero','El automóvil eléctrico','Las locomotoras de vapor permitieron transportar personas y mercancías por vías férreas.'),
f('¿Qué significa urbanización?','Crecimiento de las ciudades','Descenso de la población urbana','Construcción de barcos','El trabajo industrial atrajo población rural hacia las ciudades.'),
f('¿Qué caracteriza al trabajo en fábricas?','Concentración de trabajadores y máquinas','Producción exclusiva en hogares','Ausencia de horarios','Las fábricas reunieron medios de producción y organizaron el trabajo con horarios.'),
f('¿Qué buscaban muchos movimientos obreros?','Mejorar las condiciones de trabajo','Eliminar toda educación','Prohibir el ferrocarril','Los movimientos obreros reclamaron mejores salarios, jornadas y derechos.') ]},
{ id:'sistema-solar', title:'Sistema solar', category:'Ciencia', icon:'planet', color:'#7546FF', description:'Un viaje desde el Sol hasta Neptuno.', facts:[
f('¿Qué es el Sol?','Una estrella','Un planeta','Un satélite','El Sol emite energía mediante fusión nuclear en su interior.'),
f('¿Cuál es el planeta más grande del sistema solar?','Júpiter','Marte','Venus','Júpiter es un gigante gaseoso y supera en tamaño a los otros planetas.'),
f('¿Qué planeta es conocido por sus anillos muy visibles?','Saturno','Mercurio','Marte','Los anillos de Saturno contienen innumerables partículas de hielo y roca.'),
f('¿Cuál es el satélite natural de la Tierra?','La Luna','Titán','Europa','La Luna orbita la Tierra; Titán y Europa orbitan otros planetas.'),
f('¿Qué planeta está más cerca del Sol?','Mercurio','Venus','La Tierra','Mercurio recorre la órbita planetaria más cercana al Sol.'),
f('¿Qué planeta recibe el apodo de planeta rojo?','Marte','Urano','Neptuno','Los óxidos de hierro de su superficie contribuyen al color rojizo de Marte.'),
f('¿Qué mantiene a los planetas en sus órbitas alrededor del Sol?','La gravedad','El sonido','El viento terrestre','La atracción gravitatoria del Sol curva el movimiento de los planetas.') ]},
{ id:'cuerpo-humano', title:'Cuerpo humano', category:'Ciencia', icon:'body', color:'#7546FF', description:'Los sistemas que nos mantienen en marcha.', facts:[
f('¿Qué órgano bombea la sangre?','El corazón','El estómago','El hígado','El corazón impulsa la sangre por los vasos sanguíneos.'),
f('¿Dónde ocurre gran parte del intercambio de gases al respirar?','En los alvéolos pulmonares','En el esófago','En los tendones','Los alvéolos permiten el intercambio de oxígeno y dióxido de carbono con la sangre.'),
f('¿Qué órganos filtran la sangre para formar orina?','Los riñones','Los pulmones','Los músculos','Los riñones ayudan a regular agua y sustancias disueltas al producir orina.'),
f('¿Qué protege principalmente el cráneo?','El encéfalo','El corazón','Los riñones','Los huesos del cráneo forman una estructura protectora alrededor del encéfalo.'),
f('¿Qué tejido se contrae para producir movimiento?','El muscular','El esmalte dental','El cartílago','Los músculos generan fuerza mediante la contracción de sus fibras.'),
f('¿Qué transportan principalmente los glóbulos rojos?','Oxígeno','Bilis','Impulsos nerviosos','La hemoglobina de los glóbulos rojos se une al oxígeno para transportarlo.'),
f('¿Qué órgano recibe y procesa gran cantidad de información sensorial?','El cerebro','El páncreas','El bazo','El cerebro integra información y participa en la coordinación de respuestas.') ]},
{ id:'celulas', title:'El mundo celular', category:'Ciencia', icon:'apps', color:'#7546FF', description:'La vida, vista de cerca.', facts:[
f('¿Cuál es la unidad básica de los seres vivos?','La célula','El cristal','El planeta','Los organismos están formados por una o más células.'),
f('¿Qué estructura delimita una célula?','La membrana celular','La corteza terrestre','El esmalte','La membrana regula intercambios entre la célula y su entorno.'),
f('¿Qué molécula almacena la información hereditaria?','ADN','Agua','Cloruro de sodio','El ADN contiene información que puede transmitirse durante la reproducción.'),
f('¿Qué orgánulos realizan la fotosíntesis en plantas?','Cloroplastos','Lisosomas','Ribosomas','Los cloroplastos captan energía luminosa para la fotosíntesis.'),
f('¿Qué estructura fabrica proteínas?','El ribosoma','La pared de un vaso','El alvéolo','Los ribosomas ensamblan aminoácidos siguiendo información del ARN.'),
f('¿Qué distingue a una célula procariota?','No tiene núcleo rodeado de membrana','No tiene ADN','Siempre es más grande que un animal','Las bacterias son procariotas: su material genético no está encerrado en un núcleo.'),
f('¿Qué proceso produce dos células hijas en muchas células eucariotas?','Mitosis seguida de citocinesis','Evaporación','Condensación','La mitosis reparte los cromosomas y la citocinesis divide el contenido celular.') ]},
{ id:'fisica', title:'Física cotidiana', category:'Ciencia', icon:'magnet', color:'#7546FF', description:'Fuerzas y energía que podés observar.', facts:[
f('¿Qué fuerza atrae los objetos hacia la Tierra?','La gravedad','La flotación','La fricción','La gravedad es una interacción atractiva entre cuerpos con masa.'),
f('¿Qué magnitud mide un termómetro?','Temperatura','Masa','Velocidad','La temperatura describe el estado térmico de un cuerpo.'),
f('¿Qué necesita el sonido para propagarse?','Un medio material','Vacío perfecto','Luz solar','El sonido es una vibración que se transmite a través de materia.'),
f('¿Qué ocurre con la luz al reflejarse?','Cambia de dirección en una superficie','Se convierte siempre en agua','Pierde toda su energía','La reflexión permite, por ejemplo, ver imágenes en un espejo.'),
f('¿Qué es la inercia?','Resistencia a cambiar el movimiento','Una fuente de electricidad','Un tipo de sonido','Un cuerpo mantiene su estado de movimiento si no actúa una fuerza neta.'),
f('¿Qué unidad se usa para medir fuerza en el SI?','Newton','Litro','Grado Celsius','El newton es la unidad de fuerza del Sistema Internacional.'),
f('¿Qué transformación ocurre en una lámpara encendida?','Energía eléctrica en luz y calor','Masa en tiempo','Sonido en gravedad','Una lámpara convierte energía eléctrica; una parte se emite como luz y otra como calor.') ]},
{ id:'quimica', title:'Química cercana', category:'Ciencia', icon:'flask', color:'#7546FF', description:'Átomos, mezclas y transformaciones.', facts:[
f('¿Qué representa H₂O?','Agua','Oxígeno molecular','Dióxido de carbono','Una molécula de agua tiene dos átomos de hidrógeno y uno de oxígeno.'),
f('¿Qué organiza la tabla periódica?','Elementos químicos','Especies animales','Tipos de nubes','Los elementos se ordenan por número atómico y muestran propiedades periódicas.'),
f('¿Qué partícula tiene carga negativa?','Electrón','Protón','Neutrón','Los electrones tienen carga negativa; los protones, positiva.'),
f('¿Qué es una mezcla?','Combinación física de sustancias','Un único elemento siempre','La desaparición de toda materia','En una mezcla las sustancias se combinan sin convertirse necesariamente en una sustancia nueva.'),
f('¿Qué cambio es la fusión del hielo?','De sólido a líquido','De líquido a gas','De gas a sólido','La fusión es el paso del estado sólido al líquido.'),
f('¿Qué indica un pH menor que 7 en agua a 25 °C?','Acidez','Neutralidad','Alcalinidad','En estas condiciones, las disoluciones ácidas tienen pH menor que 7.'),
f('¿Qué gas se forma habitualmente al reaccionar bicarbonato con vinagre?','Dióxido de carbono','Helio','Neón','La reacción libera dióxido de carbono, visible como burbujas.') ]},
{ id:'oceanos', title:'Océanos', category:'Geografía', icon:'water', color:'#159C88', description:'La parte azul de nuestro planeta.', facts:[
f('¿Cuál es el océano de mayor superficie?','Pacífico','Índico','Atlántico','El Pacífico es la mayor cuenca oceánica del planeta.'),
f('¿Qué explica principalmente las mareas?','La gravedad de la Luna y del Sol','Los motores de los barcos','La rotación de las nubes','La atracción de la Luna y del Sol produce variaciones periódicas del nivel del mar.'),
f('¿Por qué el agua de mar es salada?','Contiene sales disueltas','Contiene arena flotante únicamente','Está siempre caliente','Las sales llegan por distintos procesos, entre ellos la erosión y el aporte de ríos.'),
f('¿Qué es una corriente marina?','Un movimiento de masas de agua','Una montaña costera','Un tipo de pez','Las corrientes transportan agua y calor a través de los océanos.'),
f('¿Dónde se encuentra la fosa de las Marianas?','En el Pacífico','En el Mediterráneo','En el mar Báltico','La fosa de las Marianas está en el Pacífico occidental.'),
f('¿Qué organismos construyen los arrecifes de coral?','Animales llamados corales','Plantas terrestres','Hongos del desierto','Muchos corales producen esqueletos de carbonato de calcio que forman arrecifes.'),
f('¿Qué océano rodea el Polo Norte?','Ártico','Índico','Atlántico Sur','El océano Ártico ocupa la región alrededor del Polo Norte.') ]},
{ id:'mapas', title:'Leer el mundo', category:'Geografía', icon:'compass', color:'#159C88', description:'Mapas, coordenadas y orientación.', facts:[
f('¿Qué indica la escala de un mapa?','Relación entre distancia dibujada y real','La temperatura del lugar','La edad del papel','La escala permite convertir una distancia del mapa en distancia real.'),
f('¿Qué mide la latitud?','Distancia angular al ecuador','Altura de los edificios','Profundidad oceánica','La latitud se expresa en grados al norte o al sur del ecuador.'),
f('¿Qué mide la longitud geográfica?','Distancia angular a un meridiano de referencia','Duración del día','Velocidad del viento','La longitud se expresa al este o al oeste del meridiano de referencia.'),
f('¿Qué línea divide la Tierra en hemisferios norte y sur?','El ecuador','El trópico de Capricornio','El meridiano de Greenwich','El ecuador corresponde a la latitud cero.'),
f('¿Qué muestra la leyenda de un mapa?','El significado de sus símbolos','Una lista de habitantes','La hora exacta','La leyenda explica colores y símbolos utilizados en el mapa.'),
f('¿Qué señalan las curvas de nivel?','Puntos de igual altitud','Fronteras lingüísticas','Rutas aéreas únicamente','Las curvas de nivel representan el relieve al unir puntos de igual altura.'),
f('¿Qué dirección se opone al este?','Oeste','Norte','Sur','Este y oeste son direcciones opuestas, al igual que norte y sur.') ]},
{ id:'montanas', title:'Montañas y volcanes', category:'Geografía', icon:'triangle', color:'#159C88', description:'Una Tierra que se mueve.', facts:[
f('¿Cómo se llama la roca fundida bajo la superficie?','Magma','Granito sólido','Hielo','El magma es material rocoso fundido presente bajo la superficie terrestre.'),
f('¿Cómo se llama el magma que llega a la superficie?','Lava','Arcilla','Vapor','Al salir a la superficie durante una erupción, el magma se denomina lava.'),
f('¿Qué proceso forma muchas grandes cordilleras?','Choque de placas tectónicas','Movimiento de las estrellas','Evaporación de ríos','La convergencia de placas puede plegar y elevar grandes regiones de la corteza.'),
f('¿En qué cordillera está el Everest?','Himalaya','Alpes','Andes','El Himalaya se formó por la colisión de las placas india y euroasiática.'),
f('¿En qué continente están los Andes?','América del Sur','Europa','Oceanía','Los Andes se extienden por el borde occidental de América del Sur.'),
f('¿Qué mide un sismógrafo?','Movimiento del suelo','Salinidad del agua','Humedad de las hojas','Los sismógrafos registran las vibraciones producidas por ondas sísmicas.'),
f('¿Qué es la erosión?','Desgaste y transporte de materiales','Creación de luz','Cambio de órbita','Agua, viento y hielo pueden erosionar el relieve y transportar sus materiales.') ]},
{ id:'clima', title:'Tiempo y clima', category:'Geografía', icon:'partly-sunny', color:'#159C88', description:'Nubes, estaciones y patrones.', facts:[
f('¿Qué describe el tiempo meteorológico?','Condiciones atmosféricas de un momento','Promedios de millones de años únicamente','La composición del núcleo terrestre','El tiempo describe condiciones como lluvia, temperatura y viento en un lugar y momento.'),
f('¿Qué describe el clima?','Patrones atmosféricos de largo plazo','Solo la lluvia de hoy','Únicamente la hora del amanecer','El clima se estudia mediante estadísticas de condiciones atmosféricas durante periodos largos.'),
f('¿Qué instrumento mide la presión atmosférica?','Barómetro','Microscopio','Cronómetro','El barómetro mide la presión ejercida por la atmósfera.'),
f('¿Qué causa principalmente las estaciones terrestres?','La inclinación del eje terrestre','Cambios diarios del tamaño del Sol','Las fases de la Luna','La inclinación modifica el ángulo y la duración de la luz solar a lo largo del año.'),
f('¿Cómo se forman muchas nubes?','Al condensarse vapor de agua','Al quemarse oxígeno','Al derretirse arena','El vapor se condensa en gotas o forma cristales de hielo en la atmósfera.'),
f('¿Qué es la precipitación?','Agua que cae de la atmósfera','Luz que atraviesa un cristal','Movimiento de las placas','Lluvia, nieve y granizo son formas de precipitación.'),
f('¿Qué gas contribuye al efecto invernadero?','Dióxido de carbono','Helio','Neón','El dióxido de carbono absorbe radiación infrarroja y contribuye al efecto invernadero.') ]},
{ id:'capitales', title:'Capitales del mundo', category:'Geografía', icon:'location', color:'#159C88', description:'Siete paradas alrededor del planeta.', facts:[
f('¿Cuál es la capital de Japón?','Tokio','Kioto','Osaka','Tokio es la capital de Japón; Kioto fue sede imperial durante siglos.'),
f('¿Cuál es la capital de Australia?','Canberra','Sídney','Melbourne','Canberra fue elegida como capital federal de Australia.'),
f('¿Cuál es la capital de Brasil?','Brasilia','Río de Janeiro','São Paulo','Brasilia se inauguró como capital de Brasil en 1960.'),
f('¿Cuál es la capital de Canadá?','Ottawa','Toronto','Vancouver','Ottawa es la capital federal de Canadá.'),
f('¿Cuál es la capital de Marruecos?','Rabat','Casablanca','Marrakech','Rabat es la capital política de Marruecos.'),
f('¿Cuál es la capital de Argentina?','Buenos Aires','Córdoba','Rosario','La Ciudad Autónoma de Buenos Aires es la capital de Argentina.'),
f('¿Cuál es la capital de Italia?','Roma','Milán','Venecia','Roma es la capital de Italia y conserva un amplio patrimonio histórico.') ]},
{ id:'renacimiento', title:'Renacimiento', category:'Arte', icon:'brush', color:'#DA4A83', description:'Arte, observación y nuevas perspectivas.', facts:[
f('¿En qué región europea surgió el Renacimiento artístico?','Italia','Escandinavia','Islandia','Varias ciudades italianas fueron centros tempranos del Renacimiento.'),
f('¿Quién pintó la Mona Lisa?','Leonardo da Vinci','Claude Monet','Diego Velázquez','Leonardo trabajó en pintura, anatomía, ingeniería y otros campos.'),
f('¿Quién pintó la bóveda de la Capilla Sixtina?','Miguel Ángel','Caravaggio','Goya','Miguel Ángel realizó las pinturas de la bóveda a comienzos del siglo XVI.'),
f('¿Qué permite representar la perspectiva lineal?','Profundidad en una superficie plana','Sonidos mediante colores','Peso exacto de objetos','Las líneas convergentes crean una sensación de espacio tridimensional.'),
f('¿Qué es un mecenas?','Quien apoya económicamente el arte','Un instrumento musical','Un pigmento azul','Los mecenas financiaron numerosas obras y proyectos artísticos.'),
f('¿Qué tradición inspiró a muchos artistas renacentistas?','La grecorromana','La fotografía digital','El cine mudo','El estudio de la Antigüedad clásica influyó en formas, temas e ideas.'),
f('¿Qué ciudad está asociada con la familia Médici?','Florencia','Dublín','Praga','Los Médici fueron importantes promotores de las artes en Florencia.') ]},
{ id:'pintura', title:'Mirar una pintura', category:'Arte', icon:'color-palette', color:'#DA4A83', description:'Técnicas y formas de contar con imágenes.', facts:[
f('¿Qué es un autorretrato?','Una representación del propio artista','Una pintura de frutas únicamente','Una copia sin firma','En un autorretrato el artista se representa a sí mismo.'),
f('¿Qué representa un paisaje?','Un entorno natural o urbano','Solo letras','Una partitura','El paisaje toma como tema principal un espacio o entorno.'),
f('¿Qué técnica usa pigmentos mezclados con aceites?','Óleo','Grabado en seco','Mosaico','El óleo permite trabajar capas y transiciones con un secado relativamente lento.'),
f('¿Qué técnica se pinta sobre yeso húmedo?','Fresco','Collage','Fotografía','En el fresco, los pigmentos se integran en el enlucido mientras seca.'),
f('¿Qué suele representar una naturaleza muerta?','Objetos inanimados','Batallas aéreas','Mapas del metro','Frutas, recipientes y flores son temas frecuentes de la naturaleza muerta.'),
f('¿Qué movimiento se asocia con Monet?','Impresionismo','Cubismo','Surrealismo','Monet exploró los cambios de luz y color en distintas escenas.'),
f('¿Qué es el claroscuro?','Uso de contrastes entre luces y sombras','Mezcla exclusiva de verdes','Pintura sin volumen','El claroscuro ayuda a sugerir volumen y a dirigir la atención.') ]},
{ id:'musica', title:'Lenguaje musical', category:'Arte', icon:'musical-notes', color:'#DA4A83', description:'Ritmo, melodía y escucha.', facts:[
f('¿Qué es el ritmo?','Organización de duraciones y acentos','Solo el volumen','El material de una guitarra','El ritmo organiza sonidos y silencios en el tiempo.'),
f('¿Qué indica el tempo?','La velocidad de la música','La altura de un escenario','El número de oyentes','El tempo expresa la rapidez del pulso musical.'),
f('¿Cuántas líneas tiene un pentagrama?','Cinco','Cuatro','Siete','Las notas se escriben en las cinco líneas y en los espacios del pentagrama.'),
f('¿Qué instrumento pertenece a la familia de cuerda?','Violín','Trompeta','Flauta','El violín produce sonido mediante la vibración de sus cuerdas.'),
f('¿Qué es una melodía?','Una sucesión organizada de notas','Un único golpe siempre','El silencio total','La melodía es una línea musical que puede reconocerse como una unidad.'),
f('¿Qué indica forte en una partitura?','Tocar fuerte','Tocar muy lento','Dejar de tocar','Forte es una indicación de intensidad, no de velocidad.'),
f('¿Qué es el timbre?','La cualidad que distingue sonidos','La duración de un concierto','La cantidad de notas escritas','El timbre permite diferenciar instrumentos que tocan una misma nota.') ]},
{ id:'literatura', title:'Historias y libros', category:'Arte', icon:'book', color:'#DA4A83', description:'Narradores, versos y mundos imaginados.', facts:[
f('¿Quién escribió Don Quijote de la Mancha?','Miguel de Cervantes','Federico García Lorca','Pablo Neruda','Cervantes publicó las dos partes del Quijote en 1605 y 1615.'),
f('¿Qué es un narrador?','La voz que cuenta una historia','Siempre el autor real','La portada de un libro','La voz narradora es una construcción del relato y puede diferir del autor.'),
f('¿Qué caracteriza a una metáfora?','Identificar algo con otra cosa por semejanza','Enumerar fechas únicamente','Repetir una palabra por error','Una metáfora traslada un significado: llamar mar a una multitud es un ejemplo.'),
f('¿Qué es un verso?','Una unidad de un poema','Una página de índice','Un capítulo de novela siempre','Los versos se organizan en líneas y pueden tener ritmo o medida.'),
f('¿Quién escribió Cien años de soledad?','Gabriel García Márquez','Julio Verne','Jane Austen','La novela de García Márquez cuenta la historia de la familia Buendía.'),
f('¿Qué es una fábula?','Un relato breve con enseñanza','Una lista de compras','Un documento notarial','Muchas fábulas presentan animales como personajes y una enseñanza final.'),
f('¿Qué es una autobiografía?','La vida de alguien escrita por esa persona','Una vida escrita siempre por un desconocido','Un relato sin personajes','En una autobiografía una persona narra su propia vida.') ]},
{ id:'cine', title:'Detrás del cine', category:'Arte', icon:'film', color:'#DA4A83', description:'Cómo se construye una película.', facts:[
f('¿Qué es un guion cinematográfico?','Un texto que describe escenas y diálogos','Una lente','Una sala de proyección','El guion sirve de base narrativa y de trabajo para una película.'),
f('¿Qué hace el montaje?','Selecciona y organiza planos','Fabrica exclusivamente vestuario','Afina instrumentos','El montaje construye relaciones temporales y narrativas entre las imágenes.'),
f('¿Qué muestra un primer plano?','Un detalle cercano, como un rostro','Siempre una ciudad completa','Solo los créditos','El primer plano destaca expresiones o detalles.'),
f('¿Qué es la banda sonora?','El conjunto de sonidos de una película','Solo su cartel','La longitud de la cinta','Incluye elementos como diálogos, música y efectos sonoros.'),
f('¿Qué técnica anima objetos fotografiados cuadro a cuadro?','Stop motion','Plano secuencia','Doblaje','El stop motion crea movimiento mediante pequeñas variaciones entre fotografías.'),
f('¿Qué hace un director de fotografía?','Trabaja la imagen y la iluminación','Escribe todas las reseñas','Vende las entradas','La dirección de fotografía define aspectos visuales junto con la dirección de la película.'),
f('¿Qué es un documental?','Una obra que aborda la realidad','Una película siempre sin sonido','Una animación obligatoriamente','El documental trata hechos o sujetos reales mediante decisiones narrativas y visuales.') ]},
{ id:'ecosistemas', title:'Ecosistemas', category:'Naturaleza', icon:'leaf', color:'#31823A', description:'La vida funciona en conexión.', facts:[
f('¿Qué incluye un ecosistema?','Seres vivos y su entorno físico','Solo animales grandes','Únicamente plantas','Un ecosistema comprende organismos, ambiente e interacciones.'),
f('¿Qué es un productor en una red alimentaria?','Un organismo que fabrica materia orgánica','Un animal que solo caza','Una roca','Las plantas producen materia orgánica mediante fotosíntesis.'),
f('¿Qué función tienen muchos hongos descomponedores?','Reciclar nutrientes','Crear luz solar','Detener toda degradación','Los descomponedores transforman restos orgánicos y devuelven nutrientes al entorno.'),
f('¿Qué es la biodiversidad?','La variedad de la vida','Solo el número de árboles','La altura del suelo','La biodiversidad incluye diversidad genética, de especies y de ecosistemas.'),
f('¿Qué es un hábitat?','El lugar donde vive un organismo','Una etapa de la Luna','Una unidad de masa','El hábitat proporciona condiciones y recursos para vivir.'),
f('¿Qué relación beneficia a ambas especies?','Mutualismo','Parasitismo','Depredación','En el mutualismo, ambas especies participantes obtienen beneficios.'),
f('¿Qué es una especie invasora?','Una introducida que causa impactos negativos','Cualquier especie nativa','Toda planta pequeña','Algunas especies introducidas se expanden y alteran los ecosistemas receptores.') ]},
{ id:'animales', title:'Reino animal', category:'Naturaleza', icon:'paw', color:'#31823A', description:'Adaptaciones que sorprenden.', facts:[
f('¿Qué caracteriza a los mamíferos?','Glándulas mamarias','Plumas en todos los adultos','Seis patas en todos los casos','Las hembras de los mamíferos producen leche mediante glándulas mamarias.'),
f('¿Cuántas patas tienen los insectos adultos?','Seis','Ocho','Diez','Los insectos adultos tienen tres pares de patas.'),
f('¿Qué animal es un mamífero?','Delfín','Tiburón','Pulpo','Los delfines respiran aire mediante pulmones y son mamíferos.'),
f('¿Qué grupo se caracteriza por tener plumas?','Aves','Anfibios','Moluscos','Las plumas son una característica distintiva de las aves actuales.'),
f('¿Qué es la metamorfosis?','Una transformación durante el desarrollo','Una forma de erosión','Un cambio de estación','Algunos animales cambian notablemente de forma entre etapas de su vida.'),
f('¿Qué animal tiene ocho brazos?','Pulpo','Cangrejo','Medusa','Los pulpos son moluscos cefalópodos con ocho brazos.'),
f('¿Qué es el camuflaje?','Una adaptación que dificulta ser detectado','Una forma de fotosíntesis','Una migración anual','Colores, formas o conductas pueden ayudar a confundirse con el entorno.') ]},
{ id:'plantas', title:'La vida de las plantas', category:'Naturaleza', icon:'flower', color:'#31823A', description:'Raíces, semillas y energía del Sol.', facts:[
f('¿Qué captan las plantas para realizar fotosíntesis?','Energía luminosa','Ondas de radio solamente','Gravedad lunar','La fotosíntesis transforma energía luminosa en energía química.'),
f('¿Qué absorben principalmente las raíces del suelo?','Agua y minerales','Luz visible','Oxígeno puro únicamente','Las raíces incorporan agua y nutrientes minerales, además de anclar la planta.'),
f('¿Qué pigmento da el color verde a muchas hojas?','Clorofila','Melanina','Hemoglobina','La clorofila absorbe luz útil para la fotosíntesis.'),
f('¿Qué es la polinización?','Transferencia de polen','Caída de las hojas','Crecimiento de las raíces','El polen se transfiere a estructuras reproductoras compatibles.'),
f('¿Qué contiene una semilla?','Un embrión vegetal','Un animal adulto','Solo aire','La semilla protege un embrión y suele contener reservas nutritivas.'),
f('¿Qué son los estomas?','Poros que regulan intercambios de gases','Huesos de una flor','Anillos de piedra','Los estomas permiten el intercambio de gases y regulan la pérdida de agua.'),
f('¿De qué estructura procede generalmente un fruto?','Del ovario de una flor','De una raíz cortada','De una hoja seca','Tras la fecundación, el ovario floral suele desarrollarse y formar el fruto.') ]},
{ id:'inventos', title:'Ideas que cambiaron todo', category:'Tecnología', icon:'bulb', color:'#167CBD', description:'Inventos y sus usos cotidianos.', facts:[
f('¿Qué permitió la imprenta de tipos móviles en Europa?','Reproducir textos con mayor rapidez','Grabar sonido','Transmitir electricidad','La imprenta facilitó la producción de libros y la circulación de textos.'),
f('¿Qué instrumento permite observar objetos muy pequeños?','Microscopio','Barómetro','Brújula','El microscopio amplía imágenes de estructuras pequeñas.'),
f('¿Qué instrumento se usa para observar astros lejanos?','Telescopio','Estetoscopio','Termómetro','Los telescopios recogen radiación para estudiar objetos distantes.'),
f('¿Qué transforma un generador eléctrico?','Energía mecánica en eléctrica','Agua en oro','Luz en masa siempre','Muchos generadores utilizan movimiento e inducción electromagnética.'),
f('¿Qué permitió el telégrafo eléctrico?','Enviar mensajes mediante señales eléctricas','Transportar personas por aire','Imprimir fotografías a color','El telégrafo transmitía señales por cables a grandes distancias.'),
f('¿Qué mide una brújula mediante su aguja?','La dirección del campo magnético local','La temperatura del aire','La profundidad de un río','La aguja se alinea con el campo magnético y ayuda a orientarse.'),
f('¿Qué permite la refrigeración?','Extraer calor de un espacio','Crear frío como sustancia','Detener el paso del tiempo','Un refrigerador transfiere calor de su interior al ambiente exterior.') ]},
{ id:'internet', title:'Entender internet', category:'Tecnología', icon:'globe', color:'#167CBD', description:'Lo que pasa detrás de una pantalla.', facts:[
f('¿Qué es internet?','Una red de redes','Una única computadora','Una marca de pantalla','Internet conecta redes que intercambian datos mediante protocolos compartidos.'),
f('¿Qué es un navegador web?','Un programa para acceder a páginas web','Un cable de fibra','Una contraseña','El navegador solicita y presenta contenido de la web.'),
f('¿Para qué sirve el DNS?','Relacionar nombres de dominio con direcciones','Editar fotografías','Aumentar el brillo','El DNS ayuda a localizar servicios a partir de nombres legibles.'),
f('¿Qué significa descargar un archivo?','Recibir una copia desde otro sistema','Borrar siempre el original','Apagar el servidor','Al descargar, se transfieren datos al dispositivo receptor.'),
f('¿Qué es una URL?','La dirección de un recurso','Una pieza del teclado','Un tipo de batería','Una URL identifica cómo y dónde acceder a un recurso.'),
f('¿Qué describe mejor un servidor?','Un sistema que atiende solicitudes','Una pantalla portátil','Un archivo de audio','Los servidores proporcionan recursos o servicios a otros sistemas.'),
f('¿Qué es el código binario?','Representación con dos valores','Un alfabeto de siete letras','Una imagen sin píxeles','Los sistemas digitales representan información con bits, habitualmente escritos como 0 y 1.') ]}
];

// Catálogo extendido: rutas introductorias para explorar más de 100 intereses.
const extraSpecs: Array<[string,string,string,string]> = [
 ['programacion','Programación desde cero','Tecnología','code'],['javascript','JavaScript','Tecnología','code'],['python','Python','Tecnología','code'],['html-css','HTML y CSS','Tecnología','code'],['algoritmos','Algoritmos','Tecnología','git-branch'],['git','Git y control de versiones','Tecnología','git-branch'],['bases-datos','Bases de datos','Tecnología','server'],['ciberseguridad','Ciberseguridad','Tecnología','shield-checkmark'],['inteligencia-artificial','Inteligencia artificial','Tecnología','sparkles'],['robotica','Robótica','Tecnología','construct'],['desarrollo-movil','Desarrollo móvil','Tecnología','phone-portrait'],['ux-ui','UX y UI','Diseño','color-palette'],['maquillaje','Maquillaje desde cero','Belleza','color-palette'],['teoria-color','Teoría del color','Belleza','color-filter'],['skincare','Cuidado de la piel','Belleza','water'],['brochas','Brochas y herramientas','Belleza','brush'],['maquillaje-ojos','Maquillaje de ojos','Belleza','eye'],['maquillaje-social','Maquillaje social','Belleza','people'],['maquillaje-editorial','Maquillaje editorial','Belleza','images'],['unas','Uñas','Belleza','hand-left'],['cabello','Cuidado del cabello','Belleza','cut'],['perfumeria','Perfumería','Belleza','flask'],['historia-videojuegos','Historia de los videojuegos','Videojuegos','game-controller'],['diseno-videojuegos','Diseño de videojuegos','Videojuegos','game-controller'],['nintendo','Nintendo','Videojuegos','logo-nintendo-switch'],['playstation','PlayStation','Videojuegos','logo-playstation'],['xbox','Xbox','Videojuegos','logo-xbox'],['pc-gaming','PC gaming','Videojuegos','desktop'],['juegos-indie','Juegos indie','Videojuegos','rocket'],['rpg','RPG','Videojuegos','shield'],['estrategia-videojuegos','Estrategia en videojuegos','Videojuegos','map'],['esports','Esports','Videojuegos','trophy'],['narrativa-videojuegos','Narrativa en videojuegos','Videojuegos','book'],['musica-videojuegos','Música de videojuegos','Videojuegos','musical-notes'],
 ['cocina','Cocina práctica','Vida','restaurant'],['reposteria','Repostería','Vida','cake'],['cafe','Café','Vida','cafe'],['nutricion','Nutrición','Vida','nutrition'],['fitness','Entrenamiento físico','Vida','fitness'],['yoga','Yoga','Vida','body'],['fotografia','Fotografía','Creatividad','camera'],['edicion-foto','Edición fotográfica','Creatividad','images'],['ilustracion','Ilustración','Creatividad','brush'],['tipografia','Tipografía','Creatividad','text'],['arquitectura','Arquitectura','Creatividad','business'],['moda','Moda','Creatividad','shirt'],['cine-historia','Historia del cine','Cine y medios','film'],['series','Series de televisión','Cine y medios','tv'],['animacion','Animación','Cine y medios','film'],['guion','Guion y storytelling','Cine y medios','create'],['documentales','Documentales','Cine y medios','videocam'],['musica-generos','Música','Cine y medios','musical-notes'],['historia-rock','Historia del rock','Cine y medios','musical-note'],['produccion-musical','Producción musical','Cine y medios','mic'],
 ['futbol','Fútbol','Deportes','football'],['baloncesto','Baloncesto','Deportes','basketball'],['tenis','Tenis','Deportes','tennisball'],['atletismo','Atletismo','Deportes','walk'],['ciclismo','Ciclismo','Deportes','bicycle'],['natacion','Natación','Deportes','water'],['ajedrez','Ajedrez','Deportes','grid'],['olimpismo','Juegos Olímpicos','Deportes','trophy'],['psicologia','Psicología','Sociedad','headset'],['pensamiento-critico','Pensamiento crítico','Sociedad','bulb'],['comunicacion','Comunicación','Sociedad','chatbubbles'],['economia','Economía cotidiana','Sociedad','cash'],['finanzas','Finanzas personales','Sociedad','wallet'],['emprendimiento','Emprendimiento','Sociedad','rocket'],['marketing','Marketing','Sociedad','megaphone'],['derechos-humanos','Derechos humanos','Sociedad','people'],['sociologia','Sociología','Sociedad','people-circle'],['educacion','Ciencia de la educación','Sociedad','school'],['periodismo','Periodismo','Sociedad','newspaper'],['oratoria','Oratoria','Sociedad','mic'],
 ['frances','Francés básico','Idiomas','language'],['italiano','Italiano básico','Idiomas','language'],['portugues','Portugués básico','Idiomas','language'],['japones','Japonés básico','Idiomas','language'],['lengua-senas','Lengua de señas','Idiomas','hand-left'],['etimologia','Etimología','Idiomas','book'],['escritura','Escritura creativa','Idiomas','create'],['lectura','Lectura veloz','Idiomas','book'],['mitologia','Mitología','Historia','star'],['edad-media','Edad Media','Historia','library'],['revoluciones','Revoluciones modernas','Historia','flag'],['marcas-ropa','Marcas de ropa','Moda','shirt'],['autos','Autos y marcas','Mundo','car'],['leyendas','Leyendas del mundo','Historia','book'],['historia-mexico','Historia de México','Historia','flag'],['historia-america','Historia de América','Historia','map'],['arqueologia','Arqueología','Historia','search'],['antropologia','Antropología','Historia','people'],['astronomia','Astronomía','Ciencia','planet'],['biologia','Biología','Ciencia','leaf'],['geologia','Geología','Ciencia','layers'],['climatologia','Climatología','Ciencia','partly-sunny'],['salud-publica','Salud pública','Ciencia','medkit'],
 ['viajes','Viajes inteligentes','Mundo','airplane'],['capitales-mundo','Capitales del mundo','Mundo','location'],['banderas','Banderas','Mundo','flag'],['arquitectura-mundo','Arquitectura del mundo','Mundo','business'],['culturas','Culturas del mundo','Mundo','earth'],['comida-mundo','Cocinas del mundo','Mundo','restaurant'],['sostenibilidad','Sostenibilidad','Mundo','leaf'],['cambio-climatico','Cambio climático','Mundo','thermometer'],['espacio','Exploración espacial','Mundo','rocket'],['inventos-modernos','Inventos modernos','Tecnología','bulb'],['criptografia','Criptografía','Tecnología','lock-closed'],['nube','Computación en la nube','Tecnología','cloud'],['datos','Ciencia de datos','Tecnología','analytics'],['video','Creación de video','Creatividad','videocam'],['podcasting','Podcasting','Cine y medios','mic'],['jardineria','Jardinería','Vida','flower'],['mascotas','Cuidado de mascotas','Vida','paw'],['manualidades','Manualidades','Creatividad','cut'],['caligrafia','Caligrafía','Creatividad','create'],['astronomia-observacion','Observación del cielo','Ciencia','moon']
];
const extraFacts = (title: string, category: string): Fact[] => [
 f(`¿Cuál de estas opciones está relacionada con ${title}?`,'Una referencia reconocida del tema','Una respuesta inventada','Un dato sin relación','La respuesta corresponde a una referencia real que aparece en este recorrido.'),
 f(`¿Qué nombre aparece asociado a ${title}?`,'Un personaje o lugar conocido','Un nombre al azar','Una palabra inventada','La trivia usa nombres y referencias que se pueden reconocer.'),
 f(`¿Cuál de estas obras, marcas o lugares pertenece a ${title}?`,'Una referencia real','Una opción inventada','Un dato de otro tema','La respuesta identifica una referencia concreta del área.'),
 f(`¿Qué opción corresponde a ${title}?`,'Un dato verificable','Una opinión personal','Una frase genérica','La respuesta es un dato comprobable y relacionado con el tema.'),
 f(`¿Cuál de estos nombres conviene recordar de ${title}?`,'Una figura o referencia destacada','Un nombre inventado','Un número sin contexto','La pregunta presenta una referencia concreta para recordar.'),
 f(`¿Qué dato pertenece a ${title}?`,'Un hecho del tema','Un consejo de estudio','Una emoción','La respuesta es un hecho, no una recomendación de aprendizaje.'),
 f(`¿Cuál es una referencia popular de ${title}?`,'Una figura, obra, marca o lugar conocido','Una frase motivacional','Una respuesta sin relación','Las opciones apuntan a datos culturales reconocibles.')
];
// Se publican solo rutas con banco factual propio; las demás esperan edición.
const curatedExtraIds = new Set(['programacion','ajedrez','revoluciones','banderas','marcas-ropa','autos','esports','olimpismo','musica-generos','historia-rock','nintendo']);
topics.push(...extraSpecs.filter(([id])=>curatedExtraIds.has(id)).map(([id,title,category,icon]) => ({ id,title,category,icon,color: category==='Tecnología'?'#167CBD':category==='Belleza'?'#E04F8A':category==='Videojuegos'?'#635BFF':'#159C88',description:`Una ruta de siete días para descubrir ${title.toLowerCase()}.`,facts:extraFacts(title,category)})));
export const categories = ['Todos', ...new Set(topics.map(t => t.category))];
export type Question = Fact & { id: string; format: 'choice' | 'boolean'; options: string[]; correct: number; statement?: string };
function courseFact(topic: Topic, index: number): Fact {
 const concrete: Record<string, Fact[]> = {
  'musica-generos': [
   f('¿Quién es conocido como el Rey del Pop?','Michael Jackson','Elvis Presley','David Bowie','Michael Jackson recibió ese apodo por su enorme influencia en la música pop.'),
   f('¿Quién compuso la Novena Sinfonía?','Ludwig van Beethoven','Wolfgang Amadeus Mozart','Johann Sebastian Bach','Beethoven compuso la Novena Sinfonía, estrenada en 1824.'),
   f('¿Qué grupo grabó Bohemian Rhapsody?','Queen','The Beatles','ABBA','Queen publicó Bohemian Rhapsody en 1975.'),
   f('¿Quién escribió Like a Rolling Stone?','Bob Dylan','Prince','Stevie Wonder','Bob Dylan lanzó la canción en 1965.'),
   f('¿Qué instrumento tiene teclas, cuerdas y martillos?','El piano','La flauta','El violín','En un piano, los martillos golpean cuerdas al presionar las teclas.'),
   f('¿Qué artista publicó el álbum Thriller?','Michael Jackson','Madonna','Beyoncé','Thriller es uno de los álbumes más influyentes de Michael Jackson.'),
   f('¿Qué género nació en el Bronx durante los años setenta?','Hip hop','Tango','Reggae','El hip hop surgió como cultura musical y artística en el Bronx.')
  ],
  'historia-rock': [
   f('¿Quién fue el vocalista principal de Queen?','Freddie Mercury','Mick Jagger','Kurt Cobain','Freddie Mercury lideró Queen con una voz y presencia escénica memorables.'),
   f('¿Qué banda lanzó Abbey Road?','The Beatles','The Rolling Stones','Nirvana','Abbey Road fue el último álbum de estudio grabado por The Beatles.'),
   f('¿Quién es conocido como el Rey del Rock and Roll?','Elvis Presley','Johnny Cash','Chuck Berry','Elvis Presley popularizó el rock and roll a escala mundial.'),
   f('¿Qué banda grabó Smells Like Teen Spirit?','Nirvana','Radiohead','Oasis','La canción apareció en Nevermind, el álbum de Nirvana de 1991.'),
   f('¿Quién compuso Purple Haze?','Jimi Hendrix','Eric Clapton','Carlos Santana','Jimi Hendrix grabó Purple Haze en 1967.'),
   f('¿En qué década se popularizó el punk británico?','Años setenta','Años treinta','Años dos mil','El punk británico se volvió visible a mediados y finales de los setenta.'),
   f('¿Qué grupo creó Stairway to Heaven?','Led Zeppelin','The Who','U2','Stairway to Heaven pertenece al álbum Led Zeppelin IV.')
  ],
  'nintendo': [
   f('¿Quién es el creador de Mario?','Shigeru Miyamoto','Hideo Kojima','Gabe Newell','Miyamoto diseñó a Mario y participó en muchas series de Nintendo.'),
   f('¿En qué consola debutó The Legend of Zelda?','NES','Game Boy Advance','Wii U','The Legend of Zelda apareció originalmente en Nintendo Entertainment System.'),
   f('¿Cómo se llama la princesa de Super Mario?','Peach','Zelda','Daisy Duck','La Princesa Peach es un personaje central del Reino Champiñón.'),
   f('¿Qué criatura es Pikachu?','Un Pokémon eléctrico','Un androide','Un dragón medieval','Pikachu es un Pokémon de tipo eléctrico.'),
   f('¿Qué consola portátil popularizó los cartuchos intercambiables?','Game Boy','Virtual Boy','Wii','Game Boy se lanzó en 1989 con juegos en cartucho.'),
   f('¿Quién dirige muchas aventuras de Zelda?','Link','Mario','Kirby','Link es el héroe jugable habitual de la saga The Legend of Zelda.'),
   f('¿Qué juego de carreras incluye caparazones y plátanos?','Mario Kart','F-Zero','Metroid Prime','Mario Kart combina carreras con objetos para cambiar la partida.')
  ],
  'programacion': [
   f('¿Quién creó Python?','Guido van Rossum','Dennis Ritchie','Linus Torvalds','Guido van Rossum creó Python y publicó su primera versión en 1991.'),
   f('¿Quién creó JavaScript?','Brendan Eich','James Gosling','Bjarne Stroustrup','Brendan Eich desarrolló JavaScript para Netscape en 1995.'),
   f('¿Qué lenguaje creó Dennis Ritchie?','C','C++','Ruby','C fue creado por Dennis Ritchie en Bell Labs.'),
   f('¿Qué significa HTML?','HyperText Markup Language','High Transfer Machine Language','Home Tool Markup Link','HTML estructura el contenido de una página web.'),
   f('¿Quién inició el proyecto Linux?','Linus Torvalds','Mark Zuckerberg','Tim Berners-Lee','Linus Torvalds comenzó el desarrollo del núcleo Linux.'),
   f('¿Qué estructura repite instrucciones mientras se cumpla una condición?','Un bucle','Una constante','Un comentario','Los bucles permiten repetir un bloque de código de forma controlada.'),
   f('¿Qué devuelve una función?','Un resultado o valor','Un cable físico','Un archivo comprimido','Una función puede calcular y devolver un valor para que otro código lo use.')
  ],
  'ajedrez': [
   f('¿Cómo se mueve el caballo en ajedrez?','En forma de L','Solo en diagonal','En línea recta sin límite','El caballo avanza dos casillas en una dirección y una perpendicular, y puede saltar piezas.'),
   f('¿Cómo se mueve el alfil?','En diagonales','Solo hacia adelante','En forma de L','El alfil permanece en casillas del mismo color durante toda la partida.'),
   f('¿Cómo se mueve la torre?','En filas y columnas','Solo en diagonales','Una casilla en cualquier dirección','La torre recorre filas o columnas hasta encontrar el borde o una pieza.'),
   f('¿Cómo se mueve la dama?','Como torre y alfil','Solo como caballo','Una casilla por turno','La dama combina los movimientos de la torre y del alfil.'),
   f('¿Qué significa jaque?','El rey está amenazado','Se capturó una dama','Terminó el tiempo','Un rey en jaque debe salir de la amenaza en la siguiente jugada.'),
   f('¿Qué es el enroque?','Un movimiento especial de rey y torre','Un cambio de damas','Una captura al paso','En el enroque el rey se desplaza dos casillas hacia una torre y la torre cruza al otro lado.'),
   f('¿Qué pieza empieza en la casilla e1 para las blancas?','El rey','La dama','El caballo','En la posición inicial, el rey blanco ocupa e1 y la dama d1.')
  ],
  'revoluciones': [
   f('¿En qué país comenzó la Revolución francesa?','Francia','Italia','Rusia','La Revolución francesa comenzó en 1789 en Francia.'),
   f('¿Qué hecho se asocia con el inicio de la Revolución francesa?','La toma de la Bastilla','La llegada a la Luna','La caída de Constantinopla','La Bastilla fue tomada el 14 de julio de 1789.'),
   f('¿Quién fue una figura principal de la Revolución rusa?','Vladímir Lenin','Julio César','Simón Bolívar','Lenin dirigió a los bolcheviques durante la revolución de 1917.'),
   f('¿Qué documento proclamó derechos durante la Revolución francesa?','Declaración de los Derechos del Hombre','Carta Magna de Japón','Tratado de Versalles','La declaración de 1789 defendió libertad e igualdad jurídica.'),
   f('¿Qué revolución logró la independencia de trece colonias británicas?','La Revolución estadounidense','La Revolución industrial','La Revolución neolítica','Las trece colonias declararon su independencia en 1776.'),
   f('¿Qué invento impulsó la Revolución industrial?','La máquina de vapor','El teléfono móvil','El satélite','La máquina de vapor transformó fábricas y transportes.'),
   f('¿Qué símbolo se asocia con la Revolución mexicana?','Emiliano Zapata','Marco Polo','Leonardo da Vinci','Zapata fue uno de los líderes campesinos de la Revolución mexicana.')
  ],
  'banderas': [
   f('¿Qué país tiene una bandera con una hoja de arce?','Canadá','Austria','Grecia','La hoja de arce es el símbolo central de la bandera canadiense.'),
   f('¿Qué país usa un círculo rojo sobre fondo blanco?','Japón','Suiza','Brasil','El círculo representa el Sol en la bandera japonesa.'),
   f('¿Qué país tiene una bandera verde, blanca y roja en franjas verticales?','Italia','India','Irlanda','La bandera italiana usa franjas verticales verde, blanco y rojo.'),
   f('¿Qué país tiene una cruz blanca sobre fondo rojo?','Suiza','Suecia','Perú','La cruz suiza es blanca y aparece centrada sobre rojo.'),
   f('¿Qué país tiene un cedro en su bandera?','Líbano','Egipto','Portugal','El cedro del Líbano aparece en el centro de su bandera.'),
   f('¿Qué país tiene un sol con rostro en su bandera?','Argentina','México','Noruega','La bandera argentina incluye el Sol de Mayo.'),
   f('¿Qué país tiene un dragón en su bandera?','Bután','Mongolia','Ecuador','El dragón blanco es el emblema de la bandera de Bután.')
  ],
  'marcas-ropa': [
   f('¿Qué marca usa un cocodrilo como logotipo?','Lacoste','Nike','Levi’s','El cocodrilo verde es el emblema más conocido de Lacoste.'),
   f('¿Qué marca creó las zapatillas Air Jordan?','Nike','Adidas','Puma','Nike lanzó Air Jordan junto con Michael Jordan.'),
   f('¿Qué marca es famosa por sus pantalones vaqueros 501?','Levi’s','Gucci','Uniqlo','Los 501 son un modelo histórico de Levi’s.'),
   f('¿Qué marca tiene tres franjas como símbolo?','Adidas','Prada','Zara','Las tres franjas son el signo más reconocible de Adidas.'),
   f('¿Qué casa de moda tiene un monograma LV?','Louis Vuitton','Chanel','Versace','LV corresponde a Louis Vuitton.'),
   f('¿Qué marca usa una estrella como logotipo en sus zapatillas clásicas?','Converse','Reebok','H&M','Las Chuck Taylor de Converse llevan una estrella en el parche lateral.'),
   f('¿Qué marca de lujo tiene un caballo y un jinete como emblema?','Polo Ralph Lauren','Mango','Gap','El jugador de polo identifica a Ralph Lauren.')
  ],
  'autos': [
   f('¿Qué marca fabrica el modelo Mustang?','Ford','Toyota','Volvo','El Ford Mustang es un automóvil deportivo estadounidense.'),
   f('¿Qué marca tiene cuatro aros entrelazados?','Audi','BMW','Seat','Los cuatro aros son el logotipo de Audi.'),
   f('¿Qué marca fabrica el modelo Corolla?','Toyota','Honda','Renault','El Corolla es uno de los modelos más conocidos de Toyota.'),
   f('¿Qué marca usa un caballo rampante?','Ferrari','Tesla','Kia','El caballo rampante es el símbolo de Ferrari.'),
   f('¿Qué marca creó el modelo Beetle o Escarabajo?','Volkswagen','Mazda','Jeep','El Beetle fue fabricado por Volkswagen.'),
   f('¿Qué marca produce vehículos con el logotipo de una estrella de tres puntas?','Mercedes-Benz','Nissan','Subaru','La estrella de tres puntas identifica a Mercedes-Benz.'),
   f('¿Qué marca fabrica el modelo Civic?','Honda','Lexus','Fiat','El Civic es un modelo compacto de Honda.')
  ],
  'esports': [
   f('¿Qué juego organiza el torneo mundial Worlds?','League of Legends','Minecraft','The Sims','Worlds es el campeonato mundial anual de League of Legends.'),
   f('¿Qué empresa desarrolla League of Legends?','Riot Games','Valve','Nintendo','Riot Games creó y publica League of Legends.'),
   f('¿Qué juego tiene el torneo The International?','Dota 2','Fortnite','Overwatch','The International es el gran campeonato mundial de Dota 2.'),
   f('¿Qué compañía desarrolló Counter-Strike 2?','Valve','Ubisoft','Capcom','Valve desarrolla y publica Counter-Strike 2.'),
   f('¿Qué juego popularizó el torneo Fortnite World Cup?','Fortnite','FIFA','Valorant','La Fortnite World Cup reunió a los mejores jugadores de Fortnite.'),
   f('¿Qué juego competitivo usa agentes con habilidades especiales?','VALORANT','Tetris','Mario Kart','VALORANT combina disparos tácticos con agentes y habilidades únicas.'),
   f('¿Qué rol suele proteger y ayudar al equipo en League of Legends?','Support','Jungla','Top','El support coloca visión y ayuda a sus compañeros durante la partida.')
  ],
  'olimpismo': [
   f('¿En qué ciudad se celebraron los primeros Juegos Olímpicos modernos?','Atenas','París','Roma','Los primeros Juegos Olímpicos modernos se celebraron en Atenas en 1896.'),
   f('¿Qué símbolo tiene cinco aros de colores?','Los Juegos Olímpicos','La Fórmula 1','La Copa Davis','Los cinco aros representan la unión de los continentes.'),
   f('¿Cada cuántos años se celebran normalmente los Juegos Olímpicos de verano?','Cuatro años','Dos años','Diez años','El ciclo olímpico tradicional dura cuatro años.'),
   f('¿Qué atleta ganó ocho oros en los Juegos de Pekín 2008?','Michael Phelps','Usain Bolt','Carl Lewis','El nadador estadounidense Michael Phelps ganó ocho medallas de oro en Pekín.'),
   f('¿Qué atleta jamaicano es famoso por sus récords en velocidad?','Usain Bolt','Rafael Nadal','Michael Jordan','Usain Bolt estableció récords mundiales en 100 y 200 metros.'),
   f('¿En qué deporte se usa una espada, un florete o un sable?','Esgrima','Remo','Hockey','La esgrima tiene tres armas olímpicas: espada, florete y sable.'),
   f('¿Qué ciudad organizó los Juegos Olímpicos de 2012?','Londres','Tokio','Sídney','Londres fue la sede de los Juegos Olímpicos de 2012.')
  ]
 };
 const facts = concrete[topic.id];
 if (facts) return facts[index % facts.length];
 if (index < topic.facts.length) return topic.facts[index];
 const isCode = /program|javascript|python|html|css|algorit|git|base de datos|ciberseg|inteligencia artificial|robótica|móvil|datos|nube/i.test(topic.title);
 if (isCode) {
  const exercises = [
   ['¿Qué conviene hacer antes de escribir código?','Dividir el problema en pasos','Copiar sin entender','Evitar probar','Separar un problema en pasos hace visible la lógica y permite probar cada parte.'],
   ['En un ejercicio de código, ¿qué indica un error?','Una pista para corregir el programa','Que nunca se puede aprender','Que hay que borrar todo','Leer el mensaje y probar una hipótesis convierte el error en aprendizaje.'],
   ['¿Qué práctica mejora una solución?','Probar casos pequeños','Cambiar todo a la vez','No ejecutar el programa','Los casos pequeños ayudan a verificar cada decisión antes de escalar.'],
   ['¿Qué significa depurar?','Encontrar y corregir fallos','Diseñar un logotipo','Comprimir una imagen','Depurar es observar el comportamiento y ajustar la causa del fallo.'],
   ['¿Qué hace una variable?','Guarda un valor que puede cambiar','Apaga el dispositivo','Dibuja siempre una pantalla','Las variables permiten nombrar y reutilizar datos durante la ejecución.'],
   ['¿Qué es una función?','Un bloque reutilizable de instrucciones','Un tipo de teclado','Una carpeta vacía','Las funciones encapsulan una tarea y pueden recibir datos.'],
   ['¿Cómo se aprende programación de forma sólida?','Construyendo y explicando proyectos','Solo leyendo definiciones','Memorizando errores','Crear proyectos pequeños y explicar cada decisión consolida la comprensión.']
  ][index % 7];
  return f(exercises[0], exercises[1], exercises[2], exercises[3], exercises[4]);
 }
 return f(`¿Qué descubrimiento nuevo propone la clase ${index + 1} de ${topic.title}?`,`Una idea aplicable de ${topic.title}`,`Un dato sin contexto`,`Repetir la clase anterior`,`Cada paso suma una idea nueva y una aplicación para que el recorrido tenga progreso.`);
}
export function makeQuestion(topic: Topic, index: number): Question {
 const fact = courseFact(topic, index);
 if (index % 3 === 2) {
  const truth = index % 2 === 0;
  return { ...fact, id: `${topic.id}:${index}`, format:'boolean', statement: `${fact.prompt}\nRespuesta propuesta: ${truth ? fact.answer : fact.wrong[0]}`, options:['Verdadero','Falso'], correct: truth ? 0 : 1 };
 }
 const position = (index + topic.id.length) % 3;
 const related = topic.facts.map(item=>item.answer).filter(answer=>answer!==fact.answer);
 const distractors = related.length>=2 ? [related[(index+1)%related.length],related[(index+3)%related.length]] : fact.wrong;
 const options = [...new Set(distractors)]; while(options.length<2) options.push(fact.wrong[options.length]); options.splice(position, 0, fact.answer);
 return { ...fact, id:`${topic.id}:${index}`, format:'choice', options, correct:position };
}
export function lessonQuestions(topic: Topic, lesson: number): Question[] {
 // Cada clase introduce un concepto y dos preguntas de apoyo.
 const indexes = [lesson, (lesson + 6) % 7, (lesson + 5) % 7];
 return indexes.map(i => makeQuestion(topic, i));
}

export function dailyQuestions(): Question[] {
 const pool = topics.flatMap(t => t.facts.map((_, i) => makeQuestion(t, i)));
 return [...pool].sort(() => Math.random() - 0.5).slice(0, 15).map((q, i) => ({ ...q, id: `daily:${i}:${q.id}` }));
}
