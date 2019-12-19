INSERT INTO user (id, first_name, last_name, user_name, email, password_hash, is_deleted, settings_id) VALUES  (3, 'User', 'User', 'cms', 'cms@tronico.com', '$2a$10$6IDH7YBMlz3B2W9GiHdEI.sm6tlVRDYGmA9eWzUDucYYnqQVvmR66', false, 2);
INSERT INTO user (id, first_name, last_name, user_name, email, password_hash, is_deleted, settings_id) VALUES  (4, 'User', 'User', 'vauban', 'vauban@tronico.com', '$2a$10$6IDH7YBMlz3B2W9GiHdEI.sm6tlVRDYGmA9eWzUDucYYnqQVvmR66', false, 2);
INSERT INTO user (id, first_name, last_name, user_name, email, password_hash, is_deleted, settings_id) VALUES  (5, 'User', 'User', 'eiffel', 'eiffel@tronico.com', '$2a$10$6IDH7YBMlz3B2W9GiHdEI.sm6tlVRDYGmA9eWzUDucYYnqQVvmR66', false, 2);
INSERT INTO user (id, first_name, last_name, user_name, email, password_hash, is_deleted, settings_id) VALUES  (6, 'User', 'User', 'technique', 'technique@tronico.com', '$2a$10$6IDH7YBMlz3B2W9GiHdEI.sm6tlVRDYGmA9eWzUDucYYnqQVvmR66', false, 2);
INSERT INTO user (id, first_name, last_name, user_name, email, password_hash, is_deleted, settings_id) VALUES  (7, 'User', 'User', 'magasin', 'magasin@tronico.com', '$2a$10$6IDH7YBMlz3B2W9GiHdEI.sm6tlVRDYGmA9eWzUDucYYnqQVvmR66', false, 2);
INSERT INTO user (id, first_name, last_name, user_name, email, password_hash, is_deleted, settings_id) VALUES  (8, 'User', 'User', 'test', 'test@tronico.com', '$2a$10$6IDH7YBMlz3B2W9GiHdEI.sm6tlVRDYGmA9eWzUDucYYnqQVvmR66', false, 2);


INSERT INTO role (id, name, is_default) VALUES
  (3, 'CMS', 1), (4, 'VAUBAN', 1), (5, 'EIFFEL', 1), (6, 'TECHNIQUE', 1), (7, 'MAGASIN', 1), (8, 'TEST', 1);

INSERT INTO user_roles (user_id, role_id) VALUES
  (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8);

INSERT INTO `settings` (`id`, `theme_name`) VALUES ('3', 'default');
INSERT INTO `settings` (`id`, `theme_name`) VALUES ('4', 'default');
INSERT INTO `settings` (`id`, `theme_name`) VALUES ('5', 'default');
INSERT INTO `settings` (`id`, `theme_name`) VALUES ('6', 'default');
INSERT INTO `settings` (`id`, `theme_name`) VALUES ('7', 'default');
INSERT INTO `settings` (`id`, `theme_name`) VALUES ('8', 'default');
