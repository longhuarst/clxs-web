import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



Vue.use(Element)


import {Button} from 'element-ui'
Vue.use(Button)


import {Form, FormItem} from 'element-ui'
Vue.use(Form)
Vue.use(FormItem)

import {Input} from 'element-ui'
Vue.use(Input)


//导入弹框组件
import {Message} from 'element-ui'
Vue.prototype.$message = Message

