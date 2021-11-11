import React from 'react';
import { useTracker } from "meteor/react-meteor-data";
import { LinksCollection } from "../api/links";

export const App = () => {
  const { loading, links } = useTracker(() => {
    const linkSub = Meteor.subscribe("links");

    const loading = !linkSub.ready();
    const links = LinksCollection.find().fetch();

    return {
      links,
      loading,
    }
  });

  if (loading) return "Loading"

  return (
    <div>
      <h1>Welcome to Meteor!</h1>

      <ul>{links.map(
        link => <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
        </li>
      )}</ul>
    </div>
  );
};
