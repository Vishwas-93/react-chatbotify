import "./style.css";
import * as se from "react";
import Na, { createContext as Mi, useContext as Pi, Fragment as ks, useState as Oe, useEffect as xt, isValidElement as Vs, createElement as Ls, useRef as Yn, useCallback as fn, useMemo as Qo, forwardRef as nr } from "react";
var xs = { exports: {} }, LA = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Os;
function fl() {
  if (Os)
    return LA;
  Os = 1;
  var m = Na, d = Symbol.for("react.element"), D = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, s = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(R, S, x) {
    var Y, k = {}, q = null, me = null;
    x !== void 0 && (q = "" + x), S.key !== void 0 && (q = "" + S.key), S.ref !== void 0 && (me = S.ref);
    for (Y in S)
      C.call(S, Y) && !M.hasOwnProperty(Y) && (k[Y] = S[Y]);
    if (R && R.defaultProps)
      for (Y in S = R.defaultProps, S)
        k[Y] === void 0 && (k[Y] = S[Y]);
    return { $$typeof: d, type: R, key: q, ref: me, props: k, _owner: s.current };
  }
  return LA.Fragment = D, LA.jsx = F, LA.jsxs = F, LA;
}
var OA = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ns;
function dl() {
  return Ns || (Ns = 1, process.env.NODE_ENV !== "production" && function() {
    var m = Na, d = Symbol.for("react.element"), D = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), R = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), me = Symbol.for("react.offscreen"), ae = Symbol.iterator, ye = "@@iterator";
    function X(I) {
      if (I === null || typeof I != "object")
        return null;
      var G = ae && I[ae] || I[ye];
      return typeof G == "function" ? G : null;
    }
    var N = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function J(I) {
      {
        for (var G = arguments.length, ee = new Array(G > 1 ? G - 1 : 0), ge = 1; ge < G; ge++)
          ee[ge - 1] = arguments[ge];
        de("error", I, ee);
      }
    }
    function de(I, G, ee) {
      {
        var ge = N.ReactDebugCurrentFrame, Z = ge.getStackAddendum();
        Z !== "" && (G += "%s", ee = ee.concat([Z]));
        var K = ee.map(function(re) {
          return String(re);
        });
        K.unshift("Warning: " + G), Function.prototype.apply.call(console[I], console, K);
      }
    }
    var oe = !1, Ae = !1, le = !1, te = !1, Ie = !1, De;
    De = Symbol.for("react.module.reference");
    function We(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === C || I === M || Ie || I === s || I === x || I === Y || te || I === me || oe || Ae || le || typeof I == "object" && I !== null && (I.$$typeof === q || I.$$typeof === k || I.$$typeof === F || I.$$typeof === R || I.$$typeof === S || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === De || I.getModuleId !== void 0));
    }
    function xe(I, G, ee) {
      var ge = I.displayName;
      if (ge)
        return ge;
      var Z = G.displayName || G.name || "";
      return Z !== "" ? ee + "(" + Z + ")" : ee;
    }
    function Be(I) {
      return I.displayName || "Context";
    }
    function Ee(I) {
      if (I == null)
        return null;
      if (typeof I.tag == "number" && J("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof I == "function")
        return I.displayName || I.name || null;
      if (typeof I == "string")
        return I;
      switch (I) {
        case C:
          return "Fragment";
        case D:
          return "Portal";
        case M:
          return "Profiler";
        case s:
          return "StrictMode";
        case x:
          return "Suspense";
        case Y:
          return "SuspenseList";
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case R:
            var G = I;
            return Be(G) + ".Consumer";
          case F:
            var ee = I;
            return Be(ee._context) + ".Provider";
          case S:
            return xe(I, I.render, "ForwardRef");
          case k:
            var ge = I.displayName || null;
            return ge !== null ? ge : Ee(I.type) || "Memo";
          case q: {
            var Z = I, K = Z._payload, re = Z._init;
            try {
              return Ee(re(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ne = Object.assign, Ke = 0, Te, Qe, Pe, Ge, tt, je, ke;
    function st() {
    }
    st.__reactDisabledLog = !0;
    function ht() {
      {
        if (Ke === 0) {
          Te = console.log, Qe = console.info, Pe = console.warn, Ge = console.error, tt = console.group, je = console.groupCollapsed, ke = console.groupEnd;
          var I = {
            configurable: !0,
            enumerable: !0,
            value: st,
            writable: !0
          };
          Object.defineProperties(console, {
            info: I,
            log: I,
            warn: I,
            error: I,
            group: I,
            groupCollapsed: I,
            groupEnd: I
          });
        }
        Ke++;
      }
    }
    function nt() {
      {
        if (Ke--, Ke === 0) {
          var I = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ne({}, I, {
              value: Te
            }),
            info: Ne({}, I, {
              value: Qe
            }),
            warn: Ne({}, I, {
              value: Pe
            }),
            error: Ne({}, I, {
              value: Ge
            }),
            group: Ne({}, I, {
              value: tt
            }),
            groupCollapsed: Ne({}, I, {
              value: je
            }),
            groupEnd: Ne({}, I, {
              value: ke
            })
          });
        }
        Ke < 0 && J("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _e = N.ReactCurrentDispatcher, Tt;
    function Ot(I, G, ee) {
      {
        if (Tt === void 0)
          try {
            throw Error();
          } catch (Z) {
            var ge = Z.stack.trim().match(/\n( *(at )?)/);
            Tt = ge && ge[1] || "";
          }
        return `
` + Tt + I;
      }
    }
    var rt = !1, yt;
    {
      var ot = typeof WeakMap == "function" ? WeakMap : Map;
      yt = new ot();
    }
    function en(I, G) {
      if (!I || rt)
        return "";
      {
        var ee = yt.get(I);
        if (ee !== void 0)
          return ee;
      }
      var ge;
      rt = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = _e.current, _e.current = null, ht();
      try {
        if (G) {
          var re = function() {
            throw Error();
          };
          if (Object.defineProperty(re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(re, []);
            } catch (Ye) {
              ge = Ye;
            }
            Reflect.construct(I, [], re);
          } else {
            try {
              re.call();
            } catch (Ye) {
              ge = Ye;
            }
            I.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ye) {
            ge = Ye;
          }
          I();
        }
      } catch (Ye) {
        if (Ye && ge && typeof Ye.stack == "string") {
          for (var ne = Ye.stack.split(`
`), he = ge.stack.split(`
`), ce = ne.length - 1, pe = he.length - 1; ce >= 1 && pe >= 0 && ne[ce] !== he[pe]; )
            pe--;
          for (; ce >= 1 && pe >= 0; ce--, pe--)
            if (ne[ce] !== he[pe]) {
              if (ce !== 1 || pe !== 1)
                do
                  if (ce--, pe--, pe < 0 || ne[ce] !== he[pe]) {
                    var we = `
` + ne[ce].replace(" at new ", " at ");
                    return I.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", I.displayName)), typeof I == "function" && yt.set(I, we), we;
                  }
                while (ce >= 1 && pe >= 0);
              break;
            }
        }
      } finally {
        rt = !1, _e.current = K, nt(), Error.prepareStackTrace = Z;
      }
      var Ze = I ? I.displayName || I.name : "", Xe = Ze ? Ot(Ze) : "";
      return typeof I == "function" && yt.set(I, Xe), Xe;
    }
    function at(I, G, ee) {
      return en(I, !1);
    }
    function ft(I) {
      var G = I.prototype;
      return !!(G && G.isReactComponent);
    }
    function Zt(I, G, ee) {
      if (I == null)
        return "";
      if (typeof I == "function")
        return en(I, ft(I));
      if (typeof I == "string")
        return Ot(I);
      switch (I) {
        case x:
          return Ot("Suspense");
        case Y:
          return Ot("SuspenseList");
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case S:
            return at(I.render);
          case k:
            return Zt(I.type, G, ee);
          case q: {
            var ge = I, Z = ge._payload, K = ge._init;
            try {
              return Zt(K(Z), G, ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Nt = Object.prototype.hasOwnProperty, In = {}, Ct = N.ReactDebugCurrentFrame;
    function jt(I) {
      if (I) {
        var G = I._owner, ee = Zt(I.type, I._source, G ? G.type : null);
        Ct.setExtraStackFrame(ee);
      } else
        Ct.setExtraStackFrame(null);
    }
    function tn(I, G, ee, ge, Z) {
      {
        var K = Function.call.bind(Nt);
        for (var re in I)
          if (K(I, re)) {
            var ne = void 0;
            try {
              if (typeof I[re] != "function") {
                var he = Error((ge || "React class") + ": " + ee + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof I[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw he.name = "Invariant Violation", he;
              }
              ne = I[re](G, re, ge, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ce) {
              ne = ce;
            }
            ne && !(ne instanceof Error) && (jt(Z), J("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ge || "React class", ee, re, typeof ne), jt(null)), ne instanceof Error && !(ne.message in In) && (In[ne.message] = !0, jt(Z), J("Failed %s type: %s", ee, ne.message), jt(null));
          }
      }
    }
    var kn = Array.isArray;
    function wt(I) {
      return kn(I);
    }
    function dt(I) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, ee = G && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return ee;
      }
    }
    function At(I) {
      try {
        return gt(I), !1;
      } catch {
        return !0;
      }
    }
    function gt(I) {
      return "" + I;
    }
    function Ft(I) {
      if (At(I))
        return J("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dt(I)), gt(I);
    }
    var Yt = N.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, zt, Kt, pt;
    pt = {};
    function dn(I) {
      if (Nt.call(I, "ref")) {
        var G = Object.getOwnPropertyDescriptor(I, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return I.ref !== void 0;
    }
    function Ht(I) {
      if (Nt.call(I, "key")) {
        var G = Object.getOwnPropertyDescriptor(I, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return I.key !== void 0;
    }
    function Gn(I, G) {
      if (typeof I.ref == "string" && Yt.current && G && Yt.current.stateNode !== G) {
        var ee = Ee(Yt.current.type);
        pt[ee] || (J('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ee(Yt.current.type), I.ref), pt[ee] = !0);
      }
    }
    function xn(I, G) {
      {
        var ee = function() {
          zt || (zt = !0, J("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        ee.isReactWarning = !0, Object.defineProperty(I, "key", {
          get: ee,
          configurable: !0
        });
      }
    }
    function Gt(I, G) {
      {
        var ee = function() {
          Kt || (Kt = !0, J("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        ee.isReactWarning = !0, Object.defineProperty(I, "ref", {
          get: ee,
          configurable: !0
        });
      }
    }
    var hn = function(I, G, ee, ge, Z, K, re) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: I,
        key: G,
        ref: ee,
        props: re,
        // Record the component responsible for creating this element.
        _owner: K
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ge
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function Ut(I, G, ee, ge, Z) {
      {
        var K, re = {}, ne = null, he = null;
        ee !== void 0 && (Ft(ee), ne = "" + ee), Ht(G) && (Ft(G.key), ne = "" + G.key), dn(G) && (he = G.ref, Gn(G, Z));
        for (K in G)
          Nt.call(G, K) && !ze.hasOwnProperty(K) && (re[K] = G[K]);
        if (I && I.defaultProps) {
          var ce = I.defaultProps;
          for (K in ce)
            re[K] === void 0 && (re[K] = ce[K]);
        }
        if (ne || he) {
          var pe = typeof I == "function" ? I.displayName || I.name || "Unknown" : I;
          ne && xn(re, pe), he && Gt(re, pe);
        }
        return hn(I, ne, he, Z, ge, Yt.current, re);
      }
    }
    var lt = N.ReactCurrentOwner, Mt = N.ReactDebugCurrentFrame;
    function vt(I) {
      if (I) {
        var G = I._owner, ee = Zt(I.type, I._source, G ? G.type : null);
        Mt.setExtraStackFrame(ee);
      } else
        Mt.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function Pt(I) {
      return typeof I == "object" && I !== null && I.$$typeof === d;
    }
    function $t() {
      {
        if (lt.current) {
          var I = Ee(lt.current.type);
          if (I)
            return `

Check the render method of \`` + I + "`.";
        }
        return "";
      }
    }
    function qt(I) {
      {
        if (I !== void 0) {
          var G = I.fileName.replace(/^.*[\\\/]/, ""), ee = I.lineNumber;
          return `

Check your code at ` + G + ":" + ee + ".";
        }
        return "";
      }
    }
    var It = {};
    function nn(I) {
      {
        var G = $t();
        if (!G) {
          var ee = typeof I == "string" ? I : I.displayName || I.name;
          ee && (G = `

Check the top-level render call using <` + ee + ">.");
        }
        return G;
      }
    }
    function Bt(I, G) {
      {
        if (!I._store || I._store.validated || I.key != null)
          return;
        I._store.validated = !0;
        var ee = nn(G);
        if (It[ee])
          return;
        It[ee] = !0;
        var ge = "";
        I && I._owner && I._owner !== lt.current && (ge = " It was passed a child from " + Ee(I._owner.type) + "."), vt(I), J('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, ge), vt(null);
      }
    }
    function Je(I, G) {
      {
        if (typeof I != "object")
          return;
        if (wt(I))
          for (var ee = 0; ee < I.length; ee++) {
            var ge = I[ee];
            Pt(ge) && Bt(ge, G);
          }
        else if (Pt(I))
          I._store && (I._store.validated = !0);
        else if (I) {
          var Z = X(I);
          if (typeof Z == "function" && Z !== I.entries)
            for (var K = Z.call(I), re; !(re = K.next()).done; )
              Pt(re.value) && Bt(re.value, G);
        }
      }
    }
    function pn(I) {
      {
        var G = I.type;
        if (G == null || typeof G == "string")
          return;
        var ee;
        if (typeof G == "function")
          ee = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === S || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === k))
          ee = G.propTypes;
        else
          return;
        if (ee) {
          var ge = Ee(G);
          tn(ee, I.props, "prop", ge, I);
        } else if (G.PropTypes !== void 0 && !Le) {
          Le = !0;
          var Z = Ee(G);
          J("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && J("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gn(I) {
      {
        for (var G = Object.keys(I.props), ee = 0; ee < G.length; ee++) {
          var ge = G[ee];
          if (ge !== "children" && ge !== "key") {
            vt(I), J("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ge), vt(null);
            break;
          }
        }
        I.ref !== null && (vt(I), J("Invalid attribute `ref` supplied to `React.Fragment`."), vt(null));
      }
    }
    function vn(I, G, ee, ge, Z, K) {
      {
        var re = We(I);
        if (!re) {
          var ne = "";
          (I === void 0 || typeof I == "object" && I !== null && Object.keys(I).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var he = qt(Z);
          he ? ne += he : ne += $t();
          var ce;
          I === null ? ce = "null" : wt(I) ? ce = "array" : I !== void 0 && I.$$typeof === d ? (ce = "<" + (Ee(I.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof I, J("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, ne);
        }
        var pe = Ut(I, G, ee, Z, K);
        if (pe == null)
          return pe;
        if (re) {
          var we = G.children;
          if (we !== void 0)
            if (ge)
              if (wt(we)) {
                for (var Ze = 0; Ze < we.length; Ze++)
                  Je(we[Ze], I);
                Object.freeze && Object.freeze(we);
              } else
                J("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(we, I);
        }
        return I === C ? gn(pe) : pn(pe), pe;
      }
    }
    function qe(I, G, ee) {
      return vn(I, G, ee, !0);
    }
    function mn(I, G, ee) {
      return vn(I, G, ee, !1);
    }
    var Rn = mn, Qn = qe;
    OA.Fragment = C, OA.jsx = Rn, OA.jsxs = Qn;
  }()), OA;
}
process.env.NODE_ENV === "production" ? xs.exports = fl() : xs.exports = dl();
var U = xs.exports;
const Ks = Mi({ settings: {}, setSettings: () => null }), Dt = () => Pi(Ks), $s = Mi({ styles: {}, setStyles: () => null }), Et = () => Pi($s);
const hl = ({
  buttons: m
}) => {
  var s, M, F, R, S;
  const { settings: d } = Dt(), { styles: D } = Et(), C = {
    backgroundImage: `linear-gradient(to right, ${(s = d.general) == null ? void 0 : s.secondaryColor},
			${(M = d.general) == null ? void 0 : M.primaryColor})`,
    ...D.headerStyle
  };
  return /* @__PURE__ */ U.jsxs("div", { style: C, className: "rcb-chat-header-container", children: [
    /* @__PURE__ */ U.jsxs("div", { className: "rcb-chat-header", children: [
      ((F = d.header) == null ? void 0 : F.showAvatar) && /* @__PURE__ */ U.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(R = d.header) == null ? void 0 : R.avatar})` },
          className: "rcb-bot-avatar"
        }
      ),
      (S = d.header) == null ? void 0 : S.title
    ] }),
    /* @__PURE__ */ U.jsx("div", { className: "rcb-chat-header", children: m == null ? void 0 : m.map(
      (x, Y) => /* @__PURE__ */ U.jsx(ks, { children: x }, Y)
    ) })
  ] });
};
const pl = ({
  chatBodyRef: m,
  isScrolling: d,
  setIsScrolling: D,
  unreadCount: C
}) => {
  var ae, ye, X;
  const { settings: s } = Dt(), { styles: M } = Et(), [F, R] = Oe(!1), S = {
    color: (ae = s.general) == null ? void 0 : ae.primaryColor,
    borderColor: (ye = s.general) == null ? void 0 : ye.primaryColor,
    ...M.chatMessagePromptHoveredStyle
  }, x = () => {
    R(!0);
  }, Y = () => {
    R(!1);
  };
  function k(N) {
    if (!m.current)
      return;
    const J = m.current.scrollTop, oe = m.current.scrollHeight - m.current.clientHeight - J, Ae = 20;
    let le = 0;
    function te() {
      if (!m.current)
        return;
      le += Ae;
      const Ie = q(le, J, oe, N);
      m.current.scrollTop = Ie, le < N ? requestAnimationFrame(te) : D(!1);
    }
    te();
  }
  const q = (N, J, de, oe) => (N /= oe / 2, N < 1 ? de / 2 * N * N + J : (N--, -de / 2 * (N * (N - 2) - 1) + J)), me = () => {
    var J;
    return m.current && ((J = s.chatWindow) == null ? void 0 : J.showMessagePrompt) && d && C > 0 ? "visible" : "hidden";
  };
  return /* @__PURE__ */ U.jsx("div", { className: `rcb-message-prompt-container ${me()}`, children: /* @__PURE__ */ U.jsx(
    "div",
    {
      onMouseEnter: x,
      onMouseLeave: Y,
      style: F ? S : M.chatMessagePromptStyle,
      onMouseDown: (N) => {
        N.preventDefault(), k(600);
      },
      className: "rcb-message-prompt-text",
      children: (X = s.chatWindow) == null ? void 0 : X.messagePromptText
    }
  ) });
}, qs = Mi({ messages: [], setMessages: () => null }), el = () => Pi(qs);
const gl = ({
  chatBodyRef: m,
  isBotTyping: d,
  isLoadingChatHistory: D,
  chatScrollHeight: C,
  setChatScrollHeight: s,
  setIsLoadingChatHistory: M,
  isScrolling: F,
  setIsScrolling: R,
  unreadCount: S,
  setUnreadCount: x
}) => {
  var le, te, Ie, De, We, xe, Be, Ee, Ne, Ke;
  const { settings: Y } = Dt(), { styles: k } = Et(), { messages: q } = el(), me = {
    ...k == null ? void 0 : k.bodyStyle,
    scrollbarWidth: (le = Y.chatWindow) != null && le.showScrollbar ? "auto" : "none"
  }, ae = {
    backgroundColor: (te = Y.general) == null ? void 0 : te.primaryColor,
    color: "#fff",
    maxWidth: (Ie = Y.userBubble) != null && Ie.showAvatar ? "65%" : "70%",
    ...k.userBubbleStyle
  }, ye = (De = Y.userBubble) != null && De.animate ? "rcb-user-message-entry" : "", X = {
    backgroundColor: (We = Y.general) == null ? void 0 : We.secondaryColor,
    color: "#fff",
    maxWidth: (xe = Y.botBubble) != null && xe.showAvatar ? "65%" : "70%",
    ...k.botBubbleStyle
  }, N = (Be = Y.botBubble) != null && Be.animate ? "rcb-bot-message-entry" : "";
  xt(() => {
    var Te;
    if (m.current) {
      if (D) {
        const { scrollHeight: Qe } = m.current, Pe = Qe - C;
        m.current.scrollTop = m.current.scrollTop + Pe, M(!1);
        return;
      }
      ((Te = Y.chatWindow) != null && Te.autoJumpToBottom || !F) && (m.current.scrollTop = m.current.scrollHeight, Y.isOpen && x(0));
    }
  }, [q.length, d]), xt(() => {
    m.current && (s(m.current.scrollHeight), F || (m.current.scrollTop = m.current.scrollHeight, Y.isOpen && x(0)));
  }, [(Ee = m.current) == null ? void 0 : Ee.scrollHeight]), xt(() => {
    F || x(0);
  }, [F]);
  const J = () => {
    var Ge;
    if (!m.current)
      return;
    const { scrollTop: Te, clientHeight: Qe, scrollHeight: Pe } = m.current;
    R(
      Te + Qe < Pe - (((Ge = Y.chatWindow) == null ? void 0 : Ge.messagePromptOffset) || 30)
    ), !F && Te + Qe >= Pe - 1 && (m.current.scrollTop = Pe - Qe - 1);
  }, de = (Te) => Te === 0 ? !0 : q[Te].sender !== q[Te - 1].sender, oe = (Te, Qe) => {
    var je, ke, st, ht;
    const Pe = de(Qe), Ge = ((je = Y.userBubble) == null ? void 0 : je.showAvatar) && Pe;
    let tt = "rcb-user-message";
    return !Pe && ((ke = Y.userBubble) != null && ke.showAvatar) && (tt += " rcb-user-message-offset"), /* @__PURE__ */ U.jsxs("div", { className: "rcb-user-message-container", children: [
      typeof Te.content == "string" ? (st = Y == null ? void 0 : Y.userBubble) != null && st.dangerouslySetInnerHtml ? /* @__PURE__ */ U.jsx(
        "div",
        {
          style: { ...ae, display: "inline" },
          className: `${tt} ${ye}`,
          dangerouslySetInnerHTML: { __html: Te.content }
        }
      ) : /* @__PURE__ */ U.jsx(
        "div",
        {
          style: ae,
          className: `${tt} ${ye}`,
          children: Te.content
        }
      ) : Te.content,
      Ge && /* @__PURE__ */ U.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(ht = Y.userBubble) == null ? void 0 : ht.avatar})` },
          className: "rcb-message-user-avatar"
        }
      )
    ] });
  }, Ae = (Te, Qe) => {
    var je, ke, st, ht;
    const Pe = de(Qe), Ge = ((je = Y.botBubble) == null ? void 0 : je.showAvatar) && Pe;
    let tt = "rcb-bot-message";
    return !Pe && ((ke = Y.botBubble) != null && ke.showAvatar) && (tt += " rcb-bot-message-offset"), /* @__PURE__ */ U.jsxs("div", { className: "rcb-bot-message-container", children: [
      Ge && /* @__PURE__ */ U.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(st = Y.botBubble) == null ? void 0 : st.avatar})` },
          className: "rcb-message-bot-avatar"
        }
      ),
      typeof Te.content == "string" ? (ht = Y == null ? void 0 : Y.botBubble) != null && ht.dangerouslySetInnerHtml ? /* @__PURE__ */ U.jsx(
        "div",
        {
          style: { ...X, display: "inline" },
          className: `${tt} ${N}`,
          dangerouslySetInnerHTML: { __html: Te.content }
        }
      ) : /* @__PURE__ */ U.jsx(
        "div",
        {
          style: X,
          className: `${tt} ${N}`,
          children: Te.content
        }
      ) : Te.content
    ] });
  };
  return /* @__PURE__ */ U.jsxs(
    "div",
    {
      style: me,
      className: "rcb-chat-body-container",
      ref: m,
      onScroll: J,
      children: [
        q.map((Te, Qe) => Te.sender === "system" ? /* @__PURE__ */ U.jsx("div", { children: Te.content }, Qe) : /* @__PURE__ */ U.jsx("div", { children: Te.sender === "user" ? oe(Te, Qe) : Ae(Te, Qe) }, Qe)),
        d && /* @__PURE__ */ U.jsxs("div", { className: "rcb-bot-message-container", children: [
          ((Ne = Y.botBubble) == null ? void 0 : Ne.showAvatar) && /* @__PURE__ */ U.jsx(
            "div",
            {
              style: { backgroundImage: `url(${(Ke = Y.botBubble) == null ? void 0 : Ke.avatar})` },
              className: "rcb-message-bot-avatar"
            }
          ),
          /* @__PURE__ */ U.jsx(
            "div",
            {
              onMouseDown: (Te) => {
                Te.preventDefault();
              },
              className: `rcb-bot-message ${N}`,
              children: /* @__PURE__ */ U.jsxs("div", { className: "rcb-typing-indicator", style: { ...k == null ? void 0 : k.rcbTypingIndicatorStyle }, children: [
                /* @__PURE__ */ U.jsx("span", { className: "rcb-dot", style: { ...k == null ? void 0 : k.rcbDotStyle } }),
                /* @__PURE__ */ U.jsx("span", { className: "rcb-dot", style: { ...k == null ? void 0 : k.rcbDotStyle } }),
                /* @__PURE__ */ U.jsx("span", { className: "rcb-dot", style: { ...k == null ? void 0 : k.rcbDotStyle } })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ U.jsx(
          pl,
          {
            chatBodyRef: m,
            isScrolling: F,
            setIsScrolling: R,
            unreadCount: S
          }
        )
      ]
    }
  );
}, er = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), js = (m) => {
  if (!m)
    return !1;
  const d = m.getBoundingClientRect(), D = window.innerHeight || document.documentElement.clientHeight, C = window.innerWidth || document.documentElement.clientWidth;
  return d.top >= 0 && d.left >= 0 && d.bottom <= D && d.right <= C;
};
const vl = ({
  inputRef: m,
  textAreaDisabled: d,
  textAreaSensitiveMode: D,
  inputLength: C,
  setInputLength: s,
  handleSubmit: M,
  hasFlowStarted: F,
  setHasFlowStarted: R,
  buttons: S
}) => {
  var te, Ie, De, We, xe, Be, Ee, Ne, Ke, Te;
  const { settings: x } = Dt(), { styles: Y } = Et(), [k, q] = Oe(!1), me = {
    boxSizing: er ? "content-box" : "border-box",
    ...Y.chatInputAreaStyle
  }, ae = {
    outline: d ? "" : "none",
    boxShadow: d ? "" : `0 0 5px ${(te = x.general) == null ? void 0 : te.primaryColor}`,
    boxSizing: er ? "content-box" : "border-box",
    ...Y.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...Y.chatInputAreaFocusedStyle
  }, ye = {
    cursor: `url(${(Ie = x.general) == null ? void 0 : Ie.actionDisabledIcon}), auto`,
    caretColor: "transparent",
    boxSizing: er ? "content-box" : "border-box",
    ...Y.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...Y.chatInputAreaDisabledStyle
  }, X = {
    color: "#989898",
    ...Y.characterLimitStyle
  }, N = {
    color: "#ff0000",
    ...Y.characterLimitReachedStyle
  }, J = d ? (De = x.chatInput) == null ? void 0 : De.disabledPlaceholderText : (We = x.chatInput) == null ? void 0 : We.enabledPlaceholderText, de = () => {
    d || q(!0);
  }, oe = () => {
    q(!1);
  }, Ae = (Qe) => {
    var Pe;
    if (Qe.key === "Enter") {
      if (Qe.shiftKey) {
        (Pe = x.chatInput) != null && Pe.allowNewline || Qe.preventDefault();
        return;
      }
      Qe.preventDefault(), M();
    }
  }, le = (Qe) => {
    var Pe, Ge;
    if (d && m.current) {
      m.current.value = "";
      return;
    }
    if (m.current) {
      const tt = (Pe = x.chatInput) == null ? void 0 : Pe.characterLimit, ke = ((Ge = x.chatInput) == null ? void 0 : Ge.allowNewline) ? Qe.target.value : Qe.target.value.replace(/\n/g, " ");
      tt != null && tt >= 0 && ke.length > tt ? m.current.value = ke.slice(0, tt) : m.current.value = ke, s(m.current.value.length);
    }
  };
  return /* @__PURE__ */ U.jsxs(
    "div",
    {
      onMouseDown: (Qe) => {
        var Pe;
        Qe.stopPropagation(), !F && ((Pe = x.general) == null ? void 0 : Pe.flowStartTrigger) === "ON_CHATBOT_INTERACT" && R(!0);
      },
      style: Y.chatInputContainerStyle,
      className: "rcb-chat-input",
      children: [
        D && ((xe = x.sensitiveInput) != null && xe.maskInTextArea) ? /* @__PURE__ */ U.jsx(
          "input",
          {
            ref: m,
            type: "password",
            className: "rcb-chat-input-textarea",
            style: d ? ye : k ? ae : me,
            placeholder: J,
            onChange: le,
            onKeyDown: Ae,
            onFocus: de,
            onBlur: oe
          }
        ) : /* @__PURE__ */ U.jsx(
          "textarea",
          {
            ref: m,
            style: d ? ye : k ? ae : me,
            rows: 1,
            className: "rcb-chat-input-textarea",
            placeholder: J,
            onChange: le,
            onKeyDown: Ae,
            onFocus: de,
            onBlur: oe
          }
        ),
        /* @__PURE__ */ U.jsxs("div", { className: "rcb-chat-input-button-container", children: [
          S == null ? void 0 : S.map(
            (Qe, Pe) => /* @__PURE__ */ U.jsx(ks, { children: Qe }, Pe)
          ),
          ((Be = x.chatInput) == null ? void 0 : Be.showCharacterCount) && ((Ee = x.chatInput) == null ? void 0 : Ee.characterLimit) != null && ((Ne = x.chatInput) == null ? void 0 : Ne.characterLimit) > 0 && /* @__PURE__ */ U.jsxs(
            "div",
            {
              className: "rcb-chat-input-char-counter",
              style: C >= ((Ke = x.chatInput) == null ? void 0 : Ke.characterLimit) ? N : X,
              children: [
                C,
                "/",
                (Te = x.chatInput) == null ? void 0 : Te.characterLimit
              ]
            }
          )
        ] })
      ]
    }
  );
};
const ml = ({
  buttons: m
}) => {
  var C;
  const { settings: d } = Dt(), { styles: D } = Et();
  return /* @__PURE__ */ U.jsxs("div", { style: D.footerStyle, className: "rcb-chat-footer-container", children: [
    /* @__PURE__ */ U.jsx("div", { className: "rcb-chat-footer", children: m == null ? void 0 : m.map(
      (s, M) => /* @__PURE__ */ U.jsx(ks, { children: s }, M)
    ) }),
    /* @__PURE__ */ U.jsx("span", { children: (C = d.footer) == null ? void 0 : C.text })
  ] });
};
const yl = ({
  unreadCount: m
}) => {
  var R, S, x, Y, k, q;
  const { settings: d, setSettings: D } = Dt(), { styles: C } = Et(), s = () => {
    D({ ...d, isOpen: !d.isOpen });
  }, M = {
    backgroundImage: `linear-gradient(to right, ${(R = d.general) == null ? void 0 : R.secondaryColor},
			${(S = d.general) == null ? void 0 : S.primaryColor})`,
    ...C.chatButtonStyle
  }, F = {
    backgroundImage: `url(${(x = d.chatButton) == null ? void 0 : x.icon})`,
    ...C.chatIconStyle
  };
  return /* @__PURE__ */ U.jsx(U.Fragment, { children: !((Y = d.general) != null && Y.embedded) && /* @__PURE__ */ U.jsxs(
    "button",
    {
      "aria-label": "Open Chat",
      style: M,
      className: `rcb-toggle-button ${d.isOpen ? "rcb-button-hide" : "rcb-button-show"}`,
      onClick: s,
      children: [
        /* @__PURE__ */ U.jsx(
          "span",
          {
            className: "rcb-toggle-icon",
            style: F
          }
        ),
        !((k = d.notification) != null && k.disabled) && ((q = d.notification) == null ? void 0 : q.showCount) && /* @__PURE__ */ U.jsx("span", { style: C.notificationBadgeStyle, className: "rcb-badge", children: m })
      ]
    }
  ) });
};
const wl = () => {
  var k, q, me, ae, ye;
  const { settings: m, setSettings: d } = Dt(), { styles: D } = Et(), [C, s] = Oe(!1), [M, F] = Oe(!1), [R, S] = Oe(0);
  xt(() => {
    var N, J, de;
    const X = (N = m.tooltip) == null ? void 0 : N.mode;
    if (X === "ALWAYS")
      if (er) {
        let oe;
        m.isOpen ? oe = (((J = D.chatWindowStyle) == null ? void 0 : J.width) || 375) - (((de = D.chatButtonStyle) == null ? void 0 : de.width) || 75) : oe = 0, S(oe), s(!0);
      } else
        m.isOpen ? s(!1) : s(!0);
    else
      X === "NEVER" ? s(!1) : X === "START" ? M ? s(!1) : (F(!0), s(!0)) : X === "CLOSE" && s(!m.isOpen);
  }, [m.isOpen]);
  const x = {
    transform: `translateX(-${R}px)`,
    right: (((k = D.chatButtonStyle) == null ? void 0 : k.width) || 75) + 40,
    bottom: 30,
    backgroundColor: (q = m.general) == null ? void 0 : q.secondaryColor,
    color: (me = m.general) == null ? void 0 : me.secondaryColor,
    ...D.tooltipStyle
  }, Y = {
    borderColor: `transparent transparent transparent ${x.backgroundColor}`
  };
  return /* @__PURE__ */ U.jsx(U.Fragment, { children: !((ae = m.general) != null && ae.embedded) && /* @__PURE__ */ U.jsxs(
    "div",
    {
      style: x,
      className: `rcb-chat-tooltip ${C ? "rcb-tooltip-show" : "rcb-tooltip-hide"}`,
      onClick: () => d({ ...m, isOpen: !0 }),
      children: [
        /* @__PURE__ */ U.jsx("span", { style: { color: "#fff" }, children: (ye = m.tooltip) == null ? void 0 : ye.text }),
        /* @__PURE__ */ U.jsx("span", { className: "rcb-chat-tooltip-tail", style: Y })
      ]
    }
  ) });
};
const bl = ({
  chatHistory: m,
  showChatHistory: d
}) => {
  var x, Y, k;
  const { settings: D } = Dt(), { styles: C } = Et(), [s, M] = Oe(!1), F = {
    color: (x = D.general) == null ? void 0 : x.primaryColor,
    borderColor: (Y = D.general) == null ? void 0 : Y.primaryColor,
    ...C.chatHistoryButtonHoveredStyle
  }, R = () => {
    M(!0);
  }, S = () => {
    M(!1);
  };
  return /* @__PURE__ */ U.jsx("div", { className: "rcb-view-history-container", children: /* @__PURE__ */ U.jsx(
    "div",
    {
      onMouseEnter: R,
      onMouseLeave: S,
      style: s ? F : C.chatHistoryButtonStyle,
      onMouseDown: (q) => {
        q.preventDefault(), d(m);
      },
      className: "rcb-view-history-button",
      children: /* @__PURE__ */ U.jsx("p", { children: (k = D.chatHistory) == null ? void 0 : k.viewChatHistoryButtonText })
    }
  ) });
}, tl = Mi({ paths: [], setPaths: () => null }), Rs = () => Pi(tl);
const Sl = ({
  checkboxes: m,
  checkedItems: d,
  path: D,
  handleActionInput: C
}) => {
  var X, N, J, de, oe, Ae, le, te, Ie, De, We;
  const { settings: s } = Dt(), { styles: M } = Et(), { paths: F } = Rs(), [R, S] = Oe(/* @__PURE__ */ new Set()), [x, Y] = Oe(!1), k = {
    cursor: x ? `url(${(X = s.general) == null ? void 0 : X.actionDisabledIcon}), auto` : "pointer",
    color: (N = s.general) == null ? void 0 : N.primaryColor,
    borderColor: (J = s.general) == null ? void 0 : J.primaryColor,
    ...M.botCheckboxRowStyle
  }, q = {
    cursor: x || R.size < m.min ? `url(${(de = s.general) == null ? void 0 : de.actionDisabledIcon}), auto` : "pointer",
    color: (oe = s.general) == null ? void 0 : oe.primaryColor,
    borderColor: (Ae = s.general) == null ? void 0 : Ae.primaryColor,
    ...M.botCheckboxNextStyle
  }, me = {
    cursor: x ? `url(${(le = s.general) == null ? void 0 : le.actionDisabledIcon}), auto` : "pointer",
    color: "transparent",
    ...M.botCheckMarkStyle
  }, ae = {
    cursor: x ? `url(${(te = s.general) == null ? void 0 : te.actionDisabledIcon}), auto` : "pointer",
    color: "#fff",
    borderColor: (Ie = s.general) == null ? void 0 : Ie.primaryColor,
    backgroundColor: (De = s.general) == null ? void 0 : De.primaryColor,
    ...M.botCheckMarkSelectedStyle
  };
  xt(() => {
    F.length > 0 && F[F.length - 1] !== D && Y(!0);
  }, [F]);
  const ye = (xe) => {
    x || S((Be) => {
      const Ee = new Set(Be);
      if (Ee.has(xe))
        d.delete(xe), Ee.delete(xe);
      else {
        if (R.size == m.max)
          return Be;
        d.add(xe), Ee.add(xe);
      }
      return Ee;
    });
  };
  return /* @__PURE__ */ U.jsxs("div", { className: `rcb-checkbox-container ${(We = s.botBubble) != null && We.showAvatar ? "rcb-checkbox-offset" : ""}`, children: [
    m.items.map((xe) => /* @__PURE__ */ U.jsx(
      "div",
      {
        onMouseDown: (Be) => {
          Be.preventDefault(), ye(xe);
        },
        style: k,
        className: "rcb-checkbox-row-container",
        children: /* @__PURE__ */ U.jsxs("div", { className: "rcb-checkbox-row", children: [
          /* @__PURE__ */ U.jsx(
            "div",
            {
              style: R.has(xe) ? ae : me,
              className: "rcb-checkbox-mark"
            }
          ),
          /* @__PURE__ */ U.jsx("div", { className: "rcb-checkbox-label", children: xe })
        ] })
      },
      xe
    )),
    /* @__PURE__ */ U.jsx(
      "button",
      {
        style: q,
        className: "rcb-checkbox-next-button",
        disabled: x || R.size < m.min,
        onMouseDown: (xe) => {
          var Ee;
          xe.preventDefault();
          const Be = Array.from(d).join(", ");
          Y(!0), C(D, Be, (Ee = s.chatInput) == null ? void 0 : Ee.sendCheckboxOutput);
        }
      }
    )
  ] });
}, Dl = async (m, d, D, C) => {
  const s = m.checkboxes;
  if (!s)
    return;
  let M;
  if (typeof s == "function" ? (M = s(C), M instanceof Promise && (M = await M)) : M = s, M.items.length == 0)
    return;
  M.min == null && (M.min = 1), M.max == null && (M.max = M.items.length), M.min > M.max && (M.min = M.max);
  const F = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ U.jsx(
    Sl,
    {
      checkboxes: M,
      checkedItems: F,
      path: d,
      handleActionInput: D
    }
  );
  C.injectMessage(R);
}, El = async (m, d) => {
  const D = m.function;
  if (!D)
    return;
  const C = D(d);
  return C instanceof Promise ? await C : C;
}, Cl = async (m, d) => {
  const D = m.message;
  if (!D)
    return;
  if (typeof D == "string") {
    D.trim() !== "" && await d.injectMessage(D);
    return;
  }
  let C = D(d);
  C instanceof Promise && (C = await C), C && C.trim() !== "" && await d.injectMessage(C);
};
const Il = ({
  options: m,
  path: d,
  handleActionInput: D
}) => {
  var ae, ye, X, N, J, de;
  const { settings: C } = Dt(), { styles: s } = Et(), { paths: M } = Rs(), [F, R] = Oe([]), [S, x] = Oe(!1), Y = {
    cursor: S ? `url(${(ae = C.general) == null ? void 0 : ae.actionDisabledIcon}), auto` : "pointer",
    color: (ye = C.general) == null ? void 0 : ye.primaryColor,
    borderColor: (X = C.general) == null ? void 0 : X.primaryColor,
    backgroundColor: "#fff",
    ...s.botOptionStyle
  }, k = {
    color: "#fff",
    borderColor: (N = C.general) == null ? void 0 : N.primaryColor,
    backgroundColor: (J = C.general) == null ? void 0 : J.primaryColor,
    ...s.botOptionHoveredStyle
  };
  xt(() => {
    M.length > 0 && M[M.length - 1] !== d && x(!0);
  }, [M]);
  const q = (oe) => {
    R((Ae) => {
      const le = [...Ae];
      return le[oe] = !0, le;
    });
  }, me = (oe) => {
    R((Ae) => {
      const le = [...Ae];
      return le[oe] = !1, le;
    });
  };
  return /* @__PURE__ */ U.jsx("div", { className: `rcb-options-container ${(de = C.botBubble) != null && de.showAvatar ? "rcb-options-offset" : ""}`, children: m.map((oe, Ae) => {
    const le = F[Ae] && !S;
    return /* @__PURE__ */ U.jsx(
      "div",
      {
        className: "rcb-options",
        style: le ? k : Y,
        onMouseEnter: () => q(Ae),
        onMouseLeave: () => me(Ae),
        onMouseDown: (te) => {
          var Ie;
          te.preventDefault(), !S && (x(!0), D(d, oe, (Ie = C.chatInput) == null ? void 0 : Ie.sendOptionOutput));
        },
        children: oe
      },
      oe
    );
  }) });
}, xl = async (m, d, D, C) => {
  const s = m.options;
  if (!s)
    return;
  let M;
  typeof s == "function" ? (M = s(C), M instanceof Promise && (M = await M)) : M = s;
  const F = /* @__PURE__ */ U.jsx(Il, { options: M, path: d, handleActionInput: D });
  C.injectMessage(F);
}, Tl = async (m, d, D) => {
  const C = m.path;
  if (!C)
    return !1;
  if (typeof C == "string")
    return D((F) => [...F, C]), !0;
  let s = C(d);
  if (s instanceof Promise && (s = await s), !s)
    return !1;
  const M = s;
  return D((F) => [...F, M]), !0;
}, Ml = async (m, d) => {
  const D = m.component;
  if (D) {
    if (typeof D == "function") {
      let C = D(d);
      if (C instanceof Promise && (C = await C), !C)
        return;
      await d.injectMessage(C);
      return;
    }
    await d.injectMessage(D);
  }
}, Pl = async (m, d, D, C, s) => {
  const M = m[d];
  if (!M)
    throw new Error("block is not valid.");
  const F = M.transition;
  let R;
  if (typeof F == "function" ? (R = F(D), R instanceof Promise && (R = await R)) : R = F, !R || R instanceof Promise || R.duration == null || typeof R.duration != "number")
    return;
  R.interruptable || (R.interruptable = !1);
  const S = setTimeout(async () => {
    await Ts(m, d, D, C);
  }, R.duration);
  R.interruptable && s(S);
}, Bl = async (m, d, D) => {
  const C = m.chatDisabled;
  if (C == null)
    return;
  let s;
  typeof C == "function" ? (s = C(D), s instanceof Promise && (s = await s)) : s = C, d(s);
}, nl = async (m, d, D) => {
  const C = m.isSensitive;
  if (!C) {
    d(!1);
    return;
  }
  let s;
  typeof C == "function" ? (s = C(D), s instanceof Promise && (s = await s)) : s = C, d(s);
}, kl = async (m, d, D, C, s, M, F, R) => {
  const S = m[d];
  if (!S)
    throw new Error("Block is not valid.");
  for (const x of Object.keys(S))
    switch (x) {
      case "message":
        await Cl(S, D);
        break;
      case "options":
        await xl(S, d, R, D);
        break;
      case "checkboxes":
        await Dl(S, d, R, D);
        break;
      case "component":
        await Ml(S, D);
        break;
      case "chatDisabled":
        await Bl(S, C, D);
        break;
      case "isSensitive":
        await nl(S, s, D);
        break;
      case "transition":
        await Pl(m, d, D, M, F);
    }
}, Ts = async (m, d, D, C) => {
  const s = m[d];
  if (!s)
    throw new Error("Block is not valid.");
  const M = Object.keys(s);
  for (const F of M)
    F === "function" && await El(s, D);
  return M.includes("path") ? await Tl(s, D, C) : !1;
};
var jo = {}, Lo = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fs;
function Rl() {
  if (Fs)
    return Lo;
  Fs = 1;
  var m = Na;
  function d(o) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, g = 1; g < arguments.length; g++)
      c += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + o + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var D = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, s = {}, M = {};
  function F(o) {
    return D.call(M, o) ? !0 : D.call(s, o) ? !1 : C.test(o) ? M[o] = !0 : (s[o] = !0, !1);
  }
  function R(o, c, g, y, L, B, H) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = y, this.attributeNamespace = L, this.mustUseProperty = g, this.propertyName = o, this.type = c, this.sanitizeURL = B, this.removeEmptyString = H;
  }
  var S = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    S[o] = new R(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var c = o[0];
    S[c] = new R(c, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    S[o] = new R(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    S[o] = new R(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    S[o] = new R(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    S[o] = new R(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    S[o] = new R(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    S[o] = new R(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    S[o] = new R(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var x = /[\-:]([a-z])/g;
  function Y(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var c = o.replace(
      x,
      Y
    );
    S[c] = new R(c, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var c = o.replace(x, Y);
    S[c] = new R(c, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var c = o.replace(x, Y);
    S[c] = new R(c, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    S[o] = new R(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), S.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    S[o] = new R(o, 1, !1, o.toLowerCase(), null, !0, !0);
  });
  var k = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, q = ["Webkit", "ms", "Moz", "O"];
  Object.keys(k).forEach(function(o) {
    q.forEach(function(c) {
      c = c + o.charAt(0).toUpperCase() + o.substring(1), k[c] = k[o];
    });
  });
  var me = /["'&<>]/;
  function ae(o) {
    if (typeof o == "boolean" || typeof o == "number")
      return "" + o;
    o = "" + o;
    var c = me.exec(o);
    if (c) {
      var g = "", y, L = 0;
      for (y = c.index; y < o.length; y++) {
        switch (o.charCodeAt(y)) {
          case 34:
            c = "&quot;";
            break;
          case 38:
            c = "&amp;";
            break;
          case 39:
            c = "&#x27;";
            break;
          case 60:
            c = "&lt;";
            break;
          case 62:
            c = "&gt;";
            break;
          default:
            continue;
        }
        L !== y && (g += o.substring(L, y)), L = y + 1, g += c;
      }
      o = L !== y ? g + o.substring(L, y) : g;
    }
    return o;
  }
  var ye = /([A-Z])/g, X = /^ms-/, N = Array.isArray;
  function J(o, c) {
    return { insertionMode: o, selectedValue: c };
  }
  function de(o, c, g) {
    switch (c) {
      case "select":
        return J(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return J(2, null);
      case "math":
        return J(3, null);
      case "foreignObject":
        return J(1, null);
      case "table":
        return J(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return J(5, null);
      case "colgroup":
        return J(7, null);
      case "tr":
        return J(6, null);
    }
    return 4 <= o.insertionMode || o.insertionMode === 0 ? J(1, null) : o;
  }
  var oe = /* @__PURE__ */ new Map();
  function Ae(o, c, g) {
    if (typeof g != "object")
      throw Error(d(62));
    c = !0;
    for (var y in g)
      if (D.call(g, y)) {
        var L = g[y];
        if (L != null && typeof L != "boolean" && L !== "") {
          if (y.indexOf("--") === 0) {
            var B = ae(y);
            L = ae(("" + L).trim());
          } else {
            B = y;
            var H = oe.get(B);
            H !== void 0 || (H = ae(B.replace(ye, "-$1").toLowerCase().replace(X, "-ms-")), oe.set(B, H)), B = H, L = typeof L == "number" ? L === 0 || D.call(k, y) ? "" + L : L + "px" : ae(("" + L).trim());
          }
          c ? (c = !1, o.push(' style="', B, ":", L)) : o.push(";", B, ":", L);
        }
      }
    c || o.push('"');
  }
  function le(o, c, g, y) {
    switch (g) {
      case "style":
        Ae(o, c, y);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (c = S.hasOwnProperty(g) ? S[g] : null, c !== null) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans)
              return;
        }
        switch (g = c.attributeName, c.type) {
          case 3:
            y && o.push(" ", g, '=""');
            break;
          case 4:
            y === !0 ? o.push(" ", g, '=""') : y !== !1 && o.push(" ", g, '="', ae(y), '"');
            break;
          case 5:
            isNaN(y) || o.push(" ", g, '="', ae(y), '"');
            break;
          case 6:
            !isNaN(y) && 1 <= y && o.push(" ", g, '="', ae(y), '"');
            break;
          default:
            c.sanitizeURL && (y = "" + y), o.push(" ", g, '="', ae(y), '"');
        }
      } else if (F(g)) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = g.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-")
              return;
        }
        o.push(" ", g, '="', ae(y), '"');
      }
    }
  }
  function te(o, c, g) {
    if (c != null) {
      if (g != null)
        throw Error(d(60));
      if (typeof c != "object" || !("__html" in c))
        throw Error(d(61));
      c = c.__html, c != null && o.push("" + c);
    }
  }
  function Ie(o) {
    var c = "";
    return m.Children.forEach(o, function(g) {
      g != null && (c += g);
    }), c;
  }
  function De(o, c, g, y) {
    o.push(Be(g));
    var L = g = null, B;
    for (B in c)
      if (D.call(c, B)) {
        var H = c[B];
        if (H != null)
          switch (B) {
            case "children":
              g = H;
              break;
            case "dangerouslySetInnerHTML":
              L = H;
              break;
            default:
              le(o, y, B, H);
          }
      }
    return o.push(">"), te(o, L, g), typeof g == "string" ? (o.push(ae(g)), null) : g;
  }
  var We = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, xe = /* @__PURE__ */ new Map();
  function Be(o) {
    var c = xe.get(o);
    if (c === void 0) {
      if (!We.test(o))
        throw Error(d(65, o));
      c = "<" + o, xe.set(o, c);
    }
    return c;
  }
  function Ee(o, c, g, y, L) {
    switch (c) {
      case "select":
        o.push(Be("select"));
        var B = null, H = null;
        for (ve in g)
          if (D.call(g, ve)) {
            var V = g[ve];
            if (V != null)
              switch (ve) {
                case "children":
                  B = V;
                  break;
                case "dangerouslySetInnerHTML":
                  H = V;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  le(o, y, ve, V);
              }
          }
        return o.push(">"), te(o, H, B), B;
      case "option":
        H = L.selectedValue, o.push(Be("option"));
        var ue = V = null, be = null, ve = null;
        for (B in g)
          if (D.call(g, B)) {
            var He = g[B];
            if (He != null)
              switch (B) {
                case "children":
                  V = He;
                  break;
                case "selected":
                  be = He;
                  break;
                case "dangerouslySetInnerHTML":
                  ve = He;
                  break;
                case "value":
                  ue = He;
                default:
                  le(o, y, B, He);
              }
          }
        if (H != null)
          if (g = ue !== null ? "" + ue : Ie(V), N(H)) {
            for (y = 0; y < H.length; y++)
              if ("" + H[y] === g) {
                o.push(' selected=""');
                break;
              }
          } else
            "" + H === g && o.push(' selected=""');
        else
          be && o.push(' selected=""');
        return o.push(">"), te(o, ve, V), V;
      case "textarea":
        o.push(Be("textarea")), ve = H = B = null;
        for (V in g)
          if (D.call(g, V) && (ue = g[V], ue != null))
            switch (V) {
              case "children":
                ve = ue;
                break;
              case "value":
                B = ue;
                break;
              case "defaultValue":
                H = ue;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(d(91));
              default:
                le(
                  o,
                  y,
                  V,
                  ue
                );
            }
        if (B === null && H !== null && (B = H), o.push(">"), ve != null) {
          if (B != null)
            throw Error(d(92));
          if (N(ve) && 1 < ve.length)
            throw Error(d(93));
          B = "" + ve;
        }
        return typeof B == "string" && B[0] === `
` && o.push(`
`), B !== null && o.push(ae("" + B)), null;
      case "input":
        o.push(Be("input")), ue = ve = V = B = null;
        for (H in g)
          if (D.call(g, H) && (be = g[H], be != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(399, "input"));
              case "defaultChecked":
                ue = be;
                break;
              case "defaultValue":
                V = be;
                break;
              case "checked":
                ve = be;
                break;
              case "value":
                B = be;
                break;
              default:
                le(o, y, H, be);
            }
        return ve !== null ? le(o, y, "checked", ve) : ue !== null && le(o, y, "checked", ue), B !== null ? le(o, y, "value", B) : V !== null && le(o, y, "value", V), o.push("/>"), null;
      case "menuitem":
        o.push(Be("menuitem"));
        for (var _t in g)
          if (D.call(g, _t) && (B = g[_t], B != null))
            switch (_t) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(400));
              default:
                le(o, y, _t, B);
            }
        return o.push(">"), null;
      case "title":
        o.push(Be("title")), B = null;
        for (He in g)
          if (D.call(g, He) && (H = g[He], H != null))
            switch (He) {
              case "children":
                B = H;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(d(434));
              default:
                le(o, y, He, H);
            }
        return o.push(">"), B;
      case "listing":
      case "pre":
        o.push(Be(c)), H = B = null;
        for (ue in g)
          if (D.call(g, ue) && (V = g[ue], V != null))
            switch (ue) {
              case "children":
                B = V;
                break;
              case "dangerouslySetInnerHTML":
                H = V;
                break;
              default:
                le(o, y, ue, V);
            }
        if (o.push(">"), H != null) {
          if (B != null)
            throw Error(d(60));
          if (typeof H != "object" || !("__html" in H))
            throw Error(d(61));
          g = H.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? o.push(`
`, g) : o.push("" + g));
        }
        return typeof B == "string" && B[0] === `
` && o.push(`
`), B;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        o.push(Be(c));
        for (var kt in g)
          if (D.call(g, kt) && (B = g[kt], B != null))
            switch (kt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(399, c));
              default:
                le(o, y, kt, B);
            }
        return o.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return De(
          o,
          g,
          c,
          y
        );
      case "html":
        return L.insertionMode === 0 && o.push("<!DOCTYPE html>"), De(o, g, c, y);
      default:
        if (c.indexOf("-") === -1 && typeof g.is != "string")
          return De(o, g, c, y);
        o.push(Be(c)), H = B = null;
        for (be in g)
          if (D.call(g, be) && (V = g[be], V != null))
            switch (be) {
              case "children":
                B = V;
                break;
              case "dangerouslySetInnerHTML":
                H = V;
                break;
              case "style":
                Ae(o, y, V);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                F(be) && typeof V != "function" && typeof V != "symbol" && o.push(" ", be, '="', ae(V), '"');
            }
        return o.push(">"), te(o, H, B), B;
    }
  }
  function Ne(o, c, g) {
    if (o.push('<!--$?--><template id="'), g === null)
      throw Error(d(395));
    return o.push(g), o.push('"></template>');
  }
  function Ke(o, c, g, y) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return o.push('<div hidden id="'), o.push(c.segmentPrefix), c = y.toString(16), o.push(c), o.push('">');
      case 2:
        return o.push('<svg aria-hidden="true" style="display:none" id="'), o.push(c.segmentPrefix), c = y.toString(16), o.push(c), o.push('">');
      case 3:
        return o.push('<math aria-hidden="true" style="display:none" id="'), o.push(c.segmentPrefix), c = y.toString(16), o.push(c), o.push('">');
      case 4:
        return o.push('<table hidden id="'), o.push(c.segmentPrefix), c = y.toString(16), o.push(c), o.push('">');
      case 5:
        return o.push('<table hidden><tbody id="'), o.push(c.segmentPrefix), c = y.toString(16), o.push(c), o.push('">');
      case 6:
        return o.push('<table hidden><tr id="'), o.push(c.segmentPrefix), c = y.toString(16), o.push(c), o.push('">');
      case 7:
        return o.push('<table hidden><colgroup id="'), o.push(c.segmentPrefix), c = y.toString(16), o.push(c), o.push('">');
      default:
        throw Error(d(397));
    }
  }
  function Te(o, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return o.push("</div>");
      case 2:
        return o.push("</svg>");
      case 3:
        return o.push("</math>");
      case 4:
        return o.push("</table>");
      case 5:
        return o.push("</tbody></table>");
      case 6:
        return o.push("</tr></table>");
      case 7:
        return o.push("</colgroup></table>");
      default:
        throw Error(d(397));
    }
  }
  var Qe = /[<\u2028\u2029]/g;
  function Pe(o) {
    return JSON.stringify(o).replace(Qe, function(c) {
      switch (c) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function Ge(o, c) {
    return c = c === void 0 ? "" : c, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: c + "P:", segmentPrefix: c + "S:", boundaryPrefix: c + "B:", idPrefix: c, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: o };
  }
  function tt(o, c, g, y) {
    return g.generateStaticMarkup ? (o.push(ae(c)), !1) : (c === "" ? o = y : (y && o.push("<!-- -->"), o.push(ae(c)), o = !0), o);
  }
  var je = Object.assign, ke = Symbol.for("react.element"), st = Symbol.for("react.portal"), ht = Symbol.for("react.fragment"), nt = Symbol.for("react.strict_mode"), _e = Symbol.for("react.profiler"), Tt = Symbol.for("react.provider"), Ot = Symbol.for("react.context"), rt = Symbol.for("react.forward_ref"), yt = Symbol.for("react.suspense"), ot = Symbol.for("react.suspense_list"), en = Symbol.for("react.memo"), at = Symbol.for("react.lazy"), ft = Symbol.for("react.scope"), Zt = Symbol.for("react.debug_trace_mode"), Nt = Symbol.for("react.legacy_hidden"), In = Symbol.for("react.default_value"), Ct = Symbol.iterator;
  function jt(o) {
    if (o == null)
      return null;
    if (typeof o == "function")
      return o.displayName || o.name || null;
    if (typeof o == "string")
      return o;
    switch (o) {
      case ht:
        return "Fragment";
      case st:
        return "Portal";
      case _e:
        return "Profiler";
      case nt:
        return "StrictMode";
      case yt:
        return "Suspense";
      case ot:
        return "SuspenseList";
    }
    if (typeof o == "object")
      switch (o.$$typeof) {
        case Ot:
          return (o.displayName || "Context") + ".Consumer";
        case Tt:
          return (o._context.displayName || "Context") + ".Provider";
        case rt:
          var c = o.render;
          return o = o.displayName, o || (o = c.displayName || c.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
        case en:
          return c = o.displayName || null, c !== null ? c : jt(o.type) || "Memo";
        case at:
          c = o._payload, o = o._init;
          try {
            return jt(o(c));
          } catch {
          }
      }
    return null;
  }
  var tn = {};
  function kn(o, c) {
    if (o = o.contextTypes, !o)
      return tn;
    var g = {}, y;
    for (y in o)
      g[y] = c[y];
    return g;
  }
  var wt = null;
  function dt(o, c) {
    if (o !== c) {
      o.context._currentValue2 = o.parentValue, o = o.parent;
      var g = c.parent;
      if (o === null) {
        if (g !== null)
          throw Error(d(401));
      } else {
        if (g === null)
          throw Error(d(401));
        dt(o, g);
      }
      c.context._currentValue2 = c.value;
    }
  }
  function At(o) {
    o.context._currentValue2 = o.parentValue, o = o.parent, o !== null && At(o);
  }
  function gt(o) {
    var c = o.parent;
    c !== null && gt(c), o.context._currentValue2 = o.value;
  }
  function Ft(o, c) {
    if (o.context._currentValue2 = o.parentValue, o = o.parent, o === null)
      throw Error(d(402));
    o.depth === c.depth ? dt(o, c) : Ft(o, c);
  }
  function Yt(o, c) {
    var g = c.parent;
    if (g === null)
      throw Error(d(402));
    o.depth === g.depth ? dt(o, g) : Yt(o, g), c.context._currentValue2 = c.value;
  }
  function ze(o) {
    var c = wt;
    c !== o && (c === null ? gt(o) : o === null ? At(c) : c.depth === o.depth ? dt(c, o) : c.depth > o.depth ? Ft(c, o) : Yt(c, o), wt = o);
  }
  var zt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, c) {
    o = o._reactInternals, o.queue !== null && o.queue.push(c);
  }, enqueueReplaceState: function(o, c) {
    o = o._reactInternals, o.replace = !0, o.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Kt(o, c, g, y) {
    var L = o.state !== void 0 ? o.state : null;
    o.updater = zt, o.props = g, o.state = L;
    var B = { queue: [], replace: !1 };
    o._reactInternals = B;
    var H = c.contextType;
    if (o.context = typeof H == "object" && H !== null ? H._currentValue2 : y, H = c.getDerivedStateFromProps, typeof H == "function" && (H = H(g, L), L = H == null ? L : je({}, L, H), o.state = L), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function"))
      if (c = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), c !== o.state && zt.enqueueReplaceState(o, o.state, null), B.queue !== null && 0 < B.queue.length)
        if (c = B.queue, H = B.replace, B.queue = null, B.replace = !1, H && c.length === 1)
          o.state = c[0];
        else {
          for (B = H ? c[0] : o.state, L = !0, H = H ? 1 : 0; H < c.length; H++) {
            var V = c[H];
            V = typeof V == "function" ? V.call(o, B, g, y) : V, V != null && (L ? (L = !1, B = je({}, B, V)) : je(B, V));
          }
          o.state = B;
        }
      else
        B.queue = null;
  }
  var pt = { id: 1, overflow: "" };
  function dn(o, c, g) {
    var y = o.id;
    o = o.overflow;
    var L = 32 - Ht(y) - 1;
    y &= ~(1 << L), g += 1;
    var B = 32 - Ht(c) + L;
    if (30 < B) {
      var H = L - L % 5;
      return B = (y & (1 << H) - 1).toString(32), y >>= H, L -= H, { id: 1 << 32 - Ht(c) + L | g << L | y, overflow: B + o };
    }
    return { id: 1 << B | g << L | y, overflow: o };
  }
  var Ht = Math.clz32 ? Math.clz32 : Gt, Gn = Math.log, xn = Math.LN2;
  function Gt(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Gn(o) / xn | 0) | 0;
  }
  function hn(o, c) {
    return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
  }
  var Ut = typeof Object.is == "function" ? Object.is : hn, lt = null, Mt = null, vt = null, Le = null, Pt = !1, $t = !1, qt = 0, It = null, nn = 0;
  function Bt() {
    if (lt === null)
      throw Error(d(321));
    return lt;
  }
  function Je() {
    if (0 < nn)
      throw Error(d(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function pn() {
    return Le === null ? vt === null ? (Pt = !1, vt = Le = Je()) : (Pt = !0, Le = vt) : Le.next === null ? (Pt = !1, Le = Le.next = Je()) : (Pt = !0, Le = Le.next), Le;
  }
  function gn() {
    Mt = lt = null, $t = !1, vt = null, nn = 0, Le = It = null;
  }
  function vn(o, c) {
    return typeof c == "function" ? c(o) : c;
  }
  function qe(o, c, g) {
    if (lt = Bt(), Le = pn(), Pt) {
      var y = Le.queue;
      if (c = y.dispatch, It !== null && (g = It.get(y), g !== void 0)) {
        It.delete(y), y = Le.memoizedState;
        do
          y = o(y, g.action), g = g.next;
        while (g !== null);
        return Le.memoizedState = y, [y, c];
      }
      return [Le.memoizedState, c];
    }
    return o = o === vn ? typeof c == "function" ? c() : c : g !== void 0 ? g(c) : c, Le.memoizedState = o, o = Le.queue = { last: null, dispatch: null }, o = o.dispatch = Rn.bind(null, lt, o), [Le.memoizedState, o];
  }
  function mn(o, c) {
    if (lt = Bt(), Le = pn(), c = c === void 0 ? null : c, Le !== null) {
      var g = Le.memoizedState;
      if (g !== null && c !== null) {
        var y = g[1];
        e:
          if (y === null)
            y = !1;
          else {
            for (var L = 0; L < y.length && L < c.length; L++)
              if (!Ut(c[L], y[L])) {
                y = !1;
                break e;
              }
            y = !0;
          }
        if (y)
          return g[0];
      }
    }
    return o = o(), Le.memoizedState = [o, c], o;
  }
  function Rn(o, c, g) {
    if (25 <= nn)
      throw Error(d(301));
    if (o === lt)
      if ($t = !0, o = { action: g, next: null }, It === null && (It = /* @__PURE__ */ new Map()), g = It.get(c), g === void 0)
        It.set(c, o);
      else {
        for (c = g; c.next !== null; )
          c = c.next;
        c.next = o;
      }
  }
  function Qn() {
    throw Error(d(394));
  }
  function I() {
  }
  var G = { readContext: function(o) {
    return o._currentValue2;
  }, useContext: function(o) {
    return Bt(), o._currentValue2;
  }, useMemo: mn, useReducer: qe, useRef: function(o) {
    lt = Bt(), Le = pn();
    var c = Le.memoizedState;
    return c === null ? (o = { current: o }, Le.memoizedState = o) : c;
  }, useState: function(o) {
    return qe(vn, o);
  }, useInsertionEffect: I, useLayoutEffect: function() {
  }, useCallback: function(o, c) {
    return mn(function() {
      return o;
    }, c);
  }, useImperativeHandle: I, useEffect: I, useDebugValue: I, useDeferredValue: function(o) {
    return Bt(), o;
  }, useTransition: function() {
    return Bt(), [
      !1,
      Qn
    ];
  }, useId: function() {
    var o = Mt.treeContext, c = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Ht(o) - 1)).toString(32) + c;
    var g = ee;
    if (g === null)
      throw Error(d(404));
    return c = qt++, o = ":" + g.idPrefix + "R" + o, 0 < c && (o += "H" + c.toString(32)), o + ":";
  }, useMutableSource: function(o, c) {
    return Bt(), c(o._source);
  }, useSyncExternalStore: function(o, c, g) {
    if (g === void 0)
      throw Error(d(407));
    return g();
  } }, ee = null, ge = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Z(o) {
    return console.error(o), null;
  }
  function K() {
  }
  function re(o, c, g, y, L, B, H, V, ue) {
    var be = [], ve = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: y === void 0 ? 12800 : y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ve, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? Z : L, onAllReady: B === void 0 ? K : B, onShellReady: H === void 0 ? K : H, onShellError: V === void 0 ? K : V, onFatalError: ue === void 0 ? K : ue }, g = he(c, 0, null, g, !1, !1), g.parentFlushed = !0, o = ne(c, o, null, g, ve, tn, null, pt), be.push(o), c;
  }
  function ne(o, c, g, y, L, B, H, V) {
    o.allPendingTasks++, g === null ? o.pendingRootTasks++ : g.pendingTasks++;
    var ue = { node: c, ping: function() {
      var be = o.pingedTasks;
      be.push(ue), be.length === 1 && Wt(o);
    }, blockedBoundary: g, blockedSegment: y, abortSet: L, legacyContext: B, context: H, treeContext: V };
    return L.add(ue), ue;
  }
  function he(o, c, g, y, L, B) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: y, boundary: g, lastPushedText: L, textEmbedded: B };
  }
  function ce(o, c) {
    if (o = o.onError(c), o != null && typeof o != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function pe(o, c) {
    var g = o.onShellError;
    g(c), g = o.onFatalError, g(c), o.destination !== null ? (o.status = 2, o.destination.destroy(c)) : (o.status = 1, o.fatalError = c);
  }
  function we(o, c, g, y, L) {
    for (lt = {}, Mt = c, qt = 0, o = g(y, L); $t; )
      $t = !1, qt = 0, nn += 1, Le = null, o = g(y, L);
    return gn(), o;
  }
  function Ze(o, c, g, y) {
    var L = g.render(), B = y.childContextTypes;
    if (B != null) {
      var H = c.legacyContext;
      if (typeof g.getChildContext != "function")
        y = H;
      else {
        g = g.getChildContext();
        for (var V in g)
          if (!(V in B))
            throw Error(d(108, jt(y) || "Unknown", V));
        y = je({}, H, g);
      }
      c.legacyContext = y, Fe(o, c, L), c.legacyContext = H;
    } else
      Fe(o, c, L);
  }
  function Xe(o, c) {
    if (o && o.defaultProps) {
      c = je({}, c), o = o.defaultProps;
      for (var g in o)
        c[g] === void 0 && (c[g] = o[g]);
      return c;
    }
    return c;
  }
  function Ye(o, c, g, y, L) {
    if (typeof g == "function")
      if (g.prototype && g.prototype.isReactComponent) {
        L = kn(g, c.legacyContext);
        var B = g.contextType;
        B = new g(y, typeof B == "object" && B !== null ? B._currentValue2 : L), Kt(B, g, y, L), Ze(o, c, B, g);
      } else {
        B = kn(g, c.legacyContext), L = we(o, c, g, y, B);
        var H = qt !== 0;
        if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0)
          Kt(L, g, y, B), Ze(o, c, L, g);
        else if (H) {
          y = c.treeContext, c.treeContext = dn(y, 1, 0);
          try {
            Fe(o, c, L);
          } finally {
            c.treeContext = y;
          }
        } else
          Fe(o, c, L);
      }
    else if (typeof g == "string") {
      switch (L = c.blockedSegment, B = Ee(L.chunks, g, y, o.responseState, L.formatContext), L.lastPushedText = !1, H = L.formatContext, L.formatContext = de(H, g, y), rn(o, c, B), L.formatContext = H, g) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          L.chunks.push("</", g, ">");
      }
      L.lastPushedText = !1;
    } else {
      switch (g) {
        case Nt:
        case Zt:
        case nt:
        case _e:
        case ht:
          Fe(o, c, y.children);
          return;
        case ot:
          Fe(o, c, y.children);
          return;
        case ft:
          throw Error(d(343));
        case yt:
          e: {
            g = c.blockedBoundary, L = c.blockedSegment, B = y.fallback, y = y.children, H = /* @__PURE__ */ new Set();
            var V = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: H, errorDigest: null }, ue = he(o, L.chunks.length, V, L.formatContext, !1, !1);
            L.children.push(ue), L.lastPushedText = !1;
            var be = he(o, 0, null, L.formatContext, !1, !1);
            be.parentFlushed = !0, c.blockedBoundary = V, c.blockedSegment = be;
            try {
              if (rn(
                o,
                c,
                y
              ), o.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, yn(V, be), V.pendingTasks === 0)
                break e;
            } catch (ve) {
              be.status = 4, V.forceClientRender = !0, V.errorDigest = ce(o, ve);
            } finally {
              c.blockedBoundary = g, c.blockedSegment = L;
            }
            c = ne(o, B, g, ue, H, c.legacyContext, c.context, c.treeContext), o.pingedTasks.push(c);
          }
          return;
      }
      if (typeof g == "object" && g !== null)
        switch (g.$$typeof) {
          case rt:
            if (y = we(o, c, g.render, y, L), qt !== 0) {
              g = c.treeContext, c.treeContext = dn(g, 1, 0);
              try {
                Fe(o, c, y);
              } finally {
                c.treeContext = g;
              }
            } else
              Fe(o, c, y);
            return;
          case en:
            g = g.type, y = Xe(g, y), Ye(o, c, g, y, L);
            return;
          case Tt:
            if (L = y.children, g = g._context, y = y.value, B = g._currentValue2, g._currentValue2 = y, H = wt, wt = y = { parent: H, depth: H === null ? 0 : H.depth + 1, context: g, parentValue: B, value: y }, c.context = y, Fe(o, c, L), o = wt, o === null)
              throw Error(d(403));
            y = o.parentValue, o.context._currentValue2 = y === In ? o.context._defaultValue : y, o = wt = o.parent, c.context = o;
            return;
          case Ot:
            y = y.children, y = y(g._currentValue2), Fe(o, c, y);
            return;
          case at:
            L = g._init, g = L(g._payload), y = Xe(g, y), Ye(
              o,
              c,
              g,
              y,
              void 0
            );
            return;
        }
      throw Error(d(130, g == null ? g : typeof g, ""));
    }
  }
  function Fe(o, c, g) {
    if (c.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ke:
          Ye(o, c, g.type, g.props, g.ref);
          return;
        case st:
          throw Error(d(257));
        case at:
          var y = g._init;
          g = y(g._payload), Fe(o, c, g);
          return;
      }
      if (N(g)) {
        bt(o, c, g);
        return;
      }
      if (g === null || typeof g != "object" ? y = null : (y = Ct && g[Ct] || g["@@iterator"], y = typeof y == "function" ? y : null), y && (y = y.call(g))) {
        if (g = y.next(), !g.done) {
          var L = [];
          do
            L.push(g.value), g = y.next();
          while (!g.done);
          bt(o, c, L);
        }
        return;
      }
      throw o = Object.prototype.toString.call(g), Error(d(31, o === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : o));
    }
    typeof g == "string" ? (y = c.blockedSegment, y.lastPushedText = tt(c.blockedSegment.chunks, g, o.responseState, y.lastPushedText)) : typeof g == "number" && (y = c.blockedSegment, y.lastPushedText = tt(c.blockedSegment.chunks, "" + g, o.responseState, y.lastPushedText));
  }
  function bt(o, c, g) {
    for (var y = g.length, L = 0; L < y; L++) {
      var B = c.treeContext;
      c.treeContext = dn(B, y, L);
      try {
        rn(o, c, g[L]);
      } finally {
        c.treeContext = B;
      }
    }
  }
  function rn(o, c, g) {
    var y = c.blockedSegment.formatContext, L = c.legacyContext, B = c.context;
    try {
      return Fe(o, c, g);
    } catch (ue) {
      if (gn(), typeof ue == "object" && ue !== null && typeof ue.then == "function") {
        g = ue;
        var H = c.blockedSegment, V = he(o, H.chunks.length, null, H.formatContext, H.lastPushedText, !0);
        H.children.push(V), H.lastPushedText = !1, o = ne(o, c.node, c.blockedBoundary, V, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, g.then(o, o), c.blockedSegment.formatContext = y, c.legacyContext = L, c.context = B, ze(B);
      } else
        throw c.blockedSegment.formatContext = y, c.legacyContext = L, c.context = B, ze(B), ue;
    }
  }
  function St(o) {
    var c = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, wn(this, c, o);
  }
  function rr(o, c, g) {
    var y = o.blockedBoundary;
    o.blockedSegment.status = 3, y === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.push(null))) : (y.pendingTasks--, y.forceClientRender || (y.forceClientRender = !0, o = g === void 0 ? Error(d(432)) : g, y.errorDigest = c.onError(o), y.parentFlushed && c.clientRenderedBoundaries.push(y)), y.fallbackAbortableTasks.forEach(function(L) {
      return rr(L, c, g);
    }), y.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (y = c.onAllReady, y()));
  }
  function yn(o, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var g = c.children[0];
      g.id = c.id, g.parentFlushed = !0, g.status === 1 && yn(o, g);
    } else
      o.completedSegments.push(c);
  }
  function wn(o, c, g) {
    if (c === null) {
      if (g.parentFlushed) {
        if (o.completedRootSegment !== null)
          throw Error(d(389));
        o.completedRootSegment = g;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = K, c = o.onShellReady, c());
    } else
      c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && yn(c, g), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(St, o), c.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (yn(c, g), c.completedSegments.length === 1 && c.parentFlushed && o.partialBoundaries.push(c)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function Wt(o) {
    if (o.status !== 2) {
      var c = wt, g = ge.current;
      ge.current = G;
      var y = ee;
      ee = o.responseState;
      try {
        var L = o.pingedTasks, B;
        for (B = 0; B < L.length; B++) {
          var H = L[B], V = o, ue = H.blockedSegment;
          if (ue.status === 0) {
            ze(H.context);
            try {
              Fe(V, H, H.node), V.responseState.generateStaticMarkup || ue.lastPushedText && ue.textEmbedded && ue.chunks.push("<!-- -->"), H.abortSet.delete(H), ue.status = 1, wn(V, H.blockedBoundary, ue);
            } catch (Rt) {
              if (gn(), typeof Rt == "object" && Rt !== null && typeof Rt.then == "function") {
                var be = H.ping;
                Rt.then(be, be);
              } else {
                H.abortSet.delete(H), ue.status = 4;
                var ve = H.blockedBoundary, He = Rt, _t = ce(V, He);
                if (ve === null ? pe(V, He) : (ve.pendingTasks--, ve.forceClientRender || (ve.forceClientRender = !0, ve.errorDigest = _t, ve.parentFlushed && V.clientRenderedBoundaries.push(ve))), V.allPendingTasks--, V.allPendingTasks === 0) {
                  var kt = V.onAllReady;
                  kt();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, B), o.destination !== null && On(o, o.destination);
      } catch (Rt) {
        ce(o, Rt), pe(o, Rt);
      } finally {
        ee = y, ge.current = g, g === G && ze(c);
      }
    }
  }
  function Tn(o, c, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var y = g.id = o.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, o = o.responseState, c.push('<template id="'), c.push(o.placeholderPrefix), o = y.toString(16), c.push(o), c.push('"></template>');
      case 1:
        g.status = 2;
        var L = !0;
        y = g.chunks;
        var B = 0;
        g = g.children;
        for (var H = 0; H < g.length; H++) {
          for (L = g[H]; B < L.index; B++)
            c.push(y[B]);
          L = Ln(o, c, L);
        }
        for (; B < y.length - 1; B++)
          c.push(y[B]);
        return B < y.length && (L = c.push(y[B])), L;
      default:
        throw Error(d(390));
    }
  }
  function Ln(o, c, g) {
    var y = g.boundary;
    if (y === null)
      return Tn(o, c, g);
    if (y.parentFlushed = !0, y.forceClientRender)
      return o.responseState.generateStaticMarkup || (y = y.errorDigest, c.push("<!--$!-->"), c.push("<template"), y && (c.push(' data-dgst="'), y = ae(y), c.push(y), c.push('"')), c.push("></template>")), Tn(o, c, g), o = o.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), o;
    if (0 < y.pendingTasks) {
      y.rootSegmentID = o.nextSegmentId++, 0 < y.completedSegments.length && o.partialBoundaries.push(y);
      var L = o.responseState, B = L.nextSuspenseID++;
      return L = L.boundaryPrefix + B.toString(16), y = y.id = L, Ne(c, o.responseState, y), Tn(o, c, g), c.push("<!--/$-->");
    }
    if (y.byteSize > o.progressiveChunkSize)
      return y.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(y), Ne(c, o.responseState, y.id), Tn(o, c, g), c.push("<!--/$-->");
    if (o.responseState.generateStaticMarkup || c.push("<!--$-->"), g = y.completedSegments, g.length !== 1)
      throw Error(d(391));
    return Ln(o, c, g[0]), o = o.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), o;
  }
  function pr(o, c, g) {
    return Ke(c, o.responseState, g.formatContext, g.id), Ln(o, c, g), Te(c, g.formatContext);
  }
  function gr(o, c, g) {
    for (var y = g.completedSegments, L = 0; L < y.length; L++)
      or(o, c, g, y[L]);
    if (y.length = 0, o = o.responseState, y = g.id, g = g.rootSegmentID, c.push(o.startInlineScript), o.sentCompleteBoundaryFunction ? c.push('$RC("') : (o.sentCompleteBoundaryFunction = !0, c.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), y === null)
      throw Error(d(395));
    return g = g.toString(16), c.push(y), c.push('","'), c.push(o.segmentPrefix), c.push(g), c.push('")<\/script>');
  }
  function or(o, c, g, y) {
    if (y.status === 2)
      return !0;
    var L = y.id;
    if (L === -1) {
      if ((y.id = g.rootSegmentID) === -1)
        throw Error(d(392));
      return pr(o, c, y);
    }
    return pr(o, c, y), o = o.responseState, c.push(o.startInlineScript), o.sentCompleteSegmentFunction ? c.push('$RS("') : (o.sentCompleteSegmentFunction = !0, c.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), c.push(o.segmentPrefix), L = L.toString(16), c.push(L), c.push('","'), c.push(o.placeholderPrefix), c.push(L), c.push('")<\/script>');
  }
  function On(o, c) {
    try {
      var g = o.completedRootSegment;
      if (g !== null && o.pendingRootTasks === 0) {
        Ln(o, c, g), o.completedRootSegment = null;
        var y = o.responseState.bootstrapChunks;
        for (g = 0; g < y.length - 1; g++)
          c.push(y[g]);
        g < y.length && c.push(y[g]);
      }
      var L = o.clientRenderedBoundaries, B;
      for (B = 0; B < L.length; B++) {
        var H = L[B];
        y = c;
        var V = o.responseState, ue = H.id, be = H.errorDigest, ve = H.errorMessage, He = H.errorComponentStack;
        if (y.push(V.startInlineScript), V.sentClientRenderFunction ? y.push('$RX("') : (V.sentClientRenderFunction = !0, y.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ue === null)
          throw Error(d(395));
        if (y.push(ue), y.push('"'), be || ve || He) {
          y.push(",");
          var _t = Pe(be || "");
          y.push(_t);
        }
        if (ve || He) {
          y.push(",");
          var kt = Pe(ve || "");
          y.push(kt);
        }
        if (He) {
          y.push(",");
          var Rt = Pe(He);
          y.push(Rt);
        }
        if (!y.push(")<\/script>")) {
          o.destination = null, B++, L.splice(0, B);
          return;
        }
      }
      L.splice(0, B);
      var Mn = o.completedBoundaries;
      for (B = 0; B < Mn.length; B++)
        if (!gr(o, c, Mn[B])) {
          o.destination = null, B++, Mn.splice(0, B);
          return;
        }
      Mn.splice(0, B);
      var on = o.partialBoundaries;
      for (B = 0; B < on.length; B++) {
        var ir = on[B];
        e: {
          L = o, H = c;
          var Nn = ir.completedSegments;
          for (V = 0; V < Nn.length; V++)
            if (!or(L, H, ir, Nn[V])) {
              V++, Nn.splice(0, V);
              var _n = !1;
              break e;
            }
          Nn.splice(0, V), _n = !0;
        }
        if (!_n) {
          o.destination = null, B++, on.splice(0, B);
          return;
        }
      }
      on.splice(0, B);
      var Pn = o.completedBoundaries;
      for (B = 0; B < Pn.length; B++)
        if (!gr(o, c, Pn[B])) {
          o.destination = null, B++, Pn.splice(0, B);
          return;
        }
      Pn.splice(0, B);
    } finally {
      o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && c.push(null);
    }
  }
  function vr(o, c) {
    try {
      var g = o.abortableTasks;
      g.forEach(function(y) {
        return rr(y, o, c);
      }), g.clear(), o.destination !== null && On(o, o.destination);
    } catch (y) {
      ce(o, y), pe(o, y);
    }
  }
  function ar() {
  }
  function Ar(o, c, g, y) {
    var L = !1, B = null, H = "", V = { push: function(be) {
      return be !== null && (H += be), !0;
    }, destroy: function(be) {
      L = !0, B = be;
    } }, ue = !1;
    if (o = re(o, Ge(g, c ? c.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, ar, void 0, function() {
      ue = !0;
    }, void 0, void 0), Wt(o), vr(o, y), o.status === 1)
      o.status = 2, V.destroy(o.fatalError);
    else if (o.status !== 2 && o.destination === null) {
      o.destination = V;
      try {
        On(o, V);
      } catch (be) {
        ce(o, be), pe(o, be);
      }
    }
    if (L)
      throw B;
    if (!ue)
      throw Error(d(426));
    return H;
  }
  return Lo.renderToNodeStream = function() {
    throw Error(d(207));
  }, Lo.renderToStaticMarkup = function(o, c) {
    return Ar(o, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Lo.renderToStaticNodeStream = function() {
    throw Error(d(208));
  }, Lo.renderToString = function(o, c) {
    return Ar(o, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Lo.version = "18.2.0", Lo;
}
var Ci = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function Ql() {
  if (zs)
    return Ci;
  zs = 1;
  var m = Na;
  function d(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, p = 1; p < arguments.length; p++)
      u += "&args[]=" + encodeURIComponent(arguments[p]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var D = null, C = 0;
  function s(a, u) {
    if (u.length !== 0)
      if (512 < u.length)
        0 < C && (a.enqueue(new Uint8Array(D.buffer, 0, C)), D = new Uint8Array(512), C = 0), a.enqueue(u);
      else {
        var p = D.length - C;
        p < u.length && (p === 0 ? a.enqueue(D) : (D.set(u.subarray(0, p), C), a.enqueue(D), u = u.subarray(p)), D = new Uint8Array(512), C = 0), D.set(u, C), C += u.length;
      }
  }
  function M(a, u) {
    return s(a, u), !0;
  }
  function F(a) {
    D && 0 < C && (a.enqueue(new Uint8Array(D.buffer, 0, C)), D = null, C = 0);
  }
  var R = new TextEncoder();
  function S(a) {
    return R.encode(a);
  }
  function x(a) {
    return R.encode(a);
  }
  function Y(a, u) {
    typeof a.error == "function" ? a.error(u) : a.close();
  }
  var k = Object.prototype.hasOwnProperty, q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, me = {}, ae = {};
  function ye(a) {
    return k.call(ae, a) ? !0 : k.call(me, a) ? !1 : q.test(a) ? ae[a] = !0 : (me[a] = !0, !1);
  }
  function X(a, u, p, w, O, Q, W) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = w, this.attributeNamespace = O, this.mustUseProperty = p, this.propertyName = a, this.type = u, this.sanitizeURL = Q, this.removeEmptyString = W;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    N[a] = new X(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    N[u] = new X(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    N[a] = new X(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    N[a] = new X(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    N[a] = new X(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    N[a] = new X(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    N[a] = new X(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    N[a] = new X(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    N[a] = new X(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var J = /[\-:]([a-z])/g;
  function de(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      J,
      de
    );
    N[u] = new X(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(J, de);
    N[u] = new X(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(J, de);
    N[u] = new X(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    N[a] = new X(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    N[a] = new X(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var oe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ae = ["Webkit", "ms", "Moz", "O"];
  Object.keys(oe).forEach(function(a) {
    Ae.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), oe[u] = oe[a];
    });
  });
  var le = /["'&<>]/;
  function te(a) {
    if (typeof a == "boolean" || typeof a == "number")
      return "" + a;
    a = "" + a;
    var u = le.exec(a);
    if (u) {
      var p = "", w, O = 0;
      for (w = u.index; w < a.length; w++) {
        switch (a.charCodeAt(w)) {
          case 34:
            u = "&quot;";
            break;
          case 38:
            u = "&amp;";
            break;
          case 39:
            u = "&#x27;";
            break;
          case 60:
            u = "&lt;";
            break;
          case 62:
            u = "&gt;";
            break;
          default:
            continue;
        }
        O !== w && (p += a.substring(O, w)), O = w + 1, p += u;
      }
      a = O !== w ? p + a.substring(O, w) : p;
    }
    return a;
  }
  var Ie = /([A-Z])/g, De = /^ms-/, We = Array.isArray, xe = x("<script>"), Be = x("<\/script>"), Ee = x('<script src="'), Ne = x('<script type="module" src="'), Ke = x('" async=""><\/script>'), Te = /(<\/|<)(s)(cript)/gi;
  function Qe(a, u, p, w) {
    return "" + u + (p === "s" ? "\\u0073" : "\\u0053") + w;
  }
  function Pe(a, u, p, w, O) {
    a = a === void 0 ? "" : a, u = u === void 0 ? xe : x('<script nonce="' + te(u) + '">');
    var Q = [];
    if (p !== void 0 && Q.push(u, S(("" + p).replace(Te, Qe)), Be), w !== void 0)
      for (p = 0; p < w.length; p++)
        Q.push(Ee, S(te(w[p])), Ke);
    if (O !== void 0)
      for (w = 0; w < O.length; w++)
        Q.push(Ne, S(te(O[w])), Ke);
    return { bootstrapChunks: Q, startInlineScript: u, placeholderPrefix: x(a + "P:"), segmentPrefix: x(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ge(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function tt(a) {
    return Ge(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function je(a, u, p) {
    switch (u) {
      case "select":
        return Ge(1, p.value != null ? p.value : p.defaultValue);
      case "svg":
        return Ge(2, null);
      case "math":
        return Ge(3, null);
      case "foreignObject":
        return Ge(1, null);
      case "table":
        return Ge(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Ge(5, null);
      case "colgroup":
        return Ge(7, null);
      case "tr":
        return Ge(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? Ge(1, null) : a;
  }
  var ke = x("<!-- -->");
  function st(a, u, p, w) {
    return u === "" ? w : (w && a.push(ke), a.push(S(te(u))), !0);
  }
  var ht = /* @__PURE__ */ new Map(), nt = x(' style="'), _e = x(":"), Tt = x(";");
  function Ot(a, u, p) {
    if (typeof p != "object")
      throw Error(d(62));
    u = !0;
    for (var w in p)
      if (k.call(p, w)) {
        var O = p[w];
        if (O != null && typeof O != "boolean" && O !== "") {
          if (w.indexOf("--") === 0) {
            var Q = S(te(w));
            O = S(te(("" + O).trim()));
          } else {
            Q = w;
            var W = ht.get(Q);
            W !== void 0 || (W = x(te(Q.replace(Ie, "-$1").toLowerCase().replace(De, "-ms-"))), ht.set(Q, W)), Q = W, O = typeof O == "number" ? O === 0 || k.call(oe, w) ? S("" + O) : S(O + "px") : S(te(("" + O).trim()));
          }
          u ? (u = !1, a.push(nt, Q, _e, O)) : a.push(Tt, Q, _e, O);
        }
      }
    u || a.push(ot);
  }
  var rt = x(" "), yt = x('="'), ot = x('"'), en = x('=""');
  function at(a, u, p, w) {
    switch (p) {
      case "style":
        Ot(a, u, w);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
      if (u = N.hasOwnProperty(p) ? N[p] : null, u !== null) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans)
              return;
        }
        switch (p = S(u.attributeName), u.type) {
          case 3:
            w && a.push(rt, p, en);
            break;
          case 4:
            w === !0 ? a.push(rt, p, en) : w !== !1 && a.push(rt, p, yt, S(te(w)), ot);
            break;
          case 5:
            isNaN(w) || a.push(rt, p, yt, S(te(w)), ot);
            break;
          case 6:
            !isNaN(w) && 1 <= w && a.push(rt, p, yt, S(te(w)), ot);
            break;
          default:
            u.sanitizeURL && (w = "" + w), a.push(rt, p, yt, S(te(w)), ot);
        }
      } else if (ye(p)) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = p.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-")
              return;
        }
        a.push(rt, S(p), yt, S(te(w)), ot);
      }
    }
  }
  var ft = x(">"), Zt = x("/>");
  function Nt(a, u, p) {
    if (u != null) {
      if (p != null)
        throw Error(d(60));
      if (typeof u != "object" || !("__html" in u))
        throw Error(d(61));
      u = u.__html, u != null && a.push(S("" + u));
    }
  }
  function In(a) {
    var u = "";
    return m.Children.forEach(a, function(p) {
      p != null && (u += p);
    }), u;
  }
  var Ct = x(' selected=""');
  function jt(a, u, p, w) {
    a.push(dt(p));
    var O = p = null, Q;
    for (Q in u)
      if (k.call(u, Q)) {
        var W = u[Q];
        if (W != null)
          switch (Q) {
            case "children":
              p = W;
              break;
            case "dangerouslySetInnerHTML":
              O = W;
              break;
            default:
              at(a, w, Q, W);
          }
      }
    return a.push(ft), Nt(a, O, p), typeof p == "string" ? (a.push(S(te(p))), null) : p;
  }
  var tn = x(`
`), kn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, wt = /* @__PURE__ */ new Map();
  function dt(a) {
    var u = wt.get(a);
    if (u === void 0) {
      if (!kn.test(a))
        throw Error(d(65, a));
      u = x("<" + a), wt.set(a, u);
    }
    return u;
  }
  var At = x("<!DOCTYPE html>");
  function gt(a, u, p, w, O) {
    switch (u) {
      case "select":
        a.push(dt("select"));
        var Q = null, W = null;
        for (Me in p)
          if (k.call(p, Me)) {
            var $ = p[Me];
            if ($ != null)
              switch (Me) {
                case "children":
                  Q = $;
                  break;
                case "dangerouslySetInnerHTML":
                  W = $;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  at(a, w, Me, $);
              }
          }
        return a.push(ft), Nt(a, W, Q), Q;
      case "option":
        W = O.selectedValue, a.push(dt("option"));
        var Se = $ = null, Re = null, Me = null;
        for (Q in p)
          if (k.call(p, Q)) {
            var et = p[Q];
            if (et != null)
              switch (Q) {
                case "children":
                  $ = et;
                  break;
                case "selected":
                  Re = et;
                  break;
                case "dangerouslySetInnerHTML":
                  Me = et;
                  break;
                case "value":
                  Se = et;
                default:
                  at(a, w, Q, et);
              }
          }
        if (W != null)
          if (p = Se !== null ? "" + Se : In($), We(W)) {
            for (w = 0; w < W.length; w++)
              if ("" + W[w] === p) {
                a.push(Ct);
                break;
              }
          } else
            "" + W === p && a.push(Ct);
        else
          Re && a.push(Ct);
        return a.push(ft), Nt(a, Me, $), $;
      case "textarea":
        a.push(dt("textarea")), Me = W = Q = null;
        for ($ in p)
          if (k.call(p, $) && (Se = p[$], Se != null))
            switch ($) {
              case "children":
                Me = Se;
                break;
              case "value":
                Q = Se;
                break;
              case "defaultValue":
                W = Se;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(d(91));
              default:
                at(a, w, $, Se);
            }
        if (Q === null && W !== null && (Q = W), a.push(ft), Me != null) {
          if (Q != null)
            throw Error(d(92));
          if (We(Me) && 1 < Me.length)
            throw Error(d(93));
          Q = "" + Me;
        }
        return typeof Q == "string" && Q[0] === `
` && a.push(tn), Q !== null && a.push(S(te("" + Q))), null;
      case "input":
        a.push(dt("input")), Se = Me = $ = Q = null;
        for (W in p)
          if (k.call(p, W) && (Re = p[W], Re != null))
            switch (W) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(399, "input"));
              case "defaultChecked":
                Se = Re;
                break;
              case "defaultValue":
                $ = Re;
                break;
              case "checked":
                Me = Re;
                break;
              case "value":
                Q = Re;
                break;
              default:
                at(a, w, W, Re);
            }
        return Me !== null ? at(
          a,
          w,
          "checked",
          Me
        ) : Se !== null && at(a, w, "checked", Se), Q !== null ? at(a, w, "value", Q) : $ !== null && at(a, w, "value", $), a.push(Zt), null;
      case "menuitem":
        a.push(dt("menuitem"));
        for (var Vt in p)
          if (k.call(p, Vt) && (Q = p[Vt], Q != null))
            switch (Vt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(400));
              default:
                at(a, w, Vt, Q);
            }
        return a.push(ft), null;
      case "title":
        a.push(dt("title")), Q = null;
        for (et in p)
          if (k.call(p, et) && (W = p[et], W != null))
            switch (et) {
              case "children":
                Q = W;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(d(434));
              default:
                at(a, w, et, W);
            }
        return a.push(ft), Q;
      case "listing":
      case "pre":
        a.push(dt(u)), W = Q = null;
        for (Se in p)
          if (k.call(p, Se) && ($ = p[Se], $ != null))
            switch (Se) {
              case "children":
                Q = $;
                break;
              case "dangerouslySetInnerHTML":
                W = $;
                break;
              default:
                at(a, w, Se, $);
            }
        if (a.push(ft), W != null) {
          if (Q != null)
            throw Error(d(60));
          if (typeof W != "object" || !("__html" in W))
            throw Error(d(61));
          p = W.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
` ? a.push(tn, S(p)) : a.push(S("" + p)));
        }
        return typeof Q == "string" && Q[0] === `
` && a.push(tn), Q;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        a.push(dt(u));
        for (var An in p)
          if (k.call(p, An) && (Q = p[An], Q != null))
            switch (An) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(399, u));
              default:
                at(a, w, An, Q);
            }
        return a.push(Zt), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return jt(a, p, u, w);
      case "html":
        return O.insertionMode === 0 && a.push(At), jt(a, p, u, w);
      default:
        if (u.indexOf("-") === -1 && typeof p.is != "string")
          return jt(a, p, u, w);
        a.push(dt(u)), W = Q = null;
        for (Re in p)
          if (k.call(p, Re) && ($ = p[Re], $ != null))
            switch (Re) {
              case "children":
                Q = $;
                break;
              case "dangerouslySetInnerHTML":
                W = $;
                break;
              case "style":
                Ot(a, w, $);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                ye(Re) && typeof $ != "function" && typeof $ != "symbol" && a.push(rt, S(Re), yt, S(te($)), ot);
            }
        return a.push(ft), Nt(a, W, Q), Q;
    }
  }
  var Ft = x("</"), Yt = x(">"), ze = x('<template id="'), zt = x('"></template>'), Kt = x("<!--$-->"), pt = x('<!--$?--><template id="'), dn = x('"></template>'), Ht = x("<!--$!-->"), Gn = x("<!--/$-->"), xn = x("<template"), Gt = x('"'), hn = x(' data-dgst="');
  x(' data-msg="'), x(' data-stck="');
  var Ut = x("></template>");
  function lt(a, u, p) {
    if (s(a, pt), p === null)
      throw Error(d(395));
    return s(a, p), M(a, dn);
  }
  var Mt = x('<div hidden id="'), vt = x('">'), Le = x("</div>"), Pt = x('<svg aria-hidden="true" style="display:none" id="'), $t = x('">'), qt = x("</svg>"), It = x('<math aria-hidden="true" style="display:none" id="'), nn = x('">'), Bt = x("</math>"), Je = x('<table hidden id="'), pn = x('">'), gn = x("</table>"), vn = x('<table hidden><tbody id="'), qe = x('">'), mn = x("</tbody></table>"), Rn = x('<table hidden><tr id="'), Qn = x('">'), I = x("</tr></table>"), G = x('<table hidden><colgroup id="'), ee = x('">'), ge = x("</colgroup></table>");
  function Z(a, u, p, w) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return s(a, Mt), s(a, u.segmentPrefix), s(a, S(w.toString(16))), M(a, vt);
      case 2:
        return s(a, Pt), s(a, u.segmentPrefix), s(a, S(w.toString(16))), M(a, $t);
      case 3:
        return s(a, It), s(a, u.segmentPrefix), s(a, S(w.toString(16))), M(a, nn);
      case 4:
        return s(a, Je), s(a, u.segmentPrefix), s(a, S(w.toString(16))), M(a, pn);
      case 5:
        return s(a, vn), s(a, u.segmentPrefix), s(a, S(w.toString(16))), M(a, qe);
      case 6:
        return s(a, Rn), s(a, u.segmentPrefix), s(a, S(w.toString(16))), M(a, Qn);
      case 7:
        return s(
          a,
          G
        ), s(a, u.segmentPrefix), s(a, S(w.toString(16))), M(a, ee);
      default:
        throw Error(d(397));
    }
  }
  function K(a, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return M(a, Le);
      case 2:
        return M(a, qt);
      case 3:
        return M(a, Bt);
      case 4:
        return M(a, gn);
      case 5:
        return M(a, mn);
      case 6:
        return M(a, I);
      case 7:
        return M(a, ge);
      default:
        throw Error(d(397));
    }
  }
  var re = x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), ne = x('$RS("'), he = x('","'), ce = x('")<\/script>'), pe = x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), we = x('$RC("'), Ze = x('","'), Xe = x('")<\/script>'), Ye = x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Fe = x('$RX("'), bt = x('"'), rn = x(")<\/script>"), St = x(","), rr = /[<\u2028\u2029]/g;
  function yn(a) {
    return JSON.stringify(a).replace(rr, function(u) {
      switch (u) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var wn = Object.assign, Wt = Symbol.for("react.element"), Tn = Symbol.for("react.portal"), Ln = Symbol.for("react.fragment"), pr = Symbol.for("react.strict_mode"), gr = Symbol.for("react.profiler"), or = Symbol.for("react.provider"), On = Symbol.for("react.context"), vr = Symbol.for("react.forward_ref"), ar = Symbol.for("react.suspense"), Ar = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), y = Symbol.for("react.debug_trace_mode"), L = Symbol.for("react.legacy_hidden"), B = Symbol.for("react.default_value"), H = Symbol.iterator;
  function V(a) {
    if (a == null)
      return null;
    if (typeof a == "function")
      return a.displayName || a.name || null;
    if (typeof a == "string")
      return a;
    switch (a) {
      case Ln:
        return "Fragment";
      case Tn:
        return "Portal";
      case gr:
        return "Profiler";
      case pr:
        return "StrictMode";
      case ar:
        return "Suspense";
      case Ar:
        return "SuspenseList";
    }
    if (typeof a == "object")
      switch (a.$$typeof) {
        case On:
          return (a.displayName || "Context") + ".Consumer";
        case or:
          return (a._context.displayName || "Context") + ".Provider";
        case vr:
          var u = a.render;
          return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
        case o:
          return u = a.displayName || null, u !== null ? u : V(a.type) || "Memo";
        case c:
          u = a._payload, a = a._init;
          try {
            return V(a(u));
          } catch {
          }
      }
    return null;
  }
  var ue = {};
  function be(a, u) {
    if (a = a.contextTypes, !a)
      return ue;
    var p = {}, w;
    for (w in a)
      p[w] = u[w];
    return p;
  }
  var ve = null;
  function He(a, u) {
    if (a !== u) {
      a.context._currentValue = a.parentValue, a = a.parent;
      var p = u.parent;
      if (a === null) {
        if (p !== null)
          throw Error(d(401));
      } else {
        if (p === null)
          throw Error(d(401));
        He(a, p);
      }
      u.context._currentValue = u.value;
    }
  }
  function _t(a) {
    a.context._currentValue = a.parentValue, a = a.parent, a !== null && _t(a);
  }
  function kt(a) {
    var u = a.parent;
    u !== null && kt(u), a.context._currentValue = a.value;
  }
  function Rt(a, u) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null)
      throw Error(d(402));
    a.depth === u.depth ? He(a, u) : Rt(a, u);
  }
  function Mn(a, u) {
    var p = u.parent;
    if (p === null)
      throw Error(d(402));
    a.depth === p.depth ? He(a, p) : Mn(a, p), u.context._currentValue = u.value;
  }
  function on(a) {
    var u = ve;
    u !== a && (u === null ? kt(a) : a === null ? _t(u) : u.depth === a.depth ? He(u, a) : u.depth > a.depth ? Rt(u, a) : Mn(u, a), ve = a);
  }
  var ir = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function Nn(a, u, p, w) {
    var O = a.state !== void 0 ? a.state : null;
    a.updater = ir, a.props = p, a.state = O;
    var Q = { queue: [], replace: !1 };
    a._reactInternals = Q;
    var W = u.contextType;
    if (a.context = typeof W == "object" && W !== null ? W._currentValue : w, W = u.getDerivedStateFromProps, typeof W == "function" && (W = W(p, O), O = W == null ? O : wn({}, O, W), a.state = O), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function"))
      if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && ir.enqueueReplaceState(a, a.state, null), Q.queue !== null && 0 < Q.queue.length)
        if (u = Q.queue, W = Q.replace, Q.queue = null, Q.replace = !1, W && u.length === 1)
          a.state = u[0];
        else {
          for (Q = W ? u[0] : a.state, O = !0, W = W ? 1 : 0; W < u.length; W++) {
            var $ = u[W];
            $ = typeof $ == "function" ? $.call(a, Q, p, w) : $, $ != null && (O ? (O = !1, Q = wn({}, Q, $)) : wn(Q, $));
          }
          a.state = Q;
        }
      else
        Q.queue = null;
  }
  var _n = { id: 1, overflow: "" };
  function Pn(a, u, p) {
    var w = a.id;
    a = a.overflow;
    var O = 32 - mr(w) - 1;
    w &= ~(1 << O), p += 1;
    var Q = 32 - mr(u) + O;
    if (30 < Q) {
      var W = O - O % 5;
      return Q = (w & (1 << W) - 1).toString(32), w >>= W, O -= W, { id: 1 << 32 - mr(u) + O | p << O | w, overflow: Q + a };
    }
    return { id: 1 << Q | p << O | w, overflow: a };
  }
  var mr = Math.clz32 ? Math.clz32 : qr, ja = Math.log, Fa = Math.LN2;
  function qr(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (ja(a) / Fa | 0) | 0;
  }
  function za(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var eo = typeof Object.is == "function" ? Object.is : za, Bn = null, yr = null, kr = null, $e = null, jn = !1, Xt = !1, Xn = 0, Fn = null, Rr = 0;
  function zn() {
    if (Bn === null)
      throw Error(d(321));
    return Bn;
  }
  function an() {
    if (0 < Rr)
      throw Error(d(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function to() {
    return $e === null ? kr === null ? (jn = !1, kr = $e = an()) : (jn = !0, $e = kr) : $e.next === null ? (jn = !1, $e = $e.next = an()) : (jn = !0, $e = $e.next), $e;
  }
  function no() {
    yr = Bn = null, Xt = !1, kr = null, Rr = 0, $e = Fn = null;
  }
  function Fo(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function zo(a, u, p) {
    if (Bn = zn(), $e = to(), jn) {
      var w = $e.queue;
      if (u = w.dispatch, Fn !== null && (p = Fn.get(w), p !== void 0)) {
        Fn.delete(w), w = $e.memoizedState;
        do
          w = a(w, p.action), p = p.next;
        while (p !== null);
        return $e.memoizedState = w, [w, u];
      }
      return [$e.memoizedState, u];
    }
    return a = a === Fo ? typeof u == "function" ? u() : u : p !== void 0 ? p(u) : u, $e.memoizedState = a, a = $e.queue = { last: null, dispatch: null }, a = a.dispatch = Ha.bind(null, Bn, a), [$e.memoizedState, a];
  }
  function Ho(a, u) {
    if (Bn = zn(), $e = to(), u = u === void 0 ? null : u, $e !== null) {
      var p = $e.memoizedState;
      if (p !== null && u !== null) {
        var w = p[1];
        e:
          if (w === null)
            w = !1;
          else {
            for (var O = 0; O < w.length && O < u.length; O++)
              if (!eo(u[O], w[O])) {
                w = !1;
                break e;
              }
            w = !0;
          }
        if (w)
          return p[0];
      }
    }
    return a = a(), $e.memoizedState = [a, u], a;
  }
  function Ha(a, u, p) {
    if (25 <= Rr)
      throw Error(d(301));
    if (a === Bn)
      if (Xt = !0, a = { action: p, next: null }, Fn === null && (Fn = /* @__PURE__ */ new Map()), p = Fn.get(u), p === void 0)
        Fn.set(u, a);
      else {
        for (u = p; u.next !== null; )
          u = u.next;
        u.next = a;
      }
  }
  function Ua() {
    throw Error(d(394));
  }
  function Qr() {
  }
  var Lr = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return zn(), a._currentValue;
  }, useMemo: Ho, useReducer: zo, useRef: function(a) {
    Bn = zn(), $e = to();
    var u = $e.memoizedState;
    return u === null ? (a = { current: a }, $e.memoizedState = a) : u;
  }, useState: function(a) {
    return zo(Fo, a);
  }, useInsertionEffect: Qr, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return Ho(function() {
      return a;
    }, u);
  }, useImperativeHandle: Qr, useEffect: Qr, useDebugValue: Qr, useDeferredValue: function(a) {
    return zn(), a;
  }, useTransition: function() {
    return zn(), [!1, Ua];
  }, useId: function() {
    var a = yr.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - mr(a) - 1)).toString(32) + u;
    var p = Or;
    if (p === null)
      throw Error(d(404));
    return u = Xn++, a = ":" + p.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return zn(), u(a._source);
  }, useSyncExternalStore: function(a, u, p) {
    if (p === void 0)
      throw Error(d(407));
    return p();
  } }, Or = null, wr = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Wa(a) {
    return console.error(a), null;
  }
  function br() {
  }
  function ro(a, u, p, w, O, Q, W, $, Se) {
    var Re = [], Me = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: w === void 0 ? 12800 : w, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Me, pingedTasks: Re, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: O === void 0 ? Wa : O, onAllReady: Q === void 0 ? br : Q, onShellReady: W === void 0 ? br : W, onShellError: $ === void 0 ? br : $, onFatalError: Se === void 0 ? br : Se }, p = sr(u, 0, null, p, !1, !1), p.parentFlushed = !0, a = oo(u, a, null, p, Me, ue, null, _n), Re.push(a), u;
  }
  function oo(a, u, p, w, O, Q, W, $) {
    a.allPendingTasks++, p === null ? a.pendingRootTasks++ : p.pendingTasks++;
    var Se = { node: u, ping: function() {
      var Re = a.pingedTasks;
      Re.push(Se), Re.length === 1 && _o(a);
    }, blockedBoundary: p, blockedSegment: w, abortSet: O, legacyContext: Q, context: W, treeContext: $ };
    return O.add(Se), Se;
  }
  function sr(a, u, p, w, O, Q) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: w, boundary: p, lastPushedText: O, textEmbedded: Q };
  }
  function lr(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function Nr(a, u) {
    var p = a.onShellError;
    p(u), p = a.onFatalError, p(u), a.destination !== null ? (a.status = 2, Y(a.destination, u)) : (a.status = 1, a.fatalError = u);
  }
  function Uo(a, u, p, w, O) {
    for (Bn = {}, yr = u, Xn = 0, a = p(w, O); Xt; )
      Xt = !1, Xn = 0, Rr += 1, $e = null, a = p(w, O);
    return no(), a;
  }
  function ao(a, u, p, w) {
    var O = p.render(), Q = w.childContextTypes;
    if (Q != null) {
      var W = u.legacyContext;
      if (typeof p.getChildContext != "function")
        w = W;
      else {
        p = p.getChildContext();
        for (var $ in p)
          if (!($ in Q))
            throw Error(d(108, V(w) || "Unknown", $));
        w = wn({}, W, p);
      }
      u.legacyContext = w, Jt(a, u, O), u.legacyContext = W;
    } else
      Jt(a, u, O);
  }
  function Wo(a, u) {
    if (a && a.defaultProps) {
      u = wn({}, u), a = a.defaultProps;
      for (var p in a)
        u[p] === void 0 && (u[p] = a[p]);
      return u;
    }
    return u;
  }
  function jr(a, u, p, w, O) {
    if (typeof p == "function")
      if (p.prototype && p.prototype.isReactComponent) {
        O = be(p, u.legacyContext);
        var Q = p.contextType;
        Q = new p(w, typeof Q == "object" && Q !== null ? Q._currentValue : O), Nn(Q, p, w, O), ao(a, u, Q, p);
      } else {
        Q = be(p, u.legacyContext), O = Uo(a, u, p, w, Q);
        var W = Xn !== 0;
        if (typeof O == "object" && O !== null && typeof O.render == "function" && O.$$typeof === void 0)
          Nn(O, p, w, Q), ao(a, u, O, p);
        else if (W) {
          w = u.treeContext, u.treeContext = Pn(w, 1, 0);
          try {
            Jt(a, u, O);
          } finally {
            u.treeContext = w;
          }
        } else
          Jt(a, u, O);
      }
    else if (typeof p == "string") {
      switch (O = u.blockedSegment, Q = gt(O.chunks, p, w, a.responseState, O.formatContext), O.lastPushedText = !1, W = O.formatContext, O.formatContext = je(W, p, w), Fr(a, u, Q), O.formatContext = W, p) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          O.chunks.push(Ft, S(p), Yt);
      }
      O.lastPushedText = !1;
    } else {
      switch (p) {
        case L:
        case y:
        case pr:
        case gr:
        case Ln:
          Jt(a, u, w.children);
          return;
        case Ar:
          Jt(a, u, w.children);
          return;
        case g:
          throw Error(d(343));
        case ar:
          e: {
            p = u.blockedBoundary, O = u.blockedSegment, Q = w.fallback, w = w.children, W = /* @__PURE__ */ new Set();
            var $ = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: W, errorDigest: null }, Se = sr(a, O.chunks.length, $, O.formatContext, !1, !1);
            O.children.push(Se), O.lastPushedText = !1;
            var Re = sr(a, 0, null, O.formatContext, !1, !1);
            Re.parentFlushed = !0, u.blockedBoundary = $, u.blockedSegment = Re;
            try {
              if (Fr(
                a,
                u,
                w
              ), Re.lastPushedText && Re.textEmbedded && Re.chunks.push(ke), Re.status = 1, zr($, Re), $.pendingTasks === 0)
                break e;
            } catch (Me) {
              Re.status = 4, $.forceClientRender = !0, $.errorDigest = lr(a, Me);
            } finally {
              u.blockedBoundary = p, u.blockedSegment = O;
            }
            u = oo(a, Q, p, Se, W, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof p == "object" && p !== null)
        switch (p.$$typeof) {
          case vr:
            if (w = Uo(a, u, p.render, w, O), Xn !== 0) {
              p = u.treeContext, u.treeContext = Pn(p, 1, 0);
              try {
                Jt(a, u, w);
              } finally {
                u.treeContext = p;
              }
            } else
              Jt(a, u, w);
            return;
          case o:
            p = p.type, w = Wo(p, w), jr(a, u, p, w, O);
            return;
          case or:
            if (O = w.children, p = p._context, w = w.value, Q = p._currentValue, p._currentValue = w, W = ve, ve = w = { parent: W, depth: W === null ? 0 : W.depth + 1, context: p, parentValue: Q, value: w }, u.context = w, Jt(a, u, O), a = ve, a === null)
              throw Error(d(403));
            w = a.parentValue, a.context._currentValue = w === B ? a.context._defaultValue : w, a = ve = a.parent, u.context = a;
            return;
          case On:
            w = w.children, w = w(p._currentValue), Jt(a, u, w);
            return;
          case c:
            O = p._init, p = O(p._payload), w = Wo(p, w), jr(a, u, p, w, void 0);
            return;
        }
      throw Error(d(
        130,
        p == null ? p : typeof p,
        ""
      ));
    }
  }
  function Jt(a, u, p) {
    if (u.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Wt:
          jr(a, u, p.type, p.props, p.ref);
          return;
        case Tn:
          throw Error(d(257));
        case c:
          var w = p._init;
          p = w(p._payload), Jt(a, u, p);
          return;
      }
      if (We(p)) {
        Zo(a, u, p);
        return;
      }
      if (p === null || typeof p != "object" ? w = null : (w = H && p[H] || p["@@iterator"], w = typeof w == "function" ? w : null), w && (w = w.call(p))) {
        if (p = w.next(), !p.done) {
          var O = [];
          do
            O.push(p.value), p = w.next();
          while (!p.done);
          Zo(a, u, O);
        }
        return;
      }
      throw a = Object.prototype.toString.call(p), Error(d(31, a === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : a));
    }
    typeof p == "string" ? (w = u.blockedSegment, w.lastPushedText = st(u.blockedSegment.chunks, p, a.responseState, w.lastPushedText)) : typeof p == "number" && (w = u.blockedSegment, w.lastPushedText = st(u.blockedSegment.chunks, "" + p, a.responseState, w.lastPushedText));
  }
  function Zo(a, u, p) {
    for (var w = p.length, O = 0; O < w; O++) {
      var Q = u.treeContext;
      u.treeContext = Pn(Q, w, O);
      try {
        Fr(a, u, p[O]);
      } finally {
        u.treeContext = Q;
      }
    }
  }
  function Fr(a, u, p) {
    var w = u.blockedSegment.formatContext, O = u.legacyContext, Q = u.context;
    try {
      return Jt(a, u, p);
    } catch (Se) {
      if (no(), typeof Se == "object" && Se !== null && typeof Se.then == "function") {
        p = Se;
        var W = u.blockedSegment, $ = sr(a, W.chunks.length, null, W.formatContext, W.lastPushedText, !0);
        W.children.push($), W.lastPushedText = !1, a = oo(a, u.node, u.blockedBoundary, $, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, p.then(a, a), u.blockedSegment.formatContext = w, u.legacyContext = O, u.context = Q, on(Q);
      } else
        throw u.blockedSegment.formatContext = w, u.legacyContext = O, u.context = Q, on(Q), Se;
    }
  }
  function Za(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, Go(this, u, a);
  }
  function Yo(a, u, p) {
    var w = a.blockedBoundary;
    a.blockedSegment.status = 3, w === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.close())) : (w.pendingTasks--, w.forceClientRender || (w.forceClientRender = !0, a = p === void 0 ? Error(d(432)) : p, w.errorDigest = u.onError(a), w.parentFlushed && u.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(O) {
      return Yo(O, u, p);
    }), w.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (w = u.onAllReady, w()));
  }
  function zr(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var p = u.children[0];
      p.id = u.id, p.parentFlushed = !0, p.status === 1 && zr(a, p);
    } else
      a.completedSegments.push(u);
  }
  function Go(a, u, p) {
    if (u === null) {
      if (p.parentFlushed) {
        if (a.completedRootSegment !== null)
          throw Error(d(389));
        a.completedRootSegment = p;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = br, u = a.onShellReady, u());
    } else
      u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && zr(u, p), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Za, a), u.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (zr(u, p), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function _o(a) {
    if (a.status !== 2) {
      var u = ve, p = wr.current;
      wr.current = Lr;
      var w = Or;
      Or = a.responseState;
      try {
        var O = a.pingedTasks, Q;
        for (Q = 0; Q < O.length; Q++) {
          var W = O[Q], $ = a, Se = W.blockedSegment;
          if (Se.status === 0) {
            on(W.context);
            try {
              Jt($, W, W.node), Se.lastPushedText && Se.textEmbedded && Se.chunks.push(ke), W.abortSet.delete(W), Se.status = 1, Go($, W.blockedBoundary, Se);
            } catch (sn) {
              if (no(), typeof sn == "object" && sn !== null && typeof sn.then == "function") {
                var Re = W.ping;
                sn.then(Re, Re);
              } else {
                W.abortSet.delete(W), Se.status = 4;
                var Me = W.blockedBoundary, et = sn, Vt = lr($, et);
                if (Me === null ? Nr($, et) : (Me.pendingTasks--, Me.forceClientRender || (Me.forceClientRender = !0, Me.errorDigest = Vt, Me.parentFlushed && $.clientRenderedBoundaries.push(Me))), $.allPendingTasks--, $.allPendingTasks === 0) {
                  var An = $.onAllReady;
                  An();
                }
              }
            } finally {
            }
          }
        }
        O.splice(0, Q), a.destination !== null && Ao(a, a.destination);
      } catch (sn) {
        lr(a, sn), Nr(a, sn);
      } finally {
        Or = w, wr.current = p, p === Lr && on(u);
      }
    }
  }
  function Hr(a, u, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var w = p.id = a.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, a = a.responseState, s(u, ze), s(u, a.placeholderPrefix), a = S(w.toString(16)), s(u, a), M(u, zt);
      case 1:
        p.status = 2;
        var O = !0;
        w = p.chunks;
        var Q = 0;
        p = p.children;
        for (var W = 0; W < p.length; W++) {
          for (O = p[W]; Q < O.index; Q++)
            s(u, w[Q]);
          O = Ur(a, u, O);
        }
        for (; Q < w.length - 1; Q++)
          s(u, w[Q]);
        return Q < w.length && (O = M(u, w[Q])), O;
      default:
        throw Error(d(390));
    }
  }
  function Ur(a, u, p) {
    var w = p.boundary;
    if (w === null)
      return Hr(a, u, p);
    if (w.parentFlushed = !0, w.forceClientRender)
      w = w.errorDigest, M(u, Ht), s(u, xn), w && (s(u, hn), s(u, S(te(w))), s(u, Gt)), M(u, Ut), Hr(a, u, p);
    else if (0 < w.pendingTasks) {
      w.rootSegmentID = a.nextSegmentId++, 0 < w.completedSegments.length && a.partialBoundaries.push(w);
      var O = a.responseState, Q = O.nextSuspenseID++;
      O = x(O.boundaryPrefix + Q.toString(16)), w = w.id = O, lt(u, a.responseState, w), Hr(a, u, p);
    } else if (w.byteSize > a.progressiveChunkSize)
      w.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(w), lt(u, a.responseState, w.id), Hr(a, u, p);
    else {
      if (M(u, Kt), p = w.completedSegments, p.length !== 1)
        throw Error(d(391));
      Ur(a, u, p[0]);
    }
    return M(u, Gn);
  }
  function Xo(a, u, p) {
    return Z(u, a.responseState, p.formatContext, p.id), Ur(a, u, p), K(u, p.formatContext);
  }
  function Jo(a, u, p) {
    for (var w = p.completedSegments, O = 0; O < w.length; O++)
      Vo(a, u, p, w[O]);
    if (w.length = 0, a = a.responseState, w = p.id, p = p.rootSegmentID, s(u, a.startInlineScript), a.sentCompleteBoundaryFunction ? s(u, we) : (a.sentCompleteBoundaryFunction = !0, s(u, pe)), w === null)
      throw Error(d(395));
    return p = S(p.toString(16)), s(u, w), s(u, Ze), s(u, a.segmentPrefix), s(u, p), M(u, Xe);
  }
  function Vo(a, u, p, w) {
    if (w.status === 2)
      return !0;
    var O = w.id;
    if (O === -1) {
      if ((w.id = p.rootSegmentID) === -1)
        throw Error(d(392));
      return Xo(a, u, w);
    }
    return Xo(a, u, w), a = a.responseState, s(u, a.startInlineScript), a.sentCompleteSegmentFunction ? s(u, ne) : (a.sentCompleteSegmentFunction = !0, s(u, re)), s(u, a.segmentPrefix), O = S(O.toString(16)), s(u, O), s(u, he), s(u, a.placeholderPrefix), s(u, O), M(u, ce);
  }
  function Ao(a, u) {
    D = new Uint8Array(512), C = 0;
    try {
      var p = a.completedRootSegment;
      if (p !== null && a.pendingRootTasks === 0) {
        Ur(a, u, p), a.completedRootSegment = null;
        var w = a.responseState.bootstrapChunks;
        for (p = 0; p < w.length - 1; p++)
          s(u, w[p]);
        p < w.length && M(u, w[p]);
      }
      var O = a.clientRenderedBoundaries, Q;
      for (Q = 0; Q < O.length; Q++) {
        var W = O[Q];
        w = u;
        var $ = a.responseState, Se = W.id, Re = W.errorDigest, Me = W.errorMessage, et = W.errorComponentStack;
        if (s(w, $.startInlineScript), $.sentClientRenderFunction ? s(w, Fe) : ($.sentClientRenderFunction = !0, s(
          w,
          Ye
        )), Se === null)
          throw Error(d(395));
        s(w, Se), s(w, bt), (Re || Me || et) && (s(w, St), s(w, S(yn(Re || "")))), (Me || et) && (s(w, St), s(w, S(yn(Me || "")))), et && (s(w, St), s(w, S(yn(et)))), M(w, rn);
      }
      O.splice(0, Q);
      var Vt = a.completedBoundaries;
      for (Q = 0; Q < Vt.length; Q++)
        Jo(a, u, Vt[Q]);
      Vt.splice(0, Q), F(u), D = new Uint8Array(512), C = 0;
      var An = a.partialBoundaries;
      for (Q = 0; Q < An.length; Q++) {
        var sn = An[Q];
        e: {
          O = a, W = u;
          var Wr = sn.completedSegments;
          for ($ = 0; $ < Wr.length; $++)
            if (!Vo(
              O,
              W,
              sn,
              Wr[$]
            )) {
              $++, Wr.splice(0, $);
              var $o = !1;
              break e;
            }
          Wr.splice(0, $), $o = !0;
        }
        if (!$o) {
          a.destination = null, Q++, An.splice(0, Q);
          return;
        }
      }
      An.splice(0, Q);
      var io = a.completedBoundaries;
      for (Q = 0; Q < io.length; Q++)
        Jo(a, u, io[Q]);
      io.splice(0, Q);
    } finally {
      F(u), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.close();
    }
  }
  function Ko(a, u) {
    try {
      var p = a.abortableTasks;
      p.forEach(function(w) {
        return Yo(w, a, u);
      }), p.clear(), a.destination !== null && Ao(a, a.destination);
    } catch (w) {
      lr(a, w), Nr(a, w);
    }
  }
  return Ci.renderToReadableStream = function(a, u) {
    return new Promise(function(p, w) {
      var O, Q, W = new Promise(function(Me, et) {
        Q = Me, O = et;
      }), $ = ro(a, Pe(u ? u.identifierPrefix : void 0, u ? u.nonce : void 0, u ? u.bootstrapScriptContent : void 0, u ? u.bootstrapScripts : void 0, u ? u.bootstrapModules : void 0), tt(u ? u.namespaceURI : void 0), u ? u.progressiveChunkSize : void 0, u ? u.onError : void 0, Q, function() {
        var Me = new ReadableStream({ type: "bytes", pull: function(et) {
          if ($.status === 1)
            $.status = 2, Y(et, $.fatalError);
          else if ($.status !== 2 && $.destination === null) {
            $.destination = et;
            try {
              Ao($, et);
            } catch (Vt) {
              lr($, Vt), Nr($, Vt);
            }
          }
        }, cancel: function() {
          Ko($);
        } }, { highWaterMark: 0 });
        Me.allReady = W, p(Me);
      }, function(Me) {
        W.catch(function() {
        }), w(Me);
      }, O);
      if (u && u.signal) {
        var Se = u.signal, Re = function() {
          Ko($, Se.reason), Se.removeEventListener("abort", Re);
        };
        Se.addEventListener("abort", Re);
      }
      _o($);
    });
  }, Ci.version = "18.2.0", Ci;
}
var Oo = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hs;
function Ll() {
  return Hs || (Hs = 1, process.env.NODE_ENV !== "production" && function() {
    var m = Na, d = "18.2.0", D = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var n = arguments.length, A = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
          A[l - 1] = arguments[l];
        M("warn", e, A);
      }
    }
    function s(e) {
      {
        for (var n = arguments.length, A = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
          A[l - 1] = arguments[l];
        M("error", e, A);
      }
    }
    function M(e, n, A) {
      {
        var l = D.ReactDebugCurrentFrame, h = l.getStackAddendum();
        h !== "" && (n += "%s", A = A.concat([h]));
        var b = A.map(function(T) {
          return String(T);
        });
        b.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, b);
      }
    }
    function F(e) {
      e();
    }
    function R(e) {
    }
    function S(e, n) {
      x(e, n);
    }
    function x(e, n) {
      return e.push(n);
    }
    function Y(e) {
    }
    function k(e) {
      e.push(null);
    }
    function q(e) {
      return e;
    }
    function me(e) {
      return e;
    }
    function ae(e, n) {
      e.destroy(n);
    }
    function ye(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, A = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return A;
      }
    }
    function X(e) {
      try {
        return N(e), !1;
      } catch {
        return !0;
      }
    }
    function N(e) {
      return "" + e;
    }
    function J(e, n) {
      if (X(e))
        return s("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", n, ye(e)), N(e);
    }
    function de(e, n) {
      if (X(e))
        return s("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", n, ye(e)), N(e);
    }
    function oe(e) {
      if (X(e))
        return s("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", ye(e)), N(e);
    }
    var Ae = Object.prototype.hasOwnProperty, le = 0, te = 1, Ie = 2, De = 3, We = 4, xe = 5, Be = 6, Ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ne = Ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ke = new RegExp("^[" + Ee + "][" + Ne + "]*$"), Te = {}, Qe = {};
    function Pe(e) {
      return Ae.call(Qe, e) ? !0 : Ae.call(Te, e) ? !1 : Ke.test(e) ? (Qe[e] = !0, !0) : (Te[e] = !0, s("Invalid attribute name: `%s`", e), !1);
    }
    function Ge(e, n, A, l) {
      if (A !== null && A.type === le)
        return !1;
      switch (typeof n) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (l)
            return !1;
          if (A !== null)
            return !A.acceptsBooleans;
          var h = e.toLowerCase().slice(0, 5);
          return h !== "data-" && h !== "aria-";
        }
        default:
          return !1;
      }
    }
    function tt(e) {
      return ke.hasOwnProperty(e) ? ke[e] : null;
    }
    function je(e, n, A, l, h, b, T) {
      this.acceptsBooleans = n === Ie || n === De || n === We, this.attributeName = l, this.attributeNamespace = h, this.mustUseProperty = A, this.propertyName = e, this.type = n, this.sanitizeURL = b, this.removeEmptyString = T;
    }
    var ke = {}, st = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    st.forEach(function(e) {
      ke[e] = new je(
        e,
        le,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var n = e[0], A = e[1];
      ke[n] = new je(
        n,
        te,
        !1,
        // mustUseProperty
        A,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      ke[e] = new je(
        e,
        Ie,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      ke[e] = new je(
        e,
        Ie,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      ke[e] = new je(
        e,
        De,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ke[e] = new je(
        e,
        De,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ke[e] = new je(
        e,
        We,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ke[e] = new je(
        e,
        Be,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      ke[e] = new je(
        e,
        xe,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ht = /[\-\:]([a-z])/g, nt = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var n = e.replace(ht, nt);
      ke[n] = new je(
        n,
        te,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var n = e.replace(ht, nt);
      ke[n] = new je(
        n,
        te,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var n = e.replace(ht, nt);
      ke[n] = new je(
        n,
        te,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      ke[e] = new je(
        e,
        te,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var _e = "xlinkHref";
    ke[_e] = new je(
      "xlinkHref",
      te,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      ke[e] = new je(
        e,
        te,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Tt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Ot(e, n) {
      return e + n.charAt(0).toUpperCase() + n.substring(1);
    }
    var rt = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Tt).forEach(function(e) {
      rt.forEach(function(n) {
        Tt[Ot(n, e)] = Tt[e];
      });
    });
    var yt = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ot(e, n) {
      yt[n.type] || n.onChange || n.onInput || n.readOnly || n.disabled || n.value == null || s("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), n.onChange || n.readOnly || n.disabled || n.checked == null || s("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function en(e, n) {
      if (e.indexOf("-") === -1)
        return typeof n.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var at = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ft = {}, Zt = new RegExp("^(aria)-[" + Ne + "]*$"), Nt = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
    function In(e, n) {
      {
        if (Ae.call(ft, n) && ft[n])
          return !0;
        if (Nt.test(n)) {
          var A = "aria-" + n.slice(4).toLowerCase(), l = at.hasOwnProperty(A) ? A : null;
          if (l == null)
            return s("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", n), ft[n] = !0, !0;
          if (n !== l)
            return s("Invalid ARIA attribute `%s`. Did you mean `%s`?", n, l), ft[n] = !0, !0;
        }
        if (Zt.test(n)) {
          var h = n.toLowerCase(), b = at.hasOwnProperty(h) ? h : null;
          if (b == null)
            return ft[n] = !0, !1;
          if (n !== b)
            return s("Unknown ARIA attribute `%s`. Did you mean `%s`?", n, b), ft[n] = !0, !0;
        }
      }
      return !0;
    }
    function Ct(e, n) {
      {
        var A = [];
        for (var l in n) {
          var h = In(e, l);
          h || A.push(l);
        }
        var b = A.map(function(T) {
          return "`" + T + "`";
        }).join(", ");
        A.length === 1 ? s("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", b, e) : A.length > 1 && s("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", b, e);
      }
    }
    function jt(e, n) {
      en(e, n) || Ct(e, n);
    }
    var tn = !1;
    function kn(e, n) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        n != null && n.value === null && !tn && (tn = !0, e === "select" && n.multiple ? s("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : s("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var wt = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, dt = function() {
    };
    {
      var At = {}, gt = /^on./, Ft = /^on[^A-Z]/, Yt = new RegExp("^(aria)-[" + Ne + "]*$"), ze = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
      dt = function(e, n, A, l) {
        if (Ae.call(At, n) && At[n])
          return !0;
        var h = n.toLowerCase();
        if (h === "onfocusin" || h === "onfocusout")
          return s("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), At[n] = !0, !0;
        if (l != null) {
          var b = l.registrationNameDependencies, T = l.possibleRegistrationNames;
          if (b.hasOwnProperty(n))
            return !0;
          var j = T.hasOwnProperty(h) ? T[h] : null;
          if (j != null)
            return s("Invalid event handler property `%s`. Did you mean `%s`?", n, j), At[n] = !0, !0;
          if (gt.test(n))
            return s("Unknown event handler property `%s`. It will be ignored.", n), At[n] = !0, !0;
        } else if (gt.test(n))
          return Ft.test(n) && s("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", n), At[n] = !0, !0;
        if (Yt.test(n) || ze.test(n))
          return !0;
        if (h === "innerhtml")
          return s("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), At[n] = !0, !0;
        if (h === "aria")
          return s("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), At[n] = !0, !0;
        if (h === "is" && A !== null && A !== void 0 && typeof A != "string")
          return s("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof A), At[n] = !0, !0;
        if (typeof A == "number" && isNaN(A))
          return s("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", n), At[n] = !0, !0;
        var _ = tt(n), ie = _ !== null && _.type === le;
        if (wt.hasOwnProperty(h)) {
          var fe = wt[h];
          if (fe !== n)
            return s("Invalid DOM property `%s`. Did you mean `%s`?", n, fe), At[n] = !0, !0;
        } else if (!ie && n !== h)
          return s("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", n, h), At[n] = !0, !0;
        return typeof A == "boolean" && Ge(n, A, _, !1) ? (A ? s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', A, n, n, A, n) : s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', A, n, n, A, n, n, n), At[n] = !0, !0) : ie ? !0 : Ge(n, A, _, !1) ? (At[n] = !0, !1) : ((A === "false" || A === "true") && _ !== null && _.type === De && (s("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", A, n, A === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', n, A), At[n] = !0), !0);
      };
    }
    var zt = function(e, n, A) {
      {
        var l = [];
        for (var h in n) {
          var b = dt(e, h, n[h], A);
          b || l.push(h);
        }
        var T = l.map(function(j) {
          return "`" + j + "`";
        }).join(", ");
        l.length === 1 ? s("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", T, e) : l.length > 1 && s("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", T, e);
      }
    };
    function Kt(e, n, A) {
      en(e, n) || zt(e, n, A);
    }
    var pt = function() {
    };
    {
      var dn = /^(?:webkit|moz|o)[A-Z]/, Ht = /^-ms-/, Gn = /-(.)/g, xn = /;\s*$/, Gt = {}, hn = {}, Ut = !1, lt = !1, Mt = function(e) {
        return e.replace(Gn, function(n, A) {
          return A.toUpperCase();
        });
      }, vt = function(e) {
        Gt.hasOwnProperty(e) && Gt[e] || (Gt[e] = !0, s(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Mt(e.replace(Ht, "ms-"))
        ));
      }, Le = function(e) {
        Gt.hasOwnProperty(e) && Gt[e] || (Gt[e] = !0, s("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Pt = function(e, n) {
        hn.hasOwnProperty(n) && hn[n] || (hn[n] = !0, s(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, n.replace(xn, "")));
      }, $t = function(e, n) {
        Ut || (Ut = !0, s("`NaN` is an invalid value for the `%s` css style property.", e));
      }, qt = function(e, n) {
        lt || (lt = !0, s("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      pt = function(e, n) {
        e.indexOf("-") > -1 ? vt(e) : dn.test(e) ? Le(e) : xn.test(n) && Pt(e, n), typeof n == "number" && (isNaN(n) ? $t(e, n) : isFinite(n) || qt(e, n));
      };
    }
    var It = pt, nn = /["'&<>]/;
    function Bt(e) {
      oe(e);
      var n = "" + e, A = nn.exec(n);
      if (!A)
        return n;
      var l, h = "", b, T = 0;
      for (b = A.index; b < n.length; b++) {
        switch (n.charCodeAt(b)) {
          case 34:
            l = "&quot;";
            break;
          case 38:
            l = "&amp;";
            break;
          case 39:
            l = "&#x27;";
            break;
          case 60:
            l = "&lt;";
            break;
          case 62:
            l = "&gt;";
            break;
          default:
            continue;
        }
        T !== b && (h += n.substring(T, b)), T = b + 1, h += l;
      }
      return T !== b ? h + n.substring(T, b) : h;
    }
    function Je(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : Bt(e);
    }
    var pn = /([A-Z])/g, gn = /^ms-/;
    function vn(e) {
      return e.replace(pn, "-$1").toLowerCase().replace(gn, "-ms-");
    }
    var qe = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, mn = !1;
    function Rn(e) {
      !mn && qe.test(e) && (mn = !0, s("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var Qn = Array.isArray;
    function I(e) {
      return Qn(e);
    }
    var G = "<script>", ee = "<\/script>", ge = '<script src="', Z = '<script type="module" src="', K = '" async=""><\/script>';
    function re(e) {
      return oe(e), ("" + e).replace(ne, he);
    }
    var ne = /(<\/|<)(s)(cript)/gi, he = function(e, n, A, l) {
      return "" + n + (A === "s" ? "\\u0073" : "\\u0053") + l;
    };
    function ce(e, n, A, l, h) {
      var b = e === void 0 ? "" : e, T = n === void 0 ? G : '<script nonce="' + Je(n) + '">', j = [];
      if (A !== void 0 && j.push(T, re(A), ee), l !== void 0)
        for (var _ = 0; _ < l.length; _++)
          j.push(ge, Je(l[_]), K);
      if (h !== void 0)
        for (var ie = 0; ie < h.length; ie++)
          j.push(Z, Je(h[ie]), K);
      return {
        bootstrapChunks: j,
        startInlineScript: T,
        placeholderPrefix: b + "P:",
        segmentPrefix: b + "S:",
        boundaryPrefix: b + "B:",
        idPrefix: b,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var pe = 0, we = 1, Ze = 2, Xe = 3, Ye = 4, Fe = 5, bt = 6, rn = 7;
    function St(e, n) {
      return {
        insertionMode: e,
        selectedValue: n
      };
    }
    function rr(e, n, A) {
      switch (n) {
        case "select":
          return St(we, A.value != null ? A.value : A.defaultValue);
        case "svg":
          return St(Ze, null);
        case "math":
          return St(Xe, null);
        case "foreignObject":
          return St(we, null);
        case "table":
          return St(Ye, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return St(Fe, null);
        case "colgroup":
          return St(rn, null);
        case "tr":
          return St(bt, null);
      }
      return e.insertionMode >= Ye || e.insertionMode === pe ? St(we, null) : e;
    }
    var yn = null;
    function wn(e) {
      var n = e.nextSuspenseID++;
      return e.boundaryPrefix + n.toString(16);
    }
    function Wt(e, n, A) {
      var l = e.idPrefix, h = ":" + l + "R" + n;
      return A > 0 && (h += "H" + A.toString(32)), h + ":";
    }
    function Tn(e) {
      return Je(e);
    }
    var Ln = "<!-- -->";
    function pr(e, n, A, l) {
      return n === "" ? l : (l && e.push(Ln), e.push(Tn(n)), !0);
    }
    function gr(e, n, A, l) {
      A && l && e.push(Ln);
    }
    var or = /* @__PURE__ */ new Map();
    function On(e) {
      var n = or.get(e);
      if (n !== void 0)
        return n;
      var A = Je(vn(e));
      return or.set(e, A), A;
    }
    var vr = ' style="', ar = ":", Ar = ";";
    function o(e, n, A) {
      if (typeof A != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var l = !0;
      for (var h in A)
        if (Ae.call(A, h)) {
          var b = A[h];
          if (!(b == null || typeof b == "boolean" || b === "")) {
            var T = void 0, j = void 0, _ = h.indexOf("--") === 0;
            _ ? (T = Je(h), de(b, h), j = Je(("" + b).trim())) : (It(h, b), T = On(h), typeof b == "number" ? b !== 0 && !Ae.call(Tt, h) ? j = b + "px" : j = "" + b : (de(b, h), j = Je(("" + b).trim()))), l ? (l = !1, e.push(vr, T, ar, j)) : e.push(Ar, T, ar, j);
          }
        }
      l || e.push(y);
    }
    var c = " ", g = '="', y = '"', L = '=""';
    function B(e, n, A, l) {
      switch (A) {
        case "style": {
          o(e, n, l);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(A.length > 2 && (A[0] === "o" || A[0] === "O") && (A[1] === "n" || A[1] === "N"))
      ) {
        var h = tt(A);
        if (h !== null) {
          switch (typeof l) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!h.acceptsBooleans)
                return;
          }
          var b = h.attributeName, T = b;
          switch (h.type) {
            case De:
              l && e.push(c, T, L);
              return;
            case We:
              l === !0 ? e.push(c, T, L) : l === !1 || e.push(c, T, g, Je(l), y);
              return;
            case xe:
              isNaN(l) || e.push(c, T, g, Je(l), y);
              break;
            case Be:
              !isNaN(l) && l >= 1 && e.push(c, T, g, Je(l), y);
              break;
            default:
              h.sanitizeURL && (J(l, b), l = "" + l, Rn(l)), e.push(c, T, g, Je(l), y);
          }
        } else if (Pe(A)) {
          switch (typeof l) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var j = A.toLowerCase().slice(0, 5);
              if (j !== "data-" && j !== "aria-")
                return;
            }
          }
          e.push(c, A, g, Je(l), y);
        }
      }
    }
    var H = ">", V = "/>";
    function ue(e, n, A) {
      if (n != null) {
        if (A != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof n != "object" || !("__html" in n))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var l = n.__html;
        l != null && (oe(l), e.push("" + l));
      }
    }
    var be = !1, ve = !1, He = !1, _t = !1, kt = !1, Rt = !1, Mn = !1;
    function on(e, n) {
      {
        var A = e[n];
        if (A != null) {
          var l = I(A);
          e.multiple && !l ? s("The `%s` prop supplied to <select> must be an array if `multiple` is true.", n) : !e.multiple && l && s("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", n);
        }
      }
    }
    function ir(e, n, A) {
      ot("select", n), on(n, "value"), on(n, "defaultValue"), n.value !== void 0 && n.defaultValue !== void 0 && !He && (s("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), He = !0), e.push(Xt("select"));
      var l = null, h = null;
      for (var b in n)
        if (Ae.call(n, b)) {
          var T = n[b];
          if (T == null)
            continue;
          switch (b) {
            case "children":
              l = T;
              break;
            case "dangerouslySetInnerHTML":
              h = T;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              B(e, A, b, T);
              break;
          }
        }
      return e.push(H), ue(e, h, l), l;
    }
    function Nn(e) {
      var n = "";
      return m.Children.forEach(e, function(A) {
        A != null && (n += A, !kt && typeof A != "string" && typeof A != "number" && (kt = !0, s("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), n;
    }
    var _n = ' selected=""';
    function Pn(e, n, A, l) {
      var h = l.selectedValue;
      e.push(Xt("option"));
      var b = null, T = null, j = null, _ = null;
      for (var ie in n)
        if (Ae.call(n, ie)) {
          var fe = n[ie];
          if (fe == null)
            continue;
          switch (ie) {
            case "children":
              b = fe;
              break;
            case "selected":
              j = fe, Mn || (s("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Mn = !0);
              break;
            case "dangerouslySetInnerHTML":
              _ = fe;
              break;
            case "value":
              T = fe;
            default:
              B(e, A, ie, fe);
              break;
          }
        }
      if (h != null) {
        var Ce;
        if (T !== null ? (J(T, "value"), Ce = "" + T) : (_ !== null && (Rt || (Rt = !0, s("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Ce = Nn(b)), I(h))
          for (var it = 0; it < h.length; it++) {
            J(h[it], "value");
            var Lt = "" + h[it];
            if (Lt === Ce) {
              e.push(_n);
              break;
            }
          }
        else
          J(h, "select.value"), "" + h === Ce && e.push(_n);
      } else
        j && e.push(_n);
      return e.push(H), ue(e, _, b), b;
    }
    function mr(e, n, A) {
      ot("input", n), n.checked !== void 0 && n.defaultChecked !== void 0 && !ve && (s("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), ve = !0), n.value !== void 0 && n.defaultValue !== void 0 && !be && (s("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), be = !0), e.push(Xt("input"));
      var l = null, h = null, b = null, T = null;
      for (var j in n)
        if (Ae.call(n, j)) {
          var _ = n[j];
          if (_ == null)
            continue;
          switch (j) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              T = _;
              break;
            case "defaultValue":
              h = _;
              break;
            case "checked":
              b = _;
              break;
            case "value":
              l = _;
              break;
            default:
              B(e, A, j, _);
              break;
          }
        }
      return b !== null ? B(e, A, "checked", b) : T !== null && B(e, A, "checked", T), l !== null ? B(e, A, "value", l) : h !== null && B(e, A, "value", h), e.push(V), null;
    }
    function ja(e, n, A) {
      ot("textarea", n), n.value !== void 0 && n.defaultValue !== void 0 && !_t && (s("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), _t = !0), e.push(Xt("textarea"));
      var l = null, h = null, b = null;
      for (var T in n)
        if (Ae.call(n, T)) {
          var j = n[T];
          if (j == null)
            continue;
          switch (T) {
            case "children":
              b = j;
              break;
            case "value":
              l = j;
              break;
            case "defaultValue":
              h = j;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              B(e, A, T, j);
              break;
          }
        }
      if (l === null && h !== null && (l = h), e.push(H), b != null) {
        if (s("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), l != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (I(b)) {
          if (b.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          oe(b[0]), l = "" + b[0];
        }
        oe(b), l = "" + b;
      }
      return typeof l == "string" && l[0] === `
` && e.push(yr), l !== null && (J(l, "value"), e.push(Tn("" + l))), null;
    }
    function Fa(e, n, A, l) {
      e.push(Xt(A));
      for (var h in n)
        if (Ae.call(n, h)) {
          var b = n[h];
          if (b == null)
            continue;
          switch (h) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(A + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              B(e, l, h, b);
              break;
          }
        }
      return e.push(V), null;
    }
    function qr(e, n, A) {
      e.push(Xt("menuitem"));
      for (var l in n)
        if (Ae.call(n, l)) {
          var h = n[l];
          if (h == null)
            continue;
          switch (l) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              B(e, A, l, h);
              break;
          }
        }
      return e.push(H), null;
    }
    function za(e, n, A) {
      e.push(Xt("title"));
      var l = null;
      for (var h in n)
        if (Ae.call(n, h)) {
          var b = n[h];
          if (b == null)
            continue;
          switch (h) {
            case "children":
              l = b;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              B(e, A, h, b);
              break;
          }
        }
      e.push(H);
      {
        var T = Array.isArray(l) && l.length < 2 ? l[0] || null : l;
        Array.isArray(l) && l.length > 1 ? s("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : T != null && T.$$typeof != null ? s("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : T != null && typeof T != "string" && typeof T != "number" && s("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return l;
    }
    function eo(e, n, A, l) {
      e.push(Xt(A));
      var h = null, b = null;
      for (var T in n)
        if (Ae.call(n, T)) {
          var j = n[T];
          if (j == null)
            continue;
          switch (T) {
            case "children":
              h = j;
              break;
            case "dangerouslySetInnerHTML":
              b = j;
              break;
            default:
              B(e, l, T, j);
              break;
          }
        }
      return e.push(H), ue(e, b, h), typeof h == "string" ? (e.push(Tn(h)), null) : h;
    }
    function Bn(e, n, A, l) {
      e.push(Xt(A));
      var h = null, b = null;
      for (var T in n)
        if (Ae.call(n, T)) {
          var j = n[T];
          if (j == null)
            continue;
          switch (T) {
            case "children":
              h = j;
              break;
            case "dangerouslySetInnerHTML":
              b = j;
              break;
            case "style":
              o(e, l, j);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              Pe(T) && typeof j != "function" && typeof j != "symbol" && e.push(c, T, g, Je(j), y);
              break;
          }
        }
      return e.push(H), ue(e, b, h), h;
    }
    var yr = `
`;
    function kr(e, n, A, l) {
      e.push(Xt(A));
      var h = null, b = null;
      for (var T in n)
        if (Ae.call(n, T)) {
          var j = n[T];
          if (j == null)
            continue;
          switch (T) {
            case "children":
              h = j;
              break;
            case "dangerouslySetInnerHTML":
              b = j;
              break;
            default:
              B(e, l, T, j);
              break;
          }
        }
      if (e.push(H), b != null) {
        if (h != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof b != "object" || !("__html" in b))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var _ = b.__html;
        _ != null && (typeof _ == "string" && _.length > 0 && _[0] === `
` ? e.push(yr, _) : (oe(_), e.push("" + _)));
      }
      return typeof h == "string" && h[0] === `
` && e.push(yr), h;
    }
    var $e = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, jn = /* @__PURE__ */ new Map();
    function Xt(e) {
      var n = jn.get(e);
      if (n === void 0) {
        if (!$e.test(e))
          throw new Error("Invalid tag: " + e);
        n = "<" + e, jn.set(e, n);
      }
      return n;
    }
    var Xn = "<!DOCTYPE html>";
    function Fn(e, n, A, l, h) {
      switch (jt(n, A), kn(n, A), Kt(n, A, null), !A.suppressContentEditableWarning && A.contentEditable && A.children != null && s("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), h.insertionMode !== Ze && h.insertionMode !== Xe && n.indexOf("-") === -1 && typeof A.is != "string" && n.toLowerCase() !== n && s("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", n), n) {
        case "select":
          return ir(e, A, l);
        case "option":
          return Pn(e, A, l, h);
        case "textarea":
          return ja(e, A, l);
        case "input":
          return mr(e, A, l);
        case "menuitem":
          return qr(e, A, l);
        case "title":
          return za(e, A, l);
        case "listing":
        case "pre":
          return kr(e, A, n, l);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Fa(e, A, n, l);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return eo(e, A, n, l);
        case "html":
          return h.insertionMode === pe && e.push(Xn), eo(e, A, n, l);
        default:
          return n.indexOf("-") === -1 && typeof A.is != "string" ? eo(e, A, n, l) : Bn(e, A, n, l);
      }
    }
    var Rr = "</", zn = ">";
    function an(e, n, A) {
      switch (n) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          e.push(Rr, n, zn);
      }
    }
    function to(e, n) {
      for (var A = n.bootstrapChunks, l = 0; l < A.length - 1; l++)
        S(e, A[l]);
      return l < A.length ? x(e, A[l]) : !0;
    }
    var no = '<template id="', Fo = '"></template>';
    function zo(e, n, A) {
      S(e, no), S(e, n.placeholderPrefix);
      var l = A.toString(16);
      return S(e, l), x(e, Fo);
    }
    var Ho = "<!--$-->", Ha = '<!--$?--><template id="', Ua = '"></template>', Qr = "<!--$!-->", Lr = "<!--/$-->", Or = "<template", wr = '"', Wa = ' data-dgst="', br = ' data-msg="', ro = ' data-stck="', oo = "></template>";
    function sr(e, n) {
      return x(e, Ho);
    }
    function lr(e, n, A) {
      if (S(e, Ha), A === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return S(e, A), x(e, Ua);
    }
    function Nr(e, n, A, l, h) {
      var b;
      return b = x(e, Qr), S(e, Or), A && (S(e, Wa), S(e, Je(A)), S(e, wr)), l && (S(e, br), S(e, Je(l)), S(e, wr)), h && (S(e, ro), S(e, Je(h)), S(e, wr)), b = x(e, oo), b;
    }
    function Uo(e, n) {
      return x(e, Lr);
    }
    function ao(e, n) {
      return x(e, Lr);
    }
    function Wo(e, n) {
      return x(e, Lr);
    }
    var jr = '<div hidden id="', Jt = '">', Zo = "</div>", Fr = '<svg aria-hidden="true" style="display:none" id="', Za = '">', Yo = "</svg>", zr = '<math aria-hidden="true" style="display:none" id="', Go = '">', _o = "</math>", Hr = '<table hidden id="', Ur = '">', Xo = "</table>", Jo = '<table hidden><tbody id="', Vo = '">', Ao = "</tbody></table>", Ko = '<table hidden><tr id="', a = '">', u = "</tr></table>", p = '<table hidden><colgroup id="', w = '">', O = "</colgroup></table>";
    function Q(e, n, A, l) {
      switch (A.insertionMode) {
        case pe:
        case we:
          return S(e, jr), S(e, n.segmentPrefix), S(e, l.toString(16)), x(e, Jt);
        case Ze:
          return S(e, Fr), S(e, n.segmentPrefix), S(e, l.toString(16)), x(e, Za);
        case Xe:
          return S(e, zr), S(e, n.segmentPrefix), S(e, l.toString(16)), x(e, Go);
        case Ye:
          return S(e, Hr), S(e, n.segmentPrefix), S(e, l.toString(16)), x(e, Ur);
        case Fe:
          return S(e, Jo), S(e, n.segmentPrefix), S(e, l.toString(16)), x(e, Vo);
        case bt:
          return S(e, Ko), S(e, n.segmentPrefix), S(e, l.toString(16)), x(e, a);
        case rn:
          return S(e, p), S(e, n.segmentPrefix), S(e, l.toString(16)), x(e, w);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function W(e, n) {
      switch (n.insertionMode) {
        case pe:
        case we:
          return x(e, Zo);
        case Ze:
          return x(e, Yo);
        case Xe:
          return x(e, _o);
        case Ye:
          return x(e, Xo);
        case Fe:
          return x(e, Ao);
        case bt:
          return x(e, u);
        case rn:
          return x(e, O);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var $ = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Se = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Re = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Me = $ + ';$RS("', et = '$RS("', Vt = '","', An = '")<\/script>';
    function sn(e, n, A) {
      S(e, n.startInlineScript), n.sentCompleteSegmentFunction ? S(e, et) : (n.sentCompleteSegmentFunction = !0, S(e, Me)), S(e, n.segmentPrefix);
      var l = A.toString(16);
      return S(e, l), S(e, Vt), S(e, n.placeholderPrefix), S(e, l), x(e, An);
    }
    var Wr = Se + ';$RC("', $o = '$RC("', io = '","', Bi = '")<\/script>';
    function ki(e, n, A, l) {
      if (S(e, n.startInlineScript), n.sentCompleteBoundaryFunction ? S(e, $o) : (n.sentCompleteBoundaryFunction = !0, S(e, Wr)), A === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var h = l.toString(16);
      return S(e, A), S(e, io), S(e, n.segmentPrefix), S(e, h), x(e, Bi);
    }
    var Ri = Re + ';$RX("', Qi = '$RX("', Li = '"', Oi = ")<\/script>", Ya = ",";
    function Ni(e, n, A, l, h, b) {
      if (S(e, n.startInlineScript), n.sentClientRenderFunction ? S(e, Qi) : (n.sentClientRenderFunction = !0, S(e, Ri)), A === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return S(e, A), S(e, Li), (l || h || b) && (S(e, Ya), S(e, Ga(l || ""))), (h || b) && (S(e, Ya), S(e, Ga(h || ""))), b && (S(e, Ya), S(e, Ga(b))), x(e, Oi);
    }
    var ji = /[<\u2028\u2029]/g;
    function Ga(e) {
      var n = JSON.stringify(e);
      return n.replace(ji, function(A) {
        switch (A) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function Fi(e, n) {
      var A = ce(n, void 0);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: A.bootstrapChunks,
        startInlineScript: A.startInlineScript,
        placeholderPrefix: A.placeholderPrefix,
        segmentPrefix: A.segmentPrefix,
        boundaryPrefix: A.boundaryPrefix,
        idPrefix: A.idPrefix,
        nextSuspenseID: A.nextSuspenseID,
        sentCompleteSegmentFunction: A.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: A.sentCompleteBoundaryFunction,
        sentClientRenderFunction: A.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function _a() {
      return {
        insertionMode: we,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function NA(e, n, A, l) {
      return A.generateStaticMarkup ? (e.push(Je(n)), !1) : pr(e, n, A, l);
    }
    function jA(e, n, A, l) {
      if (!n.generateStaticMarkup)
        return gr(e, n, A, l);
    }
    function Xa(e, n) {
      return n.generateStaticMarkup ? !0 : sr(e);
    }
    function bn(e, n, A, l, h) {
      return n.generateStaticMarkup ? !0 : Nr(e, n, A, l, h);
    }
    function zi(e, n) {
      return n.generateStaticMarkup ? !0 : Uo(e);
    }
    function FA(e, n) {
      return n.generateStaticMarkup ? !0 : Wo(e);
    }
    var ln = Object.assign, zA = Symbol.for("react.element"), Ja = Symbol.for("react.portal"), qo = Symbol.for("react.fragment"), ea = Symbol.for("react.strict_mode"), ta = Symbol.for("react.profiler"), so = Symbol.for("react.provider"), lo = Symbol.for("react.context"), co = Symbol.for("react.forward_ref"), Zr = Symbol.for("react.suspense"), Va = Symbol.for("react.suspense_list"), Ka = Symbol.for("react.memo"), na = Symbol.for("react.lazy"), Hi = Symbol.for("react.scope"), HA = Symbol.for("react.debug_trace_mode"), Ui = Symbol.for("react.legacy_hidden"), Wi = Symbol.for("react.default_value"), UA = Symbol.iterator, WA = "@@iterator";
    function ut(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = UA && e[UA] || e[WA];
      return typeof n == "function" ? n : null;
    }
    function uo(e, n, A) {
      var l = e.displayName;
      if (l)
        return l;
      var h = n.displayName || n.name || "";
      return h !== "" ? A + "(" + h + ")" : A;
    }
    function $a(e) {
      return e.displayName || "Context";
    }
    function ct(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case qo:
          return "Fragment";
        case Ja:
          return "Portal";
        case ta:
          return "Profiler";
        case ea:
          return "StrictMode";
        case Zr:
          return "Suspense";
        case Va:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case lo:
            var n = e;
            return $a(n) + ".Consumer";
          case so:
            var A = e;
            return $a(A._context) + ".Provider";
          case co:
            return uo(e, e.render, "ForwardRef");
          case Ka:
            var l = e.displayName || null;
            return l !== null ? l : ct(e.type) || "Memo";
          case na: {
            var h = e, b = h._payload, T = h._init;
            try {
              return ct(T(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Yr = 0, qa, eA, tA, nA, rA, ZA, YA;
    function ra() {
    }
    ra.__reactDisabledLog = !0;
    function oA() {
      {
        if (Yr === 0) {
          qa = console.log, eA = console.info, tA = console.warn, nA = console.error, rA = console.group, ZA = console.groupCollapsed, YA = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ra,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Yr++;
      }
    }
    function fo() {
      {
        if (Yr--, Yr === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ln({}, e, {
              value: qa
            }),
            info: ln({}, e, {
              value: eA
            }),
            warn: ln({}, e, {
              value: tA
            }),
            error: ln({}, e, {
              value: nA
            }),
            group: ln({}, e, {
              value: rA
            }),
            groupCollapsed: ln({}, e, {
              value: ZA
            }),
            groupEnd: ln({}, e, {
              value: YA
            })
          });
        }
        Yr < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ho = D.ReactCurrentDispatcher, Gr;
    function po(e, n, A) {
      {
        if (Gr === void 0)
          try {
            throw Error();
          } catch (h) {
            var l = h.stack.trim().match(/\n( *(at )?)/);
            Gr = l && l[1] || "";
          }
        return `
` + Gr + e;
      }
    }
    var go = !1, oa;
    {
      var GA = typeof WeakMap == "function" ? WeakMap : Map;
      oa = new GA();
    }
    function aA(e, n) {
      if (!e || go)
        return "";
      {
        var A = oa.get(e);
        if (A !== void 0)
          return A;
      }
      var l;
      go = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = ho.current, ho.current = null, oA();
      try {
        if (n) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (Cn) {
              l = Cn;
            }
            Reflect.construct(e, [], T);
          } else {
            try {
              T.call();
            } catch (Cn) {
              l = Cn;
            }
            e.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Cn) {
            l = Cn;
          }
          e();
        }
      } catch (Cn) {
        if (Cn && l && typeof Cn.stack == "string") {
          for (var j = Cn.stack.split(`
`), _ = l.stack.split(`
`), ie = j.length - 1, fe = _.length - 1; ie >= 1 && fe >= 0 && j[ie] !== _[fe]; )
            fe--;
          for (; ie >= 1 && fe >= 0; ie--, fe--)
            if (j[ie] !== _[fe]) {
              if (ie !== 1 || fe !== 1)
                do
                  if (ie--, fe--, fe < 0 || j[ie] !== _[fe]) {
                    var Ce = `
` + j[ie].replace(" at new ", " at ");
                    return e.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", e.displayName)), typeof e == "function" && oa.set(e, Ce), Ce;
                  }
                while (ie >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        go = !1, ho.current = b, fo(), Error.prepareStackTrace = h;
      }
      var it = e ? e.displayName || e.name : "", Lt = it ? po(it) : "";
      return typeof e == "function" && oa.set(e, Lt), Lt;
    }
    function AA(e, n, A) {
      return aA(e, !0);
    }
    function iA(e, n, A) {
      return aA(e, !1);
    }
    function _A(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function _r(e, n, A) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return aA(e, _A(e));
      if (typeof e == "string")
        return po(e);
      switch (e) {
        case Zr:
          return po("Suspense");
        case Va:
          return po("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case co:
            return iA(e.render);
          case Ka:
            return _r(e.type, n, A);
          case na: {
            var l = e, h = l._payload, b = l._init;
            try {
              return _r(b(h), n, A);
            } catch {
            }
          }
        }
      return "";
    }
    var sA = {}, aa = D.ReactDebugCurrentFrame;
    function Sr(e) {
      if (e) {
        var n = e._owner, A = _r(e.type, e._source, n ? n.type : null);
        aa.setExtraStackFrame(A);
      } else
        aa.setExtraStackFrame(null);
    }
    function lA(e, n, A, l, h) {
      {
        var b = Function.call.bind(Ae);
        for (var T in e)
          if (b(e, T)) {
            var j = void 0;
            try {
              if (typeof e[T] != "function") {
                var _ = Error((l || "React class") + ": " + A + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              j = e[T](n, T, l, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              j = ie;
            }
            j && !(j instanceof Error) && (Sr(h), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", A, T, typeof j), Sr(null)), j instanceof Error && !(j.message in sA) && (sA[j.message] = !0, Sr(h), s("Failed %s type: %s", A, j.message), Sr(null));
          }
      }
    }
    var cA;
    cA = {};
    var cr = {};
    Object.freeze(cr);
    function XA(e, n) {
      {
        var A = e.contextTypes;
        if (!A)
          return cr;
        var l = {};
        for (var h in A)
          l[h] = n[h];
        {
          var b = ct(e) || "Unknown";
          lA(A, l, "context", b);
        }
        return l;
      }
    }
    function Dr(e, n, A, l) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var h = ct(n) || "Unknown";
            cA[h] || (cA[h] = !0, s("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", h, h));
          }
          return A;
        }
        var b = e.getChildContext();
        for (var T in b)
          if (!(T in l))
            throw new Error((ct(n) || "Unknown") + '.getChildContext(): key "' + T + '" is not defined in childContextTypes.');
        {
          var j = ct(n) || "Unknown";
          lA(l, b, "child context", j);
        }
        return ln({}, A, b);
      }
    }
    var Er;
    Er = {};
    var uA = null, Hn = null;
    function Aa(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function ia(e) {
      e.context._currentValue2 = e.value;
    }
    function vo(e, n) {
      if (e !== n) {
        Aa(e);
        var A = e.parent, l = n.parent;
        if (A === null) {
          if (l !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (l === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          vo(A, l);
        }
        ia(n);
      }
    }
    function fA(e) {
      Aa(e);
      var n = e.parent;
      n !== null && fA(n);
    }
    function mo(e) {
      var n = e.parent;
      n !== null && mo(n), ia(e);
    }
    function JA(e, n) {
      Aa(e);
      var A = e.parent;
      if (A === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      A.depth === n.depth ? vo(A, n) : JA(A, n);
    }
    function VA(e, n) {
      var A = n.parent;
      if (A === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === A.depth ? vo(e, A) : VA(e, A), ia(n);
    }
    function sa(e) {
      var n = Hn, A = e;
      n !== A && (n === null ? mo(A) : A === null ? fA(n) : n.depth === A.depth ? vo(n, A) : n.depth > A.depth ? JA(n, A) : VA(n, A), Hn = A);
    }
    function yo(e, n) {
      var A;
      A = e._currentValue2, e._currentValue2 = n, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Er && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Er;
      var l = Hn, h = {
        parent: l,
        depth: l === null ? 0 : l.depth + 1,
        context: e,
        parentValue: A,
        value: n
      };
      return Hn = h, h;
    }
    function dA(e) {
      var n = Hn;
      if (n === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      n.context !== e && s("The parent context is not the expected context. This is probably a bug in React.");
      {
        var A = n.parentValue;
        A === Wi ? n.context._currentValue2 = n.context._defaultValue : n.context._currentValue2 = A, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Er && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Er;
      }
      return Hn = n.parent;
    }
    function Zi() {
      return Hn;
    }
    function Xr(e) {
      var n = e._currentValue2;
      return n;
    }
    function la(e) {
      return e._reactInternals;
    }
    function hA(e, n) {
      e._reactInternals = n;
    }
    var ca = {}, ua = {}, wo, fa, Jr, bo, da, Vr, ha, pa, ga;
    {
      wo = /* @__PURE__ */ new Set(), fa = /* @__PURE__ */ new Set(), Jr = /* @__PURE__ */ new Set(), ha = /* @__PURE__ */ new Set(), bo = /* @__PURE__ */ new Set(), pa = /* @__PURE__ */ new Set(), ga = /* @__PURE__ */ new Set();
      var KA = /* @__PURE__ */ new Set();
      Vr = function(e, n) {
        if (!(e === null || typeof e == "function")) {
          var A = n + "_" + e;
          KA.has(A) || (KA.add(A), s("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, e));
        }
      }, da = function(e, n) {
        if (n === void 0) {
          var A = ct(e) || "Component";
          bo.has(A) || (bo.add(A), s("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", A));
        }
      };
    }
    function $A(e, n) {
      {
        var A = e.constructor, l = A && ct(A) || "ReactClass", h = l + "." + n;
        if (ca[h])
          return;
        s(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, n, n, l), ca[h] = !0;
      }
    }
    var qA = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, n, A) {
        var l = la(e);
        l.queue === null ? $A(e, "setState") : (l.queue.push(n), A != null && Vr(A, "setState"));
      },
      enqueueReplaceState: function(e, n, A) {
        var l = la(e);
        l.replace = !0, l.queue = [n], A != null && Vr(A, "setState");
      },
      enqueueForceUpdate: function(e, n) {
        var A = la(e);
        A.queue === null ? $A(e, "forceUpdate") : n != null && Vr(n, "setState");
      }
    };
    function Yi(e, n, A, l, h) {
      var b = A(h, l);
      da(n, b);
      var T = b == null ? l : ln({}, l, b);
      return T;
    }
    function Gi(e, n, A) {
      var l = cr, h = e.contextType;
      if ("contextType" in e) {
        var b = (
          // Allow null for conditional declaration
          h === null || h !== void 0 && h.$$typeof === lo && h._context === void 0
        );
        if (!b && !ga.has(e)) {
          ga.add(e);
          var T = "";
          h === void 0 ? T = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof h != "object" ? T = " However, it is set to a " + typeof h + "." : h.$$typeof === so ? T = " Did you accidentally pass the Context.Provider instead?" : h._context !== void 0 ? T = " Did you accidentally pass the Context.Consumer instead?" : T = " However, it is set to an object with keys {" + Object.keys(h).join(", ") + "}.", s("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ct(e) || "Component", T);
        }
      }
      typeof h == "object" && h !== null ? l = Xr(h) : l = A;
      var j = new e(n, l);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (j.state === null || j.state === void 0)) {
          var _ = ct(e) || "Component";
          wo.has(_) || (wo.add(_), s("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, j.state === null ? "null" : "undefined", _));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof j.getSnapshotBeforeUpdate == "function") {
          var ie = null, fe = null, Ce = null;
          if (typeof j.componentWillMount == "function" && j.componentWillMount.__suppressDeprecationWarning !== !0 ? ie = "componentWillMount" : typeof j.UNSAFE_componentWillMount == "function" && (ie = "UNSAFE_componentWillMount"), typeof j.componentWillReceiveProps == "function" && j.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? fe = "componentWillReceiveProps" : typeof j.UNSAFE_componentWillReceiveProps == "function" && (fe = "UNSAFE_componentWillReceiveProps"), typeof j.componentWillUpdate == "function" && j.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Ce = "componentWillUpdate" : typeof j.UNSAFE_componentWillUpdate == "function" && (Ce = "UNSAFE_componentWillUpdate"), ie !== null || fe !== null || Ce !== null) {
            var it = ct(e) || "Component", Lt = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jr.has(it) || (Jr.add(it), s(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, it, Lt, ie !== null ? `
  ` + ie : "", fe !== null ? `
  ` + fe : "", Ce !== null ? `
  ` + Ce : ""));
          }
        }
      }
      return j;
    }
    function ei(e, n, A) {
      {
        var l = ct(n) || "Component", h = e.render;
        h || (n.prototype && typeof n.prototype.render == "function" ? s("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : s("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && s("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && s("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), e.propTypes && s("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), e.contextType && s("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), e.contextTypes && s("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), n.contextType && n.contextTypes && !pa.has(n) && (pa.add(n), s("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof e.componentShouldUpdate == "function" && s("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), n.prototype && n.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && s("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ct(n) || "A pure component"), typeof e.componentDidUnmount == "function" && s("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof e.componentDidReceiveProps == "function" && s("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof e.componentWillRecieveProps == "function" && s("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof e.UNSAFE_componentWillRecieveProps == "function" && s("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var b = e.props !== A;
        e.props !== void 0 && b && s("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), e.defaultProps && s("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !fa.has(n) && (fa.add(n), s("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ct(n))), typeof e.getDerivedStateFromProps == "function" && s("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof e.getDerivedStateFromError == "function" && s("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof n.getSnapshotBeforeUpdate == "function" && s("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var T = e.state;
        T && (typeof T != "object" || I(T)) && s("%s.state: must be set to an object or null", l), typeof e.getChildContext == "function" && typeof n.childContextTypes != "object" && s("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function _i(e, n) {
      var A = n.state;
      if (typeof n.componentWillMount == "function") {
        if (n.componentWillMount.__suppressDeprecationWarning !== !0) {
          var l = ct(e) || "Unknown";
          ua[l] || (C(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            l
          ), ua[l] = !0);
        }
        n.componentWillMount();
      }
      typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), A !== n.state && (s("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ct(e) || "Component"), qA.enqueueReplaceState(n, n.state, null));
    }
    function Xi(e, n, A, l) {
      if (e.queue !== null && e.queue.length > 0) {
        var h = e.queue, b = e.replace;
        if (e.queue = null, e.replace = !1, b && h.length === 1)
          n.state = h[0];
        else {
          for (var T = b ? h[0] : n.state, j = !0, _ = b ? 1 : 0; _ < h.length; _++) {
            var ie = h[_], fe = typeof ie == "function" ? ie.call(n, T, A, l) : ie;
            fe != null && (j ? (j = !1, T = ln({}, T, fe)) : ln(T, fe));
          }
          n.state = T;
        }
      } else
        e.queue = null;
    }
    function va(e, n, A, l) {
      ei(e, n, A);
      var h = e.state !== void 0 ? e.state : null;
      e.updater = qA, e.props = A, e.state = h;
      var b = {
        queue: [],
        replace: !1
      };
      hA(e, b);
      var T = n.contextType;
      if (typeof T == "object" && T !== null ? e.context = Xr(T) : e.context = l, e.state === A) {
        var j = ct(n) || "Component";
        ha.has(j) || (ha.add(j), s("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", j));
      }
      var _ = n.getDerivedStateFromProps;
      typeof _ == "function" && (e.state = Yi(e, n, _, h, A)), typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (_i(n, e), Xi(b, e, A, l));
    }
    var ma = {
      id: 1,
      overflow: ""
    };
    function Ji(e) {
      var n = e.overflow, A = e.id, l = A & ~Vi(A);
      return l.toString(32) + n;
    }
    function pA(e, n, A) {
      var l = e.id, h = e.overflow, b = ya(l) - 1, T = l & ~(1 << b), j = A + 1, _ = ya(n) + b;
      if (_ > 30) {
        var ie = b - b % 5, fe = (1 << ie) - 1, Ce = (T & fe).toString(32), it = T >> ie, Lt = b - ie, Cn = ya(n) + Lt, Si = j << Lt, Di = Si | it, Ei = Ce + h;
        return {
          id: 1 << Cn | Di,
          overflow: Ei
        };
      } else {
        var La = j << b, cl = La | T, ul = h;
        return {
          id: 1 << _ | cl,
          overflow: ul
        };
      }
    }
    function ya(e) {
      return 32 - Ki(e);
    }
    function Vi(e) {
      return 1 << ya(e) - 1;
    }
    var Ki = Math.clz32 ? Math.clz32 : Jn, $i = Math.log, qi = Math.LN2;
    function Jn(e) {
      var n = e >>> 0;
      return n === 0 ? 32 : 31 - ($i(n) / qi | 0) | 0;
    }
    function gA(e, n) {
      return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
    }
    var wa = typeof Object.is == "function" ? Object.is : gA, Ue = null, Cr = null, Ir = null, Ve = null, Sn = !1, xr = !1, ba = 0, Qt = null, Vn = 0, Tr = 25, Un = !1, Mr;
    function Kn() {
      if (Ue === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Un && s("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Ue;
    }
    function es(e, n) {
      if (n === null)
        return s("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Mr), !1;
      e.length !== n.length && s(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Mr, "[" + e.join(", ") + "]", "[" + n.join(", ") + "]");
      for (var A = 0; A < n.length && A < e.length; A++)
        if (!wa(e[A], n[A]))
          return !1;
      return !0;
    }
    function ti() {
      if (Vn > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Sa() {
      return Ve === null ? Ir === null ? (Sn = !1, Ir = Ve = ti()) : (Sn = !0, Ve = Ir) : Ve.next === null ? (Sn = !1, Ve = Ve.next = ti()) : (Sn = !0, Ve = Ve.next), Ve;
    }
    function vA(e, n) {
      Ue = n, Cr = e, Un = !1, ba = 0;
    }
    function ts(e, n, A, l) {
      for (; xr; )
        xr = !1, ba = 0, Vn += 1, Ve = null, A = e(n, l);
      return So(), A;
    }
    function ni() {
      var e = ba !== 0;
      return e;
    }
    function So() {
      Un = !1, Ue = null, Cr = null, xr = !1, Ir = null, Vn = 0, Qt = null, Ve = null;
    }
    function ns(e) {
      return Un && s("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Xr(e);
    }
    function ri(e) {
      return Mr = "useContext", Kn(), Xr(e);
    }
    function Da(e, n) {
      return typeof n == "function" ? n(e) : n;
    }
    function rs(e) {
      return Mr = "useState", oi(
        Da,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function oi(e, n, A) {
      if (e !== Da && (Mr = "useReducer"), Ue = Kn(), Ve = Sa(), Sn) {
        var l = Ve.queue, h = l.dispatch;
        if (Qt !== null) {
          var b = Qt.get(l);
          if (b !== void 0) {
            Qt.delete(l);
            var T = Ve.memoizedState, j = b;
            do {
              var _ = j.action;
              Un = !0, T = e(T, _), Un = !1, j = j.next;
            } while (j !== null);
            return Ve.memoizedState = T, [T, h];
          }
        }
        return [Ve.memoizedState, h];
      } else {
        Un = !0;
        var ie;
        e === Da ? ie = typeof n == "function" ? n() : n : ie = A !== void 0 ? A(n) : n, Un = !1, Ve.memoizedState = ie;
        var fe = Ve.queue = {
          last: null,
          dispatch: null
        }, Ce = fe.dispatch = As.bind(null, Ue, fe);
        return [Ve.memoizedState, Ce];
      }
    }
    function ai(e, n) {
      Ue = Kn(), Ve = Sa();
      var A = n === void 0 ? null : n;
      if (Ve !== null) {
        var l = Ve.memoizedState;
        if (l !== null && A !== null) {
          var h = l[1];
          if (es(A, h))
            return l[0];
        }
      }
      Un = !0;
      var b = e();
      return Un = !1, Ve.memoizedState = [b, A], b;
    }
    function os(e) {
      Ue = Kn(), Ve = Sa();
      var n = Ve.memoizedState;
      if (n === null) {
        var A = {
          current: e
        };
        return Object.seal(A), Ve.memoizedState = A, A;
      } else
        return n;
    }
    function as(e, n) {
      Mr = "useLayoutEffect", s("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function As(e, n, A) {
      if (Vn >= Tr)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === Ue) {
        xr = !0;
        var l = {
          action: A,
          next: null
        };
        Qt === null && (Qt = /* @__PURE__ */ new Map());
        var h = Qt.get(n);
        if (h === void 0)
          Qt.set(n, l);
        else {
          for (var b = h; b.next !== null; )
            b = b.next;
          b.next = l;
        }
      }
    }
    function is(e, n) {
      return ai(function() {
        return e;
      }, n);
    }
    function ss(e, n, A) {
      return Kn(), n(e._source);
    }
    function ls(e, n, A) {
      if (A === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return A();
    }
    function cs(e) {
      return Kn(), e;
    }
    function Ea() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Ai() {
      return Kn(), [!1, Ea];
    }
    function mA() {
      var e = Cr, n = Ji(e.treeContext), A = Eo;
      if (A === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var l = ba++;
      return Wt(A, n, l);
    }
    function Do() {
    }
    var ii = {
      readContext: ns,
      useContext: ri,
      useMemo: ai,
      useReducer: oi,
      useRef: os,
      useState: rs,
      useInsertionEffect: Do,
      useLayoutEffect: as,
      useCallback: is,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Do,
      // Effects are not run in the server environment.
      useEffect: Do,
      // Debugging effect
      useDebugValue: Do,
      useDeferredValue: cs,
      useTransition: Ai,
      useId: mA,
      // Subscriptions are not setup in a server environment.
      useMutableSource: ss,
      useSyncExternalStore: ls
    }, Eo = null;
    function Ca(e) {
      Eo = e;
    }
    function yA(e) {
      try {
        var n = "", A = e;
        do {
          switch (A.tag) {
            case 0:
              n += po(A.type, null, null);
              break;
            case 1:
              n += iA(A.type, null, null);
              break;
            case 2:
              n += AA(A.type, null, null);
              break;
          }
          A = A.parent;
        } while (A);
        return n;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    var ur = D.ReactCurrentDispatcher, Ia = D.ReactDebugCurrentFrame, xa = 0, Pr = 1, si = 2, wA = 3, Br = 4, us = 0, li = 1, Wn = 2, fs = 12800;
    function ds(e) {
      return console.error(e), null;
    }
    function Co() {
    }
    function bA(e, n, A, l, h, b, T, j, _) {
      var ie = [], fe = /* @__PURE__ */ new Set(), Ce = {
        destination: null,
        responseState: n,
        progressiveChunkSize: l === void 0 ? fs : l,
        status: us,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: fe,
        pingedTasks: ie,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: h === void 0 ? ds : h,
        onAllReady: b === void 0 ? Co : b,
        onShellReady: T === void 0 ? Co : T,
        onShellError: j === void 0 ? Co : j,
        onFatalError: _ === void 0 ? Co : _
      }, it = fr(
        Ce,
        0,
        null,
        A,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      it.parentFlushed = !0;
      var Lt = Io(Ce, e, null, it, fe, cr, uA, ma);
      return ie.push(Lt), Ce;
    }
    function Ta(e, n) {
      var A = e.pingedTasks;
      A.push(n), A.length === 1 && F(function() {
        return wi(e);
      });
    }
    function $n(e, n) {
      return {
        id: yn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: n,
        errorDigest: null
      };
    }
    function Io(e, n, A, l, h, b, T, j) {
      e.allPendingTasks++, A === null ? e.pendingRootTasks++ : A.pendingTasks++;
      var _ = {
        node: n,
        ping: function() {
          return Ta(e, _);
        },
        blockedBoundary: A,
        blockedSegment: l,
        abortSet: h,
        legacyContext: b,
        context: T,
        treeContext: j
      };
      return _.componentStack = null, h.add(_), _;
    }
    function fr(e, n, A, l, h, b) {
      return {
        status: xa,
        id: -1,
        // lazily assigned later
        index: n,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: l,
        boundary: A,
        lastPushedText: h,
        textEmbedded: b
      };
    }
    var Zn = null;
    function SA() {
      return Zn === null || Zn.componentStack === null ? "" : yA(Zn.componentStack);
    }
    function Dn(e, n) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: n
      };
    }
    function Kr(e, n) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: n
      };
    }
    function DA(e, n) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: n
      };
    }
    function En(e) {
      e.componentStack === null ? s("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var dr = null;
    function EA(e, n) {
      {
        var A;
        typeof n == "string" ? A = n : n && typeof n.message == "string" ? A = n.message : A = String(n);
        var l = dr || SA();
        dr = null, e.errorMessage = A, e.errorComponentStack = l;
      }
    }
    function xo(e, n) {
      var A = e.onError(n);
      if (A != null && typeof A != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof A + '" instead');
      return A;
    }
    function Ma(e, n) {
      var A = e.onShellError;
      A(n);
      var l = e.onFatalError;
      l(n), e.destination !== null ? (e.status = Wn, ae(e.destination, n)) : (e.status = li, e.fatalError = n);
    }
    function ci(e, n, A) {
      Dn(n, "Suspense");
      var l = n.blockedBoundary, h = n.blockedSegment, b = A.fallback, T = A.children, j = /* @__PURE__ */ new Set(), _ = $n(e, j), ie = h.chunks.length, fe = fr(
        e,
        ie,
        _,
        h.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      h.children.push(fe), h.lastPushedText = !1;
      var Ce = fr(
        e,
        0,
        null,
        h.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      Ce.parentFlushed = !0, n.blockedBoundary = _, n.blockedSegment = Ce;
      try {
        if (Pa(e, n, T), jA(Ce.chunks, e.responseState, Ce.lastPushedText, Ce.textEmbedded), Ce.status = Pr, Po(_, Ce), _.pendingTasks === 0) {
          En(n);
          return;
        }
      } catch (Lt) {
        Ce.status = Br, _.forceClientRender = !0, _.errorDigest = xo(e, Lt), EA(_, Lt);
      } finally {
        n.blockedBoundary = l, n.blockedSegment = h;
      }
      var it = Io(e, b, l, fe, j, n.legacyContext, n.context, n.treeContext);
      it.componentStack = n.componentStack, e.pingedTasks.push(it), En(n);
    }
    function ui(e, n, A, l) {
      Dn(n, A);
      var h = n.blockedSegment, b = Fn(h.chunks, A, l, e.responseState, h.formatContext);
      h.lastPushedText = !1;
      var T = h.formatContext;
      h.formatContext = rr(T, A, l), Pa(e, n, b), h.formatContext = T, an(h.chunks, A), h.lastPushedText = !1, En(n);
    }
    function hs(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function CA(e, n, A, l, h) {
      var b = {};
      vA(n, b);
      var T = A(l, h);
      return ts(A, l, T, h);
    }
    function To(e, n, A, l, h) {
      var b = A.render();
      A.props !== h && (MA || s("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ct(l) || "a component"), MA = !0);
      {
        var T = l.childContextTypes;
        if (T != null) {
          var j = n.legacyContext, _ = Dr(A, l, j, T);
          n.legacyContext = _, un(e, n, b), n.legacyContext = j;
          return;
        }
      }
      un(e, n, b);
    }
    function fi(e, n, A, l) {
      DA(n, A);
      var h = XA(A, n.legacyContext), b = Gi(A, l, h);
      va(b, A, l, h), To(e, n, b, A, l), En(n);
    }
    var IA = {}, Mo = {}, xA = {}, TA = {}, MA = !1, di = !1, hi = !1, PA = !1;
    function ps(e, n, A, l) {
      var h;
      if (h = XA(A, n.legacyContext), Kr(n, A), A.prototype && typeof A.prototype.render == "function") {
        var b = ct(A) || "Unknown";
        IA[b] || (s("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), IA[b] = !0);
      }
      var T = CA(e, n, A, l, h), j = ni();
      if (typeof T == "object" && T !== null && typeof T.render == "function" && T.$$typeof === void 0) {
        var _ = ct(A) || "Unknown";
        Mo[_] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Mo[_] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof T == "object" && T !== null && typeof T.render == "function" && T.$$typeof === void 0
      ) {
        {
          var ie = ct(A) || "Unknown";
          Mo[ie] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", ie, ie, ie), Mo[ie] = !0);
        }
        va(T, A, l, h), To(e, n, T, A, l);
      } else if (gs(A), j) {
        var fe = n.treeContext, Ce = 1, it = 0;
        n.treeContext = pA(fe, Ce, it);
        try {
          un(e, n, T);
        } finally {
          n.treeContext = fe;
        }
      } else
        un(e, n, T);
      En(n);
    }
    function gs(e) {
      {
        if (e && e.childContextTypes && s("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), typeof e.getDerivedStateFromProps == "function") {
          var n = ct(e) || "Unknown";
          TA[n] || (s("%s: Function components do not support getDerivedStateFromProps.", n), TA[n] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var A = ct(e) || "Unknown";
          xA[A] || (s("%s: Function components do not support contextType.", A), xA[A] = !0);
        }
      }
    }
    function pi(e, n) {
      if (e && e.defaultProps) {
        var A = ln({}, n), l = e.defaultProps;
        for (var h in l)
          A[h] === void 0 && (A[h] = l[h]);
        return A;
      }
      return n;
    }
    function vs(e, n, A, l, h) {
      Kr(n, A.render);
      var b = CA(e, n, A.render, l, h), T = ni();
      if (T) {
        var j = n.treeContext, _ = 1, ie = 0;
        n.treeContext = pA(j, _, ie);
        try {
          un(e, n, b);
        } finally {
          n.treeContext = j;
        }
      } else
        un(e, n, b);
      En(n);
    }
    function ms(e, n, A, l, h) {
      var b = A.type, T = pi(b, l);
      kA(e, n, b, T, h);
    }
    function BA(e, n, A, l) {
      A._context === void 0 ? A !== A.Consumer && (PA || (PA = !0, s("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : A = A._context;
      var h = l.children;
      typeof h != "function" && s("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var b = Xr(A), T = h(b);
      un(e, n, T);
    }
    function ys(e, n, A, l) {
      var h = A._context, b = l.value, T = l.children, j;
      j = n.context, n.context = yo(h, b), un(e, n, T), n.context = dA(h), j !== n.context && s("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function cn(e, n, A, l, h) {
      Dn(n, "Lazy");
      var b = A._payload, T = A._init, j = T(b), _ = pi(j, l);
      kA(e, n, j, _, h), En(n);
    }
    function kA(e, n, A, l, h) {
      if (typeof A == "function")
        if (hs(A)) {
          fi(e, n, A, l);
          return;
        } else {
          ps(e, n, A, l);
          return;
        }
      if (typeof A == "string") {
        ui(e, n, A, l);
        return;
      }
      switch (A) {
        case Ui:
        case HA:
        case ea:
        case ta:
        case qo: {
          un(e, n, l.children);
          return;
        }
        case Va: {
          Dn(n, "SuspenseList"), un(e, n, l.children), En(n);
          return;
        }
        case Hi:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Zr: {
          ci(e, n, l);
          return;
        }
      }
      if (typeof A == "object" && A !== null)
        switch (A.$$typeof) {
          case co: {
            vs(e, n, A, l, h);
            return;
          }
          case Ka: {
            ms(e, n, A, l, h);
            return;
          }
          case so: {
            ys(e, n, A, l);
            return;
          }
          case lo: {
            BA(e, n, A, l);
            return;
          }
          case na: {
            cn(e, n, A, l);
            return;
          }
        }
      var b = "";
      throw (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (A == null ? A : typeof A) + "." + b));
    }
    function gi(e, n) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (di || s("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), di = !0), e.entries === n && (hi || s("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), hi = !0);
    }
    function un(e, n, A) {
      try {
        return RA(e, n, A);
      } catch (l) {
        throw typeof l == "object" && l !== null && typeof l.then == "function" || (dr = dr !== null ? dr : SA()), l;
      }
    }
    function RA(e, n, A) {
      if (n.node = A, typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case zA: {
            var l = A, h = l.type, b = l.props, T = l.ref;
            kA(e, n, h, b, T);
            return;
          }
          case Ja:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case na: {
            var j = A, _ = j._payload, ie = j._init, fe;
            try {
              fe = ie(_);
            } catch (La) {
              throw typeof La == "object" && La !== null && typeof La.then == "function" && Dn(n, "Lazy"), La;
            }
            un(e, n, fe);
            return;
          }
        }
        if (I(A)) {
          vi(e, n, A);
          return;
        }
        var Ce = ut(A);
        if (Ce) {
          gi(A, Ce);
          var it = Ce.call(A);
          if (it) {
            var Lt = it.next();
            if (!Lt.done) {
              var Cn = [];
              do
                Cn.push(Lt.value), Lt = it.next();
              while (!Lt.done);
              vi(e, n, Cn);
              return;
            }
            return;
          }
        }
        var Si = Object.prototype.toString.call(A);
        throw new Error("Objects are not valid as a React child (found: " + (Si === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : Si) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof A == "string") {
        var Di = n.blockedSegment;
        Di.lastPushedText = NA(n.blockedSegment.chunks, A, e.responseState, Di.lastPushedText);
        return;
      }
      if (typeof A == "number") {
        var Ei = n.blockedSegment;
        Ei.lastPushedText = NA(n.blockedSegment.chunks, "" + A, e.responseState, Ei.lastPushedText);
        return;
      }
      typeof A == "function" && s("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function vi(e, n, A) {
      for (var l = A.length, h = 0; h < l; h++) {
        var b = n.treeContext;
        n.treeContext = pA(b, l, h);
        try {
          Pa(e, n, A[h]);
        } finally {
          n.treeContext = b;
        }
      }
    }
    function ws(e, n, A) {
      var l = n.blockedSegment, h = l.chunks.length, b = fr(
        e,
        h,
        null,
        l.formatContext,
        // Adopt the parent segment's leading text embed
        l.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      l.children.push(b), l.lastPushedText = !1;
      var T = Io(e, n.node, n.blockedBoundary, b, n.abortSet, n.legacyContext, n.context, n.treeContext);
      n.componentStack !== null && (T.componentStack = n.componentStack.parent);
      var j = T.ping;
      A.then(j, j);
    }
    function Pa(e, n, A) {
      var l = n.blockedSegment.formatContext, h = n.legacyContext, b = n.context, T = null;
      T = n.componentStack;
      try {
        return un(e, n, A);
      } catch (j) {
        if (So(), typeof j == "object" && j !== null && typeof j.then == "function") {
          ws(e, n, j), n.blockedSegment.formatContext = l, n.legacyContext = h, n.context = b, sa(b), n.componentStack = T;
          return;
        } else
          throw n.blockedSegment.formatContext = l, n.legacyContext = h, n.context = b, sa(b), n.componentStack = T, j;
      }
    }
    function Ba(e, n, A, l) {
      var h = xo(e, l);
      if (n === null ? Ma(e, l) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = !0, n.errorDigest = h, EA(n, l), n.parentFlushed && e.clientRenderedBoundaries.push(n))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var b = e.onAllReady;
        b();
      }
    }
    function mi(e) {
      var n = this, A = e.blockedBoundary, l = e.blockedSegment;
      l.status = wA, Bo(n, A, l);
    }
    function yi(e, n, A) {
      var l = e.blockedBoundary, h = e.blockedSegment;
      if (h.status = wA, l === null)
        n.allPendingTasks--, n.status !== Wn && (n.status = Wn, n.destination !== null && k(n.destination));
      else {
        if (l.pendingTasks--, !l.forceClientRender) {
          l.forceClientRender = !0;
          var b = A === void 0 ? new Error("The render was aborted by the server without a reason.") : A;
          l.errorDigest = n.onError(b);
          {
            var T = "The server did not finish this Suspense boundary: ";
            b && typeof b.message == "string" ? b = T + b.message : b = T + String(b);
            var j = Zn;
            Zn = e;
            try {
              EA(l, b);
            } finally {
              Zn = j;
            }
          }
          l.parentFlushed && n.clientRenderedBoundaries.push(l);
        }
        if (l.fallbackAbortableTasks.forEach(function(ie) {
          return yi(ie, n, A);
        }), l.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0) {
          var _ = n.onAllReady;
          _();
        }
      }
    }
    function Po(e, n) {
      if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
        var A = n.children[0];
        A.id = n.id, A.parentFlushed = !0, A.status === Pr && Po(e, A);
      } else {
        var l = e.completedSegments;
        l.push(n);
      }
    }
    function Bo(e, n, A) {
      if (n === null) {
        if (A.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = A;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = Co;
          var l = e.onShellReady;
          l();
        }
      } else if (n.pendingTasks--, !n.forceClientRender) {
        if (n.pendingTasks === 0)
          A.parentFlushed && A.status === Pr && Po(n, A), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(mi, e), n.fallbackAbortableTasks.clear();
        else if (A.parentFlushed && A.status === Pr) {
          Po(n, A);
          var h = n.completedSegments;
          h.length === 1 && n.parentFlushed && e.partialBoundaries.push(n);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var b = e.onAllReady;
        b();
      }
    }
    function ka(e, n) {
      var A = n.blockedSegment;
      if (A.status === xa) {
        sa(n.context);
        var l = null;
        l = Zn, Zn = n;
        try {
          un(e, n, n.node), jA(A.chunks, e.responseState, A.lastPushedText, A.textEmbedded), n.abortSet.delete(n), A.status = Pr, Bo(e, n.blockedBoundary, A);
        } catch (b) {
          if (So(), typeof b == "object" && b !== null && typeof b.then == "function") {
            var h = n.ping;
            b.then(h, h);
          } else
            n.abortSet.delete(n), A.status = Br, Ba(e, n.blockedBoundary, A, b);
        } finally {
          Zn = l;
        }
      }
    }
    function wi(e) {
      if (e.status !== Wn) {
        var n = Zi(), A = ur.current;
        ur.current = ii;
        var l;
        l = Ia.getCurrentStack, Ia.getCurrentStack = SA;
        var h = Eo;
        Ca(e.responseState);
        try {
          var b = e.pingedTasks, T;
          for (T = 0; T < b.length; T++) {
            var j = b[T];
            ka(e, j);
          }
          b.splice(0, T), e.destination !== null && Qa(e, e.destination);
        } catch (_) {
          xo(e, _), Ma(e, _);
        } finally {
          Ca(h), ur.current = A, Ia.getCurrentStack = l, A === ii && sa(n);
        }
      }
    }
    function ko(e, n, A) {
      switch (A.parentFlushed = !0, A.status) {
        case xa: {
          var l = A.id = e.nextSegmentId++;
          return A.lastPushedText = !1, A.textEmbedded = !1, zo(n, e.responseState, l);
        }
        case Pr: {
          A.status = si;
          for (var h = !0, b = A.chunks, T = 0, j = A.children, _ = 0; _ < j.length; _++) {
            for (var ie = j[_]; T < ie.index; T++)
              S(n, b[T]);
            h = Ro(e, n, ie);
          }
          for (; T < b.length - 1; T++)
            S(n, b[T]);
          return T < b.length && (h = x(n, b[T])), h;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Ro(e, n, A) {
      var l = A.boundary;
      if (l === null)
        return ko(e, n, A);
      if (l.parentFlushed = !0, l.forceClientRender)
        return bn(n, e.responseState, l.errorDigest, l.errorMessage, l.errorComponentStack), ko(e, n, A), FA(n, e.responseState);
      if (l.pendingTasks > 0) {
        l.rootSegmentID = e.nextSegmentId++, l.completedSegments.length > 0 && e.partialBoundaries.push(l);
        var h = l.id = wn(e.responseState);
        return lr(n, e.responseState, h), ko(e, n, A), ao(n, e.responseState);
      } else {
        if (l.byteSize > e.progressiveChunkSize)
          return l.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(l), lr(n, e.responseState, l.id), ko(e, n, A), ao(n, e.responseState);
        Xa(n, e.responseState);
        var b = l.completedSegments;
        if (b.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var T = b[0];
        return Ro(e, n, T), zi(n, e.responseState);
      }
    }
    function bs(e, n, A) {
      return Ni(n, e.responseState, A.id, A.errorDigest, A.errorMessage, A.errorComponentStack);
    }
    function QA(e, n, A) {
      return Q(n, e.responseState, A.formatContext, A.id), Ro(e, n, A), W(n, A.formatContext);
    }
    function Ra(e, n, A) {
      for (var l = A.completedSegments, h = 0; h < l.length; h++) {
        var b = l[h];
        bi(e, n, A, b);
      }
      return l.length = 0, ki(n, e.responseState, A.id, A.rootSegmentID);
    }
    function Ss(e, n, A) {
      for (var l = A.completedSegments, h = 0; h < l.length; h++) {
        var b = l[h];
        if (!bi(e, n, A, b))
          return h++, l.splice(0, h), !1;
      }
      return l.splice(0, h), !0;
    }
    function bi(e, n, A, l) {
      if (l.status === si)
        return !0;
      var h = l.id;
      if (h === -1) {
        var b = l.id = A.rootSegmentID;
        if (b === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return QA(e, n, l);
      } else
        return QA(e, n, l), sn(n, e.responseState, h);
    }
    function Qa(e, n) {
      try {
        var A = e.completedRootSegment;
        A !== null && e.pendingRootTasks === 0 && (Ro(e, n, A), e.completedRootSegment = null, to(n, e.responseState));
        var l = e.clientRenderedBoundaries, h;
        for (h = 0; h < l.length; h++) {
          var b = l[h];
          if (!bs(e, n, b)) {
            e.destination = null, h++, l.splice(0, h);
            return;
          }
        }
        l.splice(0, h);
        var T = e.completedBoundaries;
        for (h = 0; h < T.length; h++) {
          var j = T[h];
          if (!Ra(e, n, j)) {
            e.destination = null, h++, T.splice(0, h);
            return;
          }
        }
        T.splice(0, h);
        var _ = e.partialBoundaries;
        for (h = 0; h < _.length; h++) {
          var ie = _[h];
          if (!Ss(e, n, ie)) {
            e.destination = null, h++, _.splice(0, h);
            return;
          }
        }
        _.splice(0, h);
        var fe = e.completedBoundaries;
        for (h = 0; h < fe.length; h++) {
          var Ce = fe[h];
          if (!Ra(e, n, Ce)) {
            e.destination = null, h++, fe.splice(0, h);
            return;
          }
        }
        fe.splice(0, h);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && s("There was still abortable task at the root when we closed. This is a bug in React."), k(n));
      }
    }
    function Ds(e) {
      F(function() {
        return wi(e);
      });
    }
    function t(e, n) {
      if (e.status === li) {
        e.status = Wn, ae(n, e.fatalError);
        return;
      }
      if (e.status !== Wn && e.destination === null) {
        e.destination = n;
        try {
          Qa(e, n);
        } catch (A) {
          xo(e, A), Ma(e, A);
        }
      }
    }
    function r(e, n) {
      try {
        var A = e.abortableTasks;
        A.forEach(function(l) {
          return yi(l, e, n);
        }), A.clear(), e.destination !== null && Qa(e, e.destination);
      } catch (l) {
        xo(e, l), Ma(e, l);
      }
    }
    function i() {
    }
    function f(e, n, A, l) {
      var h = !1, b = null, T = "", j = {
        push: function(Ce) {
          return Ce !== null && (T += Ce), !0;
        },
        destroy: function(Ce) {
          h = !0, b = Ce;
        }
      }, _ = !1;
      function ie() {
        _ = !0;
      }
      var fe = bA(e, Fi(A, n ? n.identifierPrefix : void 0), _a(), 1 / 0, i, void 0, ie, void 0, void 0);
      if (Ds(fe), r(fe, l), t(fe, j), h)
        throw b;
      if (!_)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return T;
    }
    function v(e, n) {
      return f(e, n, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function E(e, n) {
      return f(e, n, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function P() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function z() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Oo.renderToNodeStream = P, Oo.renderToStaticMarkup = E, Oo.renderToStaticNodeStream = z, Oo.renderToString = v, Oo.version = d;
  }()), Oo;
}
var Ii = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Us;
function Ol() {
  return Us || (Us = 1, process.env.NODE_ENV !== "production" && function() {
    var m = Na, d = "18.2.0", D = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(t) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          i[f - 1] = arguments[f];
        M("warn", t, i);
      }
    }
    function s(t) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          i[f - 1] = arguments[f];
        M("error", t, i);
      }
    }
    function M(t, r, i) {
      {
        var f = D.ReactDebugCurrentFrame, v = f.getStackAddendum();
        v !== "" && (r += "%s", i = i.concat([v]));
        var E = i.map(function(P) {
          return String(P);
        });
        E.unshift("Warning: " + r), Function.prototype.apply.call(console[t], console, E);
      }
    }
    function F(t) {
      t();
    }
    var R = 512, S = null, x = 0;
    function Y(t) {
      S = new Uint8Array(R), x = 0;
    }
    function k(t, r) {
      if (r.length !== 0) {
        if (r.length > R) {
          x > 0 && (t.enqueue(new Uint8Array(S.buffer, 0, x)), S = new Uint8Array(R), x = 0), t.enqueue(r);
          return;
        }
        var i = r, f = S.length - x;
        f < i.length && (f === 0 ? t.enqueue(S) : (S.set(i.subarray(0, f), x), t.enqueue(S), i = i.subarray(f)), S = new Uint8Array(R), x = 0), S.set(i, x), x += i.length;
      }
    }
    function q(t, r) {
      return k(t, r), !0;
    }
    function me(t) {
      S && x > 0 && (t.enqueue(new Uint8Array(S.buffer, 0, x)), S = null, x = 0);
    }
    function ae(t) {
      t.close();
    }
    var ye = new TextEncoder();
    function X(t) {
      return ye.encode(t);
    }
    function N(t) {
      return ye.encode(t);
    }
    function J(t, r) {
      typeof t.error == "function" ? t.error(r) : t.close();
    }
    function de(t) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return i;
      }
    }
    function oe(t) {
      try {
        return Ae(t), !1;
      } catch {
        return !0;
      }
    }
    function Ae(t) {
      return "" + t;
    }
    function le(t, r) {
      if (oe(t))
        return s("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", r, de(t)), Ae(t);
    }
    function te(t, r) {
      if (oe(t))
        return s("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", r, de(t)), Ae(t);
    }
    function Ie(t) {
      if (oe(t))
        return s("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", de(t)), Ae(t);
    }
    var De = Object.prototype.hasOwnProperty, We = 0, xe = 1, Be = 2, Ee = 3, Ne = 4, Ke = 5, Te = 6, Qe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Pe = Qe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ge = new RegExp("^[" + Qe + "][" + Pe + "]*$"), tt = {}, je = {};
    function ke(t) {
      return De.call(je, t) ? !0 : De.call(tt, t) ? !1 : Ge.test(t) ? (je[t] = !0, !0) : (tt[t] = !0, s("Invalid attribute name: `%s`", t), !1);
    }
    function st(t, r, i, f) {
      if (i !== null && i.type === We)
        return !1;
      switch (typeof r) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (f)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var v = t.toLowerCase().slice(0, 5);
          return v !== "data-" && v !== "aria-";
        }
        default:
          return !1;
      }
    }
    function ht(t) {
      return _e.hasOwnProperty(t) ? _e[t] : null;
    }
    function nt(t, r, i, f, v, E, P) {
      this.acceptsBooleans = r === Be || r === Ee || r === Ne, this.attributeName = f, this.attributeNamespace = v, this.mustUseProperty = i, this.propertyName = t, this.type = r, this.sanitizeURL = E, this.removeEmptyString = P;
    }
    var _e = {}, Tt = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Tt.forEach(function(t) {
      _e[t] = new nt(
        t,
        We,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
      var r = t[0], i = t[1];
      _e[r] = new nt(
        r,
        xe,
        !1,
        // mustUseProperty
        i,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
      _e[t] = new nt(
        t,
        Be,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
      _e[t] = new nt(
        t,
        Be,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(t) {
      _e[t] = new nt(
        t,
        Ee,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      _e[t] = new nt(
        t,
        Ee,
        !0,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      _e[t] = new nt(
        t,
        Ne,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      _e[t] = new nt(
        t,
        Te,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(t) {
      _e[t] = new nt(
        t,
        Ke,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ot = /[\-\:]([a-z])/g, rt = function(t) {
      return t[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var r = t.replace(Ot, rt);
      _e[r] = new nt(
        r,
        xe,
        !1,
        // mustUseProperty
        t,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var r = t.replace(Ot, rt);
      _e[r] = new nt(
        r,
        xe,
        !1,
        // mustUseProperty
        t,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var r = t.replace(Ot, rt);
      _e[r] = new nt(
        r,
        xe,
        !1,
        // mustUseProperty
        t,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(t) {
      _e[t] = new nt(
        t,
        xe,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var yt = "xlinkHref";
    _e[yt] = new nt(
      "xlinkHref",
      xe,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(t) {
      _e[t] = new nt(
        t,
        xe,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ot = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function en(t, r) {
      return t + r.charAt(0).toUpperCase() + r.substring(1);
    }
    var at = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ot).forEach(function(t) {
      at.forEach(function(r) {
        ot[en(r, t)] = ot[t];
      });
    });
    var ft = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Zt(t, r) {
      ft[r.type] || r.onChange || r.onInput || r.readOnly || r.disabled || r.value == null || s("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), r.onChange || r.readOnly || r.disabled || r.checked == null || s("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Nt(t, r) {
      if (t.indexOf("-") === -1)
        return typeof r.is == "string";
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var In = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ct = {}, jt = new RegExp("^(aria)-[" + Pe + "]*$"), tn = new RegExp("^(aria)[A-Z][" + Pe + "]*$");
    function kn(t, r) {
      {
        if (De.call(Ct, r) && Ct[r])
          return !0;
        if (tn.test(r)) {
          var i = "aria-" + r.slice(4).toLowerCase(), f = In.hasOwnProperty(i) ? i : null;
          if (f == null)
            return s("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", r), Ct[r] = !0, !0;
          if (r !== f)
            return s("Invalid ARIA attribute `%s`. Did you mean `%s`?", r, f), Ct[r] = !0, !0;
        }
        if (jt.test(r)) {
          var v = r.toLowerCase(), E = In.hasOwnProperty(v) ? v : null;
          if (E == null)
            return Ct[r] = !0, !1;
          if (r !== E)
            return s("Unknown ARIA attribute `%s`. Did you mean `%s`?", r, E), Ct[r] = !0, !0;
        }
      }
      return !0;
    }
    function wt(t, r) {
      {
        var i = [];
        for (var f in r) {
          var v = kn(t, f);
          v || i.push(f);
        }
        var E = i.map(function(P) {
          return "`" + P + "`";
        }).join(", ");
        i.length === 1 ? s("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", E, t) : i.length > 1 && s("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", E, t);
      }
    }
    function dt(t, r) {
      Nt(t, r) || wt(t, r);
    }
    var At = !1;
    function gt(t, r) {
      {
        if (t !== "input" && t !== "textarea" && t !== "select")
          return;
        r != null && r.value === null && !At && (At = !0, t === "select" && r.multiple ? s("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", t) : s("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", t));
      }
    }
    var Ft = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Yt = function() {
    };
    {
      var ze = {}, zt = /^on./, Kt = /^on[^A-Z]/, pt = new RegExp("^(aria)-[" + Pe + "]*$"), dn = new RegExp("^(aria)[A-Z][" + Pe + "]*$");
      Yt = function(t, r, i, f) {
        if (De.call(ze, r) && ze[r])
          return !0;
        var v = r.toLowerCase();
        if (v === "onfocusin" || v === "onfocusout")
          return s("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ze[r] = !0, !0;
        if (f != null) {
          var E = f.registrationNameDependencies, P = f.possibleRegistrationNames;
          if (E.hasOwnProperty(r))
            return !0;
          var z = P.hasOwnProperty(v) ? P[v] : null;
          if (z != null)
            return s("Invalid event handler property `%s`. Did you mean `%s`?", r, z), ze[r] = !0, !0;
          if (zt.test(r))
            return s("Unknown event handler property `%s`. It will be ignored.", r), ze[r] = !0, !0;
        } else if (zt.test(r))
          return Kt.test(r) && s("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", r), ze[r] = !0, !0;
        if (pt.test(r) || dn.test(r))
          return !0;
        if (v === "innerhtml")
          return s("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ze[r] = !0, !0;
        if (v === "aria")
          return s("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ze[r] = !0, !0;
        if (v === "is" && i !== null && i !== void 0 && typeof i != "string")
          return s("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), ze[r] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return s("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", r), ze[r] = !0, !0;
        var e = ht(r), n = e !== null && e.type === We;
        if (Ft.hasOwnProperty(v)) {
          var A = Ft[v];
          if (A !== r)
            return s("Invalid DOM property `%s`. Did you mean `%s`?", r, A), ze[r] = !0, !0;
        } else if (!n && r !== v)
          return s("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", r, v), ze[r] = !0, !0;
        return typeof i == "boolean" && st(r, i, e, !1) ? (i ? s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, r, r, i, r) : s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, r, r, i, r, r, r), ze[r] = !0, !0) : n ? !0 : st(r, i, e, !1) ? (ze[r] = !0, !1) : ((i === "false" || i === "true") && e !== null && e.type === Ee && (s("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, r, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', r, i), ze[r] = !0), !0);
      };
    }
    var Ht = function(t, r, i) {
      {
        var f = [];
        for (var v in r) {
          var E = Yt(t, v, r[v], i);
          E || f.push(v);
        }
        var P = f.map(function(z) {
          return "`" + z + "`";
        }).join(", ");
        f.length === 1 ? s("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", P, t) : f.length > 1 && s("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", P, t);
      }
    };
    function Gn(t, r, i) {
      Nt(t, r) || Ht(t, r, i);
    }
    var xn = function() {
    };
    {
      var Gt = /^(?:webkit|moz|o)[A-Z]/, hn = /^-ms-/, Ut = /-(.)/g, lt = /;\s*$/, Mt = {}, vt = {}, Le = !1, Pt = !1, $t = function(t) {
        return t.replace(Ut, function(r, i) {
          return i.toUpperCase();
        });
      }, qt = function(t) {
        Mt.hasOwnProperty(t) && Mt[t] || (Mt[t] = !0, s(
          "Unsupported style property %s. Did you mean %s?",
          t,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          $t(t.replace(hn, "ms-"))
        ));
      }, It = function(t) {
        Mt.hasOwnProperty(t) && Mt[t] || (Mt[t] = !0, s("Unsupported vendor-prefixed style property %s. Did you mean %s?", t, t.charAt(0).toUpperCase() + t.slice(1)));
      }, nn = function(t, r) {
        vt.hasOwnProperty(r) && vt[r] || (vt[r] = !0, s(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, t, r.replace(lt, "")));
      }, Bt = function(t, r) {
        Le || (Le = !0, s("`NaN` is an invalid value for the `%s` css style property.", t));
      }, Je = function(t, r) {
        Pt || (Pt = !0, s("`Infinity` is an invalid value for the `%s` css style property.", t));
      };
      xn = function(t, r) {
        t.indexOf("-") > -1 ? qt(t) : Gt.test(t) ? It(t) : lt.test(r) && nn(t, r), typeof r == "number" && (isNaN(r) ? Bt(t, r) : isFinite(r) || Je(t, r));
      };
    }
    var pn = xn, gn = /["'&<>]/;
    function vn(t) {
      Ie(t);
      var r = "" + t, i = gn.exec(r);
      if (!i)
        return r;
      var f, v = "", E, P = 0;
      for (E = i.index; E < r.length; E++) {
        switch (r.charCodeAt(E)) {
          case 34:
            f = "&quot;";
            break;
          case 38:
            f = "&amp;";
            break;
          case 39:
            f = "&#x27;";
            break;
          case 60:
            f = "&lt;";
            break;
          case 62:
            f = "&gt;";
            break;
          default:
            continue;
        }
        P !== E && (v += r.substring(P, E)), P = E + 1, v += f;
      }
      return P !== E ? v + r.substring(P, E) : v;
    }
    function qe(t) {
      return typeof t == "boolean" || typeof t == "number" ? "" + t : vn(t);
    }
    var mn = /([A-Z])/g, Rn = /^ms-/;
    function Qn(t) {
      return t.replace(mn, "-$1").toLowerCase().replace(Rn, "-ms-");
    }
    var I = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, G = !1;
    function ee(t) {
      !G && I.test(t) && (G = !0, s("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(t)));
    }
    var ge = Array.isArray;
    function Z(t) {
      return ge(t);
    }
    var K = N("<script>"), re = N("<\/script>"), ne = N('<script src="'), he = N('<script type="module" src="'), ce = N('" async=""><\/script>');
    function pe(t) {
      return Ie(t), ("" + t).replace(we, Ze);
    }
    var we = /(<\/|<)(s)(cript)/gi, Ze = function(t, r, i, f) {
      return "" + r + (i === "s" ? "\\u0073" : "\\u0053") + f;
    };
    function Xe(t, r, i, f, v) {
      var E = t === void 0 ? "" : t, P = r === void 0 ? K : N('<script nonce="' + qe(r) + '">'), z = [];
      if (i !== void 0 && z.push(P, X(pe(i)), re), f !== void 0)
        for (var e = 0; e < f.length; e++)
          z.push(ne, X(qe(f[e])), ce);
      if (v !== void 0)
        for (var n = 0; n < v.length; n++)
          z.push(he, X(qe(v[n])), ce);
      return {
        bootstrapChunks: z,
        startInlineScript: P,
        placeholderPrefix: N(E + "P:"),
        segmentPrefix: N(E + "S:"),
        boundaryPrefix: E + "B:",
        idPrefix: E,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Ye = 0, Fe = 1, bt = 2, rn = 3, St = 4, rr = 5, yn = 6, wn = 7;
    function Wt(t, r) {
      return {
        insertionMode: t,
        selectedValue: r
      };
    }
    function Tn(t) {
      var r = t === "http://www.w3.org/2000/svg" ? bt : t === "http://www.w3.org/1998/Math/MathML" ? rn : Ye;
      return Wt(r, null);
    }
    function Ln(t, r, i) {
      switch (r) {
        case "select":
          return Wt(Fe, i.value != null ? i.value : i.defaultValue);
        case "svg":
          return Wt(bt, null);
        case "math":
          return Wt(rn, null);
        case "foreignObject":
          return Wt(Fe, null);
        case "table":
          return Wt(St, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Wt(rr, null);
        case "colgroup":
          return Wt(wn, null);
        case "tr":
          return Wt(yn, null);
      }
      return t.insertionMode >= St || t.insertionMode === Ye ? Wt(Fe, null) : t;
    }
    var pr = null;
    function gr(t) {
      var r = t.nextSuspenseID++;
      return N(t.boundaryPrefix + r.toString(16));
    }
    function or(t, r, i) {
      var f = t.idPrefix, v = ":" + f + "R" + r;
      return i > 0 && (v += "H" + i.toString(32)), v + ":";
    }
    function On(t) {
      return qe(t);
    }
    var vr = N("<!-- -->");
    function ar(t, r, i, f) {
      return r === "" ? f : (f && t.push(vr), t.push(X(On(r))), !0);
    }
    function Ar(t, r, i, f) {
      i && f && t.push(vr);
    }
    var o = /* @__PURE__ */ new Map();
    function c(t) {
      var r = o.get(t);
      if (r !== void 0)
        return r;
      var i = N(qe(Qn(t)));
      return o.set(t, i), i;
    }
    var g = N(' style="'), y = N(":"), L = N(";");
    function B(t, r, i) {
      if (typeof i != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var f = !0;
      for (var v in i)
        if (De.call(i, v)) {
          var E = i[v];
          if (!(E == null || typeof E == "boolean" || E === "")) {
            var P = void 0, z = void 0, e = v.indexOf("--") === 0;
            e ? (P = X(qe(v)), te(E, v), z = X(qe(("" + E).trim()))) : (pn(v, E), P = c(v), typeof E == "number" ? E !== 0 && !De.call(ot, v) ? z = X(E + "px") : z = X("" + E) : (te(E, v), z = X(qe(("" + E).trim())))), f ? (f = !1, t.push(g, P, y, z)) : t.push(L, P, y, z);
          }
        }
      f || t.push(ue);
    }
    var H = N(" "), V = N('="'), ue = N('"'), be = N('=""');
    function ve(t, r, i, f) {
      switch (i) {
        case "style": {
          B(t, r, f);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(i.length > 2 && (i[0] === "o" || i[0] === "O") && (i[1] === "n" || i[1] === "N"))
      ) {
        var v = ht(i);
        if (v !== null) {
          switch (typeof f) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!v.acceptsBooleans)
                return;
          }
          var E = v.attributeName, P = X(E);
          switch (v.type) {
            case Ee:
              f && t.push(H, P, be);
              return;
            case Ne:
              f === !0 ? t.push(H, P, be) : f === !1 || t.push(H, P, V, X(qe(f)), ue);
              return;
            case Ke:
              isNaN(f) || t.push(H, P, V, X(qe(f)), ue);
              break;
            case Te:
              !isNaN(f) && f >= 1 && t.push(H, P, V, X(qe(f)), ue);
              break;
            default:
              v.sanitizeURL && (le(f, E), f = "" + f, ee(f)), t.push(H, P, V, X(qe(f)), ue);
          }
        } else if (ke(i)) {
          switch (typeof f) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var z = i.toLowerCase().slice(0, 5);
              if (z !== "data-" && z !== "aria-")
                return;
            }
          }
          t.push(H, X(i), V, X(qe(f)), ue);
        }
      }
    }
    var He = N(">"), _t = N("/>");
    function kt(t, r, i) {
      if (r != null) {
        if (i != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof r != "object" || !("__html" in r))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var f = r.__html;
        f != null && (Ie(f), t.push(X("" + f)));
      }
    }
    var Rt = !1, Mn = !1, on = !1, ir = !1, Nn = !1, _n = !1, Pn = !1;
    function mr(t, r) {
      {
        var i = t[r];
        if (i != null) {
          var f = Z(i);
          t.multiple && !f ? s("The `%s` prop supplied to <select> must be an array if `multiple` is true.", r) : !t.multiple && f && s("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", r);
        }
      }
    }
    function ja(t, r, i) {
      Zt("select", r), mr(r, "value"), mr(r, "defaultValue"), r.value !== void 0 && r.defaultValue !== void 0 && !on && (s("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), on = !0), t.push(an("select"));
      var f = null, v = null;
      for (var E in r)
        if (De.call(r, E)) {
          var P = r[E];
          if (P == null)
            continue;
          switch (E) {
            case "children":
              f = P;
              break;
            case "dangerouslySetInnerHTML":
              v = P;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ve(t, i, E, P);
              break;
          }
        }
      return t.push(He), kt(t, v, f), f;
    }
    function Fa(t) {
      var r = "";
      return m.Children.forEach(t, function(i) {
        i != null && (r += i, !Nn && typeof i != "string" && typeof i != "number" && (Nn = !0, s("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), r;
    }
    var qr = N(' selected=""');
    function za(t, r, i, f) {
      var v = f.selectedValue;
      t.push(an("option"));
      var E = null, P = null, z = null, e = null;
      for (var n in r)
        if (De.call(r, n)) {
          var A = r[n];
          if (A == null)
            continue;
          switch (n) {
            case "children":
              E = A;
              break;
            case "selected":
              z = A, Pn || (s("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Pn = !0);
              break;
            case "dangerouslySetInnerHTML":
              e = A;
              break;
            case "value":
              P = A;
            default:
              ve(t, i, n, A);
              break;
          }
        }
      if (v != null) {
        var l;
        if (P !== null ? (le(P, "value"), l = "" + P) : (e !== null && (_n || (_n = !0, s("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), l = Fa(E)), Z(v))
          for (var h = 0; h < v.length; h++) {
            le(v[h], "value");
            var b = "" + v[h];
            if (b === l) {
              t.push(qr);
              break;
            }
          }
        else
          le(v, "select.value"), "" + v === l && t.push(qr);
      } else
        z && t.push(qr);
      return t.push(He), kt(t, e, E), E;
    }
    function eo(t, r, i) {
      Zt("input", r), r.checked !== void 0 && r.defaultChecked !== void 0 && !Mn && (s("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), Mn = !0), r.value !== void 0 && r.defaultValue !== void 0 && !Rt && (s("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), Rt = !0), t.push(an("input"));
      var f = null, v = null, E = null, P = null;
      for (var z in r)
        if (De.call(r, z)) {
          var e = r[z];
          if (e == null)
            continue;
          switch (z) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              P = e;
              break;
            case "defaultValue":
              v = e;
              break;
            case "checked":
              E = e;
              break;
            case "value":
              f = e;
              break;
            default:
              ve(t, i, z, e);
              break;
          }
        }
      return E !== null ? ve(t, i, "checked", E) : P !== null && ve(t, i, "checked", P), f !== null ? ve(t, i, "value", f) : v !== null && ve(t, i, "value", v), t.push(_t), null;
    }
    function Bn(t, r, i) {
      Zt("textarea", r), r.value !== void 0 && r.defaultValue !== void 0 && !ir && (s("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ir = !0), t.push(an("textarea"));
      var f = null, v = null, E = null;
      for (var P in r)
        if (De.call(r, P)) {
          var z = r[P];
          if (z == null)
            continue;
          switch (P) {
            case "children":
              E = z;
              break;
            case "value":
              f = z;
              break;
            case "defaultValue":
              v = z;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              ve(t, i, P, z);
              break;
          }
        }
      if (f === null && v !== null && (f = v), t.push(He), E != null) {
        if (s("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), f != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Z(E)) {
          if (E.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          Ie(E[0]), f = "" + E[0];
        }
        Ie(E), f = "" + E;
      }
      return typeof f == "string" && f[0] === `
` && t.push(Xn), f !== null && (le(f, "value"), t.push(X(On("" + f)))), null;
    }
    function yr(t, r, i, f) {
      t.push(an(i));
      for (var v in r)
        if (De.call(r, v)) {
          var E = r[v];
          if (E == null)
            continue;
          switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(i + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ve(t, f, v, E);
              break;
          }
        }
      return t.push(_t), null;
    }
    function kr(t, r, i) {
      t.push(an("menuitem"));
      for (var f in r)
        if (De.call(r, f)) {
          var v = r[f];
          if (v == null)
            continue;
          switch (f) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              ve(t, i, f, v);
              break;
          }
        }
      return t.push(He), null;
    }
    function $e(t, r, i) {
      t.push(an("title"));
      var f = null;
      for (var v in r)
        if (De.call(r, v)) {
          var E = r[v];
          if (E == null)
            continue;
          switch (v) {
            case "children":
              f = E;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              ve(t, i, v, E);
              break;
          }
        }
      t.push(He);
      {
        var P = Array.isArray(f) && f.length < 2 ? f[0] || null : f;
        Array.isArray(f) && f.length > 1 ? s("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : P != null && P.$$typeof != null ? s("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : P != null && typeof P != "string" && typeof P != "number" && s("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return f;
    }
    function jn(t, r, i, f) {
      t.push(an(i));
      var v = null, E = null;
      for (var P in r)
        if (De.call(r, P)) {
          var z = r[P];
          if (z == null)
            continue;
          switch (P) {
            case "children":
              v = z;
              break;
            case "dangerouslySetInnerHTML":
              E = z;
              break;
            default:
              ve(t, f, P, z);
              break;
          }
        }
      return t.push(He), kt(t, E, v), typeof v == "string" ? (t.push(X(On(v))), null) : v;
    }
    function Xt(t, r, i, f) {
      t.push(an(i));
      var v = null, E = null;
      for (var P in r)
        if (De.call(r, P)) {
          var z = r[P];
          if (z == null)
            continue;
          switch (P) {
            case "children":
              v = z;
              break;
            case "dangerouslySetInnerHTML":
              E = z;
              break;
            case "style":
              B(t, f, z);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ke(P) && typeof z != "function" && typeof z != "symbol" && t.push(H, X(P), V, X(qe(z)), ue);
              break;
          }
        }
      return t.push(He), kt(t, E, v), v;
    }
    var Xn = N(`
`);
    function Fn(t, r, i, f) {
      t.push(an(i));
      var v = null, E = null;
      for (var P in r)
        if (De.call(r, P)) {
          var z = r[P];
          if (z == null)
            continue;
          switch (P) {
            case "children":
              v = z;
              break;
            case "dangerouslySetInnerHTML":
              E = z;
              break;
            default:
              ve(t, f, P, z);
              break;
          }
        }
      if (t.push(He), E != null) {
        if (v != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof E != "object" || !("__html" in E))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var e = E.__html;
        e != null && (typeof e == "string" && e.length > 0 && e[0] === `
` ? t.push(Xn, X(e)) : (Ie(e), t.push(X("" + e))));
      }
      return typeof v == "string" && v[0] === `
` && t.push(Xn), v;
    }
    var Rr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, zn = /* @__PURE__ */ new Map();
    function an(t) {
      var r = zn.get(t);
      if (r === void 0) {
        if (!Rr.test(t))
          throw new Error("Invalid tag: " + t);
        r = N("<" + t), zn.set(t, r);
      }
      return r;
    }
    var to = N("<!DOCTYPE html>");
    function no(t, r, i, f, v) {
      switch (dt(r, i), gt(r, i), Gn(r, i, null), !i.suppressContentEditableWarning && i.contentEditable && i.children != null && s("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), v.insertionMode !== bt && v.insertionMode !== rn && r.indexOf("-") === -1 && typeof i.is != "string" && r.toLowerCase() !== r && s("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", r), r) {
        case "select":
          return ja(t, i, f);
        case "option":
          return za(t, i, f, v);
        case "textarea":
          return Bn(t, i, f);
        case "input":
          return eo(t, i, f);
        case "menuitem":
          return kr(t, i, f);
        case "title":
          return $e(t, i, f);
        case "listing":
        case "pre":
          return Fn(t, i, r, f);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return yr(t, i, r, f);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return jn(t, i, r, f);
        case "html":
          return v.insertionMode === Ye && t.push(to), jn(t, i, r, f);
        default:
          return r.indexOf("-") === -1 && typeof i.is != "string" ? jn(t, i, r, f) : Xt(t, i, r, f);
      }
    }
    var Fo = N("</"), zo = N(">");
    function Ho(t, r, i) {
      switch (r) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          t.push(Fo, X(r), zo);
      }
    }
    function Ha(t, r) {
      for (var i = r.bootstrapChunks, f = 0; f < i.length - 1; f++)
        k(t, i[f]);
      return f < i.length ? q(t, i[f]) : !0;
    }
    var Ua = N('<template id="'), Qr = N('"></template>');
    function Lr(t, r, i) {
      k(t, Ua), k(t, r.placeholderPrefix);
      var f = X(i.toString(16));
      return k(t, f), q(t, Qr);
    }
    var Or = N("<!--$-->"), wr = N('<!--$?--><template id="'), Wa = N('"></template>'), br = N("<!--$!-->"), ro = N("<!--/$-->"), oo = N("<template"), sr = N('"'), lr = N(' data-dgst="'), Nr = N(' data-msg="'), Uo = N(' data-stck="'), ao = N("></template>");
    function Wo(t, r) {
      return q(t, Or);
    }
    function jr(t, r, i) {
      if (k(t, wr), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(t, i), q(t, Wa);
    }
    function Jt(t, r, i, f, v) {
      var E;
      return E = q(t, br), k(t, oo), i && (k(t, lr), k(t, X(qe(i))), k(t, sr)), f && (k(t, Nr), k(t, X(qe(f))), k(t, sr)), v && (k(t, Uo), k(t, X(qe(v))), k(t, sr)), E = q(t, ao), E;
    }
    function Zo(t, r) {
      return q(t, ro);
    }
    function Fr(t, r) {
      return q(t, ro);
    }
    function Za(t, r) {
      return q(t, ro);
    }
    var Yo = N('<div hidden id="'), zr = N('">'), Go = N("</div>"), _o = N('<svg aria-hidden="true" style="display:none" id="'), Hr = N('">'), Ur = N("</svg>"), Xo = N('<math aria-hidden="true" style="display:none" id="'), Jo = N('">'), Vo = N("</math>"), Ao = N('<table hidden id="'), Ko = N('">'), a = N("</table>"), u = N('<table hidden><tbody id="'), p = N('">'), w = N("</tbody></table>"), O = N('<table hidden><tr id="'), Q = N('">'), W = N("</tr></table>"), $ = N('<table hidden><colgroup id="'), Se = N('">'), Re = N("</colgroup></table>");
    function Me(t, r, i, f) {
      switch (i.insertionMode) {
        case Ye:
        case Fe:
          return k(t, Yo), k(t, r.segmentPrefix), k(t, X(f.toString(16))), q(t, zr);
        case bt:
          return k(t, _o), k(t, r.segmentPrefix), k(t, X(f.toString(16))), q(t, Hr);
        case rn:
          return k(t, Xo), k(t, r.segmentPrefix), k(t, X(f.toString(16))), q(t, Jo);
        case St:
          return k(t, Ao), k(t, r.segmentPrefix), k(t, X(f.toString(16))), q(t, Ko);
        case rr:
          return k(t, u), k(t, r.segmentPrefix), k(t, X(f.toString(16))), q(t, p);
        case yn:
          return k(t, O), k(t, r.segmentPrefix), k(t, X(f.toString(16))), q(t, Q);
        case wn:
          return k(t, $), k(t, r.segmentPrefix), k(t, X(f.toString(16))), q(t, Se);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function et(t, r) {
      switch (r.insertionMode) {
        case Ye:
        case Fe:
          return q(t, Go);
        case bt:
          return q(t, Ur);
        case rn:
          return q(t, Vo);
        case St:
          return q(t, a);
        case rr:
          return q(t, w);
        case yn:
          return q(t, W);
        case wn:
          return q(t, Re);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Vt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", An = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', sn = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Wr = N(Vt + ';$RS("'), $o = N('$RS("'), io = N('","'), Bi = N('")<\/script>');
    function ki(t, r, i) {
      k(t, r.startInlineScript), r.sentCompleteSegmentFunction ? k(t, $o) : (r.sentCompleteSegmentFunction = !0, k(t, Wr)), k(t, r.segmentPrefix);
      var f = X(i.toString(16));
      return k(t, f), k(t, io), k(t, r.placeholderPrefix), k(t, f), q(t, Bi);
    }
    var Ri = N(An + ';$RC("'), Qi = N('$RC("'), Li = N('","'), Oi = N('")<\/script>');
    function Ya(t, r, i, f) {
      if (k(t, r.startInlineScript), r.sentCompleteBoundaryFunction ? k(t, Qi) : (r.sentCompleteBoundaryFunction = !0, k(t, Ri)), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var v = X(f.toString(16));
      return k(t, i), k(t, Li), k(t, r.segmentPrefix), k(t, v), q(t, Oi);
    }
    var Ni = N(sn + ';$RX("'), ji = N('$RX("'), Ga = N('"'), Fi = N(")<\/script>"), _a = N(",");
    function NA(t, r, i, f, v, E) {
      if (k(t, r.startInlineScript), r.sentClientRenderFunction ? k(t, ji) : (r.sentClientRenderFunction = !0, k(t, Ni)), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(t, i), k(t, Ga), (f || v || E) && (k(t, _a), k(t, X(Xa(f || "")))), (v || E) && (k(t, _a), k(t, X(Xa(v || "")))), E && (k(t, _a), k(t, X(Xa(E)))), q(t, Fi);
    }
    var jA = /[<\u2028\u2029]/g;
    function Xa(t) {
      var r = JSON.stringify(t);
      return r.replace(jA, function(i) {
        switch (i) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var bn = Object.assign, zi = Symbol.for("react.element"), FA = Symbol.for("react.portal"), ln = Symbol.for("react.fragment"), zA = Symbol.for("react.strict_mode"), Ja = Symbol.for("react.profiler"), qo = Symbol.for("react.provider"), ea = Symbol.for("react.context"), ta = Symbol.for("react.forward_ref"), so = Symbol.for("react.suspense"), lo = Symbol.for("react.suspense_list"), co = Symbol.for("react.memo"), Zr = Symbol.for("react.lazy"), Va = Symbol.for("react.scope"), Ka = Symbol.for("react.debug_trace_mode"), na = Symbol.for("react.legacy_hidden"), Hi = Symbol.for("react.default_value"), HA = Symbol.iterator, Ui = "@@iterator";
    function Wi(t) {
      if (t === null || typeof t != "object")
        return null;
      var r = HA && t[HA] || t[Ui];
      return typeof r == "function" ? r : null;
    }
    function UA(t, r, i) {
      var f = t.displayName;
      if (f)
        return f;
      var v = r.displayName || r.name || "";
      return v !== "" ? i + "(" + v + ")" : i;
    }
    function WA(t) {
      return t.displayName || "Context";
    }
    function ut(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case ln:
          return "Fragment";
        case FA:
          return "Portal";
        case Ja:
          return "Profiler";
        case zA:
          return "StrictMode";
        case so:
          return "Suspense";
        case lo:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case ea:
            var r = t;
            return WA(r) + ".Consumer";
          case qo:
            var i = t;
            return WA(i._context) + ".Provider";
          case ta:
            return UA(t, t.render, "ForwardRef");
          case co:
            var f = t.displayName || null;
            return f !== null ? f : ut(t.type) || "Memo";
          case Zr: {
            var v = t, E = v._payload, P = v._init;
            try {
              return ut(P(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var uo = 0, $a, ct, Yr, qa, eA, tA, nA;
    function rA() {
    }
    rA.__reactDisabledLog = !0;
    function ZA() {
      {
        if (uo === 0) {
          $a = console.log, ct = console.info, Yr = console.warn, qa = console.error, eA = console.group, tA = console.groupCollapsed, nA = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: rA,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        uo++;
      }
    }
    function YA() {
      {
        if (uo--, uo === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: bn({}, t, {
              value: $a
            }),
            info: bn({}, t, {
              value: ct
            }),
            warn: bn({}, t, {
              value: Yr
            }),
            error: bn({}, t, {
              value: qa
            }),
            group: bn({}, t, {
              value: eA
            }),
            groupCollapsed: bn({}, t, {
              value: tA
            }),
            groupEnd: bn({}, t, {
              value: nA
            })
          });
        }
        uo < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ra = D.ReactCurrentDispatcher, oA;
    function fo(t, r, i) {
      {
        if (oA === void 0)
          try {
            throw Error();
          } catch (v) {
            var f = v.stack.trim().match(/\n( *(at )?)/);
            oA = f && f[1] || "";
          }
        return `
` + oA + t;
      }
    }
    var ho = !1, Gr;
    {
      var po = typeof WeakMap == "function" ? WeakMap : Map;
      Gr = new po();
    }
    function go(t, r) {
      if (!t || ho)
        return "";
      {
        var i = Gr.get(t);
        if (i !== void 0)
          return i;
      }
      var f;
      ho = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = ra.current, ra.current = null, ZA();
      try {
        if (r) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (T) {
              f = T;
            }
            Reflect.construct(t, [], P);
          } else {
            try {
              P.call();
            } catch (T) {
              f = T;
            }
            t.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            f = T;
          }
          t();
        }
      } catch (T) {
        if (T && f && typeof T.stack == "string") {
          for (var z = T.stack.split(`
`), e = f.stack.split(`
`), n = z.length - 1, A = e.length - 1; n >= 1 && A >= 0 && z[n] !== e[A]; )
            A--;
          for (; n >= 1 && A >= 0; n--, A--)
            if (z[n] !== e[A]) {
              if (n !== 1 || A !== 1)
                do
                  if (n--, A--, A < 0 || z[n] !== e[A]) {
                    var l = `
` + z[n].replace(" at new ", " at ");
                    return t.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t.displayName)), typeof t == "function" && Gr.set(t, l), l;
                  }
                while (n >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        ho = !1, ra.current = E, YA(), Error.prepareStackTrace = v;
      }
      var h = t ? t.displayName || t.name : "", b = h ? fo(h) : "";
      return typeof t == "function" && Gr.set(t, b), b;
    }
    function oa(t, r, i) {
      return go(t, !0);
    }
    function GA(t, r, i) {
      return go(t, !1);
    }
    function aA(t) {
      var r = t.prototype;
      return !!(r && r.isReactComponent);
    }
    function AA(t, r, i) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return go(t, aA(t));
      if (typeof t == "string")
        return fo(t);
      switch (t) {
        case so:
          return fo("Suspense");
        case lo:
          return fo("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case ta:
            return GA(t.render);
          case co:
            return AA(t.type, r, i);
          case Zr: {
            var f = t, v = f._payload, E = f._init;
            try {
              return AA(E(v), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var iA = {}, _A = D.ReactDebugCurrentFrame;
    function _r(t) {
      if (t) {
        var r = t._owner, i = AA(t.type, t._source, r ? r.type : null);
        _A.setExtraStackFrame(i);
      } else
        _A.setExtraStackFrame(null);
    }
    function sA(t, r, i, f, v) {
      {
        var E = Function.call.bind(De);
        for (var P in t)
          if (E(t, P)) {
            var z = void 0;
            try {
              if (typeof t[P] != "function") {
                var e = Error((f || "React class") + ": " + i + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw e.name = "Invariant Violation", e;
              }
              z = t[P](r, P, f, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (n) {
              z = n;
            }
            z && !(z instanceof Error) && (_r(v), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", i, P, typeof z), _r(null)), z instanceof Error && !(z.message in iA) && (iA[z.message] = !0, _r(v), s("Failed %s type: %s", i, z.message), _r(null));
          }
      }
    }
    var aa;
    aa = {};
    var Sr = {};
    Object.freeze(Sr);
    function lA(t, r) {
      {
        var i = t.contextTypes;
        if (!i)
          return Sr;
        var f = {};
        for (var v in i)
          f[v] = r[v];
        {
          var E = ut(t) || "Unknown";
          sA(i, f, "context", E);
        }
        return f;
      }
    }
    function cA(t, r, i, f) {
      {
        if (typeof t.getChildContext != "function") {
          {
            var v = ut(r) || "Unknown";
            aa[v] || (aa[v] = !0, s("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", v, v));
          }
          return i;
        }
        var E = t.getChildContext();
        for (var P in E)
          if (!(P in f))
            throw new Error((ut(r) || "Unknown") + '.getChildContext(): key "' + P + '" is not defined in childContextTypes.');
        {
          var z = ut(r) || "Unknown";
          sA(f, E, "child context", z);
        }
        return bn({}, i, E);
      }
    }
    var cr;
    cr = {};
    var XA = null, Dr = null;
    function Er(t) {
      t.context._currentValue = t.parentValue;
    }
    function uA(t) {
      t.context._currentValue = t.value;
    }
    function Hn(t, r) {
      if (t !== r) {
        Er(t);
        var i = t.parent, f = r.parent;
        if (i === null) {
          if (f !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (f === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          Hn(i, f);
        }
        uA(r);
      }
    }
    function Aa(t) {
      Er(t);
      var r = t.parent;
      r !== null && Aa(r);
    }
    function ia(t) {
      var r = t.parent;
      r !== null && ia(r), uA(t);
    }
    function vo(t, r) {
      Er(t);
      var i = t.parent;
      if (i === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      i.depth === r.depth ? Hn(i, r) : vo(i, r);
    }
    function fA(t, r) {
      var i = r.parent;
      if (i === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === i.depth ? Hn(t, i) : fA(t, i), uA(r);
    }
    function mo(t) {
      var r = Dr, i = t;
      r !== i && (r === null ? ia(i) : i === null ? Aa(r) : r.depth === i.depth ? Hn(r, i) : r.depth > i.depth ? vo(r, i) : fA(r, i), Dr = i);
    }
    function JA(t, r) {
      var i;
      i = t._currentValue, t._currentValue = r, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cr && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cr;
      var f = Dr, v = {
        parent: f,
        depth: f === null ? 0 : f.depth + 1,
        context: t,
        parentValue: i,
        value: r
      };
      return Dr = v, v;
    }
    function VA(t) {
      var r = Dr;
      if (r === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      r.context !== t && s("The parent context is not the expected context. This is probably a bug in React.");
      {
        var i = r.parentValue;
        i === Hi ? r.context._currentValue = r.context._defaultValue : r.context._currentValue = i, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cr && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cr;
      }
      return Dr = r.parent;
    }
    function sa() {
      return Dr;
    }
    function yo(t) {
      var r = t._currentValue;
      return r;
    }
    function dA(t) {
      return t._reactInternals;
    }
    function Zi(t, r) {
      t._reactInternals = r;
    }
    var Xr = {}, la = {}, hA, ca, ua, wo, fa, Jr, bo, da, Vr;
    {
      hA = /* @__PURE__ */ new Set(), ca = /* @__PURE__ */ new Set(), ua = /* @__PURE__ */ new Set(), bo = /* @__PURE__ */ new Set(), wo = /* @__PURE__ */ new Set(), da = /* @__PURE__ */ new Set(), Vr = /* @__PURE__ */ new Set();
      var ha = /* @__PURE__ */ new Set();
      Jr = function(t, r) {
        if (!(t === null || typeof t == "function")) {
          var i = r + "_" + t;
          ha.has(i) || (ha.add(i), s("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r, t));
        }
      }, fa = function(t, r) {
        if (r === void 0) {
          var i = ut(t) || "Component";
          wo.has(i) || (wo.add(i), s("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      };
    }
    function pa(t, r) {
      {
        var i = t.constructor, f = i && ut(i) || "ReactClass", v = f + "." + r;
        if (Xr[v])
          return;
        s(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, r, r, f), Xr[v] = !0;
      }
    }
    var ga = {
      isMounted: function(t) {
        return !1;
      },
      enqueueSetState: function(t, r, i) {
        var f = dA(t);
        f.queue === null ? pa(t, "setState") : (f.queue.push(r), i != null && Jr(i, "setState"));
      },
      enqueueReplaceState: function(t, r, i) {
        var f = dA(t);
        f.replace = !0, f.queue = [r], i != null && Jr(i, "setState");
      },
      enqueueForceUpdate: function(t, r) {
        var i = dA(t);
        i.queue === null ? pa(t, "forceUpdate") : r != null && Jr(r, "setState");
      }
    };
    function KA(t, r, i, f, v) {
      var E = i(v, f);
      fa(r, E);
      var P = E == null ? f : bn({}, f, E);
      return P;
    }
    function $A(t, r, i) {
      var f = Sr, v = t.contextType;
      if ("contextType" in t) {
        var E = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === ea && v._context === void 0
        );
        if (!E && !Vr.has(t)) {
          Vr.add(t);
          var P = "";
          v === void 0 ? P = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? P = " However, it is set to a " + typeof v + "." : v.$$typeof === qo ? P = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? P = " Did you accidentally pass the Context.Consumer instead?" : P = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", s("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ut(t) || "Component", P);
        }
      }
      typeof v == "object" && v !== null ? f = yo(v) : f = i;
      var z = new t(r, f);
      {
        if (typeof t.getDerivedStateFromProps == "function" && (z.state === null || z.state === void 0)) {
          var e = ut(t) || "Component";
          hA.has(e) || (hA.add(e), s("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", e, z.state === null ? "null" : "undefined", e));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof z.getSnapshotBeforeUpdate == "function") {
          var n = null, A = null, l = null;
          if (typeof z.componentWillMount == "function" && z.componentWillMount.__suppressDeprecationWarning !== !0 ? n = "componentWillMount" : typeof z.UNSAFE_componentWillMount == "function" && (n = "UNSAFE_componentWillMount"), typeof z.componentWillReceiveProps == "function" && z.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof z.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof z.componentWillUpdate == "function" && z.componentWillUpdate.__suppressDeprecationWarning !== !0 ? l = "componentWillUpdate" : typeof z.UNSAFE_componentWillUpdate == "function" && (l = "UNSAFE_componentWillUpdate"), n !== null || A !== null || l !== null) {
            var h = ut(t) || "Component", b = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ua.has(h) || (ua.add(h), s(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, h, b, n !== null ? `
  ` + n : "", A !== null ? `
  ` + A : "", l !== null ? `
  ` + l : ""));
          }
        }
      }
      return z;
    }
    function qA(t, r, i) {
      {
        var f = ut(r) || "Component", v = t.render;
        v || (r.prototype && typeof r.prototype.render == "function" ? s("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", f) : s("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", f)), t.getInitialState && !t.getInitialState.isReactClassApproved && !t.state && s("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", f), t.getDefaultProps && !t.getDefaultProps.isReactClassApproved && s("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", f), t.propTypes && s("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", f), t.contextType && s("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", f), t.contextTypes && s("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", f), r.contextType && r.contextTypes && !da.has(r) && (da.add(r), s("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", f)), typeof t.componentShouldUpdate == "function" && s("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", f), r.prototype && r.prototype.isPureReactComponent && typeof t.shouldComponentUpdate < "u" && s("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ut(r) || "A pure component"), typeof t.componentDidUnmount == "function" && s("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", f), typeof t.componentDidReceiveProps == "function" && s("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", f), typeof t.componentWillRecieveProps == "function" && s("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", f), typeof t.UNSAFE_componentWillRecieveProps == "function" && s("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", f);
        var E = t.props !== i;
        t.props !== void 0 && E && s("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", f, f), t.defaultProps && s("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", f, f), typeof t.getSnapshotBeforeUpdate == "function" && typeof t.componentDidUpdate != "function" && !ca.has(r) && (ca.add(r), s("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ut(r))), typeof t.getDerivedStateFromProps == "function" && s("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof t.getDerivedStateFromError == "function" && s("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof r.getSnapshotBeforeUpdate == "function" && s("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", f);
        var P = t.state;
        P && (typeof P != "object" || Z(P)) && s("%s.state: must be set to an object or null", f), typeof t.getChildContext == "function" && typeof r.childContextTypes != "object" && s("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", f);
      }
    }
    function Yi(t, r) {
      var i = r.state;
      if (typeof r.componentWillMount == "function") {
        if (r.componentWillMount.__suppressDeprecationWarning !== !0) {
          var f = ut(t) || "Unknown";
          la[f] || (C(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            f
          ), la[f] = !0);
        }
        r.componentWillMount();
      }
      typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), i !== r.state && (s("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ut(t) || "Component"), ga.enqueueReplaceState(r, r.state, null));
    }
    function Gi(t, r, i, f) {
      if (t.queue !== null && t.queue.length > 0) {
        var v = t.queue, E = t.replace;
        if (t.queue = null, t.replace = !1, E && v.length === 1)
          r.state = v[0];
        else {
          for (var P = E ? v[0] : r.state, z = !0, e = E ? 1 : 0; e < v.length; e++) {
            var n = v[e], A = typeof n == "function" ? n.call(r, P, i, f) : n;
            A != null && (z ? (z = !1, P = bn({}, P, A)) : bn(P, A));
          }
          r.state = P;
        }
      } else
        t.queue = null;
    }
    function ei(t, r, i, f) {
      qA(t, r, i);
      var v = t.state !== void 0 ? t.state : null;
      t.updater = ga, t.props = i, t.state = v;
      var E = {
        queue: [],
        replace: !1
      };
      Zi(t, E);
      var P = r.contextType;
      if (typeof P == "object" && P !== null ? t.context = yo(P) : t.context = f, t.state === i) {
        var z = ut(r) || "Component";
        bo.has(z) || (bo.add(z), s("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", z));
      }
      var e = r.getDerivedStateFromProps;
      typeof e == "function" && (t.state = KA(t, r, e, v, i)), typeof r.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function") && (Yi(r, t), Gi(E, t, i, f));
    }
    var _i = {
      id: 1,
      overflow: ""
    };
    function Xi(t) {
      var r = t.overflow, i = t.id, f = i & ~Ji(i);
      return f.toString(32) + r;
    }
    function va(t, r, i) {
      var f = t.id, v = t.overflow, E = ma(f) - 1, P = f & ~(1 << E), z = i + 1, e = ma(r) + E;
      if (e > 30) {
        var n = E - E % 5, A = (1 << n) - 1, l = (P & A).toString(32), h = P >> n, b = E - n, T = ma(r) + b, j = z << b, _ = j | h, ie = l + v;
        return {
          id: 1 << T | _,
          overflow: ie
        };
      } else {
        var fe = z << E, Ce = fe | P, it = v;
        return {
          id: 1 << e | Ce,
          overflow: it
        };
      }
    }
    function ma(t) {
      return 32 - pA(t);
    }
    function Ji(t) {
      return 1 << ma(t) - 1;
    }
    var pA = Math.clz32 ? Math.clz32 : Ki, ya = Math.log, Vi = Math.LN2;
    function Ki(t) {
      var r = t >>> 0;
      return r === 0 ? 32 : 31 - (ya(r) / Vi | 0) | 0;
    }
    function $i(t, r) {
      return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
    }
    var qi = typeof Object.is == "function" ? Object.is : $i, Jn = null, gA = null, wa = null, Ue = null, Cr = !1, Ir = !1, Ve = 0, Sn = null, xr = 0, ba = 25, Qt = !1, Vn;
    function Tr() {
      if (Jn === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Qt && s("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Jn;
    }
    function Un(t, r) {
      if (r === null)
        return s("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Vn), !1;
      t.length !== r.length && s(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Vn, "[" + t.join(", ") + "]", "[" + r.join(", ") + "]");
      for (var i = 0; i < r.length && i < t.length; i++)
        if (!qi(t[i], r[i]))
          return !1;
      return !0;
    }
    function Mr() {
      if (xr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Kn() {
      return Ue === null ? wa === null ? (Cr = !1, wa = Ue = Mr()) : (Cr = !0, Ue = wa) : Ue.next === null ? (Cr = !1, Ue = Ue.next = Mr()) : (Cr = !0, Ue = Ue.next), Ue;
    }
    function es(t, r) {
      Jn = r, gA = t, Qt = !1, Ve = 0;
    }
    function ti(t, r, i, f) {
      for (; Ir; )
        Ir = !1, Ve = 0, xr += 1, Ue = null, i = t(r, f);
      return vA(), i;
    }
    function Sa() {
      var t = Ve !== 0;
      return t;
    }
    function vA() {
      Qt = !1, Jn = null, gA = null, Ir = !1, wa = null, xr = 0, Sn = null, Ue = null;
    }
    function ts(t) {
      return Qt && s("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), yo(t);
    }
    function ni(t) {
      return Vn = "useContext", Tr(), yo(t);
    }
    function So(t, r) {
      return typeof r == "function" ? r(t) : r;
    }
    function ns(t) {
      return Vn = "useState", ri(
        So,
        // useReducer has a special case to support lazy useState initializers
        t
      );
    }
    function ri(t, r, i) {
      if (t !== So && (Vn = "useReducer"), Jn = Tr(), Ue = Kn(), Cr) {
        var f = Ue.queue, v = f.dispatch;
        if (Sn !== null) {
          var E = Sn.get(f);
          if (E !== void 0) {
            Sn.delete(f);
            var P = Ue.memoizedState, z = E;
            do {
              var e = z.action;
              Qt = !0, P = t(P, e), Qt = !1, z = z.next;
            } while (z !== null);
            return Ue.memoizedState = P, [P, v];
          }
        }
        return [Ue.memoizedState, v];
      } else {
        Qt = !0;
        var n;
        t === So ? n = typeof r == "function" ? r() : r : n = i !== void 0 ? i(r) : r, Qt = !1, Ue.memoizedState = n;
        var A = Ue.queue = {
          last: null,
          dispatch: null
        }, l = A.dispatch = ai.bind(null, Jn, A);
        return [Ue.memoizedState, l];
      }
    }
    function Da(t, r) {
      Jn = Tr(), Ue = Kn();
      var i = r === void 0 ? null : r;
      if (Ue !== null) {
        var f = Ue.memoizedState;
        if (f !== null && i !== null) {
          var v = f[1];
          if (Un(i, v))
            return f[0];
        }
      }
      Qt = !0;
      var E = t();
      return Qt = !1, Ue.memoizedState = [E, i], E;
    }
    function rs(t) {
      Jn = Tr(), Ue = Kn();
      var r = Ue.memoizedState;
      if (r === null) {
        var i = {
          current: t
        };
        return Object.seal(i), Ue.memoizedState = i, i;
      } else
        return r;
    }
    function oi(t, r) {
      Vn = "useLayoutEffect", s("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function ai(t, r, i) {
      if (xr >= ba)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (t === Jn) {
        Ir = !0;
        var f = {
          action: i,
          next: null
        };
        Sn === null && (Sn = /* @__PURE__ */ new Map());
        var v = Sn.get(r);
        if (v === void 0)
          Sn.set(r, f);
        else {
          for (var E = v; E.next !== null; )
            E = E.next;
          E.next = f;
        }
      }
    }
    function os(t, r) {
      return Da(function() {
        return t;
      }, r);
    }
    function as(t, r, i) {
      return Tr(), r(t._source);
    }
    function As(t, r, i) {
      if (i === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return i();
    }
    function is(t) {
      return Tr(), t;
    }
    function ss() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function ls() {
      return Tr(), [!1, ss];
    }
    function cs() {
      var t = gA, r = Xi(t.treeContext), i = mA;
      if (i === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var f = Ve++;
      return or(i, r, f);
    }
    function Ea() {
    }
    var Ai = {
      readContext: ts,
      useContext: ni,
      useMemo: Da,
      useReducer: ri,
      useRef: rs,
      useState: ns,
      useInsertionEffect: Ea,
      useLayoutEffect: oi,
      useCallback: os,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Ea,
      // Effects are not run in the server environment.
      useEffect: Ea,
      // Debugging effect
      useDebugValue: Ea,
      useDeferredValue: is,
      useTransition: ls,
      useId: cs,
      // Subscriptions are not setup in a server environment.
      useMutableSource: as,
      useSyncExternalStore: As
    }, mA = null;
    function Do(t) {
      mA = t;
    }
    function ii(t) {
      try {
        var r = "", i = t;
        do {
          switch (i.tag) {
            case 0:
              r += fo(i.type, null, null);
              break;
            case 1:
              r += GA(i.type, null, null);
              break;
            case 2:
              r += oa(i.type, null, null);
              break;
          }
          i = i.parent;
        } while (i);
        return r;
      } catch (f) {
        return `
Error generating stack: ` + f.message + `
` + f.stack;
      }
    }
    var Eo = D.ReactCurrentDispatcher, Ca = D.ReactDebugCurrentFrame, yA = 0, ur = 1, Ia = 2, xa = 3, Pr = 4, si = 0, wA = 1, Br = 2, us = 12800;
    function li(t) {
      return console.error(t), null;
    }
    function Wn() {
    }
    function fs(t, r, i, f, v, E, P, z, e) {
      var n = [], A = /* @__PURE__ */ new Set(), l = {
        destination: null,
        responseState: r,
        progressiveChunkSize: f === void 0 ? us : f,
        status: si,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: A,
        pingedTasks: n,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: v === void 0 ? li : v,
        onAllReady: E === void 0 ? Wn : E,
        onShellReady: P === void 0 ? Wn : P,
        onShellError: z === void 0 ? Wn : z,
        onFatalError: e === void 0 ? Wn : e
      }, h = Ta(
        l,
        0,
        null,
        i,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      h.parentFlushed = !0;
      var b = bA(l, t, null, h, A, Sr, XA, _i);
      return n.push(b), l;
    }
    function ds(t, r) {
      var i = t.pingedTasks;
      i.push(r), i.length === 1 && F(function() {
        return Po(t);
      });
    }
    function Co(t, r) {
      return {
        id: pr,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: r,
        errorDigest: null
      };
    }
    function bA(t, r, i, f, v, E, P, z) {
      t.allPendingTasks++, i === null ? t.pendingRootTasks++ : i.pendingTasks++;
      var e = {
        node: r,
        ping: function() {
          return ds(t, e);
        },
        blockedBoundary: i,
        blockedSegment: f,
        abortSet: v,
        legacyContext: E,
        context: P,
        treeContext: z
      };
      return e.componentStack = null, v.add(e), e;
    }
    function Ta(t, r, i, f, v, E) {
      return {
        status: yA,
        id: -1,
        // lazily assigned later
        index: r,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: f,
        boundary: i,
        lastPushedText: v,
        textEmbedded: E
      };
    }
    var $n = null;
    function Io() {
      return $n === null || $n.componentStack === null ? "" : ii($n.componentStack);
    }
    function fr(t, r) {
      t.componentStack = {
        tag: 0,
        parent: t.componentStack,
        type: r
      };
    }
    function Zn(t, r) {
      t.componentStack = {
        tag: 1,
        parent: t.componentStack,
        type: r
      };
    }
    function SA(t, r) {
      t.componentStack = {
        tag: 2,
        parent: t.componentStack,
        type: r
      };
    }
    function Dn(t) {
      t.componentStack === null ? s("Unexpectedly popped too many stack frames. This is a bug in React.") : t.componentStack = t.componentStack.parent;
    }
    var Kr = null;
    function DA(t, r) {
      {
        var i;
        typeof r == "string" ? i = r : r && typeof r.message == "string" ? i = r.message : i = String(r);
        var f = Kr || Io();
        Kr = null, t.errorMessage = i, t.errorComponentStack = f;
      }
    }
    function En(t, r) {
      var i = t.onError(r);
      if (i != null && typeof i != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
      return i;
    }
    function dr(t, r) {
      var i = t.onShellError;
      i(r);
      var f = t.onFatalError;
      f(r), t.destination !== null ? (t.status = Br, J(t.destination, r)) : (t.status = wA, t.fatalError = r);
    }
    function EA(t, r, i) {
      fr(r, "Suspense");
      var f = r.blockedBoundary, v = r.blockedSegment, E = i.fallback, P = i.children, z = /* @__PURE__ */ new Set(), e = Co(t, z), n = v.chunks.length, A = Ta(
        t,
        n,
        e,
        v.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      v.children.push(A), v.lastPushedText = !1;
      var l = Ta(
        t,
        0,
        null,
        v.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      l.parentFlushed = !0, r.blockedBoundary = e, r.blockedSegment = l;
      try {
        if (RA(t, r, P), Ar(l.chunks, t.responseState, l.lastPushedText, l.textEmbedded), l.status = ur, Ba(e, l), e.pendingTasks === 0) {
          Dn(r);
          return;
        }
      } catch (b) {
        l.status = Pr, e.forceClientRender = !0, e.errorDigest = En(t, b), DA(e, b);
      } finally {
        r.blockedBoundary = f, r.blockedSegment = v;
      }
      var h = bA(t, E, f, A, z, r.legacyContext, r.context, r.treeContext);
      h.componentStack = r.componentStack, t.pingedTasks.push(h), Dn(r);
    }
    function xo(t, r, i, f) {
      fr(r, i);
      var v = r.blockedSegment, E = no(v.chunks, i, f, t.responseState, v.formatContext);
      v.lastPushedText = !1;
      var P = v.formatContext;
      v.formatContext = Ln(P, i, f), RA(t, r, E), v.formatContext = P, Ho(v.chunks, i), v.lastPushedText = !1, Dn(r);
    }
    function Ma(t) {
      return t.prototype && t.prototype.isReactComponent;
    }
    function ci(t, r, i, f, v) {
      var E = {};
      es(r, E);
      var P = i(f, v);
      return ti(i, f, P, v);
    }
    function ui(t, r, i, f, v) {
      var E = i.render();
      i.props !== v && (Mo || s("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ut(f) || "a component"), Mo = !0);
      {
        var P = f.childContextTypes;
        if (P != null) {
          var z = r.legacyContext, e = cA(i, f, z, P);
          r.legacyContext = e, cn(t, r, E), r.legacyContext = z;
          return;
        }
      }
      cn(t, r, E);
    }
    function hs(t, r, i, f) {
      SA(r, i);
      var v = lA(i, r.legacyContext), E = $A(i, f, v);
      ei(E, i, f, v), ui(t, r, E, i, f), Dn(r);
    }
    var CA = {}, To = {}, fi = {}, IA = {}, Mo = !1, xA = !1, TA = !1, MA = !1;
    function di(t, r, i, f) {
      var v;
      if (v = lA(i, r.legacyContext), Zn(r, i), i.prototype && typeof i.prototype.render == "function") {
        var E = ut(i) || "Unknown";
        CA[E] || (s("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), CA[E] = !0);
      }
      var P = ci(t, r, i, f, v), z = Sa();
      if (typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0) {
        var e = ut(i) || "Unknown";
        To[e] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", e, e, e), To[e] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0
      ) {
        {
          var n = ut(i) || "Unknown";
          To[n] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", n, n, n), To[n] = !0);
        }
        ei(P, i, f, v), ui(t, r, P, i, f);
      } else if (hi(i), z) {
        var A = r.treeContext, l = 1, h = 0;
        r.treeContext = va(A, l, h);
        try {
          cn(t, r, P);
        } finally {
          r.treeContext = A;
        }
      } else
        cn(t, r, P);
      Dn(r);
    }
    function hi(t) {
      {
        if (t && t.childContextTypes && s("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), typeof t.getDerivedStateFromProps == "function") {
          var r = ut(t) || "Unknown";
          IA[r] || (s("%s: Function components do not support getDerivedStateFromProps.", r), IA[r] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var i = ut(t) || "Unknown";
          fi[i] || (s("%s: Function components do not support contextType.", i), fi[i] = !0);
        }
      }
    }
    function PA(t, r) {
      if (t && t.defaultProps) {
        var i = bn({}, r), f = t.defaultProps;
        for (var v in f)
          i[v] === void 0 && (i[v] = f[v]);
        return i;
      }
      return r;
    }
    function ps(t, r, i, f, v) {
      Zn(r, i.render);
      var E = ci(t, r, i.render, f, v), P = Sa();
      if (P) {
        var z = r.treeContext, e = 1, n = 0;
        r.treeContext = va(z, e, n);
        try {
          cn(t, r, E);
        } finally {
          r.treeContext = z;
        }
      } else
        cn(t, r, E);
      Dn(r);
    }
    function gs(t, r, i, f, v) {
      var E = i.type, P = PA(E, f);
      BA(t, r, E, P, v);
    }
    function pi(t, r, i, f) {
      i._context === void 0 ? i !== i.Consumer && (MA || (MA = !0, s("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var v = f.children;
      typeof v != "function" && s("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var E = yo(i), P = v(E);
      cn(t, r, P);
    }
    function vs(t, r, i, f) {
      var v = i._context, E = f.value, P = f.children, z;
      z = r.context, r.context = JA(v, E), cn(t, r, P), r.context = VA(v), z !== r.context && s("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function ms(t, r, i, f, v) {
      fr(r, "Lazy");
      var E = i._payload, P = i._init, z = P(E), e = PA(z, f);
      BA(t, r, z, e, v), Dn(r);
    }
    function BA(t, r, i, f, v) {
      if (typeof i == "function")
        if (Ma(i)) {
          hs(t, r, i, f);
          return;
        } else {
          di(t, r, i, f);
          return;
        }
      if (typeof i == "string") {
        xo(t, r, i, f);
        return;
      }
      switch (i) {
        case na:
        case Ka:
        case zA:
        case Ja:
        case ln: {
          cn(t, r, f.children);
          return;
        }
        case lo: {
          fr(r, "SuspenseList"), cn(t, r, f.children), Dn(r);
          return;
        }
        case Va:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case so: {
          EA(t, r, f);
          return;
        }
      }
      if (typeof i == "object" && i !== null)
        switch (i.$$typeof) {
          case ta: {
            ps(t, r, i, f, v);
            return;
          }
          case co: {
            gs(t, r, i, f, v);
            return;
          }
          case qo: {
            vs(t, r, i, f);
            return;
          }
          case ea: {
            pi(t, r, i, f);
            return;
          }
          case Zr: {
            ms(t, r, i, f);
            return;
          }
        }
      var E = "";
      throw (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (i == null ? i : typeof i) + "." + E));
    }
    function ys(t, r) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      t[Symbol.toStringTag] === "Generator" && (xA || s("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), xA = !0), t.entries === r && (TA || s("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), TA = !0);
    }
    function cn(t, r, i) {
      try {
        return kA(t, r, i);
      } catch (f) {
        throw typeof f == "object" && f !== null && typeof f.then == "function" || (Kr = Kr !== null ? Kr : Io()), f;
      }
    }
    function kA(t, r, i) {
      if (r.node = i, typeof i == "object" && i !== null) {
        switch (i.$$typeof) {
          case zi: {
            var f = i, v = f.type, E = f.props, P = f.ref;
            BA(t, r, v, E, P);
            return;
          }
          case FA:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Zr: {
            var z = i, e = z._payload, n = z._init, A;
            try {
              A = n(e);
            } catch (fe) {
              throw typeof fe == "object" && fe !== null && typeof fe.then == "function" && fr(r, "Lazy"), fe;
            }
            cn(t, r, A);
            return;
          }
        }
        if (Z(i)) {
          gi(t, r, i);
          return;
        }
        var l = Wi(i);
        if (l) {
          ys(i, l);
          var h = l.call(i);
          if (h) {
            var b = h.next();
            if (!b.done) {
              var T = [];
              do
                T.push(b.value), b = h.next();
              while (!b.done);
              gi(t, r, T);
              return;
            }
            return;
          }
        }
        var j = Object.prototype.toString.call(i);
        throw new Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof i == "string") {
        var _ = r.blockedSegment;
        _.lastPushedText = ar(r.blockedSegment.chunks, i, t.responseState, _.lastPushedText);
        return;
      }
      if (typeof i == "number") {
        var ie = r.blockedSegment;
        ie.lastPushedText = ar(r.blockedSegment.chunks, "" + i, t.responseState, ie.lastPushedText);
        return;
      }
      typeof i == "function" && s("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function gi(t, r, i) {
      for (var f = i.length, v = 0; v < f; v++) {
        var E = r.treeContext;
        r.treeContext = va(E, f, v);
        try {
          RA(t, r, i[v]);
        } finally {
          r.treeContext = E;
        }
      }
    }
    function un(t, r, i) {
      var f = r.blockedSegment, v = f.chunks.length, E = Ta(
        t,
        v,
        null,
        f.formatContext,
        // Adopt the parent segment's leading text embed
        f.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      f.children.push(E), f.lastPushedText = !1;
      var P = bA(t, r.node, r.blockedBoundary, E, r.abortSet, r.legacyContext, r.context, r.treeContext);
      r.componentStack !== null && (P.componentStack = r.componentStack.parent);
      var z = P.ping;
      i.then(z, z);
    }
    function RA(t, r, i) {
      var f = r.blockedSegment.formatContext, v = r.legacyContext, E = r.context, P = null;
      P = r.componentStack;
      try {
        return cn(t, r, i);
      } catch (z) {
        if (vA(), typeof z == "object" && z !== null && typeof z.then == "function") {
          un(t, r, z), r.blockedSegment.formatContext = f, r.legacyContext = v, r.context = E, mo(E), r.componentStack = P;
          return;
        } else
          throw r.blockedSegment.formatContext = f, r.legacyContext = v, r.context = E, mo(E), r.componentStack = P, z;
      }
    }
    function vi(t, r, i, f) {
      var v = En(t, f);
      if (r === null ? dr(t, f) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, r.errorDigest = v, DA(r, f), r.parentFlushed && t.clientRenderedBoundaries.push(r))), t.allPendingTasks--, t.allPendingTasks === 0) {
        var E = t.onAllReady;
        E();
      }
    }
    function ws(t) {
      var r = this, i = t.blockedBoundary, f = t.blockedSegment;
      f.status = xa, mi(r, i, f);
    }
    function Pa(t, r, i) {
      var f = t.blockedBoundary, v = t.blockedSegment;
      if (v.status = xa, f === null)
        r.allPendingTasks--, r.status !== Br && (r.status = Br, r.destination !== null && ae(r.destination));
      else {
        if (f.pendingTasks--, !f.forceClientRender) {
          f.forceClientRender = !0;
          var E = i === void 0 ? new Error("The render was aborted by the server without a reason.") : i;
          f.errorDigest = r.onError(E);
          {
            var P = "The server did not finish this Suspense boundary: ";
            E && typeof E.message == "string" ? E = P + E.message : E = P + String(E);
            var z = $n;
            $n = t;
            try {
              DA(f, E);
            } finally {
              $n = z;
            }
          }
          f.parentFlushed && r.clientRenderedBoundaries.push(f);
        }
        if (f.fallbackAbortableTasks.forEach(function(n) {
          return Pa(n, r, i);
        }), f.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0) {
          var e = r.onAllReady;
          e();
        }
      }
    }
    function Ba(t, r) {
      if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
        var i = r.children[0];
        i.id = r.id, i.parentFlushed = !0, i.status === ur && Ba(t, i);
      } else {
        var f = t.completedSegments;
        f.push(r);
      }
    }
    function mi(t, r, i) {
      if (r === null) {
        if (i.parentFlushed) {
          if (t.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          t.completedRootSegment = i;
        }
        if (t.pendingRootTasks--, t.pendingRootTasks === 0) {
          t.onShellError = Wn;
          var f = t.onShellReady;
          f();
        }
      } else if (r.pendingTasks--, !r.forceClientRender) {
        if (r.pendingTasks === 0)
          i.parentFlushed && i.status === ur && Ba(r, i), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(ws, t), r.fallbackAbortableTasks.clear();
        else if (i.parentFlushed && i.status === ur) {
          Ba(r, i);
          var v = r.completedSegments;
          v.length === 1 && r.parentFlushed && t.partialBoundaries.push(r);
        }
      }
      if (t.allPendingTasks--, t.allPendingTasks === 0) {
        var E = t.onAllReady;
        E();
      }
    }
    function yi(t, r) {
      var i = r.blockedSegment;
      if (i.status === yA) {
        mo(r.context);
        var f = null;
        f = $n, $n = r;
        try {
          cn(t, r, r.node), Ar(i.chunks, t.responseState, i.lastPushedText, i.textEmbedded), r.abortSet.delete(r), i.status = ur, mi(t, r.blockedBoundary, i);
        } catch (E) {
          if (vA(), typeof E == "object" && E !== null && typeof E.then == "function") {
            var v = r.ping;
            E.then(v, v);
          } else
            r.abortSet.delete(r), i.status = Pr, vi(t, r.blockedBoundary, i, E);
        } finally {
          $n = f;
        }
      }
    }
    function Po(t) {
      if (t.status !== Br) {
        var r = sa(), i = Eo.current;
        Eo.current = Ai;
        var f;
        f = Ca.getCurrentStack, Ca.getCurrentStack = Io;
        var v = mA;
        Do(t.responseState);
        try {
          var E = t.pingedTasks, P;
          for (P = 0; P < E.length; P++) {
            var z = E[P];
            yi(t, z);
          }
          E.splice(0, P), t.destination !== null && Ra(t, t.destination);
        } catch (e) {
          En(t, e), dr(t, e);
        } finally {
          Do(v), Eo.current = i, Ca.getCurrentStack = f, i === Ai && mo(r);
        }
      }
    }
    function Bo(t, r, i) {
      switch (i.parentFlushed = !0, i.status) {
        case yA: {
          var f = i.id = t.nextSegmentId++;
          return i.lastPushedText = !1, i.textEmbedded = !1, Lr(r, t.responseState, f);
        }
        case ur: {
          i.status = Ia;
          for (var v = !0, E = i.chunks, P = 0, z = i.children, e = 0; e < z.length; e++) {
            for (var n = z[e]; P < n.index; P++)
              k(r, E[P]);
            v = ka(t, r, n);
          }
          for (; P < E.length - 1; P++)
            k(r, E[P]);
          return P < E.length && (v = q(r, E[P])), v;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function ka(t, r, i) {
      var f = i.boundary;
      if (f === null)
        return Bo(t, r, i);
      if (f.parentFlushed = !0, f.forceClientRender)
        return Jt(r, t.responseState, f.errorDigest, f.errorMessage, f.errorComponentStack), Bo(t, r, i), Za(r, t.responseState);
      if (f.pendingTasks > 0) {
        f.rootSegmentID = t.nextSegmentId++, f.completedSegments.length > 0 && t.partialBoundaries.push(f);
        var v = f.id = gr(t.responseState);
        return jr(r, t.responseState, v), Bo(t, r, i), Fr(r, t.responseState);
      } else {
        if (f.byteSize > t.progressiveChunkSize)
          return f.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(f), jr(r, t.responseState, f.id), Bo(t, r, i), Fr(r, t.responseState);
        Wo(r, t.responseState);
        var E = f.completedSegments;
        if (E.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var P = E[0];
        return ka(t, r, P), Zo(r, t.responseState);
      }
    }
    function wi(t, r, i) {
      return NA(r, t.responseState, i.id, i.errorDigest, i.errorMessage, i.errorComponentStack);
    }
    function ko(t, r, i) {
      return Me(r, t.responseState, i.formatContext, i.id), ka(t, r, i), et(r, i.formatContext);
    }
    function Ro(t, r, i) {
      for (var f = i.completedSegments, v = 0; v < f.length; v++) {
        var E = f[v];
        QA(t, r, i, E);
      }
      return f.length = 0, Ya(r, t.responseState, i.id, i.rootSegmentID);
    }
    function bs(t, r, i) {
      for (var f = i.completedSegments, v = 0; v < f.length; v++) {
        var E = f[v];
        if (!QA(t, r, i, E))
          return v++, f.splice(0, v), !1;
      }
      return f.splice(0, v), !0;
    }
    function QA(t, r, i, f) {
      if (f.status === Ia)
        return !0;
      var v = f.id;
      if (v === -1) {
        var E = f.id = i.rootSegmentID;
        if (E === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return ko(t, r, f);
      } else
        return ko(t, r, f), ki(r, t.responseState, v);
    }
    function Ra(t, r) {
      Y();
      try {
        var i = t.completedRootSegment;
        i !== null && t.pendingRootTasks === 0 && (ka(t, r, i), t.completedRootSegment = null, Ha(r, t.responseState));
        var f = t.clientRenderedBoundaries, v;
        for (v = 0; v < f.length; v++) {
          var E = f[v];
          wi(t, r, E);
        }
        f.splice(0, v);
        var P = t.completedBoundaries;
        for (v = 0; v < P.length; v++) {
          var z = P[v];
          Ro(t, r, z);
        }
        P.splice(0, v), me(r), Y(r);
        var e = t.partialBoundaries;
        for (v = 0; v < e.length; v++) {
          var n = e[v];
          if (!bs(t, r, n)) {
            t.destination = null, v++, e.splice(0, v);
            return;
          }
        }
        e.splice(0, v);
        var A = t.completedBoundaries;
        for (v = 0; v < A.length; v++) {
          var l = A[v];
          Ro(t, r, l);
        }
        A.splice(0, v);
      } finally {
        me(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && (t.abortableTasks.size !== 0 && s("There was still abortable task at the root when we closed. This is a bug in React."), ae(r));
      }
    }
    function Ss(t) {
      F(function() {
        return Po(t);
      });
    }
    function bi(t, r) {
      if (t.status === wA) {
        t.status = Br, J(r, t.fatalError);
        return;
      }
      if (t.status !== Br && t.destination === null) {
        t.destination = r;
        try {
          Ra(t, r);
        } catch (i) {
          En(t, i), dr(t, i);
        }
      }
    }
    function Qa(t, r) {
      try {
        var i = t.abortableTasks;
        i.forEach(function(f) {
          return Pa(f, t, r);
        }), i.clear(), t.destination !== null && Ra(t, t.destination);
      } catch (f) {
        En(t, f), dr(t, f);
      }
    }
    function Ds(t, r) {
      return new Promise(function(i, f) {
        var v, E, P = new Promise(function(h, b) {
          E = h, v = b;
        });
        function z() {
          var h = new ReadableStream(
            {
              type: "bytes",
              pull: function(b) {
                bi(n, b);
              },
              cancel: function(b) {
                Qa(n);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          h.allReady = P, i(h);
        }
        function e(h) {
          P.catch(function() {
          }), f(h);
        }
        var n = fs(t, Xe(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Tn(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, E, z, e, v);
        if (r && r.signal) {
          var A = r.signal, l = function() {
            Qa(n, A.reason), A.removeEventListener("abort", l);
          };
          A.addEventListener("abort", l);
        }
        Ss(n);
      });
    }
    Ii.renderToReadableStream = Ds, Ii.version = d;
  }()), Ii;
}
var No, Ms;
process.env.NODE_ENV === "production" ? (No = Rl(), Ms = Ql()) : (No = Ll(), Ms = Ol());
jo.version = No.version;
jo.renderToString = No.renderToString;
jo.renderToStaticMarkup = No.renderToStaticMarkup;
jo.renderToNodeStream = No.renderToNodeStream;
jo.renderToStaticNodeStream = No.renderToStaticNodeStream;
jo.renderToReadableStream = Ms.renderToReadableStream;
const Nl = () => {
  var D;
  const { settings: m } = Dt(), { styles: d } = Et();
  return /* @__PURE__ */ U.jsx("div", { className: "rcb-line-break-container", children: /* @__PURE__ */ U.jsx("div", { style: d.chatHistoryLineBreakStyle, className: "rcb-line-break-text", children: (D = m.chatHistory) == null ? void 0 : D.chatHistoryLineBreakText }) });
};
const jl = () => {
  var C;
  const { settings: m } = Dt(), { styles: d } = Et(), D = {
    borderTop: `4px solid ${(C = m.general) == null ? void 0 : C.primaryColor}`,
    ...d.loadingSpinnerStyle
  };
  return /* @__PURE__ */ U.jsx("div", { className: "rcb-spinner-container", children: /* @__PURE__ */ U.jsx("div", { style: D, className: "rcb-spinner" }) });
};
let rl = !1, Ps = "rcb-history", xi = 30, ol = !1, Bs = [];
const Ws = async (m) => {
  if (ol)
    return;
  const d = [], D = rl ? Bs.length : 0;
  for (let s = m.length - 1; s >= D; s--) {
    const M = m[s];
    if (M.sender === "system" || (M.content !== "" && d.unshift(M), d.length === xi))
      break;
  }
  let C = d.map(Hl);
  if (C.length < xi) {
    const s = xi - C.length;
    C = [...Bs.slice(-s), ...C];
  }
  localStorage.setItem(Ps, JSON.stringify(C));
}, Fl = (m) => {
  if (m != null)
    try {
      return JSON.parse(m);
    } catch {
      return [];
    }
  return [];
}, zl = (m) => {
  var d, D, C;
  Ps = (d = m.chatHistory) == null ? void 0 : d.storageKey, xi = (D = m.chatHistory) == null ? void 0 : D.maxEntries, ol = (C = m.chatHistory) == null ? void 0 : C.disabled, Bs = Fl(localStorage.getItem(Ps));
}, Hl = (m) => Vs(m.content) ? structuredClone({
  content: jo.renderToString(m.content),
  type: "object",
  sender: m.sender
}) : { ...m, type: "string" }, Zs = (m, d, D, C, s) => {
  var M;
  if (rl = !0, D != null)
    try {
      C((R) => {
        const S = {
          content: /* @__PURE__ */ U.jsx(jl, {}),
          sender: "system"
        };
        return R.shift(), [S, ...R];
      });
      const F = JSON.parse(D).map((R) => {
        if (R.type === "object") {
          const S = al(R.content, m, d);
          return { ...R, content: S };
        }
        return R;
      });
      setTimeout(() => {
        var R;
        C((S) => {
          var Y;
          S.shift();
          let x;
          return (Y = m.chatHistory) != null && Y.autoLoad ? x = {
            content: /* @__PURE__ */ U.jsx(U.Fragment, {}),
            sender: "system"
          } : x = {
            content: /* @__PURE__ */ U.jsx(Nl, {}),
            sender: "system"
          }, [...F, x, ...S];
        }), s(((R = m.chatInput) == null ? void 0 : R.disabled) || !1);
      }, 500);
    } catch {
      localStorage.removeItem((M = m.chatHistory) == null ? void 0 : M.storageKey);
    }
}, al = (m, d, D) => {
  const s = new DOMParser().parseFromString(m, "text/html");
  return Array.from(s.body.childNodes).map((R, S) => {
    var x;
    if (R.nodeType === Node.TEXT_NODE)
      return R.textContent;
    {
      const Y = R.tagName.toLowerCase();
      let k = Array.from(R.attributes).reduce((ae, ye) => {
        const X = ye.name.toLowerCase();
        if (X === "style") {
          const N = ye.value.split(";").filter((de) => de.trim() !== ""), J = {};
          N.forEach((de) => {
            const [oe, Ae] = de.split(":").map((te) => te.trim()), le = oe.replace(/-([a-z])/g, (te, Ie) => Ie.toUpperCase());
            J[le] = Ae;
          }), ae[X] = J;
        } else
          (Y === "audio" || Y === "video") && X === "controls" && ye.value === "" ? ae[X] = "true" : ae[X] = ye.value;
        return ae;
      }, {});
      const q = R.classList;
      if ((x = d.botBubble) != null && x.showAvatar && (k = Ul(q, k)), k = Wl(q, k, d, D), k = Zl(q, k, d, D), k = Yl(q, k, d, D), k = Gl(q, k, d, D), [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "source",
        "track",
        "wbr"
      ].includes(Y))
        return Ls(Y, { key: S, ...k });
      {
        const ae = al(R.innerHTML, d, D);
        return Ls(Y, { key: S, ...k }, ...ae);
      }
    }
  });
}, Ul = (m, d) => ((m.contains("rcb-options-container") || m.contains("rcb-checkbox-container")) && (Object.prototype.hasOwnProperty.call(d, "class") ? d.class = `${m.toString()} rcb-options-offset` : d.class = "rcb-options-offset"), d), Wl = (m, d, D, C) => {
  var s, M, F, R, S;
  return m.contains("rcb-options") && (d.style = {
    ...d.style,
    color: ((s = C.botOptionStyle) == null ? void 0 : s.color) || ((M = D.general) == null ? void 0 : M.primaryColor),
    borderColor: ((F = C.botOptionStyle) == null ? void 0 : F.color) || ((R = D.general) == null ? void 0 : R.primaryColor),
    cursor: `url(${(S = D.general) == null ? void 0 : S.actionDisabledIcon}), auto`,
    ...C.botOptionStyle
  }), d;
}, Zl = (m, d, D, C) => {
  var s, M, F, R, S;
  return m.contains("rcb-checkbox-row-container") && (d.style = {
    ...d.style,
    color: ((s = C.botCheckboxRowStyle) == null ? void 0 : s.color) || ((M = D.general) == null ? void 0 : M.primaryColor),
    borderColor: ((F = C.botCheckboxRowStyle) == null ? void 0 : F.color) || ((R = D.general) == null ? void 0 : R.primaryColor),
    cursor: `url(${(S = D.general) == null ? void 0 : S.actionDisabledIcon}), auto`,
    ...C.botCheckboxRowStyle
  }), d;
}, Yl = (m, d, D, C) => {
  var s, M, F, R, S;
  return m.contains("rcb-checkbox-next-button") && (d.style = {
    ...d.style,
    color: ((s = C.botCheckboxNextStyle) == null ? void 0 : s.color) || ((M = D.general) == null ? void 0 : M.primaryColor),
    borderColor: ((F = C.botCheckboxNextStyle) == null ? void 0 : F.color) || ((R = D.general) == null ? void 0 : R.primaryColor),
    cursor: `url(${(S = D.general) == null ? void 0 : S.actionDisabledIcon}), auto`,
    ...C.botCheckboxNextStyle
  }), d;
}, Gl = (m, d, D, C) => {
  var s, M;
  return (m.contains("rcb-media-display-image-container") || m.contains("rcb-media-display-video-container")) && (d.style = {
    ...d.style,
    backgroundColor: (s = D.general) == null ? void 0 : s.primaryColor,
    maxWidth: (M = D.userBubble) != null && M.showAvatar ? "65%" : "70%",
    ...C.mediaDisplayContainerStyle
  }), d;
}, _l = (m, d, D, C, s) => {
  const M = new SpeechSynthesisUtterance();
  M.text = m, M.lang = d, M.rate = C, M.volume = s;
  let F = !1;
  for (const R of D)
    if (window.speechSynthesis.getVoices().find((S) => {
      if (S.name === R) {
        M.voice = S, window.speechSynthesis.speak(M), F = !0;
        return;
      }
    }), F)
      break;
  F || window.speechSynthesis.speak(M);
}, Xl = (m, d, D) => {
  var C, s, M, F, R, S;
  (C = m.audio) != null && C.disabled || D.sender === "user" || typeof D.content != "string" || !(m != null && m.isOpen) && !((s = m.general) != null && s.embedded) || !d || _l(
    D.content,
    (M = m.audio) == null ? void 0 : M.language,
    (F = m.audio) == null ? void 0 : F.voiceNames,
    (R = m.audio) == null ? void 0 : R.rate,
    (S = m.audio) == null ? void 0 : S.volume
  );
}, Ys = window.SpeechRecognition || window.webkitSpeechRecognition, qn = Ys != null ? new Ys() : null;
let hr, Ti, $r = !1, tr = null;
const Jl = (m, d, D, C, s, M) => {
  var F;
  (F = m.voice) != null && F.sendAsAudio ? Kl(D, s) : Vl(m, d, D, C, M);
}, Vl = (m, d, D, C, s) => {
  var R, S, x;
  if (!qn)
    return;
  if (!$r)
    try {
      $r = !0, qn.lang = (R = m.voice) == null ? void 0 : R.language, qn.start();
    } catch {
    }
  const M = (S = m.voice) == null ? void 0 : S.timeoutPeriod, F = (x = m.voice) == null ? void 0 : x.autoSendPeriod;
  qn.onresult = (Y) => {
    var q, me;
    clearTimeout(hr), hr = null, clearTimeout(Ti);
    const k = Y.results[Y.results.length - 1][0].transcript;
    if (s.current) {
      const ae = (q = m.chatInput) == null ? void 0 : q.characterLimit, ye = s.current.value + k;
      ae != null && ae >= 0 && ye.length > ae ? s.current.value = ye.slice(0, ae) : s.current.value = ye, C(s.current.value.length);
    }
    hr = setTimeout(() => Cs(d), M), (me = m.voice) != null && me.autoSendDisabled || (Ti = setTimeout(D, F));
  }, qn.onend = () => {
    $r ? (qn.start(), hr || (hr = setTimeout(() => Cs(d), M))) : (clearTimeout(hr), hr = null, clearTimeout(Ti));
  }, hr = setTimeout(() => Cs(d), M);
}, Kl = (m, d) => {
  navigator.mediaDevices.getUserMedia({ audio: !0 }).then((D) => {
    if (tr = new MediaRecorder(D), !$r)
      try {
        $r = !0, tr.start();
      } catch {
      }
    tr.ondataavailable = (C) => {
      d.current && d.current.push(C.data);
    }, tr.onstop = () => {
      m(), D.getTracks().forEach((C) => C.stop());
    };
  }).catch((D) => {
    console.error("Unable to use microphone:", D);
  });
}, Qs = () => {
  qn && ($r = !1, qn && qn.stop(), tr && tr.state !== "inactive" && (tr.stop(), tr = null), clearTimeout(hr), hr = null, clearTimeout(Ti));
}, Es = (m, d) => {
  var D, C, s;
  (D = d.voice) != null && D.disabled || !((C = d.chatInput) != null && C.blockSpam) || !qn || (m && !$r ? ($r = !0, (s = d.voice) != null && s.sendAsAudio ? tr == null || tr.start() : qn.start()) : m || Qs());
}, Cs = (m) => {
  m(), Qs();
}, $l = (m) => {
  const d = [];
  let D = "", C = !1;
  for (let s = 0; s < m.length; s++) {
    const M = m[s];
    M === "<" ? C ? (d.push(D), D = M) : (C = !0, D = M) : M === ">" ? (D += M, d.push(D), D = "", C = !1) : C ? D += M : d.push(M);
  }
  return D !== "" && d.push(D), d;
};
const Al = ({
  file: m,
  fileType: d,
  fileUrl: D
}) => {
  var F, R, S;
  const { settings: C } = Dt(), { styles: s } = Et(), M = {
    backgroundColor: (F = C.general) == null ? void 0 : F.primaryColor,
    maxWidth: (R = C.userBubble) != null && R.showAvatar ? "65%" : "70%",
    ...s.mediaDisplayContainerStyle
  };
  return /* @__PURE__ */ U.jsx(U.Fragment, { children: D ? /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    d === "image" && D && /* @__PURE__ */ U.jsx(
      "div",
      {
        style: M,
        className: "rcb-media-display-image-container rcb-media-entry",
        children: /* @__PURE__ */ U.jsx("img", { src: D, alt: "Image Display", className: "rcb-media-display-image" })
      }
    ),
    d === "video" && D && /* @__PURE__ */ U.jsx(
      "div",
      {
        style: M,
        className: "rcb-media-display-video-container rcb-media-entry",
        children: /* @__PURE__ */ U.jsxs("video", { controls: !0, className: "rcb-media-display-video", children: [
          /* @__PURE__ */ U.jsx("source", { src: D, type: m.type }),
          "Your browser does not support the video tag."
        ] })
      }
    ),
    d === "audio" && D && /* @__PURE__ */ U.jsxs(
      "audio",
      {
        style: {
          maxWidth: (S = C.userBubble) != null && S.showAvatar ? "65%" : "70%"
        },
        controls: !0,
        className: "rcb-media-display-audio rcb-media-entry",
        children: [
          /* @__PURE__ */ U.jsx("source", { src: D, type: m.type }),
          "Your browser does not support the audio tag."
        ]
      }
    )
  ] }) : /* @__PURE__ */ U.jsx(U.Fragment, {}) });
}, il = async (m) => {
  if (!m)
    return { fileType: null, fileUrl: null };
  const d = m.type.split("/")[0];
  if (!["image", "video", "audio"].includes(d))
    return { fileType: null, fileUrl: null };
  try {
    const D = await new Promise((C, s) => {
      const M = new FileReader();
      M.onload = () => C(M.result), M.onerror = () => s(new Error("File reading failed")), M.readAsDataURL(m);
    });
    return { fileType: d, fileUrl: D };
  } catch {
    return { fileType: null, fileUrl: null };
  }
};
const ql = ({
  inputRef: m,
  flow: d,
  blockAllowsAttachment: D,
  injectMessage: C,
  streamMessage: s,
  openChat: M,
  getCurrPath: F,
  getPrevPath: R,
  goToPath: S,
  handleActionInput: x
}) => {
  var X, N, J, de, oe;
  const { settings: Y } = Dt(), { styles: k } = Et(), q = {
    cursor: `url(${(X = Y.general) == null ? void 0 : X.actionDisabledIcon}), auto`,
    ...k.fileAttachmentButtonDisabledStyle
  }, me = {
    backgroundImage: `url(${(N = Y.fileAttachment) == null ? void 0 : N.icon})`,
    ...k.fileAttachmentIconStyle
  }, ae = {
    backgroundImage: `url(${(J = Y.fileAttachment) == null ? void 0 : J.icon})`,
    ...k.fileAttachmentIconDisabledStyle
  }, ye = async (Ae) => {
    var We, xe, Be;
    const le = Ae.target.files;
    if (!le)
      return;
    const te = F();
    if (!te)
      return;
    const Ie = d[te];
    if (!Ie)
      return;
    const De = Ie.file;
    if (De != null) {
      const Ee = [];
      for (let Ne = 0; Ne < le.length; Ne++) {
        if (Ee.push(le[Ne].name), !((We = Y.fileAttachment) != null && We.showMediaDisplay))
          continue;
        const Ke = await il(le[Ne]);
        !Ke.fileType || !Ke.fileUrl || await C(/* @__PURE__ */ U.jsx(
          Al,
          {
            file: le[Ne],
            fileType: Ke.fileType,
            fileUrl: Ke.fileUrl
          }
        ), "user");
      }
      await x(te, "📄 " + Ee.join(", "), (xe = Y.fileAttachment) == null ? void 0 : xe.sendFileName), await De({
        userInput: (Be = m.current) == null ? void 0 : Be.value,
        prevPath: R(),
        goToPath: S,
        injectMessage: C,
        streamMessage: s,
        openChat: M,
        files: le
      });
    }
  };
  return /* @__PURE__ */ U.jsx(U.Fragment, { children: D ? /* @__PURE__ */ U.jsxs(
    "label",
    {
      className: "rcb-attach-button-enabled",
      style: k.fileAttachmentButtonStyle,
      children: [
        /* @__PURE__ */ U.jsx(
          "input",
          {
            className: "rcb-attach-input",
            type: "file",
            onChange: ye,
            multiple: (de = Y.fileAttachment) == null ? void 0 : de.multiple,
            accept: (oe = Y.fileAttachment) == null ? void 0 : oe.accept
          }
        ),
        /* @__PURE__ */ U.jsx(
          "span",
          {
            className: "rcb-attach-icon-enabled",
            style: me
          }
        )
      ]
    }
  ) : /* @__PURE__ */ U.jsxs(
    "label",
    {
      className: "rcb-attach-button-disabled",
      style: q,
      children: [
        /* @__PURE__ */ U.jsx("input", { disabled: !0, type: "file" }),
        /* @__PURE__ */ U.jsx(
          "span",
          {
            className: "rcb-attach-icon-disabled",
            style: ae
          }
        )
      ]
    }
  ) });
};
const ec = ({
  inputRef: m,
  textAreaDisabled: d
}) => {
  var me, ae, ye, X, N;
  const { settings: D } = Dt(), { styles: C } = Et(), s = Yn(null), M = Yn(null), [F, R] = Oe(!1), S = {
    cursor: `url(${(me = D.general) == null ? void 0 : me.actionDisabledIcon}), auto`,
    ...C.emojiButtonDisabledStyle
  }, x = {
    backgroundImage: `url(${(ae = D.emoji) == null ? void 0 : ae.icon})`,
    ...C.emojiIconStyle
  }, Y = {
    backgroundImage: `url(${(ye = D.emoji) == null ? void 0 : ye.icon})`,
    ...C.emojiIconDisabledStyle
  };
  xt(() => {
    const J = (Ae) => {
      s.current && !s.current.contains(Ae.target) && M.current && !M.current.contains(Ae.target) && R(!1);
    }, de = () => {
      if (s.current && M.current) {
        const Ae = M.current.getBoundingClientRect(), le = s.current.offsetHeight, te = Ae.top - le - 8;
        s.current.style.left = `${Ae.left}px`, s.current.style.top = `${te}px`;
      }
    }, oe = () => {
      de();
    };
    return document.addEventListener("mousedown", J), window.addEventListener("resize", oe), () => {
      document.removeEventListener("mousedown", J), window.removeEventListener("resize", oe);
    };
  }, []);
  const k = (J, de) => {
    J.preventDefault(), m.current && (m.current.value = m.current.value + de, setTimeout(() => {
      const oe = m.current;
      if (oe) {
        oe.focus();
        const Ae = oe.value.length;
        oe.setSelectionRange(Ae, Ae);
      }
    }, 50)), R(!1);
  }, q = (J) => {
    J.preventDefault(), R(d ? !1 : !F);
  };
  return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsx(
      "div",
      {
        ref: M,
        className: `${d ? "rcb-emoji-button-disabled" : "rcb-emoji-button-enabled"}`,
        style: d ? S : C.emojiButtonStyle,
        onMouseDown: q,
        children: /* @__PURE__ */ U.jsx(
          "span",
          {
            className: `${d ? "rcb-emoji-icon-disabled" : "rcb-emoji-icon-enabled"}`,
            style: d ? Y : x
          }
        )
      }
    ),
    F && /* @__PURE__ */ U.jsx("div", { className: "rcb-emoji-button-popup", ref: s, children: (N = (X = D.emoji) == null ? void 0 : X.list) == null ? void 0 : N.map((J, de) => /* @__PURE__ */ U.jsx(
      "span",
      {
        className: "rcb-emoji",
        onMouseDown: (oe) => k(oe, J),
        children: J
      },
      de
    )) })
  ] });
};
const tc = ({
  audioToggledOn: m,
  setAudioToggledOn: d
}) => {
  var F, R;
  const { settings: D } = Dt(), { styles: C } = Et(), s = {
    backgroundImage: `url(${(F = D.audio) == null ? void 0 : F.icon})`,
    ...C.audioIconStyle
  }, M = {
    backgroundImage: `url(${(R = D.audio) == null ? void 0 : R.icon})`,
    ...C.audioIconDisabledStyle
  };
  return /* @__PURE__ */ U.jsx(
    "div",
    {
      onMouseDown: (S) => {
        S.preventDefault(), d((x) => !x);
      },
      style: m ? C.audioButtonStyle : C.audioButtonDisabledStyle,
      children: /* @__PURE__ */ U.jsx(
        "span",
        {
          className: `rcb-audio-icon-${m ? "on" : "off"}`,
          style: m ? s : M
        }
      )
    }
  );
};
const nc = () => {
  var s;
  const { settings: m, setSettings: d } = Dt(), { styles: D } = Et(), C = {
    backgroundImage: `url(${(s = m.header) == null ? void 0 : s.closeChatIcon})`,
    ...D.closeChatIconStyle
  };
  return /* @__PURE__ */ U.jsx(
    "div",
    {
      onMouseDown: (M) => {
        M.stopPropagation(), d({ ...m, isOpen: !1 });
      },
      style: D.closeChatButtonStyle,
      children: /* @__PURE__ */ U.jsx(
        "span",
        {
          className: "rcb-close-chat-icon",
          style: C
        }
      )
    }
  );
};
const rc = ({
  notificationToggledOn: m,
  setNotificationToggledOn: d
}) => {
  var F, R;
  const { settings: D } = Dt(), { styles: C } = Et(), s = {
    backgroundImage: `url(${(F = D.notification) == null ? void 0 : F.icon})`,
    ...C.notificationIconStyle
  }, M = {
    backgroundImage: `url(${(R = D.notification) == null ? void 0 : R.icon})`,
    ...C.notificationIconDisabledStyle
  };
  return /* @__PURE__ */ U.jsx(
    "div",
    {
      onMouseDown: (S) => {
        S.preventDefault(), d((x) => !x);
      },
      style: m ? C.notificationButtonStyle : C.notificationButtonDisabledStyle,
      children: /* @__PURE__ */ U.jsx(
        "span",
        {
          className: `rcb-notification-icon-${m ? "on" : "off"}`,
          style: m ? s : M
        }
      )
    }
  );
};
const oc = ({
  inputRef: m,
  textAreaDisabled: d,
  voiceToggledOn: D,
  handleToggleVoice: C,
  getCurrPath: s,
  handleActionInput: M,
  injectMessage: F,
  setInputLength: R
}) => {
  var N, J;
  const { settings: S } = Dt(), { styles: x } = Et(), Y = Yn([]), [k, q] = Oe(!1);
  xt(() => {
    var oe, Ae;
    const de = s();
    de && ((oe = S.voice) != null && oe.sendAsAudio ? (X(), Y.current = []) : (M(de, (Ae = m.current) == null ? void 0 : Ae.value), R(0)));
  }, [k]), xt(() => {
    D ? Jl(
      S,
      C,
      ye,
      R,
      Y,
      m
    ) : Qs();
  }, [D]);
  const me = {
    backgroundImage: `url(${(N = S.voice) == null ? void 0 : N.icon})`,
    ...x.voiceIconStyle
  }, ae = {
    backgroundImage: `url(${(J = S.voice) == null ? void 0 : J.icon})`,
    ...x.voiceIconDisabledStyle
  }, ye = () => {
    q((de) => !de);
  }, X = async () => {
    const de = new Blob(Y.current, { type: "audio/wav" }), oe = new File([de], "voice-input.wav", { type: "audio/wav" }), Ae = await il(oe);
    !Ae.fileType || !Ae.fileUrl || await F(/* @__PURE__ */ U.jsx(
      Al,
      {
        file: oe,
        fileType: Ae.fileType,
        fileUrl: Ae.fileUrl
      }
    ), "user");
  };
  return /* @__PURE__ */ U.jsx(
    "div",
    {
      onMouseDown: (de) => {
        de.preventDefault(), C();
      },
      style: D && !d ? x.voiceButtonStyle : x.voiceButtonDisabledStyle,
      className: D && !d ? "rcb-voice-button-enabled" : "rcb-voice-button-disabled",
      children: /* @__PURE__ */ U.jsx(
        "span",
        {
          className: D && !d ? "rcb-voice-icon-on" : "rcb-voice-icon-off",
          style: D && !d ? me : ae
        }
      )
    }
  );
};
const ac = ({
  handleSubmit: m
}) => {
  var Y, k, q;
  const { settings: d } = Dt(), { styles: D } = Et(), [C, s] = Oe(!1), M = {
    backgroundColor: (Y = d.general) == null ? void 0 : Y.primaryColor,
    ...D.sendButtonStyle
  }, F = {
    backgroundColor: (k = d.general) == null ? void 0 : k.secondaryColor,
    ...D.sendButtonHoveredStyle
  }, R = {
    backgroundImage: `url(${(q = d.chatInput) == null ? void 0 : q.sendButtonIcon})`,
    ...D.sendIconStyle
  }, S = () => {
    s(!0);
  }, x = () => {
    s(!1);
  };
  return /* @__PURE__ */ U.jsx(
    "div",
    {
      onMouseEnter: S,
      onMouseLeave: x,
      onMouseDown: (me) => {
        me == null || me.preventDefault(), m();
      },
      style: C ? F : M,
      className: "rcb-send-button",
      children: /* @__PURE__ */ U.jsx("span", { className: "rcb-send-icon", style: R })
    }
  );
}, mt = {
  AUDIO_BUTTON: "audio-button",
  NOTIFICATION_BUTTON: "notification-button",
  CLOSE_CHAT_BUTTON: "close-chat-button",
  SEND_MESSAGE_BUTTON: "send-button",
  VOICE_MESSAGE_BUTTON: "voice-button",
  FILE_ATTACHMENT_BUTTON: "file-attachment-button",
  EMOJI_PICKER_BUTTON: "emoji-button"
}, Ac = (m) => Object.values(mt).includes(m), ic = (m, d) => {
  var S, x, Y, k, q, me, ae, ye, X;
  const D = {
    [mt.AUDIO_BUTTON]: (S = m.audio) == null ? void 0 : S.disabled,
    [mt.CLOSE_CHAT_BUTTON]: (x = m.general) == null ? void 0 : x.embedded,
    [mt.EMOJI_PICKER_BUTTON]: (Y = m.emoji) == null ? void 0 : Y.disabled,
    [mt.FILE_ATTACHMENT_BUTTON]: (k = m.fileAttachment) == null ? void 0 : k.disabled,
    [mt.NOTIFICATION_BUTTON]: (q = m.notification) == null ? void 0 : q.disabled,
    [mt.SEND_MESSAGE_BUTTON]: !1,
    [mt.VOICE_MESSAGE_BUTTON]: (me = m.voice) == null ? void 0 : me.disabled
  }, C = {}, s = (N) => N ? N.map((J) => {
    if (typeof J == "string") {
      if (Ac(J) && !D[J]) {
        if (C[J])
          return C[J];
        const de = d[J];
        if (typeof de == "function") {
          const oe = de();
          return C[J] = oe, oe;
        }
        return null;
      }
      return null;
    }
    return J;
  }).filter((J) => J !== null) : [], M = s((ae = m.header) == null ? void 0 : ae.buttons), F = s((ye = m.chatInput) == null ? void 0 : ye.buttons), R = s((X = m.footer) == null ? void 0 : X.buttons);
  return { header: M, chatInput: F, footer: R };
}, sc = (m, d) => /* @__PURE__ */ U.jsx(tc, { audioToggledOn: m, setAudioToggledOn: d }), lc = (m, d) => /* @__PURE__ */ U.jsx(
  rc,
  {
    notificationToggledOn: m,
    setNotificationToggledOn: d
  }
), cc = () => /* @__PURE__ */ U.jsx(nc, {}), uc = (m, d, D, C, s, M, F, R) => /* @__PURE__ */ U.jsx(
  oc,
  {
    inputRef: m,
    textAreaDisabled: d,
    voiceToggledOn: D,
    handleToggleVoice: C,
    getCurrPath: s,
    handleActionInput: M,
    injectMessage: F,
    setInputLength: R
  }
), fc = (m) => /* @__PURE__ */ U.jsx(ac, { handleSubmit: m }), dc = (m, d, D, C, s, M, F, R, S, x) => /* @__PURE__ */ U.jsx(
  ql,
  {
    inputRef: m,
    flow: d,
    blockAllowsAttachment: D,
    getCurrPath: F,
    openChat: M,
    getPrevPath: R,
    goToPath: S,
    handleActionInput: x,
    injectMessage: C,
    streamMessage: s
  }
), hc = (m, d) => /* @__PURE__ */ U.jsx(ec, { inputRef: m, textAreaDisabled: d });
const pc = ({ flow: m }) => {
  var Bt, Je, pn, gn, vn, qe, mn, Rn, Qn, I, G, ee, ge;
  const { settings: d, setSettings: D } = Dt(), { styles: C } = Et(), { messages: s, setMessages: M } = el(), { paths: F, setPaths: R } = Rs(), S = Yn(null), x = Yn(null), Y = Yn(""), k = Yn(!1), q = Yn(!1), me = Yn(null), ae = Yn(), ye = Yn(null), [X, N] = Oe(!1), [J, de] = Oe(!1), [oe, Ae] = Oe(!1), [le, te] = Oe(!0), [Ie, De] = Oe(!1), [We, xe] = Oe(!1), [Be, Ee] = Oe(!0), [Ne, Ke] = Oe(!1), [Te, Qe] = Oe(!1), [Pe, Ge] = Oe(!1), [tt, je] = Oe(0), [ke, st] = Oe(!1), [ht, nt] = Oe(), [_e, Tt] = Oe(0), [Ot, rt] = Oe(0), [yt, ot] = Oe(
    ((Bt = window.visualViewport) == null ? void 0 : Bt.height) || window.innerHeight
  ), [en, at] = Oe(
    ((Je = window.visualViewport) == null ? void 0 : Je.width) || window.innerWidth
  ), ft = Yn(0), Zt = () => {
    var Z;
    return !er && !((Z = d.general) != null && Z.embedded) ? {
      ...C.chatWindowStyle,
      borderRadius: "0px",
      left: "0px",
      right: "auto",
      top: "0px",
      bottom: "auto",
      width: `${en}px`,
      height: `${yt}px`
    } : C.chatWindowStyle;
  }, [Nt, In] = Oe([]), [Ct, jt] = Oe([]), [tn, kn] = Oe([]), [wt, dt] = Oe(Zt());
  xt(() => {
    var Z, K, re, ne, he, ce, pe;
    if (window.addEventListener("click", gt), window.addEventListener("keydown", gt), window.addEventListener("touchstart", gt), At(), Ee((Z = d.chatInput) == null ? void 0 : Z.disabled), De((K = d.audio) == null ? void 0 : K.defaultToggledOn), xe((re = d.voice) == null ? void 0 : re.defaultToggledOn), (ne = d.chatHistory) != null && ne.disabled)
      localStorage.removeItem((he = d.chatHistory) == null ? void 0 : he.storageKey);
    else {
      const we = localStorage.getItem((ce = d.chatHistory) == null ? void 0 : ce.storageKey);
      we != null && (M([{
        content: /* @__PURE__ */ U.jsx(bl, { chatHistory: we, showChatHistory: Gn }),
        sender: "system"
      }]), (pe = d.chatHistory) != null && pe.autoLoad && Zs(d, C, we, M, Ee));
    }
    return () => {
      window.removeEventListener("click", gt), window.removeEventListener("keydown", gt), window.removeEventListener("touchstart", gt);
    };
  }, []), xt(() => {
    C.chatWindowStyle && dt((Z) => ({
      ...Z,
      ...C.chatWindowStyle
    }));
  }, [C.chatWindowStyle]), xt(() => {
    zl(d);
  }, [(pn = d.chatHistory) == null ? void 0 : pn.storageKey, (gn = d.chatHistory) == null ? void 0 : gn.maxEntries, (vn = d.chatHistory) == null ? void 0 : vn.disabled]), xt(() => {
    var Z;
    er || (Z = d.general) != null && Z.embedded || navigator.virtualKeyboard && (navigator.virtualKeyboard.overlaysContent = !0, navigator.virtualKeyboard.addEventListener("geometrychange", (K) => {
      if (!K.target)
        return;
      const { x: re, y: ne, width: he, height: ce } = K.target.boundingRect;
      re == 0 && ne == 0 && he == 0 && ce == 0 ? (setTimeout(() => {
        var pe;
        ot((pe = window.visualViewport) == null ? void 0 : pe.height);
      }, 101), setTimeout(() => {
        var pe, we;
        yt != ((pe = window.visualViewport) == null ? void 0 : pe.height) && ot((we = window.visualViewport) == null ? void 0 : we.height);
      }, 1001)) : setTimeout(() => {
        var pe;
        ot(((pe = window.visualViewport) == null ? void 0 : pe.height) - ce);
      }, 101);
    }));
  }, []), xt(() => {
    Ws(s), Yt();
  }, [s.length]), xt(() => {
    k.current || Ws(s);
  }, [k.current]), xt(() => {
    var he, ce, pe, we;
    if (d.isOpen && (Tt(0), ot((he = window.visualViewport) == null ? void 0 : he.height), at((ce = window.visualViewport) == null ? void 0 : ce.width)), er)
      return;
    const Z = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" }), K = () => ft.current = window.scrollY, re = () => {
      var Ze, Xe;
      ot((Ze = window.visualViewport) == null ? void 0 : Ze.height), at((Xe = window.visualViewport) == null ? void 0 : Xe.width);
    }, ne = () => {
      var Ze;
      window.removeEventListener("scroll", Z), window.removeEventListener("scroll", K), (Ze = window.visualViewport) == null || Ze.removeEventListener("resize", re);
    };
    return d.isOpen ? (ne(), document.body.style.position = "fixed", window.addEventListener("scroll", Z), (pe = window.visualViewport) == null || pe.addEventListener("resize", re)) : (document.body.style.position = "static", ne(), window.scrollTo({ top: ft.current, left: 0, behavior: "auto" }), window.addEventListener("scroll", K), (we = window.visualViewport) == null || we.removeEventListener("resize", re)), ne;
  }, [d.isOpen]), xt(() => {
    const Z = ze();
    if (!Z)
      return;
    const K = m[Z];
    if (!K) {
      st(!1);
      return;
    }
    const re = {
      prevPath: zt(),
      goToPath: Kt,
      userInput: Y.current,
      injectMessage: pt,
      streamMessage: Ht,
      openChat: Ft
    };
    (async (he, ce, pe) => {
      var we;
      await kl(
        m,
        he,
        pe,
        Ee,
        Ke,
        R,
        nt,
        Ut
      ), st(!1), "chatDisabled" in ce || Ee((we = d.chatInput) == null ? void 0 : we.disabled), N(typeof ce.file == "function"), xn(he), Es(q.current && !ce.chatDisabled, d), k.current = !1;
    })(Z, K, re);
  }, [F]), xt(() => {
    var Z;
    (oe || ((Z = d.general) == null ? void 0 : Z.flowStartTrigger) === "ON_LOAD") && R(["start"]);
  }, [oe]);
  const At = fn(async () => {
    var ne, he, ce;
    te((ne = d.notification) == null ? void 0 : ne.defaultToggledOn);
    const Z = (he = d.notification) == null ? void 0 : he.sound;
    me.current = new AudioContext();
    const K = me.current.createGain();
    K.gain.value = ((ce = d.notification) == null ? void 0 : ce.volume) || 0.2, ye.current = K;
    let re;
    if (Z != null && Z.startsWith("data:audio")) {
      const pe = atob(Z.split(",")[1]), we = new ArrayBuffer(pe.length), Ze = new Uint8Array(we);
      for (let Xe = 0; Xe < pe.length; Xe++)
        Ze[Xe] = pe.charCodeAt(Xe);
      re = we;
    } else
      re = await (await fetch(Z)).arrayBuffer();
    ae.current = await me.current.decodeAudioData(re);
  }, [(qe = d.notification) == null ? void 0 : qe.defaultToggledOn, (mn = d.notification) == null ? void 0 : mn.sound, (Rn = d.notification) == null ? void 0 : Rn.volume]), gt = fn(() => {
    var K;
    de(!0), !oe && ((K = d.general) == null ? void 0 : K.flowStartTrigger) === "ON_PAGE_INTERACT" && Ae(!0);
    const Z = new SpeechSynthesisUtterance();
    Z.text = "", Z.onend = () => {
      window.removeEventListener("click", gt), window.removeEventListener("keydown", gt), window.removeEventListener("touchstart", gt);
    }, window.speechSynthesis.speak(Z);
  }, [(Qn = d.general) == null ? void 0 : Qn.flowStartTrigger, oe]), Ft = fn(
    (Z) => {
      D({ ...d, isOpen: Z });
    },
    [d, D]
  ), Yt = fn(() => {
    var K, re;
    if (!me.current || s.length === 0)
      return;
    const Z = s[s.length - 1];
    if (!(!Z || Z.sender === "user" || ke || (K = d.general) != null && K.embedded && js(S.current)) && !(d.isOpen && !Pe) && (Tt((ne) => ne + 1), !((re = d.notification) != null && re.disabled) && le && J && ae.current)) {
      const ne = me.current.createBufferSource();
      ne.buffer = ae.current, ne.connect(ye.current).connect(me.current.destination), ne.start();
    }
  }, [d, s, ke, Pe, le, J]), ze = fn(() => F.length > 0 ? F[F.length - 1] : null, [F]), zt = fn(() => F.length > 1 ? F[F.length - 2] : null, [F]), Kt = fn((Z) => {
    R((K) => [...K, Z]);
  }, []), pt = fn(
    async (Z, K = "bot") => {
      var ce, pe, we, Ze, Xe, Ye;
      const re = { content: Z, sender: K };
      Xl(d, Ie, re);
      const ne = typeof re.content == "string" && re.sender === "bot" && ((ce = d == null ? void 0 : d.botBubble) == null ? void 0 : ce.simStream), he = typeof re.content == "string" && re.sender === "user" && ((pe = d == null ? void 0 : d.userBubble) == null ? void 0 : pe.simStream);
      if (ne) {
        const Fe = (we = d.botBubble) == null ? void 0 : we.streamSpeed, bt = (Ze = d.botBubble) == null ? void 0 : Ze.dangerouslySetInnerHtml;
        await dn(re, Fe, bt);
      } else if (he) {
        const Fe = (Xe = d.userBubble) == null ? void 0 : Xe.streamSpeed, bt = (Ye = d.userBubble) == null ? void 0 : Ye.dangerouslySetInnerHtml;
        await dn(re, Fe, bt);
      } else
        M((Fe) => [...Fe, re]);
    },
    [d, Ie]
  ), dn = async (Z, K, re) => {
    st(!1), M((we) => [...we, Z]), k.current = !0;
    let ne = Z.content;
    re && (ne = $l(ne));
    let he = 0;
    const ce = ne.length;
    Z.content = "", await new Promise((we) => {
      const Ze = setInterval(() => {
        if (he >= ce) {
          clearInterval(Ze), we();
          return;
        }
        M((Xe) => {
          const Ye = [...Xe];
          for (let Fe = Ye.length - 1; Fe >= 0; Fe--)
            if (Ye[Fe].sender === Z.sender && typeof Ye[Fe].content == "string") {
              const bt = ne[he];
              bt && (Z.content += bt, Ye[Fe] = Z), he++;
              break;
            }
          return Ye;
        });
      }, K);
    }), k.current = !1;
  }, Ht = fn(async (Z, K = "bot") => {
    const re = { content: Z, sender: K };
    if (!k.current) {
      st(!1), M((ne) => [...ne, re]), k.current = !0;
      return;
    }
    M((ne) => {
      const he = [...ne];
      for (let ce = he.length - 1; ce >= 0; ce--)
        if (he[ce].sender === K && typeof he[ce].content == typeof Z) {
          he[ce] = re;
          break;
        }
      return he;
    });
  }, []), Gn = fn(
    (Z) => {
      Qe(!0), Ee(!0), Zs(d, C, Z, M, Ee);
    },
    [d]
  ), xn = fn((Z) => {
    var K;
    (K = x.current) != null && K.disabled || setTimeout(() => {
      var re, ne, he;
      (re = d.general) != null && re.embedded ? js(S.current) && ((ne = x.current) == null || ne.focus()) : Z !== "start" && ((he = x.current) == null || he.focus());
    }, 100);
  }, []), Gt = fn(() => {
    var Z;
    (Z = x.current) != null && Z.disabled || xe((K) => !K);
  }, []), hn = fn(
    async (Z) => {
      var ne, he, ce;
      const K = ze();
      if (!(!K || !m[K])) {
        if (Ne) {
          if ((ne = d == null ? void 0 : d.sensitiveInput) != null && ne.hideInUserBubble)
            return;
          if ((he = d == null ? void 0 : d.sensitiveInput) != null && he.maskInUserBubble) {
            await pt("*".repeat(((ce = d.sensitiveInput) == null ? void 0 : ce.asterisksCount) || 10), "user");
            return;
          }
        }
        await pt(Z, "user");
      }
    },
    [m, ze, d, pt, Ne]
  ), Ut = fn(
    async (Z, K, re = !0) => {
      var ne, he;
      clearTimeout(ht), K = K.trim(), Y.current = K, K !== "" && (re && await hn(K), S.current && (S.current.scrollTop = S.current.scrollHeight), x.current && (x.current.value = ""), (ne = d.chatInput) != null && ne.blockSpam && Ee(!0), q.current = We, Es(!1, d), setTimeout(() => {
        st(!0);
      }, 400), Ke(!1), setTimeout(async () => {
        var we;
        const ce = {
          prevPath: zt(),
          goToPath: Kt,
          userInput: K,
          injectMessage: pt,
          streamMessage: Ht,
          openChat: Ft
        };
        if (!await Ts(m, Z, ce, R)) {
          const Ze = ze();
          if (!Ze)
            return;
          const Xe = m[Ze];
          if (!Xe)
            return;
          Xe.chatDisabled || Ee((we = d.chatInput) == null ? void 0 : we.disabled), nl(Xe, Ke, ce), N(typeof Xe.file == "function"), Es(q.current, d), st(!1);
        }
      }, (he = d.chatInput) == null ? void 0 : he.botDelay));
    },
    [
      ht,
      We,
      d,
      m,
      zt,
      pt,
      Ht,
      Ft,
      Ts,
      R,
      hn
    ]
  ), lt = fn(() => {
    var K;
    const Z = ze();
    Z && (Ut(Z, (K = x.current) == null ? void 0 : K.value), rt(0));
  }, [ze, Ut, rt]), Mt = () => {
    var K;
    const Z = "rcb-chat-bot ";
    return (K = d.general) != null && K.embedded ? Z + "rcb-window-embedded" : d.isOpen ? Z + "rcb-window-open" : Z + "rcb-window-close";
  }, vt = Qo(
    () => ({
      [mt.CLOSE_CHAT_BUTTON]: () => cc()
    }),
    []
  ), Le = Qo(
    () => ({
      [mt.SEND_MESSAGE_BUTTON]: () => fc(lt)
    }),
    [lt]
  ), Pt = Qo(
    () => ({
      [mt.AUDIO_BUTTON]: () => sc(Ie, De)
    }),
    [Ie]
  ), $t = Qo(
    () => ({
      [mt.NOTIFICATION_BUTTON]: () => lc(le, te)
    }),
    [le]
  ), qt = Qo(
    () => ({
      [mt.EMOJI_PICKER_BUTTON]: () => hc(x, Be),
      [mt.VOICE_MESSAGE_BUTTON]: () => uc(
        x,
        Be,
        We,
        Gt,
        ze,
        Ut,
        pt,
        rt
      )
    }),
    [
      x,
      Be,
      We,
      Gt,
      ze,
      Ut,
      pt,
      rt
    ]
  ), It = Qo(
    () => ({
      [mt.FILE_ATTACHMENT_BUTTON]: () => dc(
        x,
        m,
        X,
        pt,
        Ht,
        Ft,
        ze,
        zt,
        Kt,
        Ut
      )
    }),
    [
      x,
      m,
      X,
      pt,
      Ht,
      Ft,
      ze,
      zt,
      Kt,
      Ut
    ]
  ), nn = Qo(
    () => ({
      ...vt,
      ...Le,
      ...Pt,
      ...$t,
      ...qt,
      ...It
    }),
    [
      vt,
      Pt,
      $t,
      qt,
      It
    ]
  );
  return xt(() => {
    const Z = ic(d, nn);
    In(Z.header), jt(Z.chatInput), kn(Z.footer);
  }, [d, nn]), /* @__PURE__ */ U.jsxs(
    "div",
    {
      onMouseDown: (Z) => {
        var K, re;
        !oe && ((K = d.general) == null ? void 0 : K.flowStartTrigger) === "ON_CHATBOT_INTERACT" && Ae(!0), er ? (re = x.current) == null || re.blur() : Z == null || Z.preventDefault();
      },
      className: Mt(),
      children: [
        /* @__PURE__ */ U.jsx(wl, {}),
        /* @__PURE__ */ U.jsx(yl, { unreadCount: _e }),
        d.isOpen && !er && !((I = d.general) != null && I.embedded) && /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
          /* @__PURE__ */ U.jsx("style", { children: `
							html {
								overflow: hidden !important;
								touch-action: none !important;
								scroll-behavior: auto !important;
							}
						` }),
          /* @__PURE__ */ U.jsx(
            "div",
            {
              style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                zIndex: 9999
              }
            }
          )
        ] }),
        /* @__PURE__ */ U.jsxs("div", { style: wt, className: "rcb-chat-window", children: [
          ((G = d.general) == null ? void 0 : G.showHeader) && /* @__PURE__ */ U.jsx(hl, { buttons: Nt }),
          /* @__PURE__ */ U.jsx(
            gl,
            {
              chatBodyRef: S,
              isBotTyping: ke,
              isLoadingChatHistory: Te,
              chatScrollHeight: tt,
              setChatScrollHeight: je,
              setIsLoadingChatHistory: Qe,
              isScrolling: Pe,
              setIsScrolling: Ge,
              unreadCount: _e,
              setUnreadCount: Tt
            }
          ),
          ((ee = d.general) == null ? void 0 : ee.showInputRow) && /* @__PURE__ */ U.jsx(
            vl,
            {
              inputRef: x,
              textAreaDisabled: Be,
              textAreaSensitiveMode: Ne,
              inputLength: Ot,
              setInputLength: rt,
              handleSubmit: lt,
              hasFlowStarted: oe,
              setHasFlowStarted: Ae,
              buttons: Ct
            }
          ),
          ((ge = d.general) == null ? void 0 : ge.showFooter) && /* @__PURE__ */ U.jsx(ml, { buttons: tn })
        ] })
      ]
    }
  );
}, gc = "https://cdn.jsdelivr.net/gh/tjtanjin/react-chatbotify-themes/themes", vc = "2592000", sl = "RCB_THEME_CACHE_DATA", mc = (m, d, D) => {
  const C = localStorage.getItem(`${sl}_${m}_${d}`);
  if (!C)
    return null;
  try {
    const s = JSON.parse(C), M = (/* @__PURE__ */ new Date()).getTime(), F = Math.floor(M / 1e3);
    return s.cacheDate + D >= F ? s : null;
  } catch (s) {
    return console.error(`Unable to fetch cache for ${m}`, s), null;
  }
}, yc = (m, d, D, C, s) => {
  const M = (/* @__PURE__ */ new Date()).getTime(), F = Math.floor(M / 1e3), R = {
    settings: D,
    inlineStyles: C,
    cssStylesText: s,
    cacheDate: F
  };
  localStorage.setItem(`${sl}_${m}_${d}`, JSON.stringify(R));
}, Gs = async (m, d) => {
  try {
    const D = document.createElement("link");
    D.id = `rcb-theme-style-${m}`, D.rel = "stylesheet", D.href = `data:text/css;charset=utf-8,${encodeURIComponent(d)}`, document.head.appendChild(D);
  } catch (D) {
    console.error(`Failed to apply styles.css for: ${m}`, D);
  }
}, wc = async (m, d) => {
  const D = `${d}/${m}/meta.json`;
  try {
    const C = await fetch(D);
    return C.ok ? (await C.json()).version : (console.error(`Failed to fetch meta.json from ${D}`), null);
  } catch (C) {
    return console.error(`Failed to fetch meta.json from ${D}`, C), null;
  }
}, _s = async (m) => {
  const { id: d, version: D, baseUrl: C = gc, cacheDuration: s = vc } = m, M = D || await wc(d, C);
  if (!M)
    return console.error(`Unable to find version for theme: ${d}`), { settings: {}, styles: {} };
  const F = mc(d, M, s);
  if (F)
    return console.log("Using cache"), await Gs(d, F.cssStylesText), { settings: F.settings, styles: F.inlineStyles };
  const R = `${C}/${d}/${M}/styles.css`, S = `${C}/${d}/${M}/settings.json`, x = `${C}/${d}/${M}/styles.json`;
  let Y = "";
  const k = await fetch(R);
  k.ok ? Y = await k.text() : console.info(`Could not fetch styles.css from ${R}`), await Gs(d, Y);
  const q = await fetch(S);
  let me = {};
  q.ok ? me = await q.json() : console.info(`Could not fetch settings.json from ${S}`);
  const ae = await fetch(x);
  let ye = {};
  return ae.ok ? ye = await ae.json() : console.info(`Could not fetch styles.json from ${x}`), yc(d, M, me, ye, Y), { settings: me, styles: ye };
}, bc = (m, d) => /* @__PURE__ */ se.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, viewBox: "0 0 42 42", ref: d, ...m }, /* @__PURE__ */ se.createElement("path", { style: {
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "#b00000",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M17 9a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8Zm0 0", transform: "rotate(.086) scale(1.77778)" }), /* @__PURE__ */ se.createElement("path", { style: {
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "#b00000",
  strokeOpacity: 1,
  strokeMiterlimit: 10
}, d: "M14.66 14.66 3.34 3.34", transform: "rotate(.086) scale(1.77778)" }));
nr(bc);
const Sc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDQyIDQyIj48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTojYjAwMDAwO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NCIgZD0iTTE3IDlhOCA4IDAgMCAxLTggOCA4IDggMCAwIDEtOC04IDggOCAwIDAgMSA4LTggOCA4IDAgMCAxIDggOFptMCAwIiB0cmFuc2Zvcm09InJvdGF0ZSguMDg2KSBzY2FsZSgxLjc3Nzc4KSIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOiNiMDAwMDA7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMCIgZD0iTTE0LjY2IDE0LjY2IDMuMzQgMy4zNCIgdHJhbnNmb3JtPSJyb3RhdGUoLjA4Nikgc2NhbGUoMS43Nzc3OCkiLz48L3N2Zz4=", Dc = (m, d) => /* @__PURE__ */ se.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 1000 1000", ref: d, ...m }, /* @__PURE__ */ se.createElement("rect", { width: "100%", height: "100%", fill: "#fff" }), /* @__PURE__ */ se.createElement("g", null, /* @__PURE__ */ se.createElement("rect", { width: 45, height: 30, x: -22.5, y: -15, rx: 1.5, ry: 1.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#37547a",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 -99 362) scale(3.4003)" }), /* @__PURE__ */ se.createElement("path", { d: "M0 75q14 0 14 17 0 16-14 16Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(180 106 386) scale(3.4003)" }), /* @__PURE__ */ se.createElement("rect", { width: 25, height: 4, x: -12.5, y: -2, rx: 0.2, ry: 0.2, style: {
  stroke: "#46648c",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 -46 282) scale(3.4003)" }), /* @__PURE__ */ se.createElement("path", { d: "M19 65h4l5 4v1H14v-1Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ se.createElement("rect", { width: 25, height: 2, x: -12.5, y: -1, rx: 0.1, ry: 0.1, style: {
  stroke: "#98b0ca",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 -3 240) scale(3.4003)" }), /* @__PURE__ */ se.createElement("circle", { r: 7.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(236 175) scale(3.4003)" }), /* @__PURE__ */ se.createElement("rect", { width: 45, height: 30, x: -22.5, y: -15, rx: 1.5, ry: 1.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#37547a",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 139 600) scale(3.4003)" }), /* @__PURE__ */ se.createElement("path", { d: "M184 75q14 0 14 17 0 16-14 16Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ se.createElement("rect", { width: 25, height: 4, x: -12.5, y: -2, rx: 0.2, ry: 0.2, style: {
  stroke: "#46648c",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 219 548) scale(3.4003)" }), /* @__PURE__ */ se.createElement("path", { d: "M175 65h4l5 4v1h-14v-1Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ se.createElement("rect", { width: 25, height: 2, x: -12.5, y: -1, rx: 0.1, ry: 0.1, style: {
  stroke: "#98b0ca",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 262 505) scale(3.4003)" }), /* @__PURE__ */ se.createElement("circle", { r: 7.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(767 175) scale(3.4003)" }), /* @__PURE__ */ se.createElement("rect", { width: 116.7, height: 70, x: -58.4, y: -35, rx: 31.5, ry: 31.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#71c9fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 877) scale(3.4003)" }), /* @__PURE__ */ se.createElement("rect", { width: 60, height: 20, x: -30, y: -10, rx: 3, ry: 3, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#37547a",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 728) scale(3.4003)" }), /* @__PURE__ */ se.createElement("circle", { r: 75, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#71c9fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 473) scale(3.4003)" }), /* @__PURE__ */ se.createElement("rect", { width: 129.4, height: 82.3, x: -64.7, y: -41.1, rx: 37, ry: 37, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#fff",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 464) scale(3.4003)" }), /* @__PURE__ */ se.createElement("rect", { width: 108, height: 68.6, x: -54, y: -34.3, rx: 30.9, ry: 30.9, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#162334",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 464) scale(3.4003)" }), /* @__PURE__ */ se.createElement("circle", { r: 19.4, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(415 464) scale(3.4003)" }), /* @__PURE__ */ se.createElement("circle", { r: 19.4, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(591 464) scale(3.4003)" }), /* @__PURE__ */ se.createElement("rect", { width: 96, height: 53.2, x: -48, y: -26.6, rx: 23.9, ry: 23.9, style: {
  stroke: "#162334",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#162334",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(503 875) scale(3.4003)" }), /* @__PURE__ */ se.createElement("path", { strokeLinecap: "round", d: "m68 215 7-15M81 222l-7-22M81 222l7-14M101 208H87M114 219l-7-24M113 219l13-22M131 214l-5-17M148 214h-18M69 214H51M100 209l7-15", style: {
  stroke: "#a478fc",
  strokeWidth: 3,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 10,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "none",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" })));
nr(Dc);
const Xs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiLz48Zz48cmVjdCB3aWR0aD0iNDUiIGhlaWdodD0iMzAiIHg9Ii0yMi41IiB5PSItMTUiIHJ4PSIxLjUiIHJ5PSIxLjUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzM3NTQ3YTtmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIC05OSAzNjIpIHNjYWxlKDMuNDAwMykiLz48cGF0aCBkPSJNMCA3NXExNCAwIDE0IDE3IDAgMTYtMTQgMTZaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTA2IDM4Nikgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSI0IiB4PSItMTIuNSIgeT0iLTIiIHJ4PSIuMiIgcnk9Ii4yIiBzdHlsZT0ic3Ryb2tlOiM0NjY0OGM7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM0NjY0OGM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAtNDYgMjgyKSBzY2FsZSgzLjQwMDMpIi8+PHBhdGggZD0iTTE5IDY1aDRsNSA0djFIMTR2LTFaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM0NjY0OGM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjIiIHg9Ii0xMi41IiB5PSItMSIgcng9Ii4xIiByeT0iLjEiIHN0eWxlPSJzdHJva2U6Izk4YjBjYTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6Izk4YjBjYTtmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIC0zIDI0MCkgc2NhbGUoMy40MDAzKSIvPjxjaXJjbGUgcj0iNy41IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzYgMTc1KSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjQ1IiBoZWlnaHQ9IjMwIiB4PSItMjIuNSIgeT0iLTE1IiByeD0iMS41IiByeT0iMS41IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiMzNzU0N2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxMzkgNjAwKSBzY2FsZSgzLjQwMDMpIi8+PHBhdGggZD0iTTE4NCA3NXExNCAwIDE0IDE3IDAgMTYtMTQgMTZaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjQiIHg9Ii0xMi41IiB5PSItMiIgcng9Ii4yIiByeT0iLjIiIHN0eWxlPSJzdHJva2U6IzQ2NjQ4YztzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzQ2NjQ4YztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIDIxOSA1NDgpIHNjYWxlKDMuNDAwMykiLz48cGF0aCBkPSJNMTc1IDY1aDRsNSA0djFoLTE0di0xWiIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojNDY2NDhjO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY1IDE1MCkgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSIyIiB4PSItMTIuNSIgeT0iLTEiIHJ4PSIuMSIgcnk9Ii4xIiBzdHlsZT0ic3Ryb2tlOiM5OGIwY2E7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAyNjIgNTA1KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSI3LjUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6I2E0NzhmYztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc2NyAxNzUpIHNjYWxlKDMuNDAwMykiLz48cmVjdCB3aWR0aD0iMTE2LjciIGhlaWdodD0iNzAiIHg9Ii01OC40IiB5PSItMzUiIHJ4PSIzMS41IiByeT0iMzEuNSIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojNzFjOWZjO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDg3Nykgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgeD0iLTMwIiB5PSItMTAiIHJ4PSIzIiByeT0iMyIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojMzc1NDdhO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDcyOCkgc2NhbGUoMy40MDAzKSIvPjxjaXJjbGUgcj0iNzUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzcxYzlmYztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwMiA0NzMpIHNjYWxlKDMuNDAwMykiLz48cmVjdCB3aWR0aD0iMTI5LjQiIGhlaWdodD0iODIuMyIgeD0iLTY0LjciIHk9Ii00MS4xIiByeD0iMzciIHJ5PSIzNyIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDQ2NCkgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iNjguNiIgeD0iLTU0IiB5PSItMzQuMyIgcng9IjMwLjkiIHJ5PSIzMC45IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiMxNjIzMzQ7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MDIgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSIxOS40IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTUgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSIxOS40IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OTEgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9IjUzLjIiIHg9Ii00OCIgeT0iLTI2LjYiIHJ4PSIyMy45IiByeT0iMjMuOSIgc3R5bGU9InN0cm9rZTojMTYyMzM0O3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojMTYyMzM0O2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAzIDg3NSkgc2NhbGUoMy40MDAzKSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0ibTY4IDIxNSA3LTE1TTgxIDIyMmwtNy0yMk04MSAyMjJsNy0xNE0xMDEgMjA4SDg3TTExNCAyMTlsLTctMjRNMTEzIDIxOWwxMy0yMk0xMzEgMjE0bC01LTE3TTE0OCAyMTRoLTE4TTY5IDIxNEg1MU0xMDAgMjA5bDctMTUiIHN0eWxlPSJzdHJva2U6I2E0NzhmYztzdHJva2Utd2lkdGg6MztzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PC9nPjwvc3ZnPg==", Ec = (m, d) => /* @__PURE__ */ se.createElement("svg", { width: 140, height: 140, xmlns: "http://www.w3.org/2000/svg", ref: d, ...m }, /* @__PURE__ */ se.createElement("circle", { cy: 60.044, cx: 70, fill: "#5c5c5c", r: 29 }), /* @__PURE__ */ se.createElement("path", { d: "m16.36 156.186-.01-30.5c-.005-16.844 24.168-30.507 53.991-30.516 29.823-.009 54.004 13.64 54.01 30.484l.008 30.5-108 .032z", fill: "#5c5c5c" }));
nr(Ec);
const Cc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN5PSI2MC4wNDQiIGN4PSI3MCIgZmlsbD0iIzVjNWM1YyIgcj0iMjkiLz48cGF0aCBkPSJtMTYuMzYgMTU2LjE4Ni0uMDEtMzAuNWMtLjAwNS0xNi44NDQgMjQuMTY4LTMwLjUwNyA1My45OTEtMzAuNTE2IDI5LjgyMy0uMDA5IDU0LjAwNCAxMy42NCA1NC4wMSAzMC40ODRsLjAwOCAzMC41LTEwOCAuMDMyeiIgZmlsbD0iIzVjNWM1YyIvPjwvc3ZnPg==", Ic = (m, d) => /* @__PURE__ */ se.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 637 637", ref: d, ...m }, /* @__PURE__ */ se.createElement("path", { d: "m478 113-13 2-4 1h4l14-2c10-2 35-2 42-1l6 3 3 1c3 0-4-3-8-5-7-1-34-1-44 1m56 6 8 6c7 5 20 17 20 19s7 12 8 12l-3-6-4-6c0-3-15-17-25-24-5-3-8-4-4-1m-198 16-9 1a512 512 0 0 1 9-1m-180 30a412 412 0 0 0-23 4 167 167 0 0 0-32 8 439 439 0 0 1 46-9 304 304 0 0 1 11-2l6-1h-8m369 8 4 3-7-6c-1 0 0 2 3 3m-439 9c-7 3-18 13-18 15l6-5c5-5 9-8 14-10l6-4-8 4m442 12-10 11-7 6 7-6c7-5 14-14 13-16l-3 5M65 205l-1 11c0 9 0 10 4 17 5 10 7 12 22 11 10 0 15 0 38-5l5-1-6 1-16 2-21 2c-13 1-16-1-21-10-3-5-4-6-4-15l1-12c1-4 1-5-1-1m335 1c3 0 3 1 3 3l-2 6c-2 5-35 39-76 80-53 51-120 117-138 137-21 24-22 25-22 27 0 3 6 9 9 9 4 0 14-8 38-27a5073 5073 0 0 1 15-16 1421 1421 0 0 0-17 15l-31 25-6 2-4-3c-3-3-3-4-2-6 3-8 79-85 160-163 57-57 79-80 79-86 0-2-3-4-7-4-2 0-2 0 1 1m165 18c-9 17-25 32-57 53l-10 8 16-11 12-8c15-10 27-22 39-39 5-7 6-8 4-8l-4 5m-221 2a199 199 0 0 0-19 10 183 183 0 0 1 27-12c0-1-1-1-8 2m-34 16c-3 3-2 3 2 0l1-2-3 2m151 3-1 2 2-2c3-3 2-3-1 0m-16 12-11 10a281 281 0 0 0 11-10m-24 18-7 5-7 5-42 31c-10 7-24 19-22 19l7-6 16-12a343 343 0 0 0 35-25 573 573 0 0 0 20-17m-187 0-2 2 4-2 3-2-5 2m-14 6-3 2 4-1 4-3-5 2m-7 3-8 4-18 8 18-7 7-3 3-1c1-2 0-2-2-1m254 24a2672 2672 0 0 1-71 54 601 601 0 0 0 39-29 1352 1352 0 0 1 32-25m-291-8-2 2 4-2 3-2-5 2m-13 5-2 2h3c5-3 4-4-1-2m-19 9-7 3-13 6c-10 5-13 7-14 10-3 4-2 5 1 0 2-3 5-5 14-9l13-6 12-6-6 2m178 36c-17 12-21 16-21 17a390 390 0 0 1 20-17m-206 34 1 4 1 3 1 5 2 8 1 5v-6l-1-8-2-5-1-4-1-2c-1-2-1-2-1 0m222 23-9 7a683 683 0 0 0-56 44 261 261 0 0 0-26 20 1345 1345 0 0 0-46 34c-6 3-7 3-19 3-11 0-12 0-18-3-8-4-10-8-17-20l-5-10 4 10c5 10 12 18 19 22 4 2 6 2 17 2 13 0 14 0 21-3l26-19 42-33a2183 2183 0 0 0 43-34 643 643 0 0 1 24-20", fill: "#fff", fillRule: "evenodd" }), /* @__PURE__ */ se.createElement("path", { d: "M478 114a620 620 0 0 1-39 6l-21 3a5481 5481 0 0 0-19 3 870 870 0 0 1-54 8l-1 1-6 1-12 2-13 2a992 992 0 0 0-76 12 400 400 0 0 1-45 8l-6 1-5 1h-3l-3 1-2 1-26 4-13 2-17 3c-23 5-33 9-43 19-7 8-9 13-9 27 0 8 1 9 4 14 5 9 8 11 21 10l21-2a1133 1133 0 0 1 23-4 659 659 0 0 0 74-14l3-1h3l3-1h3l2-1 2-1h3l2-1h2l24-5 38-7a2100 2100 0 0 1 93-18l3-1 10-1a2082 2082 0 0 1 120-17l2 1c2 0 8 5 8 7l1 2 1 6c0 4 0 6-3 10-2 4-16 16-18 16l-7 5-10 8a1070 1070 0 0 0-11 7 113 113 0 0 1-20 14l-2 2-3 2-2 2h-1a154 154 0 0 1-28 21l-5 4-5 4a573 573 0 0 1-50 37 175 175 0 0 0-24 18l-1 2-2 1-2 1-2 1-1 1-12 10a396 396 0 0 0-32 25l-8 6-6 5-9 7a326 326 0 0 1-25 20l-13 12a5073 5073 0 0 0-17 15c-24 20-34 27-39 27-2 0-8-6-8-9 0-2 1-3 22-27 18-20 85-86 138-137 41-41 74-75 76-80l2-6c0-2 0-3-2-3l-7 1a233 233 0 0 1-26 9l-1 1-1 1h-1l-1 1h-2l-3 2-1 1h-2l-3 2h-1l-5 2-22 10-9 4-4 2-5 2-10 4-2 1-2 1-2 1-13 6a334 334 0 0 1-38 17 75 75 0 0 0-14 6l-5 2-4 1-2 1-3 2-7 3-16 6a247 247 0 0 0-32 14l-1 1h-2l-1 1h-2l-1 1-12 6a103 103 0 0 0-27 15l-2 5-1 1v11l1 5 1 5 1 4c0 3 0 4 2 4v3l1 3 1 2 2 10 1 4 1 5 2 10 2 8 1 4 1 4c3 3 9 25 11 38l1 7v2l1 4v1l1 1v2l1 2 1 3v1l5 10c7 13 9 16 17 20 6 3 7 3 18 3 12 0 13 0 19-3 8-4 11-6 26-18a1345 1345 0 0 1 85-67 683 683 0 0 1 50-39l12-9a513 513 0 0 1 44-33 201 201 0 0 0 22-17 2270 2270 0 0 0 73-54 158 158 0 0 0 58-59c2 0 3-9 4-27l-1-19-1-4-1-6-1-3-4-6-4-6c0-2-6-8-13-14a77 77 0 0 0-28-18c-6-1-34-1-43 1", fill: "#fbfbfb", fillRule: "evenodd" }));
nr(Ic);
const Js = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MzcgNjM3Ij48cGF0aCBkPSJtNDc4IDExMy0xMyAyLTQgMWg0bDE0LTJjMTAtMiAzNS0yIDQyLTFsNiAzIDMgMWMzIDAtNC0zLTgtNS03LTEtMzQtMS00NCAxbTU2IDYgOCA2YzcgNSAyMCAxNyAyMCAxOXM3IDEyIDggMTJsLTMtNi00LTZjMC0zLTE1LTE3LTI1LTI0LTUtMy04LTQtNC0xbS0xOTggMTYtOSAxYTUxMiA1MTIgMCAwIDEgOS0xbS0xODAgMzBhNDEyIDQxMiAwIDAgMC0yMyA0IDE2NyAxNjcgMCAwIDAtMzIgOCA0MzkgNDM5IDAgMCAxIDQ2LTkgMzA0IDMwNCAwIDAgMSAxMS0ybDYtMWgtOG0zNjkgOCA0IDMtNy02Yy0xIDAgMCAyIDMgM20tNDM5IDljLTcgMy0xOCAxMy0xOCAxNWw2LTVjNS01IDktOCAxNC0xMGw2LTQtOCA0bTQ0MiAxMi0xMCAxMS03IDYgNy02YzctNSAxNC0xNCAxMy0xNmwtMyA1TTY1IDIwNWwtMSAxMWMwIDkgMCAxMCA0IDE3IDUgMTAgNyAxMiAyMiAxMSAxMCAwIDE1IDAgMzgtNWw1LTEtNiAxLTE2IDItMjEgMmMtMTMgMS0xNi0xLTIxLTEwLTMtNS00LTYtNC0xNWwxLTEyYzEtNCAxLTUtMS0xbTMzNSAxYzMgMCAzIDEgMyAzbC0yIDZjLTIgNS0zNSAzOS03NiA4MC01MyA1MS0xMjAgMTE3LTEzOCAxMzctMjEgMjQtMjIgMjUtMjIgMjcgMCAzIDYgOSA5IDkgNCAwIDE0LTggMzgtMjdhNTA3MyA1MDczIDAgMCAxIDE1LTE2IDE0MjEgMTQyMSAwIDAgMC0xNyAxNWwtMzEgMjUtNiAyLTQtM2MtMy0zLTMtNC0yLTYgMy04IDc5LTg1IDE2MC0xNjMgNTctNTcgNzktODAgNzktODYgMC0yLTMtNC03LTQtMiAwLTIgMCAxIDFtMTY1IDE4Yy05IDE3LTI1IDMyLTU3IDUzbC0xMCA4IDE2LTExIDEyLThjMTUtMTAgMjctMjIgMzktMzkgNS03IDYtOCA0LThsLTQgNW0tMjIxIDJhMTk5IDE5OSAwIDAgMC0xOSAxMCAxODMgMTgzIDAgMCAxIDI3LTEyYzAtMS0xLTEtOCAybS0zNCAxNmMtMyAzLTIgMyAyIDBsMS0yLTMgMm0xNTEgMy0xIDIgMi0yYzMtMyAyLTMtMSAwbS0xNiAxMi0xMSAxMGEyODEgMjgxIDAgMCAwIDExLTEwbS0yNCAxOC03IDUtNyA1LTQyIDMxYy0xMCA3LTI0IDE5LTIyIDE5bDctNiAxNi0xMmEzNDMgMzQzIDAgMCAwIDM1LTI1IDU3MyA1NzMgMCAwIDAgMjAtMTdtLTE4NyAwLTIgMiA0LTIgMy0yLTUgMm0tMTQgNi0zIDIgNC0xIDQtMy01IDJtLTcgMy04IDQtMTggOCAxOC03IDctMyAzLTFjMS0yIDAtMi0yLTFtMjU0IDI0YTI2NzIgMjY3MiAwIDAgMS03MSA1NCA2MDEgNjAxIDAgMCAwIDM5LTI5IDEzNTIgMTM1MiAwIDAgMSAzMi0yNW0tMjkxLTgtMiAyIDQtMiAzLTItNSAybS0xMyA1LTIgMmgzYzUtMyA0LTQtMS0ybS0xOSA5LTcgMy0xMyA2Yy0xMCA1LTEzIDctMTQgMTAtMyA0LTIgNSAxIDAgMi0zIDUtNSAxNC05bDEzLTYgMTItNi02IDJtMTc4IDM2Yy0xNyAxMi0yMSAxNi0yMSAxN2EzOTAgMzkwIDAgMCAxIDIwLTE3bS0yMDYgMzQgMSA0IDEgMyAxIDUgMiA4IDEgNXYtNmwtMS04LTItNS0xLTQtMS0yYy0xLTItMS0yLTEgMG0yMjIgMjMtOSA3YTY4MyA2ODMgMCAwIDAtNTYgNDQgMjYxIDI2MSAwIDAgMC0yNiAyMCAxMzQ1IDEzNDUgMCAwIDAtNDYgMzRjLTYgMy03IDMtMTkgMy0xMSAwLTEyIDAtMTgtMy04LTQtMTAtOC0xNy0yMGwtNS0xMCA0IDEwYzUgMTAgMTIgMTggMTkgMjIgNCAyIDYgMiAxNyAyIDEzIDAgMTQgMCAyMS0zbDI2LTE5IDQyLTMzYTIxODMgMjE4MyAwIDAgMCA0My0zNCA2NDMgNjQzIDAgMCAxIDI0LTIwIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNNDc4IDExNGE2MjAgNjIwIDAgMCAxLTM5IDZsLTIxIDNhNTQ4MSA1NDgxIDAgMCAwLTE5IDMgODcwIDg3MCAwIDAgMS01NCA4bC0xIDEtNiAxLTEyIDItMTMgMmE5OTIgOTkyIDAgMCAwLTc2IDEyIDQwMCA0MDAgMCAwIDEtNDUgOGwtNiAxLTUgMWgtM2wtMyAxLTIgMS0yNiA0LTEzIDItMTcgM2MtMjMgNS0zMyA5LTQzIDE5LTcgOC05IDEzLTkgMjcgMCA4IDEgOSA0IDE0IDUgOSA4IDExIDIxIDEwbDIxLTJhMTEzMyAxMTMzIDAgMCAxIDIzLTQgNjU5IDY1OSAwIDAgMCA3NC0xNGwzLTFoM2wzLTFoM2wyLTEgMi0xaDNsMi0xaDJsMjQtNSAzOC03YTIxMDAgMjEwMCAwIDAgMSA5My0xOGwzLTEgMTAtMWEyMDgyIDIwODIgMCAwIDEgMTIwLTE3bDIgMWMyIDAgOCA1IDggN2wxIDIgMSA2YzAgNCAwIDYtMyAxMC0yIDQtMTYgMTYtMTggMTZsLTcgNS0xMCA4YTEwNzAgMTA3MCAwIDAgMC0xMSA3IDExMyAxMTMgMCAwIDEtMjAgMTRsLTIgMi0zIDItMiAyaC0xYTE1NCAxNTQgMCAwIDEtMjggMjFsLTUgNC01IDRhNTczIDU3MyAwIDAgMS01MCAzNyAxNzUgMTc1IDAgMCAwLTI0IDE4bC0xIDItMiAxLTIgMS0yIDEtMSAxLTEyIDEwYTM5NiAzOTYgMCAwIDAtMzIgMjVsLTggNi02IDUtOSA3YTMyNiAzMjYgMCAwIDEtMjUgMjBsLTEzIDEyYTUwNzMgNTA3MyAwIDAgMC0xNyAxNWMtMjQgMjAtMzQgMjctMzkgMjctMiAwLTgtNi04LTkgMC0yIDEtMyAyMi0yNyAxOC0yMCA4NS04NiAxMzgtMTM3IDQxLTQxIDc0LTc1IDc2LTgwbDItNmMwLTIgMC0zLTItM2wtNyAxYTIzMyAyMzMgMCAwIDEtMjYgOWwtMSAxLTEgMWgtMWwtMSAxaC0ybC0zIDItMSAxaC0ybC0zIDJoLTFsLTUgMi0yMiAxMC05IDQtNCAyLTUgMi0xMCA0LTIgMS0yIDEtMiAxLTEzIDZhMzM0IDMzNCAwIDAgMS0zOCAxNyA3NSA3NSAwIDAgMC0xNCA2bC01IDItNCAxLTIgMS0zIDItNyAzLTE2IDZhMjQ3IDI0NyAwIDAgMC0zMiAxNGwtMSAxaC0ybC0xIDFoLTJsLTEgMS0xMiA2YTEwMyAxMDMgMCAwIDAtMjcgMTVsLTIgNS0xIDF2MTFsMSA1IDEgNSAxIDRjMCAzIDAgNCAyIDR2M2wxIDMgMSAyIDIgMTAgMSA0IDEgNSAyIDEwIDIgOCAxIDQgMSA0YzMgMyA5IDI1IDExIDM4bDEgN3YybDEgNHYxbDEgMXYybDEgMiAxIDN2MWw1IDEwYzcgMTMgOSAxNiAxNyAyMCA2IDMgNyAzIDE4IDMgMTIgMCAxMyAwIDE5LTMgOC00IDExLTYgMjYtMThhMTM0NSAxMzQ1IDAgMCAxIDg1LTY3IDY4MyA2ODMgMCAwIDEgNTAtMzlsMTItOWE1MTMgNTEzIDAgMCAxIDQ0LTMzIDIwMSAyMDEgMCAwIDAgMjItMTcgMjI3MCAyMjcwIDAgMCAwIDczLTU0IDE1OCAxNTggMCAwIDAgNTgtNTljMiAwIDMtOSA0LTI3bC0xLTE5LTEtNC0xLTYtMS0zLTQtNi00LTZjMC0yLTYtOC0xMy0xNGE3NyA3NyAwIDAgMC0yOC0xOGMtNi0xLTM0LTEtNDMgMSIgZmlsbD0iI2ZiZmJmYiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+", xc = (m, d) => /* @__PURE__ */ se.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-14 2 84 180", ref: d, ...m }, /* @__PURE__ */ se.createElement("path", { fill: "none", stroke: "#848484", strokeMiterlimit: 10, strokeWidth: 6, d: "M47 31v37q0 5-4 9-4 3-10 4H23l-9-4q-5-4-5-10V23", pointerEvents: "stroke" }), /* @__PURE__ */ se.createElement("path", { fill: "none", stroke: "#848484", strokeMiterlimit: 10, strokeWidth: 6, d: "M47 36q0-20-3-26-4-7-9-7T25 8q-5 5-5 10v25", pointerEvents: "stroke" }), /* @__PURE__ */ se.createElement("path", { fill: "none", stroke: "#848484", strokeMiterlimit: 10, strokeWidth: 6, d: "M35 13v47q0 4-2 7l-5 2q-3 0-5-2-3-3-3-13V24", pointerEvents: "stroke" }));
nr(xc);
const Tc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xNCAyIDg0IDE4MCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODQ4NDg0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iNiIgZD0iTTQ3IDMxdjM3cTAgNS00IDktNCAzLTEwIDRIMjNsLTktNHEtNS00LTUtMTBWMjMiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4NDg0ODQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJNNDcgMzZxMC0yMC0zLTI2LTQtNy05LTdUMjUgOHEtNSA1LTUgMTB2MjUiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4NDg0ODQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJNMzUgMTN2NDdxMCA0LTIgN2wtNSAycS0zIDAtNS0yLTMtMy0zLTEzVjI0IiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PC9zdmc+", Mc = (m, d) => /* @__PURE__ */ se.createElement("svg", { width: 400, height: 400, xmlns: "http://www.w3.org/2000/svg", ref: d, ...m }, /* @__PURE__ */ se.createElement("g", { strokeWidth: 0, fill: "#fcec3c" }, /* @__PURE__ */ se.createElement("ellipse", { ry: 43.5, rx: 174, cy: 293, cx: 203 }), /* @__PURE__ */ se.createElement("path", { d: "M137 323c19-22 45-22 64-1 19-20 44-21 62-2l34-51c-21-32-21-83 0-115 3-11 4-10 5-21 1-27-4-51-17-70-11-16-27-23-42-21-26-2-38-18-43-28-7 10-18 27-50 30-20 4-27 11-36 24a106 106 0 0 0-11 90c21 32 21 84 0 116l34 49z" }), /* @__PURE__ */ se.createElement("path", { d: "m305 132-106 8" }), /* @__PURE__ */ se.createElement("path", { d: "M241 349v20c0 11-18 20-40 20s-40-9-40-20v-20h80zm-98-22-93-58c10 7 32-9 48-35s21-53 11-59l93 58c10 6 5 33-11 59s-38 42-48 35z" }), /* @__PURE__ */ se.createElement("path", { d: "m198 235 91-61c-10 7-5 33 12 59 17 25 39 41 50 34l-91 61c-11 6-33-9-50-35-17-25-22-51-12-58zM73 156c-25-8-35-42-24-77 11-34 40-56 65-48-19 11-35 31-43 56s-7 50 2 69z" }), /* @__PURE__ */ se.createElement("path", { d: "M73 156c-25-8-35-42-24-77 11-34 40-56 65-48-19 11-35 31-43 56s-7 50 2 69zM287 31c25-8 54 13 65 48 11 34 0 69-24 77 9-20 10-45 2-70s-24-45-43-55z" })), /* @__PURE__ */ se.createElement("path", { d: "m231 201 73-78c-9 10 10 94 23 142 13 47 50 30 40 18s-145-72-136-82z", fill: "#fcec3c" }), /* @__PURE__ */ se.createElement("path", { d: "m230 201 73-78c-9 10 27 147 41 158 14 10 35 12 22 18m-189-89-81-84c5 12 4 73-14 120-17 47-56 27-42 34", fill: "#fcec3c" }));
nr(Mc);
const Pc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2Utd2lkdGg9IjAiIGZpbGw9IiNmY2VjM2MiPjxlbGxpcHNlIHJ5PSI0My41IiByeD0iMTc0IiBjeT0iMjkzIiBjeD0iMjAzIi8+PHBhdGggZD0iTTEzNyAzMjNjMTktMjIgNDUtMjIgNjQtMSAxOS0yMCA0NC0yMSA2Mi0ybDM0LTUxYy0yMS0zMi0yMS04MyAwLTExNSAzLTExIDQtMTAgNS0yMSAxLTI3LTQtNTEtMTctNzAtMTEtMTYtMjctMjMtNDItMjEtMjYtMi0zOC0xOC00My0yOC03IDEwLTE4IDI3LTUwIDMwLTIwIDQtMjcgMTEtMzYgMjRhMTA2IDEwNiAwIDAgMC0xMSA5MGMyMSAzMiAyMSA4NCAwIDExNmwzNCA0OXoiLz48cGF0aCBkPSJtMzA1IDEzMi0xMDYgOCIgLz48cGF0aCBkPSJNMjQxIDM0OXYyMGMwIDExLTE4IDIwLTQwIDIwcy00MC05LTQwLTIwdi0yMGg4MHptLTk4LTIyLTkzLTU4YzEwIDcgMzItOSA0OC0zNXMyMS01MyAxMS01OWw5MyA1OGMxMCA2IDUgMzMtMTEgNTlzLTM4IDQyLTQ4IDM1eiIvPjxwYXRoIGQ9Im0xOTggMjM1IDkxLTYxYy0xMCA3LTUgMzMgMTIgNTkgMTcgMjUgMzkgNDEgNTAgMzRsLTkxIDYxYy0xMSA2LTMzLTktNTAtMzUtMTctMjUtMjItNTEtMTItNTh6TTczIDE1NmMtMjUtOC0zNS00Mi0yNC03NyAxMS0zNCA0MC01NiA2NS00OC0xOSAxMS0zNSAzMS00MyA1NnMtNyA1MCAyIDY5eiIvPjxwYXRoIGQ9Ik03MyAxNTZjLTI1LTgtMzUtNDItMjQtNzcgMTEtMzQgNDAtNTYgNjUtNDgtMTkgMTEtMzUgMzEtNDMgNTZzLTcgNTAgMiA2OXpNMjg3IDMxYzI1LTggNTQgMTMgNjUgNDggMTEgMzQgMCA2OS0yNCA3NyA5LTIwIDEwLTQ1IDItNzBzLTI0LTQ1LTQzLTU1eiIvPjwvZz48cGF0aCBkPSJtMjMxIDIwMSA3My03OGMtOSAxMCAxMCA5NCAyMyAxNDIgMTMgNDcgNTAgMzAgNDAgMThzLTE0NS03Mi0xMzYtODJ6IiBmaWxsPSIjZmNlYzNjIi8+PHBhdGggZD0ibTIzMCAyMDEgNzMtNzhjLTkgMTAgMjcgMTQ3IDQxIDE1OCAxNCAxMCAzNSAxMiAyMiAxOG0tMTg5LTg5LTgxLTg0YzUgMTIgNCA3My0xNCAxMjAtMTcgNDctNTYgMjctNDIgMzQiIGZpbGw9IiNmY2VjM2MiLz48L3N2Zz4=", Bc = (m, d) => /* @__PURE__ */ se.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", ref: d, ...m }, /* @__PURE__ */ se.createElement("g", { fill: "#fff", stroke: "#fff", strokeLinecap: "round", strokeWidth: 10 }, /* @__PURE__ */ se.createElement("path", { d: "m19 19 61 61M80 19 19 80" })));
nr(Bc);
const kc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZyBmaWxsPSIjZmZmIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxMCI+PHBhdGggZD0ibTE5IDE5IDYxIDYxTTgwIDE5IDE5IDgwIi8+PC9nPjwvc3ZnPg==", Rc = (m, d) => /* @__PURE__ */ se.createElement("svg", { width: 200, height: 200, xmlns: "http://www.w3.org/2000/svg", ref: d, ...m }, /* @__PURE__ */ se.createElement("path", { d: "m5 7 189 94L5 195l12-64 48-30-47-26L5 7z", fill: "#fff" }));
nr(Rc);
const Qc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJtNSA3IDE4OSA5NEw1IDE5NWwxMi02NCA0OC0zMC00Ny0yNkw1IDd6IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=", Lc = (m, d) => /* @__PURE__ */ se.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 200", ref: d, ...m }, /* @__PURE__ */ se.createElement("path", { fill: "#6f6f6f", stroke: "#fff", d: "M108 155c22-3 38-22 38-43h-13c0 15-17 28-33 28-17 0-33-13-34-28H53c0 21 17 40 38 43v19h17v-19z" }), /* @__PURE__ */ se.createElement("path", { fill: "#6f6f6f", d: "M68 186c7-5 18-6 25-12l11-1 22 13H68z" }), /* @__PURE__ */ se.createElement("path", { fill: "#6f6f6f", d: "m87 180 8-8h32a8 8 0 1 1 0 16H95l-8-8z" }), /* @__PURE__ */ se.createElement("path", { fill: "#6f6f6f", d: "m113 180-8 8H73a8 8 0 1 1 0-16h32l8 8z" }), /* @__PURE__ */ se.createElement("path", { fill: "#6f6f6f", d: "M100 131c-17 0-32-23-32-51 0-29 15-52 32-52s31 23 31 52c0 28-14 51-31 51z", opacity: "undefined" }), /* @__PURE__ */ se.createElement("path", { fill: "#ec1c24", d: "M129 128c2-2 2-5 0-6-2-2-4-2-6 0a32 32 0 0 1-47 0c-1-2-4-2-5 0l-2 3 2 3c7 8 17 13 29 13 11 0 22-5 29-13z" }), /* @__PURE__ */ se.createElement("path", { fill: "none", stroke: "#ec1c24", strokeWidth: 10, d: "M100 103v33", opacity: "undefined" }), /* @__PURE__ */ se.createElement("circle", { cx: 100, cy: 110.5, r: 16, fill: "#ec1c24" }), /* @__PURE__ */ se.createElement("path", { fill: "none", stroke: "#ec1c24", strokeWidth: 10, d: "M100 117v33M100 82v33", opacity: "undefined" }), /* @__PURE__ */ se.createElement("circle", { cx: 100, cy: 110.5, r: 5, fill: "#6f6f6f", stroke: "#6f6f6f", strokeWidth: 5 }));
nr(Lc);
const Oc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cGF0aCBmaWxsPSIjNmY2ZjZmIiBzdHJva2U9IiNmZmYiIGQ9Ik0xMDggMTU1YzIyLTMgMzgtMjIgMzgtNDNoLTEzYzAgMTUtMTcgMjgtMzMgMjgtMTcgMC0zMy0xMy0zNC0yOEg1M2MwIDIxIDE3IDQwIDM4IDQzdjE5aDE3di0xOXoiLz48cGF0aCBmaWxsPSIjNmY2ZjZmIiBkPSJNNjggMTg2YzctNSAxOC02IDI1LTEybDExLTEgMjIgMTNINjh6Ii8+PHBhdGggZmlsbD0iIzZmNmY2ZiIgZD0ibTg3IDE4MCA4LThoMzJhOCA4IDAgMSAxIDAgMTZIOTVsLTgtOHoiLz48cGF0aCBmaWxsPSIjNmY2ZjZmIiBkPSJtMTEzIDE4MC04IDhINzNhOCA4IDAgMSAxIDAtMTZoMzJsOCA4eiIvPjxwYXRoIGZpbGw9IiM2ZjZmNmYiIGQ9Ik0xMDAgMTMxYy0xNyAwLTMyLTIzLTMyLTUxIDAtMjkgMTUtNTIgMzItNTJzMzEgMjMgMzEgNTJjMCAyOC0xNCA1MS0zMSA1MXoiIG9wYWNpdHk9InVuZGVmaW5lZCIvPjxwYXRoIGZpbGw9IiNlYzFjMjQiIGQ9Ik0xMjkgMTI4YzItMiAyLTUgMC02LTItMi00LTItNiAwYTMyIDMyIDAgMCAxLTQ3IDBjLTEtMi00LTItNSAwbC0yIDMgMiAzYzcgOCAxNyAxMyAyOSAxMyAxMSAwIDIyLTUgMjktMTN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWMxYzI0IiBzdHJva2Utd2lkdGg9IjEwIiBkPSJNMTAwIDEwM3YzMyIgb3BhY2l0eT0idW5kZWZpbmVkIi8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTEwLjUiIHI9IjE2IiBmaWxsPSIjZWMxYzI0Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWMxYzI0IiBzdHJva2Utd2lkdGg9IjEwIiBkPSJNMTAwIDExN3YzM00xMDAgODJ2MzMiIG9wYWNpdHk9InVuZGVmaW5lZCIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjExMC41IiByPSI1IiBmaWxsPSIjNmY2ZjZmIiBzdHJva2U9IiM2ZjZmNmYiIHN0cm9rZS13aWR0aD0iNSIvPjwvc3ZnPg==", Nc = (m, d) => /* @__PURE__ */ se.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.5 -0.5 125 125", ref: d, ...m }, /* @__PURE__ */ se.createElement("circle", { cx: 62.5, cy: 62.5, fill: "none", stroke: "#8d8d8d", strokeWidth: 10, r: 57.5 }), /* @__PURE__ */ se.createElement("circle", { cx: 42, cy: 50, fill: "#8d8d8d", r: 10 }), /* @__PURE__ */ se.createElement("circle", { cx: 82, cy: 50, fill: "#8d8d8d", r: 10 }), /* @__PURE__ */ se.createElement("path", { d: "M31 82v-7q31 29 62 0v7q-31 30-62 0z", fill: "#8d8d8d", stroke: "#8d8d8d", strokeWidth: 4, strokeMiterlimit: 10 }));
nr(Nc);
const jc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0wLjUgLTAuNSAxMjUgMTI1Ij48Y2lyY2xlIGN4PSI2Mi41IiBjeT0iNjIuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGQ4ZDhkIiBzdHJva2Utd2lkdGg9IjEwIiByPSI1Ny41Ii8+PGNpcmNsZSBjeD0iNDIiIGN5PSI1MCIgZmlsbD0iIzhkOGQ4ZCIgcj0iMTAiLz48Y2lyY2xlIGN4PSI4MiIgY3k9IjUwIiBmaWxsPSIjOGQ4ZDhkIiByPSIxMCIvPjxwYXRoIGQ9Ik0zMSA4MnYtN3EzMSAyOSA2MiAwdjdxLTMxIDMwLTYyIDB6IiBmaWxsPSIjOGQ4ZDhkIiBzdHJva2U9IiM4ZDhkOGQiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PC9zdmc+", Fc = (m, d) => /* @__PURE__ */ se.createElement("svg", { width: 200, height: 200, xmlns: "http://www.w3.org/2000/svg", ref: d, ...m }, /* @__PURE__ */ se.createElement("path", { d: "M115 64c9 10 14 22 14 35 0 14-5 26-14 36l14 14c28-27 28-72 0-99l-14 14zm25-26c34 34 34 89 0 122l15 15c41-42 41-110 0-151l-15 14zm-38 129-47-26 1-86 47-26-1 138zm-57-30H29c-10 0-17-17-17-38s7-39 17-39h16v77z", fill: "#fcec3c" }));
nr(Fc);
const zc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTE1IDY0YzkgMTAgMTQgMjIgMTQgMzUgMCAxNC01IDI2LTE0IDM2bDE0IDE0YzI4LTI3IDI4LTcyIDAtOTlsLTE0IDE0em0yNS0yNmMzNCAzNCAzNCA4OSAwIDEyMmwxNSAxNWM0MS00MiA0MS0xMTAgMC0xNTFsLTE1IDE0em0tMzggMTI5LTQ3LTI2IDEtODYgNDctMjYtMSAxMzh6bS01Ny0zMEgyOWMtMTAgMC0xNy0xNy0xNy0zOHM3LTM5IDE3LTM5aDE2djc3eiIgZmlsbD0iI2ZjZWMzYyIvPjwvc3ZnPg==", Hc = "data:audio/wav;base64,UklGRmaIAABXQVZFZm10IBAAAAABAAIAQB8AAAB9AAAEABAATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNjAuMTYuMTAwAGRhdGEgiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAA//////7/////////AAABAAAAAgABAAEAAQAAAAIAAQABAP//AAD+////AAD+//7////+////AAD//wAA/v8AAAAA/v8AAP//AAAAAAAAAgD////////+////AAABAAEAAgD/////AQABAAAA//8CAP//AAAAAAAA/v8AAAAA//8AAAEA//8EAAAAAAAAAAAA//8BAP//AQABAAEA/////wEA/v///wAAAAACAAAAAAABAAAA//8AAP//AAACAP//////////AAAAAAEAAAAAAAEA//8AAAEAAQADAAIAAgAAAAAA/v///wEAAAAAAAEAAAAAAAEA//8AAAEAAQD//wAA//8AAAEAAAABAAEAAAABAP//AAD//wAAAgAAAP//AQD/////AAAAAP7/AgAAAAIAAAAAAAAAAAABAAAAAQABAP//AAABAP///v8AAP////8AAP//AAD//wAA//8BAP//AAD///7///8BAP7///8AAAIAAgABAAEA/v8AAP//AQADAAEAAAACAAEA/////////v///wEA/v////7/AAD+////AAAAAAAAAgAAAAAAAAD//wEAAAAAAAAAAQABAAIA/v8AAAAA//8AAAEAAAAAAP//AgD//wEA/////wAAAQACAAAAAAAAAP//AQD/////AQAAAAEA/v8AAAEAAQABAAEA///+////AQD//wEAAgD+//7/AAAAAAAAAQAAAAAAAQAAAAAAAAAAAP//AAD//wEAAQD//wAAAQABAP7///8AAP7/AAABAP7/AQABAAEAAAABAAEAAAD+/wIAAAABAAAAAQD/////AQACAP////8AAP//AQD//wEA/v8CAAEAAAAAAAAAAQAAAAIAAQAAAAEAAgD//wEAAAAAAP7///8BAP//AgAAAP///v8CAAAAAgD///////////7/AAACAAEAAgD//wAAAAABAP//AwAAAAMA//8AAAAAAQD+/wAAAAD//wAAAQD//wEA//8BAP7/AAABAAAA//8BAAAA//8AAP//AQADAP3////+////AgD+/////v8BAAEAAQACAAAAAAAAAAAA//8AAP//AAD+/wEA/v8AAP7/AAD//wAAAQACAAAAAQAAAP//AQAAAAAAAAABAAAAAAD+//////8AAAAAAAD//wAAAAABAAEA//8AAAEA//8AAP//AgD+/wAA///+/wAA/v///wAAAQABAAAAAQD//wAA//8AAAEA//8BAAAAAgABAP//AAACAAIAAQABAP//AAAAAAAA//8BAAIAAAABAAAA//8CAAEA/v//////AAAAAAEA////////AQAAAP//AAD//wAAAAAAAP3/AAAAAAEAAAACAAAAAAAAAP//AAD//wAAAAAAAAAAAAAAAP///v///wAAAAABAAAAAAD//wEAAAABAAEAAQD//wAAAAACAAAAAQD+/wAA//8BAAEAAAD+/wAA/////wAAAAABAAAAAAD//////v8AAAAA//8AAAAAAAAAAAIAAAABAAEAAAABAP7/AAD9//////////7///8BAP//AAD///3/AQABAP//AAD//wAAAAABAAAA//8AAP//AAD/////AQABAAEA//8AAAAA//8BAAMA//8AAAAA//8AAP7/AAD//wAAAAAAAP7/AQAAAAAA/v8CAP//AAABAAIAAQABAAAA//8BAAEAAQD///7/AQD//wAAAQABAP//AAD//wEAAAAAAAAAAQAAAAIA//8AAP////8AAP//AQD//////v///wEA/v8AAAIAAgACAAEAAAAAAAEAAAAAAAAAAAAAAAAAAQD//wAA/////wAAAQACAP////8AAAAAAAD//wAAAQD+/wEA//8AAAEAAwD//wEAAQAAAAAAAAABAP////8AAAAAAQAAAAAAAAAAAAEAAQAAAP////////7/AQABAAEAAQD///////8BAAAA//8AAAAAAgABAAEA/v8BAP7///8BAP3/AQABAAIAAAD//wEAAAAAAP//AAABAAIA//8CAAAAAQAAAAEA//8BAAAA/////wAAAAD//wEAAQD//wAAAAAAAP//AAAAAAAAAQABAAAAAQAAAP//AQD//////v8AAAEAAAAAAAAA//8AAAAAAAACAAEAAQAAAP//AAABAAEA/////wAAAgABAAAAAAAAAAEAAAABAP//AQABAP7////+/wEAAAAAAP//AAABAAAAAAABAAEAAAAAAAAA//8BAP///f/+/wEAAQD///7///8AAAAAAQAAAP////8AAAAAAAABAAAAAQD/////AAD//wEA//8AAAIA//8CAAAA//8AAAAAAAD+/wEAAAD+/wAA/////wAA////////AAAAAAAA//8BAAAAAAD//wAAAAD//wEA//8AAP//AQD+/wAAAAAAAP7/AAD+/wEAAQABAP//AAABAAEAAQD//wAA/////wEA//8AAAAAAgAAAAAA//8BAAAAAgAAAAAAAAAAAP7/AQD//wAAAAD+/wAAAAADAAIA/////wAAAQD//wIA//8BAAEA/v8AAAIAAAAAAP3///8AAAAAAAAAAAAAAAABAP///////wAA//8AAAEAAQABAAEAAQABAAAAAQAAAAAAAQABAP7/AQD//wAAAQABAAEA//8BAAAAAgAAAAEAAAABAP//AAD/////AAD//wIA/////wIAAAD///7/AAAAAAAAAAACAP//AAABAP////8AAAAAAAABAAAAAgAAAAAAAQD+/wEA/////wAA/////wAAAAAAAAAA/v//////AAAAAP//AAABAAAAAQAAAAIAAAACAAAA//8AAAAA//8AAP7/AAAAAP//AAACAP//AQABAP//AQABAAAA/////////v8AAP//AQAAAAAA///+/wAAAQD+/wEAAQAAAAEA/////wAAAQD//wAA//8AAAAA/v8BAAEA//8AAP7//v8BAAAAAAAAAAEA//8AAAEA/////wAAAAD//////////wEAAAABAAEA//8CAAEA/f8AAAAA//8BAAAABAABAAEAAQAAAAAAAAAAAP7///8AAAAA/v8BAAAA//8AAAIA//8AAP////8BAP//AAAAAAAAAAD/////AQD///7/////////AQD8////AgABAAIA////////AAD//wAAAAABAAAAAAAAAAEAAgAAAP//AQD//wAAAAAAAP/////+/wAAAAABAAAAAwABAP///////wEAAAADAP//AQACAAAA//8CAAEAAAAAAP///////wIAAAAAAAAAAQAAAAAAAgD//wEAAAABAAAA/v8AAAAAAAAAAAAAAAAAAAEA/v8AAP//AQD//wAA//////7///8AAAAAAAAAAP7/AQD//wAA//8AAAEAAAABAAEAAQD/////AAD//wEAAAD/////AQAAAAEAAAD//wEAAAD/////AgD//wAAAQD//////////wAAAAD//wAAAAABAAAAAAD//wAAAQD///7/AQD//wEAAAD/////AAD//wEA//8AAAEA//8CAAAAAQD//wEAAgAAAAEAAwAAAAAA/v8BAAEAAgD//wEAAAAAAAAAAAD//wEA//8AAAAAAQACAP///////wAAAQABAAEAAAAAAAEAAQD+/wEA/f////////8AAAAA//8AAAEA//8BAAAA/v///wEAAAAAAAEA/////wAAAAAAAP//AAAAAAIAAAABAAAA/////wAAAAD//wAA/v8AAAMAAQD+/wEAAAABAAEA//8BAP//AgAAAAAAAAD//wAA/////wEA/v8CAP3/AAACAP3/AQABAAAAAQACAAEA/v8AAAAA//8BAAAAAgAAAAAAAgACAAEA/v/9/wAAAQABAP7///8AAP//AgD+/////v8CAP////8BAP//AQACAAEAAQABAP//AAD///7/AAABAAEAAgD//wEA//8CAAEAAQABAAEAAAABAAAA/v8AAAEA/v8AAP//AAABAP//AQAAAAEAAgAAAAAA/v///wEAAQAAAAIAAAD/////AgAAAAEA/v8AAP7/AQAAAAAAAQAAAAEAAAACAAEA//8BAP////8AAAIAAAAAAP//AAAAAAIAAAAAAAAAAwABAP///v8BAAAAAAAAAP3/AAABAAEA/v////////////3//v8AAAAAAQABAAIAAAD+/////v8AAAAAAQABAAEAAQAAAP//AAAAAP//AQAAAP//AAABAAAAAAAAAAAA////////AAAAAP//AQD/////AAABAAEA//8CAP7///8AAP7//v8BAAEAAAD+/////////wEAAAAAAAAAAgD//wAAAQAAAP7/AQABAP//AQAAAAAAAAD/////AAACAP////8BAAAAAAD//wAA//8AAAEAAQABAAAAAAABAAAAAQD+/wEA/v8AAAEAAQD/////AAD//wAAAQABAP7//v//////AAACAAAAAAAAAAAAAAACAAAAAQAAAAAA//8BAP//AQD//wAA///+/wIAAQD//wAAAAD//wAA/v8AAP3///8AAAAAAAAAAAAA/f8AAAAA//8CAP7/AAD///7/AAAAAAAAAAD//wEAAAAAAAEAAAAAAAAA//8BAP////8BAP7///8CAAEA//8BAP3///////////8BAAAAAAAAAAEAAgD+//////8BAAMAAQADAAEAAAACAAAAAQD/////AAABAAMAAQAAAP//AQD//wAA//8AAAAA//8CAP7//////wAAAAAAAAIA/v8AAP//AAACAP//AwD//wAA//8AAP//AwD//wEAAQABAAEAAQACAAEAAAD//wAA//8AAAIAAAAAAP///////wAAAQD//wIA//8BAP7/AAD///////8AAAAAAAAAAAEAAAD//wAAAQD//wEA//8BAAAAAAD/////AgABAAIAAAABAAAAAAAAAP//AAAAAAAA//8AAAAAAAD/////AQAAAAAAAQD//wAA///+////AAAAAAEAAgABAAEAAAAAAP//AQAAAAAAAQD+/wAAAAABAAEAAAD/////AQABAP7///8AAAIAAAACAAAA//8AAP//AgACAAAA///+/wAAAAABAAAAAQAAAAEA/v8BAAEA//8CAP//AQD+/////v8AAAAAAAACAP//AAD+/wIA/v8BAAAAAAD/////AAAAAP7///8AAP7//////wEAAAABAAAAAAD//wAAAAAAAAAAAgACAAAAAAABAAAA/f8AAP7/AgAAAAEA//8BAAAAAAD///7/AQD//wAAAAAAAAEAAAAAAAEAAAAAAAAAAQAAAAAA//8AAAAAAAABAP///////wAAAgABAAEA//8AAP//AAACAP//AQABAAEA//8BAAAAAAABAAAA//8AAAEAAAAAAAIA/v8BAP//AQD//wEAAAABAAEAAQACAAEAAAAAAAEAAAABAAAAAAD/////AAABAAEA//8AAAAAAQABAP//AAAAAP//AAD/////AQD//wAAAAABAAEA//8BAAAA//8AAP///f/+/wAA/////wAAAQAAAAIAAAAAAAAAAAD+/wEA/f8CAAAA//8AAAEAAgAAAAMAAAABAAAAAAAAAP//AQAAAAAAAQABAAAAAQAAAP//AAAAAAAA//8AAAAAAAABAAAAAQAAAAAAAAABAAIAAAAAAP7/AQD//wAAAAD+////AAAAAAAAAAABAAAA/////wAA//8AAAAAAAD/////AgD//wAA//8CAP//AQACAAEA/f////////8BAAIAAQABAP//AAD//wAA///+////AAD+/wAAAQD/////AAAAAAAA/////wAAAAABAAAAAQAAAAAA//8AAAIAAAABAP//AQABAAEA//8AAAAAAAADAAEAAAABAP//AgD//wMA//8AAAAAAAD//wAAAAD9/wEA///+/wAA//8BAAEA//8BAAAA//8AAP///v8BAP///////////v8BAAAAAQABAAAAAAAAAAAA//8AAP7/AQAAAAAAAAAAAP7/AQAAAAAAAgABAAEAAAABAAEAAAAAAAAAAAD+/wAAAAD//wEAAAAAAAAAAAAAAP//AgABAAAAAAABAAEAAAD/////AAAAAP//AAABAP////8BAAAAAQABAP7//v/+////AQAAAAAAAQAAAAEAAgAAAAAAAQAAAAEAAAD+/////v8BAP//AAABAP//AQABAAAAAAD//wAA//8CAP//AAAAAAEAAAABAAAAAAAAAP//AAD+////AwAAAAAAAQD//wEAAAACAAEAAAADAAAAAAD/////AAAAAAEAAAABAAAA//8AAAEA//8BAP///v8AAP//AAD//wAAAQABAP//AQAAAAAA/////wEAAQAAAP////8AAAEA//8BAAAAAQAAAP////8AAAAAAQAAAAIAAQAAAAEAAAAAAAEAAAD//wEAAAAAAP////8AAAAA//8BAAEAAAAAAAIA///+/wIA/v8BAAAAAQACAAAAAQAAAP7///8AAP//AAAAAAEAAAAAAP7/AAD+////AAAAAAAAAAD//wAA/v8BAAMAAAABAAIAAgD//wAA//8BAAEA//8BAP7/AAAAAP7///8BAAAAAQAAAP7/AQD/////AAAAAAEAAAABAP//AQABAAAAAgABAAAAAAAAAP///////wEA//8AAAEA//8AAAAAAQAAAAIAAAABAP7//////wAAAQABAAAAAAABAAEA///+/wAA//8BAP///v8AAP///v8BAAAA//8CAAAAAQAAAAEAAQABAAAAAAD+/wAAAAD+/wAAAAAAAAAA/f////////8AAAAAAQABAP///////wEA//8BAAEAAAAAAAAA/////wEA/v//////AAAAAP//AAABAAAAAAD+/wAAAAD9////AQAAAAEAAwD//wEAAQAAAP//AgAAAAAAAAD+/wIAAAAAAAAAAAAAAAIA//8AAAEAAQACAAAAAQD//wAAAAD//wIAAQABAAAAAAD//wEA//8BAAEAAQAAAAAAAQABAP7/AAD//wEAAAACAP7/AQAAAAAAAAD//wIAAQACAAIAAQAAAAAAAAAAAP3///8BAAAAAQACAP//AgD9/wAAAAD//wEA/v////////8AAAAAAAD//wEAAQD//wMAAQAAAAEA//8AAAEA//8AAAAAAAACAAAAAAD//wAAAQD///////8AAAAA//8BAAIA/v8BAAEA/f8AAAAAAAAAAAAAAgD/////AAD+/wAAAAD//wAAAAAAAP//////////AgABAP///v8AAAIAAQAAAP//AAABAAAA/////wAAAAAAAAEAAAABAP///v///wIA//8BAAEAAQAAAAAA///+/wEAAAAAAAAA/////////v8BAP3/AAAAAAAAAAAAAAAA//8AAP//AAAAAP//AAABAAIAAAACAP////8DAAAAAAABAAAAAwABAP//AAABAP//AAAAAP////8BAAAAAgD//wAA///+/wAAAQD//wAA//8AAP7///8AAAAA/v8AAAAAAQD//wEA/v////////8AAAAAAQAAAP//AQACAAAAAAAAAP//AAD//wAAAAD//wAAAAD+/wAAAAAAAP//AQD//wAAAgAAAAAAAQABAAAAAwD+/wAAAAD///7/AQD//wIAAQAAAP//AAD//wAA//8CAAEAAAAAAAAA/////wAAAAD//wEAAQD///////8BAAAA//8BAAEAAAAAAAAA/v///wEAAAAAAAAAAAADAAAAAAAAAAAAAQABAAEAAAD+//7//v8AAP//AQAAAAAAAAABAAEAAgAAAAAAAQD//wAA/f8AAAAAAAABAAAAAQAAAAAAAAAAAAIA//8BAP///////wIA/////wAAAAABAAEA//8BAAAAAAD//wAAAQD//wEAAAAAAAIA/v8BAP//AAAAAAEAAAABAP//AAAAAAAAAQABAP7/AAABAAAAAQD//wIAAAAAAAEA///+/wAA//8AAP//AAAAAAAAAAABAP///////wIAAQAAAAEAAQAAAP7/AQAAAAAAAQAAAAAAAQD/////AQAAAAAA///+//7/AAD+/wEA//8AAAAA///+/wEAAAABAAIAAQABAAAA//8AAP//AAD//wAAAAD//wAAAAAAAP//AQAAAAAA////////AQAAAAAAAQD+////AQABAP7/AAD///7/AgD//wAAAAAAAP//AAAAAAEA//8BAAEAAgAAAAIAAAD//wEA/////wAAAQD///7/AQD//wEAAQD/////AAAAAAEAAgAAAAAAAQD//wEA//8AAP7//////wAA//8BAAEA//8BAAAAAQD/////AAABAP//AAACAP//AQAAAP//AAABAP////8AAAAAAAABAAEAAwABAAAAAgD//wAAAAD//wEAAAABAAAAAAABAAEA/////wAA//8AAAIAAAAAAAEAAQABAAEAAQABAP//AgAAAAAA//8BAP3//v///wAA//8AAAAAAQAAAP//AQD//wEAAAACAAIAAAABAAAA//8BAAEA//8BAP//AAAAAP//AQAAAAIAAAD//wAAAAAAAAEA////////AQAAAP//AQD//wAAAQD+/wEAAAABAP///v///wAAAAAAAP//AAAAAAIAAQD//wAAAgD+/wAAAAD//wAAAAABAP///P//////AAACAP////8AAAIAAAABAAAAAAAAAAAA//8AAAAAAQADAP//AQAAAAAAAAABAAEAAQAAAAAA/v8AAAAAAAD//wAAAQD//wAAAAD//wAA/v////////8CAAEA/v8BAP7/AAAAAAAA//8AAAEAAAD//wIAAQAAAAIAAQAAAAAAAAD///7/AQABAP//AAAAAP//AAACAAEA//8BAAAAAwAAAAAAAAD//wEAAAD//wAA///////////+/wAAAQABAAIAAAABAAEAAAD//wEAAAD/////AAD+/wIAAwABAAEA/v8BAAEAAAD//wAA//8AAP//AAAAAAEAAAAAAP//AAAAAAEAAQABAAEA/v///wAAAAD//wEAAAACAAAA/f/+/wAA/v///wAA//8AAAEAAQD///7/AAAAAAAAAAABAAAAAAACAAAAAAABAAAAAAABAP//AQD//wAA//8BAP7/AgABAAEAAQAAAAAAAQD//wEA/v8AAP////8AAP///////wIAAQD//wAAAAD//wAA/v///wAAAQD//wIA/////wEAAAAAAAIAAAABAAAAAAD//wEA//8AAAAA/////wAAAQAAAAAAAAD//wEAAQAAAAAAAAACAP///////wAAAgD//wAA/v8AAAIAAAAAAAEAAAABAP//AQABAAEAAQAAAP///v8BAAEAAAAAAP////8AAAAAAQD//wIAAQAAAAEAAAAAAAAA//8BAP//AAAAAP7//v///wEAAAAAAAIAAAAAAP//AAD//wEA//8BAAAAAAABAAEAAAABAP7///8AAAIAAAABAP//AAD//wEAAAAAAP//AAAAAAEAAAAAAAAAAAAAAP7/AQD//wAAAQD+/wEA/v8BAP7/AAABAAEAAAACAAIAAAADAAAA//8AAAEAAAABAP//AQD//wIA/////wEA//8AAAEA//8AAAEAAAAAAAAAAQABAAAAAAAAAAAAAAD//////////wAA//8AAP7/AAD+/wAAAQAAAAAA/////wAABAAAAAAA//8AAAEAAAAAAAAA/v8AAP//AAAAAAAAAAD//wAAAAD///////8BAAEAAAD/////AgABAAEA/v/+/wAAAQACAAEAAAD//wAAAwABAP//AgD+/wAA/v8AAAAAAAAAAAEA//8AAAEAAAD+/wEAAAAAAAEAAgAAAAEAAAABAP//AQD+/wIA/////wAAAQD//wAAAQD+/wAAAQABAAAA////////AAACAAAAAQAAAAIA//8BAP///v///wEA//8BAAEAAQD+/wAAAQD9/wAAAQAAAAEAAAABAAAAAgAAAP//AAD+/wAA/f8AAAAA////////AgAAAAcAAQD7/wEA/f8AAAIA//8GAP7//v/+//b/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+P/F//z/rv/i/7r/6v/Z/wYABwAoADAAKQBOABkATAD0/zQA1P8PANv/0//v/6//FwCi/ywAxP8oAPn//v82APT/WwD4/00A+/8yAPv//f/8/83/+v+w/+T/sf/j/9b/AQACACoAIgAtAEIAHwBPAAEAQADe/xcA0v/k/+X/t/8IAKv/IgC//yEA6/8EACMA9/9PAPf/VAD+/zcA+/8JAPn/1P8AALf/6f+w/+P/zf////j/HAAdAC0APgAfAEsABwBCAOP/IADV/+//2v/B//3/rP8PALv/GADd/xEAFgABAEMABABaAP//QgACABcA+//n/wAAwP/w/67/4v+///3/6f8WABcAKQA0ACIARgAQAEcA8f8pANn/9f/U/87/7f+v/wgAtP8RANP/FgANAAIAOQACAFQA/f9HAAAAIAABAO3//P/E/wEAs//q/7n/9P/i/wYAEQAZADEAJABBABMASAAAADEA3/8CANL/1v/g/7H/AACy/w8Axf8ZAPv/CQAzAAIAVQD//1AAAAAsAAIA9v/7/8r/AwC2//P/tf/m/+H/AwADABEAKQApADoAHgBHAAgAPADr/wkA1//f/93/vP/6/7L/CgDA/x4A7/8hACkAAgBPAPz/UgD1/zIABAAEAPz/0v/5/7f/AACy//H/2f/+/wEAAAAkABUAMwAdADoAEQA9APD/EADU//L/1P/H/+z/tf8LALv/HADk/ygAGgADAEMA//9TAPn/QAAAABAAAQDc//z/wf8DALD/7P/Q//z/9/8HABoAFgA3ACMAMAAOADwA+P8ZANv/+P/Y/9H/5v+8/wUAu/8WANf/HgAMAAoAPQABAFMA/f9HAP7/HwAEAN//+v/H/wMAs//2/8r/8//y/wMADgAQAC4AIwAyABMAJwD8/xcA3v8LANP/5v/f/8j/AgC4/w4A1P8eAAQACgAxAAEAUgD+/0gA/v8nAAIA8f/5/8r/BAC6/+3/wP/l/+b/AQAIABkAIwArAC4AIAAoAAkAGADj/w0A0f/r/9//0P8DAL3/CgDN/xkA//8IACUAAgBJAAAATwD+/ysAAQD7//3/z/8DAMT/+f/K/+L/5P/1////EgAcACYALgApAC4ACwAcAPL/EADZ//L/1f/U//f/uv8KAMX/DwDu/wcAHwADAEUABgBNAAEANQAAAAYAAQDf////xf/+/9P/4f/b//X/9v8LAA4AGAAlACoAMAAQABkA9v8TAOL/+f/W/9r/8f/I/wcAxP8MAOr/BwATAAQAOAAGAEcAAABCAAEADwAEAOP//v/F/wIAzf/o/93/8P/s/w4ACwAZACEAKgAyABMAIQD5/xgA6v8DANb/4P/y/9H/AQDJ/wkA4/8DAAoA/f8wAAQAQwABAEAA//8VAAIA7P/+/8r/BADP/+v/2v/s/+n/CwAIAA0AHAAjADQAHAAkAP//GQDy/wQA5v/i//b/0P/7/8f/AADh/wMAAAD+/yUAAAA7AAEAOAAAABwAAAD6/wAA1/8CAMr/AADb/+3/5f8BAAIACAAVABcALwAfACgA+/8XAPn/DgDe/+//7v/Q/wMAz/8JAOP/CwDx////EAAHADEAAQArAAIAHQAEAAcAAADr/wEAzv8CANj//f/k/wEA+f/+/xQABwAqAB4ALAD+/x4A8P8SAOb/8//f/9j//f/N/wEA3v8LAO7/AgAMAAQALAAEAC0AAQAdAAQADwABAPP/BADV/wMA0/8AAOH/AQD1/wAAEAADACQAGwAwAAQAHwD0/xUA8f/4/+L/2//7/8z/AwDc/woA6f8AAAQAAwAoAAcANAAAACcAAgAUAAEA+P8CANv/AgDR/wEA4v8BAOz/AgAIAPv/JAAVADMAFAAhAPP/GQDz//7/3P/l/+3/z/8BANf/CgDn/wkA/P///xoABwAwAAIAJwACABcAAwABAAIA4f8BAND/AgDd//3/6P8CAAYA/f8YAAwALwAZACUA9v8bAPj/AwDq/+r/7P/S//7/1/8EAOX/CQD6//7/GQAFAC8AAQApAAEAGQACAAMAAgDm/wEAzv8BANv//v/p/wIA//8BABMABQArACAALAABAB4A8f8NAOv/7v/m/9n/+P/R/wMA4f8OAPT/AQATAAMAKwAHACoAAwAbAAMABQADAO7/AQDU/wEA2f8AAOL////3////EgAAACUAGgAvAAUAHQD2/xIA9f/0//T/3P/4/8///f/h/wIA7f8AAAoAAQApAAQALQADACAAAgAPAP//9P///9r//f/T/wAA3f/9//D/AQAQAP//HAAHAC8ACQAfAPv/GAD+//f/+P/j/wEA0v/+/9n/AADq/wIABgD//x0AAQAuAAEAIwAAABQAAwD8/wEA3/8AAM//AADe////7f8BAAwA//8ZAAMALwAAACEA//8dAP3//v/9/+n////U//z/1v8BAOT/AAD+/wAAGwD+/ywA/v8kAAIAGAD///3////q/wEA0P///97/AADk/wAABAAAABUAAQAqAAEAKQAAABwAAAAFAP//6f8AANr////X/wAA4/8AAPj/AgAUAAAAKgD//ywAAAAcAP7/AQAAAOv/AADU/wAA2v8CAOP/AAABAAAAFgABABsAAAAqAAEAHwAAABQAAgDv/wEA3v///9H////f////7/8BAAoAAQApAAAALgD//yEAAQAIAAAA8P8BANr//v/V////4f8AAPf//v8UAAAAFAAAACYAAQAhAP7/GwD+//T/AADo/wIA1v8CANr/AgDp/wEABgAAAB8AAQAsAAEAJAAAAAwA///z/wEA3/8AANT/AADh/wEA9P///xQAAgASAAAAJQAAACEAAAAaAP//+v8BAOj////W////2P8BAOf///8DAAAAHwAAAC4AAAAlAAAAEgAAAPL/AQDm////0f8CAN3/AADr//7/EQD//xAAAQAhAAIAJQAAAB8AAAABAP//6v8CAN//AQDX/wAA4/8AAPr/AAAXAAAAKgABACgAAAAbAP///f8AAOj/AADU/wAA2v///+f/AQANAAMAEQD+/xwA/v8kAP7/IQABAAgA/v/p////5/8AANf/AQDd/wEA8v8BABMAAQAjAAAALgAAACAAAQADAAEA7f8BANn/AgDY//7/4P/+/wEAAAAXAAIAFAAFACUA/P8jAP//EgAAAO//AQDo////1/8AAN3/AADx//7/DgAAAB0AAQAoAAAAIwAAAAoAAQDv/wMA4f8AANn/AQDi/wEA+v///xgAAAAQAP3/IwD//yUA/v8XAAAA7/8AAOv/AADc/wAA3P/+/+v/AQALAAEAGgACACkAAAAkAP7/EAABAO/////q//7/1/8AANz/AgDw/wEAEgD//w8AAAAcAAIAJQAAAB0AAAD2////7P8AAOP/AgDa/wAA5P8BAAQAAQAWAAAAIgAAACMAAAAaAP//+P///+v/AQDZ/wAA2////+7/AAARAAAADgAAABYAAAAhAAAAIAABAPz/AQDt/wAA5P8AANr/AQDg/wEA/P8BABcAAAAhAP//KQD//xwAAAD8/wEA7v8AAN3////Z/wAA6f8BAA0AAAARAAEAEQAAACMAAAAgAAEA/f8CAO3/AADv/wAA3v8BANv////1////EgAAABkA//8nAAAAIgAAAAMAAADu/wAA6P8CANn/AQDg////BQD//xMAAQAOAP//IAABACYAAAAGAAAA6f////H/AADg/wEA2f8AAO3///8PAAAAFQACACQAAAAkAAEADQABAO//AADp/wAA2////9z/AQD7/wEAFgAAAAwAAQAXAP7/JQD9/xMAAADx/wAA8f8AAOr/AADc/wEA4/8BAAkAAAAVAAAAIQD//yYA//8UAAEA9P8BAOz/AADf/wAA3P8AAPP/AAAQAAAADQABAA0AAAAlAAEAGAD///H//v/0/wEA7v8CAN//AADg//3/BAACABUAAQAfAAAAJwABABgAAQD0//7/7f///+L/AADa/wIA8P///w4A//8SAAMACQAAACAAAQAgAP//+v////P////y/wEA4/8BANr/AQD9/wAAEwD//xkAAQAjAAAAIgABAPz////s/wAA6v8BANX/AQDr//7/BwABABMAAAAHAP//FwAAACYAAAD//wEA9P8BAPb/AQDu////2v8BAPn/AAATAP//FwD//yEAAAAjAAAAAgAAAOn/AQDr//7/2P8CAOT/AAABAP//FgABAAUAAQATAP//IwAAAAEAAgDy/wEA9/8AAPb/AADb/wAA6/8BABAAAAATAP7/IQAAACYA//8UAP//7/8AAPD/AADd/wEA3P/+//7///8OAAAACgAAAAgAAAAhAP//CQACAPT/AQD2/wAA9v///97////m/wIADgABABMAAQAfAP//JwAAABMAAADw/wAA8P///+r/AQDb/wAA9f8AAA8AAAARAAIABAD//wYA/v8HAAAAAQD//wMAAgAGAAAA7f8AAOz/AAALAP//DwACABQA//8bAAAAHgD///f/AADq/wEA6/8BANj//v/t/wAACAD+/xAAAgAEAAAABAABAAcAAQADAAAA//8AAAUA///1/wAA5f///wIAAAAOAAAAEAAAABsAAAAhAAAA/v8BAOj////y////3f8AAOf/AQAGAAEADAAAAAcA//8BAP//CQABAAMA//8BAP//BQAAAAAAAADo/wAA+/8AAAoAAAALAAAAFAAAACAAAQAGAAIA7f8BAPH/AADm/wMA3P8CAP7/AgASAP//CgD//wAAAAAIAP//BQD//wEAAAACAP7/BAAAAPz/AwD8////BAAAAAEA//8HAAAAHQAAAAgA/v/x//7/8f///+f/AQDg/////P///woAAAAMAP//AAABAAYA//8EAAAAAgAAAAUAAAACAAAAAwAAAAIAAAABAAAAAQABAAAAAgAcAP//DgD///T/AQDx/wAA9P8CAOH/AAD3/wAACQAAAAoAAQABAP//AwAAAAcAAAD+/wAAAgACAAEAAAD+////AwD+/wAAAAABAP//+v8BABEAAQATAAAA9f/+//L//f/z/wIA6f8AAPb/AQAFAP//DAAAAAAAAAAFAP//BQD//wEA//8DAAEAAQAAAP7///8AAAAA//8BAAIAAAD+/wAAEAABABYAAgD6/wEA8v8BAPX/AwDp/wAA8////wMA//8JAAEABAABAAEA//8FAAEA//8AAAMAAQACAP//AQAAAAEAAgAFAP//AQABAAAAAQAAAP//EQABAAAAAAD5/wEA+P8AAPr////6/wAA+/8BAAIA//8BAAAA//8CAAUA//8BAP7/AAABAAEAAgAAAAAAAwAAAAEA/v8DAAIAAAACAAQA//8TAAAA/P8BAPr////3//////8AAPz/AQD7/wEAAgD/////AAABAAEABAAAAP//////////AAAAAAAAAAADAAAAAwAAAAAA//8EAP///v/+/xAA//8HAAAA+/////j/AQD8////AAD///n///8AAAAA//8AAP////8DAP//AgAAAAAAAAACAAIAAAD+/wAAAQD//wAA/////wIAAgD9////CQACAAYA///9////+f8BAPr/AQAAAAIA/v///wAA//8AAAAAAAAAAAEAAAABAAAAAgAAAAEAAAAAAAEAAQABAAAAAgABAP//AAD//wEAAAD///////8BAAIAAQAAAAAA/v/+//////8BAAAAAQABAP//AAD///////8BAAAAAQABAP////8CAAEAAQD//wEA/v//////AQAAAAAAAAAAAAAAAAD9/wMA/////wAAAQD+/wEA/v/+//7/AQD//wMAAAAAAAAAAAABAAEA//////7/AAACAP3/AAD//wAAAQAAAP//AQD//wAAAAAAAAEA//8CAP//AAAAAAAA/v8AAAAA//8BAP//AAABAP//AAAAAP//AQD//wAAAQABAAAAAAABAAEA/v///wAAAAD//////////wAAAAAAAP//AAD////////8/wIAAAADAAEA/////wEA/v8BAP7/AgAAAAEAAgAAAP//AgD/////AQD//wEA//////7/AQD//wMAAAAAAAAA//8CAP//AQAAAP//AAACAAAAAAABAP//AQD+/wAA/////wAA/f///wAAAAAAAP7/AAAAAAAAAgD//wEAAQACAP//AAAAAAEAAQD//wAAAAAAAAAA//8BAAMA/v8AAP7/AQAAAAAAAQAAAAAA///+//7/AAAAAAAA//8BAP7/AQAAAP//AQABAAAAAQAAAP//AAD//wIA/v///wAAAQABAP//AAD//wEA//8BAP//AgAAAP///////wAAAQABAP//AwABAAAAAAAAAAAA/////wIAAwACAAAA/v8BAAAAAAAAAAAA//8AAP////8AAAAA/////wAA/////wEA/v8CAAEAAQD//wAAAAABAAAAAAD//wEAAQABAAAA//8CAAAAAAAAAP7/AAABAAAAAQABAAAAAgABAAAAAQD//wEAAwD+/wAA/v8AAAEAAAAAAAAAAAAAAAEAAAD//wMA/v///wAAAAACAAEAAAAAAP7///8DAAEAAQD//wEA/f8BAAEAAQD//wEAAQABAAMAAgAAAAEA//8AAP//BAAAAAIA/v//////AQABAAAAAAD//wEAAAACAAIAAQAAAAAAAgAAAAAAAAABAAIAAAABAAIAAQAAAP////8AAAAAAAD//wAAAQACAP//AAAAAAAAAQAAAAEA//8AAAAAAAD/////AQD//wAAAQD9////AQAAAAAA//8BAAAA///+/////v8BAAAAAQAAAAAAAAAAAAIA//8BAAAAAAACAP//AQD//wAAAAD/////AAD9/wAAAAACAAAAAgAAAAEAAQABAAEAAAAAAAEA//8AAAEAAQACAAAAAQAAAAEA//8BAAIAAAACAP//AAABAAAAAAAAAAAAAAD//wAAAQD/////AAAAAP////8AAAEAAAAAAP7///8BAAIAAQD//wEAAQAAAP//AgAAAAAAAAD//wAA//8CAP7/AQAAAP7/AAD+////AAAAAAAAAQABAAAA//8AAAEAAAABAP7/AAAAAP7/AAD+/wAAAQABAAEA/////////v8BAP///v///wIAAAAAAAAAAQAAAAIAAQAAAAAAAAABAAEAAAAAAAAAAAD//wEAAQD//wAAAQABAAAA/v/+/////////wAAAAD//wAAAAD/////AAAAAP7/AAD//wIA//8CAP//AQAAAP////8AAAAAAQABAP////8AAP//AQACAAAAAQAAAAAAAAAAAAAA//8BAAAAAAD+/wAA/v///wEAAAD+//7///8CAP7/AAABAP3/AwAAAAAAAAABAAIAAAABAAAAAQABAAIAAAAAAP//AAAAAAEAAAACAAEAAAACAAAAAAABAAAAAwAAAAAAAAD+/wAAAQD9//////8BAAAA/v8AAAAAAAAAAAAAAAD//wMA/v8BAAEAAQACAAAA/v8BAP//AwABAAIAAQABAP//AQAAAAEAAAAAAAEA//8AAAAAAAD/////AAABAAEAAAAAAP////8AAAAAAAAAAAAA/v8AAP//AQAAAP//AAABAAIAAQAAAAAAAgABAAAA/////wAAAQABAP//AQABAAEA/////wAAAAAAAAAAAAABAAEAAQAAAAAAAAAAAAAA//8AAP7/AQD9/wAAAgD//wEAAQABAAEA/v8AAAEA/////wAAAAAAAP//AAABAAAAAAAAAAAA//8CAP//AAABAAEAAQABAAAA//8BAAIAAgD//wAA/v8AAAEAAAD///7/AAAAAAEAAAABAAAAAQABAAAAAQACAAAA///+/wAAAQABAP7////+/wAA//8AAAAAAgAAAP//AQD9/wAAAAD//wAA//8AAAAAAQAAAAAAAQD//wAAAAAAAP//AQABAAAA/v8CAP//AAD///////8AAAAAAAACAAEA//8BAP7/AAAAAAEA//8BAAAAAQD//wAAAQD+/wAA/////wAAAAD//wAAAQABAAAA//8AAAEA/////wAA//8AAAAA/v/+/wEAAgABAP//AgD//wIA/////wAA//8AAAEAAQAAAAAAAQAAAAMAAAACAP//", Uc = {
  // tracks state of chat window, also the default state to load it in
  isOpen: !1,
  // configurations
  general: {
    primaryColor: "#42b0c5",
    secondaryColor: "#491d8d",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    showHeader: !0,
    showFooter: !0,
    showInputRow: !0,
    actionDisabledIcon: Sc,
    embedded: !1,
    desktopEnabled: !0,
    mobileEnabled: !0,
    flowStartTrigger: "ON_LOAD"
  },
  tooltip: {
    mode: "CLOSE",
    text: "Talk to me! 😊"
  },
  chatButton: {
    icon: Js
  },
  header: {
    title: /* @__PURE__ */ U.jsx("div", { style: { cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold" }, onClick: () => window.open("https://github.com/tjtanjin/"), children: "Tan Jin" }),
    showAvatar: !0,
    avatar: Xs,
    buttons: [mt.NOTIFICATION_BUTTON, mt.AUDIO_BUTTON, mt.CLOSE_CHAT_BUTTON],
    closeChatIcon: kc
  },
  notification: {
    disabled: !1,
    defaultToggledOn: !0,
    volume: 0.2,
    icon: Pc,
    sound: Hc,
    showCount: !0
  },
  audio: {
    disabled: !0,
    defaultToggledOn: !1,
    language: "en-US",
    voiceNames: ["Microsoft David - English (United States)", "Alex (English - United States)"],
    rate: 1,
    volume: 1,
    icon: zc
  },
  chatHistory: {
    disabled: !1,
    maxEntries: 30,
    storageKey: "rcb-history",
    viewChatHistoryButtonText: "Load Chat History ⟳",
    chatHistoryLineBreakText: "----- Previous Chat History -----",
    autoLoad: !1
  },
  chatInput: {
    disabled: !1,
    allowNewline: !1,
    enabledPlaceholderText: "Type your message...",
    disabledPlaceholderText: "",
    showCharacterCount: !1,
    characterLimit: -1,
    botDelay: 1e3,
    sendButtonIcon: Qc,
    blockSpam: !0,
    sendOptionOutput: !0,
    sendCheckboxOutput: !0,
    buttons: [mt.VOICE_MESSAGE_BUTTON, mt.SEND_MESSAGE_BUTTON]
  },
  chatWindow: {
    showScrollbar: !1,
    autoJumpToBottom: !1,
    showMessagePrompt: !0,
    messagePromptText: "New Messages ↓",
    messagePromptOffset: 30
  },
  sensitiveInput: {
    maskInTextArea: !0,
    maskInUserBubble: !0,
    asterisksCount: 10,
    hideInUserBubble: !1
  },
  userBubble: {
    animate: !0,
    showAvatar: !1,
    avatar: Cc,
    simStream: !1,
    streamSpeed: 30,
    dangerouslySetInnerHtml: !1
  },
  botBubble: {
    animate: !0,
    showAvatar: !1,
    avatar: Xs,
    simStream: !1,
    streamSpeed: 30,
    dangerouslySetInnerHtml: !1
  },
  voice: {
    disabled: !0,
    defaultToggledOn: !1,
    language: "en-US",
    timeoutPeriod: 1e4,
    autoSendDisabled: !1,
    autoSendPeriod: 1e3,
    sendAsAudio: !1,
    icon: Oc
  },
  footer: {
    text: /* @__PURE__ */ U.jsxs(
      "div",
      {
        style: { cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", columnGap: 3 },
        onClick: () => window.open("https://react-chatbotify.com"),
        children: [
          /* @__PURE__ */ U.jsx("span", { children: "Powered By " }, 0),
          /* @__PURE__ */ U.jsx("img", { style: {
            borderRadius: "50%",
            width: 14,
            height: 14,
            backgroundImage: `url(${Js}),
					linear-gradient(to right, #42b0c5, #491d8d)`
          } }, 1),
          /* @__PURE__ */ U.jsx("span", { style: { fontWeight: "bold" }, children: " React ChatBotify" }, 2)
        ]
      }
    ),
    buttons: [mt.FILE_ATTACHMENT_BUTTON, mt.EMOJI_PICKER_BUTTON]
  },
  fileAttachment: {
    disabled: !1,
    multiple: !0,
    accept: ".png",
    icon: Tc,
    sendFileName: !0,
    showMediaDisplay: !1
  },
  emoji: {
    disabled: !1,
    icon: jc,
    list: ["😀", "😃", "😄", "😅", "😊", "😌", "😇", "🙃", "🤣", "😍", "🥰", "🥳", "🎉", "🎈", "🚀", "⭐️"]
  },
  advance: {
    useAdvancedMessages: !1,
    useAdvancedSettings: !1,
    useAdvancedPaths: !1,
    useAdvancedStyles: !1
  }
}, Wc = {
  // styles
  tooltipStyle: {},
  notificationBadgeStyle: {},
  chatWindowStyle: {},
  headerStyle: {},
  bodyStyle: {},
  chatInputContainerStyle: {},
  chatInputAreaStyle: {},
  chatInputAreaFocusedStyle: {},
  chatInputAreaDisabledStyle: {},
  userBubbleStyle: {},
  botBubbleStyle: {},
  botOptionStyle: {},
  botOptionHoveredStyle: {},
  botCheckboxRowStyle: {},
  botCheckboxNextStyle: {},
  botCheckMarkStyle: {},
  botCheckMarkSelectedStyle: {},
  characterLimitStyle: {},
  characterLimitReachedStyle: {},
  chatHistoryLineBreakStyle: {},
  chatMessagePromptStyle: {},
  chatMessagePromptHoveredStyle: {},
  footerStyle: {},
  loadingSpinnerStyle: {},
  mediaDisplayContainerStyle: {},
  chatButtonStyle: {},
  chatHistoryButtonStyle: {},
  chatHistoryButtonHoveredStyle: {},
  sendButtonStyle: {},
  sendButtonHoveredStyle: {},
  audioButtonStyle: {},
  audioButtonDisabledStyle: {},
  closeChatButtonStyle: {},
  emojiButtonStyle: {},
  emojiButtonDisabledStyle: {},
  fileAttachmentButtonStyle: {},
  fileAttachmentButtonDisabledStyle: {},
  notificationButtonStyle: {},
  notificationButtonDisabledStyle: {},
  voiceButtonStyle: {},
  voiceButtonDisabledStyle: {},
  chatIconStyle: {},
  audioIconStyle: {},
  audioIconDisabledStyle: {},
  closeChatIconStyle: {},
  emojiIconStyle: {},
  emojiIconDisabledStyle: {},
  fileAttachmentIconStyle: {},
  fileAttachmentIconDisabledStyle: {},
  notificationIconStyle: {},
  notificationIconDisabledStyle: {},
  voiceIconStyle: {},
  voiceIconDisabledStyle: {},
  sendIconStyle: {},
  rcbTypingIndicatorStyle: {},
  rcbDotStyle: {}
}, Zc = () => ll(Uc), Yc = () => ll(Wc), Gc = async (m, d, D) => {
  var M, F;
  let C = Zc(), s = Yc();
  if (D != null)
    if (document.querySelectorAll('[id^="rcb-theme-style"]').forEach((S) => {
      S.remove();
    }), Array.isArray(D))
      for (const S of D) {
        const x = await _s(S);
        C = Oa(x.settings, C), s = Oa(x.styles, s);
      }
    else {
      const S = await _s(D);
      C = Oa(S.settings, C), s = Oa(S.styles, s);
    }
  return m != null && (C = Oa(m, C)), d != null && (s = Oa(d, s)), ((M = C.chatInput) == null ? void 0 : M.botDelay) != null && ((F = C.chatInput) == null ? void 0 : F.botDelay) < 500 && (C.chatInput.botDelay = 500), { settings: C, styles: s };
}, Oa = (m, d) => {
  const D = [{ source: m, target: d }];
  for (; D.length; ) {
    const C = D.pop();
    if (C == null)
      continue;
    const { source: s, target: M } = C;
    for (const F of Object.keys(s)) {
      const R = F;
      if (Vs(s[R]))
        M[R] = s[R];
      else if (typeof s[R] == "object" && s[R] !== null && !Array.isArray(s[R]))
        D.push({ source: s[R], target: M[R] });
      else
        try {
          M[R] = s[R];
        } catch {
        }
    }
  }
  return d;
}, ll = (m) => {
  if (m === null || typeof m != "object")
    return m;
  const d = Array.isArray(m) ? [] : {}, D = [{ source: m, target: d }], C = /* @__PURE__ */ new WeakMap();
  for (C.set(m, d); D.length; ) {
    const s = D.pop();
    if (s == null)
      continue;
    const { source: M, target: F } = s;
    for (const R in M)
      if (Object.prototype.hasOwnProperty.call(M, R)) {
        const S = M[R];
        if (S && typeof S == "object")
          if (C.has(S))
            F[R] = C.get(S);
          else {
            const x = Array.isArray(S) ? [] : {};
            C.set(S, x), F[R] = x, D.push({ source: S, target: x });
          }
        else
          F[R] = S;
      }
  }
  return d;
}, Is = ["Quickstart", "API Docs", "Examples", "Github", "Discord"], _c = {
  start: {
    message: "Hello, I am Tan Jin 👋! Welcome to React ChatBotify, I'm excited that you are using our chatbot 😊!",
    transition: { duration: 1e3 },
    chatDisabled: !0,
    path: "show_options"
  },
  show_options: {
    message: "It looks like you have not set up a conversation flow yet. No worries! Here are a few helpful things you can check out to get started:",
    options: Is,
    path: "process_options"
  },
  prompt_again: {
    message: "Do you need any other help?",
    options: Is,
    path: "process_options"
  },
  unknown_input: {
    message: "Sorry, I do not understand your message 😢! If you require further assistance, you may click on the Github option and open an issue there or visit our discord.",
    options: Is,
    path: "process_options"
  },
  process_options: {
    transition: { duration: 0 },
    path: (m) => {
      let d = "";
      switch (m.userInput) {
        case "Quickstart":
          d = "https://react-chatbotify.com/docs/introduction/quickstart/";
          break;
        case "API Docs":
          d = "https://react-chatbotify.com/docs/api/bot_options";
          break;
        case "Examples":
          d = "https://react-chatbotify.com/docs/examples/basic_form";
          break;
        case "Github":
          d = "https://github.com/tjtanjin/react-chatbotify/";
          break;
        case "Discord":
          d = "https://discord.gg/6R4DK4G5Zh";
          break;
        default:
          return "unknown_input";
      }
      return m.injectMessage("Sit tight! I'll send you right there!"), setTimeout(() => {
        window.open(d);
      }, 1e3), "repeat";
    }
  },
  repeat: {
    transition: { duration: 3e3 },
    path: "prompt_again"
  }
}, Vc = ({
  flow: m,
  settings: d,
  styles: D,
  themes: C
}) => {
  var le;
  const [s, M] = Oe(!1), [F, R] = Oe({}), [S, x] = Oe({}), [Y, k] = Oe([]), [q, me] = Oe([]), ae = m ?? _c;
  xt(() => {
    ye();
  }, [C]);
  const ye = async () => {
    const te = await Gc(d, D, C);
    "isOpen" in F && (te.settings.isOpen = F.isOpen), R(te.settings), x(te.styles), M(!0);
  }, X = (te) => /* @__PURE__ */ U.jsx(Ks.Provider, { value: { settings: F, setSettings: R }, children: te }), N = (te) => /* @__PURE__ */ U.jsx($s.Provider, { value: { styles: S, setStyles: x }, children: te }), J = (te) => /* @__PURE__ */ U.jsx(tl.Provider, { value: { paths: q, setPaths: me }, children: te }), de = (te) => /* @__PURE__ */ U.jsx(qs.Provider, { value: { messages: Y, setMessages: k }, children: te }), oe = () => {
    var Ie, De, We, xe;
    let te = /* @__PURE__ */ U.jsx(pc, { flow: ae });
    return (Ie = F.advance) != null && Ie.useAdvancedMessages || (te = de(te)), (De = F.advance) != null && De.useAdvancedPaths || (te = J(te)), (We = F.advance) != null && We.useAdvancedSettings || (te = X(te)), (xe = F.advance) != null && xe.useAdvancedStyles || (te = N(te)), te;
  }, Ae = () => {
    var te, Ie;
    return s && er && ((te = F.general) == null ? void 0 : te.desktopEnabled) || !er && ((Ie = F.general) == null ? void 0 : Ie.mobileEnabled);
  };
  return /* @__PURE__ */ U.jsx(U.Fragment, { children: Ae() && /* @__PURE__ */ U.jsx("div", { style: { fontFamily: (le = F.general) == null ? void 0 : le.fontFamily }, children: oe() }) });
};
export {
  mt as Button,
  qs as MessagesContext,
  tl as PathsContext,
  Ks as SettingsContext,
  $s as StylesContext,
  Vc as default,
  Zc as getDefaultSettings,
  Yc as getDefaultStyles
};
