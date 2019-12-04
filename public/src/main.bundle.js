!function(n){function r(r){for(var e,o,s=r[0],u=r[1],c=r[2],f=0,h=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&h.push(t[o][0]),t[o]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(n[e]=u[e]);for(l&&l(r);h.length;)h.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var n,r=0;r<a.length;r++){for(var i=a[r],e=!0,s=1;s<i.length;s++){var u=i[s];0!==t[u]&&(e=!1)}e&&(a.splice(r--,1),n=o(o.s=i[0]))}return n}var e={},t={0:0},a=[];function o(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=n,o.c=e,o.d=function(n,r,i){o.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:i})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,r){if(1&r&&(n=o(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var e in n)o.d(i,e,function(r){return n[r]}.bind(null,e));return i},o.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(r,"a",r),r},o.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=r,s=s.slice();for(var c=0;c<s.length;c++)r(s[c]);var l=u;a.push([19,1]),i()}([,,,,function(n,r,i){"use strict";(function(n){i.d(r,"a",(function(){return e}));var e=new(i(15).a)(n("#chart")[0],{chart:{height:"95%",type:"line",toolbar:{show:!1}},markers:{size:6,hover:{size:8,sizeOffset:3}},stroke:{curve:"smooth"},series:[],xaxis:{title:{text:"quantity"}},yaxis:{title:{text:"Time (millie second)"}},legend:{showForSingleSeries:!0,onItemHover:{highlightDataSeries:!1},position:"top",horizontalAlign:"right"}});e.render()}).call(this,i(1))},function(n,r,i){"use strict";(function(n){i.d(r,"a",(function(){return o}));var e=i(0),t=i.n(e),a=(i(30),i(31),i(32),i(33),i(34),i(35),i(36),i(37),i(38),i(39),i(16));window.JSHINT=a.JSHINT;var o=t()(n("#code")[0],{value:"",mode:"javascript",theme:"material",lineNumbers:!0,lineWrapping:!0,lint:!0,gutters:["CodeMirror-lint-markers"],extraKeys:{"Ctrl-Space":"autocomplete"}});o.setSize("auto","100%")}).call(this,i(1))},,,,,function(n,r,i){"use strict";i.d(r,"a",(function(){return e}));var e=[[{name:"فیبوناتچی مربع کامل",main:'algorithm = {\r\n\r\n  initialize: function () {\r\n    this.i = 0;\r\n    this.numbers = [10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000, 90000000, 100000000];\r\n  },\r\n\r\n  update: function () {\r\n    this.i++;\r\n  },\r\n\r\n  isSquare: function (n) {\r\n    return Math.sqrt(n) % 1 === 0;\r\n  },\r\n\r\n  run: function () {\r\n    var number = this.numbers[this.i];\r\n    number = 5 * multiply(number, number);\r\n    if (this.isSquare(number + 4) || this.isSquare(number - 4))\r\n      return this.numbers[this.i] + " : is fibo";\r\n    else \r\n      return this.numbers[this.i] + " : isn\'t fibo";\r\n  }\r\n};',series:void 0,visible:!0},{name:"فیبوناتچی حلقه",main:'algorithm = {\r\n\r\n    initialize: function () {\r\n        this.n = 0;\r\n        this.numbers = [10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000, 90000000, 100000000];\r\n    },\r\n\r\n    update: function () {\r\n        this.n++;\r\n    },\r\n\r\n    run: function () {\r\n        var a = 0;\r\n        var b = 1;\r\n        var sum = 0;\r\n        var number = this.numbers[this.n];\r\n\r\n        do {\r\n            sum = a + b;\r\n            a = b;\r\n            b = sum;\r\n            if (sum == number)\r\n                return  number + " : is fibo";\r\n        } while (sum <= number);\r\n        return number + " : isn\'t fibo";\r\n    }\r\n};',series:void 0,visible:!0},{name:"عدد اول عادی",main:'algorithm = {\r\n\r\n    initialize: function () {\r\n        this.numbers = [10000019, 20000003, 30000001, 40000003, 50000017, 60000011, 70000027, 80000023, 90000049, 100000007];\r\n        this.i = 0;\r\n    },\r\n\r\n    update: function () {\r\n        this.i++;\r\n    },\r\n\r\n    run: function () {\r\n        var num = this.numbers[this.i];\r\n        for (var i = 2; i < num; i++)\r\n            if (num % i === 0) return num + " : isn\'t prime";\r\n        return num + " : is prime";\r\n    }\r\n};',series:void 0,visible:!0},{name:"عدد اول فرد",main:'algorithm = {\r\n\r\n    initialize: function () {\r\n        this.numbers = [10000019, 20000003, 30000001, 40000003, 50000017, 60000011, 70000027, 80000023, 90000049, 100000007];\r\n        this.i = 0;\r\n    },\r\n\r\n    update: function () {\r\n        this.i++;\r\n    },\r\n\r\n    run: function () {\r\n        var num = this.numbers[this.i];\r\n        for (var i = 3; i < num; i += 2)\r\n            if (num % i === 0) return num + " : isn\'t prime";\r\n        return num + " : is prime";\r\n    }\r\n};',series:void 0,visible:!0},{name:"عدد اول رادیکالی",main:'algorithm = {\r\n\r\n    initialize: function () {\r\n        this.numbers = [99991, 199999, 299993, 399989, 499979, 599999, 699967, 799999, 899981, 999983];\r\n        this.i = 0;\r\n    },\r\n\r\n    update: function () {\r\n        this.i++;\r\n    },\r\n\r\n    run: function () {\r\n        var num = this.numbers[this.i];\r\n        var limit = Math.sqrt(num);\r\n        for (var i = 3; i < limit; i += 2)\r\n            if (num % i === 0) return num + " : isn\'t prime";\r\n        return num + " : is prime";\r\n    }\r\n};\r\n\r\n\r\n/*\r\nthis.numbers = \r\n    [1000000007, 7000000001, 13000000073, 19000000007, 25000000013,\r\n    31000000027, 37000000007, 43000000019, 49000000001, 55000000001,\r\n    61000000001, 67000000003, 73000000019, 79000000063, 85000000013,\r\n    91000000037, 97000000037, 103000000007, 109000000001, 115000000007,\r\n    121000000021, 127000000003, 133000000043, 145000000027, 145000000027];\r\n*/',series:void 0,visible:!0},{name:"توان عادی",main:"algorithm = {\r\n    initialize: function () {\r\n        this.pow = 2;\r\n        this.base = 2;\r\n    },\r\n\r\n    update: function () {\r\n        this.pow += 3;\r\n    },\r\n\r\n    run: function () {\r\n        var power = 1;\r\n        for (var i = 0; i < this.pow; i++) {\r\n            power = multiply(power, this.base);\r\n        }\r\n\r\n        return `pow(${this.base},${this.pow}) = ` + power;\r\n    }\r\n};\r\n",series:void 0,visible:!0},{name:"توان بازگشتی",main:"algorithm = {\r\n    initialize: function () {\r\n        this.pow = 2;\r\n        this.base = 2;\r\n    },\r\n\r\n    update: function () {\r\n        this.pow += 4;\r\n    },\r\n\r\n    power: function (base, n) {\r\n        if (n == 1)\r\n            return base;\r\n\r\n        if (n % 2 == 0) {\r\n            power = this.power(base, n / 2);\r\n            return multiply(power, power);\r\n        } else {\r\n            power = this.power(base, n - 1);\r\n            return multiply(base, power);\r\n        }\r\n    },\r\n\r\n    run: function () {\r\n        return `pow(${this.base},${this.pow}) = ` + this.power(this.base, this.pow);\r\n    }\r\n};",series:void 0,visible:!0}],[{name:"nQueen",main:"/*jshint esversion: 6 */\r\n\r\nalgorithm = {\r\n    initialize: function () {\r\n        this.n = 5;\r\n        this.board = Array(this.n).fill().map(() => Array(this.n).fill(0));\r\n    },\r\n\r\n    update: function () {\r\n        this.n += 2;\r\n        this.board = Array(this.n).fill().map(() => Array(this.n).fill(0));\r\n    },\r\n\r\n    run: function () {\r\n        return this.isNQueen(this.board);\r\n    },\r\n\r\n    isSafe: function (board, row, col) {\r\n        for (var i = 0; i < col; i++) {\r\n            if (board[row][i] == 1)\r\n                return false;\r\n        }\r\n        for (var i = row, j = col; i >= 0 && j >= 0; i--, j--) {\r\n            if (board[i][j] == 1)\r\n                return false;\r\n        }\r\n        for (var i = row, j = col; j >= 0 && i < board.length; i++, j--) {\r\n            if (board[i][j] == 1)\r\n                return false;\r\n        }\r\n        return true;\r\n    },\r\n\r\n    isNQueen: function (board, col = 0) {\r\n        if (col >= board.length)\r\n            return true;\r\n\r\n        for (var i = 0; i < board.length; i++) {\r\n            if (this.isSafe(board, i, col)) {\r\n                board[i][col] = 1;\r\n                if (this.isNQueen(board, col + 1) == true)\r\n                    return true;\r\n                board[i][col] = 0;\r\n            }\r\n        }\r\n    }\r\n};",series:void 0,visible:!0}]]},,,,,,,function(n,r,i){"use strict";r.a="algorithm = {\r\n    initialize: function () {\r\n\r\n    },\r\n\r\n    update: function () {\r\n\r\n    },\r\n\r\n    run: function () {\r\n\r\n    }\r\n};\r\n"},function(n,r,i){n.exports=function(){return new Worker(i.p+"dee722705fa5f6fe75c0.worker.js")}},function(n,r,i){"use strict";i.r(r),function(n){var r=i(2),e=i.n(r),t=i(7),a=i.n(t),o=(i(21),i(22),i(24),i(25),i(4)),s=i(5),u=i(10),c=i(17),l=i(18),f=i.n(l);function h(n){return m.postMessage(n),new Promise((function(n){return h.resolve=n}))}function p(){(m=new f.a).onmessage=function(n){return h.resolve(n.data)}}var m,d,b=n("#mainAlgorithm"),v=n("#inputLoop"),g=0,w=v.val(),k="current",y=!1,x=[];function S(n){d=u.a[n],A(),s.a.setValue(j()),P(),o.a.updateSeries(x,!1)}function j(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g;return d[r][n]}function z(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"main",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g;d[i][r]=n}function O(n){y=!0,s.a.setValue(d[n].main),g=n}function A(){var n="";d.forEach((function(r,i){var e=r.visible?"":"-slash";n+='\n        <div class="btn-group w-100" data-val="'.concat(i,'">\n            <button class="btn btn-light remove"><i class="far fa-eye').concat(e,'"></i></button>\n            <button class="dropdown-item select">').concat(r.name,"</button>\n        </div>\n        ")})),b.html(n)}function P(){x=[],d.forEach((function(n){n.series&&n.visible&&x.push(n.series)}))}function M(){d.forEach((function(n){return n.series=void 0})),o.a.updateSeries([],!1),n("#log-container").text("")}function q(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=n('<ul class="list-group mb-3 '.concat(i,'"></ul>')).appendTo("#log-container"),t=n('<a href="#" class="float-right"><i class="fas fa-trash"></i></a>').click((function(){return e.remove()}));return C(e,r,t,"list-group-item-primary"),e}function C(r,i,e){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";"string"==typeof e&&(e='<span class="float-right">'.concat(e,"</span>"));var a=n('<li class="list-group-item '.concat(t,'">').concat(i,"</li>"));r.append(a.append(e))}function N(n){return j("series").data.push(n),o.a.updateSeries(x,!1)}function T(){var n=[];z({data:[],name:j("name")},"series"),d.forEach((function(r){r.series&&r.visible&&n.push(r.series)})),x=n}function _(){m.terminate(),p(),n("#Run").off("click").click(U).html('<i class="fas fa-play"></i>')}function E(){return J.apply(this,arguments)}function J(){return(J=a()(e.a.mark((function n(){var r,i,t,a,o;return e.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return T(),n.next=3,h(j());case 3:r=q(j("name"),"log-"+g),i=0;case 5:if(!(i<w)){n.next=17;break}return n.next=8,h();case 8:return t=n.sent,a=t.time,o=t.output,C(r,o,a.toFixed(1)),n.next=14,N(a.toFixed(1));case 14:i++,n.next=5;break;case 17:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Q(){return R.apply(this,arguments)}function R(){return(R=a()(e.a.mark((function n(){var r;return e.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:M(),r=0;case 2:if(!(r<d.length)){n.next=10;break}if(!j("visible",r)){n.next=7;break}return O(r),n.next=7,E();case 7:r++,n.next=2;break;case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function U(){return $.apply(this,arguments)}function $(){return($=a()(e.a.mark((function r(){return e.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n("#Run").off("click").click(_).html('<i class="fas fa-stop"></i>'),"All"!=k){r.next=6;break}return r.next=4,Q();case 4:r.next=9;break;case 6:if(!j("visible")){r.next=9;break}return r.next=9,E();case 9:n("#Run").off("click").click(U).html('<i class="fas fa-play"></i>');case 10:case"end":return r.stop()}}),r)})))).apply(this,arguments)}p(),function(){for(var r="",i=0;i<u.a.length;i++)r+='<a class="dropdown-item" data-val="'.concat(i,'" href="#">Series ').concat(i+1,"</a>");n("#Assignments").html(r)}(),S(1),n("#loader").removeClass("d-flex").hide(),n("#Ok").click((function(){w=v.val()})),n("#Assignments").on("click","a",(function(){y=!0,S(n(this).data("val"))})),n("#mainAlgorithm").on("click",".select",(function(){O(n(this).parent().data("val"))})),n("#mainAlgorithm").on("click",".remove",(function(r){r.stopPropagation(),function(r,i){var e=j("visible",r)?"-slash":"";i.html('<i class="far fa-eye'.concat(e,'"></i>')).next().prop("disabled",(function(n,r){return!r})),z(!e,"visible",r),P(),o.a.updateSeries(x,!1),e?n(".log-"+r).hide():n(".log-"+r).show()}(n(this).parent().data("val"),n(this))})),n("#clear").on("click",M),n("#new-algo").on("click",(function(){return n("#new-algo-modal").modal("show")})),n("#new-algo-ok").on("click",(function(){return r=n("#new-algo-name").val(),i=n("#new-algo-visible").is(":checked"),e=d.push({name:r,main:c.a,series:void 0,visible:i}),A(),void O(e-1);var r,i,e})),n("#d-mode").on("click",(function(){n("#chart-col").hasClass("d-none")?n("#d-mode").html('<i class="fas fa-terminal"></i>'):n("#d-mode").html('<i class="far fa-chart-bar"></i>'),n("#log-col").toggleClass("d-none"),n("#chart-col").toggleClass("d-none"),"15px"==n("#chart").css("min-height")&&o.a.render()})),s.a.on("change",(function(){y?(y=!1,n("#Update").prop("disabled",!0).html('<i class="fas fa-check"></i>')):n("#Update").prop("disabled",!1).html('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>')})),n("#Update").click((function(){z(s.a.getValue(),"main"),n("#Update").prop("disabled",!0).html('<i class="fas fa-check"></i>')})),n("#run-mode").on("click","a",(function(r){k=n(this).text()})),n("#Run").click(U)}.call(this,i(1))},,function(n,r,i){}]);