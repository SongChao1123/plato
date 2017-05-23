import { configure, use, run } from 'platojs/system'

import logger from 'modules/logger'
import persist from 'modules/persist'
import request from 'modules/request'
import i18n from 'modules/i18n'
import validator from 'modules/validator'
import config from 'modules/config'
import faq from 'modules/faq'
import demo from 'modules/demo'
import about from 'modules/about'
import user from 'modules/user'
import core from 'modules/core'

import Root from './views/root'
import translations from 'static/i18n/zh.json'

/**
 * 全局配置
 */
configure({
  // 项目名称
  name: 'PLATO',
  // 项目版本号
  version: '1.0',
  // 系统自动将 component 挂载到 element
  element: '#app',
  component: Root
})

/**
 * Use Modules
 */

/**
 * 调试相关
 */
__DEV__ && use(logger)

/**
* 被依赖的模块
* 移除可能会影响部分功能
*/
use(request)
use(i18n, { translations })
use(validator)

/**
 * 普通模块
 */
use(config)
use(user, { prefix: '/' })
use(faq, { prefix: '/' })
use(demo)
use(about)

/**
 * 核心模块
 * 路由与鉴权，以及持久化
 */
use(core)
use(persist)

/**
 * Run Modules
 */

run(({ router }) => {
  __PROD__ || console.log('%c[PLATO] %cLet\'s go!',
    'font-weight: bold', 'color: green; font-weight: bold')

  /**
   * Let's go!
   */
  router.afterEach(() => {
    // 解决 iOS 焦点 BUG
    const activeElement = document.activeElement
    if (activeElement && activeElement.nodeName !== 'BODY') {
      activeElement.blur()
    }
  })
})
