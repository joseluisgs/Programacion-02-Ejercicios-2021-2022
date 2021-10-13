# Proyectos TypeScript

Para subir tu ejercicio a GitHub, **POR FAVOR SIGUE ESTAS NORMAS**:

- Hazte un fork de este repositorio
- Trabaja con GitFlow
- Crea una reama feature con tu Iniciales y apellido, por ejemplo: /feature/JLGonzalez y en ella:
  - Si vas a resolver un problema usando ***TypeScript***:
    - Añade al directorio **typscript/src** todos los ficheros main de los ejercicios y auxiliares o modulos en la carpeta **typescript/mod**. Debes nombrarlos de la siguiente manera: 
      - Por cada ejercicio llamarlo main-RR-EE-InicialesApellidos.ts. Solo debes añadir los ficheros main que uses no el resto de proyecto, pues lo sacamos de esta misma rama. RR es la relación del problema y EE el número del ejercicio. Por ejemplo, main-04-16-JLGonzalez.ts es el fichero del problema 16 de la relación 4.
      - Los modulos que crees deben ir en la carpeta **mod**. Se deben llamar mod-RR-EE-InicialesApellidos.ts, por ejemplo mod-04-16-JLGonzalez.ts es el módulo del ejercicio 16 de la relación 4.
      - Mi fichero main.ts no debe tocarse, debes subir el tuyo con tu nombre, esto es para quye siempre tengamos el mismo de plantilla.

- Cierra la Feature siguiendo el flujo de GitFlow, fusionando los cambios a Develop, pero no borres esa rama por si la vuelves a necesitar.
- Confirma los cambios y sube los cambios a tu repositorio GitHub.
- Hazme un pull request para que acepte los cambios y explícame dichos cambios en la rama **Develop**.
- Aplica las acciones oportunas para tener todo sincronizado.
- **SI NO SE SIGUEN ESTAS NORMAS SE TE INVALIDARÁ EN PULL REQUEST. PIENSA QUE ES POR EL BIEN DE TODOS/AS.**
- **LOS EJEMPLOS SOLO SIRVEN PARA TENER DISTINTOS PUNTOS DE VISTA, PUEDEN QUE FALLEN SI LOS PRUEBAS O QUE UN ERROR PERJUDIQUE A OTROS FICHEROS.** .


## ¿Cómo ejecutar o usar? 
  Para ejecutar y usar estos ejercicios debes tener instalado Node.js y npm. Además debes renombrar como main.ts el fichero que quieras ejecutar. Antes de nada debes instalar las dependencias.

### Uso
#### Instalación de dependencias
```bash
npm install
```

#### Ejecución
```bash
npm start
```

#### Ejecución Modo Dev
```bash
npm run dev
```

#### Ejecución con Nodemon
```bash
npm run watch
```

#### Linter
```bash
npm run lint
o
npm run lint:fix
```

## Extensiones de interés
- Error Lens: Nos muestra los errores en el mismo editor según nuestro Linter.
- ESLint: Linter para TypeScript/JavaScript.
- Git Graph: Para ver nuestro repositorio en forma de gráfica.
- Tabnine: IA para nuestro código potenciando la codificación del mismo.
- JavaSCript (ES6) code snippets: Snippets para TypeScript/JavaScript.
- Quokka.js: Para ejecutar nuestro código.
- Visual Studio IntelliCode: mejorar el autocompletado de codigo.