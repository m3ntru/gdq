<template>
  <div>
    <v-app>
      <twitchPlayer></twitchPlayer>
      <v-container class="mb-4">
        <audio id="BaoAlert">
          <track kind="captions" />
          <source :src="`https://raw.githubusercontent.com/runtogether-tw/gdq/gh-pages/sound/${alertselect}.mp3`" type="audio/mpeg">
        </audio>
        <v-tabs icons-and-text centered dark background-color="teal"
          show-arrows
          prev-icon="fas fa-arrow-circle-left"
          next-icon="fas fa-arrow-circle-right">
          <v-tabs-slider color="teal lighten-5"></v-tabs-slider>
          <v-tab href="#menu-1">
            Next
            <v-icon>fas fa-gamepad</v-icon>
          </v-tab>
          <v-tab :disabled="!isLatestEvent" href="#menu-2">
            Notification
            <v-icon>fas fa-bell</v-icon>
          </v-tab>
          <v-tab href="#menu-3">
            Info
            <v-icon>fas fa-info-circle</v-icon>
          </v-tab>
          <v-tab-item value="menu-1">
            <v-card class="cardbg pa-2" flat>
              <v-layout v-if="!loading" wrap justify-space-around align-center
                :class="{
                  'column': $vuetify.breakpoint.xsOnly,
                }">
                <v-flex xs5 sm4 md3
                  :class="{
                    'mb-2': $vuetify.breakpoint.xsOnly,
                  }">
                  <v-card
                  :class="{
                    'layout': $vuetify.breakpoint.xsOnly,
                  }">
                    <v-img
                      :src="getPic(sdList[nowplaying].name)"
                      class="card__pic"
                    >
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-start flexbox>
                            <span class="card__title headline white--text">Now Playing</span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                    <v-card-title primary-title>
                      <v-layout wrap justify-space-around>
                        <v-flex xs12 class="twolines">{{sdList[nowplaying].name}}</v-flex>
                        <v-flex xs12>{{sdList[nowplaying].tw.tw}}<a v-if="sdList[nowplaying].tw.sr!=''" aria-label="Speedrun.com" :href="'https://www.speedrun.com/'+sdList[nowplaying].tw.sr" target="_blank"><span>&ensp;</span><v-icon>fas fa-trophy</v-icon></a></v-flex>
                        <v-flex xs12 class="grey--text time--small">
                          準備時間: {{sdList[nowplaying].setup_time}}
                        </v-flex>
                        <v-flex xs12 class="grey--text time--small">
                          預計時間: {{sdList[nowplaying].run_time}}
                        </v-flex>
                      </v-layout>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex sm3 hidden-xs-only>
                  <v-card>
                    <v-img
                      :src="twJSON['logo']"
                      class="card__pic"
                    >
                    </v-img>
                    <v-card-title primary-title pa-3>
                      <v-layout wrap justify-space-around>
                        <v-flex xs12 class="grey--text">現在時間</v-flex>
                        <v-flex xs12 class="headline">
                          {{ nowdate | timeformat }}
                        </v-flex>
                        <v-flex xs12>{{ nowdate | dateformat }}</v-flex>
                      </v-layout>
                    </v-card-title>
                  </v-card>
                </v-flex>
                <v-flex xs5 sm4 md3
                  :class="{
                    'mb-2': $vuetify.breakpoint.xsOnly,
                  }">
                  <v-card
                    v-if="(nowplaying+1)<=(sdList.length-1)"
                    :class="{
                      'layout': $vuetify.breakpoint.xsOnly,
                    }">
                    <v-img
                      :src="getPic(sdList[nowplaying+1].name)"
                      class="card__pic"
                    >
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-start flexbox>
                            <span class="card__title headline white--text">UP Next</span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                    <v-card-title primary-title>
                      <v-layout wrap justify-space-around>
                        <v-flex xs12 class="twolines">{{sdList[nowplaying+1].name}}</v-flex>
                        <v-flex xs12>{{sdList[nowplaying+1].tw.tw}}<a v-if="sdList[nowplaying+1].tw.sr!=''" aria-label="Speedrun.com" :href="'https://www.speedrun.com/'+sdList[nowplaying+1].tw.sr" target="_blank"><span>&ensp;</span><v-icon>fas fa-trophy</v-icon></a></v-flex>
                        <v-flex xs12 class="grey--text time--small">
                          準備時間: {{sdList[nowplaying+1].setup_time}}
                        </v-flex>
                        <v-flex xs12 class="grey--text time--small">
                          開始時間: {{ sdList[nowplaying+1].starttime | dateformat }} {{ sdList[nowplaying+1].starttime | timeformat }}
                        </v-flex>
                      </v-layout>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-layout justify-center align-center mt-3>
                <v-flex xs5>
                  <v-select
                  :items="eventItem"
                  ref="eventSelect"
                  v-model="eventID"
                  label="活動選擇"
                  item-text="text"
                  item-value="id"
                  append-icon="fas fa-sort-down"
                  ></v-select>
                </v-flex>
                <v-btn color="teal" title="重新整理資訊" v-on:click="refresh()">
                  <v-icon style="color:#E0F2F1">fas fa-sync-alt</v-icon>
                </v-btn>
              </v-layout>
            </v-card>
          </v-tab-item>
          <v-tab-item value="menu-2">
            <v-card class="cardbg pa-2" flat>
              <v-layout wrap justify-space-around>
                <v-flex xs12>
                  <div v-if="notification.length === 0">你可以點擊節目表上的鬧鐘按鈕來加入提醒清單，我們將在節目開始時提醒您。</div>
                  <div>請依照自己喜好調整通知系統強度。</div>
                  <div>使用提醒功能時，建議將此頁面獨立成一個視窗，放置於背景分頁會因為瀏覽器節省資源而不播放背景音效。</div>
                </v-flex>
                <v-flex xs12>
                  <v-btn href="https://github.com/runtogether-tw/ical/blob/master/README.md#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95" target="_blank">匯入Google日曆教學</v-btn>
                </v-flex>
                <v-flex xs4>
                  <v-select
                  :items="alertitem"
                  v-model="alertselect"
                  label="提醒強度"
                  class="input-group--focused"
                  item-text="state"
                  item-value="alerttext"
                  append-icon="fas fa-sort-down"
                  ></v-select>
                </v-flex>
                <v-flex v-if="sysNotiSupport" xs4>
                  <v-switch v-model="sysNoti" label="啟用系統桌面通知"></v-switch>
                </v-flex>
                <v-flex xs12>
                  <div>- 提醒清單 -</div>
                </v-flex>
              </v-layout>
              <template v-if="!loading">
                <v-layout class="slayout" wrap
                  v-for="i in notification" :key="i"
                  :class="{end: (sdList[i].starttime.getTime() < nowdate.getTime())}">
                  <v-flex class="sbl" xs1>
                    <div>{{ sdList[i].starttime | dateformat }}</div>
                  </v-flex>
                  <v-flex class="sbl" xs1>
                    <div>{{ sdList[i].starttime | timeformat }}</div>
                  </v-flex>
                  <v-flex class="sbl" xs4>
                    <div>{{sdList[i].name}}</div>
                  </v-flex>
                  <v-flex class="sbl" xs4>
                    <div>{{sdList[i].runners}}</div>
                  </v-flex>
                  <v-flex class="sbl slast" xs2>
                    <div>{{sdList[i].category}}</div>
                  </v-flex>
                  <v-flex class="sbl" xs1>
                    <div>{{sdList[i].console}}</div>
                  </v-flex>
                  <v-flex class="sbl" xs4>
                    <div>{{sdList[i].tw.tw}}</div><a v-if="sdList[i].tw.sr!=''" :href="'https://www.speedrun.com/'+sdList[i].tw.sr" target="_blank"><span>&ensp;</span><v-icon>fas fa-trophy</v-icon></a>
                  </v-flex>
                  <v-flex align-center class="sbl" xs5>
                    <div></div>
                  </v-flex>
                  <v-flex class="sbl slast" xs2>
                    <v-btn v-on:click="DeleteNotification(i)" color="pink darken-3">
                      <v-icon style="color:#E0F2F1">far fa-bell-slash</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </template>
            </v-card>
          </v-tab-item>
          <v-tab-item value="menu-3">
            <v-card class="cardbg pa-2" flat>
              <v-flex xs12>彩學台:</v-flex>
              <v-flex xs12>
                <v-btn title="Twitch頻道" color="teal" href="https://www.twitch.tv/tetristhegrandmaster3" target="_blank"><v-icon style="color:#E0F2F1">fab fa-twitch</v-icon></v-btn>
                <v-btn title="Google節目表單" color="teal"
                  v-if="twJSON['google_link']"
                  :href="twJSON['google_link']" target="_blank">
                  <v-icon style="color:#E0F2F1">fas fa-th-list</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs12>GDQ官方:</v-flex>
              <v-flex xs12>
                <v-btn title="Twitch頻道" color="teal" href="https://www.twitch.tv/gamesdonequick" target="_blank"><v-icon style="color:#E0F2F1">fab fa-twitch</v-icon></v-btn>
                <v-btn color="teal" title="Youtube頻道" href="https://www.youtube.com/user/gamesdonequick/videos" target="_blank"><v-icon style="color:#E0F2F1">fab fa-youtube</v-icon></v-btn>
                <v-btn title="官方網站" color="teal" href="https://gamesdonequick.com/" target="_blank"><v-icon style="color:#E0F2F1">fas fa-gamepad</v-icon></v-btn>
                <v-btn title="節目表" color="teal" href="https://gamesdonequick.com/schedule/" target="_blank"><v-icon style="color:#E0F2F1">far fa-calendar-alt</v-icon></v-btn>
                <v-btn title="捐款系統" color="teal" :href="'https://gamesdonequick.com/tracker/event/'+twJSON['gdq_link']" target="_blank"><v-icon style="color:#E0F2F1">fas fa-money-check-alt</v-icon></v-btn>
                <v-btn title="抽獎獎品" color="teal" :href="'https://gamesdonequick.com/tracker/prizes/'+twJSON['gdq_link']" target="_blank"><v-icon style="color:#E0F2F1">fas fa-trophy</v-icon></v-btn>
                <v-btn title="解禁項目" color="teal" :href="'https://gamesdonequick.com/tracker/bids/'+twJSON['gdq_link']" target="_blank"><v-icon style="color:#E0F2F1">fas fa-gavel</v-icon></v-btn>
              </v-flex>
              <v-flex xs12>其他:</v-flex>
              <v-flex xs12>
                <v-btn title="GDQ VOD" color="teal" href="http://gdqvods.com/" target="_blank"><v-icon style="color:#E0F2F1">fas fa-video</v-icon></v-btn>
                <v-btn title="GDQ Stat" color="teal" href="http://gdqstat.us/" target="_blank"><v-icon style="color:#E0F2F1">fas fa-chart-bar</v-icon></v-btn>
                <v-btn title="/r/Speedrun" color="teal" href="https://www.reddit.com/r/speedrun/" target="_blank"><v-icon style="color:#E0F2F1">fab fa-reddit-alien</v-icon></v-btn>
                <v-btn title="The Yetee紀念T恤" color="teal" :href="'https://theyetee.com/collections/'+this.twJSON['yetee_link']" target="_blank"><v-icon style="color:#E0F2F1">fas fa-tshirt</v-icon></v-btn>
                <v-btn title="Fangamer紀念品商店" color="teal" href="https://www.fangamer.com/collections/games-done-quick" target="_blank"><v-icon style="color:#E0F2F1">fas fa-gift</v-icon></v-btn>
              </v-flex>
              <v-flex xs12>功能測試:</v-flex>
              <v-flex xs12>
                <v-btn color="teal" title="測試鬧鈴" v-on:click="test()">
                  <v-icon style="color:#E0F2F1">fas fa-volume-up</v-icon>
                </v-btn>
                <v-btn v-if="!authState" hidden-xs-only title="Twitch登入" color="#6441a5" href="https://crs-dlbot.herokuapp.com/auth/twitch/" target="_self">
                  <v-icon style="color:#E0F2F1">fab fa-twitch</v-icon>
                  <span style="margin-left:5px;color:#E0F2F1">連接Twitch帳號</span>
                </v-btn>
                <v-btn v-if="authState" hidden-xs-only title="Twitch登入" color="#6441a5" href="https://crs-dlbot.herokuapp.com/auth/twitch/logout" target="_self">
                  <v-icon style="color:#E0F2F1">fab fa-twitch</v-icon>
                  <span style="margin-left:5px;color:#E0F2F1">登出</span>
                </v-btn>
              </v-flex>
            </v-card>
          </v-tab-item>
        </v-tabs>
        <div id="scroll-anchor"></div>
        <v-tabs grow icons-and-text centered dark background-color="teal"
          class="sticky sticky--tab"
          show-arrows
          v-model="tabs"
          prev-icon="fas fa-arrow-circle-left"
          next-icon="fas fa-arrow-circle-right">
          <v-tabs-slider color="teal lighten-5"></v-tabs-slider>
          <v-tab v-for="(i,index) in dateArr" :key="'slide-'+index" :href="'#tab-'+index">
            {{ i.date | dateformat }}
            <v-icon>far fa-calendar-alt</v-icon>
          </v-tab>
        </v-tabs>
        <v-layout v-if="!loading" class="sticky sticky--time slayout" wrap
          :class="{'reverse': $vuetify.breakpoint.xsOnly}">
          <v-flex class="stl" xs4 sm1>
            開始時間
          </v-flex>
          <v-flex class="stl" xs8 sm4>
            遊戲名稱
          </v-flex>
          <v-flex class="stl" hidden-xs-only sm4>
            玩家
          </v-flex>
          <v-flex class="stl" hidden-xs-only sm1>
            預估時間
          </v-flex>
          <v-flex class="stl slast" hidden-xs-only sm2>
            規則
          </v-flex>
        </v-layout>
        <v-tabs-items v-model="tabs">
          <v-tab-item
            :transition="false"
            :reverse-transition="false"
            v-for="(i,index) in dateArr"
            :key="`tab-${eventID}-${index}`"
            :value="'tab-'+index">
            <template v-if="!loading">
              <TableRow v-for="i in SliceList(index)" :key="i.pk"
                :class="{
                  'reverse': $vuetify.breakpoint.xsOnly,
                  'end': (i.starttime.getTime() < nowdate.getTime()),
                  'now':(i.pk === sdList[nowplaying].pk),
                  }">
                <template v-slot:startTime>
                  <div>{{ i.starttime | timeformat }}</div>
                </template>
                <template v-slot:gameName>
                    {{i.name}}
                    <a class="ml-1" v-if="!!i.tw.sr" :href="'https://www.speedrun.com/'+i.tw.sr" aria-label="Speedrun.com" target="_blank">
                      <v-icon>fas fa-trophy</v-icon>
                    </a>
                    <a class="ml-1" v-if="!!i.tw.gm" :href="i.tw.gm" target="_blank" aria-label="Steam" rel="noreferrer">
                      <v-icon>fab fa-steam</v-icon>
                    </a>
                </template>
                <template v-slot:runner>
                  <div v-if="isLatestEvent" class="flex wrap">
                    <v-btn v-for="e in emoteList" x-small
                      role="button"
                      depressed
                      :color="(userEmoteObj[i.pk] && (userEmoteObj[i.pk] === e)) ? 'rgba(50, 50, 100, 0.5)' : 'rgba(50, 50, 60, 0.3)'"
                      :key="`${i.pk}-emote-${e}`"
                      @click.stop="vote(i.pk, e)">
                      <img class="emote" :src="`https://static-cdn.jtvnw.net/emoticons/v1/${e}/1.0`" alt="twitch emote">
                      <span class="emote__count">
                        {{ getEmoteCount(i.pk, e) }}
                      </span>
                    </v-btn>
                  </div>
                  <template v-else>
                    {{ i.runners }}
                  </template>
                </template>
                <template v-slot:runTime>
                  {{i.run_time}}
                </template>
                <template v-slot:category>
                  {{i.category}}
                </template>
                <template v-slot:console>
                  <div
                    class="hidden-xs-only word-break icon-console"
                    :class="`icon-console-${i.console.replace(' ','').toLowerCase()}`"
                  >
                    {{i.console}}
                  </div>
                  <v-btn icon class="hidden-sm-and-up" @click="i.mobileExpand=!i.mobileExpand" :key="`${i.pk}-expand-${i.mobileExpand}`">
                    <v-icon v-if="!i.mobileExpand">fas fa-chevron-down</v-icon>
                    <v-icon v-else>fas fa-chevron-up</v-icon>
                  </v-btn>
                </template>
                <template v-slot:tw>
                  <div>
                    {{i.tw.tw}}
                    <a class="ml-1" v-if="!!i.tw.vod" :href="'https://www.twitch.tv/videos/'+i.tw.vod" target="_blank" aria-label="Twitch VODs" rel="noreferrer">
                      <v-icon>fab fa-twitch</v-icon>
                    </a>
                    <a class="ml-1" v-if="!!i.tw.yt" :href="'https://www.youtube.com/watch?v='+i.tw.yt" target="_blank" aria-label="Youtube VODs" rel="noreferrer">
                      <v-icon>fab fa-youtube</v-icon>
                    </a>
                  </div>
                </template>
                <template v-slot:runnerList>
                  <v-layout wrap justify-space-around>
                    <v-flex xs6 v-for="j in i.runnersArr" :key="'runner'+index+j">
                      <template v-if="rnList[j]">
                        {{rnList[j].name}}
                        <template v-if="(!!rnList[j].stream)||(!!rnList[j].twitter)">
                          :
                        </template>
                        <a v-if="!!rnList[j].stream" class="px-1" :href="rnList[j].stream" target="_blank" aria-label="Twitch channel" rel="noreferrer">
                          <v-icon>fab fa-twitch</v-icon>
                        </a>
                        <a v-if="!!rnList[j].twitter" class="px-1" :href="'https://twitter.com/'+rnList[j].twitter" target="_blank" aria-label="Twitter" rel="noreferrer">
                          <v-icon>fab fa-twitter</v-icon>
                        </a>
                      </template>
                    </v-flex>
                  </v-layout>
                </template>
                <template v-slot:notification>
                  <template v-if="sdList.indexOf(i)!==0">
                    <v-btn aria-label="enable notification" v-on:click="InsertNotification(sdList.indexOf(i))" color="teal"
                      v-if="(!i.notification)&&((i.starttime.getTime() > nowdate.getTime()))">
                      <v-icon style="color:#E0F2F1">far fa-bell</v-icon>
                    </v-btn>
                    <v-btn aria-label="disable notification" v-on:click="DeleteNotification(sdList.indexOf(i))" color="pink darken-3"
                      v-if="(i.notification)&&((i.starttime.getTime() > nowdate.getTime()))">
                      <v-icon style="color:#E0F2F1">far fa-bell-slash</v-icon>
                    </v-btn>
                  </template>
                </template>
                <template v-slot:mobile>
                  <v-flex v-if="i.mobileExpand"
                    xs12 class="sbl slast hidden-sm-and-up text-left">
                    <v-flex xs12 pa-3>
                      <div class="font-weight-bold">跑者</div>
                      <div class="pl-3" v-for="j in i.runnersArr" :key="'runner'+index+j">
                        <template v-if="rnList[j]">
                          {{rnList[j].name}}:
                          <a v-if="!!rnList[j].stream" class="px-1" :href="rnList[j].stream" target="_blank">
                            <v-icon>fab fa-twitch</v-icon>
                          </a>
                          <a v-if="!!rnList[j].twitter" class="px-1" :href="'https://twitter.com/'+rnList[j].twitter" target="_blank">
                            <v-icon>fab fa-twitter</v-icon>
                          </a>
                        </template>
                      </div>
                      <div class="font-weight-bold">預估時間</div>
                      <div class="pl-3">{{i.run_time}}</div>
                      <div class="font-weight-bold">規則</div>
                      <div class="pl-3">{{i.category}}</div>
                      <div class="font-weight-bold">遊戲平台</div>
                      <div class="pl-3">{{i.console}}</div>
                      <div v-if="isLatestEvent" class="font-weight-bold">感想</div>
                      <div v-if="isLatestEvent" class="flex wrap">
                        <v-btn v-for="e in emoteList" x-small
                          depressed
                          color="rgba(50, 50, 100, 0.5)"
                          :key="`${i.pk}-mobile-emote-${e}`"
                          @click.stop="">
                          <img class="emote" alt="" :src="`https://static-cdn.jtvnw.net/emoticons/v1/${e}/1.0`">
                          <span class="emote__count">
                            {{ getEmoteCount(i.pk, e) }}
                          </span>
                        </v-btn>
                      </div>
                    </v-flex>
                  </v-flex>
                </template>
              </TableRow>
            </template>
          </v-tab-item>
        </v-tabs-items>
        <v-layout v-if="loading">
          <v-flex xs12 class="px-3 py-5 cardbg">
            <v-progress-circular :size="70" :width="7" indeterminate color="teal">
            </v-progress-circular>
            <v-flex xs12 style="font-size:2rem;">
              資料讀取中...
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
      <div class="scrollTop" @click.stop="scrollToTop()" @keydown.enter="scrollToTop()">
        <v-icon style="color:#E0F2F1">fas fa-angle-up</v-icon>
      </div>
      <updateModal></updateModal>
      <v-snackbar
        v-model="snackbar"
        left
        :timeout="3000"
      >
        請至"INFO -> 功能測試"，連接Twitch帳號來使用此功能
      </v-snackbar>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios';
