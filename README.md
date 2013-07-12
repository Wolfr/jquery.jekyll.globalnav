jquery.globalnav
================

This repo shows an example setup to make HTML prototypes with page states and a global menu to navigate between pages.

We are using **jQuery**, **SCSS** (optional) and **Jekyll**. You should be familiar with Jekyll to use this.

Demo
----

Watch a [screencast](http://www.youtube.com/watch?v=frm2AGR8-ro).

See [demo](http://wolfslittlestore.be/jquery.jekyll.globalnav).

How to use
----------

Look at the demo site in _site/index.html.

Hit ctrl+M to trigger the global navigation.

To edit the site:

    jekyll serve -w
    compass watch

Arboretum
---------

    .                                        
    ├── README.md                            The file you are reading.
    ├── _includes                            
    │   ├── globalnav.html                   The globalnav include which is the listing of your pages
    │   ├── index-content.html               Example of working with state (see Working with state)
    │   └── pagestates                       
    │       └── example.html                 Example page state
    ├── _layouts                             
    │   └── default.html                     
    ├── config.rb                            Config file for SCSS
    ├── css
    │   └── screen.css
    ├── index-state2.html                    Example of state (see YAML front matter and index-content include)
    ├── index.html
    ├── js
    │   ├── jquery.cookie.js                 Cookies are used to save the visibility of the menu
    │   ├── jquery.globalnav.js              Javascript that manages the toggling of the menu and cookies
    │   ├── jquery.js                        jQuery
    ├── page-2.html                          Example pages
    ├── page-3.html                          Example pages
    └── scss
        ├── _globalnav.scss                  CSS for the menu
        └── screen.scss                      Your CSS. A .hide class (tied to display: none;) is required.

Working with state
------------------

In an HTML prototype, a single page often has 2 states. For example, a form might have an error and a regular state. You can use the page states mechanism to do this. You would do it as follows:

1. Make a new file in `_includes/pagestates/` copying the contents of `_includes/pagestates/example.html`
2. In this file, add the states of your pages.
3. Add the full page content as a new include in `_includes`
4. Manage state with YAML front matter in the files in the root ./ by adding a YAML entry for example: `state: state2`