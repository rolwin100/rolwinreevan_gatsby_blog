---
title: "Astuce: comment utiliser SCSS dans Angular CLI 6"
path: blog/fr/scss-in-angular-cli-6
tags: [javascript, angular, sass]
cover: ./preview.png
date: 2018-12-21
excerpt: Configurez SCSS pour votre prochain projet Angular.
---

Si vous connaissez déjà SCSS dans Angular CLI 1.x et que vous vous demandez maintenant comment l’utiliser dans la version 6, une toute nouvelle version fournie avec Angular 6, je suis là pour vous aider.

![Sass logo](./sass-image.png "Le logo de Sass")

Voici à quoi ressemble la configuration de style dans la CLI v1.x dans le fichier .angular-cli.json.

```
"defaults": {
  "styleExt": "scss",
  "component": {}
}
```

Mais si vous examinez un schéma de configuration du fichier **angular.json** dans la version 6, vous ne retrouverez plus cette configuration. Mais ne vous inquiétez pas, l’équipe Angular de la CLI l’a couvert beaucoup plus facilement. Pour utiliser SCSS, importez simplement vos fichiers scss (la valeur par défaut est `src / styles.scss`) au niveau de votre projet dans un fichier **angular.json** comme celui-ci.

```
{
  ...
  projects: {
    [your_project_name]: {
      ...
      architect: {
        build: {
          ...
          options: {
            styles:{
              "src/styles.scss"
            }
          }
        }
      }
    }
  }
}
```

C’est tout, vous pouvez utiliser SCSS! Aucune autre configuration n’est nécessaire car l’équipe de la CLI vient juste de la couvrir, vous n’aurez donc pas à indiquer à la configuration le préprocesseur CSS qui sera utilisé. En approfondissant leur script de construction (`node_modules / @ angular-devkit / build-angular / src / angular-cli-files / models / webpack-configs / styles.js`), je suis sûr que vous pouvez inclure n'importe quel type de *.css*, *.sass*, *.scss*, *.less* ou *.styl (stylet)* et lancez immédiatement le codage de votre CSS. Je l’ai essayé très facilement!

De plus, ils permettent également de configurer facilement les navigateurs cibles pour le préfixe automatique. Vous pouvez trouver une liste de navigateurs de noms de fichiers dans le dossier src et modifier les navigateurs cibles de votre préfixe automatique. Je n’ai pas encore essayé, faites-moi savoir votre résultat si vous l’avez déjà essayé.

Ceci est juste un exemple de post. L'original est ici:https://medium.com/@vissanu_s/quick-tip-how-to-use-scss-in-angular-cli-6-63d263b3481c