/**
 * Feel free to change the username as well as the password given to it
 */
CREATE USER 'teams_system_api'@'localhost' IDENTIFIED BY 'mySecretPassord';

/* In an ideal world, we should strictly provide the grants the API has access 
 * to a specific table rather than all the privileges.
 */
GRANT ALL PRIVILEGES ON teams_system.teams TO 'teams_system_api'@'localhost';

flush privileges;