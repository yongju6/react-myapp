import React from 'react';

let num = 10;

let user = {
  id: 1,
  username: "ssar",
  email: "ssar@nate.com"
};

let users = [
  {
    id: 1,
    username: "ssar",
    email: "ssar@nate.com"
  },
  {
    id: 2,
    username: "cos",
    email: "cos@nate.com"
  },
  {
    id: 3,
    username: "mos",
    email: "mos@nate.com"
  }
];

function JsxTest() {
  return (
    // 여기도 div 태그에 넣어서 하나의 dom만 return 해줌
    // javascript 변수를 넣고 싶으면 {} 중괄호로 넣어준다
    // js에서는 if문을 쓰지 않음
    // if/for 같은 stack이 expression이 아닌 것들은 사용 못함
    // if를 하고 싶을 땐 삼항연산자를 써야함 -> 삼항 연산자는 표현식이기 때문에 사용 가능
    <div>
      <h1>JSX 문법 예제 {num} </h1>   
      <hr />
      <div>
          <div>3. 삼항 연산자 - if를 사용할 수 없음</div>
          {num === 10 ? "ok":"fail"}    
      </div>
      <div>
          id : {user.id}<br />
          username : {user.username}<br />
          email : {user.email}<br />
      </div>
      <hr />
      <div>
        {users[0].username}
        <hr />
        {users.map(user => <div>{user.username}</div>)}
      </div>
    </div>
  );
}


export {num};     // default가 아니면 {} 중괄호로 public으로 공개함
// 2. export는 java의 public 과 같다
export default JsxTest;   // java 에서는 public 같은 문법 - 외부에서도 사용할 수 있도록