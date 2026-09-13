# Revisión técnica de Curio

## Comprobado

Las reglas rechazan lecturas entre usuarios, accesos sin autenticación, campos adicionales, avatares e intereses inválidos, puntajes falsificados, índices de preguntas fuera de rango, discrepancias entre respuestas y lista de errores y timestamps muy futuros. Un recibo válido puede crearse; uno existente solo admite una escritura idéntica. Las reglas de la colección preexistente `users` se preservaron.

El progreso se deriva de recibos individuales; no se guardan contadores de XP o rachas suministrados libremente. La aplicación valida datos recuperados y conserva el almacenamiento si detecta corrupción. Las escrituras locales se serializan. El guardado final tiene un bloqueo contra doble toque, y la identidad tema/fecha/tipo impide duplicados al fusionar recibos.

Se verificó creación de perfil, acierto/error, finalización, sincronización y persistencia tras recarga en el navegador. Las pruebas automatizadas cubren inicio en cero, 25 temas completos, cambio de día/mes/año, año bisiesto, rachas, deduplicación y permanencia del logro. La exportación iOS compiló el código nativo; no se ejecutó una build firmada en un teléfono.

## Límites que siguen abiertos

1. **El cliente conoce las respuestas.** Recalcular un puntaje en las reglas impide enviar valores incoherentes, pero no demuestra que una persona haya aprendido. Un cliente modificado puede enviar respuestas correctas. No se deben usar estos recibos como prueba de mérito para premios de valor o rankings competitivos.
2. **La fecha diaria es declarada por el dispositivo.** Se valida su forma y rango y se limita el timestamp de finalización futuro, pero no se prueba que una clase offline ocurrió en un día determinado. La sincronización offline y la validación temporal fuerte requieren un diseño adicional del servidor.
3. **Los perfiles son privados.** La lectura pública y las estadísticas verificadas de otros usuarios no están activadas. Esta restricción evita exponer datos personales o presentar como certificados valores que todavía son declarados por el cliente.
4. **La cuenta anónima depende de sus credenciales locales.** Faltan vinculación de cuenta y eliminación desde la app antes de publicar.
5. **La sincronización recorre todos los recibos del usuario.** Es adecuada para esta primera versión, pero se debe paginar y usar cursores para historiales largos. El perfil usa preferencia por la copia local; antes de vincular varios dispositivos conviene añadir resolución por campo o revisiones.
6. **Las reglas antiguas de Sabio no se endurecieron.** Esta revisión solo cubre las nuevas colecciones de Curio; no certifica otra app del proyecto.

## Dependencias

El audit inicial detectó un aviso transitivo en `uuid` utilizado por `xcode`. Se fijó la dependencia de `xcode` a `uuid` 11.1.1 y se comprobó que genera identificadores Xcode de 24 caracteres válidos. La revisión final de `npm audit` se registra en el resultado de entrega. No se aplicó una degradación forzada de Expo sugerida por el solucionador automático.
