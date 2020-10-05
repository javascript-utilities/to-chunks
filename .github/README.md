# To Chunks
[heading__top]:
  #to-chunks
  "&#x2B06; Chunks input string into array based on RegExp"


Chunks input string into array based on RegExp


## [![Byte size of To Chunks][badge__main__to_chunks__source_code]][to_chunks__main__source_code] [![Open Issues][badge__issues__to_chunks]][issues__to_chunks] [![Open Pull Requests][badge__pull_requests__to_chunks]][pull_requests__to_chunks] [![Latest commits][badge__commits__to_chunks__main]][commits__to_chunks__main] [![to-chunks Demos][badge__gh_pages__to_chunks]][gh_pages__to_chunks]


---


- [:arrow_up: Top of Document][heading__top]

- [:building_construction: Requirements][heading__requirements]

- [:zap: Quick Start][heading__quick_start]

  - [:coffee: Install via NodeJS][heading__install_via_nodejs]

  - [:spider_web: Install via Git Modules][heading__install_via_git_modules]
  - [:memo: Edit Your ReadMe File][heading__your_readme_file]
  - [:floppy_disk: Commit and Push][heading__commit_and_push]

- [&#x1F9F0; Usage][heading__usage]

  - [:coffee: Use With NodeJS][heading__use_with_nodejs]
  - [:spider_web: Use With Web Browser][heading__use_with_web_browser]

- [&#x1F5D2; Notes][heading__notes]

- [:chart_with_upwards_trend: Contributing][heading__contributing]

  - [:trident: Forking][heading__forking]
  - [:currency_exchange: Sponsor][heading__sponsor]


- [:card_index: Attribution][heading__attribution]

- [:balance_scale: Licensing][heading__license]


---



## Requirements
[heading__requirements]:
  #requirements
  "&#x1F3D7; Prerequisites and/or dependencies that this project needs to function properly"


NodeJS development dependencies may be installed via NPM...


```Bash
npm install
```


> Note, dependencies are only required if contributing to development of this project; otherwise no external dependencies are required to utilize this repository.


______


## Quick Start
[heading__quick_start]:
  #quick-start
  "&#9889; Perhaps as easy as one, 2.0,..."


### Install via NodeJS
[heading__install_via_nodejs]:
  #install-via-nodejs
  "&#x2615; Instructions for installing via NPM"



```Bash
npm install javascript-utilities/to-chunks
```


---


### Install via Git Modules
[heading__install_via_git_modules]:
  #install-via-git-modules
  "&#x1F578; Instructions for installing via Git Submodules"


If using this project with GitHub Pages, then this repository encourages the use of Git Submodules to track it as a dependency


**Bash Variables**


```Bash
_module_name='to-chunks'
_module_https_url="https://github.com/javascript-utilities/to-chunks.git"
_module_base_dir='_layouts/modules'
_module_path="${_module_base_dir}/${_module_name}"
```


**Bash Submodule Commands**


```Bash
cd "<your-git-project-path>"

git checkout gh-pages
mkdir -vp "${_module_base_dir}"

git submodule add\
 -b main --name "${_module_name}"\
 "${_module_https_url}" "${_module_path}"
```


---


### Your ReadMe File
[heading__your_readme_file]:
  #your-readme-file
  "&#x1F4DD; Suggested additions for your ReadMe.md file so everyone has a good time with submodules"


Suggested additions for your _`ReadMe.md`_ file so everyone has a good time with submodules


```MarkDown
Clone with the following to avoid incomplete downloads


    git clone --recurse-submodules <url-for-your-project>


Update/upgrade submodules via


    git submodule update --init --merge --recursive
```


### Commit and Push
[heading__commit_and_push]:
  #commit-and-push
  "&#x1F4BE; It may be just this easy..."


```Bash
git add .gitmodules
git add "${_module_path}"


## Add any changed files too


git commit -F- <<'EOF'
:heavy_plus_sign: Adds `javascript-utilities/to-chunks#1` submodule



**Additions**


- `.gitmodules`, tracks submodules AKA Git within Git _fanciness_

- `README.md`, updates installation and updating guidance

- `_modules_/to-chunks`, Chunks input string into array based on RegExp
EOF


git push origin gh-pages
```


**:tada: Excellent :tada:** your project is now ready to begin unitizing code from this repository!


## Usage
[heading__usage]:
  #usage
  "&#x1F9F0; How to utilize this repository"


How to utilize this repository


---


### Use With NodeJS
[heading__use_with_nodejs]:
  #use-with-nodejs
  "&#x2615; Example of utilizing project with NodeJS"


```JavaScript
const toChunks = require('to-chunks');

const input = '1.15.4-2Beta';
const regular_expression = new RegExp('\\.|-|[a-zA-Z]+');

const chunks = toChunks(input, regular_expression);

console.log(chunks);
//> ['1', '.', '15', '.', '4', '-', '2', 'Beta']
```


---


### Use With Web Browser
[heading__use_with_web_browser]:
  #use-with-web-browser
  "&#x1F578; Example HTML and JavaScript code that utilizes project"


**`assets/js/index.js`**


```JavaScript
"use strict";


/**
 * Updates output element after obtaining input element values
 * @param {MouseEvent:click} _event
 * @listens MouseEvent:click
 */
function to_chunks__button(_event) {
  const expression__input__element = document.getElementById('expression__input');
  const stringy__input__element = document.getElementById('stringy__input');
  const to_chunks__output__element = document.getElementById('to_chunks__output');

  const regular_expression = new RegExp(expression__input__element.value);
  const input = stringy__input__element.value;
  const chunks = toChunks(input, expression__input__element.value);

  to_chunks__output__element.value = JSON.stringify(chunks);
}


window.addEventListener('load', (_event) => {
  document.getElementById('to_chunks__button').addEventListener('click', to_chunks__button);
  to_chunks__button(undefined);
});
```


**`index.html`**


```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>To Chunks JavaScript Example</title>
    <script src="assets/js/index.js" defer></script>
    <script src="assets/js/modules/to-chunks/to-chunks.js" defer></script>
  </head>
  <body>
    <div>
      <label for="expression__input">Regular Expression: </label>
      <input id="expression__input" type="text" value="[0-9]+|[a-zA-Z]+">
      <br>

      <label for="stringy__input">String Like Input: </label>
      <input id="stringy__input" type="text" value="p1.15-2.Beta">
      <br>
    </div>

    <div>
      <input id="to_chunks__button" type="button" value="Re-Chunkify">
      <br>

      <label for="to_chunks__output">toChunks Output: </label>
      <input id="to_chunks__output" type="text" readonly>
    </div>
  </body>
</html>
```


______


## Notes
[heading__notes]:
  #notes
  "&#x1F5D2; Additional things to keep in mind when developing"


This repository may not be feature complete and/or fully functional, Pull Requests that add features or fix bugs are certainly welcomed.


---


One bit that I found odd between Web Browser and NodeJS is the `\\.|-|[a-zA-Z]+` expression with `pre1.15.4-2.Beta` produces different results, but only when fed from HTML elements, eg...


**NodeJS**


```JavaScript
toChunks('p1.15.4-2.Beta', '\\.|-|[a-zA-Z]+');
//> ['p', '1', '.', '15', '.', '4', '-', '2', '.', 'Beta']
```


**Web Browser**


```JavaScript
toChunks('p1.15.4-2.Beta', '\\.|-|[a-zA-Z]+');
//> ['p', '1.15', '-', '2.', 'Beta']
```


> Note, this only happens via input from HTML text elements, **not** from the JavaScript console.


... But adjusting the expression to `\.|-|[a-zA-Z]+` within the HTML input element seems to function consistently.


______


## Contributing
[heading__contributing]:
  #contributing
  "&#x1F4C8; Options for contributing to to-chunks and javascript-utilities"


Options for contributing to to-chunks and javascript-utilities


### Forking
[heading__forking]:
  #forking
  "&#x1F531; Tips for forking to-chunks"


Start making a [Fork][to_chunks__fork_it] of this repository to an account that you have write permissions for.


- Add remote for fork URL. The URL syntax is _`git@github.com:<NAME>/<REPO>.git`_...


```Bash
cd ~/git/hub/javascript-utilities/to-chunks

git remote add fork git@github.com:<NAME>/to-chunks.git
```


- Commit your changes and push to your fork, eg. to fix an issue...


```Bash
cd ~/git/hub/javascript-utilities/to-chunks


git commit -F- <<'EOF'
:bug: Fixes #42 Issue


**Edits**


- `<SCRIPT-NAME>` script, fixes some bug reported in issue
EOF


git push fork main
```


> Note, the `-u` option may be used to set `fork` as the default remote, eg. _`git push fork main`_ however, this will also default the `fork` remote for pulling from too! Meaning that pulling updates from `origin` must be done explicitly, eg. _`git pull origin main`_


- Then on GitHub submit a Pull Request through the Web-UI, the URL syntax is _`https://github.com/<NAME>/<REPO>/pull/new/<BRANCH>`_


> Note; to decrease the chances of your Pull Request needing modifications before being accepted, please check the [dot-github](https://github.com/javascript-utilities/.github) repository for detailed contributing guidelines.


### Sponsor
  [heading__sponsor]:
  #sponsor
  "&#x1F4B1; Methods for financially supporting javascript-utilities that maintains to-chunks"


Thanks for even considering it!


With [![sponsor__shields_io__liberapay]][sponsor__link__liberapay] you may sponsor javascript-utilities on a repeating basis.


Regardless of if you're able to financially support projects such as to-chunks that javascript-utilities maintains, please consider sharing projects that are useful with others, because one of the goals of maintaining Open Source repositories is to provide value to the community.


______


## Attribution
[heading__attribution]:
  #attribution
  "&#x1F4C7; Resources that where helpful in building this project so far."


- [GitHub -- `github-utilities/make-readme`](https://github.com/github-utilities/make-readme)


______


## License
[heading__license]:
  #license
  "&#x2696; Legal side of Open Source"


```
Chunks input string into array based on RegExp
Copyright (C) 2020 S0AndS0

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```


For further details review full length version of [AGPL-3.0][branch__current__license] License.



[branch__current__license]:
  /LICENSE
  "&#x2696; Full length version of AGPL-3.0 License"


[badge__commits__to_chunks__main]:
  https://img.shields.io/github/last-commit/javascript-utilities/to-chunks/main.svg

[commits__to_chunks__main]:
  https://github.com/javascript-utilities/to-chunks/commits/main
  "&#x1F4DD; History of changes on this branch"


[to_chunks__community]:
  https://github.com/javascript-utilities/to-chunks/community
  "&#x1F331; Dedicated to functioning code"

[to_chunks__gh_pages]:
  https://github.com/javascript-utilities/to-chunks/tree/
  "Source code examples hosted thanks to GitHub Pages!"

[badge__gh_pages__to_chunks]:
  https://img.shields.io/website/https/javascript-utilities.github.io/to-chunks/index.html.svg?down_color=darkorange&down_message=Offline&label=Demo&logo=Demo%20Site&up_color=success&up_message=Online

[gh_pages__to_chunks]:
  https://javascript-utilities.github.io/to-chunks/index.html
  "&#x1F52C; Check the example collection tests"

[issues__to_chunks]:
  https://github.com/javascript-utilities/to-chunks/issues
  "&#x2622; Search for and _bump_ existing issues or open new issues for project maintainer to address."

[to_chunks__fork_it]:
  https://github.com/javascript-utilities/to-chunks/
  "&#x1F531; Fork it!"

[pull_requests__to_chunks]:
  https://github.com/javascript-utilities/to-chunks/pulls
  "&#x1F3D7; Pull Request friendly, though please check the Community guidelines"

[to_chunks__main__source_code]:
  https://github.com/javascript-utilities/to-chunks/
  "&#x2328; Project source!"

[badge__issues__to_chunks]:
  https://img.shields.io/github/issues/javascript-utilities/to-chunks.svg

[badge__pull_requests__to_chunks]:
  https://img.shields.io/github/issues-pr/javascript-utilities/to-chunks.svg

[badge__main__to_chunks__source_code]:
  https://img.shields.io/github/repo-size/javascript-utilities/to-chunks






[sponsor__shields_io__liberapay]:
  https://img.shields.io/static/v1?logo=liberapay&label=Sponsor&message=javascript-utilities

[sponsor__link__liberapay]:
  https://liberapay.com/javascript-utilities
  "&#x1F4B1; Sponsor developments and projects that javascript-utilities maintains via Liberapay"

