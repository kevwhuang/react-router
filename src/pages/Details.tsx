import { useSearchParams } from 'react-router-dom';

import data from '../data/data.json';

export default function () {
    const [params]: any = useSearchParams();
    const raw: any = data[params.get('id') - 1];
    const name = raw['Name'].toUpperCase();

    const fields: any = {
        Acceleration: raw['Acceleration'],
        Country: raw['Origin'],
        Cylinders: raw['Cylinders'],
        Displacement: raw['Displacement'],
        Horsepower: raw['Horsepower'],
        MPG: raw['Miles_per_Gallon'],
        Weight: raw['Weight_in_lbs'],
        Year: raw['Year'],
    };

    return (
        <div className="details">
            <h2>{name}</h2>
            {Object.keys(fields).map((key, i) => (
                <ul key={i}>
                    <li>{key}: {fields[key]}</li>
                </ul>
            ))}
        </div>
    );
}
