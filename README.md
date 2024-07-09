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
|config |types | required |
|----------------------------|--------------|----------|
| port | number |✅ |
| baseUrl | string |✅ |
| crossOriginResourceSharing | Cors |❌ |
| middleware | MiddlewareFn |❌ |
| routes | Route[] |❌ |

**example**

```
const  configs:  AppConfigs  = {
	port:  5050,
	baseUrl:  "/api/v1",
	crossOriginResourceSharing: {
		using:  true,
	},
    routes: [
		{
			path: "/members/get",
			method: "get",
			controller: CMember.getAll,
			middleware: [Middleware.auth, Middleware.checkRole],
		},
	],
};
```

**run()**
use this code to run the app.

code example:
run()

example code

```
const configs: AppConfigs = {
	port: 5050,
	baseUrl: "/api/v1",
	crossOriginResourceSharing: {
		using: true,
	},
	routes: [
		{
			path: "/members/get",
			method: "get",
			controller: CMember.getAll,
			middleware: [Middleware.auth, Middleware.checkRole],
		},
	],
};

const app = new App(configs);
app.run();
```

**Route**

To add a "route" you need to enter the following configuration:

1. path
2. method
3. middleware()
4. controller()

_Route Config Type_

| Name       | Type             | Required |
| ---------- | ---------------- | -------- |
| path       | string           | ✅       |
| method     | HTTPMethod       | ✅       |
| middleware | middlewareFn()[] | ❌       |
| controller | controllerFn()   | ✅       |

**Database**

Default database is _PostgreSQL_ with prisma
