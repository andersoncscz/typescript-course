import { circumference } from './circumference';
import { rectangle } from './rectangle';
/* 
    CommonJS syntax would be:
    
    import:
        require('./circumference');
        require('./rectangle');
*/

console.log('Circumference: ', circumference(10));
console.log('Rectangle: ', rectangle(10, 20));