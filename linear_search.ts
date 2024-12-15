export default function linear_search(arr: number[], key: number): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) return true;
    }
    return false;
}
