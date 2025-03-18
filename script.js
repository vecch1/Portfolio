function enviarWhatsapp(event){

    event.preventDefault();


    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = '5511975615269';

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const mensagemFormatada = encodeURIComponent(texto);

    const url = `https://whatsa.me/${telefone}/?t=${mensagemFormatada}`;

    window.open(url, '_blank');
}



