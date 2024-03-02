<template>
    <section>
      <footer class="footer">
        <div class="footer-column">
          <div class="contact-info">
            <i class="fas fa-phone"></i>
            <div class="info-text">
              <span>Contatti</span>
              <div class="text"><b>Gianluca Rizzo</b>, Tel: 3275924833, Email: gianlucarizz@gmail.com</div>
              <div class="text"><b>Anna Antoniozzi</b>, Tel: 3475995983, Email: anna1995.aa@gmail.com</div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </template>
  
  <style>
  .footer {
    background-color: #c4c4c4;
    padding: 2rem;
    margin-bottom: -30px;
  }
  
  .footer-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .contact-info {
    display: flex;
    align-items: center;
  }
  
  .info-text {
    margin-left: 10px;
  }
  
  .phone-number,
  .email {
    margin-top: 5px;
    margin-left: 10px;
  }
  </style>