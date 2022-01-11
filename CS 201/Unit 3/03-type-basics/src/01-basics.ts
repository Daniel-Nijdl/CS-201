let num: number = 5;
const user: string = "test";

const add = (n1: number, n2: number): string => {
  console.log(n1 + n2);

  return `the sum is ${n1 + n2}`;
};

const addAndHandle = (
  n1: number,
  n2: number,
  cb: (result: string) => void
): void => {
  const result: number = n1 + n2;
  cb(`${result}`);
};

addAndHandle(2, 60, (result) => {
  console.log(result);
});

const concatAndHandle = (
  str1: string,
  str2: string,
  // s3: void,
  cb: (strResult: string) => void
) => {
  const strResult: string = str1 + "" + str2;
  cb(strResult)
}

concatAndHandle('this', 'that', (strResult) => {
  console.log(strResult);
  
})

const strArray = ["test", "test2", "test3", "test4"]

const concatAll = (...strings: string[]) => {
  console.log(strings.join(""));
  
}



