import React, { Component } from 'react';

export default class FormDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: 'leslie',
        info: '个人信息',
        city: 'guangzhou',
        flag: true,
        gender: 'male'
    };
  }

  onInputChange = (e) => {
      this.setState({
          name: e.target.value
      })
  }

  onTextareaChange = (e) => {
      this.setState({
          info: e.target.value
      })
  }

  onSelectChange = (e) => {
    this.setState({
        city: e.target.value
    })
}

onCheckboxChange = () => {
    this.setState({
        flag: !this.state.flag
    })
}

onRadioChange = (e) => {
    this.setState({
        gender: e.target.value
    })
}

  render() {
    return (
      <div>
          {/* 受控组件 */}
          <div>
                <p>{this.state.name}</p>
                <label htmlFor="inputName">姓名：</label> {/* htmlFor 代替 for */}
                <input id="inputName" value={this.state.name} onChange={this.onInputChange}></input>
          </div>
          <div>
              <p>{this.state.info}</p>
              <textarea value={this.state.info} onChange={this.onTextareaChange}></textarea>
          </div>
          <div>
              <p>{this.state.city}</p>
              <select value={this.state.city} onChange={this.onSelectChange}>
                  <option value="beijing">北京</option>
                  <option value="guangzhou">广州</option>
                  <option value="shanghai">上海</option>
              </select>
          </div>
          <div>
              <p>{this.state.flag.toString()}</p>
              <input type="checkbox" checked={this.state.flag} onChange={this.onCheckboxChange}></input>
          </div>
          <div>
              <p>{this.state.gender}</p>
              male:<input type="radio" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.onRadioChange}></input>
              female:<input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.onRadioChange}></input>
          </div>
      </div>
    )
  }
}