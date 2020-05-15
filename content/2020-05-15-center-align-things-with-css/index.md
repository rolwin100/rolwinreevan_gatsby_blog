---
title: Center aligning content with CSS and flex-box
tags: [ html, css, reactjs ]
date: 2020-05-15T05:25:44.226Z
path: blog/center-align-things-with-css
cover: ./flexbox-css.jpg
excerpt: Many a time I noticed that people find it very difficult to align content to the center either vertically or horizontally using CSS. So let's see few ways in how you can align content with css.  
---

Many a time I noticed that people find it very difficult to align content to the center either vertically or horizontally using CSS 😐.
So I decided to write a few ways of aligning content to the center using CSS 😃.

### Center aligning text in CSS.

So let's start with the easy one aligning text to the center of the screen. To do this just use the style `text-align:center` on the specific tag you want to align the text to the center.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>center align content</title>
    </head>
    <body>

    <h1 style="text-align: center;">🍔 is center aligned</h1>
    <p>🍒 still in left</p>

    </body>
</html>
```

### aligning content to the center

Now let's get into a little complicated stuff. Aligning a `div` or any content to the center. So the trick is using `margin:auto` and giving a specific width to the div. This will get the `div` aligned horizontally center to the parent element.

```html

<!DOCTYPE html>
<html>
    <head>
        <title>center align content</title>
    </head>
    <style>
        body{
            margin: 0;
        }
        .box{
            height:25rem;
            background-color: blueviolet;
            width: 25rem;
            margin: auto;
        }
    </style>
    <body>
            <div class="box"></div>
    </body>
</html>
```

To align an image to the center for an `img` tag you need to just add one more CSS property that is `display:block`.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>center align content</title>
    </head>
    <style>
        body{
            margin: 0;
        }
        .imgCenter{
            display: block;
            background-color: blueviolet;
            margin: auto;
        }
    </style>
    <body>
            <img class="imgCenter" src="https://i.chzbgr.com/full/7588073728/h78549C5D/not-sure-if-i-hate-css-or-i-hate-designers"/>
    </body>
</html>
```

Suppose you want to align a `div` both vertically and horizontally to the center of the parent element then you can do that with the below code.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.centerBox {
  margin: 0;
  position: absolute;
  background-color: blue;
  height:15rem;
  width:15rem;
  top: 50%;
  left:50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
</head>
<body>
  <div class="centerBox"></div>
</body>
</html>

```

### Using flex to align content to the center

A still better way of aligning content to the center is by using the `flex` properties.

Suppose you want to align a `div` horizontally to the center of the parent element. Then you need to apply the `display: flex; align-items: center; justify-content: center;` properties to the parent element.

```html

<!DOCTYPE html>
<html>
    <head>
        <title>center align content</title>
    </head>
    <style>
        body{
            margin: 0;
        }
        .container {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .box{
            width: 100px;
            height: 100px;
            background-color: blueviolet;
        }
      
    </style>
    <body>
          <div class="container">
              <div class="box"></div>
          </div>  
    </body>
</html>


```

Suppose you want to vertically and horizontally align a `div` to the center of the parent element then you need to add the following style to `html` and `body` tag.

` html, body { height: 100%; }` and give some height to the parent element.

That's it your content should be vertically and horizontally aligned to the parent element. The below snippet shows how a div can be aligned to the center. 

```html
<!DOCTYPE html>
<html>
    <head>
        <title>center align content</title>
    </head>
    <style>
        html, body {
            height: 100%;
        }
        body{
            margin: 0;
        }
        .container {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .box{
            width: 100px;
            height: 100px;
            background-color: blueviolet;
        }
      
    </style>
    <body>
          <div class="container">
              <div class="box"></div>
          </div>  
    </body>
</html>

```

Congrats we are at the end of this post. I hope you enjoyed the topic.

 
