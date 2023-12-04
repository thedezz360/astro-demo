import { type APISpaceZresponse, type Doc } from "../types/api"


export async function getLatestLaunches() {

	const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
		method: "POST",
		headers: {
			"Content-Type": "aplication/json"
		},
		body: JSON.stringify({
			query: {},
			options: {
				sort: {
					date_unix: "asc"
				},
				limit: 12
			}
		})
	})

	const { docs: launches } = await res.json() as APISpaceZresponse

	return launches
}

export async function getLaunchBy({id}:{id:string}) {

	const res = await fetch("https://api.spacexdata.com/v5/launches/" + id)

	const launch = await res.json() as Doc

	return launch
}