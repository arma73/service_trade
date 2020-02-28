const CategoriesMocks = () => ({
	lists: {
		mainText: "All Categories",
		sections: [
			{
				id: "smart_watch_1",
				mainSection: "Smart Watch",
				subsection: [
					{
						id: "sport_1",
						mainSection: "Sport",
						sectionKinds: ["Apple", "Microsoft", "Nike"]
					},
					{
						id: "business_1",
						mainSection: "Business",
						sectionKinds: ["Apple", "Samsung"]
					}
				]
			},
			{
				id: "tv_1",
				mainSection: "TV",
				subsection: [
					{
						id: "smart_1",
						mainSection: "Smart",
						sectionKinds: ["Hisence", "Samsung"]
					},
					{
						id: "android_1",
						mainSection: "Android",
						sectionKinds: ["Dell", "Fujitsu"]
					}
				]
			}
		]
	}
});

export default CategoriesMocks;
