import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', gender: '', pronoun: '', hometown: '', FavoriteFood: '', Birthday: '', HUID: '', Concentration: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleChangePronoun = this.handleChangePronoun.bind(this);
    this.handleChangeHometown = this.handleChangeHometown.bind(this);
    this.handleChangeFaveFood = this.handleChangeFaveFood.bind(this);
    this.handleChangeBirthday = this.handleChangeBirthday.bind(this);
    this.handleChangeHUID = this.handleChangeHUID.bind(this);
    this.handleChangeConcentration = this.handleChangeConcentration.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeGender(event) {
    this.setState({gender: event.target.value});
  }

  handleChangePronoun(event) {
    this.setState({pronoun: event.target.value});
  }

  handleChangeHometown(event) {
    this.setState({hometown: event.target.value});
  }

  handleChangeFaveFood(event) {
    this.setState({FavoriteFood: event.target.value});
  }

  handleChangeBirthday(event) {
    this.setState({Birthday: event.target.value});
  }

  handleChangeHUID(event) {
    this.setState({HUID: event.target.value});
  }

  handleChangeConcentration(event) {
    this.setState({Concentration: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('User\'s name is USER_NAME, and USER_PRONOUN are from USER_HOMETOWN. USER_PRONOUN was born on USER_BIRTHDAY, and USER_PRONOUN favorite foods are FOOD_1, FOOD_2, and FOOD_3. At Harvard, USER_NAME studies USER_CONCENTRATION.');
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name={this.state.name} onChangeName={this.handleChangeName} />
        </label>

        <label>
          Gender:
          <select>
            <option gender={this.state.gender} onChangeGender={this.handleChangeGender}>Male</option>
            <option gender={this.state.gender} onChangeGender={this.handleChangeGender}>Female</option>
            <option gender={this.state.gender} onChangeGender={this.handleChangeGender}>Other</option>
          </select>
        </label>

        <label>
          Pronoun:
          
        </label>

        <label>
          Hometown:
          <input type="text" value={this.state.value} onChangeHometown={this.handleChange} />
        </label>

        <label>
          3 Favorite Foods:
          <input type="text" Fave={this.state.value} onChangeFaveFood={this.handleChange} />
        </label>

        <label>
          Birthday:
          <input type="date" Birthday={this.state.Birthday} onChangeBirthday={this.handleChangeBirthday}/>
        </label>

        <label>
          HUID:
          <input type="number" HUID={this.state.HUID} onChangeHUID={this.handleChangeHUID} />
        </label>

        <label>
          Concentration:
          <input type="text" Concentration={this.state.Concentration} onChangeConcentration={this.handleChange} />
        </label>

        <button type="submit" value="Submit" onClick={this.handleSubmit}/>
      </form>
    );
  }
}

export default Home;

