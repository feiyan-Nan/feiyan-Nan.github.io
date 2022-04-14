const fs = require('fs');
const { resolve } = require('.');
const globalConfig = require('../../scripts/globalConfig');

/**
 * @name 获取侧边栏，通过传入菜单获取
 * 传入文件名字，将会读取文件夹名字
 * @param {String} dirname 
 * 示例：getFile('Vue')
 */
function getSidebar (menuArr) {
  const sidebar = {};
	menuArr.forEach(item => {
		sidebar[item.link] = [{
			text: item.text,
			// collapsable: false,
			children: getFile(item.text)
		}]
	})
  return sidebar;
}

function getFile (dirname) {
	// 获取文件夹里面的所有文件
	let fileList = fs.readdirSync(resolve(globalConfig.rootDir, 'frontend', dirname))
	// 去除index和文件夹
	fileList = fileList.filter(item => (!item.includes('index') && item.includes('.')))
	return fileList.map(item => {
    const fileName = item.replace(/\.md/, '');
    return {
      text: fileName,
      link: `/src/frontend/${dirname}/${fileName}`
    }
  })
}

/**
 * @name 通过传入的name名字去src获取对应的文件夹，并转换为menu下拉菜单
 * @param {String} dirname 
 * @return [{text: dirname, link: '/src/dirname'}]
 */
function byDirNameGetMenu(dirname){
	let fileList = fs.readdirSync(resolve(globalConfig.rootDir, dirname))
	return fileList.map(item => ({text: item, link: `/src/${dirname}/${item}/`}))
}

// 通过文件夹获取菜单
const frontendLinks = byDirNameGetMenu('frontend')
// 获取frontend的左侧的sidebar
const sidebar = getSidebar(frontendLinks)

module.exports = { sidebar, frontendLinks };
