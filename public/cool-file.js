
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
    return (event)=>this.setState({[param]: event.target.value.length>0?event.target.value:undefined});
  }

  render() {
    return (
      React.createElement("form", {onSubmit: this.handleSubmit}, 
        React.createElement("label", null, 
          "String:", 
          React.createElement("input", {type: "text", value: this.state.value, onChange: this.handleChange('value')})
        ), 
        React.createElement("label", null, 
          "Param 1:", 
          React.createElement("input", {type: "text", value: this.state.param1, onChange: this.handleChange('param1')})
        ), 
        React.createElement("label", null, 
          "Param 2:", 
          React.createElement("input", {type: "text", value: this.state.param2, onChange: this.handleChange('param2')})
        ), 
        React.createElement("br", null), 
        React.createElement("h3", null, `${this.state.value}.slice(${this.state.param1},${this.state.param2})`), 
        React.createElement(StringTable, {str: this.state.value, sub: this.state.value.slice(this.state.param1,this.state.param2)}), 
        React.createElement("h3", null, `${this.state.value}.substr(${this.state.param1},${this.state.param2})`), 
        React.createElement(StringTable, {str: this.state.value, sub: this.state.value.substr(this.state.param1,this.state.param2)}), 
        React.createElement("h3", null, `${this.state.value}.substring(${this.state.param1},${this.state.param2})`), 
        React.createElement(StringTable, {str: this.state.value, sub: this.state.value.substring(this.state.param1,this.state.param2)})
      )
    );
  }
}

const StringTable = ({str, sub}) => (React.createElement("table", null, 
    React.createElement("thead", null, 
        React.createElement("tr", null, 
          str.split('').map((c,i)=>(React.createElement("th", null,  i )))
        )
    ), 
    React.createElement("tbody", null, 
        React.createElement("tr", null, 
          str.split('').map((c,i)=>(React.createElement("th", {style: {color:i>=str.indexOf(sub)&&i<(str.indexOf(sub)+sub.length)?'black':'gray'}},  c )))
        )
    )
  ))

      
const my_app = React.createElement(App, null)