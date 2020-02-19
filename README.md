# shighl-elements
WebComponents based on Shighl https://github.com/scenaristeur/shighl

# How to
- shighl-elements are in /dist/window
- vendor library are in /dist/vendor

## basic shighl-elements
```
<!doctype html>
<html>
<head>
<!-- Polyfills only needed for Firefox and Edge. -->
<script src="./vendor/webcomponents-bundle.js"></script>
<script src="./vendor/solid-auth-client.bundle.js"></script>
<script src="./vendor/solid-query-ldflex.bundle.js"></script>
<script src="./vendor/shighl.bundle.js"></script>
<body>
<shighl-login mood="great"></shighl-login>
<script src="./window/shighl-login.js" type="module"></script>
</body>
</html>
```

## or shighl-elements with bootstrap css
```
<!doctype html>
<html>
<head>
<!-- Polyfills only needed for Firefox and Edge. -->
<script src="./vendor/webcomponents-bundle.js"></script>
<script src="./vendor/solid-auth-client.bundle.js"></script>
<script src="./vendor/solid-query-ldflex.bundle.js"></script>
<script src="./vendor/shighl.bundle.js"></script>
<body>
<shighl-login-bootstrap mood="great"></shighl-login-bootstrap>
<script src="./window/shighl-login-bootstrap.js" type="module"></script>
</body>
</html>
```


# Elements
- [x] shighl-element


# Is it better to import in webcomponent or in html ?
const sh = new Shighl()
in webComponent with the import or in html file ?
```
<script src="./vendor/shighl.bundle.js"></script>
<shighl-login></shighl-login>
<script src="./window/shighl-login.js" type="module"></script>
```

# TODO externalize lit-element
https://github.com/Polymer/lit-element/issues/253

# make a gh-pages branches
https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages

## create subbranch with dist folder
- comment the dist folder in the .gitignore file
```
git add dist -f && git commit -m "Initial dist subtree commit"
```
- build & publish to gh-pages
```
npm run build &&
git subtree push --prefix dist origin gh-pages
```
