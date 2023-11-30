import SistemaSeguranca from "./model/SistemaSeguranca";

const sistemaSeguranca = SistemaSeguranca.getInstance();

const senhaInserida = "SenhaUltraSecreta123";

if (sistemaSeguranca.acessarBaseSecreta(senhaInserida)) {
  console.log("Acesso concedido à Base Secreta!");
} else {
  console.log("Acesso negado. Senha incorreta.");
}
