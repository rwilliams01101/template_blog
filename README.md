# React Blog Template (Deployable to GitPages)

You can have this up and running in five minutes flat, no joke. This is a template for a SPA (Single Page App) Blog. Through some non-best practices, it can be deployed directly to GitPages. If you really want to do this right, I've marked the questionable code and it's an easy fix.

A few notes:
> This is built specifically to work with GitPages, so urls are handled differently. Instead of grabbing
> post ids from the url, they are routed by a click event which stores the id in local storage, then the
> component gets that id from local storage on load and render the appropriate items.

> All the data is static, so you will need to hard code your blog entries (described in AppConstants.js file). It is built in
> such a way you could make calls from a database if you feel so inclined. However I have not built in CRUD capabilities.

> The blog is built as all apps should be built: mobile-first. It works fine with desktop, but isn't very beautiful. I have media queries set up to handle desktop viewports so go style to your heart's content.

<br/>

## Setting Up:

**1. Fork repository (Top right corner of this page)**

**2. Clone repository to your system (HTTPS, SSH, or GitHub CLI)**

**3. Navigate terminal to the main directory (ex: C:/Repositories/template_blog) and run:**
- #### `npm install`
- #### `npm audit fix`
- #### `npm install react-router-dom`

**4. In the same terminal, launch the Project by running `npm start`**

Runs the app in the development mode.\
Open [http://localhost:3000/template_blog](http://localhost:3000/template_blog) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

<br/>

## Modifying Hints:

I have tagged anything you can quickly swap out with SWAP_ME, so if you just search that term you can quickly navigate to easily swappable items. The exception being in the manifest.json file and package.json (notes aren't possible). You'll just want to swap out "short_name" and "name" with your title in the manifest. You'll want to swap out "homepage" in package.json for your page in this format: http://YOURUSERNAMEHERE.github.io/template_blog

## Deploying to GitPages:

### `npm run deploy`
