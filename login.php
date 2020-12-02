<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="estilos.css">
    <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=EB+Garamond|Pacifico&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="index.html">
      <img class="logotipo" src="img/logo1.png">
      </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="index.html">Inicio<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="organizacion.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ¿Quiénes somos?
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="organizacion.html">organización</a>
          <a class="dropdown-item" href="gruposExploradores.html">Grupos exploradores</a>
          <a class="dropdown-item" href="#">otro más</a>
        </div>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="https://exploradoresderionegro.org/formacion/">Formación<span class="sr-only">(current)</span></a>
      </li>
    <li class="nav-item active">
        <a class="nav-link" href="registro.html">Registro<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="login.html">Login<span class="sr-only">(current)</span></a>
      </li>
    </ul>

  </div>
</nav>
</header> 
    <main>
     <div class="modal-dialog text-center">
        <div class="col-sm-8 main-section">
            <div class="modal-content">
                <div class="col-12 user-img">
                    <img src="img/user.png" th:src="@{img/user.png}"/>
                </div>
                <form class="col-12" th:action="@{/login}" method="get">
                    <div class="form-group" id="user-group">
                        <input type="text" class="form-control" placeholder="Nombre de usuario" name="username"/>
                    </div>
                    <div class="form-group" id="contrasena-group">
                        <input type="password" class="form-control" placeholder="Contraseña" name="password"/>
                    </div>
                    <a type="submit" class="btn btn-primary"><i class="fas fa-sign-in-alt"></i>  Ingresar </a>
                    <a type="submit" class="btn btn-primary" href="registro.html"><i class="fas fa-sign-in-alt"></i>Registrarse</a>
                </form>
                <div class="col-12 forgot">
                    <a href="#">Recordar contraseña?</a>
                </div>
                
            </div>
        </div>
    </div>
    </main>  
    <footer> 
       <div class="container">
    <div class="row">
        <div class="col-12 col-md-6" class ="footer-dark bg-dark">
            <h6 class="text-muted lead">CONTACTO:</h6>
            <h6 class="text-muted">
            Calle 41C N° 57ª 58 <br>
            Urbanización las Torres.<br>
            Tel: 531 91 43 <br>
            Celular: 311 600 93 41 – 300 781 97 14 <br>
            Email: exploraodresderionegro@gmail.com <br>
            </h6>
        </div>
        <div class="col-12 col-md-6">
        <div class="pull-right">
        <h6 class="text-muted lead">ENCUENTRANOS EN LAS REDES</h6>
              <div class="redes-footer">
                  <a href="https://www.facebook.com/Exploradoresderionegro"><i class="fab fa-facebook"></i></a>
                  <a href="https://api.whatsapp.com/send?phone=573136450933&fbclid=IwAR0BOByOU6QKAlPZ33w0BbA6WNwObouaucimwWDfh5e0LabRdJvc7JM3srw"><i class="fab fa-whatsapp"></i></a>
                  <a href="https//www.mail.google.com/exploradoresderionegro@gmail.com"><i class="far fa-envelope"></i></a>
              </div>
        </div>
  </div>     
</div>
 <div class="row"> 
     <div class = "col-12 col-md-12" class="footer-dark bg-dark" class="content-center">
     <p class="text-center">© Copyright: Liseth Arelis Giraldo Morales | Rionego - Antioquia | 2020</p>
      <p class="text-center">lisethgiraldo628@gmial.com</p></div>
    </div>
    </div>      
    </footer>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
     <script src="https://kit.fontawesome.com/9bf67fe894.js" crossorigin="anonymous"></script>
</body>
</html>


