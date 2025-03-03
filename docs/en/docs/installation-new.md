# Site Installation

This installation is designed for a new site. If you already have an existing site, you should follow the "old installation" instructions.  
You need to unzip the folder you downloaded. The structure of this folder is as follows.

**Requirements:**

- PHP >= 8.3
- MariaDB >= 10.10  
  **Optional:**
- Node.js >= 20
- npm >= 9

new-installation
-- public
-- database

old-installation
-- themes
-- modules

The `new-installation` folder contains the database files.  
Copy the contents of the `public` folder to your hosting space.  
Modify the `sites/default/settings.php` file by inserting the correct information for the database connection.

```php
<?php
// Exemple de configuration de la base de données
$databases['default']['default'] = array(
  'database' => 'nom_de_la_base_de_donnees',
  'username' => 'nom_utilisateur',
  'password' => 'mot_de_passe',
  'prefix' => '',
  'host' => '127.0.0.1',
  'port' => '3306',
  'isolation_level' => 'READ COMMITTED',
  'driver' => 'mysql',
  'namespace' => 'Drupal\\mysql\\Driver\\Database\\mysql',
  'autoload' => 'core/modules/mysql/src/Driver/Database/mysql/'
);
```

The information to modify is:

- database_name
- username
- password

The information to verify is:

- `127.0.0.1`: which may vary depending on the host
- `port`: which may vary depending on the host

Access the database manager, for example: phpMyAdmin or Adminer.  
Import the database located in `new-installation/database`.

That's it, you're done. Your site is ready for use.
