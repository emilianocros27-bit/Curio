# Curio

App de cultura general con React Native y Expo SDK 57. Identidad propia: el libro Chispa, violeta eléctrico, amarillo, Nunito y botones físicos.

## Ejecutar

```sh
npm ci
npm run web
```

La vista local de esta entrega está en http://localhost:8094. Para iOS: `npm run ios` con Xcode y un simulador compatible. La exportación iOS genera el bundle JavaScript, pero no sustituye una compilación y prueba en dispositivo.

## Implementado

- Creación y edición de perfil: nombre, seis avatares, intereses y meta semanal.
- Reto diario separado de 15 preguntas aleatorias de cultura general, con dificultad creciente, que activa la racha general una vez por día.
- Más de 100 temas en categorías de historia, ciencia, tecnología, belleza, videojuegos, creatividad, deportes, vida, sociedad, idiomas y mundo. Cada tema tiene una trivia independiente de 10 preguntas para activar su racha por tema; la racha general y las rachas temáticas no se mezclan.
- Los 25 temas originales conservan preguntas editoriales; el catálogo extendido incorpora rutas introductorias de siete preguntas por tema para explorar nuevos intereses.
- Opción múltiple y verdadero/falso, feedback inmediato y celebración de aciertos y clases.
- XP desde cero: 20 por clase o 10 por repaso, más 5 por acierto. Máximo un recibo de clase y uno de repaso por tema y fecha.
- Racha general, racha por tema, calendario semanal con historial e insignias permanentes por siete días consecutivos.
- Búsqueda insensible a acentos, filtros, itinerario de clases y repaso de conceptos fallados.
- Almacenamiento local persistente y Firebase Authentication anónimo + Firestore. Sin Analytics.
- Identidad, icono PNG, splash y HTML autónomo del logo.

## Fechas y aprendizaje

Los días se calculan con la fecha local del dispositivo en el momento de completar una clase, no como periodos móviles de 24 horas. Un repaso suma actividad general, pero no días para amaestrar un tema. La racha sigue vigente durante el día posterior a la última actividad. Si se interrumpe, se reinicia la racha; las clases e insignias no se pierden. Cada tema permite una clase nueva al día y un repaso. Cambiar la zona horaria puede cambiar qué fecha se considera hoy.

## Persistencia y sincronización

El guardado local termina antes de mostrar éxito. Si falla el almacenamiento, la clase permanece abierta con sus respuestas. Al iniciar, volver al primer plano y periódicamente, Curio intenta sincronizar. La cola persistente son los propios recibos locales, identificados por tema, día y tipo. Se combinan sin duplicar XP y se suben los recibos que faltan.

La cuenta anónima se conserva por dispositivo. No tiene todavía vinculación con Apple/correo; borrar sus credenciales puede impedir recuperar el acceso. El perfil es privado en esta entrega. No hay usuarios ficticios ni métricas públicas presentadas como verificadas.

Proyecto Firebase: `sabio-8fd6f`. Colecciones: `curioUsers/{uid}` y `curioUsers/{uid}/completions/{receipt}`. Las reglas existentes de `users/{uid}` fueron conservadas y las reglas de Curio fueron publicadas. La clave web de Firebase es configuración pública; la protección reside en autenticación y reglas.

## Seguridad y verificaciones

```sh
npm test
npm run typecheck
node tests/rules.remote.cjs
```

La prueba remota requiere Firebase CLI instalado y una sesión autorizada para el proyecto. Usa la API oficial de pruebas de reglas, sin escribir los documentos simulados. No imprime credenciales. Las pruebas no modifican reglas; para publicar cambios revisados se usa `firebase deploy --only firestore:rules --project sabio-8fd6f`.

Las reglas validan dueño, esquema exacto, temas conocidos, rangos, índices, respuestas, puntaje calculado y lista de errores. Los recibos no pueden editarse salvo reintentos idénticos. El puntaje no se acepta como un número libre. Ver `SECURITY-REVIEW.md` para límites reales.

Referencia de Expo SDK 57: https://docs.expo.dev/versions/v57.0.0/
Referencia de las pruebas de reglas: https://firebase.google.com/docs/reference/rules/rest/v1/projects/test
Referencia de persistencia Firestore: https://firebase.google.com/docs/firestore/manage-data/enable-offline

## Antes de App Store

- Confirmar disponibilidad y titularidad del bundle identifier elegido, `com.curio.culturageneral`, en Apple Developer.
- Vincular EAS a la cuenta del propietario, configurar credenciales de firma y ejecutar una build real con TestFlight. `eas.json` ya contiene perfiles de desarrollo, simulador y producción.
- Vinculación opcional de cuenta y eliminación de cuenta/datos desde la app.
- Política de privacidad pública con identidad/contacto del responsable, conservación de datos y declaraciones definitivas de App Store.
- Perfiles públicos opcionales y estadísticas verificadas por servidor antes de rankings o recompensas con valor.
- Revisión editorial de las preguntas, validación de accesibilidad con VoiceOver y pruebas en iPhone real, incluida pérdida prolongada de conexión.

El logo HTML está en `../Curio-logo.html` y contiene su propia fuente. Su botón descarga el símbolo SVG. Las fuentes Nunito conservan la licencia SIL incluida por su paquete.
