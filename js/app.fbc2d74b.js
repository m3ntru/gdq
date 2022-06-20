(function(){"use strict";var t={3790:function(t,e,a){var s=a(144),i=a(4139),n=a(9132);s.Z.use(n.Z);var r=new n.Z({});s.Z.filter("time",(t=>t.toString().padStart(2,0))),s.Z.filter("timeformat",(t=>`${t.getHours().toString().padStart(2,0)}:${t.getMinutes().toString().padStart(2,0)}`)),s.Z.filter("dateformat",(t=>`${(t.getMonth()+1).toString().padStart(2,0)}/${t.getDate().toString().padStart(2,0)}`));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app",[a("twitchPlayer"),a("v-container",{staticClass:"mb-4"},[a("audio",{attrs:{id:"BaoAlert"}},[a("track",{attrs:{kind:"captions"}}),a("source",{attrs:{src:"https://raw.githubusercontent.com/runtogether-tw/gdq/gh-pages/sound/"+t.alertselect+".mp3",type:"audio/mpeg"}})]),a("v-tabs",{attrs:{"icons-and-text":"",centered:"",dark:"","background-color":"teal","show-arrows":"","prev-icon":"fas fa-arrow-circle-left","next-icon":"fas fa-arrow-circle-right"}},[a("v-tabs-slider",{attrs:{color:"teal lighten-5"}}),a("v-tab",{attrs:{href:"#menu-1"}},[t._v(" Next "),a("v-icon",[t._v("fas fa-gamepad")])],1),a("v-tab",{attrs:{disabled:!t.isLatestEvent,href:"#menu-2"}},[t._v(" Notification "),a("v-icon",[t._v("fas fa-bell")])],1),a("v-tab",{attrs:{href:"#menu-3"}},[t._v(" Info "),a("v-icon",[t._v("fas fa-info-circle")])],1),a("v-tab-item",{attrs:{value:"menu-1"}},[a("v-card",{staticClass:"cardbg pa-2",attrs:{flat:""}},[t.loading?t._e():a("v-layout",{class:{column:t.$vuetify.breakpoint.xsOnly},attrs:{wrap:"","justify-space-around":"","align-center":""}},[a("v-flex",{class:{"mb-2":t.$vuetify.breakpoint.xsOnly},attrs:{xs5:"",sm4:"",md3:""}},[a("v-card",{class:{layout:t.$vuetify.breakpoint.xsOnly}},[a("v-img",{staticClass:"card__pic",attrs:{src:t.getPic(t.sdList[t.nowplaying].name)}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-start":"",flexbox:""}},[a("span",{staticClass:"card__title headline white--text"},[t._v("Now Playing")])])],1)],1)],1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-layout",{attrs:{wrap:"","justify-space-around":""}},[a("v-flex",{staticClass:"twolines",attrs:{xs12:""}},[t._v(t._s(t.sdList[t.nowplaying].name))]),a("v-flex",{attrs:{xs12:""}},[t._v(t._s(t.sdList[t.nowplaying].tw.tw)),""!=t.sdList[t.nowplaying].tw.sr?a("a",{attrs:{"aria-label":"Speedrun.com",href:"https://www.speedrun.com/"+t.sdList[t.nowplaying].tw.sr,target:"_blank"}},[a("span",[t._v(" ")]),a("v-icon",[t._v("fas fa-trophy")])],1):t._e()]),a("v-flex",{staticClass:"grey--text time--small",attrs:{xs12:""}},[t._v(" 準備時間: "+t._s(t.sdList[t.nowplaying].setup_time)+" ")]),a("v-flex",{staticClass:"grey--text time--small",attrs:{xs12:""}},[t._v(" 預計時間: "+t._s(t.sdList[t.nowplaying].run_time)+" ")])],1)],1)],1)],1),a("v-flex",{attrs:{sm3:"","hidden-xs-only":""}},[a("v-card",[a("v-img",{staticClass:"card__pic",attrs:{src:t.twJSON["logo"]}}),a("v-card-title",{attrs:{"primary-title":"","pa-3":""}},[a("v-layout",{attrs:{wrap:"","justify-space-around":""}},[a("v-flex",{staticClass:"grey--text",attrs:{xs12:""}},[t._v("現在時間")]),a("v-flex",{staticClass:"headline",attrs:{xs12:""}},[t._v(" "+t._s(t._f("timeformat")(t.nowdate))+" ")]),a("v-flex",{attrs:{xs12:""}},[t._v(t._s(t._f("dateformat")(t.nowdate)))])],1)],1)],1)],1),a("v-flex",{class:{"mb-2":t.$vuetify.breakpoint.xsOnly},attrs:{xs5:"",sm4:"",md3:""}},[t.nowplaying+1<=t.sdList.length-1?a("v-card",{class:{layout:t.$vuetify.breakpoint.xsOnly}},[a("v-img",{staticClass:"card__pic",attrs:{src:t.getPic(t.sdList[t.nowplaying+1].name)}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-start":"",flexbox:""}},[a("span",{staticClass:"card__title headline white--text"},[t._v("UP Next")])])],1)],1)],1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-layout",{attrs:{wrap:"","justify-space-around":""}},[a("v-flex",{staticClass:"twolines",attrs:{xs12:""}},[t._v(t._s(t.sdList[t.nowplaying+1].name))]),a("v-flex",{attrs:{xs12:""}},[t._v(t._s(t.sdList[t.nowplaying+1].tw.tw)),""!=t.sdList[t.nowplaying+1].tw.sr?a("a",{attrs:{"aria-label":"Speedrun.com",href:"https://www.speedrun.com/"+t.sdList[t.nowplaying+1].tw.sr,target:"_blank"}},[a("span",[t._v(" ")]),a("v-icon",[t._v("fas fa-trophy")])],1):t._e()]),a("v-flex",{staticClass:"grey--text time--small",attrs:{xs12:""}},[t._v(" 準備時間: "+t._s(t.sdList[t.nowplaying+1].setup_time)+" ")]),a("v-flex",{staticClass:"grey--text time--small",attrs:{xs12:""}},[t._v(" 開始時間: "+t._s(t._f("dateformat")(t.sdList[t.nowplaying+1].starttime))+" "+t._s(t._f("timeformat")(t.sdList[t.nowplaying+1].starttime))+" ")])],1)],1)],1):t._e()],1)],1),a("v-layout",{attrs:{"justify-center":"","align-center":"","mt-3":""}},[a("v-flex",{attrs:{xs5:""}},[a("v-select",{ref:"eventSelect",attrs:{items:t.eventItem,label:"活動選擇","item-text":"text","item-value":"id","append-icon":"fas fa-sort-down"},model:{value:t.eventID,callback:function(e){t.eventID=e},expression:"eventID"}})],1),a("v-btn",{attrs:{color:"teal",title:"重新整理資訊"},on:{click:function(e){return t.refresh()}}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fas fa-sync-alt")])],1)],1)],1)],1),a("v-tab-item",{attrs:{value:"menu-2"}},[a("v-card",{staticClass:"cardbg pa-2",attrs:{flat:""}},[a("v-layout",{attrs:{wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:""}},[0===t.notification.length?a("div",[t._v("你可以點擊節目表上的鬧鐘按鈕來加入提醒清單，我們將在節目開始時提醒您。")]):t._e(),a("div",[t._v("請依照自己喜好調整通知系統強度。")]),a("div",[t._v("使用提醒功能時，建議將此頁面獨立成一個視窗，放置於背景分頁會因為瀏覽器節省資源而不播放背景音效。")])]),a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{href:"https://github.com/runtogether-tw/ical/blob/master/README.md#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95",target:"_blank"}},[t._v("匯入Google日曆教學")])],1),a("v-flex",{attrs:{xs4:""}},[a("v-select",{staticClass:"input-group--focused",attrs:{items:t.alertitem,label:"提醒強度","item-text":"state","item-value":"alerttext","append-icon":"fas fa-sort-down"},model:{value:t.alertselect,callback:function(e){t.alertselect=e},expression:"alertselect"}})],1),t.sysNotiSupport?a("v-flex",{attrs:{xs4:""}},[a("v-switch",{attrs:{label:"啟用系統桌面通知"},model:{value:t.sysNoti,callback:function(e){t.sysNoti=e},expression:"sysNoti"}})],1):t._e(),a("v-flex",{attrs:{xs12:""}},[a("div",[t._v("- 提醒清單 -")])])],1),t.loading?t._e():t._l(t.notification,(function(e){return a("v-layout",{key:e,staticClass:"slayout",class:{end:t.sdList[e].starttime.getTime()<t.nowdate.getTime()},attrs:{wrap:""}},[a("v-flex",{staticClass:"sbl",attrs:{xs1:""}},[a("div",[t._v(t._s(t._f("dateformat")(t.sdList[e].starttime)))])]),a("v-flex",{staticClass:"sbl",attrs:{xs1:""}},[a("div",[t._v(t._s(t._f("timeformat")(t.sdList[e].starttime)))])]),a("v-flex",{staticClass:"sbl",attrs:{xs4:""}},[a("div",[t._v(t._s(t.sdList[e].name))])]),a("v-flex",{staticClass:"sbl",attrs:{xs4:""}},[a("div",[t._v(t._s(t.sdList[e].runners))])]),a("v-flex",{staticClass:"sbl slast",attrs:{xs2:""}},[a("div",[t._v(t._s(t.sdList[e].category))])]),a("v-flex",{staticClass:"sbl",attrs:{xs1:""}},[a("div",[t._v(t._s(t.sdList[e].console))])]),a("v-flex",{staticClass:"sbl",attrs:{xs4:""}},[a("div",[t._v(t._s(t.sdList[e].tw.tw))]),""!=t.sdList[e].tw.sr?a("a",{attrs:{href:"https://www.speedrun.com/"+t.sdList[e].tw.sr,target:"_blank"}},[a("span",[t._v(" ")]),a("v-icon",[t._v("fas fa-trophy")])],1):t._e()]),a("v-flex",{staticClass:"sbl",attrs:{"align-center":"",xs5:""}},[a("div")]),a("v-flex",{staticClass:"sbl slast",attrs:{xs2:""}},[a("v-btn",{attrs:{color:"pink darken-3"},on:{click:function(a){return t.DeleteNotification(e)}}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("far fa-bell-slash")])],1)],1)],1)}))],2)],1),a("v-tab-item",{attrs:{value:"menu-3"}},[a("v-card",{staticClass:"cardbg pa-2",attrs:{flat:""}},[a("v-flex",{attrs:{xs12:""}},[t._v("彩學台:")]),a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{title:"Twitch頻道",color:"teal",href:"https://www.twitch.tv/tetristhegrandmaster3",target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fab fa-twitch")])],1),t.twJSON["google_link"]?a("v-btn",{attrs:{title:"Google節目表單",color:"teal",href:t.twJSON["google_link"],target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fas fa-th-list")])],1):t._e()],1),a("v-flex",{attrs:{xs12:""}},[t._v("GDQ官方:")]),a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{title:"Twitch頻道",color:"teal",href:"https://www.twitch.tv/gamesdonequick",target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fab fa-twitch")])],1),a("v-btn",{attrs:{color:"teal",title:"Youtube頻道",href:"https://www.youtube.com/user/gamesdonequick/videos",target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fab fa-youtube")])],1),a("v-btn",{attrs:{title:"官方網站",color:"teal",href:"https://gamesdonequick.com/",target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fas fa-gamepad")])],1),a("v-btn",{attrs:{title:"節目表",color:"teal",href:"https://gamesdonequick.com/schedule/",target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("far fa-calendar-alt")])],1),a("v-btn",{attrs:{title:"捐款系統",color:"teal",href:"https://gamesdonequick.com/tracker/event/"+t.twJSON["gdq_link"],target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fas fa-money-check-alt")])],1),a("v-btn",{attrs:{title:"抽獎獎品",color:"teal",href:"https://gamesdonequick.com/tracker/prizes/"+t.twJSON["gdq_link"],target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fas fa-trophy")])],1),a("v-btn",{attrs:{title:"解禁項目",color:"teal",href:"https://gamesdonequick.com/tracker/bids/"+t.twJSON["gdq_link"],target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fas fa-gavel")])],1)],1),a("v-flex",{attrs:{xs12:""}},[t._v("其他:")]),a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{title:"GDQ VOD",color:"teal",href:"http://gdqvods.com/",target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fas fa-video")])],1),a("v-btn",{attrs:{title:"GDQ Stat",color:"teal",href:"http://gdqstat.us/",target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fas fa-chart-bar")])],1),a("v-btn",{attrs:{title:"/r/Speedrun",color:"teal",href:"https://www.reddit.com/r/speedrun/",target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fab fa-reddit-alien")])],1),a("v-btn",{attrs:{title:"The Yetee紀念T恤",color:"teal",href:"https://theyetee.com/collections/"+this.twJSON["yetee_link"],target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fas fa-tshirt")])],1),a("v-btn",{attrs:{title:"Fangamer紀念品商店",color:"teal",href:"https://www.fangamer.com/collections/games-done-quick",target:"_blank"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fas fa-gift")])],1)],1),a("v-flex",{attrs:{xs12:""}},[t._v("功能測試:")]),a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{color:"teal",title:"測試鬧鈴"},on:{click:function(e){return t.test()}}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fas fa-volume-up")])],1),t.authState?t._e():a("v-btn",{attrs:{"hidden-xs-only":"",title:"Twitch登入",color:"#6441a5",href:"https://crs-dlbot.herokuapp.com/auth/twitch/",target:"_self"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fab fa-twitch")]),a("span",{staticStyle:{"margin-left":"5px",color:"#E0F2F1"}},[t._v("連接Twitch帳號")])],1),t.authState?a("v-btn",{attrs:{"hidden-xs-only":"",title:"Twitch登入",color:"#6441a5",href:"https://crs-dlbot.herokuapp.com/auth/twitch/logout",target:"_self"}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fab fa-twitch")]),a("span",{staticStyle:{"margin-left":"5px",color:"#E0F2F1"}},[t._v("登出")])],1):t._e()],1)],1)],1)],1),a("div",{attrs:{id:"scroll-anchor"}}),a("v-tabs",{staticClass:"sticky sticky--tab",attrs:{grow:"","icons-and-text":"",centered:"",dark:"","background-color":"teal","show-arrows":"","prev-icon":"fas fa-arrow-circle-left","next-icon":"fas fa-arrow-circle-right"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[a("v-tabs-slider",{attrs:{color:"teal lighten-5"}}),t._l(t.dateArr,(function(e,s){return a("v-tab",{key:"slide-"+s,attrs:{href:"#tab-"+s}},[t._v(" "+t._s(t._f("dateformat")(e.date))+" "),a("v-icon",[t._v("far fa-calendar-alt")])],1)}))],2),t.loading?t._e():a("v-layout",{staticClass:"sticky sticky--time slayout",class:{reverse:t.$vuetify.breakpoint.xsOnly},attrs:{wrap:""}},[a("v-flex",{staticClass:"stl",attrs:{xs4:"",sm1:""}},[t._v(" 開始時間 ")]),a("v-flex",{staticClass:"stl",attrs:{xs8:"",sm4:""}},[t._v(" 遊戲名稱 ")]),a("v-flex",{staticClass:"stl",attrs:{"hidden-xs-only":"",sm4:""}},[t._v(" 玩家 ")]),a("v-flex",{staticClass:"stl",attrs:{"hidden-xs-only":"",sm1:""}},[t._v(" 預估時間 ")]),a("v-flex",{staticClass:"stl slast",attrs:{"hidden-xs-only":"",sm2:""}},[t._v(" 規則 ")])],1),a("v-tabs-items",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},t._l(t.dateArr,(function(e,s){return a("v-tab-item",{key:"tab-"+t.eventID+"-"+s,attrs:{transition:!1,"reverse-transition":!1,value:"tab-"+s}},[t.loading?t._e():t._l(t.SliceList(s),(function(e){return a("TableRow",{key:e.pk,class:{reverse:t.$vuetify.breakpoint.xsOnly,end:e.starttime.getTime()<t.nowdate.getTime(),now:e.pk===t.sdList[t.nowplaying].pk},scopedSlots:t._u([{key:"startTime",fn:function(){return[a("div",[t._v(t._s(t._f("timeformat")(e.starttime)))])]},proxy:!0},{key:"gameName",fn:function(){return[t._v(" "+t._s(e.name)+" "),e.tw.sr?a("a",{staticClass:"ml-1",attrs:{href:"https://www.speedrun.com/"+e.tw.sr,"aria-label":"Speedrun.com",target:"_blank"}},[a("v-icon",[t._v("fas fa-trophy")])],1):t._e(),e.tw.gm?a("a",{staticClass:"ml-1",attrs:{href:e.tw.gm,target:"_blank","aria-label":"Steam",rel:"noreferrer"}},[a("v-icon",[t._v("fab fa-steam")])],1):t._e()]},proxy:!0},{key:"runner",fn:function(){return[t.isLatestEvent?a("div",{staticClass:"flex wrap"},t._l(t.emoteList,(function(s){return a("v-btn",{key:e.pk+"-emote-"+s,attrs:{"x-small":"",role:"button",depressed:"",color:t.userEmoteObj[e.pk]&&t.userEmoteObj[e.pk]===s?"rgba(50, 50, 100, 0.5)":"rgba(50, 50, 60, 0.3)"},on:{click:function(a){return a.stopPropagation(),t.vote(e.pk,s)}}},[a("img",{staticClass:"emote",attrs:{src:"https://static-cdn.jtvnw.net/emoticons/v1/"+s+"/1.0",alt:"twitch emote"}}),a("span",{staticClass:"emote__count"},[t._v(" "+t._s(t.getEmoteCount(e.pk,s))+" ")])])})),1):[t._v(" "+t._s(e.runners)+" ")]]},proxy:!0},{key:"runTime",fn:function(){return[t._v(" "+t._s(e.run_time)+" ")]},proxy:!0},{key:"category",fn:function(){return[t._v(" "+t._s(e.category)+" ")]},proxy:!0},{key:"console",fn:function(){return[a("div",{staticClass:"hidden-xs-only word-break icon-console",class:"icon-console-"+e.console.replace(" ","").toLowerCase()},[t._v(" "+t._s(e.console)+" ")]),a("v-btn",{key:e.pk+"-expand-"+e.mobileExpand,staticClass:"hidden-sm-and-up",attrs:{icon:""},on:{click:function(t){e.mobileExpand=!e.mobileExpand}}},[e.mobileExpand?a("v-icon",[t._v("fas fa-chevron-up")]):a("v-icon",[t._v("fas fa-chevron-down")])],1)]},proxy:!0},{key:"tw",fn:function(){return[a("div",[t._v(" "+t._s(e.tw.tw)+" "),e.tw.vod?a("a",{staticClass:"ml-1",attrs:{href:"https://www.twitch.tv/videos/"+e.tw.vod,target:"_blank","aria-label":"Twitch VODs",rel:"noreferrer"}},[a("v-icon",[t._v("fab fa-twitch")])],1):t._e(),e.tw.yt?a("a",{staticClass:"ml-1",attrs:{href:"https://www.youtube.com/watch?v="+e.tw.yt,target:"_blank","aria-label":"Youtube VODs",rel:"noreferrer"}},[a("v-icon",[t._v("fab fa-youtube")])],1):t._e()])]},proxy:!0},{key:"runnerList",fn:function(){return[a("v-layout",{attrs:{wrap:"","justify-space-around":""}},t._l(e.runnersArr,(function(e){return a("v-flex",{key:"runner"+s+e,attrs:{xs6:""}},[t.rnList[e]?[t._v(" "+t._s(t.rnList[e].name)+" "),t.rnList[e].stream||t.rnList[e].twitter?[t._v(" : ")]:t._e(),t.rnList[e].stream?a("a",{staticClass:"px-1",attrs:{href:t.rnList[e].stream,target:"_blank","aria-label":"Twitch channel",rel:"noreferrer"}},[a("v-icon",[t._v("fab fa-twitch")])],1):t._e(),t.rnList[e].twitter?a("a",{staticClass:"px-1",attrs:{href:"https://twitter.com/"+t.rnList[e].twitter,target:"_blank","aria-label":"Twitter",rel:"noreferrer"}},[a("v-icon",[t._v("fab fa-twitter")])],1):t._e()]:t._e()],2)})),1)]},proxy:!0},{key:"notification",fn:function(){return[0!==t.sdList.indexOf(e)?[!e.notification&&e.starttime.getTime()>t.nowdate.getTime()?a("v-btn",{attrs:{"aria-label":"enable notification",color:"teal"},on:{click:function(a){t.InsertNotification(t.sdList.indexOf(e))}}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("far fa-bell")])],1):t._e(),e.notification&&e.starttime.getTime()>t.nowdate.getTime()?a("v-btn",{attrs:{"aria-label":"disable notification",color:"pink darken-3"},on:{click:function(a){t.DeleteNotification(t.sdList.indexOf(e))}}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("far fa-bell-slash")])],1):t._e()]:t._e()]},proxy:!0},{key:"mobile",fn:function(){return[e.mobileExpand?a("v-flex",{staticClass:"sbl slast hidden-sm-and-up text-left",attrs:{xs12:""}},[a("v-flex",{attrs:{xs12:"","pa-3":""}},[a("div",{staticClass:"font-weight-bold"},[t._v("跑者")]),t._l(e.runnersArr,(function(e){return a("div",{key:"runner"+s+e,staticClass:"pl-3"},[t.rnList[e]?[t._v(" "+t._s(t.rnList[e].name)+": "),t.rnList[e].stream?a("a",{staticClass:"px-1",attrs:{href:t.rnList[e].stream,target:"_blank"}},[a("v-icon",[t._v("fab fa-twitch")])],1):t._e(),t.rnList[e].twitter?a("a",{staticClass:"px-1",attrs:{href:"https://twitter.com/"+t.rnList[e].twitter,target:"_blank"}},[a("v-icon",[t._v("fab fa-twitter")])],1):t._e()]:t._e()],2)})),a("div",{staticClass:"font-weight-bold"},[t._v("預估時間")]),a("div",{staticClass:"pl-3"},[t._v(t._s(e.run_time))]),a("div",{staticClass:"font-weight-bold"},[t._v("規則")]),a("div",{staticClass:"pl-3"},[t._v(t._s(e.category))]),a("div",{staticClass:"font-weight-bold"},[t._v("遊戲平台")]),a("div",{staticClass:"pl-3"},[t._v(t._s(e.console))]),t.isLatestEvent?a("div",{staticClass:"font-weight-bold"},[t._v("感想")]):t._e(),t.isLatestEvent?a("div",{staticClass:"flex wrap"},t._l(t.emoteList,(function(s){return a("v-btn",{key:e.pk+"-mobile-emote-"+s,attrs:{"x-small":"",depressed:"",color:"rgba(50, 50, 100, 0.5)"},on:{click:function(t){t.stopPropagation()}}},[a("img",{staticClass:"emote",attrs:{alt:"",src:"https://static-cdn.jtvnw.net/emoticons/v1/"+s+"/1.0"}}),a("span",{staticClass:"emote__count"},[t._v(" "+t._s(t.getEmoteCount(e.pk,s))+" ")])])})),1):t._e()],2)],1):t._e()]},proxy:!0}],null,!0)})}))],2)})),1),t.loading?a("v-layout",[a("v-flex",{staticClass:"px-3 py-5 cardbg",attrs:{xs12:""}},[a("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"teal"}}),a("v-flex",{staticStyle:{"font-size":"2rem"},attrs:{xs12:""}},[t._v(" 資料讀取中... ")])],1)],1):t._e()],1),a("div",{staticClass:"scrollTop",on:{click:function(e){return e.stopPropagation(),t.scrollToTop()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.scrollToTop()}}},[a("v-icon",{staticStyle:{color:"#E0F2F1"}},[t._v("fas fa-angle-up")])],1),a("updateModal"),a("v-snackbar",{attrs:{left:"",timeout:3e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(' 請至"INFO -> 功能測試"，連接Twitch帳號來使用此功能 ')])],1)],1)},l=[],c=(a(6699),a(9669)),f=a.n(c);const d=39,u={18:"SGDQ2016",19:"AGDQ2017",20:"SGDQ2017",22:"AGDQ2018",23:"SGDQ2018",24:"GDQX2018",25:"AGDQ2019",26:"SGDQ2019",27:"GDQX2019",28:"AGDQ2020",30:"SGDQ2020",34:"AGDQ2021",35:"SGDQ2021",37:"AGDQ2022",39:"SGDQ2022"},v=[78084,81273,245,28087,425618,86,69],h={"MS-DOS":"DOS",Famicom:"FC","Nintendo Entertainment System":"NES","Super Nintendo":"SNES","Super Famicom":"SNES","Sega Genesis":"Genesis",MegaDrive:"MD","Sega Saturn":"Saturn",Dreamcast:"DC","Game Gear":"GG",TG16:"TG-16","TurboGrafx-16":"TG-16","Super Gameboy 2":"SGB",Gameboy:"GB","Game Boy":"GB","Game Boy Color":"GBC","Game Boy Player":"GBPlayer","Gameboy Player (GBI)":"GBPlayer","Game Boy Advance":"GBA","Neo-Geo":"Neo Geo","Nintendo 64":"N64","Nintendo GameCube":"NGC","Nintendo Gamecube":"NGC",GameCube:"NGC",Gamecube:"NGC",GC:"NGC","Nintendo Wii":"Wii","Wii U Virtual Console":"Wii U (VC)","Nintendo DS":"NDS","Nintendo 3DS":"3DS","Nintendo New 3DS":"3DS",DS:"NDS","PC Engine":"PCE","PlayStation TV":"PSTV",PSX:"PS1","Playstation 2":"PS2","PlayStation 2":"PS2","Playstation 3":"PS3","Playstation 4":"PS4","PlayStation 4 Pro":"PS4","Playstation 4 Pro":"PS4",Switch:"NS","Nintendo Switch":"NS","Arcade Cabinet (PIU LX Model)":"Arcade"};var m={name:"App",components:{twitchPlayer:()=>a.e(637).then(a.bind(a,6637)),updateModal:()=>a.e(905).then(a.bind(a,1905)),TableRow:()=>a.e(638).then(a.bind(a,5638))},data(){return{tabs:0,eventID:null,eventItem:[],twJSON:[],dateArr:[],sdList:[],rnList:[],authState:null,emoteList:v,emoteCountObj:{},userEmoteObj:{},voteWaiting:!1,notification:[],sysNotiSupport:!1,sysNoti:!0,alertitem:[{state:"弱",alerttext:"weak"},{state:"中",alerttext:"medium"},{state:"強",alerttext:"strong"}],alertselect:"weak",nowdate:null,loading:!0,nowplaying:0,snackbar:!1}},watch:{eventID(t,e){e&&t&&u[t]&&(this.$refs.eventSelect.blur(),window.scrollTo(0,0),window.history.pushState(null,null,`#${t}-${u[t]}`),this.refresh())},nowplaying(t){if(this.eventID===d&&this.notification.includes(t)){if(this.notification=this.notification.filter((e=>e>=t)),this.DeleteNotification(t),this.sysNotiSupport&&this.sysNoti){new Notification("GDQ中文節目表",{badge:"https://i.imgur.com/3HF5L7V.png",body:`'${this.twJSON[this.sdList[t].pk].tw}'快開始了！`,icon:this.twJSON.logo})}document.getElementById("BaoAlert").load(),document.getElementById("BaoAlert").play()}},sysNoti(t){if(t)if("granted"!==Notification.permission)Notification.requestPermission().then((t=>{if("granted"===t){new Notification("GDQ中文節目表",{badge:"https://i.imgur.com/3HF5L7V.png",body:"您已開啟桌面通知功能",icon:this.twJSON.logo})}else this.sysNoti=!1}));else{new Notification("GDQ中文節目表",{badge:"https://i.imgur.com/3HF5L7V.png",body:"您已開啟桌面通知功能",icon:this.twJSON.logo})}},tabs(){document.getElementById("scroll-anchor").scrollIntoView({behavior:"smooth"})}},computed:{isLatestEvent(){return this.eventID===d}},filters:{timeformat(t){return`${t.getHours().toString().padStart(2,0)}:${t.getMinutes().toString().padStart(2,0)}`},dateformat(t){return`${(t.getMonth()+1).toString().padStart(2,0)}/${t.getDate().toString().padStart(2,0)}`},time(t){return t.toString().padStart(2,0)}},methods:{SliceList(t){return this.sdList.filter((e=>e.starttime.getDate()===this.dateArr[t].date.getDate()))},getPic(t){return"Pre-Show"===t||"Preshow"===t||"FINALE"===t||"Finale"===t||"Finale!"===t?this.twJSON.logo:`https://static-cdn.jtvnw.net/ttv-boxart/${t}-285x380.jpg`},async getRequest(t){const e=await await fetch(t,{cache:"no-cache"}).then((t=>t.json())).catch((t=>{console.log("Error: ",t)}));return e},getPage(){for(let t=this.tabs;t<this.dateArr.length;t+=1)this.nowdate.getTime()<this.dateArr[0].time?this.tabs="tab-0":t===this.dateArr.length-1?this.nowdate.getTime()>this.dateArr[t].time&&(this.tabs=`tab-${t}`):this.nowdate.getTime()>this.dateArr[t].time&&this.nowdate.getTime()<this.dateArr[t+1].time&&(this.tabs=`tab-${t}`)},clock(){return this.nowdate=new Date,this.getCurrentGame(),this.getPage(),this.nowdate},setclock(){const t=this.clock(),e=6e4*Math.ceil(t.getTime()/6e4)-t.getTime();setTimeout((()=>{this.clock(),setInterval(this.clock,6e4)}),e)},setNotification(){this.eventID===d&&(localStorage.getItem("notification")?this.notification=JSON.parse(localStorage.getItem("notification")):(this.notification=[],localStorage.setItem("notification",JSON.stringify(this.notification))))},InsertNotification(t){this.notification.push(t),this.sdList[t].notification=!0,this.notification.sort(((t,e)=>t-e)),localStorage.setItem("notification",JSON.stringify(this.notification))},DeleteNotification(t){this.notification=this.notification.filter((e=>e!==t)),this.sdList[t].notification=!1,localStorage.setItem("notification",JSON.stringify(this.notification))},getCurrentGame(){for(let t=this.nowplaying;t<this.sdList.length;t+=1)0===t?this.nowdate.getTime()<this.sdList[t].endtime.getTime()&&(this.nowplaying=t):t===this.sdList.length-1?this.nowdate.getTime()>this.sdList[t].starttime.getTime()&&(this.nowplaying=t):this.nowdate.getTime()>this.sdList[t-1].endtime.getTime()&&this.nowdate.getTime()<this.sdList[t].endtime.getTime()&&(this.nowplaying=t)},async getList(t){const e=t.run,a=t.runner;e.forEach(((t,e)=>{const a=new Date(t.fields.starttime);this.sdList.push({pk:t.pk,name:t.fields.name,console:h[t.fields.console]?h[t.fields.console]:t.fields.console,category:t.fields.category.replace("any%","Any%"),setup_time:t.fields.setup_time,starttime:a,run_time:t.fields.run_time,endtime:new Date(t.fields.endtime),runners:t.fields.deprecated_runners,runnersArr:t.fields.runners,notification:this.notification.includes(e),tw:this.twJSON[t.pk]||"",mobileExpand:!1}),this.dateArr.find((t=>t.date.getDate()===a.getDate()))||this.dateArr.push({date:a,time:a.getTime()})})),a.forEach((t=>{this.rnList[t.pk]=t.fields})),this.loading=!1},async getAuthandEmote(){await f().get("https://crs-dlbot.herokuapp.com/auth/twitch/check",{withCredentials:!0}).then((t=>{this.authState=t.data.user})).catch((()=>{this.authState=null})),await f().get("https://crs-dlbot.herokuapp.com/vote/list").then((t=>{this.emoteCountObj=t.data.data.reduce(((t,e)=>(t[e.gid]={...t[e.gid],[e.emote]:parseInt(e.ct,10)},t)),{})})),this.authState&&await f().get("https://crs-dlbot.herokuapp.com/vote/user",{withCredentials:!0}).then((t=>{this.userEmoteObj=t.data.data.reduce(((t,e)=>(t[e.gid]=e.emote,t)),{})})).catch((()=>{this.authState=null}))},async getJSON(){let t;this.isLatestEvent&&this.getAuthandEmote(),this.eventID&&u[this.eventID]||(this.eventID=d),t=this.eventID===d?await this.getRequest("//crs-dlbot.herokuapp.com/gdq"):await this.getRequest(`./event/${this.eventID}.json`),this.twJSON=await this.getRequest(`./lang/${this.eventID}.json`),this.getList(t),this.setclock()},vote(t,e){this.authState||(this.snackbar=!0),this.userEmoteObj[t]===e||this.voteWaiting||(this.voteWaiting=!0,f().post("https://crs-dlbot.herokuapp.com/vote/emote",{game:t,emote:e},{withCredentials:!0}).then((()=>{this.emoteCountObj[t]||this.$set(this.emoteCountObj,t,{}),this.emoteCountObj[t][e]||this.$set(this.emoteCountObj[t],e,0),this.userEmoteObj[t]&&this.$set(this.emoteCountObj[t],this.userEmoteObj[t],this.emoteCountObj[t][this.userEmoteObj[t]]-1),this.$set(this.emoteCountObj[t],e,this.emoteCountObj[t][e]+1),this.$set(this.userEmoteObj,t,e)})).catch((()=>{this.authState=null})).finally((()=>{this.voteWaiting=!1})))},getEmoteCount(t,e){return this.emoteCountObj[t]&&this.emoteCountObj[t][e]?this.emoteCountObj[t][e]:0},refresh(){this.loading=!0,this.nowplaying=0,this.dateArr.length=0,this.sdList.length=0,this.getJSON()},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},test(){if(this.sysNotiSupport&&this.sysNoti){new Notification("GDQ中文節目表",{badge:"https://i.imgur.com/3HF5L7V.png",body:"這是一則系統桌面通知測試！",icon:this.twJSON.logo})}document.getElementById("BaoAlert").load(),document.getElementById("BaoAlert").play()}},created(){Object.keys(u).forEach((t=>{this.eventItem.push({text:u[t],id:parseInt(t,10)})})),this.eventID=parseInt(window.location.hash.substr(1),10)||d,this.setNotification(),this.getJSON(),Notification&&(this.sysNotiSupport=!0,"granted"!==Notification.permission&&(this.sysNoti=!1))}},g=m,p=a(3736),b=a(3453),w=a.n(b),y=a(7524),_=a(3150),x=a(3237),k=a(7118),S=a(2665),C=a(5972),N=a(6428),E=a(7047),L=a(4470),O=a(624),D=a(6132),T=a(3202),F=a(6251),G=a(4227),A=a(1759),j=a(7594),P=a(5547),I=a(1208),B=(0,p.Z)(g,o,l,!1,null,null,null),$=B.exports;w()(B,{VApp:y.Z,VBtn:_.Z,VCard:x.Z,VCardTitle:k.EB,VContainer:S.Z,VFlex:C.Z,VIcon:N.Z,VImg:E.Z,VLayout:L.Z,VProgressCircular:O.Z,VSelect:D.Z,VSnackbar:T.Z,VSwitch:F.Z,VTab:G.Z,VTabItem:A.Z,VTabs:j.Z,VTabsItems:P.Z,VTabsSlider:I.Z});var V=a(5205);(0,V.z)("./service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\n For more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(t){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:t}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),s.Z.config.productionTip=!1,s.Z.directive("frag",i.Z),new s.Z({vuetify:r,render:t=>t($)}).$mount("#app")}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,n){if(!s){var r=1/0;for(f=0;f<t.length;f++){s=t[f][0],i=t[f][1],n=t[f][2];for(var o=!0,l=0;l<s.length;l++)(!1&n||r>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(o=!1,n<r&&(r=n));if(o){t.splice(f--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var f=t.length;f>0&&t[f-1][2]>n;f--)t[f]=t[f-1];t[f]=[s,i,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,s){return a.f[s](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{637:"1cddfc90",638:"cffe59fb",905:"446f941d"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+"."+{637:"ad24cfa5",638:"326b2dcd",905:"b6ba79c6"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="tgm3gdq:";a.l=function(s,i,n,r){if(t[s])t[s].push(i);else{var o,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var d=c[f];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==e+n){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+n),o.src=s),t[s]=[i];var u=function(e,a){o.onerror=o.onload=null,clearTimeout(v);var i=t[s];if(delete t[s],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(a)})),e)return e(a)},v=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var t=function(t,e,a,s){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var n=function(n){if(i.onerror=i.onload=null,"load"===n.type)a();else{var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=o,i.parentNode.removeChild(i),s(l)}};return i.onerror=i.onload=n,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var i=a[s],n=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===t||n===e))return i}var r=document.getElementsByTagName("style");for(s=0;s<r.length;s++){i=r[s],n=i.getAttribute("data-href");if(n===t||n===e)return i}},s=function(s){return new Promise((function(i,n){var r=a.miniCssF(s),o=a.p+r;if(e(r,o))return i();t(s,o,i,n)}))},i={143:0};a.f.miniCss=function(t,e){var a={637:1,638:1,905:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=s(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,s){var i=a.o(t,e)?t[e]:void 0;if(0!==i)if(i)s.push(i[2]);else{var n=new Promise((function(a,s){i=t[e]=[a,s]}));s.push(i[2]=n);var r=a.p+a.u(e),o=new Error,l=function(s){if(a.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var n=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,i[1](o)}};a.l(r,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,n,r=s[0],o=s[1],l=s[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(l)var f=l(a)}for(e&&e(s);c<r.length;c++)n=r[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(f)},s=self["webpackChunktgm3gdq"]=self["webpackChunktgm3gdq"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(3790)}));s=a.O(s)})();
//# sourceMappingURL=app.fbc2d74b.js.map