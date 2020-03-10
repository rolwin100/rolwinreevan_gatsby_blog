---
title: How to setup TypeScript with Laravel and Vue
date: 2018-11-12
tags: [laravel, vuejs, typescript, javascript, nodejs]
path: blog/setup-typescript-with-laravel-and-vue
cover: ./preview.jpg
excerpt: In this post we'll see how setup the Typescript and how use it in a project built with Laravel and Vue.
---

These last couple of weeks, I have been working on a Laravel project with a lot of dynamic interfaces that are heavily dependent on Vue. As the project started to get bigger and I was passing around many of the same data objects in different modules I felt that I wanted to secure myself from not accessing wrong properties or passing wrong arguments to functions that I might have written weeks ago.

For smaller projects I feel that TypeScript can be a bit overkill when you just want something up and running fast, however I do definitely see its use cases once the project gets bigger, as I did with this project. After doing a lot of research and watching tutorials on how to get Laravel and Vue up and running with TypeScript support, I felt that the setup process was very complicated and many of the tutorials didn’t use the Vue class component, which I feel is where the real power of TypeScript kicks in.

So, I decided to put together a guide that has as few steps as possible and that uses as few third-party dependencies as possible. This is the result of me banging my head against the wall for a day in frustration trying different setup methods which most of them failed miserably. Follow the steps below if you want to avoid this kind of a headache and stress while setting up TypeScript with Vue in Laravel. :)

First, start off by creating a new Laravel project.

```
composer create-project --prefer-dist laravel/laravel laravel-typescript
```

Then, add a `tsconfig.json` file in the root of your repository.

```
{
    "compilerOptions": {
        "target": "es5",
        "strict": true,
        "module": "es2015",
        "moduleResolution": "node",
        "experimentalDecorators": true
    },
    "include": [
        "resources/assets/js/**/*"
    ]
}
```
Replace the script section in your resources/assets/js/components/ExampleComponent.vue file with the following
```
<script lang="ts" src="./ExampleComponent.vue.ts"></script>
```
Now add this resources/assets/js/components/ExampleComponent.vue.ts file that you are referencing in the script tag.
```typescript
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class ExampleComponent extends Vue {
    mounted() {
        console.log('Component mounted.')
    }
}
```
Add the necessary NPM dependencies, this setup will use the vue-loader that comes with Laravel Mix which will use the ts-loader and TypeScript to compile TypeScript down to JavaScript. The vue-class-component is there for class support with TypeScript in Vue components.

```
npm install vue-class-component ts-loader typescript --save-dev
```
Install the rest of the NPM dependencies that comes with Laravel.

```
npm install
```

Tweak the resources/views/welcome.blade.php template file to add Vue support and to render your component like so:

```html
<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
        <title>Laravel</title>
    </head>
    <body>
        <div id="app">
            <example-component></example-component>
        </div>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
```

Lastly, generate a new JS bundle file by running the following NPM command
```
npm run dev
```
Now if you run php artisan serve to spin up a development server, open http://127.0.0.1:8000 in your browser and check-out the console you should see the message ‘Component mounted.’

Congratulations, you now have TypeScript support with Vue in your Laravel project!

I hope this was informative and that it will help someone out there trying to setup something similar to what I introduced in this article.

The full repository is located here:
https://github.com/oliverlundquist/laravel-vue-typescript-setup.

If you would like to read more about Vue and TypeScript, check out these references:
*   https://vuejs.org/v2/guide/typescript.html
*   https://github.com/vuejs/vue-class-component

This is just an example of a post. The original is here:
https://oliverlundquist.com/2018/01/17/typescript-easy-setup-with-laravel-and-vue.html