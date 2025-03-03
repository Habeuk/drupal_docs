# Installation du site

Cette installation est adaptée pour un nouveau site. Si vous avez déjà un site, vous devez suivre "ancienne installation".  
Vous devez dézipper le dossier que vous avez téléchargé. La structure de ce dossier est la suivante.

**Recommandations :**

- PHP >= 8.3
- MariaDB >= 10.10  
  **Optionnel :**
- Node.js >= 20
- npm >= 9

```
- new-installation
  -- public
  -- database.
- old-installation
  -- themes
  -- modules
```

Le dossier `new-installation` contient les fichiers de la base de données.  
Copiez le contenu du dossier `public` dans votre espace d'hébergement.  
Modifiez le fichier `sites/default/settings.php` en y insérant les bonnes informations pour la connexion à la base de données.

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

Les informations à vérifier sont :

- `127.0.0.1` : qui peut varier en fonction de l'hébergeur
- `port` : qui peut varier en fonction de l'hébergeur

Accédez au gestionnaire de base de données, par exemple : phpMyAdmin ou Adminer.  
Importez la base de données présente dans `new-installation/database`.

Voilà, vous avez terminé. Votre site est prêt à l'utilisation.
