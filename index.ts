import Apps from "./app/app";
import { AppConfigs } from "./types/types";

const configs: AppConfigs = {
	port: 5050,
	baseUrl: "/api/v1",
	crossOriginResourceSharing: {
		using: true,
	},
};

const app = new Apps(configs);
app.run();
