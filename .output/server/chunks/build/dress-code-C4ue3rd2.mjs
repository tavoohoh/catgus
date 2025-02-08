import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useNuxtApp } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {
  __name: "dress-code",
  __ssrInlineRender: true,
  setup(__props) {
    const { $t } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-702f7848><h2 data-v-702f7848>${ssrInterpolate(unref($t)("title.dress"))}</h2><p data-v-702f7848></p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dress-code.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const dressCode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-702f7848"]]);

export { dressCode as default };
//# sourceMappingURL=dress-code-C4ue3rd2.mjs.map
