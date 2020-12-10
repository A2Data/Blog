/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a38a34c6122143f19a19a8c4c6c9a3d2"],["/Creator-said/index.html","7bb2c92bcb5be93a6151577c2ba6c608"],["/README.html","36f69704e240c5e76d21d6a8dd4a1b03"],["/about/index.html","967b10ff03ba68d2f901177e7af09120"],["/archives/2019/09/index.html","ccbb476b141f52109e6976d5fa1429a8"],["/archives/2019/11/index.html","4eb9d0cb595c4484f7bf4ec2d08ae666"],["/archives/2019/12/index.html","cd0e542959f83909de1da2d4ede5c729"],["/archives/2019/12/page/2/index.html","2e56a9a9ddbb03e33941eec565df583d"],["/archives/2019/12/page/3/index.html","3a25e7168d4fddfdaf2a2c348e0041b0"],["/archives/2019/index.html","8b5d17b20b69c0c22730859a14510477"],["/archives/2019/page/2/index.html","6d8773613a9d58b9d4362d6f1c99033a"],["/archives/2019/page/3/index.html","69059bafb3152a1c8fac30dc59d43c8a"],["/archives/2020/03/index.html","6c8be53cb576362a6d92b628124ae95d"],["/archives/2020/04/index.html","d78d4c36d562d3a4a282da8584c4ebb2"],["/archives/2020/04/page/2/index.html","1efde072b58b7bdd9ce44619e4c80e53"],["/archives/2020/05/index.html","64978e8656cf2f6a567ffe74e8dbfc62"],["/archives/2020/05/page/2/index.html","10afd6b102e53244a06d995656d951c3"],["/archives/2020/06/index.html","b691d93738eaaca2f74491cda1279d12"],["/archives/2020/07/index.html","577932e4c672df30fe2200403778b0d1"],["/archives/2020/08/index.html","8515a4316aaca94965e0d378abbf0875"],["/archives/2020/09/index.html","d1734f829da7a5362ec0eda40860305e"],["/archives/2020/09/page/2/index.html","00eb20f06110f83da85c81e369ed82e5"],["/archives/2020/11/index.html","d920315b391c40c6d70cfe34207cf78c"],["/archives/2020/11/page/2/index.html","b652c3841cf19221dc2052e64d16d0e7"],["/archives/2020/12/index.html","643612ae38bcfb337955bc7f412d8227"],["/archives/2020/index.html","f53e86945b977f63619e1edf0e47741b"],["/archives/2020/page/2/index.html","cbd9fc6aa4c7ffdfabf6beb95420a7e4"],["/archives/2020/page/3/index.html","55c08c5439f88ef9548ccf1c67481535"],["/archives/2020/page/4/index.html","f49b4b8c386fd2863942f25e0b74c5ab"],["/archives/2020/page/5/index.html","99793eda2687470d1c52b065b5e3bf4b"],["/archives/2020/page/6/index.html","27d239f23db377633fa592f516d18f34"],["/archives/2020/page/7/index.html","d1d7e1e5f3cc4dccd9230440817c70e0"],["/archives/2020/page/8/index.html","c7b45e7ef4ea11801c1e20cca44441d8"],["/archives/index.html","0f0f7867e564a293428917e4daaa554d"],["/archives/page/10/index.html","0149f5e74e8cdea4539e837390d71a50"],["/archives/page/11/index.html","0149f5e74e8cdea4539e837390d71a50"],["/archives/page/2/index.html","6c33a8b55875b2d1211bdefb75b23934"],["/archives/page/3/index.html","6c33a8b55875b2d1211bdefb75b23934"],["/archives/page/4/index.html","6c33a8b55875b2d1211bdefb75b23934"],["/archives/page/5/index.html","6c33a8b55875b2d1211bdefb75b23934"],["/archives/page/6/index.html","6c33a8b55875b2d1211bdefb75b23934"],["/archives/page/7/index.html","6c33a8b55875b2d1211bdefb75b23934"],["/archives/page/8/index.html","6c33a8b55875b2d1211bdefb75b23934"],["/archives/page/9/index.html","6c33a8b55875b2d1211bdefb75b23934"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","3eaf8407359f9573d6cf16c2a41f422e"],["/categories/DataBase/Mysql/index.html","6b4968dadd274fbf292fcee0fa6b7018"],["/categories/DataBase/Redis/index.html","08d8e1be05ecc8c52a72e57f3ac90884"],["/categories/DataBase/index.html","42268352ab3d4a7d1b14731088ec7805"],["/categories/Git/index.html","9782362eaeb19a840fe9e73c5076b591"],["/categories/Hexo/index.html","8c77d937956aef4ed2875a5124ac58f5"],["/categories/Java/index.html","4e68a7ec7022e4ff1aad2e49e9a2fd06"],["/categories/Linux/index.html","50bde751f3011a4d99b1673ae42bb0ac"],["/categories/Linux/page/2/index.html","5c2cb88146a818fa7e371e82ef0ee500"],["/categories/Python/Anaconda/index.html","9461a20e740143091ed7c13c12886d92"],["/categories/Python/Python入门/index.html","c1471bb17df8241eb5a1aee9fa3d63bf"],["/categories/Python/Python入门/page/2/index.html","29bdf1a60ffd64fd8788f1d5e7dcd2b4"],["/categories/Python/Python速成/index.html","fc69c9b27ef03449583da043623f8cba"],["/categories/Python/Python速成/page/2/index.html","d9c7562c1f74c7bc047f347b5e50c45a"],["/categories/Python/index.html","c223e71ad8356135cb65ae2563b443d0"],["/categories/Python/page/2/index.html","bb225a195554cab50e77ef3925840428"],["/categories/Python/page/3/index.html","dc3d635caace1c7a190fc5094cc15458"],["/categories/Python/page/4/index.html","435daf3187401d2cc23ce03f06a85749"],["/categories/Python/数据可视化/index.html","7a650defb2feb3d528e9966d2bcd58b4"],["/categories/Tools/index.html","761e5a29e5a56c2706f330e08600eccc"],["/categories/index.html","27c853a3d27559fd96c7b73aff2ea9f3"],["/categories/大数据/index.html","eee1e96c8bc4991d4bd8d9c0c8845ca7"],["/categories/职场/index.html","567730be3c1af784b89d2352e18b1aa6"],["/contact/index.html","179d9a99eaea30ea4e27fba3d42ab998"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","1494ff7077b9993ee627f91687e0821e"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","ff585ed573c237c6c8f45c4700bf487d"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","2960402d5aa05c47c49d87fee02a4a21"],["/page/10/index.html","b2957e482d22e7e0b4e654ac88e918e4"],["/page/11/index.html","db40f460de5d1537a3ff037ec96e082b"],["/page/2/index.html","077e8860d474869da91aac80f400bbd8"],["/page/3/index.html","0fda5fdefad2cd1b340289c9aa2bbee9"],["/page/4/index.html","28e93673378e87d47b86455bd9caf098"],["/page/5/index.html","7c1fd530a0da3fced0ee8bb1761d5c31"],["/page/6/index.html","af47340262fd9f882a1428c613d51c0b"],["/page/7/index.html","4c875a42a868c765878d1e2c2434335c"],["/page/8/index.html","1e602726137e37502d1008a4a7b216f9"],["/page/9/index.html","92271ae2a753392baab6871663ac3bf5"],["/posts/10415.html","432382800954437308ab053f5756a591"],["/posts/10537.html","df83f3d8e8986f4d4a2901e1d438bd4e"],["/posts/16550.html","d10f9aed4a2b738b4a787116bc173b5a"],["/posts/16586.html","65b17facff84edb08de22759af93f9c4"],["/posts/17415.html","0f02a48b03748475ed15646a7a6e0daf"],["/posts/17683.html","37f7164c81e624815026e046e848d1f7"],["/posts/18321.html","43f5d890ac1045b578e9de4ae00190d1"],["/posts/18572.html","551090c95f8cc1ed1f347b2c07b4b1a7"],["/posts/19a88b12.html","c5d25923f2c99e9e17dc70d22326dc2c"],["/posts/1d1dff0b.html","2203fb477db5b504475181ce10c770fd"],["/posts/27081.html","c51beb6390a22357c1dc520fd8acad7b"],["/posts/2834.html","a4b8abb4ce3fbb8e30978333f68cac5a"],["/posts/29055.html","ca53f5402b75c366cd7186cb9ea4acd7"],["/posts/29966d.html","96e4e1e837a32e1e5e2b34af6fe05ea0"],["/posts/2a327ad2.html","06f9105664c0dc640e0e9de9b65f96c5"],["/posts/2b36786b.html","7b8abe9ab92788458ebfb510d600be8d"],["/posts/30675.html","7fb8fc4b2d534116dc4fc8200b340b9b"],["/posts/30873.html","8821f1499037416f741482aa578a4ee0"],["/posts/32274.html","c683a7b7c60f8699d02d66a9652067c4"],["/posts/34708.html","1d80001759e3a1130f080d948eb23e3c"],["/posts/34771.html","590dac6c8fa34b1136a83aa29c53588f"],["/posts/34946.html","407a8dde084d4a2ba232b562c01555dd"],["/posts/36204.html","20864d5683757206bc7031a131371cf5"],["/posts/37390.html","81c509434e6e258d4d90d0b70cd7cdeb"],["/posts/37426.html","17c43f0884d5614109a9053c045d0b89"],["/posts/39508.html","6c9c5a0b525361ab045283a340530fad"],["/posts/39704.html","017837faf0f403c28b34b481c4aa62a7"],["/posts/3fb6e39.html","3f617e81185178c82c1b4d529504b763"],["/posts/40711.html","045893fe6304c75af7f9cd44035ab28d"],["/posts/41055.html","ede84374b39693828e4f4b33fb47a4e7"],["/posts/4136.html","cb694d3d5967ed6ba762d26d3999e797"],["/posts/41382.html","a047a566875735497be139a1361c4bd2"],["/posts/43150.html","4781b315e983a7f52fdb14e350d271d6"],["/posts/43249.html","e05c06d2b777213a0a9a5d502f082d4b"],["/posts/4354b039.html","28c5c4461275584121b1846478a2678b"],["/posts/43857.html","d7cfdd04d84fc17f2a98f7207ec66a2c"],["/posts/44947.html","98d5b5bfdb941900df82280c3273f4f0"],["/posts/45997.html","761475e35b7fe01d96a59ba40c26a7cb"],["/posts/46411.html","98ded3d0f37c1c5447e5e4fd81673805"],["/posts/47220.html","da43ed0c673cc3529d4707ff381c6a8d"],["/posts/47936.html","1d2b4da2a0141c5b0b75f3d6b580cc5f"],["/posts/47985.html","9d1b7ed0529ed81c08bb180543d9b9b2"],["/posts/47ce27c8.html","a65d082f54eadf877fe55d32dcc25191"],["/posts/48061.html","f64b9091bc43d79ee728ad6cb1090aae"],["/posts/4a17b156.html","e7d5c277d6215e5663f9c071a59202a3"],["/posts/5010.html","6e1d30a0c15b53f90eec70dc2d87a66a"],["/posts/51417.html","5ba80306ec5b1c62d18efaa417db4d3c"],["/posts/5144bcf.html","57af7f6af24d7b7ad2b921ba96a7977b"],["/posts/520.html","0e29c1d50f8d221a99bb6aa9cc8c0360"],["/posts/53d1dcfb.html","27793d47bfbc1f0782e48dfb26ada15c"],["/posts/55248.html","d1f688950347775400cd0c6fc0c84bd0"],["/posts/55860.html","e416dbd42c1d3f3ba81ef722d512475c"],["/posts/5590.html","d876eaca981b94b6457f3412ba1296b3"],["/posts/58489.html","fcc222cd8c5d0a92600ce0105253043b"],["/posts/59346.html","dd5774070c4f9e0bf590908161246919"],["/posts/59977.html","59c7c16103b3688c624cb29e9170f90d"],["/posts/5c0875d6.html","197b9993bccd9d0350a49304b59280b8"],["/posts/60364.html","c3e8728d23838ba9ac71ec1c59a25c54"],["/posts/6059.html","b0cadaa19b3895056fb9837037b3a629"],["/posts/61794.html","6278dbb180a093dae8572941f13c53d6"],["/posts/6275.html","601ff13c489d13bc30ccae9b89352155"],["/posts/62910.html","25e7a0f2841d748ae3b34179bf7b15b6"],["/posts/630.html","f3802fcb723ec61518b9eb21e890ecd8"],["/posts/64423.html","32b2d27712123813438eb5ce99dcc24c"],["/posts/64528.html","12c05a79b67329da5d39a452dba51b86"],["/posts/646dbc2e.html","bd5f5cf926999f597779d8b818e98246"],["/posts/64846.html","791cca20d9b928311688260e0d969263"],["/posts/65aeda8b.html","1a76ca1c5c96935c52f61f2aa9b1896f"],["/posts/6637aa6e.html","71cd268f515d82092555fc6621121d0f"],["/posts/6656ad65.html","b5b543e9bc1d031f414feda1f5ddee1b"],["/posts/6f521982.html","016d1a154c6d7665663428e03a61f95e"],["/posts/71dd948a.html","115733890d1ec82439195a3fd2ad5493"],["/posts/773d5f8c.html","64a1fa63aec76204c62a1843adccd551"],["/posts/80bb221f.html","0bd82512fb49a112d82a94240d79ca6e"],["/posts/80ca38c0.html","b9cbab71f4685af78a887610019a7836"],["/posts/8573.html","527d2bba04aaecc0e91369e8151be46b"],["/posts/8589.html","514ea32a3d824081de38e3fd1e41f32e"],["/posts/88fead8.html","8e018623006973ae652e0111579353b0"],["/posts/8b540f5a.html","c44c1a1932a5adef0a82da1d3f0e744f"],["/posts/8c0ed688.html","d7050b7e54be16787819a4a7563dc36e"],["/posts/8f004046.html","243ef1f9827c6ac159128613eedb308d"],["/posts/8f19a96e.html","9d7809a232ebb63b9b34a3292a635eea"],["/posts/901b8cd5.html","1045e2b4e5fb8a982ce73886c5a1d3a5"],["/posts/9618.html","ac460623784128c8a43c993930f3e9ba"],["/posts/9812.html","949c700246e21b9275a1d845e3eed150"],["/posts/9e565f9f.html","a15526a658c3e2e3dd83b27df8c10151"],["/posts/a9378efd.html","0c21c50d36ad1cae222efd2fe7e7f1eb"],["/posts/b572816f.html","5ab643217d63a0ee1dad9724ba95bb54"],["/posts/b794162c.html","7905538360bb2ba98061d15f8e5f651e"],["/posts/b7cd6609.html","d5ab9cd0a4d87f531a1c2c55c8853090"],["/posts/bae4ff13.html","0563287a59e7566d8677b164bc2f43cd"],["/posts/c54e1e5.html","1d4231dd2dc540a172cf0395f4f7c675"],["/posts/ca165cd5.html","c1e4c84a394d5e48f1e4da7e3ced0278"],["/posts/cc50857e.html","0ab2342454054d12024a11733a34266a"],["/posts/e4f3239b.html","9cda925d49add4a4f3d1350f452c9c31"],["/posts/e73bc34f.html","d47998ff908f726b81020d40ec958518"],["/posts/ee789513.html","f243342b21f12a5accb2376f061500c6"],["/posts/f8d580eb.html","ca2d41e0a3275616e06c5ff00fa6028d"],["/posts/f92cb63f.html","c0ab833792e8a287d7a2a745647449ea"],["/posts/f9586000.html","6956074d9bb5ec4f711478d4c9f00683"],["/posts/fbd6efa0.html","7cb9875df5569bc8272c28431fc37317"],["/posts/ff995e29.html","d492eddba26ef21647e572901a4e5d8e"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","be3dff596dc1d52c9c67ab62ae61d683"],["/tags/Anaconda/index.html","024a924dc31aaee52ebe87f54ddc81a2"],["/tags/Edge/index.html","a3513957a43886b864fb0c3d71fee259"],["/tags/Git/index.html","f00baab1f3c2df2950c77d31728eec51"],["/tags/Hadoop/index.html","7ac757e06a7dfe73d76e889e1176da51"],["/tags/Hexo/index.html","4f05ed20e5ff014f24835c1448f71f71"],["/tags/Java/index.html","3c90736aa6c493715f3b530c13693318"],["/tags/Linux/index.html","de322cfdfe5bd064d35664ee03d1191c"],["/tags/Linux/page/2/index.html","343957d0d28acf1e1e28b6847210c933"],["/tags/MapReduce/index.html","5558d8230cc0c1ad665df9151f017eb1"],["/tags/Mysql/index.html","ec8725fee494aea72c78397209f905b8"],["/tags/Python/index.html","6db6273a8bcea1a3fe8b85450e70bfe5"],["/tags/Python/page/2/index.html","4ab12f5fa446440ca833cb75c0831c47"],["/tags/Python/page/3/index.html","c844f70c45836eb90989a5081d5a34d3"],["/tags/Python/page/4/index.html","16617114caff7017314f09576e199fe1"],["/tags/Python习题/index.html","cdece77ad84570cb8da0a1f24c73d61c"],["/tags/Redis/index.html","9aa02a04bc7744298b6a2751ebeb55c7"],["/tags/Tools/index.html","36c766d0d4d0beac2e77bee4fe2112d7"],["/tags/Win10/index.html","b446d30e9fd15d981c3233f5e76e53ab"],["/tags/Windows/index.html","c55fd7b4b22b67a3eecab3775fa9483e"],["/tags/index.html","35beaf5cf8464a3f85ed3da83168b3ce"],["/tags/任务栏神器/index.html","feb0030e7c655b9f85d20f06ce8511cb"],["/tags/图床/index.html","d43ef7bee650830fda86d60ae2f0f0b1"],["/tags/数仓/index.html","856ef0a1599442f50fc5ac107e8c669e"],["/tags/数据可视化/index.html","9cea5c78a1ed52910373f56eef0663e2"],["/tags/数据库工具/index.html","46c22a83ca200b74cf3ac5355fbfd216"],["/tags/毒鸡汤/index.html","c2a51ecf050fc838b9eb6da6dbf9b4eb"],["/tags/环境搭建/index.html","1c5b31a36a1724168b1578417fdbe7b6"],["/tags/资料分享/index.html","c03dcc9f18ed80bdb0f87e44d870938f"],["/tags/面经/index.html","06da49958e12cdcb3ec273ef3233b7e8"],["/tools/index.html","5666f6bc204b84da7da847b5e0d7515f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
