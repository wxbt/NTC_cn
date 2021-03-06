/**
 * makecode NTC Temperature Sensor Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */

let table_B3380 = [
    982, 980, 977, 974, 971,   // -40  -  -36
    968, 965, 962, 958, 955,   // -35  -  -31
    951, 947, 943, 938, 934,   // -30  -  -26
    929, 925, 920, 914, 909,   // -25  -  -21
    904, 898, 892, 886, 880,   // -20  -  -16
    873, 867, 860, 853, 846,   // -15  -  -11
    838, 831, 823, 815, 807,   // -10  -  -6
    799, 791, 782, 774, 765,   //  -5  -  -1
    756, 747, 738, 729, 719,   //   0  -  4
    710, 700, 691, 681, 671,   //   5  -  9
    661, 651, 641, 631, 621,   //  10  -  14
    611, 601, 591, 581, 571,   //  15  -  19
    561, 551, 541, 532, 522,   //  20  -  24
    512, 502, 493, 483, 474,   //  25  -  29
    464, 455, 446, 437, 428,   //  30  -  34
    419, 410, 401, 393, 385,   //  35  -  39
    376, 368, 360, 352, 345,   //  40  -  44
    337, 329, 322, 315, 308,   //  45  -  49
    301, 294, 287, 281, 274,   //  50  -  54
    268, 262, 256, 250, 244,   //  55  -  59
    239, 233, 228, 223, 217,   //  60  -  64
    212, 207, 203, 198, 193,   //  65  -  69
    189, 184, 180, 176, 172,   //  70  -  74
    168, 164, 160, 157, 153,   //  75  -  79
    150, 146, 143, 140, 136,   //  80  -  84
    133
];

let table_B3950 = [
    999, 997, 995, 993, 991,   // -40  -  -36
    989, 986, 984, 981, 978,   // -35  -  -31
    975, 972, 969, 965, 962,   // -30  -  -26
    958, 954, 949, 945, 940,   // -25  -  -21
    935, 930, 925, 919, 914,   // -20  -  -16
    908, 901, 895, 888, 881,   // -15  -  -11
    874, 867, 859, 851, 843,   // -10  -  -6
    834, 826, 817, 808, 799,   //  -5  -  -1
    789, 780, 770, 760, 749,   //   0  -  4
    739, 728, 718, 707, 696,   //   5  -  9
    685, 673, 662, 651, 639,   //  10  -  14
    628, 616, 604, 593, 581,   //  15  -  19
    570, 558, 546, 535, 523,   //  20  -  24
    512, 501, 489, 478, 467,   //  25  -  29
    456, 445, 435, 424, 414,   //  30  -  34
    404, 394, 384, 374, 364,   //  35  -  39
    355, 346, 336, 328, 319,   //  40  -  44
    310, 302, 294, 286, 278,   //  45  -  49
    270, 263, 256, 249, 242,   //  50  -  54
    235, 228, 222, 216, 210,   //  55  -  59
    204, 198, 193, 187, 182,   //  60  -  64
    177, 172, 167, 162, 158,   //  65  -  69
    153, 149, 145, 141, 137,   //  70  -  74
    133, 129, 126, 122, 119,   //  75  -  79
    115, 112, 109, 106, 103,   //  80  -  84
    100
]

enum NTC_B {
    //% block="3380"
    B3380,
    //% block="3950"
    B3950
}

let table = table_B3380

/**
 * NTC ????????????????????????
 */
//% weight=20 color=#Ffbc11 icon="\uf2c8" block="B_???????????????"
namespace NTCSenor {
    /**
     * ??? NTC ??? ADC ?????????????????????
     * @param adc is ADC convert value, eg: 256
     */
    //% blockId="NTCSenor_GET" block="???????????? %adc"
    //% weight=80 blockGap=8
    export function Temperature(adc: number): number {
        for (let i = 0; i < table.length; i++) {
            if (adc > table[i])
                return i - 40;
        }
        return 85;
    }

    /**
     * ?????? NTC ???????????????????????? B
     * @param B is NTC B value, eg: NTC_B.B3380
     */
    //% blockId="NTCSenor_SET" block="?????????????????? B %B"
    //% weight=100 blockGap=8
    export function set(B: NTC_B): void {
        if (B == NTC_B.B3380)
            table = table_B3380
        else
            table = table_B3950
    }
}
