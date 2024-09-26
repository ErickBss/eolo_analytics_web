'use client';

import { Search } from '@/components/search';
import { Separator } from '@/components/ui/separator';
import { WeatherResult } from '@/components/weatherResult';
import axios from 'axios';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type DataProps = {
	id: number;
	target_time: number;
	content: {
		humidity: number;
		real_feal: number;
		temperature: number;
		wind_direction: string;
		wind_speed: number;
	};
};

export default function Home() {
	const [neighborhood, setNeighborhood] = useState<{
		label: string;
		value: string;
	}>();
	const [data, setData] = useState<DataProps[]>([]);

	async function fetchData() {
		try {
			if (!neighborhood?.value) return;

			const response = await axios
				.get(
					`${process.env.NEXT_PUBLIC_API_URL}/?neighborhood=${neighborhood.value}`,
				)
				.then((res) => res.data.data);
			setData(response);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchData();
	}, [neighborhood]);

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
						<Search setNeighborhood={setNeighborhood} />
					</div>

					<Separator
						orientation="vertical"
						className="h-[80%] w-[2px] bg-zinc-300 "
					/>

					<div className="h-full w-1/2">
						{neighborhood ? (
							<div>
								<div className="flex items-center">
									<MapPin size={40} className="mr-2" />
									<p className="text-zinc-600 font-medium text-lg">
										{neighborhood.label} - São Paulo
									</p>
								</div>
								{data.map((weather) => (
									<>
										<p className="text-xl mt-3">{weather.target_time}h</p>
										<WeatherResult key={weather.id} {...weather.content} />
									</>
								))}
							</div>
						) : (
							<p>Nenhum bairro selecionado.</p>
						)}
					</div>
				</div>
			</div>
		</main>
	);
}
