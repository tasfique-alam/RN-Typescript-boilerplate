/**
 * Remove the starting slash character from a string
 * @param string {string}
 * @constructor
 */
export function removeStartingSlash(string: string): string {
    if(string.indexOf('/') === 0) {
        return string.replace('/','');
    }

    return string;
}