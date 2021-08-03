import React, {Component} from 'react';
export default class Test extends Component {
constructor(){
    super()
    console.log('this is constructer');
    this.state = {
        post:[]
    }
}
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => 
      this.setState({
        post: json
      })
  )

}
componentDidUpdate(){
    console.log('this is component Update....');
}
render(){
    const {post} = this.state;
return 
    
(
    <div>
        {
    post.length >0 ? post.map((el,index) =>
    <div key={el.userId} className="card" style={{width: "18rem"}}>
    <div className="card-body">
    <h5 className="card-title">{el.title}</h5>
    <p className="card-text">{el.body}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    ) : 'null'
}
</div>
    
) 
}
}