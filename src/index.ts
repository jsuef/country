import {Countries, Country} from "./country";

export function FindByAlpha2(alpha2: string): Country | undefined {
    const code = alpha2.toUpperCase();
    return List().find(c => c.alpha2 === code);
}

export function FindByAlpha3(alpha3: string): Country | undefined {
    const code = alpha3.toUpperCase();
    return List().find(c => c.alpha3 === code);
}

export function FindByName(name: string): Country | undefined {
    const target = name.toUpperCase();
    return List().find(c => c.name.toUpperCase() === target);
}

export function List(): Country[] {
    return Countries;
}
