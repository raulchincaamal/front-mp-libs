## mp-ui-components


[![npm version](https://img.shields.io/npm/v/mp-ui-components.svg?style=flat-square)](https://www.npmjs.com/package/mp-ui-components)
[![npm downloads](https://img.shields.io/npm/dm/mp-ui-components.svg?style=flat-square)](https://www.npmjs.com/package/mp-ui-components)


A fast 🚀, scalable, parameterized component management solution that uses simplified flow principles for reuse.

A lot of time was spent looking at reusing common components, it's based [tailwind css](https://tailwindcss.com/) 😎

The components are tested with [cypress](https://www.cypress.io/) 👌 for greater security that they work and correctly resolve what should be expected for each one.

### ⚙ Requirements

- Node v20.0.0+

---

## Installation

```shell
$ npm install mp-ui-components
```

## 💻 Usage

```jsx
import { Alert } from 'mp-ui-components'

const MyComponent = () =>
  <div>
    <Alert
      title='Title here'
      message='Message here'
      type='succes'
    />
  </div>
```
