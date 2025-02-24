//Importer le module http
http = require("http");
//Un moyen plus simple de créer un serveur
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/json" });
    res.write('{ nom: "King", prenom: "Ece"}');
    res.end();
  })
  .listen(8080, () => {
    console.log("Serveur en ecoute...");
  });

// //Créer un serveur
// server = http.createServer();

// server.on("request", (req, res) => {
//   //Afficher le message dans la console
//   console.log("Succesful request");

//   //Afficher le message dans le navigateur
//   res.writeHead(200, { "Content-Type": "text/plain" });

//   //Afficher un message dans le navigateur
//   res.write("Hello from Node.js");

//   //Mettre fin au processus d'execution
//   res.end();
// });

// //Ecouter le port 8080 qui est par defaut pour les requetes http. On peut utiliser autres port et afficher un message dans la console
// server.listen(8080, () => {
//   console.log("Serveur en ecoute...");
// });
