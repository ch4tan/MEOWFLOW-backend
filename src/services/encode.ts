const encode = (target: string, round: number): string => {
    let result: string = target.slice();

    for(let i:number = 0; i < round; i++) result = btoa(result);

    return result;
};

export default encode;