const items = [
    {
    album:'Proof',
    alt:'proof',
    img:'/img/proof.png',
    precio:'$8000'
    },
    {
    album:'Harry´s House',
    alt:'harryshouse',
    img:'/img/harryhouse.jpeg',
    precio:'$8000',
    },
    {
    album:'Red (Taylor´s Version)',
    alt:'redtv',
    img:'/img/redtv.jpg',
    precio:'$8000',
    },
    {
    album:'BUTTER',
    alt:'butter',
    img:'/img/butter.jpg',
    precio:'$2500',
    },
    {
    album:'SOUR',
    alt:'sour',
    img:'/img/sour.jpg',
    precio:'$7500',
    },
    {
    album:'Fearless (Taylor´s Version)',
    alt:'fearlesstv',
    img:'/img/fearlesstv.jpg',
    precio:'$7500',
    },
    {
    album:'Evermore',
    alt:'evermore',
    img:'/img/evermore.jpg',
    precio:'$7500',
    },
    {
    album:'BE',
    alt:'be',
    img:'/img/be.jpg',
    precio:'$6000',
    },
    {
    album:'DYNAMITE',
    alt:'dynamite',
    img:'/img/dynamite.jpg',
    precio:'$2000',
    },
    {
    album:'Folklore',
    alt:'folklore',
    img:'/img/folklore.jpg',
    precio:'$6500',
    },
    {
    album:'MAP OF THE SOUL: 7',
    alt:'mapofthesoul7',
    img:'/img/mots7.jpg',
    precio:'$5500',
    },
    {
    album:'Fine Line',
    alt:'fineline',
    img:'/img/fineline.jpg',
    precio:'$5500',
    },
    {
    album:'Lover',
    alt:'lover',
    img:'/img/lover.jpg',
    precio:'$5500',
    },
    {
    album:'MAP OF THE SOUL: Persona',
    alt:'mapofthesoulpersona',
    img:'/img/motsp.jpg',
    precio:'$5000',
    },
    {
    album:'LOVE YOURSELF 結: "ANSWER"',
    alt:'loveyourselfanswer',
    img:'/img/lya.jpg',
    precio:'$4500',
    },
    {
    album:'LOVE YOURSELF 轉: "TEAR"',
    alt:'loveyourselftear',
    img:'/img/lyt.jpg',
    precio:'$5000',
    },
    {
    album:'LOVE YOURSELF 承: "HER"',
    alt:'loveyourselfher',
    img:'/img/lyh.jpg',
    precio:'$4000',
    },
    {
    album:'Reputation',
    alt:'reputation',
    img:'/img/rep.jpg',
    precio:'$5500',
    },
    {
    album:'Harry Styles',
    alt:'harrystylesalbum',
    img:'/img/hsa.jpg',
    precio:'$5000',
    },
    {
    album:'YOU NEVER WALK ALONE',
    alt:'ynwa',
    img:'/img/ynwa.jpg',
    precio:'$4000',
    },
    {
    album:'Wings',
    alt:'wings',
    img:'/img/wings.jpg',
    precio:'$4000',
    },
    {
    album:'The most beautiful moments in life: "Young Forever"',
    alt:'tmbmilyf',
    img:'/img/tmbmilptyf.jpg',
    precio:'$4000',
    },
    {
    album:'The most beautiful moments in life pt 2',
    alt:'tmbmilpt2',
    img:'/img/tmbmilpt2.jpg',
    precio:'$4000',
    },
    {
    album:'The most beautiful moments in life pt 1',
    alt:'tmbmilpt1',
    img:'/img/tmbmilpt1.jpg',
    precio:'$4000',
    },
    {
    album:'1989',
    alt:'1989',
    img:'/img/1989.jpg',
    precio:'$4000',
    },
    {
    album:'DARK AND WILD',
    alt:'darkandwild',
    img:'/img/dandw.jpg',
    precio:'$4000',
    },
    {
    album:'SKOOL LUV AFFAIR',
    alt:'skoolluvaffair',
    img:'/img/ska.jpg',
    precio:'$4000',
    },
    {
    album:'O!RUL8,2?',
    alt:'orul82?',
    img:'/img/ORL82.jpg',
    precio:'$4000',
    },
    {
    album:'2 COOL 4 SKOOL',
    alt:'2cool4skool',
    img:'/img/2c4s.jpg',
    precio:'$4000',
    },
    {
    album:'Red',
    alt:'red',
    img:'/img/red.jpg',
    precio:'$4500',
    },
    {
    album:'Speak Now',
    alt:'speaknow',
    img:'/img/speakn.jpg',
    precio:'$4500',
    },
    {
    album:'Fearless',
    alt:'fearless',
    img:'/img/fearless.jpg',
    precio:'$4000',
    },
    {
    album:'Taylor Swift',
    alt:'tsalbum',
    img:'/img/ts.jpg',
    precio:'$3000',
    }
  ];
  
  // --> Map
  // Toma un array y devuelve uno nuevo
  // Es muy conveniente cuando tenemos un objeto y queremos
  // obtener una de sus propiedades y devolver un nuevo array
  
  const itemsNames = items.map((item, idx) => {
    return `[${idx + 1}]Nombre: ${item.nombre} - Precio: $${item.precio}`;
  });
  
  console.log(itemsNames);