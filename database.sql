-- Se crea la base de datos
create database api_barberias;

-- Se hace uso de la base de datos
use api_barberias;

-- Se crean las tablas
-- Tabla Usuario
CREATE TABLE Usuario (
    id_usuario VARCHAR(10) PRIMARY KEY,
    nombre_usuario VARCHAR(30) NOT NULL,
    telefono_usuario VARCHAR(10) UNIQUE NOT NULL,
    correo_usuario VARCHAR(30) UNIQUE NOT NULL,
    genero_usuario VARCHAR(15) NOT NULL,
    clave VARCHAR(40) NOT NULL
);

-- Tabla Barbería
CREATE TABLE Barberia (
    id_barberia VARCHAR(10),
    id_barbero_encargado VARCHAR(10),
    nombre_barberia VARCHAR(30) NOT NULL,
    direccion_barberia VARCHAR(50) NOT NULL,
    telefono_barberia VARCHAR(10) UNIQUE NOT NULL,
    correo_barberia VARCHAR(30) UNIQUE NOT NULL,
    horario_barberia VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_barberia),
    FOREIGN KEY (id_barbero_encargado) REFERENCES Usuario(id_usuario)
);

-- Tabla Servicio
CREATE TABLE Servicio (
    id_servicio VARCHAR(10),
    id_barberia VARCHAR(10),
    nombre_servicio VARCHAR(20) NOT NULL,
    descripcion_servicio VARCHAR(50) NOT NULL,
    precio_servicio FLOAT NOT NULL,
    PRIMARY KEY (id_servicio),
    FOREIGN KEY (id_barberia) REFERENCES Barberia(id_barberia)
);

-- Tabla Cita
CREATE TABLE Cita (
    id_cita VARCHAR(10),
    id_barberia VARCHAR(10),
    id_servicio VARCHAR(10),
    id_cliente VARCHAR(10),
    numero_cita INT NOT NULL,
    fecha_cita DATE NOT NULL,
    hora_cita VARCHAR(10) NOT NULL,
    PRIMARY KEY (id_cita),
    FOREIGN KEY (id_barberia) REFERENCES Barberia(id_barberia),
    FOREIGN KEY (id_servicio) REFERENCES Servicio(id_servicio),
    FOREIGN KEY (id_cliente) REFERENCES Usuario(id_usuario)
);