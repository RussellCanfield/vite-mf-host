import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { withZephyr } from "vite-plugin-zephyr";
import svgr from "vite-plugin-svgr";

const mfConfig = {
	name: "host",
	remotes: {
		remote: "http://localhost:4173/assets/remoteEntry.js",
		webpack: {
			external: "http://localhost:8080/remoteEntry.js",
			from: "webpack",
			format: "var",
		},
	},
	shared: ["react", "react-dom"],
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		federation(mfConfig),
		withZephyr({
			mfConfig,
		}),
	],
	build: {
		modulePreload: false,
		target: "esnext",
		minify: "esbuild",
		cssCodeSplit: false,
	},
});
