# React Native: react-native-gfycat-export

[![GitHub package version](https://img.shields.io/github/package-json/v/gaetanozappi/react-native-gfycat-export.svg?style=flat&colorB=2b7cff)](https://github.com/gaetanozappi/react-native-gfycat-export)
[![github home](http://img.shields.io/npm/v/react-native-gfycat-export.svg?style=flat)](https://www.npmjs.com/package/react-native-gfycat-export)
![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat&colorB=191A17)
[![github home](https://img.shields.io/badge/gaetanozappi-react--native--gfycat--export-blue.svg?style=flat)](https://github.com/gaetanozappi/react-native-gfycat-export)
[![npm](https://img.shields.io/npm/dm/react-native-gfycat-export.svg?style=flat&colorB=007ec6)](https://www.npmjs.com/package/react-native-gfycat-export)

[![github issues](https://img.shields.io/github/issues/gaetanozappi/react-native-gfycat-export.svg?style=flat)](https://github.com/gaetanozappi/react-native-gfycat-export/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/gaetanozappi/react-native-gfycat-export.svg?style=flat&colorB=44cc11)](https://github.com/gaetanozappi/react-native-gfycat-export/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/gaetanozappi/react-native-gfycat-export.svg?style=flat&colorB=44cc11)](http://github.com/gaetanozappi/react-native-gfycat-export/issues)
[![github license](https://img.shields.io/github/license/gaetanozappi/react-native-gfycat-export.svg)]()

-   [Usage](#-usage)
-   [License](#-license)

## 📖 Getting started

`$ npm install react-native-gfycat-export --save`

## 💻 Usage

```javascript
import * as React from 'react';
import { View } from 'react-native';
import { GfResolve } from 'react-native-gfycat-export';

let url = 'https://gfycat.com/clumsyfloweryamericancrayfish-happy-pcmasterrace-smile-joy';

export default class App extends React.Component {
  componentDidMount() {
    GfResolve(url, 3)
      .then(r => console.log('Result:', r))
      .catch(error => {
        console.error('Error:', error);
      });
  }
  render() { return null; }
}
```

## 💡 Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `url`       | `string`   |    | `Url of the file to be exported.`
| `type`      | `number`   | `3` | `File format to export.`

#### Type

0) `-small.gif`
1) `-max-1mb.gif`
2) `-size_restricted.gif`
3) `-mobile.mp4`

## 📜 License
This library is provided under the Apache License.
