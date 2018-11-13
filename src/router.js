import Vue from 'vue'
import Router from 'vue-router'
import $ from './utils'
import config from '@/config'

Vue.use(Router)

// 路由采用二级路由形式 例如首页下面的子目录 => /home/second
// 每个人路由模块第一级必须加上自己的目录名字加以区分
// 公共头部/底部导航栏
const Header = resolve => require(['@/components/Header.vue'], resolve);
const Nav = resolve => require(['@/components/Nav.vue'], resolve);
// 首页
const Home = resolve => require(['@/views/home/index.vue'], resolve);
const Login = resolve => require(['@/views/home/login/login.vue'], resolve);
const Register = resolve => require(['@/views/home/login/register.vue'], resolve);
const AddEquipment = resolve => require(['@/views/home/addequipment/index.vue'], resolve);
const AddScene = resolve => require(['@/views/home/addequipment/addscene.vue'], resolve);
const AddCopy = resolve => require(['@/views/home/addequipment/addcopy.vue'], resolve);
const AddEquipmentDetail = resolve => require(['@/views/home/addequipment/details.vue'], resolve);
const RoomList = resolve => require(['@/views/home/addequipment/roomlist.vue'], resolve);
const RoomDetail = resolve => require(['@/views/home/addequipment/roomDetail.vue'], resolve);
const TempControl = resolve => require(['@/views/home/addequipment/tempcontrol.vue'], resolve);
const EqDetails = resolve => require(['@/views/home/addequipment/eqDEtails.vue'], resolve);
const Second = resolve => require(['@/views/home/second.vue'], resolve);

// 场景
const Scene = resolve => require(['@/views/scene/index.vue'], resolve);
const OneKey = resolve => require(['@/views/scene/onekey/index.vue'], resolve);
const SceneDetail = resolve => require(['@/views/scene/scenedetail/index.vue'], resolve);
const GlobalScene = resolve => require(['@/views/scene/scenedetail/global.vue'], resolve);
const SceneAdd = resolve => require(['@/views/scene/scenedetail/add.vue'], resolve);
const AddAction = resolve => require(['@/views/scene/scenedetail/addAction.vue'], resolve);
const StatusSet = resolve => require(['@/views/scene/scenedetail/statusSet.vue'], resolve);
const Trigger = resolve => require(['@/views/scene/scenedetail/trigger.vue'], resolve);
const Setting = resolve => require(['@/views/scene/scenedetail/setting.vue'], resolve);
const Setting1 = resolve => require(['@/views/scene/scenedetail/setting1.vue'], resolve);
const AddCondition = resolve => require(['@/views/scene/scenedetail/addCondition.vue'], resolve);

// 设备
const Equipment = resolve => require(['@/views/equipment/index.vue'], resolve);
// 设备选项列表
const equipmentList = resolve => require(['@/views/equipment/list.vue'], resolve);
// 设备详情
const equipmentDetail = resolve => require(['@/views/equipment/detail.vue'], resolve);
// 关联账号
const equipmentRelative = resolve => require(['@/views/equipment/relative.vue'], resolve);

// 设备属性
const equipmentProperty = resolve => require(['@/views/equipment/property.vue'], resolve);
// 新增
const addEquipment = resolve => require(['@/views/equipment/addEquipment/index.vue'], resolve);

