
/**
 * @roxi/routify 2.18.11
 * File generated Thu May 11 2023 15:46:53 GMT+1000 (Australian Eastern Standard Time)
 */

export const __version = "2.18.11"
export const __timestamp = "2023-05-11T05:46:53.598Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/exerciseadmin/index",
          "id": "_exerciseadmin_index",
          "component": () => import('../src/pages/exerciseadmin/index.svelte').then(m => m.default)
        }
      ],
      "path": "/exerciseadmin"
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/exerciselink/index",
          "id": "_exerciselink_index",
          "component": () => import('../src/pages/exerciselink/index.svelte').then(m => m.default)
        }
      ],
      "path": "/exerciselink"
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/exercises/index",
          "id": "_exercises_index",
          "component": () => import('../src/pages/exercises/index.svelte').then(m => m.default)
        }
      ],
      "path": "/exercises"
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/groupadmin/index",
          "id": "_groupadmin_index",
          "component": () => import('../src/pages/groupadmin/index.svelte').then(m => m.default)
        }
      ],
      "path": "/groupadmin"
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/grouplink/index",
          "id": "_grouplink_index",
          "component": () => import('../src/pages/grouplink/index.svelte').then(m => m.default)
        }
      ],
      "path": "/grouplink"
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/groups/index",
          "id": "_groups_index",
          "component": () => import('../src/pages/groups/index.svelte').then(m => m.default)
        }
      ],
      "path": "/groups"
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/help/index",
          "id": "_help_index",
          "component": () => import('../src/pages/help/index.svelte').then(m => m.default)
        }
      ],
      "path": "/help"
    },
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isPage": true,
          "path": "/notfound/notfound",
          "id": "_notfound_notfound",
          "component": () => import('../src/pages/notfound/notfound.svelte').then(m => m.default)
        }
      ],
      "path": "/notfound"
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/progress/index",
          "id": "_progress_index",
          "component": () => import('../src/pages/progress/index.svelte').then(m => m.default)
        }
      ],
      "path": "/progress"
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/settings/index",
          "id": "_settings_index",
          "component": () => import('../src/pages/settings/index.svelte').then(m => m.default)
        }
      ],
      "path": "/settings"
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/signin/index",
          "id": "_signin_index",
          "component": () => import('../src/pages/signin/index.svelte').then(m => m.default)
        }
      ],
      "path": "/signin"
    }
  ],
  "isLayout": true,
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

