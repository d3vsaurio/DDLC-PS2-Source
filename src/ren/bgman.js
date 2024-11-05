export const bgMan = {
    list  : {},
    image : '',
    preload : function (arr) {
        arr.forEach(element => {
           this.list[element] = new Image("assets/images/bg/" + element + ".png")
        });
    },
    setBg : function (bg) {
        this.image = bg
    },
    unload : function () {
        this.image = ''
        this.list  = {}
    }
}