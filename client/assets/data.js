(function () {

  angular.module('portfolio')
    .service('DataService', service );

  function service () {
    var service = this;

    service.generateBlogContent = function () {
      service.data = service.posts;
    };

    service.generateProjectContent = function () {
      service.data = service.projects;
    };

    service.setArticle = function (name) {
      var posts = service.posts.content;
      var projects = service.projects.content;
      _findArticle(posts, name);
      _findArticle(projects, name);
    };

    function _findArticle (contentArray, name) {
      for ( var key in contentArray ) {
        var article = contentArray[key];
        if ( article.name === name ) {
          service.article = article;
        }
      }
    }

    service.posts = {
        type: 'Posts',
        content: [
          {
            'id': 1,
            'title': 'SpeakEz Architecture',
            'name': 'speakeasy-architecture',
            'blurb': 'hello',
            'content': 'This is content. This is content. This is content. This is content. This is content. This is content. This is content.'
          },
          {
            'id': 2,
            'title': 'Plot Sidebar',
            'name': 'plot-sidebar',
            'blurb': 'hello',
            'content': 'This is content. This is content. This is content. This is content. This is content. This is content. This is content.'
          },
          {
            'id': 3,
            'title': 'Material Background Color',
            'name': 'material-background-color',
            'blurb': 'hello',
            'content': 'This is content. This is content. This is content. This is content. This is content. This is content. This is content.'
          },
          {
            'id': 4,
            'title': 'CSS Tipping Point',
            'name': 'css-tipping-point',
            'blurb': 'hello',
            'content': 'This is content. This is content. This is content. This is content. This is content. This is content. This is content.'
          },
          {
            'id': 5,
            'title': 'Dev Week',
            'name': 'dev-week',
            'blurb': 'hello',
            'content': 'This is content. This is content. This is content. This is content. This is content. This is content. This is content.'
          }
        ]
      };

    service.projects = {
        type: 'Projects',
        content: [
          {
            'id': 1,
            'title': 'SpeakEasy',
            'name': 'speakeasy',
            'img': '/client/assets/pics/project-speakeasy.png',
            'blurb': "An artificial neural network built on WebRTC that distributes algorithmic workload across users' browsers. The site allows users to interact with our AI, Marvin, that was trained on reddit comment data.",
            'content': "The idea behind SpeakEasy was to build a distributed network that would allow any connected computers to communicate via browser using WebRTC to power the training of a machine learning algorithm. One of my jobs on the project was to get our server architecture up and running on AWS EC2 instances. This posed many fascinating challenges, especially due to me, at the time, being relatively new to using Linux. I linked two separate EC2s, one of which housed the Express server I built, while the other housed the Python server dedicated to our AI. I used LetsEncrypt to provide us with SSL encryption and salted and hashed passwords to make sure our website and data were highly secure. Initially, I wire-framed and designed the front-end and then brought it to life using Angular-Material. The key feature, of course, being the chat client that allowed users to speak with Marvin. SpeakEasy was a fascinating series of challenges that resulted in an inviting and interesting site."
          },
          {
            'id': 2,
            'title': 'Plot',
            'name': 'plot',
            'img': '/client/assets/pics/project-plot.png',
            'blurb': "A mobile app to allow users to conveniently create events and invite friends. After an event creator added a location for the event, a map would be created using the Google Maps API and sockects to show the meeting point and provide real-time updates of the positioning of attendees.",
            'content': "Plot came about after inheriting a relatively straightforward geo-location web-abb built using Google Maps and sockets. My team and I decided that geo-location naturally lent itself to mobile, so we refactored the original legacy codebase into Ionic. The inspiration for the project was the common pain of getting people together. They don't know where to go, or they run late, or they get lost. With the location services of Plot, all of these issues are easily taken care of. As a front-end engineer on Plot, it was my job to wire-frame the app, build the front-end to be easy to use, presentable, and connect properly to our Express/MongoDB back-end using RESTful principles."
          },
          {
            'id': 3,
            'title': 'Koffee Karma',
            'name': 'koffee-karma',
            'img': '/client/assets/pics/project-koffeekarma.png',
            'blurb': "A web-app to mimic pay-it-forward-style coffee lines. It gamefies the simple act of getting coffee by allowing users to send a free coffee (along with a kind message!) to random users, which in turn makes them eligible to receive free coffee sent by other users.",
            'content': "Koffee Karma was especially exciting to me because it epitomizes one of my favorite aspects of being an engineering: making a vision reality. I'd thought of the idea for Koffee Karma while sitting on a train long before I had the opportunity to build it. I designed the project from front to back in terms of concept, design and necessary implementation. Due to the complicated nature of the connections between users and tickets, I chose to use a relational database using MySQL. I wanted to prevent users from simply using the app to wait for free coffee, so every time a ticket was sent or received we had to update user info to keep track of eligibility (which was done by keeping track of how many tickets a user had sent vs. how many he or she had received). In this way, after receiving a ticket, a user had to send a ticket to be able to receive any more."
          }
          // {
          //   'id': 4,
          //   'title': 'Siren',
          //   'name': 'siren',
          //   'content': 'This is PROJECT content. This is PROJECT content. This is PROJECT content. This is PROJECT content. This is PROJECT content. This is PROJECT content. This is PROJECT content.'
          // },
          // {
          //   'id': 5,
          //   'title': 'Monument',
          //   'name': 'monument',
          //   'content': 'This is PROJECT content. This is PROJECT content. This is PROJECT content. This is PROJECT content. This is PROJECT content. This is PROJECT content. This is PROJECT content.'
          // }
        ]
      };

    service.generateProjectContent(); // service.generateBlogContent();
    service.setArticle('speakeasy');

    service.aboutContent = [
        "I love taking what's in my head, building it, and turning it into something tangible. It's important to me to delve into both the voice of a project and the needs of a user and find elegant ways to connect the two. I want the work I've done to bring value to the people that use it by leveraging the speed and power of effective technological solutions. I'm looking for a company that places a similar level of importance on quality and usefulness, one that I will be proud to contribute to."
    ];

  }

})();
