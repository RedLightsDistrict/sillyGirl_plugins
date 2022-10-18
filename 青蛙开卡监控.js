/**
* @author Aming
 * @encrypt_data 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
* @create_at 2022-09-08 10:48:48
* @description 🐒青蛙开卡脚本监控，自动运行拉库并执行运行脚本命令，具体看插件内说明。
* @title 青蛙开卡监控
* @rule raw gua_opencard[\d]{3}.js
* @priority 100
* @admin true
 * @public false
* @encrypt true
* @version v1.1.7

 * Ps:
 * 本插件需要配合芝士、PM人行shift使用
 * 实测支持青龙v2.10.13，其他版本自测。
 * 已知v2.13.9版本支持订阅运行功能，由@YuanKK优化支持。
 * 本人实测拉库60秒内可完成，如果网络不好拉库时间很长，请参阅下文 自定义区域
 * 有问题反馈https://t.me/AmingSuper
 * 
 * 食用：
 * 0.关注频道https://t.me/s_guaguagua，青龙仓库添加频道置顶拉库命令，任务名称填青蛙拉库或参阅下文 自定义区域
 * 1.对傻妞机器人发ql cron run 青蛙拉库，没反应或无任务自行排查芝士的问题
 * 2.TG创建一个群组，把傻妞bot拉入群里，设置成管理员
 * 3.发送time测试，傻妞回复时间即可，没反应自行排查
 * 4.使用pgm-shift功能转发青蛙频道消息到自己群组内，傻妞自动识别命令执行开卡命令
 * 
 * 自定义：
 * --拉库后运行ql corn run命令等待时间，默认60秒，更改：
 *   set AmingScript guaOpenCardWaitTime ?
 *      -栗子：
 *      -set AmingScript guaOpenCardWaitTime 80
 * --青龙拉库任务名称，默认青蛙拉库，更改：
 *   set AmingScript guaOpenCardKuName ?
 *      -栗子：
 *      -set AmingScript guaOpenCardKuName 青蛙拉库
*/
