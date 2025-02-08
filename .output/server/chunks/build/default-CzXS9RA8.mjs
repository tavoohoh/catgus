import { useSSRContext, mergeProps, unref, ref, useTemplateRef, withCtx, createTextVNode, toDisplayString, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-B5Hk2rwM.mjs';
import { u as useNuxtApp } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$7 = {
  __name: "footer-count-down",
  __ssrInlineRender: true,
  setup(__props) {
    const eventDate = /* @__PURE__ */ new Date("2026-02-20T16:00:00-05:00");
    const calculateRemainingTime = () => {
      const currentDate = /* @__PURE__ */ new Date();
      return eventDate - currentDate;
    };
    const remainingTime = ref(calculateRemainingTime());
    const remainingTimeFormatted = computed(() => {
      const time = remainingTime.value;
      const days = Math.floor(time / (1e3 * 60 * 60 * 24));
      const hours = Math.floor(time % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      const minutes = Math.floor(time % (1e3 * 60 * 60) / (1e3 * 60));
      const seconds = Math.floor(time % (1e3 * 60) / 1e3);
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        return "\xA1Gracias a todos!";
      } else if (days === 0 && hours === 0 && minutes === 0) {
        return `\xA1Faltan ${seconds} segundos!`;
      } else if (days === 0 && hours === 0) {
        return `\xA1Faltan ${minutes} minutos y ${seconds} segundos!`;
      } else if (days === 0) {
        return `\xA1Faltan ${hours} horas, ${minutes} minutos y ${seconds} segundos!`;
      }
      return `Faltan ${days} d\xEDas, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "footer-count-down" }, _attrs))} data-v-1ae43413>${ssrInterpolate(remainingTimeFormatted.value)}</p>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("componentes/footer-count-down.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined;
};
const FooterCountDown = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-1ae43413"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<p${ssrRenderAttrs(mergeProps({ class: "footer-hashtag" }, _attrs))} data-v-280fbb55><span data-v-280fbb55>#</span><b data-v-280fbb55>Gus</b><span data-v-280fbb55>Got</span><span data-v-280fbb55>The</span><b data-v-280fbb55>Cat</b></p>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("componentes/footer-hashtag.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined;
};
const FooterHashtag = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-280fbb55"]]);
const _sfc_main$5 = {
  __name: "footer-container",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-container" }, _attrs))} data-v-779182a9>`);
      _push(ssrRenderComponent(FooterCountDown, null, null, _parent));
      _push(ssrRenderComponent(FooterHashtag, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("componentes/footer-container.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const FooterContainer = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-779182a9"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "undefined"
  }, _attrs))}><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("componentes/icons/menu-icon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const MenuIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "undefined"
  }, _attrs))}><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("componentes/icons/close-icon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const CloseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "header-nav",
  __ssrInlineRender: true,
  setup(__props) {
    const navOpen = ref(false);
    const dropOpen = ref(false);
    const { $t } = useNuxtApp();
    useTemplateRef("backdrop");
    const navItems = [
      { label: $t("title.home"), to: "/" },
      { label: $t("title.about"), to: "/about" },
      { label: $t("title.gift"), to: "/gifts" },
      { label: $t("title.dress"), to: "/dress-code" },
      { label: $t("title.crew"), to: "/crew" },
      { label: $t("title.todo"), to: "/todo" },
      { label: $t("title.schedule"), to: "/schedule" },
      { label: $t("title.faq"), to: "/faq" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<!--[--><div class="header-nav-icon" data-v-ae3d5ea1>`);
      if (!unref(navOpen)) {
        _push(ssrRenderComponent(MenuIcon, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(navOpen)) {
        _push(ssrRenderComponent(CloseIcon, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([{ "opened": unref(dropOpen) }, "header-nav-backdrop"])}" data-v-ae3d5ea1></div><nav class="${ssrRenderClass([{ "opened": unref(navOpen) }, "header-nav"])}" data-v-ae3d5ea1><div class="header-nav-top" data-v-ae3d5ea1><div data-v-ae3d5ea1>${ssrInterpolate(unref($t)("title.main"))}</div><div data-v-ae3d5ea1>${ssrInterpolate(unref($t)("home.date"))}</div><div data-v-ae3d5ea1>Bogot\xE1, Colombia</div></div><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<div class="header-nav-item" data-v-ae3d5ea1>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: item.to
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></nav><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("componentes/header-nav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const HeaderNav = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ae3d5ea1"]]);
const _sfc_main$1 = {
  __name: "header-container",
  __ssrInlineRender: true,
  setup(__props) {
    const { $t } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-container" }, _attrs))} data-v-a114ef05><div class="header-container-top" data-v-a114ef05><div data-v-a114ef05>${ssrInterpolate(unref($t)("home.date"))}</div><div data-v-a114ef05>Bogot\xE1, Colombia</div><div data-v-a114ef05>`);
      _push(ssrRenderComponent(FooterHashtag, null, null, _parent));
      _push(`</div></div><h1 class="header-container-title" data-v-a114ef05>${ssrInterpolate(unref($t)("title.main"))}</h1>`);
      _push(ssrRenderComponent(HeaderNav, null, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("componentes/header-container.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const HeaderContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a114ef05"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-default" }, _attrs))} data-v-72fc6ca4>`);
      _push(ssrRenderComponent(HeaderContainer, null, null, _parent));
      _push(`<main data-v-72fc6ca4>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(FooterContainer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-72fc6ca4"]]);

export { _default as default };
//# sourceMappingURL=default-CzXS9RA8.mjs.map
