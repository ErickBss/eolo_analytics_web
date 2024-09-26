import {
	CloudOff,
	Droplet,
	Droplets,
	LucideIcon,
	Thermometer,
	ThermometerSun,
	Wind,
} from 'lucide-react';

type WeatherResultProps = {
	humidity: number;
	real_feal: number;
	temperature: number;
	wind_direction: string;
	wind_speed: number;
};

export function WeatherResult({
	humidity,
	real_feal,
	temperature,
	wind_direction,
	wind_speed,
}: WeatherResultProps) {
	return (
		<div className="border rounded-xl p-4  grid grid-cols-2 gap-5">
			<Item Icon={Thermometer} label="Temperatura" value={`${temperature} C`} />
			<Item
				Icon={ThermometerSun}
				label="Sesação térmica"
				value={`${real_feal} C`}
			/>
			<Item Icon={Droplet} label="Preciptação" value="80mm" />
			<Item Icon={Droplets} label="Umidade" value={`${humidity}%`} />
			<Item Icon={CloudOff} label="Dias sem chuva" value="10" />
			<Item
				Icon={Wind}
				label="Velocidade/dir. do vento"
				value={`${wind_direction} ${wind_speed} km/h`}
			/>
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
