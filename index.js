import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
function Card(props){
    return(
    <div className="card">
        <div className="first">
        <h2>{props.name}</h2>
        </div>
        <div className="zero"><img className="circle-img" src={props.src}
        alt="avatar.img"/>
        </div>
        <div className="bottom">
        <p>{props.tel}</p>
        <p>{props.email}</p>
        </div>
        
    </div>
    );
}
ReactDOM.render(<div>
<h1 className="con">My Contacts</h1>
<Card name="Beyonce" src="https://www.billboard.com/wp-content/uploads/2022/07/beyonce-press-2022-cr-parkwood-entertaiment-billboard-1548.jpg?w=942&h=623&crop=1&resize=942%2C623"
tel = "5747488399" email="b@gmail.com"/>
<Card name="Beyonce" src="https://www.billboard.com/wp-content/uploads/2022/07/beyonce-press-2022-cr-parkwood-entertaiment-billboard-1548.jpg?w=942&h=623&crop=1&resize=942%2C623"
tel = "5747488399" email="b@gmail.com"/>
<Card name="Beyonce" src="https://www.billboard.com/wp-content/uploads/2022/07/beyonce-press-2022-cr-parkwood-entertaiment-billboard-1548.jpg?w=942&h=623&crop=1&resize=942%2C623"
tel = "5747488399" email="b@gmail.com"/>
<Card name="Beyonce" src="https://www.billboard.com/wp-content/uploads/2022/07/beyonce-press-2022-cr-parkwood-entertaiment-billboard-1548.jpg?w=942&h=623&crop=1&resize=942%2C623"
tel = "5747488399" email="b@gmail.com"/>
<Card name="Beyonce" src="https://www.billboard.com/wp-content/uploads/2022/07/beyonce-press-2022-cr-parkwood-entertaiment-billboard-1548.jpg?w=942&h=623&crop=1&resize=942%2C623"
tel = "5747488399" email="b@gmail.com"/>
</div>,document.getElementById("root"));