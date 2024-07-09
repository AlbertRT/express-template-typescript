import { Request, Response, NextFunction, RequestHandler } from "express";

export type AppConfigs = {
	port: number;
	baseUrl: string;
	crossOriginResourceSharing?: Cors;
	middleware?: Array<
		(req: Request, res: Response, next: NextFunction) => void
	>;
	routes?: Route[];
};

export type Cors = {
	using: boolean;
	options?: CorsOptions;
};

export type CorsOptions = {
	origin: string;
	credentials?: boolean;
};

export type MiddlewareFn = (
	req: Request,
	res: Response,
	next: NextFunction
) => void;

export type HanddlerFn = (req: Request, res: Response) => unknown;

export type HTTPMethod =
	| "get"
	| "post"
	| "put"
	| "delete"
	| "options"
	| "patch"
	| "trace"
	| "connect";

export type HTTPResponse = {
	success: boolean;
	isError: boolean;
	[key: string | number]: any;
};

export type Controller = (req: Request, res: Response) => Promise<any>;
export type Route = {
	path: string;
	method: HTTPMethod;
	middleware?: RequestHandler[];
	controller: Controller;
};
