-- Creating the Customer table
CREATE TABLE Customer (
    Customer_Id INT PRIMARY KEY,
    Customer_Name VARCHAR(255) NOT NULL,
    Customer_Tel VARCHAR(20)
);

-- Creating the Product table
CREATE TABLE Product (
    Product_Id INT PRIMARY KEY,
    Product_Name VARCHAR(255) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL
);

-- Creating the Orders table
CREATE TABLE Orders (
	Customer_Id VARCHAR(20),
    Product_Id VARCHAR(20),
    Quantity INT NOT NULL,
    Total_Amount DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (Customer_Id),
    FOREIGN KEY (Customer_Id) REFERENCES Customer(Customer_Id),
    FOREIGN KEY (Product_Id) REFERENCES Product(Product_Id)
);

-- Add a new column named 'Category' of type VARCHAR2(20) to the 'PRODUCT' table
ALTER TABLE PRODUCT ADD (Category VARCHAR(20));

-- Add a new column named 'OrderDate' of type DATE with a default value of SYSDATE to the 'ORDERS' table
ALTER TABLE ORDERS ADD (OrderDate DATE);

ALTER TABLE CUSTOMER MODIFY Customer_Id VARCHAR(20);
ALTER TABLE PRODUCT MODIFY Product_Id VARCHAR(20);
ALTER TABLE orders MODIFY Customer_Id VARCHAR(20);
ALTER TABLE orders MODIFY Product_Id VARCHAR(20);