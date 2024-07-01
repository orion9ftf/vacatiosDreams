### Ver vacaciones: 

Clonar repositorio con ssh:

Link: `git@github.com:orion9ftf/vacatiosDreams.git`

Utilizar SSH (Secure Shell) para clonar un repositorio tiene varias ventajas y es generalmente preferido por su seguridad y facilidad de uso, especialmente en entornos de desarrollo profesional. Aquí hay algunas razones por las que es importante utilizar SSH para clonar un repositorio:

* Seguridad:

Encriptación: SSH proporciona un canal seguro mediante la encriptación de datos, lo que asegura que la información transmitida no pueda ser interceptada ni leída por terceros.
Autenticación fuerte: Utiliza autenticación basada en claves, lo que es más seguro que las contraseñas. Las claves SSH son criptográficamente más seguras y difíciles de adivinar.

* Comodidad:

Acceso sin contraseña: Una vez configuradas las claves SSH, no es necesario introducir una contraseña cada vez que te conectas al repositorio. Esto facilita el flujo de trabajo y ahorra tiempo.
Acceso automático: Las claves SSH pueden ser gestionadas por agentes SSH (como ssh-agent), lo que permite una experiencia sin interrupciones.

* Control de acceso:

Gestión de permisos: Las claves SSH pueden ser gestionadas de manera granular. Por ejemplo, puedes conceder o revocar el acceso a individuos específicos sin cambiar contraseñas compartidas.
Auditoría: Es más fácil auditar el acceso y las actividades realizadas por usuarios individuales, ya que cada usuario tiene su propia clave.
* Compatibilidad:

Amplio soporte: SSH es ampliamente soportado y está disponible en la mayoría de los sistemas operativos y herramientas de desarrollo.
Integración con servicios: Muchos servicios de alojamiento de código, como GitHub, GitLab y Bitbucket, recomiendan y proporcionan soporte robusto para la autenticación SSH.

* Evitar problemas de autenticación HTTP:

Límites de velocidad: Algunos servicios imponen límites de velocidad más estrictos para la autenticación HTTP en comparación con SSH.
Token de acceso: La autenticación HTTP a menudo requiere el uso de tokens de acceso personal, que pueden ser más engorrosos de gestionar en comparación con las claves SSH.


Correr programa:

`npm start`


## Cual es la desventaja y ventaja en cuanto a la ciberseguridad de utilizar una api con un framework React?

Al usar React para construir la interfaz de usuario de una aplicación que se comunica con una API, hay varias ventajas y desventajas en términos de ciberseguridad.

#### Ventajas

1.- Separación de Concerns (SoC):

`Mantenibilidad:` Al separar la interfaz de usuario (React) de la lógica del servidor (API), se mejora la mantenibilidad y la capacidad de actualización. Esto permite aplicar parches de seguridad de manera más efectiva y específica.

`Seguridad en capas:` La separación permite implementar medidas de seguridad específicas tanto en el front-end como en el back-end.

2.- Autenticación y Autorización:

`JWT y OAuth:` React puede integrarse fácilmente con tecnologías modernas de autenticación y autorización como JWT (JSON Web Tokens) y OAuth, proporcionando un control de acceso robusto y seguro.

`Protección de rutas:` React permite proteger rutas y componentes mediante el uso de middlewares y hooks, asegurando que solo los usuarios autenticados puedan acceder a ciertas partes de la aplicación.


3.- Actualizaciones y Parches:

`Frecuencia de actualizaciones:` Las bibliotecas y frameworks de JavaScript como React reciben actualizaciones frecuentes que incluyen mejoras de seguridad. Mantener estas dependencias actualizadas puede reducir la exposición a vulnerabilidades conocidas.

`Componentización:` La arquitectura basada en componentes de React facilita la identificación y resolución de problemas de seguridad en componentes específicos.

4.- Prevención de Ataques XSS (Cross-Site Scripting):

`Escapado automático:` React escapa automáticamente los valores en el JSX, lo que ayuda a prevenir ataques XSS al evitar la inyección de código malicioso en el DOM.

`Use of Hooks and Context:` Con el uso de hooks y el contexto de React, es más fácil gestionar y pasar datos de manera segura entre componentes.
Desventajas

5.- Superficie de Ataque Ampliada:

`Client-Side Vulnerabilities:` El código de React se ejecuta en el navegador del cliente, lo que lo hace susceptible a ataques como XSS si no se toman las medidas adecuadas.

`Dependencias de Terceros:` React y sus ecosistemas dependen de muchas bibliotecas de terceros. Cada dependencia adicional puede introducir vulnerabilidades si no se gestionan y actualizan correctamente.

6.- Gestión de Estado y Datos Sensibles:

`Exposición de Datos:` Almacenar datos sensibles en el estado de React puede ser riesgoso si no se manejan adecuadamente, ya que esos datos podrían ser accesibles a través de herramientas de desarrollo del navegador.

