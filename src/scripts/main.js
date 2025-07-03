AOS.init();

const dataDoEvento = new Date("Sep 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contador = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diasAteEvento = Math.floor(distanciaAteEvento / (1000 * 60 * 60 * 24));
    const horasAteEvento = Math.floor((distanciaAteEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteEvento = Math.floor((distanciaAteEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteEvento = Math.floor((distanciaAteEvento % (1000 * 60)) / (1000));

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}`;

    if (distanciaAteEvento < 0){
        clearInterval(contador);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    } 
},1000);

