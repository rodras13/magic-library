# Proyecto Magic Library 

Con esta aplicación podrás tener un registro de las cartas Magic: The Gathering que están en tu poder
y consultar en todo momento cual es su precio mínimo en el mercado.

Se utilizan dos API's:
- [text](https://api.scryfall.com) 
  Para la busqueda de imagenes de buena calidad junto a toda su información
- [text](https://api.cardmarket.com/ws/v2.0/products/find)
  Para la búsqueda de su precio en la tienda oficial de Magic CardMarket

  --------------

- Como buscar cartas en la primera API: https://scryfall.com/docs/api/cards/ (Vale español)
- Como buscar cartas en la tienda: https://api.cardmarket.com/ws/documentation/API_2.0:Find_Products
                                   https://api.cardmarket.com/ws/documentation/API_2.0:Entities:Product

Pasos a realizar:

1. Crear la base de datos ✅ 
  ⚠️ Cuidado con el parámetro quantity de la DB
2. Crear el esqueleto de la página
  - Sección de Biblioteca:
    - Buscar
      - Buscador de cartas en la DB
      - Filtros de búsqueda
    - Añadir una o varias cartas
    - Borrar una o varias cartas
  - Sección Tu Tienda:
    - Buscador
    - Top Sellers
  - Index:
    - Añadidos recientemente
3. Hacer los estilos (básicos)
4. Crear la lógica de la aplicación
