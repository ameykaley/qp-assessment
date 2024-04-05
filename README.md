# qp-assessment


npm i server start - npm start port 3000 API endpints --

Add new grocery items to the system - POST /items request - { "Name": "Munch", "Price": "10", "inventory": "152" }

View existing grocery items - GET /items

Update details (e.g., name, price) of existing grocery items - PUT /items/:id

Remove grocery items from the system - DELETE /items/:id

Update inventory - PATCH /items/:id?iventory=$inventory

View the list of available grocery items - GET /orders

Ability to book multiple grocery items in a single order - post /orders request - { "userid": 27, "orderdetails": [ { "Name": "Munch", "Price": "10", "Quantity": 3 }, { "Name": "Munch", "Price": "10", "inventory": "1500" } ] }
