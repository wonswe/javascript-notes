function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000); // 3초 뒤에 실행
  console.log('3');
}

execute(); // 1
