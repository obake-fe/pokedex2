import { Story, Meta } from "@storybook/react/types-6-0";
import { DataCard, Props } from "@components/molecules/DataCard";

export default {
	title: "molecules/DataCard",
	component: DataCard
} as Meta;

const Template: Story<Props> = (args) => <DataCard {...args} />;

export const Bulbasaur = Template.bind({});

Bulbasaur.args = {
	pokeData: {
		id: 1,
		name: "bulbasaur",
		stats: [
			{ base_stat: 45 },
			{ base_stat: 49 },
			{ base_stat: 49 },
			{ base_stat: 65 },
			{ base_stat: 65 },
			{ base_stat: 45 }
		],
		types: [
			{ ja: "くさ", en: "grass" },
			{ ja: "どく", en: "poison" }
		]
	},
	DescArray: [
		{
			term: "No",
			description: 1
		},
		{
			term: "Name",
			description: "フシギダネ"
		},
		{
			term: "Species",
			description: "たねポケモン"
		},
		{
			term: "Type1",
			description: "grass"
		},
		{
			term: "Type2",
			description: "poison"
		},
		{
			term: "Text",
			description:
				"生まれたときから　背中に 不思議な　タネが　植えてあって 体と　ともに　育つという。"
		}
	],
	statsArray: [45, 49, 49, 65, 65, 45],
	loadingUI: { state: false }
};
