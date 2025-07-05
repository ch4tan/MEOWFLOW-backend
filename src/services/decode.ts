const decode = (target: string, round: number): string => {
    let result: string = target.slice();

    for(let i:number = 0; i < round; i++) result = atob(result);

    return result;
};

export default decode;