//Objectasign funcitian which return us function. This function must give, two or more arguments.

const objectAssign = (filter: ([k, v]: [string, any]) =>
    boolean = ([, v]) => v !== undefined) => (
	target: object,
	...sources: object[]
) => Object.assign(
	target,
	...sources.map(x => Object.entries(x)
		.filter(filter)
		.reduce<Record<string, any>>((ob, [k, v]) => {
			const clearOb = ob;
			clearOb[k] = v;
			return clearOb;
		}, {}))
);

export default objectAssign;
