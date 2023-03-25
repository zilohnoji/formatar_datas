function formatDate(data) {
    objectDate = {
        dia: data.getDate(),
        mes: data.getMonth(),
        ano: data.getFullYear(),
        hora: data.getHours(),
        minuto: data.getMinutes(),
        segundo: data.getSeconds()
    }

    const verifyFormat = (objectDate) => {
        for (key in objectDate) {
            objectDate[key] = (String(objectDate[key]).length) < 2 ? `0${String(objectDate[key])}` : objectDate[key];
        }
    }

    const funcaoAnonima = (objectDate) => {
        return `${objectDate["dia"]}/${objectDate["mes"]}/${objectDate["ano"]} ${objectDate["hora"]}:${objectDate["minuto"]}:${objectDate["segundo"]}`
    }

    return (verifyFormat(objectDate), funcaoAnonima(objectDate));
}
