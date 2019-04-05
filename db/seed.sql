create table houses(
house_id serial primary key,
house_name varchar(30),
address varchar(100),
city varchar(100),
state varchar(2),
zip integer,
house_img text,
mortgage decimal,
rent decimal
)