import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	public render() {
		return (
			<html lang="en">
				<Head>
					<link rel="icon" href="/static/favicon.ico" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
						key="viewport"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default MyDocument;
