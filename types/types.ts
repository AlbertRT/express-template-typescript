import { Request, Response, NextFunction } from "express";

export type AppConfigs = {
	port: number;
	baseUrl: string;
	crossOriginResourceSharing?: Cors;
	middleware?: Array<
		(req: Request, res: Response, next: NextFunction) => void
	>;
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
