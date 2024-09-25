import { Search } from '@/components/search';
import { Separator } from '@/components/ui/separator';
import { WeatherResult } from '@/components/weatherResult';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="w-screen h-screen mx-auto bg-white text-black p-5">
			<div className="max-w-screen-md mx-auto h-full">
				<Image
					className="mx-auto"
					src="/logo.png"
					alt="logo"
					width="500"
					height="500"
				/>

				<div className="flex h-[60%] justify-between items-center mt-20 gap-10">
					<div className="h-full ">
						<Search />
					</div>

					<Separator
						orientation="vertical"
						className="h-[80%] w-[2px] bg-zinc-300 "
					/>

					<div className="h-full w-1/2">
						<WeatherResult />
					</div>
				</div>
			</div>
		</main>
	);
}
