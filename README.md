# shighl-elements
WebComponents based on Shighl https://github.com/scenaristeur/shighl

# How to
```
<!doctype html>
<html>
<head>
  <!-- Polyfills only needed for Firefox and Edge. -->
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
  <script src="./vendor/solid-auth-client.bundle.js"></script>
  <script src="./vendor/solid-query-ldflex.bundle.js"></script>
  <script src="./vendor/shighl.bundle.js"></script>
  <body>
    <script>    const sh = new Shighl()
    console.log(sh)</script>
    <shighl-login mood="great"></shighl-login>
     <script src="./elements/shighl-login.js" type="module"></script>
  </body>
  </html>
```


# Elements
- [x] shighl-element


# make a gh-pages branches
https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages

## create subbranch with dist folder
- comment the dist folder in the .gitignore file
```
git add dist -f && git commit -m "Initial dist subtree commit"
```
- build & publish to gh-pages
```
npm run build && git subtree push --prefix dist origin gh-pages
```
