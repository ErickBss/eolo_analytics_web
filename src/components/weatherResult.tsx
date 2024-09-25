import {
	CloudOff,
	Droplet,
	Droplets,
	LucideIcon,
	MapPin,
	Thermometer,
	Wind,
} from 'lucide-react';

export function WeatherResult() {
	return (
		<div>
			<div className="flex items-center">
				<MapPin size={40} className="mr-2" />
				<p className="text-zinc-600 font-medium text-lg">
					Pinheiros - São Paulo
				</p>
			</div>

			<div className="border rounded-xl p-4 mt-5 grid grid-cols-2 gap-5">
				<Item Icon={Thermometer} label="Temperatura" value="16 C" />
				<Item Icon={Thermometer} label="Sesação térmica" value="16 C" />
				<Item Icon={Droplet} label="Preciptação" value="80mm" />
				<Item Icon={Droplets} label="Umidade" value="54%" />
				<Item Icon={CloudOff} label="Dias sem chuva" value="10" />
				<Item Icon={Wind} label="Velocidade/dir. do vento" value="N 10 km/h" />
			</div>
		</div>
	);
}

function Item({
	Icon,
	label,
	value,
}: {
	Icon: LucideIcon;
	label: string;
	value: string;
}) {
	return (
		<div className="flex gap-2">
			<Icon size={42} />
			<div className="text-sm">
				<p className="font-bold">{label}</p>
				<p>{value}</p>
			</div>
		</div>
	);
}
