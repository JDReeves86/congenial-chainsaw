// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `![](https://img.shields.io/badge/license-MIT-green)`
    case 'Apache 2.0':
      return `![](https://img.shields.io/badge/license-Apache--2.0-blue)`
    case 'GNU GPL 3.0':
      return `![](https://img.shields.io/badge/license-GNU%20GPL%203.0-yellowgreen)`
    case 'The Unlicense':
      return `![](https://img.shields.io/badge/license-The%20Unlicense-%234E27A1)`
    default:
      return `![](https://img.shields.io/badge/license-none-red)`
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `License: [${license}](https://choosealicense.com/licenses/mit/)`
    case 'Apache 2.0':
      return `License: [${license}](https://choosealicense.com/licenses/apache-2.0/)`
    case 'GNU GPL 3.0':
      return `[${license}](https://img.shields.io/badge/license-GNU%20GPL%203.0-7890A5)`
    case 'The Unlicense':
      return `[${license}](https://choosealicense.com/licenses/unlicense/)`
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `
${renderLicenseLink(license)}
<br>

MIT License

Copyright (c) 
**[year] [fullname]**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

    case 'Apache 2.0':
      return `
${renderLicenseLink(license)}
<br>

Copyright 
**[yyyy] [name of copyright owner]**

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
`;

    case 'GNU GPL 3.0':
      return `
${renderLicenseLink(license)}
<br>

Copyright (C) 
**[year]  [name of author]**

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
`;

    case 'The Unlicense':
      return `
${renderLicenseLink(license)}
<br>

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>
`;

    default: 
      return `
No license chosen
`
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
# ${data.title} ${renderLicenseBadge(data.license)}

<br>

## Table of Contents

<hr>

1. [Description](#Descr)
2. [Installation](#Install)
3. [Usage](#Use)
4. [License](#Lic)
5. [Contributing to project](#Contr)
6. [Testing](#Test)
7. <a href='#?'>Questions</a>

## Description <a id= 'Descr'></a>

<hr>

${data.description}

<br>
<br>

## Installation Instructions <a id= 'Install'></a>

<hr>

${data.install}

<br>
<br>

## Usage <a id= 'Use'></a>

<hr>

${data.use}

<br>
<br>

## License <a id= 'Lic'></a>

<hr>

${renderLicenseSection(data.license)}

<br>
<br>

## Contributing <a id= 'Contr'></a>

<hr>

${data.contribute}

<br>
<br>

## Testing <a id= 'Test'></a>

<hr>

${data.add}

<br>
<br>

### Questions? <a id='?'></a>

<hr>

You can connect with me at the e-mail address listed below for any questions about this app. 

<br>

<hr>

GitHub: [${data.github}](https://github.com/${data.github})

Email: [${data.email}](mailto:${data.email})

<hr>
`;
};


module.exports = {
  generateMarkdown,
}
