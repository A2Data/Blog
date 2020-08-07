/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","39526973693a9818499f9691ab79065e"],["/about/index.html","a5da8bab4f4857732e7ce0b9e29beba4"],["/archives/2019/09/index.html","c368375e3697b9cf210b0ca78a70525e"],["/archives/2019/11/index.html","c1350737f718508a003b7ce6e00b753e"],["/archives/2019/12/index.html","9ca9bf54defe9e0bbd0a60594d63203a"],["/archives/2019/12/page/2/index.html","313103f0fc6975897d2a24fc1e36bbe3"],["/archives/2019/12/page/3/index.html","c8c576b1dcd1bb0c1397bfd3fcaadaa7"],["/archives/2019/index.html","4614d56386bf31180beba58e09637a95"],["/archives/2019/page/2/index.html","849489ee008937937fd733d08806e76e"],["/archives/2019/page/3/index.html","369d1c1a28cb7c6d8736d8eb38baaa24"],["/archives/2020/03/index.html","bae2691e96cc82edae16748c5b64033f"],["/archives/2020/04/index.html","284d5bb19a1bbe174a988d7d097e3760"],["/archives/2020/04/page/2/index.html","689533a25b92f7cb9abd1a6bd15600da"],["/archives/2020/05/index.html","fe28c2fb2092f904188a8cb93b63282c"],["/archives/2020/05/page/2/index.html","67b8f95d76db698c34dd503f017e56ff"],["/archives/2020/06/index.html","c5339e73e2919d427f9a44b15441ba62"],["/archives/2020/07/index.html","3b87e1cb559cecd9945d7721c10b30ae"],["/archives/2020/08/index.html","08812e92fbbbe1df904edc62b618c822"],["/archives/2020/index.html","b1c522a2e67ee0f4a6dfb55c49ce7118"],["/archives/2020/page/2/index.html","0892999945b17f9502b6b0eae9f99826"],["/archives/2020/page/3/index.html","843670c52022d1896b1d177f3d4eab70"],["/archives/2020/page/4/index.html","b1794fc11b983a62439c4e85e30cb880"],["/archives/2020/page/5/index.html","5c9f5e0c7959658431416cda840fc7da"],["/archives/index.html","33cbddbd4fb3f2c0514d7f325d2d599d"],["/archives/page/2/index.html","8b931b930994451600c2391f8fc7dcea"],["/archives/page/3/index.html","8b931b930994451600c2391f8fc7dcea"],["/archives/page/4/index.html","8b931b930994451600c2391f8fc7dcea"],["/archives/page/5/index.html","8b931b930994451600c2391f8fc7dcea"],["/archives/page/6/index.html","8b931b930994451600c2391f8fc7dcea"],["/archives/page/7/index.html","8b931b930994451600c2391f8fc7dcea"],["/archives/page/8/index.html","8b931b930994451600c2391f8fc7dcea"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","49821103cae29e043a0f6edf8a811b86"],["/categories/DDL/index.html","f01d6a5128fb681d26d2119d81350665"],["/categories/DataBase/Mysql/DCL/index.html","ce2e971043671ea29c688cb7fcb8311b"],["/categories/DataBase/Mysql/DML/index.html","48c2dc5dc3683c82eb357d159ef4d0ad"],["/categories/DataBase/Mysql/TCL/index.html","464dd6d3da41bdf022b957a79c499bd4"],["/categories/DataBase/Mysql/index.html","eedb5d1fe999eab0ff18f9acb40a5284"],["/categories/DataBase/index.html","50e71728a104cd903b314131509bfcf9"],["/categories/Git/index.html","e5d79fd2cf5f41cf9d523400cb1ba7f1"],["/categories/Hexo/Blog/index.html","5486a3cc23f7c5aafc33fcbc86906406"],["/categories/Hexo/Cmomand/index.html","1549c7c3d149c4926f4e08cfd17a038a"],["/categories/Hexo/Gitee/index.html","7d9f14fdb2a70d39d611c9d6d741b170"],["/categories/Hexo/Img/index.html","f839b79c3e9b6ff2c59fb20590f594bd"],["/categories/Hexo/index.html","61e06600efd663e15f7316e0ff1c51b3"],["/categories/IDEA/index.html","a84d731570046936c4500f012fe8726b"],["/categories/Java/JavaSE/index.html","dae656698093ba8a8aa5f9ac0c6ffcff"],["/categories/Java/index.html","dcba48fff4f39ee5cddf9526854c2a67"],["/categories/Linux/index.html","55a62bdeaa85992319d303f7a3d1a860"],["/categories/Linux/page/2/index.html","ee573dea057d81b1bdbb3b25e3b505ef"],["/categories/One/index.html","4f43fc1185c1715ae0ab69f8fd05d495"],["/categories/Python/index.html","e57ae7e5402e450c89abc8b997476b90"],["/categories/Python/page/2/index.html","bcac8b99ac3fc452e603292605918331"],["/categories/Tools/index.html","1fa5e70f799614540bda5a6094b6af2b"],["/categories/index.html","82feac4c2e8af3b52072cde9f3c743a8"],["/categories/大数据/index.html","45dd14c0d2ae95200567e4bb651dd15c"],["/categories/数据可视化/index.html","427236324079e50ebf3c5c9bef3910ee"],["/categories/数据库/index.html","ba179fe85f29fffd695945845b6136f4"],["/categories/数据库工具/index.html","b2b393daabc19acf51da96c75dcec273"],["/categories/职场/index.html","d2bdbc53349e7da7af79f870c00d4992"],["/confession/index.html","4e557f2299eda94d7a4d8e5ff0fc8eee"],["/contact/index.html","f6da1f47e4c00faf60bc54dfc6559a5a"],["/css/style.css","bf498438ad25987943667f755d661ee0"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","7d8b9e04dc065b4bdebe9619baa53ecb"],["/history/index.html","a00ed647fc013d60cb2a04d03fd16a6a"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","515fdb6760a6a6d45888b3f5d5b87229"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","4937ec0a084cdb7243a01647650fb2ef"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/movies/index.html","0f922ff1882bc4296bfd0f480017233b"],["/page/2/index.html","b986ddeeb4d6da8f9384c951c945a5d3"],["/page/3/index.html","f8d5ef17aa5e76dc0705b6a0a82f5859"],["/page/4/index.html","db6c9b27e0a6ee960c5cbd1a668fb094"],["/page/5/index.html","82428e8271c763912b550b79afe68585"],["/page/6/index.html","0e26b10becd1a560c11379360e61476c"],["/page/7/index.html","1efd6d7725f83ae182ddaf5d236b1d3e"],["/page/8/index.html","2cfe88eba1d19d3d11a695fdd0991f60"],["/posts/10415.html","ae738ef49cfca1ef4e09ccbddfe75b1d"],["/posts/10537.html","60a4a83b32f1efcb035ace1d6bfc1868"],["/posts/16550.html","f6eb4577f87ffb6d68b2789ad14deb65"],["/posts/16586.html","6b0054b9c4fc33ba5eca6602ccb4ffa1"],["/posts/17415.html","56f11f407c4a40f710f6e8a5e02c90d2"],["/posts/17683.html","d5882f00acbd580eff7e53b9aff5db60"],["/posts/18321.html","2382f0acb2013f86e75e95d1398183b3"],["/posts/18572.html","a064484062071210ab4c10ea9ab0b17c"],["/posts/27081.html","0e8a57c427a49e3c942c5825be4f93bd"],["/posts/2834.html","2ebdbb2e6a1afdabcfb4838baad4611b"],["/posts/29055.html","388158488ad7e32be4942dd53728c894"],["/posts/30675.html","31136efefaec6d236ca5775c98ca7ce0"],["/posts/30873.html","ecc214b2fd9c09d5dbaf9b00b69fb8d3"],["/posts/32274.html","14e257008e5826908a4141792e4e41ff"],["/posts/34708.html","320d09679eff5ceeea117cf87ef15c9a"],["/posts/34771.html","6dcf85a4c450ad95e85fcb638c7f2cd8"],["/posts/34946.html","2805651f5df22bf4c9d4acdf6841882d"],["/posts/36204.html","93262c0014e72b22db46fcd4a54a86ae"],["/posts/37390.html","464d24c29f5d0bf3db14ec4f60e52f0f"],["/posts/37426.html","83625f2949872dfc32ead7d7389ba27e"],["/posts/39508.html","40dc62341ed06f170ff3e74f790098c3"],["/posts/39704.html","977376d2c5a964447126b67282aef357"],["/posts/40711.html","bcc9bd870609ce95aa57739a28521a5b"],["/posts/41055.html","bb4c114002d8286afe57176016f4506f"],["/posts/4136.html","b3e437f2a30a5a5b6ba99d25c778d982"],["/posts/41382.html","a9ce534ec0fed6bdbfeab4b53b797a28"],["/posts/43150.html","d7803a62ac2b49910e69dba098ccf517"],["/posts/43249.html","9ccb39d2c630552562fbfcc471c24870"],["/posts/4354b039.html","4aa9bd1d9db9a5349433b956c63984d8"],["/posts/43857.html","b6e766583cc57d69f473d529a7e6c5b0"],["/posts/44947.html","e021d56096c9bc619c6e994c690def61"],["/posts/45997.html","a63e89e2cca2493a4763dc9f290787cc"],["/posts/46411.html","901f71b36d73bd3c8317d01789596c1f"],["/posts/47220.html","4eb8fa5730d5c94c1a3aaa9c332ee3b7"],["/posts/47936.html","301cca2e281786aa0041fe058170a4e3"],["/posts/47985.html","3e8922ada0335f82f1ab3646d874756e"],["/posts/47ce27c8.html","3fb4362b6e7434e70c7e5cc911bf1320"],["/posts/48061.html","d1acbab275db91b775dd14b93e380bc4"],["/posts/4a17b156.html","101d4f960207ef6e39483fad817dab36"],["/posts/5010.html","20589a01fa7a705e506cdcef66a1a4ef"],["/posts/51417.html","468cdb4ca14e2bf0727621f03d48f322"],["/posts/520.html","fc72591a5f178b0cfe7e9d42dba4b5c2"],["/posts/55248.html","eb6c7f805f60d56e6777ca76fa5a8fd5"],["/posts/55860.html","8bfb79c7fd61be928a968e2a6747fd37"],["/posts/5590.html","f7a25fdb698b9d9caff0ae9c58912029"],["/posts/58489.html","7765031175206fff7483764bb4d51d8f"],["/posts/59346.html","0d22d45bc1c7055f9fbafd53b2cb9d4c"],["/posts/59977.html","189da10c87df660df74b764b87a5e7ca"],["/posts/60364.html","a62f95b228d412d907b14b8700b68947"],["/posts/6059.html","32516e14d699ddbe917ab90ec466e153"],["/posts/61794.html","0235d6ea1d837b48dafcc12e12dfe870"],["/posts/6275.html","7cb22407f18fa0adb2c1897230279fe6"],["/posts/62910.html","43b418ab54dfcf61571e8de878bb98fa"],["/posts/630.html","97417cff1b370dee4742c77d56c7a9f2"],["/posts/64423.html","335663f14452ec85eced6c2277fde83a"],["/posts/64528.html","f5583632f9c4bba781b8dbaecc1272f8"],["/posts/64846.html","5acc5c76f0e7e642dc55391e28a02c22"],["/posts/6656ad65.html","9d08442a22b44ff8a964b7eeff06ff61"],["/posts/773d5f8c.html","6d30bb4264e9da1bd494d0766d5ae1c9"],["/posts/8573.html","47e1507ecf798f6cc0030680ba390c83"],["/posts/8589.html","3d87705428982e0617d1ffc7e09ad17d"],["/posts/8f004046.html","9971de6e4967e834d91ce4f126179388"],["/posts/9618.html","235359833f510293ce9ef135b4081c94"],["/posts/9812.html","04b3f0bbbf5862cc6a31fca44986d59c"],["/posts/9e565f9f.html","b5beaaa75205eb2ea990dafe1b223764"],["/posts/b794162c.html","aafead8a8a2a545c579d6b5f2623280e"],["/posts/bae4ff13.html","925381135df3f2463702909a015618ab"],["/posts/e4f3239b.html","15f639a60c2f5291f8ee8e441039ccd6"],["/posts/ee789513.html","0cf1f535b40581656ef49d5d5fead1de"],["/posts/f8d580eb.html","2f260ff481102aca6fae882586cba918"],["/posts/f92cb63f.html","c5935bf131d05160e739e21ed9696b7d"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","09fb3f2ece17dda3a30e92affbebc896"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/mofang/index.html","093e22384736624cde7ce391fbecf339"],["/sponsor/index.html","6cf7f2906333d775a7e70678d637bd97"],["/sw-register.js","88c7cdcefb70ccd194e9520d4d4548bb"],["/tags/API/index.html","e46439fa20170a095754ac4a76bc35a3"],["/tags/Anaconda/index.html","f8829fbd369b81e45c798edd9a923076"],["/tags/ApaHive/index.html","2d51e784fa3b05b439639d6f88fe796b"],["/tags/Cloudera/index.html","146f449b51e1c66551a69a4a237dcc38"],["/tags/Git/index.html","dfdc265a8fc6fdcbba060ea4c517ed4a"],["/tags/GitBook/index.html","8577fcbce4a25e50d930eea0d022c24b"],["/tags/Gitee/index.html","c5f3d3c47d3f72b8e2fb9abfbe9ffc52"],["/tags/Hadoop/index.html","cf2b9a667f6a1e0badcf22e2232ff274"],["/tags/Hexo/index.html","dd841fd16c617f53bcf3f5bbb1a19957"],["/tags/IDEA/index.html","166766ecb8b5d9724344b4ac08733467"],["/tags/JDK/index.html","6bb46263c034a40050529d86ae9c4909"],["/tags/JDK环境/index.html","2f74d2d8a8c3cc138772e7d179978f23"],["/tags/Java/index.html","3bdc789a05bd1524a89aa442602f9ce2"],["/tags/Java基础/index.html","8250d2d260de3d3c7b9ed5db3b9e4913"],["/tags/Linux/index.html","9e853931b68f201aed33bfd0c1b006ac"],["/tags/Linux/page/2/index.html","7ea994b6f061e2b4a2e3449e7af7cd48"],["/tags/MapReduce/index.html","67029fdc10aabae67f0165e32f2984a5"],["/tags/MarkDown/index.html","5deb90e86eb93c2458c51690c25ed04e"],["/tags/MobaXterm/index.html","8a439778ab84c590d7fa4ea765ef8800"],["/tags/Mysql/index.html","d994137923e972aa02f49de75037eec3"],["/tags/Python/index.html","64644c14eeec7e9e26ca688215d4c5d9"],["/tags/Python/page/2/index.html","cd85c9a30e7f36f272d8ef7543efab4d"],["/tags/Python/page/3/index.html","4805e576d1f908a66e38f3532c0cff8c"],["/tags/Shell/index.html","32f3978762b1223ff464742497395fdd"],["/tags/Shell/page/2/index.html","f4faf70cc68606a7ba88c1ab139dde69"],["/tags/Tools/index.html","c72900384ed1a780da6c0526e4a0a601"],["/tags/Typora/index.html","9fb056a9a2bd6485cfe334ecfeedb002"],["/tags/Ubuntu/index.html","7a11affbf0c3f597137e809ae7fe65a5"],["/tags/VMware/index.html","8ac26e636ca4945408dd9f9aaf7b449d"],["/tags/index.html","b8c0bba6506c8c09bed571b96d8ddcaf"],["/tags/图床/index.html","33dbd6584ff25fb6bc6523afa17ca18e"],["/tags/基础语法入门/index.html","8561dfea6049398b2249233a5c341052"],["/tags/学习资源/index.html","3587cad4a29fe6c79f3b00a2ba6739b6"],["/tags/数据可视化/index.html","0282b142530fa8c97c6897ba64f3edbc"],["/tags/正则/index.html","94fca3390358dd4b7bbc066fa461c971"],["/tags/毒鸡汤/index.html","eb3bb5f52e1775859fcf815b32cd6888"],["/tags/编码工具/index.html","798ba5505a9d0c058e4444926b39c732"],["/tags/编程语言/index.html","cb0046eb2c62cead3920766b2ca307ba"],["/tags/编程语言/page/2/index.html","f21fa57ca3dfdca7281fa32a0b5aed05"],["/tags/脚本语言/index.html","c76eb0e11805ca70ff780359a844fae7"],["/tags/脚本语言/page/2/index.html","847181b18310f491be763cd193e03082"],["/tags/资料分享/index.html","cfdd18292da21c59dfeda4137908b2f8"],["/tags/运营工具/index.html","aececa26bb69fbaad8cb938754336958"],["/tags/集合体系/index.html","9f92dac32ae35903d4827f94a2f5b97a"],["/tags/面经/index.html","0e4faf3ab47658a22753c7b1bd1432a3"],["/tools/index.html","cb756b7f79eadc5ffec2873ccddd7807"]];
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
