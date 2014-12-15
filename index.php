<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBoOhXb6Gcmi26DMuhYrw9IM9tEFmZwOKk&sensor=true"></script>
    <title>Map | Route</title>

    <!-- Bootstrap -->
    <link href="_/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="_/css/myStyle.css" rel="stylesheet" />

  </head>
  <body>
  	<?php include('_/inc/nav.php');?>
  	<div class="container-fluid" id="body">
	  	<div class="container">
	  	<div class="row">
		    <h1>Muna Eggspress</h1>
			<div id="map" class="col-lg-8 col-md-8"></div>
			<div id="aside" class="col-lg-4 col-md-4">
				<div class="widget">
					<div class="widget-title"><h3>Route</h3></div>
					<div class="widget-body"></div>
					<div class="widget-error"></div>
					<p><a class="btn btn-default btn-widget" href="#">Save</a></p>
				</div><!--end of widget-->
			</div><!--aside-->
		</div><!--row-->

			<footer class="nav navbar-fixed-bottom ">
				<p>Copyright &copy;</p>
			</footer>
			</div><!--container-->
	</div><!--End of wrapper-->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  	<script src="_/js/jquery.min.js" type="text/javascript"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="_/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="_/js/myscript.js" type="text/javascript"></script>
  </body>
</html>