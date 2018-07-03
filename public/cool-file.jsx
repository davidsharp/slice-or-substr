class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'hello world',
      param1: '2',
      param2: '-1',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(param) {
    return (event)=>this.setState({[param]: param=='value'||event.target.value.length>0?event.target.value:undefined});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          String:
          <input type="text" value={this.state.value} onChange={this.handleChange('value')} />
        </label>
        <label>
          Param 1:
          <input type="text" value={this.state.param1} onChange={this.handleChange('param1')} />
        </label>
        <label>
          Param 2:
          <input type="text" value={this.state.param2} onChange={this.handleChange('param2')} />
        </label>
        <br/>
        <h3>{`'${this.state.value}'.slice(${this.state.param1},${this.state.param2})`}</h3>
        <StringTable str={this.state.value} sub={this.state.value.slice(this.state.param1,this.state.param2)} />
        <h3>{`'${this.state.value}'.substr(${this.state.param1},${this.state.param2})`}</h3>
        <StringTable str={this.state.value} sub={this.state.value.substr(this.state.param1,this.state.param2)} />
        <h3>{`'${this.state.value}'.substring(${this.state.param1},${this.state.param2})`}</h3>
        <StringTable str={this.state.value} sub={this.state.value.substring(this.state.param1,this.state.param2)} />
      </form>
    );
  }
}

const StringTable = ({str, sub}) => (<table>
    <thead>
        <tr>
          {str.split('').map((c,i)=>(<th>{ i }</th>))}
        </tr>
    </thead>
    <tbody>
        <tr>
          {str.split('').map((c,i)=>(<th style={{color:i>=str.indexOf(sub)&&i<(str.indexOf(sub)+sub.length)?'black':'gray'}}>{ c }</th>))}
        </tr>
    </tbody>
  </table>)

      
const my_app = <App/>