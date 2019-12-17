---
test: posttest
title: Responsive Redirect
tags: [Responsive, Redirect]
description: Redirects to desktop or mobile versions of index pages depending on screen size.
author: Jaemin Kim
--- 

# responsive_redirect
URL redirect methods for Desktop and Mobile applications. 

# iframe Redirect:
Using JavaScript create two variables: Phone and Web. Each variable has its own iframe with it's own src link. Then create another variable with the screen width. If screen width is smaller than 768 then it is var Phone  = iframe src.

With this method in mind, I created two heroku servers hosting applications built specifically towards mobile or desktop. Then entered the URL to the correct iframe variables. Then created a S3 bucket with AWS for the single html page as the main server. The html page on AWS redirects to the heroku applications without leaving the AWS server. 

# direct Redirect:
The index.html page loads the Javascript that says if the screen is greater or equal to 699 then load index_desktop.html instead. If the screen is not greater than nothing happens and the index.html loads normally. 

# When mobile responsive isn't optimal:
Mobile responsive web design is a great solution to a wide spread problem. But for some applications there just isn't a really good way to optimize it to mobile. Designing web applications mobile first is nice in theory, but the viewing experience with desktop is so different that it could end up being easier to design two seperate applications. 

# Source Code

## Index.html

    <!DOCTYPE html>
    <html dir="ltr" lang="en-US">
    <head>
        <title>Mobile</title>
        <meta charset="utf-8">
        <meta content="width=device-width,initial-scale=1, user-scalable=no" name="viewport">


    <script type="text/javascript">
    if (screen.width >= 699) {
    document.location = "index_desktop.html";
    }
    </script>


    </head>
    <body>
    <h1> This is for mobile. </h1>
    </body>
    </html>

## Index_desktop.html

    <!DOCTYPE html>
    <html dir="ltr" lang="en-US">
    <head>
        <title>Desktop</title>
        <meta charset="utf-8">
        <meta content="width=device-width,initial-scale=1, user-scalable=no" name="viewport">

    </head>
    <body>
    <h1> This is for desktop. </h1>
    </body>
    </html>

## Iframe_redirect.html

    <!DOCTYPE html>
    <html dir="ltr" lang="en-US">
    <head>
    <title>iframe url redirect</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1, user-scalable=no">
    </head>
    <body style="margin:0">


    <script type='text/javascript'>
    var Phone ='<iframe src="https://mighty-crag-52337.herokuapp.com/" allowTransparency="true" scrolling="no" frameborder="0" height="100%" width="100%"  style="display:block;position:absolute;"></iframe>';
    var Web = '<iframe src="https://glacial-bayou-55896.herokuapp.com/" allowTransparency="true" scrolling="no" frameborder="0" height="100%" width="100%"  style="display:block;position:absolute;"></iframe>';
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if ( w < 768){
    document.write (Phone)
    }else{
    document.write (Web)
    }
    </script> 

    </body>
    </html>

[Back Home](https://jaemnkm.github.io/jekyll-now/)