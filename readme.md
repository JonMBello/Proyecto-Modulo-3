
## Proyecto Backend Fundamentals Barberia-Api
#### Aplicación para crear citas en una barberia 

- 1.Tema:
	-	Plataforma para agendar citas en una barbería con múltiples servicios en un horario y fecha en específico según el requerimiento del cliente  

- 2.Definan los requerimientos del proyecto, así como su estructura, es decir, respondanlas preguntas:

	o	¿Qué espero que haga el proyecto?
		1.	Crear, consultar, modificar y eliminar clientes.
		2.	Crear, consultar, modificar y eliminar barberos.
		3.	Crear, consultar, modificar y eliminar barberías.
		4.	Crear, consultar, modificar y eliminar servicios.
		5.	Crear, consultar, modificar y eliminar citas

	o	¿Qué tipos de usuario tendrá nuestro sistema?
		1.	Clientes
		2.	Barberos

	o	¿Qué acciones puede realizar cada usuario?
		1.	Clientes:
			1.	Crear, consultar, modificar y eliminar sus datos.
			2.	Crear, consultar, modificar y eliminar sus citas.
			3.	Consultar barberías.
			4.	Consultar servicios

		1.	Barberos:
			1.	Crear, consultar, modificar y eliminar sus datos.
			2.	Crear, consultar, modificar y eliminar sus citas.
			3.	Consultar barberías.
			4.	Consultar servicios

	o	¿Qué información se necesita?
		1.	Información personal del cliente
		2.	Información personal del barbero
		3.	Servicios que ofrecen los barberos
		4.	Horarios de atención de las barberías
		5.	Ubicación de las barberías

	o	¿Cuáles son las principales entidades?
		1.	Cliente
		2.	Barbero
		3.	Barbería
		4.	Servicio
		5.	Cita

	o	¿Qué características tiene cada entidad?
		1.	Cliente
			1.	ID, Nombre, Teléfono, Correo, Género, Usuario y Contraseña.
		2.	Barbero
			1.	ID, Nombre, Teléfono, Correo, Género, Barbería, Usuario y Contraseña.
		3.	Barbería
			1.	ID, Nombre, Dirección, Teléfono, Correo, Horario, Barbero encargado.
		4.	Servicio
			1.	ID, Nombre, Descripción, Precio, Barberia.
		5.	Cita
			1.	ID, Número de cita, Cliente, Barbería, Servicios, Fecha y Hora.

	o	¿Qué funcionalidades tiene cada entidad?
		1.	Cliente
			1.	Crear su usuario.
			2.	Consultar usuarios.
			3.	Consultar usuario por ID.
			4.	Consultar usuario por atributos
			5.	Consultar usuario por campos. 
			6.	Modificar usuario por ID.
			7.	Eliminar usuario.

		2.	Barbero
			1.	Crear barbero.
			2.	Consultar barberos
			3.	Consultar barbero por ID.
			4.	Consultar barbero por atributos
			5.	Consultar barbero por campos
			6.	Modificar barbero por ID.
			7.	Eliminar barbero

		3.	Barbería
			1.	Crear barbería.
			2.	Consultar barberías
			3.	Consultar barbería por ID.
			4.	Consultar barbería por atributos
			5.	Consultar barbería por campos.
			6.	Modificar barbería por ID.
			7.	Eliminar barbería.

		4.	Servicio
			1.	Crear servicio.
			2.	Consultar servicios.
			3.	Consultar servicio por ID.
			4.	Consultar servicio por atributos
			5.	Consultar servicio por campos.
			6.	Modificar servicio por ID
			7.	Eliminar servicio

		5.	Cita
			1.	Crear cita.
			2.	Consultar citas.
			3.	Consultar cita por ID.
			4.	Consultar cita por atributos
			5.	Consultar cita por campos
			6.	Modificar cita por ID.
			7.	Eliminar cita.

- 3.Utilicen historias de usuario para ayudarte a responder las preguntas del inciso anterior:

	Cliente:
		o	Como cliente quiero crear mi usuario para usar el sistema.
		o	Como cliente quiero consultar mis datos para verificarlos.
		o	Como cliente quiero modificar mis datos para corregirlos.
		o	Como cliente quiero eliminar mis datos para cancelar mi cuenta.
		o	Como cliente quiero crear una cita para cortarme el cabello.
		o	Como cliente quiero consultar mi cita para verficar el horario y el lugar.
		o	Como cliente quiero modificar una cita para cambiar la fecha.
		o	Como cliente quiero eliminar una cita para cancelar el servicio.
		o	Como cliente quiero consultar barberías para elegir una.
		o	Como cliente quiero consultar servicios para elegir algunos.

	Barbero:
		o	Como barbero quiero crear mi usuario para usar el sistema.
		o	Como barbero quiero consultar mis datos para verificarlos.
		o	Como barbero quiero modificar mis datos para corregirlos.
		o	Como barbero quiero eliminar mis datos para cancelar mi cuenta.
		o	Como barbero quiero crear mi barberia para ofrecer servicios.
		o	Como barbero quiero consultar los datos de mi barbería para verificarlos.
		o	Como barbero quiero modificar los datos de mi barbería para corregirlos.
		o	Como barbero quiero eliminar los datos de mi barbería para quitarla del sistema.
		o	Como barbero quiero crear mis servicios para ofrecerlos al público.
		o	Como barbero quiero consultar mis servicios para verificarlos.
		o	Como barbero quiero modificar mis servicios para corregirlos.
		o	Como barbero quiero eliminar mis servicios para dejar de ofrecerlos.
		o	Como barbero quiero consultar las citas para verificar fecha y hora.
		o	Como barbero quiero modificar las citas para aplazarlas en caso de imprevistos.
		o	Como barbero quiero eliminar las citas para abrir el espacio en caso de que un cliente cancele.
