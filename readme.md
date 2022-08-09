# `@enhance/enhance-starter-project`

adds file based routing w server rendered custom elements

## project structure

```
app
├── elements .......... define pure functions that return custom elements
└── pages ............. file based routing
    └── index.html
```

### Decisions

file based routing using leading `$` for dynamic parameters reasoning

- `$` is safe on windows and linux UNLESS its trailing in which case thats a hidden file in windows
- `:` is illegal in windows file paths
- `*` will expand in various system shells creating ambiguity
- `.` is meaningful in system shells (current dir) and completions with `..` and/or `...` creates ambiguity
