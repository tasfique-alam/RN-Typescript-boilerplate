/**
 * Remove the ending slash character from a string
 * @param string {string}
 * @constructor
 */
export function removeEndingSlash(string: string): string {
    return string.replace(/\/$/, "");
}