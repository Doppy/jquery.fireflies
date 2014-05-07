      </div>
      <!-- end of main -->
     
    </div>
    
  </div>
  
  <?php if ($args['page_name'] == 'contact'): ?>
  <div class="radial-shadow"></div>
  <!--<img class="shadow-effect-fullpage" src="img/shadow-effect-fullpage.png" width="100%" height="100%">-->
  <?php elseif($args['page_name'] == 'home'): ?>
  <div class="loading-screen radial-shadow">
  	<a href="#" id="loading">
    	<img src="img/logo-loading.png" width="76" height="71" alt="ISISS Logo" />
    	<h1>Looking for fairies &ampp; Elves...</h1>
        <div id="enter-site"></div>
    </a>
    
  </div>
  <?php endif; ?>
  
   <footer style="bottom:-100px;">
      <?php if($args['page_name'] == 'home'): ?>
        <div class="main-nav-container">
          <ul id="main-nav">
            <li><a href="about.php" id="main-nav-about">About</a></li>
            <li><a href="blog.php" id="main-nav-blog">Blog</a></li>
            <li><a href="contact.php" id="main-nav-contact">Contact</a></li>
            <li><a href="gallery.php" id="main-nav-gallery">Gallery</a></li>
            <li><a href="store.php" id="main-nav-store">Store</a></li>
          </ul>
          <div class="clear"></div>
        </div>
        <?php else: ?>
        <a class="fairy-door" href="index.php"></a>
        <?php endif;?>
    </footer>
  
  <!-- JavaScript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>
  <script src="../src/jquery.fairydust.js"></script>
  <script src="../src/jquery.fireflies.js"></script>
  <script src="js/leaves.js"></script>
  
  <script src="js/jquery.easing.1.3.js"></script>


  <!-- scripts concatenated and minified via build script -->
  <script src="js/plugins.js"></script>
  <script src="js/script.js"></script>
  <!-- end scripts -->

  <script>
    var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
  </script>
	
</body>
</html>