<!DOCTYPE html>
<html lang="zxx">
    <head>

        <?php include 'header.php'; ?>
        <title> Smash-Box</title>
        <meta name="description" content="">
        <meta name="keywords" content="">	

    </head>
    <body>


        <?php include 'nav.php'; ?>

        <!-- Breadcrumbs -->
        <section class="breadcrumbs overlay" data-stellar-background-ratio="0.5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li class="active"><a href="contact.html">Contact</a></li>
                        </ul>
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title">
                            <h2><span>Fill this form</span>Contact With Us</h2>
                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula There are many</p>
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-lg-8 offset-lg-2 col-12">
                        <form class="form" method="post" action="#">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <input type="text" name="name" placeholder="Name" required="required">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input type="email" name="email" placeholder="Email" required="required">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input type="text" name="Mobile No." placeholder="Mobile No." required="required">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea name="message" rows="6" placeholder="Type Your Message Here" ></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group button">	
                                        <button type="submit" class="btn"><i class="fa fa-envelope"></i>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>

        <div class="contact-map">
            <div class="map"></div>
        </div>




        <?php include 'footer.php'; ?>
    </body>
</html>