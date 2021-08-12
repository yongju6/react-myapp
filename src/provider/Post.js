// 임시로 데이터 넣는 것임! 원래는 다운 받아야함
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

function getData() {
  return posts;
}

export { getData };
