/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a38a34c6122143f19a19a8c4c6c9a3d2"],["/Creator-said/index.html","7bb2c92bcb5be93a6151577c2ba6c608"],["/README.html","36f69704e240c5e76d21d6a8dd4a1b03"],["/about/index.html","967b10ff03ba68d2f901177e7af09120"],["/archives/2019/09/index.html","4b20dd263865160b45115c54ad6ae85a"],["/archives/2019/11/index.html","02047b8bbc607db9886929f216a747c5"],["/archives/2019/12/index.html","44a6881198539c736af6cc29846417e0"],["/archives/2019/12/page/2/index.html","af7382690d4db4bdca7883c3a8f7c5e4"],["/archives/2019/12/page/3/index.html","0a12c2e77b767a2771e6efc3b8ad702a"],["/archives/2019/index.html","4565bbc6e1492aff808f875c219d708b"],["/archives/2019/page/2/index.html","fce6ed0488cfe2317b507e52a0fc2da8"],["/archives/2019/page/3/index.html","90172193a003f0bf70ede3f0b5f9dcb9"],["/archives/2020/03/index.html","5823af7ee6c7d97fc783ca63af26444c"],["/archives/2020/04/index.html","614327b01b45248bf8dafc698d870617"],["/archives/2020/04/page/2/index.html","a7b9c7a0380912eefd6ac73b973fd59a"],["/archives/2020/05/index.html","d4a385563b4e58847a9ee4ec91096912"],["/archives/2020/05/page/2/index.html","a8be3aba51a3e91aae2a442c8954c097"],["/archives/2020/06/index.html","b2a1c422f9e636fa9dc7dd5a76996b32"],["/archives/2020/07/index.html","824190c54c8b89113816e6d32165f823"],["/archives/2020/08/index.html","2c8a00c715cfa4436d3d1892a25b3b85"],["/archives/2020/09/index.html","c0be7530ce7b40222ed6784192695d9b"],["/archives/2020/09/page/2/index.html","d0a6441ebbea3497906dc7dcef6e0b3d"],["/archives/2020/11/index.html","c7c4e477754bad58d44cb6f9c1973030"],["/archives/2020/11/page/2/index.html","3a29f0c361da68cae6638ec29d4e9a7c"],["/archives/2020/12/index.html","a8cfc0be1b0d9b54b337cda74fc93da6"],["/archives/2020/index.html","c950c2c2508560df4c4f126c13480200"],["/archives/2020/page/2/index.html","e04f53ca4061315692df0d218b282b7b"],["/archives/2020/page/3/index.html","393090ef0d531c07f017cd2c66239e74"],["/archives/2020/page/4/index.html","2d03d34f4fe7adf0e18e8794aa45f4b0"],["/archives/2020/page/5/index.html","fbbcb30645fa47c60b2cff414a9c63b3"],["/archives/2020/page/6/index.html","6e99c8e4d9d97ba8ea633ed303b23f9d"],["/archives/2020/page/7/index.html","b2d626efed5344f14cc6f8d0053e801b"],["/archives/2020/page/8/index.html","5b6975559688da9c34971be9c2063823"],["/archives/index.html","d8fa6582bfeb7a15196d9ede5e17879b"],["/archives/page/10/index.html","c89dbef61b53addf7444eab1699468c0"],["/archives/page/11/index.html","c89dbef61b53addf7444eab1699468c0"],["/archives/page/2/index.html","0cc108dda5ba4e10f1dacec8d1e428be"],["/archives/page/3/index.html","0cc108dda5ba4e10f1dacec8d1e428be"],["/archives/page/4/index.html","0cc108dda5ba4e10f1dacec8d1e428be"],["/archives/page/5/index.html","c89dbef61b53addf7444eab1699468c0"],["/archives/page/6/index.html","c89dbef61b53addf7444eab1699468c0"],["/archives/page/7/index.html","c89dbef61b53addf7444eab1699468c0"],["/archives/page/8/index.html","c89dbef61b53addf7444eab1699468c0"],["/archives/page/9/index.html","c89dbef61b53addf7444eab1699468c0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","3eaf8407359f9573d6cf16c2a41f422e"],["/categories/DataBase/Mysql/index.html","e378603773f76167a3900f1ac94ef83c"],["/categories/DataBase/Redis/index.html","a585b060dd1db61a2a9bea3997baa676"],["/categories/DataBase/index.html","b03ccdd38641e3ef65549abfaa7df8e7"],["/categories/Git/index.html","1b5416f36c01772d22516e12904774b4"],["/categories/Hexo/index.html","785f772974f7163bb1068cc59d129c71"],["/categories/Java/index.html","5d5f7abd77bb3a4275e3c09c4912e441"],["/categories/Linux/index.html","6c5f0aa107d2d574bbf7c07d7eb044f6"],["/categories/Linux/page/2/index.html","4619278eefe5dc8c239c8fb22036ae2f"],["/categories/Python/Anaconda/index.html","73fa7cbade124fe40b75468337c348d4"],["/categories/Python/Python入门/index.html","0458f45d15bdfae0bf5362acc1361e05"],["/categories/Python/Python入门/page/2/index.html","940b51afff7de36eb00ad1a404009236"],["/categories/Python/Python速成/index.html","25fccaa6bc490bf4b966a0323bb5392b"],["/categories/Python/Python速成/page/2/index.html","449e88014278eee965930670408ee0be"],["/categories/Python/index.html","c4503a9dc68d081f1de98234863fe02a"],["/categories/Python/page/2/index.html","6dd99920421105d839c3e3e145a4d8ff"],["/categories/Python/page/3/index.html","d1b0ec832a192657269eda56c8012871"],["/categories/Python/page/4/index.html","339004609ed3d79eaa0130abde00ad33"],["/categories/Python/数据可视化/index.html","9eed665c348212e36cf2c022bec20386"],["/categories/Tools/index.html","ecd6d4756bed5113164dfa77e5916210"],["/categories/index.html","27c853a3d27559fd96c7b73aff2ea9f3"],["/categories/大数据/index.html","24ca4935dd363f8f43edbdfbc1f5faf4"],["/categories/职场/index.html","19b020a9146815c534ff12d6a6b969a4"],["/contact/index.html","179d9a99eaea30ea4e27fba3d42ab998"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","1494ff7077b9993ee627f91687e0821e"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","04b98207f885dcfbf7e0d9e91f9ece6c"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","2960402d5aa05c47c49d87fee02a4a21"],["/page/10/index.html","dfa17cb0a1ff09de6689a7effe92fa74"],["/page/11/index.html","9fbb05e2c2add32541c3b3d63b5e0d6c"],["/page/2/index.html","6ec2e8b380b58c12ad0ce43d51992757"],["/page/3/index.html","a682ad02b47c8717c50ece7adb256911"],["/page/4/index.html","f84ab54e86844410a5b62f8630d0e8c5"],["/page/5/index.html","15e8c88a03c95badf02f00f7616c77ff"],["/page/6/index.html","faf381679745a2d4427b1b9b7518cf02"],["/page/7/index.html","cb269c0acaae15cdc5b41c5cba8b9642"],["/page/8/index.html","4bf0a863e7bfecfb09167539a01f22bb"],["/page/9/index.html","7798be9d605f1914f5c551d70fd757ec"],["/posts/10415.html","432382800954437308ab053f5756a591"],["/posts/10537.html","df83f3d8e8986f4d4a2901e1d438bd4e"],["/posts/16550.html","d10f9aed4a2b738b4a787116bc173b5a"],["/posts/16586.html","65b17facff84edb08de22759af93f9c4"],["/posts/17415.html","0f02a48b03748475ed15646a7a6e0daf"],["/posts/17683.html","37f7164c81e624815026e046e848d1f7"],["/posts/18321.html","43f5d890ac1045b578e9de4ae00190d1"],["/posts/18572.html","551090c95f8cc1ed1f347b2c07b4b1a7"],["/posts/19a88b12.html","c5d25923f2c99e9e17dc70d22326dc2c"],["/posts/1d1dff0b.html","2203fb477db5b504475181ce10c770fd"],["/posts/27081.html","c51beb6390a22357c1dc520fd8acad7b"],["/posts/2834.html","a4b8abb4ce3fbb8e30978333f68cac5a"],["/posts/29055.html","ca53f5402b75c366cd7186cb9ea4acd7"],["/posts/29966d.html","96e4e1e837a32e1e5e2b34af6fe05ea0"],["/posts/2a327ad2.html","06f9105664c0dc640e0e9de9b65f96c5"],["/posts/2b36786b.html","7b8abe9ab92788458ebfb510d600be8d"],["/posts/30675.html","7fb8fc4b2d534116dc4fc8200b340b9b"],["/posts/30873.html","8821f1499037416f741482aa578a4ee0"],["/posts/32274.html","c683a7b7c60f8699d02d66a9652067c4"],["/posts/34708.html","1d80001759e3a1130f080d948eb23e3c"],["/posts/34771.html","590dac6c8fa34b1136a83aa29c53588f"],["/posts/34946.html","407a8dde084d4a2ba232b562c01555dd"],["/posts/36204.html","20864d5683757206bc7031a131371cf5"],["/posts/37390.html","81c509434e6e258d4d90d0b70cd7cdeb"],["/posts/37426.html","17c43f0884d5614109a9053c045d0b89"],["/posts/39508.html","6c9c5a0b525361ab045283a340530fad"],["/posts/39704.html","017837faf0f403c28b34b481c4aa62a7"],["/posts/3fb6e39.html","3f617e81185178c82c1b4d529504b763"],["/posts/40711.html","045893fe6304c75af7f9cd44035ab28d"],["/posts/41055.html","ede84374b39693828e4f4b33fb47a4e7"],["/posts/4136.html","cb694d3d5967ed6ba762d26d3999e797"],["/posts/41382.html","a047a566875735497be139a1361c4bd2"],["/posts/43150.html","4781b315e983a7f52fdb14e350d271d6"],["/posts/43249.html","e05c06d2b777213a0a9a5d502f082d4b"],["/posts/4354b039.html","28c5c4461275584121b1846478a2678b"],["/posts/43857.html","d7cfdd04d84fc17f2a98f7207ec66a2c"],["/posts/44947.html","98d5b5bfdb941900df82280c3273f4f0"],["/posts/45997.html","761475e35b7fe01d96a59ba40c26a7cb"],["/posts/46411.html","98ded3d0f37c1c5447e5e4fd81673805"],["/posts/47220.html","da43ed0c673cc3529d4707ff381c6a8d"],["/posts/47936.html","1d2b4da2a0141c5b0b75f3d6b580cc5f"],["/posts/47985.html","9d1b7ed0529ed81c08bb180543d9b9b2"],["/posts/47ce27c8.html","a65d082f54eadf877fe55d32dcc25191"],["/posts/48061.html","f64b9091bc43d79ee728ad6cb1090aae"],["/posts/4a17b156.html","e7d5c277d6215e5663f9c071a59202a3"],["/posts/5010.html","6e1d30a0c15b53f90eec70dc2d87a66a"],["/posts/51417.html","5ba80306ec5b1c62d18efaa417db4d3c"],["/posts/5144bcf.html","57af7f6af24d7b7ad2b921ba96a7977b"],["/posts/520.html","0e29c1d50f8d221a99bb6aa9cc8c0360"],["/posts/53d1dcfb.html","27793d47bfbc1f0782e48dfb26ada15c"],["/posts/55248.html","d1f688950347775400cd0c6fc0c84bd0"],["/posts/55860.html","e416dbd42c1d3f3ba81ef722d512475c"],["/posts/5590.html","d876eaca981b94b6457f3412ba1296b3"],["/posts/58489.html","fcc222cd8c5d0a92600ce0105253043b"],["/posts/59346.html","dd5774070c4f9e0bf590908161246919"],["/posts/59977.html","59c7c16103b3688c624cb29e9170f90d"],["/posts/5c0875d6.html","197b9993bccd9d0350a49304b59280b8"],["/posts/60364.html","c3e8728d23838ba9ac71ec1c59a25c54"],["/posts/6059.html","b0cadaa19b3895056fb9837037b3a629"],["/posts/61794.html","6278dbb180a093dae8572941f13c53d6"],["/posts/6275.html","601ff13c489d13bc30ccae9b89352155"],["/posts/62910.html","25e7a0f2841d748ae3b34179bf7b15b6"],["/posts/630.html","f3802fcb723ec61518b9eb21e890ecd8"],["/posts/64423.html","32b2d27712123813438eb5ce99dcc24c"],["/posts/64528.html","12c05a79b67329da5d39a452dba51b86"],["/posts/646dbc2e.html","bd5f5cf926999f597779d8b818e98246"],["/posts/64846.html","791cca20d9b928311688260e0d969263"],["/posts/65aeda8b.html","1a76ca1c5c96935c52f61f2aa9b1896f"],["/posts/6637aa6e.html","71cd268f515d82092555fc6621121d0f"],["/posts/6656ad65.html","b5b543e9bc1d031f414feda1f5ddee1b"],["/posts/6e2faa04.html","3a3e8e267f22ebe46e1085f1298db610"],["/posts/6f521982.html","016d1a154c6d7665663428e03a61f95e"],["/posts/71dd948a.html","115733890d1ec82439195a3fd2ad5493"],["/posts/773d5f8c.html","64a1fa63aec76204c62a1843adccd551"],["/posts/80bb221f.html","0bd82512fb49a112d82a94240d79ca6e"],["/posts/80ca38c0.html","b9cbab71f4685af78a887610019a7836"],["/posts/8573.html","527d2bba04aaecc0e91369e8151be46b"],["/posts/8589.html","514ea32a3d824081de38e3fd1e41f32e"],["/posts/88fead8.html","8e018623006973ae652e0111579353b0"],["/posts/8b540f5a.html","c44c1a1932a5adef0a82da1d3f0e744f"],["/posts/8c0ed688.html","d7050b7e54be16787819a4a7563dc36e"],["/posts/8f004046.html","243ef1f9827c6ac159128613eedb308d"],["/posts/8f19a96e.html","9d7809a232ebb63b9b34a3292a635eea"],["/posts/901b8cd5.html","1045e2b4e5fb8a982ce73886c5a1d3a5"],["/posts/9618.html","ac460623784128c8a43c993930f3e9ba"],["/posts/9812.html","949c700246e21b9275a1d845e3eed150"],["/posts/9e565f9f.html","a15526a658c3e2e3dd83b27df8c10151"],["/posts/a9378efd.html","0c21c50d36ad1cae222efd2fe7e7f1eb"],["/posts/b572816f.html","5ab643217d63a0ee1dad9724ba95bb54"],["/posts/b794162c.html","7905538360bb2ba98061d15f8e5f651e"],["/posts/b7cd6609.html","d5ab9cd0a4d87f531a1c2c55c8853090"],["/posts/bae4ff13.html","0563287a59e7566d8677b164bc2f43cd"],["/posts/c54e1e5.html","1d4231dd2dc540a172cf0395f4f7c675"],["/posts/ca165cd5.html","c1e4c84a394d5e48f1e4da7e3ced0278"],["/posts/cc50857e.html","3f4cbb3183ad747797581df478fd4d56"],["/posts/cfcef26f.html","f4a6a0d0cb01b4796cbc01569975a67f"],["/posts/e4f3239b.html","9cda925d49add4a4f3d1350f452c9c31"],["/posts/e73bc34f.html","d47998ff908f726b81020d40ec958518"],["/posts/ee789513.html","f243342b21f12a5accb2376f061500c6"],["/posts/f8d580eb.html","ca2d41e0a3275616e06c5ff00fa6028d"],["/posts/f92cb63f.html","c0ab833792e8a287d7a2a745647449ea"],["/posts/f9586000.html","6956074d9bb5ec4f711478d4c9f00683"],["/posts/fbd6efa0.html","7cb9875df5569bc8272c28431fc37317"],["/posts/ff995e29.html","d492eddba26ef21647e572901a4e5d8e"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","18cf86643339fa83647c7fd7bd95eb48"],["/tags/Anaconda/index.html","103d6884c238b62b31e71807872d3892"],["/tags/Edge/index.html","e7a8f1e7c9e82da8e0dd6efce520bfc0"],["/tags/Git/index.html","44ea381799cce96b0db7e286781303c4"],["/tags/Hadoop/index.html","543d6792f658b79ac05ce7da9c497c32"],["/tags/Hexo/index.html","5e5aea73751325b4328a933b9f869955"],["/tags/Java/index.html","799e6a0cae2fd327bbf38f0fdd0b87a1"],["/tags/Linux/index.html","b67c02a62d162144c8314291c09da783"],["/tags/Linux/page/2/index.html","fb7b3f55c002148138e3281d3719c710"],["/tags/MapReduce/index.html","3e488809b2c5a9f1fe89f33306b00810"],["/tags/Mysql/index.html","753208b3b268919642c3630c6846e449"],["/tags/Python/index.html","4685a73cf75cb1ca394e070ae17d6c9b"],["/tags/Python/page/2/index.html","1d519f2cd054507fbda87cbbe7b9c2a4"],["/tags/Python/page/3/index.html","bbfc410aee15ec00d603a77972643f62"],["/tags/Python/page/4/index.html","e014bf44537173040a4eb05773071cde"],["/tags/Python习题/index.html","a71c6220cabcd5b63a5cebd8e986eeef"],["/tags/Redis/index.html","070a9cdb0808312962f4de70ff75eedb"],["/tags/Tools/index.html","b6b1e118917efd5fbe1be41d36841208"],["/tags/Win10/index.html","8e99f6c4a6cdb3a9e59fd292fa3d77c0"],["/tags/Windows/index.html","399593ee9c3b0401652a93278755dc35"],["/tags/index.html","4692a426d2e45ac8f22dacc3dbcb00b5"],["/tags/任务栏神器/index.html","c9c698020fbc2c0d5da867a2cdd93c74"],["/tags/图床/index.html","7e5484249cb9d012ccdb4996c1a2e5a5"],["/tags/数仓/index.html","070c0d4342ac360b5276974eb766b6a7"],["/tags/数据可视化/index.html","edb4fd31ee817e865785139db550d144"],["/tags/数据库工具/index.html","bd2ba317d843ec9111c991ef3b7b8536"],["/tags/毒鸡汤/index.html","d14f0ff1f1c1eeae7eee69ec8e7c96e5"],["/tags/环境搭建/index.html","faf35811b2ff1f9e114be4df86b63391"],["/tags/资料分享/index.html","207b6fa907c7e7a34cdea4ec6c637ea1"],["/tags/面经/index.html","4b35e50913a47c5282f1ddf5497be44d"],["/tools/index.html","5666f6bc204b84da7da847b5e0d7515f"]];
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
