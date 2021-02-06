import fetch from 'unfetch';

export default async(path) => {
    const data = await fetch(path);
    return data.json();
}