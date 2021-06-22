// main.js
const {Worker}=require('jest-worker');

async function main() {
    // |=> khởi tạo 1 worker với worker là file heavy-task.js
    //cho phép bạn gọi các phương thức được xuất của mô-đun như thể chúng là các phương thức của lớp
    const worker = new Worker(require.resolve('./heavy-task.js'));
  // chạy 2 task song song với các đối số khác nhau
    const results = await Promise.all([
      worker.myHeavyTask({foo: 'Ami'}),
      worker.myHeavyTask('Lily'),
    ]);
  
    console.log(results);//[ 'I have a variable is [object Object]', 'I have a variable is Lily' ]
  }
  
  main();