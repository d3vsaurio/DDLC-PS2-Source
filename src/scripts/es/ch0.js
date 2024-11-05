import { bg, music, x, bl, s, n, y, m, mc, Sayori, Natsuki, Yuri, Monika, hideAll, getupAll } from "../../ren/functions.js"

export function ch0es (player) {
    //CHAPTER 0:

    bg('residential')

    music('2')

    x ('???','¡¡Eeeeeeeeeeh!!') // dialog 1

    bl ('Veo a lo lejos corriendo hacia mí e intentando llamar mi atención a una chica muy pesada que está dando la nota agitando los brazos.') // dialog 2

    bl ('Esa chica es Sayori, mi vecina y mejor amiga desde que éramos niños.') // dialog 3

    bl ('Es la típica amiga con la que no te ves quedando, pero lo hacéis porque os conocéis desde hace tiempo.') // dialog 4

    bl ('Solíamos caminar juntos hacia el colegio, pero desde que empezamos el instituto se queda dormida cada vez con más frecuencia y ya estoy muy cansado de esperarla.') // dialog 5

    bl ('Pero para perseguirme así, casi mejor salgo corriendo.') // dialog 6

    bl ('Aun con todo, me paro frente al paso de peatones, suspiro y dejo que Sayori me alcance.') // dialog 7

    Sayori.show('4', 'p', 'c')

    s ('...') // dialog 8

    s ('¡Me he vuelto a quedar dormida!') // dialog 9

    s ('¡Pero esta vez te he pillado a tiempo!') // dialog 10

    mc ('¿Y no crees que ha sido porque he decidido pararme y esperarte?') // dialog 11

    Sayori.show('5c')
    Sayori.bend()

    s ('¡Eeeeeeeh, lo dices como si pensaras en ignorarme!') // dialog 12

    s ('¡Eres cruel, '+player+'!') // dialog 13

    mc ('No quiero que la gente piense que somos pareja o algo así al verte hacer tonterías.') // dialog 14

    Sayori.show('1', 'a')
    Sayori.getup()

    s ('Vaaale...') // dialog 15

    s ('Pero aún así, me has esperado.') // dialog 16

    s ('Parece que no puedes ser borde conmigo ni queriendo.') // dialog 17

    mc ('Lo que tú digas...') // dialog 18

    Sayori.show('1', 'q')

    s ('Je, je, je~') // dialog 19

    Sayori.hide()

    bl ('Cruzamos la calle juntos y vamos de camino al instituto.') // dialog 20

    bl ('A medida que nos acercamos, las calles empiezan a llenarse de otros alumnos que también van de camino.') // dialog 21

    Sayori.show('3', 'a', 'c')

    s (''+player+'...') // dialog 22

    s ('¿Has decidido ya a qué club unirte?') // dialog 23

    mc ('¿Unirme a un club?') // dialog 24

    mc ('Ya te lo dije, no me interesa nada unirme a un club.') // dialog 25

    mc ('Aunque tampoco he comprobado los que hay.') // dialog 26

    Sayori.show('4', 'h')
    Sayori.bend()

    s ('¿Eh? ¡Tienes que estar de broma!') // dialog 27

    s ('¡Me dijiste que este año te unirías a un club!') // dialog 28

    bl ('¿...?') // dialog 29

    bl ('A lo mejor lo dije en alguna de nuestras conversaciones en las que le sigo el rollo sin prestar mucha atención.') // dialog 30

    bl ('A Sayori le gusta preocuparse demasiado por mí, cuando soy perfectamente feliz siendo del montón mientras paso mi tiempo libre jugando a videojuegos y viendo anime.') // dialog 31

    Sayori.show('4', 'j')

    s ('¡Oye!') // dialog 32

    s ('Hablaba de lo mucho que me preocupa que no aprendas a socializar y no sepas desenvolverte cuando vayas a la universidad.') // dialog 33

    s ('¡Sabes que tu felicidad es muy importante para mí!') // dialog 34

    s ('Y yo sé que eres feliz, ¡pero pensar que a este paso te convertirás en un «nini» por no saber desenvolverte en el mundo real me deja hecha polvo!') // dialog 35

    Sayori.show('4', 'g')

    s ('Confías en mí, ¿verdad?') // dialog 36

    s ('Deja de preocuparme...') // dialog 37

    mc ('De acuerdo, de acuerdo...') // dialog 38

    mc ('Bueno, si te hace ilusión, ojearé los clubs que haya disponibles.') // dialog 39

    mc ('Pero no prometo nada.') // dialog 40

    Sayori.show('1', 'h')

    s ('¿Me prometes que por lo menos lo intentarás?') // dialog 41

    mc ('Bueno, supongo que eso sí puedo prometértelo.') // dialog 42

    Sayori.show('4', 'r')
    Sayori.getup()

    s ('¡Yupiii!') // dialog 43

    bl ('¿Por qué me dejo manipular por una chica tan despreocupada?') // dialog 44

    bl ('Es más, incluso me sorprende dejarme convencer por ella.') // dialog 45

    bl ('Supongo que el verla tan angustiada por mí hace que me sea inevitable no ceder un poco, aunque lo exagere todo en su cabeza.') // dialog 46

    Sayori.hide()

    bg('class')

    bl ('El día pasa como cualquier otro y se acaba antes de que me dé cuenta.') // dialog 47

    bl ('Después de guardar mis cosas, me quedo embobado mirando a la pared, buscando una pizca de motivación.') // dialog 48

    mc ('Clubes...') // dialog 49

    bl ('Sayori quiere que busque algún club.') // dialog 50

    bl ('Supongo que no me queda otra que empezar por el club de anime...') // dialog 51

    s ('¿Holaaa?') // dialog 52

    Sayori.show('1', 'b', 'c')

    mc ('Sayori...') // dialog 53

    bl ('Sayori debió entrar en el aula mientras estaba en mi mundo.') // dialog 54

    bl ('Miro a mi alrededor y me doy cuenta de que soy el único que queda en clase.') // dialog 55

    Sayori.show('1', 'a')

    s ('Pensé que te pillaría saliendo del aula, pero te he visto sentado y pensativo, así que he entrado.') // dialog 56

    s ('Si te digo la verdad... ¡Estoy impresionada! ¡Algunas veces eres peor que yo!') // dialog 57

    mc ('No tienes por qué esperarme si vas a llegar tarde a tu club.') // dialog 58

    Sayori.show('1', 'y')

    s ('Bueno, pensé que podrías necesitar un empujoncito, ya sabes...') // dialog 59

    mc ('¿Cómo?') // dialog 60

    Sayori.show('1', 'a')

    s ('¡Pues que podrías unirte a mi club!') // dialog 61

    mc ('Sayori...') // dialog 62

    Sayori.show('4', 'r')

    s ('¿Sí?') // dialog 63

    mc ('Ni de coña voy a unirme a tu club.') // dialog 64

    Sayori.show('5d', '')
    Sayori.bend()

    s ('¡¿Eeeeeeeeh?! ¡Serás cretino!') // dialog 65

    bl ('Sayori es la vicepresidenta del club de literatura.') // dialog 66

    bl ('Jamás habría pensado que le gustara la literatura.') // dialog 67

    bl ('De hecho, estoy seguro al 99% de que lo hizo porque pensaba que sería divertido ayudar a empezar un nuevo club.') // dialog 68

    bl ('Puesto que ella fue la primera en mostrar interés tras la fundadora del club, se quedó con el título de «vicepresidenta».') // dialog 69

    bl ('Por descontado, mi interés por la literatura es incluso menor.') // dialog 70

    mc ('Sí. Me voy al club de anime.') // dialog 71

    Sayori.show('1', 'g')
    Sayori.getup()

    s ('Porfiii...') // dialog 72

    mc ('¿Pero por qué te importa tanto?') // dialog 73

    Sayori.show('5b', '')

    s ('Bueno...') // dialog 74

    s ('Es que ayer le dije al resto del club que traería a un nuevo miembro...') // dialog 75

    s ('Y Natsuki preparó unos pastelillos y todo...') // dialog 76

    s ('Je, je, je...') // dialog 77

    mc ('¡No hagas promesas que no puedas cumplir!') // dialog 78

    bl ('No sé si Sayori es tonta de remate o muy astuta habiendo planeado todo esto ella solita.') // dialog 79

    bl ('Suelto un largo suspiro.') // dialog 80

    mc ('Está bien... Me pasaré a por un pastelillo, ¿vale?') // dialog 81

    Sayori.show('4', 'r')

    s ('¡Bien! ¡Toma ya!') // dialog 82

    Sayori.hide()

    bg('corridor')

    music('0')

    bl ('Y así es como vendí mi alma por un pastelillo.') // dialog 83

    bl ('Cabizbajo, sigo a Sayori por el colegio hasta la planta de arriba, una zona usada para las clases y actividades de alumnos de tercero que rara vez visito.') // dialog 84

    bl ('Sayori abre la puerta del aula con mucho entusiasmo.') // dialog 85

    bg('club')

    music('3')

    Sayori.show('4', 'a', '4.1')

    s ('¡Escuchadme todas! ¡Ha llegado el miembro nuevo!') // dialog 86

    mc ('Te he dicho que no me llames miembro nue...') // dialog 87

    Sayori.hideLeft()

    bl ('¿Eh? Echo un vistazo al aula.') // dialog 88

    Yuri.show('1', 'a', 'c')

    x ('Chica 1','Bienvenido al club de literatura. Es un placer conocerte.') // dialog 89

    x ('Chica 1','Sayori siempre comenta cosas buenas sobre ti.') // dialog 90

    Natsuki.show('4', 'c', '2.1')
    Yuri.show('1', 'a', '2.2')

    x ('Chica 2','¿En serio? ¿Tenía que ser un chico?') // dialog 91

    x ('Chica 2','Vaya manera de cortar el rollo.') // dialog 92

    Monika.show('1', 'k', 'l')
    Natsuki.show('4', 'c', 'c')
    Yuri.show('1', 'a', 'r')

    x ('Chica 3','¡Oh, '+player+'! ¡Qué sorpresa!') // dialog 93

    x ('Chica 3','¡Bienvenido al club!') // dialog 94

    Monika.show('1', 'a')

    mc ('...') // dialog 95

    bl ('Me he quedado sin palabras.') // dialog 96

    bl ('Este club...') // dialog 97

    bl ('¡Está lleno de chicas adorables!') // dialog 98

    Monika.hide()
    Yuri.hide()
    Natsuki.show('2', 'c') //stand*

    x ('Chica 2','¿Qué miras?') // dialog 99

    x ('Chica 2','Si quieres decir algo, dilo.') // dialog 100

    mc ('P-perdón...') // dialog 101

    Yuri.show('2', 'l', 'r') //stand*

    x ('Chica 1','Natsuki...') // dialog 102

    Natsuki.show('5', 's') //stand*1

    x ('Chica 2','Jum.') // dialog 103

    bl ('No conozco a la chica repelente, cuyo nombre parece ser Natsuki.') // dialog 104

    bl ('Probablemente sea de primero, es una enana.') // dialog 105

    bl ('Según Sayori, es quien preparó los pastelillos.') // dialog 106

    Sayori.show('2', 'q', 'l')

    s ('Puedes ignorarla cuando se pone así~') // dialog 107

    bl ('Sayori me susurra eso al oído y se gira hacia el resto.') // dialog 108

    Sayori.show('1', 'x')

    s ('¡En fin! Ella es Natsuki, siempre llena de energía.') // dialog 109

    s ('Y ella es Yuri, ¡la más lista del club!') // dialog 110

    Yuri.show('4', 'b2') //stand*1

    y ('N-no digas eso...') // dialog 111

    bl ('Yuri, que parece la más adulta y tímida de todas, parece tener problemas para seguirle el ritmo a personas como Sayori y Natsuki.') // dialog 112

    mc ('Oh... Encantado de conoceros.') // dialog 113

    Yuri.hide()
    Natsuki.hide()
    Sayori.show('1', 'a') //stand*

    s ('Parece que ya conoces a Monika, ¿verdad?') // dialog 114

    Monika.show('2', 'a', 'c') //stand*

    m ('Así es.') // dialog 115

    m ('Me alegro de verte otra vez, '+player+'.') // dialog 116

    Monika.show('5a', '') //stand*

    bl ('Monika me sonríe con dulzura.') // dialog 117

    bl ('Nos conocemos, aunque apenas habláramos, porque estuvimos el año pasado en la misma clase.') // dialog 118

    bl ('Monika era probablemente la chica más popular de la clase. Es inteligente, guapa y está en forma.') // dialog 119

    bl ('Totalmente fuera de mi alcance.') // dialog 120

    bl ('Y verla ahora sonriéndome, me hace sentir un poco...') // dialog 121

    mc ('Y-yo también, Monika.') // dialog 122

    Monika.hide()
    Sayori.show('4', 'x')

    s ('¡Venga, siéntate, '+player+'! Te hemos hecho un hueco en la mesa. Puedes sentarte al lado de Monika o a mi lado.') // dialog 123

    s ('¡Voy a por los pastelillos!') // dialog 124

    Natsuki.show('1', 'b', 'c')

    n ('¡Oye! ¡Soy yo quien los hizo y seré yo quien vaya a por ellos!') // dialog 125

    Sayori.show('5a', '')

    s ('Perdona, me he emocionado un poco...') // dialog 126

    Yuri.show('1', 'a', 'r')

    y ('¿Qué os parece si yo preparo algo de té?') // dialog 127

    Sayori.hide()
    Yuri.hide()
    Natsuki.hide()

    bl ('Las chicas han juntado algunos pupitres para formar una mesa.') // dialog 128

    bl ('Como dijo Sayori, han ampliado el espacio para que quedase un hueco entre Sayori y Monika.') // dialog 129

    bl ('Natsuki y Yuri se van a la esquina de la clase, donde Natsuki coge una bandeja envuelta y Yuri abre el armario.') // dialog 130

    bl ('Me sigo sintiendo raro, pero me siento al lado de Sayori.') // dialog 131

    bl ('Natsuki vuelve orgullosa a la mesa, con la bandeja en sus manos.') // dialog 132

    Natsuki.show('2', 'z', 'c')

    n ('Vaaale, ¿estáis listos?') // dialog 133

    n ('¡Tachááán!') // dialog 134

    Sayori.show('4', 'm', 'l')
    Monika.show('2', 'd', 'r')

    s ('¡Ualaaaaaa!') // dialog 135

    bl ('Natsuki levanta el envoltorio de la bandeja, revelando una docena de pastelillos blancos y esponjosos con forma de gatito.') // dialog 136

    bl ('Ha hecho los bigotes con glaseado y las orejas con pepitas de chocolate.') // dialog 137

    Sayori.show('4', 'r')

    s ('¡Qué cosa más cuquiiii!') // dialog 138

    Monika.show('2', 'b')

    m ('¡No tenía ni idea de que fueses tan buena preparando pastelillos, Natsuki!') // dialog 139

    Natsuki.show('2', 'd')

    n ('Je, je, je. Bueno, no es para tanto.') // dialog 140

    n ('¡Daos prisa y coged uno!') // dialog 141

    bl ('Sayori coge el primero, luego Monika y, por último, yo.') // dialog 142

    Sayori.show('4', 'q')

    s ('¡Está delicioso!') // dialog 143

    bl ('Sayori, además de haberse manchado ya la cara con el glaseado, habla con la boca llena.') // dialog 144

    bl ('Giro el pastelillo con los dedos, buscando el mejor ángulo para darle un bocado.') // dialog 145

    Sayori.hide()
    Monika.hide()
    Natsuki.show('1', 'c')

    bl ('Natsuki está callada.') // dialog 146

    bl ('No puedo evitar darme cuenta de las miradas que me echa.') // dialog 147

    bl ('¿Estará esperando a que le dé un bocado?') // dialog 148

    bl ('Finalmente se lo doy.') // dialog 149

    bl ('El glaseado está dulce y sabroso. Me pregunto si de verdad lo ha hecho ella.') // dialog 150

    mc ('Esto está muy bueno.') // dialog 151

    mc ('Gracias, Natsuki.') // dialog 152

    Natsuki.show('5', 'h')

    n ('¿P-por qué me das las gracias? ¡Ni que...!') // dialog 153

    bl ('(¿No he escuchado yo esto antes...?)') // dialog 154

    Natsuki.show('5', 's')
    Natsuki.bend()

    n ('Los hubiera preparado para ti precisamente o algo.') // dialog 155

    mc ('¿Cómo? Pensaba que sí. Sayori dijo...') // dialog 156

    Natsuki.show('1', '2c')
    Natsuki.getup()

    n ('¡Bueno, puede ser!') // dialog 157

    n ('Pero no son para, y-ya sabes... ¡para ti! Tonto...') // dialog 158

    mc ('Vale, vale...') // dialog 159

    Natsuki.hide()

    bl ('Desisto ante la absurda lógica de Natsuki y abandono la conversación.') // dialog 160

    bl ('Yuri vuelve a la mesa, con un juego de té.') // dialog 161

    bl ('Cuidadosamente, coloca una taza frente a cada uno de nosotros antes de poner la tetera al lado de la bandeja de pastelillos.') // dialog 162

    Yuri.show('1', 'a', '2.1')

    mc ('¿Guardas un juego completo de té en esta clase?') // dialog 163

    y ('No te preocupes, los profesores nos han dado permiso.') // dialog 164

    y ('Además, ¿a que una buena taza de té caliente ayuda a leer un buen libro?') // dialog 165

    mc ('Ah... S-supongo...') // dialog 166

    Monika.show('4', 'a', '2.2')

    m ('Je, je, je. Que no te intimide, Yuri solo quiere impresionarte.') // dialog 167

    Yuri.show('3', 'n')

    y ('¡¿Eh?! N-no...') // dialog 168

    bl ('Ofendida, Yuri mira hacia otro lado.') // dialog 169

    Yuri.show('4', 'b2')

    y ('Me refería a que, bueno...') // dialog 170

    mc ('Yo te creo.') // dialog 171

    mc ('Bueno, acompañar el té con algo de lectura no es algo que suela hacer, pero al menos disfruto del sabor.') // dialog 172

    Yuri.show('2', 'u')

    y ('Me alegro...') // dialog 173

    bl ('Yuri, débilmente, sonríe aliviada.') // dialog 174

    bl ('Monika arquea una ceja y luego me sonríe.') // dialog 175

    Yuri.hide()
    Monika.show('1', 'a', 'c')

    m ('Y bien, ¿qué te hizo pensar en tu entrada a este club?') // dialog 176

    mc ('Em...') // dialog 177

    bl ('Me temía esta pregunta.') // dialog 178

    bl ('Algo me dice que no debería contarle que vine aquí casi arrastrado por Sayori.') // dialog 179

    mc ('Bueno, aún no me había unido a ningún club y Sayori parecía muy entusiasmada con este, así que...') // dialog 180

    Monika.show('1', 'j')

    m ('¡Está bien! ¡Que no te dé cosa!') // dialog 181

    Monika.show('1', 'b')

    m ('Nos aseguraremos de que te sientas como en casa, ¿vale?') // dialog 182

    m ('Como presidenta del club de literatura, ¡es mi deber convertir el club en algo divertido y emocionante para todos!') // dialog 183

    Monika.show('1', 'a')

    mc ('Monika, estoy sorprendido.') // dialog 184

    mc ('¿Cómo decidiste formar tu propio club?') // dialog 185

    mc ('Seguramente podrías ser miembro de la junta de cualquier club importante.') // dialog 186

    mc ('¿No fuiste la líder del club de debate el año pasado?') // dialog 187

    Monika.show('5a', '')

    m ('Ja, ja, ja... Bueno...') // dialog 188

    m ('Si te soy sincera, no soporto la dirección de los clubes importantes.') // dialog 189

    m ('En ellos solo se discute sobre los presupuestos, la publicidad y el cómo prepararse para los eventos...') // dialog 190

    m ('Prefiero encargarme de algo que disfrute personalmente y convertirlo en algo especial.') // dialog 191

    Monika.show('1', 'b', 'c')

    m ('Y si anima a otras personas a meterse en el mundo de la literatura, ¡entonces estaré cumpliendo ese sueño!') // dialog 192

    Monika.show('1', 'a')
    Sayori.show('3', 'q', 'l')

    s ('¡Monika es una auténtica líder!') // dialog 193

    Yuri.show('1', 'a', 'r')

    bl ('Yuri asiente.') // dialog 194

    Sayori.hide()
    Yuri.hide()

    mc ('Pues me sorprende que no haya más gente en el club.') // dialog 195

    mc ('Debe ser difícil empezar un nuevo club.') // dialog 196

    Monika.show('3', 'b')

    m ('Es una forma de verlo.') // dialog 197

    m ('No hay mucha gente interesada en invertir todo su esfuerzo en empezar algo desde cero…') // dialog 198

    m ('Especialmente cuando es algo que no llama tu atención, como la literatura.') // dialog 199

    m ('Tienes que trabajar duro para convencer a la gente de que puede merecer la pena y ser divertido.') // dialog 200

    m ('Por lo que hace que los eventos escolares, como el festival, sean mucho más importantes.') // dialog 201

    Monika.show('2', 'k')

    m ('¡Y estoy convencida de que este club llegará a lo más alto antes de graduarnos!') // dialog 202

    m ('¿Verdad, chicas?') // dialog 203

    Sayori.show('4', 'r', '2.1')
    Monika.show('2', 'a', '2.2')

    s ('¡Sííí!') // dialog 204

    Yuri.show('1', 'a', 'l')
    Sayori.show('4', 'r', 'c')
    Monika.show('2', 'a', 'r')

    y ('Vamos a darlo todo.') // dialog 205

    Natsuki.show('4', 'd', '4.1')
    Yuri.show('1', 'a', '4.2')
    Sayori.show('4', 'r', '4.3')
    Monika.show('2', 'a', '4.4')

    n ('¡Por supuesto!') // dialog 206

    bl ('Todas coinciden con entusiasmo.') // dialog 207

    bl ('Aunque sean tan distintas, comparten el mismo objetivo...') // dialog 208

    bl ('Monika ha debido de trabajar muy duro para encontrar a estas tres chicas.') // dialog 209

    bl ('Tal vez por eso se alegran tanto de que un miembro nuevo entre en el club.') // dialog 210

    bl ('Aunque no sé si podré mostrar su mismo interés por la literatura…') // dialog 211

    Monika.hide()
    Natsuki.hide()
    Sayori.hide()
    Yuri.show('1', 'a', 'c')

    y ('Y bien, '+player+', ¿qué géneros literarios te gustan?') // dialog 212

    mc ('Em... Pues...') // dialog 213

    bl ('Teniendo en cuenta lo poco que he leído durante estos años, no sé realmente cómo responder a esto.') // dialog 214

    mc ('Manga…') // dialog 215

    bl ('Lo susurro, como bromeando.') // dialog 216

    Natsuki.show('1', 'c', '4.1')

    bl ('Natsuki reacciona al instante.') // dialog 217

    bl ('Parece que quiere decir algo, pero no abre la boca.') // dialog 218

    Natsuki.hide()
    Yuri.show('3', 'u')

    y ('P-parece que no eres muy aficionado a la lectura...') // dialog 219

    mc ('Bueno, siempre estoy a tiempo de cambiar...') // dialog 220

    bl ('¿Pero qué estoy diciendo?') // dialog 221

    bl ('He hablado sin pensármelo dos veces tras ver esa sonrisa triste de Yuri.') // dialog 222

    mc ('Bueno, ¿y a ti qué te gusta, Yuri?') // dialog 223

    Yuri.show('1', 'l')

    y ('Bueno, pues...') // dialog 224

    bl ('Yuri está trazando círculos con el dedo por los bordes de la taza de té.') // dialog 225

    Yuri.show('1', 'a')

    y ('A mí me encantan las novelas que desarrollan mundos de fantasía profundos y complejos.') // dialog 226

    y ('El nivel de creatividad y esfuerzo tras esas obras me asombra.') // dialog 227

    Yuri.show('1', 'f')

    y ('Y narrar una buena historia en un mundo tan misterioso me resulta igual de asombroso.') // dialog 228

    bl ('Yuri continúa comentando de manera apasionada sus lecturas.') // dialog 229

    bl ('Parecía reservada y tímida cuando la vi por primera vez, pero los libros parecen apasionarla, al contrario que a la mayoría de la gente.') // dialog 230

    Yuri.show('2', 'm')

    y ('Pero bueno, me gustan muchas cosas.') // dialog 231

    y ('Las historias con un profundo componente psicológico también suelen absorberme.') // dialog 232

    Yuri.show('2', 'a')

    y ('¿No te parece increíble cómo un escritor puede aprovechar tan deliberadamente tu propia falta de imaginación para desconcertarte por completo?') // dialog 233

    y ('Pero bueno, últimamente he estado leyendo muchas novelas de terror...') // dialog 234

    mc ('Ah, hace tiempo leí una...') // dialog 235

    bl ('Me agarro a un clavo ardiendo con tal de continuar la conversación.') // dialog 236

    bl ('A este ritmo, parecerá que Yuri está hablando con una piedra.') // dialog 237

    Monika.show('1', 'd', 'r')

    m ('¿De verdad? Yuri, no me esperaba eso de ti.') // dialog 238

    m ('Con lo amable que eres...') // dialog 239

    Yuri.show('1', 'a')

    y ('Sabía que dirías eso.') // dialog 240

    y ('Pero no me puedo resistir a una historia que me haga pensar o me haga viajar a otro mundo.') // dialog 241

    y ('El terror psicológico suele lograr que veas el mundo desde otro punto de vista, aunque sea solo durante un momento.') // dialog 242

    Natsuki.show('5', 'q', 'l')

    n ('Puaj, odio el terror...') // dialog 243

    Yuri.show('1', 'f')

    y ('¿Y eso?') // dialog 244

    Natsuki.show('5', 'c')

    n ('Bueno, es solo que…') // dialog 245

    bl ('Natsuki me mira durante una fracción de segundo.') // dialog 246

    Natsuki.show('5', 'q')

    n ('Olvídalo.') // dialog 247

    Monika.show('1', 'a')

    m ('Es verdad, a ti te gusta escribir sobre cosas adorables, ¿no, Natsuki?') // dialog 248

    Natsuki.show('1', 'o')

    n ('¿C-cómo?') // dialog 249

    n ('¿Qué te hace pensar eso?') // dialog 250

    Monika.show('3', 'b')

    m ('Te dejaste un trocito de papel en la última reunión.') // dialog 251

    m ('Parecía que estabas redactando un poema llamado…') // dialog 252

    Natsuki.show('1', 'p')

    n ('¡¡No lo digas!!') // dialog 253

    n ('¡Y devuélvemelo!') // dialog 254

    Monika.show('1', 'j')

    m ('Vaaale~') // dialog 255

    Monika.hide()
    Yuri.hide()
    Natsuki.show('1', 'r', '4.2')
    Sayori.show('4', 'q', '4.1')

    s ('Je, je, je, tus pastelillos, tus poemas...') // dialog 256

    s ('Todo lo que haces es tan adorable como tú.') // dialog 257

    Sayori.show('4', 'q', '2.1')
    Natsuki.show('1', 'r')

    bl ('Sayori se escabulle detrás de Natsuki y le pone la mano sobre los hombros.') // dialog 258

    Natsuki.show('1', 'v')

    n ('¡¡No soy adorable!!') // dialog 259

    Sayori.hide()
    Natsuki.show('1', 'v', 'c')

    mc ('Natsuki, ¿compones tus propios poemas?') // dialog 260

    Natsuki.show('1', 'c')

    n ('¿Qué? Ah, bueno, a veces.') // dialog 261

    n ('¿Por qué lo dices?') // dialog 262

    mc ('Porque me parece impresionante.') // dialog 263

    mc ('¿Por qué no compartes algún día uno?') // dialog 264

    Natsuki.show('5', 'q')

    n ('¡N-no!') // dialog 265

    bl ('Natsuki aparta la mirada.') // dialog 266

    n ('No creo... que te gusten…') // dialog 267

    mc ('Todavía no tienes mucha confianza en ti misma, ¿no?') // dialog 268

    Yuri.show('2', 'f', 'l')

    y ('Comprendo cómo se siente Natsuki.') // dialog 269

    y ('Necesita algo más que confianza para compartir ese nivel de escritura.') // dialog 270

    Yuri.show('2', 'l')

    y ('La forma de escritura más pura es la que te describe a ti misma.') // dialog 271

    y ('Debe estar dispuesta a abrirse a sus lectores, exponiendo sus puntos débiles y mostrando las ramas más profundas de su corazón.') // dialog 272

    Natsuki.hide()
    Monika.show('2', 'a', 'r')

    m ('Yuri, ¿tú también tienes experiencia componiendo?') // dialog 273

    m ('Natsuki se sentiría más cómoda mostrándonos sus poemas si tu compartieras alguno de los tuyos.') // dialog 274

    Yuri.show('3', 'o')
    Yuri.bend()

    y ('...') // dialog 275

    mc ('Parece que le ocurre lo mismo a Yuri...') // dialog 276

    Sayori.show('2', 'g', 'c')

    s ('Jooo... Quería leer sus poemas...') // dialog 277

    Monika.hide()
    Sayori.hide()
    Yuri.hide()

    bl ('Todos permanecemos en silencio durante unos segundos.') // dialog 278

    Monika.show('5a', '', 'c')

    m ('¡Vale!') // dialog 279

    m ('Chicos, tengo una idea.') // dialog 280

    Yuri.show('3', 'e', 'l')
    Natsuki.show('2', 'c', 'r')

    x ('Nat y Yuri','¿...?') // dialog 281

    bl ('Natsuki y Yuri miran extrañadas a Monika.') // dialog 282

    Monika.show('2', 'b')

    m ('¡Volvamos todos a casa y compongamos un poema propio!') // dialog 283

    m ('Y la próxima vez que nos reunamos, lo compartiremos con el resto.') // dialog 284

    m ('¡Así estaremos en igualdad de condiciones!') // dialog 285

    Natsuki.show('5', 'q')

    n ('E-em...') // dialog 286

    Yuri.show('3', 'v')

    y ('...') // dialog 287

    Sayori.show('4', 'r', '4.1')
    Monika.show('2', 'b', '4.3')
    Yuri.show('3', 'v', '4.2')
    Natsuki.show('5', 'q', '4.4')

    s ('¡Sííííí! ¡Hagámoslo!') // dialog 288

    Monika.show('1', 'a')

    m ('Además, ahora que tenemos a un nuevo miembro, creo que le vendrá genial para que se sienta más cómodo con nosotras y refuerce el vínculo de nuestro club.') // dialog 289

    m ('¿Te parece bien, '+player+'?') // dialog 290

    bl ('Monika vuelve a sonreírme cálidamente.') // dialog 291

    mc ('Esperad... Aún hay un problema.') // dialog 292

    Monika.show('2', 'd')

    m ('¿Eh? ¿Cuál?') // dialog 293

    bl ('Ahora que hemos vuelto al tema de mi unión al club, digo sin rodeos lo que tenía en mente durante todo este tiempo.') // dialog 294

    mc ('¡Nunca he dicho que fuera a unirme a este club!') // dialog 295

    mc ('Puede que Sayori me haya convencido para pasarme por aquí, pero aún no he tomado una decisión.') // dialog 296

    mc ('Aún tengo que echarle un vistazo a otros clubes y..., em...') // dialog 297

    Monika.show('1', 'g')
    Yuri.show('2', 'e')
    Sayori.show('1', 'g')
    Natsuki.show('4', 'g')

    bl ('Pierdo el hilo de lo que iba a decir.') // dialog 298

    bl ('Las cuatro chicas me miran decepcionadas.') // dialog 299

    Monika.show('1', 'p')
    Monika.bend()

    m ('P-pero...') // dialog 300

    Yuri.show('2', 'v')
    Yuri.bend()

    y ('Lo siento, pensaba que...') // dialog 301

    Natsuki.show('5', 's')
    Natsuki.bend()

    n ('Jum.') // dialog 302

    Sayori.show('1', 'k')
    Sayori.bend()

    s (''+player+'...') // dialog 303

    mc ('Esto...') // dialog 304

    bl ('Estoy... Estoy indefenso ante estas chicas.') // dialog 305

    bl ('¿Cómo voy a poder tomar una decisión en una situación así?') // dialog 306

    bl ('Aunque si componer poemas es el precio a pagar por estar todos los días con estas chicas tan guapas...') // dialog 307

    mc ('Decidido.') // dialog 308

    mc ('Ya lo he decidido.') // dialog 309

    mc ('Me uniré al club de literatura.') // dialog 310

    Monika.show('1', 'e')
    Natsuki.show('1', 'c')
    Sayori.show('4', 'b')
    Yuri.show('3', 'f')
    getupAll()

    bl ('Una a una, sus miradas vuelven a brillar.') // dialog 311

    Sayori.show('4', 'r')

    s ('¡Sííí! ¡Qué bieeen!') // dialog 312

    bl ('Sayori me abraza y no deja de saltar.') // dialog 313

    mc ('O-oye...') // dialog 314

    Yuri.show('1', 'm')

    y ('Menudo susto me has dado...') // dialog 315

    Natsuki.show('5', 'q')

    n ('Si solamente hubieses venido por los pastelillos, me habría cabreado muchísimo contigo.') // dialog 316

    Monika.show('5a', '')

    m ('¡Entonces ya es oficial!') // dialog 317

    m ('¡Bienvenido al club de literatura!') // dialog 318

    mc ('Oh... Gracias.') // dialog 319

    Natsuki.hide()
    Sayori.hide()
    Yuri.hide()
    Monika.show('3', 'b', 'c')

    m ('¡Muy bien, chicos!') // dialog 320

    m ('Y con esto, creo que podemos dar oficialmente por finalizada la reunión de hoy, y con resultados satisfactorios.') // dialog 321

    m ('Que no se os olvide la tarea que os he asignado para esta noche:') // dialog 322

    m ('¡Componed un poema para poder compartirlo con el resto en la siguiente reunión!') // dialog 323

    bl ('Monika vuelve a mirarme una vez más.') // dialog 324

    Monika.show('1', 'a')

    m ('Tengo ganas de ver cómo te expresas, '+player+'.') // dialog 325

    Monika.show('5a', '')

    m ('Je, je, je~') // dialog 326

    mc ('J-je, sí...') // dialog 327

    Monika.hide()

    bl ('¿De verdad voy a poder impresionar a Monika, la más popular de la clase, con mis penosas habilidades de composición?') // dialog 328

    bl ('Ya siento la ansiedad brotando en mi interior.') // dialog 329

    bl ('Mientras tanto, las chicas continúan de cháchara a la vez que Yuri y Natsuki se terminan su comida.') // dialog 330

    Sayori.show('1', 'a', 'c')

    s ('Oye, '+player+', ya que estamos aquí, ¿te apetece volver a casa juntos?') // dialog 331

    bl ('Es verdad, hace mucho que Sayori y yo no regresamos juntos a casa, ya que ella siempre tenía que ir a algún club tras las clases.') // dialog 332

    mc ('Claro, sin problemas.') // dialog 333

    Sayori.show('4', 'q')

    s ('¡Wiii!') // dialog 334

    Sayori.hide()

    bg('residential')

    bl ('Tras eso, los dos salimos del club y volvemos a casa.') // dialog 335

    bl ('Mi mente está dividida entre las cuatro chicas durante todo el camino:') // dialog 336

    Sayori.show('1', 'a', '4.1')

    bl ('Sayori,') // dialog 337

    Natsuki.show('4', 'a', '4.2')

    bl ('Natsuki,') // dialog 338

    Yuri.show('1', 'a', '4.3')

    bl ('Yuri,') // dialog 339

    Monika.show('1', 'a', '4.4')

    bl ('y, por supuesto, Monika.') // dialog 340

    bl ('¿Alcanzaré la felicidad pasando las tardes en el club de literatura?') // dialog 341

    bl ('Quizás hasta tenga la oportunidad de intimar con alguna de las chicas...') // dialog 342

    hideAll()

    bl ('¡Muy bien!') // dialog 343

    bl ('Aprovechando al máximo todas las situaciones que se me presenten en el club, estoy seguro de que la suerte me sonreirá.') // dialog 344

    bl ('Y parece que eso empieza escribiendo un poema esta noche...') // dialog 345
}