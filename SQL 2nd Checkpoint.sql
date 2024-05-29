-- use projectdb;
-- select product_name, category, price from projectdb.product
-- where price>=5000 and price <=10000

-- insert into projectdb.product values
-- ('p03','Hp Charge', '5000','PC'),
-- ('p04','Lenovo yoga thinkpad', '7000','PC'),
-- ('p05','Hp Envy Laptop', '10000','PC')

-- select * from projectdb.product
-- order by price desc

-- set sql_safe_updates = 0;
-- update projectdb.orders
-- set product_id = 'PO2', customer_id = 'CO2' where quantity = 1

-- delete from projectdb.orders
-- where product_id = 'po1'

select count(*), avg(total_amount), max(total_amount), min(total_amount) from projectdb.orders

