# `@enhance-dev/arc-plugin-enhance`

adds file based routing to arc.codes with enhance.dev server rendered custom elements

## project structure

```
app
├── api ............. api routes
├── elements.mjs .... custom elements manifest
├── head.mjs ........ <head> element
└── pages ........... custom elements that map to routes (eg. /about renders about.mjs)
    ├── 404.mjs
    ├── 500.mjs
    ├── about.mjs
    ├── index.html
    └── notes
        ├── $id.mjs
        └── index.mjs
```

### Decisions

file based routing using leading `$` for dynamic parameters reasoning 

- `$` is safe on windows and linux UNLESS its trailing in which case thats a hidden file in windows
- `:` is illegal in windows file paths
- `*` will expand in various system shells creating ambiguity 
- `.` is meaningful in system shells (current dir) and completions with `..` and/or `...` creates ambiguity 

## outsourcing to plugins

currently we need to generate an .arc file with a fair bit of 'required' configuration; it would be good to move this into the plugin and allow userland to override as neccessary 

- adding an http function should assume and add `@http` automatically; userland should still be able to override themselves
- setting `@static` params like `fingerprint`
- setting `@views` params like `src` (but they can override and remap later if they need to)
- provisioning `@table` for begin/data (but they could add their own tables later) 


## todo 

- bare bones just app/pages/index.html app/pages/elements.mjs app/pages/head.mjs
- cli pr that unzips this for `new project`
