import {Component, Fragment, useState} from 'react'
import './App.css'
import MyClassComponent from "./MyClassComponent.jsx";

function App() {
    /* 태그를 이용하는 방법 -> 불필요한 태그가 만들어지는 단점이 있음
    return (
        <div>
            <div>첫 번째 DIV</div>
            <div>두 번재 DIV</div>
        </div>
    )
     */

    /* Fragment 컴포넌트 사용
    return (
        <Fragment>
            <div>첫 번째 DIV</div>
            <div>두 번재 DIV</div>
        </Fragment>
    )
     */

    /* Fragment 단축 표현을 사용
    return (
        <>
            <div>첫 번째 DIV</div>
            <div>두 번째 DIV</div>
        </>
    )
     */

    const name = "홍길동";

    /* JSX 내부에서는 자바스크립트의 if 문을 사용할 수 없으므로, 삼항 연산자를 사용해야 함.
    return (
        <>
            <h1>
                // JSX 안에서는 자바스크립트 표현식을 {}로 감싸서 작성함.
                { name === "홍길동" ? "환영합니다." : "환영하지 않습니다." }
            </h1>
        </>
    )
     */

    /* DOM 요소에 스타일을 적용할 때는 객체 형태로 적용해야 하며, 스타일 이름은 카멜 표현식으로 작성함.
    return (
        <>
            <h1 style={{backgroundColor: 'black', color: 'yellow', fontSize: 48, padding: '16px'}}>
                {name}
            </h1>
        </>
    )
     */

    /*
    const myStyle = {
        backgroundColor: 'black',
        color: 'yellow',
        fontSize: 48,
        padding: '16px'
    };

    return (
        <>
            <h1 style={myStyle}>
                {name}
            </h1>
        </>
    )
    */

    /* CSS 클래스를 사용할 때 class가 아닌 className으로 설정함.
    return (
        <>
            <h1 className="react">
                {name}
            </h1>
        </>
    )
     */

    /* 모든 태그는 반드시 닫는 태그를 사용해야 함.
    return (
        <>
            <h1 className="react">
                {name}
            </h1>
            <input type="text"></input>
            <input type="text" />
        </>
    )
    */

    return (
        <>
            <MyClassComponent />
            <MyClassComponent />
            <MyClassComponent />
        </>
    );

}

/* 클래스형 컴포넌트
class App extends Component {
    render() {
        return (
            <></>
        );
    }
}
*/

export default App
