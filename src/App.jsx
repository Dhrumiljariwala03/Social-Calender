import React, { useState } from "react";
import "./App.css";

function App() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  // Get month name + year
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  // Days in current month
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();

  // First day index (0=Sun, 1=Mon, ...)
  const startDay = new Date(year, currentDate.getMonth(), 1).getDay();

  // Handle prev/next month
  const changeMonth = (offset) => {
    setCurrentDate(new Date(year, currentDate.getMonth() + offset, 1));
  };

  const events = {
    "2025-08-01":{
      title: "New Year's Day",
      desc: "Ring in the new year with this short, uplifting message! (Happy 2025!!)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s",
    },
    "2025-08-02":{
      title: "Motivation and Inspiration Day",
      desc: "Remind your followers they're exactly where they're meant to be with these words of wisdom",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-02.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=EY71LlzV%2BvA%2BgAOOjtemYQL5J%2Bk%3D",
    },
    "2025-08-03":{
      title: "Wellness Wednesday",
      desc: "Support healthy habits and resolutions with these tips to keep going",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-03.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=SmpFWADtgQz3rJDuvspzYtCjgGw%3D",
    },
    "2025-08-04":{
      title: "Word of the Day",
      desc: "Tickle the brain with this unique, winter-themed word of the day",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-04.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=6NED3939p2HUMZgxH%2FeEvO6H%2FR0%3D",
    },
    "2025-08-05":{
      title: "Feel Good Friday",
      desc: "Download extra cuteness today with these winter animals and some facts about them",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-05.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=lQtHCwZk0Z%2FKt2Z%2B04HnZ1ypUqg%3D",
    },
    "2025-08-06":{
      title: "National Tech Day",
      desc: "Celebrate Tech Day with these fascinating facts about the advancements in technology",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-06.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=KT%2BqcRVEX2DkQ9U3G0Gf0bozWKo%3D",
    },
    "2025-08-07":{
      title: "I'm Not Going to Take It Anymore Day",
      desc: "Share this video to encourage people to aim high and never settle",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-07.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=IUzOa6oadszmiTVMBq8vEJbSsD8%3D",
    },
    "2025-08-08":{
      title: "Bubble Bath Day",
      desc: "Pop this in your feed for a relaxing and refreshing reminder to indulge in a bubble bath",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-08.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=3kfJraiq2CXRAhRYAIOwGKpz6kg%3D",
    },
    "2025-08-09":{
      title: "Word Nerd Day",
      desc: "Get nerdy with some GRE level words to celebrate Word Nerd Day",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-09.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=eJ46Xm0aqi35X2KiJRs2fOvK9k8%3D",
    },
    "2025-08-10":{
      title: "Houseplant Appreciation Day",
      desc: "Plant the seeds for how to care for your plant babies better with this video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-10.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=J2otezY7z2Ts%2FMrSqWq2B7spev0%3D",
    },
    "2025-08-11":{
      title: "Thoughtful Thursday",
      desc: "Help your customers feel more like themselves with these supportive reminders",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-11.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=bgcRY0OnSI2D%2FwqEiuObwKtSk2E%3D",
    },
    "2025-08-12":{
      title: "Quitters Day",
      desc: "Share extra encouragement on the day most people drop their new year's resolutions",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-12.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=KQ1xTwf5biGHJr1TnaGlVa%2FddDU%3D",
    },
    "2025-08-13":{
      title: "Make Your Dreams Come True",
      desc: "Remind your clients that you're here to help make their dreams come true",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-13.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=UEeUyZXmx%2B9%2F%2FC5JEhfOE%2Fe9qg8%3D",
    },
    "2025-08-14":{
      title: "Dress Up Your Pet Day",
      desc: "Fill your feed with a daily dose of cuteness because dressed up pets is pure serotonin",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-14.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=zvTnKXR3W3qWRlm6LmXhZTzz104%3D",
    },
    "2025-08-15":{
      title: "Blue Monday",
      desc: "Flip the script on the \"most depressing day of the year\" by sharing this upbeat video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-15.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=kh3U5zFYK48Rh3XggPn8W9aYFms%3D",
    },
    "2025-08-16":{
      title: "National Nothing Day",
      desc: "Be everyone's favorite company with this video giving permission to do nothing today",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-16.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=j1Fw45Hxu60niSxWMVyzOF%2BS6qA%3D",
    },
    "2025-08-17":{
      title: "Customer Service Day",
      desc: "Offer a sale to thank your team and customers for their service and patronage",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-17.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=xG%2FUCTI60Ofti0OlRJbnp0l0A3M%3D",
    },
    "2025-08-18":{
      title: "Quiz of the Day",
      desc: "Quiz your followers on some Winter Olympics trivia this winter",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-18.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=m7iehplR74q7J69tVZi9v%2BoQKzU%3D",
    },
    "2025-08-19":{
      title: "Popcorn Day",
      desc: "Butter up your customers with this playful popcorn video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-19.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=QnOscs5NG0QIvyiX9TsGWx1pg2c%3D",
    },
    "2025-08-20":{
      title: "Self Care Saturday",
      desc: "Remind your followers that doing things to make themselves happy is self-care",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-20.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=CROfrgqMpMPma1DARR%2FGcHhIQVA%3D",
    },
    "2025-08-21":{
      title: "#Sundayfunday | World Snow Day",
      desc: "Slide into Sunday with a fun snow day video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-21.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=%2FFODdvqk0ZxAG5T3Y2Hf1mMpsqQ%3D",
    },
    "2025-08-22":{
      title: "Celebration Of Life Day",
      desc: "Celebrate life with this thoughtful video and quote",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-22.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=CeIgeckwkwKTOu7wgM%2FgVrB%2BzPY%3D",
    },
    "2025-08-23":{
      title: "Pie Day",
      desc: "Share this Apple Pie recipe and wholesome video to celebrate Pie Day",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-23.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=ySwzGQx1nn1o5gwFIFq0J6iUzlk%3D",
    },
    "2025-08-24":{
      title: "Compliment Day",
      desc: "Use this template to share customer reviews and thank them for making your day",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-24.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=nJ3sOkCCFrsCY1ej%2BXlNWAMEvBk%3D",
    },
    "2025-08-25":{
      title: "Opposite Day",
      desc: "Switch it up today with this fun Opposite Day video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-25.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=G30IAAYPLlCqQfTqptR9kM7c1oo%3D",
    },
    "2025-08-26":{
      title: "Fun at Work Day",
      desc: "Make work a little more playful today with this fun and joyful video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-26.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=uFhMSBxpFqo4d%2BjVJus1EffmwsM%3D",
    },
    "2025-08-27":{
      title: "Stay Home Saturday",
      desc: "Embrace cozy season with these stay-at-home activity ideas for an enjoyable weekend",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-27.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=Y3PHTJariQtNZgwUJe1sgVylabg%3D",
    },
    "2025-08-28":{
      title: "Self Love Sunday",
      desc: "Offer this \"to-do list\" of ways to make yourself a priority (while still loving others)",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-28.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=tWZNzD8EkDn3nLuARGUApRZ3OOY%3D",
    },
    "2025-08-29":{
      title: "Puzzle Day",
      desc: "Fill in the missing piece of fun with this easy puzzle",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-29.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=MGiNPi34%2BJorYbnkSnYesEygqiA%3D",
    },
    "2025-08-30":{
      title: "Trivia Tuesday",
      desc: "Quiz your followers with this out-of-the-world cool quiz",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-30.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=Cgzr0ng6IRCFD3TmfTrlVt%2BLRMI%3D",
    },
    "2025-08-31":{
      title: "End of Month Reflection",
      desc: "End the month with this thoughtful and reflective video that sets a nice tone for February",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-31.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=A7ptP6gFilWuXmBS%2BARvN2VDnjY%3D",
    },

    // {July} //

    "2025-07-01":{
      title: "New Year's Day",
      desc: "Ring in the new year with this short, uplifting message! (Happy 2025!!)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s",
    },
    "2025-07-02":{
      title: "Motivation and Inspiration Day",
      desc: "Remind your followers they're exactly where they're meant to be with these words of wisdom",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-02.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=EY71LlzV%2BvA%2BgAOOjtemYQL5J%2Bk%3D",
    },
    "2025-07-03":{
      title: "Wellness Wednesday",
      desc: "Support healthy habits and resolutions with these tips to keep going",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-03.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=SmpFWADtgQz3rJDuvspzYtCjgGw%3D",
    },
    "2025-07-04":{
      title: "Word of the Day",
      desc: "Tickle the brain with this unique, winter-themed word of the day",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-04.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=6NED3939p2HUMZgxH%2FeEvO6H%2FR0%3D",
    },
    "2025-07-05":{
      title: "Feel Good Friday",
      desc: "Download extra cuteness today with these winter animals and some facts about them",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-05.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=lQtHCwZk0Z%2FKt2Z%2B04HnZ1ypUqg%3D",
    },
    "2025-07-06":{
      title: "National Tech Day",
      desc: "Celebrate Tech Day with these fascinating facts about the advancements in technology",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-06.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=KT%2BqcRVEX2DkQ9U3G0Gf0bozWKo%3D",
    },
    "2025-07-07":{
      title: "I'm Not Going to Take It Anymore Day",
      desc: "Share this video to encourage people to aim high and never settle",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-07.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=IUzOa6oadszmiTVMBq8vEJbSsD8%3D",
    },
    "2025-07-08":{
      title: "Bubble Bath Day",
      desc: "Pop this in your feed for a relaxing and refreshing reminder to indulge in a bubble bath",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-08.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=3kfJraiq2CXRAhRYAIOwGKpz6kg%3D",
    },
    "2025-07-09":{
      title: "Word Nerd Day",
      desc: "Get nerdy with some GRE level words to celebrate Word Nerd Day",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-09.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=eJ46Xm0aqi35X2KiJRs2fOvK9k8%3D",
    },
    "2025-07-10":{
      title: "Houseplant Appreciation Day",
      desc: "Plant the seeds for how to care for your plant babies better with this video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-10.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=J2otezY7z2Ts%2FMrSqWq2B7spev0%3D",
    },
    "2025-07-11":{
      title: "Thoughtful Thursday",
      desc: "Help your customers feel more like themselves with these supportive reminders",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-11.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=bgcRY0OnSI2D%2FwqEiuObwKtSk2E%3D",
    },
    "2025-07-12":{
      title: "Quitters Day",
      desc: "Share extra encouragement on the day most people drop their new year's resolutions",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-12.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=KQ1xTwf5biGHJr1TnaGlVa%2FddDU%3D",
    },
    "2025-07-13":{
      title: "Make Your Dreams Come True",
      desc: "Remind your clients that you're here to help make their dreams come true",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-13.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=UEeUyZXmx%2B9%2F%2FC5JEhfOE%2Fe9qg8%3D",
    },
    "2025-07-14":{
      title: "Dress Up Your Pet Day",
      desc: "Fill your feed with a daily dose of cuteness because dressed up pets is pure serotonin",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-14.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=zvTnKXR3W3qWRlm6LmXhZTzz104%3D",
    },
    "2025-07-15":{
      title: "Blue Monday",
      desc: "Flip the script on the \"most depressing day of the year\" by sharing this upbeat video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-15.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=kh3U5zFYK48Rh3XggPn8W9aYFms%3D",
    },
    "2025-07-16":{
      title: "National Nothing Day",
      desc: "Be everyone's favorite company with this video giving permission to do nothing today",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-16.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=j1Fw45Hxu60niSxWMVyzOF%2BS6qA%3D",
    },
    "2025-07-17":{
      title: "Customer Service Day",
      desc: "Offer a sale to thank your team and customers for their service and patronage",
      // image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-17.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=xG%2FUCTI60Ofti0OlRJbnp0l0A3M%3D",
    },
    "2025-07-18":{
      title: "Quiz of the Day",
      desc: "Quiz your followers on some Winter Olympics trivia this winter",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-18.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=m7iehplR74q7J69tVZi9v%2BoQKzU%3D",
    },
    "2025-07-19":{
      title: "Popcorn Day",
      desc: "Butter up your customers with this playful popcorn video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-19.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=QnOscs5NG0QIvyiX9TsGWx1pg2c%3D",
    },
    "2025-07-20":{
      title: "Self Care Saturday",
      desc: "Remind your followers that doing things to make themselves happy is self-care",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-20.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=CROfrgqMpMPma1DARR%2FGcHhIQVA%3D",
    },
    "2025-07-21":{
      title: "#Sundayfunday | World Snow Day",
      desc: "Slide into Sunday with a fun snow day video",
      // image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-21.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=%2FFODdvqk0ZxAG5T3Y2Hf1mMpsqQ%3D",
    },
    "2025-07-22":{
      title: "Celebration Of Life Day",
      desc: "Celebrate life with this thoughtful video and quote",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-22.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=CeIgeckwkwKTOu7wgM%2FgVrB%2BzPY%3D",
    },
    "2025-07-23":{
      title: "Pie Day",
      desc: "Share this Apple Pie recipe and wholesome video to celebrate Pie Day",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-23.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=ySwzGQx1nn1o5gwFIFq0J6iUzlk%3D",
    },
    "2025-07-24":{
      title: "Compliment Day",
      desc: "Use this template to share customer reviews and thank them for making your day",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-24.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=nJ3sOkCCFrsCY1ej%2BXlNWAMEvBk%3D",
    },
    "2025-07-25":{
      title: "Opposite Day",
      desc: "Switch it up today with this fun Opposite Day video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-25.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=G30IAAYPLlCqQfTqptR9kM7c1oo%3D",
    },
    "2025-07-26":{
      title: "Fun at Work Day",
      desc: "Make work a little more playful today with this fun and joyful video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-26.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=uFhMSBxpFqo4d%2BjVJus1EffmwsM%3D",
    },
    "2025-07-27":{
      title: "Stay Home Saturday",
      desc: "Embrace cozy season with these stay-at-home activity ideas for an enjoyable weekend",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-27.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=Y3PHTJariQtNZgwUJe1sgVylabg%3D",
    },
    "2025-07-28":{
      title: "Self Love Sunday",
      desc: "Offer this \"to-do list\" of ways to make yourself a priority (while still loving others)",
      // image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-28.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=tWZNzD8EkDn3nLuARGUApRZ3OOY%3D",
    },
    "2025-07-29":{
      title: "Puzzle Day",
      desc: "Fill in the missing piece of fun with this easy puzzle",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-29.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=MGiNPi34%2BJorYbnkSnYesEygqiA%3D",
    },
    "2025-07-30":{
      title: "Trivia Tuesday",
      desc: "Quiz your followers with this out-of-the-world cool quiz",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-30.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=Cgzr0ng6IRCFD3TmfTrlVt%2BLRMI%3D",
    },
    "2025-07-31":{
      title: "End of Month Reflection",
      desc: "End the month with this thoughtful and reflective video that sets a nice tone for February",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-31.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=A7ptP6gFilWuXmBS%2BARvN2VDnjY%3D",
    },

    // {September}//
    
    "2025-09-01":{
      title: "New Year's Day",
      desc: "Ring in the new year with this short, uplifting message! (Happy 2025!!)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s",
    },
    "2025-09-02":{
      title: "Motivation and Inspiration Day",
      desc: "Remind your followers they're exactly where they're meant to be with these words of wisdom",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-02.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=EY71LlzV%2BvA%2BgAOOjtemYQL5J%2Bk%3D",
    },
    "2025-09-03":{
      title: "Wellness Wednesday",
      desc: "Support healthy habits and resolutions with these tips to keep going",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-03.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=SmpFWADtgQz3rJDuvspzYtCjgGw%3D",
    },
    "2025-09-04":{
      title: "Word of the Day",
      desc: "Tickle the brain with this unique, winter-themed word of the day",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-04.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=6NED3939p2HUMZgxH%2FeEvO6H%2FR0%3D",
    },
    "2025-09-05":{
      title: "Feel Good Friday",
      desc: "Download extra cuteness today with these winter animals and some facts about them",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-05.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=lQtHCwZk0Z%2FKt2Z%2B04HnZ1ypUqg%3D",
    },
    "2025-09-06":{
      title: "National Tech Day",
      desc: "Celebrate Tech Day with these fascinating facts about the advancements in technology",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-06.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=KT%2BqcRVEX2DkQ9U3G0Gf0bozWKo%3D",
    },
    "2025-09-07":{
      title: "I'm Not Going to Take It Anymore Day",
      desc: "Share this video to encourage people to aim high and never settle",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-07.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=IUzOa6oadszmiTVMBq8vEJbSsD8%3D",
    },
    "2025-09-08":{
      title: "Bubble Bath Day",
      desc: "Pop this in your feed for a relaxing and refreshing reminder to indulge in a bubble bath",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-08.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=3kfJraiq2CXRAhRYAIOwGKpz6kg%3D",
    },
    "2025-09-09":{
      // title: "Word Nerd Day",
      // desc: "Get nerdy with some GRE level words to celebrate Word Nerd Day",
      // image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-09.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=eJ46Xm0aqi35X2KiJRs2fOvK9k8%3D",
    },
    "2025-09-10":{
      title: "Houseplant Appreciation Day",
      desc: "Plant the seeds for how to care for your plant babies better with this video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-10.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=J2otezY7z2Ts%2FMrSqWq2B7spev0%3D",
    },
    "2025-09-11":{
      title: "Thoughtful Thursday",
      desc: "Help your customers feel more like themselves with these supportive reminders",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-11.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=bgcRY0OnSI2D%2FwqEiuObwKtSk2E%3D",
    },
    "2025-09-12":{
      title: "Quitters Day",
      desc: "Share extra encouragement on the day most people drop their new year's resolutions",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-12.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=KQ1xTwf5biGHJr1TnaGlVa%2FddDU%3D",
    },
    "2025-09-13":{
      title: "Make Your Dreams Come True",
      desc: "Remind your clients that you're here to help make their dreams come true",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-13.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=UEeUyZXmx%2B9%2F%2FC5JEhfOE%2Fe9qg8%3D",
    },
    "2025-09-14":{
      title: "Dress Up Your Pet Day",
      desc: "Fill your feed with a daily dose of cuteness because dressed up pets is pure serotonin",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-14.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=zvTnKXR3W3qWRlm6LmXhZTzz104%3D",
    },
    "2025-09-15":{
      title: "Blue Monday",
      desc: "Flip the script on the \"most depressing day of the year\" by sharing this upbeat video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-15.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=kh3U5zFYK48Rh3XggPn8W9aYFms%3D",
    },
    "2025-09-16":{
      title: "National Nothing Day",
      desc: "Be everyone's favorite company with this video giving permission to do nothing today",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-16.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=j1Fw45Hxu60niSxWMVyzOF%2BS6qA%3D",
    },
    "2025-09-17":{
      title: "Customer Service Day",
      desc: "Offer a sale to thank your team and customers for their service and patronage",
      // image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-17.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=xG%2FUCTI60Ofti0OlRJbnp0l0A3M%3D",
    },
    "2025-09-18":{
    //   title: "Quiz of the Day",
    //   desc: "Quiz your followers on some Winter Olympics trivia this winter",
    //   image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-18.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=m7iehplR74q7J69tVZi9v%2BoQKzU%3D",
    },
    "2025-09-19":{
      title: "Popcorn Day",
      desc: "Butter up your customers with this playful popcorn video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-19.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=QnOscs5NG0QIvyiX9TsGWx1pg2c%3D",
    },
    "2025-09-20":{
      title: "Self Care Saturday",
      desc: "Remind your followers that doing things to make themselves happy is self-care",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-20.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=CROfrgqMpMPma1DARR%2FGcHhIQVA%3D",
    },
    "2025-09-21":{
      title: "#Sundayfunday | World Snow Day",
      desc: "Slide into Sunday with a fun snow day video",
      // image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-21.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=%2FFODdvqk0ZxAG5T3Y2Hf1mMpsqQ%3D",
    },
    "2025-09-22":{
      title: "Celebration Of Life Day",
      desc: "Celebrate life with this thoughtful video and quote",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-22.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=CeIgeckwkwKTOu7wgM%2FgVrB%2BzPY%3D",
    },
    "2025-09-23":{
      title: "Pie Day",
      desc: "Share this Apple Pie recipe and wholesome video to celebrate Pie Day",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-23.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=ySwzGQx1nn1o5gwFIFq0J6iUzlk%3D",
    },
    "2025-09-24":{
      title: "Compliment Day",
      desc: "Use this template to share customer reviews and thank them for making your day",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-24.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=nJ3sOkCCFrsCY1ej%2BXlNWAMEvBk%3D",
    },
    "2025-09-25":{
      title: "Opposite Day",
      desc: "Switch it up today with this fun Opposite Day video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-25.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=G30IAAYPLlCqQfTqptR9kM7c1oo%3D",
    },
    "2025-09-26":{
      title: "Fun at Work Day",
      desc: "Make work a little more playful today with this fun and joyful video",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-26.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=uFhMSBxpFqo4d%2BjVJus1EffmwsM%3D",
    },
    "2025-09-27":{
      title: "Stay Home Saturday",
      desc: "Embrace cozy season with these stay-at-home activity ideas for an enjoyable weekend",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-27.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=Y3PHTJariQtNZgwUJe1sgVylabg%3D",
    },
    "2025-09-28":{
      title: "Self Love Sunday",
      desc: "Offer this \"to-do list\" of ways to make yourself a priority (while still loving others)",
      // image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-28.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=tWZNzD8EkDn3nLuARGUApRZ3OOY%3D",
    },
    "2025-09-29":{
      title: "Puzzle Day",
      desc: "Fill in the missing piece of fun with this easy puzzle",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-29.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=MGiNPi34%2BJorYbnkSnYesEygqiA%3D",
    },
    "2025-09-30":{
      title: "Trivia Tuesday",
      desc: "Quiz your followers with this out-of-the-world cool quiz",
      image: "https://tgs-storage.us-east-1.linodeobjects.com/upload/post/social-calendar/January-30.jpg?AWSAccessKeyId=D89Y7FMNI5OH8ZJ82SPZ&Expires=1756207476&Signature=Cgzr0ng6IRCFD3TmfTrlVt%2BLRMI%3D",
    },
  };

  return (
    <div>
      {/* Main Content */}
      <main className="main">
        {/* Month Header */}
        <div className="month-header">
          <button onClick={() => changeMonth(-1)}>{"<"}</button>
          <h2>{monthName} {year}</h2>
          <button onClick={() => changeMonth(1)}>{">"}</button>
        </div>

        {/* Weekday Headers */}
        <div className="calendar weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {/* Calendar Grid */}
        <div className="calendar">
          {/* Empty slots before start day */}
          {Array.from({ length: startDay }).map((_, i) => (
            <div key={"empty-" + i} className="day-card empty"></div>
          ))}

          {/* Actual days */}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const dateKey = `${year}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const event = events[dateKey];

            return (
              <div key={day} className="day-card">
                <h4 className="">{day}</h4>
                {event ? (
                  <>
                    <h5>{event.title}</h5>
                    <p>{event.desc}</p>
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="event-img"
                      />
                    )}
                    <button className="schedule-btn">Schedule Post</button>
                  </>
                ) : (
                  <button className="schedule-btn">Schedule Post</button>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
