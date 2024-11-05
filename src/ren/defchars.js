export const defChars = {
    sets: {
        '1' : {
            l : '1l',
            r : '1r'
        },
        '2' : {
            l : '1l',
            r : '2r'
        },
        '3' : {
            l : '2l',
            r : '1r'
        },
        '4' : {
            l : '2l',
            r : '2r'
        },
        '1b' : {
            l : '1bl',
            r : '1br'
        },
        '2b' : {
            l : '1bl',
            r : '2br'
        },
        '3b' : {
            l : '2bl',
            r : '1br'
        },
        '3b' : {
            l : '2bl',
            r : '1br'
        },
        '4b' : {
            l : '2bl',
            r : '1br'
        },
        '5' : {
            l : '3',
            r : ''
        },
        '5a' : {
            l : '3a',
            r : ''
        },
        '5b' : {
            l : '3b',
            r : ''
        },
        '5c' : {
            l : '3c',
            r : ''
        },
        '5d' : {
            l : '3d',
            r : ''
        }
    },
    overrides : {
        Sayori : {},
        Natsuki: {
            /*
            b: {},
            h: { //
                '2c': 'z=0' //on top
            },
            m: { //move coords
                '3': {
                    x: -7,
                    y: -11,
                }
            }
            */
        },
        Yuri: {//overrides sets
            '1'  : '5a', // <'1'> 1l1r -> 3a
            '2'  : '5c', // <'2'> 1l2r -> 3c
            '3'  : '5d', // <'3' : '4'> 2l2r -> 3d
            '3b' : '4b', // <'3b': '4b'> 2bl1r **** verify in later scripts
            '4'  : '5',  // <'4' : '5'> 3 --ok
            '4b' : '5b'  // <'4b': '5b'> 3b --ok **** verify in later scripts
        },
        Monika: {}
    },
    xpos: { //left positions
        'c'  : 128, //center
        'l'  : -72, //left
        'r'  : 328, //right
        '2.1': 8,   //left  1/2
        '2.2': 248, //right 2/2
        '4.1': -93, //left  1/2
        '4.2': 54,  //left  2/2
        '4.3': 201, //right 1/2
        '4.4': 348, //right 2/2
    },
    hIsTop : function(name, key) {
        let ret = false
        if (name == 'Natsuki' && key == '2c') {
            ret = true
        }
        return ret
    },
    lMoveX : function(name, key) {
        let ret = 0
        if (name == 'Natsuki' && key == '3') {
            ret = -7
        }
        return ret
    },
    lMoveY : function(name, key) {
        let ret = 0
        if (name == 'Natsuki' && key == '3') {
            ret = -11
        }
        return ret
    }
}