'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

const neighborhoods = [
	{ value: 'aricanduva', label: 'Aricanduva' },
	{ value: 'carrao', label: 'Carrão' },
	{ value: 'vila_formosa', label: 'Vila Formosa' },
	{ value: 'butanta', label: 'Butantã' },
	{ value: 'morumbi', label: 'Morumbi' },
	{ value: 'raposo_tavares', label: 'Raposo Tavares' },
	{ value: 'rio_pequeno', label: 'Rio Pequeno' },
	{ value: 'vila_sonia', label: 'Vila Sônia' },
	{ value: 'campo_limpo', label: 'Campo Limpo' },
	{ value: 'capao_redondo', label: 'Capão Redondo' },
	{ value: 'vila_andrade', label: 'Vila Andrade' },
	{ value: 'capela_do_socorro', label: 'Capela do Socorro' },
	{ value: 'cidade_dutra', label: 'Cidade Dutra' },
	{ value: 'grajau', label: 'Grajaú' },
	{ value: 'socorro', label: 'Socorro' },
	{ value: 'brasilandia', label: 'Brasilândia' },
	{ value: 'cachoeirinha', label: 'Cachoeirinha' },
	{ value: 'casa_verde', label: 'Casa Verde' },
	{ value: 'cidade_ademar', label: 'Cidade Ademar' },
	{ value: 'pedreira', label: 'Pedreira' },
	{ value: 'cidade_tiradentes', label: 'Cidade Tiradentes' },
	{ value: 'ermelino_matarazzo', label: 'Ermelino Matarazzo' },
	{ value: 'ponte_rasa', label: 'Ponte Rasa' },
	{ value: 'freguesia_do_o', label: 'Freguesia do Ó' },
	{ value: 'pirituba', label: 'Pirituba' },
	{ value: 'sao_domingos', label: 'São Domingos' },
	{ value: 'guaianases', label: 'Guaianases' },
	{ value: 'lajeado', label: 'Lajeado' },
	{ value: 'itaim_paulista', label: 'Itaim Paulista' },
	{ value: 'vila_curuca', label: 'Vila Curuçá' },
	{ value: 'itaquera', label: 'Itaquera' },
	{ value: 'cidade_lider', label: 'Cidade Líder' },
	{ value: 'jose_bonifacio', label: 'José Bonifácio' },
	{ value: 'parque_do_carmo', label: 'Parque do Carmo' },
	{ value: 'jabaquara', label: 'Jabaquara' },
	{ value: 'jacana', label: 'Jaçanã' },
	{ value: 'tremembe', label: 'Tremembé' },
	{ value: 'barra_funda', label: 'Barra Funda' },
	{ value: 'jaguara', label: 'Jaguara' },
	{ value: 'jaguare', label: 'Jaguaré' },
	{ value: 'lapa', label: 'Lapa' },
	{ value: 'perdizes', label: 'Perdizes' },
	{ value: 'vila_leopoldina', label: 'Vila Leopoldina' },
	{ value: 'jardim_angela', label: 'Jardim Ângela' },
	{ value: 'jardim_sao_luis', label: 'Jardim São Luís' },
	{ value: 'belem', label: 'Belém' },
	{ value: 'bras', label: 'Brás' },
	{ value: 'mooca', label: 'Mooca' },
	{ value: 'pari', label: 'Pari' },
	{ value: 'tatuape', label: 'Tatuapé' },
	{ value: 'agua_rasa', label: 'Água Rasa' },
	{ value: 'marsilac', label: 'Marsilac' },
	{ value: 'parelheiros', label: 'Parelheiros' },
	{ value: 'artur_alvim', label: 'Artur Alvim' },
	{ value: 'cangaiba', label: 'Cangaíba' },
	{ value: 'penha', label: 'Penha' },
	{ value: 'vila_matilde', label: 'Vila Matilde' },
	{ value: 'anhanguera', label: 'Anhanguera' },
	{ value: 'perus', label: 'Perus' },
	{ value: 'alto_de_pinheiros', label: 'Alto de Pinheiros' },
	{ value: 'itaim_bibi', label: 'Itaim Bibi' },
	{ value: 'jardim_paulista', label: 'Jardim Paulista' },
	{ value: 'pinheiros', label: 'Pinheiros' },
	{ value: 'santana', label: 'Santana' },
	{ value: 'tucuruvi', label: 'Tucuruvi' },
	{ value: 'mandaqui', label: 'Mandaqui' },
	{ value: 'campo_belo', label: 'Campo Belo' },
	{ value: 'santo_amaro', label: 'Santo Amaro' },
	{ value: 'sapopemba', label: 'Sapopemba' },
	{ value: 'bela_vista', label: 'Bela Vista' },
	{ value: 'bom_retiro', label: 'Bom Retiro' },
	{ value: 'cambuci', label: 'Cambuci' },
	{ value: 'consolacao', label: 'Consolação' },
	{ value: 'liberdade', label: 'Liberdade' },
	{ value: 'republica', label: 'República' },
	{ value: 'santa_cecilia', label: 'Santa Cecília' },
	{ value: 'se', label: 'Sé' },
	{ value: 'sao_mateus', label: 'São Mateus' },
	{ value: 'sao_rafael', label: 'São Rafael' },
	{ value: 'jardim_helena', label: 'Jardim Helena' },
	{ value: 'sao_miguel', label: 'São Miguel' },
	{ value: 'vila_jacui', label: 'Vila Jacuí' },
	{ value: 'vila_guilherme', label: 'Vila Guilherme' },
	{ value: 'vila_maria', label: 'Vila Maria' },
	{ value: 'vila_medeiros', label: 'Vila Medeiros' },
	{ value: 'saude', label: 'Saúde' },
	{ value: 'vila_mariana', label: 'Vila Mariana' },
];

export function NeighborhoodSelect({
	setNeighborhood,
}: {
	setNeighborhood: React.Dispatch<
		React.SetStateAction<{ label: string; value: string } | undefined>
	>;
}) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('');

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between h-12"
				>
					{value
						? neighborhoods.find((neighborhood) => neighborhood.value === value)
								?.label
						: 'Bairros de SP'}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[300px] p-0">
				<Command>
					<CommandInput placeholder="Selecione um bairro de SP..." />
					<CommandList>
						<CommandEmpty>No framework found.</CommandEmpty>
						<CommandGroup>
							{neighborhoods.map((neighborhood) => (
								<CommandItem
									key={neighborhood.value}
									value={neighborhood.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? '' : currentValue);
										setNeighborhood(neighborhood);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											'mr-2 h-4 w-4',
											value === neighborhood.value
												? 'opacity-100'
												: 'opacity-0',
										)}
									/>
									{neighborhood.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
