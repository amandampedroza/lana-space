function cadastrar() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = nome_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;
  

    // Verificando se há algum campo em branco
    if (
      emailVar == "" ||
      senhaVar == "" ||
      confirmacaoSenhaVar == "" 
    ) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        "(Mensagem de erro para todos os campos em branco)";

      finalizarAguardar();
      return false;


    } else if (nomeVar.length < 1 ) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        "(Insira um nome válido)";

      finalizarAguardar();
      return false;

    } else if (emailVar.includes('@') == false && emailVar.includes('.') == false) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        "(E-mail deve conter @ e .)";

      finalizarAguardar();
      return false;

    }
    else if (senhaVar.length < 6) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        "(Senha deve conter no mínimo 6 caracteres)";

      finalizarAguardar();
      return false;

    }
    else if (confirmacaoSenhaVar =! senhaVar) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        "(Confirmação de senha inválida)";

        finalizarAguardar();
        return false;

      } else {
        setInterval(sumirMensagem, 5000);
      }
    }