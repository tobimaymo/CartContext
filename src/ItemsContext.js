import { createContext, useState} from 'react';

export const ItemsContext = createContext();

const initialState = [
    {
        id:'31',
        descripcion:'BTS released the new anthology album Proof on June 10, 11 months after their latest single CD Butter. Proof is the core of BTS’ history. The new three-CD album introduces three new tracks, one in each CD: “Yet To Come (The Most Beautiful Moment)”, “Run BTS” and “For Youth”, each in different genres conveying their own messages. The album comprises 48 tracks total, from the greatest hit songs, and solo/sub-unit tracks selected by each member, unreleased tracks to special tracks. CD1, the “BTS chronicle”, comprises 19 tracks including lead singles of BTS’ albums in a chronological order, including the new lead single “Yet To Come (The Most Beautiful Moment).” CD2 is a collection of 15 solo/sub-unit tracks, all selected by the members. It is imbued with the septet’s own thoughts, emotions and stories. CD2 starts with the brand new “Run BTS.” Dedicated to their fans ARMY, CD3 includes tracks that members worked on previously but have not been released in the previous albums, demo versions of already released tracks in BTS’ younger voices vividly capturing the moments back in time, and a new fan song, “For Youth.”',
        autor:'BTS',
        album:'Proof',
        alt:'proof',
        img:'/img/proof.png',
        precio:'$8000',
        },
        {
        id:'30',
        descripcion:'There are not many musical artists in history that have released three straight number one studio albums. Harry Styles hit number one for the third time in a row on the US Billboard Top 200 albums list with his third release.',
        autor:'Harry Styles',
        album:'Harry´s House',
        alt:'harryshouse',
        img:'/img/harryhouse.jpeg',
        precio:'$8000'
        },
        {
        id:'29',
        descripcion:'Red (Taylor´s Version) es el segundo álbum regrabado de Taylor Swift lanzado el 12 de noviembre de 2021 a través de Republic Records. Él álbum es una regrabación del álbum de 2012 de Swift Red, y le sigue a su primera regrabación Fearless (Taylor´s Version), el cual fue lanzado en abril de 2021. La regrabación es una contramedida de Swift contra el cambio de propiedad de los masters de sus primeros seis álbumes de estudio.',
        autor:'Taylor Swift',
        album:'Red (Taylor´s Version)',
        alt:'redtv',
        img:'/img/redtv.jpg',
        precio:'$8000'
        },
        {
        id:'33',
        descripcion:'Happier Than Ever is the second studio album by American singer Billie Eilish. It was released on July 30, 2021, by Darkroom and Interscope Records. Eilish wrote the album with her frequent collaborator, her brother Finneas O´Connell, who produced the album himself. Eilish cited self-reflection during the COVID-19 pandemic as the biggest inspiration for the album.' , 
        autor:'Billie Eilish',
        album:'Happier Than Ever',
        alt:'happierthanever',
        img:'/img/hte.jpg',
        precio:'$7000'
        },
        {
        id:'28',
        descripcion:'BTS released their CD single ‘Butter’ on July 9. The CD single includes the shimmering summer song “Butter” as well as “Permission to Dance” that will get your heart pumping and dance again. The instrumental versions of each are also part of the tracklist. Belonging to the dance pop genre, “Permission to Dance” sits on piano and string sounds that make the listeners bop their heads and bust some dance moves. World-renowned musician Ed Sheeran and British producer Steve Mac took part in making the song.',
        autor:'BTS',
        album:'BUTTER',
        alt:'butter',
        img:'/img/butter.jpg',
        precio:'$2500'
        },
        {
        id:'27',
        descripcion:'Sour es el primer álbum de estudio de la cantautora estadounidense Olivia Rodrigo, publicado el 21 de mayo de 2021 por la compañía discográfica Geffen Records. Rodrigo declaró que el álbum explora los peligros y descubrimientos como joven de diecisiete años y el título hace referencia a las incómodas emociones «agrias» que experimentan los jóvenes pero de las que a menudo se avergüenzan, como la ira, los celos y el corazón roto. El estilo musical de Sour se inspira en los géneros y cantautores favoritos de Rodrigo. Escrito por Olivia Rodrigo, junto a otros pocos colaboradores y producido por Daniel nigro, Sour es principalmente pop alternativo que yuxtapone canciones optimistas de rock alternativo y pop punk junto a baladas lo-fi, impulsadas por guitarras, pianos y sintetizadores. Su temática aborda temas centrados en la adolescencia, el romance fallido y el dolor del corazón contados desde las distintas perspectivas de Rodrigo. Sour recibió aclamación universal de los críticos musicales, que lo consideraron un sólido debut y alabaron la versatilidad musical de Rodrigo, su honesto lirismo y su atractivo para la generación Z.',
        autor:'Olivia Rodrigo',
        album:'SOUR',
        alt:'sour',
        img:'/img/sour.jpg',
        precio:'$7500'
        },
        {
        id:'26',
        descripcion:'Fearless (Taylor´s Version) es el primer álbum de estudio regrabado por Taylor Swift. Fue lanzado el 9 de abril de 2021 a través de Republic Records. Grabado con nuevas voces y producción, Fearless (Taylor´s Version) consta de las 19 pistas de la edición platino de su segundo álbum de estudio Fearless (2008), su sencillo de 2010 con la banda sonora "Today Was A Fairytale" y seis adicionales canciones "From the Vault" (español: "De la bóveda") que fueron descartadas en el álbum de 2008.',
        autor:'Taylor Swift',
        album:'Fearless (Taylor´s Version)',
        alt:'fearlesstv',
        img:'/img/fearlesstv.jpg',
        precio:'$7500'
        },
        {
        id:'25',
        descripcion:'evermore es el noveno álbum de estudio de Taylor Swift. Lanzado el 11 de diciembre de 2020, menos de cinco meses después del álbum Folklore de Swift, Evermore es un "disco hermano" de su predecesor, y ambos son álbumes sorpresa anunciados en las redes sociales horas antes del lanzamiento. Evermore cuenta con apariciones especiales de las bandas estadounidenses Bon Iver, Haim y The National. El sencillo principal "Willow" se estrenó con un video musical autodirigido coincidiendo con el lanzamiento del álbum.',
        autor:'Taylor Swift',
        album:'Evermore',
        alt:'evermore',
        img:'/img/evermore.jpg',
        precio:'$7500'
        },
        {
        id:'24',
        descripcion:'BTS is returning with their new album BE to unfold another chapter of 2020. As a sense of helplessness looms in every corner of the world, BTS opens themselves up to express their mixed feelings about this situation—fear and anxiety mingled with the determination to overcome all this. The album consists of a total of eight tracks including the No.1 summer hit “Dynamite” and lead single “Life Goes On”. The latter speaks on behalf of everyone stuck in the new normality brought on by COVID-19: one day, the world stopped without any warning, streets erased of footsteps and the way out is nowhere near in sight. BTS echoes in a low voice the comforting message that in the face of unexpected turns “Life Goes On” and extends their hands towards the future.',
        autor:'BTS',
        album:'BE',
        alt:'be',
        img:'/img/be.jpg',
        precio:'$6000'
        },
        {
        id:'23',
        descripcion:'“Dynamite” is a Disco Pop single that sings of joy and confidence, bringing a new surge of much-needed ‘energy’ to reinvigorate the global community. In this song, the global superstars find happiness by doing again what they do best: engaging in a perpetual cycle of giving and receiving joy with the world through music and performances. It also marks BTS’ first song to be released completely in English; having sought a “breakthrough” to overcome a sense of disheartenment from within the new global climate, BTS embarks on a new challenge through “Dynamite.” The choreography is edgy and upbeat, with deeply addicting movements that highlight the distinct charms of each BTS member.',
        autor:'BTS',
        album:'DYNAMITE',
        alt:'dynamite',
        img:'/img/dynamite.jpg',
        precio:'$2000'
        },
        {
        id:'22',
        descripcion:'folklore es el octavo álbum de estudio de Taylor Swift. Fue un álbum sorpresa, lanzado a través de Republic Records el 24 de julio de 2020, once meses después de su predecesor, Lover (2019). Con la producción de Aaron Dessner y Jack Antonoff, Folklore evita el pop alegre de los álbumes anteriores de Swift para baladas suaves impulsadas por el piano y la guitarra. Se describe principalmente como un álbum de indie folk, rock alternativo y electro-folk, mientras que algunos lo clasifican como pop. Swift escribió y grabó el álbum durante la pandemia de COVID-19, concibiéndolo como "una colección de canciones e historias que fluyeron como una corriente de conciencia" de su imaginación. A diferencia de sus temas autobiográficos característicos, Folklore manifiesta una narración vívida principalmente desde perspectivas en tercera persona que detallan el escapismo, la introspección y la nostalgia, lo que se refleja en su estética cottagecore.',
        autor:'Taylor Swift',
        album:'Folklore',
        alt:'folklore',
        img:'/img/folklore.jpg',
        precio:'$6500'
        },
        {
        id:'21',
        descripcion:'Unveiled last year, the MAP OF THE SOUL series contains the honest and heartfelt story of BTS and their journey of discovering their true selves. The first chapter of this story, “MAP OF THE SOUL : PERSONA”, sang about the world and the joy of love, and the discovery of the self as it is displayed to the world; “MAP OF THE SOUL : 7” now turns inward to the shadow within in a candid acknowledgement that it, too, is part of the self. “MAP OF THE SOUL : 7” looks back on the past seven years of BTS since their debut as seven members of one team. The journey was not always smooth sailing, and there were special travails that they had to endure in their rise as global superstars. Now, understanding that the scars left by those hardships is a part of their real selves, BTS accepts both “the self I want to show” and the “self I want to scorn” to at last tell their own story of finding their “real and complete selves”. Bridging fine art and popular art through such initiatives as the global art project CONNECT, BTS and the “Black Swan” art film featuring a modern dance interpretation of the early-release track, BTS is poised to show their latest growth as artist through “MAP OF THE SOUL : 7”.',
        autor:'BTS',
        album:'MAP OF THE SOUL: 7',
        alt:'mapofthesoul7',
        img:'/img/mots7.jpg',
        precio:'$5500'
        },
        {
        id:'20',
        descripcion:'Harry Styles’ second album spawned seven hit singles. Once again, it hit the top of the charts around the world. In the United States, the album went straight to number one on the US Billboard Hot 200. The album was a wonderful blend of pop music that crossed many genres yet focused on fantastic melodies and grooving beats.',
        autor:'Harry Styles',
        album:'Fine Line',
        alt:'fineline',
        img:'/img/fineline.jpg',
        precio:'$5500'
        },
        {
        id:'19',
        descripcion:'Lover es el séptimo álbum de estudio de Taylor Swift, lanzado el 23 de agosto de 2019 a través de Republic Records. Como productora ejecutiva, Swift reclutó a los productores Jack Antonoff, Louis Bell, Frank Dukes y Joel Little para el álbum. Lover es principalmente un álbum pop, synth-pop, electro pop y pop rock con un estilo retro, que abarca diversos géneros como country, funk, dream pop, folk, rock and roll, R&B, bubblegum pop, pop punk e indie pop. Definido por Swift como "una carta de amor para amarse a sí mismo", Lover celebra todo el espectro del amor, utilizando tonos claros y brillantes que parten de la naturaleza oscura de su predecesor, Reputation (2017). Los videos musicales y la dirección de arte del álbum marcaron un cambio en la apariencia visual de Swift, que ahora encarna una estética veraniega, que consiste principalmente en colores pastel.',
        autor:'Taylor Swift',
        album:'Lover',
        alt:'lover',
        img:'/img/lover.jpg',
        precio:'$5500'
        },
        {
        id:'18',
        descripcion:'GLOBAL ICON BTS POURS OUT THEIR HEARTS TO FANS FINDING JOY IN LOVE AND REACHING OUT TO THE WORLD THROUGH THE LEAD SINGLE ‘Boy With Luv (Feat. Halsey)’ BTS signals the beginning of a brand new story with the release of their newest EP MAP OF THE SOUL : PERSONA on April 12. As global superstars who play stadiums and are loved by countless fans across the world, BTS now looks to shape the future reflecting on and using the power they have gained while embracing all its shadows. Opening the MAP OF THE SOUL series with PERSONA, BTS talks about the joy in finding love, and reaches out to the world with the messages they want to share with their fans. The band is especially curious about the stories of each and everyone who have helped them become who they are today. There are a total of seven tracks in this album, through which BTS weaves together what they genuinely felt both within themselves and the ever-widening world around them. Through RM’s solo piece ‘Intro : Persona’, BTS asks the fundamental question: ‘Who am I?’. World-leading singer Halsey takes part as featured artist in the lead single ‘Boy With Luv (Feat. Halsey)’ where BTS talks about how true strength and love come from finding joy in the little things in life and reaching out to the world. The album includes ‘Mikrokosmos’ which paints the world around oneself through human interest and the collaboration with world-famous singer-songwriter Ed Sheeran, ‘Make It Right’. In ‘HOME’, BTS finds refuge from their hardships and loneliness where their fans are. ‘Jamais Vu’ is a unit song by j-hope, Jin, Jung Kook and ‘Dionysus’ is a signature BTS hip hop track blasting ad-libs and powerful beats from start to finish. ',
        autor:'BTS',
        album:'MAP OF THE SOUL: Persona',
        alt:'mapofthesoulpersona',
        img:'/img/motsp.jpg',
        precio:'$5000'
        },
        {
        id:'33',
        descripcion:'When We All Fall Asleep, Where Do We Go? is the debut studio album by American singer and songwriter Billie Eilish. It was released on March 29, 2019, by Darkroom and Interscope Records in the US and Polydor Records in the UK. Eilish largely wrote the album with her brother Finneas O´Connell, who produced it at his small bedroom studio in Highland Park, Los Angeles.' , 
        autor:'Billie Eilish',
        album:'When We All Fall Asleep, Where Do We Go?',
        alt:'dontsmileatme',
        img:'/img/whenweall.jpg',
        precio:'$5000'
        },
        {
        id:'17',
        descripcion:' “Loving oneself is where true love begins” A celebration with the ARMY First unveiled in March of 2016, the BTS LOVE YOURSELF series creates a narrative by linking the key songs in each album into a single theme, imparting the message that “loving yourself is true love”. Like a well-written novel having introduction, development, twists, and conclusion it shared a compelling story for two and a half years. ‘ANSWER’ is the final piece of the puzzle. Though it’s a repackaged album, LOVE YOURSELF 結 ‘ANSWER’ still includes seven brand-new tracks. CD A is a concept album, its sixteen tracks all connected lyrically to highlight BTS’ prowess as both artists and storytellers.',
        autor:'BTS',
        album:'LOVE YOURSELF 結: "ANSWER"',
        alt:'loveyourselfanswer',
        img:'/img/lya.jpg',
        precio:'$4500'
        },
        {
        id:'16',
        descripcion:' BTS releases third studio album LOVE YOURSELF 轉 ‘TEAR’ Fake love inevitably leads to loss and separation, For true love can only begin when you learn to love yourself BTS will release LOVE YOURSELF 轉 ‘TEAR’, their third studio album on May 18. BTS’ LOVE YOURSELF series bears the message that loving oneself is the beginning of true love. Whereas the previously unveiled LOVE YOURSELF 起 ‘WONDER’ and LOVE YOURSELF 承 ‘HER’ albums expressed the heart-fluttering and tingling moments of love, LOVE YOURSELF 轉 ‘TEAR’ album embodies the pain of boys faced with parting.',
        autor:'BTS',
        album:'LOVE YOURSELF 轉: "TEAR"',
        alt:'loveyourselftear',
        img:'/img/lyt.jpg',
        precio:'$5000'
        },
        {
        id:'15',
        descripcion:'BTS releases LOVE YOURSELF 承 ‘HER’! “Loving yourself is the beginning of true love”, All the different faces of love expressed through the signature music of BTS! On September 18, BTS will release 承 ‘HER’, the first album in the new LOVE YOURSELF series. LOVE YOURSELF 承 ‘HER’ is an expression of the anxiety and elation of love, told in the unique style of BTS. The “love” that BTS aims to convey in the LOVE YOURSELF series is both the individual experience of a boy growing into adulthood and a message of peace and unity to our society today. In the mini album 承 ‘HER’ that begins this new narrative, the image of boys in love for the first time are expressed in a refreshing and cheerful take that aims to talk about the topic of “love” while immersed in a coming-of-age tale.',
        autor:'BTS',
        album:'LOVE YOURSELF 承: "HER"',
        alt:'loveyourselfher',
        img:'/img/lyh.jpg',
        precio:'$4000'
        },
        {
        id:'14',
        descripcion:'Reputation es el sexto álbum de estudio de Taylor Swift. Fue lanzado el 10 de noviembre de 2017, a través de Big Machine Records. El álbum fue producido principalmente por Jack Antonoff, Max Martin, Shellback y Swift, quien también se desempeña como productora ejecutiva. Los artistas que figuran en el álbum incluyen al cantautor inglés Ed Sheeran y al rapero estadounidense Future.',
        autor:'Taylor Swift',
        album:'Reputation',
        alt:'reputation',
        img:'/img/rep.jpg',
        precio:'$5500'
        },
        {
        id:'32',
        descripcion:'Don´t Smile at Me is the debut extended play by American singer Billie Eilish. Darkroom and Interscope Records released it on August 11, 2017. Eilish and her brother Finneas O´Connell wrote most of the material on the EP and were solely responsible for its production. It is an electropop and bedroom pop record with elements of R&B and jazz.' , 
        autor:'Billie Eilish',
        album:'Don´t Smile At Me',
        alt:'dontsmileatme',
        img:'/img/dontsmileatme.jpg',
        precio:'$4500'
        },
        {
        id:'13',
        descripcion:'Harry Styles’ debut album was released in 2017 to much anticipation from his loyal One Direction fans. The album was a massive success hitting number one on the Billboard Top 200 and the UK Album Charts. Additionally, it hit number one in numerous countries around the world echoing the commercial success on the charts in a similar fashion to bands and artists like The Beatles, Taylor Swift, Lady Gaga, and Michale Jackson.',
        autor:'Harry Styles',
        album:'Harry Styles',
        alt:'harrystylesalbum',
        img:'/img/hsa.jpg',
        precio:'$5000'
        },
        {
        id:'12',
        descripcion:'BTS releases YOU NEVER WALK ALONE! The epilogue brings closure to WINGS. “We can laugh if we are together”, a message of comfort and hope to the youth of this generation. YOU NEVER WALK ALONE completes the stories of youth and growth that could not all be contained in the WINGS album. Whereas The most beautiful moment in life series and WINGS were narratives of youth and growth, this additional chapter to WINGS is a message of warm consolation and hope for the suffering youth of this generation.',
        autor:'BTS',
        album:'YOU NEVER WALK ALONE',
        alt:'ynwa',
        img:'/img/ynwa.jpg',
        precio:'$4000'
        },
        {
        id:'11',
        descripcion:'BTS will release their second studio album, WINGS. Having met their most beautiful moment in life through the ablum series of the same title, BTS now stands before a new door. Set for release on October 10, WINGS contains songs about boys who encounter temptation for the first time and must ponder and agonize in the face of it. As the seven boys experience pain and bliss, they bring forth the image of birds that break out of their shells and try to take flight for the first time.',
        autor:'BTS',
        album:'Wings',
        alt:'wings',
        img:'/img/wings.jpg',
        precio:'$4000'
        },
        {
        id:'10',
        descripcion:'The final chapter of the story of The most beautiful moment in life Having won over the world with their two-part The most beautiful moment in life series in 2015, BTS will release their special album The most beautiful moment in life : YOUNG FOREVER on May 2. True to the title of the albums, the series has enabled BTS to now be in the most beautiful moment of their lives. The most beautiful moment in life : YOUNG FOREVER is a special album that marks the conclusion of the epic journey of the series, containing the last stories told by young people who, despite an uncertain and insecure reality (The most beautiful moment in life pt.1) continue to surge forward (The most beautiful moment in life pt.2).',
        autor:'BTS',
        album:'The most beautiful moments in life: "Young Forever"',
        alt:'tmbmilyf',
        img:'/img/tmbmilptyf.jpg',
        precio:'$4000'
        },
        {
        id:'9',
        descripcion:'Seven young men on the threshold of their 20s. Now entering their young adulthood, the members of BTS sang in their previous album, The most beautiful moment in life pt.1, about people their age being threatened by uncertainty. Released seven months after that first installment, The most beautiful moment in life pt.2 sings about the energy of youth barreling forward, embracing even the uncertainty and insecurity. Now beginning to taste the bitterness of grown-up life, they can easily sense that life isn´t always beautiful. However, they continue to sprint forward, relying only on their two destitute legs and the fire in their hearts. There’s nothing else to do but keep running. Facing the powerlessness of one’s youth, they collide and shatter and still cry out that “it’s okay to fall, it’s okay to get hurt.” That is the beauty of this moment. Continuing the tradition of the previous album, the members including RM, SUGA, j-hope, V and Jung Kook add their names to the producing and songwriting credits, showing their own growth as musicians. The lyrics are more profound and the music more passionate. The “Youth Series” concludes with The most beautiful moment in life pt.2, but the boys are only now on the starting line. “Never Mind”, BTS is just getting started.',
        autor:'BTS',
        album:'The most beautiful moments in life pt 2',
        alt:'tmbmilpt2',
        img:'/img/tmbmilpt2.jpg',
        precio:'$4000'
        },
        {
        id:'8',
        descripcion:'BTS has come back with their third mini album, The most beautiful moment in life pt.1. No longer just young boys, the album is an introduction to BTS as a group that continues to grow and develop. In each track are distilled poetic and pop emotions that allows the listener to sense both the soft and the resounding musical transformation of the group. After successfully concluding the “School Trilogy” that discusses the main topics of interest for teens—dreams, happiness and love—the new album begins to discuss “youth”. BTS has chosen the theme of “the most beautiful moment in life”, the start of one’s young adulthood in which beauty coexists with uncertainty. The most beautiful moment in life pt.1 focuses on the uncertain future more than the glamour of youth. In addition, while previous lyrical work had been credited to the rappers (RM, SUGA and j-hope), the vocal members (Jin, Jimin, V, Jung Kook) have now added their names to the credits for this album’s producing and songwriting.',
        autor:'BTS',
        album:'The most beautiful moments in life pt 1',
        alt:'tmbmilpt1',
        img:'/img/tmbmilpt1.jpg',
        precio:'$4000'
        },
        {
        id:'7',
        descripcion:'1989 es el quinto álbum de estudio de Taylor Swift, lanzado el 27 de octubre de 2014 a través de Big Machine Records. Swift comenzó a componer el álbum tras el lanzamiento de su anterior esfuerzo de estudio, Red (2012). En el transcurso del período de composición de dos años, colaboró con los productores Max Martin y Shellback. Martin se desempeñó como productor ejecutivo del álbum junto con Swift. El título del álbum lleva el nombre del año de nacimiento de ella y su música está inspirada en la música pop de los años ochenta.',
        autor:'Taylor Swift',
        album:'1989',
        alt:'1989',
        img:'/img/1989.jpg',
        precio:'$4000'
        },
        {
        id:'6',
        descripcion:'In their first studio album in a year and two months, BTS sings about love gone awry in DARK & WILD. They warn the girl who acts like she doesn´t love them not to test their love anymore. The boys are no longer in their school uniforms. They have become tougher, singing that their love is not to be treated lightly. A year and two months into their debut, BTS made sure that the visuals, performance and all the elements of their first studio album are flawless. Tracks that highlight the different genres of hip hop—South, West, Boom Bap and Trap—provide a clear direction of BTS´ music. The title track “Danger” is a tightly-composed hybrid hip hop song with a piercing punk-rock guitar sound that features stark rap, a powerful hook and exhilarating shouting.',
        autor:'BTS',
        album:'DARK & WILD',
        alt:'darkandwild',
        img:'/img/dandw.jpg',
        precio:'$4000'
        },
        {
        id:'5',
        descripcion:'With their previous two albums, 2 COOL 4 SKOOL and O!RUL8,2?, BTS sang about the dreams and happiness of teens. The songs spoke about young people living without a dream and schools that force rigid and homogenous thought onto its students. The new album, released on February 12, continues to focus on school and teens. As hinted by the title, SKOOL LUV AFFAIR, the album’s main theme is the love that blossoms in the school. This album is a culmination of the “School Trilogy” project that discusses the topics of most interest to teens their own age—dreams, happiness and love. Such penetrating insight into the hearts and minds of young people led to the absolute support that BTS has received from fans their age. The members again directly participated in the making of the songs, vowing to ensure that the songs reflect the reality of the music fans of their own generation.',
        autor:'BTS',
        album:'SKOOL LUV AFFAIR',
        alt:'skoolluvaffair',
        img:'/img/ska.jpg',
        precio:'$4000'
        },
        {
        id:'4',
        descripcion:'With O!RUL8,2? (Oh! Are you late, too?), BTS offers the message that “you must find your happiness and your own life before it’s too late.” Lyrics that brutally lay open reality as it is deliver a bold admonition to a world that inflicts despair. Children are raised as studying machines without a chance to think about the future. A world where classmates are not friends but competitors trying to trample each other. BTS sings about the wounds and anguish that such hopeless life has left on today’s teens. .',
        autor:'BTS',
        album:'O!RUL8,2?',
        alt:'orul82',
        img:'/img/ORL82.jpg',
        precio:'$4000'
        },
        {
        id:'3',
        descripcion:'Hip hop group BTS releases debut single 2 COOL 4 SKOOL BTS debut track “No More Dream”! A fresh new take on 90s hip hop! A new, bold message from hip hop boyband BTS! “What is your dream”? Hip hop group BTS has released its debut single 2 COOL 4 SKOOL. While billed as a single, the album boasts an impressive 27-minute runtime. This is the product of the firm conviction and passion of BTS that hip hop musicians must make their voices heard through their albums. Each member flexed their musical prowess by taking part in creating the lyrics and music for every song on the album. BTS has repeatedly said that “hip hop is genuine music for telling one’s own story,” and indeed the members rap about their own experiences and emotions. There is no discontinuity between the emotions and lyrics of BTS. The album is a satisfaction in both quality and quantity.',
        autor:'BTS',
        album:'2 COOL 4 SKOOL',
        alt:'2cool4skool',
        img:'/img/2c4s.jpg',
        precio:'$4000'
        },
        {
        id:'2',
        descripcion:'Speak Now es el tercer álbum de estudio de Taylor Swift. Fue lanzado el 25 de octubre de 2010 por Big Machine Records. La producción para el álbum se llevó a cabo entre 2009 y 2010 en varios estudios de grabación, y fue manejada por Swift y Nathan Chapman. Escrito en su totalidad por Swift como seguimiento de Fearless, Speak Now expande el estilo pop country de su trabajo anterior y presenta temas líricos que incluyen amor, romance y desamor.',
        autor:'Taylor Swift',
        album:'Speak Now',
        alt:'speaknow',
        img:'/img/speakn.jpg',
        precio:'$4500'
        },
        {
        id:'1',
        descripcion:'Taylor Swift es el álbum debut homónimo de Taylor Swift, lanzado a través de Big Machine Records en los Estados Unidos y Canadá el 24 de octubre de 2006, e internacionalmente el 18 de marzo de 2008. Swift se mudó de Pensilvania a Tennessee en 2004, a los catorce años, para seguir una carrera como cantautora country. Ella firmó con la editorial Sony/ATV Tree y Big Machine Records en 2005, para trabajar en su álbum debut durante su primer año de escuela secundaria.',
        autor:'Taylor Swift',
        album:'Taylor Swift',
        alt:'tsalbum',
        img:'/img/ts.jpg',
        precio:'$3000'
        },
]

export const AlbumsProvider = ({children}) => {
    const [items, setItems] = useState(initialState)
    
    return(
        <ItemsContext.Provider value={[items, setItems]}>
            {children}
        </ItemsContext.Provider>
    )
};