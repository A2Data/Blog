/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3ed14318c6058844cad0ce6d593fd4e4"],["/README.html","6177f6530459731062902a400f06d76b"],["/about/index.html","e4d12d5158c242bc083a68667a2b6d13"],["/archives/2019/09/index.html","032ba33d456d8a17c314d83cc49457eb"],["/archives/2019/11/index.html","31e7a92ab218bdb7124d3b330b696de8"],["/archives/2019/12/index.html","8d7a22192d338e2b6a4db150c66a67fc"],["/archives/2019/12/page/2/index.html","55aeb16661e164e6646283f6704779fa"],["/archives/2019/12/page/3/index.html","8b0218e11172594f5e9def3d47747787"],["/archives/2019/index.html","f2fa882249685b16d1552c392e5a7a71"],["/archives/2019/page/2/index.html","877e97f9047b7f37d9652da11c7ca357"],["/archives/2019/page/3/index.html","636bef6ef8852c6230c186bb22c17fde"],["/archives/2020/03/index.html","1fa4bf6470388d4a447fcc2f73be0080"],["/archives/2020/04/index.html","78dae957fba0c9493a6221ebeaa73914"],["/archives/2020/04/page/2/index.html","93806b4773c4309d53ac7ab5eaedfc3f"],["/archives/2020/05/index.html","cdd25a61598b1fde25fd24036b9264dc"],["/archives/2020/05/page/2/index.html","54d3a70974bd259c7e0114c561202534"],["/archives/2020/06/index.html","b2ffb045d04031d311e8e9786dfb9265"],["/archives/2020/07/index.html","78235755b2832c412957a8ed97d3dc0e"],["/archives/2020/08/index.html","3149c58d441a52f3b04c18db7062e884"],["/archives/2020/index.html","9175bbcfcb631725a60f5eb469b56a2e"],["/archives/2020/page/2/index.html","8681b7aaf0cfe1fd8297ed6831ac0c7f"],["/archives/2020/page/3/index.html","eecbebde1c0709d4182d6e419033e650"],["/archives/2020/page/4/index.html","4c18e4ee2de8efa044e098f0371ba237"],["/archives/2020/page/5/index.html","84826999ce8443f23afa1bf669ddbe40"],["/archives/index.html","974f11d722e879ad0dbfc8151c78ab6d"],["/archives/page/2/index.html","974f11d722e879ad0dbfc8151c78ab6d"],["/archives/page/3/index.html","974f11d722e879ad0dbfc8151c78ab6d"],["/archives/page/4/index.html","974f11d722e879ad0dbfc8151c78ab6d"],["/archives/page/5/index.html","974f11d722e879ad0dbfc8151c78ab6d"],["/archives/page/6/index.html","974f11d722e879ad0dbfc8151c78ab6d"],["/archives/page/7/index.html","974f11d722e879ad0dbfc8151c78ab6d"],["/archives/page/8/index.html","974f11d722e879ad0dbfc8151c78ab6d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","bb6e8df06709d1341c9eff044ba2d998"],["/categories/DDL/index.html","33947803b6acf9d042581971611f7e60"],["/categories/DataBase/Mysql/DCL/index.html","20d657a6d485ea110df6788c750b172d"],["/categories/DataBase/Mysql/DML/index.html","57ea297215bd1f542ed6fc3800422b37"],["/categories/DataBase/Mysql/TCL/index.html","976cdd30886e6491d25ed876d52dbc26"],["/categories/DataBase/Mysql/index.html","493ff7937b22f0caabc778dc5b5d31a9"],["/categories/DataBase/index.html","762260f1a20f004ad7d7b56179fe61bf"],["/categories/Git/index.html","76def4af37ccaaf3b11ace83b49d5e27"],["/categories/Hexo/Blog/index.html","4c0d96fcb1a113d79253d4edc3cfd808"],["/categories/Hexo/Cmomand/index.html","bea1b525132bb5c63491e8ed614f5386"],["/categories/Hexo/Gitee/index.html","45f1ee0ac69023401bde25664bc77d4d"],["/categories/Hexo/Img/index.html","804487d336eb279acc6669a4f995fec1"],["/categories/Hexo/index.html","7830e4c5121d78e4ba10e5cf37c6e0f5"],["/categories/IDEA/index.html","ec5d85eec0c2b91078ae41b6526fced2"],["/categories/Java/JavaSE/index.html","581c875a856f80176fbe12c066bdf065"],["/categories/Java/index.html","a92bc304aa9ef812d0f37a3e3fe9c746"],["/categories/Linux/index.html","e8d5a8f4f52754265effeeb4de499ffc"],["/categories/Linux/page/2/index.html","c2a7c881c41dd46b5352c623c9e56c7e"],["/categories/One/index.html","1c3e2027b6904d8e5a453eeac26ab6f1"],["/categories/Python/index.html","77b046a277d4bcc4b0036899f86e9e3e"],["/categories/Python/page/2/index.html","8ba03dcbd29e1ab14492d09480eebce3"],["/categories/Tools/index.html","3944239aa0e3966954d35dc77060cc19"],["/categories/index.html","de5fc4bbb65ea4b911e0001c3c15c925"],["/categories/大数据/index.html","4653b12d5f1303b510cf2e45fe3883dc"],["/categories/数据可视化/index.html","ac331bd158a98073a470bc7673012520"],["/categories/数据库/index.html","83b96f3d77de2b90dd2a3fe062795a81"],["/categories/数据库工具/index.html","37e080511246fd665cd065be7143f1b3"],["/categories/职场/index.html","929303b2a62e79a28dae3dac6813e343"],["/confession/index.html","d0cc252c41c071c89559454730ccdfc6"],["/contact/index.html","32db597214fe2a4dc1eb9d33efa996ac"],["/css/style.css","eb58cd3e2d5e5f8f17b17474cb2a81b5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","2f1100431690ca1985ea8b72597268b2"],["/history/index.html","904c78521f587b0ede026076d52ae51e"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","cf73d5b348bd7893b879086da810b776"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/movies/index.html","ec3738e64f695bd4edab6b4f6f0b26d1"],["/page/2/index.html","b36632a558fc95df09b3ea41e957844e"],["/page/3/index.html","5e4f7ad21726ae5592176ecbbe25926a"],["/page/4/index.html","c5fa0cee45decda837e2adc7a522fb35"],["/page/5/index.html","e7f691accb43d83764615911e6d9467e"],["/page/6/index.html","7ba1daf3b97945ea8d09d7890d16be69"],["/page/7/index.html","acc0d73ae70e8be5e4e4ed57dcb91db5"],["/page/8/index.html","9cd20f7edaf2ee2c82c346e9b16588f9"],["/posts/10415.html","0f13e02a50e63d7ed172ecfa405776dc"],["/posts/10537.html","ee9784f745556aaf5960b61b2ae3d669"],["/posts/16550.html","5e6f20903b8766a4cb917243eb757022"],["/posts/16586.html","bca64da3aa29ee5af5e26845918a8501"],["/posts/17415.html","594273172e0a848610ea633be5dc7e21"],["/posts/17683.html","b15f9d308be59c320f3d977e3a33a603"],["/posts/18321.html","9a8ede41029074a3df6cd4e351d466ac"],["/posts/18572.html","0adce1e3cce11baffa04ce17a332f74f"],["/posts/27081.html","0caa36215c5aecd3ab5eee2e5fe60b2b"],["/posts/2834.html","9d36608465b89c0c0079a603b14a0860"],["/posts/29055.html","6721f8a05a1780fd7ecb621e1e9663d2"],["/posts/30675.html","9db501bcf651b788927052815506495d"],["/posts/30873.html","3297128ec917ef3008e392b08944aa24"],["/posts/32274.html","c74e6dd468544292453d26df27691db2"],["/posts/34708.html","302c1539c656231438630d1a528e6fdb"],["/posts/34771.html","7ef5603a453cea66bf6d635af29509bd"],["/posts/34946.html","bb30b7ee34d6385bf6bdcc003e01cb36"],["/posts/36204.html","0ad49a1019c6d5936a677749d8f2d5d3"],["/posts/37390.html","e4ce3b6d3544749bd2b4fd12b6dc0a45"],["/posts/37426.html","07dcce2e01bcbe84b08e602a628f995a"],["/posts/39508.html","4572f0c504a0c8a7886a3c2d6583969a"],["/posts/39704.html","5a54e5c6130f27437eacd52bacde1415"],["/posts/40711.html","d7f5001a7ed7cde18d6d596e296c7537"],["/posts/41055.html","286e3a36e37727e9df979ecbce733ae0"],["/posts/4136.html","c6c3d8c4733b30777b690a7422cc383f"],["/posts/41382.html","a70f62f3f3e6a57b2b859b0006e41945"],["/posts/43150.html","011fe29d2e6010e138140326c53d76a2"],["/posts/43249.html","beb2e15a5dc5a6be32fe92dfe597dbbc"],["/posts/4354b039.html","70067f20149f5c1bec7336ddf4f5befe"],["/posts/43857.html","54d193aad31a01501cd13a120d9366e9"],["/posts/44947.html","5b184d129c5dc33cc29892d222c25560"],["/posts/45997.html","26994c3929ef3d5cce5cbc597d8db8d3"],["/posts/46411.html","ed98cf38724eb837b1df64ec6cdb5857"],["/posts/47220.html","198da4cc0f5b0c4a4954503a3a821a8c"],["/posts/47936.html","4199bbd16390f48a4abce999957572ea"],["/posts/47985.html","e46a0d2c12e5eac3a5cb8375bdfd4089"],["/posts/47ce27c8.html","2f50c2674334722379c61f8069f5c0b3"],["/posts/48061.html","253ca548883081aeb96cf057c031ff00"],["/posts/4a17b156.html","e9262ed190721ea829801b4c3c95057e"],["/posts/5010.html","6f3e67915b4f75fb3f8ed305fb32571f"],["/posts/51417.html","ca3148c8c6310ed9025f2951cad7ca9b"],["/posts/520.html","dbc4a6daf1f1659c11249f9daaf8ed32"],["/posts/55248.html","55ea9effd20729f9a8ea0a742aa57edb"],["/posts/55860.html","fa9f2724507b1cc480ba1fb19ee02379"],["/posts/5590.html","37dc42e362b84b6d4bb985c49b3a369f"],["/posts/58489.html","e2902f37933fa9d348d5e585c7da04e4"],["/posts/59346.html","197cd98d31da2cf2a713ff71572a0e41"],["/posts/59977.html","bc1dadc0cb4f134de255f8ee64b227c3"],["/posts/60364.html","b369b81ded2b252ff5cfbe07253fbff0"],["/posts/6059.html","c336014d964965e394ea323d6cb5c1d7"],["/posts/61794.html","f7d25dd6bb1c9e25e0a9dd26f7171792"],["/posts/6275.html","04fae38a66ac4319f03753ae5f972243"],["/posts/62910.html","f34d3283c321b177a09f990b3dd2da8a"],["/posts/630.html","8c8670662c6fc17c756753e26cdec8f7"],["/posts/64423.html","788d763b8bc0bab7be426049f6ccbbfd"],["/posts/64528.html","a45d0ea8e82f06e05f88a8bb0917efc2"],["/posts/64846.html","78c005b62894b0ad1f4faaad60dcf9f1"],["/posts/6656ad65.html","1b83de34ea24750e57cb70eb2c26307a"],["/posts/773d5f8c.html","3b675f7469bc4ebe5466ac4510bb1f69"],["/posts/8573.html","1e4a1bf7822f2549911c97ed9edf0bf2"],["/posts/8589.html","2cca4a99ebfa9a617bc1fb5e409dc2cf"],["/posts/8f004046.html","95a737edb31b66eda019022cf84cc954"],["/posts/9618.html","51822d2c6afe927efa4db49d2f19332d"],["/posts/9812.html","3072cd756023c7945ed47f9ec956ca92"],["/posts/9e565f9f.html","2a9d42e7f2c103ad75ead9fbf1f73e77"],["/posts/b794162c.html","7652557963c319642dbc4f8c49d6024d"],["/posts/bae4ff13.html","fe595be951fbfe8e986f747987ec9bfd"],["/posts/e4f3239b.html","4580c07cb154cced646d1c7f1deba485"],["/posts/ee789513.html","6f71701dae7b0e7fdb6472f60e227a81"],["/posts/f8d580eb.html","81c7ec42858b3978387a2412a577f649"],["/posts/f92cb63f.html","f4c3798b8a65fca53cdde336c47b0619"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","09fb3f2ece17dda3a30e92affbebc896"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/mofang/index.html","093e22384736624cde7ce391fbecf339"],["/sponsor/index.html","4fc6437efaa5c3ccf41fd230fd0b80fe"],["/sw-register.js","cecd943e1e8270eef762dc5ddfb14672"],["/tags/API/index.html","e93b1eaa51ec42758179776de61ce611"],["/tags/Anaconda/index.html","6686dbab6977e7b4f9b6db6f4cf692b5"],["/tags/ApaHive/index.html","14840fb11fee1f279816c285515fd7ad"],["/tags/Cloudera/index.html","944b0ac57aa5c9fb9afc1f8af07e382e"],["/tags/Git/index.html","f918ed0b0ce766dfa6fbacba3cdd99ed"],["/tags/GitBook/index.html","af55e7e0ccef91eb7effac32d74f7576"],["/tags/Gitee/index.html","3ddc277b6d06dfbc4961c34a7680833e"],["/tags/Hadoop/index.html","a89812fa6df9f55f37dbeb1aa2c1dfd1"],["/tags/Hexo/index.html","e4b15ae98555325929c54256a7b64dde"],["/tags/IDEA/index.html","20913d3b878e0d68cdd41fa6bde71d30"],["/tags/JDK/index.html","92c5ec54a876c458b8f62a9fdb37c3f0"],["/tags/JDK环境/index.html","928e05fe294e31b52837d82a63a81047"],["/tags/Java/index.html","cf7d01eb7b8b9da901911c293e460afb"],["/tags/Java基础/index.html","315183fa252794c1e6be4a549a4e8d8a"],["/tags/Linux/index.html","f1cb9ba4f04ae509d115c00f83d51b2f"],["/tags/Linux/page/2/index.html","d11896529fd6b8143de39e8ebf45d8ab"],["/tags/MapReduce/index.html","0d5302d3c782a2319aa0c31af03d9b0d"],["/tags/MarkDown/index.html","b0f2ef1887968b2f2854d48255486ece"],["/tags/MobaXterm/index.html","9aec2374f3e0c6f04246f91bf0ad644a"],["/tags/Mysql/index.html","5dbe0f4a34c08c40997332ef5659fb00"],["/tags/Python/index.html","61499ec10ac5af0e1ca84cd3c8229b2f"],["/tags/Python/page/2/index.html","4339c57817363775d08a0dbd836e175a"],["/tags/Python/page/3/index.html","c258e158f7b1ead4b5f696d85672faa6"],["/tags/Shell/index.html","e67970792ff1c439e29e435ad21bc826"],["/tags/Shell/page/2/index.html","b91cbaf21604d8cbd5f3f9e3009432b8"],["/tags/Tools/index.html","ff3dedf2e2fe13f4093883bba795028a"],["/tags/Typora/index.html","169bd2933ba175f23f3542d992b7bbda"],["/tags/Ubuntu/index.html","365bf7115cd51bf9512026e2c125466b"],["/tags/VMware/index.html","364e14d31f2d5728dc2db5e21f495622"],["/tags/index.html","5d8ae2bd5623ea53aa22d1dd8be5550c"],["/tags/图床/index.html","3577610465704c3b960711181f055b2e"],["/tags/基础语法入门/index.html","8c5db466029881a16d207d4a794185a0"],["/tags/学习资源/index.html","0db9b7a67f34c5ef1a001f878b44f83d"],["/tags/数据可视化/index.html","332d415677bdabc54391f2279612b22e"],["/tags/正则/index.html","f7b3a57fbc0fa765ab79cc716bb4c85a"],["/tags/毒鸡汤/index.html","d786f923292ec9251ae3dca614336024"],["/tags/编码工具/index.html","25cfae97eb32ed5c64964359e2006b5e"],["/tags/编程语言/index.html","ebfc4d7c8336b315a46bb63024b8107b"],["/tags/编程语言/page/2/index.html","f957310c9987f0c3cd9a597444dca2c0"],["/tags/脚本语言/index.html","0fd2cf2d24482e716e1edd98fce92e8f"],["/tags/脚本语言/page/2/index.html","bf93e090085661e7029ceb0db7a187e7"],["/tags/资料分享/index.html","439d5b9c1934a3595fc1659be4e6ee63"],["/tags/运营工具/index.html","3969a53387cc2e7ab41a9ac9d146709f"],["/tags/集合体系/index.html","d97197e0e8d8678515cd249e42d37dd7"],["/tags/面经/index.html","76a19718c36822b5a3cf04bb2750dd6b"],["/tools/index.html","cc6866030916ef9fa01640c5ee1b3834"]];
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
