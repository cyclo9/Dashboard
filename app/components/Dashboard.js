import Wrapper from "./Wrapper"
import Site from './Site'

import { sites } from "@/app/sites"

const Dashboard = () => {
	return (
		<div className="w-screen h-screen p-2 overflow-hidden">
			<div className="border-black border-2 rounded-lg w-full h-full p-2 bg-gradient-to-br 
			from-cyan-300 via-green-200 to-violet-400 overflow-auto">
				<div className="w-full p-2">
					<h1>Dashboard</h1>
					{/* by default only has rows, on large screen has columns*/}
					<div className="grid sm:grid-cols-4 gap-2">
						{sites.map((element, i) => {
							return (
								<Wrapper key={i} title={element.title}>
									{element.components.map((site, i) => {
										return (
											<Site
												key={i}
												image={site.image}
												link={site.link}
												text={site.text}
											/>
										)
									})}
								</Wrapper>
							)
						})}
					</div>

				</div>

				{/* Edit Sites List Button */}
				<a href='https://github.com/cyclo9/Dashboard/edit/main/app/sites.js' target="_blank">
					<div className="fixed bottom-[20px] right-[20px] bg-white p-2 rounded-lg hover:drop-shadow-2xl">
						<b>Edit Dashboard</b>
					</div>
				</a>
			</div>
		</div>
	)
}

export default Dashboard