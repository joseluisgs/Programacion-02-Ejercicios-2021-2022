export funcion mesCalculo(mes, number):number {
    let diame;
    switch (mes) {

        case 01:
            diame = 365;


        case 02:
            diame = 334;

        case 03:
            diame = 306;

        case 04:
            diame = 275;

        case 05:
            diame = 245;

        case 06:
            diame = 214;

        case 07:
            diame = 184;

        case 08:
            diame = 153;

        case 09:
            diame = 122;


        case 10:
            diame = 92;

        case 11:
            diame = 61;

        case 12:
            diame = 31;


        default:
            diame = 0;
    }


    return diame;
}
