<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>ISISS World <?php echo (isset($args['page_title'])) ? '| '.$args['page_title'] : ''; ?></title>
  <meta name="description" content="">
  <meta name = "viewport" content = "initial-scale = 1.0, maximum-scale = 3.0, width = device-width">
  
  <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->
  <link rel="stylesheet" href="css/style.css">
  <script src="js/libs/modernizr-2.5.3.min.js"></script>
</head>
<body class="<?php echo $args['page_name'];?>">
	<header>
        <a class="logo" href="index.php"><img src="img/isiss-logo.png" width="104" height="100" alt="Isiss Logo"/></a>
    </header>
  <div class="wrapper">
    <!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
    <div class="bg">
      <div id="leafContainer"></div>
     <div class="bg-foot"></div>
    </div>
    
    <div class="container">
      
      <div class="main" role="main">