# Configuration avancée du thème

La configuration avancée vous permet de personnaliser divers aspects du thème, tels que la taille de la police, la taille des titres, les couleurs, ainsi que de nombreuses autres options.

Pour accéder à la configuration avancée du thème, naviguez vers `/admin/structure/config_theme_entity`. Cette page affiche la liste des thèmes générés par le module `config_theme_entity`. Cliquez sur "Modifier" pour accéder aux paramètres de configuration du thème.

**Remarques :**

- Laissez le champ **"Forcer la régénération des fichiers npm"** décoché, sauf si vous souhaitez régénérer les fichiers de votre sous-thème.
- Cochez le champ **"Générer les fichiers de style ?"** uniquement si vous avez installé les modules Node.js et npm.

Sur la page de configuration, vous pouvez :

- **Modifier la couleur des liens ou des boutons**  
  ![Couleur des liens et boutons](/assets/couleur-liens-boutons.png)
- **Modifier les couleurs de base**  
  ![Couleurs de base](/assets/couleurs-base2.png)
- **Modifier la taille de la police**  
  ![Taille de la police](/assets/taille-police.png)

Après avoir effectué vos modifications, enregistrez-les. Les styles seront régénérés automatiquement si vous avez coché la case **"Générer les fichiers de style ?"** et que les modules Node.js et npm sont installés.

Pour plus d'information voir [la documentation du module config_theme_entity](https://habeuk.com/fr/node/172).
