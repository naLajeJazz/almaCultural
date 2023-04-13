
 ///Manipulando elementos atraves da rota
 const url_atual = window.location.pathname

 //rota home
 if (url_atual == '/home' || url_atual == "/"){
 
     document.getElementById('menuHome').className="border-warning border-bottom   border-2 rounded nav-link text-warning fs-5 active"
     
     
 }else if(url_atual == '/contato'){
     document.getElementById('menuContato').className="border-warning border-bottom   border-2 rounded nav-link text-warning fs-5 active"
                  
 }