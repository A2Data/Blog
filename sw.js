/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","117c5ea05fedf37c61b77a5be5e6199d"],["/Creator-said/index.html","ca379bb8d3c18bdb366485ee0cbda19a"],["/README.html","36f69704e240c5e76d21d6a8dd4a1b03"],["/about/index.html","d98bf5f5b339c222fcf3feb0e7d92785"],["/archives/2019/09/index.html","8b50dcfac1647f3e25e99068782dbdd0"],["/archives/2019/11/index.html","c205b1d1ac6139c9ac48b49db50356d1"],["/archives/2019/12/index.html","41aa8f3c48c5796a097f4cc666f459ff"],["/archives/2019/12/page/2/index.html","26635912bd778e1f5e73d39794b2190e"],["/archives/2019/12/page/3/index.html","a70da8c118f25c4160c999d35f0e5ab2"],["/archives/2019/index.html","80a1598ba5946157f200897ef4e10062"],["/archives/2019/page/2/index.html","b991a0a24eff09793e26d48ea40da41f"],["/archives/2019/page/3/index.html","dc212ab9141614d74e7901c3147000b0"],["/archives/2020/03/index.html","bc9f067d82fb04f882571c69134fba28"],["/archives/2020/04/index.html","36094f40149c4b26d33a10a2d29f0837"],["/archives/2020/04/page/2/index.html","58964fb7ead4c7c7d34ee3a96f49de1c"],["/archives/2020/05/index.html","bec18a350281d98f4216d3793839f12c"],["/archives/2020/05/page/2/index.html","1021476c48866365882d6067fc5ddbd8"],["/archives/2020/06/index.html","979fb7a970d1ae5879d75b3d3d998bec"],["/archives/2020/07/index.html","8bcb84e72dba88adf188554900bf3dda"],["/archives/2020/08/index.html","e82cb9f3a1b48d8bf377e25fef69604f"],["/archives/2020/09/index.html","d31bf4bf93f28854f5dede349a5fcbba"],["/archives/2020/09/page/2/index.html","9d78eedc7d3ba26b24479acfd40fffe5"],["/archives/2020/11/index.html","ae9dbb0687adf7c18e3e0d43f976a32a"],["/archives/2020/11/page/2/index.html","6da4ebddc8c5a7b1f05b7b8876bfa130"],["/archives/2020/12/index.html","2174915f7a70fa0ce92b6dd9764f55cd"],["/archives/2020/index.html","b24787b299b721c7f0cd1d550736f05f"],["/archives/2020/page/2/index.html","f13877f8659bc4dcc8fc021ebca24572"],["/archives/2020/page/3/index.html","376a72b7c7c5db5382a00067f9dcc0ae"],["/archives/2020/page/4/index.html","d3d757dc2988080788a2541a8ece208c"],["/archives/2020/page/5/index.html","6311a65a68de6659a95ccc051e145d3f"],["/archives/2020/page/6/index.html","38decf796aa05ca15617e4915ab873f6"],["/archives/2020/page/7/index.html","7a35e79f3de7701a263213354ee186a1"],["/archives/2020/page/8/index.html","686625083c63905fc2bffa4eb5ff19e1"],["/archives/index.html","7c35eb881d3e68084fc8d4e7c2d52877"],["/archives/page/10/index.html","3998c036defef46d1f2bbdff2fff70f4"],["/archives/page/11/index.html","3998c036defef46d1f2bbdff2fff70f4"],["/archives/page/2/index.html","1bc784b7205c7a0cf7492b81f0c1b1f7"],["/archives/page/3/index.html","1bc784b7205c7a0cf7492b81f0c1b1f7"],["/archives/page/4/index.html","1bc784b7205c7a0cf7492b81f0c1b1f7"],["/archives/page/5/index.html","1bc784b7205c7a0cf7492b81f0c1b1f7"],["/archives/page/6/index.html","1bc784b7205c7a0cf7492b81f0c1b1f7"],["/archives/page/7/index.html","3998c036defef46d1f2bbdff2fff70f4"],["/archives/page/8/index.html","3998c036defef46d1f2bbdff2fff70f4"],["/archives/page/9/index.html","3998c036defef46d1f2bbdff2fff70f4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","1a7a94bdbe54871b94691613f5372467"],["/categories/DataBase/Mysql/index.html","65dce8f7b7cff5812231f0c76dcd0540"],["/categories/DataBase/Redis/index.html","70bc9e971c0c8f6873d936ca719293f9"],["/categories/DataBase/index.html","3b7e3a70cae0c3c253cca93ff3366919"],["/categories/Git/index.html","d6026c9feed4671e8c94db83734ee3e7"],["/categories/Hexo/index.html","3177b7f6169b62e6a770933ce6234ca0"],["/categories/Java/index.html","81c43afbf181abe60cccc03d2d975ef8"],["/categories/Linux/index.html","be098b80259cf749c070f23e9c226385"],["/categories/Linux/page/2/index.html","dacf238793dda67fd113fd3727600870"],["/categories/Python/Anaconda/index.html","b7e07505d2b788337cd086a9e6c8fdb5"],["/categories/Python/Python入门/index.html","8a43c4d198a6aa0ec2ec11dbf5a45b8f"],["/categories/Python/Python入门/page/2/index.html","2e964eb805ea2d6606d4c33b9d0311be"],["/categories/Python/Python速成/index.html","fac4a53781ec641bdcdef3db1bbaf74a"],["/categories/Python/Python速成/page/2/index.html","f13b339d4f43bcc1b1d5863f7d9712d0"],["/categories/Python/index.html","f89b27c3abf302164fa1ee2bf94e628c"],["/categories/Python/page/2/index.html","10999d04b30e83a0d45d092d5aaba324"],["/categories/Python/page/3/index.html","739740235562959ddde24d9143ac92c1"],["/categories/Python/page/4/index.html","3deced4ec4505e9003dcd66a4852b69c"],["/categories/Tools/index.html","22e349934f906fd097f590eb1de16e73"],["/categories/index.html","cd8f15a146ac61878cb425cd2b0c43fe"],["/categories/大数据/index.html","403f0ed99bb8c044bbc96c65b04dc724"],["/categories/职场/index.html","c7ef1d8b3bed4ee631ec0bf9c62de9f6"],["/contact/index.html","9765e6ce680cc8e6c3d2032ad515cb81"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","69d361cbab6d371f3e6121775612070a"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","b4a1d41b83b3082ac282d1521606a6c3"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","0107e353efdbe29d908967a347eef20b"],["/page/10/index.html","2c3a3b5980762f3d78608e7482b11d14"],["/page/11/index.html","f8cac6448ab165a18bc60cf4785578a5"],["/page/2/index.html","a84b16d115ab8126936b54e63931b482"],["/page/3/index.html","55eeff540e2a6a5bf6bd0b2f52006d77"],["/page/4/index.html","d6bf75efd03e092193bd28da5a9ba260"],["/page/5/index.html","ab3e89db5728d126b7b3556b9df9d8d3"],["/page/6/index.html","f223e89e90005f17aa5d10ac7d34ec30"],["/page/7/index.html","37fbb96e9f5fa27f14407304749d40e0"],["/page/8/index.html","d13f87ebd7436da760bdead068594723"],["/page/9/index.html","1761790f48043aa75cc718c16df398bd"],["/posts/10415.html","a4254eb904b1fc72b369612db10e61bd"],["/posts/10537.html","1c28bd4f2a420021ba14237c5ea2e1b9"],["/posts/16550.html","dbc8d58771ebc23fcc78f1de17922a78"],["/posts/16586.html","b3f6476274cdcaa86ab53bc4f375f3b9"],["/posts/17415.html","973c63c00d03daa22e4907bda5180cac"],["/posts/17683.html","9fbd47787af4356db717540857c544a4"],["/posts/18321.html","4f31495c0cc4f1b4e7a168b8e3935ad5"],["/posts/18572.html","4d78ea246b8f02bf7359c68e5c370084"],["/posts/19a88b12.html","538ae4acd5ff7ab3e1cc9e2bd9c6180c"],["/posts/1d1dff0b.html","551aef5dc2f9205bcad101282f9a0ad2"],["/posts/27081.html","7bc89f54f273bf6e84993d4666a34563"],["/posts/2834.html","11641dfdbc02bb5e45765fa6a041f9e7"],["/posts/29055.html","37234d0213c94f7ff54a07e128d8cd37"],["/posts/29966d.html","39ed7b877bfc826a2c8b751e6228879b"],["/posts/2a327ad2.html","85ffdd2ea47fd38a1afa36564c692079"],["/posts/2b36786b.html","3a16e48674948e1ca2db829f34206219"],["/posts/30675.html","60fbb0bf642b1e13d780eabdb7e7b92f"],["/posts/30873.html","d98563d53d0f762500b73949b45dc294"],["/posts/32274.html","3759270a9ee342792cff595ddd17d532"],["/posts/34708.html","51e7e5015b6a4f2d3c7791e3fb6f2757"],["/posts/34771.html","03749f2005ba1e27d710c405b6870aaa"],["/posts/34946.html","fe4a3c79f9d09e5fe20d03580eb972bd"],["/posts/36204.html","b33415d61c420ff32aa6d85eb9bc6b1e"],["/posts/37390.html","486ce70c10f5353cb27dec6da83a1ae0"],["/posts/37426.html","55e633a2e6e98014a125ef116b9e4536"],["/posts/39508.html","4ac6bce5142aa0af4f751514ee8c8c10"],["/posts/39704.html","3f1f8e0289d0c721f77db1d3f19a0473"],["/posts/3fb6e39.html","6bd540179356746a5aebd076ca39714b"],["/posts/40711.html","2f6251b76d20e96c94d52787c51b15b3"],["/posts/41055.html","8906fce72be6cf57078a7cc37863ef99"],["/posts/4136.html","0227dee889268afa29dfe55c451548a7"],["/posts/41382.html","b512158a5987dc94e4949bce5d6138c1"],["/posts/43150.html","652b66bf1c4b0f95cc6bb751a796b7e6"],["/posts/43249.html","22c532fb73e9b3f84fbd3fc4c2d95e9d"],["/posts/4354b039.html","6a4fd4899f1c844d1a0ac46e2bd71c9b"],["/posts/43857.html","22a63571c892563f19d5e958156c469f"],["/posts/44947.html","110b09889aa2d6cc6ebc63cd2baa9e0a"],["/posts/45997.html","e42a141e6c08c653195bb9213bfc9c94"],["/posts/46411.html","e296477d6c10ef6e8a94fc4650da9e66"],["/posts/47220.html","98d8310d80239bf6fde1a925924dc815"],["/posts/47936.html","60ad9a9909d7497b8c42cfceec605edc"],["/posts/47985.html","d348774712c14433e6606b6276b265de"],["/posts/47ce27c8.html","684e3ff44222b89947df8e2714280f0d"],["/posts/48061.html","0a0117288a6796e51b3095ceb5342cc6"],["/posts/4a17b156.html","6e7c693853bbf081f864f214020451c1"],["/posts/5010.html","6b783ce33056ba6a4e631ffcfb59424b"],["/posts/51417.html","f7e2b858361c8cc28b3b936d9359a75d"],["/posts/5144bcf.html","ec59aced216d9a6c5b9d7578c53837d4"],["/posts/520.html","e832073f68115e36d927fc4967023db6"],["/posts/53d1dcfb.html","312dd77108ef38a0afb1f4e3c6ff0e55"],["/posts/55248.html","46f49ae70142edeae8efc2b0e3dfe802"],["/posts/55860.html","0a28fb0bd3f6a87efcf50cc98cda7621"],["/posts/58489.html","6bf9f7d6c03b16d5be39f52531f7f739"],["/posts/59346.html","8258312cee3cf12b91947c45631f253d"],["/posts/59977.html","7b10b7ea9a4eb21384d37dfa58afe79f"],["/posts/5c0875d6.html","7e9ae9bf12316c8dc94dc1591bed220d"],["/posts/60364.html","4d113bc128181fe819dbbe78f2de2abc"],["/posts/6059.html","1d0e06624fa207bcf1e775e1f0a9c86f"],["/posts/61794.html","492487dcc3898d41e35af8e0de5aa859"],["/posts/6275.html","1cc9887189d7d7a83d41ecde972e7fb9"],["/posts/62910.html","2c2c5e54f9de475a6311db716fe3c8b2"],["/posts/630.html","fe24240c332641b484d87b08d72dc5f2"],["/posts/64423.html","3fa4ad7d41796ce707587ff23e806739"],["/posts/646dbc2e.html","eb7b9f0643b8456b115f64f8cacfdf5b"],["/posts/64846.html","6f901aedcad730e3c64c2d6fffe9d02d"],["/posts/65aeda8b.html","3439a5ac92b17c3e70f7d7c58bf229be"],["/posts/6637aa6e.html","36f53cf8bc31c35dd827f5b6d0abfaf1"],["/posts/6656ad65.html","0de078af27826d48a6a1239e32035a49"],["/posts/6e2faa04.html","e3ed450de7d32ae5368c0353d2296ff5"],["/posts/6f521982.html","2a3c9c6f328ae97073b8d4b6f0e397a5"],["/posts/71dd948a.html","92c882640073d088455fcdaedcea4162"],["/posts/773d5f8c.html","e01c6800629290aa879b7ac3216a6cde"],["/posts/80bb221f.html","03446507b70600f60ab282ab6357ae6c"],["/posts/80ca38c0.html","7238f12b9547403e14eb3e1a50b69b16"],["/posts/8573.html","744bbde974af98c3d096ff61ad0d609f"],["/posts/8589.html","b72cf46cb1982db6cdc5f8e29feae0ce"],["/posts/88fead8.html","9bbf685fb627391b1ac4c3400c5a8c69"],["/posts/8b540f5a.html","60fe741ffbe33c7fe9d827646a474787"],["/posts/8c0ed688.html","663f9b343a9d4a9909c81c42d0af8636"],["/posts/8f004046.html","6de2ad33f1397c5bd8bbf3ed27bf6295"],["/posts/8f19a96e.html","de57651795b6df67f69bf36a754c5b2f"],["/posts/901b8cd5.html","936ae7682ad727f7a6c915a3f45dda82"],["/posts/9618.html","3cd0da3ee9029f1bc13bb906abd9efb5"],["/posts/9812.html","8a23718d4d741c3c9cd265f1e06f10de"],["/posts/9e565f9f.html","1c7079579c708058e42a5c6d18367a5d"],["/posts/a9378efd.html","a3962e108d73945cb7ca4313949e5a33"],["/posts/b11c450a.html","49cbb9953c895c58175e52f763ea1fc0"],["/posts/b572816f.html","2a7405250ea56769567ed0fa59149d67"],["/posts/b794162c.html","4370f48711f64b80a82f880a50a660a9"],["/posts/b7cd6609.html","30452950a3a9aa337257c39ebe806985"],["/posts/bae4ff13.html","cb0f177d84be85a057c9bc975bd8a723"],["/posts/bb9346ce.html","551788120bf3e77082095e4536f64e5b"],["/posts/c54e1e5.html","c0d2c656bdd8ae5bd41ce68b480a742a"],["/posts/ca165cd5.html","3e7a1756c75d89d8792373ef608cb401"],["/posts/cc50857e.html","02147b0217dd76995a1405f70def04c3"],["/posts/cfcef26f.html","e94d24fde09a94bfa2898e44bfa8b966"],["/posts/e4f3239b.html","7ada2ac68dd65871686228c92d8d4c17"],["/posts/e73bc34f.html","2479e19601903b9fdad79069955d1cee"],["/posts/ee789513.html","87164bd8ca92a55b519d0ad3c4a23dfd"],["/posts/f8d580eb.html","1c5f5ca4b9e3c12d98d8bcb453787a6e"],["/posts/f92cb63f.html","e9bb028344d8af2a67272ca61a9e22f1"],["/posts/f9586000.html","13018501a8206bbaf92e9229e26de378"],["/posts/fbd6efa0.html","c84a2c1a546f11f9b3d6704b58a088b3"],["/posts/ff995e29.html","ef38465dac6474d666f7af07f2505419"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","11ccda119a7ebea78c9facbcb309f35a"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","0accd1e2d7ead1c8c58cfefc41cf2c88"],["/relax/mofang/index.html","f12a625bf295cc99e849e24cdf98d7b3"],["/sw-register.js","18926631d80aafad1d2705a6221c6096"],["/tags/Anaconda/index.html","4259f64b3cd38db58498f92c92b4d05e"],["/tags/Edge/index.html","090a686d70572784b5669cfa202bcb19"],["/tags/Git/index.html","6d8247c5671d6b7fc1b5e8729f88eb28"],["/tags/Hadoop/index.html","cce0878e723dd72bc2e24884c457b97b"],["/tags/Hexo/index.html","bde267a1be8c91fffe1a955f3a636c72"],["/tags/Java/index.html","7f9e52ed90f76f059c9898361f1da76d"],["/tags/Linux/index.html","b7d4a275ef1545983979dcf4c707aa84"],["/tags/Linux/page/2/index.html","f78fbddea0bc483172eef5e088ebcace"],["/tags/MapReduce/index.html","2fd419d5f8d4f2aee9b549154fc30ba6"],["/tags/Mysql/index.html","7a73f317f398983fa0eccd078ef10927"],["/tags/Python/index.html","e4e4c08bf5b8f953119a28fa3cfee99a"],["/tags/Python/page/2/index.html","29687fbe70f216b3485023ebece79000"],["/tags/Python/page/3/index.html","ebd4988ed125aec05aee904ad76fb5fb"],["/tags/Python/page/4/index.html","99572164c9e01d0779f3d6e17973b1bb"],["/tags/Python习题/index.html","10c547008087cf9b1859bc5e2184193f"],["/tags/Redis/index.html","b90e08cefeb8fd74821d3bdcc6c845fc"],["/tags/Tools/index.html","692abe07690b71c98354c65caeda47c1"],["/tags/Win10/index.html","b1c93ff47fbe4c12eafae93e379f8236"],["/tags/Windows/index.html","79ec5963d1e7d394b76974ca90e907a3"],["/tags/index.html","cfa910f8d23a73e0162b520a1de30768"],["/tags/任务栏神器/index.html","6dbec458cf0b2313c94c66455a6bfebf"],["/tags/图床/index.html","e742bb3adae4fe6e3d541897bb96c826"],["/tags/数仓/index.html","58d2748fe990391d6e8bf37a411d5d4d"],["/tags/数据可视化/index.html","f07e60ee8ede59a1e9148a8e42acf5a9"],["/tags/数据库工具/index.html","b621c9d64515b9afb05583598eada56a"],["/tags/毒鸡汤/index.html","b61719ff06f28b28609ddfc2fbcee52f"],["/tags/环境搭建/index.html","6d118efbdd65877a1617e74637cbeacf"],["/tags/资料分享/index.html","6ab734844152ad34f2d874f08471e6ac"],["/tags/面经/index.html","7b9d82a394fd75e86f150ddc3ad8d9fd"],["/tools/index.html","0f7ecf7c163e2248c9e5cff6edf8eb13"]];
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
