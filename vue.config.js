//配置
// module.exports = {
//     pages: {
//         index: {
//             entry: './src/pages/index/index.js',
//             template: './src/pages/index/index.html',
//             fileName: 'index.html',
//             title:'首界面'
//         },
//         page2: {
//             entry: './src/pages/page2/page2.js',
//             template: './src/pages/page2/page2.html',
//             fileName: 'page2.html',
//             title: 'page2界面'
//         },
//         page3: {
//             entry: './src/pages/page3/page3.js',
//             template: './src/pages/page3/page3.html',
//             fileName: 'page3.html',
//             title: 'page3界面'
//         }
//     }
// }

// 多页配置 start--------------------------------------------------
let path = require('path')
let glob = require('glob')
//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
	// let entries = {}, basename, tmp, pathname, appname;
	let entries = {}, basename, tmp, pathname;
	glob.sync(globPath).forEach(function(entry) {
		basename = path.basename(entry, path.extname(entry));
		// console.log('em>>>>entry:',entry)
		tmp = entry.split('/').splice(-3);
		// console.log('em>>>>tmp:',tmp)
		pathname = basename; // 正确输出js和html的路径
		// console.log('em>>>>pathname:',pathname,'--tmp:',tmp);
    // entries[pathname] = {
		// 	entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
		// 	template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
		// 	title:  tmp[2],
		// 	filename: tmp[2]
		// };
		entries[pathname] = {
			entry: './src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
			template: './src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
			title:  tmp[1]+'标题',
			filename: tmp[2]
		};
	});
	return entries;
}
let pages = getEntry('./src/pages/**?/*.html');
console.log(pages)
const DIST_PATH = path.resolve(__dirname, 'dist');
// 多页配置 End-----------------------------------------------------------

module.exports = {
    // baseUrl type:{string} default:'/' 
    // 将部署应用程序的基本URL。
    // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
    // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.
    
    publicPath: process.env.NODE_ENV === 'production' ? '/online/' : '/',
    
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    
    outputDir: DIST_PATH,
    assetsDir: 'static',
    pages: pages,
    // pages:{ type:Object,Default:undfind } 
   /*
    构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
    个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
    的字符串，
    注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
   */
    // lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: true,
    // productionSourceMap：{ type:Bollean,default:true } 生产源映射
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: false,
    // devServer:{type:Object} 3个属性host,port,https
    // 它支持webPack-dev-server的所有选项

    devServer: {
        contentBase: DIST_PATH,
        port: 8084,//8080, // 端口号
        host: '192.168.19.32',//'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
          '/api': {
          target: '<url>',
          ws: true,
          changeOrigin: true
          }
        }, // 配置多个代理
        // before: app => {}
    }
}