// 小智主机向导
const masterFirst = resolve => require(['@/views/equipment/addEquipment/masterFirst.vue'], resolve);
const masterSecond = resolve => require(['@/views/equipment/addEquipment/masterSecond.vue'], resolve);
const masterThird = resolve => require(['@/views/equipment/addEquipment/masterThird.vue'], resolve);
const masterFourth = resolve => require(['@/views/equipment/addEquipment/masterFourth.vue'], resolve);
// 小智机器人向导
const robotFirst = resolve => require(['@/views/equipment/addEquipment/robotFirst.vue'], resolve);
const robotSecond = resolve => require(['@/views/equipment/addEquipment/robotSecond.vue'], resolve);
// 摄像机
const cameraFirst = resolve => require(['@/views/equipment/addEquipment/cameraFirst.vue'], resolve);
const cameraSecond = resolve => require(['@/views/equipment/addEquipment/cameraSecond.vue'], resolve);
const cameraThird = resolve => require(['@/views/equipment/addEquipment/cameraThird.vue'], resolve);
const cameraFourth = resolve => require(['@/views/equipment/addEquipment/cameraFourth.vue'], resolve);
// 中继器
const repeaterFirst = resolve => require(['@/views/equipment/addEquipment/repeaterFirst.vue'], resolve);
const repeaterSecond = resolve => require(['@/views/equipment/addEquipment/repeaterSecond.vue'], resolve);
const repeaterThird = resolve => require(['@/views/equipment/addEquipment/repeaterThird.vue'], resolve);

// 小智主机从属设备详情
const EquipMentDetails = resolve => require(['@/views/equipment/addEquipment/equipmentDetails.vue'], resolve);
const SceneDetails = resolve => require(['@/views/equipment/addEquipment/sceneDetails.vue'], resolve);

// 更多 start--sy
const further = resolve => require(['@/views/further/index.vue'], resolve)
const roomlist = resolve => require(['@/views/further/room/roomlist.vue'], resolve)
const management = resolve => require(['@/views/further/room/management.vue'], resolve)
const datasharing = resolve => require(['@/views/further/datasharing.vue'], resolve)
const messageRecord = resolve => require(['@/views/further/messageRecord.vue'], resolve)
const messagedetail = resolve => require(['@/views/further/messagedetail.vue'], resolve)
const networktest = resolve => require(['@/views/further/networktest.vue'], resolve)
const databackup = resolve => require(['@/views/further/databackup.vue'], resolve)
const aboutus = resolve => require(['@/views/further/aboutus.vue'], resolve)
const accountmanagement = resolve => require(['@/views/further/accountmanagement.vue'], resolve)
const security = resolve => require(['@/views/further/security.vue'], resolve)
const setup = resolve => require(['@/views/further/setup.vue'], resolve)
const securityequipment = resolve => require(['@/views/further/securityequipment.vue'], resolve)
const addequipment = resolve => require(['@/views/further/addequipment.vue'], resolve)

