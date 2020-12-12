/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a38a34c6122143f19a19a8c4c6c9a3d2"],["/Creator-said/index.html","7bb2c92bcb5be93a6151577c2ba6c608"],["/README.html","36f69704e240c5e76d21d6a8dd4a1b03"],["/about/index.html","967b10ff03ba68d2f901177e7af09120"],["/archives/2019/09/index.html","dd2cd8d646f8ae31d383a6a5224b9dab"],["/archives/2019/11/index.html","8ad595a7e2cd4a5e3842484038301e42"],["/archives/2019/12/index.html","d29d1bf7a8fbcc78d8f7f25907ca1563"],["/archives/2019/12/page/2/index.html","32e96c3c90483887ce6e401f05b61917"],["/archives/2019/12/page/3/index.html","e8a07d59764bdb6c29a59ae2b3d2f6fc"],["/archives/2019/index.html","26d91e50d36efba8f936b718b5d5274a"],["/archives/2019/page/2/index.html","e02a39c229e6af6a7e24aafa26d43ffb"],["/archives/2019/page/3/index.html","f3f42e0a11f0d11e6462560b9de67ea6"],["/archives/2020/03/index.html","db0e8932f88594468fcbd7cba8a8b8da"],["/archives/2020/04/index.html","21e06bd8baef1756193c9cc914464db8"],["/archives/2020/04/page/2/index.html","5de3303a32171a03941db3bba61e61b4"],["/archives/2020/05/index.html","034398b9bf0da1613335a09fbbf65938"],["/archives/2020/05/page/2/index.html","10034498307e3c8b4b6352f25c99657b"],["/archives/2020/06/index.html","34e16d2798cd8249ce41b01f8986b271"],["/archives/2020/07/index.html","b6fda16f52f439f3184345a1d9d4f3ad"],["/archives/2020/08/index.html","8fdcea47c9c26080ba95eb3b40b3c093"],["/archives/2020/09/index.html","768faf1b60404a2ba15445d63fff415f"],["/archives/2020/09/page/2/index.html","5f088a109ab0c8a85be5aebaaceeb5d5"],["/archives/2020/11/index.html","270b750c6f584dc847a6bd9ace5d5873"],["/archives/2020/11/page/2/index.html","b0584a44b2fa63bb79e614b8108672aa"],["/archives/2020/12/index.html","ff41500125263b43637534b4305fba2c"],["/archives/2020/index.html","1f5dd349deadc21600d355f697010731"],["/archives/2020/page/2/index.html","ea99e7a5f30233a72e634fe2c7537e2c"],["/archives/2020/page/3/index.html","239a3c7be93549080d85a4c6ee4abf80"],["/archives/2020/page/4/index.html","3762331a424fcd371e0879d3a7b99f49"],["/archives/2020/page/5/index.html","7f48e25255f6c88ac058d410be6e2fda"],["/archives/2020/page/6/index.html","559a7dac21cc3c36b5bce6dc1f6c89c3"],["/archives/2020/page/7/index.html","502c78d663f3c6dd38fcd5596907c1ab"],["/archives/2020/page/8/index.html","319ecac92da0238b304d55d0882968fb"],["/archives/index.html","742d394e9c6d9d4058495023715568c1"],["/archives/page/10/index.html","49854484a0b9dc86a9b5b799a40c6ff8"],["/archives/page/11/index.html","49854484a0b9dc86a9b5b799a40c6ff8"],["/archives/page/2/index.html","ab1ba86e852ba4f8439486c05efd0f2d"],["/archives/page/3/index.html","49854484a0b9dc86a9b5b799a40c6ff8"],["/archives/page/4/index.html","49854484a0b9dc86a9b5b799a40c6ff8"],["/archives/page/5/index.html","49854484a0b9dc86a9b5b799a40c6ff8"],["/archives/page/6/index.html","49854484a0b9dc86a9b5b799a40c6ff8"],["/archives/page/7/index.html","49854484a0b9dc86a9b5b799a40c6ff8"],["/archives/page/8/index.html","49854484a0b9dc86a9b5b799a40c6ff8"],["/archives/page/9/index.html","49854484a0b9dc86a9b5b799a40c6ff8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","3eaf8407359f9573d6cf16c2a41f422e"],["/categories/DataBase/Mysql/index.html","12fde34a98200ca0b477b4954ce90207"],["/categories/DataBase/Redis/index.html","d5a16d02f455ac08b095dbb60ae8f0cc"],["/categories/DataBase/index.html","b060edb43ac256487ce7dcb41e19d6e7"],["/categories/Git/index.html","f7ae04164eeca756a84b31b77752df24"],["/categories/Hexo/index.html","c045b311d2648d122f2deda5606e8fb5"],["/categories/Java/index.html","121fd70e9e6f6db698a9ec1264053f81"],["/categories/Linux/index.html","ae8a0e716d4743c84287a4aa932a4822"],["/categories/Linux/page/2/index.html","14f45756e63a30c20b431002eb898c65"],["/categories/Python/Anaconda/index.html","30f82b34ab4a1711b0a5b0323b8bc688"],["/categories/Python/Python入门/index.html","3d418684aa6a2f03c95184246aa29cd0"],["/categories/Python/Python入门/page/2/index.html","566d4fac91e5b05d47640e563e1b4cfd"],["/categories/Python/Python速成/index.html","fff7f1b0ec9cf469fb8e33d6d8566562"],["/categories/Python/Python速成/page/2/index.html","f4d3962c36f934d23c5a7ae582dc82fa"],["/categories/Python/index.html","f5870bdac5d5aabc88436971b9daee5d"],["/categories/Python/page/2/index.html","786fa6ea78c6ab3860a2a130f24b2cd5"],["/categories/Python/page/3/index.html","7ec786087a907cec4e9d868b58aaf5ce"],["/categories/Python/page/4/index.html","5dd99e406cd662bc0fd882cc6ad74325"],["/categories/Tools/index.html","b0298a50c5c635a5e7bfff688df2666b"],["/categories/index.html","db220430da4d30b5f9e43834fdb1133b"],["/categories/大数据/index.html","9dbbc7552d2f33721944d28936b26fe8"],["/categories/职场/index.html","7ce950dda6301ea3c90217a0367fec87"],["/contact/index.html","179d9a99eaea30ea4e27fba3d42ab998"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","1494ff7077b9993ee627f91687e0821e"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","786d7bdc9c151f4cca0d0bdcec2dd489"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","2960402d5aa05c47c49d87fee02a4a21"],["/page/10/index.html","41c435ddde99afba343cee9ef62a957b"],["/page/11/index.html","947430389eb5433b38f5418abba8b839"],["/page/2/index.html","daa85435b6cf7991ae2f96b05d73ce09"],["/page/3/index.html","ed9c8ae2d034f0ceb6738bf28651835d"],["/page/4/index.html","9499ecf6be8dc7e08075fce8257d8535"],["/page/5/index.html","a333eda3b8b995b8f6e6211c456e8107"],["/page/6/index.html","c9d625a990fc57fc7301fd51000d019e"],["/page/7/index.html","ac0adf1327a6d477f49567b9fc648415"],["/page/8/index.html","032134a5005a9412f3be75170601f285"],["/page/9/index.html","6fa6167e7906b4dae9e3083e293d114a"],["/posts/10415.html","432382800954437308ab053f5756a591"],["/posts/10537.html","df83f3d8e8986f4d4a2901e1d438bd4e"],["/posts/16550.html","d10f9aed4a2b738b4a787116bc173b5a"],["/posts/16586.html","65b17facff84edb08de22759af93f9c4"],["/posts/17415.html","0f02a48b03748475ed15646a7a6e0daf"],["/posts/17683.html","37f7164c81e624815026e046e848d1f7"],["/posts/18321.html","43f5d890ac1045b578e9de4ae00190d1"],["/posts/18572.html","551090c95f8cc1ed1f347b2c07b4b1a7"],["/posts/19a88b12.html","c5d25923f2c99e9e17dc70d22326dc2c"],["/posts/1d1dff0b.html","2203fb477db5b504475181ce10c770fd"],["/posts/27081.html","c51beb6390a22357c1dc520fd8acad7b"],["/posts/2834.html","a4b8abb4ce3fbb8e30978333f68cac5a"],["/posts/29055.html","ca53f5402b75c366cd7186cb9ea4acd7"],["/posts/29966d.html","96e4e1e837a32e1e5e2b34af6fe05ea0"],["/posts/2a327ad2.html","06f9105664c0dc640e0e9de9b65f96c5"],["/posts/2b36786b.html","7b8abe9ab92788458ebfb510d600be8d"],["/posts/30675.html","7fb8fc4b2d534116dc4fc8200b340b9b"],["/posts/30873.html","8821f1499037416f741482aa578a4ee0"],["/posts/32274.html","c683a7b7c60f8699d02d66a9652067c4"],["/posts/34708.html","1d80001759e3a1130f080d948eb23e3c"],["/posts/34771.html","590dac6c8fa34b1136a83aa29c53588f"],["/posts/34946.html","407a8dde084d4a2ba232b562c01555dd"],["/posts/36204.html","20864d5683757206bc7031a131371cf5"],["/posts/37390.html","81c509434e6e258d4d90d0b70cd7cdeb"],["/posts/37426.html","17c43f0884d5614109a9053c045d0b89"],["/posts/39508.html","6c9c5a0b525361ab045283a340530fad"],["/posts/39704.html","017837faf0f403c28b34b481c4aa62a7"],["/posts/3fb6e39.html","3f617e81185178c82c1b4d529504b763"],["/posts/40711.html","045893fe6304c75af7f9cd44035ab28d"],["/posts/41055.html","ede84374b39693828e4f4b33fb47a4e7"],["/posts/4136.html","523a6bcdf466cbf5bcf17b9f900f50bb"],["/posts/41382.html","a047a566875735497be139a1361c4bd2"],["/posts/43150.html","4781b315e983a7f52fdb14e350d271d6"],["/posts/43249.html","e05c06d2b777213a0a9a5d502f082d4b"],["/posts/4354b039.html","28c5c4461275584121b1846478a2678b"],["/posts/43857.html","d7cfdd04d84fc17f2a98f7207ec66a2c"],["/posts/44947.html","98d5b5bfdb941900df82280c3273f4f0"],["/posts/45997.html","761475e35b7fe01d96a59ba40c26a7cb"],["/posts/46411.html","98ded3d0f37c1c5447e5e4fd81673805"],["/posts/47220.html","da43ed0c673cc3529d4707ff381c6a8d"],["/posts/47936.html","1d2b4da2a0141c5b0b75f3d6b580cc5f"],["/posts/47985.html","9d1b7ed0529ed81c08bb180543d9b9b2"],["/posts/47ce27c8.html","a65d082f54eadf877fe55d32dcc25191"],["/posts/48061.html","f64b9091bc43d79ee728ad6cb1090aae"],["/posts/4a17b156.html","e7d5c277d6215e5663f9c071a59202a3"],["/posts/5010.html","6e1d30a0c15b53f90eec70dc2d87a66a"],["/posts/51417.html","5ba80306ec5b1c62d18efaa417db4d3c"],["/posts/5144bcf.html","57af7f6af24d7b7ad2b921ba96a7977b"],["/posts/520.html","0e29c1d50f8d221a99bb6aa9cc8c0360"],["/posts/53d1dcfb.html","27793d47bfbc1f0782e48dfb26ada15c"],["/posts/55248.html","d1f688950347775400cd0c6fc0c84bd0"],["/posts/55860.html","e416dbd42c1d3f3ba81ef722d512475c"],["/posts/58489.html","fcc222cd8c5d0a92600ce0105253043b"],["/posts/59346.html","dd5774070c4f9e0bf590908161246919"],["/posts/59977.html","59c7c16103b3688c624cb29e9170f90d"],["/posts/5c0875d6.html","197b9993bccd9d0350a49304b59280b8"],["/posts/60364.html","c3e8728d23838ba9ac71ec1c59a25c54"],["/posts/6059.html","b0cadaa19b3895056fb9837037b3a629"],["/posts/61794.html","6278dbb180a093dae8572941f13c53d6"],["/posts/6275.html","601ff13c489d13bc30ccae9b89352155"],["/posts/62910.html","25e7a0f2841d748ae3b34179bf7b15b6"],["/posts/630.html","f3802fcb723ec61518b9eb21e890ecd8"],["/posts/64423.html","32b2d27712123813438eb5ce99dcc24c"],["/posts/646dbc2e.html","bd5f5cf926999f597779d8b818e98246"],["/posts/64846.html","791cca20d9b928311688260e0d969263"],["/posts/65aeda8b.html","1a76ca1c5c96935c52f61f2aa9b1896f"],["/posts/6637aa6e.html","71cd268f515d82092555fc6621121d0f"],["/posts/6656ad65.html","b5b543e9bc1d031f414feda1f5ddee1b"],["/posts/6e2faa04.html","f14873ae4d2dcd38d76314ded4d99020"],["/posts/6f521982.html","016d1a154c6d7665663428e03a61f95e"],["/posts/71dd948a.html","115733890d1ec82439195a3fd2ad5493"],["/posts/773d5f8c.html","64a1fa63aec76204c62a1843adccd551"],["/posts/80bb221f.html","0bd82512fb49a112d82a94240d79ca6e"],["/posts/80ca38c0.html","b9cbab71f4685af78a887610019a7836"],["/posts/8573.html","527d2bba04aaecc0e91369e8151be46b"],["/posts/8589.html","514ea32a3d824081de38e3fd1e41f32e"],["/posts/88fead8.html","8e018623006973ae652e0111579353b0"],["/posts/8b540f5a.html","c44c1a1932a5adef0a82da1d3f0e744f"],["/posts/8c0ed688.html","d7050b7e54be16787819a4a7563dc36e"],["/posts/8f004046.html","243ef1f9827c6ac159128613eedb308d"],["/posts/8f19a96e.html","9d7809a232ebb63b9b34a3292a635eea"],["/posts/901b8cd5.html","1045e2b4e5fb8a982ce73886c5a1d3a5"],["/posts/9618.html","a51ea0c1755378c976adbcf4ef7999ab"],["/posts/9812.html","949c700246e21b9275a1d845e3eed150"],["/posts/9e565f9f.html","a15526a658c3e2e3dd83b27df8c10151"],["/posts/a9378efd.html","0c21c50d36ad1cae222efd2fe7e7f1eb"],["/posts/b572816f.html","5ab643217d63a0ee1dad9724ba95bb54"],["/posts/b794162c.html","7905538360bb2ba98061d15f8e5f651e"],["/posts/b7cd6609.html","d5ab9cd0a4d87f531a1c2c55c8853090"],["/posts/bae4ff13.html","0563287a59e7566d8677b164bc2f43cd"],["/posts/bb9346ce.html","731082bdc1b0b2f9320db3032d6f084f"],["/posts/c54e1e5.html","1d4231dd2dc540a172cf0395f4f7c675"],["/posts/ca165cd5.html","c1e4c84a394d5e48f1e4da7e3ced0278"],["/posts/cc50857e.html","ba3b717ede67ae1e8ccb25aa863618a1"],["/posts/cfcef26f.html","51a27a76f19c83d44619be7eb2a9f4e5"],["/posts/e4f3239b.html","9cda925d49add4a4f3d1350f452c9c31"],["/posts/e73bc34f.html","d47998ff908f726b81020d40ec958518"],["/posts/ee789513.html","f243342b21f12a5accb2376f061500c6"],["/posts/f8d580eb.html","ca2d41e0a3275616e06c5ff00fa6028d"],["/posts/f92cb63f.html","c0ab833792e8a287d7a2a745647449ea"],["/posts/f9586000.html","6956074d9bb5ec4f711478d4c9f00683"],["/posts/fbd6efa0.html","7cb9875df5569bc8272c28431fc37317"],["/posts/ff995e29.html","d492eddba26ef21647e572901a4e5d8e"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","c16213e0f283bead28c73b69b15b34a9"],["/tags/Anaconda/index.html","fa1da78b8b0fcb63ad0cdfd481c594ee"],["/tags/Edge/index.html","315becdabcca0f47297afe8746e4b582"],["/tags/Git/index.html","a1f7704ab7392bad9796c39425c7ff15"],["/tags/Hadoop/index.html","e7007f9d563cd35b92af5e28cc114f3b"],["/tags/Hexo/index.html","95f7fc73a3fabba0a237e6d787fb00e9"],["/tags/Java/index.html","4f4eeb1c5e2a44949b37e051508abc13"],["/tags/Linux/index.html","4a717af7f15c60e699b488ad719e50f5"],["/tags/Linux/page/2/index.html","820dc650dc08516b176c41b3c8636b2f"],["/tags/MapReduce/index.html","658243f2d1ad05404182519dbd588a49"],["/tags/Mysql/index.html","5ef4c2728e7e305f69115303c06e9759"],["/tags/Python/index.html","09e2c00998946e29255fb219621de1ae"],["/tags/Python/page/2/index.html","15b8d014c467563271be22d0b9037ae1"],["/tags/Python/page/3/index.html","6441a3e7a49a083451534543e88ace94"],["/tags/Python/page/4/index.html","36c28fbd181dbac5472c0683cd5d43c2"],["/tags/Python习题/index.html","f0fb8f9983c64f4c99abbb0c176b62af"],["/tags/Redis/index.html","67f05c452908a3688081955e90647ddc"],["/tags/Tools/index.html","3ab1a5acb635553103d735c48678c171"],["/tags/Win10/index.html","b7d7e4f3ef713ca9365e4ea451bc32f6"],["/tags/Windows/index.html","ac6a1a3b98fd882a9ddcdb9b04a9ab29"],["/tags/index.html","d8d6bd314f8584f142101a23e0d327c2"],["/tags/任务栏神器/index.html","64a049bec909b2f0d74414a631efcee5"],["/tags/图床/index.html","7cb7223852a965d8625c64abcdf90f34"],["/tags/数仓/index.html","2ba85b518714eae016b525c9a9fe9c1a"],["/tags/数据可视化/index.html","82102e2eb56bdaee3825dbfb1a3d6998"],["/tags/数据库工具/index.html","0f80d266c0721dca577cba1b5129667e"],["/tags/毒鸡汤/index.html","ccdbe6534f100f17fca99dd4092559aa"],["/tags/环境搭建/index.html","f7fd2f6c4a69b4193f34d10be90dc3ac"],["/tags/资料分享/index.html","576952865e33d0222bcf3ea9cb4403b6"],["/tags/面经/index.html","ec1228e161d69593b561759002199c53"],["/tools/index.html","5666f6bc204b84da7da847b5e0d7515f"]];
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
