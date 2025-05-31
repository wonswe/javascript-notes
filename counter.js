// export let count = 0; 처럼 변수를 export/import 하는 것보다는
// getter와 setter를 이용하는 것이 좋다.

let count = 0;

// 하나만 디폴트로 export 할 때 사용, import시 아무 이름 사용 가능
// export default function increase() {
//   count++;
//   console.log(count);
// }

// 여러개를 export 할 때 아래처럼
export function increase() {
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}
