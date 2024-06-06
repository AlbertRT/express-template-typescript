import { HanddlerFn, MiddlewareFn } from "./../types/types";
import express, {
	Application,
	NextFunction,
	Request,
	Response,
	Router,
} from "express";
import { AppConfigs, CorsOptions, HTTPMethod } from "../types/types";
import cors from "cors";

export default class Apps {
	protected app: Application;
	private appPort: number;
	private cors: boolean = false;
	private middleware: Array<MiddlewareFn> = [];
	protected config: AppConfigs;
	public router: Router = express.Router();

	constructor(config: AppConfigs) {
		this.app = express();
		this.appPort = config.port;
		this.config = config;

		if (config.crossOriginResourceSharing?.using === true) {
			const options: CorsOptions = config.crossOriginResourceSharing
				.options || {
				origin: "*",
				credentials: false,
			};
			this.cors = true;
			this.app.use(cors(options));
		}

		if (config.middleware) {
			this.middleware = config.middleware;
		}

		this.app.use(this.router);
	}
	private middlewares(): void {
		// default middleware function
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		// user generated middleware
		this.middleware.forEach((middleware) => {
			this.app.use(middleware);
		});
	}

	public run(): void {
		console.log("starting server...");
		this.middlewares();
		this.app.listen(this.appPort, () =>
			console.log("listening on port " + this.appPort)
		);
	}

	public generateRouter(
		url: string,
		method: HTTPMethod,
		...handdlers: Array<MiddlewareFn | HanddlerFn>
	): void {
		this.router[method](`${this.config.baseUrl}${url}`, ...handdlers);
	}
}
