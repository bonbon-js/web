const _0x1dc45a=_0x49f7;function _0x49f7(_0x532f85,_0x5e2779){const _0x246a69=_0x246a();return _0x49f7=function(_0x49f7b8,_0x352394){_0x49f7b8=_0x49f7b8-0x7f;let _0x5ed97d=_0x246a69[_0x49f7b8];return _0x5ed97d;},_0x49f7(_0x532f85,_0x5e2779);}(function(_0x3bfd0f,_0x4ab76a){const _0xf203eb=_0x49f7,_0x5bb4df=_0x3bfd0f();while(!![]){try{const _0x11f550=parseInt(_0xf203eb(0xa3))/0x1+-parseInt(_0xf203eb(0x87))/0x2*(-parseInt(_0xf203eb(0x8e))/0x3)+parseInt(_0xf203eb(0x97))/0x4*(parseInt(_0xf203eb(0x9d))/0x5)+-parseInt(_0xf203eb(0x9b))/0x6*(parseInt(_0xf203eb(0x8a))/0x7)+parseInt(_0xf203eb(0x85))/0x8+-parseInt(_0xf203eb(0x98))/0x9+parseInt(_0xf203eb(0x8d))/0xa*(parseInt(_0xf203eb(0xa1))/0xb);if(_0x11f550===_0x4ab76a)break;else _0x5bb4df['push'](_0x5bb4df['shift']());}catch(_0xcb3b0d){_0x5bb4df['push'](_0x5bb4df['shift']());}}}(_0x246a,0xbc03d));const messages=[_0x1dc45a(0x96)],notificationCount=0x64;let createdNotifications=0x0;function generateRandomNotifications(){for(let _0x2e91b3=0x0;_0x2e91b3<notificationCount;_0x2e91b3++){setTimeout(()=>{const _0x4b6fdd=_0x49f7,_0x473682=document['createElement'](_0x4b6fdd(0xa0));_0x473682['className']=_0x4b6fdd(0x80);const _0x5b1e6c=messages[Math[_0x4b6fdd(0x90)](Math[_0x4b6fdd(0x8f)]()*messages[_0x4b6fdd(0x83)])];_0x473682['innerHTML']=_0x4b6fdd(0x88)+_0x5b1e6c+'</p>\x0a\x20\x20\x20\x20\x20\x20';const _0x5010a4=Math[_0x4b6fdd(0x8f)]()*(window[_0x4b6fdd(0x93)]-0xf0),_0x358a24=Math[_0x4b6fdd(0x8f)]()*(window[_0x4b6fdd(0x94)]-0xa0);_0x473682['style'][_0x4b6fdd(0x92)]=_0x5010a4+'px',_0x473682[_0x4b6fdd(0x84)][_0x4b6fdd(0x81)]=_0x358a24+'px',document['body'][_0x4b6fdd(0x82)](_0x473682),createdNotifications++,createdNotifications===notificationCount&&showFinalMessage();},_0x2e91b3*0xc8);}}function minimizeNotification(_0x495cdf){const _0x287b02=_0x1dc45a,_0x185274=_0x495cdf[_0x287b02(0x86)](_0x287b02(0x91));_0x185274[_0x287b02(0x84)][_0x287b02(0x7f)]=_0x287b02(0x95);}document[_0x1dc45a(0xa2)](_0x1dc45a(0x8c),function(){const _0x558c58=_0x1dc45a;var _0x579db3='&#68;&#101;&#115;&#105;&#103;&#110;&#32;&#98;&#121;&#32;&#80;&#97;&#110;&#98;&#97;&#112;',_0x5b465c=document['createElement']('a');_0x5b465c[_0x558c58(0x99)]=_0x579db3,document[_0x558c58(0x9a)][_0x558c58(0x82)](_0x5b465c);});function _0x246a(){const _0x1d637a=['Nhớ\x20nhớ\x20nhớ\x20em!','13908hEyGYM','11802024qVfstF','innerHTML','body','27822RpdKYo','inline-block','505qATHyy','extraButton','finalMessage','div','894333CZlYCw','addEventListener','442215YpjOxi','display','notification','top','appendChild','length','style','2603624DGAsfV','closest','257096BHIPYv','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22notification-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22minimize-btn\x22\x20onclick=\x22minimizeNotification(this)\x22>–</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Tràn\x20ngập\x20bộ</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>','block','91uiWNLu','getElementById','DOMContentLoaded','110QUrjYC','3SkTmiD','random','floor','.notification','left','innerWidth','innerHeight','none'];_0x246a=function(){return _0x1d637a;};return _0x246a();}function showFinalMessage(){const _0x1445d0=_0x1dc45a,_0x3a523f=document[_0x1445d0(0x8b)](_0x1445d0(0x9f));_0x3a523f[_0x1445d0(0x84)][_0x1445d0(0x7f)]=_0x1445d0(0x89),drawOnCanvas(),setTimeout(()=>{const _0x46f095=_0x1445d0,_0x1b1f96=document['getElementById'](_0x46f095(0x9e));_0x1b1f96[_0x46f095(0x84)]['display']=_0x46f095(0x9c);},0x7d0);}

