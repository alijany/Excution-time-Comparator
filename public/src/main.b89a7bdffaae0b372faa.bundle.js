!function(n){function r(r){for(var t,s,u=r[0],o=r[1],c=r[2],l=0,f=[];l<u.length;l++)s=u[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t]);for(p&&p(r);f.length;)f.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var n,r=0;r<a.length;r++){for(var e=a[r],t=!0,u=1;u<e.length;u++){var o=e[u];0!==i[o]&&(t=!1)}t&&(a.splice(r--,1),n=s(s.s=e[0]))}return n}var t={},i={0:0},a=[];function s(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=n,s.c=t,s.d=function(n,r,e){s.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},s.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,r){if(1&r&&(n=s(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var t in n)s.d(e,t,function(r){return n[r]}.bind(null,t));return e},s.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(r,"a",r),r},s.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},s.p="";var u=window.webpackJsonp=window.webpackJsonp||[],o=u.push.bind(u);u.push=r,u=u.slice();for(var c=0;c<u.length;c++)r(u[c]);var p=o;a.push([18,1]),e()}({0:function(n,r,e){"use strict";e.d(r,"a",(function(){return t}));var t=[{name:"عدد اول عادی",main:"algorithm = {\r\n\r\n    initialize: function () {\r\n        this.numbers = [10000019, 20000003, 30000001, 40000003, 50000017, 60000011, 70000027, 80000023, 90000049, 100000007];\r\n        // this.numbers = [99991, 199999, 299993, 399989, 499979, 599999, 699967, 799999, 899981, 999983];\r\n        this.i = 0;\r\n    },\r\n\r\n    update: function () {\r\n        this.i++;\r\n    },\r\n\r\n    run: function () {\r\n        var num = this.numbers[this.i];\r\n        for (var i = 2; i < num; i++)\r\n            if (num % i === 0) return false;\r\n        return num > 1;\r\n    }\r\n};",series:void 0},{name:"عدد اول فرد",main:"algorithm = {\r\n\r\n    initialize: function () {\r\n        this.numbers = [10000019, 20000003, 30000001, 40000003, 50000017, 60000011, 70000027, 80000023, 90000049, 100000007];\r\n        // this.numbers = [99991, 199999, 299993, 399989, 499979, 599999, 699967, 799999, 899981, 999983];\r\n        this.i = 0;\r\n    },\r\n\r\n    update: function () {\r\n        this.i++;\r\n    },\r\n\r\n    run: function () {\r\n        var num = this.numbers[this.i];\r\n        for (var i = 3; i < num; i += 2)\r\n            if (num % i === 0) return false;\r\n        return num > 1;\r\n    }\r\n};",series:void 0},{name:"عدد اول رادیکالی",main:"algorithm = {\r\n\r\n    initialize: function () {\r\n        /*\r\n        this.numbers = \r\n            [1000000007, 7000000001, 13000000073, 19000000007, 25000000013,\r\n            31000000027, 37000000007, 43000000019, 49000000001, 55000000001,\r\n            61000000001, 67000000003, 73000000019, 79000000063, 85000000013,\r\n            91000000037, 97000000037, 103000000007, 109000000001, 115000000007,\r\n            121000000021, 127000000003, 133000000043, 145000000027, 145000000027];\r\n        */\r\n        this.numbers = [99991, 199999, 299993, 399989, 499979, 599999, 699967, 799999, 899981, 999983];\r\n        this.i = 0;\r\n    },\r\n\r\n    update: function () {\r\n        this.i++;\r\n    },\r\n\r\n    run: function () {\r\n        var num = this.numbers[this.i];\r\n        var limit = Math.sqrt(num);\r\n        for (var i = 3; i < limit; i += 2)\r\n            if (num % i === 0) return false;\r\n        return num > 1;\r\n    }\r\n};",series:void 0},{name:"توان عادی",main:"algorithm = {\r\n    initialize: function () {\r\n        this.pow = 2;\r\n        this.base = 2;\r\n    },\r\n\r\n    update: function () {\r\n        this.pow += 3;\r\n    },\r\n\r\n    run: function () {\r\n        var power = 1;\r\n        for (var i = 0; i < this.pow; i++) {\r\n            power = multiply(power, this.base);\r\n        }\r\n\r\n        return power;\r\n    }\r\n};\r\n",series:void 0},{name:"توان بازگشتی",main:"algorithm = {\r\n    initialize: function () {\r\n        this.pow = 2;\r\n        this.base = 2;\r\n    },\r\n\r\n    update: function () {\r\n        this.pow += 4;\r\n    },\r\n\r\n    power: function (base, n) {\r\n        if (n == 1)\r\n            return base;\r\n\r\n        if (n % 2 == 0) {\r\n            power = this.power(base, n / 2);\r\n            return multiply(power, power);\r\n        } else {\r\n            power = this.power(base, n - 1);\r\n            return multiply(base, power);\r\n        }\r\n    },\r\n\r\n    run: function () {\r\n        return this.power(this.base, this.pow);\r\n    }\r\n};",series:void 0},{name:"فیبوناتچی مربع کامل",main:"algorithm = {\r\n\r\n  initialize: function () {\r\n    this.n = 0;\r\n    this.fibo = [10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000, 90000000, 100000000];\r\n  },\r\n\r\n  update: function () {\r\n    this.n++;\r\n  },\r\n\r\n  isSquare: function (n) {\r\n    return Math.sqrt(n) % 1 === 0;\r\n  },\r\n\r\n  run: function () {\r\n    var number = this.fibo[this.n];\r\n    number = 5 * multiply(number, number);\r\n    return (this.isSquare(number + 4) || this.isSquare(number - 4))\r\n  }\r\n};",series:void 0},{name:"فیبوناتچی حلقه",main:"algorithm = {\r\n\r\n    initialize: function () {\r\n        this.n = 0;\r\n        this.fibo = [10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000, 90000000, 100000000];\r\n    },\r\n\r\n    update: function () {\r\n        this.n++;\r\n    },\r\n\r\n    run: function () {\r\n        var a = 0;\r\n        var b = 1;\r\n        var sum = 0;\r\n        var number = this.fibo[this.n];\r\n\r\n        do {\r\n            sum = a + b;\r\n            a = b;\r\n            b = sum;\r\n            if (sum == number)\r\n                return true;\r\n        } while (sum <= number);\r\n        return false;\r\n    }\r\n};",series:void 0}]},17:function(n,r,e){n.exports=function(){return new Worker(e.p+"7dc8b90f6b31d49c2ae2.worker.js")}},18:function(n,r,e){"use strict";e.r(r),function(n){var r=e(8),t=e.n(r),i=e(14),a=e.n(i),s=(e(20),e(21),e(23),e(24),e(9)),u=e(4),o=e(0),c=e(17),p=new(e.n(c).a);function l(n){return p.postMessage(n),new Promise((function(n){l.resolve=n}))}p.onmessage=function(n){l.resolve(n.data)};var f,h=0,m=n("#mainAlgorithm"),d=n("#inputLoop"),b=d.val();function v(){return o.a[h].main}function w(){var n=[];return o.a[h].series={name:o.a[h].name,data:[]},o.a.forEach((function(r){r.series&&n.push(r.series)})),n}function g(n,r){return o.a[h].series.data.push(n),s.a.updateSeries(r,!1)}function y(){return(y=a()(t.a.mark((function r(){var e,i,a;return t.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(this).prop("disabled",!0),n(this).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> in process...'),e=w(),r.next=5,l(v());case 5:i=0;case 6:if(!(i<b)){r.next=15;break}return r.next=9,l();case 9:return a=r.sent,r.next=12,g(a.toFixed(3),e);case 12:i++,r.next=6;break;case 15:n(this).prop("disabled",!1),n(this).text("run");case 17:case"end":return r.stop()}}),r,this)})))).apply(this,arguments)}f="",o.a.forEach((function(n,r){f+='<a class="dropdown-item" data-val="'.concat(r,'" href="#">').concat(n.name,"</a>")})),m.append(n(f)),u.a.setValue(v());var x=[];o.a.forEach((function(n){n.series&&x.push(n.series)})),s.a.updateSeries(x,!1),n("#Ok").click((function(){b=d.val()}));var k=!1;n("#mainAlgorithm").on("click","a",(function(){var n=this.getAttribute("data-val");k=!0,u.a.setValue(o.a[n].main),h=n})),u.a.on("change",(function(){k?(k=!1,n("#Update").prop("disabled",!0),n("#Update").html("Update")):(n("#Update").prop("disabled",!1),n("#Update").html('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Update'))})),n("#Update").click((function(){o.a[h].main=u.a.getValue(),n("#Update").prop("disabled",!0),n("#Update").html("Update")})),n("#Run").click((function(){return y.apply(this,arguments)}))}.call(this,e(2))},20:function(n,r,e){},4:function(n,r,e){"use strict";(function(n){e.d(r,"a",(function(){return s}));var t=e(1),i=e.n(t),a=(e(29),e(30),e(31),e(32),e(33),e(34),e(35),e(36),e(37),e(38),e(16));window.JSHINT=a.JSHINT;var s=i()(n("#code")[0],{value:"",mode:"javascript",theme:"material",lineNumbers:!0,lineWrapping:!0,lint:!0,gutters:["CodeMirror-lint-markers"],extraKeys:{"Ctrl-Space":"autocomplete"}});s.setSize("auto","100%")}).call(this,e(2))},9:function(n,r,e){"use strict";(function(n){e.d(r,"a",(function(){return t}));var t=new(e(15).a)(n("#chart")[0],{chart:{height:"95%",type:"line",toolbar:{show:!1}},markers:{size:6,hover:{size:8,sizeOffset:3}},stroke:{curve:"smooth"},series:[],xaxis:{title:{text:"quantity"}},yaxis:{title:{text:"Time (millie second)"}},legend:{position:"top",horizontalAlign:"right"}});t.render()}).call(this,e(2))}});