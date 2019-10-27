/* 
    Namespaces avoid conflicts of functions and variables declared with a name that already exist in its context.
    Modules are a much better approach than namespaces.
*/
namespace Geometry {
    
    export namespace Area {

        const PI: number = 3.14;
    
        export const circumference = (radius: number): number => PI * Math.pow(radius, 2);
        export const rectangle = (base: number, height: number): number => base * height;
    }
}

console.log('Circumference: ', Geometry.Area.circumference(10));
console.log('Rectangle: ', Geometry.Area.rectangle(10, 20));