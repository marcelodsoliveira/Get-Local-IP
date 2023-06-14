// Essa função serve para pegar o endereço de IP local da máquina

function getLocalIp(callback) {
  let externalService = new XMLHttpRequest();

  externalService.open("GET", "https://api.ipify.org?format=json", true);

  externalService.onreadystatechange = function () {
    if (externalService.readyState === 4 && externalService.status === 200) {
      let response = JSON.parse(externalService.responseText);
      let ip = response.ip || '';
      callback(ip);
    }
  };

  externalService.send();
}

getLocalIp(function (ip) {
  let ipAddressElement = document.querySelector("#displayip-div p");
  ipAddressElement.textContent = ip;
});

function closeSystem() {
  window.close();  
}
