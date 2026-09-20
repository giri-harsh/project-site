# project.harshgiri.site

Every project Harsh Giri has shipped — filterable index, grid, and deep-linkable case studies (`#p/<id>`).

Built on the shared harshgiri design system, whose single source is
[harshgiri-site/ds](https://github.com/giri-harsh/harshgiri-site/tree/main/ds), published at `https://harshgiri.site/ds/v1/`.
The build pulls it (tokens, fonts, icons, chrome) from there, so all three sites stay one system.

```bash
npm ci
npm run dev                                          # build + serve → http://localhost:5171
DS_URL=http://localhost:5170/ds/v1 npm run dev       # against a local harshgiri-site
```

Content lives in `src/projects.js`; the page is `src/index.html`.
