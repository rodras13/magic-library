-- Cramos la base de datos si no existe

DROP DATABASE IF EXISTS magic_library;

CREATE DATABASE IF NOT EXISTS magic_library;

USE magic_library;

-- Creamos la tabla donde se van a guardar todos los datos de las cartas

CREATE TABLE cards (
	id VARCHAR(50) NOT NULL,
    original_name VARCHAR(50) NOT NULL UNIQUE,
    printed_name VARCHAR(50),
    quantity INT DEFAULT 1,
    image_uri VARCHAR(100) NOT NULL UNIQUE,
    -- mana_cost VARCHAR(20) NOT NULL,
    -- cmc => card mana cost
    -- cmc VARCHAR(20) NOT NULL,
    -- type_line VARCHAR(50) NOT NULL,
    -- printed_type_line VARCHAR(50) NOT NULL,
    -- colors VARCHAR(20) NOT NULL,
    -- rarity VARCHAR(50) NOT NULL,
    oracle_text VARCHAR(500) NOT NULL,
    -- printed_text VARCHAR(500) NOT NULL,
    -- set_name VARCHAR(20) NOT NULL,
    createdAt DATE,
    updatedAt DATE,
    
    PRIMARY KEY(id)
);

INSERT INTO cards (
    id, original_name, printed_name, image_uri, oracle_text
) VALUES (
    "3b7edddc-9d7d-4141-96fd-672b0df119a3", "Waste Not", "Nada se desperdicia", "https://cards.scryfall.io/png/front/3/b/3b7edddc-9d7d-4141-96fd-672b0df119a3.png?1711305369", "Whenever an opponent discards a creature card, create a 2/2 black Zombie creature token.\nWhenever an opponent discards a land card, add {B}{B}.\nWhenever an opponent discards a noncreature, nonland card, draw a card."
);
