---
layout: post
title: The Power of Node
---
Recently i've had the opertunity to dig a bit into Node.js and all that it entails. If you dont know very much about Node, it takes a language that has been designed for the front-end, and repourposes it to function on the server. Originally I was pretty confused about Node, and grouped it with all the other popular JS frameworks coming out like Angular and Backbone. These other frameworks still run on the front-end, they just make creating web application easier. Node is designed to replace other backend languages like Ruby and PHP. Actually JavaScript is a very popular scripting language, and as a front-end developer you probably already know it well enough to start with Node.

I first became interested in Node.js when the irc channel I frequent mentioned that it's bot was made with Node. The code was available on github so I cloned the repo and started to dig around. I recognised some javascript, but the fine details of Node were lost to me until I did the Learn you node course on [Nodeschool.io]().

You might be asking, what kind of things might I be able to do with Node.js? Great question. You can create and manage your own web server using nothing but javascript. This is pretty increadible considering the suite of tools and utilities you need to start a server with PHP or Ruby on Rails.

Some other advantages of Node is that its a totally asynchronous framework. That means that instead of code being run like so: (line1, line2, line3, line4), it tries to run all of the code at once. This is confusing for beginers to javascript who are used to the structure of synchronus programming, but to more experienced users this means faster code exectution. One thing that you have to be careful of is something called a "race-condition" and "blocking" where some code is waiting for other code to finish and negates the advantages of async programming.

This kind of programming relies heavly on the use of "callback" functions that run once the original function is complete. So if you query the server for information, you want to run code manipulating that data in the callback function of the query. This makes sure that the the info is there when you need it.

All-in-all my Node.js has been a whole lot of fun. I've become more accustomed to medium/high level javascript concepts while creating a fun little tool for my IRC channel. 