 App = Ember.Application.create();

App.Router.map(function() {

});



App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [
    	{
    	  id:1,
    	  title: "Hyperion",
		  author: "Dan Simmons",
		  description: "Probably my favorite science fiction book (and series) I've ever read. Hyperion is written in a style similar to The Canterbury Tales, in which a series of stories are told by the main characters. Each story is a gem in itself, but alude to the larger storyline. The scope of the story is ambitious - spanning time, planets religion and love.",
		  amazon_id: "0553283685",
		  rating: 5,
		  amazon_id: '0553283685',
		  url: 'http://www.amazon.com/Hyperion-Cantos-Dan-Simmons/dp/0553283685',
		  image: 'http://upload.wikimedia.org/wikipedia/en/7/73/Hyperion_cover.jpg'
		},
		{
		  id:2,
		  title: "Jony Ive: The Genius Behind Apple's Greatest Products",
		  author: "Leander Kahney",
		  description: "Even though I respect Ive, I felt this biography only hit skin deep. It went over all the major events in his life, his passion for design, awards he achieved -- but that's really it. I dont't feel I know him anymore than before reading this.",
		  amazon_id: "159184617X",
		  rating: 2,
		  amazon_id: '159184617X',
		  url: 'http://www.amazon.com/Jony-Ive-Genius-Greatest-Products/dp/159184617X',
		  image:'http://img1.imagesbn.com/p/9781591846178_p0_v1_s260x420.JPG'
		},
		{
		  id:3,
		  title: "Mindstorms",
		  author: "Seymour A. Papert",
		  description: "Although this book focuses on the cognitive advantages to having children use technology from an early age, it is also an in depth look at how people can learn for themseves. As someone who was often distracted and bored at times during school, Mindstorms highlights some of the reasoning behind that feeling and what we can do as teachers to help minimize it.",
		  amazon_id: "0465046746",
		  rating: 5,
		  amazon_id: '0465046746',
		  url: 'http://www.amazon.com/Mindstorms-Children-Computers-Powerful-Ideas/dp/0465046746',
		  image: 'http://ecx.images-amazon.com/images/I/51Yy9CR1uXL.jpg' 
		}
    ];
  }
});
