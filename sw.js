/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a38a34c6122143f19a19a8c4c6c9a3d2"],["/Creator-said/index.html","7bb2c92bcb5be93a6151577c2ba6c608"],["/README.html","36f69704e240c5e76d21d6a8dd4a1b03"],["/about/index.html","967b10ff03ba68d2f901177e7af09120"],["/archives/2019/09/index.html","5e0c4e7212e46a32d50b5b1e30b5c483"],["/archives/2019/11/index.html","552dcc6789ab880cf39a308b31ac6a36"],["/archives/2019/12/index.html","5a2b75542573bb5410dcea80b0dd4345"],["/archives/2019/12/page/2/index.html","a4bbd5525b7023d41b1d132182b62933"],["/archives/2019/12/page/3/index.html","99e3431511098b9a302db38728f0993f"],["/archives/2019/index.html","b21e1eed3ac6dd2b4d9b271df4ff7b44"],["/archives/2019/page/2/index.html","6b2aa35df387edfba363434a9a5675f9"],["/archives/2019/page/3/index.html","3198a99d947ea7d2077eac5adf4e765b"],["/archives/2020/03/index.html","1f60ade152e0ec73da3991892aaf4f0f"],["/archives/2020/04/index.html","c263a8b16fe3f443a60996c44fed42e7"],["/archives/2020/04/page/2/index.html","97db67544162dc232da4bf682b0383bc"],["/archives/2020/05/index.html","5f0c4b92134ec78d3076ecaa2c253f99"],["/archives/2020/05/page/2/index.html","286180a99a35067b7d1d894443ea5319"],["/archives/2020/06/index.html","99252d5823fda3ba7ca335b5552023ee"],["/archives/2020/07/index.html","43e6b6e3dca688f6506caf007f4c1aba"],["/archives/2020/08/index.html","32821ac5f4037da69d1500014b651ac8"],["/archives/2020/09/index.html","3be3cffe708b9061b04bf2748c6e8f40"],["/archives/2020/09/page/2/index.html","0df39162cb0913ee82c10fa2ef85d024"],["/archives/2020/11/index.html","cf51b1ae81008c3e2ff43eab45d28a98"],["/archives/2020/11/page/2/index.html","26e7f58f597a421fbaa15e512316cd60"],["/archives/2020/12/index.html","4706a26cdda281ed0bd9f91e22894ea6"],["/archives/2020/index.html","8f100189b24766f745620479b2c7f167"],["/archives/2020/page/2/index.html","b04d601eab263a1aaf49d9de91b65307"],["/archives/2020/page/3/index.html","891bd49109b2a9d8b90538cc14aa9793"],["/archives/2020/page/4/index.html","fffb38d1b9fe94b8dcd61bd32eb77615"],["/archives/2020/page/5/index.html","c126b1011f43d6503971913a5ce805bf"],["/archives/2020/page/6/index.html","711b2b6f0c9d12c8e4b4d77a36d93ddf"],["/archives/2020/page/7/index.html","1137c842d09e90a138d5f90eab026a73"],["/archives/2020/page/8/index.html","06364a0d8fc9ff9420dbd0e38651b780"],["/archives/index.html","8ff5a26c83888705da027696c5147d62"],["/archives/page/10/index.html","e0f4d0f22914403a56385e8213b17d31"],["/archives/page/11/index.html","e0f4d0f22914403a56385e8213b17d31"],["/archives/page/2/index.html","b6c67a3cd2cf87d2defdedc49283c976"],["/archives/page/3/index.html","b6c67a3cd2cf87d2defdedc49283c976"],["/archives/page/4/index.html","b6c67a3cd2cf87d2defdedc49283c976"],["/archives/page/5/index.html","b6c67a3cd2cf87d2defdedc49283c976"],["/archives/page/6/index.html","b6c67a3cd2cf87d2defdedc49283c976"],["/archives/page/7/index.html","b6c67a3cd2cf87d2defdedc49283c976"],["/archives/page/8/index.html","b6c67a3cd2cf87d2defdedc49283c976"],["/archives/page/9/index.html","b6c67a3cd2cf87d2defdedc49283c976"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","3eaf8407359f9573d6cf16c2a41f422e"],["/categories/DataBase/Mysql/index.html","db3ce33649d18a33ef9585784df094f8"],["/categories/DataBase/Redis/index.html","cbe5d53fee6e828c552a29a3327c71f6"],["/categories/DataBase/index.html","436de9c1edfa7fcf6a708e99c5888f14"],["/categories/Git/index.html","cfb85f96360a58754b4e5baf646e6e49"],["/categories/Hexo/index.html","460108a0980073b536d5f3018a674e10"],["/categories/Java/index.html","b83944ad8361ed6bb051e1662ad241e4"],["/categories/Linux/index.html","c40126bf2e57660f005b68d391132f3b"],["/categories/Linux/page/2/index.html","5590e44ef9a0bc4b248239366a505dea"],["/categories/Python/Anaconda/index.html","e9e481e4b0c613d1ade617e4470de03e"],["/categories/Python/Python入门/index.html","f37bf02b93c487975a37c285a62964d7"],["/categories/Python/Python入门/page/2/index.html","038b1886c6f83cbd10d3b1f729194ecb"],["/categories/Python/Python速成/index.html","267b4648d680478170c3be998eb424b7"],["/categories/Python/Python速成/page/2/index.html","6e91e5a0c6aaf4cd97407e8e822a9e8b"],["/categories/Python/index.html","a82808d761e300beb944b6f8d5691a7f"],["/categories/Python/page/2/index.html","e437ce3439c403206e05d2a276d56bc2"],["/categories/Python/page/3/index.html","ac7c5cde9d5d190cca2f81fb42bf6da5"],["/categories/Python/page/4/index.html","ebda1b3e65cc2529a7577be1e54c43a8"],["/categories/Tools/index.html","8f8e67572b30910dddd2f9f5efb97c79"],["/categories/index.html","db220430da4d30b5f9e43834fdb1133b"],["/categories/大数据/index.html","7b8f149c130900ef636b4eb8866c61eb"],["/categories/职场/index.html","0eee0d6bacc01ea9f7c03ac7120f0646"],["/contact/index.html","179d9a99eaea30ea4e27fba3d42ab998"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","1494ff7077b9993ee627f91687e0821e"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","5ad7896262b91a54798bd5f3441ee12e"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","2960402d5aa05c47c49d87fee02a4a21"],["/page/10/index.html","947b4f4ea0aaa147de888b1454afa88e"],["/page/11/index.html","744dc24ad8c6690560ba7c164d4f14df"],["/page/2/index.html","b39f79b30d661ba5711a0d7ad02cf73b"],["/page/3/index.html","973ffce85e79dad12f99663641c6b3a7"],["/page/4/index.html","dc8123dec4e041a55a6ffd6b085bbdc1"],["/page/5/index.html","44d14ec77dd9a834fa3cdb2d531c76e5"],["/page/6/index.html","5f8359ccdfb93fce4c0a5d5166aff600"],["/page/7/index.html","e9599b8bb3cb1d61d20f2f5bb5affc42"],["/page/8/index.html","76495f620530167d51d018c525b439ff"],["/page/9/index.html","2d130aaa98de0ceaf3cb4e5f2f891309"],["/posts/10415.html","432382800954437308ab053f5756a591"],["/posts/10537.html","df83f3d8e8986f4d4a2901e1d438bd4e"],["/posts/16550.html","d10f9aed4a2b738b4a787116bc173b5a"],["/posts/16586.html","65b17facff84edb08de22759af93f9c4"],["/posts/17415.html","0f02a48b03748475ed15646a7a6e0daf"],["/posts/17683.html","37f7164c81e624815026e046e848d1f7"],["/posts/18321.html","43f5d890ac1045b578e9de4ae00190d1"],["/posts/18572.html","551090c95f8cc1ed1f347b2c07b4b1a7"],["/posts/19a88b12.html","c5d25923f2c99e9e17dc70d22326dc2c"],["/posts/1d1dff0b.html","2203fb477db5b504475181ce10c770fd"],["/posts/27081.html","c51beb6390a22357c1dc520fd8acad7b"],["/posts/2834.html","a4b8abb4ce3fbb8e30978333f68cac5a"],["/posts/29055.html","ca53f5402b75c366cd7186cb9ea4acd7"],["/posts/29966d.html","96e4e1e837a32e1e5e2b34af6fe05ea0"],["/posts/2a327ad2.html","06f9105664c0dc640e0e9de9b65f96c5"],["/posts/2b36786b.html","7b8abe9ab92788458ebfb510d600be8d"],["/posts/30675.html","7fb8fc4b2d534116dc4fc8200b340b9b"],["/posts/30873.html","8821f1499037416f741482aa578a4ee0"],["/posts/32274.html","c683a7b7c60f8699d02d66a9652067c4"],["/posts/34708.html","1d80001759e3a1130f080d948eb23e3c"],["/posts/34771.html","590dac6c8fa34b1136a83aa29c53588f"],["/posts/34946.html","407a8dde084d4a2ba232b562c01555dd"],["/posts/36204.html","20864d5683757206bc7031a131371cf5"],["/posts/37390.html","81c509434e6e258d4d90d0b70cd7cdeb"],["/posts/37426.html","17c43f0884d5614109a9053c045d0b89"],["/posts/39508.html","6c9c5a0b525361ab045283a340530fad"],["/posts/39704.html","017837faf0f403c28b34b481c4aa62a7"],["/posts/3fb6e39.html","3f617e81185178c82c1b4d529504b763"],["/posts/40711.html","045893fe6304c75af7f9cd44035ab28d"],["/posts/41055.html","ede84374b39693828e4f4b33fb47a4e7"],["/posts/4136.html","523a6bcdf466cbf5bcf17b9f900f50bb"],["/posts/41382.html","a047a566875735497be139a1361c4bd2"],["/posts/43150.html","4781b315e983a7f52fdb14e350d271d6"],["/posts/43249.html","e05c06d2b777213a0a9a5d502f082d4b"],["/posts/4354b039.html","28c5c4461275584121b1846478a2678b"],["/posts/43857.html","d7cfdd04d84fc17f2a98f7207ec66a2c"],["/posts/44947.html","98d5b5bfdb941900df82280c3273f4f0"],["/posts/45997.html","761475e35b7fe01d96a59ba40c26a7cb"],["/posts/46411.html","98ded3d0f37c1c5447e5e4fd81673805"],["/posts/47220.html","da43ed0c673cc3529d4707ff381c6a8d"],["/posts/47936.html","1d2b4da2a0141c5b0b75f3d6b580cc5f"],["/posts/47985.html","9d1b7ed0529ed81c08bb180543d9b9b2"],["/posts/47ce27c8.html","a65d082f54eadf877fe55d32dcc25191"],["/posts/48061.html","f64b9091bc43d79ee728ad6cb1090aae"],["/posts/4a17b156.html","e7d5c277d6215e5663f9c071a59202a3"],["/posts/5010.html","6e1d30a0c15b53f90eec70dc2d87a66a"],["/posts/51417.html","5ba80306ec5b1c62d18efaa417db4d3c"],["/posts/5144bcf.html","57af7f6af24d7b7ad2b921ba96a7977b"],["/posts/520.html","0e29c1d50f8d221a99bb6aa9cc8c0360"],["/posts/53d1dcfb.html","27793d47bfbc1f0782e48dfb26ada15c"],["/posts/55248.html","d1f688950347775400cd0c6fc0c84bd0"],["/posts/55860.html","e416dbd42c1d3f3ba81ef722d512475c"],["/posts/58489.html","fcc222cd8c5d0a92600ce0105253043b"],["/posts/59346.html","dd5774070c4f9e0bf590908161246919"],["/posts/59977.html","59c7c16103b3688c624cb29e9170f90d"],["/posts/5c0875d6.html","197b9993bccd9d0350a49304b59280b8"],["/posts/60364.html","c3e8728d23838ba9ac71ec1c59a25c54"],["/posts/6059.html","b0cadaa19b3895056fb9837037b3a629"],["/posts/61794.html","6278dbb180a093dae8572941f13c53d6"],["/posts/6275.html","601ff13c489d13bc30ccae9b89352155"],["/posts/62910.html","25e7a0f2841d748ae3b34179bf7b15b6"],["/posts/630.html","f3802fcb723ec61518b9eb21e890ecd8"],["/posts/64423.html","32b2d27712123813438eb5ce99dcc24c"],["/posts/646dbc2e.html","bd5f5cf926999f597779d8b818e98246"],["/posts/64846.html","791cca20d9b928311688260e0d969263"],["/posts/65aeda8b.html","1a76ca1c5c96935c52f61f2aa9b1896f"],["/posts/6637aa6e.html","71cd268f515d82092555fc6621121d0f"],["/posts/6656ad65.html","b5b543e9bc1d031f414feda1f5ddee1b"],["/posts/6e2faa04.html","7c9339a6260c7a2e3255f167c3660f14"],["/posts/6f521982.html","016d1a154c6d7665663428e03a61f95e"],["/posts/71dd948a.html","115733890d1ec82439195a3fd2ad5493"],["/posts/773d5f8c.html","64a1fa63aec76204c62a1843adccd551"],["/posts/80bb221f.html","0bd82512fb49a112d82a94240d79ca6e"],["/posts/80ca38c0.html","b9cbab71f4685af78a887610019a7836"],["/posts/8573.html","527d2bba04aaecc0e91369e8151be46b"],["/posts/8589.html","514ea32a3d824081de38e3fd1e41f32e"],["/posts/88fead8.html","8e018623006973ae652e0111579353b0"],["/posts/8b540f5a.html","c44c1a1932a5adef0a82da1d3f0e744f"],["/posts/8c0ed688.html","d7050b7e54be16787819a4a7563dc36e"],["/posts/8f004046.html","243ef1f9827c6ac159128613eedb308d"],["/posts/8f19a96e.html","9d7809a232ebb63b9b34a3292a635eea"],["/posts/901b8cd5.html","1045e2b4e5fb8a982ce73886c5a1d3a5"],["/posts/9618.html","a51ea0c1755378c976adbcf4ef7999ab"],["/posts/9812.html","949c700246e21b9275a1d845e3eed150"],["/posts/9e565f9f.html","a15526a658c3e2e3dd83b27df8c10151"],["/posts/a9378efd.html","0c21c50d36ad1cae222efd2fe7e7f1eb"],["/posts/b11c450a.html","8f1bfa6f57d6fd11670fe361cf3e0b4f"],["/posts/b572816f.html","5ab643217d63a0ee1dad9724ba95bb54"],["/posts/b794162c.html","7905538360bb2ba98061d15f8e5f651e"],["/posts/b7cd6609.html","d5ab9cd0a4d87f531a1c2c55c8853090"],["/posts/bae4ff13.html","0563287a59e7566d8677b164bc2f43cd"],["/posts/bb9346ce.html","5825031a8db7bbab41179efb55a33748"],["/posts/c54e1e5.html","1d4231dd2dc540a172cf0395f4f7c675"],["/posts/ca165cd5.html","c1e4c84a394d5e48f1e4da7e3ced0278"],["/posts/cc50857e.html","ea9ba83c027e6fd6c146444eab8da3f0"],["/posts/cfcef26f.html","51a27a76f19c83d44619be7eb2a9f4e5"],["/posts/e4f3239b.html","9cda925d49add4a4f3d1350f452c9c31"],["/posts/e73bc34f.html","d47998ff908f726b81020d40ec958518"],["/posts/ee789513.html","f243342b21f12a5accb2376f061500c6"],["/posts/f8d580eb.html","ca2d41e0a3275616e06c5ff00fa6028d"],["/posts/f92cb63f.html","c0ab833792e8a287d7a2a745647449ea"],["/posts/f9586000.html","6956074d9bb5ec4f711478d4c9f00683"],["/posts/fbd6efa0.html","7cb9875df5569bc8272c28431fc37317"],["/posts/ff995e29.html","d492eddba26ef21647e572901a4e5d8e"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","67d00a8e29d478008e48adf96a8ed737"],["/tags/Anaconda/index.html","25fd92b2337e49eb665e9a382c9e0a47"],["/tags/Edge/index.html","ad6abc0bce75d0eab87a02160350446b"],["/tags/Git/index.html","6ffc005d38caa075fdf468e560593a38"],["/tags/Hadoop/index.html","dcac56764db4e408256b707dbc4ca2e1"],["/tags/Hexo/index.html","3066f68d6200c484697e7bec493b635a"],["/tags/Java/index.html","c9e8823f98ec335f98c405c6dc00a05f"],["/tags/Linux/index.html","f40f57c5d54ea129dcf752d7f7ba392c"],["/tags/Linux/page/2/index.html","88b47f9a53e3025301d506af6f64ad36"],["/tags/MapReduce/index.html","7de4ec8877f86e60c09a4f3f66e562d5"],["/tags/Mysql/index.html","3dbe69c9e70f12df0cbb32b539421ad5"],["/tags/Python/index.html","624c469a10b98670168bc97d713e2461"],["/tags/Python/page/2/index.html","0cccb96536249b8bc0115e744f9a798a"],["/tags/Python/page/3/index.html","5a057f63a8807e62b956e2f5fc54a5ea"],["/tags/Python/page/4/index.html","097eec2e215ea3ed2fbcf4d2710b0a6e"],["/tags/Python习题/index.html","d026718e0c8d99550c005ac020dd34b5"],["/tags/Redis/index.html","db282b87cd8741279a67426efb30d1fc"],["/tags/Tools/index.html","7fe078e38859754495d308acdd595e07"],["/tags/Win10/index.html","0db77c5779c77ae486a34a2cdddfe38a"],["/tags/Windows/index.html","f8092ab34c1fd28b37cba912e103505a"],["/tags/index.html","d6f4f837e4c5ad67dba0be4e2ac8350f"],["/tags/任务栏神器/index.html","31ba58db8dd9f3cbdd7150f2ca1ed991"],["/tags/图床/index.html","ed5c51e0e0e8988befc7a8668efa7e6f"],["/tags/数仓/index.html","2d27cb17cc48b4c3af28fb0daf7c7474"],["/tags/数据可视化/index.html","b8ca8aaf6ac1c110370637e50ca894ba"],["/tags/数据库工具/index.html","eab5aab20dd0539184ef2f7fc8d0aacb"],["/tags/毒鸡汤/index.html","b667d5c4a94f1b4560c52d0077170d2c"],["/tags/环境搭建/index.html","430e260cda9c5106c46c8ac3b110bcf6"],["/tags/资料分享/index.html","874bdc4ef82c5f0c267928373f1604fa"],["/tags/面经/index.html","6b60a9d4a7f013710bef20e71245f5d5"],["/tools/index.html","5666f6bc204b84da7da847b5e0d7515f"]];
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
