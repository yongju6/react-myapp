const posts = [
  {
    id: 1,
    title: 'Easy React',
    content: 'React is .....',
  },
  {
    id: 2,
    title: 'Easy Java',
    content: 'Java is .....',
  },
  {
    id: 3,
    title: 'Easy JSP',
    content: 'JSP is .....',
  },
  {
    id: 4,
    title: 'Easy Spring',
    content: 'Spring is .....',
  },
];

// 추가
let addData = [
  ...posts,
  {
    id: 5,
    title: 'Easy Spring',
    content: 'Spring is .....',
  },
];

// console.log(addData);

// 삭제, 검색
let minusData = posts.filter((post) => post.id !== 3);
// console.log(minusData);

let selectData = posts.filter((post) => post.id === 3);
// console.log(selectData);

// 수정
let updateData = posts.map((post) => {
  return post.id === 1 ? { ...post, title: 'Hard React' } : post;
});

console.log(updateData);
