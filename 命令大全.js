/**
 * @title 命令大全
 * @origin 红灯区
 * @create_at 2022-09-15 17:59:45
 * @rule 命令
 * @description 记录命令
 * @author Aming
 * @version v1.0.0
 * @public false
 * @admin true
 */

const s = sender
const par = s.param(1)
var link = '：' //连接符

var basics = { //基础命令
    'set ? ? ?': '*设置存储桶-名-值',
    'delete ? ?': '*删除存储桶-名',
    'get ? ?': '*获取存储桶-名的值',
    'time': '查看傻妞时间.',
    'myuid': '我的ID.',
    'groupCode': '群聊ID.',
    'name': '傻妞昵称.',
    'machineId': '*机器码.',
    'replies': '*群回复列表',
    'mode': '查看主从模式',
    'started_at': '*启动时间',
    'compiled_at': '*上次更新时间',
    '重启': '*重启傻妞',
    '升级': '*升级傻妞',
    'init web': '*安装面板',
    '更新面板': '*升级面板',

}

var cheese = {//芝士命令
    'ql spy': '监控功能配置',
    'ql spy status': '查看监控任务状态',
    'ql spy clear': '清除记录',
    '青龙管理': '管理青龙容器',
    'ql cron run ?': '运行任务',
    'ql cron stop ?': '停止任务',
    'ql cron logs ?': '查看日志',
    'ql cron delete ?': '删除任务',
    'ql cron disable ?': '禁用任务',
    'ql cron enable ?': '开启任务',
    'ql cron status ?': '查看脚本状态',
    '登录': 'Ark登录',
}

var plug = {//安装的插件命令
    '小爱?': '呼唤小爱同学',
    '店铺签到转码?': '提取并格式化签到线报',
    'epic限时免费': '查看EPIC平台免费游戏',
    '翻译?/ ?': '翻译中英文',
    '来个美女': '读题',
    '来个二次元': '读题',
    '字符替换?': '替换消息中的某个字符串',
    'run ?': '在消息中运行傻妞插件代码',
    '微博热搜': '查看微博热搜',
    '知乎热点': '查看知乎热点',
    '来个猫咪': '读题',
    '视频解析 ?': '',
    '摸鱼': '读题',
    '彩虹屁': '读题',
    '成语接龙': '读题',
    '?油价': '查询城市油价',
    '历史今天': '读题',
    '舔狗语录': '读题',
    '百科 ?': '搜百科',
}

var basics = Object.entries(basics), newBasics = ''
var cheese = Object.entries(cheese), newCheese = ''
var plug = Object.entries(plug), newPlug = ''

for (let i = 0; i < basics.length; i++) {
    newBasics += basics[i].join(link) + "\n"
}
for (let i = 0; i < cheese.length; i++) {
    newCheese += cheese[i].join(link) + "\n"
}
for (let i = 0; i < plug.length; i++) {
    newPlug += plug[i].join(link) + "\n"
}

s.reply(`基础命令：\n${newBasics}\n芝士命令：\n${newCheese}\n扩展命令(插件)：\n${newPlug}`)
