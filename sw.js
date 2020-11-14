/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cd48e54446ade8601e84af63b7620095"],["/Creator-said/index.html","ac25097d9cc9fb4f1275a76c164e6253"],["/README.html","36f69704e240c5e76d21d6a8dd4a1b03"],["/about/index.html","5af150af329e7f67823de71f51d21d54"],["/archives/2019/09/index.html","66bd1f2195c3dbba91b597fb2f20847c"],["/archives/2019/11/index.html","763a86ecc6fc5bc653d06c6a0122306a"],["/archives/2019/12/index.html","68db1cd85de40c97642839447c1ce108"],["/archives/2019/12/page/2/index.html","fd1e1d0c5e7a683ed17b6d54b5348419"],["/archives/2019/12/page/3/index.html","1cfff68841352c3a73aeacadefa8324c"],["/archives/2019/index.html","bcdfd096c5a3f0ac42b7ee28c45e47fc"],["/archives/2019/page/2/index.html","2b7137a14f18dc2daa8b209498a79310"],["/archives/2019/page/3/index.html","ac69e112f59c8212843d714756825163"],["/archives/2020/03/index.html","93fb9c5607b40f1f7f5480b547e387fe"],["/archives/2020/04/index.html","723ce8166adbf3dc44e54c043c46c1fa"],["/archives/2020/04/page/2/index.html","b780b1a1082c374d9aa424d5edc9d4c1"],["/archives/2020/05/index.html","ded675fd7c3d03576bdbbb678c854f44"],["/archives/2020/05/page/2/index.html","c03e8f524be3f0db61873f475d9875ee"],["/archives/2020/06/index.html","26dac87b1ae9cd617c5a3508e1325624"],["/archives/2020/07/index.html","057ddf5fbda0c3da58047221b12b228c"],["/archives/2020/08/index.html","677433219e9dd09a7c73714eb02bed2d"],["/archives/2020/09/index.html","59a07cae41c20879b31fa80423377e05"],["/archives/2020/09/page/2/index.html","ba98b620ca03b29618046e776fbb8b76"],["/archives/2020/11/index.html","14683de0d2a0c9eb29c3db69d9570123"],["/archives/2020/index.html","0da54253586c49085d9f1f9ea2acea6b"],["/archives/2020/page/2/index.html","7967905abcc70367df78f74691ff87e7"],["/archives/2020/page/3/index.html","9cff8e711200d9c833f637fa9b5ab7db"],["/archives/2020/page/4/index.html","be2524a31e1eade59aa685a5c8a16a98"],["/archives/2020/page/5/index.html","fcbbd338ac53790b5af699a15e96a600"],["/archives/2020/page/6/index.html","b467de4dc8704a83741122871379b315"],["/archives/2020/page/7/index.html","5621622f14e335e108ff9a185054065a"],["/archives/index.html","77442ca47fcad7fd2253cdd7a926d167"],["/archives/page/10/index.html","889e83dc19eddba5eed836017b86ef6b"],["/archives/page/2/index.html","366aa766cb83e2ef9c6319038f3a5f32"],["/archives/page/3/index.html","366aa766cb83e2ef9c6319038f3a5f32"],["/archives/page/4/index.html","366aa766cb83e2ef9c6319038f3a5f32"],["/archives/page/5/index.html","366aa766cb83e2ef9c6319038f3a5f32"],["/archives/page/6/index.html","889e83dc19eddba5eed836017b86ef6b"],["/archives/page/7/index.html","889e83dc19eddba5eed836017b86ef6b"],["/archives/page/8/index.html","889e83dc19eddba5eed836017b86ef6b"],["/archives/page/9/index.html","889e83dc19eddba5eed836017b86ef6b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","f91722272f0a19e387026c94d9f7502d"],["/categories/DataBase/Mysql/index.html","16d5e6d7684e068ae5ff6acd0020a9d9"],["/categories/DataBase/Redis/index.html","e797b170f3bbf5538a58b8a3bd2109be"],["/categories/DataBase/index.html","5059bf03951fe201cf95aa7cfed6c019"],["/categories/Git/index.html","e28517aa5fe807b81331ecc77596dfda"],["/categories/Hexo/index.html","3b19e76dda7db6cd33054175f4efcbaf"],["/categories/Java/index.html","70a110f937ad1ebd115d053db31971eb"],["/categories/Linux/index.html","d9fbf73de2f3290c00fd7f9a6a511880"],["/categories/Linux/page/2/index.html","c5adcda4d0603b0325a888b67995f6d1"],["/categories/Python/Anaconda/index.html","4dee0b79f3b8d67d9a27ead12e400fe1"],["/categories/Python/Python入门/index.html","39abd095b743895c021e09e12bc2ae24"],["/categories/Python/Python入门/page/2/index.html","3df9673f7b871ad95eefddf0c9df53c4"],["/categories/Python/Python速成/index.html","36c34e453098cd814d304bf04a34bfe6"],["/categories/Python/Python速成/page/2/index.html","9b2ecd5d58ead42ce50f188532fca290"],["/categories/Python/index.html","2874c80200c5685dfb78ee79764880a0"],["/categories/Python/page/2/index.html","fcf544b8407250740748fd4084247b91"],["/categories/Python/page/3/index.html","cd624f0a8eaf895117964b1944954bfb"],["/categories/Python/page/4/index.html","3826f4d8b2707e347c43194fd51c720b"],["/categories/Python/数据可视化/index.html","dc898abbc9908a39057331d801f0bc6d"],["/categories/Tools/index.html","1d029b881583a37641cde4f45d50742d"],["/categories/index.html","842712f5b66816c68ff4b403f940c072"],["/categories/大数据/index.html","009a038f66b0a1ef3a71057bc9491fde"],["/categories/职场/index.html","6362774cc4edc3fa17a489f4e5f63ab3"],["/contact/index.html","c32a5ffa304f7e2d8166844059c20d68"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","32c62c5bd5aed09afa58f0a115c730a8"],["/friends/index.html","96b9f99376da4db67fbdc52bd28efefd"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","44bf62c41f63e00a6e625177ed6d4351"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","20276379341e085dd33e93cad5fca920"],["/page/10/index.html","0aab0362a8479d653aa4d400176f28a5"],["/page/2/index.html","573b42972d2007effe6a2961dfec7197"],["/page/3/index.html","dcea59ac605f2a0817bff60a1fe64e3e"],["/page/4/index.html","fbfc3126bf1a7970e7ad6d188b576322"],["/page/5/index.html","b7b76ac87bfc76456838a83b81acd2a5"],["/page/6/index.html","6ea373370be69a4f276f043cc2b948cd"],["/page/7/index.html","c6fed2c763a2ddb20dcda2ac0aa59d38"],["/page/8/index.html","df48ffd28c863c1315a5a9eb0c479881"],["/page/9/index.html","d85e4d6a6233f82c60e661b80052f950"],["/posts/10415.html","044420b5de45dbf283765d53d1d349ba"],["/posts/10537.html","d76ce830ddfb4f02f07dd8c9133823eb"],["/posts/16550.html","fe0232dcaf7bdd5381e7715e7e0c1277"],["/posts/16586.html","2cc32f4b5675720d8796f279729af749"],["/posts/17415.html","aa04190d394a83daaefadd375052047d"],["/posts/17683.html","85784151f332d12031d2c71231443294"],["/posts/18321.html","85319c26be2b5eeee6f165a88e22f988"],["/posts/18572.html","89f989936f61469a5348eb493d1fe3f2"],["/posts/19a88b12.html","f7b91e97914a227008256bbf7546d2e1"],["/posts/1d1dff0b.html","6e5c57f4c93776ed476b2e904b389fc3"],["/posts/27081.html","8c6f2c66c4d4f627a57dd9c101018875"],["/posts/2834.html","1242a5ddf7a490c2911bfaf516078160"],["/posts/29055.html","230a77ccbf1419aaf2d68b4c7629b345"],["/posts/2a327ad2.html","b08c52258d931509f5bbbe69d5d39ae1"],["/posts/2b36786b.html","8a41406e96eef0d5437913d391919fe5"],["/posts/30675.html","a0732eaa7eec419910b2acef4365801a"],["/posts/30873.html","4ae4fe2d30eef21e019d67e2c8d171bc"],["/posts/32274.html","a083f7902d755607fe646e9b6c7b4680"],["/posts/34708.html","e60acf52302f808fe77419e9f4cf02ec"],["/posts/34771.html","e8a570daf6fcfdb710cf0c84de5ee57d"],["/posts/34946.html","90aeb10c56db29ae18dbba7760def44b"],["/posts/36204.html","003cd0a4d6037bc46562b23842deedc2"],["/posts/37390.html","43011263eeebcc265cd33b74c91e6e3b"],["/posts/37426.html","fc2885a96ed2d90309a5568d71982c41"],["/posts/39508.html","6fd393a59c3054b7344368f6c3e914ef"],["/posts/39704.html","e127aed34b8be27981c46749b27d44b3"],["/posts/3fb6e39.html","72b4a22c83a8223a9343ffb946f59b40"],["/posts/40711.html","6cb74c9a5b0c061a555832379cb7420c"],["/posts/41055.html","e0a12d0c94308e4a4bbb2c828e4694dc"],["/posts/4136.html","5e4897871ff161f7b1861ec4f5b43708"],["/posts/41382.html","83bf3aaafda4c505934820ca98378115"],["/posts/43150.html","1f001538c852b57714fefab44896000c"],["/posts/43249.html","679b5f6e93e30adfbd0305dab718e06c"],["/posts/4354b039.html","6b0aa6fa08ae0668ca1a31239de7899f"],["/posts/43857.html","2bb82b34e3cdd392c5478c7d3732d848"],["/posts/44947.html","cc9ebfb85e70f977888227e2b02b781f"],["/posts/45997.html","a4f7057ada8914d8bcf343f2df9911ee"],["/posts/46411.html","9a7bc7629ee76214a06d09e1ff61eb0a"],["/posts/47220.html","76488269ddb973fa500055dfc1f50e75"],["/posts/47936.html","e5e03a5eb2a2de36e29db0b850b86aa0"],["/posts/47985.html","00da5ebbc039a359fb42fa2476ea80c3"],["/posts/47ce27c8.html","ab7a9e21c32fc3510912775bfcd90514"],["/posts/48061.html","a0a67ac414bacfef496a6c16ead06e1a"],["/posts/4a17b156.html","ec2ab86d42ba5205b7d0f26b934f4db9"],["/posts/5010.html","c6809a71372abe2a617c6eb8be91f891"],["/posts/51417.html","af5d7f0f09cde9db5a65df69d458b154"],["/posts/5144bcf.html","33f08080bcbd7462abcdd8f7f0f7eb43"],["/posts/520.html","e2bee456d953643366d3d3535d9a60b6"],["/posts/53d1dcfb.html","245fe4fec83245369d8b817cfce9bef9"],["/posts/55248.html","c6905a01dd606bfa98ee4e565185f366"],["/posts/55860.html","9124233d788b50d95c4c4dfd01f1d48a"],["/posts/5590.html","c827941b2ccc7861cc34a24346176190"],["/posts/58489.html","48a7bda9cafe780cb307f007a8da6fe4"],["/posts/59346.html","c633023ecc23bce6834d38d2b33c541b"],["/posts/59977.html","17f33f56e733af22efad5cab2251a567"],["/posts/5c0875d6.html","407066fe391da7ab7a96e33d5cb01de3"],["/posts/60364.html","06167062d8fa9093ac573a1004534880"],["/posts/6059.html","4694150bac0642e9891b9912e4e66fd5"],["/posts/61794.html","f086e4e4dff99292acdb48f3c2d3fb15"],["/posts/6275.html","d3cb28c56a19310961869ed7d53bcb3e"],["/posts/62910.html","c6af52bacfec1ba81c7a8242d22251c0"],["/posts/630.html","13edceca96796328fa65d22c7cdef7a8"],["/posts/64423.html","de235edec989e3e63f6aede14e9531d6"],["/posts/64528.html","08fac1eb72321cdee0aac50ebc09925a"],["/posts/64846.html","e9ca5de25045e1691ef3bd43aca63dae"],["/posts/65aeda8b.html","308eb8dc76cdd36faf8ef1c71388f8ad"],["/posts/6637aa6e.html","6642f978ba9d3077bad73356db84c8a6"],["/posts/6656ad65.html","c821bd45540d248cd343cf455b78c543"],["/posts/6f521982.html","f7dee283ccc8e6137b67cc9eb46d7b96"],["/posts/71dd948a.html","3a3c982ee6e10bafb33fd605910a1633"],["/posts/773d5f8c.html","496fca67584c9415a23d3c7d0ecd4eec"],["/posts/80bb221f.html","81428559ea5d619130f8509ab56591dd"],["/posts/80ca38c0.html","d6422af2d2524ccdcbc797870003b026"],["/posts/8573.html","5272a12cd2c3fed1423bf6e4b23dfb2a"],["/posts/8589.html","01ebd27ceeb7233e2acf8b4801206616"],["/posts/88fead8.html","41871dbe5530e0076c3eed1d0b601af9"],["/posts/8b540f5a.html","299933bac5287150009ba85ead9e4ec1"],["/posts/8c0ed688.html","c88cdd3af4c2d58b7787b00477111dc5"],["/posts/8f004046.html","75c433e3a725c8a6ac66e132e7494227"],["/posts/8f19a96e.html","85b6a503440eccabd461380c6ad86a89"],["/posts/901b8cd5.html","8437ae43d798a4beed96278ec50ddc95"],["/posts/9618.html","a2b26d6d3cbd3e87850f4c88091e916a"],["/posts/9812.html","29d8cf8b6727a54382d9ef6c9f10831c"],["/posts/9e565f9f.html","23e45e72efb2bf171caa5d5ba640875b"],["/posts/b572816f.html","8ba825aab88969e7db4b72a17a615a3b"],["/posts/b794162c.html","88ef6623189d9d31d9a20370414d2795"],["/posts/b7cd6609.html","d434dbc1d406daf81f99af9d0d2e9e89"],["/posts/bae4ff13.html","a78a789c9508cafbd9f41c44782177a5"],["/posts/c54e1e5.html","2d1c85f29cdeafe7112d723b46181a27"],["/posts/ca165cd5.html","dd7f2aa87374918e68421473f8a2ad65"],["/posts/e4f3239b.html","6f4c5507a6be68433d5d4928f06ce342"],["/posts/ee789513.html","8963313bf67b34b8e82d730f86be6044"],["/posts/f8d580eb.html","61bcb3fad9ae2330a072792f63bd915a"],["/posts/f92cb63f.html","c172e563ee474ad62fce38965fe9df7d"],["/posts/f9586000.html","b2fd7eb60d5a45c02b02b0cf142f6af7"],["/posts/fbd6efa0.html","3211660918225011dc78d57923b63abc"],["/posts/ff995e29.html","fad34eb76250c08f64d097595a389c3b"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","a4d1009a58ea18ec7c9818f6b49f105a"],["/tags/Anaconda/index.html","e2f49bd1d26cc6c6d6589b66b6d648ae"],["/tags/Git/index.html","205ea2d9a303e38de5c0d474ffbdde9e"],["/tags/Hadoop/index.html","5f11f587df884e6fdf2ccca22ad5287b"],["/tags/Hexo/index.html","cb419353d197cc96a656a28d9f6cddc0"],["/tags/Java/index.html","ae2685b71b60bfe5148885a6161c54c5"],["/tags/Linux/index.html","0f209e0cd10fe9c9a9e2cea388473596"],["/tags/Linux/page/2/index.html","9af9b24966d547e7f3c1bac97c47197a"],["/tags/MapReduce/index.html","31d4f3b55071afc631c9aae76e058f14"],["/tags/Mysql/index.html","09954edc2f83b09dbfc62341461d022f"],["/tags/Python/index.html","36cad2bc153f2d212d68d5d3c45a04a4"],["/tags/Python/page/2/index.html","3c1f48dc9fc7aac5d9fc7764f1965515"],["/tags/Python/page/3/index.html","5911e50e5e0646bfbd66311112ca78dc"],["/tags/Python/page/4/index.html","41b345587bc9fd973cbe87cfed0fba7f"],["/tags/Python习题/index.html","470b023be17bae569cffd3df161df92d"],["/tags/Redis/index.html","c369771c3720791fdc10a886b1f13140"],["/tags/Tools/index.html","68c28e3c46410330e8b7d7fa42c124c7"],["/tags/Windows/index.html","80498ccc5fa0aad3af1ac5d49643bacb"],["/tags/index.html","02f91b494011c2277b30739c0e654bfe"],["/tags/任务栏神器/index.html","498533d9c11f8c6526dd3f5145a926f3"],["/tags/图床/index.html","6df085b881c7b67dfc396d95a570dd6e"],["/tags/数仓/index.html","2a99cfe3bb52791155be4f9463d7db8a"],["/tags/数据库工具/index.html","994444c3d6b27a1a81377299fc8a463e"],["/tags/毒鸡汤/index.html","e16aa50067b8db59369639a3789abb69"],["/tags/环境搭建/index.html","5c7a9599ba1ad92fff9a6be95d51f294"],["/tags/资料分享/index.html","ed99f0b5af263eb9b09913e4df798f48"],["/tags/面经/index.html","002b03f93b27acf04bc111df816b9d0c"],["/tools/index.html","db513eedd79cf59a768035787ce7be00"]];
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
