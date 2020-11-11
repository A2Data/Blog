/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cd48e54446ade8601e84af63b7620095"],["/Creator-said/index.html","ac25097d9cc9fb4f1275a76c164e6253"],["/README.html","36f69704e240c5e76d21d6a8dd4a1b03"],["/about/index.html","5af150af329e7f67823de71f51d21d54"],["/archives/2019/09/index.html","aa8efe5177f7120956e6d2f4ee058006"],["/archives/2019/11/index.html","bd6017cd3bd2f5e5334ec2574d4f2550"],["/archives/2019/12/index.html","efb787d8d7faf449f8ee104d72054585"],["/archives/2019/12/page/2/index.html","7254155785b607b8d882431ee352a716"],["/archives/2019/12/page/3/index.html","fc7320b9dd43b1f96eb9b4db4e54d284"],["/archives/2019/index.html","a0c868b117071f54c9fe76b54ec79912"],["/archives/2019/page/2/index.html","6a12238c3aacc9e8e0ff9dc22dae9fa6"],["/archives/2019/page/3/index.html","a223687f5607109ef2142605c2d37d63"],["/archives/2020/03/index.html","c470ed9c0342d7a6f70504d0314a0a76"],["/archives/2020/04/index.html","2eb13b2d3b1e7ffd9d54d90fe09209b9"],["/archives/2020/04/page/2/index.html","5836dd70217fa523a8da1b3959775bad"],["/archives/2020/05/index.html","80677c48050e28847b0add75c9cba4a7"],["/archives/2020/05/page/2/index.html","2bcfd96bd75337f01855f765434842f5"],["/archives/2020/06/index.html","5bd6b4613838bd3118bbacfbf9fa28cd"],["/archives/2020/07/index.html","5df3a41f053db5896bf27daf7f3637b3"],["/archives/2020/08/index.html","61f568af24ee7b8cb3fd8d71c14bddaf"],["/archives/2020/09/index.html","28136a36cd4141b90f6f8e30113ee78b"],["/archives/2020/09/page/2/index.html","abbd90d9d79b8dcaf6c48530f9cf8c4c"],["/archives/2020/11/index.html","9f8f944934e01c130e90c3eb38f263d7"],["/archives/2020/index.html","160b956387b8777d817a1d1cacfb24df"],["/archives/2020/page/2/index.html","d4741fcf562f21f1de482ac2fa9c6317"],["/archives/2020/page/3/index.html","3487017929f9fa3e9a241e1e7eb1f5d6"],["/archives/2020/page/4/index.html","4e872404731b6847abee0db595f9a613"],["/archives/2020/page/5/index.html","3026ab3b6768c5fa74b58522a1983cd6"],["/archives/2020/page/6/index.html","44ed97cc5af164da49f515e8f9c5cf59"],["/archives/2020/page/7/index.html","f54e49afb19cf5d4362537c4f2555c03"],["/archives/index.html","61e51ae80821b769b4f92d3f41e9e2bc"],["/archives/page/10/index.html","18d4a99b7232e172fd29387e348383dc"],["/archives/page/2/index.html","18d4a99b7232e172fd29387e348383dc"],["/archives/page/3/index.html","18d4a99b7232e172fd29387e348383dc"],["/archives/page/4/index.html","18d4a99b7232e172fd29387e348383dc"],["/archives/page/5/index.html","18d4a99b7232e172fd29387e348383dc"],["/archives/page/6/index.html","18d4a99b7232e172fd29387e348383dc"],["/archives/page/7/index.html","18d4a99b7232e172fd29387e348383dc"],["/archives/page/8/index.html","18d4a99b7232e172fd29387e348383dc"],["/archives/page/9/index.html","18d4a99b7232e172fd29387e348383dc"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","f91722272f0a19e387026c94d9f7502d"],["/categories/DataBase/Mysql/index.html","e22787abf6e8462649fe1f3df61db8b1"],["/categories/DataBase/Redis/index.html","e31caaa094f9673efe04127d0a24fc8d"],["/categories/DataBase/index.html","8640dfa45ce6e42bc21d956894b8d114"],["/categories/Git/index.html","ae0de142d85225d949a6adbd8fe0ca52"],["/categories/Hexo/index.html","3113900ca5ef02986710814e7c807023"],["/categories/Java/index.html","893d07a8d1d1f265d697aa2493376e2b"],["/categories/Linux/index.html","6fb210ecb8356b9517119a0248910a49"],["/categories/Linux/page/2/index.html","6d54b0c28a7db38e9dec545b39436064"],["/categories/Python/Anaconda/index.html","b4b66da0e543cdfe55cb9f0fa4aed1fc"],["/categories/Python/Python入门/index.html","0155b5df12b6c6908282690e9b507bda"],["/categories/Python/Python入门/page/2/index.html","1e934d646c999873c354e7ac0cc0eddb"],["/categories/Python/Python速成/index.html","a390e9b5f129feb2881dcc9db0679dd3"],["/categories/Python/Python速成/page/2/index.html","8ef19e7593b11491a4ac36b4e918074d"],["/categories/Python/index.html","174136a1b23300ccd0248c93a2188c45"],["/categories/Python/page/2/index.html","1fd2982e272a5c14c94cf7838eee8e6c"],["/categories/Python/page/3/index.html","8a5586e3b7adb05e83ac02f3f439f7c2"],["/categories/Python/page/4/index.html","693c93e2664c400504c48fa8f1a75a50"],["/categories/Python/数据可视化/index.html","85cac3c52b53dea87b1ddde37bb9f348"],["/categories/Tools/index.html","1192740a931279c9905b1d79b199c63c"],["/categories/index.html","842712f5b66816c68ff4b403f940c072"],["/categories/大数据/index.html","8801e920b1c22e83403b50ced9032a39"],["/categories/职场/index.html","4d4509be7c41a20ec41b3984bf902320"],["/contact/index.html","c32a5ffa304f7e2d8166844059c20d68"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","32c62c5bd5aed09afa58f0a115c730a8"],["/friends/index.html","96b9f99376da4db67fbdc52bd28efefd"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","77613e6b8bd7d5daaab202fb83cd8a2c"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","20276379341e085dd33e93cad5fca920"],["/page/10/index.html","17d0e0376e03a368f0a0dad8e6b64dc3"],["/page/2/index.html","9254445da380b3c77f4b3b872711a338"],["/page/3/index.html","a436ceeeebb7f224a9aa300fbb34b4a3"],["/page/4/index.html","4fab9ae15de1cd8f863631f836f711d2"],["/page/5/index.html","02eea3e769842836b5219b100dbdada3"],["/page/6/index.html","a3e164460992a8cd448635b8461cc70c"],["/page/7/index.html","fcea6567c0823409d91d17f643ab812f"],["/page/8/index.html","904df0db000552b41b55641c783649c0"],["/page/9/index.html","299781b374183293a208bb1ca569cd89"],["/posts/10415.html","044420b5de45dbf283765d53d1d349ba"],["/posts/10537.html","d76ce830ddfb4f02f07dd8c9133823eb"],["/posts/16550.html","fe0232dcaf7bdd5381e7715e7e0c1277"],["/posts/16586.html","2cc32f4b5675720d8796f279729af749"],["/posts/17415.html","aa04190d394a83daaefadd375052047d"],["/posts/17683.html","85784151f332d12031d2c71231443294"],["/posts/18321.html","85319c26be2b5eeee6f165a88e22f988"],["/posts/18572.html","89f989936f61469a5348eb493d1fe3f2"],["/posts/19a88b12.html","749ad24cd8a377e60dfd8b54a651ce8c"],["/posts/1d1dff0b.html","6e5c57f4c93776ed476b2e904b389fc3"],["/posts/27081.html","8c6f2c66c4d4f627a57dd9c101018875"],["/posts/2834.html","1242a5ddf7a490c2911bfaf516078160"],["/posts/29055.html","230a77ccbf1419aaf2d68b4c7629b345"],["/posts/2a327ad2.html","b08c52258d931509f5bbbe69d5d39ae1"],["/posts/2b36786b.html","8a41406e96eef0d5437913d391919fe5"],["/posts/30675.html","a0732eaa7eec419910b2acef4365801a"],["/posts/30873.html","4ae4fe2d30eef21e019d67e2c8d171bc"],["/posts/32274.html","a083f7902d755607fe646e9b6c7b4680"],["/posts/34708.html","e60acf52302f808fe77419e9f4cf02ec"],["/posts/34771.html","e8a570daf6fcfdb710cf0c84de5ee57d"],["/posts/34946.html","90aeb10c56db29ae18dbba7760def44b"],["/posts/36204.html","003cd0a4d6037bc46562b23842deedc2"],["/posts/37390.html","43011263eeebcc265cd33b74c91e6e3b"],["/posts/37426.html","fc2885a96ed2d90309a5568d71982c41"],["/posts/39508.html","6fd393a59c3054b7344368f6c3e914ef"],["/posts/39704.html","e127aed34b8be27981c46749b27d44b3"],["/posts/3fb6e39.html","72b4a22c83a8223a9343ffb946f59b40"],["/posts/40711.html","6cb74c9a5b0c061a555832379cb7420c"],["/posts/41055.html","e0a12d0c94308e4a4bbb2c828e4694dc"],["/posts/4136.html","7779c977f35da184b42b5244ef289c64"],["/posts/41382.html","83bf3aaafda4c505934820ca98378115"],["/posts/43150.html","1f001538c852b57714fefab44896000c"],["/posts/43249.html","679b5f6e93e30adfbd0305dab718e06c"],["/posts/4354b039.html","10505925a885bbd03a83b7a33987d766"],["/posts/43857.html","2bb82b34e3cdd392c5478c7d3732d848"],["/posts/44947.html","cc9ebfb85e70f977888227e2b02b781f"],["/posts/45997.html","a4f7057ada8914d8bcf343f2df9911ee"],["/posts/46411.html","9a7bc7629ee76214a06d09e1ff61eb0a"],["/posts/47220.html","76488269ddb973fa500055dfc1f50e75"],["/posts/47936.html","e5e03a5eb2a2de36e29db0b850b86aa0"],["/posts/47985.html","00da5ebbc039a359fb42fa2476ea80c3"],["/posts/47ce27c8.html","ab7a9e21c32fc3510912775bfcd90514"],["/posts/48061.html","a0a67ac414bacfef496a6c16ead06e1a"],["/posts/4a17b156.html","fe235b09558f10e24c4a1c24da4bc34d"],["/posts/5010.html","c6809a71372abe2a617c6eb8be91f891"],["/posts/51417.html","af5d7f0f09cde9db5a65df69d458b154"],["/posts/5144bcf.html","33f08080bcbd7462abcdd8f7f0f7eb43"],["/posts/520.html","e2bee456d953643366d3d3535d9a60b6"],["/posts/53d1dcfb.html","245fe4fec83245369d8b817cfce9bef9"],["/posts/55248.html","c6905a01dd606bfa98ee4e565185f366"],["/posts/55860.html","9124233d788b50d95c4c4dfd01f1d48a"],["/posts/5590.html","c827941b2ccc7861cc34a24346176190"],["/posts/58489.html","48a7bda9cafe780cb307f007a8da6fe4"],["/posts/59346.html","c633023ecc23bce6834d38d2b33c541b"],["/posts/59977.html","17f33f56e733af22efad5cab2251a567"],["/posts/5c0875d6.html","425ea598e55b8cfbcc730dd835704e2c"],["/posts/60364.html","06167062d8fa9093ac573a1004534880"],["/posts/6059.html","4694150bac0642e9891b9912e4e66fd5"],["/posts/61794.html","f086e4e4dff99292acdb48f3c2d3fb15"],["/posts/6275.html","d3cb28c56a19310961869ed7d53bcb3e"],["/posts/62910.html","c6af52bacfec1ba81c7a8242d22251c0"],["/posts/630.html","13edceca96796328fa65d22c7cdef7a8"],["/posts/64423.html","de235edec989e3e63f6aede14e9531d6"],["/posts/64528.html","08fac1eb72321cdee0aac50ebc09925a"],["/posts/64846.html","e9ca5de25045e1691ef3bd43aca63dae"],["/posts/6656ad65.html","f4d63d904de951cec944198d7fe6e51d"],["/posts/6f521982.html","5dd8a2fcaade80884fc3adb46aa53337"],["/posts/71dd948a.html","3a3c982ee6e10bafb33fd605910a1633"],["/posts/773d5f8c.html","496fca67584c9415a23d3c7d0ecd4eec"],["/posts/80bb221f.html","81428559ea5d619130f8509ab56591dd"],["/posts/80ca38c0.html","d6422af2d2524ccdcbc797870003b026"],["/posts/8573.html","5272a12cd2c3fed1423bf6e4b23dfb2a"],["/posts/8589.html","01ebd27ceeb7233e2acf8b4801206616"],["/posts/88fead8.html","41871dbe5530e0076c3eed1d0b601af9"],["/posts/8b540f5a.html","299933bac5287150009ba85ead9e4ec1"],["/posts/8c0ed688.html","c88cdd3af4c2d58b7787b00477111dc5"],["/posts/8f004046.html","75c433e3a725c8a6ac66e132e7494227"],["/posts/8f19a96e.html","85b6a503440eccabd461380c6ad86a89"],["/posts/901b8cd5.html","8437ae43d798a4beed96278ec50ddc95"],["/posts/9618.html","a2b26d6d3cbd3e87850f4c88091e916a"],["/posts/9812.html","29d8cf8b6727a54382d9ef6c9f10831c"],["/posts/9e565f9f.html","23e45e72efb2bf171caa5d5ba640875b"],["/posts/b572816f.html","8ba825aab88969e7db4b72a17a615a3b"],["/posts/b794162c.html","a89355caa80d4dbf4af7baf3f6c8256e"],["/posts/b7cd6609.html","d434dbc1d406daf81f99af9d0d2e9e89"],["/posts/bae4ff13.html","a78a789c9508cafbd9f41c44782177a5"],["/posts/e4f3239b.html","ef8be73efcce60807bfef1735b81311d"],["/posts/ee789513.html","8963313bf67b34b8e82d730f86be6044"],["/posts/f8d580eb.html","2ac51a5bdd6cc38c33cc26334b23f27e"],["/posts/f92cb63f.html","c172e563ee474ad62fce38965fe9df7d"],["/posts/f9586000.html","b2fd7eb60d5a45c02b02b0cf142f6af7"],["/posts/fbd6efa0.html","3211660918225011dc78d57923b63abc"],["/posts/ff995e29.html","fad34eb76250c08f64d097595a389c3b"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","46032afdafc6fe310a0fc1a2c14b409b"],["/tags/Anaconda/index.html","de47c796f1e80cd4a1149aba5ca41ae5"],["/tags/Git/index.html","68dcf104180438b791a336dc07d9e922"],["/tags/Hadoop/index.html","a2bc9114d844a9090b2cb581dfd3049b"],["/tags/Hexo/index.html","532a9d2c4462a26c90cb1622841e4044"],["/tags/Java/index.html","af4c3bdf0bd38948259439da67465a80"],["/tags/Linux/index.html","b9040c04a17cee59f291aa3ba6072bb8"],["/tags/Linux/page/2/index.html","6917c0842871e8c4b1f53032f3f2dcdb"],["/tags/MapReduce/index.html","3c44b0d469990b10d6fa7073e976aec3"],["/tags/Mysql/index.html","1d7549497e452f50a02a6f485e4aec43"],["/tags/Python/index.html","d7ad40aa11e174ffca42ec8061730940"],["/tags/Python/page/2/index.html","4dc5b365f208a6ada01e84c1993936b1"],["/tags/Python/page/3/index.html","351b1abc5a410c723ab994fb4ed97cb0"],["/tags/Python/page/4/index.html","a3c67f952f2dbfeb04083b0fcffeb20b"],["/tags/Python习题/index.html","1e6b2ed06ae503b25d938e88fe0fe14e"],["/tags/Redis/index.html","b1dbffd6a602b94a0e6280e4f1206c86"],["/tags/Tools/index.html","02c2923e4b953701933cbd305f880041"],["/tags/Windows/index.html","a20f700d6b6ccfccef32eaa96bbf48b9"],["/tags/index.html","1ec0850164dd835b6b26d04f18897713"],["/tags/任务栏神器/index.html","0e43848066b5289dbd9e10f431a4542e"],["/tags/图床/index.html","5249d5dd21359c2ebe4dd768cecb5ba2"],["/tags/数仓/index.html","041858bc0a40f5261c26ed5651583d4a"],["/tags/数据库工具/index.html","0ece032c7becacfb7ad58edfc84818bd"],["/tags/毒鸡汤/index.html","87e63cd7819b31828c16869b94b323cb"],["/tags/环境搭建/index.html","b06b19098bb5ca41196db063be1d7118"],["/tags/资料分享/index.html","63f9b2c7a93cbf456478bc5ceb96a73c"],["/tags/面经/index.html","cfbad38c00750db20f36c86712df3830"],["/tools/index.html","db513eedd79cf59a768035787ce7be00"]];
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
