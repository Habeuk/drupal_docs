# Site installation

This installation is adapted for a new site, if you have a site you must follow ‘old installation’.
You must unzip the folder you have downloaded. This folder is structured as follows.
recommendations :

- PHP >= 8.3
- mariadb >= 10.10
  optional:
- nodejs >= 20
- npm >= 9
<pre>
- new-installation
  -- public
  -- database.
- old-installation
-- themes
-- modules
</pre>

The ‘new-installation’ folder contains the database files.
Copy the contents of public to your hosting space.
Modify the sites/default/settings.php file by inserting the correct information for connecting to the DB.

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

The information to be modified is :

- database_name
- user_name
- password

The information to check is :

- 127.0.0.1: which may vary depending on the host
- port: which may vary depending on the hosting provider

Access the database manager for example: phpmyadmin or adminer ...
Import the database present in ‘new-installation/database’.

That's it, you're done, your site is ready to use.