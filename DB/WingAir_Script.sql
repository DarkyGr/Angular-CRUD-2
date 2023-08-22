create database WingAir
go 
use WingAir

create table TiposAviones(
	TipoId int identity(1,1) primary key,
	Nombre varchar(20)
)

create table Aviones(
	AvionId int identity(1,1) primary key,
	TipoId int not null,
	Codigo varchar(10) not null,
	HorasVuelo float not null,
	CapacidadPasajeros int not null,
	foreign key (TipoId) references TiposAviones(TipoId)
)

create table Pilotos(
	PilotoId int identity(1,1) primary key,
	Codigo varchar(10) not null,
	Nombre varchar(150) not null,
	Sexo char not null,
	HorasVuelo float not null
)

create table Aeropuertos(
	AeropuertoId int identity(1,1) primary key,
	Nombre varchar(100) not null,
	Municipio varchar(100) not null,
	Estado varchar(100) not null,
	Pais varchar(75) not null,
)

create table Estatus(
	EstatusId int identity(1,1) primary key,
	Nombre varchar(10)
)

create table Vuelos(
	VueloId int identity(1,1) primary key,
	AeropuertoOrigenId int not null,
	AeropuertoDestinoId int not null,
	AvionId int not null,
	PilotoId int not null,
	EstatusId int not null,
	Nombre varchar(11) not null,
	FechaSalida datetime not null,
	FechaLlegadaEstimada datetime not null,
	FechaLlegadaReal datetime not null,
	HorasVuelo float not null,
	foreign key (AeropuertoOrigenId) references Aeropuertos(AeropuertoId),
	foreign key (AeropuertoDestinoId) references Aeropuertos(AeropuertoId),
	foreign key (AvionId) references Aviones(AvionId),
	foreign key (PilotoId) references Pilotos(PilotoId),
	foreign key (EstatusId) references Estatus(EstatusId)
)


-- ********* DATOS *********
insert into TiposAviones(Nombre)
values ('AIRBUS-319'),
('AIRBUS-320'),
('AIRBUS-321'),
('BOEING-747'),
('ANTONOV-225')

insert into Aviones(TipoId, Codigo, HorasVuelo, CapacidadPasajeros)
values (1, 'AV-0001', 0, 50),
(2, 'AV-0002', 0, 75)

insert into Pilotos(Codigo, Nombre, Sexo, HorasVuelo)
values ('PA-0001', 'Hernan Cortez', 'M', 0),
('PA-0002', 'Talia Sanchez', 'F', 0)

insert into Aeropuertos(Nombre, Municipio, Estado, Pais)
values ('Emiliano Zapata', 'Xoxo', 'Oaxaca', 'Mexico'),
('International Aires', 'Buenos Aires', 'Buenos Aires', 'Argentina')

insert into Estatus(Nombre)
values ('En Espera'),
('En Vuelo'),
('Finalizado'),
('Cancelado')

insert into Vuelos(AeropuertoOrigenId, AeropuertoDestinoId, AvionId, PilotoId, EstatusId, Nombre, 
	FechaSalida, FechaLlegadaEstimada, FechaLlegadaReal, HorasVuelo)
values (1, 2, 1, 1, 1, 'OAXBUE-1330', '2020-10-10', '2020-10-11', '2020-10-11', 24),
(2, 1, 1, 1, 1, 'BUEOAX-1200', '2020-11-10', '2020-11-11', '2020-11-11', 24)