`Storage Inseguro:` Utilizar almacenamiento local (localStorage) o cookies sin las debidas precauciones puede llevar a la exposición de datos sensibles.

7.- Configuración de Seguridad Compleja:

`CORS (Cross-Origin Resource Sharing):` Configurar CORS correctamente es crucial para evitar ataques de tipo Cross-Site Request Forgery (CSRF). Las configuraciones incorrectas pueden permitir accesos no autorizados a la API.

`CSRF Protection:` Asegurarse de que todas las solicitudes que modifican datos estén protegidas contra CSRF puede ser complicado, especialmente en aplicaciones grandes.

8.- Exposición de API Endpoints:

`Enumeración de Endpoints:` Si los endpoints de la API no están adecuadamente protegidos, un atacante podría descubrir y explotar estos endpoints mediante técnicas de enumeración.

Faltas en la Validación del Lado del Servidor: Aunque React puede realizar validaciones en el cliente, siempre es crucial validar todos los datos en el servidor. La falta de validación en el servidor puede llevar a la aceptación de datos maliciosos.

### Buenas Prácticas de Seguridad


1.- Autenticación y Autorización Robustas:

Utiliza tokens seguros (como JWT) y asegúrate de validar y renovar tokens correctamente.
Implementa roles y permisos granulares para controlar el acceso a diferentes partes de la API.

2.- Cifrado y Seguridad en la Comunicación:

Usa HTTPS para cifrar las comunicaciones entre el cliente y el servidor.
Implementa HSTS (HTTP Strict Transport Security) para asegurar que las conexiones se realicen únicamente a través de HTTPS.

3.- Protección contra XSS y CSRF:

Escapa y sanitiza todas las entradas y salidas de datos.
Usa tokens anti-CSRF y asegúrate de que todas las solicitudes que modifican datos están protegidas.

4.- Actualización y Monitoreo:

Mantén todas las dependencias actualizadas y monitorea continuamente las vulnerabilidades de seguridad.
Implementa mecanismos de monitoreo y logging para detectar actividades sospechosas.

5.- Validación y Sanitización del Lado del Servidor:

Asegúrate de que todas las entradas recibidas desde el cliente sean validadas y sanitizadas en el servidor.


### Vulnerables de React:

Las versiones vulnerables de React suelen ser identificadas a través de informes de seguridad y CVEs (Common Vulnerabilities and Exposures). Es importante mantenerse informado sobre las actualizaciones de seguridad y las versiones recomendadas por los mantenedores del proyecto React.

#### Principales fuentes de información sobre vulnerabilidades en React:


1.- NPM Security Advisories:

NPM publica avisos de seguridad para paquetes de JavaScript, incluido React. Puedes revisar estos avisos en el sitio web de NPM.

2.- GitHub Security Advisories:

Los proyectos en GitHub, incluido React, pueden publicar avisos de seguridad. Puedes encontrar estos avisos en la sección de seguridad del repositorio de React en GitHub.

3.- Common Vulnerabilities and Exposures (CVE):

Las vulnerabilidades conocidas se registran en la base de datos CVE. Puedes buscar vulnerabilidades específicas de React en el sitio web de CVE.


### Cómo encontrar y abordar vulnerabilidades en React:

1. Buscar vulnerabilidades conocidas:

Utiliza las bases de datos de seguridad y las herramientas de escaneo de dependencias para identificar versiones vulnerables de React en tu proyecto.

2. Mantenerse actualizado:

Sigue el blog oficial de React y sus canales de comunicación para estar al tanto de las actualizaciones y avisos de seguridad.

3. Usar herramientas de seguridad:

* Usa herramientas como npm audit o yarn audit para identificar vulnerabilidades en las dependencias de tu proyecto.

* Implementa servicios de escaneo continuo como Snyk, Dependabot (GitHub) o Whitesource.


4. Actualizar dependencias:

Asegúrate de actualizar React y sus dependencias regularmente. Utiliza herramientas de gestión de dependencias para aplicar actualizaciones de seguridad.

### Ejemplo de herramientas de escaneo de seguridad:

***NPM Audit***

Ejecuta este comando para escanear tu proyecto por vulnerabilidades conocidas:
```sh
npm audit
```

***Yarn Audit***

Ejecuta este comando si usas Yarn:
```sh
yarn audit
```


### Identificación de una versión específica de React:
Para determinar si una versión específica de React es vulnerable, puedes buscar en las bases de datos mencionadas anteriormente o revisar los registros de cambios (changelogs) y las notas de la versión (release notes) del repositorio oficial de React en GitHub.


* Mantenerse Proactivo

Automatización: Configura Dependabot o Renovate para recibir notificaciones automáticas y solicitudes de actualización en GitHub.

Suscripciones: Suscríbete a listas de correo o canales de comunicación de la comunidad de React y del ecosistema JavaScript para recibir noticias y alertas de seguridad.
