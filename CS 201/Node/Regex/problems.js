//Create regex that will make sure that the string:
//1. starts with a Mr. Mrs. Ms. Dr. or Er.
//2. has a space after part 1
//3. ends with word that starts with a capital and has 0 or more lowercase after

//Mr. E ✅
//Dr. Reese ✅
// Mrs. west ❌ no cap
//Tn#georgE ❌ title not alllowed, not a period, no space, no cap, cap after first letter

//output should paste every name that passes


const re1 = /(Mr|Mrs|Ms|Dr|Er)\. [A-Z][a-z]*/g

