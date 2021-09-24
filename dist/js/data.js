var data = [
    {
        workName: '個人作品集',
        image: './images/personalPortfolio.jpg',
        desc: ['作品集與相關資訊', '手刻 CSS 製作響應式網頁', 'JavaScript + CSS 呈現 scroll animate'],
        skill: 'HTML | pug | CSS | SASS | RWD | JavaScript',
        github: 'https://github.com/CocoCat56/personal-portfolio',
        web: 'https://coco-personal-portfolio.netlify.app/'
    },
    {
        workName: '台灣節慶活動',
        image: './images/festival.jpg',
        desc: ['使用 Vue CLI 建立 Vue.js 專案並串接 API', '網站以臺灣節慶活動為主題', '使用 Bootstrap 製作響應式網頁'],
        skill: 'Vue.js | Vue-cli | vue-axios | RWD',
        github: 'https://github.com/CocoCat56/Taiwan-Festivals',
        web: 'https://coco-works-taiwan-festivals.netlify.app/#/'
    },
    {
        workName: '雲華',
        image: './images/teashop.jpg',
        desc: ['以虛擬的茶葉店為主題的網站', '手刻 CSS 和 JavaScript 製作響應式網頁', 'Vue3.0 呈現茶知識、商品資訊和說明'],
        skill: 'HTML | pug | CSS | SASS | RWD | JavaScript | Vue.js',
        github: 'https://github.com/CocoCat56/teashop',
        web: 'https://coco-works-teashop.netlify.app/'
    },
    {
        workName: 'MeowIn café',
        image: './images/meowin.jpg',
        desc: ['以虛擬的貓咪咖啡廳為主題網站', '使用 Bootstrap 製作響應式網頁', 'jQuery + CSS 呈現 scroll animate'],
        skill: 'HTML | CSS | SASS | Bootstrap | RWD | jQuery',
        github: 'https://github.com/CocoCat56/MeowIn',
        web: 'https://coco-works-meowin.netlify.app/'
    },
    {
        workName: 'Plant Diary',
        image: './images/PlantDiary.jpg',
        desc: ['使用 Plant Diary 建立自己的植物日記', 'JavaScript 練習', '手刻 CSS 製作響應式網頁'],
        skill: 'HTML | pug | CSS | SASS | RWD | JavaScript',
        github: 'https://github.com/CocoCat56/PlantDiary',
        web: 'https://coco-works-plantdiary.netlify.app'
    }
];
var worksData = Vue.createApp({
    data() {
        return {
            worksData: data
        }
    }
}).mount('#works');