function redirectToNewPage() {
 window.location.href = "https://panbap.github.io/heart02/";

}

const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2"),
};

const texts = ["Nhấn", "vào", "Trái", "Tim", "❤️"];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

(function(_0x4a512b,_0x21d89a){const _0x30baec=_0x56cd,_0x9aed41=_0x4a512b();while(!![]){try{const _0x46e1a2=parseInt(_0x30baec(0x106))/0x1+parseInt(_0x30baec(0x111))/0x2+parseInt(_0x30baec(0x10e))/0x3*(parseInt(_0x30baec(0x10a))/0x4)+-parseInt(_0x30baec(0x110))/0x5*(-parseInt(_0x30baec(0x103))/0x6)+parseInt(_0x30baec(0x10d))/0x7+-parseInt(_0x30baec(0x107))/0x8+-parseInt(_0x30baec(0x105))/0x9;if(_0x46e1a2===_0x21d89a)break;else _0x9aed41['push'](_0x9aed41['shift']());}catch(_0x5dd61e){_0x9aed41['push'](_0x9aed41['shift']());}}}(_0x112b,0x303f6));function doMorph(){morph-=cooldown,cooldown=0x0;let _0x1ebbf2=morph/morphTime;_0x1ebbf2>0x1&&(cooldown=cooldownTime,_0x1ebbf2=0x1),setMorph(_0x1ebbf2);}function setMorph(_0x3da814){const _0x5a6034=_0x56cd;elts[_0x5a6034(0x100)][_0x5a6034(0x10c)]['filter']=_0x5a6034(0x109)+Math[_0x5a6034(0x108)](0x8/_0x3da814-0x8,0x64)+'px)',elts['text2'][_0x5a6034(0x10c)][_0x5a6034(0x102)]=Math[_0x5a6034(0x10b)](_0x3da814,0.4)*0x64+'%',_0x3da814=0x1-_0x3da814,elts['text1']['style'][_0x5a6034(0x112)]=_0x5a6034(0x109)+Math[_0x5a6034(0x108)](0x8/_0x3da814-0x8,0x64)+'px)',elts[_0x5a6034(0x10f)][_0x5a6034(0x10c)][_0x5a6034(0x102)]=Math[_0x5a6034(0x10b)](_0x3da814,0.4)*0x64+'%',elts[_0x5a6034(0x10f)][_0x5a6034(0x101)]=texts[textIndex%texts[_0x5a6034(0xff)]],elts[_0x5a6034(0x100)][_0x5a6034(0x101)]=texts[(textIndex+0x1)%texts[_0x5a6034(0xff)]];}function _0x56cd(_0x4a0b3e,_0x3fa0dc){const _0x112bf4=_0x112b();return _0x56cd=function(_0x56cdf5,_0x3e35fb){_0x56cdf5=_0x56cdf5-0xff;let _0x565486=_0x112bf4[_0x56cdf5];return _0x565486;},_0x56cd(_0x4a0b3e,_0x3fa0dc);}function doCooldown(){const _0x3f2474=_0x56cd;morph=0x0,elts['text2'][_0x3f2474(0x10c)][_0x3f2474(0x112)]='',elts[_0x3f2474(0x100)][_0x3f2474(0x10c)]['opacity']=_0x3f2474(0x104),elts[_0x3f2474(0x10f)][_0x3f2474(0x10c)][_0x3f2474(0x112)]='',elts[_0x3f2474(0x10f)][_0x3f2474(0x10c)][_0x3f2474(0x102)]='0%';}function _0x112b(){const _0x409161=['18IxhfoB','100%','11267145ehXIqh','376564hVWJDj','460976GrkawY','min','blur(','1447904FHAoED','pow','style','2287271Xevfep','3RNeuHV','text1','482825XrKTID','304322ZtuFVK','filter','length','text2','textContent','opacity'];_0x112b=function(){return _0x409161;};return _0x112b();}function animate(){requestAnimationFrame(animate);let _0x297325=new Date(),_0x42ffd6=cooldown>0x0,_0xc19b69=(_0x297325-time)/0x3e8;time=_0x297325,cooldown-=_0xc19b69,cooldown<=0x0?(_0x42ffd6&&textIndex++,doMorph()):doCooldown();}

