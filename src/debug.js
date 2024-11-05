export const debug = {
	init : function () {
		this.ee_info  = System.getCPUInfo()
		this.spc = 13
		this.msg1 = ''
		this.msg2 = ''
        this.font = new Font()
        this.font.color   = Color.new(128, 0, 255)
		this.font.scale   = (0.4)
		this.aux1 = 'aux1: '
	},
	show : function (x, y) {
		this.font.print(x, y, this.msg1)
		this.font.print(x, y+this.spc, this.msg2)
		this.font.print(x, y+this.spc*2, `RAM Usage: ${System.getMemoryStats().used} / ${this.ee_info.RAMSize}`)
		this.font.print(x, y+this.spc*3, this.aux1)
	}
}