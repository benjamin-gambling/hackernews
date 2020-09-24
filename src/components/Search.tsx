import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { FEED_SEARCH_QUERY } from "../query";
import Link from "./Link";
import { IClient } from "../interfaces";

class Search extends Component<IClient> {
  state = {
    links: [],
    filter: "",
  };

  _executeSearch = async () => {
    const { filter } = this.state;
    const result = await this.props.client.query({
      query: FEED_SEARCH_QUERY,
      variables: { filter },
    });
    const links = result.data.feed.links;
    this.setState({ links });
  };

  render() {
    return (
      <div>
        <div>
          Search
          <input
            type="text"
            onChange={(e) => this.setState({ filter: e.target.value })}
          />
          <button onClick={() => this._executeSearch()}>OK</button>
        </div>
        {this.state.links.map((link: any, index: number) => (
          <Link key={link.id} link={link} index={index} />
        ))}
      </div>
    );
  }
}

export default withApollo(Search);
