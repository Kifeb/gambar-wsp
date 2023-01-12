import React, {Component} from 'react';
import InputForm from './components/InputForm';
import ListResult from './components/ListResult';
import NavBar from './components/NavBar';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: '',
      img: '',
      extension: '',
      quantity: '',
      urls: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.InputChange = this.InputChange.bind(this);
  }

  InputChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleChange(e) {
    e.preventDefault();

    if (
      !this.state.img ||
      !this.state.urls ||
      !this.state.domain ||
      !this.state.extension ||
      !this.state.quantity
    ) {
      return alert('Isi dulu dong,baru bisa lanjut');
    }

    const urls = [];
    for (let i = 1; i <= this.state.quantity; i++) {
      const url = `https://${this.state.domain}/uploads/${this.state.img}${i}.${this.state.extension}`;
      urls.push(url);
    }
    this.setState({urls});
  }

  render() {
    return (
      <>
        <NavBar />
        <main className="h-[70vh] grid grid-cols-2 mt-8">
          <InputForm
            domain={this.state.domain}
            img={this.state.img}
            extension={this.state.extension}
            quantity={this.state.quantity}
            InputChange={this.InputChange}
            handleChange={this.handleChange}
          />
          <ListResult urls={this.state.urls} />
        </main>
      </>
    );
  }
}

export default App;
