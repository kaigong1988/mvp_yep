CREATE SCHEMA
`mvp_yep` ;

CREATE TABLE `mvp_yep`.`restaurants`
(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR
(45) NOT NULL,
  `place_id` VARCHAR
(100) NOT NULL,
  `address` VARCHAR
(60) NOT NULL,
`zipcode` INT UNSIGNED NOT NULL,
  `phone` VARCHAR
(45) NOT NULL,
`description
` VARCHAR
(255) NOT NULL,
  PRIMARY KEY
(`id`),
  UNIQUE INDEX `id_UNIQUE`
(`id` ASC) VISIBLE);

CREATE TABLE `mvp_yep`.`reviews`
(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `restaurant_id` INT UNSIGNED NOT NULL,
  `title` VARCHAR
(45) NOT NULL,
  `body` VARCHAR
(255) NOT NULL,
  `rating` INT UNSIGNED NOT NULL,
  `price` INT UNSIGNED NOT NULL,
  PRIMARY KEY
(`id`),
  UNIQUE INDEX `id_UNIQUE`
(`id` ASC) VISIBLE);

CREATE TABLE `mvp_yep`.`photos`
(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `restaurant_id` INT UNSIGNED NOT NULL,
  `url` VARCHAR
(255) NOT NULL,
  PRIMARY KEY
(`id`));

/* insert data
INSERT INTO `mvp_yep`.`photos`
(`restaurant_id`, `url`) VALUES
('1', 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg');
INSERT INTO `mvp_yep`.`photos`
(`restaurant_id`, `url`) VALUES
('1', 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500');
INSERT INTO `mvp_yep`.`photos`
(`restaurant_id`, `url`) VALUES
('1', 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('2', 'https://www.chasinglenscapes.com/wp-content/uploads/2020/06/food-photography-on-the-go-tips.jpg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('2', 'https://i.pinimg.com/originals/13/7a/9b/137a9bf3d78351ca949776a3cc5b0bf3.jpg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('2', 'https://salife.com.au/wp-content/uploads/FINAL-SALIFE_Rosa_Soup_2767_Ramen-EDITED-850x510.jpg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('3', 'https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('3', 'https://images.squarespace-cdn.com/content/v1/51ab58f4e4b0361e5f3ed294/1370194110131-QVNN9TM7AFHXPCA4A2JU/ke17ZwdGBToddI8pDm48kA-lSOMdAqtkg5r3a4PFFnkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc56lHyOkE-pdC1UTw8uRX23VQ3JcQ_FO90kcVfgXFNf_KgVpUI5WShUu7xhA6datb/Benchmark_Restaurant_Dining_Room_Photographed_by_Evan_Sung.jpg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('3', 'https://www.stlmag.com/downloads/291284/download/0219_Elmwood_0016.jpg?cb=05f56521ae049e15a8f3d244cafb3822&w=640');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('4', 'https://cdn.cnn.com/cnnnext/dam/assets/180111145752-hot-new-restaurants-2018---publico-ristorante-ambience-full-169.jpg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('4', 'https://cdn.choosechicago.com/uploads/2019/12/PizzeriaPortofino_Interior_Credit_HsingChen-900x514.jpg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('4', 'https://s3-prod.chicagobusiness.com/styles/width_792/s3/Image%20from%20iOS%20%287%29.jpg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('5', 'https://images.indianexpress.com/2020/09/restuarant.jpg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('5', 'https://hub.theentertainerme.com/wp-content/uploads/2020/06/Dine-In-With-Us-At-These-10-Restaurants-1024x683.jpg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('5', 'https://arlingtonva.s3.amazonaws.com/wp-content/uploads/sites/25/2013/12/restaurant.jpeg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('6', 'https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/Bigham-Tavern-Mount-Washington-1584125252.jpg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('6', 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('6', 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/great_food_combos_for_losing_weight_slideshow/650x350_great_food_combos_for_losing_weight_slideshow.jpg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('7', 'https://cdn.vox-cdn.com/thumbor/Rku9HfgluuOF763XJ1DnsrE3tkw=/0x0:2000x1333/1400x1050/filters:focal(840x506:1160x826):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/64047756/xian-famous-foods-lead-image.0.0.1484279750.0.jpg');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('7', 'https://lh3.googleusercontent.com/proxy/LRAo55irTSON7Z4IXomuNrttpcR1RmyDzraHdhbkvZJOxrnroEO_uFWGsDwBlKECuOVlv_uUBSVqSUdTK6gwl6QwWZeb4fS1iRXqoe7OWnEYd9w5KAo1');
INSERT INTO `mvp_yep`.`photos` (`restaurant_id`, `url`) VALUES ('7', 'https://images.squarespace-cdn.com/content/v1/5a6682c251a584c5094aaf06/1586993165169-S28HHIHDZKXWOB9R0DG1/ke17ZwdGBToddI8pDm48kMR1yAHb8bPoH1-OdajP2rZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpya-Yv2-AUIrtyc_1d9d84jKAfrgH35AgL5HDK7jKFTEAbkVb2mHFRzAaMt_-j0ggg/%5BB1%5D%2BStewed%2BPork%2BBurger.jpg');  */


/* INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('1', 'I like it', 'this is good food', '5', '3');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('1', 'good good', 'very cheap', '4', '2');
INSERT INTO `mvp_yep`.`reviews`

(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('1', 'very good I like it', 'cool', '4', '2');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('2', 'good', 'good food', '5', '2');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('2', 'i like the food', 'Will come back', '4', '2');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('2', 'location is good', 'near my house', '3', '2');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('3', 'too spicy', 'food is too spicy', '2', '2');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('3', 'good food', 'I like it', '4', '2');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('4', 'good food', 'good food but a little expensive', '4', '4');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('4', 'i like the noodle', 'good noodle', '4', '4');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('5', 'good price', 'good price', '3', '1');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('5', 'i dont like it', 'good was cold', '2', '1');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('6', 'good', 'good', '4', '2');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('7', 'I like the noodle', 'very good noodle', '5', '2');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('7', 'good food ', 'good food for this price', '4', '1');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('7', 'dumpling', 'dumpling is good', '4', '2');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('7', 'cant get enough of this place', 'i will come everyday', '5', '1');
*/


/*
INSERT INTO `mvp_yep`.`restaurants`
(`id`, `name`, `place_id`, `address`, `zipcode`, `phone`, `description`) VALUES
('1', 'Tavern 157', 'ChIJFYps6yVgwokRcJ5C_LxMORg', '157-12 Northern Blvd  Flushing, NY 11354', '11354', '(347) 220-8454', 'Win Bars Asian Fusion Tapas/small Plates');
INSERT INTO `mvp_yep`.`restaurants`
(`id`, `name`, `place_id`, `address`, `zipcode`, `phone`, `description`) VALUES
('2', 'Kimganae', 'ChIJxcol9xBgwokRImDRmxmF7Ag', '3912 Union St, Flushing, NY 11354', '11354', '(718) 888-3100', 'Korean Breakfast Brunch Coffee&Tea');
INSERT INTO `mvp_yep`.`restaurants`
(`id`, `name`, `place_id`, `address`, `zipcode`, `phone`, `description`) VALUES
('3', 'Mad For Chicken', 'ChIJk6OtlCVgwokRpjM_CH03mgs', '157-18 Northern Blvd, Flushing, NY 11354', '11354', '(718) 321-3818', 'Gasropubs chicken wings korean');
INSERT INTO `mvp_yep`.`restaurants`
(`id`, `name`, `place_id`, `address`, `zipcode`, `phone`, `description`) VALUES
('4', 'T-Swirl Crepe', 'ChIJ2fj1VnWKwokRki8GzaKd2w8', '39-24 Bell Blvd, Bayside, NY 11361', '11361', '(929) 373-3061', 'Desserts Creperies Coffee Tea');
INSERT INTO `mvp_yep`.`restaurants`
(`id`, `name`, `place_id`, `address`, `zipcode`, `phone`, `description`) VALUES
('5', 'Olio e Plu', 'ChIJS1_PopZZwokREiuDSAWuJB0', '3 Greenwich Ave, New York, NY 10014', '10014', '(212) 243-6546', 'Pizza Italian Breakfast Brunch');
INSERT INTO `mvp_yep`.`restaurants`
(`id`, `name`, `place_id`, `address`, `zipcode`, `phone`, `description`) VALUES
('6', 'Boucherie West Village', 'ChIJL1V8eJRZwokRsAcYCLrqKL4', '99 7th Ave S, New York, NY 10014', '10014', '(212) 837-1616', 'French Cocktail Bars Stakehouse');
INSERT INTO `mvp_yep`.`restaurants`
(`id`, `name`, `place_id`, `address`, `zipcode`, `phone`, `description`) VALUES
('7', 'Xian Famous Foods', 'ChIJaSgLyZNZwokRPbB6lmMtr14', '313 6th Ave, New York, NY 10014', '10014', '(212) 786-2068', 'Chinese noodles burgers');

INSERT INTO `mvp_yep`.`restaurants`
(`name`, `place_id`, `address`, `zipcode`, `phone`, `description`) VALUES
('Luke\'s Lobster FiDi', 'ChIJ8S_dHhRawokRxWXB91--clM', '26 S William St, New York, NY 10004', '10004', '(212) 747-1700', 'Seafood');
INSERT INTO `mvp_yep`.`restaurants` (`name`, `place_id`, `address`, `zipcode`, `phone`, `description`) VALUES ('Katz\'s Delicatessen', 'ChIJQVR56oNZwokRoFzE6087cqw', '205 E Houston St, New York, NY 10002', '10002', '(212) 254-2246', 'Delis Sandwiches Soup');
INSERT INTO `mvp_yep`.`restaurants`
(`name`, `place_id`, `address`, `zipcode`, `phone`, `description`) VALUES
('Juliana\'s Pizza', 'ChIJgVa9tzBawokR1X5fNaioZeg', '19 Old Fulton St, Brooklyn, NY 11201', '11201', '(718) 596-6700', 'Pizza');
*/

