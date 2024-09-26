import { Dispatch, SetStateAction } from 'react';
import { NeighborhoodSelect } from './neighborhoods';

export function Search({
	setNeighborhood,
}: {
	setNeighborhood: Dispatch<
		SetStateAction<{ label: string; value: string } | undefined>
	>;
}) {
	return (
		<div>
			<p className="text-lg font-medium mb-3">SELCIONE O LOCAL DE PESQUISA</p>
			<NeighborhoodSelect setNeighborhood={setNeighborhood} />
		</div>
	);
}