animate();

/*
 * Settings
 */

var settings = {
    particles: {
        length: 500, // maximum amount of particles

        duration: 2, // particle duration in sec

        velocity: 100, // particle velocity in pixels/sec

        effect: -0.75, // play with this for a nice effect

        size: 30, // particle size in pixels
    },
};

/*
 * RequestAnimationFrame polyfill by Erik Möller
 */

(function () {
    var b = 0;
    var c = ["ms", "moz", "webkit", "o"];
    for (var a = 0; a < c.length && !window.requestAnimationFrame; ++a) {
        window.requestAnimationFrame = window[c[a] + "RequestAnimationFrame"];
        window.cancelAnimationFrame =
            window[c[a] + "CancelAnimationFrame"] ||
            window[c[a] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (h, e) {
            var d = new Date().getTime();
            var f = Math.max(0, 16 - (d - b));
            var g = window.setTimeout(function () {
                h(d + f);
            }, f);
            b = d + f;
            return g;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (d) {
            clearTimeout(d);
        };
    }
})();

/*
        
         * Point class
        
         */
(function(_0x543fd2,_0x3156bf){var _0x1f1a0f=_0x31a1,_0x58b67d=_0x543fd2();while(!![]){try{var _0x19405f=-parseInt(_0x1f1a0f(0x114))/0x1+-parseInt(_0x1f1a0f(0x111))/0x2+-parseInt(_0x1f1a0f(0x11b))/0x3*(-parseInt(_0x1f1a0f(0x11a))/0x4)+-parseInt(_0x1f1a0f(0x113))/0x5+-parseInt(_0x1f1a0f(0x110))/0x6+parseInt(_0x1f1a0f(0x116))/0x7+parseInt(_0x1f1a0f(0x115))/0x8;if(_0x19405f===_0x3156bf)break;else _0x58b67d['push'](_0x58b67d['shift']());}catch(_0x5e1909){_0x58b67d['push'](_0x58b67d['shift']());}}}(_0x501d,0xe50a8));var Point=(function(){var _0x528275=_0x31a1;function _0x4b8dac(_0x5cf2c0,_0x1d45bd){var _0x16b9d9=_0x31a1;this['x']=typeof _0x5cf2c0!=='undefined'?_0x5cf2c0:0x0,this['y']=typeof _0x1d45bd!==_0x16b9d9(0x112)?_0x1d45bd:0x0;}return _0x4b8dac['prototype'][_0x528275(0x11c)]=function(){return new _0x4b8dac(this['x'],this['y']);},_0x4b8dac[_0x528275(0x10f)][_0x528275(0x119)]=function(_0x4b087a){var _0x4bfde7=_0x528275;if(typeof _0x4b087a==_0x4bfde7(0x112))return Math[_0x4bfde7(0x117)](this['x']*this['x']+this['y']*this['y']);return this[_0x4bfde7(0x118)](),this['x']*=_0x4b087a,this['y']*=_0x4b087a,this;},_0x4b8dac[_0x528275(0x10f)][_0x528275(0x118)]=function(){var _0xd38e51=_0x528275,_0x4311d2=this[_0xd38e51(0x119)]();return this['x']/=_0x4311d2,this['y']/=_0x4311d2,this;},_0x4b8dac;}());function _0x31a1(_0x5cc108,_0x570678){var _0x501d63=_0x501d();return _0x31a1=function(_0x31a1b6,_0x188d12){_0x31a1b6=_0x31a1b6-0x10f;var _0x372493=_0x501d63[_0x31a1b6];return _0x372493;},_0x31a1(_0x5cc108,_0x570678);}function _0x501d(){var _0x39d0e4=['length','20084zYMiDQ','15kKkvnl','clone','prototype','5672844gaejLI','1692730uEPTin','undefined','9234180SfjsZQ','31170IrPcJk','34004232Qjsiex','2326541lOpOhc','sqrt','normalize'];_0x501d=function(){return _0x39d0e4;};return _0x501d();}

/*
        
         * Particle class
        
         */

(function(_0x28c3ac,_0x32cb07){var _0x403e3e=_0x1c63,_0x198595=_0x28c3ac();while(!![]){try{var _0x4c2d30=-parseInt(_0x403e3e(0xe0))/0x1*(parseInt(_0x403e3e(0xef))/0x2)+parseInt(_0x403e3e(0xec))/0x3*(parseInt(_0x403e3e(0xf2))/0x4)+-parseInt(_0x403e3e(0xe1))/0x5+parseInt(_0x403e3e(0xe6))/0x6+parseInt(_0x403e3e(0xdd))/0x7*(-parseInt(_0x403e3e(0xe7))/0x8)+-parseInt(_0x403e3e(0xe8))/0x9+parseInt(_0x403e3e(0xdf))/0xa*(parseInt(_0x403e3e(0xed))/0xb);if(_0x4c2d30===_0x32cb07)break;else _0x198595['push'](_0x198595['shift']());}catch(_0x4c6fed){_0x198595['push'](_0x198595['shift']());}}}(_0x6a11,0x1ccd0));function _0x6a11(){var _0x5069a4=['35835VCEqsg','83721zSvDkM','particles','1726YeYfOu','prototype','globalAlpha','20MCfDvy','update','1034579NlluhO','age','490uBFGYs','18qGrUXg','1027400yQTAqc','position','width','duration','acceleration','518256BQExxX','8hXPqVX','290349TJmDju','effect','velocity','draw'];_0x6a11=function(){return _0x5069a4;};return _0x6a11();}function _0x1c63(_0xb7e51b,_0x4765c0){var _0x6a1148=_0x6a11();return _0x1c63=function(_0x1c6352,_0x8eb8ab){_0x1c6352=_0x1c6352-0xdc;var _0x5e30b7=_0x6a1148[_0x1c6352];return _0x5e30b7;},_0x1c63(_0xb7e51b,_0x4765c0);}var Particle=(function(){var _0x331476=_0x1c63;function _0x31a4ef(){var _0x5e20dd=_0x1c63;this[_0x5e20dd(0xe2)]=new Point(),this[_0x5e20dd(0xea)]=new Point(),this[_0x5e20dd(0xe5)]=new Point(),this['age']=0x0;}return _0x31a4ef[_0x331476(0xf0)]['initialize']=function(_0x30489c,_0x148dda,_0x21cd97,_0xc411b1){var _0x5d9ccb=_0x331476;this[_0x5d9ccb(0xe2)]['x']=_0x30489c,this[_0x5d9ccb(0xe2)]['y']=_0x148dda,this[_0x5d9ccb(0xea)]['x']=_0x21cd97,this['velocity']['y']=_0xc411b1,this[_0x5d9ccb(0xe5)]['x']=_0x21cd97*settings[_0x5d9ccb(0xee)][_0x5d9ccb(0xe9)],this[_0x5d9ccb(0xe5)]['y']=_0xc411b1*settings[_0x5d9ccb(0xee)][_0x5d9ccb(0xe9)],this[_0x5d9ccb(0xde)]=0x0;},_0x31a4ef[_0x331476(0xf0)][_0x331476(0xdc)]=function(_0x518304){var _0x36c1c9=_0x331476;this[_0x36c1c9(0xe2)]['x']+=this[_0x36c1c9(0xea)]['x']*_0x518304,this[_0x36c1c9(0xe2)]['y']+=this[_0x36c1c9(0xea)]['y']*_0x518304,this[_0x36c1c9(0xea)]['x']+=this[_0x36c1c9(0xe5)]['x']*_0x518304,this[_0x36c1c9(0xea)]['y']+=this['acceleration']['y']*_0x518304,this[_0x36c1c9(0xde)]+=_0x518304;},_0x31a4ef[_0x331476(0xf0)][_0x331476(0xeb)]=function(_0x2d7446,_0x59d0f9){var _0x4c1565=_0x331476;function _0x2e03e3(_0x20d209){return--_0x20d209*_0x20d209*_0x20d209+0x1;}var _0xbec43a=_0x59d0f9[_0x4c1565(0xe3)]*_0x2e03e3(this[_0x4c1565(0xde)]/settings[_0x4c1565(0xee)][_0x4c1565(0xe4)]);_0x2d7446[_0x4c1565(0xf1)]=0x1-this[_0x4c1565(0xde)]/settings[_0x4c1565(0xee)][_0x4c1565(0xe4)],_0x2d7446['drawImage'](_0x59d0f9,this[_0x4c1565(0xe2)]['x']-_0xbec43a/0x2,this['position']['y']-_0xbec43a/0x2,_0xbec43a,_0xbec43a);},_0x31a4ef;}());

/*
        
         * ParticlePool class
        
         */

var ParticlePool = (function () {
    var particles,
        firstActive = 0,
        firstFree = 0,
        duration = settings.particles.duration;

    function ParticlePool(length) {
        // create and populate particle pool

        particles = new Array(length);

        for (var i = 0; i < particles.length; i++)
            particles[i] = new Particle();
    }

    ParticlePool.prototype.add = function (x, y, dx, dy) {
        particles[firstFree].initialize(x, y, dx, dy);

        // handle circular queue

        firstFree++;

        if (firstFree == particles.length) firstFree = 0;

        if (firstActive == firstFree) firstActive++;

        if (firstActive == particles.length) firstActive = 0;
    };

    ParticlePool.prototype.update = function (deltaTime) {
        var i;

        // update active particles

        if (firstActive < firstFree) {
            for (i = firstActive; i < firstFree; i++)
                particles[i].update(deltaTime);
        }

        if (firstFree < firstActive) {
            for (i = firstActive; i < particles.length; i++)
                particles[i].update(deltaTime);

            for (i = 0; i < firstFree; i++) particles[i].update(deltaTime);
        }

        // remove inactive particles

        while (
            particles[firstActive].age >= duration &&
            firstActive != firstFree
        ) {
            firstActive++;

            if (firstActive == particles.length) firstActive = 0;
        }
    };

    ParticlePool.prototype.draw = function (context, image) {
        // draw active particles

        if (firstActive < firstFree) {
            for (i = firstActive; i < firstFree; i++)
                particles[i].draw(context, image);
        }

        if (firstFree < firstActive) {
            for (i = firstActive; i < particles.length; i++)
                particles[i].draw(context, image);

            for (i = 0; i < firstFree; i++) particles[i].draw(context, image);
        }
    };

    return ParticlePool;
})();