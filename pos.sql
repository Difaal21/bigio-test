CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `password` varchar(255),
  `role_id` int,
  `created_date` date
);

CREATE TABLE `user_role` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `created_date` date
);

CREATE TABLE `stores` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `owner_id` int,
  `created_date` date
);

CREATE TABLE `employees` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `store_id` int,
  `user_id` int,
  `created_date` date
);

CREATE TABLE `owner` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `user_id` int,
  `created_date` date
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `store_id` int,
  `name` varchar(255),
  `stock` int,
  `created_by` int,
  `created_date` date
);

CREATE TABLE `transaction` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` int,
  `store_id` int,
  `date` varchar(255),
  `created_date` date
);

CREATE TABLE `shift_time` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `store_id` int,
  `time` datetime
);

ALTER TABLE `users` ADD FOREIGN KEY (`role_id`) REFERENCES `user_role` (`id`);

ALTER TABLE `stores` ADD FOREIGN KEY (`owner_id`) REFERENCES `owner` (`id`);

ALTER TABLE `employees` ADD FOREIGN KEY (`store_id`) REFERENCES `stores` (`id`);

ALTER TABLE `employees` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `owner` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `products` ADD FOREIGN KEY (`store_id`) REFERENCES `stores` (`id`);

ALTER TABLE `products` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `transaction` ADD FOREIGN KEY (`product_id`) REFERENCES `stores` (`id`);

ALTER TABLE `shift_time` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `shift_time` ADD FOREIGN KEY (`store_id`) REFERENCES `stores` (`id`);
