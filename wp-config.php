<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'olshsfpo_website');

/** MySQL database username */
define('DB_USER', 'olshsfpo_websuer');

/** MySQL database password */
define('DB_PASSWORD', '7ebGfLteOoA8VCAzq');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '28b285a884a0ec2a378b9d12a6ead642d0fa8a2800bcefd1bd1820e6abf1a156');
define('SECURE_AUTH_KEY', 'fc3aedf86cf31946ca3161d1e1ed74837691b6f0506292742edbfbbc66b15d81');
define('LOGGED_IN_KEY', '9a8176913f22ad55d088a03a5dd17c9a28864b0a950f1fbbf1d8bc8b7feefc3c');
define('NONCE_KEY', 'fd924c8ca24b0127f56f66acbb7ca3e3e64fbefb0cb45c5ea921e4514d11acfd');
define('AUTH_SALT', 'd7c11119de9a2ff90b5f6204d2a1702819b30bfaa077037e0bc331027f42136e');
define('SECURE_AUTH_SALT', '05ed4083fe23394c87231f429f44c7b375558b963fededc9aee01b45b9dc3de9');
define('LOGGED_IN_SALT', 'ddc4be4e032e8596a56a91c6f8d33ab5ed9cc235c1328ce555017c9efa303613');
define('NONCE_SALT', 'a58d6d141e854e4c1d792610bc33c4d3b82b0e8120c6bd4e84d9d7ba5f7a76c0');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = '_AMF_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);


// Settings modified by hosting provider
define( 'WP_CRON_LOCK_TIMEOUT', 120   );
define( 'AUTOSAVE_INTERVAL',    300   );
define( 'WP_POST_REVISIONS',    5     );
define( 'EMPTY_TRASH_DAYS',     7     );
define( 'WP_AUTO_UPDATE_CORE',  true  );
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
