import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { Mutation } from "react-apollo";
import { POST_MUTATION, FEED_QUERY } from "../query";
import { LINKS_PER_PAGE } from "../constants";

class CreateLink extends Component<RouteComponentProps> {
  state = {
    description: "",
    url: "",
  };

  _updateCacheAfterPost = (store: any, post: any) => {
    const data = store.readQuery({ query: FEED_QUERY });
    data.feed.links.unshift(post);
    store.writeQuery({
      query: FEED_QUERY,
      data,
    });
  };

  render() {
    const { description, url } = this.state;
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={(e) => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={(e) => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <Mutation
          mutation={POST_MUTATION}
          variables={{ description, url }}
          onCompleted={() => this.props.history.push("/new/1")}
          update={(store: any, { data: { post } }: any) => {
            const take = LINKS_PER_PAGE;
            const skip = 0;
            const orderBy = { createdAt: "desc" };
            const data = store.readQuery({
              query: FEED_QUERY,
              variables: { take, skip, orderBy },
            });
            data.feed.links.unshift(post);
            store.writeQuery({
              query: FEED_QUERY,
              data,
              variables: { take, skip, orderBy },
            });
          }}
        >
          {(postMutation: any) => (
            <button onClick={postMutation}>Submit</button>
          )}
        </Mutation>
      </div>
    );
  }
}

export default CreateLink;
