const csvToJson = (str, delimiter = ',') => {
    str = str.replace(/\r/g, '').slice(0, -1)
    const titles = str.slice(0, str.indexOf('\n')).split(delimiter);
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');
    return rows.map(row => {
        const values = row.split(delimiter);
        return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
    });
};
export default csvToJson;