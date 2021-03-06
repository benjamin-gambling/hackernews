import React, { Component } from "react";
import { AUTH_TOKEN } from "../constants";
import { timeDifferenceForDate } from "../utils";
import { LinkProps } from "../interfaces";
import { VOTE_MUTATION } from "../query";
import { Mutation } from "react-apollo";

class Link extends Component<LinkProps> {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);

    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
          <span className="gray">{this.props.index + 1}.</span>
          {authToken && (
            <Mutation
              mutation={VOTE_MUTATION}
              variables={{ linkId: this.props.link.id }}
              update={(store: any, { data: { vote } }: any) => {
                this.props.updateStoreAfterVote(
                  store,
                  vote,
                  this.props.link.id
                );
              }}
            >
              {(voteMutation: any) => (
                <div
                  id="upvote"
                  className="ml1 gray f11"
                  onClick={voteMutation}
                >
                  ▲
                </div>
              )}
            </Mutation>
          )}
        </div>

        <div className="ml1">
          <div>
            {this.props.link.description} (
            <a
              href={this.props.link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.link.url}
            </a>
            )
          </div>

          <div className="f6 lh-copy gray">
            {this.props.link.votes.length} votes | by{" "}
            {this.props.link.postedBy
              ? this.props.link.postedBy.name
              : "Unknown"}{" "}
            {timeDifferenceForDate(this.props.link.createdAt)}
          </div>
        </div>
      </div>
    );
  }
}

export default Link;
