let girisSayisi = 0;

function artir() {
    girisSayisi++;
}

function degeriAl() {
    return girisSayisi;
}

module.exports = { artir, degeriAl };