import {
  LATEST_EVENT,
  EVENT_LIST,
  CONSOLE_LIST,
  EMOTE_LIST,
} from './js/constant';

export default {
  name: 'App',
  components: {
    twitchPlayer: () => import('./components/TwitchPlayer.vue'),
    updateModal: () => import('./components/UpdateModal.vue'),
    TableRow: () => import('./components/TableRow.vue'),
  },
  data() {
    return {
      tabs: 0,
      eventID: null,
      eventItem: [],
      twJSON: [],
      dateArr: [],
      sdList: [],
      rnList: [],
      authState: null,
      emoteList: EMOTE_LIST,
      emoteCountObj: {},
      userEmoteObj: {},
      voteWaiting: false,
      notification: [],
      sysNotiSupport: false,
      sysNoti: true,
      alertitem: [{ state: '弱', alerttext: 'weak' },
        { state: '中', alerttext: 'medium' },
        { state: '強', alerttext: 'strong' }],
      alertselect: 'weak',
      nowdate: null,
      loading: true,
      nowplaying: 0,
      snackbar: false,
    };
  },
  watch: {
    eventID(val, oldVal) {
      if (!oldVal) {
        return;
      }
      if (val && EVENT_LIST[val]) {
        this.$refs.eventSelect.blur();
        window.scrollTo(0, 0);
        window.history.pushState(null, null, `#${val}-${EVENT_LIST[val]}`);
        this.refresh();
      }
    },
    nowplaying(val) {
      if (this.eventID !== LATEST_EVENT) {
        return;
      }
      if (this.notification.includes(val)) {
        // Clear old notification from list
        this.notification = this.notification.filter((element) => element >= val);
        this.DeleteNotification(val);
        if (this.sysNotiSupport && this.sysNoti) {
          // eslint-disable-next-line no-unused-vars
          const gameNotification = new Notification('GDQ中文節目表', {
            badge: 'https://i.imgur.com/3HF5L7V.png',
            body: `'${this.twJSON[this.sdList[val].pk].tw}'快開始了！`,
            icon: this.twJSON.logo,
          });
        }
        document.getElementById('BaoAlert').load();
        document.getElementById('BaoAlert').play();
      }
    },
    sysNoti(val) {
      if (val) {
        if (Notification.permission !== 'granted') {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              // eslint-disable-next-line no-unused-vars
              const firstNotification = new Notification('GDQ中文節目表', {
                badge: 'https://i.imgur.com/3HF5L7V.png',
                body: '您已開啟桌面通知功能',
                icon: this.twJSON.logo,
              });
            } else {
              this.sysNoti = false;
            }
          });
        } else {
          // eslint-disable-next-line no-unused-vars
          const notification = new Notification('GDQ中文節目表', {
            badge: 'https://i.imgur.com/3HF5L7V.png',
            body: '您已開啟桌面通知功能',
            icon: this.twJSON.logo,
          });
        }
      }
    },
    tabs() {
      document.getElementById('scroll-anchor').scrollIntoView({ behavior: 'smooth' });
    },
  },
  computed: {
    isLatestEvent() {
      return this.eventID === LATEST_EVENT;
    },
  },
  filters: {
    timeformat(val) {
      return `${val.getHours().toString().padStart(2, 0)}:${val.getMinutes().toString().padStart(2, 0)}`;
    },
    dateformat(val) {
      return `${(val.getMonth() + 1).toString().padStart(2, 0)}/${val.getDate().toString().padStart(2, 0)}`;
    },
    time(value) {
      return value.toString().padStart(2, 0);
    },
  },
  methods: {
    SliceList(index) {
      return this.sdList.filter((e) => e.starttime.getDate() === this.dateArr[index].date.getDate());
    },
    getPic(gname) {
      if ((gname === 'Pre-Show') || (gname === 'Preshow')
        || (gname === 'FINALE') || (gname === 'Finale') || (gname === 'Finale!')) {
        return this.twJSON.logo;
      }
      return `https://static-cdn.jtvnw.net/ttv-boxart/${gname}-285x380.jpg`;
    },
    async getRequest(url) {
      const Jdata = await (await (fetch(url, { cache: 'no-cache' })
        .then((res) => res.json())
        .catch((err) => {
          console.log('Error: ', err);
        })
      ));
      return Jdata;
    },
    getPage() {
      for (let i = this.tabs; i < this.dateArr.length; i += 1) {
        if (this.nowdate.getTime() < this.dateArr[0].time) {
          this.tabs = `tab-${0}`;
        } else if (i === this.dateArr.length - 1) {
          if (this.nowdate.getTime() > this.dateArr[i].time) {
            this.tabs = `tab-${i}`;
          }
        } else if ((this.nowdate.getTime() > this.dateArr[i].time)
          && (this.nowdate.getTime() < this.dateArr[i + 1].time)) {
          this.tabs = `tab-${i}`;
        }
      }
    },
    clock() {
      this.nowdate = new Date();
      this.getCurrentGame();
      this.getPage();
      return this.nowdate;
    },
    setclock() {
      const n = this.clock();
      const timeWait = Math.ceil(n.getTime() / 60000) * 60000 - n.getTime();
      setTimeout(() => {
        this.clock();
        setInterval(this.clock, 60000);
      }, timeWait);
    },
    setNotification() {
      if (this.eventID !== LATEST_EVENT) {
        return;
      }
      // init
      if (!localStorage.getItem('notification')) {
        this.notification = [];
        localStorage.setItem('notification', JSON.stringify(this.notification));
      } else {
        this.notification = JSON.parse(localStorage.getItem('notification'));
      }
    },
    InsertNotification(id) {
      this.notification.push(id);
      this.sdList[id].notification = true;
      this.notification.sort((a, b) => a - b);
      localStorage.setItem('notification', JSON.stringify(this.notification));
    },
    DeleteNotification(id) {
      this.notification = this.notification.filter((item) => item !== id);
      this.sdList[id].notification = false;
      localStorage.setItem('notification', JSON.stringify(this.notification));
    },
    getCurrentGame() {
      for (let i = this.nowplaying; i < this.sdList.length; i += 1) {
        if (i === 0) {
          if (this.nowdate.getTime() < this.sdList[i].endtime.getTime()) {
            this.nowplaying = i;
          }
        } else if (i === this.sdList.length - 1) {
          if (this.nowdate.getTime() > this.sdList[i].starttime.getTime()) {
            this.nowplaying = i;
          }
        } else if ((this.nowdate.getTime() > this.sdList[i - 1].endtime.getTime())
          && (this.nowdate.getTime() < this.sdList[i].endtime.getTime())) {
          this.nowplaying = i;
        }
      }
    },
    async getList(RequestJSON) {
      const ListJSON = RequestJSON.run;
      const RunnerJSON = RequestJSON.runner;
      ListJSON.forEach((element, index) => {
        const s = new Date(element.fields.starttime);
        this.sdList.push({
          pk: element.pk,
          name: element.fields.name,
          console: CONSOLE_LIST[element.fields.console] ? CONSOLE_LIST[element.fields.console] : element.fields.console,
          category: element.fields.category.replace('any%', 'Any%'),
          setup_time: element.fields.setup_time,
          starttime: s,
          run_time: element.fields.run_time,
          endtime: new Date(element.fields.endtime),
          runners: element.fields.deprecated_runners,
          runnersArr: element.fields.runners,
          notification: this.notification.includes(index),
          tw: this.twJSON[element.pk] || '',
          mobileExpand: false,
        });
        if (!this.dateArr.find((e) => e.date.getDate() === s.getDate())) {
          this.dateArr.push({
            date: s,
            time: s.getTime(),
          });
        }
      });
      RunnerJSON.forEach((element) => {
        this.rnList[element.pk] = element.fields;
      });
      this.loading = false;
    },
    async getAuthandEmote() {
      // get auth
      await axios.get('https://crs-dlbot.herokuapp.com/auth/twitch/check', {
        withCredentials: true,
      })
        .then((res) => {
          this.authState = res.data.user;
        })
        .catch(() => {
          this.authState = null;
        });
      // get emote count
      await axios.get('https://crs-dlbot.herokuapp.com/vote/list').then((res) => {
        this.emoteCountObj = res.data.data.reduce((result, element) => {
          result[element.gid] = {  // eslint-disable-line
            ...result[element.gid],
            [element.emote]: parseInt(element.ct, 10),
          };
          return result;
        }, {});
      });
      // get user vote list
      if (this.authState) {
        await axios.get('https://crs-dlbot.herokuapp.com/vote/user', {
          withCredentials: true,
        })
          .then((res) => {
            this.userEmoteObj = res.data.data.reduce((result, element) => {
              result[element.gid] = element.emote; // eslint-disable-line
              return result;
            }, {});
          })
          .catch(() => {
            this.authState = null;
          });
      }
    },
    async getJSON() {
      if (this.isLatestEvent) {
        this.getAuthandEmote();
      }
      // get list
      let RequestJSON;
      if (!this.eventID || !EVENT_LIST[this.eventID]) {
        this.eventID = LATEST_EVENT;
      }
      if (this.eventID === LATEST_EVENT) {
        RequestJSON = await this.getRequest('//crs-dlbot.herokuapp.com/gdq');
      } else {
        RequestJSON = await this.getRequest(`./event/${this.eventID}.json`);
      }
      this.twJSON = await this.getRequest(`./lang/${this.eventID}.json`);
      this.getList(RequestJSON);
      this.setclock();
    },
    vote(game, emote) {
      if (!this.authState) {
        this.snackbar = true;
      }
      if ((this.userEmoteObj[game] === emote) || this.voteWaiting) {
        return;
      }
      this.voteWaiting = true;
      axios.post('https://crs-dlbot.herokuapp.com/vote/emote', {
        game,
        emote,
      }, {
        withCredentials: true,
      })
        .then(() => {
          if (!this.emoteCountObj[game]) {
            this.$set(this.emoteCountObj, game, {});
          }
          if (!this.emoteCountObj[game][emote]) {
            this.$set(this.emoteCountObj[game], emote, 0);
          }
          if (this.userEmoteObj[game]) {
            this.$set(this.emoteCountObj[game], this.userEmoteObj[game], this.emoteCountObj[game][this.userEmoteObj[game]] - 1);
          }
          this.$set(this.emoteCountObj[game], emote, this.emoteCountObj[game][emote] + 1);
          this.$set(this.userEmoteObj, game, emote);
        })
        .catch(() => {
          this.authState = null;
        })
        .finally(() => {
          this.voteWaiting = false;
        });
    },
    getEmoteCount(game, emote) {
      if (!this.emoteCountObj[game] || !this.emoteCountObj[game][emote]) {
        return 0;
      }
      return this.emoteCountObj[game][emote];
    },
    refresh() {
      this.loading = true;
      this.nowplaying = 0;
      this.dateArr.length = 0;
      this.sdList.length = 0;
      this.getJSON();
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    test() {
      if (this.sysNotiSupport && this.sysNoti) {
        // eslint-disable-next-line no-unused-vars
        const gameNotification = new Notification('GDQ中文節目表', {
          badge: 'https://i.imgur.com/3HF5L7V.png',
          body: '這是一則系統桌面通知測試！',
          icon: this.twJSON.logo,
        });
      }
      document.getElementById('BaoAlert').load();
      document.getElementById('BaoAlert').play();
    },
  },
  created() {
    Object.keys(EVENT_LIST).forEach((key) => {
      this.eventItem.push({
        text: EVENT_LIST[key],
        id: parseInt(key, 10),
      });
    });
    this.eventID = parseInt(window.location.hash.substr(1), 10) || LATEST_EVENT;
    this.setNotification();
    this.getJSON();
    // system notification support
    if (Notification) {
      this.sysNotiSupport = true;
      // user accept system notification
      if (Notification.permission !== 'granted') {
        this.sysNoti = false;
      }
    }
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,500,700&display=swap&subset=chinese-traditional');
* {
    font-family: 'Noto Sans TC', sans-serif;;
}
body {
  margin:0;
  background-color: #6CABA5;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 1.1rem;
  color: #2c3e50;
  background-color: #6CABA5;
  .v-btn {
    margin: 6px 8px !important;
  }
}
.sarea {
  padding-top:2%;
  padding-bottom:2%;
  background-color: #B2DFDB;
}
.cardbg {
  background-color: #E0F2F1 !important;
}
.card__pic {
  height: 300px;
  @media (max-width:600px){
    height: auto;
    min-height: 200px;
    width: 170px;
    margin: 0 auto;
  }
}
.card__title {
  padding:1%;
  background: rgba(80, 80, 80, 0.5);
}
.time--small {
  font-size: 16px;
}
.sticky {
  position: sticky;
  z-index:2;
  &--tab {
    top: 0px;
  }
  &--time {
    top: 69px;
  }
}
a:link, a:visited, a:hover, a:active {
    text-decoration: none;
}
body {
  width:100%;
  height:100%;
}
.scrolllock {
  position: fixed;
  overflow: hidden !important;
}
.twolines {
  max-height: 2.66em;
  overflow: hidden;
  font-size: 24px !important;
  font-weight: 400;
  line-height: 1.33em !important;
  letter-spacing: normal !important;
  font-family: 'Roboto', sans-serif !important;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter {
  transform: translateY(-10px);
}

.scrollTop {
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  background: rgba(80, 80, 80, 0.5);
  border-radius: 5px;
  cursor: pointer;
}
.emote {
  height: 16px;
  &__btn {
    &--disable {
      pointer-events: none;
    }
  }
  &__count {
    color:#2c3e50;
    margin-left: 5px;
  }
}
.word-break {
  word-break: break-word;
}
$console-list: '32x','3do','3ds','arcade','dc','dos','fc','famicomdisk','gb','gba','gbc','gbplayer','genesis','gg','jaguar',
  'lynx','md','n64','nds','neogeo','nes','nesclassic','ngc','pc','pce','ps1','ps2','ps3','psp',
  'saturn','segamaster','sfc','sgb','snes','snesclassic','tg-16','wii','wiivc','xbox','xbox360';
.icon-console {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  &::before{
    display: block;
    content: '';
  }
  @each $console in $console-list {
    &-#{$console}::before {
      width: 32px;
      height: 32px;
      margin: 4px;
      background-image: url('../pic/console/#{$console}.gif');
    }
  }
}
</style>
