# Unofficial UMDearborn Catalog API · [![Build Status](https://travis-ci.org/MPlan/unofficial-umdearborn-catalog-api.svg?branch=master)](https://travis-ci.org/MPlan/unofficial-umdearborn-catalog-api)

> The unofficial course catalog APIs for the University of Michigan-Dearborn

[Checkout the deployed version here][0]
or
[Checkout the generated API docs here][1]

The purpose of this project is to be a fast and reliable course catalog API for MPlan.

# Overview

There are two ways you can use this API:

1. as a web service
2. as a javascript library

## Web service

To use this version as a web service, you can simply use [a deployed version of the API on heroku][0]

To get a local version of the web API:

    git clone https://github.com/MPlan/unofficial-umdearborn-catalog-api
    cd unofficial-umdearborn-catalog-api
    npm install
    npm start

## Javascript library

To use this in your node project:

    npm install --save unofficial-umdearborn-catalog-api

Then you can use like so:

```ts
import * as UmdearbornCatalog from 'unofficial-umdearborn-catalog-api';

async function main() {
    const courseDetail = await UmdearbornCatalog.fetchCourseDetail('201820', 'CIS', '450');
}

main();
```

[See the generated API docs here][1]

# Questions we want to ask the data:

* What courses are required to take course X?
* Has course X been offered during semester Y?
* Has course X been completely filled during semester Y?
* What courses satisfy degree requirement X?

* Has course X been offered online during semester Y?
* What is this course cross-listed as?

# Endpoints:

[See here][0] or [here](./swagger.yaml)

[0]: https://umdearborn-catalog-api.herokuapp.com
[1]: https://mplan.github.io/unofficial-umdearborn-catalog-api/
