const PI: number = 3.14;

export const circumference = (radius: number): number => PI * Math.pow(radius, 2);
/* 
    CommonJS syntax would be:
    export:
        module.export = {
            circumference,
            ...
        }
*/