"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var loadYoga = function () {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return function (loadYoga) {
    loadYoga = loadYoga || {};
    var g;
    g || (g = typeof loadYoga !== 'undefined' ? loadYoga : {});
    var aa, ba;
    g.ready = new Promise(function (a, b) {
      aa = a;
      ba = b;
    });
    var ca = Object.assign({}, g),
      q = "";
    "undefined" != typeof document && document.currentScript && (q = document.currentScript.src);
    _scriptDir && (q = _scriptDir);
    0 !== q.indexOf("blob:") ? q = q.substr(0, q.replace(/[?#].*/, "").lastIndexOf("/") + 1) : q = "";
    var ea = g.print || console.log.bind(console),
      v = g.printErr || console.warn.bind(console);
    Object.assign(g, ca);
    ca = null;
    var w;
    g.wasmBinary && (w = g.wasmBinary);
    var noExitRuntime = g.noExitRuntime || !0;
    function fa() {
      this.buffer = new ArrayBuffer(ha / 65536 * 65536);
    }
    function ia(a) {
      this.exports =
      // EMSCRIPTEN_START_ASM
      function instantiate(Oa) {
        function c(d) {
          d.set = function (a, b) {
            this[a] = b;
          };
          d.get = function (a) {
            return this[a];
          };
          return d;
        }
        var e;
        var f = new Uint8Array(123);
        for (var a = 25; a >= 0; --a) {
          f[48 + a] = 52 + a;
          f[65 + a] = a;
          f[97 + a] = 26 + a;
        }
        f[43] = 62;
        f[47] = 63;
        function l(m, n, o) {
          var g,
            h,
            a = 0,
            i = n,
            j = o.length,
            k = n + (j * 3 >> 2) - (o[j - 2] == "=") - (o[j - 1] == "=");
          for (; a < j; a += 4) {
            g = f[o.charCodeAt(a + 1)];
            h = f[o.charCodeAt(a + 2)];
            m[i++] = f[o.charCodeAt(a)] << 2 | g >> 4;
            if (i < k) m[i++] = g << 4 | h >> 2;
            if (i < k) m[i++] = h << 6 | f[o.charCodeAt(a + 3)];
          }
        }
        function p(q) {
          l(e, 1024, "T25seSBsZWFmIG5vZGVzIHdpdGggY3VzdG9tIG1lYXN1cmUgZnVuY3Rpb25zIHNob3VsZCBtYW51YWxseSBtYXJrIHRoZW1zZWx2ZXMgYXMgZGlydHkAaXNEaXJ0eQBtYXJrRGlydHkAZGVzdHJveQBzZXREaXNwbGF5AGdldERpc3BsYXkAc2V0RmxleAAtKyAgIDBYMHgALTBYKzBYIDBYLTB4KzB4IDB4AHNldEZsZXhHcm93AGdldEZsZXhHcm93AHNldE92ZXJmbG93AGdldE92ZXJmbG93AGhhc05ld0xheW91dABjYWxjdWxhdGVMYXlvdXQAZ2V0Q29tcHV0ZWRMYXlvdXQAdW5zaWduZWQgc2hvcnQAZ2V0Q2hpbGRDb3VudAB1bnNpZ25lZCBpbnQAc2V0SnVzdGlmeUNvbnRlbnQAZ2V0SnVzdGlmeUNvbnRlbnQAc2V0TWF4SGVpZ2h0TWF4Q29udGVudABzZXRIZWlnaHRNYXhDb250ZW50AHNldE1pbkhlaWdodE1heENvbnRlbnQAc2V0RmxleEJhc2lzTWF4Q29udGVudABzZXRNYXhXaWR0aE1heENvbnRlbnQAc2V0V2lkdGhNYXhDb250ZW50AHNldE1pbldpZHRoTWF4Q29udGVudABhdmFpbGFibGVIZWlnaHQgaXMgaW5kZWZpbml0ZSBzbyBoZWlnaHRTaXppbmdNb2RlIG11c3QgYmUgU2l6aW5nTW9kZTo6TWF4Q29udGVudABhdmFpbGFibGVXaWR0aCBpcyBpbmRlZmluaXRlIHNvIHdpZHRoU2l6aW5nTW9kZSBtdXN0IGJlIFNpemluZ01vZGU6Ok1heENvbnRlbnQAc2V0TWF4SGVpZ2h0Rml0Q29udGVudABzZXRIZWlnaHRGaXRDb250ZW50AHNldE1pbkhlaWdodEZpdENvbnRlbnQAc2V0RmxleEJhc2lzRml0Q29udGVudABzZXRNYXhXaWR0aEZpdENvbnRlbnQAc2V0V2lkdGhGaXRDb250ZW50AHNldE1pbldpZHRoRml0Q29udGVudABzZXRBbGlnbkNvbnRlbnQAZ2V0QWxpZ25Db250ZW50AGdldFBhcmVudABpbXBsZW1lbnQAc2V0TWF4SGVpZ2h0UGVyY2VudABzZXRIZWlnaHRQZXJjZW50AHNldE1pbkhlaWdodFBlcmNlbnQAc2V0RmxleEJhc2lzUGVyY2VudABzZXRHYXBQZXJjZW50AHNldFBvc2l0aW9uUGVyY2VudABzZXRNYXJnaW5QZXJjZW50AHNldE1heFdpZHRoUGVyY2VudABzZXRXaWR0aFBlcmNlbnQAc2V0TWluV2lkdGhQZXJjZW50AHNldFBhZGRpbmdQZXJjZW50AGhhbmRsZS50eXBlKCkgPT0gU3R5bGVWYWx1ZUhhbmRsZTo6VHlwZTo6UG9pbnQgfHwgaGFuZGxlLnR5cGUoKSA9PSBTdHlsZVZhbHVlSGFuZGxlOjpUeXBlOjpQZXJjZW50AGNyZWF0ZURlZmF1bHQAdW5pdAByaWdodABoZWlnaHQAc2V0TWF4SGVpZ2h0AGdldE1heEhlaWdodABzZXRIZWlnaHQAZ2V0SGVpZ2h0AHNldE1pbkhlaWdodABnZXRNaW5IZWlnaHQAZ2V0Q29tcHV0ZWRIZWlnaHQAZ2V0Q29tcHV0ZWRSaWdodABsZWZ0AGdldENvbXB1dGVkTGVmdAByZXNldABfX2Rlc3RydWN0AGZsb2F0AHVpbnQ2NF90AHVzZVdlYkRlZmF1bHRzAHNldFVzZVdlYkRlZmF1bHRzAHNldEFsaWduSXRlbXMAZ2V0QWxpZ25JdGVtcwBzZXRGbGV4QmFzaXMAZ2V0RmxleEJhc2lzAENhbm5vdCBnZXQgbGF5b3V0IHByb3BlcnRpZXMgb2YgbXVsdGktZWRnZSBzaG9ydGhhbmRzAHNldFBvaW50U2NhbGVGYWN0b3IATWVhc3VyZUNhbGxiYWNrV3JhcHBlcgBEaXJ0aWVkQ2FsbGJhY2tXcmFwcGVyAENhbm5vdCByZXNldCBhIG5vZGUgc3RpbGwgYXR0YWNoZWQgdG8gYSBvd25lcgBzZXRCb3JkZXIAZ2V0Qm9yZGVyAGdldENvbXB1dGVkQm9yZGVyAGdldE51bWJlcgBoYW5kbGUudHlwZSgpID09IFN0eWxlVmFsdWVIYW5kbGU6OlR5cGU6Ok51bWJlcgB1bnNpZ25lZCBjaGFyAHRvcABnZXRDb21wdXRlZFRvcABzZXRGbGV4V3JhcABnZXRGbGV4V3JhcABzZXRHYXAAZ2V0R2FwACVwAHNldEhlaWdodEF1dG8Ac2V0RmxleEJhc2lzQXV0bwBzZXRQb3NpdGlvbkF1dG8Ac2V0TWFyZ2luQXV0bwBzZXRXaWR0aEF1dG8AU2NhbGUgZmFjdG9yIHNob3VsZCBub3QgYmUgbGVzcyB0aGFuIHplcm8Ac2V0QXNwZWN0UmF0aW8AZ2V0QXNwZWN0UmF0aW8Ac2V0UG9zaXRpb24AZ2V0UG9zaXRpb24Abm90aWZ5T25EZXN0cnVjdGlvbgBzZXRGbGV4RGlyZWN0aW9uAGdldEZsZXhEaXJlY3Rpb24Ac2V0RGlyZWN0aW9uAGdldERpcmVjdGlvbgBzZXRNYXJnaW4AZ2V0TWFyZ2luAGdldENvbXB1dGVkTWFyZ2luAG1hcmtMYXlvdXRTZWVuAG5hbgBib3R0b20AZ2V0Q29tcHV0ZWRCb3R0b20AYm9vbABlbXNjcmlwdGVuOjp2YWwAc2V0RmxleFNocmluawBnZXRGbGV4U2hyaW5rAHNldEFsd2F5c0Zvcm1zQ29udGFpbmluZ0Jsb2NrAE1lYXN1cmVDYWxsYmFjawBEaXJ0aWVkQ2FsbGJhY2sAZ2V0TGVuZ3RoAHdpZHRoAHNldE1heFdpZHRoAGdldE1heFdpZHRoAHNldFdpZHRoAGdldFdpZHRoAHNldE1pbldpZHRoAGdldE1pbldpZHRoAGdldENvbXB1dGVkV2lkdGgAcHVzaABzZXRNYXhIZWlnaHRTdHJldGNoAHNldEhlaWdodFN0cmV0Y2gAc2V0TWluSGVpZ2h0U3RyZXRjaABzZXRGbGV4QmFzaXNTdHJldGNoAHNldE1heFdpZHRoU3RyZXRjaABzZXRXaWR0aFN0cmV0Y2gAc2V0TWluV2lkdGhTdHJldGNoAC9Vc2Vycy9wYW55dS9Eb2N1bWVudHMvd29ya3NwYWNlL3NvdXJjZUNvZGUveW9nYS9qYXZhc2NyaXB0Ly4uL3lvZ2Evc3R5bGUvU21hbGxWYWx1ZUJ1ZmZlci5oAC9Vc2Vycy9wYW55dS9Eb2N1bWVudHMvd29ya3NwYWNlL3NvdXJjZUNvZGUveW9nYS9qYXZhc2NyaXB0Ly4uL3lvZ2Evc3R5bGUvU3R5bGVWYWx1ZVBvb2wuaAB1bnNpZ25lZCBsb25nAHNldEJveFNpemluZwBnZXRCb3hTaXppbmcAc3RkOjp3c3RyaW5nAHN0ZDo6c3RyaW5nAHN0ZDo6dTE2c3RyaW5nAHN0ZDo6dTMyc3RyaW5nAHNldFBhZGRpbmcAZ2V0UGFkZGluZwBnZXRDb21wdXRlZFBhZGRpbmcAVHJpZWQgdG8gY29uc3RydWN0IFlHTm9kZSB3aXRoIG51bGwgY29uZmlnAEF0dGVtcHRpbmcgdG8gY29uc3RydWN0IE5vZGUgd2l0aCBudWxsIGNvbmZpZwBjcmVhdGVXaXRoQ29uZmlnAGluZgBzZXRBbGlnblNlbGYAZ2V0QWxpZ25TZWxmAGdldFNpemUAdmFsdWUAVmFsdWUAY3JlYXRlAG1lYXN1cmUAc2V0UG9zaXRpb25UeXBlAGdldFBvc2l0aW9uVHlwZQBpc1JlZmVyZW5jZUJhc2VsaW5lAHNldElzUmVmZXJlbmNlQmFzZWxpbmUAY29weVN0eWxlAGRvdWJsZQBOb2RlAGV4dGVuZABpbnNlcnRDaGlsZABnZXRDaGlsZAByZW1vdmVDaGlsZAB2b2lkAHNldEV4cGVyaW1lbnRhbEZlYXR1cmVFbmFibGVkAGlzRXhwZXJpbWVudGFsRmVhdHVyZUVuYWJsZWQAZGlydGllZABDYW5ub3QgcmVzZXQgYSBub2RlIHdoaWNoIHN0aWxsIGhhcyBjaGlsZHJlbiBhdHRhY2hlZAB1bnNldE1lYXN1cmVGdW5jAHVuc2V0RGlydGllZEZ1bmMAc2V0RXJyYXRhAGdldEVycmF0YQBNZWFzdXJlIGZ1bmN0aW9uIHJldHVybmVkIGFuIGludmFsaWQgZGltZW5zaW9uIHRvIFlvZ2E6IFt3aWR0aD0lZiwgaGVpZ2h0PSVmXQBFeHBlY3QgY3VzdG9tIGJhc2VsaW5lIGZ1bmN0aW9uIHRvIG5vdCByZXR1cm4gTmFOAE5BTgBJTkYAZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZG91YmxlPgBDaGlsZCBhbHJlYWR5IGhhcyBhIG93bmVyLCBpdCBtdXN0IGJlIHJlbW92ZWQgZmlyc3QuAENhbm5vdCBzZXQgbWVhc3VyZSBmdW5jdGlvbjogTm9kZXMgd2l0aCBtZWFzdXJlIGZ1bmN0aW9ucyBjYW5ub3QgaGF2ZSBjaGlsZHJlbi4AQ2Fubm90IGFkZCBjaGlsZDogTm9kZXMgd2l0aCBtZWFzdXJlIGZ1bmN0aW9ucyBjYW5ub3QgaGF2ZSBjaGlsZHJlbi4AKG51bGwpAGluZGV4IDwgNDA5NiAmJiAiU21hbGxWYWx1ZUJ1ZmZlciBjYW4gb25seSBob2xkIHVwIHRvIDQwOTYgY2h1bmtzIgAlcwoAAQAAAAMAAAAAAAAAAgAAAAMAAAABAAAAAgAAAAAAAAABAAAAAQ==");
          l(e, 5356, "aWkAdgB2aQ==");
          l(e, 5376, "cx8AAHEfAACxHwAAqx8AALEfAACrHwAAaWlpZmlmaQCkHwAAdB8AAHZpaQB1HwAAuB8AAGlpaQ==");
          l(e, 5440, "2AAAANkAAADa");
          l(e, 5460, "2AAAANsAAADcAAAApB8=");
          l(e, 5488, "cx8AALEfAACrHwAAsR8AAKsfAAC4HwAAsx8AALgfAABpaWlpAAAAAKQfAACJHwAApB8AAIsfAACMHwAAuB8=");
          l(e, 5560, "3QAAAN4AAADf");
          l(e, 5580, "3QAAAOAAAADcAAAAjx8AAKQfAACPHw==");
          l(e, 5616, "pB8AAI8fAACrHwAApR8AAHZpaWlpAAAApB8AAI8fAACxHwAAdmlpZgAAAACkHwAAjx8AAKsfAAB2aWlpAAAAAKQfAACPHwAApR8AAKUfAACQHwAAqx8AAKsfAACQHwAApR8AAJAfAABpAGRpaQB2aWlkAACUHwAAlB8AAI8fAACkHwAAlB8AAKQfAACUHwAAkx8AAKQfAACUHwAAqx8AAKQfAACUHwAAqx8AALIfAAB2aWlpZAAAAKQfAACUHwAAsh8AAKsfAACVHwAAkh8AAJUfAACrHwAAkh8AAJUfAACyHwAAlR8AALIfAACVHwAAqx8AAGRpaWkAAAAAAAAAAKQfAACUHwAAlB8AAKwfAACkHwAAlB8AAJQfAACsHwAAlR8AAJQfAACUHwAAlB8AAJQfAACsHwAApB8AAJQfAAClHwAApR8AAJQfAACkHwAAlB8AAHEfAACkHwAAlB8AAIkfAAClHwAAlR8AAAAAAACkHwAAlB8AALIfAACyHwAAqx8AAHZpaWRkaQAAkR8AAJUf");
          l(e, 6032, "GQAKABkZGQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAAZABEKGRkZAwoHAAEACQsYAAAJBgsAAAsABhkAAAAZGRk=");
          l(e, 6113, "DgAAAAAAAAAAGQAKDRkZGQANAAACAAkOAAAACQAOAAAO");
          l(e, 6171, "DA==");
          l(e, 6183, "EwAAAAATAAAAAAkMAAAAAAAMAAAM");
          l(e, 6229, "EA==");
          l(e, 6241, "DwAAAAQPAAAAAAkQAAAAAAAQAAAQ");
          l(e, 6287, "Eg==");
          l(e, 6299, "EQAAAAARAAAAAAkSAAAAAAASAAASAAAaAAAAGhoa");
          l(e, 6354, "GgAAABoaGgAAAAAAAAk=");
          l(e, 6403, "FA==");
          l(e, 6415, "FwAAAAAXAAAAAAkUAAAAAAAUAAAU");
          l(e, 6461, "Fg==");
          l(e, 6473, "FQAAAAAVAAAAAAkWAAAAAAAWAAAWAAAwMTIzNDU2Nzg5QUJDREVG");
          l(e, 6548, "5g==");
          l(e, 6588, "//////////8=");
          l(e, 6656, "4CMBAAAAAAAF");
          l(e, 6676, "4Q==");
          l(e, 6700, "4gAAAOMAAADMHw==");
          l(e, 6724, "Ag==");
          l(e, 6740, "//////////8=");
          l(e, 6808, "BQ==");
          l(e, 6820, "5A==");
          l(e, 6844, "4gAAAOUAAADYHwAAAAQ=");
          l(e, 6868, "AQ==");
          l(e, 6884, "/////wo=");
          l(e, 6952, "5w==");
        }
        var r = new ArrayBuffer(16);
        var s = new Int32Array(r);
        var t = new Float32Array(r);
        var u = new Float64Array(r);
        function v(w) {
          return s[w];
        }
        function x(w, y) {
          s[w] = y;
        }
        function z() {
          return u[0];
        }
        function A(y) {
          u[0] = y;
        }
        function B() {
          throw new Error("abort");
        }
        function C() {
          return t[2];
        }
        function D(y) {
          t[2] = y;
        }
        function Na(q) {
          var E = q.a;
          var F = E.a;
          var G = F.buffer;
          F.grow = La;
          var H = new Int8Array(G);
          var I = new Int16Array(G);
          var J = new Int32Array(G);
          var K = new Uint8Array(G);
          var L = new Uint16Array(G);
          var M = new Uint32Array(G);
          var N = new Float32Array(G);
          var O = new Float64Array(G);
          var P = Math.imul;
          var Q = Math.fround;
          var R = Math.abs;
          var S = Math.clz32;
          var T = Math.min;
          var U = Math.max;
          var V = Math.floor;
          var W = Math.ceil;
          var X = Math.trunc;
          var Y = Math.sqrt;
          var Z = NaN;
          var _ = Infinity;
          var $ = E.b;
          var aa = E.c;
          var ba = E.d;
          var ca = E.e;
          var da = E.f;
          var ea = E.g;
          var fa = E.h;
          var ga = E.i;
          var ha = E.j;
          var ia = E.k;
          var ja = E.l;
          var ka = E.m;
          var la = E.n;
          var ma = E.o;
          var na = E.p;
          var oa = E.q;
          var pa = E.r;
          var qa = E.s;
          var ra = E.t;
          var sa = E.u;
          var ta = E.v;
          var ua = E.w;
          var va = E.x;
          var wa = E.y;
          var xa = E.z;
          var ya = E.A;
          var za = E.B;
          var Aa = E.C;
          var Ba = E.D;
          var Ca = E.E;
          var Da = 74720;
          var Ea = 0;
          // EMSCRIPTEN_START_FUNCS
          function ub(a, b, c, d, e, f, g, h, i, j, k, l, m) {
            var n = 0,
              o = 0,
              p = Q(0),
              q = 0,
              r = 0,
              s = Q(0),
              t = Q(0),
              u = Q(0),
              v = Q(0),
              w = Q(0),
              x = 0,
              y = 0,
              z = Q(0),
              A = 0,
              C = 0,
              D = Q(0),
              E = 0,
              F = 0,
              G = 0,
              I = 0,
              M = Q(0),
              S = Q(0),
              T = Q(0),
              U = 0,
              V = 0,
              W = 0,
              X = 0,
              Y = Q(0),
              _ = 0,
              $ = 0,
              aa = Q(0),
              ca = Q(0),
              da = 0,
              ea = Q(0),
              fa = 0,
              ga = 0,
              ha = 0,
              ia = 0,
              ja = 0,
              ka = 0,
              la = Q(0),
              ma = Q(0),
              na = 0,
              oa = Q(0),
              pa = 0,
              qa = Q(0),
              ra = 0,
              sa = Q(0),
              ta = 0,
              ua = 0,
              va = 0,
              wa = Q(0),
              xa = 0,
              ya = 0,
              za = 0,
              Aa = Q(0),
              Ba = 0,
              Ca = 0,
              Ea = 0,
              Ga = Q(0),
              Ha = Q(0),
              Ia = 0,
              Ja = 0,
              Ka = 0,
              La = Q(0),
              Ma = Q(0),
              Na = Q(0),
              Oa = 0,
              Pa = 0,
              Ra = 0,
              Ya = 0,
              _a = 0,
              $a = 0,
              ab = 0,
              hb = Q(0);
            a: {
              if (!(J[a + 164 >> 2] != J[J[a + 508 >> 2] + 12 >> 2] | (J[a + 160 >> 2] != (m | 0) ? K[a | 0] & 4 : 0))) {
                o = 0;
                if (K[a + 168 | 0] == (d | 0)) {
                  break a;
                }
              }
              J[a + 384 >> 2] = -1082130432;
              J[a + 388 >> 2] = -1082130432;
              J[a + 376 >> 2] = 1;
              J[a + 380 >> 2] = 1;
              J[a + 368 >> 2] = -1082130432;
              J[a + 372 >> 2] = -1082130432;
              J[a + 172 >> 2] = 0;
              o = 1;
            }
            Ja = o;
            b: {
              c: {
                d: {
                  e: {
                    if (J[a + 8 >> 2]) {
                      o = a + 20 | 0;
                      s = Ta(o, 2, 1, g);
                      v = Sa(o, 2, 1, g);
                      p = Q(Ta(o, 0, 1, g) + Sa(o, 0, 1, g));
                      o = a + 368 | 0;
                      v = Q(s + v);
                      y = J[a + 508 >> 2];
                      if (zc(e, b, f, c, J[a + 376 >> 2], N[o >> 2], J[a + 380 >> 2], N[a + 372 >> 2], N[a + 384 >> 2], N[a + 388 >> 2], v, p, y)) {
                        break e;
                      }
                      G = J[a + 172 >> 2];
                      if (!G) {
                        break c;
                      }
                      r = a + 176 | 0;
                      while (1) {
                        o = r + P(ga, 24) | 0;
                        if (zc(e, b, f, c, J[o + 8 >> 2], N[o >> 2], J[o + 12 >> 2], N[o + 4 >> 2], N[o + 16 >> 2], N[o + 20 >> 2], v, p, y)) {
                          break e;
                        }
                        ga = ga + 1 | 0;
                        if ((G | 0) != (ga | 0)) {
                          continue;
                        }
                        break;
                      }
                      break d;
                    }
                    if (!i) {
                      G = J[a + 172 >> 2];
                      if (!G) {
                        break d;
                      }
                      y = a + 176 | 0;
                      while (1) {
                        r = P(ga, 24);
                        o = r + y | 0;
                        v = N[o >> 2];
                        f: {
                          g: {
                            if (!(v != v | b != b)) {
                              if (Q(R(Q(v - b))) < Q(9999999747378752e-20)) {
                                break g;
                              }
                              break f;
                            }
                            if (b == b | v == v) {
                              break f;
                            }
                          }
                          r = r + y | 0;
                          v = N[r + 4 >> 2];
                          h: {
                            if (!(v != v | c != c)) {
                              if (Q(R(Q(v - c))) < Q(9999999747378752e-20)) {
                                break h;
                              }
                              break f;
                            }
                            if (c == c | v == v) {
                              break f;
                            }
                          }
                          if (J[r + 8 >> 2] != (e | 0)) {
                            break f;
                          }
                          if (J[r + 12 >> 2] == (f | 0)) {
                            break e;
                          }
                        }
                        ga = ga + 1 | 0;
                        if ((G | 0) != (ga | 0)) {
                          continue;
                        }
                        break;
                      }
                      break d;
                    }
                    o = a + 368 | 0;
                    v = N[o >> 2];
                    i: {
                      if (!(v != v | b != b)) {
                        if (Q(R(Q(v - b))) < Q(9999999747378752e-20)) {
                          break i;
                        }
                        break c;
                      }
                      if (b == b | v == v) {
                        break c;
                      }
                    }
                    G = J[a + 376 >> 2] == (e | 0) ? J[a + 380 >> 2] == (f | 0) ? o : 0 : 0;
                    o = c != c;
                    v = N[a + 372 >> 2];
                    j: {
                      if (!(o | v != v)) {
                        r = Q(R(Q(v - c))) < Q(9999999747378752e-20);
                        break j;
                      }
                      r = 0;
                      if (v == v) {
                        break j;
                      }
                      r = o;
                    }
                    o = r ? G : 0;
                  }
                  if (!o | Ja) {
                    ga = o;
                    break c;
                  }
                  N[a + 404 >> 2] = N[o + 16 >> 2];
                  N[a + 408 >> 2] = N[o + 20 >> 2];
                  d = (i ? 12 : 16) + k | 0;
                  J[d >> 2] = J[d >> 2] + 1;
                  ga = o;
                  break b;
                }
                ga = 0;
              }
              z = g;
              la = h;
              ya = l + 1 | 0;
              n = Da - 160 | 0;
              Da = n;
              k: {
                l: {
                  if (!((e | 0) == 1 | b == b)) {
                    J[n + 32 >> 2] = 1602;
                    bb(a, 5, 5304, n + 32 | 0);
                    break l;
                  }
                  if (!((f | 0) == 1 | c == c)) {
                    J[n + 16 >> 2] = 1521;
                    bb(a, 5, 5304, n + 16 | 0);
                    break l;
                  }
                  l = (i ? 0 : 4) + k | 0;
                  J[l >> 2] = J[l >> 2] + 1;
                  l = K[a + 20 | 0] & 3;
                  Ka = d ? d : 1;
                  q = l ? l : Ka;
                  H[a + 392 | 0] = K[a + 392 | 0] & 252 | q & 3;
                  l = a + 436 | 0;
                  r = ((q | 0) != 1) << 3;
                  E = a + 20 | 0;
                  G = (q | 0) == 2 ? 3 : 2;
                  p = Ta(E, G, q, z);
                  N[l + r >> 2] = p;
                  o = ((q | 0) == 1) << 3;
                  s = Sa(E, G, q, z);
                  N[l + o >> 2] = s;
                  v = Ta(E, 0, q, z);
                  N[a + 440 >> 2] = v;
                  g = Sa(E, 0, q, z);
                  N[a + 448 >> 2] = g;
                  l = a + 452 | 0;
                  ab = l + r | 0, hb = fb(E, G, q), N[ab >> 2] = hb;
                  ab = l + o | 0, hb = eb(E, G, q), N[ab >> 2] = hb;
                  ab = a, hb = fb(E, 0, q), N[ab + 456 >> 2] = hb;
                  ab = a, hb = eb(E, 0, q), N[ab + 464 >> 2] = hb;
                  l = a + 468 | 0;
                  ab = r + l | 0, hb = qb(E, G, q, z), N[ab >> 2] = hb;
                  ab = l + o | 0, hb = pb(E, G, q, z), N[ab >> 2] = hb;
                  ab = a, hb = qb(E, 0, q, z), N[ab + 472 >> 2] = hb;
                  h = pb(E, 0, q, z);
                  N[a + 480 >> 2] = h;
                  S = Q(p + s);
                  D = Q(v + g);
                  m: {
                    n: {
                      l = J[a + 8 >> 2];
                      if (l) {
                        T = (e | 0) == 1 ? Q(Z) : Q(b - S);
                        p = (f | 0) == 1 ? Q(Z) : Q(c - D);
                        o: {
                          if (!(e | f)) {
                            ab = a, hb = Wa(a, 2, q, T, z, z), N[ab + 404 >> 2] = hb;
                            g = Wa(a, 0, q, p, la, z);
                            break o;
                          }
                          if (e >>> 0 >= 3 | f >>> 0 >= 3) {
                            break l;
                          }
                          s = Q(Q(Q(N[a + 468 >> 2] + N[a + 476 >> 2]) + N[a + 452 >> 2]) + N[a + 460 >> 2]);
                          g = Q(T - s);
                          w = T != T ? T : g > Q(0) ? g : Q(0);
                          v = Q(Q(Q(N[a + 472 >> 2] + h) + N[a + 456 >> 2]) + N[a + 464 >> 2]);
                          g = Q(p - v);
                          Fa[l | 0](n + 136 | 0, a, w, 131073 >>> (e << 3 & 16777208) & 255, p != p ? p : g > Q(0) ? g : Q(0), 131073 >>> (f << 3 & 16777208) & 255);
                          t = N[n + 140 >> 2];
                          h = N[n + 136 >> 2];
                          if (!(t >= Q(0) & h >= Q(0))) {
                            O[n + 8 >> 3] = t;
                            O[n >> 3] = h;
                            bb(a, 1, 4284, n);
                            g = N[n + 140 >> 2];
                            t = g > Q(0) ? g : Q(0);
                            g = N[n + 136 >> 2];
                            h = g > Q(0) ? g : Q(0);
                          }
                          J[k + 20 >> 2] = J[k + 20 >> 2] + 1;
                          j = (j << 2) + k | 0;
                          J[j + 24 >> 2] = J[j + 24 >> 2] + 1;
                          ab = a, hb = Wa(a, 2, q, e - 1 >>> 0 < 2 ? Q(s + h) : T, z, z), N[ab + 404 >> 2] = hb;
                          g = Wa(a, 0, q, f - 1 >>> 0 < 2 ? Q(v + t) : p, la, z);
                        }
                        N[a + 408 >> 2] = g;
                        break n;
                      }
                      p: {
                        if (!J[a + 488 >> 2]) {
                          l = J[a + 500 >> 2] - J[a + 496 >> 2] >> 2;
                          break p;
                        }
                        ib(n + 136 | 0, a);
                        q: {
                          if (!J[n + 136 >> 2]) {
                            l = 0;
                            if (!J[n + 140 >> 2]) {
                              break q;
                            }
                          }
                          r = n + 128 | 0;
                          l = 0;
                          while (1) {
                            J[n + 128 >> 2] = 0;
                            j = J[n + 140 >> 2];
                            J[n + 120 >> 2] = J[n + 136 >> 2];
                            J[n + 124 >> 2] = j;
                            tb(r, J[n + 144 >> 2]);
                            db(n + 136 | 0);
                            j = J[n + 128 >> 2];
                            if (j) {
                              while (1) {
                                o = J[j >> 2];
                                Ua(j);
                                j = o;
                                if (j) {
                                  continue;
                                }
                                break;
                              }
                            }
                            l = l + 1 | 0;
                            J[n + 128 >> 2] = 0;
                            if (J[n + 140 >> 2] | J[n + 136 >> 2]) {
                              continue;
                            }
                            break;
                          }
                        }
                        j = J[n + 144 >> 2];
                        if (!j) {
                          break p;
                        }
                        while (1) {
                          o = J[j >> 2];
                          Ua(j);
                          j = o;
                          if (j) {
                            continue;
                          }
                          break;
                        }
                      }
                      if (!l) {
                        ab = a, hb = Wa(a, 2, q, e - 1 >>> 0 > 1 ? Q(b - S) : Q(Q(Q(N[a + 468 >> 2] + N[a + 476 >> 2]) + N[a + 452 >> 2]) + N[a + 460 >> 2]), z, z), N[ab + 404 >> 2] = hb;
                        ab = a, hb = Wa(a, 0, q, f - 1 >>> 0 > 1 ? Q(c - D) : Q(Q(Q(N[a + 472 >> 2] + N[a + 480 >> 2]) + N[a + 456 >> 2]) + N[a + 464 >> 2]), la, z), N[ab + 408 >> 2] = hb;
                        break n;
                      }
                      r: {
                        if (i) {
                          break r;
                        }
                        h = Q(c - D);
                        g = Q(b - S);
                        if (!((f | 0) == 2 & h == h & h <= Q(0) | (!(e | f) | (e | 0) == 2 & g <= Q(0)))) {
                          break r;
                        }
                        ab = a, hb = Wa(a, 2, q, g != g ? Q(0) : (e | 0) == 2 ? g < Q(0) ? Q(0) : g : g, z, z), N[ab + 404 >> 2] = hb;
                        ab = a, hb = Wa(a, 0, q, h != h ? Q(0) : (f | 0) == 2 ? h < Q(0) ? Q(0) : h : h, la, z), N[ab + 408 >> 2] = hb;
                        break n;
                      }
                      Nb(a);
                      H[a + 392 | 0] = K[a + 392 | 0] & 251;
                      _b(a);
                      C = 3;
                      j = K[a + 20 | 0] >>> 2 & 3;
                      s: {
                        t: {
                          if ((q | 0) != 2) {
                            break t;
                          }
                          u: {
                            switch (j - 2 | 0) {
                              case 0:
                                break s;
                              case 1:
                                break u;
                              default:
                                break t;
                            }
                          }
                          C = 2;
                          break s;
                        }
                        C = j;
                      }
                      x = K[a + 21 | 0] | K[a + 22 | 0] << 8;
                      u = qb(E, C, q, z);
                      w = fb(E, C, q);
                      t = pb(E, C, q, z);
                      T = eb(E, C, q);
                      r = 0;
                      F = C >>> 0 < 2 ? G : 0;
                      s = qb(E, F, q, z);
                      v = fb(E, F, q);
                      h = pb(E, F, q, z);
                      g = eb(E, F, q);
                      Y = ac(E, F, q, z);
                      p = Jb(E, F, q);
                      La = Q(b - S);
                      ma = Q(Q(u + w) + Q(t + T));
                      ca = Q(Q(s + v) + Q(h + g));
                      ja = C >>> 0 > 1;
                      u = yc(a, q, 0, La, ja ? ma : ca, z, z);
                      Ma = Q(c - D);
                      T = yc(a, q, 1, Ma, ja ? ca : ma, la, z);
                      v: {
                        ha = ja ? e : f;
                        w: {
                          if (ha) {
                            break w;
                          }
                          ib(n + 136 | 0, a);
                          x: {
                            y: {
                              j = J[n + 140 >> 2];
                              o = J[n + 136 >> 2];
                              if (!(j | o)) {
                                break y;
                              }
                              while (1) {
                                G = J[o + 500 >> 2];
                                o = J[o + 496 >> 2];
                                if (G - o >> 2 >>> 0 <= j >>> 0) {
                                  break v;
                                }
                                j = J[o + (j << 2) >> 2];
                                z: {
                                  if (!xc(j)) {
                                    break z;
                                  }
                                  if (r) {
                                    break y;
                                  }
                                  g = sb(j);
                                  if (g == g & Q(R(g)) < Q(9999999747378752e-20)) {
                                    break y;
                                  }
                                  g = xb(j);
                                  if (g != g) {
                                    r = j;
                                    break z;
                                  }
                                  r = j;
                                  if (Q(R(g)) < Q(9999999747378752e-20)) {
                                    break y;
                                  }
                                }
                                db(n + 136 | 0);
                                j = J[n + 140 >> 2];
                                o = J[n + 136 >> 2];
                                if (j | o) {
                                  continue;
                                }
                                break;
                              }
                              break x;
                            }
                            r = 0;
                          }
                          j = J[n + 144 >> 2];
                          if (!j) {
                            break w;
                          }
                          while (1) {
                            o = J[j >> 2];
                            Ua(j);
                            j = o;
                            if (j) {
                              continue;
                            }
                            break;
                          }
                        }
                        ib(n + 136 | 0, a);
                        j = J[n + 140 >> 2];
                        o = J[n + 136 >> 2];
                        A: {
                          if (!o) {
                            t = Q(0);
                            if (!j) {
                              break A;
                            }
                          }
                          ua = T != T;
                          V = ua | (f | 0) != 0;
                          W = u != u;
                          G = W | (e | 0) != 0;
                          t = Q(0);
                          while (1) {
                            y = J[o + 500 >> 2];
                            o = J[o + 496 >> 2];
                            if (y - o >> 2 >>> 0 <= j >>> 0) {
                              break v;
                            }
                            A = J[o + (j << 2) >> 2];
                            wc(A);
                            j = K[A + 21 | 0] | K[A + 22 | 0] << 8 | K[A + 23 | 0] << 16;
                            B: {
                              if ((j & 786432) == 262144) {
                                vc(A);
                                o = K[A | 0];
                                j = o | 1;
                                H[A | 0] = o & 4 ? j & 251 : j;
                                break B;
                              }
                              if (i) {
                                j = K[A + 20 | 0] & 3;
                                uc(A, j ? j : q, u, T);
                                j = K[A + 21 | 0] | K[A + 22 | 0] << 8 | K[A + 23 | 0] << 16;
                              }
                              if ((j & 12288) == 8192) {
                                break B;
                              }
                              X = A + 20 | 0;
                              C: {
                                if ((r | 0) == (A | 0)) {
                                  J[r + 156 >> 2] = 0;
                                  J[r + 152 >> 2] = m;
                                  h = Q(0);
                                  break C;
                                }
                                j = K[E | 0] >>> 2 & 3;
                                D: {
                                  E: {
                                    if ((q | 0) != 2) {
                                      break E;
                                    }
                                    y = 3;
                                    F: {
                                      switch (j - 2 | 0) {
                                        case 0:
                                          break D;
                                        case 1:
                                          break F;
                                        default:
                                          break E;
                                      }
                                    }
                                    y = 2;
                                    break D;
                                  }
                                  y = j;
                                }
                                J[n + 104 >> 2] = 2143289344;
                                J[n + 80 >> 2] = 2143289344;
                                ia = A + 124 | 0;
                                Xa(n + 120 | 0, ia, L[A + 30 >> 1]);
                                na = y >>> 0 > 1;
                                v = na ? u : T;
                                G: {
                                  H: {
                                    I: {
                                      J: {
                                        j = K[n + 124 | 0];
                                        switch (j | 0) {
                                          case 0:
                                          case 3:
                                            break J;
                                          default:
                                            break I;
                                        }
                                      }
                                      K: {
                                        g = Qa(ia, L[A + 24 >> 1]);
                                        if (g != g) {
                                          break K;
                                        }
                                        if (!(Qa(ia, L[A + 24 >> 1]) > Q(0))) {
                                          break K;
                                        }
                                        j = H[J[A + 508 >> 2] + 8 | 0] & 1;
                                        if (j) {
                                          break K;
                                        }
                                        h = j ? Q(Z) : Q(0);
                                        break H;
                                      }
                                      g = Q(Z);
                                      break G;
                                    }
                                    h = N[n + 120 >> 2];
                                    g = Q(Z);
                                    L: {
                                      switch (j - 1 | 0) {
                                        case 0:
                                          break H;
                                        case 1:
                                          break L;
                                        default:
                                          break G;
                                      }
                                    }
                                    g = Q(Q(h * v) * Q(0.009999999776482582));
                                    break G;
                                  }
                                  g = h;
                                }
                                if (K[A + 23 | 0] << 16 & 1048576) {
                                  h = g;
                                  g = Sb(X, q, 257 >>> (y << 3) & 1, u);
                                  g = Q(h + (g == g ? g : Q(0)));
                                }
                                h = N[A + 512 >> 2];
                                ra = 0;
                                ka = 0;
                                M: {
                                  N: {
                                    switch (K[A + 516 | 0] - 1 | 0) {
                                      case 1:
                                        h = Q(Q(u * h) * Q(0.009999999776482582));
                                        break;
                                      case 0:
                                        break N;
                                      default:
                                        break M;
                                    }
                                  }
                                  if (h != h) {
                                    break M;
                                  }
                                  ka = h >= Q(0);
                                }
                                h = N[A + 520 >> 2];
                                O: {
                                  P: {
                                    switch (K[A + 524 | 0] - 1 | 0) {
                                      case 1:
                                        h = Q(Q(T * h) * Q(0.009999999776482582));
                                        break;
                                      case 0:
                                        break P;
                                      default:
                                        break O;
                                    }
                                  }
                                  if (h != h) {
                                    break O;
                                  }
                                  ra = h >= Q(0);
                                }
                                j = g != g;
                                Q: {
                                  R: {
                                    if (!(j | v != v)) {
                                      h = N[A + 156 >> 2];
                                      if ((!(H[J[A + 508 >> 2] + 16 | 0] & 1) | J[A + 152 >> 2] == (m | 0)) & h == h) {
                                        break Q;
                                      }
                                      h = Q(Q(qb(X, y, q, u) + fb(X, y, q)) + Q(pb(X, y, q, u) + eb(X, y, q)));
                                      h = g == g & h == h ? g < h ? h : g : j ? h : g;
                                      break R;
                                    }
                                    if (ka & na) {
                                      g = Q(Q(qb(X, 2, q, u) + fb(X, 2, q)) + Q(pb(X, 2, q, u) + eb(X, 2, q)));
                                      h = gb(A, q, 0, u, u);
                                      h = h == h & g == g ? g > h ? g : h : h != h ? g : h;
                                      break R;
                                    }
                                    if (!(na | !ra)) {
                                      g = Q(Q(qb(X, 0, q, u) + fb(X, 0, q)) + Q(pb(X, 0, q, u) + eb(X, 0, q)));
                                      h = gb(A, q, 1, T, u);
                                      h = h == h & g == g ? g > h ? g : h : h != h ? g : h;
                                      break R;
                                    }
                                    $ = 1;
                                    J[n + 100 >> 2] = 1;
                                    J[n + 120 >> 2] = 1;
                                    w = Q(Ta(X, 2, 1, u) + Sa(X, 2, 1, u));
                                    s = Ta(X, 0, 1, u);
                                    v = Sa(X, 0, 1, u);
                                    h = Q(Z);
                                    da = 1;
                                    g = Q(Z);
                                    if (ka) {
                                      g = gb(A, q, 0, u, u);
                                      J[n + 120 >> 2] = 0;
                                      g = Q(w + g);
                                      N[n + 104 >> 2] = g;
                                      da = 0;
                                    }
                                    s = Q(s + v);
                                    if (ra) {
                                      h = gb(A, q, 1, T, u);
                                      J[n + 100 >> 2] = 0;
                                      h = Q(s + h);
                                      N[n + 80 >> 2] = h;
                                      $ = 0;
                                    }
                                    j = (K[a + 23 | 0] << 16 & 196608) == 131072;
                                    o = y >>> 0 < 2;
                                    S: {
                                      T: {
                                        U: {
                                          if (!(j & o)) {
                                            if (j | W) {
                                              break T;
                                            }
                                            if (g != g) {
                                              break U;
                                            }
                                            break T;
                                          }
                                          if (W | g == g) {
                                            break S;
                                          }
                                        }
                                        da = 2;
                                        J[n + 120 >> 2] = 2;
                                        N[n + 104 >> 2] = u;
                                        g = u;
                                      }
                                      V: {
                                        if (j ? o : 1) {
                                          if (j | ua) {
                                            break S;
                                          }
                                          if (h != h) {
                                            break V;
                                          }
                                          break S;
                                        }
                                        if (ua | h == h) {
                                          break S;
                                        }
                                      }
                                      $ = 2;
                                      J[n + 100 >> 2] = 2;
                                      N[n + 80 >> 2] = T;
                                      h = T;
                                    }
                                    v = Qa(ia, L[A + 122 >> 1]);
                                    W: {
                                      if (v != v) {
                                        break W;
                                      }
                                      X: {
                                        if (!(da | na)) {
                                          h = Qa(ia, L[A + 122 >> 1]);
                                          J[n + 100 >> 2] = 0;
                                          N[n + 80 >> 2] = s + Q(Q(g - w) / h);
                                          break X;
                                        }
                                        if (o | $) {
                                          break W;
                                        }
                                        g = Qa(ia, L[A + 122 >> 1]);
                                        J[n + 120 >> 2] = 0;
                                        N[n + 104 >> 2] = Q(g * Q(h - s)) + w;
                                      }
                                      $ = 0;
                                      da = 0;
                                    }
                                    j = (K[A + 22 | 0] | K[A + 23 | 0] << 8) & 15;
                                    if (!j) {
                                      j = K[a + 21 | 0] >>> 4 | 0;
                                    }
                                    Y: {
                                      if (!da | (na | (j | 0) == 5 | (G | ka | (j | 0) != 4))) {
                                        break Y;
                                      }
                                      J[n + 120 >> 2] = 0;
                                      N[n + 104 >> 2] = u;
                                      g = Qa(ia, L[A + 122 >> 1]);
                                      if (g != g) {
                                        break Y;
                                      }
                                      $ = 0;
                                      g = Qa(ia, L[A + 122 >> 1]);
                                      J[n + 100 >> 2] = 0;
                                      N[n + 80 >> 2] = Q(u - w) / g;
                                    }
                                    ka = (K[A + 22 | 0] | K[A + 23 | 0] << 8) & 15;
                                    if (!ka) {
                                      ka = K[a + 21 | 0] >>> 4 | 0;
                                    }
                                    Z: {
                                      if (o | V | ra | (ka | 0) == 5 | (!$ | (ka | 0) != 4)) {
                                        break Z;
                                      }
                                      J[n + 100 >> 2] = 0;
                                      N[n + 80 >> 2] = T;
                                      g = Qa(ia, L[A + 122 >> 1]);
                                      if (g != g) {
                                        break Z;
                                      }
                                      g = Qa(ia, L[A + 122 >> 1]);
                                      J[n + 120 >> 2] = 0;
                                      N[n + 104 >> 2] = g * Q(T - s);
                                    }
                                    wb(A, q, 2, u, u, n + 120 | 0, n + 104 | 0);
                                    wb(A, q, 0, T, u, n + 100 | 0, n + 80 | 0);
                                    ub(A, N[n + 104 >> 2], N[n + 80 >> 2], q, J[n + 120 >> 2], J[n + 100 >> 2], u, T, 0, 5, k, ya, m);
                                    h = N[(A + (J[(y << 2) + 5340 >> 2] << 2) | 0) + 404 >> 2];
                                    g = Q(Q(qb(X, y, q, u) + fb(X, y, q)) + Q(pb(X, y, q, u) + eb(X, y, q)));
                                    h = h == h & g == g ? g > h ? g : h : h != h ? g : h;
                                  }
                                  N[A + 156 >> 2] = h;
                                }
                                J[A + 152 >> 2] = m;
                              }
                              t = Q(t + Q(h + Q(Ta(X, C, 1, u) + Sa(X, C, 1, u))));
                            }
                            db(n + 136 | 0);
                            j = J[n + 140 >> 2];
                            o = J[n + 136 >> 2];
                            if (j | o) {
                              continue;
                            }
                            break;
                          }
                        }
                        j = J[n + 144 >> 2];
                        if (j) {
                          while (1) {
                            o = J[j >> 2];
                            Ua(j);
                            j = o;
                            if (j) {
                              continue;
                            }
                            break;
                          }
                        }
                        h = ja ? u : T;
                        g = Q(t + Q(0));
                        if (l >>> 0 >= 2) {
                          g = Q(Q(Lb(E, C, h) * Q(l - 1 >>> 0)) + g);
                        }
                        v = Q(Y + p);
                        va = ja ? f : e;
                        wa = ja ? la : z;
                        oa = ja ? z : la;
                        ib(n + 80 | 0, a);
                        l = g > h;
                        Ba = x & 49152;
                        za = Ba ? (ha | 0) == 2 ? l ? 0 : ha : ha : ha;
                        Y = ja ? T : u;
                        Na = Lb(E, F, Y);
                        j = J[n + 80 >> 2];
                        G = J[n + 84 >> 2];
                        if (j | G) {
                          Oa = Y != Y;
                          _a = Oa ? 1 : 2;
                          $a = !l | (ha | 0) == 1;
                          xa = C >>> 0 < 2;
                          A = a + 114 | 0;
                          X = a + 124 | 0;
                          o = C << 2;
                          ia = o + 5324 | 0;
                          ka = o + 5308 | 0;
                          l = F << 2;
                          Ca = l + 5324 | 0;
                          Ea = l + 5308 | 0;
                          Pa = o + 5340 | 0;
                          Ia = l + 5340 | 0;
                          ja = (va | 0) != 0;
                          $ = ja | i;
                          ha = !va;
                          na = ha & (i ^ 1);
                          ra = !(va | Ba);
                          ua = n + 112 | 0;
                          Ra = n + 128 | 0;
                          Ya = 257 >>> (C << 3) & 255;
                          W = va - 1 >>> 0 < 2;
                          while (1) {
                            J[n + 128 >> 2] = 0;
                            J[n + 120 >> 2] = 0;
                            J[n + 124 >> 2] = 0;
                            o = J[a + 500 >> 2];
                            l = J[a + 496 >> 2];
                            _: {
                              if ((o | 0) == (l | 0)) {
                                break _;
                              }
                              l = o - l | 0;
                              if ((l | 0) < 0) {
                                break v;
                              }
                              y = Ib(n + 136 | 0, l >> 2, 0, Ra);
                              o = J[n + 120 >> 2];
                              l = J[n + 124 >> 2] - o | 0;
                              l = jb(J[n + 140 >> 2] - l | 0, o, l);
                              x = J[n + 120 >> 2];
                              J[n + 140 >> 2] = x;
                              J[n + 120 >> 2] = l;
                              r = J[n + 144 >> 2];
                              o = J[n + 148 >> 2];
                              V = J[n + 124 >> 2];
                              J[n + 144 >> 2] = V;
                              l = J[n + 128 >> 2];
                              J[n + 124 >> 2] = r;
                              J[n + 128 >> 2] = o;
                              J[n + 148 >> 2] = l;
                              J[y >> 2] = x;
                              if ((x | 0) != (V | 0)) {
                                J[n + 144 >> 2] = V + ((x - V | 0) + 3 & -4);
                              }
                              if (!x) {
                                break _;
                              }
                              Ua(x);
                            }
                            o = K[E | 0];
                            l = o >>> 2 & 3;
                            $: {
                              aa: {
                                o = o & 3;
                                fa = o ? o : Ka;
                                if ((fa | 0) != 2) {
                                  break aa;
                                }
                                r = 3;
                                ba: {
                                  switch (l - 2 | 0) {
                                    case 0:
                                      break $;
                                    case 1:
                                      break ba;
                                    default:
                                      break aa;
                                  }
                                }
                                r = 2;
                                break $;
                              }
                              r = l;
                            }
                            l = K[a + 21 | 0] | K[a + 22 | 0] << 8;
                            S = Lb(E, r, h);
                            ca: {
                              if (!(j | G)) {
                                ea = Q(0);
                                G = 0;
                                aa = Q(0);
                                M = Q(0);
                                da = 0;
                                break ca;
                              }
                              x = l & 49152;
                              I = r >>> 0 < 2;
                              l = r << 2;
                              V = l + 5324 | 0;
                              y = l + 5308 | 0;
                              da = 0;
                              M = Q(0);
                              o = G;
                              aa = Q(0);
                              ea = Q(0);
                              ta = 0;
                              t = Q(0);
                              while (1) {
                                l = J[j + 500 >> 2];
                                j = J[j + 496 >> 2];
                                if (l - j >> 2 >>> 0 <= o >>> 0) {
                                  break v;
                                }
                                _ = J[j + (o << 2) >> 2];
                                j = K[_ + 21 | 0] | K[_ + 22 | 0] << 8 | K[_ + 23 | 0] << 16;
                                da: {
                                  if ((j & 786432) == 262144 | (j & 12288) == 8192) {
                                    break da;
                                  }
                                  j = n + 136 | 0;
                                  U = _ + 20 | 0;
                                  Za(j, U, J[y >> 2], d);
                                  l = K[n + 140 | 0];
                                  Za(j, U, J[V >> 2], d);
                                  j = K[n + 140 | 0];
                                  J[_ + 484 >> 2] = pa;
                                  G = ((l | 0) == 3) + da | 0;
                                  l = (j | 0) == 3;
                                  D = Ta(U, r, 1, u);
                                  w = Sa(U, r, 1, u);
                                  ta = ta ? ta : _;
                                  j = (_ | 0) == (ta | 0);
                                  s = N[_ + 156 >> 2];
                                  p = lb(U, fa, I, oa, z);
                                  g = cb(U, fa, I, oa, z);
                                  ea: {
                                    if (g >= Q(0) & g < s) {
                                      break ea;
                                    }
                                    if (!(p >= Q(0))) {
                                      g = s;
                                      break ea;
                                    }
                                    g = p > s ? p : s;
                                  }
                                  da = l + G | 0;
                                  p = j ? Q(0) : S;
                                  s = Q(D + w);
                                  if (!(!x | !(Q(p + Q(s + Q(t + g))) > h) | J[n + 120 >> 2] == J[n + 124 >> 2])) {
                                    G = o;
                                    break ca;
                                  }
                                  if (xc(_)) {
                                    aa = Q(aa + sb(_));
                                    ea = Q(ea - Q(xb(_) * N[_ + 156 >> 2]));
                                  }
                                  g = Q(p + Q(s + g));
                                  M = Q(M + g);
                                  t = Q(t + g);
                                  j = J[n + 124 >> 2];
                                  if ((j | 0) != J[n + 128 >> 2]) {
                                    J[j >> 2] = _;
                                    J[n + 124 >> 2] = j + 4;
                                    break da;
                                  }
                                  G = j - J[n + 120 >> 2] | 0;
                                  l = G >> 2;
                                  o = l + 1 | 0;
                                  if (o >>> 0 >= 1073741824) {
                                    break v;
                                  }
                                  j = G >> 1;
                                  G = Ib(n + 136 | 0, G >>> 0 >= 2147483644 ? 1073741823 : j >>> 0 > o >>> 0 ? j : o, l, Ra);
                                  J[J[n + 144 >> 2] >> 2] = _;
                                  J[n + 144 >> 2] = J[n + 144 >> 2] + 4;
                                  l = J[n + 120 >> 2];
                                  j = J[n + 124 >> 2] - l | 0;
                                  j = jb(J[n + 140 >> 2] - j | 0, l, j);
                                  _ = J[n + 120 >> 2];
                                  J[n + 140 >> 2] = _;
                                  J[n + 120 >> 2] = j;
                                  o = J[n + 144 >> 2];
                                  l = J[n + 148 >> 2];
                                  U = J[n + 124 >> 2];
                                  J[n + 144 >> 2] = U;
                                  j = J[n + 128 >> 2];
                                  J[n + 124 >> 2] = o;
                                  J[n + 128 >> 2] = l;
                                  J[n + 148 >> 2] = j;
                                  J[G >> 2] = _;
                                  if ((U | 0) != (_ | 0)) {
                                    J[n + 144 >> 2] = U + ((_ - U | 0) + 3 & -4);
                                  }
                                  if (!_) {
                                    break da;
                                  }
                                  Ua(_);
                                }
                                J[n + 112 >> 2] = 0;
                                j = J[n + 84 >> 2];
                                J[n + 104 >> 2] = J[n + 80 >> 2];
                                J[n + 108 >> 2] = j;
                                tb(ua, J[n + 88 >> 2]);
                                db(n + 80 | 0);
                                j = J[n + 112 >> 2];
                                if (j) {
                                  while (1) {
                                    l = J[j >> 2];
                                    Ua(j);
                                    j = l;
                                    if (j) {
                                      continue;
                                    }
                                    break;
                                  }
                                }
                                G = 0;
                                J[n + 112 >> 2] = 0;
                                j = J[n + 80 >> 2];
                                o = J[n + 84 >> 2];
                                if (j | o) {
                                  continue;
                                }
                                break;
                              }
                            }
                            s = aa > Q(0) ? aa < Q(1) ? Q(1) : aa : aa;
                            fa = J[n + 124 >> 2];
                            j = J[n + 120 >> 2];
                            fa: {
                              ga: {
                                ha: {
                                  ia: {
                                    ja: {
                                      ka: {
                                        if (!za) {
                                          break ka;
                                        }
                                        w = lb(E, q, 0, z, z);
                                        t = cb(E, q, 0, z, z);
                                        g = lb(E, q, 1, la, z);
                                        p = cb(E, q, 1, la, z);
                                        l = C >>> 0 > 1;
                                        g = Q((l ? w : g) - ma);
                                        if (g == g & g > M) {
                                          break ja;
                                        }
                                        g = Q((l ? t : p) - ma);
                                        if (g == g & g < M) {
                                          break ja;
                                        }
                                        if (H[J[a + 508 >> 2] + 20 | 0] & 1) {
                                          break ka;
                                        }
                                        g = M;
                                        if (s == Q(0)) {
                                          break ha;
                                        }
                                        g = sb(a);
                                        if (g != g) {
                                          break ia;
                                        }
                                        g = M;
                                        if (sb(a) == Q(0)) {
                                          break ha;
                                        }
                                        break ia;
                                      }
                                      g = h;
                                    }
                                    if (g == g) {
                                      break ga;
                                    }
                                    h = g;
                                  }
                                  g = h;
                                }
                                w = M < Q(0) ? Q(-M) : Q(0);
                                break fa;
                              }
                              w = Q(g - M);
                            }
                            h = g;
                            if (!na) {
                              la: {
                                if ((j | 0) == (fa | 0)) {
                                  M = Q(0);
                                  break la;
                                }
                                t = ea > Q(0) ? ea < Q(1) ? Q(1) : ea : ea;
                                M = Q(0);
                                o = j;
                                while (1) {
                                  r = J[o >> 2];
                                  p = N[r + 156 >> 2];
                                  l = r + 20 | 0;
                                  D = lb(l, q, xa, oa, z);
                                  g = cb(l, q, xa, oa, z);
                                  ma: {
                                    if (g >= Q(0) & g < p) {
                                      break ma;
                                    }
                                    if (!(D >= Q(0))) {
                                      g = p;
                                      break ma;
                                    }
                                    g = p < D ? D : p;
                                  }
                                  na: {
                                    if (w < Q(0)) {
                                      p = Q(g * Q(-xb(r)));
                                      if (!(p > Q(0) | p < Q(0))) {
                                        break na;
                                      }
                                      p = Q(Q(Q(w / t) * p) + g);
                                      D = Wa(r, C, q, p, h, u);
                                      if (p != p | D != D | p == D) {
                                        break na;
                                      }
                                      M = Q(M + Q(D - g));
                                      t = Q(Q(xb(r) * N[r + 156 >> 2]) + t);
                                      break na;
                                    }
                                    if (!(w > Q(0))) {
                                      break na;
                                    }
                                    D = sb(r);
                                    if (!(D > Q(0) | D < Q(0))) {
                                      break na;
                                    }
                                    p = Q(Q(Q(w / s) * D) + g);
                                    S = Wa(r, C, q, p, h, u);
                                    if (p != p | S != S | p == S) {
                                      break na;
                                    }
                                    s = Q(s - D);
                                    M = Q(M + Q(S - g));
                                  }
                                  o = o + 4 | 0;
                                  if ((fa | 0) != (o | 0)) {
                                    continue;
                                  }
                                  break;
                                }
                                Ga = Q(w - M);
                                ea = Q(Ga / t);
                                qa = Q(Ga / s);
                                V = !((K[a + 21 | 0] | K[a + 22 | 0] << 8) & 49152) | $a;
                                M = Q(0);
                                l = j;
                                while (1) {
                                  I = J[l >> 2];
                                  s = N[I + 156 >> 2];
                                  x = I + 20 | 0;
                                  p = lb(x, q, xa, oa, z);
                                  g = cb(x, q, xa, oa, z);
                                  oa: {
                                    if (g >= Q(0) & g < s) {
                                      break oa;
                                    }
                                    if (!(p >= Q(0))) {
                                      g = s;
                                      break oa;
                                    }
                                    g = p > s ? p : s;
                                  }
                                  pa: {
                                    qa: {
                                      if (Ga < Q(0)) {
                                        s = Q(g * Q(-xb(I)));
                                        p = g;
                                        if (s == Q(0)) {
                                          break pa;
                                        }
                                        p = Q(g + s);
                                        if (t == Q(0)) {
                                          break qa;
                                        }
                                        p = Q(Q(ea * s) + g);
                                        break qa;
                                      }
                                      p = g;
                                      if (!(Ga > Q(0))) {
                                        break pa;
                                      }
                                      s = sb(I);
                                      p = g;
                                      if (!(s > Q(0) | s < Q(0))) {
                                        break pa;
                                      }
                                      p = Q(Q(qa * s) + g);
                                    }
                                    p = Wa(I, C, q, p, h, u);
                                  }
                                  aa = p;
                                  D = Ta(x, C, 1, u);
                                  p = Sa(x, C, 1, u);
                                  S = Ta(x, F, 1, u);
                                  s = Sa(x, F, 1, u);
                                  D = Q(D + p);
                                  p = Q(aa + D);
                                  N[n + 104 >> 2] = p;
                                  J[n + 96 >> 2] = 0;
                                  Ha = Q(S + s);
                                  o = I + 124 | 0;
                                  s = Qa(o, L[I + 122 >> 1]);
                                  ra: {
                                    if (s == s) {
                                      S = Qa(o, L[I + 122 >> 1]);
                                      J[n + 100 >> 2] = 0;
                                      s = Q(p - D);
                                      N[n + 120 >> 2] = Ha + (xa ? Q(s * S) : Q(s / S));
                                      break ra;
                                    }
                                    r = J[Ia >> 2];
                                    sa: {
                                      if (Oa) {
                                        break sa;
                                      }
                                      o = I + (r << 3) | 0;
                                      p = N[o + 512 >> 2];
                                      y = 0;
                                      ta: {
                                        ua: {
                                          switch (K[o + 516 | 0] - 1 | 0) {
                                            case 1:
                                              p = Q(Q(Y * p) * Q(0.009999999776482582));
                                              break;
                                            case 0:
                                              break ua;
                                            default:
                                              break ta;
                                          }
                                        }
                                        if (p != p) {
                                          break ta;
                                        }
                                        y = p >= Q(0);
                                      }
                                      if (!(V & ((y ^ 1) & ha))) {
                                        break sa;
                                      }
                                      o = (K[I + 22 | 0] | K[I + 23 | 0] << 8) & 15;
                                      if (!o) {
                                        o = K[a + 21 | 0] >>> 4 | 0;
                                      }
                                      if ((o | 0) != 4) {
                                        break sa;
                                      }
                                      Za(n + 136 | 0, x, J[Ea >> 2], q);
                                      if (K[n + 140 | 0] == 3) {
                                        break sa;
                                      }
                                      Za(n + 136 | 0, x, J[Ca >> 2], q);
                                      if (K[n + 140 | 0] == 3) {
                                        break sa;
                                      }
                                      J[n + 100 >> 2] = 0;
                                      N[n + 120 >> 2] = Y;
                                      break ra;
                                    }
                                    y = I + 512 | 0;
                                    o = y + (r << 3) | 0;
                                    p = N[o >> 2];
                                    va: {
                                      wa: {
                                        switch (K[o + 4 | 0] - 1 | 0) {
                                          case 1:
                                            p = Q(Q(Y * p) * Q(0.009999999776482582));
                                          case 0:
                                            if (p >= Q(0)) {
                                              break va;
                                            }
                                            break;
                                          default:
                                            break wa;
                                        }
                                      }
                                      J[n + 100 >> 2] = _a;
                                      N[n + 120 >> 2] = Y;
                                      break ra;
                                    }
                                    xa: {
                                      ya: {
                                        za: {
                                          switch (F - 2 | 0) {
                                            case 1:
                                              p = Q(Ha + gb(I, q, 0, Y, u));
                                              break ya;
                                            default:
                                              r = 1;
                                              p = Q(Ha + gb(I, q, 1, Y, u));
                                              N[n + 120 >> 2] = p;
                                              if (C >>> 0 <= 1) {
                                                break l;
                                              }
                                              break xa;
                                            case 0:
                                              break za;
                                          }
                                        }
                                        p = Q(Ha + gb(I, q, 0, Y, u));
                                      }
                                      r = 0;
                                      N[n + 120 >> 2] = p;
                                    }
                                    J[n + 100 >> 2] = K[(y + (r << 3) | 0) + 4 | 0] == 2 & ja | p != p;
                                  }
                                  wb(I, q, C, h, u, n + 96 | 0, n + 104 | 0);
                                  wb(I, q, F, Y, u, n + 100 | 0, n + 120 | 0);
                                  o = I + (J[Ia >> 2] << 3) | 0;
                                  p = N[o + 512 >> 2];
                                  Aa: {
                                    Ba: {
                                      switch (K[o + 516 | 0] - 1 | 0) {
                                        case 1:
                                          p = Q(Q(Y * p) * Q(0.009999999776482582));
                                        case 0:
                                          r = 1;
                                          if (p >= Q(0)) {
                                            break Aa;
                                          }
                                          break;
                                        default:
                                          break Ba;
                                      }
                                    }
                                    r = 1;
                                    o = (K[I + 22 | 0] | K[I + 23 | 0] << 8) & 15;
                                    if (!o) {
                                      o = K[a + 21 | 0] >>> 4 | 0;
                                    }
                                    if ((o | 0) != 4) {
                                      break Aa;
                                    }
                                    Za(n + 136 | 0, x, J[Ea >> 2], q);
                                    if (K[n + 140 | 0] == 3) {
                                      break Aa;
                                    }
                                    Za(n + 136 | 0, x, J[Ca >> 2], q);
                                    r = K[n + 140 | 0] == 3;
                                  }
                                  p = N[n + 104 >> 2];
                                  s = N[n + 120 >> 2];
                                  x = C >>> 0 > 1;
                                  y = J[n + 96 >> 2];
                                  o = J[n + 100 >> 2];
                                  U = x ? y : o;
                                  y = x ? o : y;
                                  o = i & r;
                                  ub(I, x ? p : s, x ? s : p, K[a + 392 | 0] & 3, U, y, u, T, o, o ? 4 : 7, k, ya, m);
                                  M = Q(M + Q(aa - g));
                                  o = K[a + 392 | 0];
                                  Ca: {
                                    if (!(o & 4)) {
                                      r = 0;
                                      if (!(K[I + 392 | 0] & 4)) {
                                        break Ca;
                                      }
                                    }
                                    r = 4;
                                  }
                                  H[a + 392 | 0] = r | o & 251;
                                  l = l + 4 | 0;
                                  if ((fa | 0) != (l | 0)) {
                                    continue;
                                  }
                                  break;
                                }
                              }
                              w = Q(w - M);
                            }
                            l = K[a + 392 | 0];
                            H[a + 392 | 0] = l & 251 | ((l & 4) >>> 2 | 0 ? 4 : (w < Q(0)) << 2);
                            p = Q(ac(E, C, q, z) + Jb(E, C, q));
                            ea = Q(Dc(E, C, q, z) + Qb(E, C, q));
                            aa = Lb(E, C, h);
                            Da: {
                              Ea: {
                                Fa: {
                                  if (!(!(w > Q(0)) | (za | 0) != 2)) {
                                    Xa(n + 136 | 0, X, L[(J[Pa >> 2] << 1) + A >> 1]);
                                    Ga: {
                                      if (K[n + 140 | 0]) {
                                        g = lb(E, q, Ya, oa, z);
                                        if (g == g) {
                                          break Ga;
                                        }
                                      }
                                      s = Q(0);
                                      break Fa;
                                    }
                                    w = Q(Q(Q(lb(E, q, Ya, oa, z) - p) - ea) - Q(h - w));
                                    s = Q(0);
                                    if (!(w > Q(0))) {
                                      break Fa;
                                    }
                                  }
                                  if (!(w >= Q(0))) {
                                    break Ea;
                                  }
                                  s = w;
                                }
                                l = K[E | 0] >>> 4 & 7;
                                break Da;
                              }
                              s = w;
                              l = K[E | 0] >>> 4 & 7;
                              l = l - 3 >>> 0 >= 3 ? l : 0;
                            }
                            g = Q(0);
                            Ha: {
                              Ia: {
                                if (da) {
                                  break Ia;
                                }
                                t = Q(0);
                                Ja: {
                                  switch (l - 1 | 0) {
                                    case 0:
                                      t = Q(s * Q(0.5));
                                      break Ha;
                                    case 1:
                                      t = s;
                                      break Ha;
                                    case 2:
                                      l = fa - j | 0;
                                      if (l >>> 0 < 5) {
                                        break Ia;
                                      }
                                      aa = Q(aa + Q(s / Q((l >> 2) - 1 >>> 0)));
                                      break Ia;
                                    case 4:
                                      t = Q(s / Q((fa - j >> 2) + 1 >>> 0));
                                      aa = Q(aa + t);
                                      break Ha;
                                    case 3:
                                      break Ja;
                                    default:
                                      break Ha;
                                  }
                                }
                                t = Q(Q(s * Q(0.5)) / Q(fa - j >> 2 >>> 0));
                                aa = Q(Q(t + t) + aa);
                                break Ha;
                              }
                              t = Q(0);
                            }
                            t = Q(p + t);
                            x = Ac(a);
                            V = (j | 0) == (fa | 0);
                            Ka: {
                              if (V) {
                                w = Q(0);
                                p = Q(0);
                                break Ka;
                              }
                              y = fa - 4 | 0;
                              qa = Q(s / Q(da >>> 0));
                              r = J[ka >> 2];
                              p = Q(0);
                              w = Q(0);
                              l = j;
                              while (1) {
                                U = J[l >> 2];
                                I = U + 20 | 0;
                                Za(n + 136 | 0, I, r, q);
                                M = t;
                                t = s > Q(0) ? qa : Q(-0);
                                D = Q(M + (K[n + 140 | 0] != 3 ? Q(-0) : t));
                                if (i) {
                                  La: {
                                    Ma: {
                                      switch (C - 1 | 0) {
                                        default:
                                          da = 1;
                                          o = U + 424 | 0;
                                          break La;
                                        case 0:
                                          da = 3;
                                          o = U + 432 | 0;
                                          break La;
                                        case 1:
                                          da = 0;
                                          o = U + 420 | 0;
                                          break La;
                                        case 2:
                                          break Ma;
                                      }
                                    }
                                    da = 2;
                                    o = U + 428 | 0;
                                  }
                                  N[(U + (da << 2) | 0) + 420 >> 2] = N[o >> 2] + D;
                                }
                                o = J[y >> 2];
                                Za(n + 136 | 0, I, J[ia >> 2], q);
                                t = Q(Q(D + ((o | 0) == (U | 0) ? Q(-0) : aa)) + (K[n + 140 | 0] != 3 ? Q(-0) : t));
                                Na: {
                                  if (!$) {
                                    t = Q(t + Q(Q(Ta(I, C, 1, u) + Sa(I, C, 1, u)) + N[U + 156 >> 2]));
                                    g = Y;
                                    break Na;
                                  }
                                  t = Q(Zb(U, C, u) + t);
                                  if (x) {
                                    S = Mb(U);
                                    D = yb(I, 0, q, u);
                                    S = Q(S + D);
                                    D = Q(Q(N[U + 408 >> 2] + Q(Ta(I, 0, 1, u) + Sa(I, 0, 1, u))) - S);
                                    w = w == w & D == D ? w < D ? D : w : w != w ? D : w;
                                    p = p == p & S == S ? p < S ? S : p : p != p ? S : p;
                                    break Na;
                                  }
                                  D = Zb(U, F, u);
                                  g = g == g & D == D ? g < D ? D : g : g != g ? D : g;
                                }
                                l = l + 4 | 0;
                                if ((fa | 0) != (l | 0)) {
                                  continue;
                                }
                                break;
                              }
                            }
                            M = x ? Q(w + p) : g;
                            Oa: {
                              if (W) {
                                p = Q(Wa(a, F, q, Q(ca + M), wa, z) - ca);
                                break Oa;
                              }
                              M = ra ? Y : M;
                              p = Y;
                            }
                            if (!Ba) {
                              M = Q(Wa(a, F, q, Q(ca + M), wa, z) - ca);
                            }
                            w = Q(ea + t);
                            Pa: {
                              if (!i) {
                                break Pa;
                              }
                              l = j;
                              if (V) {
                                break Pa;
                              }
                              while (1) {
                                x = J[l >> 2];
                                o = (K[x + 22 | 0] | K[x + 23 | 0] << 8) & 15;
                                if (!o) {
                                  o = K[a + 21 | 0] >>> 4 | 0;
                                }
                                Qa: {
                                  Ra: {
                                    Sa: {
                                      switch (o - 4 | 0) {
                                        case 0:
                                          r = x + 20 | 0;
                                          Za(n + 136 | 0, r, J[Ea >> 2], q);
                                          o = 4;
                                          if (K[n + 140 | 0] == 3) {
                                            break Ra;
                                          }
                                          Za(n + 136 | 0, r, J[Ca >> 2], q);
                                          if (K[n + 140 | 0] == 3) {
                                            break Ra;
                                          }
                                          o = x + (J[Ia >> 2] << 3) | 0;
                                          t = N[o + 512 >> 2];
                                          Ta: {
                                            switch (K[o + 516 | 0] - 1 | 0) {
                                              case 1:
                                                t = Q(Q(Y * t) * Q(0.009999999776482582));
                                              case 0:
                                                g = v;
                                                if (t >= Q(0)) {
                                                  break Qa;
                                                }
                                                break;
                                              default:
                                                break Ta;
                                            }
                                          }
                                          s = N[(x + (J[Pa >> 2] << 2) | 0) + 404 >> 2];
                                          o = x + 124 | 0;
                                          g = Qa(o, L[x + 122 >> 1]);
                                          if (g == g) {
                                            t = Q(Ta(r, F, 1, u) + Sa(r, F, 1, u));
                                            g = Qa(o, L[x + 122 >> 1]);
                                            g = Q(t + (xa ? Q(s * g) : Q(s / g)));
                                          } else {
                                            g = M;
                                          }
                                          N[n + 120 >> 2] = g;
                                          ab = n, hb = Q(s + Q(Ta(r, C, 1, u) + Sa(r, C, 1, u))), N[ab + 136 >> 2] = hb;
                                          J[n + 104 >> 2] = 0;
                                          J[n + 100 >> 2] = 0;
                                          wb(x, q, C, h, u, n + 104 | 0, n + 136 | 0);
                                          wb(x, q, F, Y, u, n + 100 | 0, n + 120 | 0);
                                          s = N[n + 120 >> 2];
                                          g = N[n + 136 >> 2];
                                          r = C >>> 0 > 1;
                                          t = r ? s : g;
                                          g = r ? g : s;
                                          o = (Ba | 0) != 0 & ((K[a + 21 | 0] | K[a + 22 | 0] << 8) & 15) != 4;
                                          ub(x, g, t, q, o & xa | g != g, o & r | t != t, u, T, 1, 2, k, ya, m);
                                          g = v;
                                          break Qa;
                                        case 1:
                                          break Sa;
                                        default:
                                          break Ra;
                                      }
                                    }
                                    o = K[E | 0] & 8 ? 5 : 1;
                                  }
                                  g = Zb(x, F, u);
                                  V = x + 20 | 0;
                                  r = J[Ea >> 2];
                                  Za(n + 136 | 0, V, r, q);
                                  s = Q(p - g);
                                  Ua: {
                                    if (K[n + 140 | 0] != 3) {
                                      y = J[Ca >> 2];
                                      break Ua;
                                    }
                                    y = J[Ca >> 2];
                                    Za(n + 136 | 0, V, y, q);
                                    if (K[n + 140 | 0] != 3) {
                                      break Ua;
                                    }
                                    g = Q(s * Q(0.5));
                                    g = Q(v + (g > Q(0) ? g : Q(0)));
                                    break Qa;
                                  }
                                  Za(n + 136 | 0, V, y, q);
                                  g = v;
                                  if (K[n + 140 | 0] == 3) {
                                    break Qa;
                                  }
                                  Za(n + 136 | 0, V, r, q);
                                  if (K[n + 140 | 0] == 3) {
                                    g = Q(v + (s > Q(0) ? s : Q(0)));
                                    break Qa;
                                  }
                                  Va: {
                                    switch (o - 1 | 0) {
                                      case 1:
                                        g = Q(v + Q(s * Q(0.5)));
                                        break Qa;
                                      case 0:
                                        break Qa;
                                      default:
                                        break Va;
                                    }
                                  }
                                  g = Q(v + s);
                                }
                                Wa: {
                                  Xa: {
                                    switch (F - 1 | 0) {
                                      default:
                                        r = 1;
                                        o = x + 424 | 0;
                                        break Wa;
                                      case 0:
                                        r = 3;
                                        o = x + 432 | 0;
                                        break Wa;
                                      case 1:
                                        r = 0;
                                        o = x + 420 | 0;
                                        break Wa;
                                      case 2:
                                        break Xa;
                                    }
                                  }
                                  r = 2;
                                  o = x + 428 | 0;
                                }
                                N[(x + (r << 2) | 0) + 420 >> 2] = g + Q(Aa + N[o >> 2]);
                                l = l + 4 | 0;
                                if ((fa | 0) != (l | 0)) {
                                  continue;
                                }
                                break;
                              }
                            }
                            if (j) {
                              Ua(j);
                            }
                            sa = sa == sa & w == w ? w > sa ? w : sa : sa != sa ? w : sa;
                            Aa = Q(Aa + Q((pa ? Na : Q(0)) + M));
                            pa = pa + 1 | 0;
                            j = J[n + 80 >> 2];
                            if (G | j) {
                              continue;
                            }
                            break;
                          }
                        }
                        Ya: {
                          if (!i) {
                            break Ya;
                          }
                          if (!Ba) {
                            if (!Ac(a)) {
                              break Ya;
                            }
                          }
                          g = Q(ca + Y);
                          Za: {
                            if (!va) {
                              break Za;
                            }
                            j = (J[(F << 2) + 5340 >> 2] << 3) + a | 0;
                            g = N[j + 512 >> 2];
                            _a: {
                              $a: {
                                switch (K[j + 516 | 0] - 1 | 0) {
                                  case 1:
                                    g = Q(Q(wa * g) * Q(0.009999999776482582));
                                    break;
                                  case 0:
                                    break $a;
                                  default:
                                    break _a;
                                }
                              }
                              if (!(g >= Q(0))) {
                                break _a;
                              }
                              g = gb(a, q, 257 >>> (F << 3) & 1, wa, z);
                              break Za;
                            }
                            g = Q(ca + Aa);
                          }
                          g = Wa(a, F, q, g, wa, z);
                          s = Q(0);
                          j = (K[a + 21 | 0] | K[a + 22 | 0] << 8) & 15;
                          ab: {
                            bb: {
                              cb: {
                                db: {
                                  eb: {
                                    fb: {
                                      gb: {
                                        hb: {
                                          ib: {
                                            p = Q(Q(g - ca) - Aa);
                                            if (!(p >= Q(0))) {
                                              ea = Q(0);
                                              switch (j - 2 | 0) {
                                                case 0:
                                                  break hb;
                                                case 1:
                                                  break ib;
                                                default:
                                                  break cb;
                                              }
                                            }
                                            ea = Q(0);
                                            switch (j - 2 | 0) {
                                              case 2:
                                                break db;
                                              case 4:
                                                break eb;
                                              case 6:
                                                break fb;
                                              case 5:
                                                break gb;
                                              case 0:
                                                break hb;
                                              case 1:
                                                break ib;
                                              default:
                                                break cb;
                                            }
                                          }
                                          v = Q(v + p);
                                          break cb;
                                        }
                                        v = Q(v + Q(p * Q(0.5)));
                                        break cb;
                                      }
                                      g = Q(pa >>> 0);
                                      s = Q(p / g);
                                      v = Q(v + Q(p / Q(g + g)));
                                      break cb;
                                    }
                                    s = Q(p / Q(pa + 1 >>> 0));
                                    v = Q(v + s);
                                    break cb;
                                  }
                                  if (pa >>> 0 < 2) {
                                    break cb;
                                  }
                                  ib(n + 136 | 0, a);
                                  s = Q(p / Q(pa - 1 >>> 0));
                                  break bb;
                                }
                                ea = Q(p / Q(pa >>> 0));
                              }
                              ib(n + 136 | 0, a);
                              if (!pa) {
                                break ab;
                              }
                            }
                            j = F << 2;
                            ha = j + 5308 | 0;
                            na = j + 5340 | 0;
                            ua = n + 56 | 0;
                            W = n + 72 | 0;
                            ra = n + 112 | 0;
                            x = n + 144 | 0;
                            V = n + 128 | 0;
                            y = 0;
                            while (1) {
                              J[n + 128 >> 2] = 0;
                              j = J[n + 140 >> 2];
                              J[n + 120 >> 2] = J[n + 136 >> 2];
                              J[n + 124 >> 2] = j;
                              tb(V, J[n + 144 >> 2]);
                              J[n + 112 >> 2] = 0;
                              j = J[n + 124 >> 2];
                              G = j;
                              r = J[n + 120 >> 2];
                              J[n + 104 >> 2] = r;
                              J[n + 108 >> 2] = j;
                              l = J[n + 128 >> 2];
                              tb(ra, l);
                              j = J[n + 108 >> 2];
                              o = J[n + 104 >> 2];
                              jb: {
                                kb: {
                                  if (o) {
                                    p = Q(0);
                                    w = Q(0);
                                    g = Q(0);
                                    break kb;
                                  }
                                  p = Q(0);
                                  w = Q(0);
                                  g = Q(0);
                                  if (!j) {
                                    break jb;
                                  }
                                }
                                while (1) {
                                  A = J[o + 500 >> 2];
                                  o = J[o + 496 >> 2];
                                  if (A - o >> 2 >>> 0 <= j >>> 0) {
                                    break v;
                                  }
                                  $ = J[o + (j << 2) >> 2];
                                  j = K[$ + 21 | 0] | K[$ + 22 | 0] << 8 | K[$ + 23 | 0] << 16;
                                  lb: {
                                    if ((j & 786432) == 262144 | (j & 12288) == 8192) {
                                      break lb;
                                    }
                                    if (J[$ + 484 >> 2] != (y | 0)) {
                                      break jb;
                                    }
                                    o = $ + 20 | 0;
                                    t = N[($ + (J[na >> 2] << 2) | 0) + 404 >> 2];
                                    if (t >= Q(0)) {
                                      t = Q(t + Q(Ta(o, F, 1, u) + Sa(o, F, 1, u)));
                                      g = g == g & t == t ? g < t ? t : g : g != g ? t : g;
                                      j = K[$ + 22 | 0];
                                    } else {
                                      j = j >>> 8 | 0;
                                    }
                                    j = j & 15;
                                    if (!j) {
                                      j = K[a + 21 | 0] >>> 4 | 0;
                                    }
                                    if (!(K[E | 0] & 8) | (j | 0) != 5) {
                                      break lb;
                                    }
                                    t = Q(Mb($) + yb(o, 0, q, u));
                                    w = w == w & t == t ? t > w ? t : w : w != w ? t : w;
                                    t = Q(Q(N[$ + 408 >> 2] + Q(Ta(o, 0, 1, u) + Sa(o, 0, 1, u))) - t);
                                    p = p == p & t == t ? p < t ? t : p : p != p ? t : p;
                                    t = Q(w + p);
                                    g = g == g & t == t ? g < t ? t : g : g != g ? t : g;
                                  }
                                  J[n + 72 >> 2] = 0;
                                  j = J[n + 108 >> 2];
                                  J[n + 64 >> 2] = J[n + 104 >> 2];
                                  J[n + 68 >> 2] = j;
                                  tb(W, J[n + 112 >> 2]);
                                  db(n + 104 | 0);
                                  j = J[n + 72 >> 2];
                                  if (j) {
                                    while (1) {
                                      o = J[j >> 2];
                                      Ua(j);
                                      j = o;
                                      if (j) {
                                        continue;
                                      }
                                      break;
                                    }
                                  }
                                  J[n + 72 >> 2] = 0;
                                  j = J[n + 108 >> 2];
                                  o = J[n + 104 >> 2];
                                  if (j | o) {
                                    continue;
                                  }
                                  break;
                                }
                              }
                              j = J[n + 108 >> 2];
                              J[n + 136 >> 2] = J[n + 104 >> 2];
                              J[n + 140 >> 2] = j;
                              tc(x, J[n + 112 >> 2]);
                              J[n + 104 >> 2] = r;
                              J[n + 108 >> 2] = G;
                              tc(ra, l);
                              qa = Q(v + (y ? Na : Q(0)));
                              S = Q(ea + g);
                              o = J[n + 104 >> 2];
                              j = J[n + 108 >> 2];
                              if (!((o | 0) == J[n + 136 >> 2] & (j | 0) == J[n + 140 >> 2])) {
                                D = Q(qa + w);
                                t = Q(qa + S);
                                g = Q(s + S);
                                while (1) {
                                  r = J[o + 500 >> 2];
                                  o = J[o + 496 >> 2];
                                  if (r - o >> 2 >>> 0 <= j >>> 0) {
                                    break v;
                                  }
                                  r = J[o + (j << 2) >> 2];
                                  j = K[r + 21 | 0] | K[r + 22 | 0] << 8 | K[r + 23 | 0] << 16;
                                  mb: {
                                    if ((j & 786432) == 262144 | (j & 12288) == 8192) {
                                      break mb;
                                    }
                                    o = r + 20 | 0;
                                    nb: {
                                      ob: {
                                        pb: {
                                          qb: {
                                            rb: {
                                              sb: {
                                                j = j >>> 8 & 15;
                                                if (!j) {
                                                  j = K[a + 21 | 0] >>> 4 | 0;
                                                }
                                                switch (j - 1 | 0) {
                                                  case 3:
                                                    break ob;
                                                  case 1:
                                                    break pb;
                                                  case 2:
                                                    break qb;
                                                  case 0:
                                                    break rb;
                                                  case 4:
                                                    break sb;
                                                  default:
                                                    break mb;
                                                }
                                              }
                                              if (K[E | 0] & 8) {
                                                break nb;
                                              }
                                            }
                                            v = Pb(o, F, q, u);
                                            N[(r + (J[ha >> 2] << 2) | 0) + 420 >> 2] = qa + v;
                                            break mb;
                                          }
                                          v = bc(o, F, q, u);
                                          tb: {
                                            ub: {
                                              switch (F - 2 | 0) {
                                                case 1:
                                                  p = N[r + 404 >> 2];
                                                  o = 2;
                                                  break tb;
                                                default:
                                                  o = 1;
                                                  p = N[r + 408 >> 2];
                                                  vb: {
                                                    switch (F | 0) {
                                                      case 0:
                                                        break tb;
                                                      case 1:
                                                        break vb;
                                                      default:
                                                        break l;
                                                    }
                                                  }
                                                  o = 3;
                                                  break tb;
                                                case 0:
                                                  break ub;
                                              }
                                            }
                                            p = N[r + 404 >> 2];
                                            o = 0;
                                          }
                                          N[(r + (o << 2) | 0) + 420 >> 2] = Q(t - v) - p;
                                          break mb;
                                        }
                                        wb: {
                                          xb: {
                                            switch (F - 2 | 0) {
                                              case 1:
                                                w = N[r + 404 >> 2];
                                                o = 2;
                                                break wb;
                                              default:
                                                o = 1;
                                                w = N[r + 408 >> 2];
                                                yb: {
                                                  switch (F | 0) {
                                                    case 0:
                                                      break wb;
                                                    case 1:
                                                      break yb;
                                                    default:
                                                      break l;
                                                  }
                                                }
                                                o = 3;
                                                break wb;
                                              case 0:
                                                break xb;
                                            }
                                          }
                                          w = N[r + 404 >> 2];
                                          o = 0;
                                        }
                                        N[(r + (o << 2) | 0) + 420 >> 2] = qa + Q(Q(S - w) * Q(0.5));
                                        break mb;
                                      }
                                      v = yb(o, F, q, u);
                                      N[(r + (J[ha >> 2] << 2) | 0) + 420 >> 2] = qa + v;
                                      j = r + (J[na >> 2] << 3) | 0;
                                      w = N[j + 512 >> 2];
                                      zb: {
                                        switch (K[j + 516 | 0] - 1 | 0) {
                                          case 1:
                                            w = Q(Q(Y * w) * Q(0.009999999776482582));
                                          case 0:
                                            if (w >= Q(0)) {
                                              break mb;
                                            }
                                            break;
                                          default:
                                            break zb;
                                        }
                                      }
                                      Ab: {
                                        if (C >>> 0 <= 1) {
                                          p = Q(N[r + 408 >> 2] + Q(Ta(o, F, 1, u) + Sa(o, F, 1, u)));
                                          w = g;
                                          break Ab;
                                        }
                                        p = g;
                                        w = Q(N[r + 404 >> 2] + Q(Ta(o, C, 1, u) + Sa(o, C, 1, u)));
                                      }
                                      v = N[r + 404 >> 2];
                                      Bb: {
                                        Cb: {
                                          if (!(w != w | v != v)) {
                                            if (Q(R(Q(w - v))) < Q(9999999747378752e-20)) {
                                              break Cb;
                                            }
                                            break Bb;
                                          }
                                          if (w == w | v == v) {
                                            break Bb;
                                          }
                                        }
                                        v = N[r + 408 >> 2];
                                        j = v != v;
                                        if (!(j | p != p)) {
                                          if (!(Q(R(Q(p - v))) < Q(9999999747378752e-20))) {
                                            break Bb;
                                          }
                                          break mb;
                                        }
                                        if (p == p) {
                                          break Bb;
                                        }
                                        if (j) {
                                          break mb;
                                        }
                                      }
                                      ub(r, w, p, q, 0, 0, u, T, 1, 3, k, ya, m);
                                      break mb;
                                    }
                                    ab = r, hb = Q(Q(D - Mb(r)) + Pb(o, 0, q, Y)), N[ab + 424 >> 2] = hb;
                                  }
                                  J[n + 56 >> 2] = 0;
                                  j = J[n + 108 >> 2];
                                  J[n + 48 >> 2] = J[n + 104 >> 2];
                                  J[n + 52 >> 2] = j;
                                  tb(ua, J[n + 112 >> 2]);
                                  db(n + 104 | 0);
                                  j = J[n + 56 >> 2];
                                  if (j) {
                                    while (1) {
                                      o = J[j >> 2];
                                      Ua(j);
                                      j = o;
                                      if (j) {
                                        continue;
                                      }
                                      break;
                                    }
                                  }
                                  J[n + 56 >> 2] = 0;
                                  o = J[n + 104 >> 2];
                                  j = J[n + 108 >> 2];
                                  if ((o | 0) != J[n + 136 >> 2] | (j | 0) != J[n + 140 >> 2]) {
                                    continue;
                                  }
                                  break;
                                }
                              }
                              j = J[n + 112 >> 2];
                              if (j) {
                                while (1) {
                                  o = J[j >> 2];
                                  Ua(j);
                                  j = o;
                                  if (j) {
                                    continue;
                                  }
                                  break;
                                }
                              }
                              if (l) {
                                while (1) {
                                  j = J[l >> 2];
                                  Ua(l);
                                  l = j;
                                  if (j) {
                                    continue;
                                  }
                                  break;
                                }
                              }
                              v = Q(Q(s + qa) + S);
                              y = y + 1 | 0;
                              if ((pa | 0) != (y | 0)) {
                                continue;
                              }
                              break;
                            }
                          }
                          j = J[n + 144 >> 2];
                          if (!j) {
                            break Ya;
                          }
                          while (1) {
                            l = J[j >> 2];
                            Ua(j);
                            j = l;
                            if (j) {
                              continue;
                            }
                            break;
                          }
                        }
                        x = a + 404 | 0;
                        ab = x, hb = Wa(a, 2, q, La, z, z), N[ab >> 2] = hb;
                        V = a + 408 | 0;
                        ab = V, hb = Wa(a, 0, q, Ma, la, z), N[ab >> 2] = hb;
                        l = x + ((257 >>> (C << 3) & 1) << 2) | 0;
                        Db: {
                          Eb: {
                            Fb: {
                              if ((za | 0) != 1) {
                                j = K[a + 23 | 0] & 3;
                                if ((j | 0) == 2 | (za | 0) != 2) {
                                  break Fb;
                                }
                              }
                              g = Wa(a, C, q, sa, oa, z);
                              break Eb;
                            }
                            if ((za | 0) != 2 | (j | 0) != 2) {
                              break Db;
                            }
                            g = sc(a, q, C, sa, oa, z);
                            h = Q(ma + h);
                            g = h == h & g == g ? g < h ? g : h : h != h ? g : h;
                            g = g == g & ma == ma ? g < ma ? ma : g : g != g ? ma : g;
                          }
                          N[l >> 2] = g;
                        }
                        o = x + ((257 >>> (F << 3) & 1) << 2) | 0;
                        Gb: {
                          Hb: {
                            Ib: {
                              if ((va | 0) != 1) {
                                l = (va | 0) != 2;
                                j = K[a + 23 | 0] & 3;
                                if (l | (j | 0) == 2) {
                                  break Ib;
                                }
                              }
                              g = Wa(a, F, q, Q(ca + Aa), wa, z);
                              break Hb;
                            }
                            if (l | (j | 0) != 2) {
                              break Gb;
                            }
                            g = sc(a, q, F, Q(ca + Aa), wa, z);
                            h = Q(ca + Y);
                            g = h == h & g == g ? g < h ? g : h : h != h ? g : h;
                            g = g == g & ca == ca ? g < ca ? ca : g : g != g ? ca : g;
                          }
                          N[o >> 2] = g;
                        }
                        Jb: {
                          if (!i) {
                            break Jb;
                          }
                          Kb: {
                            if (((K[a + 21 | 0] | K[a + 22 | 0] << 8) & 49152) != 32768) {
                              break Kb;
                            }
                            ib(n + 136 | 0, a);
                            while (1) {
                              l = J[n + 140 >> 2];
                              j = J[n + 136 >> 2];
                              if (!(l | j)) {
                                j = J[n + 144 >> 2];
                                if (!j) {
                                  break Kb;
                                }
                                while (1) {
                                  l = J[j >> 2];
                                  Ua(j);
                                  j = l;
                                  if (j) {
                                    continue;
                                  }
                                  break;
                                }
                                break Kb;
                              }
                              o = J[j + 500 >> 2];
                              j = J[j + 496 >> 2];
                              if (l >>> 0 >= o - j >> 2 >>> 0) {
                                break v;
                              }
                              j = J[j + (l << 2) >> 2];
                              if (((K[j + 21 | 0] | K[j + 22 | 0] << 8) & 12288) != 8192) {
                                Lb: {
                                  Mb: {
                                    switch (F - 2 | 0) {
                                      case 0:
                                        o = j + 404 | 0;
                                        l = 0;
                                        g = Q(N[x >> 2] - N[j + 420 >> 2]);
                                        break Lb;
                                      case 1:
                                        o = j + 404 | 0;
                                        l = 2;
                                        g = Q(N[x >> 2] - N[j + 428 >> 2]);
                                        break Lb;
                                      default:
                                        break Mb;
                                    }
                                  }
                                  g = N[V >> 2];
                                  Nb: {
                                    switch (F | 0) {
                                      case 0:
                                        o = j + 408 | 0;
                                        l = 1;
                                        g = Q(g - N[j + 424 >> 2]);
                                        break Lb;
                                      case 1:
                                        break Nb;
                                      default:
                                        break l;
                                    }
                                  }
                                  o = j + 408 | 0;
                                  l = 3;
                                  g = Q(g - N[j + 432 >> 2]);
                                }
                                N[((l << 2) + j | 0) + 420 >> 2] = g - N[o >> 2];
                              }
                              db(n + 136 | 0);
                              continue;
                            }
                          }
                          Ob: {
                            if (!((C | F) & 1)) {
                              break Ob;
                            }
                            G = F & 1;
                            r = C & 1;
                            ib(n + 136 | 0, a);
                            while (1) {
                              l = J[n + 140 >> 2];
                              j = J[n + 136 >> 2];
                              if (!(l | j)) {
                                j = J[n + 144 >> 2];
                                if (!j) {
                                  break Ob;
                                }
                                while (1) {
                                  l = J[j >> 2];
                                  Ua(j);
                                  j = l;
                                  if (j) {
                                    continue;
                                  }
                                  break;
                                }
                                break Ob;
                              }
                              o = J[j + 500 >> 2];
                              j = J[j + 496 >> 2];
                              if (l >>> 0 >= o - j >> 2 >>> 0) {
                                break v;
                              }
                              W = J[j + (l << 2) >> 2];
                              j = K[W + 21 | 0] | K[W + 22 | 0] << 8 | K[W + 23 | 0] << 16;
                              Pb: {
                                if ((j & 786432) == 262144 | (j & 12288) == 8192) {
                                  break Pb;
                                }
                                if (r) {
                                  Qb: {
                                    Rb: {
                                      Sb: {
                                        switch (C - 1 | 0) {
                                          case 0:
                                            o = W + 408 | 0;
                                            l = W + 432 | 0;
                                            y = 1;
                                            j = V;
                                            break Qb;
                                          case 1:
                                            o = W + 404 | 0;
                                            y = 2;
                                            l = W + 420 | 0;
                                            break Rb;
                                          case 2:
                                            break Sb;
                                          default:
                                            break l;
                                        }
                                      }
                                      o = W + 404 | 0;
                                      y = 0;
                                      l = W + 428 | 0;
                                    }
                                    j = x;
                                  }
                                  N[(W + (y << 2) | 0) + 420 >> 2] = Q(N[j >> 2] - N[o >> 2]) - N[l >> 2];
                                }
                                if (!G) {
                                  break Pb;
                                }
                                Tb: {
                                  Ub: {
                                    Vb: {
                                      switch (F - 1 | 0) {
                                        case 0:
                                          l = W + 408 | 0;
                                          y = W + 432 | 0;
                                          ta = 1;
                                          j = V;
                                          break Tb;
                                        case 1:
                                          y = W + 420 | 0;
                                          ta = 2;
                                          l = W + 404 | 0;
                                          break Ub;
                                        case 2:
                                          break Vb;
                                        default:
                                          break l;
                                      }
                                    }
                                    y = W + 428 | 0;
                                    ta = 0;
                                    l = W + 404 | 0;
                                  }
                                  j = x;
                                }
                                N[(W + (ta << 2) | 0) + 420 >> 2] = Q(N[j >> 2] - N[l >> 2]) - N[y >> 2];
                              }
                              db(n + 136 | 0);
                              continue;
                            }
                          }
                          if (!(K[a | 0] & 8 | ((K[a + 21 | 0] | K[a + 22 | 0] << 8) & 12288 | (ya | 0) == 1))) {
                            break Jb;
                          }
                          Cc(a, a, C >>> 0 > 1 ? za : e, q, k, ya, m, Q(0), Q(0), u, T);
                        }
                        j = J[n + 88 >> 2];
                        if (!j) {
                          break m;
                        }
                        while (1) {
                          l = J[j >> 2];
                          Ua(j);
                          j = l;
                          if (j) {
                            continue;
                          }
                          break;
                        }
                        break m;
                      }
                      ba();
                      B();
                    }
                    _b(a);
                  }
                  Da = n + 160 | 0;
                  break k;
                }
                Va();
                B();
              }
              H[a + 168 | 0] = d;
              J[a + 164 >> 2] = J[J[a + 508 >> 2] + 12 >> 2];
              if (ga) {
                break b;
              }
              j = J[k + 8 >> 2];
              o = J[a + 172 >> 2];
              d = o + 1 | 0;
              J[k + 8 >> 2] = d >>> 0 < j >>> 0 ? j : d;
              if ((o | 0) == 8) {
                J[a + 172 >> 2] = 0;
                o = 0;
              }
              if (i) {
                d = a + 368 | 0;
              } else {
                J[a + 172 >> 2] = o + 1;
                d = (P(o, 24) + a | 0) + 176 | 0;
              }
              J[d + 12 >> 2] = f;
              J[d + 8 >> 2] = e;
              N[d + 4 >> 2] = c;
              N[d >> 2] = b;
              N[d + 16 >> 2] = N[a + 404 >> 2];
              N[d + 20 >> 2] = N[a + 408 >> 2];
              ga = 0;
            }
            if (i) {
              b = N[a + 404 >> 2];
              N[a + 412 >> 2] = b;
              N[a + 396 >> 2] = b;
              b = N[a + 408 >> 2];
              N[a + 416 >> 2] = b;
              N[a + 400 >> 2] = b;
              e = K[a | 0];
              d = e | 1;
              H[a | 0] = e & 4 ? d & 251 : d;
            }
            J[a + 160 >> 2] = m;
            return !ga | Ja;
          }
          function ed() {
            var a = 0,
              b = 0;
            ea(8048, 8049, 8050, 0, 5356, 7, 5359, 0, 5359, 0, 3209, 5361, 8);
            a = Pa(8);
            J[a >> 2] = 8;
            J[a + 4 >> 2] = 1;
            $(8048, 3959, 6, 5376, 5400, 9, a | 0, 1);
            ea(8052, 8053, 8054, 8048, 5356, 10, 5356, 11, 5356, 12, 2536, 5361, 13);
            a = Pa(4);
            J[a >> 2] = 14;
            $(8052, 2968, 2, 5408, 5416, 15, a | 0, 0);
            ca(8048, 1875, 2, 5420, 5428, 16, 17);
            ca(8048, 4064, 3, 5508, 5520, 18, 19);
            ea(8072, 8073, 8074, 0, 5356, 20, 5359, 0, 5359, 0, 3225, 5361, 21);
            a = Pa(8);
            J[a >> 2] = 8;
            J[a + 4 >> 2] = 1;
            $(8072, 4168, 2, 5528, 5416, 22, a | 0, 1);
            ea(8075, 8076, 8077, 8072, 5356, 23, 5356, 24, 5356, 25, 2559, 5361, 26);
            a = Pa(4);
            J[a >> 2] = 27;
            $(8075, 2968, 2, 5536, 5416, 28, a | 0, 0);
            ca(8072, 1875, 2, 5544, 5428, 29, 30);
            ca(8072, 4064, 3, 5508, 5520, 18, 31);
            ea(8078, 8079, 8080, 0, 5356, 32, 5359, 0, 5359, 0, 3895, 5361, 33);
            oa(8078, 1, 5592, 5356, 34, 35);
            ca(8078, 3952, 1, 5592, 5356, 34, 35);
            ca(8078, 1129, 2, 5596, 5416, 36, 37);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 38;
            $(8078, 4109, 4, 5616, 5632, 39, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 40;
            $(8078, 2516, 3, 5640, 5652, 41, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 42;
            $(8078, 4264, 3, 5660, 5672, 43, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 44;
            $(8078, 2390, 3, 5680, 5672, 45, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 46;
            $(8078, 4139, 3, 5692, 5520, 47, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 48;
            $(8078, 4274, 2, 5704, 5428, 49, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 50;
            $(8078, 2375, 2, 5712, 5428, 51, a | 0, 0);
            ka(8081, 1284, 5720, 52, 5361, 53);
            Eb(2322, 0);
            Eb(2202, 8);
            Eb(2738, 16);
            Eb(3105, 24);
            Eb(3251, 32);
            Eb(2208, 40);
            ja(8081);
            ka(8051, 3935, 5720, 54, 5361, 55);
            Xc(3251, 0);
            Xc(2208, 8);
            ja(8051);
            ka(8082, 3946, 5720, 56, 5361, 57);
            a = Pa(4);
            J[a >> 2] = 8;
            b = Pa(4);
            J[b >> 2] = 8;
            ga(8082, 3940, 8114, 5722, 58, a | 0, 8114, 5726, 59, b | 0);
            a = Pa(4);
            J[a >> 2] = 0;
            b = Pa(4);
            J[b >> 2] = 0;
            ga(8082, 2197, 8107, 5428, 60, a | 0, 8107, 5672, 61, b | 0);
            ja(8082);
            ea(8083, 8084, 8085, 0, 5356, 62, 5359, 0, 5359, 0, 4059, 5361, 63);
            oa(8083, 1, 5732, 5356, 64, 65);
            ca(8083, 2183, 1, 5732, 5356, 64, 65);
            ca(8083, 3885, 2, 5736, 5428, 66, 67);
            ca(8083, 1129, 2, 5744, 5416, 68, 69);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 70;
            $(8083, 2343, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 72;
            $(8083, 4042, 3, 5752, 5672, 73, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 74;
            $(8083, 3967, 3, 5764, 5672, 75, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 76;
            $(8083, 2944, 4, 5776, 5792, 77, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 78;
            $(8083, 1976, 4, 5776, 5792, 77, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 79;
            $(8083, 2829, 3, 5764, 5672, 75, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 80;
            $(8083, 1833, 3, 5764, 5672, 75, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 81;
            $(8083, 2408, 3, 5764, 5672, 75, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 82;
            $(8083, 3906, 3, 5764, 5672, 75, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 83;
            $(8083, 2988, 3, 5764, 5672, 75, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 84;
            $(8083, 2757, 3, 5764, 5672, 75, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 85;
            $(8083, 1333, 3, 5764, 5672, 75, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 86;
            $(8083, 3048, 4, 5776, 5792, 77, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 87;
            $(8083, 1995, 4, 5776, 5792, 77, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 88;
            $(8083, 2845, 3, 5764, 5672, 75, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 89;
            $(8083, 1220, 3, 5764, 5672, 75, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 90;
            $(8083, 1137, 3, 5764, 5672, 75, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 91;
            $(8083, 1159, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 93;
            $(8083, 2436, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 94;
            $(8083, 1942, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 95;
            $(8083, 2812, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 96;
            $(8083, 1435, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 97;
            $(8083, 1747, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 98;
            $(8083, 3402, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 99;
            $(8083, 1196, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 100;
            $(8083, 3151, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 101;
            $(8083, 3281, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 102;
            $(8083, 2031, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 103;
            $(8083, 2859, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 104;
            $(8083, 1480, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 105;
            $(8083, 1792, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 106;
            $(8083, 3441, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 107;
            $(8083, 2241, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 108;
            $(8083, 1905, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 109;
            $(8083, 2798, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 110;
            $(8083, 1392, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 111;
            $(8083, 1704, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 112;
            $(8083, 3365, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 113;
            $(8083, 3299, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 114;
            $(8083, 2047, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 115;
            $(8083, 1499, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 116;
            $(8083, 1811, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 117;
            $(8083, 3457, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 118;
            $(8083, 2261, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 119;
            $(8083, 1922, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 120;
            $(8083, 1412, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 121;
            $(8083, 1724, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 122;
            $(8083, 3382, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 123;
            $(8083, 3257, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 124;
            $(8083, 2012, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 125;
            $(8083, 1458, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 126;
            $(8083, 1770, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 127;
            $(8083, 3422, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 128;
            $(8083, 2215, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 129;
            $(8083, 1885, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 130;
            $(8083, 1369, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 131;
            $(8083, 1681, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 132;
            $(8083, 3345, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 133;
            $(8083, 3674, 3, 5764, 5672, 75, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 134;
            $(8083, 2914, 3, 5800, 5726, 92, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 135;
            $(8083, 2628, 4, 5776, 5792, 77, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 136;
            $(8083, 3755, 4, 5776, 5792, 77, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 137;
            $(8083, 2066, 4, 5776, 5792, 77, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 138;
            $(8083, 2781, 4, 5776, 5792, 77, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 139;
            $(8083, 1962, 4, 5776, 5792, 77, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 140;
            $(8083, 3022, 3, 5764, 5672, 75, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 141;
            $(8083, 3983, 2, 5812, 5428, 142, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 143;
            $(8083, 2956, 3, 5820, 5520, 144, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 145;
            $(8083, 1849, 2, 5812, 5428, 142, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 146;
            $(8083, 2422, 2, 5812, 5428, 142, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 147;
            $(8083, 3919, 2, 5812, 5428, 142, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 148;
            $(8083, 3005, 2, 5812, 5428, 142, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 149;
            $(8083, 2769, 2, 5812, 5428, 142, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 150;
            $(8083, 1351, 2, 5812, 5428, 142, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 151;
            $(8083, 3058, 3, 5820, 5520, 144, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 152;
            $(8083, 2449, 2, 5832, 5428, 153, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 154;
            $(8083, 1208, 2, 5840, 5722, 155, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 156;
            $(8083, 3165, 2, 5840, 5722, 155, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 157;
            $(8083, 3290, 2, 5832, 5428, 153, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 158;
            $(8083, 2251, 2, 5832, 5428, 153, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 159;
            $(8083, 3311, 2, 5832, 5428, 153, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 160;
            $(8083, 2274, 2, 5832, 5428, 153, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 161;
            $(8083, 3269, 2, 5832, 5428, 153, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 162;
            $(8083, 2228, 2, 5832, 5428, 153, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 163;
            $(8083, 3687, 2, 5812, 5428, 142, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 164;
            $(8083, 2929, 2, 5840, 5722, 155, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 165;
            $(8083, 2638, 3, 5848, 5860, 166, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 167;
            $(8083, 1232, 2, 5812, 5428, 142, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 168;
            $(8083, 1148, 2, 5812, 5428, 142, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 169;
            $(8083, 3766, 3, 5820, 5520, 144, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 170;
            $(8083, 2788, 3, 5820, 5520, 144, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 171;
            $(8083, 4071, 4, 5872, 5632, 172, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 173;
            $(8083, 4092, 3, 5888, 5672, 174, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 175;
            $(8083, 1306, 2, 5900, 5428, 176, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 177;
            $(8083, 1865, 2, 5908, 5428, 178, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 179;
            $(8083, 4083, 3, 5916, 5520, 180, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 181;
            $(8083, 3179, 3, 5928, 5672, 182, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 183;
            $(8083, 3999, 2, 5940, 5428, 184, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 185;
            $(8083, 4019, 3, 5928, 5672, 182, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 186;
            $(8083, 4232, 3, 5948, 5672, 187, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 188;
            $(8083, 4230, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 189;
            $(8083, 4249, 3, 5960, 5672, 190, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 191;
            $(8083, 4247, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 192;
            $(8083, 1119, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 193;
            $(8083, 1111, 2, 5972, 5428, 194, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 195;
            $(8083, 3086, 2, 5744, 5416, 71, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 196;
            $(8083, 1244, 2, 5972, 5428, 194, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 197;
            $(8083, 1257, 5, 5984, 6004, 198, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 199;
            $(8083, 2327, 2, 5840, 5722, 155, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 200;
            $(8083, 2305, 2, 5840, 5722, 155, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 201;
            $(8083, 2742, 2, 5840, 5722, 155, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 202;
            $(8083, 3112, 2, 5840, 5722, 155, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 203;
            $(8083, 3323, 2, 5840, 5722, 155, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 204;
            $(8083, 2287, 2, 5840, 5722, 155, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 205;
            $(8083, 1273, 2, 6012, 5428, 206, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 207;
            $(8083, 3068, 3, 5848, 5860, 166, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 208;
            $(8083, 2648, 3, 5848, 5860, 166, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 209;
            $(8083, 3777, 3, 5848, 5860, 166, a | 0, 0);
            a = Pa(8);
            J[a + 4 >> 2] = 0;
            J[a >> 2] = 210;
            $(8083, 3035, 2, 5812, 5428, 142, a | 0, 0);
          }
          function vd(a, b, c, d, e, f) {
            a = a | 0;
            b = +b;
            c = c | 0;
            d = d | 0;
            e = e | 0;
            f = f | 0;
            var g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              q = 0,
              r = 0,
              s = 0,
              t = 0,
              u = 0,
              w = 0,
              x = 0,
              y = 0,
              z = 0;
            m = Da - 560 | 0;
            Da = m;
            J[m + 44 >> 2] = 0;
            A(+b);
            g = v(1) | 0;
            v(0) | 0;
            a: {
              if ((g | 0) < 0) {
                s = 1;
                y = 1177;
                b = -b;
                A(+b);
                g = v(1) | 0;
                v(0) | 0;
                break a;
              }
              if (e & 2048) {
                s = 1;
                y = 1180;
                break a;
              }
              s = e & 1;
              y = s ? 1183 : 1178;
              z = !s;
            }
            b: {
              if ((g & 2146435072) == 2146435072) {
                g = s + 3 | 0;
                _a(a, 32, c, g, e & -65537);
                Ya(a, y, s);
                d = f & 32;
                Ya(a, b != b ? d ? 3101 : 4412 : d ? 3902 : 4416, 3);
                _a(a, 32, c, g, e ^ 8192);
                n = (c | 0) < (g | 0) ? g : c;
                break b;
              }
              u = m + 16 | 0;
              c: {
                d: {
                  e: {
                    b = Rc(b, m + 44 | 0);
                    b = b + b;
                    if (b != 0) {
                      g = J[m + 44 >> 2];
                      J[m + 44 >> 2] = g - 1;
                      w = f | 32;
                      if ((w | 0) != 97) {
                        break e;
                      }
                      break c;
                    }
                    w = f | 32;
                    if ((w | 0) == 97) {
                      break c;
                    }
                    k = J[m + 44 >> 2];
                    l = (d | 0) < 0 ? 6 : d;
                    break d;
                  }
                  k = g - 29 | 0;
                  J[m + 44 >> 2] = k;
                  b = b * 268435456;
                  l = (d | 0) < 0 ? 6 : d;
                }
                q = (m + 48 | 0) + ((k | 0) >= 0 ? 288 : 0) | 0;
                h = q;
                while (1) {
                  if (b < 4294967296 & b >= 0) {
                    d = ~~b >>> 0;
                  } else {
                    d = 0;
                  }
                  J[h >> 2] = d;
                  h = h + 4 | 0;
                  b = (b - +(d >>> 0)) * 1e9;
                  if (b != 0) {
                    continue;
                  }
                  break;
                }
                f: {
                  if ((k | 0) <= 0) {
                    d = k;
                    g = h;
                    i = q;
                    break f;
                  }
                  i = q;
                  d = k;
                  while (1) {
                    o = (d | 0) >= 29 ? 29 : d;
                    g = h - 4 | 0;
                    g: {
                      if (i >>> 0 > g >>> 0) {
                        break g;
                      }
                      d = 0;
                      while (1) {
                        j = J[g >> 2];
                        x = d;
                        d = o & 31;
                        if ((o & 63) >>> 0 >= 32) {
                          n = j << d;
                          d = 0;
                        } else {
                          n = (1 << d) - 1 & j >>> 32 - d;
                          d = j << d;
                        }
                        x = x + d | 0;
                        j = n + p | 0;
                        d = Eg(x, d >>> 0 > x >>> 0 ? j + 1 | 0 : j, 1e9);
                        j = Dg(d, Ea, -1e9, 0) + x | 0;
                        J[g >> 2] = j;
                        g = g - 4 | 0;
                        if (i >>> 0 <= g >>> 0) {
                          continue;
                        }
                        break;
                      }
                      if (!d) {
                        break g;
                      }
                      i = i - 4 | 0;
                      J[i >> 2] = d;
                    }
                    while (1) {
                      g = h;
                      if (i >>> 0 < g >>> 0) {
                        h = g - 4 | 0;
                        if (!J[h >> 2]) {
                          continue;
                        }
                      }
                      break;
                    }
                    d = J[m + 44 >> 2] - o | 0;
                    J[m + 44 >> 2] = d;
                    h = g;
                    if ((d | 0) > 0) {
                      continue;
                    }
                    break;
                  }
                }
                if ((d | 0) < 0) {
                  t = ((l + 25 >>> 0) / 9 | 0) + 1 | 0;
                  p = (w | 0) == 102;
                  while (1) {
                    d = 0 - d | 0;
                    n = (d | 0) >= 9 ? 9 : d;
                    h: {
                      if (g >>> 0 <= i >>> 0) {
                        h = J[i >> 2];
                        break h;
                      }
                      o = 1e9 >>> n | 0;
                      j = -1 << n ^ -1;
                      d = 0;
                      h = i;
                      while (1) {
                        x = d;
                        d = J[h >> 2];
                        J[h >> 2] = x + (d >>> n | 0);
                        d = P(o, d & j);
                        h = h + 4 | 0;
                        if (h >>> 0 < g >>> 0) {
                          continue;
                        }
                        break;
                      }
                      h = J[i >> 2];
                      if (!d) {
                        break h;
                      }
                      J[g >> 2] = d;
                      g = g + 4 | 0;
                    }
                    d = n + J[m + 44 >> 2] | 0;
                    J[m + 44 >> 2] = d;
                    i = (!h << 2) + i | 0;
                    h = p ? q : i;
                    g = g - h >> 2 > (t | 0) ? h + (t << 2) | 0 : g;
                    if ((d | 0) < 0) {
                      continue;
                    }
                    break;
                  }
                }
                d = 0;
                i: {
                  if (g >>> 0 <= i >>> 0) {
                    break i;
                  }
                  d = P(q - i >> 2, 9);
                  h = 10;
                  j = J[i >> 2];
                  if (j >>> 0 < 10) {
                    break i;
                  }
                  while (1) {
                    d = d + 1 | 0;
                    h = P(h, 10);
                    if (j >>> 0 >= h >>> 0) {
                      continue;
                    }
                    break;
                  }
                }
                h = (l - ((w | 0) != 102 ? d : 0) | 0) - ((w | 0) == 103 & (l | 0) != 0) | 0;
                if ((h | 0) < (P(g - q >> 2, 9) - 9 | 0)) {
                  o = h + 9216 | 0;
                  j = (o | 0) / 9 | 0;
                  k = ((((k | 0) < 0 ? 4 : 292) + m | 0) + (j << 2) | 0) - 4048 | 0;
                  h = 10;
                  n = o + P(j, -9) | 0;
                  if ((n | 0) <= 7) {
                    while (1) {
                      h = P(h, 10);
                      n = n + 1 | 0;
                      if ((n | 0) != 8) {
                        continue;
                      }
                      break;
                    }
                  }
                  o = J[k >> 2];
                  t = (o >>> 0) / (h >>> 0) | 0;
                  p = P(t, h);
                  j = k + 4 | 0;
                  j: {
                    if ((o | 0) == (p | 0) & (j | 0) == (g | 0)) {
                      break j;
                    }
                    o = o - p | 0;
                    k: {
                      if (!(t & 1)) {
                        b = 9007199254740992;
                        if (!(H[k - 4 | 0] & 1) | ((h | 0) != 1e9 | i >>> 0 >= k >>> 0)) {
                          break k;
                        }
                      }
                      b = 9007199254740994;
                    }
                    r = (g | 0) == (j | 0) ? 1 : 1.5;
                    j = h >>> 1 | 0;
                    r = j >>> 0 > o >>> 0 ? 0.5 : (j | 0) == (o | 0) ? r : 1.5;
                    if (!(K[y | 0] != 45 | z)) {
                      r = -r;
                      b = -b;
                    }
                    J[k >> 2] = p;
                    if (b + r == b) {
                      break j;
                    }
                    d = h + p | 0;
                    J[k >> 2] = d;
                    if (d >>> 0 >= 1e9) {
                      while (1) {
                        J[k >> 2] = 0;
                        k = k - 4 | 0;
                        if (k >>> 0 < i >>> 0) {
                          i = i - 4 | 0;
                          J[i >> 2] = 0;
                        }
                        d = J[k >> 2] + 1 | 0;
                        J[k >> 2] = d;
                        if (d >>> 0 > 999999999) {
                          continue;
                        }
                        break;
                      }
                    }
                    d = P(q - i >> 2, 9);
                    h = 10;
                    j = J[i >> 2];
                    if (j >>> 0 < 10) {
                      break j;
                    }
                    while (1) {
                      d = d + 1 | 0;
                      h = P(h, 10);
                      if (j >>> 0 >= h >>> 0) {
                        continue;
                      }
                      break;
                    }
                  }
                  h = k + 4 | 0;
                  g = g >>> 0 > h >>> 0 ? h : g;
                }
                while (1) {
                  j = g;
                  o = g >>> 0 <= i >>> 0;
                  if (!o) {
                    g = j - 4 | 0;
                    if (!J[g >> 2]) {
                      continue;
                    }
                  }
                  break;
                }
                l: {
                  if ((w | 0) != 103) {
                    k = e & 8;
                    break l;
                  }
                  h = l ? l : 1;
                  g = (h | 0) > (d | 0) & (d | 0) > -5;
                  l = (g ? d ^ -1 : -1) + h | 0;
                  f = (g ? -1 : -2) + f | 0;
                  k = e & 8;
                  if (k) {
                    break l;
                  }
                  g = -9;
                  m: {
                    if (o) {
                      break m;
                    }
                    k = J[j - 4 >> 2];
                    if (!k) {
                      break m;
                    }
                    n = 10;
                    g = 0;
                    if ((k >>> 0) % 10 | 0) {
                      break m;
                    }
                    while (1) {
                      h = g;
                      g = g + 1 | 0;
                      n = P(n, 10);
                      if (!((k >>> 0) % (n >>> 0) | 0)) {
                        continue;
                      }
                      break;
                    }
                    g = h ^ -1;
                  }
                  h = P(j - q >> 2, 9);
                  if ((f & -33) == 70) {
                    k = 0;
                    g = (g + h | 0) - 9 | 0;
                    g = (g | 0) > 0 ? g : 0;
                    l = (g | 0) > (l | 0) ? l : g;
                    break l;
                  }
                  k = 0;
                  g = ((d + h | 0) + g | 0) - 9 | 0;
                  g = (g | 0) > 0 ? g : 0;
                  l = (g | 0) > (l | 0) ? l : g;
                }
                n = -1;
                o = k | l;
                if (((o ? 2147483645 : 2147483646) | 0) < (l | 0)) {
                  break b;
                }
                p = (((o | 0) != 0) + l | 0) + 1 | 0;
                h = f & -33;
                n: {
                  if ((h | 0) == 70) {
                    if ((p ^ 2147483647) < (d | 0)) {
                      break b;
                    }
                    g = (d | 0) > 0 ? d : 0;
                    break n;
                  }
                  g = d >> 31;
                  g = Db((g ^ d) - g | 0, 0, u);
                  if ((u - g | 0) <= 1) {
                    while (1) {
                      g = g - 1 | 0;
                      H[g | 0] = 48;
                      if ((u - g | 0) < 2) {
                        continue;
                      }
                      break;
                    }
                  }
                  t = g - 2 | 0;
                  H[t | 0] = f;
                  H[g - 1 | 0] = (d | 0) < 0 ? 45 : 43;
                  g = u - t | 0;
                  if ((g | 0) > (p ^ 2147483647)) {
                    break b;
                  }
                }
                d = g + p | 0;
                if ((d | 0) > (s ^ 2147483647)) {
                  break b;
                }
                p = d + s | 0;
                _a(a, 32, c, p, e);
                Ya(a, y, s);
                _a(a, 48, c, p, e ^ 65536);
                o: {
                  p: {
                    q: {
                      if ((h | 0) == 70) {
                        f = m + 16 | 0;
                        d = f | 8;
                        k = f | 9;
                        h = i >>> 0 > q >>> 0 ? q : i;
                        i = h;
                        while (1) {
                          g = Db(J[i >> 2], 0, k);
                          r: {
                            if ((h | 0) != (i | 0)) {
                              if (m + 16 >>> 0 >= g >>> 0) {
                                break r;
                              }
                              while (1) {
                                g = g - 1 | 0;
                                H[g | 0] = 48;
                                if (m + 16 >>> 0 < g >>> 0) {
                                  continue;
                                }
                                break;
                              }
                              break r;
                            }
                            if ((g | 0) != (k | 0)) {
                              break r;
                            }
                            H[m + 24 | 0] = 48;
                            g = d;
                          }
                          Ya(a, g, k - g | 0);
                          i = i + 4 | 0;
                          if (q >>> 0 >= i >>> 0) {
                            continue;
                          }
                          break;
                        }
                        if (o) {
                          Ya(a, 5228, 1);
                        }
                        if ((l | 0) <= 0 | i >>> 0 >= j >>> 0) {
                          break q;
                        }
                        while (1) {
                          g = Db(J[i >> 2], 0, k);
                          if (g >>> 0 > m + 16 >>> 0) {
                            while (1) {
                              g = g - 1 | 0;
                              H[g | 0] = 48;
                              if (m + 16 >>> 0 < g >>> 0) {
                                continue;
                              }
                              break;
                            }
                          }
                          Ya(a, g, (l | 0) >= 9 ? 9 : l);
                          g = l - 9 | 0;
                          i = i + 4 | 0;
                          if (j >>> 0 <= i >>> 0) {
                            break p;
                          }
                          d = (l | 0) > 9;
                          l = g;
                          if (d) {
                            continue;
                          }
                          break;
                        }
                        break p;
                      }
                      s: {
                        if ((l | 0) < 0) {
                          break s;
                        }
                        q = i >>> 0 < j >>> 0 ? j : i + 4 | 0;
                        f = m + 16 | 0;
                        d = f | 8;
                        j = f | 9;
                        h = i;
                        while (1) {
                          g = Db(J[h >> 2], 0, j);
                          if ((j | 0) == (g | 0)) {
                            H[m + 24 | 0] = 48;
                            g = d;
                          }
                          t: {
                            if ((h | 0) != (i | 0)) {
                              if (m + 16 >>> 0 >= g >>> 0) {
                                break t;
                              }
                              while (1) {
                                g = g - 1 | 0;
                                H[g | 0] = 48;
                                if (m + 16 >>> 0 < g >>> 0) {
                                  continue;
                                }
                                break;
                              }
                              break t;
                            }
                            Ya(a, g, 1);
                            g = g + 1 | 0;
                            if (!(k | l)) {
                              break t;
                            }
                            Ya(a, 5228, 1);
                          }
                          f = j - g | 0;
                          Ya(a, g, (f | 0) > (l | 0) ? l : f);
                          l = l - f | 0;
                          h = h + 4 | 0;
                          if (q >>> 0 <= h >>> 0) {
                            break s;
                          }
                          if ((l | 0) >= 0) {
                            continue;
                          }
                          break;
                        }
                      }
                      _a(a, 48, l + 18 | 0, 18, 0);
                      Ya(a, t, u - t | 0);
                      break o;
                    }
                    g = l;
                  }
                  _a(a, 48, g + 9 | 0, 9, 0);
                }
                _a(a, 32, c, p, e ^ 8192);
                n = (c | 0) < (p | 0) ? p : c;
                break b;
              }
              k = (f << 26 >> 31 & 9) + y | 0;
              u: {
                if (d >>> 0 > 11) {
                  break u;
                }
                g = 12 - d | 0;
                r = 16;
                while (1) {
                  r = r * 16;
                  g = g - 1 | 0;
                  if (g) {
                    continue;
                  }
                  break;
                }
                if (K[k | 0] == 45) {
                  b = -(r + (-b - r));
                  break u;
                }
                b = b + r - r;
              }
              q = s | 2;
              i = f & 32;
              h = J[m + 44 >> 2];
              g = h >> 31;
              g = Db((g ^ h) - g | 0, 0, u);
              if ((u | 0) == (g | 0)) {
                H[m + 15 | 0] = 48;
                g = m + 15 | 0;
              }
              l = g - 2 | 0;
              H[l | 0] = f + 15;
              H[g - 1 | 0] = (h | 0) < 0 ? 45 : 43;
              g = e & 8;
              h = m + 16 | 0;
              while (1) {
                f = h;
                if (R(b) < 2147483648) {
                  j = ~~b;
                } else {
                  j = -2147483648;
                }
                H[h | 0] = i | K[j + 6496 | 0];
                b = (b - +(j | 0)) * 16;
                h = f + 1 | 0;
                if (!(!(g | (d | 0) > 0) & b == 0 | (h - (m + 16 | 0) | 0) != 1)) {
                  H[f + 1 | 0] = 46;
                  h = f + 2 | 0;
                }
                if (b != 0) {
                  continue;
                }
                break;
              }
              n = -1;
              g = u - l | 0;
              f = g + q | 0;
              if ((2147483645 - f | 0) < (d | 0)) {
                break b;
              }
              v: {
                w: {
                  if (!d) {
                    break w;
                  }
                  i = h - (m + 16 | 0) | 0;
                  if ((i - 2 | 0) >= (d | 0)) {
                    break w;
                  }
                  d = d + 2 | 0;
                  break v;
                }
                i = h - (m + 16 | 0) | 0;
                d = i;
              }
              f = d + f | 0;
              _a(a, 32, c, f, e);
              Ya(a, k, q);
              _a(a, 48, c, f, e ^ 65536);
              Ya(a, m + 16 | 0, i);
              _a(a, 48, d - i | 0, 0, 0);
              Ya(a, l, g);
              _a(a, 32, c, f, e ^ 8192);
              n = (c | 0) < (f | 0) ? f : c;
            }
            Da = m + 560 | 0;
            return n | 0;
          }
          function Pc(a, b, c, d, e, f, g) {
            var h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              q = 0,
              r = 0,
              s = 0,
              t = 0,
              u = 0,
              v = 0,
              w = 0,
              x = 0,
              y = 0,
              z = 0,
              A = 0;
            j = Da - 80 | 0;
            Da = j;
            J[j + 76 >> 2] = b;
            y = j + 55 | 0;
            t = j + 56 | 0;
            a: {
              b: {
                c: {
                  d: {
                    e: while (1) {
                      k = b;
                      if ((p ^ 2147483647) < (h | 0)) {
                        break d;
                      }
                      p = h + p | 0;
                      f: {
                        g: {
                          h: {
                            h = k;
                            i = K[h | 0];
                            if (i) {
                              while (1) {
                                i: {
                                  b = i & 255;
                                  j: {
                                    if (!b) {
                                      b = h;
                                      break j;
                                    }
                                    if ((b | 0) != 37) {
                                      break i;
                                    }
                                    i = h;
                                    while (1) {
                                      if (K[i + 1 | 0] != 37) {
                                        b = i;
                                        break j;
                                      }
                                      h = h + 1 | 0;
                                      l = K[i + 2 | 0];
                                      b = i + 2 | 0;
                                      i = b;
                                      if ((l | 0) == 37) {
                                        continue;
                                      }
                                      break;
                                    }
                                  }
                                  h = h - k | 0;
                                  x = p ^ 2147483647;
                                  if ((h | 0) > (x | 0)) {
                                    break d;
                                  }
                                  if (a) {
                                    Ya(a, k, h);
                                  }
                                  if (h) {
                                    continue e;
                                  }
                                  J[j + 76 >> 2] = b;
                                  h = b + 1 | 0;
                                  r = -1;
                                  i = H[b + 1 | 0];
                                  if (!(!Tb(i) | K[b + 2 | 0] != 36)) {
                                    r = i - 48 | 0;
                                    u = 1;
                                    h = b + 3 | 0;
                                  }
                                  J[j + 76 >> 2] = h;
                                  o = 0;
                                  i = H[h | 0];
                                  b = i - 32 | 0;
                                  k: {
                                    if (b >>> 0 > 31) {
                                      l = h;
                                      break k;
                                    }
                                    l = h;
                                    b = 1 << b;
                                    if (!(b & 75913)) {
                                      break k;
                                    }
                                    while (1) {
                                      l = h + 1 | 0;
                                      J[j + 76 >> 2] = l;
                                      o = b | o;
                                      i = H[h + 1 | 0];
                                      b = i - 32 | 0;
                                      if (b >>> 0 >= 32) {
                                        break k;
                                      }
                                      h = l;
                                      b = 1 << b;
                                      if (b & 75913) {
                                        continue;
                                      }
                                      break;
                                    }
                                  }
                                  l: {
                                    if ((i | 0) == 42) {
                                      b = H[l + 1 | 0];
                                      m: {
                                        if (!(!Tb(b) | K[l + 2 | 0] != 36)) {
                                          J[((b << 2) + e | 0) - 192 >> 2] = 10;
                                          i = l + 3 | 0;
                                          u = 1;
                                          q = J[((H[l + 1 | 0] << 3) + d | 0) - 384 >> 2];
                                          break m;
                                        }
                                        if (u) {
                                          break h;
                                        }
                                        i = l + 1 | 0;
                                        if (!a) {
                                          J[j + 76 >> 2] = i;
                                          u = 0;
                                          q = 0;
                                          break l;
                                        }
                                        b = J[c >> 2];
                                        J[c >> 2] = b + 4;
                                        u = 0;
                                        q = J[b >> 2];
                                      }
                                      J[j + 76 >> 2] = i;
                                      if ((q | 0) >= 0) {
                                        break l;
                                      }
                                      q = 0 - q | 0;
                                      o = o | 8192;
                                      break l;
                                    }
                                    q = Oc(j + 76 | 0);
                                    if ((q | 0) < 0) {
                                      break d;
                                    }
                                    i = J[j + 76 >> 2];
                                  }
                                  h = 0;
                                  n = -1;
                                  n: {
                                    if (K[i | 0] != 46) {
                                      b = i;
                                      s = 0;
                                      break n;
                                    }
                                    if (K[i + 1 | 0] == 42) {
                                      b = H[i + 2 | 0];
                                      o: {
                                        if (!(!Tb(b) | K[i + 3 | 0] != 36)) {
                                          J[((b << 2) + e | 0) - 192 >> 2] = 10;
                                          b = i + 4 | 0;
                                          n = J[((H[i + 2 | 0] << 3) + d | 0) - 384 >> 2];
                                          break o;
                                        }
                                        if (u) {
                                          break h;
                                        }
                                        b = i + 2 | 0;
                                        n = 0;
                                        if (!a) {
                                          break o;
                                        }
                                        i = J[c >> 2];
                                        J[c >> 2] = i + 4;
                                        n = J[i >> 2];
                                      }
                                      J[j + 76 >> 2] = b;
                                      s = (n ^ -1) >>> 31 | 0;
                                      break n;
                                    }
                                    J[j + 76 >> 2] = i + 1;
                                    n = Oc(j + 76 | 0);
                                    b = J[j + 76 >> 2];
                                    s = 1;
                                  }
                                  while (1) {
                                    m = h;
                                    l = 28;
                                    v = b;
                                    h = H[b | 0];
                                    if (h - 123 >>> 0 < 4294967238) {
                                      break c;
                                    }
                                    b = v + 1 | 0;
                                    h = K[(h + P(m, 58) | 0) + 5967 | 0];
                                    if (h - 1 >>> 0 < 8) {
                                      continue;
                                    }
                                    break;
                                  }
                                  J[j + 76 >> 2] = b;
                                  p: {
                                    q: {
                                      if ((h | 0) != 27) {
                                        if (!h) {
                                          break c;
                                        }
                                        if ((r | 0) >= 0) {
                                          J[(r << 2) + e >> 2] = h;
                                          h = (r << 3) + d | 0;
                                          i = J[h + 4 >> 2];
                                          J[j + 64 >> 2] = J[h >> 2];
                                          J[j + 68 >> 2] = i;
                                          break q;
                                        }
                                        if (!a) {
                                          break f;
                                        }
                                        Nc(j - -64 | 0, h, c, g);
                                        break p;
                                      }
                                      if ((r | 0) >= 0) {
                                        break c;
                                      }
                                    }
                                    h = 0;
                                    if (!a) {
                                      continue e;
                                    }
                                  }
                                  i = o & -65537;
                                  o = o & 8192 ? i : o;
                                  r = 0;
                                  w = 1167;
                                  l = t;
                                  r: {
                                    s: {
                                      t: {
                                        u: {
                                          v: {
                                            w: {
                                              x: {
                                                y: {
                                                  z: {
                                                    A: {
                                                      B: {
                                                        C: {
                                                          D: {
                                                            E: {
                                                              F: {
                                                                G: {
                                                                  h = H[v | 0];
                                                                  h = m ? (h & 15) == 3 ? h & -33 : h : h;
                                                                  switch (h - 88 | 0) {
                                                                    case 11:
                                                                      break r;
                                                                    case 9:
                                                                    case 13:
                                                                    case 14:
                                                                    case 15:
                                                                      break s;
                                                                    case 27:
                                                                      break x;
                                                                    case 12:
                                                                    case 17:
                                                                      break A;
                                                                    case 23:
                                                                      break B;
                                                                    case 0:
                                                                    case 32:
                                                                      break C;
                                                                    case 24:
                                                                      break D;
                                                                    case 22:
                                                                      break E;
                                                                    case 29:
                                                                      break F;
                                                                    case 1:
                                                                    case 2:
                                                                    case 3:
                                                                    case 4:
                                                                    case 5:
                                                                    case 6:
                                                                    case 7:
                                                                    case 8:
                                                                    case 10:
                                                                    case 16:
                                                                    case 18:
                                                                    case 19:
                                                                    case 20:
                                                                    case 21:
                                                                    case 25:
                                                                    case 26:
                                                                    case 28:
                                                                    case 30:
                                                                    case 31:
                                                                      break g;
                                                                    default:
                                                                      break G;
                                                                  }
                                                                }
                                                                H: {
                                                                  switch (h - 65 | 0) {
                                                                    case 0:
                                                                    case 4:
                                                                    case 5:
                                                                    case 6:
                                                                      break s;
                                                                    case 2:
                                                                      break v;
                                                                    case 1:
                                                                    case 3:
                                                                      break g;
                                                                    default:
                                                                      break H;
                                                                  }
                                                                }
                                                                if ((h | 0) == 83) {
                                                                  break w;
                                                                }
                                                                break g;
                                                              }
                                                              i = J[j + 64 >> 2];
                                                              m = J[j + 68 >> 2];
                                                              h = 1167;
                                                              break z;
                                                            }
                                                            h = 0;
                                                            I: {
                                                              switch (m & 255) {
                                                                case 0:
                                                                  J[J[j + 64 >> 2] >> 2] = p;
                                                                  continue e;
                                                                case 1:
                                                                  J[J[j + 64 >> 2] >> 2] = p;
                                                                  continue e;
                                                                case 2:
                                                                  k = J[j + 64 >> 2];
                                                                  J[k >> 2] = p;
                                                                  J[k + 4 >> 2] = p >> 31;
                                                                  continue e;
                                                                case 3:
                                                                  I[J[j + 64 >> 2] >> 1] = p;
                                                                  continue e;
                                                                case 4:
                                                                  H[J[j + 64 >> 2]] = p;
                                                                  continue e;
                                                                case 6:
                                                                  J[J[j + 64 >> 2] >> 2] = p;
                                                                  continue e;
                                                                case 7:
                                                                  break I;
                                                                default:
                                                                  continue e;
                                                              }
                                                            }
                                                            k = J[j + 64 >> 2];
                                                            J[k >> 2] = p;
                                                            J[k + 4 >> 2] = p >> 31;
                                                            continue e;
                                                          }
                                                          n = n >>> 0 <= 8 ? 8 : n;
                                                          o = o | 8;
                                                          h = 120;
                                                        }
                                                        k = t;
                                                        i = J[j + 64 >> 2];
                                                        m = J[j + 68 >> 2];
                                                        if (i | m) {
                                                          z = h & 32;
                                                          while (1) {
                                                            k = k - 1 | 0;
                                                            H[k | 0] = z | K[(i & 15) + 6496 | 0];
                                                            A = !m & i >>> 0 > 15 | (m | 0) != 0;
                                                            v = m;
                                                            m = m >>> 4 | 0;
                                                            i = (v & 15) << 28 | i >>> 4;
                                                            if (A) {
                                                              continue;
                                                            }
                                                            break;
                                                          }
                                                        }
                                                        if (!(o & 8) | !(J[j + 64 >> 2] | J[j + 68 >> 2])) {
                                                          break y;
                                                        }
                                                        w = (h >>> 4 | 0) + 1167 | 0;
                                                        r = 2;
                                                        break y;
                                                      }
                                                      h = t;
                                                      k = J[j + 68 >> 2];
                                                      m = k;
                                                      i = J[j + 64 >> 2];
                                                      if (k | i) {
                                                        while (1) {
                                                          h = h - 1 | 0;
                                                          H[h | 0] = i & 7 | 48;
                                                          v = !m & i >>> 0 > 7 | (m | 0) != 0;
                                                          k = m;
                                                          m = k >>> 3 | 0;
                                                          i = (k & 7) << 29 | i >>> 3;
                                                          if (v) {
                                                            continue;
                                                          }
                                                          break;
                                                        }
                                                      }
                                                      k = h;
                                                      if (!(o & 8)) {
                                                        break y;
                                                      }
                                                      h = t - k | 0;
                                                      n = (h | 0) < (n | 0) ? n : h + 1 | 0;
                                                      break y;
                                                    }
                                                    i = J[j + 64 >> 2];
                                                    h = J[j + 68 >> 2];
                                                    m = h;
                                                    if ((h | 0) < 0) {
                                                      k = 0 - (m + ((i | 0) != 0) | 0) | 0;
                                                      m = k;
                                                      i = 0 - i | 0;
                                                      J[j + 64 >> 2] = i;
                                                      J[j + 68 >> 2] = k;
                                                      r = 1;
                                                      h = 1167;
                                                      break z;
                                                    }
                                                    if (o & 2048) {
                                                      r = 1;
                                                      h = 1168;
                                                      break z;
                                                    }
                                                    r = o & 1;
                                                    h = r ? 1169 : 1167;
                                                  }
                                                  w = h;
                                                  k = Db(i, m, t);
                                                }
                                                if ((n | 0) < 0 ? s : 0) {
                                                  break d;
                                                }
                                                o = s ? o & -65537 : o;
                                                h = J[j + 64 >> 2];
                                                i = J[j + 68 >> 2];
                                                if (!((h | i) != 0 | n)) {
                                                  k = t;
                                                  n = 0;
                                                  break g;
                                                }
                                                h = !(h | i) + (t - k | 0) | 0;
                                                n = (h | 0) < (n | 0) ? n : h;
                                                break g;
                                              }
                                              o = 0;
                                              s = n >>> 0 >= 2147483647 ? 2147483647 : n;
                                              m = s;
                                              l = (m | 0) != 0;
                                              J: {
                                                K: {
                                                  h = J[j + 64 >> 2];
                                                  k = h ? h : 5230;
                                                  h = k;
                                                  L: {
                                                    M: {
                                                      N: {
                                                        if (!(h & 3) | !m) {
                                                          break N;
                                                        }
                                                        while (1) {
                                                          o = K[h | 0];
                                                          if (!o) {
                                                            break M;
                                                          }
                                                          m = m - 1 | 0;
                                                          l = (m | 0) != 0;
                                                          h = h + 1 | 0;
                                                          if (!(h & 3)) {
                                                            break N;
                                                          }
                                                          if (m) {
                                                            continue;
                                                          }
                                                          break;
                                                        }
                                                      }
                                                      if (!l) {
                                                        break K;
                                                      }
                                                      O: {
                                                        if (!(!K[h | 0] | m >>> 0 < 4)) {
                                                          while (1) {
                                                            l = J[h >> 2];
                                                            if ((l ^ -1) & l - 16843009 & -2139062144) {
                                                              break O;
                                                            }
                                                            h = h + 4 | 0;
                                                            m = m - 4 | 0;
                                                            if (m >>> 0 > 3) {
                                                              continue;
                                                            }
                                                            break;
                                                          }
                                                        }
                                                        if (!m) {
                                                          break K;
                                                        }
                                                      }
                                                      l = 0;
                                                      break L;
                                                    }
                                                    l = 1;
                                                  }
                                                  while (1) {
                                                    if (!l) {
                                                      o = K[h | 0];
                                                      l = 1;
                                                      continue;
                                                    }
                                                    if (!o) {
                                                      break J;
                                                    }
                                                    h = h + 1 | 0;
                                                    m = m - 1 | 0;
                                                    if (!m) {
                                                      break K;
                                                    }
                                                    l = 0;
                                                    continue;
                                                  }
                                                }
                                                h = 0;
                                              }
                                              h = h ? h - k | 0 : s;
                                              l = h + k | 0;
                                              if ((n | 0) >= 0) {
                                                o = i;
                                                n = h;
                                                break g;
                                              }
                                              o = i;
                                              n = h;
                                              if (K[l | 0]) {
                                                break d;
                                              }
                                              break g;
                                            }
                                            if (n) {
                                              i = J[j + 64 >> 2];
                                              break u;
                                            }
                                            h = 0;
                                            _a(a, 32, q, 0, o);
                                            break t;
                                          }
                                          J[j + 12 >> 2] = 0;
                                          J[j + 8 >> 2] = J[j + 64 >> 2];
                                          i = j + 8 | 0;
                                          J[j + 64 >> 2] = i;
                                          n = -1;
                                        }
                                        h = 0;
                                        P: {
                                          while (1) {
                                            k = J[i >> 2];
                                            if (!k) {
                                              break P;
                                            }
                                            k = Mc(j + 4 | 0, k);
                                            l = (k | 0) < 0;
                                            if (!(l | k >>> 0 > n - h >>> 0)) {
                                              i = i + 4 | 0;
                                              h = h + k | 0;
                                              if (n >>> 0 > h >>> 0) {
                                                continue;
                                              }
                                              break P;
                                            }
                                            break;
                                          }
                                          if (l) {
                                            break b;
                                          }
                                        }
                                        l = 61;
                                        if ((h | 0) < 0) {
                                          break c;
                                        }
                                        _a(a, 32, q, h, o);
                                        if (!h) {
                                          h = 0;
                                          break t;
                                        }
                                        l = 0;
                                        i = J[j + 64 >> 2];
                                        while (1) {
                                          k = J[i >> 2];
                                          if (!k) {
                                            break t;
                                          }
                                          k = Mc(j + 4 | 0, k);
                                          l = k + l | 0;
                                          if (l >>> 0 > h >>> 0) {
                                            break t;
                                          }
                                          Ya(a, j + 4 | 0, k);
                                          i = i + 4 | 0;
                                          if (h >>> 0 > l >>> 0) {
                                            continue;
                                          }
                                          break;
                                        }
                                      }
                                      _a(a, 32, q, h, o ^ 8192);
                                      h = (h | 0) < (q | 0) ? q : h;
                                      continue e;
                                    }
                                    if ((n | 0) < 0 ? s : 0) {
                                      break d;
                                    }
                                    l = 61;
                                    h = Fa[f | 0](a, O[j + 64 >> 3], q, n, o, h) | 0;
                                    if ((h | 0) >= 0) {
                                      continue e;
                                    }
                                    break c;
                                  }
                                  H[j + 55 | 0] = J[j + 64 >> 2];
                                  n = 1;
                                  k = y;
                                  o = i;
                                  break g;
                                }
                                i = K[h + 1 | 0];
                                h = h + 1 | 0;
                                continue;
                              }
                            }
                            if (a) {
                              break a;
                            }
                            if (!u) {
                              break f;
                            }
                            h = 1;
                            while (1) {
                              a = J[(h << 2) + e >> 2];
                              if (a) {
                                Nc((h << 3) + d | 0, a, c, g);
                                p = 1;
                                h = h + 1 | 0;
                                if ((h | 0) != 10) {
                                  continue;
                                }
                                break a;
                              }
                              break;
                            }
                            p = 1;
                            if (h >>> 0 >= 10) {
                              break a;
                            }
                            while (1) {
                              if (J[(h << 2) + e >> 2]) {
                                break h;
                              }
                              h = h + 1 | 0;
                              if ((h | 0) != 10) {
                                continue;
                              }
                              break;
                            }
                            break a;
                          }
                          l = 28;
                          break c;
                        }
                        m = l - k | 0;
                        n = (n | 0) > (m | 0) ? n : m;
                        if ((n | 0) > (r ^ 2147483647)) {
                          break d;
                        }
                        l = 61;
                        i = n + r | 0;
                        h = (i | 0) < (q | 0) ? q : i;
                        if ((x | 0) < (h | 0)) {
                          break c;
                        }
                        _a(a, 32, h, i, o);
                        Ya(a, w, r);
                        _a(a, 48, h, i, o ^ 65536);
                        _a(a, 48, n, m, 0);
                        Ya(a, k, m);
                        _a(a, 32, h, i, o ^ 8192);
                        continue;
                      }
                      break;
                    }
                    p = 0;
                    break a;
                  }
                  l = 61;
                }
                J[2035] = l;
              }
              p = -1;
            }
            Da = j + 80 | 0;
            return p;
          }
          function Cc(a, b, c, d, e, f, g, h, i, j, k) {
            var l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = Q(0),
              q = 0,
              r = 0,
              s = Q(0),
              t = Q(0),
              u = 0,
              v = 0,
              w = Q(0),
              x = 0,
              y = Q(0),
              z = 0,
              A = Q(0),
              C = Q(0),
              D = 0,
              E = 0;
            q = Da - 32 | 0;
            Da = q;
            ib(q + 8 | 0, b);
            m = J[q + 12 >> 2];
            n = J[q + 8 >> 2];
            if (m | n) {
              D = d ? d : 1;
              z = a + 20 | 0;
              E = f + 1 | 0;
              while (1) {
                a: {
                  b: {
                    c: {
                      d: {
                        e: {
                          f: {
                            g: {
                              h: {
                                o = J[n + 500 >> 2];
                                n = J[n + 496 >> 2];
                                if (o - n >> 2 >>> 0 > m >>> 0) {
                                  l = J[n + (m << 2) >> 2];
                                  m = K[l + 21 | 0] | K[l + 22 | 0] << 8 | K[l + 23 | 0] << 16;
                                  if ((m & 786432) == 262144) {
                                    break a;
                                  }
                                  i: {
                                    switch (m >>> 12 & 3) {
                                      case 2:
                                        p = j;
                                        w = k;
                                        if (!(K[J[b + 508 >> 2] + 20 | 0] & 4)) {
                                          p = Q(N[a + 404 >> 2] - Q(fb(z, 2, 1) + eb(z, 2, 1)));
                                          w = Q(N[a + 408 >> 2] - Q(fb(z, 0, 1) + eb(z, 0, 1)));
                                        }
                                        r = l + 20 | 0;
                                        o = K[b + 20 | 0] >>> 2 & 3;
                                        x = (d | 0) != 2;
                                        j: {
                                          k: {
                                            l: {
                                              if (!x) {
                                                n = 0;
                                                m = 3;
                                                m: {
                                                  switch (o - 2 | 0) {
                                                    case 0:
                                                      break j;
                                                    case 1:
                                                      break m;
                                                    default:
                                                      break l;
                                                  }
                                                }
                                                m = 2;
                                                break j;
                                              }
                                              m = 2;
                                              n = 0;
                                              if (o >>> 0 > 1) {
                                                break k;
                                              }
                                            }
                                            n = m;
                                          }
                                          m = o;
                                        }
                                        C = Q(Ta(r, 2, 1, p) + Sa(r, 2, 1, p));
                                        A = Ta(r, 0, 1, p);
                                        y = Sa(r, 0, 1, p);
                                        s = N[l + 512 >> 2];
                                        n: {
                                          o: {
                                            p: {
                                              switch (K[l + 516 | 0] - 1 | 0) {
                                                case 1:
                                                  s = Q(Q(s * p) * Q(0.009999999776482582));
                                                  break;
                                                case 0:
                                                  break p;
                                                default:
                                                  break o;
                                              }
                                            }
                                            if (!(s >= Q(0))) {
                                              break o;
                                            }
                                            s = Q(C + gb(l, d, 0, p, p));
                                            break n;
                                          }
                                          o = l + 50 | 0;
                                          Cb(q + 24 | 0, r, o, d);
                                          s = Q(Z);
                                          if (!K[q + 28 | 0]) {
                                            break n;
                                          }
                                          Bb(q + 24 | 0, r, o, d);
                                          if (!K[q + 28 | 0]) {
                                            break n;
                                          }
                                          Cb(q + 24 | 0, r, o, d);
                                          if (K[q + 28 | 0] == 3) {
                                            break n;
                                          }
                                          Bb(q + 24 | 0, r, o, d);
                                          if (K[q + 28 | 0] == 3) {
                                            break n;
                                          }
                                          s = Wa(l, 2, d, Q(Q(N[a + 404 >> 2] - Q(Jb(z, 2, d) + Qb(z, 2, d))) - Q(Pb(r, 2, d, p) + Hc(r, 2, d, p))), p, p);
                                        }
                                        A = Q(A + y);
                                        t = N[l + 520 >> 2];
                                        q: {
                                          r: {
                                            switch (K[l + 524 | 0] - 1 | 0) {
                                              case 1:
                                                t = Q(Q(t * w) * Q(0.009999999776482582));
                                                break;
                                              case 0:
                                                break r;
                                              default:
                                                break q;
                                            }
                                          }
                                          if (!(t >= Q(0))) {
                                            break q;
                                          }
                                          t = Q(A + gb(l, d, 1, w, p));
                                          break h;
                                        }
                                        o = l + 50 | 0;
                                        Ab(q + 24 | 0, r, o);
                                        s: {
                                          if (!K[q + 28 | 0]) {
                                            break s;
                                          }
                                          zb(q + 24 | 0, r, o);
                                          if (!K[q + 28 | 0]) {
                                            break s;
                                          }
                                          Ab(q + 24 | 0, r, o);
                                          if (K[q + 28 | 0] == 3) {
                                            break s;
                                          }
                                          zb(q + 24 | 0, r, o);
                                          if (K[q + 28 | 0] == 3) {
                                            break s;
                                          }
                                          t = Wa(l, 0, d, Q(Q(N[a + 408 >> 2] - Q(Jb(z, 0, d) + Qb(z, 0, d))) - Q(Pb(r, 0, d, w) + Hc(r, 0, d, w))), w, p);
                                          break h;
                                        }
                                        t = Q(Z);
                                        if (s != s) {
                                          break d;
                                        }
                                        o = l + 124 | 0;
                                        u = l + 122 | 0;
                                        y = Qa(o, L[u >> 1]);
                                        if (y == y) {
                                          break g;
                                        }
                                        break e;
                                      case 0:
                                        break i;
                                      default:
                                        break a;
                                    }
                                  }
                                  if (K[l | 0] & 8) {
                                    break a;
                                  }
                                  Nb(l);
                                  m = K[l + 20 | 0] & 3;
                                  m = Cc(a, l, c, m ? m : D, e, E, g, Q(N[l + 420 >> 2] + h), Q(N[l + 424 >> 2] + i), j, k) | v;
                                  v = 0;
                                  if (!(m & 1)) {
                                    break a;
                                  }
                                  v = 1;
                                  H[l | 0] = K[l | 0] | 1;
                                  break a;
                                }
                                ba();
                                B();
                              }
                              if ((s != s | 0) == (t != t | 0)) {
                                break f;
                              }
                              o = l + 124 | 0;
                              u = l + 122 | 0;
                              y = Qa(o, L[u >> 1]);
                              if (y != y) {
                                break f;
                              }
                              if (s != s) {
                                s = Q(Q(Q(t - A) * Qa(o, L[l + 122 >> 1])) + C);
                                break f;
                              }
                              if (t == t) {
                                break f;
                              }
                            }
                            t = Q(A + Q(Q(s - C) / Qa(o, L[u >> 1])));
                          }
                          if (s != s) {
                            break d;
                          }
                          if (t == t) {
                            break b;
                          }
                        }
                        u = 0;
                        break c;
                      }
                      u = 1;
                    }
                    o = u & ((c | 0) != 1 & m >>> 0 < 2 & p > Q(0));
                    ub(l, o ? p : s, t, d, o ? 2 : u, t != t, p, w, 0, 6, e, f, g);
                    s = Q(N[l + 404 >> 2] + Q(Ta(r, 2, 1, p) + Sa(r, 2, 1, p)));
                    t = Q(N[l + 408 >> 2] + Q(Ta(r, 0, 1, p) + Sa(r, 0, 1, p)));
                  }
                  o = 1;
                  ub(l, s, t, d, 0, 0, p, w, 1, 1, e, f, g);
                  Gc(a, b, l, d, m, 1, p, w);
                  Gc(a, b, l, d, n, 0, p, w);
                  o = v & 1 ? o : H[l | 0] & 1;
                  u = K[b + 20 | 0];
                  m = u >>> 2 & 3;
                  t: {
                    u: {
                      v: {
                        w: {
                          x: {
                            y: {
                              z: {
                                A: {
                                  B: {
                                    C: {
                                      D: {
                                        E: {
                                          F: {
                                            if (!x) {
                                              v = 0;
                                              n = 3;
                                              switch (m - 2 | 0) {
                                                case 1:
                                                  break t;
                                                case 0:
                                                  break D;
                                                default:
                                                  break F;
                                              }
                                            }
                                            n = 2;
                                            v = 0;
                                            if (m >>> 0 > 1) {
                                              break E;
                                            }
                                          }
                                          v = n;
                                        }
                                        if (!(u & 4)) {
                                          break z;
                                        }
                                        if (!(u & 8)) {
                                          break C;
                                        }
                                        n = m;
                                      }
                                      m = b;
                                      if ($b(r)) {
                                        break B;
                                      }
                                      break A;
                                    }
                                    if (!(K[l + 66 | 0] & 7 | (K[l + 52 | 0] & 7 | K[l + 56 | 0] & 7))) {
                                      n = m;
                                      m = b;
                                      if (!(L[l - -64 >> 1] & 7)) {
                                        break A;
                                      }
                                      break B;
                                    }
                                    n = m;
                                  }
                                  m = a;
                                }
                                G: {
                                  H: {
                                    switch (n - 1 | 0) {
                                      case 0:
                                        n = l + 408 | 0;
                                        x = l + 432 | 0;
                                        u = 1;
                                        m = m + 408 | 0;
                                        break G;
                                      case 1:
                                        n = l + 404 | 0;
                                        x = l + 420 | 0;
                                        u = 2;
                                        m = m + 404 | 0;
                                        break G;
                                      case 2:
                                        break H;
                                      default:
                                        break y;
                                    }
                                  }
                                  n = l + 404 | 0;
                                  x = l + 428 | 0;
                                  u = 0;
                                  m = m + 404 | 0;
                                }
                                N[((u << 2) + l | 0) + 420 >> 2] = Q(N[m >> 2] - N[n >> 2]) - N[x >> 2];
                              }
                              if (!(v & 1)) {
                                break t;
                              }
                              I: {
                                J: {
                                  if (v & 2) {
                                    m = b;
                                    if ($b(r)) {
                                      break J;
                                    }
                                    break I;
                                  }
                                  if (K[l + 66 | 0] & 7 | (K[l + 52 | 0] & 7 | K[l + 56 | 0] & 7)) {
                                    break J;
                                  }
                                  m = b;
                                  if (!(L[l - -64 >> 1] & 7)) {
                                    break I;
                                  }
                                }
                                m = a;
                              }
                              switch (v - 1 | 0) {
                                case 2:
                                  break v;
                                case 1:
                                  break w;
                                case 0:
                                  break x;
                                default:
                                  break y;
                              }
                            }
                            Va();
                            B();
                          }
                          v = l + 408 | 0;
                          n = l + 432 | 0;
                          x = 1;
                          m = m + 408 | 0;
                          break u;
                        }
                        v = l + 404 | 0;
                        n = l + 420 | 0;
                        x = 2;
                        m = m + 404 | 0;
                        break u;
                      }
                      v = l + 404 | 0;
                      n = l + 428 | 0;
                      x = 0;
                      m = m + 404 | 0;
                    }
                    N[((x << 2) + l | 0) + 420 >> 2] = Q(N[m >> 2] - N[v >> 2]) - N[n >> 2];
                  }
                  y = N[l + 424 >> 2];
                  p = Q(N[l + 420 >> 2] - ($b(r) ? h : Q(0)));
                  K: {
                    if (!(K[l + 52 | 0] & 7 | K[l + 56 | 0] & 7 | (K[l + 66 | 0] & 7 | L[l - -64 >> 1] & 7))) {
                      w = Q(0);
                      break K;
                    }
                    w = i;
                  }
                  N[l + 420 >> 2] = p;
                  N[l + 424 >> 2] = y - w;
                  v = o;
                }
                db(q + 8 | 0);
                m = J[q + 12 >> 2];
                n = J[q + 8 >> 2];
                if (m | n) {
                  continue;
                }
                break;
              }
            }
            m = J[q + 16 >> 2];
            if (m) {
              while (1) {
                a = J[m >> 2];
                Ua(m);
                m = a;
                if (m) {
                  continue;
                }
                break;
              }
            }
            Da = q + 32 | 0;
            return v & 1;
          }
          function Gc(a, b, c, d, e, f, g, h) {
            var i = 0,
              j = 0,
              k = 0,
              l = 0;
            j = Da - 16 | 0;
            Da = j;
            i = c + 20 | 0;
            k = (e & 254) == 2;
            l = k ? ((d | 0) == 2) << 1 : 1;
            mb(j + 8 | 0, i, l, d);
            h = k ? g : h;
            a: {
              b: {
                c: {
                  d: {
                    e: {
                      f: {
                        if (!K[j + 12 | 0]) {
                          break f;
                        }
                        mb(j + 8 | 0, i, l, d);
                        if (K[j + 12 | 0] == 3) {
                          break f;
                        }
                        g = Q(Q(Fc(i, e, d, h) + fb(a + 20 | 0, e, d)) + Ta(i, e, d, h));
                        d = 1;
                        g: {
                          h: {
                            i: {
                              j: {
                                k: {
                                  switch (e | 0) {
                                    case 3:
                                      d = 2;
                                      break j;
                                    case 0:
                                      break j;
                                    case 2:
                                      break k;
                                    case 1:
                                      break i;
                                    default:
                                      break e;
                                  }
                                }
                                d = 0;
                              }
                              if ((d | 0) == (l | 0)) {
                                break g;
                              }
                              l: {
                                switch (e | 0) {
                                  case 2:
                                    d = a + 404 | 0;
                                    a = 0;
                                    break h;
                                  case 3:
                                    break l;
                                  case 0:
                                  case 1:
                                    break i;
                                  default:
                                    break e;
                                }
                              }
                              d = a + 404 | 0;
                              a = 0;
                              break h;
                            }
                            d = a + 408 | 0;
                            a = 1;
                          }
                          g = Q(Q(N[d >> 2] - N[((a << 2) + c | 0) + 404 >> 2]) - g);
                        }
                        N[((J[(e << 2) + 5308 >> 2] << 2) + c | 0) + 420 >> 2] = g;
                        break a;
                      }
                      k = k ? ((d | 0) != 2) << 1 : 3;
                      mb(j + 8 | 0, i, k, d);
                      m: {
                        if (!K[j + 12 | 0]) {
                          break m;
                        }
                        mb(j + 8 | 0, i, k, d);
                        if (K[j + 12 | 0] == 3) {
                          break m;
                        }
                        n: {
                          o: {
                            switch (e | 0) {
                              case 2:
                                f = a + 404 | 0;
                                b = 0;
                                break n;
                              case 3:
                                f = a + 404 | 0;
                                b = 0;
                                break n;
                              case 0:
                              case 1:
                                break o;
                              default:
                                break e;
                            }
                          }
                          f = a + 408 | 0;
                          b = 1;
                        }
                        k = b << 2;
                        b = c + 404 | 0;
                        g = Q(Q(Q(Q(N[f >> 2] - N[k + b >> 2]) - eb(a + 20 | 0, e, d)) - Sa(i, e, d, h)) - Ec(i, e, d, h));
                        d = 1;
                        p: {
                          q: {
                            r: {
                              s: {
                                t: {
                                  switch (e | 0) {
                                    case 3:
                                      d = 2;
                                      break s;
                                    case 1:
                                      break r;
                                    case 0:
                                      break s;
                                    case 2:
                                      break t;
                                    default:
                                      break e;
                                  }
                                }
                                d = 0;
                              }
                              if ((d | 0) == (l | 0)) {
                                break p;
                              }
                              u: {
                                switch (e | 0) {
                                  case 2:
                                    d = a + 404 | 0;
                                    a = 0;
                                    break q;
                                  case 0:
                                  case 1:
                                    break r;
                                  case 3:
                                    break u;
                                  default:
                                    break e;
                                }
                              }
                              d = a + 404 | 0;
                              a = 0;
                              break q;
                            }
                            d = a + 408 | 0;
                            a = 1;
                          }
                          g = Q(Q(N[d >> 2] - N[b + (a << 2) >> 2]) - g);
                        }
                        N[((J[(e << 2) + 5308 >> 2] << 2) + c | 0) + 420 >> 2] = g;
                        break a;
                      }
                      v: {
                        w: {
                          x: {
                            if (f) {
                              a = K[b + 20 | 0] >>> 4 & 7;
                              if (a >>> 0 > 5) {
                                break a;
                              }
                              a = 1 << a;
                              if (a & 50) {
                                break x;
                              }
                              if (a & 9) {
                                a = J[(e << 2) + 5308 >> 2];
                                a = a << 2;
                                b = a + b | 0;
                                g = Q(yb(i, e, d, g) + N[b + 452 >> 2]);
                                a = a + c | 0;
                                if (!(K[J[c + 508 >> 2] + 20 | 0] & 2)) {
                                  g = Q(g + N[b + 468 >> 2]);
                                }
                                N[a + 420 >> 2] = g;
                                break a;
                              }
                              a = (J[(e << 2) + 5324 >> 2] << 2) + b | 0;
                              g = Q(N[a + 452 >> 2] + bc(i, e, d, g));
                              g = K[J[c + 508 >> 2] + 20 | 0] & 2 ? g : Q(g + N[a + 468 >> 2]);
                              y: {
                                z: {
                                  switch (e | 0) {
                                    case 3:
                                      h = Q(N[b + 404 >> 2] - N[c + 404 >> 2]);
                                      d = 2;
                                      break y;
                                    case 0:
                                    case 1:
                                      h = Q(N[b + 408 >> 2] - N[c + 408 >> 2]);
                                      d = 1;
                                      A: {
                                        switch (e | 0) {
                                          case 0:
                                            break y;
                                          case 1:
                                            break A;
                                          default:
                                            break e;
                                        }
                                      }
                                      d = 3;
                                      break y;
                                    case 2:
                                      break z;
                                    default:
                                      break e;
                                  }
                                }
                                h = Q(N[b + 404 >> 2] - N[c + 404 >> 2]);
                                d = 0;
                              }
                              N[((d << 2) + c | 0) + 420 >> 2] = h - g;
                              break a;
                            }
                            f = (K[c + 22 | 0] | K[c + 23 | 0] << 8) & 15;
                            if (!f) {
                              f = K[b + 21 | 0] >>> 4 | 0;
                            }
                            if (!(K[b + 20 | 0] & 8) & (f | 0) == 5) {
                              break w;
                            }
                            if (((K[b + 21 | 0] | K[b + 22 | 0] << 8) & 49152) == 32768) {
                              switch (f - 2 | 0) {
                                case 1:
                                  break b;
                                case 0:
                                  break x;
                                default:
                                  break v;
                              }
                            }
                            if (f >>> 0 > 8) {
                              break a;
                            }
                            if (1 << f & 499) {
                              break b;
                            }
                            if ((f | 0) != 2) {
                              break v;
                            }
                          }
                          a = 0;
                          B: {
                            C: {
                              D: {
                                E: {
                                  F: {
                                    G: {
                                      H: {
                                        I: {
                                          switch (e | 0) {
                                            case 2:
                                              h = N[b + 404 >> 2];
                                              a = 2;
                                              f = b + 452 | 0;
                                              break H;
                                            case 3:
                                              h = N[b + 404 >> 2];
                                              f = b + 460 | 0;
                                              break H;
                                            case 0:
                                            case 1:
                                              break I;
                                            default:
                                              break G;
                                          }
                                        }
                                        h = N[b + 408 >> 2];
                                        J: {
                                          switch (e | 0) {
                                            case 0:
                                              a = 3;
                                              f = b + 456 | 0;
                                              break H;
                                            case 1:
                                              break J;
                                            default:
                                              break G;
                                          }
                                        }
                                        a = 1;
                                        f = b + 464 | 0;
                                      }
                                      i = b + 452 | 0;
                                      h = Q(Q(h - N[f >> 2]) - N[i + (a << 2) >> 2]);
                                      if (K[J[c + 508 >> 2] + 20 | 0] & 2) {
                                        break B;
                                      }
                                      K: {
                                        switch (e | 0) {
                                          case 3:
                                            break D;
                                          case 2:
                                            break E;
                                          case 1:
                                            break F;
                                          case 0:
                                            break K;
                                          default:
                                            break G;
                                        }
                                      }
                                      f = b + 472 | 0;
                                      a = 3;
                                      break C;
                                    }
                                    Va();
                                    B();
                                  }
                                  f = b + 480 | 0;
                                  a = 1;
                                  break C;
                                }
                                f = b + 468 | 0;
                                a = 2;
                                break C;
                              }
                              f = b + 476 | 0;
                              a = 0;
                            }
                            h = Q(Q(h - N[f >> 2]) - N[((a << 2) + b | 0) + 468 >> 2]);
                          }
                          f = e << 2;
                          a = c + 20 | 0;
                          h = Q(Q(h - Q(N[((J[f + 5340 >> 2] << 2) + c | 0) + 404 >> 2] + Q(Ta(a, e, 1, g) + Sa(a, e, 1, g)))) * Q(0.5));
                          f = J[f + 5308 >> 2];
                          g = Q(Q(h + N[i + (f << 2) >> 2]) + yb(a, e, d, g));
                          a = (f << 2) + c | 0;
                          if (!(K[J[c + 508 >> 2] + 20 | 0] & 2)) {
                            g = Q(g + N[((f << 2) + b | 0) + 468 >> 2]);
                          }
                          N[a + 420 >> 2] = g;
                          break a;
                        }
                        if (((K[b + 21 | 0] | K[b + 22 | 0] << 8) & 49152) != 32768) {
                          break b;
                        }
                      }
                      a = (J[(e << 2) + 5324 >> 2] << 2) + b | 0;
                      g = Q(N[a + 452 >> 2] + bc(i, e, d, g));
                      g = K[J[c + 508 >> 2] + 20 | 0] & 2 ? g : Q(g + N[a + 468 >> 2]);
                      L: {
                        switch (e | 0) {
                          case 3:
                            h = Q(N[b + 404 >> 2] - N[c + 404 >> 2]);
                            d = 2;
                            break c;
                          case 2:
                            break d;
                          case 0:
                          case 1:
                            break L;
                          default:
                            break e;
                        }
                      }
                      h = Q(N[b + 408 >> 2] - N[c + 408 >> 2]);
                      d = 1;
                      M: {
                        switch (e | 0) {
                          case 0:
                            break c;
                          case 1:
                            break M;
                          default:
                            break e;
                        }
                      }
                      d = 3;
                      break c;
                    }
                    Va();
                    B();
                  }
                  h = Q(N[b + 404 >> 2] - N[c + 404 >> 2]);
                  d = 0;
                }
                N[((d << 2) + c | 0) + 420 >> 2] = h - g;
                break a;
              }
              a = J[(e << 2) + 5308 >> 2];
              a = a << 2;
              b = a + b | 0;
              g = Q(yb(i, e, d, g) + N[b + 452 >> 2]);
              a = a + c | 0;
              if (!(K[J[c + 508 >> 2] + 20 | 0] & 2)) {
                g = Q(g + N[b + 468 >> 2]);
              }
              N[a + 420 >> 2] = g;
            }
            Da = j + 16 | 0;
          }
          function qg(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0,
              d = 0,
              e = Q(0),
              f = Q(0),
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0;
            c = Da - 16 | 0;
            Da = c;
            i = J[b >> 2];
            b = J[a >> 2];
            a: {
              b: {
                if ((K[i + 20 | 0] ^ K[b + 20 | 0]) & 127 | ((K[i + 21 | 0] | K[i + 22 | 0] << 8 | K[i + 23 | 0] << 16) ^ (K[b + 21 | 0] | K[b + 22 | 0] << 8 | K[b + 23 | 0] << 16)) & 1048575) {
                  break b;
                }
                j = i + 124 | 0;
                k = b + 124 | 0;
                a = K[b + 24 | 0] | K[b + 25 | 0] << 8;
                c: {
                  if (!(a & 7 | K[i + 24 | 0] & 7)) {
                    break c;
                  }
                  e = Qa(k, a);
                  f = Qa(j, K[i + 24 | 0] | K[i + 25 | 0] << 8);
                  if (e == f) {
                    break c;
                  }
                  if (e == e | f == f) {
                    break b;
                  }
                }
                a = K[b + 26 | 0] | K[b + 27 | 0] << 8;
                d: {
                  if (!(a & 7 | K[i + 26 | 0] & 7)) {
                    break d;
                  }
                  e = Qa(k, a);
                  f = Qa(j, K[i + 26 | 0] | K[i + 27 | 0] << 8);
                  if (e == f) {
                    break d;
                  }
                  if (e == e | f == f) {
                    break b;
                  }
                }
                a = K[b + 28 | 0] | K[b + 29 | 0] << 8;
                e: {
                  if (!(a & 7 | K[i + 28 | 0] & 7)) {
                    break e;
                  }
                  e = Qa(k, a);
                  f = Qa(j, K[i + 28 | 0] | K[i + 29 | 0] << 8);
                  if (e == f) {
                    break e;
                  }
                  if (e == e | f == f) {
                    break b;
                  }
                }
                a = K[b + 30 | 0] | K[b + 31 | 0] << 8;
                if (a & 7 | K[i + 30 | 0] & 7) {
                  Ra(c + 8 | 0, k, a);
                  Ra(c, j, K[i + 30 | 0] | K[i + 31 | 0] << 8);
                  e = N[c + 8 >> 2];
                  f = N[c >> 2];
                  if (e != f) {
                    if (e == e) {
                      break b;
                    }
                    a = f != f;
                  } else {
                    a = 1;
                  }
                  if (!a | K[c + 12 | 0] != K[c + 4 | 0]) {
                    break b;
                  }
                }
                a = i + 32 | 0;
                g = b + 32 | 0;
                while (1) {
                  d = g + (h << 1) | 0;
                  d = K[d | 0] | K[d + 1 | 0] << 8;
                  if (d & 7 | K[a | 0] & 7) {
                    Ra(c + 8 | 0, k, d);
                    Ra(c, j, K[a | 0] | K[a + 1 | 0] << 8);
                    e = N[c + 8 >> 2];
                    f = N[c >> 2];
                    if (e != f) {
                      if (e == e) {
                        break b;
                      }
                      d = f != f;
                    } else {
                      d = 1;
                    }
                    if (!d | K[c + 12 | 0] != K[c + 4 | 0]) {
                      break b;
                    }
                  }
                  a = a + 2 | 0;
                  h = h + 1 | 0;
                  if ((h | 0) != 9) {
                    continue;
                  }
                  break;
                }
                a = i + 50 | 0;
                g = b + 50 | 0;
                h = 0;
                while (1) {
                  d = g + (h << 1) | 0;
                  d = K[d | 0] | K[d + 1 | 0] << 8;
                  if (d & 7 | K[a | 0] & 7) {
                    Ra(c + 8 | 0, k, d);
                    Ra(c, j, K[a | 0] | K[a + 1 | 0] << 8);
                    e = N[c + 8 >> 2];
                    f = N[c >> 2];
                    if (e != f) {
                      if (e == e) {
                        break b;
                      }
                      d = f != f;
                    } else {
                      d = 1;
                    }
                    if (!d | K[c + 12 | 0] != K[c + 4 | 0]) {
                      break b;
                    }
                  }
                  a = a + 2 | 0;
                  h = h + 1 | 0;
                  if ((h | 0) != 9) {
                    continue;
                  }
                  break;
                }
                a = i + 68 | 0;
                g = b + 68 | 0;
                h = 0;
                while (1) {
                  d = g + (h << 1) | 0;
                  d = K[d | 0] | K[d + 1 | 0] << 8;
                  if (d & 7 | K[a | 0] & 7) {
                    Ra(c + 8 | 0, k, d);
                    Ra(c, j, K[a | 0] | K[a + 1 | 0] << 8);
                    e = N[c + 8 >> 2];
                    f = N[c >> 2];
                    if (e != f) {
                      if (e == e) {
                        break b;
                      }
                      d = f != f;
                    } else {
                      d = 1;
                    }
                    if (!d | K[c + 12 | 0] != K[c + 4 | 0]) {
                      break b;
                    }
                  }
                  a = a + 2 | 0;
                  h = h + 1 | 0;
                  if ((h | 0) != 9) {
                    continue;
                  }
                  break;
                }
                a = i + 86 | 0;
                g = b + 86 | 0;
                h = 0;
                while (1) {
                  d = g + (h << 1) | 0;
                  d = K[d | 0] | K[d + 1 | 0] << 8;
                  if (d & 7 | K[a | 0] & 7) {
                    Ra(c + 8 | 0, k, d);
                    Ra(c, j, K[a | 0] | K[a + 1 | 0] << 8);
                    e = N[c + 8 >> 2];
                    f = N[c >> 2];
                    if (e != f) {
                      if (e == e) {
                        break b;
                      }
                      d = f != f;
                    } else {
                      d = 1;
                    }
                    if (!d | K[c + 12 | 0] != K[c + 4 | 0]) {
                      break b;
                    }
                  }
                  a = a + 2 | 0;
                  h = h + 1 | 0;
                  if ((h | 0) != 9) {
                    continue;
                  }
                  break;
                }
                a = i + 104 | 0;
                g = b + 104 | 0;
                h = 0;
                while (1) {
                  d = g + (h << 1) | 0;
                  d = K[d | 0] | K[d + 1 | 0] << 8;
                  if (d & 7 | K[a | 0] & 7) {
                    Ra(c + 8 | 0, k, d);
                    Ra(c, j, K[a | 0] | K[a + 1 | 0] << 8);
                    e = N[c + 8 >> 2];
                    f = N[c >> 2];
                    if (e != f) {
                      if (e == e) {
                        break b;
                      }
                      d = f != f;
                    } else {
                      d = 1;
                    }
                    if (!d | K[c + 12 | 0] != K[c + 4 | 0]) {
                      break b;
                    }
                  }
                  a = a + 2 | 0;
                  h = h + 1 | 0;
                  if ((h | 0) != 3) {
                    continue;
                  }
                  break;
                }
                a = i + 110 | 0;
                l = b + 110 | 0;
                d = 0;
                h = 0;
                while (1) {
                  g = l + (h << 1) | 0;
                  g = K[g | 0] | K[g + 1 | 0] << 8;
                  if (g & 7 | K[a | 0] & 7) {
                    Ra(c + 8 | 0, k, g);
                    Ra(c, j, K[a | 0] | K[a + 1 | 0] << 8);
                    e = N[c + 8 >> 2];
                    f = N[c >> 2];
                    if (e != f) {
                      if (e == e) {
                        break b;
                      }
                      g = f != f;
                    } else {
                      g = 1;
                    }
                    if (!g | K[c + 12 | 0] != K[c + 4 | 0]) {
                      break b;
                    }
                  }
                  a = a + 2 | 0;
                  h = 1;
                  g = d;
                  d = 1;
                  if (!g) {
                    continue;
                  }
                  break;
                }
                a = i + 114 | 0;
                l = b + 114 | 0;
                d = 0;
                h = 0;
                while (1) {
                  g = l + (h << 1) | 0;
                  g = K[g | 0] | K[g + 1 | 0] << 8;
                  if (g & 7 | K[a | 0] & 7) {
                    Ra(c + 8 | 0, k, g);
                    Ra(c, j, K[a | 0] | K[a + 1 | 0] << 8);
                    e = N[c + 8 >> 2];
                    f = N[c >> 2];
                    if (e != f) {
                      if (e == e) {
                        break b;
                      }
                      g = f != f;
                    } else {
                      g = 1;
                    }
                    if (!g | K[c + 12 | 0] != K[c + 4 | 0]) {
                      break b;
                    }
                  }
                  a = a + 2 | 0;
                  h = 1;
                  g = d;
                  d = 1;
                  if (!g) {
                    continue;
                  }
                  break;
                }
                a = i + 118 | 0;
                l = b + 118 | 0;
                d = 0;
                h = 0;
                while (1) {
                  g = l + (h << 1) | 0;
                  g = K[g | 0] | K[g + 1 | 0] << 8;
                  if (g & 7 | K[a | 0] & 7) {
                    Ra(c + 8 | 0, k, g);
                    Ra(c, j, K[a | 0] | K[a + 1 | 0] << 8);
                    e = N[c + 8 >> 2];
                    f = N[c >> 2];
                    if (e != f) {
                      if (e == e) {
                        break b;
                      }
                      g = f != f;
                    } else {
                      g = 1;
                    }
                    if (!g | K[c + 12 | 0] != K[c + 4 | 0]) {
                      break b;
                    }
                  }
                  a = a + 2 | 0;
                  h = 1;
                  g = d;
                  d = 1;
                  if (!g) {
                    continue;
                  }
                  break;
                }
                a = K[b + 122 | 0] | K[b + 123 | 0] << 8;
                if (!(a & 7 | K[i + 122 | 0] & 7)) {
                  break a;
                }
                e = Qa(k, a);
                f = Qa(j, K[i + 122 | 0] | K[i + 123 | 0] << 8);
                if (e == f) {
                  break a;
                }
                if (e == e) {
                  break b;
                }
                if (f != f) {
                  break a;
                }
              }
              ab(b + 20 | 0, i + 20 | 0, 104);
              id(b + 124 | 0, i + 124 | 0);
              while (1) {
                a = K[b | 0];
                if (a & 4) {
                  break a;
                }
                H[b | 0] = a | 4;
                a = J[b + 16 >> 2];
                if (a) {
                  Fa[a | 0](b);
                }
                J[b + 156 >> 2] = 2143289344;
                b = J[b + 492 >> 2];
                if (b) {
                  continue;
                }
                break;
              }
            }
            Da = c + 16 | 0;
          }
          function Gb(a, b, c, d) {
            var e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0;
            i = Da - 16 | 0;
            Da = i;
            d = (K[b | 0] | K[b + 1 | 0] << 8) & -8 | d;
            H[b | 0] = d;
            H[b + 1 | 0] = d >>> 8;
            a: {
              if (d & 8) {
                fd(a, (d & 65520) >>> 4 | 0, (D(c), v(2)));
                a = (K[b | 0] | K[b + 1 | 0] << 8) & 15 | d & -16;
                break a;
              }
              e = Q(R(c)) < Q(2147483648) ? ~~c : -2147483648;
              if (!(e + 2047 >>> 0 > 4094 | Q(e | 0) != c)) {
                a = d & 15 | (c < Q(0) ? 0 - e | 2048 : e) << 4;
                break a;
              }
              l = L[a >> 1];
              I[a >> 1] = l + 1;
              b: {
                c: {
                  d: {
                    e: {
                      f: {
                        if (l >>> 0 < 4096) {
                          if (l >>> 0 <= 3) {
                            N[((l << 2) + a | 0) + 4 >> 2] = c;
                            break b;
                          }
                          d = J[a + 24 >> 2];
                          if (!d) {
                            d = Pa(24);
                            J[d >> 2] = 0;
                            J[d + 4 >> 2] = 0;
                            J[d + 16 >> 2] = 0;
                            J[d + 20 >> 2] = 0;
                            J[d + 8 >> 2] = 0;
                            J[d + 12 >> 2] = 0;
                            J[a + 24 >> 2] = d;
                          }
                          g: {
                            h: {
                              e = J[d + 4 >> 2];
                              i: {
                                j: {
                                  if ((e | 0) != J[d + 8 >> 2]) {
                                    N[e >> 2] = c;
                                    J[d + 4 >> 2] = e + 4;
                                    break j;
                                  }
                                  j = J[d >> 2];
                                  e = e - j | 0;
                                  g = e >> 2;
                                  h = g + 1 | 0;
                                  if (h >>> 0 >= 1073741824) {
                                    break i;
                                  }
                                  f = e >> 1;
                                  h = e >>> 0 >= 2147483644 ? 1073741823 : f >>> 0 > h >>> 0 ? f : h;
                                  k: {
                                    if (!h) {
                                      f = 0;
                                      k = g;
                                      break k;
                                    }
                                    if (h >>> 0 >= 1073741824) {
                                      break f;
                                    }
                                    f = Pa(h << 2);
                                    j = J[d >> 2];
                                    e = J[d + 4 >> 2] - j | 0;
                                    k = e >> 2;
                                  }
                                  g = (g << 2) + f | 0;
                                  N[g >> 2] = c;
                                  j = jb(g - (k << 2) | 0, j, e);
                                  J[d + 8 >> 2] = (h << 2) + f;
                                  J[d + 4 >> 2] = g + 4;
                                  e = J[d >> 2];
                                  J[d >> 2] = j;
                                  if (!e) {
                                    break j;
                                  }
                                  Ua(e);
                                }
                                h = J[a + 24 >> 2];
                                d = J[h + 16 >> 2];
                                a = J[h + 20 >> 2];
                                if ((d | 0) != a << 5) {
                                  break c;
                                }
                                if ((d + 1 | 0) < 0) {
                                  break i;
                                }
                                if (d >>> 0 > 1073741822) {
                                  break h;
                                }
                                a = a << 6;
                                e = (d & -32) + 32 | 0;
                                a = a >>> 0 > e >>> 0 ? a : e;
                                if (d >>> 0 >= a >>> 0) {
                                  break c;
                                }
                                if ((a | 0) >= 0) {
                                  break g;
                                }
                              }
                              ba();
                              B();
                            }
                            a = 2147483647;
                            if (d >>> 0 >= 2147483647) {
                              break c;
                            }
                          }
                          J[i + 8 >> 2] = 0;
                          J[i >> 2] = 0;
                          J[i + 4 >> 2] = 0;
                          hd(i, a);
                          e = J[h + 12 >> 2];
                          g = J[i + 4 >> 2];
                          a = J[h + 16 >> 2];
                          d = (g + (a & 31) | 0) + (a & -32) | 0;
                          J[i + 4 >> 2] = d;
                          if (!g) {
                            f = d - 1 | 0;
                            break e;
                          }
                          f = d - 1 | 0;
                          if ((f ^ g - 1) >>> 0 > 31) {
                            break e;
                          }
                          j = J[i >> 2];
                          break d;
                        }
                        ha(5237, 3476, 34, 3340);
                        B();
                      }
                      Xb();
                      B();
                    }
                    j = J[i >> 2];
                    J[j + ((d >>> 0 >= 33 ? f >>> 5 | 0 : 0) << 2) >> 2] = 0;
                  }
                  d = (g >>> 3 & 536870908) + j | 0;
                  g = g & 31;
                  l: {
                    if (!g) {
                      if ((a | 0) <= 0) {
                        break l;
                      }
                      f = (a | 0) / 32 | 0;
                      if (a + 31 >>> 0 >= 63) {
                        jb(d, e, f << 2);
                      }
                      a = a - (f << 5) | 0;
                      if ((a | 0) <= 0) {
                        break l;
                      }
                      f = f << 2;
                      d = d + f | 0;
                      a = -1 >>> 32 - a | 0;
                      J[d >> 2] = J[d >> 2] & (a ^ -1) | a & J[e + f >> 2];
                      break l;
                    }
                    if ((a | 0) <= 0) {
                      break l;
                    }
                    m = -1 << g;
                    k = 32 - g | 0;
                    if ((a | 0) >= 32) {
                      o = m ^ -1;
                      f = J[d >> 2];
                      while (1) {
                        n = f & o;
                        f = J[e >> 2];
                        J[d >> 2] = n | f << g;
                        f = J[d + 4 >> 2] & m | f >>> k;
                        J[d + 4 >> 2] = f;
                        e = e + 4 | 0;
                        d = d + 4 | 0;
                        n = a >>> 0 > 63;
                        a = a - 32 | 0;
                        if (n) {
                          continue;
                        }
                        break;
                      }
                      if ((a | 0) <= 0) {
                        break l;
                      }
                    }
                    f = (a | 0) > (k | 0) ? k : a;
                    e = J[e >> 2] & -1 >>> 32 - a;
                    J[d >> 2] = J[d >> 2] & (-1 >>> k - f & m ^ -1) | e << g;
                    a = a - f | 0;
                    if ((a | 0) <= 0) {
                      break l;
                    }
                    d = (f + g >>> 3 & 536870908) + d | 0;
                    J[d >> 2] = J[d >> 2] & (-1 >>> 32 - a ^ -1) | e >>> f;
                  }
                  a = J[h + 12 >> 2];
                  J[h + 12 >> 2] = j;
                  d = J[i + 4 >> 2];
                  J[h + 16 >> 2] = d;
                  J[h + 20 >> 2] = J[i + 8 >> 2];
                  if (!a) {
                    break c;
                  }
                  Ua(a);
                  d = J[h + 16 >> 2];
                }
                J[h + 16 >> 2] = d + 1;
                a = J[h + 12 >> 2] + (d >>> 3 & 536870908) | 0;
                e = J[a >> 2];
                k = a;
                a = d & 31;
                g = (-1 >>> a & -2) << a;
                a = 0 - d & 31;
                J[k >> 2] = e & (g | (-1 << a & -2) >>> a);
                d = K[b | 0] | K[b + 1 | 0] << 8;
              }
              a = d & 7 | l << 4 | 8;
            }
            H[b | 0] = a;
            H[b + 1 | 0] = a >>> 8;
            Da = i + 16 | 0;
          }
          function ud(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0,
              d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0,
              q = 0,
              r = 0;
            c = b;
            b = J[b >> 2] + 7 & -8;
            J[c >> 2] = b + 16;
            o = a;
            i = J[b >> 2];
            d = J[b + 4 >> 2];
            a = J[b + 12 >> 2];
            m = a;
            g = Da - 32 | 0;
            Da = g;
            a = a & 2147483647;
            h = a;
            e = a - 1006698496 | 0;
            a = a - 1140785152 | 0;
            c = J[b + 8 >> 2];
            b = c;
            a: {
              if ((e | 0) == (a | 0) & b >>> 0 < b >>> 0 | a >>> 0 > e >>> 0) {
                a = c;
                c = m << 4 | a >>> 28;
                b = a << 4 | d >>> 28;
                a = c;
                d = d & 268435455;
                if ((d | 0) == 134217728 & (i | 0) != 0 | d >>> 0 > 134217728) {
                  a = a + 1073741824 | 0;
                  b = b + 1 | 0;
                  a = b ? a : a + 1 | 0;
                  break a;
                }
                a = a + 1073741824 | 0;
                if (i | (d | 0) != 134217728) {
                  break a;
                }
                d = b & 1;
                b = d + b | 0;
                a = b >>> 0 < d >>> 0 ? a + 1 | 0 : a;
                break a;
              }
              if (!(!b & (h | 0) == 2147418112 ? !(d | i) : h >>> 0 < 2147418112)) {
                a = c;
                c = m << 4 | a >>> 28;
                b = a << 4 | d >>> 28;
                a = c & 524287 | 2146959360;
                break a;
              }
              b = 0;
              a = 2146435072;
              if (h >>> 0 > 1140785151) {
                break a;
              }
              a = 0;
              n = h >>> 16 | 0;
              if (n >>> 0 < 15249) {
                break a;
              }
              b = i;
              a = d;
              e = m & 65535 | 65536;
              h = e;
              l = c;
              f = c;
              j = n - 15233 | 0;
              b: {
                if (j & 64) {
                  c = b;
                  e = j + -64 | 0;
                  b = e & 31;
                  if ((e & 63) >>> 0 >= 32) {
                    a = c << b;
                    f = 0;
                  } else {
                    a = (1 << b) - 1 & c >>> 32 - b | a << b;
                    f = c << b;
                  }
                  e = a;
                  b = 0;
                  a = 0;
                  break b;
                }
                if (!j) {
                  break b;
                }
                k = f;
                f = j & 31;
                if ((j & 63) >>> 0 >= 32) {
                  c = k << f;
                  f = 0;
                } else {
                  c = (1 << f) - 1 & k >>> 32 - f | e << f;
                  f = k << f;
                }
                e = c;
                p = f;
                k = b;
                c = 64 - j | 0;
                f = c & 31;
                if ((c & 63) >>> 0 >= 32) {
                  c = 0;
                  b = a >>> f | 0;
                } else {
                  c = a >>> f | 0;
                  b = ((1 << f) - 1 & a) << 32 - f | k >>> f;
                }
                f = p | b;
                e = c | e;
                b = j & 31;
                if ((j & 63) >>> 0 >= 32) {
                  c = k << b;
                  b = 0;
                } else {
                  c = (1 << b) - 1 & k >>> 32 - b | a << b;
                  b = k << b;
                }
                a = c;
              }
              J[g + 16 >> 2] = b;
              J[g + 20 >> 2] = a;
              J[g + 24 >> 2] = f;
              J[g + 28 >> 2] = e;
              b = 15361 - n | 0;
              c: {
                if (b & 64) {
                  d = l;
                  b = b + -64 | 0;
                  a = b & 31;
                  if ((b & 63) >>> 0 >= 32) {
                    c = 0;
                    i = h >>> a | 0;
                  } else {
                    c = h >>> a | 0;
                    i = ((1 << a) - 1 & h) << 32 - a | d >>> a;
                  }
                  d = c;
                  l = 0;
                  h = 0;
                  break c;
                }
                if (!b) {
                  break c;
                }
                e = l;
                a = 64 - b | 0;
                c = a & 31;
                if ((a & 63) >>> 0 >= 32) {
                  a = e << c;
                  f = 0;
                } else {
                  a = (1 << c) - 1 & e >>> 32 - c | h << c;
                  f = e << c;
                }
                e = i;
                i = b & 31;
                if ((b & 63) >>> 0 >= 32) {
                  c = 0;
                  e = d >>> i | 0;
                } else {
                  c = d >>> i | 0;
                  e = ((1 << i) - 1 & d) << 32 - i | e >>> i;
                }
                i = f | e;
                d = a | c;
                e = l;
                c = b & 31;
                if ((b & 63) >>> 0 >= 32) {
                  a = 0;
                  l = h >>> c | 0;
                } else {
                  a = h >>> c | 0;
                  l = ((1 << c) - 1 & h) << 32 - c | e >>> c;
                }
                h = a;
              }
              J[g >> 2] = i;
              J[g + 4 >> 2] = d;
              J[g + 8 >> 2] = l;
              J[g + 12 >> 2] = h;
              b = J[g + 8 >> 2];
              a = J[g + 12 >> 2] << 4 | b >>> 28;
              b = b << 4;
              c = J[g >> 2];
              h = J[g + 4 >> 2];
              b = h >>> 28 | b;
              d = h & 268435455;
              c = c | (J[g + 16 >> 2] | J[g + 24 >> 2] | (J[g + 20 >> 2] | J[g + 28 >> 2])) != 0;
              if ((d | 0) == 134217728 & (c | 0) != 0 | d >>> 0 > 134217728) {
                b = b + 1 | 0;
                a = b ? a : a + 1 | 0;
                break a;
              }
              if (c | (d | 0) != 134217728) {
                break a;
              }
              c = b;
              b = b + (b & 1) | 0;
              a = c >>> 0 > b >>> 0 ? a + 1 | 0 : a;
            }
            Da = g + 32 | 0;
            x(0, b | 0);
            x(1, m & -2147483648 | a);
            q = o, r = +z(), O[q >> 3] = r;
          }
          function Ee(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0;
            h = Da - 80 | 0;
            Da = h;
            a = J[a >> 2];
            a: {
              b: {
                i = J[b >> 2];
                if (!J[i + 492 >> 2]) {
                  if (J[a + 8 >> 2]) {
                    break b;
                  }
                  if ((K[i + 23 | 0] << 16 & 786432) == 524288) {
                    J[a + 488 >> 2] = J[a + 488 >> 2] + 1;
                  }
                  b = J[a + 496 >> 2];
                  g = b + (c << 2) | 0;
                  d = J[a + 500 >> 2];
                  e = a + 504 | 0;
                  f = J[e >> 2];
                  c: {
                    if (d >>> 0 < f >>> 0) {
                      if ((d | 0) == (g | 0)) {
                        J[g >> 2] = i;
                        J[a + 500 >> 2] = g + 4;
                        break c;
                      }
                      c = d;
                      b = d - 4 | 0;
                      if (d >>> 0 > b >>> 0) {
                        while (1) {
                          J[c >> 2] = J[b >> 2];
                          c = c + 4 | 0;
                          b = b + 4 | 0;
                          if (d >>> 0 > b >>> 0) {
                            continue;
                          }
                          break;
                        }
                      }
                      J[a + 500 >> 2] = c;
                      b = g + 4 | 0;
                      if ((b | 0) != (d | 0)) {
                        b = d - b | 0;
                        jb(d - (b & -4) | 0, g, b);
                      }
                      J[g >> 2] = i;
                      break c;
                    }
                    d = (d - b >> 2) + 1 | 0;
                    if (d >>> 0 >= 1073741824) {
                      break a;
                    }
                    b = f - b | 0;
                    f = b >> 1;
                    e = Ib(h + 32 | 0, b >>> 0 >= 2147483644 ? 1073741823 : d >>> 0 < f >>> 0 ? f : d, c, e);
                    c = J[e + 8 >> 2];
                    d: {
                      if ((c | 0) != J[e + 12 >> 2]) {
                        break d;
                      }
                      b = J[e + 4 >> 2];
                      d = J[e >> 2];
                      if (b >>> 0 > d >>> 0) {
                        d = ((b - d >> 2) + 1 | 0) / -2 << 2;
                        j = d + b | 0;
                        f = b;
                        b = c - b | 0;
                        c = jb(j, f, b) + b | 0;
                        J[e + 8 >> 2] = c;
                        J[e + 4 >> 2] = d + J[e + 4 >> 2];
                        break d;
                      }
                      b = (c | 0) == (d | 0) ? 1 : c - d >> 1;
                      f = Ib(h + 56 | 0, b, b >>> 2 | 0, J[e + 16 >> 2]);
                      d = J[f + 8 >> 2];
                      b = J[e + 4 >> 2];
                      c = J[e + 8 >> 2];
                      e: {
                        if ((b | 0) == (c | 0)) {
                          c = d;
                          d = b;
                          break e;
                        }
                        c = (c - b | 0) + d | 0;
                        while (1) {
                          J[d >> 2] = J[b >> 2];
                          b = b + 4 | 0;
                          d = d + 4 | 0;
                          if ((d | 0) != (c | 0)) {
                            continue;
                          }
                          break;
                        }
                        b = J[e + 8 >> 2];
                        d = J[e + 4 >> 2];
                      }
                      j = J[e >> 2];
                      J[e >> 2] = J[f >> 2];
                      J[f >> 2] = j;
                      J[e + 4 >> 2] = J[f + 4 >> 2];
                      J[f + 4 >> 2] = d;
                      J[e + 8 >> 2] = c;
                      J[f + 8 >> 2] = b;
                      k = J[e + 12 >> 2];
                      J[e + 12 >> 2] = J[f + 12 >> 2];
                      J[f + 12 >> 2] = k;
                      if ((b | 0) != (d | 0)) {
                        J[f + 8 >> 2] = ((d - b | 0) + 3 & -4) + b;
                      }
                      if (!j) {
                        break d;
                      }
                      Ua(j);
                      c = J[e + 8 >> 2];
                    }
                    J[c >> 2] = i;
                    J[e + 8 >> 2] = J[e + 8 >> 2] + 4;
                    b = J[a + 496 >> 2];
                    c = g - b | 0;
                    l = e, m = jb(J[e + 4 >> 2] - c | 0, b, c), J[l + 4 >> 2] = m;
                    d = J[a + 500 >> 2] - g | 0;
                    g = jb(J[e + 8 >> 2], g, d);
                    b = J[a + 496 >> 2];
                    J[a + 496 >> 2] = J[e + 4 >> 2];
                    J[e + 4 >> 2] = b;
                    c = J[a + 500 >> 2];
                    J[a + 500 >> 2] = d + g;
                    J[e + 8 >> 2] = c;
                    d = J[a + 504 >> 2];
                    J[a + 504 >> 2] = J[e + 12 >> 2];
                    J[e >> 2] = b;
                    J[e + 12 >> 2] = d;
                    if ((b | 0) != (c | 0)) {
                      J[e + 8 >> 2] = c + ((b - c | 0) + 3 & -4);
                    }
                    if (!b) {
                      break c;
                    }
                    Ua(b);
                  }
                  J[i + 492 >> 2] = a;
                  while (1) {
                    b = K[a | 0];
                    if (!(b & 4)) {
                      H[a | 0] = b | 4;
                      b = J[a + 16 >> 2];
                      if (b) {
                        Fa[b | 0](a);
                      }
                      J[a + 156 >> 2] = 2143289344;
                      a = J[a + 492 >> 2];
                      if (a) {
                        continue;
                      }
                    }
                    break;
                  }
                  Da = h + 80 | 0;
                  return;
                }
                J[h + 16 >> 2] = 5028;
                bb(a, 5, 5304, h + 16 | 0);
                Va();
                B();
              }
              J[h >> 2] = 5161;
              bb(a, 5, 5304, h);
              Va();
              B();
            }
            ba();
            B();
          }
          function cc(a) {
            a = a | 0;
            var b = 0,
              c = 0,
              d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0;
            h = 8;
            a: {
              if (a >>> 0 > 4294967239) {
                break a;
              }
              b: {
                while (1) {
                  h = h >>> 0 <= 8 ? 8 : h;
                  b = J[1999];
                  f = b;
                  e = J[1998];
                  a = a >>> 0 <= 8 ? 8 : a + 3 & -4;
                  c: {
                    if (a >>> 0 <= 127) {
                      g = (a >>> 3 | 0) - 1 | 0;
                      break c;
                    }
                    d = S(a);
                    g = ((a >>> 29 - d ^ 4) - (d << 2) | 0) + 110 | 0;
                    if (a >>> 0 <= 4095) {
                      break c;
                    }
                    d = ((a >>> 30 - d ^ 2) - (d << 1) | 0) + 71 | 0;
                    g = d >>> 0 >= 63 ? 63 : d;
                  }
                  c = g & 31;
                  if ((g & 63) >>> 0 >= 32) {
                    d = 0;
                    b = b >>> c | 0;
                  } else {
                    d = b >>> c | 0;
                    b = ((1 << c) - 1 & b) << 32 - c | e >>> c;
                  }
                  if (b | d) {
                    while (1) {
                      e = d;
                      d: {
                        if (b | d) {
                          c = d - 1 | 0;
                          i = c + 1 | 0;
                          f = c;
                          c = b - 1 | 0;
                          f = (c | 0) != -1 ? i : f;
                          d = S(d ^ f);
                          d = (d | 0) == 32 ? S(b ^ c) + 32 | 0 : d;
                          c = 63 - d | 0;
                          Ea = 0 - (d >>> 0 > 63) | 0;
                          break d;
                        }
                        Ea = 0;
                        c = 64;
                      }
                      f = c;
                      c = f & 31;
                      if ((f & 63) >>> 0 >= 32) {
                        d = 0;
                        b = e >>> c | 0;
                      } else {
                        d = e >>> c | 0;
                        b = ((1 << c) - 1 & e) << 32 - c | b >>> c;
                      }
                      i = b;
                      g = f + g | 0;
                      c = g << 4;
                      b = J[c + 6968 >> 2];
                      f = c + 6960 | 0;
                      e: {
                        if ((b | 0) != (f | 0)) {
                          e = dc(b, h, a);
                          if (e) {
                            break a;
                          }
                          e = J[b + 4 >> 2];
                          J[e + 8 >> 2] = J[b + 8 >> 2];
                          J[J[b + 8 >> 2] + 4 >> 2] = e;
                          J[b + 8 >> 2] = f;
                          e = c + 6964 | 0;
                          J[b + 4 >> 2] = J[e >> 2];
                          J[e >> 2] = b;
                          J[J[b + 4 >> 2] + 8 >> 2] = b;
                          g = g + 1 | 0;
                          b = (d & 1) << 31 | i >>> 1;
                          d = d >>> 1 | 0;
                          break e;
                        }
                        j = J[1999];
                        f = g & 63;
                        b = f;
                        e = b & 31;
                        if (b >>> 0 >= 32) {
                          b = 0;
                          c = -1 >>> e | 0;
                        } else {
                          b = -1 >>> e | 0;
                          c = b | (1 << e) - 1 << 32 - e;
                        }
                        c = c & -2;
                        e = f & 31;
                        if (f >>> 0 >= 32) {
                          b = c << e;
                          c = 0;
                        } else {
                          b = (1 << e) - 1 & c >>> 32 - e | b << e;
                          c = c << e;
                        }
                        k = c;
                        e = b;
                        f = 0 - g & 63;
                        c = f;
                        b = c & 31;
                        if (c >>> 0 >= 32) {
                          b = -1 << b;
                          c = 0;
                        } else {
                          c = -1 << b;
                          b = c | (1 << b) - 1 & -1 >>> 32 - b;
                        }
                        l = c & -2;
                        c = f & 31;
                        if (f >>> 0 >= 32) {
                          f = 0;
                          b = b >>> c | 0;
                        } else {
                          f = b >>> c | 0;
                          b = ((1 << c) - 1 & b) << 32 - c | l >>> c;
                        }
                        b = b | k;
                        Ea = e | f;
                        J[1998] = J[1998] & b;
                        J[1999] = Ea & j;
                        b = i ^ 1;
                      }
                      if (b | d) {
                        continue;
                      }
                      break;
                    }
                    f = J[1999];
                    e = J[1998];
                  }
                  f: {
                    if (e | f) {
                      d = S(f);
                      c = 63 - ((d | 0) == 32 ? S(e) + 32 | 0 : d) | 0;
                      b = c << 4;
                      d = J[b + 6968 >> 2];
                      g: {
                        if (!f & e >>> 0 < 1073741824) {
                          break g;
                        }
                        g = 99;
                        b = b + 6960 | 0;
                        if ((b | 0) == (d | 0)) {
                          break g;
                        }
                        while (1) {
                          if (!g) {
                            break g;
                          }
                          e = dc(d, h, a);
                          if (e) {
                            break a;
                          }
                          g = g - 1 | 0;
                          d = J[d + 8 >> 2];
                          if ((b | 0) != (d | 0)) {
                            continue;
                          }
                          break;
                        }
                        d = b;
                      }
                      if (ec(a + 48 | 0)) {
                        break f;
                      }
                      if (!d) {
                        break b;
                      }
                      b = (c << 4) + 6960 | 0;
                      if ((b | 0) == (d | 0)) {
                        break b;
                      }
                      while (1) {
                        e = dc(d, h, a);
                        if (e) {
                          break a;
                        }
                        d = J[d + 8 >> 2];
                        if ((b | 0) != (d | 0)) {
                          continue;
                        }
                        break;
                      }
                      break b;
                    }
                    if (!ec(a + 48 | 0)) {
                      break b;
                    }
                  }
                  e = 0;
                  if (h - 1 & h) {
                    break a;
                  }
                  if (a >>> 0 <= 4294967239) {
                    continue;
                  }
                  break;
                }
                break a;
              }
              e = 0;
            }
            return e | 0;
          }
          function zc(a, b, c, d, e, f, g, h, i, j, k, l, m) {
            var n = 0,
              o = Q(0),
              p = Q(0),
              q = 0,
              r = Q(0),
              s = Q(0),
              t = 0,
              u = Q(0),
              v = 0,
              w = 0;
            if (j < Q(0) | i < Q(0)) {
              a = 0;
            } else {
              o = f;
              r = b;
              s = d;
              p = h;
              u = N[m + 24 >> 2];
              if (u != Q(0)) {
                t = +u;
                r = kb(+b, t, 0, 0);
                s = kb(+d, t, 0, 0);
                o = kb(+f, t, 0, 0);
                p = kb(+h, t, 0, 0);
              }
              m = 0;
              a: {
                if ((a | 0) != (e | 0)) {
                  break a;
                }
                n = r != r;
                m = Q(R(Q(o - r))) < Q(9999999747378752e-20);
                if (!(n | o != o)) {
                  break a;
                }
                m = 0;
                if (o == o) {
                  break a;
                }
                m = n;
              }
              b: {
                if ((c | 0) != (g | 0)) {
                  break b;
                }
                n = s != s;
                if (!(n | p != p)) {
                  v = Q(R(Q(p - s))) < Q(9999999747378752e-20);
                  break b;
                }
                if (p == p) {
                  break b;
                }
                v = n;
              }
              q = 1;
              n = 1;
              c: {
                if (m) {
                  break c;
                }
                b = Q(b - k);
                d: {
                  if (!a) {
                    a = b != b;
                    if (!(a | i != i)) {
                      m = 0;
                      if (!(Q(R(Q(b - i))) < Q(9999999747378752e-20))) {
                        break d;
                      }
                      break c;
                    }
                    m = 0;
                    if (i == i) {
                      break d;
                    }
                    if (a) {
                      break c;
                    }
                    break d;
                  }
                  m = (a | 0) == 2;
                  if ((a | 0) != 2 | (e | 0) != 1) {
                    break d;
                  }
                  if (b >= i) {
                    break c;
                  }
                  a = i != i;
                  e: {
                    if (!(a | b != b)) {
                      if (!(Q(R(Q(b - i))) < Q(9999999747378752e-20))) {
                        break e;
                      }
                      break c;
                    }
                    n = 0;
                    if (b == b) {
                      break c;
                    }
                    n = 1;
                    if (a) {
                      break c;
                    }
                  }
                  n = 0;
                  break c;
                }
                n = 0;
                a = i != i;
                if (a | !(b < f)) {
                  break c;
                }
                w = !m;
                m = b != b;
                if (w | (m | f != f | (e | 0) != 2)) {
                  break c;
                }
                n = 1;
                if (b >= i) {
                  break c;
                }
                n = 0;
                if (a | m) {
                  break c;
                }
                n = Q(R(Q(b - i))) < Q(9999999747378752e-20);
              }
              f: {
                if (v) {
                  break f;
                }
                b = Q(d - l);
                g: {
                  h: {
                    if (!c) {
                      c = b != b;
                      if (!(c | j != j)) {
                        a = 0;
                        if (!(Q(R(Q(b - j))) < Q(9999999747378752e-20))) {
                          break h;
                        }
                        break f;
                      }
                      a = 0;
                      if (j == j) {
                        break h;
                      }
                      if (c) {
                        break f;
                      }
                      break h;
                    }
                    a = (c | 0) == 2;
                    if ((c | 0) != 2 | (g | 0) != 1) {
                      break h;
                    }
                    if (b >= j) {
                      break f;
                    }
                    a = j != j;
                    if (!(a | b != b)) {
                      if (!(Q(R(Q(b - j))) < Q(9999999747378752e-20))) {
                        break g;
                      }
                      break f;
                    }
                    q = 0;
                    if (b == b) {
                      break f;
                    }
                    q = 1;
                    if (a) {
                      break f;
                    }
                    break g;
                  }
                  c = j != j;
                  if (c | !(b < h)) {
                    break g;
                  }
                  e = !a;
                  a = b != b;
                  if (e | (a | h != h | (g | 0) != 2)) {
                    break g;
                  }
                  if (b >= j) {
                    break f;
                  }
                  q = 0;
                  if (a | c) {
                    break f;
                  }
                  q = Q(R(Q(b - j))) < Q(9999999747378752e-20);
                  break f;
                }
                q = 0;
              }
              a = n & q;
            }
            return a;
          }
          function id(a, b) {
            var c = 0,
              d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0;
            I[a >> 1] = L[b >> 1];
            c = J[b + 8 >> 2];
            J[a + 4 >> 2] = J[b + 4 >> 2];
            J[a + 8 >> 2] = c;
            c = J[b + 16 >> 2];
            J[a + 12 >> 2] = J[b + 12 >> 2];
            J[a + 16 >> 2] = c;
            J[a + 20 >> 2] = J[b + 20 >> 2];
            a: {
              d = J[b + 24 >> 2];
              b: {
                if (!d) {
                  break b;
                }
                e = Pa(24);
                J[e + 8 >> 2] = 0;
                J[e >> 2] = 0;
                J[e + 4 >> 2] = 0;
                b = J[d + 4 >> 2];
                c = J[d >> 2];
                if ((b | 0) != (c | 0)) {
                  c = b - c | 0;
                  if ((c | 0) < 0) {
                    break a;
                  }
                  b = Pa(c);
                  J[e >> 2] = b;
                  J[e + 8 >> 2] = b + c;
                  c = J[d >> 2];
                  g = J[d + 4 >> 2];
                  if ((c | 0) != (g | 0)) {
                    while (1) {
                      J[b >> 2] = J[c >> 2];
                      b = b + 4 | 0;
                      c = c + 4 | 0;
                      if ((g | 0) != (c | 0)) {
                        continue;
                      }
                      break;
                    }
                  }
                  J[e + 4 >> 2] = b;
                }
                J[e + 12 >> 2] = 0;
                J[e + 16 >> 2] = 0;
                J[e + 20 >> 2] = 0;
                b = J[d + 16 >> 2];
                if (!b) {
                  break b;
                }
                hd(e + 12 | 0, b);
                g = J[d + 12 >> 2];
                c = J[d + 16 >> 2];
                d = J[e + 16 >> 2];
                b = ((c & 31) + d | 0) + (c & -32) | 0;
                J[e + 16 >> 2] = b;
                c: {
                  d: {
                    if (!d) {
                      f = b - 1 | 0;
                      break d;
                    }
                    f = b - 1 | 0;
                    if ((f ^ d - 1) >>> 0 < 32) {
                      break c;
                    }
                  }
                  J[J[e + 12 >> 2] + ((b >>> 0 >= 33 ? f >>> 5 | 0 : 0) << 2) >> 2] = 0;
                }
                b = J[e + 12 >> 2] + (d >>> 3 & 536870908) | 0;
                d = d & 31;
                if (!d) {
                  if ((c | 0) <= 0) {
                    break b;
                  }
                  d = (c | 0) / 32 | 0;
                  if (c + 31 >>> 0 >= 63) {
                    jb(b, g, d << 2);
                  }
                  c = c - (d << 5) | 0;
                  if ((c | 0) <= 0) {
                    break b;
                  }
                  f = b;
                  b = d << 2;
                  d = f + b | 0;
                  c = -1 >>> 32 - c | 0;
                  J[d >> 2] = J[d >> 2] & (c ^ -1) | c & J[b + g >> 2];
                  break b;
                }
                if ((c | 0) <= 0) {
                  break b;
                }
                i = -1 << d;
                f = 32 - d | 0;
                if ((c | 0) >= 32) {
                  k = i ^ -1;
                  h = J[b >> 2];
                  while (1) {
                    j = h & k;
                    h = J[g >> 2];
                    J[b >> 2] = j | h << d;
                    h = J[b + 4 >> 2] & i | h >>> f;
                    J[b + 4 >> 2] = h;
                    g = g + 4 | 0;
                    b = b + 4 | 0;
                    j = c >>> 0 > 63;
                    c = c - 32 | 0;
                    if (j) {
                      continue;
                    }
                    break;
                  }
                  if ((c | 0) <= 0) {
                    break b;
                  }
                }
                h = f;
                f = (c | 0) > (f | 0) ? f : c;
                g = J[g >> 2] & -1 >>> 32 - c;
                J[b >> 2] = J[b >> 2] & (-1 >>> h - f & i ^ -1) | g << d;
                c = c - f | 0;
                if ((c | 0) <= 0) {
                  break b;
                }
                b = (d + f >>> 3 & 536870908) + b | 0;
                J[b >> 2] = J[b >> 2] & (-1 >>> 32 - c ^ -1) | g >>> f;
              }
              b = J[a + 24 >> 2];
              J[a + 24 >> 2] = e;
              if (b) {
                Yb(b);
              }
              return;
            }
            ba();
            B();
          }
          function kb(a, b, c, d) {
            var e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0,
              n = 0;
            i = a * b;
            A(+i);
            j = v(1) | 0;
            g = v(0) | 0;
            h = j >>> 20 & 2047;
            a: {
              if ((h | 0) == 2047) {
                a = i * 1;
                a = a / a;
                break a;
              }
              e = g << 1;
              l = j << 1 | g >>> 31;
              if (!e & (l | 0) == 2145386496 | l >>> 0 < 2145386496) {
                a = !e & (l | 0) == 2145386496 ? i * 0 : i;
                break a;
              }
              b: {
                if (!h) {
                  h = 0;
                  f = g << 12;
                  e = j << 12 | g >>> 20;
                  if ((e | 0) > 0 | (e | 0) >= 0) {
                    while (1) {
                      h = h - 1 | 0;
                      e = e << 1 | f >>> 31;
                      f = f << 1;
                      if ((e | 0) > 0 | (e | 0) >= 0) {
                        continue;
                      }
                      break;
                    }
                  }
                  e = 1 - h | 0;
                  f = e & 31;
                  if ((e & 63) >>> 0 >= 32) {
                    e = g << f;
                    g = 0;
                  } else {
                    e = (1 << f) - 1 & g >>> 32 - f | j << f;
                    g = g << f;
                  }
                  break b;
                }
                e = j & 1048575 | 1048576;
              }
              f = g;
              if ((h | 0) > 1023) {
                while (1) {
                  c: {
                    g = e + -1048576 | 0;
                    if ((g | 0) < 0) {
                      break c;
                    }
                    e = g;
                    if (e | f) {
                      break c;
                    }
                    a = i * 0;
                    break a;
                  }
                  e = e << 1 | f >>> 31;
                  f = f << 1;
                  h = h - 1 | 0;
                  if ((h | 0) > 1023) {
                    continue;
                  }
                  break;
                }
                h = 1023;
              }
              d: {
                g = e + -1048576 | 0;
                if ((g | 0) < 0) {
                  break d;
                }
                e = g;
                if (e | f) {
                  break d;
                }
                a = i * 0;
                break a;
              }
              if ((e | 0) == 1048575 | e >>> 0 < 1048575) {
                while (1) {
                  h = h - 1 | 0;
                  g = e >>> 0 < 524288;
                  l = e << 1 | f >>> 31;
                  f = f << 1;
                  e = l;
                  if (g) {
                    continue;
                  }
                  break;
                }
              }
              n = j & -2147483648;
              l = e + -1048576 | h << 20;
              m = f;
              j = e;
              m = f;
              g = 1 - h | 0;
              f = g & 31;
              if ((g & 63) >>> 0 >= 32) {
                e = 0;
                g = j >>> f | 0;
              } else {
                e = j >>> f | 0;
                g = ((1 << f) - 1 & j) << 32 - f | m >>> f;
              }
              f = (h | 0) > 0;
              x(0, (f ? m : g) | 0);
              x(1, (f ? l : e) | n);
              a = +z();
            }
            k = a < 0 ? a + 1 : a;
            e = k != k;
            e: {
              if (!(e | !(R(k) < 1e-4))) {
                a = i - k;
                break e;
              }
              if (!(e | !(R(k + -1) < 1e-4))) {
                a = i - k + 1;
                break e;
              }
              a = i - k;
              if (c) {
                a = a + 1;
                break e;
              }
              if (d) {
                break e;
              }
              i = 0;
              f: {
                if (e) {
                  break f;
                }
                i = 1;
                if (k > 0.5) {
                  break f;
                }
                i = R(k + -0.5) < 1e-4 ? 1 : 0;
              }
              a = a + i;
            }
            if (a != a | b != b) {
              return Q(Z);
            }
            return Q(a / b);
          }
          function nc(a, b) {
            var c = 0,
              d = 0,
              e = 0;
            d = Da - 16 | 0;
            Da = d;
            J[a + 4 >> 2] = 0;
            J[a + 8 >> 2] = 0;
            H[a + 21 | 0] = 65;
            H[a + 22 | 0] = 16;
            J[a + 12 >> 2] = 0;
            J[a + 16 >> 2] = 0;
            J[a + 24 >> 2] = 0;
            J[a + 28 >> 2] = 262144;
            H[a + 23 | 0] = K[a + 23 | 0] & 224;
            H[a | 0] = K[a | 0] & 224 | 5;
            H[a + 20 | 0] = K[a + 20 | 0] & 128;
            $a(a + 32 | 0, 0, 78);
            I[a + 114 >> 1] = 0;
            I[a + 116 >> 1] = 0;
            I[a + 118 >> 1] = 0;
            I[a + 120 >> 1] = 0;
            I[a + 110 >> 1] = 4;
            I[a + 112 >> 1] = 4;
            I[a + 122 >> 1] = 0;
            I[a + 124 >> 1] = 0;
            J[a + 128 >> 2] = 0;
            J[a + 132 >> 2] = 0;
            J[a + 136 >> 2] = 0;
            J[a + 140 >> 2] = 0;
            J[a + 144 >> 2] = 0;
            J[a + 148 >> 2] = 0;
            J[a + 160 >> 2] = 0;
            J[a + 164 >> 2] = 0;
            J[a + 152 >> 2] = 0;
            J[a + 156 >> 2] = 2143289344;
            H[a + 168 | 0] = 0;
            $a(a + 172 | 0, 0, 196);
            e = a + 368 | 0;
            c = a + 176 | 0;
            while (1) {
              J[c + 16 >> 2] = -1082130432;
              J[c + 20 >> 2] = -1082130432;
              J[c + 8 >> 2] = 1;
              J[c + 12 >> 2] = 1;
              J[c >> 2] = -1082130432;
              J[c + 4 >> 2] = -1082130432;
              c = c + 24 | 0;
              if ((e | 0) != (c | 0)) {
                continue;
              }
              break;
            }
            J[a + 368 >> 2] = -1082130432;
            J[a + 372 >> 2] = -1082130432;
            J[a + 384 >> 2] = -1082130432;
            J[a + 388 >> 2] = -1082130432;
            J[a + 376 >> 2] = 1;
            J[a + 380 >> 2] = 1;
            J[a + 412 >> 2] = 2143289344;
            J[a + 416 >> 2] = 2143289344;
            J[a + 404 >> 2] = 2143289344;
            J[a + 408 >> 2] = 2143289344;
            J[a + 396 >> 2] = 2143289344;
            J[a + 400 >> 2] = 2143289344;
            c = a + 392 | 0;
            H[c | 0] = K[c | 0] & 248;
            $a(a + 420 | 0, 0, 88);
            H[a + 524 | 0] = 0;
            J[a + 520 >> 2] = 2143289344;
            H[a + 516 | 0] = 0;
            J[a + 512 >> 2] = 2143289344;
            J[a + 508 >> 2] = b;
            if (b) {
              if (H[b + 8 | 0] & 1) {
                H[a + 20 | 0] = K[a + 20 | 0] & 243 | 8;
                b = (K[a + 21 | 0] | K[a + 22 | 0] << 8) & 65520 | 4;
                H[a + 21 | 0] = b;
                H[a + 22 | 0] = b >>> 8;
              }
              Da = d + 16 | 0;
              return a;
            }
            J[d >> 2] = 3839;
            pc(d);
            Va();
            B();
          }
          function ab(a, b, c) {
            var d = 0,
              e = 0,
              f = 0;
            if (c >>> 0 >= 512) {
              wa(a | 0, b | 0, c | 0);
              return a;
            }
            e = a + c | 0;
            a: {
              if (!((a ^ b) & 3)) {
                b: {
                  if (!(a & 3)) {
                    c = a;
                    break b;
                  }
                  if (!c) {
                    c = a;
                    break b;
                  }
                  c = a;
                  while (1) {
                    H[c | 0] = K[b | 0];
                    b = b + 1 | 0;
                    c = c + 1 | 0;
                    if (!(c & 3)) {
                      break b;
                    }
                    if (c >>> 0 < e >>> 0) {
                      continue;
                    }
                    break;
                  }
                }
                d = e & -4;
                c: {
                  if (d >>> 0 < 64) {
                    break c;
                  }
                  f = d + -64 | 0;
                  if (f >>> 0 < c >>> 0) {
                    break c;
                  }
                  while (1) {
                    J[c >> 2] = J[b >> 2];
                    J[c + 4 >> 2] = J[b + 4 >> 2];
                    J[c + 8 >> 2] = J[b + 8 >> 2];
                    J[c + 12 >> 2] = J[b + 12 >> 2];
                    J[c + 16 >> 2] = J[b + 16 >> 2];
                    J[c + 20 >> 2] = J[b + 20 >> 2];
                    J[c + 24 >> 2] = J[b + 24 >> 2];
                    J[c + 28 >> 2] = J[b + 28 >> 2];
                    J[c + 32 >> 2] = J[b + 32 >> 2];
                    J[c + 36 >> 2] = J[b + 36 >> 2];
                    J[c + 40 >> 2] = J[b + 40 >> 2];
                    J[c + 44 >> 2] = J[b + 44 >> 2];
                    J[c + 48 >> 2] = J[b + 48 >> 2];
                    J[c + 52 >> 2] = J[b + 52 >> 2];
                    J[c + 56 >> 2] = J[b + 56 >> 2];
                    J[c + 60 >> 2] = J[b + 60 >> 2];
                    b = b - -64 | 0;
                    c = c - -64 | 0;
                    if (f >>> 0 >= c >>> 0) {
                      continue;
                    }
                    break;
                  }
                }
                if (c >>> 0 >= d >>> 0) {
                  break a;
                }
                while (1) {
                  J[c >> 2] = J[b >> 2];
                  b = b + 4 | 0;
                  c = c + 4 | 0;
                  if (d >>> 0 > c >>> 0) {
                    continue;
                  }
                  break;
                }
                break a;
              }
              if (e >>> 0 < 4) {
                c = a;
                break a;
              }
              d = e - 4 | 0;
              if (d >>> 0 < a >>> 0) {
                c = a;
                break a;
              }
              c = a;
              while (1) {
                H[c | 0] = K[b | 0];
                H[c + 1 | 0] = K[b + 1 | 0];
                H[c + 2 | 0] = K[b + 2 | 0];
                H[c + 3 | 0] = K[b + 3 | 0];
                b = b + 4 | 0;
                c = c + 4 | 0;
                if (d >>> 0 >= c >>> 0) {
                  continue;
                }
                break;
              }
            }
            if (c >>> 0 < e >>> 0) {
              while (1) {
                H[c | 0] = K[b | 0];
                b = b + 1 | 0;
                c = c + 1 | 0;
                if ((e | 0) != (c | 0)) {
                  continue;
                }
                break;
              }
            }
            return a;
          }
          function rg(a) {
            a = a | 0;
            var b = 0,
              c = 0,
              d = 0,
              e = 0;
            d = Da - 560 | 0;
            Da = d;
            b = J[a + 4 >> 2];
            J[a + 4 >> 2] = 0;
            if (b) {
              Fa[J[J[b >> 2] + 4 >> 2]](b);
            }
            b = J[a + 8 >> 2];
            J[a + 8 >> 2] = 0;
            if (b) {
              Fa[J[J[b >> 2] + 4 >> 2]](b);
            }
            a: {
              a = J[a >> 2];
              if (J[a + 496 >> 2] == J[a + 500 >> 2]) {
                if (J[a + 492 >> 2]) {
                  break a;
                }
                b = nc(d + 32 | 0, J[a + 508 >> 2]);
                c = J[b + 4 >> 2];
                J[a >> 2] = J[b >> 2];
                J[a + 4 >> 2] = c;
                J[a + 16 >> 2] = J[b + 16 >> 2];
                c = J[b + 12 >> 2];
                J[a + 8 >> 2] = J[b + 8 >> 2];
                J[a + 12 >> 2] = c;
                ab(a + 20 | 0, b + 20 | 0, 104);
                c = J[b + 144 >> 2];
                J[a + 140 >> 2] = J[b + 140 >> 2];
                J[a + 144 >> 2] = c;
                c = J[b + 136 >> 2];
                J[a + 132 >> 2] = J[b + 132 >> 2];
                J[a + 136 >> 2] = c;
                c = J[b + 128 >> 2];
                J[a + 124 >> 2] = J[b + 124 >> 2];
                J[a + 128 >> 2] = c;
                e = J[b + 148 >> 2];
                J[b + 148 >> 2] = 0;
                c = J[a + 148 >> 2];
                J[a + 148 >> 2] = e;
                if (c) {
                  Yb(c);
                }
                ab(a + 152 | 0, b + 152 | 0, 344);
                c = J[a + 496 >> 2];
                if (c) {
                  J[a + 500 >> 2] = c;
                  Ua(c);
                }
                J[a + 496 >> 2] = J[b + 496 >> 2];
                J[a + 500 >> 2] = J[b + 500 >> 2];
                J[a + 504 >> 2] = J[b + 504 >> 2];
                J[b + 504 >> 2] = 0;
                J[b + 496 >> 2] = 0;
                J[b + 500 >> 2] = 0;
                c = J[b + 520 >> 2];
                J[a + 516 >> 2] = J[b + 516 >> 2];
                J[a + 520 >> 2] = c;
                c = J[b + 512 >> 2];
                J[a + 508 >> 2] = J[b + 508 >> 2];
                J[a + 512 >> 2] = c;
                J[a + 524 >> 2] = J[b + 524 >> 2];
                a = J[b + 148 >> 2];
                J[b + 148 >> 2] = 0;
                if (a) {
                  Yb(a);
                }
                Da = d + 560 | 0;
                return;
              }
              J[d + 16 >> 2] = 4176;
              bb(a, 5, 5304, d + 16 | 0);
              Va();
              B();
            }
            J[d >> 2] = 2582;
            bb(a, 5, 5304, d);
            Va();
            B();
          }
          function Nb(a) {
            var b = 0,
              c = 0,
              d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0;
            a: {
              f = J[a + 496 >> 2];
              g = J[a + 500 >> 2];
              if ((f | 0) != (g | 0)) {
                while (1) {
                  d = J[f >> 2];
                  if (J[d + 492 >> 2] != (a | 0)) {
                    b = J[J[a + 508 >> 2] >> 2];
                    b: {
                      if (b) {
                        b = Fa[b | 0](d, a, h) | 0;
                        if (b) {
                          break b;
                        }
                      }
                      b = Pa(528);
                      J[b + 16 >> 2] = J[d + 16 >> 2];
                      c = J[d + 12 >> 2];
                      J[b + 8 >> 2] = J[d + 8 >> 2];
                      J[b + 12 >> 2] = c;
                      c = J[d + 4 >> 2];
                      J[b >> 2] = J[d >> 2];
                      J[b + 4 >> 2] = c;
                      ab(b + 20 | 0, d + 20 | 0, 104);
                      J[b + 128 >> 2] = 0;
                      J[b + 132 >> 2] = 0;
                      c = b + 124 | 0;
                      I[c >> 1] = 0;
                      J[b + 136 >> 2] = 0;
                      J[b + 140 >> 2] = 0;
                      J[b + 144 >> 2] = 0;
                      J[b + 148 >> 2] = 0;
                      id(c, d + 124 | 0);
                      ab(b + 152 | 0, d + 152 | 0, 344);
                      J[b + 504 >> 2] = 0;
                      J[b + 496 >> 2] = 0;
                      J[b + 500 >> 2] = 0;
                      c = J[d + 500 >> 2];
                      e = J[d + 496 >> 2];
                      if ((c | 0) != (e | 0)) {
                        e = c - e | 0;
                        if ((e | 0) < 0) {
                          break a;
                        }
                        c = Pa(e);
                        J[b + 500 >> 2] = c;
                        J[b + 496 >> 2] = c;
                        J[b + 504 >> 2] = c + e;
                        e = J[d + 496 >> 2];
                        i = J[d + 500 >> 2];
                        if ((e | 0) != (i | 0)) {
                          while (1) {
                            J[c >> 2] = J[e >> 2];
                            c = c + 4 | 0;
                            e = e + 4 | 0;
                            if ((i | 0) != (e | 0)) {
                              continue;
                            }
                            break;
                          }
                        }
                        J[b + 500 >> 2] = c;
                      }
                      c = J[d + 512 >> 2];
                      J[b + 508 >> 2] = J[d + 508 >> 2];
                      J[b + 512 >> 2] = c;
                      J[b + 524 >> 2] = J[d + 524 >> 2];
                      c = J[d + 520 >> 2];
                      J[b + 516 >> 2] = J[d + 516 >> 2];
                      J[b + 520 >> 2] = c;
                      J[b + 492 >> 2] = 0;
                    }
                    J[f >> 2] = b;
                    J[b + 492 >> 2] = a;
                  }
                  h = h + 1 | 0;
                  f = f + 4 | 0;
                  if ((g | 0) != (f | 0)) {
                    continue;
                  }
                  break;
                }
              }
              return;
            }
            ba();
            B();
          }
          function ec(a) {
            var b = 0,
              c = 0,
              d = 0,
              e = 0,
              f = 0;
            d = J[1664];
            b = a + 7 & -8;
            c = d + b | 0;
            a: {
              b: {
                if (c >>> 0 <= d >>> 0 ? b : 0) {
                  break b;
                }
                if (c >>> 0 > Ga() << 16 >>> 0) {
                  if (!(va(c | 0) | 0)) {
                    break b;
                  }
                }
                J[1664] = c;
                break a;
              }
              J[2035] = 48;
              d = -1;
            }
            if ((d | 0) != -1) {
              b = a + d | 0;
              c = b - 16 | 0;
              J[c + 12 >> 2] = 16;
              J[c >> 2] = 16;
              a = J[1996];
              if (a) {
                f = J[a + 8 >> 2];
              } else {
                f = 0;
              }
              c: {
                d: {
                  if ((f | 0) == (d | 0)) {
                    e = d - (J[d - 4 >> 2] & -2) | 0;
                    f = J[e - 4 >> 2];
                    J[a + 8 >> 2] = b;
                    a = e - (f & -2) | 0;
                    b = -16;
                    if (!(H[(a + J[a >> 2] | 0) - 4 | 0] & 1)) {
                      break d;
                    }
                    b = J[a + 4 >> 2];
                    J[b + 8 >> 2] = J[a + 8 >> 2];
                    J[J[a + 8 >> 2] + 4 >> 2] = b;
                    c = c - a | 0;
                    J[a >> 2] = c;
                    break c;
                  }
                  J[d + 12 >> 2] = 16;
                  J[d >> 2] = 16;
                  J[d + 8 >> 2] = b;
                  J[d + 4 >> 2] = a;
                  J[1996] = d;
                  b = 16;
                }
                a = b + d | 0;
                c = c - a | 0;
                J[a >> 2] = c;
              }
              J[((c & -4) + a | 0) - 4 >> 2] = c | 1;
              b = J[a >> 2] - 8 | 0;
              e: {
                if (b >>> 0 <= 127) {
                  c = (b >>> 3 | 0) - 1 | 0;
                  break e;
                }
                e = S(b);
                c = ((b >>> 29 - e ^ 4) - (e << 2) | 0) + 110 | 0;
                if (b >>> 0 <= 4095) {
                  break e;
                }
                c = ((b >>> 30 - e ^ 2) - (e << 1) | 0) + 71 | 0;
                c = c >>> 0 >= 63 ? 63 : c;
              }
              b = c << 4;
              J[a + 4 >> 2] = b + 6960;
              b = b + 6968 | 0;
              J[a + 8 >> 2] = J[b >> 2];
              J[b >> 2] = a;
              J[J[a + 8 >> 2] + 4 >> 2] = a;
              b = J[1998];
              e = J[1999];
              a = c & 31;
              if ((c & 63) >>> 0 >= 32) {
                c = 1 << a;
                f = 0;
              } else {
                f = 1 << a;
                c = f - 1 & 1 >>> 32 - a;
              }
              J[1998] = f | b;
              J[1999] = c | e;
            }
            return (d | 0) != -1;
          }
          function _b(a) {
            var b = 0,
              c = 0,
              d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0;
            d = Da - 336 | 0;
            Da = d;
            e = J[a + 496 >> 2];
            g = J[a + 500 >> 2];
            if ((e | 0) != (g | 0)) {
              h = d + 268 | 0;
              i = d + 216 | 0;
              j = d + 24 | 0;
              k = d + 20 | 0;
              f = d + 8 | 0;
              while (1) {
                c = J[e >> 2];
                if ((K[c + 23 | 0] << 16 & 786432) == 524288) {
                  b = $a(d, 0, 332);
                  J[b + 4 >> 2] = 2143289344;
                  H[f + 8 | 0] = 0;
                  J[f >> 2] = 0;
                  J[f + 4 >> 2] = 0;
                  $a(k, 0, 196);
                  a = j;
                  while (1) {
                    J[a + 16 >> 2] = -1082130432;
                    J[a + 20 >> 2] = -1082130432;
                    J[a + 8 >> 2] = 1;
                    J[a + 12 >> 2] = 1;
                    J[a >> 2] = -1082130432;
                    J[a + 4 >> 2] = -1082130432;
                    a = a + 24 | 0;
                    if ((i | 0) != (a | 0)) {
                      continue;
                    }
                    break;
                  }
                  J[b + 232 >> 2] = -1082130432;
                  J[b + 236 >> 2] = -1082130432;
                  J[b + 224 >> 2] = 1;
                  J[b + 228 >> 2] = 1;
                  J[b + 216 >> 2] = -1082130432;
                  J[b + 220 >> 2] = -1082130432;
                  J[b + 260 >> 2] = 2143289344;
                  J[b + 264 >> 2] = 2143289344;
                  J[b + 252 >> 2] = 2143289344;
                  J[b + 256 >> 2] = 2143289344;
                  J[b + 244 >> 2] = 2143289344;
                  J[b + 248 >> 2] = 2143289344;
                  H[b + 240 | 0] = K[b + 240 | 0] & 248;
                  $a(h, 0, 64);
                  ab(c + 152 | 0, b, 332);
                  J[c + 396 >> 2] = 0;
                  J[c + 400 >> 2] = 0;
                  J[c + 412 >> 2] = 0;
                  J[c + 416 >> 2] = 0;
                  b = K[c | 0];
                  a = b | 1;
                  H[c | 0] = b & 4 ? a & 251 : a;
                  Nb(c);
                  _b(c);
                }
                e = e + 4 | 0;
                if ((g | 0) != (e | 0)) {
                  continue;
                }
                break;
              }
            }
            Da = d + 336 | 0;
          }
          function De(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0,
              d = 0,
              e = 0,
              f = 0;
            e = Da - 336 | 0;
            Da = e;
            a = J[a >> 2];
            a: {
              if (J[a + 500 >> 2] == J[a + 496 >> 2]) {
                break a;
              }
              d = J[b >> 2];
              b = J[d + 492 >> 2];
              if (!nd(a, d)) {
                break a;
              }
              if ((a | 0) == (b | 0)) {
                c = $a(e, 0, 332);
                H[c + 16 | 0] = 0;
                J[c + 8 >> 2] = 0;
                J[c + 12 >> 2] = 0;
                J[c + 4 >> 2] = 2143289344;
                $a(c + 20 | 0, 0, 196);
                f = c + 216 | 0;
                b = c + 24 | 0;
                while (1) {
                  J[b + 16 >> 2] = -1082130432;
                  J[b + 20 >> 2] = -1082130432;
                  J[b + 8 >> 2] = 1;
                  J[b + 12 >> 2] = 1;
                  J[b >> 2] = -1082130432;
                  J[b + 4 >> 2] = -1082130432;
                  b = b + 24 | 0;
                  if ((f | 0) != (b | 0)) {
                    continue;
                  }
                  break;
                }
                J[c + 232 >> 2] = -1082130432;
                J[c + 236 >> 2] = -1082130432;
                J[c + 224 >> 2] = 1;
                J[c + 228 >> 2] = 1;
                J[c + 216 >> 2] = -1082130432;
                J[c + 220 >> 2] = -1082130432;
                J[c + 260 >> 2] = 2143289344;
                J[c + 264 >> 2] = 2143289344;
                J[c + 252 >> 2] = 2143289344;
                J[c + 256 >> 2] = 2143289344;
                J[c + 244 >> 2] = 2143289344;
                J[c + 248 >> 2] = 2143289344;
                H[c + 240 | 0] = K[c + 240 | 0] & 248;
                $a(c + 268 | 0, 0, 64);
                ab(d + 152 | 0, c, 332);
                J[d + 492 >> 2] = 0;
              }
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
            Da = e + 336 | 0;
          }
          function pe(a, b, c, d) {
            a = a | 0;
            b = +b;
            c = +c;
            d = d | 0;
            var e = Q(0),
              f = 0,
              g = Q(0),
              h = Q(0),
              i = Q(0),
              j = 0,
              k = 0,
              l = 0,
              m = 0;
            k = Da + -64 | 0;
            Da = k;
            a = J[a >> 2];
            $a(k + 8 | 0, 0, 56);
            J[2e3] = J[2e3] + 1;
            wc(a);
            f = K[a + 20 | 0] & 3;
            f = f ? f : d & 255 ? d : 1;
            j = a + 20 | 0;
            e = Q(b);
            g = N[a + 512 >> 2];
            a: {
              b: {
                c: {
                  switch (K[a + 516 | 0] - 1 | 0) {
                    case 1:
                      g = Q(Q(g * e) * Q(0.009999999776482582));
                      break;
                    case 0:
                      break c;
                    default:
                      break b;
                  }
                }
                if (!(g >= Q(0))) {
                  break b;
                }
                g = Q(gb(a, f & 255, 0, e, e) + Q(Ta(j, 2, 1, e) + Sa(j, 2, 1, e)));
                break a;
              }
              g = cb(j, f & 255, 0, e, e);
              if (g == g) {
                l = 2;
                g = cb(j, f & 255, 0, e, e);
                break a;
              }
              l = e != e;
              g = e;
            }
            i = Q(c);
            h = N[a + 520 >> 2];
            d: {
              e: {
                f: {
                  switch (K[a + 524 | 0] - 1 | 0) {
                    case 1:
                      h = Q(Q(h * i) * Q(0.009999999776482582));
                      break;
                    case 0:
                      break f;
                    default:
                      break e;
                  }
                }
                if (!(h >= Q(0))) {
                  break e;
                }
                h = Q(gb(a, f & 255, 1, i, e) + Q(Ta(j, 0, 1, e) + Sa(j, 0, 1, e)));
                break d;
              }
              f = f & 255;
              h = cb(j, f, 1, i, e);
              if (h == h) {
                m = 2;
                h = cb(j, f, 1, i, e);
                break d;
              }
              m = i != i;
              h = i;
            }
            if (ub(a, g, h, d & 255, l, m, e, i, 1, 0, k + 8 | 0, 0, J[2e3])) {
              uc(a, K[a + 392 | 0] & 3, e, i);
              rc(a, 0, 0);
            }
            Da = k - -64 | 0;
          }
          function Eg(a, b, c) {
            var d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0;
            a: {
              b: {
                c: {
                  d: {
                    e: {
                      f: {
                        g: {
                          h: {
                            i: {
                              j: {
                                if (b) {
                                  if (!c) {
                                    break j;
                                  }
                                  break i;
                                }
                                a = (a >>> 0) / (c >>> 0) | 0;
                                Ea = 0;
                                break a;
                              }
                              if (!a) {
                                break h;
                              }
                              break g;
                            }
                            if (!(c - 1 & c)) {
                              break f;
                            }
                            f = (S(c) + 33 | 0) - S(b) | 0;
                            g = 0 - f | 0;
                            break d;
                          }
                          a = (b >>> 0) / 0 | 0;
                          Ea = 0;
                          break a;
                        }
                        d = 32 - S(b) | 0;
                        if (d >>> 0 < 31) {
                          break e;
                        }
                        break c;
                      }
                      if ((c | 0) == 1) {
                        break b;
                      }
                      f = c ? 31 - S(c - 1 ^ c) | 0 : 32;
                      c = f & 31;
                      if ((f & 63) >>> 0 >= 32) {
                        a = b >>> c | 0;
                      } else {
                        d = b >>> c | 0;
                        a = ((1 << c) - 1 & b) << 32 - c | a >>> c;
                      }
                      Ea = d;
                      break a;
                    }
                    f = d + 1 | 0;
                    g = 63 - d | 0;
                  }
                  d = f & 63;
                  e = d & 31;
                  if (d >>> 0 >= 32) {
                    d = 0;
                    h = b >>> e | 0;
                  } else {
                    d = b >>> e | 0;
                    h = ((1 << e) - 1 & b) << 32 - e | a >>> e;
                  }
                  g = g & 63;
                  e = g & 31;
                  if (g >>> 0 >= 32) {
                    b = a << e;
                    a = 0;
                  } else {
                    b = (1 << e) - 1 & a >>> 32 - e | b << e;
                    a = a << e;
                  }
                  if (f) {
                    g = c - 1 | 0;
                    l = (g | 0) == -1 ? -1 : 0;
                    while (1) {
                      i = d << 1 | h >>> 31;
                      d = h << 1 | b >>> 31;
                      e = l - (i + (d >>> 0 > g >>> 0) | 0) >> 31;
                      j = c & e;
                      h = d - j | 0;
                      d = i - (d >>> 0 < j >>> 0) | 0;
                      b = b << 1 | a >>> 31;
                      a = k | a << 1;
                      k = e & 1;
                      f = f - 1 | 0;
                      if (f) {
                        continue;
                      }
                      break;
                    }
                  }
                  Ea = b << 1 | a >>> 31;
                  a = k | a << 1;
                  break a;
                }
                a = 0;
                b = 0;
              }
              Ea = b;
            }
            return a;
          }
          function vc(a) {
            var b = 0,
              c = 0,
              d = 0;
            b = Da - 336 | 0;
            Da = b;
            b = $a(b, 0, 332);
            H[b + 16 | 0] = 0;
            J[b + 8 >> 2] = 0;
            J[b + 12 >> 2] = 0;
            J[b + 4 >> 2] = 2143289344;
            $a(b + 20 | 0, 0, 196);
            d = b + 216 | 0;
            c = b + 24 | 0;
            while (1) {
              J[c + 16 >> 2] = -1082130432;
              J[c + 20 >> 2] = -1082130432;
              J[c + 8 >> 2] = 1;
              J[c + 12 >> 2] = 1;
              J[c >> 2] = -1082130432;
              J[c + 4 >> 2] = -1082130432;
              c = c + 24 | 0;
              if ((d | 0) != (c | 0)) {
                continue;
              }
              break;
            }
            J[b + 232 >> 2] = -1082130432;
            J[b + 236 >> 2] = -1082130432;
            J[b + 224 >> 2] = 1;
            J[b + 228 >> 2] = 1;
            J[b + 216 >> 2] = -1082130432;
            J[b + 220 >> 2] = -1082130432;
            J[b + 260 >> 2] = 2143289344;
            J[b + 264 >> 2] = 2143289344;
            J[b + 252 >> 2] = 2143289344;
            J[b + 256 >> 2] = 2143289344;
            J[b + 244 >> 2] = 2143289344;
            J[b + 248 >> 2] = 2143289344;
            H[b + 240 | 0] = K[b + 240 | 0] & 248;
            $a(b + 268 | 0, 0, 64);
            ab(a + 152 | 0, b, 332);
            J[a + 396 >> 2] = 0;
            J[a + 400 >> 2] = 0;
            J[a + 412 >> 2] = 0;
            J[a + 416 >> 2] = 0;
            H[a | 0] = K[a | 0] | 1;
            Nb(a);
            c = J[a + 496 >> 2];
            a = J[a + 500 >> 2];
            if ((c | 0) != (a | 0)) {
              while (1) {
                vc(J[c >> 2]);
                c = c + 4 | 0;
                if ((a | 0) != (c | 0)) {
                  continue;
                }
                break;
              }
            }
            Da = b + 336 | 0;
          }
          function jd(a) {
            a = a | 0;
            var b = 0,
              c = 0,
              d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0;
            if (a) {
              g = Da - 32 | 0;
              Da = g;
              b = J[a >> 2];
              d = J[b + 492 >> 2];
              if (d) {
                nd(d, b);
                J[b + 492 >> 2] = 0;
              }
              d = J[b + 496 >> 2];
              c = J[b + 500 >> 2];
              if ((d | 0) != (c | 0)) {
                c = c - d >> 2;
                e = c >>> 0 <= 1 ? 1 : c;
                c = 0;
                while (1) {
                  J[J[(c << 2) + d >> 2] + 492 >> 2] = 0;
                  c = c + 1 | 0;
                  if ((e | 0) != (c | 0)) {
                    continue;
                  }
                  break;
                }
              }
              J[b + 500 >> 2] = d;
              c = b + 504 | 0;
              a: {
                if (J[c >> 2] == (d | 0)) {
                  break a;
                }
                c = Ib(g + 8 | 0, 0, 0, c);
                e = J[b + 496 >> 2];
                f = J[b + 500 >> 2] - e | 0;
                d = J[c + 4 >> 2] - f | 0;
                f = jb(d, e, f);
                e = J[b + 496 >> 2];
                J[b + 496 >> 2] = f;
                J[c + 4 >> 2] = e;
                f = J[b + 500 >> 2];
                J[b + 500 >> 2] = J[c + 8 >> 2];
                J[c + 8 >> 2] = f;
                h = J[b + 504 >> 2];
                J[b + 504 >> 2] = J[c + 12 >> 2];
                J[c >> 2] = e;
                J[c + 12 >> 2] = h;
                if ((e | 0) != (f | 0)) {
                  J[c + 8 >> 2] = f + ((e - f | 0) + 3 & -4);
                }
                if (!e) {
                  break a;
                }
                Ua(e);
                d = J[b + 496 >> 2];
              }
              if (d) {
                J[b + 500 >> 2] = d;
                Ua(d);
              }
              d = J[b + 148 >> 2];
              J[b + 148 >> 2] = 0;
              if (d) {
                Yb(d);
              }
              Ua(b);
              b = J[a + 8 >> 2];
              J[a + 8 >> 2] = 0;
              if (b) {
                Fa[J[J[b >> 2] + 4 >> 2]](b);
              }
              b = J[a + 4 >> 2];
              J[a + 4 >> 2] = 0;
              if (b) {
                Fa[J[J[b >> 2] + 4 >> 2]](b);
              }
              Da = g + 32 | 0;
              Ua(a);
            }
          }
          function dc(a, b, c) {
            var d = 0,
              e = 0,
              f = 0,
              g = 0;
            d = a + 4 | 0;
            e = (d + b | 0) - 1 & 0 - b;
            b = J[a >> 2];
            if (e + c >>> 0 <= (b + a | 0) - 4 >>> 0) {
              f = J[a + 4 >> 2];
              J[f + 8 >> 2] = J[a + 8 >> 2];
              J[J[a + 8 >> 2] + 4 >> 2] = f;
              if ((d | 0) != (e | 0)) {
                e = e - d | 0;
                f = a - (J[a - 4 >> 2] & -2) | 0;
                d = e + J[f >> 2] | 0;
                J[f >> 2] = d;
                J[(f + (d & -4) | 0) - 4 >> 2] = d;
                a = a + e | 0;
                b = b - e | 0;
                J[a >> 2] = b;
              }
              a: {
                if (c + 24 >>> 0 <= b >>> 0) {
                  d = (a + c | 0) + 8 | 0;
                  b = (b - c | 0) - 8 | 0;
                  J[d >> 2] = b;
                  J[(d + (b & -4) | 0) - 4 >> 2] = b | 1;
                  e = J[d >> 2] - 8 | 0;
                  b: {
                    if (e >>> 0 <= 127) {
                      b = (e >>> 3 | 0) - 1 | 0;
                      break b;
                    }
                    f = S(e);
                    b = ((e >>> 29 - f ^ 4) - (f << 2) | 0) + 110 | 0;
                    if (e >>> 0 <= 4095) {
                      break b;
                    }
                    b = ((e >>> 30 - f ^ 2) - (f << 1) | 0) + 71 | 0;
                    b = b >>> 0 >= 63 ? 63 : b;
                  }
                  e = b << 4;
                  J[d + 4 >> 2] = e + 6960;
                  e = e + 6968 | 0;
                  J[d + 8 >> 2] = J[e >> 2];
                  J[e >> 2] = d;
                  J[J[d + 8 >> 2] + 4 >> 2] = d;
                  e = J[1998];
                  f = J[1999];
                  d = b & 31;
                  if ((b & 63) >>> 0 >= 32) {
                    b = 1 << d;
                    d = 0;
                  } else {
                    g = 1 << d;
                    b = g - 1 & 1 >>> 32 - d;
                    d = g;
                  }
                  J[1998] = d | e;
                  J[1999] = b | f;
                  b = c + 8 | 0;
                  J[a >> 2] = b;
                  J[((b & -4) + a | 0) - 4 >> 2] = b;
                  break a;
                }
                J[(a + b | 0) - 4 >> 2] = b;
              }
              a = a + 4 | 0;
            } else {
              a = 0;
            }
            return a;
          }
          function Tc() {
            Ba(8100, 4104);
            Aa(8101, 3130, 1, 1, 0);
            da(8102, 2733, 1, -128, 127);
            da(8103, 2726, 1, -128, 127);
            da(8104, 2724, 1, 0, 255);
            da(8105, 1300, 2, -32768, 32767);
            da(8106, 1291, 2, 0, 65535);
            da(8107, 1329, 4, -2147483648, 2147483647);
            da(8108, 1320, 4, 0, -1);
            da(8109, 3669, 4, -2147483648, 2147483647);
            da(8110, 3660, 4, 0, -1);
            Kc(8111, 2367, -2147483648, 2147483647);
            Kc(8112, 2366, 0, -1);
            ma(8113, 2360, 4);
            ma(8114, 4052, 8);
            na(8115, 3713);
            na(8116, 4857);
            ia(8117, 4, 3700);
            ia(8118, 2, 3725);
            ia(8119, 4, 3740);
            za(8120, 3135);
            aa(8121, 0, 4788);
            aa(8122, 0, 4890);
            aa(8123, 1, 4818);
            aa(8124, 2, 4420);
            aa(8125, 3, 4451);
            aa(8126, 4, 4491);
            aa(8127, 5, 4520);
            aa(8128, 4, 4927);
            aa(8129, 5, 4957);
            aa(8122, 0, 4622);
            aa(8123, 1, 4589);
            aa(8124, 2, 4688);
            aa(8125, 3, 4654);
            aa(8126, 4, 4755);
            aa(8127, 5, 4721);
            aa(8130, 6, 4558);
            aa(8131, 7, 4996);
          }
          function jb(a, b, c) {
            var d = 0,
              e = 0;
            a: {
              if ((a | 0) == (b | 0)) {
                break a;
              }
              e = a + c | 0;
              if (b - e >>> 0 <= 0 - (c << 1) >>> 0) {
                return ab(a, b, c);
              }
              d = (a ^ b) & 3;
              b: {
                c: {
                  if (a >>> 0 < b >>> 0) {
                    if (d) {
                      d = a;
                      break b;
                    }
                    if (!(a & 3)) {
                      d = a;
                      break c;
                    }
                    d = a;
                    while (1) {
                      if (!c) {
                        break a;
                      }
                      H[d | 0] = K[b | 0];
                      b = b + 1 | 0;
                      c = c - 1 | 0;
                      d = d + 1 | 0;
                      if (d & 3) {
                        continue;
                      }
                      break;
                    }
                    break c;
                  }
                  d: {
                    if (d) {
                      break d;
                    }
                    if (e & 3) {
                      while (1) {
                        if (!c) {
                          break a;
                        }
                        c = c - 1 | 0;
                        d = c + a | 0;
                        H[d | 0] = K[b + c | 0];
                        if (d & 3) {
                          continue;
                        }
                        break;
                      }
                    }
                    if (c >>> 0 <= 3) {
                      break d;
                    }
                    while (1) {
                      c = c - 4 | 0;
                      J[c + a >> 2] = J[b + c >> 2];
                      if (c >>> 0 > 3) {
                        continue;
                      }
                      break;
                    }
                  }
                  if (!c) {
                    break a;
                  }
                  while (1) {
                    c = c - 1 | 0;
                    H[c + a | 0] = K[b + c | 0];
                    if (c) {
                      continue;
                    }
                    break;
                  }
                  break a;
                }
                if (c >>> 0 <= 3) {
                  break b;
                }
                while (1) {
                  J[d >> 2] = J[b >> 2];
                  b = b + 4 | 0;
                  d = d + 4 | 0;
                  c = c - 4 | 0;
                  if (c >>> 0 > 3) {
                    continue;
                  }
                  break;
                }
              }
              if (!c) {
                break a;
              }
              while (1) {
                H[d | 0] = K[b | 0];
                d = d + 1 | 0;
                b = b + 1 | 0;
                c = c - 1 | 0;
                if (c) {
                  continue;
                }
                break;
              }
            }
            return a;
          }
          function Nc(a, b, c, d) {
            a: {
              switch (b - 9 | 0) {
                case 0:
                  b = J[c >> 2];
                  J[c >> 2] = b + 4;
                  J[a >> 2] = J[b >> 2];
                  return;
                case 6:
                  b = J[c >> 2];
                  J[c >> 2] = b + 4;
                  b = I[b >> 1];
                  J[a >> 2] = b;
                  J[a + 4 >> 2] = b >> 31;
                  return;
                case 7:
                  b = J[c >> 2];
                  J[c >> 2] = b + 4;
                  J[a >> 2] = L[b >> 1];
                  J[a + 4 >> 2] = 0;
                  return;
                case 8:
                  b = J[c >> 2];
                  J[c >> 2] = b + 4;
                  b = H[b | 0];
                  J[a >> 2] = b;
                  J[a + 4 >> 2] = b >> 31;
                  return;
                case 9:
                  b = J[c >> 2];
                  J[c >> 2] = b + 4;
                  J[a >> 2] = K[b | 0];
                  J[a + 4 >> 2] = 0;
                  return;
                case 16:
                  b = J[c >> 2] + 7 & -8;
                  J[c >> 2] = b + 8;
                  O[a >> 3] = O[b >> 3];
                  return;
                case 17:
                  Fa[d | 0](a, c);
                default:
                  return;
                case 1:
                case 4:
                case 14:
                  b = J[c >> 2];
                  J[c >> 2] = b + 4;
                  b = J[b >> 2];
                  J[a >> 2] = b;
                  J[a + 4 >> 2] = b >> 31;
                  return;
                case 2:
                case 5:
                case 11:
                case 15:
                  b = J[c >> 2];
                  J[c >> 2] = b + 4;
                  J[a >> 2] = J[b >> 2];
                  J[a + 4 >> 2] = 0;
                  return;
                case 3:
                case 10:
                case 12:
                case 13:
                  break a;
              }
            }
            b = J[c >> 2] + 7 & -8;
            J[c >> 2] = b + 8;
            c = J[b + 4 >> 2];
            J[a >> 2] = J[b >> 2];
            J[a + 4 >> 2] = c;
          }
          function rc(a, b, c) {
            var d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = Q(0),
              m = 0,
              n = Q(0),
              o = Q(0),
              p = 0,
              q = 0,
              r = Q(0);
            f = +N[a + 424 >> 2];
            i = f + c;
            c = +N[a + 420 >> 2];
            j = c + b;
            l = N[J[a + 508 >> 2] + 24 >> 2];
            if (l != Q(0)) {
              n = N[a + 400 >> 2];
              o = N[a + 396 >> 2];
              g = +l;
              m = K[a | 0] & 16;
              d = m >>> 4 | 0;
              q = a, r = kb(c, g, 0, d), N[q + 420 >> 2] = r;
              q = a, r = kb(f, g, 0, d), N[q + 424 >> 2] = r;
              f = +n;
              b = +o;
              c = g * b;
              e = qc(c);
              d = c != c;
              a: {
                if (!(e != e | d)) {
                  k = R(e - c) < 1e-4;
                  break a;
                }
                if (e == e) {
                  break a;
                }
                k = d;
              }
              c = j + b;
              b = i + f;
              p = k ^ 1;
              f = g * f;
              e = qc(f);
              d = f != f;
              b: {
                if (!(e != e | d)) {
                  h = R(e - f) < 1e-4;
                  break b;
                }
                h = 0;
                if (e == e) {
                  break b;
                }
                h = d;
              }
              d = (m | 0) != 0;
              q = a, r = Q(kb(c, g, d & p, d & k) - kb(j, g, 0, d)), N[q + 396 >> 2] = r;
              q = a, r = Q(kb(b, g, d & (h ^ 1), d & h) - kb(i, g, 0, d)), N[q + 400 >> 2] = r;
            }
            d = J[a + 496 >> 2];
            a = J[a + 500 >> 2];
            if ((d | 0) != (a | 0)) {
              while (1) {
                rc(J[d >> 2], j, i);
                d = d + 4 | 0;
                if ((a | 0) != (d | 0)) {
                  continue;
                }
                break;
              }
            }
          }
          function Mb(a) {
            var b = 0,
              c = 0,
              d = 0,
              e = 0,
              f = Q(0),
              g = 0;
            d = Da - 32 | 0;
            Da = d;
            b = J[a + 12 >> 2];
            a: {
              if (b) {
                f = Q(Fa[b | 0](a, N[a + 404 >> 2], N[a + 408 >> 2]));
                if (f == f) {
                  break a;
                }
                J[d >> 2] = 4362;
                bb(a, 5, 5304, d);
                Va();
                B();
              }
              ib(d + 16 | 0, a);
              b = J[d + 20 >> 2];
              c = J[d + 16 >> 2];
              b: {
                if (!(b | c)) {
                  break b;
                }
                c: {
                  while (1) {
                    g = J[c + 500 >> 2];
                    c = J[c + 496 >> 2];
                    if (g - c >> 2 >>> 0 > b >>> 0) {
                      b = J[c + (b << 2) >> 2];
                      if (J[b + 484 >> 2]) {
                        break b;
                      }
                      c = K[b + 21 | 0] | K[b + 22 | 0] << 8 | K[b + 23 | 0] << 16;
                      if ((c & 12288) != 8192) {
                        c = c >>> 8 & 15;
                        if (!c) {
                          c = K[a + 21 | 0] >>> 4 | 0;
                        }
                        if (K[b | 0] & 2 | (K[a + 20 | 0] & 8 ? (c | 0) == 5 : 0)) {
                          break c;
                        }
                        e = e ? e : b;
                      }
                      db(d + 16 | 0);
                      b = J[d + 20 >> 2];
                      c = J[d + 16 >> 2];
                      if (b | c) {
                        continue;
                      }
                      break b;
                    }
                    break;
                  }
                  ba();
                  B();
                }
                e = b;
              }
              b = J[d + 24 >> 2];
              if (b) {
                while (1) {
                  c = J[b >> 2];
                  Ua(b);
                  b = c;
                  if (b) {
                    continue;
                  }
                  break;
                }
              }
              if (!e) {
                f = N[a + 408 >> 2];
                break a;
              }
              f = Q(Mb(e) + N[e + 424 >> 2]);
            }
            Da = d + 32 | 0;
            return f;
          }
          function $a(a, b, c) {
            var d = 0,
              e = 0,
              f = 0,
              g = 0;
            a: {
              if (!c) {
                break a;
              }
              H[a | 0] = b;
              d = a + c | 0;
              H[d - 1 | 0] = b;
              if (c >>> 0 < 3) {
                break a;
              }
              H[a + 2 | 0] = b;
              H[a + 1 | 0] = b;
              H[d - 3 | 0] = b;
              H[d - 2 | 0] = b;
              if (c >>> 0 < 7) {
                break a;
              }
              H[a + 3 | 0] = b;
              H[d - 4 | 0] = b;
              if (c >>> 0 < 9) {
                break a;
              }
              d = 0 - a & 3;
              e = d + a | 0;
              b = P(b & 255, 16843009);
              J[e >> 2] = b;
              d = c - d & -4;
              c = d + e | 0;
              J[c - 4 >> 2] = b;
              if (d >>> 0 < 9) {
                break a;
              }
              J[e + 8 >> 2] = b;
              J[e + 4 >> 2] = b;
              J[c - 8 >> 2] = b;
              J[c - 12 >> 2] = b;
              if (d >>> 0 < 25) {
                break a;
              }
              J[e + 24 >> 2] = b;
              J[e + 20 >> 2] = b;
              J[e + 16 >> 2] = b;
              J[e + 12 >> 2] = b;
              J[c - 16 >> 2] = b;
              J[c - 20 >> 2] = b;
              J[c - 24 >> 2] = b;
              J[c - 28 >> 2] = b;
              g = e & 4 | 24;
              c = d - g | 0;
              if (c >>> 0 < 32) {
                break a;
              }
              d = Dg(b, 0, 1, 1);
              f = Ea;
              b = e + g | 0;
              while (1) {
                J[b + 24 >> 2] = d;
                J[b + 28 >> 2] = f;
                J[b + 16 >> 2] = d;
                J[b + 20 >> 2] = f;
                J[b + 8 >> 2] = d;
                J[b + 12 >> 2] = f;
                J[b >> 2] = d;
                J[b + 4 >> 2] = f;
                b = b + 32 | 0;
                c = c - 32 | 0;
                if (c >>> 0 > 31) {
                  continue;
                }
                break;
              }
            }
            return a;
          }
          function Ua(a) {
            a = a | 0;
            var b = 0,
              c = 0,
              d = 0,
              e = 0,
              f = 0;
            if (a) {
              b = a - 4 | 0;
              e = J[b >> 2];
              c = e;
              d = b;
              f = J[a - 8 >> 2];
              a = f & -2;
              if ((a | 0) != (f | 0)) {
                d = b - a | 0;
                c = J[d + 4 >> 2];
                J[c + 8 >> 2] = J[d + 8 >> 2];
                J[J[d + 8 >> 2] + 4 >> 2] = c;
                c = a + e | 0;
              }
              a = b + e | 0;
              b = J[a >> 2];
              if ((b | 0) != J[(a + b | 0) - 4 >> 2]) {
                e = J[a + 4 >> 2];
                J[e + 8 >> 2] = J[a + 8 >> 2];
                J[J[a + 8 >> 2] + 4 >> 2] = e;
                c = b + c | 0;
              }
              J[d >> 2] = c;
              J[((c & -4) + d | 0) - 4 >> 2] = c | 1;
              b = J[d >> 2] - 8 | 0;
              a: {
                if (b >>> 0 <= 127) {
                  a = (b >>> 3 | 0) - 1 | 0;
                  break a;
                }
                c = S(b);
                a = ((b >>> 29 - c ^ 4) - (c << 2) | 0) + 110 | 0;
                if (b >>> 0 <= 4095) {
                  break a;
                }
                a = ((b >>> 30 - c ^ 2) - (c << 1) | 0) + 71 | 0;
                a = a >>> 0 >= 63 ? 63 : a;
              }
              b = a << 4;
              J[d + 4 >> 2] = b + 6960;
              b = b + 6968 | 0;
              J[d + 8 >> 2] = J[b >> 2];
              J[b >> 2] = d;
              J[J[d + 8 >> 2] + 4 >> 2] = d;
              b = J[1998];
              c = J[1999];
              d = a & 31;
              if ((a & 63) >>> 0 >= 32) {
                a = 1 << d;
                e = 0;
              } else {
                e = 1 << d;
                a = e - 1 & 1 >>> 32 - d;
              }
              J[1998] = e | b;
              J[1999] = a | c;
            }
          }
          function xd(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0;
            d = Da - 32 | 0;
            Da = d;
            e = J[a + 28 >> 2];
            J[d + 16 >> 2] = e;
            f = J[a + 20 >> 2];
            J[d + 28 >> 2] = c;
            J[d + 24 >> 2] = b;
            b = f - e | 0;
            J[d + 20 >> 2] = b;
            f = b + c | 0;
            i = 2;
            b = d + 16 | 0;
            a: {
              while (1) {
                b: {
                  c: {
                    d: {
                      if (!Sc(xa(J[a + 60 >> 2], b | 0, i | 0, d + 12 | 0) | 0)) {
                        g = J[d + 12 >> 2];
                        if ((g | 0) == (f | 0)) {
                          break d;
                        }
                        if ((g | 0) >= 0) {
                          break c;
                        }
                        break b;
                      }
                      if ((f | 0) != -1) {
                        break b;
                      }
                    }
                    b = J[a + 44 >> 2];
                    J[a + 28 >> 2] = b;
                    J[a + 20 >> 2] = b;
                    J[a + 16 >> 2] = b + J[a + 48 >> 2];
                    a = c;
                    break a;
                  }
                  h = J[b + 4 >> 2];
                  j = h >>> 0 < g >>> 0;
                  e = (j << 3) + b | 0;
                  h = g - (j ? h : 0) | 0;
                  J[e >> 2] = h + J[e >> 2];
                  b = (j ? 12 : 4) + b | 0;
                  J[b >> 2] = J[b >> 2] - h;
                  f = f - g | 0;
                  i = i - j | 0;
                  b = e;
                  continue;
                }
                break;
              }
              J[a + 28 >> 2] = 0;
              J[a + 16 >> 2] = 0;
              J[a + 20 >> 2] = 0;
              J[a >> 2] = J[a >> 2] | 32;
              a = 0;
              if ((i | 0) == 2) {
                break a;
              }
              a = c - J[b + 4 >> 2] | 0;
            }
            Da = d + 32 | 0;
            return a | 0;
          }
          function Qc(a, b, c, d, e) {
            var f = 0,
              g = 0,
              h = 0,
              i = 0;
            f = Da - 208 | 0;
            Da = f;
            J[f + 204 >> 2] = c;
            c = f + 160 | 0;
            $a(c, 0, 40);
            J[f + 200 >> 2] = J[f + 204 >> 2];
            a: {
              if ((Pc(0, b, f + 200 | 0, f + 80 | 0, c, d, e) | 0) < 0) {
                e = -1;
                break a;
              }
              i = J[a + 76 >> 2] >= 0;
              g = J[a >> 2];
              if (J[a + 72 >> 2] <= 0) {
                J[a >> 2] = g & -33;
              }
              b: {
                c: {
                  d: {
                    if (!J[a + 48 >> 2]) {
                      J[a + 48 >> 2] = 80;
                      J[a + 28 >> 2] = 0;
                      J[a + 16 >> 2] = 0;
                      J[a + 20 >> 2] = 0;
                      h = J[a + 44 >> 2];
                      J[a + 44 >> 2] = f;
                      break d;
                    }
                    if (J[a + 16 >> 2]) {
                      break c;
                    }
                  }
                  c = -1;
                  if (gd(a)) {
                    break b;
                  }
                }
                c = Pc(a, b, f + 200 | 0, f + 80 | 0, f + 160 | 0, d, e);
              }
              if (h) {
                Fa[J[a + 36 >> 2]](a, 0, 0) | 0;
                J[a + 48 >> 2] = 0;
                J[a + 44 >> 2] = h;
                J[a + 28 >> 2] = 0;
                b = J[a + 20 >> 2];
                J[a + 16 >> 2] = 0;
                J[a + 20 >> 2] = 0;
                c = b ? c : -1;
              }
              b = a;
              a = J[a >> 2];
              J[b >> 2] = a | g & 32;
              e = a & 32 ? -1 : c;
              if (!i) {
                break a;
              }
            }
            Da = f + 208 | 0;
            return e;
          }
          function Ad(a) {
            a = a | 0;
            var b = 0,
              c = 0,
              d = 0,
              e = 0,
              f = 0;
            c = Da - 96 | 0;
            Da = c;
            J[c >> 2] = a;
            d = Da - 16 | 0;
            Da = d;
            J[d + 12 >> 2] = c;
            a = Da - 144 | 0;
            Da = a;
            a = ab(a, 6512, 144);
            f = c + 16 | 0;
            b = f;
            J[a + 44 >> 2] = b;
            J[a + 20 >> 2] = b;
            e = -2 - b | 0;
            e = e >>> 0 >= 2147483647 ? 2147483647 : e;
            J[a + 48 >> 2] = e;
            b = b + e | 0;
            J[a + 28 >> 2] = b;
            J[a + 16 >> 2] = b;
            Qc(a, 2795, c, 0, 0);
            if (e) {
              b = J[a + 20 >> 2];
              H[b - ((b | 0) == J[a + 16 >> 2]) | 0] = 0;
            }
            Da = a + 144 | 0;
            Da = d + 16 | 0;
            a = f;
            a: {
              if (a & 3) {
                while (1) {
                  if (!K[a | 0]) {
                    break a;
                  }
                  a = a + 1 | 0;
                  if (a & 3) {
                    continue;
                  }
                  break;
                }
              }
              while (1) {
                b = a;
                a = a + 4 | 0;
                d = J[b >> 2];
                if (!((d ^ -1) & d - 16843009 & -2139062144)) {
                  continue;
                }
                break;
              }
              while (1) {
                a = b;
                b = a + 1 | 0;
                if (K[a | 0]) {
                  continue;
                }
                break;
              }
            }
            a = (a - f | 0) + 1 | 0;
            b = cc(a);
            if (b) {
              a = ab(b, f, a);
            } else {
              a = 0;
            }
            Da = c + 96 | 0;
            return a | 0;
          }
          function wc(a) {
            var b = 0,
              c = 0,
              d = 0,
              e = 0,
              f = Q(0),
              g = Q(0),
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = 0,
              m = 0;
            b = Da - 32 | 0;
            Da = b;
            H[b + 30 | 0] = 0;
            H[b + 31 | 0] = 1;
            j = a + 110 | 0;
            k = a + 512 | 0;
            l = a + 114 | 0;
            m = a + 118 | 0;
            d = a + 124 | 0;
            a = 0;
            while (1) {
              h = K[(b + 30 | 0) + e | 0];
              c = h << 1;
              e = c + m | 0;
              Xa(b + 16 | 0, d, L[e >> 1]);
              a: {
                b: {
                  if (!K[b + 20 | 0]) {
                    break b;
                  }
                  Xa(b + 8 | 0, d, L[e >> 1]);
                  Xa(b, d, L[c + l >> 1]);
                  if (K[b + 12 | 0] != K[b + 4 | 0]) {
                    break b;
                  }
                  g = N[b + 8 >> 2];
                  i = g != g;
                  f = N[b >> 2];
                  c: {
                    if (!(i | f != f)) {
                      if (Q(R(Q(g - f))) < Q(9999999747378752e-20)) {
                        break c;
                      }
                      break b;
                    }
                    if (!i | f == f) {
                      break b;
                    }
                  }
                  Xa(b + 16 | 0, d, L[e >> 1]);
                  break a;
                }
                Xa(b + 16 | 0, d, L[c + j >> 1]);
              }
              c = (h << 3) + k | 0;
              H[c + 4 | 0] = K[b + 20 | 0];
              J[c >> 2] = J[b + 16 >> 2];
              e = 1;
              c = a;
              a = 1;
              if (!c) {
                continue;
              }
              break;
            }
            Da = b + 32 | 0;
          }
          function Xa(a, b, c) {
            var d = Q(0),
              e = 0,
              f = 0,
              g = 0,
              h = Q(0);
            h = Q(Z);
            a: {
              b: {
                c: {
                  d: {
                    e = c & 7;
                    switch (e | 0) {
                      case 0:
                        break b;
                      case 4:
                        break d;
                      default:
                        break c;
                    }
                  }
                  f = 3;
                  break b;
                }
                if ((c & 65527) == 5) {
                  f = 4;
                  break b;
                }
                g = (c & 65520) >>> 4 | 0;
                if (!((e | 0) != 5 | (g | 0) != 1)) {
                  f = 5;
                  break b;
                }
                if (!((e | 0) != 5 | (g | 0) != 2)) {
                  f = 6;
                  break b;
                }
                e = c & 7;
                if (e - 1 >>> 0 >= 2) {
                  break a;
                }
                e: {
                  if (c & 8) {
                    d = (x(2, mc(b, g)), C());
                    break e;
                  }
                  b = g & 2047;
                  d = Q((c << 16 >> 16 < 0 ? 0 - b | 0 : b) | 0);
                }
                if ((e | 0) == 1) {
                  if (d != d) {
                    break b;
                  }
                  b = d == Q(_) | d == Q(-_);
                  h = b ? Q(Z) : d;
                  f = !b;
                  break b;
                }
                if (d != d) {
                  break b;
                }
                b = d == Q(_) | d == Q(-_);
                f = b ? 0 : 2;
                h = b ? Q(Z) : d;
              }
              H[a + 4 | 0] = f;
              N[a >> 2] = h;
              return;
            }
            ha(2084, 3569, 101, 3932);
            B();
          }
          function uc(a, b, c, d) {
            var e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0,
              k = 0,
              l = Q(0),
              m = 0,
              n = Q(0);
            i = a + 20 | 0;
            e = 3;
            f = K[a + 20 | 0] >>> 2 & 3;
            g = J[a + 492 >> 2] ? b : 1;
            a: {
              b: {
                c: {
                  if ((g | 0) == 2) {
                    d: {
                      switch (f - 2 | 0) {
                        case 0:
                          break a;
                        case 1:
                          break d;
                        default:
                          break c;
                      }
                    }
                    e = 2;
                    break a;
                  }
                  e = 2;
                  h = 0;
                  if (f >>> 0 > 1) {
                    break b;
                  }
                }
                h = e;
              }
              e = f;
            }
            j = e >>> 0 < 2;
            l = md(a, e, g, j ? d : c);
            d = md(a, h, g, j ? c : d);
            k = a + 420 | 0;
            g = ((b | 0) == 2) << 1;
            m = k + ((j ? 1 : g) << 2) | 0, n = Q(l + Ta(i, e, b, c)), N[m >> 2] = n;
            f = ((b | 0) != 2) << 1;
            m = k + ((j ? 3 : f) << 2) | 0, n = Q(l + Sa(i, e, b, c)), N[m >> 2] = n;
            a = h >>> 1 | 0;
            m = k + ((a ? g : 1) << 2) | 0, n = Q(d + Ta(i, h, b, c)), N[m >> 2] = n;
            m = k + ((a ? f : 3) << 2) | 0, n = Q(d + Sa(i, h, b, c)), N[m >> 2] = n;
          }
          function Ac(a) {
            var b = 0,
              c = 0,
              d = 0;
            c = Da - 16 | 0;
            Da = c;
            a: {
              b: {
                if (!(K[a + 20 | 0] & 8)) {
                  break b;
                }
                d = 1;
                if (((K[a + 21 | 0] | K[a + 22 | 0] << 8) & 240) == 80) {
                  break b;
                }
                ib(c, a);
                a = J[c + 4 >> 2];
                b = J[c >> 2];
                c: {
                  if (!b) {
                    d = 0;
                    if (!a) {
                      break c;
                    }
                  }
                  while (1) {
                    d = J[b + 500 >> 2];
                    b = J[b + 496 >> 2];
                    if (d - b >> 2 >>> 0 <= a >>> 0) {
                      break a;
                    }
                    a = J[b + (a << 2) >> 2];
                    a = K[a + 21 | 0] | K[a + 22 | 0] << 8 | K[a + 23 | 0] << 16;
                    d = (a & 12288) != 8192 & (a & 3840) == 1280;
                    if (d) {
                      break c;
                    }
                    db(c);
                    a = J[c + 4 >> 2];
                    b = J[c >> 2];
                    if (a | b) {
                      continue;
                    }
                    break;
                  }
                }
                a = J[c + 8 >> 2];
                if (!a) {
                  break b;
                }
                while (1) {
                  b = J[a >> 2];
                  Ua(a);
                  a = b;
                  if (a) {
                    continue;
                  }
                  break;
                }
              }
              Da = c + 16 | 0;
              return d;
            }
            ba();
            B();
          }
          function kf(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = +c;
            var d = Q(0),
              e = 0,
              f = 0,
              g = Q(0),
              h = 0,
              i = 0;
            f = Da - 16 | 0;
            Da = f;
            a = J[a >> 2];
            d = Q(c);
            a: {
              if (d != d) {
                d = Q(Z);
                e = 0;
                break a;
              }
              e = d == Q(_) | d == Q(-_);
              d = e ? Q(Z) : d;
              e = !e;
            }
            h = a + 124 | 0;
            b = (((b & 255) << 1) + a | 0) + 86 | 0;
            Ra(f + 8 | 0, h, L[b >> 1]);
            g = N[f + 8 >> 2];
            b: {
              c: {
                if (g != d) {
                  if (g == g) {
                    break c;
                  }
                  i = d != d;
                } else {
                  i = 1;
                }
                if (!i) {
                  break c;
                }
                if ((e | 0) == K[f + 12 | 0]) {
                  break b;
                }
              }
              Kb(h, b, d, e);
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break b;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
            Da = f + 16 | 0;
          }
          function Ra(a, b, c) {
            var d = Q(0),
              e = Q(0),
              f = 0,
              g = 0,
              h = 0;
            e = Q(Z);
            a: {
              b: {
                c: {
                  d: {
                    f = c & 7;
                    switch (f | 0) {
                      case 0:
                        break b;
                      case 4:
                        break d;
                      default:
                        break c;
                    }
                  }
                  g = 3;
                  break b;
                }
                if (f - 1 >>> 0 >= 2) {
                  break a;
                }
                h = (c & 65520) >>> 4 | 0;
                e: {
                  if (c & 8) {
                    d = (x(2, mc(b, h)), C());
                    break e;
                  }
                  b = h & 2047;
                  d = Q((c << 16 >> 16 < 0 ? 0 - b | 0 : b) | 0);
                }
                if ((f | 0) == 1) {
                  if (d != d) {
                    break b;
                  }
                  b = d == Q(_) | d == Q(-_);
                  e = b ? Q(Z) : d;
                  g = !b;
                  break b;
                }
                if (d != d) {
                  break b;
                }
                b = d == Q(_) | d == Q(-_);
                g = b ? 0 : 2;
                e = b ? Q(Z) : d;
              }
              H[a + 4 | 0] = g;
              N[a >> 2] = e;
              return;
            }
            ha(2084, 3569, 76, 3241);
            B();
          }
          function Bd(a, b, c, d, e, f) {
            a = a | 0;
            b = b | 0;
            c = Q(c);
            d = d | 0;
            e = Q(e);
            f = f | 0;
            var g = 0,
              h = 0,
              i = 0;
            g = Da - 48 | 0;
            Da = g;
            i = J[b + 8 >> 2];
            a: {
              if (H[8068] & 1) {
                b = J[2016];
                break a;
              }
              b = la(5, 5488) | 0;
              H[8068] = 1;
              J[2016] = b;
            }
            J[g + 40 >> 2] = f;
            N[g + 32 >> 2] = e;
            J[g + 24 >> 2] = d;
            N[g + 16 >> 2] = c;
            h = +ra(b | 0, i | 0, 3959, g + 12 | 0, g + 16 | 0);
            b: {
              if (h < 4294967296 & h >= 0) {
                b = ~~h >>> 0;
                break b;
              }
              b = 0;
            }
            d = J[g + 12 >> 2];
            f = J[b + 4 >> 2];
            J[a >> 2] = J[b >> 2];
            J[a + 4 >> 2] = f;
            f = J[b + 12 >> 2];
            J[a + 8 >> 2] = J[b + 8 >> 2];
            J[a + 12 >> 2] = f;
            qa(d | 0);
            Da = g + 48 | 0;
          }
          function $d(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0,
              e = 0,
              f = 0,
              g = 0;
            d = Da - 32 | 0;
            Da = d;
            e = J[b >> 2];
            if (e >>> 0 < 2147483632) {
              a: {
                b: {
                  if (e >>> 0 >= 11) {
                    f = (e | 15) + 1 | 0;
                    g = Pa(f);
                    J[d + 16 >> 2] = f | -2147483648;
                    J[d + 8 >> 2] = g;
                    J[d + 12 >> 2] = e;
                    f = e + g | 0;
                    break b;
                  }
                  H[d + 19 | 0] = e;
                  g = d + 8 | 0;
                  f = g + e | 0;
                  if (!e) {
                    break a;
                  }
                }
                ab(g, b + 4 | 0, e);
              }
              H[f | 0] = 0;
              J[d >> 2] = c;
              Fa[a | 0](d + 24 | 0, d + 8 | 0, d);
              Ca(J[d + 24 >> 2]);
              a = J[d + 24 >> 2];
              fa(a | 0);
              fa(J[d >> 2]);
              if (H[d + 19 | 0] < 0) {
                Ua(J[d + 8 >> 2]);
              }
              Da = d + 32 | 0;
              return a | 0;
            }
            ba();
            B();
          }
          function ob(a, b, c) {
            var d = 0,
              e = Q(0),
              f = Q(0),
              g = 0,
              h = 0;
            d = Da - 16 | 0;
            Da = d;
            g = 1;
            h = a + 124 | 0;
            b = ((b << 1) + a | 0) + 114 | 0;
            Xa(d + 8 | 0, h, L[b >> 1]);
            e = N[c >> 2];
            f = N[d + 8 >> 2];
            a: {
              b: {
                if (e != f) {
                  if (f == f) {
                    c = K[c + 4 | 0];
                    break b;
                  }
                  g = e != e;
                }
                c = K[c + 4 | 0];
                if (!g) {
                  break b;
                }
                if (K[d + 12 | 0] == (c & 255)) {
                  break a;
                }
              }
              Ub(h, b, e, c);
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
            Da = d + 16 | 0;
          }
          function nb(a, b, c) {
            var d = 0,
              e = Q(0),
              f = Q(0),
              g = 0,
              h = 0;
            d = Da - 16 | 0;
            Da = d;
            g = 1;
            h = a + 124 | 0;
            b = ((b << 1) + a | 0) + 118 | 0;
            Xa(d + 8 | 0, h, L[b >> 1]);
            e = N[c >> 2];
            f = N[d + 8 >> 2];
            a: {
              b: {
                if (e != f) {
                  if (f == f) {
                    c = K[c + 4 | 0];
                    break b;
                  }
                  g = e != e;
                }
                c = K[c + 4 | 0];
                if (!g) {
                  break b;
                }
                if (K[d + 12 | 0] == (c & 255)) {
                  break a;
                }
              }
              Ub(h, b, e, c);
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
            Da = d + 16 | 0;
          }
          function hb(a, b, c) {
            var d = 0,
              e = Q(0),
              f = Q(0),
              g = 0,
              h = 0;
            d = Da - 16 | 0;
            Da = d;
            g = 1;
            h = a + 124 | 0;
            b = ((b << 1) + a | 0) + 110 | 0;
            Xa(d + 8 | 0, h, L[b >> 1]);
            e = N[c >> 2];
            f = N[d + 8 >> 2];
            a: {
              b: {
                if (e != f) {
                  if (f == f) {
                    c = K[c + 4 | 0];
                    break b;
                  }
                  g = e != e;
                }
                c = K[c + 4 | 0];
                if (!g) {
                  break b;
                }
                if (K[d + 12 | 0] == (c & 255)) {
                  break a;
                }
              }
              Ub(h, b, e, c);
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
            Da = d + 16 | 0;
          }
          function Ic(a, b, c) {
            var d = 0,
              e = Q(0),
              f = Q(0),
              g = 0,
              h = 0;
            d = Da - 16 | 0;
            Da = d;
            g = 1;
            h = a + 124 | 0;
            b = ((b << 1) + a | 0) + 104 | 0;
            Ra(d + 8 | 0, h, L[b >> 1]);
            e = N[c >> 2];
            f = N[d + 8 >> 2];
            a: {
              b: {
                if (e != f) {
                  if (f == f) {
                    c = K[c + 4 | 0];
                    break b;
                  }
                  g = e != e;
                }
                c = K[c + 4 | 0];
                if (!g) {
                  break b;
                }
                if (K[d + 12 | 0] == (c & 255)) {
                  break a;
                }
              }
              Kb(h, b, e, c);
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
            Da = d + 16 | 0;
          }
          function gc(a, b, c) {
            var d = 0,
              e = Q(0),
              f = Q(0),
              g = 0,
              h = 0;
            d = Da - 16 | 0;
            Da = d;
            g = 1;
            h = a + 124 | 0;
            b = ((b << 1) + a | 0) + 50 | 0;
            Ra(d + 8 | 0, h, L[b >> 1]);
            e = N[c >> 2];
            f = N[d + 8 >> 2];
            a: {
              b: {
                if (e != f) {
                  if (f == f) {
                    c = K[c + 4 | 0];
                    break b;
                  }
                  g = e != e;
                }
                c = K[c + 4 | 0];
                if (!g) {
                  break b;
                }
                if (K[d + 12 | 0] == (c & 255)) {
                  break a;
                }
              }
              Kb(h, b, e, c);
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
            Da = d + 16 | 0;
          }
          function fc(a, b, c) {
            var d = 0,
              e = Q(0),
              f = Q(0),
              g = 0,
              h = 0;
            d = Da - 16 | 0;
            Da = d;
            g = 1;
            h = a + 124 | 0;
            b = ((b << 1) + a | 0) + 32 | 0;
            Ra(d + 8 | 0, h, L[b >> 1]);
            e = N[c >> 2];
            f = N[d + 8 >> 2];
            a: {
              b: {
                if (e != f) {
                  if (f == f) {
                    c = K[c + 4 | 0];
                    break b;
                  }
                  g = e != e;
                }
                c = K[c + 4 | 0];
                if (!g) {
                  break b;
                }
                if (K[d + 12 | 0] == (c & 255)) {
                  break a;
                }
              }
              Kb(h, b, e, c);
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
            Da = d + 16 | 0;
          }
          function Jc(a, b, c) {
            var d = 0,
              e = Q(0),
              f = Q(0),
              g = 0,
              h = 0;
            d = Da - 16 | 0;
            Da = d;
            g = 1;
            h = a + 124 | 0;
            b = ((b << 1) + a | 0) + 68 | 0;
            Ra(d + 8 | 0, h, L[b >> 1]);
            e = N[c >> 2];
            f = N[d + 8 >> 2];
            a: {
              b: {
                if (e != f) {
                  if (f == f) {
                    c = K[c + 4 | 0];
                    break b;
                  }
                  g = e != e;
                }
                c = K[c + 4 | 0];
                if (!g) {
                  break b;
                }
                if (K[d + 12 | 0] == (c & 255)) {
                  break a;
                }
              }
              Kb(h, b, e, c);
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
            Da = d + 16 | 0;
          }
          function Fb(a, b) {
            var c = 0,
              d = Q(0),
              e = Q(0),
              f = 0,
              g = 0,
              h = 0;
            c = Da - 16 | 0;
            Da = c;
            f = a + 124 | 0;
            g = a + 30 | 0;
            Xa(c + 8 | 0, f, L[g >> 1]);
            h = 1;
            d = N[b >> 2];
            e = N[c + 8 >> 2];
            a: {
              b: {
                if (d != e) {
                  if (e == e) {
                    b = K[b + 4 | 0];
                    break b;
                  }
                  h = d != d;
                }
                b = K[b + 4 | 0];
                if (!h) {
                  break b;
                }
                if (K[c + 12 | 0] == (b & 255)) {
                  break a;
                }
              }
              Ub(f, g, d, b);
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
            Da = c + 16 | 0;
          }
          function Ya(a, b, c) {
            var d = 0,
              e = 0,
              f = 0;
            if (!(K[a | 0] & 32)) {
              a: {
                d = b;
                b = a;
                a = J[b + 16 >> 2];
                b: {
                  if (!a) {
                    if (gd(b)) {
                      break b;
                    }
                    a = J[b + 16 >> 2];
                  }
                  f = J[b + 20 >> 2];
                  if (a - f >>> 0 < c >>> 0) {
                    Fa[J[b + 36 >> 2]](b, d, c) | 0;
                    break a;
                  }
                  c: {
                    if (J[b + 80 >> 2] < 0) {
                      break c;
                    }
                    a = c;
                    while (1) {
                      e = a;
                      if (!a) {
                        break c;
                      }
                      a = e - 1 | 0;
                      if (K[d + a | 0] != 10) {
                        continue;
                      }
                      break;
                    }
                    if (Fa[J[b + 36 >> 2]](b, d, e) >>> 0 < e >>> 0) {
                      break b;
                    }
                    d = d + e | 0;
                    c = c - e | 0;
                    f = J[b + 20 >> 2];
                  }
                  ab(f, d, c);
                  J[b + 20 >> 2] = J[b + 20 >> 2] + c;
                }
              }
            }
          }
          function db(a) {
            var b = 0,
              c = 0,
              d = 0;
            c = J[a >> 2];
            b = J[c + 496 >> 2];
            d = J[a + 4 >> 2] + 1 | 0;
            if (d >>> 0 >= J[c + 500 >> 2] - b >> 2 >>> 0) {
              while (1) {
                b = J[a + 8 >> 2];
                if (!b) {
                  J[a + 8 >> 2] = 0;
                  J[a >> 2] = 0;
                  J[a + 4 >> 2] = 0;
                  return;
                }
                J[a >> 2] = J[b + 4 >> 2];
                J[a + 4 >> 2] = J[b + 8 >> 2];
                J[a + 8 >> 2] = J[b >> 2];
                Ua(b);
                c = J[a >> 2];
                b = J[c + 496 >> 2];
                d = J[a + 4 >> 2] + 1 | 0;
                if (d >>> 0 >= J[c + 500 >> 2] - b >> 2 >>> 0) {
                  continue;
                }
                break;
              }
            }
            J[a + 4 >> 2] = d;
            if ((K[J[(d << 2) + b >> 2] + 23 | 0] << 16 & 786432) == 524288) {
              Bc(a);
            }
          }
          function Bc(a) {
            var b = 0,
              c = 0,
              d = 0,
              e = 0;
            a: {
              d = J[a >> 2];
              b = J[d + 496 >> 2];
              b: {
                e = J[a + 4 >> 2];
                if (e >>> 0 < J[d + 500 >> 2] - b >> 2 >>> 0) {
                  c = b + (e << 2) | 0;
                  while (1) {
                    b = J[c >> 2];
                    if ((K[b + 23 | 0] << 16 & 786432) != 524288) {
                      break a;
                    }
                    if (J[b + 500 >> 2] == J[b + 496 >> 2]) {
                      break b;
                    }
                    c = Pa(12);
                    J[c + 4 >> 2] = d;
                    J[c + 8 >> 2] = e;
                    J[c >> 2] = J[a + 8 >> 2];
                    e = 0;
                    J[a + 4 >> 2] = 0;
                    J[a >> 2] = b;
                    J[a + 8 >> 2] = c;
                    d = b;
                    c = J[b + 496 >> 2];
                    if ((c | 0) != J[b + 500 >> 2]) {
                      continue;
                    }
                    break;
                  }
                }
                ba();
                B();
              }
              db(a);
            }
          }
          function lf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = Q(0),
              f = 0,
              g = 0;
            a: {
              d = Q(b);
              a = J[a >> 2];
              f = a + 124 | 0;
              c = a + 122 | 0;
              e = Qa(f, L[c >> 1]);
              if (d == e) {
                break a;
              }
              g = d == d;
              if (!g & e != e) {
                break a;
              }
              b: {
                if (!(!(d == Q(0) | Q(R(d)) == Q(_)) & g)) {
                  I[c >> 1] = L[c >> 1] & 65528;
                  break b;
                }
                Gb(f, c, d, 3);
              }
              while (1) {
                c = K[a | 0];
                if (c & 4) {
                  break a;
                }
                H[a | 0] = c | 4;
                c = J[a + 16 >> 2];
                if (c) {
                  Fa[c | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function rd(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0;
            e = J[a + 84 >> 2];
            f = J[e >> 2];
            d = J[e + 4 >> 2];
            h = J[a + 28 >> 2];
            g = J[a + 20 >> 2] - h | 0;
            g = d >>> 0 < g >>> 0 ? d : g;
            if (g) {
              ab(f, h, g);
              f = g + J[e >> 2] | 0;
              J[e >> 2] = f;
              d = J[e + 4 >> 2] - g | 0;
              J[e + 4 >> 2] = d;
            }
            d = c >>> 0 > d >>> 0 ? d : c;
            if (d) {
              ab(f, b, d);
              f = d + J[e >> 2] | 0;
              J[e >> 2] = f;
              J[e + 4 >> 2] = J[e + 4 >> 2] - d;
            }
            H[f | 0] = 0;
            b = J[a + 44 >> 2];
            J[a + 28 >> 2] = b;
            J[a + 20 >> 2] = b;
            return c | 0;
          }
          function Ub(a, b, c, d) {
            a: {
              b: {
                c: {
                  d: {
                    e: {
                      f: {
                        d = d & 255;
                        switch (d | 0) {
                          case 5:
                            break b;
                          case 6:
                            break c;
                          case 4:
                            break d;
                          case 3:
                            break e;
                          case 0:
                            break f;
                          default:
                            break a;
                        }
                      }
                      a = (K[b | 0] | K[b + 1 | 0] << 8) & 65528;
                      H[b | 0] = a;
                      H[b + 1 | 0] = a >>> 8;
                      return;
                    }
                    a = (K[b | 0] | K[b + 1 | 0] << 8) & 65528 | 4;
                    H[b | 0] = a;
                    H[b + 1 | 0] = a >>> 8;
                    return;
                  }
                  ic(a, b, 0);
                  return;
                }
                ic(a, b, 2);
                return;
              }
              ic(a, b, 1);
              return;
            }
            Gb(a, b, c, (d | 0) == 1 ? 1 : 2);
          }
          function _f(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = Q(0),
              f = 0,
              g = 0;
            a: {
              d = Q(b);
              a = J[a >> 2];
              f = a + 124 | 0;
              c = a + 24 | 0;
              e = Qa(f, L[c >> 1]);
              if (d == e) {
                break a;
              }
              g = d == d;
              if (!g & e != e) {
                break a;
              }
              b: {
                if (!g) {
                  I[c >> 1] = L[c >> 1] & 65528;
                  break b;
                }
                Gb(f, c, d, 3);
              }
              while (1) {
                c = K[a | 0];
                if (c & 4) {
                  break a;
                }
                H[a | 0] = c | 4;
                c = J[a + 16 >> 2];
                if (c) {
                  Fa[c | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function Tf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = Q(0),
              f = 0,
              g = 0;
            a: {
              d = Q(b);
              a = J[a >> 2];
              f = a + 124 | 0;
              c = a + 26 | 0;
              e = Qa(f, L[c >> 1]);
              if (d == e) {
                break a;
              }
              g = d == d;
              if (!g & e != e) {
                break a;
              }
              b: {
                if (!g) {
                  I[c >> 1] = L[c >> 1] & 65528;
                  break b;
                }
                Gb(f, c, d, 3);
              }
              while (1) {
                c = K[a | 0];
                if (c & 4) {
                  break a;
                }
                H[a | 0] = c | 4;
                c = J[a + 16 >> 2];
                if (c) {
                  Fa[c | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function Sf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = Q(0),
              f = 0,
              g = 0;
            a: {
              d = Q(b);
              a = J[a >> 2];
              f = a + 124 | 0;
              c = a + 28 | 0;
              e = Qa(f, L[c >> 1]);
              if (d == e) {
                break a;
              }
              g = d == d;
              if (!g & e != e) {
                break a;
              }
              b: {
                if (!g) {
                  I[c >> 1] = L[c >> 1] & 65528;
                  break b;
                }
                Gb(f, c, d, 3);
              }
              while (1) {
                c = K[a | 0];
                if (c & 4) {
                  break a;
                }
                H[a | 0] = c | 4;
                c = J[a + 16 >> 2];
                if (c) {
                  Fa[c | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function he(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0,
              d = 0;
            c = Da - 16 | 0;
            Da = c;
            a = J[a >> 2];
            d = b & 255;
            if (d >>> 0 < 6) {
              Da = c + 16 | 0;
              a: {
                b: {
                  switch (d - 4 | 0) {
                    case 0:
                      b = a + 444 | 0;
                      if ((K[a + 392 | 0] & 3) == 2) {
                        break a;
                      }
                      b = a + 436 | 0;
                      break a;
                    case 1:
                      b = a + 436 | 0;
                      if ((K[a + 392 | 0] & 3) == 2) {
                        break a;
                      }
                      b = a + 444 | 0;
                      break a;
                    default:
                      break b;
                  }
                }
                b = (a + ((b & 255) << 2) | 0) + 436 | 0;
              }
              return +N[b >> 2];
            }
            J[c >> 2] = 2462;
            bb(a, 5, 5304, c);
            Va();
            B();
          }
          function ge(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0,
              d = 0;
            c = Da - 16 | 0;
            Da = c;
            a = J[a >> 2];
            d = b & 255;
            if (d >>> 0 < 6) {
              Da = c + 16 | 0;
              a: {
                b: {
                  switch (d - 4 | 0) {
                    case 0:
                      b = a + 460 | 0;
                      if ((K[a + 392 | 0] & 3) == 2) {
                        break a;
                      }
                      b = a + 452 | 0;
                      break a;
                    case 1:
                      b = a + 452 | 0;
                      if ((K[a + 392 | 0] & 3) == 2) {
                        break a;
                      }
                      b = a + 460 | 0;
                      break a;
                    default:
                      break b;
                  }
                }
                b = (a + ((b & 255) << 2) | 0) + 452 | 0;
              }
              return +N[b >> 2];
            }
            J[c >> 2] = 2462;
            bb(a, 5, 5304, c);
            Va();
            B();
          }
          function fe(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0,
              d = 0;
            c = Da - 16 | 0;
            Da = c;
            a = J[a >> 2];
            d = b & 255;
            if (d >>> 0 < 6) {
              Da = c + 16 | 0;
              a: {
                b: {
                  switch (d - 4 | 0) {
                    case 0:
                      b = a + 476 | 0;
                      if ((K[a + 392 | 0] & 3) == 2) {
                        break a;
                      }
                      b = a + 468 | 0;
                      break a;
                    case 1:
                      b = a + 468 | 0;
                      if ((K[a + 392 | 0] & 3) == 2) {
                        break a;
                      }
                      b = a + 476 | 0;
                      break a;
                    default:
                      break b;
                  }
                }
                b = (a + ((b & 255) << 2) | 0) + 468 | 0;
              }
              return +N[b >> 2];
            }
            J[c >> 2] = 2462;
            bb(a, 5, 5304, c);
            Va();
            B();
          }
          function Bb(a, b, c, d) {
            a: {
              b: {
                c: {
                  switch (d - 1 | 0) {
                    case 0:
                      d = K[c + 10 | 0] | K[c + 11 | 0] << 8;
                      if (!(d & 7)) {
                        break b;
                      }
                      break a;
                    case 1:
                      break c;
                    default:
                      break b;
                  }
                }
                d = K[c + 8 | 0] | K[c + 9 | 0] << 8;
                if (!(d & 7)) {
                  break b;
                }
                break a;
              }
              d = K[c + 4 | 0] | K[c + 5 | 0] << 8;
              if (d & 7) {
                break a;
              }
              b = b + 104 | 0;
              d = K[c + 12 | 0] | K[c + 13 | 0] << 8;
              if (d & 7) {
                Ra(a, b, d);
                return;
              }
              Ra(a, b, K[c + 16 | 0] | K[c + 17 | 0] << 8);
              return;
            }
            Ra(a, b + 104 | 0, d);
          }
          function Cb(a, b, c, d) {
            a: {
              b: {
                c: {
                  switch (d - 1 | 0) {
                    case 0:
                      d = K[c + 8 | 0] | K[c + 9 | 0] << 8;
                      if (!(d & 7)) {
                        break b;
                      }
                      break a;
                    case 1:
                      break c;
                    default:
                      break b;
                  }
                }
                d = K[c + 10 | 0] | K[c + 11 | 0] << 8;
                if (!(d & 7)) {
                  break b;
                }
                break a;
              }
              d = K[c | 0] | K[c + 1 | 0] << 8;
              if (d & 7) {
                break a;
              }
              b = b + 104 | 0;
              d = K[c + 12 | 0] | K[c + 13 | 0] << 8;
              if (d & 7) {
                Ra(a, b, d);
                return;
              }
              Ra(a, b, K[c + 16 | 0] | K[c + 17 | 0] << 8);
              return;
            }
            Ra(a, b + 104 | 0, d);
          }
          function kd(a, b) {
            var c = 0,
              d = 0;
            c = Da - 16 | 0;
            Da = c;
            a: {
              if (b) {
                b = J[b >> 2];
                d = nc(Pa(528), b);
                if (b) {
                  break a;
                }
                J[c >> 2] = 3796;
                pc(c);
                Va();
                B();
              }
              if (!K[8036]) {
                J[2002] = 3;
                J[2006] = 0;
                J[2007] = 1065353216;
                J[2004] = 0;
                J[2005] = 0;
                H[8036] = 1;
                H[8012] = K[8012] & 254;
                J[2001] = 0;
                J[2008] = 0;
              }
              d = nc(Pa(528), 8004);
            }
            b = d;
            J[a + 4 >> 2] = 0;
            J[a + 8 >> 2] = 0;
            J[a >> 2] = b;
            J[b + 4 >> 2] = a;
            Da = c + 16 | 0;
            return a;
          }
          function pg(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            a: {
              a = J[a >> 2];
              c = K[a + 23 | 0];
              if ((c >>> 4 & 1) == (b & 255)) {
                break a;
              }
              c = K[a + 21 | 0] | K[a + 22 | 0] << 8 | c << 16;
              H[a + 21 | 0] = c;
              H[a + 22 | 0] = c >>> 8;
              H[a + 23 | 0] = (c & 15728639 | (b & 1) << 20) >>> 16;
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function og(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            a: {
              a = J[a >> 2];
              c = K[a + 21 | 0] | K[a + 22 | 0] << 8;
              if ((c >>> 12 & 3) == (b & 255)) {
                break a;
              }
              c = c | K[a + 23 | 0] << 16;
              H[a + 23 | 0] = c >>> 16;
              b = c & 53247 | (b & 3) << 12;
              H[a + 21 | 0] = b;
              H[a + 22 | 0] = b >>> 8;
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function jg(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            a: {
              a = J[a >> 2];
              c = K[a + 21 | 0] | K[a + 22 | 0] << 8 | K[a + 23 | 0] << 16;
              if ((b & 255) == ((c & 240) >>> 4 | 0)) {
                break a;
              }
              H[a + 23 | 0] = c >>> 16;
              b = c & 65295 | b << 4 & 240;
              H[a + 21 | 0] = b;
              H[a + 22 | 0] = b >>> 8;
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function ig(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            a: {
              a = J[a >> 2];
              c = K[a + 21 | 0] | K[a + 22 | 0] << 8;
              if ((c >>> 8 & 15) == (b & 255)) {
                break a;
              }
              c = c | K[a + 23 | 0] << 16;
              H[a + 23 | 0] = c >>> 16;
              b = c & 61695 | (b & 15) << 8;
              H[a + 21 | 0] = b;
              H[a + 22 | 0] = b >>> 8;
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function $f(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            a: {
              a = J[a >> 2];
              c = K[a + 23 | 0];
              if ((c >>> 2 & 3) == (b & 255)) {
                break a;
              }
              c = K[a + 21 | 0] | K[a + 22 | 0] << 8 | c << 16;
              H[a + 21 | 0] = c;
              H[a + 22 | 0] = c >>> 8;
              H[a + 23 | 0] = (c & 15990783 | (b & 3) << 18) >>> 16;
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function fg(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            a: {
              a = J[a >> 2];
              c = K[a + 21 | 0] | K[a + 22 | 0] << 8;
              if ((b & 255) == (c >>> 14 | 0)) {
                break a;
              }
              c = c | K[a + 23 | 0] << 16;
              H[a + 23 | 0] = c >>> 16;
              b = c & 16383 | b << 14;
              H[a + 21 | 0] = b;
              H[a + 22 | 0] = b >>> 8;
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function ag(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            a: {
              a = J[a >> 2];
              c = K[a + 23 | 0];
              if ((c & 3) == (b & 255)) {
                break a;
              }
              c = K[a + 21 | 0] | K[a + 22 | 0] << 8 | c << 16;
              H[a + 21 | 0] = c;
              H[a + 22 | 0] = c >>> 8;
              H[a + 23 | 0] = (c & 16580607 | (b & 3) << 16) >>> 16;
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function nd(a, b) {
            var c = 0,
              d = 0;
            a: {
              b: {
                c = J[a + 496 >> 2];
                d = J[a + 500 >> 2];
                if ((c | 0) == (d | 0)) {
                  break b;
                }
                while (1) {
                  if (J[c >> 2] == (b | 0)) {
                    break b;
                  }
                  c = c + 4 | 0;
                  if ((d | 0) != (c | 0)) {
                    continue;
                  }
                  break;
                }
                break a;
              }
              if ((c | 0) == (d | 0)) {
                break a;
              }
              if ((K[b + 23 | 0] << 16 & 786432) == 524288) {
                J[a + 488 >> 2] = J[a + 488 >> 2] - 1;
              }
              b = c + 4 | 0;
              jb(c, b, d - b | 0);
              J[a + 500 >> 2] = d - 4;
              return 1;
            }
            return 0;
          }
          function kg(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            a: {
              a = J[a >> 2];
              c = K[a + 21 | 0] | K[a + 22 | 0] << 8 | K[a + 23 | 0] << 16;
              if ((c & 15) == (b & 255)) {
                break a;
              }
              H[a + 23 | 0] = c >>> 16;
              b = c & 65520 | b & 15;
              H[a + 21 | 0] = b;
              H[a + 22 | 0] = b >>> 8;
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function lb(a, b, c, d, e) {
            var f = 0,
              g = Q(0);
            f = Da - 16 | 0;
            Da = f;
            Xa(f + 8 | 0, a + 104 | 0, L[((c << 1) + a | 0) + 94 >> 1]);
            g = Q(Z);
            a: {
              b: {
                switch (K[f + 12 | 0] - 1 | 0) {
                  case 0:
                    g = N[f + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              g = Q(Q(N[f + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            if (K[a + 3 | 0] << 16 & 1048576) {
              d = Sb(a, b, c, e);
              g = Q(g + (d == d ? d : Q(0)));
            }
            Da = f + 16 | 0;
            return g;
          }
          function cb(a, b, c, d, e) {
            var f = 0,
              g = Q(0);
            f = Da - 16 | 0;
            Da = f;
            Xa(f + 8 | 0, a + 104 | 0, L[((c << 1) + a | 0) + 98 >> 1]);
            g = Q(Z);
            a: {
              b: {
                switch (K[f + 12 | 0] - 1 | 0) {
                  case 0:
                    g = N[f + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              g = Q(Q(N[f + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            if (K[a + 3 | 0] << 16 & 1048576) {
              d = Sb(a, b, c, e);
              g = Q(g + (d == d ? d : Q(0)));
            }
            Da = f + 16 | 0;
            return g;
          }
          function xb(a) {
            var b = 0,
              c = Q(0);
            if (!J[a + 492 >> 2]) {
              return Q(0);
            }
            b = a + 124 | 0;
            c = Qa(b, L[a + 28 >> 1]);
            if (c == c) {
              return Qa(b, L[a + 28 >> 1]);
            }
            a: {
              if (H[J[a + 508 >> 2] + 8 | 0] & 1) {
                break a;
              }
              c = Qa(b, L[a + 24 >> 1]);
              if (c != c) {
                break a;
              }
              if (!(Qa(b, L[a + 24 >> 1]) < Q(0))) {
                break a;
              }
              return Q(-Qa(b, L[a + 24 >> 1]));
            }
            return H[J[a + 508 >> 2] + 8 | 0] & 1 ? Q(1) : Q(0);
          }
          function md(a, b, c, d) {
            var e = 0,
              f = Q(0),
              g = 0;
            e = Da - 16 | 0;
            Da = e;
            f = Q(0);
            a: {
              if (!((K[a + 21 | 0] | K[a + 22 | 0] << 8) & 12288)) {
                break a;
              }
              a = a + 20 | 0;
              g = (b & 254) != 2 ? 1 : ((c | 0) == 2) << 1;
              mb(e + 8 | 0, a, g, c);
              b: {
                if (!K[e + 12 | 0]) {
                  break b;
                }
                mb(e + 8 | 0, a, g, c);
                if (K[e + 12 | 0] == 3) {
                  break b;
                }
                f = Fc(a, b, c, d);
                break a;
              }
              f = Q(-Ec(a, b, c, d));
            }
            d = f;
            Da = e + 16 | 0;
            return d;
          }
          function Lb(a, b, c) {
            var d = 0,
              e = Q(0);
            d = Da - 16 | 0;
            Da = d;
            b = L[((b & 254) == 2 ? 84 : 86) + a >> 1];
            Ra(d + 8 | 0, a + 104 | 0, b & 7 ? b : L[a + 88 >> 1]);
            e = Q(Z);
            a: {
              b: {
                switch (K[d + 12 | 0] - 1 | 0) {
                  case 0:
                    e = N[d + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              e = Q(Q(N[d + 8 >> 2] * c) * Q(0.009999999776482582));
            }
            Da = d + 16 | 0;
            return e == e ? Q(U(e, Q(0))) : Q(0);
          }
          function ce(a, b, c, d, e, f) {
            a = a | 0;
            b = b | 0;
            c = Q(c);
            d = d | 0;
            e = Q(e);
            f = f | 0;
            var g = 0,
              h = 0;
            g = Da - 16 | 0;
            Da = g;
            h = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              h = J[h + J[b >> 2] >> 2];
            }
            Fa[h | 0](g, b, c, d, e, f);
            a = Pa(16);
            b = J[g + 12 >> 2];
            J[a + 8 >> 2] = J[g + 8 >> 2];
            J[a + 12 >> 2] = b;
            b = J[g + 4 >> 2];
            J[a >> 2] = J[g >> 2];
            J[a + 4 >> 2] = b;
            Da = g + 16 | 0;
            return a | 0;
          }
          function tc(a, b) {
            var c = 0;
            a: {
              c = J[a >> 2];
              if (c) {
                while (1) {
                  if (!b) {
                    break a;
                  }
                  J[c + 4 >> 2] = J[b + 4 >> 2];
                  J[c + 8 >> 2] = J[b + 8 >> 2];
                  b = J[b >> 2];
                  a = J[a >> 2];
                  c = J[c >> 2];
                  if (c) {
                    continue;
                  }
                  break;
                }
              }
              tb(a, b);
              return;
            }
            b: {
              if (!a) {
                break b;
              }
              b = J[a >> 2];
              if (!b) {
                break b;
              }
              J[a >> 2] = 0;
              while (1) {
                a = J[b >> 2];
                Ua(b);
                b = a;
                if (b) {
                  continue;
                }
                break;
              }
            }
          }
          function zg(a, b) {
            a = a | 0;
            b = Q(b);
            var c = 0,
              d = 0;
            c = Da - 16 | 0;
            Da = c;
            a = J[a >> 2];
            if (b >= Q(0)) {
              if (N[a + 24 >> 2] != b) {
                N[a + 24 >> 2] = b;
                J[a + 12 >> 2] = J[a + 12 >> 2] + 1;
              }
              Da = c + 16 | 0;
              return;
            }
            J[c >> 2] = 2872;
            d = Da - 16 | 0;
            Da = d;
            J[d + 12 >> 2] = c;
            a: {
              if (!a) {
                Hb(6664, 5304, c);
                break a;
              }
              Fa[J[a + 4 >> 2]](a, 0, 5, 5304, c) | 0;
            }
            Da = d + 16 | 0;
            Va();
            B();
          }
          function qc(a) {
            var b = 0,
              c = 0,
              d = 0;
            A(+a);
            b = v(1) | 0;
            v(0) | 0;
            d = b >>> 20 & 2047;
            if (d >>> 0 <= 1074) {
              if (d >>> 0 <= 1021) {
                return a * 0;
              }
              a = (b | 0) > 0 | (b | 0) >= 0 ? a : -a;
              c = a + 4503599627370496 + -4503599627370496 - a;
              a: {
                if (c > 0.5) {
                  a = a + c + -1;
                  break a;
                }
                a = a + c;
                if (!(c <= -0.5)) {
                  break a;
                }
                a = a + 1;
              }
              a = (b | 0) > 0 | (b | 0) >= 0 ? a : -a;
            }
            return a;
          }
          function fb(a, b, c) {
            var d = 0,
              e = Q(0);
            d = Da - 16 | 0;
            Da = d;
            Rb(d + 8 | 0, a, (b & 254) != 2 ? 1 : ((c | 0) == 2) << 1, c);
            e = Q(Z);
            a: {
              b: {
                switch (K[d + 12 | 0] - 1 | 0) {
                  case 0:
                    e = N[d + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              e = Q(Q(N[d + 8 >> 2] * Q(0)) * Q(0.009999999776482582));
            }
            Da = d + 16 | 0;
            return e == e ? Q(U(e, Q(0))) : Q(0);
          }
          function eb(a, b, c) {
            var d = 0,
              e = Q(0);
            d = Da - 16 | 0;
            Da = d;
            Rb(d + 8 | 0, a, (b & 254) != 2 ? 3 : ((c | 0) != 2) << 1, c);
            e = Q(Z);
            a: {
              b: {
                switch (K[d + 12 | 0] - 1 | 0) {
                  case 0:
                    e = N[d + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              e = Q(Q(N[d + 8 >> 2] * Q(0)) * Q(0.009999999776482582));
            }
            Da = d + 16 | 0;
            return e == e ? Q(U(e, Q(0))) : Q(0);
          }
          function qb(a, b, c, d) {
            var e = 0,
              f = Q(0);
            e = Da - 16 | 0;
            Da = e;
            Ob(e + 8 | 0, a, (b & 254) != 2 ? 1 : ((c | 0) == 2) << 1, c);
            f = Q(Z);
            a: {
              b: {
                switch (K[e + 12 | 0] - 1 | 0) {
                  case 0:
                    f = N[e + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              f = Q(Q(N[e + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            Da = e + 16 | 0;
            return f == f ? Q(U(f, Q(0))) : Q(0);
          }
          function pb(a, b, c, d) {
            var e = 0,
              f = Q(0);
            e = Da - 16 | 0;
            Da = e;
            Ob(e + 8 | 0, a, (b & 254) != 2 ? 3 : ((c | 0) != 2) << 1, c);
            f = Q(Z);
            a: {
              b: {
                switch (K[e + 12 | 0] - 1 | 0) {
                  case 0:
                    f = N[e + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              f = Q(Q(N[e + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            Da = e + 16 | 0;
            return f == f ? Q(U(f, Q(0))) : Q(0);
          }
          function gb(a, b, c, d, e) {
            var f = Q(0),
              g = 0,
              h = Q(0);
            g = (c << 3) + a | 0;
            h = N[g + 512 >> 2];
            f = Q(Z);
            a: {
              b: {
                switch (K[g + 516 | 0] - 1 | 0) {
                  case 0:
                    f = h;
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              f = Q(Q(h * d) * Q(0.009999999776482582));
            }
            if (K[a + 23 | 0] << 16 & 1048576) {
              d = Sb(a + 20 | 0, b, c, e);
              f = Q(f + (d == d ? d : Q(0)));
            }
            return f;
          }
          function Db(a, b, c) {
            var d = 0,
              e = 0,
              f = 0;
            a: {
              if (!b) {
                d = a;
                break a;
              }
              while (1) {
                d = Eg(a, b, 10);
                e = Ea;
                a = Dg(d, e, 246, 0) + a | 0;
                c = c - 1 | 0;
                H[c | 0] = a | 48;
                f = b >>> 0 > 9;
                a = d;
                b = e;
                if (f) {
                  continue;
                }
                break;
              }
            }
            if (d) {
              while (1) {
                c = c - 1 | 0;
                a = (d >>> 0) / 10 | 0;
                H[c | 0] = P(a, 246) + d | 48;
                b = d >>> 0 > 9;
                d = a;
                if (b) {
                  continue;
                }
                break;
              }
            }
            return c;
          }
          function Qb(a, b, c) {
            var d = 0,
              e = Q(0);
            d = Da - 16 | 0;
            Da = d;
            Rb(d + 8 | 0, a, J[(b << 2) + 5324 >> 2], c);
            e = Q(Z);
            a: {
              b: {
                switch (K[d + 12 | 0] - 1 | 0) {
                  case 0:
                    e = N[d + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              e = Q(Q(N[d + 8 >> 2] * Q(0)) * Q(0.009999999776482582));
            }
            Da = d + 16 | 0;
            return e == e ? Q(U(e, Q(0))) : Q(0);
          }
          function Jb(a, b, c) {
            var d = 0,
              e = Q(0);
            d = Da - 16 | 0;
            Da = d;
            Rb(d + 8 | 0, a, J[(b << 2) + 5308 >> 2], c);
            e = Q(Z);
            a: {
              b: {
                switch (K[d + 12 | 0] - 1 | 0) {
                  case 0:
                    e = N[d + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              e = Q(Q(N[d + 8 >> 2] * Q(0)) * Q(0.009999999776482582));
            }
            Da = d + 16 | 0;
            return e == e ? Q(U(e, Q(0))) : Q(0);
          }
          function ac(a, b, c, d) {
            var e = 0,
              f = Q(0);
            e = Da - 16 | 0;
            Da = e;
            Ob(e + 8 | 0, a, J[(b << 2) + 5308 >> 2], c);
            f = Q(Z);
            a: {
              b: {
                switch (K[e + 12 | 0] - 1 | 0) {
                  case 0:
                    f = N[e + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              f = Q(Q(N[e + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            Da = e + 16 | 0;
            return f == f ? Q(U(f, Q(0))) : Q(0);
          }
          function Dc(a, b, c, d) {
            var e = 0,
              f = Q(0);
            e = Da - 16 | 0;
            Da = e;
            Ob(e + 8 | 0, a, J[(b << 2) + 5324 >> 2], c);
            f = Q(Z);
            a: {
              b: {
                switch (K[e + 12 | 0] - 1 | 0) {
                  case 0:
                    f = N[e + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              f = Q(Q(N[e + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            Da = e + 16 | 0;
            return f == f ? Q(U(f, Q(0))) : Q(0);
          }
          function Ta(a, b, c, d) {
            var e = 0,
              f = Q(0);
            e = Da - 16 | 0;
            Da = e;
            Za(e + 8 | 0, a, (b & 254) != 2 ? 1 : ((c | 0) == 2) << 1, c);
            f = Q(Z);
            a: {
              b: {
                switch (K[e + 12 | 0] - 1 | 0) {
                  case 0:
                    f = N[e + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              f = Q(Q(N[e + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            Da = e + 16 | 0;
            return f == f ? f : Q(0);
          }
          function Sa(a, b, c, d) {
            var e = 0,
              f = Q(0);
            e = Da - 16 | 0;
            Da = e;
            Za(e + 8 | 0, a, (b & 254) != 2 ? 3 : ((c | 0) != 2) << 1, c);
            f = Q(Z);
            a: {
              b: {
                switch (K[e + 12 | 0] - 1 | 0) {
                  case 0:
                    f = N[e + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              f = Q(Q(N[e + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            Da = e + 16 | 0;
            return f == f ? f : Q(0);
          }
          function Fc(a, b, c, d) {
            var e = 0,
              f = Q(0);
            e = Da - 16 | 0;
            Da = e;
            mb(e + 8 | 0, a, (b & 254) != 2 ? 1 : ((c | 0) == 2) << 1, c);
            f = Q(Z);
            a: {
              b: {
                switch (K[e + 12 | 0] - 1 | 0) {
                  case 0:
                    f = N[e + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              f = Q(Q(N[e + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            Da = e + 16 | 0;
            return f == f ? f : Q(0);
          }
          function Ec(a, b, c, d) {
            var e = 0,
              f = Q(0);
            e = Da - 16 | 0;
            Da = e;
            mb(e + 8 | 0, a, (b & 254) != 2 ? 3 : ((c | 0) != 2) << 1, c);
            f = Q(Z);
            a: {
              b: {
                switch (K[e + 12 | 0] - 1 | 0) {
                  case 0:
                    f = N[e + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              f = Q(Q(N[e + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            Da = e + 16 | 0;
            return f == f ? f : Q(0);
          }
          function Wa(a, b, c, d, e, f) {
            var g = Q(0),
              h = 0,
              i = 0;
            h = a + 20 | 0;
            i = b >>> 0 < 2;
            g = lb(h, c, i, e, f);
            e = cb(h, c, i, e, f);
            a: {
              if (e >= Q(0) & d > e) {
                break a;
              }
              if (!(g >= Q(0))) {
                e = d;
                break a;
              }
              e = d < g ? g : d;
            }
            a = a + 20 | 0;
            d = Q(Q(qb(a, b, c, f) + fb(a, b, c)) + Q(pb(a, b, c, f) + eb(a, b, c)));
            return e == e & d == d ? d > e ? d : e : e != e ? d : e;
          }
          function Kd(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0,
              e = 0;
            d = Da - 16 | 0;
            Da = d;
            e = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              e = J[e + J[b >> 2] >> 2];
            }
            Fa[e | 0](d, b, c);
            a = Pa(16);
            b = J[d + 12 >> 2];
            J[a + 8 >> 2] = J[d + 8 >> 2];
            J[a + 12 >> 2] = b;
            b = J[d + 4 >> 2];
            J[a >> 2] = J[d >> 2];
            J[a + 4 >> 2] = b;
            Da = d + 16 | 0;
            return a | 0;
          }
          function te(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            c = Da - 16 | 0;
            Da = c;
            a = J[a >> 2];
            if (J[a + 8 >> 2]) {
              while (1) {
                b = K[a | 0];
                if (!(b & 4)) {
                  H[a | 0] = b | 4;
                  b = J[a + 16 >> 2];
                  if (b) {
                    Fa[b | 0](a);
                  }
                  J[a + 156 >> 2] = 2143289344;
                  a = J[a + 492 >> 2];
                  if (a) {
                    continue;
                  }
                }
                break;
              }
              Da = c + 16 | 0;
              return;
            }
            J[c >> 2] = 1024;
            bb(a, 5, 5304, c);
            Va();
            B();
          }
          function tb(a, b) {
            var c = 0,
              d = 0,
              e = 0,
              f = 0;
            if (b) {
              e = Pa(12);
              c = e;
              d = J[b + 8 >> 2];
              J[c + 4 >> 2] = J[b + 4 >> 2];
              J[c + 8 >> 2] = d;
              b = J[b >> 2];
              if (b) {
                d = e;
                while (1) {
                  c = Pa(12);
                  f = J[b + 8 >> 2];
                  J[c + 4 >> 2] = J[b + 4 >> 2];
                  J[c + 8 >> 2] = f;
                  J[d >> 2] = c;
                  d = c;
                  b = J[b >> 2];
                  if (b) {
                    continue;
                  }
                  break;
                }
              }
              J[c >> 2] = J[a >> 2];
              J[a >> 2] = e;
            }
          }
          function eg(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            a: {
              a = J[a >> 2];
              c = K[a + 20 | 0];
              if ((c >>> 4 & 7) == (b & 255)) {
                break a;
              }
              H[a + 20 | 0] = c & 143 | b << 4 & 112;
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function hg(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            a: {
              a = J[a >> 2];
              c = K[a + 20 | 0];
              if ((c >>> 2 & 3) == (b & 255)) {
                break a;
              }
              H[a + 20 | 0] = c & 243 | b << 2 & 12;
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function mg(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = +c;
            var d = 0,
              e = Q(0),
              f = 0,
              g = 0;
            d = Da - 16 | 0;
            Da = d;
            g = J[a >> 2];
            e = Q(c);
            a: {
              if (e != e) {
                a = 0;
                e = Q(Z);
                break a;
              }
              f = e == Q(_) | e == Q(-_);
              a = f ? 0 : 2;
              e = f ? Q(Z) : e;
            }
            H[d + 12 | 0] = a;
            N[d + 8 >> 2] = e;
            a = J[d + 12 >> 2];
            J[d >> 2] = J[d + 8 >> 2];
            J[d + 4 >> 2] = a;
            gc(g, b & 255, d);
            Da = d + 16 | 0;
          }
          function hf(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = +c;
            var d = 0,
              e = Q(0),
              f = 0,
              g = 0;
            d = Da - 16 | 0;
            Da = d;
            g = J[a >> 2];
            e = Q(c);
            a: {
              if (e != e) {
                a = 0;
                e = Q(Z);
                break a;
              }
              f = e == Q(_) | e == Q(-_);
              a = f ? 0 : 2;
              e = f ? Q(Z) : e;
            }
            H[d + 12 | 0] = a;
            N[d + 8 >> 2] = e;
            a = J[d + 12 >> 2];
            J[d >> 2] = J[d + 8 >> 2];
            J[d + 4 >> 2] = a;
            Jc(g, b & 255, d);
            Da = d + 16 | 0;
          }
          function ef(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = +c;
            var d = 0,
              e = Q(0),
              f = 0,
              g = 0;
            d = Da - 16 | 0;
            Da = d;
            g = J[a >> 2];
            e = Q(c);
            a: {
              if (e != e) {
                a = 0;
                e = Q(Z);
                break a;
              }
              f = e == Q(_) | e == Q(-_);
              a = f ? 0 : 2;
              e = f ? Q(Z) : e;
            }
            H[d + 12 | 0] = a;
            N[d + 8 >> 2] = e;
            a = J[d + 12 >> 2];
            J[d >> 2] = J[d + 8 >> 2];
            J[d + 4 >> 2] = a;
            Ic(g, b & 255, d);
            Da = d + 16 | 0;
          }
          function cg(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = +c;
            var d = 0,
              e = Q(0),
              f = 0,
              g = 0;
            d = Da - 16 | 0;
            Da = d;
            g = J[a >> 2];
            e = Q(c);
            a: {
              if (e != e) {
                a = 0;
                e = Q(Z);
                break a;
              }
              f = e == Q(_) | e == Q(-_);
              a = f ? 0 : 2;
              e = f ? Q(Z) : e;
            }
            H[d + 12 | 0] = a;
            N[d + 8 >> 2] = e;
            a = J[d + 12 >> 2];
            J[d >> 2] = J[d + 8 >> 2];
            J[d + 4 >> 2] = a;
            fc(g, b & 255, d);
            Da = d + 16 | 0;
          }
          function yb(a, b, c, d) {
            var e = 0,
              f = Q(0);
            e = Da - 16 | 0;
            Da = e;
            Za(e + 8 | 0, a, J[(b << 2) + 5308 >> 2], c);
            f = Q(Z);
            a: {
              b: {
                switch (K[e + 12 | 0] - 1 | 0) {
                  case 0:
                    f = N[e + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              f = Q(Q(N[e + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            Da = e + 16 | 0;
            return f == f ? f : Q(0);
          }
          function bc(a, b, c, d) {
            var e = 0,
              f = Q(0);
            e = Da - 16 | 0;
            Da = e;
            Za(e + 8 | 0, a, J[(b << 2) + 5324 >> 2], c);
            f = Q(Z);
            a: {
              b: {
                switch (K[e + 12 | 0] - 1 | 0) {
                  case 0:
                    f = N[e + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              f = Q(Q(N[e + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            Da = e + 16 | 0;
            return f == f ? f : Q(0);
          }
          function Pb(a, b, c, d) {
            var e = 0,
              f = Q(0);
            e = Da - 16 | 0;
            Da = e;
            mb(e + 8 | 0, a, J[(b << 2) + 5308 >> 2], c);
            f = Q(Z);
            a: {
              b: {
                switch (K[e + 12 | 0] - 1 | 0) {
                  case 0:
                    f = N[e + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              f = Q(Q(N[e + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            Da = e + 16 | 0;
            return f == f ? f : Q(0);
          }
          function Hc(a, b, c, d) {
            var e = 0,
              f = Q(0);
            e = Da - 16 | 0;
            Da = e;
            mb(e + 8 | 0, a, J[(b << 2) + 5324 >> 2], c);
            f = Q(Z);
            a: {
              b: {
                switch (K[e + 12 | 0] - 1 | 0) {
                  case 0:
                    f = N[e + 8 >> 2];
                    break a;
                  case 1:
                    break b;
                  default:
                    break a;
                }
              }
              f = Q(Q(N[e + 8 >> 2] * d) * Q(0.009999999776482582));
            }
            Da = e + 16 | 0;
            return f == f ? f : Q(0);
          }
          function gf(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            a: {
              a = J[a >> 2];
              c = K[a | 0];
              if (((c & 2) >>> 1 | 0) == (b | 0)) {
                break a;
              }
              H[a | 0] = c & 253 | (b ? 2 : 0);
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function Rc(a, b) {
            var c = 0,
              d = 0,
              e = 0;
            A(+a);
            d = v(1) | 0;
            e = v(0) | 0;
            c = d >>> 20 & 2047;
            if ((c | 0) != 2047) {
              if (!c) {
                if (a == 0) {
                  c = 0;
                } else {
                  a = Rc(a * 0x10000000000000000, b);
                  c = J[b >> 2] + -64 | 0;
                }
                J[b >> 2] = c;
                return a;
              }
              J[b >> 2] = c - 1022;
              x(0, e | 0);
              x(1, d & -2146435073 | 1071644672);
              a = +z();
            }
            return a;
          }
          function Jd(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0,
              d = 0;
            c = Da - 16 | 0;
            Da = c;
            d = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              d = J[d + J[b >> 2] >> 2];
            }
            Fa[d | 0](c, b);
            a = Pa(16);
            b = J[c + 12 >> 2];
            J[a + 8 >> 2] = J[c + 8 >> 2];
            J[a + 12 >> 2] = b;
            b = J[c + 4 >> 2];
            J[a >> 2] = J[c >> 2];
            J[a + 4 >> 2] = b;
            Da = c + 16 | 0;
            return a | 0;
          }
          function ng(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = +c;
            var d = 0,
              e = Q(0),
              f = 0;
            d = Da - 16 | 0;
            Da = d;
            f = J[a >> 2];
            e = Q(c);
            a: {
              if (e != e) {
                e = Q(Z);
                a = 0;
                break a;
              }
              a = e == Q(_) | e == Q(-_);
              e = a ? Q(Z) : e;
              a = !a;
            }
            H[d + 12 | 0] = a;
            N[d + 8 >> 2] = e;
            a = J[d + 12 >> 2];
            J[d >> 2] = J[d + 8 >> 2];
            J[d + 4 >> 2] = a;
            gc(f, b & 255, d);
            Da = d + 16 | 0;
          }
          function jf(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = +c;
            var d = 0,
              e = Q(0),
              f = 0;
            d = Da - 16 | 0;
            Da = d;
            f = J[a >> 2];
            e = Q(c);
            a: {
              if (e != e) {
                e = Q(Z);
                a = 0;
                break a;
              }
              a = e == Q(_) | e == Q(-_);
              e = a ? Q(Z) : e;
              a = !a;
            }
            H[d + 12 | 0] = a;
            N[d + 8 >> 2] = e;
            a = J[d + 12 >> 2];
            J[d >> 2] = J[d + 8 >> 2];
            J[d + 4 >> 2] = a;
            Jc(f, b & 255, d);
            Da = d + 16 | 0;
          }
          function gg(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            a: {
              a = J[a >> 2];
              c = K[a + 20 | 0];
              if ((c & 3) == (b & 255)) {
                break a;
              }
              H[a + 20 | 0] = c & 252 | b & 3;
              while (1) {
                b = K[a | 0];
                if (b & 4) {
                  break a;
                }
                H[a | 0] = b | 4;
                b = J[a + 16 >> 2];
                if (b) {
                  Fa[b | 0](a);
                }
                J[a + 156 >> 2] = 2143289344;
                a = J[a + 492 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function ff(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = +c;
            var d = 0,
              e = Q(0),
              f = 0;
            d = Da - 16 | 0;
            Da = d;
            f = J[a >> 2];
            e = Q(c);
            a: {
              if (e != e) {
                e = Q(Z);
                a = 0;
                break a;
              }
              a = e == Q(_) | e == Q(-_);
              e = a ? Q(Z) : e;
              a = !a;
            }
            H[d + 12 | 0] = a;
            N[d + 8 >> 2] = e;
            a = J[d + 12 >> 2];
            J[d >> 2] = J[d + 8 >> 2];
            J[d + 4 >> 2] = a;
            Ic(f, b & 255, d);
            Da = d + 16 | 0;
          }
          function dg(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = +c;
            var d = 0,
              e = Q(0),
              f = 0;
            d = Da - 16 | 0;
            Da = d;
            f = J[a >> 2];
            e = Q(c);
            a: {
              if (e != e) {
                e = Q(Z);
                a = 0;
                break a;
              }
              a = e == Q(_) | e == Q(-_);
              e = a ? Q(Z) : e;
              a = !a;
            }
            H[d + 12 | 0] = a;
            N[d + 8 >> 2] = e;
            a = J[d + 12 >> 2];
            J[d >> 2] = J[d + 8 >> 2];
            J[d + 4 >> 2] = a;
            fc(f, b & 255, d);
            Da = d + 16 | 0;
          }
          function Kb(a, b, c, d) {
            a: {
              b: {
                c: {
                  d = d & 255;
                  switch (d | 0) {
                    case 3:
                      break b;
                    case 0:
                      break c;
                    default:
                      break a;
                  }
                }
                a = (K[b | 0] | K[b + 1 | 0] << 8) & 65528;
                H[b | 0] = a;
                H[b + 1 | 0] = a >>> 8;
                return;
              }
              a = (K[b | 0] | K[b + 1 | 0] << 8) & 65528 | 4;
              H[b | 0] = a;
              H[b + 1 | 0] = a >>> 8;
              return;
            }
            Gb(a, b, c, (d | 0) == 1 ? 1 : 2);
          }
          function wb(a, b, c, d, e, f, g) {
            a = a + 20 | 0;
            e = Q(cb(a, b, 257 >>> (c << 3) & 255, d, e) + Q(Ta(a, c, 1, e) + Sa(a, c, 1, e)));
            a: {
              b: {
                c: {
                  switch (J[f >> 2]) {
                    case 0:
                    case 2:
                      d = N[g >> 2];
                      e = e != e ? d : d < e ? d : e;
                      break b;
                    case 1:
                      break c;
                    default:
                      break a;
                  }
                }
                if (e != e) {
                  break a;
                }
                J[f >> 2] = 2;
              }
              N[g >> 2] = e;
            }
          }
          function pd() {
            var a = 0,
              b = 0,
              c = 0;
            while (1) {
              b = a << 4;
              c = b + 6960 | 0;
              J[b + 6964 >> 2] = c;
              J[b + 6968 >> 2] = c;
              a = a + 1 | 0;
              if ((a | 0) != 64) {
                continue;
              }
              break;
            }
            ec(48);
            J[2010] = 6;
            J[2011] = 0;
            ed();
            J[2011] = J[2022];
            J[2022] = 8040;
            J[2023] = 215;
            J[2024] = 0;
            Tc();
            J[2024] = J[2022];
            J[2022] = 8092;
          }
          function zf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0,
              f = 0;
            c = Da - 16 | 0;
            Da = c;
            f = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                a = 0;
                d = Q(Z);
                break a;
              }
              e = d == Q(_) | d == Q(-_);
              a = e ? 0 : 2;
              d = e ? Q(Z) : d;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            ob(f, 1, c);
            Da = c + 16 | 0;
          }
          function uf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0,
              f = 0;
            c = Da - 16 | 0;
            Da = c;
            f = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                a = 0;
                d = Q(Z);
                break a;
              }
              e = d == Q(_) | d == Q(-_);
              a = e ? 0 : 2;
              d = e ? Q(Z) : d;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            nb(f, 0, c);
            Da = c + 16 | 0;
          }
          function pf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0,
              f = 0;
            c = Da - 16 | 0;
            Da = c;
            f = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                a = 0;
                d = Q(Z);
                break a;
              }
              e = d == Q(_) | d == Q(-_);
              a = e ? 0 : 2;
              d = e ? Q(Z) : d;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            nb(f, 1, c);
            Da = c + 16 | 0;
          }
          function Qf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0,
              f = 0;
            c = Da - 16 | 0;
            Da = c;
            f = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                a = 0;
                d = Q(Z);
                break a;
              }
              e = d == Q(_) | d == Q(-_);
              a = e ? 0 : 2;
              d = e ? Q(Z) : d;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            hb(f, 0, c);
            Da = c + 16 | 0;
          }
          function Kf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0,
              f = 0;
            c = Da - 16 | 0;
            Da = c;
            f = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                a = 0;
                d = Q(Z);
                break a;
              }
              e = d == Q(_) | d == Q(-_);
              a = e ? 0 : 2;
              d = e ? Q(Z) : d;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            hb(f, 1, c);
            Da = c + 16 | 0;
          }
          function Ef(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0,
              f = 0;
            c = Da - 16 | 0;
            Da = c;
            f = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                a = 0;
                d = Q(Z);
                break a;
              }
              e = d == Q(_) | d == Q(-_);
              a = e ? 0 : 2;
              d = e ? Q(Z) : d;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            ob(f, 0, c);
            Da = c + 16 | 0;
          }
          function Yf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0,
              f = 0;
            c = Da - 16 | 0;
            Da = c;
            f = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                a = 0;
                d = Q(Z);
                break a;
              }
              e = d == Q(_) | d == Q(-_);
              a = e ? 0 : 2;
              d = e ? Q(Z) : d;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            Fb(f, c);
            Da = c + 16 | 0;
          }
          function vf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0;
            c = Da - 16 | 0;
            Da = c;
            e = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                d = Q(Z);
                a = 0;
                break a;
              }
              a = d == Q(_) | d == Q(-_);
              d = a ? Q(Z) : d;
              a = !a;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            nb(e, 0, c);
            Da = c + 16 | 0;
          }
          function qf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0;
            c = Da - 16 | 0;
            Da = c;
            e = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                d = Q(Z);
                a = 0;
                break a;
              }
              a = d == Q(_) | d == Q(-_);
              d = a ? Q(Z) : d;
              a = !a;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            nb(e, 1, c);
            Da = c + 16 | 0;
          }
          function Rf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0;
            c = Da - 16 | 0;
            Da = c;
            e = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                d = Q(Z);
                a = 0;
                break a;
              }
              a = d == Q(_) | d == Q(-_);
              d = a ? Q(Z) : d;
              a = !a;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            hb(e, 0, c);
            Da = c + 16 | 0;
          }
          function Lf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0;
            c = Da - 16 | 0;
            Da = c;
            e = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                d = Q(Z);
                a = 0;
                break a;
              }
              a = d == Q(_) | d == Q(-_);
              d = a ? Q(Z) : d;
              a = !a;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            hb(e, 1, c);
            Da = c + 16 | 0;
          }
          function Ff(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0;
            c = Da - 16 | 0;
            Da = c;
            e = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                d = Q(Z);
                a = 0;
                break a;
              }
              a = d == Q(_) | d == Q(-_);
              d = a ? Q(Z) : d;
              a = !a;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            ob(e, 0, c);
            Da = c + 16 | 0;
          }
          function Af(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0;
            c = Da - 16 | 0;
            Da = c;
            e = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                d = Q(Z);
                a = 0;
                break a;
              }
              a = d == Q(_) | d == Q(-_);
              d = a ? Q(Z) : d;
              a = !a;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            ob(e, 1, c);
            Da = c + 16 | 0;
          }
          function Zf(a, b) {
            a = a | 0;
            b = +b;
            var c = 0,
              d = Q(0),
              e = 0;
            c = Da - 16 | 0;
            Da = c;
            e = J[a >> 2];
            d = Q(b);
            a: {
              if (d != d) {
                d = Q(Z);
                a = 0;
                break a;
              }
              a = d == Q(_) | d == Q(-_);
              d = a ? Q(Z) : d;
              a = !a;
            }
            H[c + 12 | 0] = a;
            N[c + 8 >> 2] = d;
            a = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = a;
            Fb(e, c);
            Da = c + 16 | 0;
          }
          function ze(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0,
              d = 0;
            c = Da - 16 | 0;
            Da = c;
            d = J[a + 4 >> 2];
            J[a + 4 >> 2] = b;
            if (d) {
              Fa[J[J[d >> 2] + 4 >> 2]](d);
            }
            a = J[a >> 2];
            if (J[a + 496 >> 2] != J[a + 500 >> 2]) {
              J[c >> 2] = 5081;
              bb(a, 5, 5304, c);
              Va();
              B();
            }
            J[a + 8 >> 2] = 4;
            H[a | 0] = K[a | 0] | 16;
            Da = c + 16 | 0;
          }
          function sb(a) {
            var b = Q(0),
              c = 0,
              d = 0,
              e = Q(0);
            a: {
              if (!J[a + 492 >> 2]) {
                break a;
              }
              c = a + 124 | 0;
              d = a + 26 | 0;
              b = Qa(c, L[d >> 1]);
              if (b != b) {
                d = a + 24 | 0;
                b = Qa(c, L[d >> 1]);
                if (b != b) {
                  break a;
                }
                if (!(Qa(c, L[a + 24 >> 1]) > Q(0))) {
                  break a;
                }
              }
              e = Qa(c, L[d >> 1]);
            }
            return e;
          }
          function Dg(a, b, c, d) {
            var e = 0,
              f = 0,
              g = 0,
              h = 0,
              i = 0,
              j = 0;
            e = c >>> 16 | 0;
            f = a >>> 16 | 0;
            j = P(e, f);
            g = c & 65535;
            h = a & 65535;
            i = P(g, h);
            f = (i >>> 16 | 0) + P(f, g) | 0;
            e = (f & 65535) + P(e, h) | 0;
            Ea = (P(b, c) + j | 0) + P(a, d) + (f >>> 16) + (e >>> 16) | 0;
            return i & 65535 | e << 16;
          }
          function Qa(a, b) {
            var c = Q(0),
              d = 0;
            c = Q(Z);
            a: {
              switch (b & 7) {
                default:
                  ha(2676, 3569, 116, 2666);
                  B();
                case 3:
                  d = (b & 65520) >>> 4 | 0;
                  if (b & 8) {
                    return x(2, mc(a, d)), C();
                  }
                  a = d & 2047;
                  c = Q((b << 16 >> 16 < 0 ? 0 - a | 0 : a) | 0);
                  break;
                case 0:
                  break a;
              }
            }
            return c;
          }
          function Ie(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0,
              d = 0;
            c = Da - 16 | 0;
            Da = c;
            a = J[a >> 2];
            Ra(c + 8 | 0, a + 124 | 0, L[(a + ((b & 255) << 1) | 0) + 86 >> 1]);
            d = Z;
            a: {
              switch (K[c + 12 | 0]) {
                default:
                  d = +N[c + 8 >> 2];
                  break;
                case 0:
                case 3:
                  break a;
              }
            }
            Da = c + 16 | 0;
            return +d;
          }
          function _a(a, b, c, d, e) {
            var f = 0;
            f = Da - 256 | 0;
            Da = f;
            if (!(e & 73728 | (c | 0) <= (d | 0))) {
              d = c - d | 0;
              c = d >>> 0 < 256;
              $a(f, b & 255, c ? d : 256);
              if (!c) {
                while (1) {
                  Ya(a, f, 256);
                  d = d - 256 | 0;
                  if (d >>> 0 > 255) {
                    continue;
                  }
                  break;
                }
              }
              Ya(a, f, d);
            }
            Da = f + 256 | 0;
          }
          function yc(a, b, c, d, e, f, g) {
            var h = Q(0);
            d = Q(d - e);
            if (d == d) {
              a = a + 20 | 0;
              h = lb(a, b, c, f, g);
              h = h != h ? Q(0) : Q(h - e);
              f = cb(a, b, c, f, g);
              e = f != f ? Q(34028234663852886e22) : Q(f - e);
              d = d > e ? e : d;
              d = d == d & h == h ? d < h ? h : d : d != d ? h : d;
            }
            return d;
          }
          function ib(a, b) {
            var c = 0;
            a: {
              c = J[b + 496 >> 2];
              if ((c | 0) != J[b + 500 >> 2]) {
                J[a + 4 >> 2] = 0;
                J[a + 8 >> 2] = 0;
                J[a >> 2] = b;
                if ((K[J[c >> 2] + 23 | 0] << 16 & 786432) != 524288) {
                  break a;
                }
                Bc(a);
                return;
              }
              J[a >> 2] = 0;
              J[a + 4 >> 2] = 0;
              J[a + 8 >> 2] = 0;
            }
          }
          function Oc(a) {
            var b = 0,
              c = 0,
              d = 0;
            d = J[a >> 2];
            while (1) {
              c = H[d | 0];
              if (Tb(c)) {
                d = d + 1 | 0;
                J[a >> 2] = d;
                if (b >>> 0 <= 214748364) {
                  c = c - 48 | 0;
                  b = P(b, 10);
                  b = (c | 0) > (b ^ 2147483647) ? -1 : c + b | 0;
                } else {
                  b = -1;
                }
                continue;
              }
              break;
            }
            return b;
          }
          function ic(a, b, c) {
            var d = 0,
              e = 0;
            d = K[b | 0] | K[b + 1 | 0] << 8;
            e = d & 65528 | 5;
            H[b | 0] = e;
            H[b + 1 | 0] = e >>> 8;
            a: {
              if (d & 8) {
                c = fd(a, d >>> 4 | 0, c);
                a = (K[b | 0] | K[b + 1 | 0] << 8) & 15;
                break a;
              }
              a = e & 13;
            }
            a = a | c << 4;
            H[b | 0] = a;
            H[b + 1 | 0] = a >>> 8;
          }
          function Ib(a, b, c, d) {
            var e = 0;
            J[a + 12 >> 2] = 0;
            J[a + 16 >> 2] = d;
            a: {
              if (b) {
                if (b >>> 0 >= 1073741824) {
                  break a;
                }
                e = Pa(b << 2);
              }
              J[a >> 2] = e;
              c = (c << 2) + e | 0;
              J[a + 8 >> 2] = c;
              J[a + 12 >> 2] = (b << 2) + e;
              J[a + 4 >> 2] = c;
              return a;
            }
            Xb();
            B();
          }
          function gd(a) {
            var b = 0;
            b = J[a + 72 >> 2];
            J[a + 72 >> 2] = b - 1 | b;
            b = J[a >> 2];
            if (b & 8) {
              J[a >> 2] = b | 32;
              return -1;
            }
            J[a + 4 >> 2] = 0;
            J[a + 8 >> 2] = 0;
            b = J[a + 44 >> 2];
            J[a + 28 >> 2] = b;
            J[a + 20 >> 2] = b;
            J[a + 16 >> 2] = b + J[a + 48 >> 2];
            return 0;
          }
          function ye(a, b, c, d, e, f) {
            a = a | 0;
            b = b | 0;
            c = Q(c);
            d = d | 0;
            e = Q(e);
            f = f | 0;
            var g = 0;
            g = Da - 16 | 0;
            Da = g;
            b = J[J[b + 4 >> 2] + 4 >> 2];
            Fa[J[J[b >> 2] + 8 >> 2]](g, b, c, d, e, f);
            N[a >> 2] = O[g >> 3];
            N[a + 4 >> 2] = O[g + 8 >> 3];
            Da = g + 16 | 0;
          }
          function fd(a, b, c) {
            var d = 0,
              e = 0;
            a: {
              if (b >>> 0 <= 3) {
                a = ((b << 2) + a | 0) + 4 | 0;
              } else {
                d = J[a + 24 >> 2];
                a = J[d >> 2];
                e = b - 4 | 0;
                if (e >>> 0 >= J[d + 4 >> 2] - a >> 2 >>> 0) {
                  break a;
                }
                a = a + (e << 2) | 0;
              }
              J[a >> 2] = c;
              return b;
            }
            ba();
            B();
          }
          function mb(a, b, c, d) {
            a: {
              switch (c | 0) {
                case 1:
                  Ab(a, b, b + 30 | 0);
                  return;
                case 2:
                  Bb(a, b, b + 30 | 0, d);
                  return;
                case 3:
                  zb(a, b, b + 30 | 0);
                  return;
                default:
                  Va();
                  B();
                case 0:
                  break a;
              }
            }
            Cb(a, b, b + 30 | 0, d);
          }
          function Za(a, b, c, d) {
            a: {
              switch (c | 0) {
                case 1:
                  Ab(a, b, b + 12 | 0);
                  return;
                case 2:
                  Bb(a, b, b + 12 | 0, d);
                  return;
                case 3:
                  zb(a, b, b + 12 | 0);
                  return;
                default:
                  Va();
                  B();
                case 0:
                  break a;
              }
            }
            Cb(a, b, b + 12 | 0, d);
          }
          function Rb(a, b, c, d) {
            a: {
              switch (c | 0) {
                case 1:
                  Ab(a, b, b + 66 | 0);
                  return;
                case 2:
                  Bb(a, b, b + 66 | 0, d);
                  return;
                case 3:
                  zb(a, b, b + 66 | 0);
                  return;
                default:
                  Va();
                  B();
                case 0:
                  break a;
              }
            }
            Cb(a, b, b + 66 | 0, d);
          }
          function Ob(a, b, c, d) {
            a: {
              switch (c | 0) {
                case 1:
                  Ab(a, b, b + 48 | 0);
                  return;
                case 2:
                  Bb(a, b, b + 48 | 0, d);
                  return;
                case 3:
                  zb(a, b, b + 48 | 0);
                  return;
                default:
                  Va();
                  B();
                case 0:
                  break a;
              }
            }
            Cb(a, b, b + 48 | 0, d);
          }
          function ie(a, b) {
            a = a | 0;
            b = b | 0;
            b = J[b >> 2];
            O[a >> 3] = N[b + 420 >> 2];
            O[a + 8 >> 3] = N[b + 428 >> 2];
            O[a + 16 >> 3] = N[b + 424 >> 2];
            O[a + 24 >> 3] = N[b + 432 >> 2];
            O[a + 32 >> 3] = N[b + 396 >> 2];
            O[a + 40 >> 3] = N[b + 400 >> 2];
          }
          function zb(a, b, c) {
            var d = 0;
            d = K[c + 6 | 0] | K[c + 7 | 0] << 8;
            if (d & 7) {
              Ra(a, b + 104 | 0, d);
              return;
            }
            b = b + 104 | 0;
            d = K[c + 14 | 0] | K[c + 15 | 0] << 8;
            if (d & 7) {
              Ra(a, b, d);
              return;
            }
            Ra(a, b, K[c + 16 | 0] | K[c + 17 | 0] << 8);
          }
          function Ab(a, b, c) {
            var d = 0;
            d = K[c + 2 | 0] | K[c + 3 | 0] << 8;
            if (d & 7) {
              Ra(a, b + 104 | 0, d);
              return;
            }
            b = b + 104 | 0;
            d = K[c + 14 | 0] | K[c + 15 | 0] << 8;
            if (d & 7) {
              Ra(a, b, d);
              return;
            }
            Ra(a, b, K[c + 16 | 0] | K[c + 17 | 0] << 8);
          }
          function mc(a, b) {
            var c = 0;
            a: {
              if (b >>> 0 <= 3) {
                a = ((b << 2) + a | 0) + 4 | 0;
              } else {
                c = J[a + 24 >> 2];
                a = J[c >> 2];
                b = b - 4 | 0;
                if (b >>> 0 >= J[c + 4 >> 2] - a >> 2 >>> 0) {
                  break a;
                }
                a = a + (b << 2) | 0;
              }
              return J[a >> 2];
            }
            ba();
            B();
          }
          function Bg() {
            var a = 0,
              b = 0;
            b = Pa(4);
            a = Pa(32);
            J[a + 28 >> 2] = 0;
            J[a + 20 >> 2] = 0;
            J[a + 24 >> 2] = 1065353216;
            J[a + 12 >> 2] = 0;
            J[a + 16 >> 2] = 0;
            H[a + 8 | 0] = 0;
            J[a + 4 >> 2] = 3;
            J[a >> 2] = 0;
            J[b >> 2] = a;
            return b | 0;
          }
          function Ge(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0;
            d = Da - 16 | 0;
            Da = d;
            b = J[b >> 2];
            Ra(d + 8 | 0, b + 124 | 0, L[(b + ((c & 255) << 1) | 0) + 104 >> 1]);
            b = K[d + 12 | 0];
            O[a + 8 >> 3] = N[d + 8 >> 2];
            J[a >> 2] = b;
            Da = d + 16 | 0;
          }
          function Fd(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0,
              d = 0;
            c = Da - 48 | 0;
            Da = c;
            d = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              d = J[d + J[b >> 2] >> 2];
            }
            Fa[d | 0](c, b);
            a = ab(Pa(48), c, 48);
            Da = c + 48 | 0;
            return a | 0;
          }
          function bf(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0;
            d = Da - 16 | 0;
            Da = d;
            b = J[b >> 2];
            Ra(d + 8 | 0, b + 124 | 0, L[(b + ((c & 255) << 1) | 0) + 50 >> 1]);
            b = K[d + 12 | 0];
            O[a + 8 >> 3] = N[d + 8 >> 2];
            J[a >> 2] = b;
            Da = d + 16 | 0;
          }
          function Ve(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0;
            d = Da - 16 | 0;
            Da = d;
            b = J[b >> 2];
            Ra(d + 8 | 0, b + 124 | 0, L[(b + ((c & 255) << 1) | 0) + 32 >> 1]);
            b = K[d + 12 | 0];
            O[a + 8 >> 3] = N[d + 8 >> 2];
            J[a >> 2] = b;
            Da = d + 16 | 0;
          }
          function He(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0;
            d = Da - 16 | 0;
            Da = d;
            b = J[b >> 2];
            Ra(d + 8 | 0, b + 124 | 0, L[(b + ((c & 255) << 1) | 0) + 68 >> 1]);
            b = K[d + 12 | 0];
            O[a + 8 >> 3] = N[d + 8 >> 2];
            J[a >> 2] = b;
            Da = d + 16 | 0;
          }
          function lg(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0,
              d = 0;
            c = Da - 16 | 0;
            Da = c;
            a = J[a >> 2];
            H[c + 12 | 0] = 3;
            J[c + 8 >> 2] = 2143289344;
            d = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = d;
            gc(a, b & 255, c);
            Da = c + 16 | 0;
          }
          function bg(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0,
              d = 0;
            c = Da - 16 | 0;
            Da = c;
            a = J[a >> 2];
            H[c + 12 | 0] = 3;
            J[c + 8 >> 2] = 2143289344;
            d = J[c + 12 >> 2];
            J[c >> 2] = J[c + 8 >> 2];
            J[c + 4 >> 2] = d;
            fc(a, b & 255, c);
            Da = c + 16 | 0;
          }
          function wd(a, b, c, d) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = d | 0;
            var e = 0;
            e = Da - 16 | 0;
            Da = e;
            a = Sc(ta(J[a + 60 >> 2], b | 0, c | 0, d & 255, e + 8 | 0) | 0);
            Da = e + 16 | 0;
            Ea = a ? -1 : J[e + 12 >> 2];
            return (a ? -1 : J[e + 8 >> 2]) | 0;
          }
          function Ae(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0,
              d = 0;
            c = J[a >> 2];
            a = J[c + 496 >> 2];
            a: {
              if (J[c + 500 >> 2] - a >> 2 >>> 0 <= b >>> 0) {
                break a;
              }
              a = J[a + (b << 2) >> 2];
              if (!a) {
                break a;
              }
              d = J[a + 4 >> 2];
            }
            return d | 0;
          }
          function Qe(a) {
            a = a | 0;
            var b = Q(0),
              c = 0;
            a = J[a >> 2];
            c = a + 124 | 0;
            b = Qa(c, L[a + 28 >> 1]);
            a: {
              if (b != b) {
                b = H[J[a + 508 >> 2] + 8 | 0] & 1 ? Q(1) : Q(0);
                break a;
              }
              b = Qa(c, L[a + 28 >> 1]);
            }
            return +b;
          }
          function yf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 4;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            ob(a, 1, b);
            Da = b + 16 | 0;
          }
          function xf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 5;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            ob(a, 1, b);
            Da = b + 16 | 0;
          }
          function wf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 6;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            ob(a, 1, b);
            Da = b + 16 | 0;
          }
          function tf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 4;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            nb(a, 0, b);
            Da = b + 16 | 0;
          }
          function sf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 5;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            nb(a, 0, b);
            Da = b + 16 | 0;
          }
          function rf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 6;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            nb(a, 0, b);
            Da = b + 16 | 0;
          }
          function of(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 4;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            nb(a, 1, b);
            Da = b + 16 | 0;
          }
          function nf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 5;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            nb(a, 1, b);
            Da = b + 16 | 0;
          }
          function mf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 6;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            nb(a, 1, b);
            Da = b + 16 | 0;
          }
          function Pf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 3;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            hb(a, 0, b);
            Da = b + 16 | 0;
          }
          function Of(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 4;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            hb(a, 0, b);
            Da = b + 16 | 0;
          }
          function Nf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 5;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            hb(a, 0, b);
            Da = b + 16 | 0;
          }
          function Mf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 6;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            hb(a, 0, b);
            Da = b + 16 | 0;
          }
          function Jf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 3;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            hb(a, 1, b);
            Da = b + 16 | 0;
          }
          function If(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 4;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            hb(a, 1, b);
            Da = b + 16 | 0;
          }
          function Hf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 5;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            hb(a, 1, b);
            Da = b + 16 | 0;
          }
          function Gf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 6;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            hb(a, 1, b);
            Da = b + 16 | 0;
          }
          function Df(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 4;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            ob(a, 0, b);
            Da = b + 16 | 0;
          }
          function Cf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 5;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            ob(a, 0, b);
            Da = b + 16 | 0;
          }
          function Bf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 6;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            ob(a, 0, b);
            Da = b + 16 | 0;
          }
          function Xf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 3;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            Fb(a, b);
            Da = b + 16 | 0;
          }
          function Wf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 4;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            Fb(a, b);
            Da = b + 16 | 0;
          }
          function Vf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 5;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            Fb(a, b);
            Da = b + 16 | 0;
          }
          function Uf(a) {
            a = a | 0;
            var b = 0,
              c = 0;
            b = Da - 16 | 0;
            Da = b;
            a = J[a >> 2];
            H[b + 12 | 0] = 6;
            J[b + 8 >> 2] = 2143289344;
            c = J[b + 12 >> 2];
            J[b >> 2] = J[b + 8 >> 2];
            J[b + 4 >> 2] = c;
            Fb(a, b);
            Da = b + 16 | 0;
          }
          function sc(a, b, c, d, e, f) {
            var g = Q(0);
            a = a + 20 | 0;
            c = c >>> 0 < 2;
            g = lb(a, b, c, e, f);
            e = cb(a, b, c, e, f);
            if (!(e >= Q(0) & d > e)) {
              if (!(g >= Q(0))) {
                return d;
              }
              e = d < g ? g : d;
            }
            return e;
          }
          function Ag(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            if (!(b & 255)) {
              a = J[a >> 2];
              b = J[a + 16 >> 2];
              if ((b & 1) != (c | 0)) {
                J[a + 16 >> 2] = b & -2 | c;
                J[a + 12 >> 2] = J[a + 12 >> 2] + 1;
              }
              return;
            }
            ba();
            B();
          }
          function Pe(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            c = Da - 16 | 0;
            Da = c;
            b = J[b >> 2];
            Xa(c + 8 | 0, b + 124 | 0, L[b + 110 >> 1]);
            b = K[c + 12 | 0];
            O[a + 8 >> 3] = N[c + 8 >> 2];
            J[a >> 2] = b;
            Da = c + 16 | 0;
          }
          function Oe(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            c = Da - 16 | 0;
            Da = c;
            b = J[b >> 2];
            Xa(c + 8 | 0, b + 124 | 0, L[b + 112 >> 1]);
            b = K[c + 12 | 0];
            O[a + 8 >> 3] = N[c + 8 >> 2];
            J[a >> 2] = b;
            Da = c + 16 | 0;
          }
          function Ne(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            c = Da - 16 | 0;
            Da = c;
            b = J[b >> 2];
            Xa(c + 8 | 0, b + 124 | 0, L[b + 114 >> 1]);
            b = K[c + 12 | 0];
            O[a + 8 >> 3] = N[c + 8 >> 2];
            J[a >> 2] = b;
            Da = c + 16 | 0;
          }
          function Me(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            c = Da - 16 | 0;
            Da = c;
            b = J[b >> 2];
            Xa(c + 8 | 0, b + 124 | 0, L[b + 116 >> 1]);
            b = K[c + 12 | 0];
            O[a + 8 >> 3] = N[c + 8 >> 2];
            J[a >> 2] = b;
            Da = c + 16 | 0;
          }
          function Le(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            c = Da - 16 | 0;
            Da = c;
            b = J[b >> 2];
            Xa(c + 8 | 0, b + 124 | 0, L[b + 118 >> 1]);
            b = K[c + 12 | 0];
            O[a + 8 >> 3] = N[c + 8 >> 2];
            J[a >> 2] = b;
            Da = c + 16 | 0;
          }
          function Ke(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            c = Da - 16 | 0;
            Da = c;
            b = J[b >> 2];
            Xa(c + 8 | 0, b + 124 | 0, L[b + 120 >> 1]);
            b = K[c + 12 | 0];
            O[a + 8 >> 3] = N[c + 8 >> 2];
            J[a >> 2] = b;
            Da = c + 16 | 0;
          }
          function $b(a) {
            var b = 0;
            b = 1;
            a: {
              if (K[a + 30 | 0] & 7 | K[a + 34 | 0] & 7 | (K[a + 46 | 0] & 7 | K[a + 42 | 0] & 7)) {
                break a;
              }
              if (K[a + 38 | 0] & 7) {
                break a;
              }
              b = (K[a + 40 | 0] & 7) != 0;
            }
            return b;
          }
          function Se(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            c = Da - 16 | 0;
            Da = c;
            b = J[b >> 2];
            Xa(c + 8 | 0, b + 124 | 0, L[b + 30 >> 1]);
            b = K[c + 12 | 0];
            O[a + 8 >> 3] = N[c + 8 >> 2];
            J[a >> 2] = b;
            Da = c + 16 | 0;
          }
          function bb(a, b, c, d) {
            var e = 0;
            e = Da - 16 | 0;
            Da = e;
            J[e + 12 >> 2] = d;
            a: {
              if (!a) {
                oc(0, 0, b, c, J[e + 12 >> 2]);
                break a;
              }
              oc(J[a + 508 >> 2], a, b, c, J[e + 12 >> 2]);
            }
            Da = e + 16 | 0;
          }
          function Gd(a, b, c, d, e) {
            a = a | 0;
            b = b | 0;
            c = +c;
            d = +d;
            e = e | 0;
            var f = 0;
            f = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              f = J[f + J[b >> 2] >> 2];
            }
            Fa[f | 0](b, c, d, e);
          }
          function xc(a) {
            var b = 0;
            b = 0;
            a: {
              if (((K[a + 21 | 0] | K[a + 22 | 0] << 8) & 12288) == 8192) {
                break a;
              }
              b = 1;
              if (sb(a) != Q(0)) {
                break a;
              }
              b = xb(a) != Q(0);
            }
            return b;
          }
          function Zc(a, b, c, d) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = d | 0;
            var e = 0;
            e = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              e = J[e + J[b >> 2] >> 2];
            }
            Fa[e | 0](b, c, d);
          }
          function Yc(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0;
            d = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              d = J[d + J[b >> 2] >> 2];
            }
            return Fa[d | 0](b, c) | 0;
          }
          function Md(a, b, c, d) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = +d;
            var e = 0;
            e = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              e = J[e + J[b >> 2] >> 2];
            }
            Fa[e | 0](b, c, d);
          }
          function Hd(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0;
            d = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              d = J[d + J[b >> 2] >> 2];
            }
            return +Fa[d | 0](b, c);
          }
          function Pa(a) {
            var b = 0;
            a = a ? a : 1;
            a: {
              while (1) {
                b = cc(a);
                if (b) {
                  break a;
                }
                b = J[2294];
                if (b) {
                  Fa[b | 0]();
                  continue;
                }
                break;
              }
              ba();
              B();
            }
            return b;
          }
          function xe(a) {
            a = a | 0;
            var b = 0;
            b = J[a + 4 >> 2];
            J[a + 4 >> 2] = 0;
            if (b) {
              Fa[J[J[b >> 2] + 4 >> 2]](b);
            }
            a = J[a >> 2];
            J[a + 8 >> 2] = 0;
            H[a | 0] = K[a | 0] & 239;
          }
          function Ud(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = Q(c);
            var d = 0;
            d = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              d = J[d + J[b >> 2] >> 2];
            }
            Fa[d | 0](b, c);
          }
          function rb(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0;
            d = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              d = J[d + J[b >> 2] >> 2];
            }
            Fa[d | 0](b, c);
          }
          function Zb(a, b, c) {
            var d = Q(0);
            d = N[((J[(b << 2) + 5340 >> 2] << 2) + a | 0) + 404 >> 2];
            a = a + 20 | 0;
            return Q(d + Q(Ta(a, b, 1, c) + Sa(a, b, 1, c)));
          }
          function vb(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            c = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              c = J[c + J[b >> 2] >> 2];
            }
            return Fa[c | 0](b) | 0;
          }
          function bd(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            c = Da - 16 | 0;
            Da = c;
            J[c + 8 >> 2] = b;
            a = Fa[a | 0](c + 8 | 0) | 0;
            fa(J[c + 8 >> 2]);
            Da = c + 16 | 0;
            return a | 0;
          }
          function Ld(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = +c;
            var d = 0;
            d = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              d = J[d + J[b >> 2] >> 2];
            }
            Fa[d | 0](b, c);
          }
          function Re(a) {
            a = a | 0;
            var b = 0,
              c = Q(0);
            a = J[a >> 2];
            b = a + 124 | 0;
            c = Qa(b, L[a + 26 >> 1]);
            if (c != c) {
              return 0;
            }
            return +Qa(b, L[a + 26 >> 1]);
          }
          function Mc(a, b) {
            if (!a) {
              return 0;
            }
            a: {
              if (!((b & -128) == 57216 | b >>> 0 <= 127)) {
                J[2035] = 25;
                a = -1;
                break a;
              }
              H[a | 0] = b;
              a = 1;
            }
            return a;
          }
          function Id(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            c = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              c = J[c + J[b >> 2] >> 2];
            }
            return +Fa[c | 0](b);
          }
          function Xc(a, b) {
            var c = 0,
              d = 0;
            c = Pa(4);
            J[c >> 2] = b;
            d = Pa(4);
            J[d >> 2] = b;
            ga(8051, a | 0, 8114, 5722, 213, c | 0, 8114, 5726, 214, d | 0);
          }
          function Eb(a, b) {
            var c = 0,
              d = 0;
            c = Pa(4);
            J[c >> 2] = b;
            d = Pa(4);
            J[d >> 2] = b;
            ga(8081, a | 0, 8114, 5722, 211, c | 0, 8114, 5726, 212, d | 0);
          }
          function hc(a, b) {
            var c = 0;
            a: {
              if (H[8060] & 1) {
                c = J[2014];
                break a;
              }
              c = la(1, 5472) | 0;
              H[8060] = 1;
              J[2014] = c;
            }
            sa(c | 0, a | 0, b | 0, 0);
          }
          function oc(a, b, c, d, e) {
            if (!a) {
              if (!(c ? (c | 0) != 5 : 0)) {
                Hb(6664, d, e);
                return;
              }
              od(d, e);
              return;
            }
            Fa[J[a + 4 >> 2]](a, b, c, d, e) | 0;
          }
          function Cg(a, b, c, d, e) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = d | 0;
            e = e | 0;
            if (!(c ? (c | 0) != 5 : 0)) {
              return Hb(6664, d, e) | 0;
            }
            return od(d, e) | 0;
          }
          function _d(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0,
              e = 0;
            d = a, e = pa((H[b + 11 | 0] < 0 ? J[b >> 2] : b) | 0, 8052, J[c >> 2]) | 0, J[d >> 2] = e;
          }
          function Wd(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            var d = 0,
              e = 0;
            d = a, e = pa((H[b + 11 | 0] < 0 ? J[b >> 2] : b) | 0, 8075, J[c >> 2]) | 0, J[d >> 2] = e;
          }
          function we(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            c = J[a + 8 >> 2];
            J[a + 8 >> 2] = b;
            if (c) {
              Fa[J[J[c >> 2] + 4 >> 2]](c);
            }
            J[J[a >> 2] + 16 >> 2] = 5;
          }
          function hd(a, b) {
            var c = 0;
            if ((b | 0) < 0) {
              ba();
              B();
            }
            b = (b - 1 >>> 5 | 0) + 1 | 0;
            c = Pa(b << 2);
            J[a + 8 >> 2] = b;
            J[a + 4 >> 2] = 0;
            J[a >> 2] = c;
          }
          function ad(a, b) {
            a = a | 0;
            b = b | 0;
            var c = 0;
            c = J[a >> 2];
            a = J[a + 4 >> 2];
            b = (a >> 1) + b | 0;
            if (a & 1) {
              c = J[c + J[b >> 2] >> 2];
            }
            Fa[c | 0](b);
          }
          function ue(a) {
            a = a | 0;
            var b = 0;
            b = J[a + 8 >> 2];
            J[a + 8 >> 2] = 0;
            if (b) {
              Fa[J[J[b >> 2] + 4 >> 2]](b);
            }
            J[J[a >> 2] + 16 >> 2] = 0;
          }
          function ae(a) {
            a = a | 0;
            var b = 0;
            b = Pa(12);
            H[b + 4 | 0] = 0;
            J[b + 8 >> 2] = J[a >> 2];
            J[a >> 2] = 0;
            J[b >> 2] = 5440;
            return b | 0;
          }
          function Xd(a) {
            a = a | 0;
            var b = 0;
            b = Pa(12);
            H[b + 4 | 0] = 0;
            J[b + 8 >> 2] = J[a >> 2];
            J[a >> 2] = 0;
            J[b >> 2] = 5560;
            return b | 0;
          }
          function yg(a, b) {
            a = a | 0;
            b = b | 0;
            a = J[a >> 2];
            if (J[a + 20 >> 2] != (b | 0)) {
              J[a + 20 >> 2] = b;
              J[a + 12 >> 2] = J[a + 12 >> 2] + 1;
            }
          }
          function zd() {
            var a = 0;
            a = J[2022];
            if (a) {
              while (1) {
                Fa[J[a >> 2]]();
                a = J[a + 4 >> 2];
                if (a) {
                  continue;
                }
                break;
              }
            }
          }
          function Wc(a) {
            a = a | 0;
            J[a >> 2] = 5580;
            if (K[a + 4 | 0]) {
              hc(J[a + 8 >> 2], 2349);
            }
            fa(J[a + 8 >> 2]);
            return a | 0;
          }
          function Uc(a) {
            a = a | 0;
            J[a >> 2] = 5460;
            if (K[a + 4 | 0]) {
              hc(J[a + 8 >> 2], 2349);
            }
            fa(J[a + 8 >> 2]);
            return a | 0;
          }
          function Sd() {
            var a = 0;
            a = Pa(16);
            J[a >> 2] = 0;
            J[a + 4 >> 2] = 0;
            J[a + 8 >> 2] = 0;
            J[a + 12 >> 2] = 0;
            return a | 0;
          }
          function Sb(a, b, c, d) {
            c = !c << 1;
            return Q(Q(ac(a, c, b, d) + Jb(a, c, b)) + Q(Dc(a, c, b, d) + Qb(a, c, b)));
          }
          function Je(a) {
            a = a | 0;
            var b = Q(0);
            a = J[a >> 2];
            b = Qa(a + 124 | 0, L[a + 122 >> 1]);
            return +(b != b ? Q(Z) : b);
          }
          function Yb(a) {
            var b = 0;
            b = J[a + 12 >> 2];
            if (b) {
              Ua(b);
            }
            b = J[a >> 2];
            if (b) {
              J[a + 4 >> 2] = b;
              Ua(b);
            }
            Ua(a);
          }
          function qd(a, b, c, d, e) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = d | 0;
            e = e | 0;
            return Fa[a | 0](b, c, d, e) | 0;
          }
          function pc(a) {
            var b = 0;
            b = Da - 16 | 0;
            Da = b;
            J[b + 12 >> 2] = a;
            Hb(6664, 5304, a);
            Da = b + 16 | 0;
          }
          function Rd() {
            var a = 0;
            a = Pa(16);
            J[a + 8 >> 2] = 0;
            J[a + 12 >> 2] = 0;
            J[a >> 2] = 0;
            return a | 0;
          }
          function wg(a, b) {
            a = a | 0;
            b = b | 0;
            if (b & 255) {
              ba();
              B();
            }
            return J[J[a >> 2] + 16 >> 2] & 1;
          }
          function Be(a) {
            a = a | 0;
            a = J[J[a >> 2] + 492 >> 2];
            if (!a) {
              return 0;
            }
            return J[a + 4 >> 2];
          }
          function cf(a) {
            a = a | 0;
            a = J[a >> 2];
            return (K[a + 21 | 0] | K[a + 22 | 0] << 8) >>> 12 & 3;
          }
          function Xe(a) {
            a = a | 0;
            a = J[a >> 2];
            return (K[a + 21 | 0] | K[a + 22 | 0] << 8) >>> 14 | 0;
          }
          function $e(a) {
            a = a | 0;
            a = J[a >> 2];
            return (K[a + 21 | 0] | K[a + 22 | 0] << 8) >>> 4 & 15;
          }
          function ee(a, b) {
            a = a | 0;
            b = b | 0;
            a = J[a >> 2];
            H[a | 0] = K[a | 0] & 247 | (b ? 8 : 0);
          }
          function af(a) {
            a = a | 0;
            a = J[a >> 2];
            return (K[a + 21 | 0] | K[a + 22 | 0] << 8) & 15;
          }
          function _e(a) {
            a = a | 0;
            a = J[a >> 2];
            return (K[a + 22 | 0] | K[a + 23 | 0] << 8) & 15;
          }
          function Ce(a) {
            a = a | 0;
            a = J[a >> 2];
            return J[a + 500 >> 2] - J[a + 496 >> 2] >> 2;
          }
          function ve(a) {
            a = a | 0;
            a = J[J[a + 4 >> 2] + 8 >> 2];
            Fa[J[J[a >> 2] + 8 >> 2]](a);
          }
          function ld(a) {
            a = a | 0;
            var b = 0;
            if (a) {
              b = J[a >> 2];
              if (b) {
                Ua(b);
              }
              Ua(a);
            }
          }
          function xg(a, b) {
            a = a | 0;
            b = b | 0;
            a = J[a >> 2];
            H[a + 8 | 0] = K[a + 8 | 0] & 254 | b;
          }
          function sd(a, b, c, d) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            d = d | 0;
            Ea = 0;
            return 0;
          }
          function Pd(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = c | 0;
            J[J[a >> 2] + b >> 2] = c;
          }
          function jc(a, b, c) {
            a = a | 0;
            b = b | 0;
            c = +c;
            O[J[a >> 2] + b >> 3] = c;
          }
          function kc(a, b) {
            a = a | 0;
            b = b | 0;
            return +O[J[a >> 2] + b >> 3];
          }
          function Qd(a, b) {
            a = a | 0;
            b = b | 0;
            return J[J[a >> 2] + b >> 2];
          }
          function Wb(a) {
            a = a | 0;
            if (a) {
              Fa[J[J[a >> 2] + 4 >> 2]](a);
            }
          }
          function df(a) {
            a = a | 0;
            return K[J[a >> 2] + 23 | 0] >>> 4 & 1;
          }
          function Ze(a) {
            a = a | 0;
            return K[J[a >> 2] + 20 | 0] >>> 2 & 3;
          }
          function We(a) {
            a = a | 0;
            return K[J[a >> 2] + 20 | 0] >>> 4 & 7;
          }
          function Te(a) {
            a = a | 0;
            return K[J[a >> 2] + 23 | 0] >>> 2 & 3;
          }
          function Sc(a) {
            if (!a) {
              return 0;
            }
            J[2035] = a;
            return -1;
          }
          function re(a) {
            a = a | 0;
            a = J[a >> 2];
            H[a | 0] = K[a | 0] & 254;
          }
          function Nd(a, b) {
            a = a | 0;
            b = b | 0;
            return Fa[a | 0](b) | 0;
          }
          function se(a) {
            a = a | 0;
            return (K[J[a >> 2]] & 4) >>> 2 | 0;
          }
          function Kc(a, b, c, d) {
            ua(a | 0, b | 0, 8, 0, c | 0, -1, d | 0);
          }
          function Fe(a) {
            a = a | 0;
            return (K[J[a >> 2]] & 2) >>> 1 | 0;
          }
          function oe(a) {
            a = a | 0;
            return +N[J[a >> 2] + 420 >> 2];
          }
          function ne(a) {
            a = a | 0;
            return +N[J[a >> 2] + 428 >> 2];
          }
          function me(a) {
            a = a | 0;
            return +N[J[a >> 2] + 424 >> 2];
          }
          function le(a) {
            a = a | 0;
            return +N[J[a >> 2] + 432 >> 2];
          }
          function ke(a) {
            a = a | 0;
            return +N[J[a >> 2] + 396 >> 2];
          }
          function je(a) {
            a = a | 0;
            return +N[J[a >> 2] + 400 >> 2];
          }
          function Ye(a) {
            a = a | 0;
            return K[J[a >> 2] + 20 | 0] & 3;
          }
          function Ue(a) {
            a = a | 0;
            return K[J[a >> 2] + 23 | 0] & 3;
          }
          function yd(a) {
            a = a | 0;
            return ya(J[a + 60 >> 2]) | 0;
          }
          function vg(a) {
            a = a | 0;
            return J[J[a >> 2] + 20 >> 2];
          }
          function ug(a) {
            a = a | 0;
            return H[J[a >> 2] + 8 | 0] & 1;
          }
          function cd(a, b) {
            a = a | 0;
            b = b | 0;
            Fa[J[a >> 2]](b);
          }
          function sg(a) {
            a = a | 0;
            return kd(Pa(12), a) | 0;
          }
          function qe(a) {
            a = a | 0;
            return H[J[a >> 2]] & 1;
          }
          function _c(a, b) {
            a = a | 0;
            b = b | 0;
            Fa[a | 0](b);
          }
          function Hb(a, b, c) {
            return Qc(a, b, c, 1, 2);
          }
          function Dd(a) {
            a = a | 0;
            hc(J[a + 8 >> 2], 4168);
          }
          function $c(a) {
            a = a | 0;
            return Fa[a | 0]() | 0;
          }
          function Td() {
            return $a(Pa(48), 0, 48) | 0;
          }
          function od(a, b) {
            return Hb(6808, a, b);
          }
          function Va() {
            Fa[J[1738]]();
            Xb();
            B();
          }
          function tg() {
            return kd(Pa(12), 0) | 0;
          }
          function lc(a) {
            a = a | 0;
            if (a) {
              Ua(a);
            }
          }
          function Tb(a) {
            return a - 48 >>> 0 < 10;
          }
          function de(a) {
            a = a | 0;
            return 8048;
          }
          function be(a) {
            a = a | 0;
            return 8052;
          }
          function Zd(a) {
            a = a | 0;
            return 8072;
          }
          function Yd(a) {
            a = a | 0;
            return 8075;
          }
          function Vd(a) {
            a = a | 0;
            return 8078;
          }
          function Od(a) {
            a = a | 0;
            return 8083;
          }
          function dd(a) {
            a = a | 0;
            H[a + 4 | 0] = 1;
          }
          function Vb(a) {
            a = a | 0;
            return a | 0;
          }
          function Ed(a) {
            a = a | 0;
            Ua(Wc(a));
          }
          function Cd(a) {
            a = a | 0;
            Ua(Uc(a));
          }
          function td(a) {
            a = a | 0;
            return 0;
          }
          function Vc(a) {
            a = a | 0;
            B();
          }
          function Xb() {
            ba();
            B();
          }
          function Lc() {
            Xb();
            B();
          }
          // EMSCRIPTEN_END_FUNCS
          e = K;
          p(q);
          var Fa = c([null, vd, ud, Cg, ye, ve, ed, de, Wb, ce, be, Vb, Vb, Wb, dd, cd, bd, ae, $d, _d, Zd, Wb, ad, Yd, Vb, Vb, Wb, dd, cd, bd, Xd, Wd, Vd, ld, $c, Bg, _c, ld, Ag, Zc, zg, Ud, yg, rb, xg, rb, wg, Yc, vg, vb, ug, vb, Td, lc, Sd, lc, Rd, lc, kc, jc, Qd, Pd, Od, jd, $c, tg, Nd, sg, _c, jd, rg, ad, qg, rb, og, rb, ng, Md, mg, lg, kg, jg, ig, hg, fg, eg, dg, cg, bg, ag, $f, _f, Ld, Zf, Yf, Xf, Wf, Vf, Uf, Tf, Sf, Rf, Qf, Pf, Of, Nf, Mf, Lf, Kf, Jf, If, Hf, Gf, Ff, Ef, Df, Cf, Bf, Af, zf, yf, xf, wf, vf, uf, tf, sf, rf, qf, pf, of, nf, mf, pg, lf, kf, jf, hf, ff, ef, gg, cf, vb, bf, Kd, af, $e, _e, Ze, Xe, We, Ve, Se, Jd, Re, Id, Qe, Pe, Oe, Ne, Me, Le, Ke, df, Je, Ie, Hd, Ue, Te, He, Ge, Ee, Zc, De, rb, Ce, vb, Be, vb, Ae, Yc, ee, rb, Fe, vb, gf, ze, rb, xe, we, rb, ue, te, se, vb, re, qe, pe, Gd, oe, ne, me, le, ke, je, ie, Fd, he, ge, fe, Ye, kc, jc, kc, jc, Tc, Uc, Cd, Bd, Vc, Lc, Wc, Ed, Dd, Vc, yd, xd, wd, td, sd, rd, Lc]);
          function Ga() {
            return G.byteLength / 65536 | 0;
          }
          function La(Ma) {
            Ma = Ma | 0;
            var Ha = Ga() | 0;
            var Ia = Ha + Ma | 0;
            if (Ha < Ia && Ia < 65536) {
              var Ja = new ArrayBuffer(P(Ia, 65536));
              var Ka = new Int8Array(Ja);
              Ka.set(H);
              H = new Int8Array(Ja);
              I = new Int16Array(Ja);
              J = new Int32Array(Ja);
              K = new Uint8Array(Ja);
              L = new Uint16Array(Ja);
              M = new Uint32Array(Ja);
              N = new Float32Array(Ja);
              O = new Float64Array(Ja);
              G = Ja;
              F.buffer = G;
              e = K;
            }
            return Ha;
          }
          return {
            "F": pd,
            "G": Ad,
            "H": zd,
            "I": cc,
            "J": Fa,
            "K": Ua,
            "L": qd
          };
        }
        return Na(Oa);
      }
      // EMSCRIPTEN_END_ASM
      (a);
    }
    function ja(a) {
      return {
        then: function then(b) {
          b({
            instance: new ia(a)
          });
        }
      };
    }
    var ka = Error,
      WebAssembly = {};
    w = [];
    "object" != _typeof(WebAssembly) && x("no native wasm support detected");
    var z,
      la = !1;
    function A(a, b, c) {
      c = b + c;
      for (var d = ""; !(b >= c);) {
        var e = a[b++];
        if (!e) break;
        if (e & 128) {
          var f = a[b++] & 63;
          if (192 == (e & 224)) d += String.fromCharCode((e & 31) << 6 | f);else {
            var h = a[b++] & 63;
            e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | h : (e & 7) << 18 | f << 12 | h << 6 | a[b++] & 63;
            65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
          }
        } else d += String.fromCharCode(e);
      }
      return d;
    }
    var C, ma, D, E, na, F, G, oa, pa;
    function qa(a) {
      C = a;
      g.HEAP8 = ma = new Int8Array(a);
      g.HEAP16 = E = new Int16Array(a);
      g.HEAP32 = F = new Int32Array(a);
      g.HEAPU8 = D = new Uint8Array(a);
      g.HEAPU16 = na = new Uint16Array(a);
      g.HEAPU32 = G = new Uint32Array(a);
      g.HEAPF32 = oa = new Float32Array(a);
      g.HEAPF64 = pa = new Float64Array(a);
    }
    var ha = g.INITIAL_MEMORY || 16777216;
    g.wasmMemory ? z = g.wasmMemory : z = new fa();
    z && (C = z.buffer);
    ha = C.byteLength;
    qa(C);
    var ra,
      sa = [],
      ta = [],
      ua = [];
    function va() {
      var a = g.preRun.shift();
      sa.unshift(a);
    }
    var H = 0,
      wa = null,
      J = null;
    function x(a) {
      if (g.onAbort) g.onAbort(a);
      a = "Aborted(" + a + ")";
      v(a);
      la = !0;
      a = new ka(a + ". Build with -sASSERTIONS for more info.");
      ba(a);
      throw a;
    }
    function xa(a) {
      return a.startsWith("data:application/octet-stream;base64,");
    }
    var K;
    K = "<<< WASM_BINARY_FILE >>>";
    if (!xa(K)) {
      var ya = K;
      K = g.locateFile ? g.locateFile(ya, q) : q + ya;
    }
    function za() {
      var a = K;
      try {
        if (a == K && w) return new Uint8Array(w);
        if (xa(a)) try {
          var b = Aa(a.slice(37)),
            c = new Uint8Array(b.length);
          for (a = 0; a < b.length; ++a) c[a] = b.charCodeAt(a);
          var d = c;
        } catch (f) {
          throw Error("Converting base64 string to bytes failed.");
        } else d = void 0;
        var e = d;
        if (e) return e;
        throw "both async and sync fetching of the wasm failed";
      } catch (f) {
        x(f);
      }
    }
    function Ba() {
      return w || "function" != typeof fetch ? Promise.resolve().then(function () {
        return za();
      }) : fetch(K, {
        credentials: "same-origin"
      }).then(function (a) {
        if (!a.ok) throw "failed to load wasm binary file at '" + K + "'";
        return a.arrayBuffer();
      })["catch"](function () {
        return za();
      });
    }
    function Ca(a) {
      for (; 0 < a.length;) a.shift()(g);
    }
    function Da(a) {
      if (void 0 === a) return "_unknown";
      a = a.replace(/[^a-zA-Z0-9_]/g, "$");
      var b = a.charCodeAt(0);
      return 48 <= b && 57 >= b ? "_" + a : a;
    }
    function Ea(a, b) {
      a = Da(a);
      return function () {
        return b.apply(this, arguments);
      };
    }
    var L = [{}, {
        value: void 0
      }, {
        value: null
      }, {
        value: !0
      }, {
        value: !1
      }],
      Fa = [];
    function Ga(a) {
      var b = Error,
        c = Ea(a, function (d) {
          this.name = a;
          this.message = d;
          d = Error(d).stack;
          void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
        });
      c.prototype = Object.create(b.prototype);
      c.prototype.constructor = c;
      c.prototype.toString = function () {
        return void 0 === this.message ? this.name : this.name + ": " + this.message;
      };
      return c;
    }
    var M = void 0;
    function N(a) {
      throw new M(a);
    }
    var O = function O(a) {
        a || N("Cannot use deleted val. handle = " + a);
        return L[a].value;
      },
      Ha = function Ha(a) {
        switch (a) {
          case void 0:
            return 1;
          case null:
            return 2;
          case !0:
            return 3;
          case !1:
            return 4;
          default:
            var b = Fa.length ? Fa.pop() : L.length;
            L[b] = {
              ga: 1,
              value: a
            };
            return b;
        }
      },
      Ia = void 0,
      Ja = void 0;
    function P(a) {
      for (var b = ""; D[a];) b += Ja[D[a++]];
      return b;
    }
    var Ka = [];
    function La() {
      for (; Ka.length;) {
        var a = Ka.pop();
        a.M.$ = !1;
        a["delete"]();
      }
    }
    var Ma = void 0,
      Q = {};
    function Na(a, b) {
      for (void 0 === b && N("ptr should not be undefined"); a.R;) b = a.ba(b), a = a.R;
      return b;
    }
    var R = {};
    function Oa(a) {
      a = Pa(a);
      var b = P(a);
      S(a);
      return b;
    }
    function Qa(a, b) {
      var c = R[a];
      void 0 === c && N(b + " has unknown type " + Oa(a));
      return c;
    }
    function Ra() {}
    var Sa = !1;
    function Ta(a) {
      --a.count.value;
      0 === a.count.value && (a.T ? a.U.W(a.T) : a.P.N.W(a.O));
    }
    function Ua(a, b, c) {
      if (b === c) return a;
      if (void 0 === c.R) return null;
      a = Ua(a, b, c.R);
      return null === a ? null : c.na(a);
    }
    var Va = {};
    function Wa(a, b) {
      b = Na(a, b);
      return Q[b];
    }
    var Xa = void 0;
    function Ya(a) {
      throw new Xa(a);
    }
    function Za(a, b) {
      b.P && b.O || Ya("makeClassHandle requires ptr and ptrType");
      !!b.U !== !!b.T && Ya("Both smartPtrType and smartPtr must be specified");
      b.count = {
        value: 1
      };
      return T(Object.create(a, {
        M: {
          value: b
        }
      }));
    }
    function T(a) {
      if ("undefined" === typeof FinalizationRegistry) return T = function T(b) {
        return b;
      }, a;
      Sa = new FinalizationRegistry(function (b) {
        Ta(b.M);
      });
      T = function T(b) {
        var c = b.M;
        c.T && Sa.register(b, {
          M: c
        }, b);
        return b;
      };
      Ra = function Ra(b) {
        Sa.unregister(b);
      };
      return T(a);
    }
    var $a = {};
    function ab(a) {
      for (; a.length;) {
        var b = a.pop();
        a.pop()(b);
      }
    }
    function bb(a) {
      return this.fromWireType(F[a >> 2]);
    }
    var U = {},
      cb = {};
    function V(a, b, c) {
      function d(k) {
        k = c(k);
        k.length !== a.length && Ya("Mismatched type converter count");
        for (var m = 0; m < a.length; ++m) W(a[m], k[m]);
      }
      a.forEach(function (k) {
        cb[k] = b;
      });
      var e = Array(b.length),
        f = [],
        h = 0;
      b.forEach(function (k, m) {
        R.hasOwnProperty(k) ? e[m] = R[k] : (f.push(k), U.hasOwnProperty(k) || (U[k] = []), U[k].push(function () {
          e[m] = R[k];
          ++h;
          h === f.length && d(e);
        }));
      });
      0 === f.length && d(e);
    }
    function db(a) {
      switch (a) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + a);
      }
    }
    function W(a, b) {
      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var d = b.name;
      a || N('type "' + d + '" must have a positive integer typeid pointer');
      if (R.hasOwnProperty(a)) {
        if (c.ua) return;
        N("Cannot register type '" + d + "' twice");
      }
      R[a] = b;
      delete cb[a];
      U.hasOwnProperty(a) && (b = U[a], delete U[a], b.forEach(function (e) {
        return e();
      }));
    }
    function eb(a) {
      N(a.M.P.N.name + " instance already deleted");
    }
    function X() {}
    function fb(a, b, c) {
      if (void 0 === a[b].S) {
        var d = a[b];
        a[b] = function () {
          a[b].S.hasOwnProperty(arguments.length) || N("Function '" + c + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + a[b].S + ")!");
          return a[b].S[arguments.length].apply(this, arguments);
        };
        a[b].S = [];
        a[b].S[d.Z] = d;
      }
    }
    function gb(a, b) {
      g.hasOwnProperty(a) ? (N("Cannot register public name '" + a + "' twice"), fb(g, a, a), g.hasOwnProperty(void 0) && N("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"), g[a].S[void 0] = b) : g[a] = b;
    }
    function hb(a, b, c, d, e, f, h, k) {
      this.name = a;
      this.constructor = b;
      this.X = c;
      this.W = d;
      this.R = e;
      this.pa = f;
      this.ba = h;
      this.na = k;
      this.ja = [];
    }
    function ib(a, b, c) {
      for (; b !== c;) b.ba || N("Expected null or instance of " + c.name + ", got an instance of " + b.name), a = b.ba(a), b = b.R;
      return a;
    }
    function jb(a, b) {
      if (null === b) return this.ea && N("null is not a valid " + this.name), 0;
      b.M || N('Cannot pass "' + kb(b) + '" as a ' + this.name);
      b.M.O || N("Cannot pass deleted object as a pointer of type " + this.name);
      return ib(b.M.O, b.M.P.N, this.N);
    }
    function nb(a, b) {
      if (null === b) {
        this.ea && N("null is not a valid " + this.name);
        if (this.da) {
          var c = this.fa();
          null !== a && a.push(this.W, c);
          return c;
        }
        return 0;
      }
      b.M || N('Cannot pass "' + kb(b) + '" as a ' + this.name);
      b.M.O || N("Cannot pass deleted object as a pointer of type " + this.name);
      !this.ca && b.M.P.ca && N("Cannot convert argument of type " + (b.M.U ? b.M.U.name : b.M.P.name) + " to parameter type " + this.name);
      c = ib(b.M.O, b.M.P.N, this.N);
      if (this.da) switch (void 0 === b.M.T && N("Passing raw pointer to smart pointer is illegal"), this.Ba) {
        case 0:
          b.M.U === this ? c = b.M.T : N("Cannot convert argument of type " + (b.M.U ? b.M.U.name : b.M.P.name) + " to parameter type " + this.name);
          break;
        case 1:
          c = b.M.T;
          break;
        case 2:
          if (b.M.U === this) c = b.M.T;else {
            var d = b.clone();
            c = this.xa(c, Ha(function () {
              d["delete"]();
            }));
            null !== a && a.push(this.W, c);
          }
          break;
        default:
          N("Unsupporting sharing policy");
      }
      return c;
    }
    function ob(a, b) {
      if (null === b) return this.ea && N("null is not a valid " + this.name), 0;
      b.M || N('Cannot pass "' + kb(b) + '" as a ' + this.name);
      b.M.O || N("Cannot pass deleted object as a pointer of type " + this.name);
      b.M.P.ca && N("Cannot convert argument of type " + b.M.P.name + " to parameter type " + this.name);
      return ib(b.M.O, b.M.P.N, this.N);
    }
    function Y(a, b, c, d) {
      this.name = a;
      this.N = b;
      this.ea = c;
      this.ca = d;
      this.da = !1;
      this.W = this.xa = this.fa = this.ka = this.Ba = this.wa = void 0;
      void 0 !== b.R ? this.toWireType = nb : (this.toWireType = d ? jb : ob, this.V = null);
    }
    function pb(a, b) {
      g.hasOwnProperty(a) || Ya("Replacing nonexistant public symbol");
      g[a] = b;
      g[a].Z = void 0;
    }
    function qb(a, b) {
      var c = [];
      return function () {
        c.length = 0;
        Object.assign(c, arguments);
        if (a.includes("j")) {
          var d = g["dynCall_" + a];
          d = c && c.length ? d.apply(null, [b].concat(c)) : d.call(null, b);
        } else d = ra.get(b).apply(null, c);
        return d;
      };
    }
    function Z(a, b) {
      a = P(a);
      var c = a.includes("j") ? qb(a, b) : ra.get(b);
      "function" != typeof c && N("unknown function pointer with signature " + a + ": " + b);
      return c;
    }
    var rb = void 0;
    function sb(a, b) {
      function c(f) {
        e[f] || R[f] || (cb[f] ? cb[f].forEach(c) : (d.push(f), e[f] = !0));
      }
      var d = [],
        e = {};
      b.forEach(c);
      throw new rb(a + ": " + d.map(Oa).join([", "]));
    }
    function tb(a, b, c, d, e) {
      var f = b.length;
      2 > f && N("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var h = null !== b[1] && null !== c,
        k = !1;
      for (c = 1; c < b.length; ++c) if (null !== b[c] && void 0 === b[c].V) {
        k = !0;
        break;
      }
      var m = "void" !== b[0].name,
        l = f - 2,
        n = Array(l),
        p = [],
        r = [];
      return function () {
        arguments.length !== l && N("function " + a + " called with " + arguments.length + " arguments, expected " + l + " args!");
        r.length = 0;
        p.length = h ? 2 : 1;
        p[0] = e;
        if (h) {
          var u = b[1].toWireType(r, this);
          p[1] = u;
        }
        for (var t = 0; t < l; ++t) n[t] = b[t + 2].toWireType(r, arguments[t]), p.push(n[t]);
        t = d.apply(null, p);
        if (k) ab(r);else for (var y = h ? 1 : 2; y < b.length; y++) {
          var B = 1 === y ? u : n[y - 2];
          null !== b[y].V && b[y].V(B);
        }
        u = m ? b[0].fromWireType(t) : void 0;
        return u;
      };
    }
    function ub(a, b) {
      for (var c = [], d = 0; d < a; d++) c.push(G[b + 4 * d >> 2]);
      return c;
    }
    function vb(a) {
      4 < a && 0 === --L[a].ga && (L[a] = void 0, Fa.push(a));
    }
    function kb(a) {
      if (null === a) return "null";
      var b = _typeof(a);
      return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
    }
    function wb(a, b) {
      switch (b) {
        case 2:
          return function (c) {
            return this.fromWireType(oa[c >> 2]);
          };
        case 3:
          return function (c) {
            return this.fromWireType(pa[c >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + a);
      }
    }
    function xb(a, b, c) {
      switch (b) {
        case 0:
          return c ? function (d) {
            return ma[d];
          } : function (d) {
            return D[d];
          };
        case 1:
          return c ? function (d) {
            return E[d >> 1];
          } : function (d) {
            return na[d >> 1];
          };
        case 2:
          return c ? function (d) {
            return F[d >> 2];
          } : function (d) {
            return G[d >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + a);
      }
    }
    function yb(a, b) {
      for (var c = "", d = 0; !(d >= b / 2); ++d) {
        var e = E[a + 2 * d >> 1];
        if (0 == e) break;
        c += String.fromCharCode(e);
      }
      return c;
    }
    function zb(a, b, c) {
      void 0 === c && (c = 2147483647);
      if (2 > c) return 0;
      c -= 2;
      var d = b;
      c = c < 2 * a.length ? c / 2 : a.length;
      for (var e = 0; e < c; ++e) E[b >> 1] = a.charCodeAt(e), b += 2;
      E[b >> 1] = 0;
      return b - d;
    }
    function Ab(a) {
      return 2 * a.length;
    }
    function Bb(a, b) {
      for (var c = 0, d = ""; !(c >= b / 4);) {
        var e = F[a + 4 * c >> 2];
        if (0 == e) break;
        ++c;
        65536 <= e ? (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : d += String.fromCharCode(e);
      }
      return d;
    }
    function Cb(a, b, c) {
      void 0 === c && (c = 2147483647);
      if (4 > c) return 0;
      var d = b;
      c = d + c - 4;
      for (var e = 0; e < a.length; ++e) {
        var f = a.charCodeAt(e);
        if (55296 <= f && 57343 >= f) {
          var h = a.charCodeAt(++e);
          f = 65536 + ((f & 1023) << 10) | h & 1023;
        }
        F[b >> 2] = f;
        b += 4;
        if (b + 4 > c) break;
      }
      F[b >> 2] = 0;
      return b - d;
    }
    function Db(a) {
      for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && ++c;
        b += 4;
      }
      return b;
    }
    var Eb = {};
    function Fb(a) {
      var b = Eb[a];
      return void 0 === b ? P(a) : b;
    }
    var Gb = [];
    function Hb(a) {
      var b = Gb.length;
      Gb.push(a);
      return b;
    }
    function Ib(a, b) {
      for (var c = Array(a), d = 0; d < a; ++d) c[d] = Qa(G[b + 4 * d >> 2], "parameter " + d);
      return c;
    }
    var Jb = [],
      Kb = [null, [], []];
    M = g.BindingError = Ga("BindingError");
    g.count_emval_handles = function () {
      for (var a = 0, b = 5; b < L.length; ++b) void 0 !== L[b] && ++a;
      return a;
    };
    g.get_first_emval = function () {
      for (var a = 5; a < L.length; ++a) if (void 0 !== L[a]) return L[a];
      return null;
    };
    Ia = g.PureVirtualError = Ga("PureVirtualError");
    for (var Lb = Array(256), Mb = 0; 256 > Mb; ++Mb) Lb[Mb] = String.fromCharCode(Mb);
    Ja = Lb;
    g.getInheritedInstanceCount = function () {
      return Object.keys(Q).length;
    };
    g.getLiveInheritedInstances = function () {
      var a = [],
        b;
      for (b in Q) Q.hasOwnProperty(b) && a.push(Q[b]);
      return a;
    };
    g.flushPendingDeletes = La;
    g.setDelayFunction = function (a) {
      Ma = a;
      Ka.length && Ma && Ma(La);
    };
    Xa = g.InternalError = Ga("InternalError");
    X.prototype.isAliasOf = function (a) {
      if (!(this instanceof X && a instanceof X)) return !1;
      var b = this.M.P.N,
        c = this.M.O,
        d = a.M.P.N;
      for (a = a.M.O; b.R;) c = b.ba(c), b = b.R;
      for (; d.R;) a = d.ba(a), d = d.R;
      return b === d && c === a;
    };
    X.prototype.clone = function () {
      this.M.O || eb(this);
      if (this.M.aa) return this.M.count.value += 1, this;
      var a = T,
        b = Object,
        c = b.create,
        d = Object.getPrototypeOf(this),
        e = this.M;
      a = a(c.call(b, d, {
        M: {
          value: {
            count: e.count,
            $: e.$,
            aa: e.aa,
            O: e.O,
            P: e.P,
            T: e.T,
            U: e.U
          }
        }
      }));
      a.M.count.value += 1;
      a.M.$ = !1;
      return a;
    };
    X.prototype["delete"] = function () {
      this.M.O || eb(this);
      this.M.$ && !this.M.aa && N("Object already scheduled for deletion");
      Ra(this);
      Ta(this.M);
      this.M.aa || (this.M.T = void 0, this.M.O = void 0);
    };
    X.prototype.isDeleted = function () {
      return !this.M.O;
    };
    X.prototype.deleteLater = function () {
      this.M.O || eb(this);
      this.M.$ && !this.M.aa && N("Object already scheduled for deletion");
      Ka.push(this);
      1 === Ka.length && Ma && Ma(La);
      this.M.$ = !0;
      return this;
    };
    Y.prototype.qa = function (a) {
      this.ka && (a = this.ka(a));
      return a;
    };
    Y.prototype.ha = function (a) {
      this.W && this.W(a);
    };
    Y.prototype.argPackAdvance = 8;
    Y.prototype.readValueFromPointer = bb;
    Y.prototype.deleteObject = function (a) {
      if (null !== a) a["delete"]();
    };
    Y.prototype.fromWireType = function (a) {
      function b() {
        return this.da ? Za(this.N.X, {
          P: this.wa,
          O: c,
          U: this,
          T: a
        }) : Za(this.N.X, {
          P: this,
          O: a
        });
      }
      var c = this.qa(a);
      if (!c) return this.ha(a), null;
      var d = Wa(this.N, c);
      if (void 0 !== d) {
        if (0 === d.M.count.value) return d.M.O = c, d.M.T = a, d.clone();
        d = d.clone();
        this.ha(a);
        return d;
      }
      d = this.N.pa(c);
      d = Va[d];
      if (!d) return b.call(this);
      d = this.ca ? d.la : d.pointerType;
      var e = Ua(c, this.N, d.N);
      return null === e ? b.call(this) : this.da ? Za(d.N.X, {
        P: d,
        O: e,
        U: this,
        T: a
      }) : Za(d.N.X, {
        P: d,
        O: e
      });
    };
    rb = g.UnboundTypeError = Ga("UnboundTypeError");
    var Aa = "function" == typeof atob ? atob : function (a) {
        var b = "",
          c = 0;
        a = a.replace(/[^A-Za-z0-9\+\/=]/g, "");
        do {
          var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));
          var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));
          var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));
          var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));
          d = d << 2 | e >> 4;
          e = (e & 15) << 4 | f >> 2;
          var k = (f & 3) << 6 | h;
          b += String.fromCharCode(d);
          64 !== f && (b += String.fromCharCode(e));
          64 !== h && (b += String.fromCharCode(k));
        } while (c < a.length);
        return b;
      },
      Ob = {
        j: function j(a, b, c, d) {
          x("Assertion failed: " + (a ? A(D, a) : "") + ", at: " + [b ? b ? A(D, b) : "" : "unknown filename", c, d ? d ? A(D, d) : "" : "unknown function"]);
        },
        r: function r(a, b, c) {
          a = P(a);
          b = Qa(b, "wrapper");
          c = O(c);
          var d = [].slice,
            e = b.N,
            f = e.X,
            h = e.R.X,
            k = e.R.constructor;
          a = Ea(a, function () {
            e.R.ja.forEach(function (l) {
              if (this[l] === h[l]) throw new Ia("Pure virtual function " + l + " must be implemented in JavaScript");
            }.bind(this));
            Object.defineProperty(this, "__parent", {
              value: f
            });
            this.__construct.apply(this, d.call(arguments));
          });
          f.__construct = function () {
            this === f && N("Pass correct 'this' to __construct");
            var l = k.implement.apply(void 0, [this].concat(d.call(arguments)));
            Ra(l);
            var n = l.M;
            l.notifyOnDestruction();
            n.aa = !0;
            Object.defineProperties(this, {
              M: {
                value: n
              }
            });
            T(this);
            l = n.O;
            l = Na(e, l);
            Q.hasOwnProperty(l) ? N("Tried to register registered instance: " + l) : Q[l] = this;
          };
          f.__destruct = function () {
            this === f && N("Pass correct 'this' to __destruct");
            Ra(this);
            var l = this.M.O;
            l = Na(e, l);
            Q.hasOwnProperty(l) ? delete Q[l] : N("Tried to unregister unregistered instance: " + l);
          };
          a.prototype = Object.create(f);
          for (var m in c) a.prototype[m] = c[m];
          return Ha(a);
        },
        l: function l(a) {
          var b = $a[a];
          delete $a[a];
          var c = b.fa,
            d = b.W,
            e = b.ia,
            f = e.map(function (h) {
              return h.ta;
            }).concat(e.map(function (h) {
              return h.za;
            }));
          V([a], f, function (h) {
            var k = {};
            e.forEach(function (m, l) {
              var n = h[l],
                p = m.ra,
                r = m.sa,
                u = h[l + e.length],
                t = m.ya,
                y = m.Aa;
              k[m.oa] = {
                read: function read(B) {
                  return n.fromWireType(p(r, B));
                },
                write: function write(B, da) {
                  var I = [];
                  t(y, B, u.toWireType(I, da));
                  ab(I);
                }
              };
            });
            return [{
              name: b.name,
              fromWireType: function fromWireType(m) {
                var l = {},
                  n;
                for (n in k) l[n] = k[n].read(m);
                d(m);
                return l;
              },
              toWireType: function toWireType(m, l) {
                for (var n in k) if (!(n in l)) throw new TypeError('Missing field:  "' + n + '"');
                var p = c();
                for (n in k) k[n].write(p, l[n]);
                null !== m && m.push(d, p);
                return p;
              },
              argPackAdvance: 8,
              readValueFromPointer: bb,
              V: d
            }];
          });
        },
        w: function w() {},
        C: function C(a, b, c, d, e) {
          var f = db(c);
          b = P(b);
          W(a, {
            name: b,
            fromWireType: function fromWireType(h) {
              return !!h;
            },
            toWireType: function toWireType(h, k) {
              return k ? d : e;
            },
            argPackAdvance: 8,
            readValueFromPointer: function readValueFromPointer(h) {
              if (1 === c) var k = ma;else if (2 === c) k = E;else if (4 === c) k = F;else throw new TypeError("Unknown boolean type size: " + b);
              return this.fromWireType(k[h >> f]);
            },
            V: null
          });
        },
        g: function g(a, b, c, d, e, f, h, k, m, l, n, p, r) {
          n = P(n);
          f = Z(e, f);
          k && (k = Z(h, k));
          l && (l = Z(m, l));
          r = Z(p, r);
          var u = Da(n);
          gb(u, function () {
            sb("Cannot construct " + n + " due to unbound types", [d]);
          });
          V([a, b, c], d ? [d] : [], function (t) {
            t = t[0];
            if (d) {
              var y = t.N;
              var B = y.X;
            } else B = X.prototype;
            t = Ea(u, function () {
              if (Object.getPrototypeOf(this) !== da) throw new M("Use 'new' to construct " + n);
              if (void 0 === I.Y) throw new M(n + " has no accessible constructor");
              var lb = I.Y[arguments.length];
              if (void 0 === lb) throw new M("Tried to invoke ctor of " + n + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(I.Y).toString() + ") parameters instead!");
              return lb.apply(this, arguments);
            });
            var da = Object.create(B, {
              constructor: {
                value: t
              }
            });
            t.prototype = da;
            var I = new hb(n, t, da, r, y, f, k, l);
            y = new Y(n, I, !0, !1);
            B = new Y(n + "*", I, !1, !1);
            var mb = new Y(n + " const*", I, !1, !0);
            Va[a] = {
              pointerType: B,
              la: mb
            };
            pb(u, t);
            return [y, B, mb];
          });
        },
        e: function e(a, b, c, d, _e2, f, h) {
          var k = ub(c, d);
          b = P(b);
          f = Z(_e2, f);
          V([], [a], function (m) {
            function l() {
              sb("Cannot call " + n + " due to unbound types", k);
            }
            m = m[0];
            var n = m.name + "." + b;
            b.startsWith("@@") && (b = Symbol[b.substring(2)]);
            var p = m.N.constructor;
            void 0 === p[b] ? (l.Z = c - 1, p[b] = l) : (fb(p, b, n), p[b].S[c - 1] = l);
            V([], k, function (r) {
              r = tb(n, [r[0], null].concat(r.slice(1)), null, f, h);
              void 0 === p[b].S ? (r.Z = c - 1, p[b] = r) : p[b].S[c - 1] = r;
              return [];
            });
            return [];
          });
        },
        q: function q(a, b, c, d, e, f) {
          0 < b || x();
          var h = ub(b, c);
          e = Z(d, e);
          V([], [a], function (k) {
            k = k[0];
            var m = "constructor " + k.name;
            void 0 === k.N.Y && (k.N.Y = []);
            if (void 0 !== k.N.Y[b - 1]) throw new M("Cannot register multiple constructors with identical number of parameters (" + (b - 1) + ") for class '" + k.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
            k.N.Y[b - 1] = function () {
              sb("Cannot construct " + k.name + " due to unbound types", h);
            };
            V([], h, function (l) {
              l.splice(1, 0, null);
              k.N.Y[b - 1] = tb(m, l, null, e, f);
              return [];
            });
            return [];
          });
        },
        b: function b(a, _b2, c, d, e, f, h, k) {
          var m = ub(c, d);
          _b2 = P(_b2);
          f = Z(e, f);
          V([], [a], function (l) {
            function n() {
              sb("Cannot call " + p + " due to unbound types", m);
            }
            l = l[0];
            var p = l.name + "." + _b2;
            _b2.startsWith("@@") && (_b2 = Symbol[_b2.substring(2)]);
            k && l.N.ja.push(_b2);
            var r = l.N.X,
              u = r[_b2];
            void 0 === u || void 0 === u.S && u.className !== l.name && u.Z === c - 2 ? (n.Z = c - 2, n.className = l.name, r[_b2] = n) : (fb(r, _b2, p), r[_b2].S[c - 2] = n);
            V([], m, function (t) {
              t = tb(p, t, l, f, h);
              void 0 === r[_b2].S ? (t.Z = c - 2, r[_b2] = t) : r[_b2].S[c - 2] = t;
              return [];
            });
            return [];
          });
        },
        B: function B(a, b) {
          b = P(b);
          W(a, {
            name: b,
            fromWireType: function fromWireType(c) {
              var d = O(c);
              vb(c);
              return d;
            },
            toWireType: function toWireType(c, d) {
              return Ha(d);
            },
            argPackAdvance: 8,
            readValueFromPointer: bb,
            V: null
          });
        },
        o: function o(a, b, c) {
          c = db(c);
          b = P(b);
          W(a, {
            name: b,
            fromWireType: function fromWireType(d) {
              return d;
            },
            toWireType: function toWireType(d, e) {
              return e;
            },
            argPackAdvance: 8,
            readValueFromPointer: wb(b, c),
            V: null
          });
        },
        f: function f(a, b, c, d, e) {
          b = P(b);
          -1 === e && (e = 4294967295);
          e = db(c);
          var f = function f(k) {
            return k;
          };
          if (0 === d) {
            var h = 32 - 8 * c;
            f = function f(k) {
              return k << h >>> h;
            };
          }
          c = b.includes("unsigned") ? function (k, m) {
            return m >>> 0;
          } : function (k, m) {
            return m;
          };
          W(a, {
            name: b,
            fromWireType: f,
            toWireType: c,
            argPackAdvance: 8,
            readValueFromPointer: xb(b, e, 0 !== d),
            V: null
          });
        },
        c: function c(a, b, _c2) {
          function d(f) {
            f >>= 2;
            var h = G;
            return new e(C, h[f + 1], h[f]);
          }
          var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
          _c2 = P(_c2);
          W(a, {
            name: _c2,
            fromWireType: d,
            argPackAdvance: 8,
            readValueFromPointer: d
          }, {
            ua: !0
          });
        },
        p: function p(a, b) {
          b = P(b);
          var c = "std::string" === b;
          W(a, {
            name: b,
            fromWireType: function fromWireType(d) {
              var e = G[d >> 2],
                f = d + 4;
              if (c) for (var h = f, k = 0; k <= e; ++k) {
                var m = f + k;
                if (k == e || 0 == D[m]) {
                  h = h ? A(D, h, m - h) : "";
                  if (void 0 === l) var l = h;else l += String.fromCharCode(0), l += h;
                  h = m + 1;
                }
              } else {
                l = Array(e);
                for (k = 0; k < e; ++k) l[k] = String.fromCharCode(D[f + k]);
                l = l.join("");
              }
              S(d);
              return l;
            },
            toWireType: function toWireType(d, e) {
              e instanceof ArrayBuffer && (e = new Uint8Array(e));
              var f,
                h = "string" == typeof e;
              h || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || N("Cannot pass non-string to std::string");
              if (c && h) {
                var k = 0;
                for (f = 0; f < e.length; ++f) {
                  var m = e.charCodeAt(f);
                  127 >= m ? k++ : 2047 >= m ? k += 2 : 55296 <= m && 57343 >= m ? (k += 4, ++f) : k += 3;
                }
                f = k;
              } else f = e.length;
              k = Nb(4 + f + 1);
              m = k + 4;
              G[k >> 2] = f;
              if (c && h) {
                if (h = m, m = f + 1, f = D, 0 < m) {
                  m = h + m - 1;
                  for (var l = 0; l < e.length; ++l) {
                    var n = e.charCodeAt(l);
                    if (55296 <= n && 57343 >= n) {
                      var p = e.charCodeAt(++l);
                      n = 65536 + ((n & 1023) << 10) | p & 1023;
                    }
                    if (127 >= n) {
                      if (h >= m) break;
                      f[h++] = n;
                    } else {
                      if (2047 >= n) {
                        if (h + 1 >= m) break;
                        f[h++] = 192 | n >> 6;
                      } else {
                        if (65535 >= n) {
                          if (h + 2 >= m) break;
                          f[h++] = 224 | n >> 12;
                        } else {
                          if (h + 3 >= m) break;
                          f[h++] = 240 | n >> 18;
                          f[h++] = 128 | n >> 12 & 63;
                        }
                        f[h++] = 128 | n >> 6 & 63;
                      }
                      f[h++] = 128 | n & 63;
                    }
                  }
                  f[h] = 0;
                }
              } else if (h) for (h = 0; h < f; ++h) l = e.charCodeAt(h), 255 < l && (S(m), N("String has UTF-16 code units that do not fit in 8 bits")), D[m + h] = l;else for (h = 0; h < f; ++h) D[m + h] = e[h];
              null !== d && d.push(S, k);
              return k;
            },
            argPackAdvance: 8,
            readValueFromPointer: bb,
            V: function V(d) {
              S(d);
            }
          });
        },
        k: function k(a, b, c) {
          c = P(c);
          if (2 === b) {
            var d = yb;
            var e = zb;
            var f = Ab;
            var h = function h() {
              return na;
            };
            var k = 1;
          } else 4 === b && (d = Bb, e = Cb, f = Db, h = function h() {
            return G;
          }, k = 2);
          W(a, {
            name: c,
            fromWireType: function fromWireType(m) {
              for (var l = G[m >> 2], n = h(), p, r = m + 4, u = 0; u <= l; ++u) {
                var t = m + 4 + u * b;
                if (u == l || 0 == n[t >> k]) r = d(r, t - r), void 0 === p ? p = r : (p += String.fromCharCode(0), p += r), r = t + b;
              }
              S(m);
              return p;
            },
            toWireType: function toWireType(m, l) {
              "string" != typeof l && N("Cannot pass non-string to C++ string type " + c);
              var n = f(l),
                p = Nb(4 + n + b);
              G[p >> 2] = n >> k;
              e(l, p + 4, n + b);
              null !== m && m.push(S, p);
              return p;
            },
            argPackAdvance: 8,
            readValueFromPointer: bb,
            V: function V(m) {
              S(m);
            }
          });
        },
        m: function m(a, b, c, d, e, f) {
          $a[a] = {
            name: P(b),
            fa: Z(c, d),
            W: Z(e, f),
            ia: []
          };
        },
        i: function i(a, b, c, d, e, f, h, k, m, l) {
          $a[a].ia.push({
            oa: P(b),
            ta: c,
            ra: Z(d, e),
            sa: f,
            za: h,
            ya: Z(k, m),
            Aa: l
          });
        },
        D: function D(a, b) {
          b = P(b);
          W(a, {
            va: !0,
            name: b,
            argPackAdvance: 0,
            fromWireType: function fromWireType() {},
            toWireType: function toWireType() {}
          });
        },
        t: function t(a, b, c, d, e) {
          a = Gb[a];
          b = O(b);
          c = Fb(c);
          var f = [];
          G[d >> 2] = Ha(f);
          return a(b, c, f, e);
        },
        u: function u(a, b, c, d) {
          a = Gb[a];
          b = O(b);
          c = Fb(c);
          a(b, c, null, d);
        },
        h: vb,
        n: function n(a, b) {
          var c = Ib(a, b),
            d = c[0];
          b = d.name + "_$" + c.slice(1).map(function (h) {
            return h.name;
          }).join("_") + "$";
          var e = Jb[b];
          if (void 0 !== e) return e;
          var f = Array(a - 1);
          e = Hb(function (h, k, m, l) {
            for (var n = 0, p = 0; p < a - 1; ++p) f[p] = c[p + 1].readValueFromPointer(l + n), n += c[p + 1].argPackAdvance;
            h = h[k].apply(h, f);
            for (p = 0; p < a - 1; ++p) c[p + 1].ma && c[p + 1].ma(f[p]);
            if (!d.va) return d.toWireType(m, h);
          });
          return Jb[b] = e;
        },
        E: function E(a) {
          4 < a && (L[a].ga += 1);
        },
        s: function s(a) {
          var b = O(a);
          ab(b);
          vb(a);
        },
        d: function d() {
          x("");
        },
        y: function y(a, b, c) {
          D.copyWithin(a, b, b + c);
        },
        x: function x(a) {
          var b = D.length;
          a >>>= 0;
          if (2147483648 < a) return !1;
          for (var c = 1; 4 >= c; c *= 2) {
            var d = b * (1 + 0.2 / c);
            d = Math.min(d, a + 100663296);
            var e = Math;
            d = Math.max(a, d);
            e = e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536);
            a: {
              try {
                z.grow(e - C.byteLength + 65535 >>> 16);
                qa(z.buffer);
                var f = 1;
                break a;
              } catch (h) {}
              f = void 0;
            }
            if (f) return !0;
          }
          return !1;
        },
        A: function A() {
          return 52;
        },
        v: function v() {
          return 70;
        },
        z: function z(a, b, c, d) {
          for (var e = 0, f = 0; f < c; f++) {
            var h = G[b >> 2],
              k = G[b + 4 >> 2];
            b += 8;
            for (var m = 0; m < k; m++) {
              var l = D[h + m],
                n = Kb[a];
              0 === l || 10 === l ? ((1 === a ? ea : v)(A(n, 0)), n.length = 0) : n.push(l);
            }
            e += k;
          }
          G[d >> 2] = e;
          return 0;
        },
        a: z
      };
    (function () {
      function a(e) {
        g.asm = e.exports;
        ra = g.asm.J;
        ta.unshift(g.asm.F);
        H--;
        g.monitorRunDependencies && g.monitorRunDependencies(H);
        0 == H && (null !== wa && (clearInterval(wa), wa = null), J && (e = J, J = null, e()));
      }
      function b(e) {
        a(e.instance);
      }
      function c(e) {
        return Ba().then(function () {
          return ja(d);
        }).then(function (f) {
          return f;
        }).then(e, function (f) {
          v("failed to asynchronously prepare wasm: " + f);
          x(f);
        });
      }
      var d = {
        a: Ob
      };
      H++;
      g.monitorRunDependencies && g.monitorRunDependencies(H);
      if (g.instantiateWasm) try {
        return g.instantiateWasm(d, a);
      } catch (e) {
        v("Module.instantiateWasm callback failed with error: " + e), ba(e);
      }
      (function () {
        return w || "function" != typeof WebAssembly.instantiateStreaming || xa(K) || "function" != typeof fetch ? c(b) : fetch(K, {
          credentials: "same-origin"
        }).then(function (e) {
          return WebAssembly.instantiateStreaming(e, d).then(b, function (f) {
            v("wasm streaming compile failed: " + f);
            v("falling back to ArrayBuffer instantiation");
            return c(b);
          });
        });
      })()["catch"](ba);
      return {};
    })();
    g.___wasm_call_ctors = function () {
      return (g.___wasm_call_ctors = g.asm.F).apply(null, arguments);
    };
    var Pa = g.___getTypeName = function () {
      return (Pa = g.___getTypeName = g.asm.G).apply(null, arguments);
    };
    g.__embind_initialize_bindings = function () {
      return (g.__embind_initialize_bindings = g.asm.H).apply(null, arguments);
    };
    var Nb = g._malloc = function () {
        return (Nb = g._malloc = g.asm.I).apply(null, arguments);
      },
      S = g._free = function () {
        return (S = g._free = g.asm.K).apply(null, arguments);
      };
    g.dynCall_jiji = function () {
      return (g.dynCall_jiji = g.asm.L).apply(null, arguments);
    };
    var Pb;
    J = function Qb() {
      Pb || Rb();
      Pb || (J = Qb);
    };
    function Rb() {
      function a() {
        if (!Pb && (Pb = !0, g.calledRun = !0, !la)) {
          Ca(ta);
          aa(g);
          if (g.onRuntimeInitialized) g.onRuntimeInitialized();
          if (g.postRun) for ("function" == typeof g.postRun && (g.postRun = [g.postRun]); g.postRun.length;) {
            var b = g.postRun.shift();
            ua.unshift(b);
          }
          Ca(ua);
        }
      }
      if (!(0 < H)) {
        if (g.preRun) for ("function" == typeof g.preRun && (g.preRun = [g.preRun]); g.preRun.length;) va();
        Ca(sa);
        0 < H || (g.setStatus ? (g.setStatus("Running..."), setTimeout(function () {
          setTimeout(function () {
            g.setStatus("");
          }, 1);
          a();
        }, 1)) : a());
      }
    }
    if (g.preInit) for ("function" == typeof g.preInit && (g.preInit = [g.preInit]); 0 < g.preInit.length;) g.preInit.pop()();
    Rb();
    return loadYoga.ready;
  };
}();
if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = loadYoga;else if (typeof define === 'function' && define['amd']) define([], function () {
  return loadYoga;
});else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["loadYoga"] = loadYoga;
