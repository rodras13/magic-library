-- Cramos la base de datos si no existe

DROP DATABASE IF EXISTS magic_library;

CREATE DATABASE IF NOT EXISTS magic_library;

USE magic_library;

-- Creamos la tabla donde se van a guardar todos los datos de las cartas

CREATE TABLE cards (
	id VARCHAR(50) NOT NULL,
    original_name VARCHAR(50) NOT NULL UNIQUE,
    printed_name VARCHAR(50) NOT NULL UNIQUE,
    quantity INT NOT NULL,
    image_uri VARCHAR(100) NOT NULL UNIQUE,
    mana_cost VARCHAR(20) NOT NULL,
    -- cmc => card mana cost
    cmc VARCHAR(20) NOT NULL,
    type_line VARCHAR(50) NOT NULL,
    printed_type_line VARCHAR(50) NOT NULL,
    colors VARCHAR(20) NOT NULL,
    rarity VARCHAR(50) NOT NULL,
    oracle_text VARCHAR(500) NOT NULL,
    printed_text VARCHAR(500) NOT NULL,
    set_name VARCHAR(20) NOT NULL,
    
    PRIMARY KEY(id)
);