const { getChangedFilesForRoots } = require('jest-changed-files');
// in tập hợp các tệp đã sửa đổi kể từ lần commit cuối cùng trong repository
getChangedFilesForRoots(['../Day_1 v1'], {
  lastCommit: true,
}).then(result => console.log(result.changedFiles));
