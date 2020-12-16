/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a38a34c6122143f19a19a8c4c6c9a3d2"],["/Creator-said/index.html","7bb2c92bcb5be93a6151577c2ba6c608"],["/README.html","36f69704e240c5e76d21d6a8dd4a1b03"],["/about/index.html","967b10ff03ba68d2f901177e7af09120"],["/archives/2019/09/index.html","375090cb2ec1abe18b83d7b7767b596b"],["/archives/2019/11/index.html","2031b6767a4911ba9ca2ac26d9d6ccb8"],["/archives/2019/12/index.html","af9bae59c78b2c008386dd4f590570d0"],["/archives/2019/12/page/2/index.html","82537729c1ad2c4df21d8228530ff548"],["/archives/2019/12/page/3/index.html","9ef085ab2c658c1cfaa47a90aadfdf93"],["/archives/2019/index.html","7cdfbbc16df5a80016487ddec00736d3"],["/archives/2019/page/2/index.html","5e520f2548de746aa886638a9bac3f40"],["/archives/2019/page/3/index.html","2a1b720ad275f43ad7a66da14cefc120"],["/archives/2020/03/index.html","0c6660a16604571e6212df6c2809a809"],["/archives/2020/04/index.html","cfa79872ba37abc0a062e32cb75f244b"],["/archives/2020/04/page/2/index.html","0d6949c07bd18f7ee911496528bc09c5"],["/archives/2020/05/index.html","55e3d2b77f1b747248328613c3d7d11d"],["/archives/2020/05/page/2/index.html","8310c4f76bdde16cc3100874b77d05ce"],["/archives/2020/06/index.html","2bf15913f9a44e0e0f48bb10347dedaa"],["/archives/2020/07/index.html","26f55df5cf9f7b5414ec7e3380fad5ce"],["/archives/2020/08/index.html","83586284670b253c1ed814e63ab8a9f7"],["/archives/2020/09/index.html","fa89da5f6da019d064d228ce0cde943a"],["/archives/2020/09/page/2/index.html","6b194bfab4fadb7c579f6d1310d34fdb"],["/archives/2020/11/index.html","1a12dab66e29076ac9d03ff674236a46"],["/archives/2020/11/page/2/index.html","6aae02f4c6f4f8773fd70abd74724411"],["/archives/2020/12/index.html","5ff9629f898bdf945a23c4c9de8f454f"],["/archives/2020/index.html","8790c43e0e79ca77302c031b0550f972"],["/archives/2020/page/2/index.html","051c38b020842cccdf417052bb53179b"],["/archives/2020/page/3/index.html","f8954ad3b9cba092e7e23e1368d3e7e7"],["/archives/2020/page/4/index.html","39fc6505bf8130fd73ae0bf3bf0c88cf"],["/archives/2020/page/5/index.html","b201dd06ebe93efa13c67df828b9a845"],["/archives/2020/page/6/index.html","98e2090950533f07637ed733ea740485"],["/archives/2020/page/7/index.html","9450e78a16451334e178f44753c794ed"],["/archives/2020/page/8/index.html","f5ffc73370c622312fc5c40391d473e2"],["/archives/index.html","bd4b82c7a16dbd5858e3583402d306e1"],["/archives/page/10/index.html","8cc9c51a7ce075e1eb5d82a425cc722c"],["/archives/page/11/index.html","8cc9c51a7ce075e1eb5d82a425cc722c"],["/archives/page/2/index.html","83f1b3613c322a3e7944c076b6913a59"],["/archives/page/3/index.html","efb31f5b9654970c6732ebcaaf8174e8"],["/archives/page/4/index.html","efb31f5b9654970c6732ebcaaf8174e8"],["/archives/page/5/index.html","efb31f5b9654970c6732ebcaaf8174e8"],["/archives/page/6/index.html","efb31f5b9654970c6732ebcaaf8174e8"],["/archives/page/7/index.html","efb31f5b9654970c6732ebcaaf8174e8"],["/archives/page/8/index.html","efb31f5b9654970c6732ebcaaf8174e8"],["/archives/page/9/index.html","efb31f5b9654970c6732ebcaaf8174e8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","3eaf8407359f9573d6cf16c2a41f422e"],["/categories/DataBase/Mysql/index.html","0e2b14541a7d7fc2abaefa840ba3e59d"],["/categories/DataBase/Redis/index.html","dc2d1c693311bc8b0e65b5f6aefaaa90"],["/categories/DataBase/index.html","9fa2d08e93d363e88ac7c5f99e203e71"],["/categories/Git/index.html","a4c65be007adc42191b8dee03e97fd99"],["/categories/Hexo/index.html","63c71715c22e5f6c9e10cf8c068a7ab3"],["/categories/Java/index.html","6678357c13377fe3fe45f5f6b05e51d0"],["/categories/Linux/index.html","3681b67fdf1cea98683125d0b783f2b2"],["/categories/Linux/page/2/index.html","f2d5300bc19865a024be9d3d80a6175c"],["/categories/Python/Anaconda/index.html","bb1bc5a3b8a9141e6bd15c07f35d71c4"],["/categories/Python/Python入门/index.html","57a2f503f892f6c7299fcf695b22379c"],["/categories/Python/Python入门/page/2/index.html","569b5e21f5c5f13aec3b862a26436bdd"],["/categories/Python/Python速成/index.html","b4cd698211e08db9107748f07f60d0b2"],["/categories/Python/Python速成/page/2/index.html","96f7ea6dfead2f99904054fecfb85e23"],["/categories/Python/index.html","a1f7f43bddcefff39352e686f83fa233"],["/categories/Python/page/2/index.html","a42fd89bb4d97de375f9d04b0ddd516e"],["/categories/Python/page/3/index.html","42d432c4cbe5a3f2121856049495a485"],["/categories/Python/page/4/index.html","58145063c7dd72bc245536d96b4d039c"],["/categories/Tools/index.html","ece0f1f7f60ea278a4960a5a0fad997f"],["/categories/index.html","db220430da4d30b5f9e43834fdb1133b"],["/categories/大数据/index.html","a30957fc48963bf71968582a9d1d7ab3"],["/categories/职场/index.html","b0a221328bce3116bef4b8561a0bd163"],["/contact/index.html","179d9a99eaea30ea4e27fba3d42ab998"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","1494ff7077b9993ee627f91687e0821e"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","2024fc0c4b97a91593e82fc07975f8e0"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","2960402d5aa05c47c49d87fee02a4a21"],["/page/10/index.html","620201891184d2a5529a46b47c4bf212"],["/page/11/index.html","4015646b11be9c4581b8001c85930e37"],["/page/2/index.html","bab173ae87327f676f2e2238e7b1eff3"],["/page/3/index.html","5b4b2d385b5a1fb5fd21865fb5ba8f98"],["/page/4/index.html","90e2dfc95177ac331cd061feb5e9372c"],["/page/5/index.html","b31ab28973105ee448ae09facb3240a1"],["/page/6/index.html","460ea542a48d72a4ec474ef0d9d2f4bd"],["/page/7/index.html","dc14fea22af8ea969ca7021b1f4425d4"],["/page/8/index.html","9450ae75018bdce9114ecbe0afcc9285"],["/page/9/index.html","adfc756399e93c818346fa7964ad4721"],["/posts/10415.html","c3dd2a4e2327fd29e27505b0150226a4"],["/posts/10537.html","c986107146e564f167def19bbab81a59"],["/posts/16550.html","d4b7396abcc89db8a51213f20b729a8b"],["/posts/16586.html","d3ace90bf9c8f63bafebaf55a7de8b28"],["/posts/17415.html","0f02a48b03748475ed15646a7a6e0daf"],["/posts/17683.html","79c5d334e3c82430e286eb3eda9a149f"],["/posts/18321.html","43f5d890ac1045b578e9de4ae00190d1"],["/posts/18572.html","551090c95f8cc1ed1f347b2c07b4b1a7"],["/posts/19a88b12.html","5d12af102d7f1fc2d58265969eef3e55"],["/posts/1d1dff0b.html","d53baed4b5c435aa9581f18ea06ddf28"],["/posts/27081.html","175e6410458032646801dfd11606b4f1"],["/posts/2834.html","9d40741464ecb98998e101f80261e08a"],["/posts/29055.html","6e25593ba67cfb96bb1d5925fc577f94"],["/posts/29966d.html","bb8834aa0bba31818c6e6214a5aae104"],["/posts/2a327ad2.html","0c6871bdcc55e2cc54ee1962ecaeab06"],["/posts/2b36786b.html","7b8abe9ab92788458ebfb510d600be8d"],["/posts/30675.html","060758c0d98defc1f39d6f4304f62726"],["/posts/30873.html","5a1cd0f98c2a799cdee9626db44eabcb"],["/posts/32274.html","f82300bf162d7f278a7f29cfcffc2475"],["/posts/34708.html","1d80001759e3a1130f080d948eb23e3c"],["/posts/34771.html","07bfb4413367c1d3c2cc82efc4289c8d"],["/posts/34946.html","0ec50941c66be87728c13c895054cdf4"],["/posts/36204.html","20864d5683757206bc7031a131371cf5"],["/posts/37390.html","741769e94916e15077b4d4d81ff79f18"],["/posts/37426.html","143748061482f4ee5d25665b074c4226"],["/posts/39508.html","6c9c5a0b525361ab045283a340530fad"],["/posts/39704.html","1f7377f6c8aacbda01b1dc5d6c074eb6"],["/posts/3fb6e39.html","d212b11175eddb0e0f8091289b27d4ba"],["/posts/40711.html","4abc14136bfd4441de8a45680ea461e3"],["/posts/41055.html","440f8d5c3a6f48a2e6ddba7835bcb30e"],["/posts/4136.html","58e14e1e860efe5cb042d9b7f66a58e9"],["/posts/41382.html","62987ad7a6876d60444cdb689bf2eddb"],["/posts/43150.html","4781b315e983a7f52fdb14e350d271d6"],["/posts/43249.html","eecd152f69979e858f5824dbd6a9ed72"],["/posts/4354b039.html","9d9aca8a6db3ab37f728835b53933058"],["/posts/43857.html","d7cfdd04d84fc17f2a98f7207ec66a2c"],["/posts/44947.html","1d68ba162fb96035ea1c4da6024c2376"],["/posts/45997.html","761475e35b7fe01d96a59ba40c26a7cb"],["/posts/46411.html","62f955c885b9f2aa86ad9cd159b32680"],["/posts/47220.html","60dd691358fd538be573f078fd1ea73e"],["/posts/47936.html","a64ce523ecd16059c52ba88ae9e29c09"],["/posts/47985.html","e0382eb808dd8a374c5ffe514a827973"],["/posts/47ce27c8.html","02e2622f08e28cb8c125296c08420e46"],["/posts/48061.html","f64b9091bc43d79ee728ad6cb1090aae"],["/posts/4a17b156.html","ec6b18e7916c56543da0d9ff1b12feae"],["/posts/5010.html","a9145a981a9cc56a70ad7924c5c22c5f"],["/posts/51417.html","25235ffe858973cf60209defb308c596"],["/posts/5144bcf.html","ec4ab1c31bf0c8b6d98b2694bdd80f78"],["/posts/520.html","9019534bbfa3d787ccc1d86548f1481d"],["/posts/53d1dcfb.html","bdf2436a3940b652b99dd8698b031f56"],["/posts/55248.html","defdfe5f3c21fff01865817dbbaf9c1e"],["/posts/55860.html","7adf4e1f0b3c3a89a21fe35ded25efc8"],["/posts/58489.html","9e643bae9d9ef12185f94e4a5d09e62e"],["/posts/59346.html","dd4d92402409414b383704f3252f000a"],["/posts/59977.html","8219655e7a9b4f0f80da1e1f95f8a1e3"],["/posts/5c0875d6.html","be5418ccc348848ab33e63443e0a2d61"],["/posts/60364.html","d5ceb3be405207ba4e626fafd49ee5f1"],["/posts/6059.html","fce5b2df6084d09a2b6dc51f6040bd4e"],["/posts/61794.html","b44faf2595e7369074bbbf1c7e80e53d"],["/posts/6275.html","c2ce2eafb533fac5ed3615fd4bb138fd"],["/posts/62910.html","25e7a0f2841d748ae3b34179bf7b15b6"],["/posts/62cf8a54.html","08064bfdca90c2614fbcb0f40c475c32"],["/posts/630.html","fc91fd5c7ff3bc8a65118ec61493977a"],["/posts/64423.html","32b2d27712123813438eb5ce99dcc24c"],["/posts/646dbc2e.html","3865038e69789ec711a0dca212555317"],["/posts/64846.html","791cca20d9b928311688260e0d969263"],["/posts/65aeda8b.html","089b114589445d567d4016b70419bb2c"],["/posts/6637aa6e.html","aa83f6796bc30ce50f0c0741784fae22"],["/posts/6656ad65.html","ebd2a1930b1b5e5414514073dde38a35"],["/posts/6e2faa04.html","82f26c12afa13a8460755d65f2563005"],["/posts/6f521982.html","05ea05dda3c7204d046ab334bd9ac459"],["/posts/71dd948a.html","523c9da4e089fb9beca466a2b16a87eb"],["/posts/773d5f8c.html","e872e1fc3f7b1cf31d428b346d2d0b95"],["/posts/80bb221f.html","e139a246c6a37f3cf925dfc580c757f8"],["/posts/80ca38c0.html","eb4e08c2913a7c892473e46958691050"],["/posts/8573.html","a3f416551f42ed6f094b53e86100b3f0"],["/posts/8589.html","2bdc312106390b4952644fbbeebd469f"],["/posts/88fead8.html","2cc416e073e2b7ed2197224c6b3cf186"],["/posts/8b540f5a.html","20f83f6198c3dfc4733b76dfad644918"],["/posts/8c0ed688.html","7f76d354f27518e03b58c72a5a01b1fd"],["/posts/8f004046.html","243ef1f9827c6ac159128613eedb308d"],["/posts/8f19a96e.html","7bf9540300257d97e2456ab5e491ee1f"],["/posts/901b8cd5.html","951a198d456cf0269012f7e911a96c77"],["/posts/9618.html","a51ea0c1755378c976adbcf4ef7999ab"],["/posts/9812.html","949c700246e21b9275a1d845e3eed150"],["/posts/9e565f9f.html","a15526a658c3e2e3dd83b27df8c10151"],["/posts/a9378efd.html","302f7bb5c22ed02b63d5571f1a5e5cb2"],["/posts/b11c450a.html","1efa267abba6fa6cb55e187b92e9e6c5"],["/posts/b572816f.html","68614051185642e54afc0ddcdeb487a8"],["/posts/b794162c.html","8339c59b3af5595a13026f5390c68e74"],["/posts/b7cd6609.html","2b5e3248919837c7731efca289416807"],["/posts/bae4ff13.html","0563287a59e7566d8677b164bc2f43cd"],["/posts/bb9346ce.html","3f5118130b457d73da886b1389b8f192"],["/posts/c54e1e5.html","7950759d77e3c52d00821b822cd446d2"],["/posts/ca165cd5.html","94d15ccca812c2638e8a700dd424fa2e"],["/posts/cc50857e.html","1cbdf4cf80e736590ea3029d714f471f"],["/posts/cfcef26f.html","51a27a76f19c83d44619be7eb2a9f4e5"],["/posts/e4f3239b.html","5fd3ea8d98ea4b5c6d6f32741ca90e6f"],["/posts/e73bc34f.html","6b3bf76c43518712ac0508fcb75f1c44"],["/posts/ee789513.html","f243342b21f12a5accb2376f061500c6"],["/posts/f893cfd3.html","56ea084d4bb8bedbb62d74e4c444a63f"],["/posts/f8d580eb.html","bd5f6b24303e412c14708e1c9bb6b82f"],["/posts/f92cb63f.html","4719fb449d50c218459035aa1b242974"],["/posts/f9586000.html","4961075ceebb547b7ebf2bab4377762d"],["/posts/fbd6efa0.html","2f09ae1fd2fb2fa3622f5f38fb86973b"],["/posts/ff995e29.html","471c12aa5d41363da087a62c492f4282"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","112620a3afdb8986680c88569b32da8f"],["/tags/Anaconda/index.html","779ac7388c0f8f6312ecec8a25d7cf59"],["/tags/Edge/index.html","7f3720bd06e11a0be586210e5ec08bf1"],["/tags/Git/index.html","e02a3ae78fb3f6b67fae98c16c3060ab"],["/tags/Hadoop/index.html","2c2c6a56914401074f685101ce2f2a42"],["/tags/Hexo/index.html","112b2ae81e9583d84fe86ffad1293177"],["/tags/Java/index.html","d36339cba22c6b06c0bb54a3de9bdd1a"],["/tags/Linux/index.html","47dab225160128acaba17833ed0f5fce"],["/tags/Linux/page/2/index.html","dd54bcc3c7d19192eeb18631de983d43"],["/tags/MapReduce/index.html","cdd50c7f444415e53d703084d425bf1a"],["/tags/Mysql/index.html","c3a2e06472d8929bb91a34bc9ed76155"],["/tags/Python/index.html","c696379e185aabaaad46e8ee1ce4c4dd"],["/tags/Python/page/2/index.html","9de864544e9fdec88e6eaeddb1656e39"],["/tags/Python/page/3/index.html","df16188ff05bf1bf8078611e12cc0a93"],["/tags/Python/page/4/index.html","86e5295774a680c26ee05767fa642001"],["/tags/Python习题/index.html","24be1522602a1651068e844346c5c179"],["/tags/Redis/index.html","8ef3bba00aaebb630c8a7a5c9bc8a29b"],["/tags/Tools/index.html","c71c788eede476ea1a85c7210b71a500"],["/tags/Win10/index.html","614569451cfa05a615695dcc879b428f"],["/tags/Windows/index.html","a70e10917995e92dea8fd788267922fe"],["/tags/index.html","6ef94d0f4a98408f5686965d36849dfc"],["/tags/任务栏神器/index.html","36c530009b6cfe227ce32d83772e4cdd"],["/tags/图床/index.html","8579d81f048c6e112a5dcf72e880f9cb"],["/tags/数仓/index.html","7f62e3b2f1c9b588dca9d48a00efc2ca"],["/tags/数据可视化/index.html","3f90babbf3a35be668c379a65e4e2c74"],["/tags/数据库工具/index.html","88c7a61ff4804a738ef34e3b0731ffc8"],["/tags/毒鸡汤/index.html","c535ef9832b04154aafceb5eadaf2950"],["/tags/环境搭建/index.html","e7712b6474ceebe0ad00145af67f8633"],["/tags/资料分享/index.html","1008d7f5cfdb2c6ec29d100650288ca3"],["/tags/面经/index.html","9f644f201f76a5c07016fe245f3ba57d"],["/tools/index.html","5666f6bc204b84da7da847b5e0d7515f"]];
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
