# Installation du site

Cette installation est adapté pour un nouveau site, si vous avez un site vous devez suivre "acienne installation".
Vous devez dezipper le dossier que vous avez telechargé. La structuration de ce dossier est la suivante.
recommandations :

- PHP >= 8.3
- mariadb >= 10.10
  optionnel:
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

Le dossier "new-installation" contient les fichiers la base de données.
Copier le contenu de public dans votre espace d'hebergement.
Modifier le fichier sites/default/settings.php en y inserrant les bonnes informations pour la connexion à la BD.

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

Les informations à modifier sont :

- nom_de_la_base_de_donnees
- nom_utilisateur
- mot_de_passe

Les informations à verifier sont :

- 127.0.0.1 : qui peut varier en fonction de l'hebergeur
- port : qui peut varier en fonction de l'hebergeur

Acceder au gestionnaire de base de données par exemple : phpmyadmin ou adminer ...
Importer la base de donnée presente dans "new-installation/database".

Voila, vous avez terminé, votre site est pres à l'utilisation.
