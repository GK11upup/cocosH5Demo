(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/js/game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '143bdjogc5G9qmD9BeKlBd9', 'game', __filename);
// js/game.js

'use strict';

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
    extends: cc.Component,
    properties: {
        scroll: { default: null,
            type: cc.Node },
        content: {
            default: null,
            type: cc.Node
        },
        nowY: 0,
        down: 0,
        p1manceng: {
            default: null,
            type: cc.Node
        },
        p1yg: {
            default: null,
            type: cc.Node
        },
        p1bg: {
            default: null,
            type: cc.Node
        },
        p1w: {
            default: null,
            type: cc.Node
        },
        p2man1: {
            default: null,
            type: cc.Node
        },
        tianma: {
            default: null,
            type: cc.Node
        },
        p2man2: {
            default: null,
            type: cc.Node
        },
        beidou: {
            default: null,
            type: cc.Node
        },
        p2dian: {
            default: null,
            type: cc.Node
        },
        p2word: {
            default: null,
            type: cc.Node
        },
        p3word: {
            default: null,
            type: cc.Node
        },
        p3man1: {
            default: null,
            type: cc.Node
        },
        p3poster: {
            default: null,
            type: cc.Node
        },
        p4man: {
            default: null,
            type: cc.Node
        },
        p4truth: {
            default: null,
            type: cc.Node
        },
        p4word: {
            default: null,
            type: cc.Node
        },
        // 自动播放动画配置
        shan: {
            default: null,
            type: cc.Node
        },
        shantf: true,
        tv: {
            default: null,
            type: cc.Node
        },
        tvtf: true,
        player1: {
            default: null,
            type: cc.Node
        },
        player1tf: true,
        player2: {
            default: null,
            type: cc.Node
        },
        player2tf: true,
        //*********************************
        p5man: {
            default: null,
            type: cc.Node
        },
        p5pa: {
            default: null,
            type: cc.Node
        },
        p5wei: {
            default: null,
            type: cc.Node
        },
        p5hehe: {
            default: null,
            type: cc.Node
        },
        p5han: {
            default: null,
            type: cc.Node
        },
        p5word: {
            default: null,
            type: cc.Node
        },
        p6word: {
            default: null,
            type: cc.Node
        },
        p6qianjing: {
            default: null,
            type: cc.Node
        },
        p6wei: {
            default: null,
            type: cc.Node
        },
        p6ye: {
            default: null,
            type: cc.Node
        },
        p7word: {
            default: null,
            type: cc.Node
        },
        p7main: {
            default: null,
            type: cc.Node
        },
        p7roommate: {
            default: null,
            type: cc.Node
        },
        p7han: {
            default: null,
            type: cc.Node
        },
        p7shang: {
            default: null,
            type: cc.Node
        },
        p81: {
            default: null,
            type: cc.Node
        },
        p8phone: {
            default: null,
            type: cc.Node
        },
        p8word: {
            default: null,
            type: cc.Node
        },
        p9man: {
            default: null,
            type: cc.Node
        },
        p9word: {
            default: null,
            type: cc.Node
        },
        p9girl: {
            default: null,
            type: cc.Node
        },
        p9a: {
            default: null,
            type: cc.Node
        },
        p9cat: {
            default: null,
            type: cc.Node
        },
        endtoy1: {
            default: null,
            type: cc.Node
        },
        endtoy2: {
            default: null,
            type: cc.Node
        },
        endtoy3: {
            default: null,
            type: cc.Node
        },
        endtoy4: {
            default: null,
            type: cc.Node
        },
        endtoy5: {
            default: null,
            type: cc.Node
        },
        endtoy6: {
            default: null,
            type: cc.Node
        },
        shareButton: {
            default: null,
            type: cc.Node
        },
        topButton: {
            default: null,
            type: cc.Node
        },
        againButton: {
            default: null,
            type: cc.Node
        },
        you: {
            default: null,
            type: cc.Node
        },
        musicButton: {
            default: null,
            type: cc.Node
        },
        muteButton: {
            default: null,
            type: cc.Node
        },
        audio2: {
            url: cc.AudioClip,
            default: null
        },
        audioSourcep1: {
            type: cc.AudioSource,
            default: null
        },
        audioSourcep2: {
            type: cc.AudioSource,
            default: null
        },
        audioSourcep3: {
            type: cc.AudioSource,
            default: null
        },
        audioSourcep4: {
            type: cc.AudioSource,
            default: null
        },
        audioSourcep5: {
            type: cc.AudioSource,
            default: null
        },
        audioSourcep6: {
            type: cc.AudioSource,
            default: null
        },
        audioSourcep7: {
            type: cc.AudioSource,
            default: null
        },
        audioSourcep8: {
            type: cc.AudioSource,
            default: null
        },
        audioSourcep9: {
            type: cc.AudioSource,
            default: null
        },
        audioSourcep91: {
            type: cc.AudioSource,
            default: null
        },
        mute: false,
        A: [],
        pause: false,
        first: true
    },
    // LIFE-CYCLE CALLBACKS:
    onLoad: function onLoad() {
        var me = this;
        // cc.audioEngine.preload('http://h5.intech.gdinsight.com/jcp-music/music.mp3');
        me.shareButton.on('touchend', function (event) {
            me.you.active = true;
            me.you.off();
            me.you.on('touchend', function (event) {
                me.you.active = false;
            }.bind(this));
        }.bind(this));
        me.topButton.on('touchend', function (event) {
            window.location.href = 'http://www.baidu.com';
        }.bind(this));
        me.againButton.on('touchend', function (event) {
            var s = me.scroll.getComponent(cc.ScrollView);
            s.scrollToTop(10);
        }.bind(this));
        me.content.on('touchstart', function (event) {
            if (me.first) {
                me.current = cc.audioEngine.play(me.audio2, true, 0.2);
                me.first = false;
                me.musicButton.active = true;
                me.musicButton.on('touchend', function (event) {
                    me.pauseMusic();
                    me.musicButton.active = false;
                    me.muteButton.active = true;
                    me.mute = true;
                });
                me.muteButton.on('touchend', function (event) {
                    me.resumeMusic();
                    me.muteButton.active = false;
                    me.musicButton.active = true;
                    me.mute = false;
                });
            }
        });
        me.A.push({
            sprite: me.p1manceng.getComponent(cc.Animation),
            animState: me.p1manceng.getComponent(cc.Animation).getAnimationState('p1mancengA'), //正动画对象
            animStatef: me.p1manceng.getComponent(cc.Animation).getAnimationState('p1mancengAf') //反动画对象
        });
        me.A.push({
            sprite: me.p1yg.getComponent(cc.Animation),
            animState: me.p1yg.getComponent(cc.Animation).getAnimationState('p1ygA'), //正动画对象
            animStatef: me.p1yg.getComponent(cc.Animation).getAnimationState('p1ygAf') //反动画对象
        });
        // me.A.push({
        //     sprite: me.p1bg.getComponent(cc.Animation),
        //     animState: me.p1bg.getComponent(cc.Animation).getAnimationState('p1bgA'), //正动画对象
        //     animStatef: me.p1bg.getComponent(cc.Animation).getAnimationState('p1bgAf') //反动画对象
        // })
        me.A.push({
            sprite: me.p1w.getComponent(cc.Animation),
            animState: me.p1w.getComponent(cc.Animation).getAnimationState('p1wA'), //正动画对象
            animStatef: me.p1w.getComponent(cc.Animation).getAnimationState('p1wAf') //反动画对象
        });
        me.A.push({
            sprite: me.p2man1.getComponent(cc.Animation),
            animState: me.p2man1.getComponent(cc.Animation).getAnimationState('p2man1A'), //正动画对象
            animStatef: me.p2man1.getComponent(cc.Animation).getAnimationState('p2man1Af') //反动画对象
        });
        me.A.push({
            sprite: me.tianma.getComponent(cc.Animation),
            animState: me.tianma.getComponent(cc.Animation).getAnimationState('tianmaA'), //正动画对象
            animStatef: me.tianma.getComponent(cc.Animation).getAnimationState('tianmaAf') //反动画对象
        });
        me.A.push({
            sprite: me.p2man2.getComponent(cc.Animation),
            animState: me.p2man2.getComponent(cc.Animation).getAnimationState('p2man2A'), //正动画对象
            animStatef: me.p2man2.getComponent(cc.Animation).getAnimationState('p2man2Af') //反动画对象
        });
        me.A.push({
            sprite: me.beidou.getComponent(cc.Animation),
            animState: me.beidou.getComponent(cc.Animation).getAnimationState('beidouA'), //正动画对象
            animStatef: me.beidou.getComponent(cc.Animation).getAnimationState('beidouAf') //反动画对象
        });
        me.A.push({
            sprite: me.p2dian.getComponent(cc.Animation),
            animState: me.p2dian.getComponent(cc.Animation).getAnimationState('p2dianA'), //正动画对象
            animStatef: me.p2dian.getComponent(cc.Animation).getAnimationState('p2dianAf') //反动画对象
        });
        me.A.push({
            sprite: me.p2word.getComponent(cc.Animation),
            animState: me.p2word.getComponent(cc.Animation).getAnimationState('p2wA'), //正动画对象
            animStatef: me.p2word.getComponent(cc.Animation).getAnimationState('p2wAf') //反动画对象
        });
        me.A.push({
            sprite: me.p3word.getComponent(cc.Animation),
            animState: me.p3word.getComponent(cc.Animation).getAnimationState('p3wordA'), //正动画对象
            animStatef: me.p3word.getComponent(cc.Animation).getAnimationState('p3wordAf') //反动画对象
        });
        me.A.push({
            sprite: me.p3man1.getComponent(cc.Animation),
            animState: me.p3man1.getComponent(cc.Animation).getAnimationState('p3man1A'), //正动画对象
            animStatef: me.p3man1.getComponent(cc.Animation).getAnimationState('p3man1Af') //反动画对象
        });
        me.A.push({
            sprite: me.p3poster.getComponent(cc.Animation),
            animState: me.p3poster.getComponent(cc.Animation).getAnimationState('p3posterA'), //正动画对象
            animStatef: me.p3poster.getComponent(cc.Animation).getAnimationState('p3posterAf') //反动画对象
        });
        me.A.push({
            sprite: me.p4man.getComponent(cc.Animation),
            animState: me.p4man.getComponent(cc.Animation).getAnimationState('p4manA'), //正动画对象
            animStatef: me.p4man.getComponent(cc.Animation).getAnimationState('p4manAf') //反动画对象
        });
        me.A.push({
            sprite: me.p4truth.getComponent(cc.Animation),
            animState: me.p4truth.getComponent(cc.Animation).getAnimationState('p4truthA'), //正动画对象
            animStatef: me.p4truth.getComponent(cc.Animation).getAnimationState('p4truthAf') //反动画对象
        });
        me.A.push({
            sprite: me.p4word.getComponent(cc.Animation),
            animState: me.p4word.getComponent(cc.Animation).getAnimationState('p4wordA'), //正动画对象
            animStatef: me.p4word.getComponent(cc.Animation).getAnimationState('p4wordAf') //反动画对象
        });
        me.A.push({
            sprite: me.p5man.getComponent(cc.Animation),
            animState: me.p5man.getComponent(cc.Animation).getAnimationState('p5manA'), //正动画对象
            animStatef: me.p5man.getComponent(cc.Animation).getAnimationState('p5manAf') //反动画对象
        });
        me.A.push({
            sprite: me.p5pa.getComponent(cc.Animation),
            animState: me.p5pa.getComponent(cc.Animation).getAnimationState('p5paA'), //正动画对象
            animStatef: me.p5pa.getComponent(cc.Animation).getAnimationState('p5paAf') //反动画对象
        });
        me.A.push({
            sprite: me.p5wei.getComponent(cc.Animation),
            animState: me.p5wei.getComponent(cc.Animation).getAnimationState('p5weiA'), //正动画对象
            animStatef: me.p5wei.getComponent(cc.Animation).getAnimationState('p5weiAf') //反动画对象
        });
        me.A.push({
            sprite: me.p5hehe.getComponent(cc.Animation),
            animState: me.p5hehe.getComponent(cc.Animation).getAnimationState('p5heheA'), //正动画对象
            animStatef: me.p5hehe.getComponent(cc.Animation).getAnimationState('p5heheAf') //反动画对象
        });
        me.A.push({
            sprite: me.p5han.getComponent(cc.Animation),
            animState: me.p5han.getComponent(cc.Animation).getAnimationState('p5hanA'), //正动画对象
            animStatef: me.p5han.getComponent(cc.Animation).getAnimationState('p5hanAf') //反动画对象
        });
        me.A.push({
            sprite: me.p5word.getComponent(cc.Animation),
            animState: me.p5word.getComponent(cc.Animation).getAnimationState('p5wordA'), //正动画对象
            animStatef: me.p5word.getComponent(cc.Animation).getAnimationState('p5wordAf') //反动画对象
        });
        me.A.push({
            sprite: me.p6word.getComponent(cc.Animation),
            animState: me.p6word.getComponent(cc.Animation).getAnimationState('p6wordA'), //正动画对象
            animStatef: me.p6word.getComponent(cc.Animation).getAnimationState('p6wordAf') //反动画对象
        });
        me.A.push({
            sprite: me.p6qianjing.getComponent(cc.Animation),
            animState: me.p6qianjing.getComponent(cc.Animation).getAnimationState('p6qianjingA'), //正动画对象
            animStatef: me.p6qianjing.getComponent(cc.Animation).getAnimationState('p6qianjingAf') //反动画对象
        });
        me.A.push({
            sprite: me.p6wei.getComponent(cc.Animation),
            animState: me.p6wei.getComponent(cc.Animation).getAnimationState('p6weiA'), //正动画对象
            animStatef: me.p6wei.getComponent(cc.Animation).getAnimationState('p6weiAf') //反动画对象
        });
        me.A.push({
            sprite: me.p6ye.getComponent(cc.Animation),
            animState: me.p6ye.getComponent(cc.Animation).getAnimationState('p6yeA'), //正动画对象
            animStatef: me.p6ye.getComponent(cc.Animation).getAnimationState('p6yeAf') //反动画对象
        });
        me.A.push({
            sprite: me.p7word.getComponent(cc.Animation),
            animState: me.p7word.getComponent(cc.Animation).getAnimationState('p7wordA'), //正动画对象
            animStatef: me.p7word.getComponent(cc.Animation).getAnimationState('p7wordAf') //反动画对象
        });
        me.A.push({
            sprite: me.p7main.getComponent(cc.Animation),
            animState: me.p7main.getComponent(cc.Animation).getAnimationState('p7mainA'), //正动画对象
            animStatef: me.p7main.getComponent(cc.Animation).getAnimationState('p7mainAf') //反动画对象
        });
        me.A.push({
            sprite: me.p7roommate.getComponent(cc.Animation),
            animState: me.p7roommate.getComponent(cc.Animation).getAnimationState('p7roommateA'), //正动画对象
            animStatef: me.p7roommate.getComponent(cc.Animation).getAnimationState('p7roommateAf') //反动画对象
        });
        me.A.push({
            sprite: me.p7han.getComponent(cc.Animation),
            animState: me.p7han.getComponent(cc.Animation).getAnimationState('p7hanA'), //正动画对象
            animStatef: me.p7han.getComponent(cc.Animation).getAnimationState('p7hanAf') //反动画对象
        });
        me.A.push({
            sprite: me.p7shang.getComponent(cc.Animation),
            animState: me.p7shang.getComponent(cc.Animation).getAnimationState('p7shangA'), //正动画对象
            animStatef: me.p7shang.getComponent(cc.Animation).getAnimationState('p7shangAf') //反动画对象
        });
        me.A.push({
            sprite: me.p81.getComponent(cc.Animation),
            animState: me.p81.getComponent(cc.Animation).getAnimationState('p81A'), //正动画对象
            animStatef: me.p81.getComponent(cc.Animation).getAnimationState('p81Af') //反动画对象
        });
        me.A.push({
            sprite: me.p8phone.getComponent(cc.Animation),
            animState: me.p8phone.getComponent(cc.Animation).getAnimationState('p8phoneA'), //正动画对象
            animStatef: me.p8phone.getComponent(cc.Animation).getAnimationState('p8phoneAf') //反动画对象
        });
        me.A.push({
            sprite: me.p8word.getComponent(cc.Animation),
            animState: me.p8word.getComponent(cc.Animation).getAnimationState('p8wordA'), //正动画对象
            animStatef: me.p8word.getComponent(cc.Animation).getAnimationState('p8wordAf') //反动画对象
        });
        me.A.push({
            sprite: me.p9man.getComponent(cc.Animation),
            animState: me.p9man.getComponent(cc.Animation).getAnimationState('p9manA'), //正动画对象
            animStatef: me.p9man.getComponent(cc.Animation).getAnimationState('p9manAf') //反动画对象
        });
        me.A.push({
            sprite: me.p9word.getComponent(cc.Animation),
            animState: me.p9word.getComponent(cc.Animation).getAnimationState('p9wordA'), //正动画对象
            animStatef: me.p9word.getComponent(cc.Animation).getAnimationState('p9wordAf') //反动画对象
        });
        me.A.push({
            sprite: me.p9girl.getComponent(cc.Animation),
            animState: me.p9girl.getComponent(cc.Animation).getAnimationState('p9girlA'), //正动画对象
            animStatef: me.p9girl.getComponent(cc.Animation).getAnimationState('p9girlAf') //反动画对象
        });
        me.A.push({
            sprite: me.p9a.getComponent(cc.Animation),
            animState: me.p9a.getComponent(cc.Animation).getAnimationState('p9aA'), //正动画对象
            animStatef: me.p9a.getComponent(cc.Animation).getAnimationState('p9aAf') //反动画对象
        });
        me.A.push({
            sprite: me.p9cat.getComponent(cc.Animation),
            animState: me.p9cat.getComponent(cc.Animation).getAnimationState('catA'), //正动画对象
            animStatef: me.p9cat.getComponent(cc.Animation).getAnimationState('catAf') //反动画对象
        });
        me.A.push({
            sprite: me.endtoy1.getComponent(cc.Animation),
            animState: me.endtoy1.getComponent(cc.Animation).getAnimationState('endtoy1A'), //正动画对象
            animStatef: me.endtoy1.getComponent(cc.Animation).getAnimationState('endtoy1Af') //反动画对象
        });
        me.A.push({
            sprite: me.endtoy2.getComponent(cc.Animation),
            animState: me.endtoy2.getComponent(cc.Animation).getAnimationState('endtoy2A'), //正动画对象
            animStatef: me.endtoy2.getComponent(cc.Animation).getAnimationState('endtoy2Af') //反动画对象
        });
        me.A.push({
            sprite: me.endtoy3.getComponent(cc.Animation),
            animState: me.endtoy3.getComponent(cc.Animation).getAnimationState('endtoy3A'), //正动画对象
            animStatef: me.endtoy3.getComponent(cc.Animation).getAnimationState('endtoy3Af') //反动画对象
        });
        me.A.push({
            sprite: me.endtoy4.getComponent(cc.Animation),
            animState: me.endtoy4.getComponent(cc.Animation).getAnimationState('endtoy4A'), //正动画对象
            animStatef: me.endtoy4.getComponent(cc.Animation).getAnimationState('endtoy4Af') //反动画对象
        });
        me.A.push({
            sprite: me.endtoy5.getComponent(cc.Animation),
            animState: me.endtoy5.getComponent(cc.Animation).getAnimationState('endtoy5A'), //正动画对象
            animStatef: me.endtoy5.getComponent(cc.Animation).getAnimationState('endtoy5Af') //反动画对象
        });
        me.A.push({
            sprite: me.endtoy6.getComponent(cc.Animation),
            animState: me.endtoy6.getComponent(cc.Animation).getAnimationState('endtoy6A'), //正动画对象
            animStatef: me.endtoy6.getComponent(cc.Animation).getAnimationState('endtoy6Af') //反动画对象
        });
    },
    update: function update(dt) {
        var me = this;
        if (me.content.y > me.nowY) {
            console.log('下');
            me.down = 1;
        } else if (me.content.y < me.nowY) {
            me.down = 2;
        } else {
            me.down = 0;
        };
        if (me.down == 0) {
            me.downPause();
        }
        me.initAnimation();
        //闪
        if (me.down == 1 && me.shantf && me.nowY >= 7700) {
            me.shan.active = true;
            me.shantf = false;
        }
        if (me.down == 2 && !me.shantf && me.nowY < 7700) {
            me.shan.active = false;
            me.shantf = true;
        }
        //TV游戏机自动播放
        if (me.down == 1 && me.tvtf && me.nowY >= 9300) {
            me.tv.active = true;
            me.tvtf = false;
        }
        if (me.down == 2 && !me.tvtf && me.nowY < 9300) {
            me.tv.active = false;
            me.tvtf = true;
        }
        //p5游戏机角色1
        if (me.down == 1 && me.player1tf && me.nowY >= 9300) {
            me.player1.active = true;
            me.player1tf = false;
        }
        if (me.down == 2 && !me.player1tf && me.nowY < 9300) {
            me.player1.active = false;
            me.player1tf = true;
        }
        //p5游戏机角色2
        if (me.down == 1 && me.player2tf && me.nowY >= 9300) {
            me.player2.active = true;
            me.player2tf = false;
        }
        if (me.down == 2 && !me.player2tf && me.nowY < 9300) {
            me.player2.active = false;
            me.player2tf = true;
        }
        me.nowY = me.content.y;
    },
    lateUpdate: function lateUpdate() {
        var me = this;
        console.log(me.nowY);
    },
    pauseMusic: function pauseMusic() {
        var me = this;
        cc.audioEngine.pause(me.current);
    },
    resumeMusic: function resumeMusic() {
        var me = this;
        cc.audioEngine.resume(me.current);
    },
    downPause: function downPause() {
        var me = this;
        for (var i = 0; i < Global.AA.length; i++) {
            if (me.nowY >= Global.AA[i].limitY && me.nowY <= Global.AA[i].limitY2) {
                me.A[i].sprite.pause(Global.AA[i].name);
                me.A[i].sprite.pause(Global.AA[i].name2);
                console.log('暂停');
            }
        }
    },
    initAnimation: function initAnimation() {
        var me = this;
        for (var i = 0; i < Global.AA.length; i++) {
            if (me.nowY >= Global.AA[i].limitY && me.down == 1 && !Global.AA[i].tf) {
                //正序动画
                me.A[i].sprite.pause(Global.AA[i].name);
                if (me.down == 0) {} else {
                    if (!Global.AA[i].zheng) {
                        Global.AA[i].zheng = true;
                        Global.AA[i].zhuan2 = false;
                        //第一帧
                        me.A[i].sprite.setCurrentTime(Global.AA[i].nowtime, Global.AA[i].name);
                    } else {
                        if (Global.AA[i].zhuan2) {
                            Global.AA[i].nowtime = me.A[i].animState.time;
                            // 正序播放
                            me.A[i].sprite.setCurrentTime(Global.AA[i].nowtime, Global.AA[i].name);
                            me.A[i].sprite.play(Global.AA[i].name);
                            if (Global.AA[i].name == 'catA' && !me.mute && me.nowY >= 1660) {
                                me.audioSourcep91.play();
                            }
                        } else {
                            Global.AA[i].nowtime = me.A[i].animState.time;
                            Global.AA[i].zhuan2 = true; //反向后的第二次执行动画
                            // console.log('正第二帧' + Global.AA[i].nowtime)
                            me.A[i].sprite.play(Global.AA[i].name);
                            me.A[i].sprite.setCurrentTime(Global.AA[i].nowtime, Global.AA[i].name);
                            if (Global.AA[i].name == 'p1mancengA' && !me.mute) {
                                me.audioSourcep1.play();
                            }
                            if (Global.AA[i].name == 'p2man1A' && !me.mute) {
                                me.audioSourcep2.play();
                            }
                            if (Global.AA[i].name == 'p3man1A' && !me.mute) {
                                me.audioSourcep3.play();
                            }
                            if (Global.AA[i].name == 'p4truthA' && !me.mute) {
                                me.audioSourcep4.play();
                            }
                            if (Global.AA[i].name == 'p5manA' && !me.mute) {
                                me.audioSourcep5.play();
                            }
                            if (Global.AA[i].name == 'p6yeA' && !me.mute) {
                                me.audioSourcep6.play();
                            }
                            if (Global.AA[i].name == 'p7mainA' && !me.mute) {
                                me.audioSourcep7.play();
                            }
                            if (Global.AA[i].name == 'p8phoneA' && !me.mute) {
                                me.audioSourcep8.play();
                            }
                            if (Global.AA[i].name == 'p9girlA' && !me.mute) {
                                me.audioSourcep9.play();
                            }
                        }
                    }
                    Global.AA[i].ftf = false;
                }
            } else if (me.nowY <= Global.AA[i].limitY2 && me.down == 2 && !Global.AA[i].ftf) {
                //倒序动画
                me.A[i].sprite.pause(Global.AA[i].name2);
                if (me.down == 0) {} else {
                    if (Global.AA[i].zheng) {
                        Global.AA[i].nowtimef = me.A[i].animState.duration - Global.AA[i].nowtime;
                        Global.AA[i].zhuanf = me.A[i].animState.duration - Global.AA[i].nowtime;
                        Global.AA[i].zheng = false;
                        Global.AA[i].zhuan2 = false;
                        // 第一帧
                        Global.AA[i].tf = false;
                        me.A[i].sprite.setCurrentTime(Global.AA[i].nowtimef, Global.AA[i].name2);
                    } else {
                        if (!Global.AA[i].zhuan2) {
                            Global.AA[i].nowtimef = me.A[i].animStatef.time;
                            Global.AA[i].zhuan2 = true; //反向后的第二次执行动画
                            // 第二帧
                            Global.AA[i].tf = false;
                            Global.AA[i].three = true;
                            me.A[i].sprite.play(Global.AA[i].name2);
                            me.A[i].sprite.setCurrentTime(Global.AA[i].nowtimef, Global.AA[i].name2);
                        } else {
                            Global.AA[i].nowtimef = me.A[i].animStatef.time;
                            //倒序播放
                            Global.AA[i].nowtime = me.A[i].animState.duration - Global.AA[i].nowtimef;
                            Global.AA[i].tf = false;
                            me.A[i].sprite.setCurrentTime(Global.AA[i].nowtimef, Global.AA[i].name2);
                            me.A[i].sprite.play(Global.AA[i].name2);
                        }
                    }
                }
            }
            me.animateCallBack(i);
        }
    },
    animateCallBack: function animateCallBack(i) {
        var me = this;
        me.A[i].animState.off();
        me.A[i].animState.on('finished', function () {
            Global.AA[i].nowtime = me.A[i].animState.duration;
            console.log('正结束' + Global.AA[i].nowtime);
            Global.AA[i].tf = true;
            Global.AA[i].ftf = false;
        }, me);
        me.A[i].animStatef.on('finished', function () {
            Global.AA[i].nowtime = 0;
            console.log('反结束' + Global.AA[i].nowtimef);
            Global.AA[i].ftf = true;
            Global.AA[i].tf = false;
        }, me);
    },
    start: function start() {
        var me = this;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=game.js.map
        