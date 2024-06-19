import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Products",
    hash: "#products",
  },
  {
    name: "Robotics",
    hash: "#robotics",
  },
  {
    name: "Training",
    hash: "#training",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const categories = [
  { name: "Technology", value: "technology" },
  { name: "Business", value: "business" },
  { name: "Entertainment", value: "entertainment" },
  { name: "Sports", value: "sports" },
  { name: "General", value: "general" },
];


export const pos_AndroidLink ={ zh:[
  { name: "前台登入收银系统", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=2" },
  { name: "收银端交接班", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=1" },
  { name: "重打收银小票", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=3" },
  { name: "收银端做退款", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=4" },
  { name: "收银端为商品做售罄", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=5" },
  { name: "收银端恢复库存", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=6" },
  { name: "收银端价格调整", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=7" },
  { name: "收银端挂桌到桌号一般用于后支付，以及电话订单", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=8" },
  { name: "收银端挂单完成支付", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=9" },
  { name: "收银端收钱，一般用于外卖", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=10" },
  { name: "收银端口味选择", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=11" },
  { name: "收银端同步数据，后台有很多更新需要此操作", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=12" },
  { name: "收银端修改商品名称", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=13" },
  { name: "收银端打开钱箱", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=14" },
  { name: "在收银端使用暂存挂单", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=15" },
  { name: "在收银端添加厨打IP或KDS IP", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=16" },
  { name: "在收银端查看主机网络IP地址（网线）", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=17" },
  { name: "在收银端查看主机IP地址（Wi-Fi）", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=18" },
  { name: "在副收银上设置主机IP地址", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=19" },
  { name: "在收银端设置商品厨房打印机", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=20" },
  { name: "在收银端添加新的商品", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=21" },
  { name: "在收银端设置商品厨房打印机", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=22" },
  { name: "在收银端拆单", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=23" }
],
  en:[
    { name: "Login to POSPAL System", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=2" },
    { name: "Handover on POS", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=1" },
    { name: "Reprint Tax Invoice", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=3" },
    { name: "Refund on POSPAL end", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=4" },
    { name: "Set sold out item on POS end", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=5" },
    { name: "Restore Stock on POS", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=6" },
    { name: "Change or Increase Price on POS", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=7" },
    { name: "Hold order under Table No,Normally Using for Pay after or Phone Takeaway", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=8" },
    { name: "Complete Order under Table No.", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=9" },
    { name: "Order and Go on POS", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=10" },
    { name: "Choose Item Flavour on POS", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=11" },
    { name: "Data synchronization on POS when did lots of change on Back-end", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=12" },
    { name: "Change Item names on POS", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=13" },
    { name: "Open Cash Drawer on POS", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=14" },
    { name: "Temporary Holding Order on POS", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=15" },
    { name: "Bind Kitchen IP address or KDS IP address on POS", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=16" },
    { name: "Check Ethernet IP Address on Main POS Machine", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=17" },
    { name: "Check Wi-Fi IP address on Main POS", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=18" },
    { name: "Add Main POS IP Address on Secondary POS", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=19" },
    { name: "Bind Item to specified Kitchen Printer on POS end", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=20" },
    { name: "Add new Item on POS end", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=21" },
    { name: "Items connect to Kitchen Printer", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=22" },
    { name: "Split Bill", value: "playlist?list=PLARAy0Gh8lsbqO01WbNTGylCQd3oOJtoe&si=bRzfMbDVlUI7E4cr&index=23" },
  ]
}


