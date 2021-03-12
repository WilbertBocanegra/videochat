
/**
 * @roxi/routify 2.14.0
 * File generated Fri Mar 12 2021 13:00:13 GMT-0600 (hora estándar central)
 */

export const __version = "2.14.0"
export const __timestamp = "2021-03-12T19:00:13.682Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports
import _blog__slug from '../src/pages/blog/[slug].svelte'
import _blog_index from '../src/pages/blog/index.svelte'
import _index from '../src/pages/index.svelte'

//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": false,
      "isDir": true,
      "file": "blog",
      "filepath": "/blog",
      "name": "blog",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/wilbert/Development/Svelte/chatDemo/src/pages/blog",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[slug].svelte",
          "filepath": "/blog/[slug].svelte",
          "name": "[slug]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/wilbert/Development/Svelte/chatDemo/src/pages/blog/[slug].svelte",
          "importPath": "../src/pages/blog/[slug].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/blog/:slug",
          "id": "_blog__slug",
          "component": () => _blog__slug
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/blog/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/wilbert/Development/Svelte/chatDemo/src/pages/blog/index.svelte",
          "importPath": "../src/pages/blog/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/blog/index",
          "id": "_blog_index",
          "component": () => _blog_index
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/blog"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/wilbert/Development/Svelte/chatDemo/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => _index
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

