const szabalyok = { // kulcs-érték párok
    'kő': ['olló', 'gyík'], // kő legyőzi az ollót és gyíkot
    'papír': ['kő', 'spock'], 
    'olló': ['papír', 'gyík'],
    'gyík': ['papír', 'spock'],
    'spock': ['kő', 'olló'] 
};

function jatek(valasztott) {
    const lehetosegek = ['kő', 'papír', 'olló', 'gyík', 'spock'];
    const ellenseg = lehetosegek[Math.floor(Math.random() * 5)];
    let result;

    if (valasztott == ellenseg) {
        result = 'Döntetlen!';
    } else if (szabalyok[valasztott].includes(ellenseg)) {
        result = 'Nyertél!';
    } else {
        result = 'Vesztettél!';
    }

    document.getElementById('result').innerText = `Te: ${valasztott} - Gép: ${ellenseg}\n${result}`;
}