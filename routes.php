<?php

require_once(__DIR__."/router.php");

// Static GET
// In the URL -> http://localhost
// The output -> Index
get('/', 'index.php');
get('/aj', './aj/index.php');

// Dynamic GET. Example with 1 variable
// The $id will be available in user.php
get('/karta-obcana', 'karta-obcana.php');
// Dynamic GET. Example with 1 variable
// The $id will be available in user.php
get('/karta-hosta', 'karta-hosta.php');
get('/aj/guest-card', './aj/karta-hosta.php');

// For GET or POST
// The 404.php which is inside the views folder will be called
// The 404.php has access to $_GET and $_POST
any('/404','404.php');
