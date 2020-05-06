drop database fictional_lamp;
create database fictional_lamp;

create USER 'biker-app-admin'@'localhost' IDENTIFIED BY 'c9c6a1cb7041dd2dff94812f510d6149';
grant all PRIVILEGES on *.* to 'admin'@'localhost';

use fictional_lamp;

create table users (
    id int auto_increment,
    username varchar(50),
    password varchar(74),
    first_name varchar(20),
    last_name varchar(30),
    phone varchar(10),
    created_at datetime,
    deleted_at datetime,
    is_admin boolean,
    constraint user_id primary key (id),
    constraint username unique(username)
);

create table predictions(
    id int auto_increment,
    user_id int,
    is_good_day bool,
    created_at datetime,
    deleted_at datetime,
    gps varchar(80),
    ip varchar(40),
    constraint id primary key (id),
    constraint foreign key(user_id) references users(id)
);