create TABLE executors(
    id_executor SERIAL PRIMARY KEY, 
    name VARCHAR(255),
    surname VARCHAR(255),
    telephone VARCHAR(255),
    address VARCHAR(255),
    lavel VARCHAR(255)
);
create TABLE clients(
    id_client SERIAL PRIMARY KEY, 
    name VARCHAR(255),
    surname VARCHAR(255),
    telephone VARCHAR(255),
    address VARCHAR(255),
    status VARCHAR(255)
);
create TABLE orders(
    id_order SERIAL  PRIMARY KEY, 
    order_comp VARCHAR(255),
    order_status VARCHAR(255),
    execurot_id INTEGER, 
    FOREIGN KEY (execurot_id) REFERENCES executors (id_executor),
    client_id INTEGER,
FOREIGN KEY (client_id) REFERENCES clients (id_client)
);