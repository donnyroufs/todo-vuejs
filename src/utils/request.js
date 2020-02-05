const request = async (req) => {
    const res = await fetch(req);
    const data = await res.json();
    return data.length <= 0 ? [] : data;
}

export default request;