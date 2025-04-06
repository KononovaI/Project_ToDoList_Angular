import { Category } from "../model/Category";
import { Priority } from "../model/Priority";
import { Task } from "../model/Task";

export class TestData {
	static categories: Category[] = [
		{id: 1, title: "Work"},
		{id: 2, title: "Family"},
		{id: 3, title: "Study"},
		{id: 4, title: "Sport"},
		{id: 5, title: "Leisure"},
	];

	static priorities: Priority[] = [
		{id: 1, title: "Urgent", color: "#F1128D"},
		{id: 2, title: "High", color: "#F1828D"},
		{id: 3, title: "Middle", color: "#F85D1B2"},
		{id: 4, title: "Low", color: "#Fe5e5e5"},
	];

	static tasks: Task[] = [
		{
			id: 1,
			title: "Pay bills",
			priority: TestData.priorities[0],
			completed: false,
			category: TestData.categories[1],
			date: new Date("05.04.2025"),
		},
		{
			id: 2,
			title: "Finish tutorial",
			priority: TestData.priorities[2],
			completed: false,
			category: TestData.categories[2],
			date: new Date("05.04.2025"),
		},
		{
			id: 3,
			title: "Go out with friends",
			priority: TestData.priorities[1],
			completed: false,
			category: TestData.categories[4],
			date: new Date("05.04.2025"),
		},
		{
			id: 4,
			title: "Go to the gym",
			priority: TestData.priorities[3],
			completed: false,
			category: TestData.categories[3],
			date: new Date("05.04.2025"),
		},

	]

}