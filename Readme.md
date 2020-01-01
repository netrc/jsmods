

import modules....

* main and lib/* end in .js
* package.json has { "type": "module" }
* node 12 and --experimental-modules


index.html
* <script type=module src="main.js">   ! .js   !!! no quotes around module
* lib/t1.js ! .js
* !!! must use http   $  python -m SimpleHTTPServer 8080
** (file://P:/src/t.html  -- "Access to script... from origin null has been blocked by CORS policy")
* module load is deferred; e.g. after page has loaded  ?? but when in relation to other modules?
** which makes the whole page loaded thing go away
* note that an inline script after main.js is not run  (and why not??)

also, basic files with mjs
* main and lib end in *.mjs
* node 12 and --experimental-modules
* but can't see that work in t.html  (mime error; even with http)
