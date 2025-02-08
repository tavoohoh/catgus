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
  __name: "crew",
  __ssrInlineRender: true,
  setup(__props) {
    const { $t } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-03edc531><h2 data-v-03edc531>${ssrInterpolate(unref($t)("title.crew"))}</h2><p data-v-03edc531></p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/crew.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const crew = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03edc531"]]);

export { crew as default };
//# sourceMappingURL=crew-CgrVtxUg.mjs.map
