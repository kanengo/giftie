
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '!!七夕抽奖大放送!!',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '这是我们的第一个七夕', },
    { key: 's', wording: '实在不知道送什么', },
    { key: 'd', wording: '就来个抽奖环节吧！', },
  ],
  // 最终解释权归属人
  owner: 'n宝',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '金器(2000左右)', alias: '金器', image: '/images/1.png',  description: '「富贵人家标配」',weight:1000,},
  { key: 'w', name: '省外游', alias: '省外游', image: '/images/2.png',  description: '“不要太远，请个假周末去”' ,weight:1000,},
  { key: 'e', name: '金器(1000左右)', alias: '小黑瓶套装', image: '/images/1.png',  description: '「小富也是富」' ,weight:1000,},
  { key: 'r', name: '520红包', alias: '520', image: '/images/6.png',  description: '“你爱我啊我爱你”' ,weight:1000,},
  { key: 't', name: '重在参与!', alias: '重在参与', image: '/images/5.png',  description: '「重在参与，运气留到下次！」' ,weight:1000,},
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“一生一世，生生世世!”' ,weight:1000,},
  { key: 'u', name: '再来一次！', alias: '再来一次！', image: '/images/7.png',  description: '“再来！好运集中！”' ,weight:1000,},
  { key: 'i', name: '52.0红包', alias: '戴森', image: '/images/6.png',  description: '「仪式一下，也是体面!!!」' ,weight:1000,},
];
