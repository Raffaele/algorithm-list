function permutations(arr) {
    if (!arr.length) return [];
    if (arr.length === 1) return [arr];
    
    return arr.reduce((totalArray, el, index) => {
        const purged = arr.filter((x,i) => i !== index);
        const extra = permutations(purged);
        const complete = extra.map(extraEls => [el, ...extraEls]);
        return [...totalArray, ...complete];
    }, []);
}