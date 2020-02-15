import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import sprite from "svg-sprite-loader/runtime/sprite.build";

class MyDocument extends Document {
	render() {
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
					{/*eslint-disable-next-line react/no-danger*/}
					<div dangerouslySetInnerHTML={{ __html: sprite.stringify() }} />
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default MyDocument;
