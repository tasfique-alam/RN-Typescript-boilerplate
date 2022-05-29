/**
 * Capitalize a string
 * @param String {string}
 * @constructor
 */
export function capitalize(String: string): string {
    return String.charAt(0).toUpperCase() + String.slice(1);
}