export default new Router({
    base: '/',
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
	},
    routes: [
        {
            path: '/',
            redirect: '/home'
        }, {
            path: '/header',
            name: 'Header',
            component: Header
        }, {
            path: '/nav',
            name: 'Nav',
            component: Nav
        },
        // home部分
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                title: '首页'
            }
        }, {
            path: '/home/second',
            name: 'Second',
            component: Second,
            meta: {
                title: 'home-second'
            }
        }, {
            path: '/home/login',
            name: 'Login',
            component: Login,
            meta: {
                title: '登陆'
            }
        }, {
            path: '/home/register',
            name: 'Register',
            component: Register,
            meta: {
                title: '注册'
            }
        }, {
            path: '/home/addeq',
            name: 'AddEquipment',
            component: AddEquipment,
            meta: {
                title: '添加设备'
            }
        }, {
            path: '/home/details',
            name: 'AddEquipmentDetail',
            component: AddEquipmentDetail,
            beforeEnter: (to, from, next) => {
                to.meta.title = config.addEq[to.query.type]
                next()
            }
        }, {
            path: '/home/addscene',
            name: 'AddScene',
            component: AddScene,
            meta: {
                title: '添加情景按钮'
            }
        }, {
            path: '/home/addcopy',
            name: 'AddScene',
            component: AddCopy,
            meta: {
                title: '复制遥控器'
            }
        }, {
            path: '/home/roomlist',
            name: 'RoomList',
            component: RoomList,
            meta: {
                title: '房间列表'
            }
        }, {
            path: '/home/roomdetail',
            name: 'RoomDetail',
            component: RoomDetail,
            meta: {
                title: '房间'
            }
        }, {
            path: '/home/tempcontrol',
            name: 'TempControl',
            component: TempControl,
            meta: {
                title: '温/湿度'
            }
        },
        {
            path: '/home/eqDetails',
            name: 'EqDetails',
            component: EqDetails,
            beforeEnter: (to, from, next) => {
                to.meta.title = config.addEq[to.query.type]
                next()
            }
        },
        // 设备部分
        {
            path: '/equipment',
            name: 'Equipment',
            component: Equipment,
            meta: {
                title: '设备列表'
            }
        }, {
            // 设备选项列表
            path: '/equipment/list',
            name: 'equipmentList',
            component: equipmentList,
            beforeEnter: (to, from, next) => {
                to.meta.title = config.equmentMentList[to.query.type]
                next()
            }
        }, {
            // 设备选项详情
            path: '/equipment/detail',
            name: 'equipmentDetail',
            component: equipmentDetail,
            meta: {
                title: '设备详情'
            }
        }, {
            // 关联账号
            path: '/equipment/relative',
            name: 'equipmentRelative',
            component: equipmentRelative,
            meta: {
                title: '关联账号'
            }
        }, {
            // 设备属性
            path: '/equipment/property',
            name: 'equipmentProperty',
            component: equipmentProperty,
            meta: {
                title: '参数设置'
            }
        }, {
            // 添加设备
            path: '/equipment/addEquipment',
            name: 'addEquipment',
            component: addEquipment,
            meta: {
                title: '添加设备'
            }
        }, {
            // 小智主机向导1
            path: '/equipment/masterFirst',
            name: 'masterFirst',
            component: masterFirst,
            meta: {
                title: '添加设备'
            }
        }, {
            // 小智主机向导2
            path: '/equipment/masterSecond',
            name: 'masterSecond',
            component: masterSecond,
            meta: {
                title: '添加设备'
            }
        }, {
            // 小智主机向导3
            path: '/equipment/masterThird',
            name: 'masterThird',
            component: masterThird,
            meta: {
                title: '添加设备'
            }
        }, {
            // 小智主机向导4
            path: '/equipment/masterFourth',
            name: 'masterFourth',
            component: masterFourth,
            meta: {
                title: '添加设备'
            }
        }, {
            // 小智机器人1
            path: '/equipment/robotFirst',
            name: 'robotFirst',
            component: robotFirst,
            meta: {
                title: '添加设备'
            }
        }, {
            // 小智机器人2
            path: '/equipment/robotSecond',
            name: 'robotSecond',
            component: robotSecond,
            meta: {
                title: '添加设备'
            }
        }, {
            // 摄像机1
            path: '/equipment/cameraFirst',
            name: 'cameraFirst',
            component: cameraFirst,
            meta: {
                title: '新增摄像机'
            }
        }, {
            // 摄像机2
            path: '/equipment/cameraSecond',
            name: 'cameraSecond',
            component: cameraSecond,
            meta: {
                title: '新增摄像机'
            }
        }, {
            // 摄像机3
            path: '/equipment/cameraThird',
            name: 'cameraThird',
            component: cameraThird,
            meta: {
                title: '新增摄像机'
            }
        }, {
            // 摄像机4
            path: '/equipment/cameraFourth',
            name: 'cameraFourth',
            component: cameraFourth,
            meta: {
                title: '新增摄像机'
            }
        }, {
            // 中继器1
            path: '/equipment/repeaterFirst',
            name: 'repeaterFirst',
            component: repeaterFirst,
            meta: {
                title: '选择主机'
            }
        }, {
            // 中继器2
            path: '/equipment/repeaterSecond',
            name: 'repeaterSecond',
            component: repeaterSecond,
            meta: {
                title: '智能配置'
            }
        }, {
            // 中继器3
            path: '/equipment/repeaterThird',
            name: 'repeaterThird',
            component: repeaterThird,
            meta: {
                title: '智能配置'
            }
        },
        {
            // 小智主机从属设备详情
            path: '/equipment/equipMentDetails',
            name: 'EquipMentDetails',
            component: EquipMentDetails,
            beforeEnter: (to, from, next) => {
                to.meta.title = config.equmentMentList[to.query.type]
                next()
            }
        },
        {
            // 小智主机从属设备详情
            path: '/equipment/sceneDetails',
            name: 'SceneDetails',
            component: SceneDetails,
            beforeEnter: (to, from, next) => {
                to.meta.title = '面板1'
                next()
            }
        },
        // 场景
        {
            path: '/scene',
            name: 'Scene',
            component: Scene,
            meta: {
                title: '场景客厅'
            }
        },
        {
            path: '/scene/onekey',
            name: 'OneKey',
            component: OneKey,
            beforeEnter: (to, from, next) => {
                to.meta.title = config.sceneTitle[to.query.tab]
                next()
            }
        },
        {
            path: '/scene/detail',
            name: 'SceneDetail',
            component: SceneDetail,
            meta: {
                title: '场景名称'
            }
        },
        {
            path: '/scene/global',
            name: 'GlobalScene',
            component: GlobalScene,
            meta: {
                title: '全局场景'
            }
        },
        {
            path: '/scene/add',
            name: 'SceneAdd',
            component: SceneAdd,
            meta: {
                title: '添加执行'
            }
        },
        {
            path: '/scene/addaction',
            name: 'AddAction',
            component: AddAction,
            meta: {
                title: '添加动作'
            }
        },
        {
            path: '/scene/statusSet',
            name: 'StatusSet',
            component: StatusSet,
            meta: {
                title: '开关状态设置'
            }
        },
        {
            path: '/scene/trigger',
            name: 'Trigger',
            component: Trigger,
            meta: {
                title: '触发条件'
            }
        },
        {
            path: '/scene/setting',
            name: 'Setting',
            component: Setting,
            meta: {
                title: '设置'
            }
        },
        {
            path: '/scene/setting1',
            name: 'Setting1',
            component: Setting1,
            meta: {
                title: '设置'
            }
        },
        {
            path: '/scene/addCondition',
            name: 'AddCondition',
            component: AddCondition,
            meta: {
                title: '附加条件'
            }
        },
        // 更多部分
        {
            path: '/further',
            name: 'further',
            component: further,
            meta: {
                title: '更多'
            }
        }, {
            path: '/further/roomlist',
            name: 'roomlist',
            component: roomlist,
            meta: {
                title: '房间列表'
            }
        }, {
            path: '/further/management',
            name: 'management',
            component: management,
            beforeEnter: (to, from, next) => {
                to.meta.title = config.roomType[to.query.type]
                next()
            }
        }, {
            path: '/further/datasharing',
            name: 'datasharing',
            component: datasharing,
            meta: {
                title: '数据分享'
            }
        }, {
            path: '/further/messageRecord',
            name: 'messageRecord',
            component: messageRecord,
            meta: {
                title: '消息记录'
            }
        }, {
            path: '/further/messagedetail',
            name: 'messagedetail',
            component: messagedetail,
            meta: {
                title: '消息详情'
            }
        }, {
            path: '/further/networktest',
            name: 'networktest',
            component: networktest,
            meta: {
                title: '网络测试'
            }
        }, {
            path: '/further/databackup',
            name: 'databackup',
            component: databackup,
            meta: {
                title: '数据备份'
            }
        }, {
            path: '/further/aboutus',
            name: 'aboutus',
            component: aboutus,
            meta: {
                title: '关于我们'
            }
        }, {
            path: '/further/accountmanagement',
            name: 'accountmanagement',
            component: accountmanagement,
            meta: {
                title: '账号中心'
            }
        }, {
            path: '/further/security',
            name: 'security',
            component: security,
            meta: {
                title: '安防'
            }
        }, {
            path: '/further/setup',
            name: 'setup',
            component: setup,
            meta: {
                title: '设置'
            }
        }, {
            path: '/further/securityequipment',
            name: 'securityequipment',
            component: securityequipment,
            meta: {
                title: '安防设备'
            }
        }, {
            path: '/further/addequipment',
            name: 'addequipment',
            component: addequipment,
            meta: {
                title: '添加设备'
            }
        }
    ]
})