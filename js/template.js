header = document.getElementsByTagName('header')[0]
footer = document.getElementsByTagName('footer')[0]

function loadTemplate() {
  header.innerHTML = `
    <div class="lg_header">
      <section class="layout">
        <div><img class="w-75 h-auto" src="assets/img/icons/logocrafty.png" alt=""></div>
        <div class="w-100">
          <div class="custom_input w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="svg_icon bi-search" viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
              </path>
            </svg>
            <input class="input" type="text" placeholder="Placeholder Text">
          </div>
        </div>
        <div class="text-end">
    <i class="fa-solid fa-user fa-2xl" style="color: #b68125;" data-bs-toggle="modal" data-bs-target="#myModal"></i>
</div>
        <div class="text-end">
          <i class="fa-solid fa-cart-shopping fa-2xl" style="color: #b68125" ;></i>
        </div>
      </section>

      <div class="container">
        <div class="row  justify-content-center mt-4 ">
          <ul class="nav col-12  mb-2 justify-content-center mb-md-0 d-flex flex-nowrap">
            <a class="btn btn-lg rounded-pill ms-3" href="#" role="button">
              categoria
            </a>
            <a class="btn btn-lg rounded-pill mx-3" href="#" role="button">
              categoria
            </a>
            <a class="btn btn-lg rounded-pill mx-3" href="#" role="button">
              categoria
            </a>
            <a class="btn btn-lg rounded-pill mx-3" href="#" role="button">
              categoria
            </a>
            <a class="btn btn-lg rounded-pill me-3" href="#" role="button">
              categoria
            </a>
          </ul>
        </div>
      </div>
    </div>

    <div class="sm_header">
      <div class="container container-fluid text-center ">
        <div class="row justify-content-evenly align-items-center">
          <div class="col-4">
            <img class="w-100 h-100" src="assets/img/icons/logocrafty.png" alt="">
          </div>
          <div class="col-2">
            <i class="fa-solid fa-user fa-2xl" style="color: #b68125;"></i>
          </div>
          <div class="col-2">
            <i class="fa-solid fa-cart-shopping fa-2xl" style="color: #b68125" ;></i>
          </div>
          <div class="col-2">
            <i class="fa-solid fa-bars fa-2xl" style="color: #b68125"></i>
          </div>
          <div class="col-11">
            <div class="custom_input w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="svg_icon bi-search" viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                </path>
              </svg>
              <input class="input" type="text" placeholder="Placeholder Text">
            </div>
          </div>
        </div>
      </div>
    </div>


     <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="">  
                            <div class="main-accesso">  
                                <input class="input-accesso"  type="checkbox" id="chk" aria-hidden="true">
                                
                                <div class="signup">
                                    <form>
                                        <label class="label-accesso" for="chk" aria-hidden="true">Registrati</label>
                                       <!-- <select class="select-accesso" name="tipo_utente" id="tipo_utente" required="">
                                            <option value="" disabled selected>Seleziona tipo di utente</option>
                                            <option value="utente">Utente</option>
                                            <option value="azienda">Azienda</option>
                                        </select>-->
                                        <div id="utente-fields" class="">
                                            <input class="input-accesso"  type="text" name="nome" placeholder="Nome" required="">
                                            <input class="input-accesso"  type="text" name="cognome" placeholder="Cognome" required="">
                                            <input class="input-accesso"  type="email" name="email" placeholder="Email" required="">
                                            <input class="input-accesso"  type="email" name="confirm_email" placeholder="Conferma Email" required="">
                                            <input class="input-accesso"  type="password" name="pswd" placeholder="Password" required="">
                                            <input class="input-accesso"  type="password" name="confirm_pswd" placeholder="Conferma Password" required="">
                                        </div>
                                       <!-- <div id="azienda-fields" class="hidden">
                                            <input class="input-accesso"  type="text" name="nome_azienda" placeholder="Nome Azienda" required="">
                                            <input class="input-accesso"  type="text" name="partita_iva" placeholder="Partita IVA" required="">
                                            <input class="input-accesso"  type="email" name="email" placeholder="Email" required="">
                                            <input class="input-accesso"  type="email" name="confirm_email" placeholder="Conferma Email" required="">
                                            <input class="input-accesso"  type="password" name="pswd" placeholder="Password" required="">
                                            <input class="input-accesso"  type="password" name="confirm_pswd" placeholder="Conferma Password" required="">
                                        </div>-->
                                        <button class="tasto-accesso">Registrati</button>
                                    </form>
                                </div>
                                
                                <div class="login">
                                    <form>
                                        <label class="label-accesso" for="chk" aria-hidden="true">Accedi</label>
                                        <input class="input-accesso" id="username" type="email" name="email" placeholder="Email" required="">
                                        <input class="input-accesso" id="password" type="password" name="pswd" placeholder="Password" required="">
                                        <a class="password-dimenticata" href="#">Password dimenticata</a>
                                        <!--<select class="select-accesso"  name="tipo_accesso" required="">
                                            <option value="" disabled selected>Seleziona tipo di accesso</option>
                                            <option value="utente">Utente</option>
                                            <option value="azienda">Azienda</option>
                                            <option value="amministratore">Amministratore</option>
                                        </select>-->
                                        <button class="tasto-accesso">Accedi</button>
                                        <p id="message"></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `



  footer.innerHTML = `
    <div class="row row-cols-2 row-cols-md-4 pt-4 footer_tab">
      <div class="col-3 mb-3 align-self-center text-center">
        <a href="#" class="mb-3 " id="tornasu">
          <i class="fa-solid fa-circle-arrow-up fa-2xl" style="color: #b68125;"></i>
        </a>
      </div>

      <div class="col mb-3">
        <h5 class="titolofooter">Area personale</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="Carrello.html" class="nav-link p-0 ">Carrello</a></li>
          <li class="nav-item mb-2"><a href="Profilo.html" class="nav-link p-0 ">Profilo</a></li>
        </ul>
      </div>

      <div class="col mb-3">
        <h5 class="titolofooter">Info</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="FAQ.html" class="nav-link p-0 ">FAQ</a></li>
          <li class="nav-item mb-2"><a href="LavoraConNoi.html" class="nav-link p-0 ">Lavora con noi</a></li>

        </ul>
      </div>

      <div class="col mb-3">
        <h5 class="titolofooter">Chi Siamo</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="Chi-Siamo.html" class="nav-link p-0 ">Scopri Crafty</a></li>
          <li class="nav-item mb-2"><a href="Contattaci.html" class="nav-link p-0 ">Contatti</a></li>
        </ul>
      </div>
    </div>


    <div>
      <div class="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
        <div class="col-md-4 d-flex align-items-center mx-4">
          <span class="mb-3 mb-md-0 ">© 2024 Crafty, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled mx-4">
          <li class="ms-3"><i class="fa-brands fa-square-facebook fa-2xl" style="color: #b68125;"></i></li>
          <li class="ms-3"><i class="fa-brands fa-square-x-twitter fa-2xl" style="color: #b68125;"></i></li>
          <li class="ms-3"><i class="fa-brands fa-square-instagram fa-2xl" style="color: #b68125;"></i></li>
        </ul>
      </div>
      `
    //   document.getElementById('tipo_utente').addEventListener('change', function() {
    //     const utenteFields = document.getElementById('utente-fields');
    //     const aziendaFields = document.getElementById('azienda-fields');
    //     if (this.value === 'utente') {
    //         utenteFields.classList.remove('hidden');
    //         aziendaFields.classList.add('hidden');
    //     } else if (this.value === 'azienda') {
    //         aziendaFields.classList.remove('hidden');
    //         utenteFields.classList.add('hidden');
    //     } else {
    //         utenteFields.classList.add('hidden');
    //         aziendaFields.classList.add('hidden');
    //     }
    // });
}async function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const messageElement = document.getElementById('message');

  try {
      console.log("OK");
      const response = await fetch('http://localhost:8080/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
      });

      if (response.status === 200) {
          const data = await response.json();
          const token = data.token;
          localStorage.setItem('authToken', token);
          messageElement.textContent = 'Login successful';
          messageElement.style.color = 'green';
          //TODO: redirect sul profilo utente
      } else {
          messageElement.textContent = 'Invalid credentials';
          messageElement.style.color = 'red';
      }
  } catch (error) {
      console.error('Error during login:', error);
      messageElement.textContent = 'Error during login';
      messageElement.style.color = 'red';
  }
}

async function logout(event) {
  event.preventDefault();
  const token = localStorage.getItem('authToken');
  const messageElement = document.getElementById('message');

  try {
      const response = await fetch('http://localhost:8080/auth/logout', {
          method: 'POST',
          headers: {
              'Authorization': `${token}`
          }
      });

      if (response.status === 200) {
          localStorage.removeItem('authToken');
          messageElement.textContent = 'Logout successful';
          messageElement.style.color = 'green';
      } else {
          messageElement.textContent = 'Error during logout';
          messageElement.style.color = 'red';
      }
  } catch (error) {
      console.error('Error during logout:', error);
      messageElement.textContent = 'Error during logout';
      messageElement.style.color = 'red';
  }
}