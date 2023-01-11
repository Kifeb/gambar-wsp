import React, {Component} from 'react';
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

    if (!this.state.img || !this.state.urls || !this.state.domain) {
      return alert('iSi dUlu k4kA');
    }

    const urls = [];
    for (let i = 1; i <= this.state.quantity; i++) {
      const url = `https://${this.state.domain}/uploads/${this.state.img}${i}.${this.state.extension},`;
      urls.push(url);
    }
    this.setState({urls});
  }

  render() {
    return (
      <>
        <NavBar />
        <main>
          <section className="flex justify-center">
            <form className="flex flex-col w-6/12">
              <input
                type="text"
                name="domain"
                value={this.state.domain}
                placeholder="Nama Domain"
                onChange={this.InputChange}
              />
              <input
                type="text"
                name="img"
                value={this.state.img}
                placeholder="Nama Gambar"
                onChange={this.InputChange}
              />
              <input
                type="text"
                name="extension"
                value={this.state.extension}
                placeholder="Extensi Gambar"
                onChange={this.InputChange}
              />
              <input
                type="number"
                name="quantity"
                value={this.state.quantity}
                placeholder="Jumlah Gambar"
                onChange={this.InputChange}
              />
              <br />
              <button type="submit" onClick={this.handleChange}>
                Log URLs
              </button>
            </form>
          </section>

          <ListResult urls={this.state.urls} />
        </main>
      </>
    );
  }
}

export default App;
