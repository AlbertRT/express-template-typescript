# Express With Typescript

**Getting Started**

-   Clone the Repo

```
https://github.com/AlbertRT/express-template-typescript.git
```

-   Install Dependency

```
cd <project>
npm install
```

-   Commands

```
npm run dev
```

default port `5050`

**Configs**
|config| types | required |
|--|--|--|
| port | number | true |
| baseUrl | string | true |
| crossOriginResourceSharing | Cors | false |
| middleware | MiddlewareFn | false |

**example**

```
const  configs:  AppConfigs  = {
	port:  5050,
	baseUrl:  "/api/v1",
	crossOriginResourceSharing: {
		using:  true,
	},
};
```

**run()**
use this code to run the app.

code example:
run()
**generateRouter(url, method, [handdler])**

this code is use to create route.

code example:

    generateRouter("/hello-world", "get", someMiddleware, someController)

params list

| params   | type                     | required |
| -------- | ------------------------ | -------- |
| url      | string                   | true     |
| method   | HTTPMethod               | true     |
| handdler | Middleware or Controller | false    |
