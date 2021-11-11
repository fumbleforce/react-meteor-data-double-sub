import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';

function insertLink(doc) {
  LinksCollection.insert({ ...doc, createdAt: new Date()});
}

Meteor.startup(() => {

  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app',
      userId,
    });

    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com',
      userId,
    });

    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
      userId,
    });

    insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com',
      userId,
    });
  }

});

Meteor.publish("links", () => {
  return LinksCollection.find({ });
});

