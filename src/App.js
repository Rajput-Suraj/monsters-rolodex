import { Component } from "react";
import axios from "axios";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: "",
        };
    }

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => this.setState({ monsters: response.data }));
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value });
    };

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
        });
        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox
                    handleSearch={this.handleChange}
                    placeholder="Search monsters"
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
