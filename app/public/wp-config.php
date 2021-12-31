<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'TOoWB3oGr1TwgYTk8k67+VuWS0O7J8UxRN/0FAx8UtpfVs/1nIqp/Sod0RvP055CBdpc2UaJUkWA5/4tFqCnMg==');
define('SECURE_AUTH_KEY',  't4joCmue5l48Tt8Rb0393fih4Jky9XuVB0kuU4VDXKg33FhZviJM5RkcZKGarHOcoO8qJz1WzdZFX3r4SosD9A==');
define('LOGGED_IN_KEY',    'KslVRTB3oUZvaVPY8Ey8Q1+xNjmmudjoik8vfP+iTo3plBIezGCSYDc+1tg6hh9O3fCyYH51/aYohxp9VWHPoA==');
define('NONCE_KEY',        'PK7L+wK+fG0ycIM+2HRisRA4I8WOa56fytD88nrfDPaemJDz/o/UA8hkRQ30Wacu0EiKZGMhYA3h84u22kPm7g==');
define('AUTH_SALT',        'mlsnfcTCGwBYMtBciIGj8w7DRNJuP4Rfu3wP69kKppSCHyvrRQcHxE45zeRzLpUtVwT17WNvlQjk4q9YVKFLTg==');
define('SECURE_AUTH_SALT', 'qnJ3sEW5+REmlTasaV7dD31f1nzBjy1nT/fKJzWDOkQuVJ9LJ8WtzKzP/+mbNguHrqBJ42ZoyHtHxtQT9dai7g==');
define('LOGGED_IN_SALT',   'rfAuPJwmUJEIFJO/nZzKRcDR6XUtCospDft6grqzdev29IJe3mp2vtV9zqpv+V9qJel7ehDoKJJZJLPC2qzB+A==');
define('NONCE_SALT',       'WIrZwJ1d0HpQ/upTU1NBUG6BwIqZUOqVk+IpAmw98Ymj1BgF0isbSteJ8Cxxo1lXRGR1dd1uWOZDc2AUpAtHSQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
