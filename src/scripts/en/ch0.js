import { bg, music, x, bl, s, n, y, m, mc, Sayori, Natsuki, Yuri, Monika, hideAll, getupAll } from "../../ren/functions.js"

export function ch0en (player) {
    //CHAPTER 0:

    bg('residential')

    music('2')

    x ('???','Heeeeeeeyyy!!') // dialog 1

    bl ('I see an annoying girl running toward me from the distance, waving her arms in the air like she\'s totally oblivious to any attention she might draw to herself.') // dialog 2

    bl ('That girl is Sayori, my neighbor and good friend since we were children.') // dialog 3

    bl ('You know, the kind of friend you\'d never see yourself making today, but it just kind of works out because you\'ve known each other for so long?') // dialog 4

    bl ('We used to walk to school together on days like this, but starting around high school she would oversleep more and more frequently, and I would get tired of waiting up.') // dialog 5

    bl ('But if she\'s going to chase after me like this, I almost feel better off running away.') // dialog 6

    bl ('However, I just sigh and idle in front of the crosswalk and let Sayori catch up to me.') // dialog 7

    Sayori.show('4', 'p', 'c')

    s ('Haaahhh...haaahhh...') // dialog 8

    s ('I overslept again!') // dialog 9

    s ('But I caught you this time!') // dialog 10

    mc ('Maybe, but only because I decided to stop and wait for you.') // dialog 11

    Sayori.show('5c')
    Sayori.bend()

    s ('Eeehhhhh, you say that like you were thinking about ignoring me!') // dialog 12

    s ('That\'s mean, '+player+'!') // dialog 13

    mc ('Well, if people stare at you for acting weird then I don\'t want them to think we\'re a couple or something.') // dialog 14

    Sayori.show('1', 'a')
    Sayori.getup()

    s ('Fine, fine.') // dialog 15

    s ('But you did wait for me, after all.') // dialog 16

    s ('I guess you don\'t have it in you to be mean even if you want to~') // dialog 17

    mc ('Whatever you say, Sayori...') // dialog 18

    Sayori.show('1', 'q')

    s ('Ehehe~') // dialog 19

    Sayori.hide()

    bl ('We cross the street together and make our way to school.') // dialog 20

    bl ('As we draw near, the streets become increasingly speckled with other students making their daily commute.') // dialog 21

    Sayori.show('3', 'a', 'c')

    s ('By the way, '+player+'...') // dialog 22

    s ('Have you decided on a club to join yet?') // dialog 23

    mc ('A club?') // dialog 24

    mc ('I told you already, I\'m really not interested in joining any clubs.') // dialog 25

    mc ('I haven\'t been looking, either.') // dialog 26

    Sayori.show('4', 'h')
    Sayori.bend()

    s ('Eh? That\'s not true!') // dialog 27

    s ('You told me you would join a club this year!') // dialog 28

    mc ('Did I...?') // dialog 29

    bl ('I\'m sure it\'s possible that I did, in one of our many conversations where I dismissively go along with whatever she\'s going on about.') // dialog 30

    bl ('Sayori likes to worry a little too much about me, when I\'m perfectly content just getting by on the average while spending my free time on games and anime.') // dialog 31

    Sayori.show('4', 'j')

    s ('Uh-huh!') // dialog 32

    s ('I was talking about how I\'m worried that you won\'t learn how to socialize or have any skills before college.') // dialog 33

    s ('Your happiness is really important to me, you know!') // dialog 34

    s ('And I know you\'re happy now, but I\'d die at the thought of you becoming a NEET in a few years because you\'re not used to the real world!') // dialog 35

    Sayori.show('4', 'g')

    s ('You trust me, right?') // dialog 36

    s ('don\'t make me keep worrying about you...') // dialog 37

    mc ('Alright, alright...') // dialog 38

    mc ('I\'ll look at a few clubs if it makes you happy.') // dialog 39

    mc ('No promises, though.') // dialog 40

    Sayori.show('1', 'h')

    s ('Will you at least promise me you\'ll try a little?') // dialog 41

    mc ('Yeah, I guess I\'ll promise you that.') // dialog 42

    Sayori.show('4', 'r')
    Sayori.getup()

    s ('Yaay~!') // dialog 43

    bl ('Why do I let myself get lectured by such a carefree girl?') // dialog 44

    bl ('More than that, I\'m surprised I even let myself relent to her.') // dialog 45

    bl ('I guess seeing her worry so much about me makes me want to ease her mind at least a little bit - even if she does exaggerate everything inside of her head.') // dialog 46

    Sayori.hide()

    bg('class')

    bl ('The school day is as ordinary as ever, and it\'s over before I know it.') // dialog 47

    bl ('After I pack up my things, I stare blankly at the wall, looking for an ounce of motivation.') // dialog 48

    mc ('Clubs...') // dialog 49

    bl ('Sayori wants me to check out some clubs.') // dialog 50

    mc ('I guess I have no choice but to start with the anime club...') // dialog 51

    s ('Hellooo?') // dialog 52

    Sayori.show('1', 'b', 'c')

    mc ('Sayori...?') // dialog 53

    bl ('Sayori must have come into the classroom while I was spacing out.') // dialog 54

    bl ('I look around and realize that I\'m the only one left in the classroom.') // dialog 55

    Sayori.show('1', 'a')

    s ('I thought I\'d catch you coming out of the classroom, but I saw you just sitting here and spacing out, so I came in.') // dialog 56

    s ('Honestly, you\'re even worse than me sometimes... I\'m impressed!') // dialog 57

    mc ('You don\'t need to wait up for me if it\'s going to make you late to your own club.') // dialog 58

    Sayori.show('1', 'y')

    s ('Well, I thought you might need some encouragement, so I thought, you know...') // dialog 59

    mc ('Know what?') // dialog 60

    Sayori.show('1', 'a')

    s ('Well, that you could come to my club!') // dialog 61

    mc ('Sayori...') // dialog 62

    Sayori.show('4', 'r')

    s ('Yeah??') // dialog 63

    mc ('...There is no way I\'m going to your club.') // dialog 64

    Sayori.show('5d', '')
    Sayori.bend()

    s ('Eeeehhhhh?! Meanie!') // dialog 65

    bl ('Sayori is vice president of the Literature Club.') // dialog 66

    bl ('Not that I was ever aware that she had any interest in literature.') // dialog 67

    bl ('In fact, I\'m 99% sure she only did it because she thought it would be fun to help start a new club.') // dialog 68

    bl ('Since she was the first one to show interest after the one who proposed the club, she inherited the title "Vice President".') // dialog 69

    bl ('That said, my interest in literature is guaranteed to be even less.') // dialog 70

    mc ('Yeah. I\'m going to the anime club.') // dialog 71

    Sayori.show('1', 'g')
    Sayori.getup()

    s ('C\'mon, please?') // dialog 72

    mc ('Why do you care so much, anyway?') // dialog 73

    Sayori.show('5b', '')

    s ('Well...') // dialog 74

    s ('I kind of told the club yesterday I would bring in a new member...') // dialog 75

    s ('And Natsuki made cupcakes and everything...') // dialog 76

    s ('Ehehe...') // dialog 77

    mc ('don\'t make promises you can\'t keep!') // dialog 78

    bl ('I can\'t tell if Sayori is really that much of an airhead, or if she\'s so cunning as to have planned all of this out.') // dialog 79

    bl ('I let out a long sigh.') // dialog 80

    mc ('Fine... I\'ll stop by for a cupcake, okay?') // dialog 81

    Sayori.show('4', 'r')

    s ('Yes! Let\'s go~!') // dialog 82

    Sayori.hide()

    bg('corridor')

    music('0')

    bl ('And thus, today marks the day I sold my soul for a cupcake.') // dialog 83

    bl ('I dejectedly follow Sayori across the school and upstairs - a section of the school I rarely visit, being generally used for third-year classes and activities.') // dialog 84

    bl ('Sayori, full of energy, swings open the classroom door.') // dialog 85

    bg('club')

    music('3')

    Sayori.show('4', 'a', '4.1')

    s ('Everyone! The new member is here~!') // dialog 86

    mc ('I told you, don\'t call me a \'new member - \'') // dialog 87

    Sayori.hide()

    bl ('Eh? I glance around the room.') // dialog 88

    Yuri.show('1', 'a', 'c')

    x ('Girl 1','Welcome to the Literature Club. it\'s a pleasure meeting you.') // dialog 89

    x ('Girl 1','Sayori always says nice things about you.') // dialog 90

    Natsuki.show('4', 'c', '2.1')
    Yuri.show('1', 'a', '2.2')

    x ('Girl 2','Seriously? You brought a boy?') // dialog 91

    x ('Girl 2','Way to kill the atmosphere.') // dialog 92

    Monika.show('1', 'k', 'l')
    Natsuki.show('4', 'c', 'c')
    Yuri.show('1', 'a', 'r')

    x ('Girl 3','Ah, '+player+'! What a nice surprise!') // dialog 93

    x ('Girl 3','Welcome to the club!') // dialog 94

    Monika.show('1', 'a')

    mc ('...') // dialog 95

    bl ('All words escape me in this situation.') // dialog 96

    bl ('This club...') // dialog 97

    bl ('...is full of incredibly cute girls!!') // dialog 98

    Monika.hide()
    Yuri.hide()
    Natsuki.show('2', 'c') //stand*

    x ('Girl 2','What are you looking at?') // dialog 99

    x ('Girl 2','If you want to say something, say it.') // dialog 100

    mc ('S-Sorry...') // dialog 101

    Yuri.show('2', 'l', 'r') //stand*

    x ('Girl 1','Natsuki...') // dialog 102

    Natsuki.show('5', 's') //stand*1

    x ('Girl 2','Hmph.') // dialog 103

    bl ('The girl with the sour attitude, whose name is apparently Natsuki, is one I don\'t recognize.') // dialog 104

    bl ('Her small figure makes me think she\'s probably a first-year.') // dialog 105

    bl ('She is also the one who made cupcakes, according to Sayori.') // dialog 106

    Sayori.show('2', 'q', 'l')

    s ('You can just ignore her when she gets moody~') // dialog 107

    bl ('Sayori says that quietly into my ear, then turns back toward the other girls.') // dialog 108

    Sayori.show('1', 'x')

    s ('Anyway! This is Natsuki, always full of energy.') // dialog 109

    s ('And this is Yuri, the smartest in the club!') // dialog 110

    Yuri.show('4', 'b2')

    y ('D-don\'t say things like that...') // dialog 111

    bl ('Yuri, who appears comparably more mature and timid, seems to have a hard time keeping up with people like Sayori and Natsuki.') // dialog 112

    mc ('Ah... Well, it\'s nice to meet both of you.') // dialog 113

    Yuri.hide()
    Natsuki.hide()
    Sayori.show('1', 'a') //stand*

    s ('And it sounds like you already know Monika, is that right?') // dialog 114

    Monika.show('2', 'a', 'c') //stand*

    m ('That\'s right.') // dialog 115

    m ('it\'s great to see you again, '+player+'.') // dialog 116

    Monika.show('5a', '') //stand*

    bl ('Monika smiles sweetly.') // dialog 117

    bl ('We do know each other - well, we rarely talked, but we were in the same class last year.') // dialog 118

    bl ('Monika was probably the most popular girl in class - smart, beautiful, athletic.') // dialog 119

    bl ('Basically, completely out of my league.') // dialog 120

    bl ('So, having her smile at me so genuinely feels a little...') // dialog 121

    mc ('Y-You too, Monika.') // dialog 122

    Monika.hide()
    Sayori.show('4', 'x')

    s ('Come sit down, '+player+'! We made room for you at the table, so you can sit next to me or Monika.') // dialog 123

    s ('I\'ll get the cupcakes~') // dialog 124

    Natsuki.show('1', 'b', 'c')

    n ('Hey! I made them, I\'ll get them!') // dialog 125

    Sayori.show('5a', '')

    s ('Sorry, I got a little too excited~') // dialog 126

    Yuri.show('1', 'a', 'r')

    y ('Then, how about I make some tea as well?') // dialog 127

    Sayori.hide()
    Yuri.hide()
    Natsuki.hide()

    bl ('The girls have a few desks arranged to form a table.') // dialog 128

    bl ('As Sayori mentioned, it\'s been widened so that there is one space next to Monika and one space next to Sayori.') // dialog 129

    bl ('Natsuki and Yuri walk over to the corner of the room, where Natsuki grabs a wrapped tray and Yuri opens the closet.') // dialog 130

    bl ('Still feeling awkward, I take a seat next to Sayori.') // dialog 131

    bl ('Natsuki proudly marches back to the table, tray in hand.') // dialog 132

    Natsuki.show('2', 'z', 'c')

    n ('Okaaay, are you ready?') // dialog 133

    n ('...Ta-daaa!') // dialog 134

    Sayori.show('4', 'm', 'l')
    Monika.show('2', 'd', 'r')

    s ('Uwooooah!') // dialog 135

    bl ('Natsuki lifts the foil off the tray to reveal a dozen white, fluffy cupcakes decorated to look like little cats.') // dialog 136

    bl ('The whiskers are drawn with icing, and little pieces of chocolate were used to make ears.') // dialog 137

    Sayori.show('4', 'r')

    s ('So cuuuute~!') // dialog 138

    Monika.show('2', 'b')

    m ('I had no idea you were so good at baking, Natsuki!') // dialog 139

    Natsuki.show('2', 'd')

    n ('Ehehe. Well, you know.') // dialog 140

    n ('Just hurry and take one!') // dialog 141

    bl ('Sayori grabs one first, then Monika. I follow.') // dialog 142

    Sayori.show('4', 'q')

    s ('it\'s delicious!') // dialog 143

    bl ('Sayori talks with her mouth full and has already managed to get icing on her face.') // dialog 144

    bl ('I turn the cupcake around in my fingers, looking for the best angle to take a bite.') // dialog 145

    Sayori.hide()
    Monika.hide()
    Natsuki.show('1', 'c')

    bl ('Natsuki is quiet.') // dialog 146

    bl ('I can\'t help but notice her sneaking glances in my direction.') // dialog 147

    bl ('Is she waiting for me to take a bite?') // dialog 148

    bl ('I finally bite down.') // dialog 149

    bl ('The icing is sweet and full of flavor - I wonder if she made it herself.') // dialog 150

    mc ('This is really good.') // dialog 151

    mc ('Thank you, Natsuki.') // dialog 152

    Natsuki.show('5', 'h')

    n ('W-Why are you thanking me? it\'s not like I...!') // dialog 153

    bl ('(haven\'t I heard this somewhere before...?)') // dialog 154

    Natsuki.show('5', 's')
    Natsuki.bend()

    n ('...Made them for you or anything.') // dialog 155

    mc ('Eh? I thought you technically did. Sayori said--') // dialog 156

    Natsuki.show('1', '2c')
    Natsuki.getup()

    n ('Well, maybe!') // dialog 157

    n ('But not for, y-you know, you! Dummy...') // dialog 158

    mc ('Alright, alright...') // dialog 159

    Natsuki.hide()

    bl ('I give up on Natsuki\'s weird logic and dismiss the conversation.') // dialog 160

    bl ('Yuri returns to the table, carrying a tea set.') // dialog 161

    bl ('She carefully places a teacup in front of each of us before setting down the teapot next to the cupcake tray.') // dialog 162

    Yuri.show('1', 'a', '2.1')

    mc ('You keep a whole tea set in this classroom?') // dialog 163

    y ('don\'t worry, the teachers gave us permission.') // dialog 164

    y ('After all, doesn\'t a hot cup of tea help you enjoy a good book?') // dialog 165

    mc ('Ah... I-I guess...') // dialog 166

    Monika.show('4', 'a', '2.2')

    m ('Ehehe, don\'t let yourself get intimidated, Yuri\'s just trying to impress you.') // dialog 167

    Yuri.show('3', 'n')

    y ('Eh?! T-That\'s not...') // dialog 168

    bl ('Insulted, Yuri looks away.') // dialog 169

    Yuri.show('4', 'b2')

    y ('I meant that, you know...') // dialog 170

    mc ('I believe you.') // dialog 171

    mc ('Well, tea and reading might not be a pastime for me, but I at least enjoy tea.') // dialog 172

    Yuri.show('2', 'u')

    y ('I\'m glad...') // dialog 173

    bl ('Yuri faintly smiles to herself in relief.') // dialog 174

    bl ('Monika raises an eyebrow, then smiles at me.') // dialog 175

    Yuri.hide()
    Monika.show('1', 'a', 'c')

    m ('So, what made you consider the Literature Club?') // dialog 176

    mc ('Um...') // dialog 177

    bl ('I was afraid of this question.') // dialog 178

    bl ('Something tells me I shouldn\'t tell Monika that I was practically dragged here by Sayori.') // dialog 179

    mc ('Well, I haven\'t joined any clubs yet, and Sayori seemed really happy here, so...') // dialog 180

    Monika.show('1', 'j')

    m ('That\'s okay! don\'t be embarrassed!') // dialog 181

    Monika.show('1', 'b')

    m ('We\'ll make sure you feel right at home, okay?') // dialog 182

    m ('As president of the Literature Club, it\'s my duty to make the club fun and exciting for everyone!') // dialog 183

    Monika.show('1', 'a')

    mc ('Monika, I\'m surprised.') // dialog 184

    mc ('How come you decided to start your own club?') // dialog 185

    mc ('You could probably be a board member for any of the major clubs.') // dialog 186

    mc ('Weren\'t you a leader of the debate club last year?') // dialog 187

    Monika.show('5a', '')

    m ('Ahaha, well, you know...') // dialog 188

    m ('To be honest, I can\'t stand all of the politics around the major clubs.') // dialog 189

    m ('It feels like nothing but arguing about the budget and publicity and how to prepare for events...') // dialog 190

    m ('I\'d much rather take something I personally enjoy and make something special out of it.') // dialog 191

    Monika.show('1', 'b', 'c')

    m ('And if it encourages others to get into literature, then I\'m fulfilling that dream!') // dialog 192

    Monika.show('1', 'a')
    Sayori.show('3', 'q', 'l')

    s ('Monika really is a great leader!') // dialog 193

    Yuri.show('1', 'a', 'r')

    bl ('Yuri also nods in agreement.') // dialog 194

    Sayori.hide()
    Yuri.hide()

    mc ('Then I\'m surprised there aren\'t more people in the club yet.') // dialog 195

    mc ('It must be hard to start a new club.') // dialog 196

    Monika.show('3', 'b')

    m ('You could put it that way.') // dialog 197

    m ('Not many people are very interested in putting out all the effort to start something brand new...') // dialog 198

    m ('Especially when it\'s something that doesn\'t grab your attention, like literature.') // dialog 199

    m ('You have to work hard to convince people that you\'re both fun and worthwhile.') // dialog 200

    m ('But it makes school events, like the festival, that much more important.') // dialog 201

    Monika.show('2', 'k')

    m ('I\'m confident that we can all really grow this club before we graduate!') // dialog 202

    m ('Right, everyone?') // dialog 203

    Sayori.show('4', 'r', '2.1')
    Monika.show('2', 'a', '2.2')

    s ('Yeah!') // dialog 204

    Yuri.show('1', 'a', 'l')
    Sayori.show('4', 'r', 'c')
    Monika.show('2', 'a', 'r')

    y ('We\'ll do our best.') // dialog 205

    Natsuki.show('4', 'd', '4.1')
    Yuri.show('1', 'a', '4.2')
    Sayori.show('4', 'r', '4.3')
    Monika.show('2', 'a', '4.4')

    n ('You know it!') // dialog 206

    bl ('Everyone enthusiastically agrees.') // dialog 207

    bl ('Such different girls, all interested in the same goal...') // dialog 208

    bl ('Monika must have worked really hard just to find these three.') // dialog 209

    bl ('Maybe That\'s why they were all so delighted by the idea of a new member joining.') // dialog 210

    bl ('Though I still don\'t really know if I can keep up with their level of enthusiasm about literature...') // dialog 211

    Monika.hide()
    Natsuki.hide()
    Sayori.hide()
    Yuri.show('1', 'a', 'c')

    y ('So, '+player+', what kinds of things do you like to read?') // dialog 212

    mc ('Well... Ah...') // dialog 213

    bl ('Considering how little I\'ve read these past few years, I don\'t really have a good way of answering that.') // dialog 214

    mc ('...Manga...') // dialog 215

    bl ('I mutter quietly to myself, half-joking.') // dialog 216

    Natsuki.show('1', 'c', '4.1')

    bl ('Natsuki\'s head suddenly perks up.') // dialog 217

    bl ('It looks like she wants to say something, but she keeps quiet.') // dialog 218

    Natsuki.hide()
    Yuri.show('3', 'u')

    y ('N-Not much of a reader, I guess...') // dialog 219

    mc ('...Well, that can change...') // dialog 220

    bl ('What am I saying?') // dialog 221

    bl ('I spoke without thinking after seeing Yuri\'s sad smile.') // dialog 222

    mc ('Anyway, what about you, Yuri?') // dialog 223

    Yuri.show('1', 'l')

    y ('Well, Let\'s see...') // dialog 224

    bl ('Yuri traces the rim of her teacup with her finger.') // dialog 225

    Yuri.show('1', 'a')

    y ('My favorites are usually novels that build deep and complex fantasy worlds.') // dialog 226

    y ('The level of creativity and craftsmanship behind them is amazing to me.') // dialog 227

    Yuri.show('1', 'f')

    y ('And telling a good story in such a foreign world is equally impressive.') // dialog 228

    bl ('Yuri goes on, clearly passionate about her reading.') // dialog 229

    bl ('She seemed so reserved and timid since the moment I walked in, but it\'s obvious by the way her eyes light up that she finds her comfort in the world of books, not people.') // dialog 230

    Yuri.show('2', 'm')

    y ('But you know, I like a lot of things.') // dialog 231

    y ('Stories with deep psychological elements usually immerse me as well.') // dialog 232

    Yuri.show('2', 'a')

    y ('Isn\'t it amazing how a writer can so deliberately take advantage of your own lack of imagination to completely throw you for a loop?') // dialog 233

    y ('Anyway, I\'ve been reading a lot of horror lately...') // dialog 234

    mc ('Ah, I read a horror book once...') // dialog 235

    bl ('I desperately grasp something I can relate to at the minimal level.') // dialog 236

    bl ('At this rate, Yuri might as well be having a conversation with a rock.') // dialog 237

    Monika.show('1', 'd', 'r')

    m ('Really?  I wouldn\'t have expected that, Yuri.') // dialog 238

    m ('For someone as gentle as you...') // dialog 239

    Yuri.show('1', 'a')

    y ('I guess you could say that.') // dialog 240

    y ('But if a story makes me think,  or takes me to another world, then I really can\'t put it down.') // dialog 241

    y ('Surreal horror is often very successful at changing the way you look at the world, if only for a brief moment.') // dialog 242

    Natsuki.show('5', 'q', 'l')

    n ('Ugh, I hate horror...') // dialog 243

    Yuri.show('1', 'f')

    y ('Oh? Why\'s that?') // dialog 244

    Natsuki.show('5', 'c')

    n ('Well, I just...') // dialog 245

    bl ('Natsuki\'s eyes dart over to me for a split second.') // dialog 246

    Natsuki.show('5', 'q')

    n ('Never mind.') // dialog 247

    Monika.show('1', 'a')

    m ('That\'s right, you usually like to write about cute things, don\'t you, Natsuki?') // dialog 248

    Natsuki.show('1', 'o')

    n ('W-What?') // dialog 249

    n ('What gives you that idea?') // dialog 250

    Monika.show('3', 'b')

    m ('You left a piece of scrap paper behind last club meeting.') // dialog 251

    m ('It looked like you were working on a poem called--') // dialog 252

    Natsuki.show('1', 'p')

    n ('don\'t say it out loud!!') // dialog 253

    n ('And give that back!') // dialog 254

    Monika.show('1', 'j')

    m ('Fine, fine~') // dialog 255

    Monika.hide()
    Yuri.hide()
    Natsuki.show('1', 'r', '4.2')
    Sayori.show('4', 'q', '4.1')

    s ('Ehehe, your cupcakes, your poems...') // dialog 256

    s ('Everything you do is just as cute as you are~') // dialog 257

    Sayori.show('4', 'q', '2.1')
    Natsuki.show('1', 'r')

    bl ('Sayori sidles up behind Natsuki and puts her hands on her shoulders.') // dialog 258

    Natsuki.show('1', 'v')

    n ('I\'m not cute!!') // dialog 259

    Sayori.hide()
    Natsuki.show('1', 'v', 'c')

    mc ('Natsuki, you write your own poems?') // dialog 260

    Natsuki.show('1', 'c')

    n ('Eh? Well, I guess sometimes.') // dialog 261

    n ('Why do you care?') // dialog 262

    mc ('I think That\'s impressive.') // dialog 263

    mc ('Why don\'t you share them sometime?') // dialog 264

    Natsuki.show('5', 'q')

    n ('N-No!') // dialog 265

    bl ('Natsuki averts her eyes.') // dialog 266

    n ('You wouldn\'t...like them...') // dialog 267

    mc ('Ah...not a very confident writer yet?') // dialog 268

    Yuri.show('2', 'f', 'l')

    y ('I understand how Natsuki feels.') // dialog 269

    y ('Sharing that level of writing takes more than just confidence.') // dialog 270

    Yuri.show('2', 'l')

    y ('The truest form of writing is writing to oneself.') // dialog 271

    y ('You must be willing to open up to your readers, exposing your vulnerabilities and showing even the deepest reaches of your heart.') // dialog 272

    Natsuki.hide()
    Monika.show('2', 'a', 'r')

    m ('Do you have writing experience too, Yuri?') // dialog 273

    m ('Maybe if you share some of your work, you can set an example and help Natsuki feel comfortable enough to share hers.') // dialog 274

    Yuri.show('3', 'o')
    Yuri.bend()

    y ('...') // dialog 275

    mc ('I guess it\'s the same for Yuri...') // dialog 276

    Sayori.show('2', 'g', 'c')

    s ('Aww... I wanted to read everyone\'s poems...') // dialog 277

    Monika.hide()
    Sayori.hide()
    Yuri.hide()

    bl ('We all sit in silence for a moment.') // dialog 278

    Monika.show('5a', '', 'c')

    m ('Okay!') // dialog 279

    m ('I have an idea, everyone~') // dialog 280

    Yuri.show('3', 'e', 'l')
    Natsuki.show('2', 'c', 'r')

    x ('ny','...?') // dialog 281

    bl ('Natsuki and Yuri look quizzically at Monika.') // dialog 282

    Monika.show('2', 'b')

    m ('Let\'s all go home and write a poem of our own!') // dialog 283

    m ('Then, next time we meet, We\'ll all share them with each other.') // dialog 284

    m ('That way, everyone is even!') // dialog 285

    Natsuki.show('5', 'q')

    n ('U-Um...') // dialog 286

    Yuri.show('3', 'v')

    y ('...') // dialog 287

    Sayori.show('4', 'r', '4.1')
    Monika.show('2', 'b', '4.3')
    Yuri.show('3', 'v', '4.2')
    Natsuki.show('5', 'q', '4.4')

    s ('Yeaaah! Let\'s do it!') // dialog 288

    Monika.show('1', 'a')

    m ('Plus, now that we have a new member, I think it will help us all get a little more comfortable with each other, and strengthen the bond of the club.') // dialog 289

    m ('Isn\'t that right, '+player+'?') // dialog 290

    bl ('Monika smiles warmly at me once again.') // dialog 291

    mc ('Hold on...there\'s still one problem.') // dialog 292

    Monika.show('2', 'd')

    m ('Eh? What\'s that?') // dialog 293

    bl ('Now that we\'re back to the original topic of me joining the club, I bluntly come forth with What\'s been on my mind the entire time.') // dialog 294

    mc ('I never said I would join this club!') // dialog 295

    mc ('Sayori may have convinced me to stop by, but I never made any decision.') // dialog 296

    mc ('I still have other clubs to look at, and...um...') // dialog 297

    Monika.show('1', 'g')
    Yuri.show('2', 'e')
    Sayori.show('1', 'g')
    Natsuki.show('4', 'g')

    bl ('I lose my train of thought.') // dialog 298

    bl ('All four girls stare back at me with dejected eyes.') // dialog 299

    Monika.show('1', 'p')
    Monika.bend()

    m ('B-But...') // dialog 300

    Yuri.show('2', 'v')
    Yuri.bend()

    y ('I\'m sorry, I thought...') // dialog 301

    Natsuki.show('5', 's')
    Natsuki.bend()

    n ('Hmph.') // dialog 302

    Sayori.show('1', 'k')
    Sayori.bend()

    s (''+player+'...') // dialog 303

    mc ('Y-You all...') // dialog 304

    bl ('I...I\'m defenseless against these girls.') // dialog 305

    bl ('How am I supposed to make a clear-headed decision when it\'s like this?') // dialog 306

    bl ('That is, if writing poems is the price I need to pay in order to spend every day with these beautiful girls...') // dialog 307

    mc ('...Right.') // dialog 308

    mc ('Okay, I\'ve decided, then.') // dialog 309

    mc ('I\'ll join the Literature Club.') // dialog 310

    Monika.show('1', 'e')
    Natsuki.show('1', 'c')
    Sayori.show('4', 'b')
    Yuri.show('3', 'f')
    getupAll()

    bl ('One by one, the girls eyes light up.') // dialog 311

    Sayori.show('4', 'r')

    s ('Yesss! I\'m so happyyy~') // dialog 312

    bl ('Sayori wraps her arms around me, jumping up and down.') // dialog 313

    mc ('H-Hey-') // dialog 314

    Yuri.show('1', 'm')

    y ('You really did scare me for a moment...') // dialog 315

    Natsuki.show('5', 'q')

    n ('If you really just came for the cupcakes, I would be super pissed.') // dialog 316

    Monika.show('5a', '')

    m ('Then that makes it official!') // dialog 317

    m ('Welcome to the Literature Club!') // dialog 318

    mc ('Ah...thanks, I guess.') // dialog 319

    Natsuki.hide()
    Sayori.hide()
    Yuri.hide()
    Monika.show('3', 'b', 'c')

    m ('Okay, everyone!') // dialog 320

    m ('I think with that, we can officially end today\'s meeting on a good note.') // dialog 321

    m ('Everyone remember tonight\'s assignment.') // dialog 322

    m ('Write a poem to bring to the next meeting, so we can all share!') // dialog 323

    bl ('Monika looks over at me once more.') // dialog 324

    Monika.show('1', 'a')

    m (''+player+', I look forward to seeing how you express yourself.') // dialog 325

    Monika.show('5a', '')

    m ('Ehehe~') // dialog 326

    mc ('Y-Yeah...') // dialog 327

    Monika.hide()

    bl ('Can I really impress the class star Monika with my mediocre writing skills?') // dialog 328

    bl ('I already feel the anxiety welling up inside me...') // dialog 329

    bl ('Meanwhile, the girls continue to chit-chat as Yuri and Natsuki clean up their food.') // dialog 330

    Sayori.show('1', 'a', 'c')

    s ('Hey, '+player+', since we\'re already here, do you want to walk home together?') // dialog 331

    bl ('That\'s right--Sayori and I never walk home together anymore because she always stayed after school for clubs.') // dialog 332

    mc ('Sure, might as well.') // dialog 333

    Sayori.show('4', 'q')

    s ('Yaay~') // dialog 334

    Sayori.hide()

    bg('residential')

    bl ('With that, the two of us depart the clubroom and make our way home.') // dialog 335

    bl ('The whole way, my mind wanders back and forth between the four girls:') // dialog 336

    Sayori.show('1', 'a', '4.1')

    bl ('Sayori,') // dialog 337

    Natsuki.show('4', 'a', '4.2')

    bl ('Natsuki,') // dialog 338

    Yuri.show('1', 'a', '4.3')

    bl ('Yuri,') // dialog 339

    Monika.show('1', 'a', '4.4')

    bl ('and, of course, Monika.') // dialog 340

    bl ('Will I really be happy spending every day after school in a literature club?') // dialog 341

    bl ('Perhaps I\'ll have the chance to grow closer to one of these girls...') // dialog 342

    hideAll()

    bl ('Alright!') // dialog 343

    bl ('I\'ll just need to make the most of my circumstances, and I\'m sure good fortune will find me.') // dialog 344

    bl ('And I guess that starts with writing a poem tonight...') // dialog 345
}