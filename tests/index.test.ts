import { FindByAlpha2, FindByAlpha3, FindByName } from '../src/index';
import { Country } from '../src/country';

describe('Country lookup', () => {
    test('findByAlpha2 returns correct country for valid Alpha-2 code', () => {
        const result = FindByAlpha2('cz');
        expect(result).toBeDefined();
        expect(result?.name).toBe('Czechia');
        expect(result?.alpha3).toBe('CZE');
    });

    test('findByAlpha2 returns undefined for invalid Alpha-2 code', () => {
        const result = FindByAlpha2('xx');
        expect(result).toBeUndefined();
    });

    test('findByAlpha3 returns correct country for valid Alpha-3 code', () => {
        const result = FindByAlpha3('DEU');
        expect(result).toBeDefined();
        expect(result?.name).toBe('Germany');
        expect(result?.alpha2).toBe('DE');
    });

    test('findByAlpha3 returns undefined for invalid Alpha-3 code', () => {
        const result = FindByAlpha3('XYZ');
        expect(result).toBeUndefined();
    });

    test('findByName returns correct country by name (case-insensitive)', () => {
        const result = FindByName('czechia');
        expect(result).toBeDefined();
        expect(result?.alpha2).toBe('CZ');
    });

    test('findByName returns undefined for unknown country name', () => {
        const result = FindByName('Atlantis');
        expect(result).toBeUndefined();
    });
});
