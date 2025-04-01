function jatek(kivalasztott) {
    const lehetosegek = ['kő', 'papír', 'olló'];
    const ellenseg = lehetosegek[Math.floor(Math.random() * 3)];
    let result = '';

    if (kivalasztott == ellenseg) {
        result = 'Döntetlen!';
    } else if ( (kivalasztott == 'kő' && ellenseg == 'olló') || (kivalasztott == 'papír' && ellenseg == 'kő') || (kivalasztott == 'olló' && ellenseg == 'papír') ) {
        result = 'Nyertél!';
    } else {
        result = 'Vesztettél!';
    }
    
    //document.getElementById('result').innerText = `Te: ${kivalasztott} - Gép: ${ellenseg} \n${result}`;   // ` -> altgr+7
    document.getElementById('result').innerText = "Te: " +kivalasztott+ " - Gép: " +ellenseg+ "\n" +result;
}