/*
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('7', 'like the noodle', 'will come back again', '5', '2');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('7', 'good food', 'good food for this price', '4', '2');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('8', 'loving their seafood', 'will come back again', '5', '4');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('8', 'lobster is fresh', 'not cheap tho', '4', '4');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('9', 'clean', 'location is good', '3', '2');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('9', 'famous sandwich', 'love the sandwich', '5', '2');
INSERT INTO `mvp_yep`.`reviews`
(`restaurant_id`, `title`, `body`, `rating`, `price`) VALUES
('10', 'good pizza', 'good pizza', '5', '2');
*/

/*
INSERT INTO `mvp_yep`.`photos`
(`restaurant_id`, `url`) VALUES
('8', 'https://s3-media0.fl.yelpcdn.com/bphoto/neCjFvJ-u5LmDlBz71ullg/o.jpg');
INSERT INTO `mvp_yep`.`photos`
(`restaurant_id`, `url`) VALUES
('8', 'https://s3-media0.fl.yelpcdn.com/bphoto/pGaY-Ds2ya178RtktXlBLg/o.jpg');
INSERT INTO `mvp_yep`.`photos`
(`restaurant_id`, `url`) VALUES
('8', 'https://s3-media0.fl.yelpcdn.com/bphoto/lzyfDsqDgVQHxsVMs3dW7Q/o.jpg');
INSERT INTO `mvp_yep`.`photos`
(`restaurant_id`, `url`) VALUES
('9', 'https://s3-media0.fl.yelpcdn.com/bphoto/1_l-A0wjRpbcxcSFSI1OEA/o.jpg');
INSERT INTO `mvp_yep`.`photos`
(`restaurant_id`, `url`) VALUES
('9', 'https://s3-media0.fl.yelpcdn.com/bphoto/0AIj3jgrPx1K71WEEn8J2g/o.jpg');
INSERT INTO `mvp_yep`.`photos`
(`restaurant_id`, `url`) VALUES
('9', 'https://s3-media0.fl.yelpcdn.com/bphoto/YBBcvlKb4kqsitb9h1-p2g/o.jpg');
INSERT INTO `mvp_yep`.`photos`
(`restaurant_id`, `url`) VALUES
('10', 'https://s3-media0.fl.yelpcdn.com/bphoto/Ielsk99frSq8ZgZtWmMV7Q/o.jpg');
INSERT INTO `mvp_yep`.`photos`
(`restaurant_id`, `url`) VALUES
('10', 'https://s3-media0.fl.yelpcdn.com/bphoto/mid0nFgtziUxtxh3YUPm5Q/o.jpg');
INSERT INTO `mvp_yep`.`photos`
(`restaurant_id`, `url`) VALUES
('10', 'https://s3-media0.fl.yelpcdn.com/bphoto/vz8puM_m4gmpEj3tT_9uZw/o.jpg');
*/