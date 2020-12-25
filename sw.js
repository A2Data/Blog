/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a38a34c6122143f19a19a8c4c6c9a3d2"],["/Creator-said/index.html","7bb2c92bcb5be93a6151577c2ba6c608"],["/README.html","36f69704e240c5e76d21d6a8dd4a1b03"],["/about/index.html","967b10ff03ba68d2f901177e7af09120"],["/archives/2019/09/index.html","620fb51f0a57f125c7761514c95635df"],["/archives/2019/11/index.html","0993ba2f847abe433fbe67f51442a04b"],["/archives/2019/12/index.html","bd3d5f13b7bbe333197c237808c971c5"],["/archives/2019/12/page/2/index.html","2d02be2af1b5165c494e40a1bbf253ba"],["/archives/2019/12/page/3/index.html","85d739d2f9c2a9e57dfc11b082e5b442"],["/archives/2019/index.html","1b6f71a37c3bcfc4be1db8e65bbe66c5"],["/archives/2019/page/2/index.html","f2305542356b2f17fb105da460290a6b"],["/archives/2019/page/3/index.html","1d3fd7616c6b49c1817504731d2a4116"],["/archives/2020/03/index.html","da34795b6ca2edccaaa7c91924bdd1c4"],["/archives/2020/04/index.html","24b6796b851fb881f3fc615709eaf3d5"],["/archives/2020/04/page/2/index.html","0682577f4f58e7d054626d2952ccaefa"],["/archives/2020/05/index.html","faa229aa938728518f6a6b031df02eb0"],["/archives/2020/05/page/2/index.html","8c317e87b9dc658d75dcb87748a83cc8"],["/archives/2020/06/index.html","79bc4907d337fc13455e82aa62b9a2c6"],["/archives/2020/07/index.html","7bd644d68d86ae853ea80b9597aa8013"],["/archives/2020/08/index.html","1a9970836e8b02a41df4381d6946b9e2"],["/archives/2020/09/index.html","1a0680c232b6329a85bae3d306da7d2f"],["/archives/2020/09/page/2/index.html","f7788eb61703b9b18496092e871fa863"],["/archives/2020/11/index.html","d1ff56eaf22b3d3d28a8c5dd73e6a30e"],["/archives/2020/11/page/2/index.html","430685ce2e218339c847a07307775d7c"],["/archives/2020/12/index.html","e346e6ca3062a44319b10695878cfeb1"],["/archives/2020/index.html","648c4f21a816e51619591ec949670917"],["/archives/2020/page/2/index.html","07d9e823f969601a2fcfdb42e78cf430"],["/archives/2020/page/3/index.html","d39535867439df4bf7ae520487c48a27"],["/archives/2020/page/4/index.html","3f73de27bebdd65dbf5cad2639cab487"],["/archives/2020/page/5/index.html","b5acbe29c8d57f21e7da034c282034b8"],["/archives/2020/page/6/index.html","dee281edc0578b7eae884fd42ddffb34"],["/archives/2020/page/7/index.html","956d0d8dc2e4a3f819f7a61c009d1266"],["/archives/2020/page/8/index.html","6ce2b8aeb9dbbccdb57a6c68ca989818"],["/archives/index.html","08423657024bef5c460864793316cf57"],["/archives/page/10/index.html","da1956be0cd5a3b7d096306fe7b721b9"],["/archives/page/11/index.html","da1956be0cd5a3b7d096306fe7b721b9"],["/archives/page/2/index.html","5aa8be54c0e51346182cf82ab2b2395a"],["/archives/page/3/index.html","5aa8be54c0e51346182cf82ab2b2395a"],["/archives/page/4/index.html","5aa8be54c0e51346182cf82ab2b2395a"],["/archives/page/5/index.html","5aa8be54c0e51346182cf82ab2b2395a"],["/archives/page/6/index.html","da1956be0cd5a3b7d096306fe7b721b9"],["/archives/page/7/index.html","da1956be0cd5a3b7d096306fe7b721b9"],["/archives/page/8/index.html","da1956be0cd5a3b7d096306fe7b721b9"],["/archives/page/9/index.html","da1956be0cd5a3b7d096306fe7b721b9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","3eaf8407359f9573d6cf16c2a41f422e"],["/categories/DataBase/Mysql/index.html","7a6314a20261bd5b989495c03cb2bf88"],["/categories/DataBase/Redis/index.html","1e37648448d674952a5c548f84bead0b"],["/categories/DataBase/index.html","66db4c212c5fb03aa44996dab11ccd5e"],["/categories/Git/index.html","6afbae50f7ee7c3357a5cbcf71073c63"],["/categories/Hexo/index.html","1270c8833285c048671ef8c255225c0d"],["/categories/Java/index.html","8c2214c521035e95699df80c88a2d9c5"],["/categories/Linux/index.html","0de840f5e808fb23d1f543a98b75394d"],["/categories/Linux/page/2/index.html","99bd265897eaab4229061cbf0a0367d1"],["/categories/Python/Anaconda/index.html","8b50ad7f6471f685a27ab5015e6c26da"],["/categories/Python/Python入门/index.html","d5e1e30ae3cee4e4b7b385c66e9f933b"],["/categories/Python/Python入门/page/2/index.html","178c9b1926794cbe1a74645c3d1648a2"],["/categories/Python/Python速成/index.html","ecd2acfb11e0cbbebde339cb81309cf2"],["/categories/Python/Python速成/page/2/index.html","6c6ecd39480e1c43a77ce245673cde3b"],["/categories/Python/index.html","2fb5bd95b7513bddd43ce880b4cdf9db"],["/categories/Python/page/2/index.html","80bd56cda3f0ea438eb54b3ac077a39a"],["/categories/Python/page/3/index.html","3e842c3a0f94f30d6e0e88e48da60527"],["/categories/Python/page/4/index.html","c3a199a3d69b67059a3aca45c8f628ec"],["/categories/Tools/index.html","5e17f260a778649ba23b1806e10e48f7"],["/categories/index.html","db220430da4d30b5f9e43834fdb1133b"],["/categories/大数据/index.html","1a948cb12e5a4f63b73a6410d2ad2fb3"],["/categories/职场/index.html","9d98f35d226da4479a8117c1d25fe5dd"],["/contact/index.html","179d9a99eaea30ea4e27fba3d42ab998"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","1494ff7077b9993ee627f91687e0821e"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","500faf383651b67e3abb2f5b68eff5ea"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","2960402d5aa05c47c49d87fee02a4a21"],["/page/10/index.html","c2468444a15574d47dfe23f4fc001068"],["/page/11/index.html","53dabfd42c0d74a21767d23b606b37f4"],["/page/2/index.html","b60b68e5c5ef2d8cbd5ba1edbf944f56"],["/page/3/index.html","5e01a4d24565472fa3694e4b55f5c1bc"],["/page/4/index.html","11aa2f3be0d9841e3e92157c7064bc5f"],["/page/5/index.html","79481d0760fcb7b27ca2796c387ace59"],["/page/6/index.html","cb12a54b48663aeeda89f712eb5fecb9"],["/page/7/index.html","501c07373930e8220e5000828b065c38"],["/page/8/index.html","8f8ef49108764d09882a1f5db75f37c8"],["/page/9/index.html","1b571293310db8a6ae0bceb6439d467b"],["/posts/10415.html","c3dd2a4e2327fd29e27505b0150226a4"],["/posts/10537.html","c986107146e564f167def19bbab81a59"],["/posts/16550.html","d4b7396abcc89db8a51213f20b729a8b"],["/posts/16586.html","d3ace90bf9c8f63bafebaf55a7de8b28"],["/posts/17415.html","0f02a48b03748475ed15646a7a6e0daf"],["/posts/17683.html","79c5d334e3c82430e286eb3eda9a149f"],["/posts/18321.html","43f5d890ac1045b578e9de4ae00190d1"],["/posts/18572.html","551090c95f8cc1ed1f347b2c07b4b1a7"],["/posts/19a88b12.html","5d12af102d7f1fc2d58265969eef3e55"],["/posts/1d1dff0b.html","d53baed4b5c435aa9581f18ea06ddf28"],["/posts/27081.html","175e6410458032646801dfd11606b4f1"],["/posts/2834.html","9d40741464ecb98998e101f80261e08a"],["/posts/29055.html","6e25593ba67cfb96bb1d5925fc577f94"],["/posts/29966d.html","bb8834aa0bba31818c6e6214a5aae104"],["/posts/2a327ad2.html","0c6871bdcc55e2cc54ee1962ecaeab06"],["/posts/2b36786b.html","7b8abe9ab92788458ebfb510d600be8d"],["/posts/30675.html","060758c0d98defc1f39d6f4304f62726"],["/posts/30873.html","5a1cd0f98c2a799cdee9626db44eabcb"],["/posts/32274.html","f82300bf162d7f278a7f29cfcffc2475"],["/posts/34708.html","1d80001759e3a1130f080d948eb23e3c"],["/posts/34771.html","07bfb4413367c1d3c2cc82efc4289c8d"],["/posts/34946.html","0ec50941c66be87728c13c895054cdf4"],["/posts/36204.html","20864d5683757206bc7031a131371cf5"],["/posts/37390.html","741769e94916e15077b4d4d81ff79f18"],["/posts/37426.html","143748061482f4ee5d25665b074c4226"],["/posts/39508.html","6c9c5a0b525361ab045283a340530fad"],["/posts/39704.html","1f7377f6c8aacbda01b1dc5d6c074eb6"],["/posts/3fb6e39.html","d212b11175eddb0e0f8091289b27d4ba"],["/posts/40711.html","4abc14136bfd4441de8a45680ea461e3"],["/posts/41055.html","440f8d5c3a6f48a2e6ddba7835bcb30e"],["/posts/4136.html","58e14e1e860efe5cb042d9b7f66a58e9"],["/posts/41382.html","62987ad7a6876d60444cdb689bf2eddb"],["/posts/43150.html","4781b315e983a7f52fdb14e350d271d6"],["/posts/43249.html","eecd152f69979e858f5824dbd6a9ed72"],["/posts/4354b039.html","9d9aca8a6db3ab37f728835b53933058"],["/posts/43857.html","d7cfdd04d84fc17f2a98f7207ec66a2c"],["/posts/44947.html","1d68ba162fb96035ea1c4da6024c2376"],["/posts/45997.html","761475e35b7fe01d96a59ba40c26a7cb"],["/posts/46411.html","62f955c885b9f2aa86ad9cd159b32680"],["/posts/47220.html","60dd691358fd538be573f078fd1ea73e"],["/posts/47936.html","a64ce523ecd16059c52ba88ae9e29c09"],["/posts/47985.html","e0382eb808dd8a374c5ffe514a827973"],["/posts/47ce27c8.html","02e2622f08e28cb8c125296c08420e46"],["/posts/48061.html","f64b9091bc43d79ee728ad6cb1090aae"],["/posts/4a17b156.html","ec6b18e7916c56543da0d9ff1b12feae"],["/posts/5010.html","a9145a981a9cc56a70ad7924c5c22c5f"],["/posts/51417.html","25235ffe858973cf60209defb308c596"],["/posts/5144bcf.html","ec4ab1c31bf0c8b6d98b2694bdd80f78"],["/posts/520.html","9019534bbfa3d787ccc1d86548f1481d"],["/posts/53d1dcfb.html","bdf2436a3940b652b99dd8698b031f56"],["/posts/55248.html","defdfe5f3c21fff01865817dbbaf9c1e"],["/posts/55860.html","7adf4e1f0b3c3a89a21fe35ded25efc8"],["/posts/58489.html","9e643bae9d9ef12185f94e4a5d09e62e"],["/posts/59346.html","dd4d92402409414b383704f3252f000a"],["/posts/59977.html","8219655e7a9b4f0f80da1e1f95f8a1e3"],["/posts/5c0875d6.html","be5418ccc348848ab33e63443e0a2d61"],["/posts/60364.html","d5ceb3be405207ba4e626fafd49ee5f1"],["/posts/6059.html","fce5b2df6084d09a2b6dc51f6040bd4e"],["/posts/61794.html","b44faf2595e7369074bbbf1c7e80e53d"],["/posts/6275.html","c2ce2eafb533fac5ed3615fd4bb138fd"],["/posts/62910.html","25e7a0f2841d748ae3b34179bf7b15b6"],["/posts/62cf8a54.html","6b451851c7655563f9fbf1fd6a8db4cb"],["/posts/630.html","fc91fd5c7ff3bc8a65118ec61493977a"],["/posts/64423.html","32b2d27712123813438eb5ce99dcc24c"],["/posts/646dbc2e.html","3865038e69789ec711a0dca212555317"],["/posts/64846.html","791cca20d9b928311688260e0d969263"],["/posts/65aeda8b.html","089b114589445d567d4016b70419bb2c"],["/posts/6637aa6e.html","aa83f6796bc30ce50f0c0741784fae22"],["/posts/6656ad65.html","ebd2a1930b1b5e5414514073dde38a35"],["/posts/6e2faa04.html","82f26c12afa13a8460755d65f2563005"],["/posts/6f521982.html","05ea05dda3c7204d046ab334bd9ac459"],["/posts/71dd948a.html","523c9da4e089fb9beca466a2b16a87eb"],["/posts/773d5f8c.html","e872e1fc3f7b1cf31d428b346d2d0b95"],["/posts/7a179f78.html","db7704ba69415b05bc391aaa046ceb01"],["/posts/80bb221f.html","e139a246c6a37f3cf925dfc580c757f8"],["/posts/80ca38c0.html","eb4e08c2913a7c892473e46958691050"],["/posts/8573.html","a3f416551f42ed6f094b53e86100b3f0"],["/posts/8589.html","2bdc312106390b4952644fbbeebd469f"],["/posts/88fead8.html","2cc416e073e2b7ed2197224c6b3cf186"],["/posts/8b540f5a.html","20f83f6198c3dfc4733b76dfad644918"],["/posts/8c0ed688.html","7f76d354f27518e03b58c72a5a01b1fd"],["/posts/8f004046.html","243ef1f9827c6ac159128613eedb308d"],["/posts/8f19a96e.html","7bf9540300257d97e2456ab5e491ee1f"],["/posts/901b8cd5.html","951a198d456cf0269012f7e911a96c77"],["/posts/9618.html","a51ea0c1755378c976adbcf4ef7999ab"],["/posts/9812.html","949c700246e21b9275a1d845e3eed150"],["/posts/9e565f9f.html","a15526a658c3e2e3dd83b27df8c10151"],["/posts/a9378efd.html","302f7bb5c22ed02b63d5571f1a5e5cb2"],["/posts/b11c450a.html","1efa267abba6fa6cb55e187b92e9e6c5"],["/posts/b572816f.html","68614051185642e54afc0ddcdeb487a8"],["/posts/b794162c.html","8339c59b3af5595a13026f5390c68e74"],["/posts/b7cd6609.html","2b5e3248919837c7731efca289416807"],["/posts/bae4ff13.html","0563287a59e7566d8677b164bc2f43cd"],["/posts/bb9346ce.html","3f5118130b457d73da886b1389b8f192"],["/posts/c54e1e5.html","7950759d77e3c52d00821b822cd446d2"],["/posts/ca165cd5.html","94d15ccca812c2638e8a700dd424fa2e"],["/posts/cc50857e.html","1cbdf4cf80e736590ea3029d714f471f"],["/posts/cfcef26f.html","51a27a76f19c83d44619be7eb2a9f4e5"],["/posts/e4f3239b.html","5fd3ea8d98ea4b5c6d6f32741ca90e6f"],["/posts/e73bc34f.html","6b3bf76c43518712ac0508fcb75f1c44"],["/posts/ee789513.html","f243342b21f12a5accb2376f061500c6"],["/posts/f893cfd3.html","56ea084d4bb8bedbb62d74e4c444a63f"],["/posts/f8d580eb.html","bd5f6b24303e412c14708e1c9bb6b82f"],["/posts/f92cb63f.html","4719fb449d50c218459035aa1b242974"],["/posts/f9586000.html","4961075ceebb547b7ebf2bab4377762d"],["/posts/fbd6efa0.html","2f09ae1fd2fb2fa3622f5f38fb86973b"],["/posts/ff2330ff.html","b0f611acbb1a9805bcb2b8f6890167dc"],["/posts/ff995e29.html","471c12aa5d41363da087a62c492f4282"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","094a674c40bd8e48d2ce2bd466b1b897"],["/tags/Anaconda/index.html","dc99b545db0e9ff8ac8159249e179ab1"],["/tags/Edge/index.html","0990a6c395ed854940a0e87de68f7eb6"],["/tags/Git/index.html","3901fa4b95832e9a47fcfa65a8393cda"],["/tags/Hadoop/index.html","4b31d527460fdb10618b0a5bb4cb346f"],["/tags/Hexo/index.html","292f3d3b606de094718b80ac20e04b2f"],["/tags/Java/index.html","1ac914857da731ad4323397765a147fb"],["/tags/Linux/index.html","0fbea099f04bdefb6402daf623ee997d"],["/tags/Linux/page/2/index.html","ddbfebfb99c342638b7c5faaf6b67c09"],["/tags/MapReduce/index.html","58414b43ab747f1f1f104fac3232aad7"],["/tags/Mysql/index.html","004e8b1b56d320c5b6882755139f4573"],["/tags/Python/index.html","66b30d289262c9e644298fd8b235c6e4"],["/tags/Python/page/2/index.html","b48ce67d648a17b23656a4c4334eef97"],["/tags/Python/page/3/index.html","b16a489fa7dcfe9f0bf51c93d2dca90a"],["/tags/Python/page/4/index.html","d7543fab2cea90685ded230baab3573a"],["/tags/Python习题/index.html","08b3b4391da6d48626b987c6dbdc84a8"],["/tags/Redis/index.html","d2d1005eb47817c55feddf9d0e864ada"],["/tags/Tools/index.html","7d55a8198f6ecdf34f32222001a8a5ec"],["/tags/Win10/index.html","d3cbc9ff35b425ada0df3fe50206ca62"],["/tags/Windows/index.html","227e41d1e695143f6c704686f300ed1b"],["/tags/index.html","31f10ba7cb006e63c003abed7e867bb1"],["/tags/任务栏神器/index.html","bea04bf794a784b8c8ed3f293dfe6c53"],["/tags/图床/index.html","f502035d56ccf330ec1caa3544308575"],["/tags/数仓/index.html","78c450ef7affafad794fc10d2ce91e55"],["/tags/数据可视化/index.html","3e8a3f957f0fad678c0100831c39c6df"],["/tags/数据库工具/index.html","88a096ffcceb2095abcc4312b774c3f7"],["/tags/毒鸡汤/index.html","76fb749c70667ab21cb9a26702c87477"],["/tags/环境搭建/index.html","a3a125e1c9c52a9db37db0faa6b184ee"],["/tags/资料分享/index.html","5d00aa9a918b9e0682d20b95ee4edb79"],["/tags/面经/index.html","04bc7c4f52972c78c0c68cf29ba03ea9"],["/tools/index.html","5666f6bc204b84da7da847b5e0d7515f"]];
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
