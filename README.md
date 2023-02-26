# Ultimate blog website starter kit

### Full stack repository to develop and manage/run your own blogging website

## How to Run Locally

```
Clone the repository
run yarn
run yarn run dev
open localhost:4001 for application or home page
open localhost:4001/admin for admin page

```

## Full-stack repository to develop and run your blogging website

## Under the Hood
Let's assume you have one full-stack repository containing the application and the dashboard/backend to connect the application to the database. 

I mean a complete full-stack repository to develop scalable products.

All you need is to clone the repository run a couple of commands and your full-fledged product is ready. 

Let me explain with the chart added below. This is what the repository does

![How the repository works and looks like, we have the application show on the left side and the admin flow explained in the right side](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ko1cz7y1ubrca4fwlu13.png)

Application is the frontend part of the website and admin is the backend part of the website.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kc387eb1mw7u0w1lhbnx.png)

What exactly you have to do is explained in the user flow. You just clone the repository run a couple of commands, open the admin write page and push the content and your blog website with content is ready to deploy.

This is the entire repository.

- Manage your content in one place
- Manage the UI of the website in one place
- Manage subscribers and business in one place

Get the repository by clicking here

## What is this repository?
This is a blog starter kit or blog start full-stack repository that helps developers to create and manage their content website including backend and front. 

This repository contains the application which is at the front end of the website and the admin which is at the backend of the website. 

## What are Application and Admin in the repository?
Application is the look of the website and Admin is where the developer will manage the content of the website. 

The admin part includes the following-

- Blogs page to Edit/Delete and list all the articles from the database(Firebase)
- Write a page that contains an Editor to write blogs and save them in the database


## How to use the repository?

- Clone the repository
- Add the Firebase database configurations in the `next.config.js `file, you will get the firebase config from [Firebase console](https://firebase.google.com/).
- Run yarn and yarn run dev command
- Open localhost:3001/admin/write to write the blog
- Post the blog by adding a banner image
- Deploy the website

Your content website is ready.

## Why this repository?
Creating a blog website is not so easy and how you will scale is also a task, such as how to write content, how to save content and so on. 

A lot of things have to take care and this repository will solve this problem.

Get your blogging website ready instantly, and deploy it to your own domain.

None of the other no-code tools is providing you with the codebase or complete control of your own website and this repository did that.

## What you will get in the repository?

- Full stack repository of your own blog website
- Admin panel to write and manage articles
- Manage subscribers and grow your audience using the admin panel

## How to change the UI of the website
Currently, the components folder in the root directory contains the home page and blog route.
If you want to change the UI of the home and blog pages, simply go to their respective index.jsx page and edit it accordingly.

## Architecture

- components contain the route pages 
- pages contain the routes
- public contains the static files
- utils contain the config files for the database, themes and APIs
- modules contain the reuse codebases like Navbar, Body and Subscribe

## Tech stack

- Next JS
- React JS
- Tailwind CSS
- Firebase (Database)
- React Icons (for icons)
- React Query (data caching and fetching)
- Editor JS (for blog editor)

## How backend is connected to the front?
Firebase is the database and utils/firebase.js contains the connectivity whereas utils/api contains the APIs to perform CRUD operations.

## Can I change the database from firebase?
Yes, you can but you need to change the API methods because currently the APIs are written according to firebase. 

Go to the `utils/apis` folder and you will find `blogApi` and subscribeApi, simply change them according to your database.

If you want the repository with your favourite database please let me know in the comment section.

## Can I change the UI library?
Yes, you can the repository is yours once you get the repository edit and extend to whatever extent you can.

You can add Material UI or Chakra UI or whatever you want and replace all the UI components such as Navbar, Button, and Inputs correspondingly. 

If you again want the same repository for Material UI or Chakra UI just add in the comment and I'll make the one.

## How does the Admin work?
Admin is another web page, understand it like a CMS that will help the developer to view/write/delete articles using the editor. 

## How to manage subscriptions on the repository?
In the firebase database, EmailSubscribers is the collection name, you can create the same collection in MongoDB or SQL containing all the email subscribers. 
The subscribeApi contains the logic of how the user emails are added to the database. 

## What is the layout of the repository?

- We have a Body wrapping the root of the repository
- The Body contains a Navbar stick to the top
- The body contains a Footer that is at the bottom
- Lastly, the body contains the children or content
- The Footer has a subscribe component 
- The Navbar contains a dark and white theme toggle with subscribe button 

## Can you deploy the same repository to your own domain?
Yes, you can. 
You can change the entire UI, and architecture of the website according to your need. 
You can change the database also, and you can use other UI libraries or styling libraries. 
Do whatever you want using this repository this is yours and you have complete control.

