# `@enhance/enhance-starter-project`

adds file based routing w server rendered custom elements

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
