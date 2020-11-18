/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cd48e54446ade8601e84af63b7620095"],["/Creator-said/index.html","ac25097d9cc9fb4f1275a76c164e6253"],["/README.html","36f69704e240c5e76d21d6a8dd4a1b03"],["/about/index.html","5af150af329e7f67823de71f51d21d54"],["/archives/2019/09/index.html","135d457b7301deb355ad548bb7238e1d"],["/archives/2019/11/index.html","1a03cc8daad41e5ed660a09c01e4106d"],["/archives/2019/12/index.html","14c7f630055206ab6735888ec173cf2d"],["/archives/2019/12/page/2/index.html","9fe5d9fbeb7e1e53229a7e965a0426e1"],["/archives/2019/12/page/3/index.html","f03a751192f817c5b3c323c53d9aca5c"],["/archives/2019/index.html","2b4865a60ef0e1e0fd298255e8b43722"],["/archives/2019/page/2/index.html","c4089d75fcf1019cb69026c94da9e32a"],["/archives/2019/page/3/index.html","c902ed846c474a9b822fc0662dea6603"],["/archives/2020/03/index.html","0ce0bad4ab9614e192072f4127b87f91"],["/archives/2020/04/index.html","96b90856114162e1afde512e1e60863b"],["/archives/2020/04/page/2/index.html","ef1ffdeebd82bc8c972fddf87671422f"],["/archives/2020/05/index.html","3cc9f002a78c92a56318c9b9e10d523a"],["/archives/2020/05/page/2/index.html","d514303e1e5c5717de87ae75af3c6025"],["/archives/2020/06/index.html","60475c661e6fb2d00a4fa855276ccb7c"],["/archives/2020/07/index.html","8f26744ebc8de3b0f70fd8b43a5a3d63"],["/archives/2020/08/index.html","7691f4e874727b9ac147ba45d1ae3529"],["/archives/2020/09/index.html","e63ecce385a259588fefc6b2c8aa2100"],["/archives/2020/09/page/2/index.html","5659413462987bebb3f6c46e2a7db03d"],["/archives/2020/11/index.html","29ff3efa43857dc985701d336be0365e"],["/archives/2020/index.html","247880c88014b75f0e73d3144a4708ee"],["/archives/2020/page/2/index.html","d784dd90352d504ed97e558a7fabe955"],["/archives/2020/page/3/index.html","48746bc6fd7394515edc103a3e201b1c"],["/archives/2020/page/4/index.html","b50834f8ca618f6cf9b126d41d2cd90e"],["/archives/2020/page/5/index.html","bd7023683f8506457a0563d87dfdc006"],["/archives/2020/page/6/index.html","2231a7615e951bde7f2e2f8129526910"],["/archives/2020/page/7/index.html","3aaf13ac27fa9ae754701946e26f62f3"],["/archives/index.html","a4182e04f7e40b4a283a30a111c12d95"],["/archives/page/10/index.html","5af01cc77c8d761e4a6b9a883fb66a86"],["/archives/page/2/index.html","5af01cc77c8d761e4a6b9a883fb66a86"],["/archives/page/3/index.html","5af01cc77c8d761e4a6b9a883fb66a86"],["/archives/page/4/index.html","5af01cc77c8d761e4a6b9a883fb66a86"],["/archives/page/5/index.html","5af01cc77c8d761e4a6b9a883fb66a86"],["/archives/page/6/index.html","5af01cc77c8d761e4a6b9a883fb66a86"],["/archives/page/7/index.html","5af01cc77c8d761e4a6b9a883fb66a86"],["/archives/page/8/index.html","5af01cc77c8d761e4a6b9a883fb66a86"],["/archives/page/9/index.html","5af01cc77c8d761e4a6b9a883fb66a86"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","f91722272f0a19e387026c94d9f7502d"],["/categories/DataBase/Mysql/index.html","53611e6c24156a03b41e7843e536da7e"],["/categories/DataBase/Redis/index.html","63d0d77e2449fc519e34c17448e296f7"],["/categories/DataBase/index.html","dbcabf623099691a23dfe497970eff3a"],["/categories/Git/index.html","3cc6cd805daaa25b0b8c5e21bc73df69"],["/categories/Hexo/index.html","900d0030bd134c768b679ed841d979b3"],["/categories/Java/index.html","b267bf35fe95c90f73b0700ef2ffe174"],["/categories/Linux/index.html","9de1c2f7af844bce58334b2334fc7fb4"],["/categories/Linux/page/2/index.html","08422021198d1170cde393f52046964d"],["/categories/Python/Anaconda/index.html","0e4756587111e1e684fd5e648ee887f6"],["/categories/Python/Python入门/index.html","0b6184506a6c4ecc7aadf14d294ef342"],["/categories/Python/Python入门/page/2/index.html","55dc6de7a8ae2a87766176c87995ac32"],["/categories/Python/Python速成/index.html","e630411fce515e650968d3abacc07e71"],["/categories/Python/Python速成/page/2/index.html","f35aee1f2b60deb35ace050b96a95d9f"],["/categories/Python/index.html","aa9bf617b6ad7b4e3272e343faceeea6"],["/categories/Python/page/2/index.html","174009c1f8f30c20633f2e05cb97b149"],["/categories/Python/page/3/index.html","68fea1052a210675ed3ea53c5d8e503d"],["/categories/Python/page/4/index.html","281ac8ff6abff89d1ac6b15228f3b5c5"],["/categories/Python/数据可视化/index.html","783c4fd3f356dc25e908431127fc89b1"],["/categories/Tools/index.html","624d51aec3de78076effa634b8cd68c0"],["/categories/index.html","842712f5b66816c68ff4b403f940c072"],["/categories/大数据/index.html","5b74f300390ca5a5a51673b48349a4d6"],["/categories/职场/index.html","02cac0c654655ca1a01a84071b4124db"],["/contact/index.html","c32a5ffa304f7e2d8166844059c20d68"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","32c62c5bd5aed09afa58f0a115c730a8"],["/friends/index.html","96b9f99376da4db67fbdc52bd28efefd"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","7fd452b15058e6e04f78bf218b8ef044"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","20276379341e085dd33e93cad5fca920"],["/page/10/index.html","2d2ae054633dfd12c644b13fe2ba7484"],["/page/2/index.html","9d9ef76e6f1662537e44675773a70821"],["/page/3/index.html","3f5c49a1322898be68adaab860c5164c"],["/page/4/index.html","e23848e2a8d391236b2d8245aa4fa4da"],["/page/5/index.html","957bcd128554d979ab1fe26d1d760989"],["/page/6/index.html","2c9522143f3851c6497752798e2f1a02"],["/page/7/index.html","f5a26f539d239780296a8697e9e6b353"],["/page/8/index.html","ce8a0ae29ab893235fbc3c1595335507"],["/page/9/index.html","b292871e9d82d7035a62b22365590f33"],["/posts/10415.html","e6a6c7b144e44a3e7796fa3807f6dfff"],["/posts/10537.html","88a993b713aa8fa3a84e1fccf98408e4"],["/posts/16550.html","e7e0bbb999a8fa7ba1967ef2db5aa047"],["/posts/16586.html","522efd1697d9f85a4a4ef93508b15e2b"],["/posts/17415.html","aa04190d394a83daaefadd375052047d"],["/posts/17683.html","85784151f332d12031d2c71231443294"],["/posts/18321.html","85319c26be2b5eeee6f165a88e22f988"],["/posts/18572.html","89f989936f61469a5348eb493d1fe3f2"],["/posts/19a88b12.html","a834a510f6b6cdfc1a6677845d1db936"],["/posts/1d1dff0b.html","6e5c57f4c93776ed476b2e904b389fc3"],["/posts/27081.html","4bc1f70883e5eaad582e091231717636"],["/posts/2834.html","49d9093fb158c76a99137463306b7c4e"],["/posts/29055.html","86a2eb390ff66628e662daedd21b18c9"],["/posts/29966d.html","b3228bd92f81c1f93462dde1cd137799"],["/posts/2a327ad2.html","b08c52258d931509f5bbbe69d5d39ae1"],["/posts/2b36786b.html","8a41406e96eef0d5437913d391919fe5"],["/posts/30675.html","e5499225b8ee0b128e0192eb36ee6acb"],["/posts/30873.html","b3b49f97e4dd7a6ddcca89e16c484116"],["/posts/32274.html","8eca7b2a5b98bbe69eb71b9976a367c8"],["/posts/34708.html","c0a9be9601f9eb2e0eee1aab4f158d11"],["/posts/34771.html","80599a589478cd385ceedb6cd94d8af1"],["/posts/34946.html","0ad036e437174c0564a89d049b08831a"],["/posts/36204.html","003cd0a4d6037bc46562b23842deedc2"],["/posts/37390.html","28728f8aacf1ef9cc218b46f5e20681a"],["/posts/37426.html","ae07f1f502f3a477bb1c2cc1cceb9448"],["/posts/39508.html","6fd393a59c3054b7344368f6c3e914ef"],["/posts/39704.html","6fc4f2dd5181c4c0877335a6c812820e"],["/posts/3fb6e39.html","72b4a22c83a8223a9343ffb946f59b40"],["/posts/40711.html","9a9aac40b2a1a2f04551128459ccaba8"],["/posts/41055.html","0e859cb4692bbc33c50139c2899238e1"],["/posts/4136.html","cec64636e83e26fe6977b451eec12d66"],["/posts/41382.html","83bf3aaafda4c505934820ca98378115"],["/posts/43150.html","02bf247c04d7f0f9f5e8e7bcd30edd28"],["/posts/43249.html","8739f300ec40d3ce8cdd3dba0c29e38a"],["/posts/4354b039.html","269166d3e554350072cac2a6432c1904"],["/posts/43857.html","ec15a5f0c25c553a19ace682faf95ce4"],["/posts/44947.html","cc9ebfb85e70f977888227e2b02b781f"],["/posts/45997.html","a4f7057ada8914d8bcf343f2df9911ee"],["/posts/46411.html","69cceecfdd3cc436f787bdc3ad14e47d"],["/posts/47220.html","624c9d14170c71afde2804f6d82c166b"],["/posts/47936.html","d417c6715f9a12411b8b0e0772cefe08"],["/posts/47985.html","dae05b4a251daf6f4c6087ff899f15d3"],["/posts/47ce27c8.html","ab7a9e21c32fc3510912775bfcd90514"],["/posts/48061.html","8d2853f6a2c5dc4adcfbbca653c851d3"],["/posts/4a17b156.html","ec2ab86d42ba5205b7d0f26b934f4db9"],["/posts/5010.html","01476afb8fac555578d316c937426ec1"],["/posts/51417.html","299226fa939f745f28ed2fee6f2421e4"],["/posts/5144bcf.html","33f08080bcbd7462abcdd8f7f0f7eb43"],["/posts/520.html","32d5cc50b15eb1f2a312c37606be7436"],["/posts/53d1dcfb.html","245fe4fec83245369d8b817cfce9bef9"],["/posts/55248.html","11fff25aea459943d32a20b1d7a19389"],["/posts/55860.html","9124233d788b50d95c4c4dfd01f1d48a"],["/posts/5590.html","c827941b2ccc7861cc34a24346176190"],["/posts/58489.html","3c9f6b723057b9d1b341c1ec2891b94a"],["/posts/59346.html","cf637e7ba309bda5bfd472c4c6bc96e5"],["/posts/59977.html","7e2d1db4e4012806a0d9f4ae79e57db2"],["/posts/5c0875d6.html","035e90a76740f4cba406ca8f67f1dae7"],["/posts/60364.html","3131dd3bb8e6324abfb6c1ad603881eb"],["/posts/6059.html","4694150bac0642e9891b9912e4e66fd5"],["/posts/61794.html","68b1cc6f3fc49ae7a175a7b6a27d9245"],["/posts/6275.html","c063777d3ce70ae42ea15a66fbef7c16"],["/posts/62910.html","c6af52bacfec1ba81c7a8242d22251c0"],["/posts/630.html","3b4d847f199d73d6532fa870383c4b18"],["/posts/64423.html","fb5461f2de06760a645ce4d03abaf5c7"],["/posts/64528.html","08fac1eb72321cdee0aac50ebc09925a"],["/posts/646dbc2e.html","308752c13614f07db4b5d32b072cfc62"],["/posts/64846.html","e9ca5de25045e1691ef3bd43aca63dae"],["/posts/65aeda8b.html","af43f27a78fb319dac6b49093408e1a9"],["/posts/6637aa6e.html","5716a39b20a890ab0fa5c9fe3c02890b"],["/posts/6656ad65.html","b199f20e76ed66143468d8c2e576eb42"],["/posts/6f521982.html","83e56df5832e867e38fee996db76e928"],["/posts/71dd948a.html","3a3c982ee6e10bafb33fd605910a1633"],["/posts/773d5f8c.html","35a0094a335d7fd78907c2f6d9b57e85"],["/posts/80bb221f.html","81428559ea5d619130f8509ab56591dd"],["/posts/80ca38c0.html","d6422af2d2524ccdcbc797870003b026"],["/posts/8573.html","7b70c871c74bb58e9e883b5e0e0e2956"],["/posts/8589.html","01ebd27ceeb7233e2acf8b4801206616"],["/posts/88fead8.html","2ec92ce57a187fbc32140da72b076a20"],["/posts/8b540f5a.html","299933bac5287150009ba85ead9e4ec1"],["/posts/8c0ed688.html","c88cdd3af4c2d58b7787b00477111dc5"],["/posts/8f004046.html","75c433e3a725c8a6ac66e132e7494227"],["/posts/8f19a96e.html","85b6a503440eccabd461380c6ad86a89"],["/posts/901b8cd5.html","8437ae43d798a4beed96278ec50ddc95"],["/posts/9618.html","ac279b0ca1cc54ea991f3c6d18bad3f2"],["/posts/9812.html","29d8cf8b6727a54382d9ef6c9f10831c"],["/posts/9e565f9f.html","23e45e72efb2bf171caa5d5ba640875b"],["/posts/b572816f.html","8ba825aab88969e7db4b72a17a615a3b"],["/posts/b794162c.html","5c26d7c9e3bd558249df62bd8f3a3b10"],["/posts/b7cd6609.html","d434dbc1d406daf81f99af9d0d2e9e89"],["/posts/bae4ff13.html","a78a789c9508cafbd9f41c44782177a5"],["/posts/c54e1e5.html","29f3289a14e98964d0d1f2cf7cb54470"],["/posts/ca165cd5.html","7ca67e6c54db7248f91c710e952bfcc8"],["/posts/e4f3239b.html","3c3f99a0daddef946ff01ada7992581e"],["/posts/ee789513.html","8963313bf67b34b8e82d730f86be6044"],["/posts/f8d580eb.html","af04a5f2f4b97095e6ef31fd90c03d32"],["/posts/f92cb63f.html","c172e563ee474ad62fce38965fe9df7d"],["/posts/f9586000.html","b2fd7eb60d5a45c02b02b0cf142f6af7"],["/posts/fbd6efa0.html","3211660918225011dc78d57923b63abc"],["/posts/ff995e29.html","b0428ea1d6dda437a825fd3fb0fc475a"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","ac761b54b0c60de0f0dfbde018f85df8"],["/tags/Anaconda/index.html","2c5ce205990ed5c1771f620134770909"],["/tags/Git/index.html","e1849f77cc00e48b67cfcd6322634087"],["/tags/Hadoop/index.html","7d999c995680f1b63cb64779dc96fd5b"],["/tags/Hexo/index.html","95bac05a98b7e9a5d3aec3ca1cd49a8e"],["/tags/Java/index.html","c0845e6a9be978994f6b3284a91243cb"],["/tags/Linux/index.html","cae19ccddcf206118f243173b0b03ca3"],["/tags/Linux/page/2/index.html","b4adfd28cbd53bd86221c4c90e3a3caa"],["/tags/MapReduce/index.html","c45cd14ce85fd54ea299cd64831f2732"],["/tags/Mysql/index.html","59ef366f4742aa6b4e646a410a6f7402"],["/tags/Python/index.html","ad90c4318b5499548686a693c3edb93e"],["/tags/Python/page/2/index.html","9b0b12b93b02fdb2dc17d7a38abcf258"],["/tags/Python/page/3/index.html","21c697f8210b6084cd8faf3cf8eb4cac"],["/tags/Python/page/4/index.html","20c66d67b1168c1de4a91d512ee7cd4f"],["/tags/Python习题/index.html","a38699499417c1bd903049a43338717d"],["/tags/Redis/index.html","4b6c488c16638c2803d0af390e65febe"],["/tags/Tools/index.html","79c5669b5f7c33b07691f86ed8cc5e88"],["/tags/Windows/index.html","5613877b7be247c0971744bd18091f96"],["/tags/index.html","0538f8512884bb4e618792eba5e5b88b"],["/tags/任务栏神器/index.html","7f1920961fc07505e4105f2dabb482e4"],["/tags/图床/index.html","4e876274149f8305cc65ebe945bd91f1"],["/tags/数仓/index.html","6de23953f15c3ef86ad24bb149a04a5d"],["/tags/数据库工具/index.html","f4ec6be4b6f2beb46c93618cce64c3b0"],["/tags/毒鸡汤/index.html","965d7138d39cbae8a8474503c9df70a2"],["/tags/环境搭建/index.html","678675a26ee2133da471bbe831e08c13"],["/tags/资料分享/index.html","741bb79ee40c0b6fbf64fdd95719f6fb"],["/tags/面经/index.html","3d21d00a0b61f76a7dcf293ea4fd0bf3"],["/tools/index.html","db513eedd79cf59a768035787ce7be00"]];
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
