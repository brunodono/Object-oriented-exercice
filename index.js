import {Cliente} from "./Cliente.js";
import {Diretor} from "./Funcionarios/Diretor.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor ('Rodrigo', 10000, 12345678900);
diretor.cadastrarSenha('123456')

const gerente = new Gerente ('Ricardo', 5000, 12345678901);
gerente.cadastrarSenha('123')

const cliente = new Cliente("Lais", 38538888889, '654321')



const diretorEstalogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstalogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstalogado = SistemaAutenticacao.login(cliente, "654321");



console.log(diretorEstalogado , gerenteEstalogado, clienteEstalogado)
