---
title: "Pillole: Come usare SCSS in Angular CLI 6"
path: blog/it/scss-in-angular-cli-6
tags: [javascript, angular, sass]
cover: ./preview.png
date: 2018-12-21
excerpt: Configura SCSS per il tuo prossimo progetto Angular.
---

Se hai familiarità con SCSS in Angular CLI 1.x prima e ora ti stai chiedendo come usarlo nella versione 6, una nuova versione fornita con Angular 6, sono qui per aiutarti.

![Sass logo](./sass-image.png "Il logo di Sass")

Ecco come la configurazione dello stile in CLI v1.x è simile al file .angular-cli.json.

```
"defaults": {
  "styleExt": "scss",
  "component": {}
}
```

Ma se dai un'occhiata a al file di configurazione **angular.json** nella versione 6, non troverai più questa configurazione. Ma non preoccuparti, il team di Angular CLI è riuscito a includerla in un modo molto più semplice. Per utilizzare SCSS, è sufficiente importare i file scss (il valore predefinito è `src / styles.scss`) a livello di progetto in un file **angular.json** come questo.

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

Questo è tutto, sei a posto con SCSS! Non sono necessarie altre configurazioni perché il CLI è già configurata, quindi non devi dire al file di configurazione quale CSS-preprocessore verrà usato più. Scavando più a fondo nel loro script di compilazione (`node_modules / @ angular-devkit / build-angular / src / angular-cli-files / models / webpack-configs / styles.js`), sono abbastanza sicuro che è possibile includere qualsiasi tipo di *.css*, *.sass*, *.scss*, *.less* o *.styl (stylus)* e inizia subito la codifica CSS. L'ho provato, molto facile!

Inoltre, forniscono anche il modo di configurare facilmente i browser di destinazione per applicare automaticamente i prefissi. È possibile trovare un elenco di nomi di browser nella cartella src e modificare i browser di destinazione per aggiungere i prefissi desiderati. Non l'ho ancora provato, fammi sapere il risultato se lo hai già provato.

Questo è solo un esempio di un post. L'originale è qui: https://medium.com/@vissanu_s/quick-tip-how-to-use-scss-in-angular-cli-6-63d263b3481c