/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b2a7b17525afc82b02dc19bf638e0216"],["/Creator-said/index.html","d043846e93d0ddb28bcbd0801d93bddb"],["/README.html","36f69704e240c5e76d21d6a8dd4a1b03"],["/about/index.html","1639fbc4b278226a3bda31ed1ac92068"],["/archives/2019/09/index.html","58d2b76212346761a423a7d1aa26b793"],["/archives/2019/11/index.html","9fe6d37217ffcde934f7ccd6e4f18f3e"],["/archives/2019/12/index.html","9a5d5c6d7ac1269c544a491dbb85d1b3"],["/archives/2019/12/page/2/index.html","6230fcb31ebff52ff25f5506b5b5fd74"],["/archives/2019/12/page/3/index.html","f6b364385d3430aaab1f70f33ed553c9"],["/archives/2019/index.html","af3837aa4627fe5d4a91a99b87bb5560"],["/archives/2019/page/2/index.html","c1546873ff6d229f027f857475196bce"],["/archives/2019/page/3/index.html","2c0fff1dea9e7074265518a0093b1726"],["/archives/2020/03/index.html","29b9f640d04788e4b5d3737260d05c18"],["/archives/2020/04/index.html","a2495e9f00e2ec88f401c879df053a3b"],["/archives/2020/04/page/2/index.html","54689dbf009238eb78bbde9aa49354c4"],["/archives/2020/05/index.html","f7fc2d44650dbd52fe4835acec79f212"],["/archives/2020/05/page/2/index.html","f7375d786733001ca9041682527b6936"],["/archives/2020/06/index.html","ecd5aaac61ccdcdfbeabed08891cca45"],["/archives/2020/07/index.html","d9ecb2ce05d5b6cb85553e518813566a"],["/archives/2020/08/index.html","d0699a53c9079d2f5441342b4ffce3cf"],["/archives/2020/09/index.html","a17446459cf2eb8883fb32c91e60d91a"],["/archives/2020/09/page/2/index.html","39ea4167ab6a115c46d0ec3b60569fe5"],["/archives/2020/11/index.html","43267c94ab07e127f0735ba91510460c"],["/archives/2020/index.html","df68235527b6b3d4b33bec7275cd85ef"],["/archives/2020/page/2/index.html","c9753a76401174587c4002628b57f4e5"],["/archives/2020/page/3/index.html","a18ef1c555cb8dbd3aa0f4d7db931ac1"],["/archives/2020/page/4/index.html","f082a313c3555e765bb6204c94aa018d"],["/archives/2020/page/5/index.html","4730a28a4c2b00eeb2163b4418ddb796"],["/archives/2020/page/6/index.html","517c86ccb5bacfc72f74bec69cf61f3a"],["/archives/2020/page/7/index.html","59ffe005df7e306981020e7a1d16def2"],["/archives/index.html","c0f9d035287b27f495167c23da576ea7"],["/archives/page/10/index.html","1657219dbfee4644a433e969cd0a7917"],["/archives/page/2/index.html","8c4006d33c43b1e5bdf6cf7964912c08"],["/archives/page/3/index.html","8c4006d33c43b1e5bdf6cf7964912c08"],["/archives/page/4/index.html","8c4006d33c43b1e5bdf6cf7964912c08"],["/archives/page/5/index.html","8c4006d33c43b1e5bdf6cf7964912c08"],["/archives/page/6/index.html","8c4006d33c43b1e5bdf6cf7964912c08"],["/archives/page/7/index.html","8c4006d33c43b1e5bdf6cf7964912c08"],["/archives/page/8/index.html","8c4006d33c43b1e5bdf6cf7964912c08"],["/archives/page/9/index.html","8c4006d33c43b1e5bdf6cf7964912c08"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","2f59a9f7b0bdee31c117ce4a03696b81"],["/categories/DataBase/Mysql/index.html","0ce74da7ab09acd798ebeb83d8ec5234"],["/categories/DataBase/Redis/index.html","a68a69800a8e1903f5eb1ab684593832"],["/categories/DataBase/index.html","8497b8c59054b2cf7a76f73512204bb2"],["/categories/Git/index.html","d774401e125c3899a06a941fdb6a7642"],["/categories/Hexo/index.html","d29cecbc6ace65b3563020089877d175"],["/categories/Java/index.html","9b3c379a77ef0a33d8b0bb5c3a6d2c43"],["/categories/Linux/index.html","4db2399d5e6a4cd42ba4b3c28518fc85"],["/categories/Linux/page/2/index.html","7f9078763fdc2d1c0e4e90baa7619338"],["/categories/Python/Anaconda/index.html","f7489d45f10df1ae19f9b9bdbd04b1c7"],["/categories/Python/Python入门/index.html","cedad19d6209920ad616da87896b8cac"],["/categories/Python/Python入门/page/2/index.html","94641fc7dfb7c5c92c874c910b9d0c46"],["/categories/Python/Python速成/index.html","c696d713acb6cec6571e0a24b52d942b"],["/categories/Python/Python速成/page/2/index.html","68238c0201e1a703286bf1691eb3ec85"],["/categories/Python/index.html","b0c389fcec970346f77341b499d22a27"],["/categories/Python/page/2/index.html","7b9ef3cd087363ac37fead232f65ad9e"],["/categories/Python/page/3/index.html","09fdc7812cfa708a72165d6d17cd6a30"],["/categories/Python/page/4/index.html","e11baa2dda145c1b7009593ae7387ebb"],["/categories/Python/数据可视化/index.html","cf86d9b33de75ca92e8f98fe1da9a762"],["/categories/Tools/index.html","2cd6163af4b6bdfa02444596850951cf"],["/categories/index.html","95dedd8905a171aed9cab20eb7fe1aff"],["/categories/大数据/index.html","726b87fe29b4da1fafea044c26ebd48d"],["/categories/职场/index.html","94f5da97f9ae023e3dc5e8ba98baf969"],["/contact/index.html","7fdfeb79a991abe2c1c472b79db4e5b1"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","32c62c5bd5aed09afa58f0a115c730a8"],["/friends/index.html","ec6c303439b0314409118511515cfc30"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","3063a7e3584f6cdaea239fd4d5ca45bc"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","1bd980cae576f880d0b4954774392be4"],["/page/10/index.html","1c97d2f7474bff865f86f1afa126fa47"],["/page/2/index.html","f83772a225c9e0299f2a8479e9a49ccf"],["/page/3/index.html","904491409750fdcf6848c81e6b128605"],["/page/4/index.html","4697d368c64e41f7355625bbce8241f7"],["/page/5/index.html","2fed68acee6ed3a1a67b3edf1cc68132"],["/page/6/index.html","5d15fa89c107c1fef9ebaaa35da1eb63"],["/page/7/index.html","d7d21a9ee523a27a793bfaaa44052c8c"],["/page/8/index.html","1e2f8d24e4a83d7bc622fa257286f3dd"],["/page/9/index.html","ea61b0fa1af64751d859928c6b8ca57a"],["/posts/10415.html","b605340d6b5ba92e6416066959c0e250"],["/posts/10537.html","262566b950930883e65547e5855c08a6"],["/posts/16550.html","4d528a8aa0430fa0b6721a614c5aa147"],["/posts/16586.html","6144b6e30e761f6ac37f962bc9f880f3"],["/posts/17415.html","7fa38ac031ee8977ef544778735feef7"],["/posts/17683.html","4d5dab66df1c12c2e0337d5f5d64b9a3"],["/posts/18321.html","1fb3f442fc7f1a7cf3c88158d114b5eb"],["/posts/18572.html","2e664e4b8fe98d2cc99cde74592518ef"],["/posts/19a88b12.html","e895abe257f70e9af556eed1f6080660"],["/posts/1d1dff0b.html","eac7a9f7e63a64be1a37f2e10829af83"],["/posts/27081.html","d56e5dc399144ee08d9f42f7b3afa085"],["/posts/2834.html","0cf8c15b684fb5afd2857e063f224baf"],["/posts/29055.html","92cbd92e131e72aba27a7ec1124be63b"],["/posts/2a327ad2.html","e4777a7f260e8b28f39a7ee3a7ce9f1c"],["/posts/2b36786b.html","e99c0cc53cefea23dd5a5430225a8a9e"],["/posts/30675.html","1ee3b757a65a054503eeac4f39f9e740"],["/posts/30873.html","53d9187fad1845f96aa3d01b5a77d6fd"],["/posts/32274.html","516846667a0ce5039a4c136946be119a"],["/posts/34708.html","ca6b19a57a97ac2ddc59bf8e13ed707a"],["/posts/34771.html","d704101f247c23b5b3310078fdc7c406"],["/posts/34946.html","b31fae3c804bd34f9883954ece6a7045"],["/posts/36204.html","aa69e04101a7edf2a4b145dd8800cd6a"],["/posts/37390.html","c83117f43ec26d1c580397c088bb7978"],["/posts/37426.html","2b3c2228a1fd58d2330233e411e6b0b7"],["/posts/39508.html","e5c74b6561886e568fa745e4586c5a26"],["/posts/39704.html","cb1bd37acc6e9ca3cc0b19be3e658dca"],["/posts/3fb6e39.html","6b06f858d5501fd31a455197aea561a0"],["/posts/40711.html","6cf5960497f10c16b64708a87f9ef01c"],["/posts/41055.html","26414387a671a3ecdb9c25c5e44d2672"],["/posts/4136.html","7dab0ee0ddf2e2def9e81282102e943b"],["/posts/41382.html","0b6ec07e90ba07dbc31b458506b98851"],["/posts/43150.html","e1caf55027527530778ce923147b27cb"],["/posts/43249.html","4e27f4fff7561c848a70bfa64a81b460"],["/posts/4354b039.html","566cbb4c9627fc13d8b012d69e26f7ca"],["/posts/43857.html","eb5bde483e3626e782fdf9e55c281f03"],["/posts/44947.html","0df4c8b6592cba1ba168e147cece8eee"],["/posts/45997.html","3033eb939f889f12be26c1e27d7470a7"],["/posts/46411.html","d737303ec87ede578f13ebfc94dcb1d9"],["/posts/47220.html","3f048393829c8d8bebb4513e7afce3b4"],["/posts/47936.html","3b94f8ee1c2f46b2672e212af7742a8f"],["/posts/47985.html","838b2558e7de25f2338fd955687e4964"],["/posts/47ce27c8.html","03a384174f12cb344675011e4ff6f4f9"],["/posts/48061.html","0bdb7bc675334ac14b61329d44448a7c"],["/posts/4a17b156.html","acda1c5406b3ffb1f35c322d8c90352a"],["/posts/5010.html","7c0942d8b0209f415b161ea963d900ce"],["/posts/51417.html","8e25d4e4a641598eecf6fcb590dfb54e"],["/posts/5144bcf.html","7a1663f0f2402781b8db9378641ae3c7"],["/posts/520.html","21106ef3b871bcc0cea9c9210165d053"],["/posts/53d1dcfb.html","6ff1d0039290228beef9a4f2ef5dafaa"],["/posts/55248.html","ab61d70ac31dac806e027290735a45e5"],["/posts/55860.html","9b81eb65a68aec0391bd0eb517be6027"],["/posts/5590.html","48671062437c2125a3545a7866d33fe1"],["/posts/58489.html","8e03bc4f9216e19a6ed886c9644cf37d"],["/posts/59346.html","11375ad07c67a7379b5e15c1c6ec5831"],["/posts/59977.html","1daa1873215d035a636953ed39acebfd"],["/posts/5c0875d6.html","254182a2b49916efc6b212e08abfa436"],["/posts/60364.html","57d155c25b825291dc3dd909740cc4dd"],["/posts/6059.html","62bbf8e09c8be1efd5fb3f91192efe5e"],["/posts/61794.html","f6487a4c9abbbe289809ad092774d3b7"],["/posts/6275.html","fb78779b3a30c4105b407789439e0058"],["/posts/62910.html","5c54b65b28fb7236c698956cb582566b"],["/posts/630.html","f746628ef16cb6c092fbc4841f306441"],["/posts/64423.html","956d8138485be6ca7aa4cf302484605d"],["/posts/64528.html","f200d979029a88e1b95d3c685c7ab7f4"],["/posts/64846.html","a26aea3875de65c311283e704dc590bd"],["/posts/6656ad65.html","04c5e46d4df3976a25eae1e9fe694915"],["/posts/6f521982.html","61a50c7d8ce252b9521c42f9a7352020"],["/posts/71dd948a.html","2fc3449d741e9c66f91a2f0c69ac8c91"],["/posts/773d5f8c.html","b5b47697d46637931606804b520bc4e0"],["/posts/80bb221f.html","5302ade64b7b380ad8b8c2238986b83e"],["/posts/80ca38c0.html","f24461ee0abc2d016f5d0d8952635081"],["/posts/8573.html","3b3b54b5388f12f6b4c63f7d3a6e5092"],["/posts/8589.html","f1d6d6ff16825bbe619eb55d44fe4430"],["/posts/88fead8.html","b28c03ddf16f2866f9901b1618981722"],["/posts/8b540f5a.html","7e1e541716be78a1a5f018801490196f"],["/posts/8c0ed688.html","bfef62ab4f8c1218b73ae30cb8689ca0"],["/posts/8f004046.html","e2a56320f0abe50d7c016a7874fbcf74"],["/posts/8f19a96e.html","1431db2227199bca86f7325a9cb9e41b"],["/posts/901b8cd5.html","8a2c1644ff2db75a411c5ec299487447"],["/posts/9618.html","abaef36f13fa67ee4e891c59aadc64f5"],["/posts/9812.html","fea0164b9ee1b9162f37ec22a75bbae1"],["/posts/9e565f9f.html","1e34dd5a98745302a6a69c3ba810b9a1"],["/posts/b572816f.html","041e2a3ae2bfd6fdafc0c9628e230c14"],["/posts/b794162c.html","d1e3b1823f8c36d2f8f860dcdd4fa583"],["/posts/b7cd6609.html","16358a7eb1889a49dd8d2ce95b1c79b5"],["/posts/bae4ff13.html","6a1adc3c57ce438de2e98e4b5c0a7654"],["/posts/c54e1e5.html","e49e9dd4b9e7e0d5f025ba40651af6b3"],["/posts/e4f3239b.html","afd24892c5bc5b97a459c94a13e98e4e"],["/posts/ee789513.html","0c7456c7a8354e8bf1f7bb630351c4fa"],["/posts/f8d580eb.html","d2edc15700aa2d0f486aae3a6ade1686"],["/posts/f92cb63f.html","5b62c4e7846193124044b89ed1b64691"],["/posts/f9586000.html","083443285d95506f5f12df4c1a5dd822"],["/posts/fbd6efa0.html","ce2593aa6d28a4530448ef06dd8834bf"],["/posts/ff995e29.html","625c3d19c44b00f41288c73766061cdc"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","31f3054318ed88256f1336b36e4174a9"],["/tags/Anaconda/index.html","3435b6a93ecc2b6d01c99cacedc13641"],["/tags/Git/index.html","ea07c422d8a438b542505e9e2df25236"],["/tags/Hadoop/index.html","0d933218f14885b4822b0c13f30dc6cf"],["/tags/Hexo/index.html","ad3cb743cbaff88973d6476d8e2f3f00"],["/tags/Java/index.html","ddf55047b4e668035bc75456129e46bc"],["/tags/Linux/index.html","9ff216cdb775c564108ac9836e21d16b"],["/tags/Linux/page/2/index.html","3952d9ab2ae90d7afd2cc5c05bd6a603"],["/tags/MapReduce/index.html","c0408566ed9b57de2aa98d1125de85fa"],["/tags/Mysql/index.html","9f159d38a9ac50cdbec134f71044f73f"],["/tags/Python/index.html","6c06b60cb0df9ad32ebeda64487f0eb0"],["/tags/Python/page/2/index.html","22905fe9195c5be80c76f868748bd001"],["/tags/Python/page/3/index.html","b175ad610ff9cd718ac3ad48627b18cc"],["/tags/Python/page/4/index.html","417f4e7009374611f7724967e2bcc8f9"],["/tags/Python习题/index.html","7ada1911a112847ec9e85f5c1115e01d"],["/tags/Redis/index.html","3dd1c5fcdc2f20b307e814fb284518ff"],["/tags/Tools/index.html","a89c2f029ecf3556259721931f829af5"],["/tags/Windows/index.html","331173e3335a060d57f466ff5b341606"],["/tags/index.html","9fe7fbc64adb7b4f9ce899c49a724a8f"],["/tags/任务栏神器/index.html","76e12d7b4283022f564c00d5921b4576"],["/tags/图床/index.html","f20f1a15370012313a849946b17fc1db"],["/tags/数仓/index.html","b2d23171c2984105c0598974ac6fc7b6"],["/tags/数据库工具/index.html","7a027eb2a9ec05415ac0202c8bcd0f6d"],["/tags/毒鸡汤/index.html","91d5bdf73e7c4dded89a4fa919fc1e38"],["/tags/环境搭建/index.html","8b260f9c31ba98826dffc4625c9a91ba"],["/tags/资料分享/index.html","741abe24227d675d10325a86e1cc465e"],["/tags/面经/index.html","287ab0ff99105707d4b1e8e94abe58dc"],["/tools/index.html","bbbd05d42dcf78a74cf901cf05d5d6d4"]];
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
