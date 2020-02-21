import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="project">
          <span>
            <p className="body">
              <a
                className="url"
                href="https://coopertuch.github.io/GA-Project-1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BB'z Questions{" "}
              </a>{" "}
              is a collection of questions split into various categories. This
              project is intended for use by new friends, old friends, family,
              anyone you hope to get closer to or have some fun with. So often
              we are paralyzed by social interactions and overthinking that we
              don't even begin to converse with each other, always resorting to
              small talk; I've been doing well, the weather is good, so was my
              weekend. While you may not want to get into personal details with
              co-workers, this project offers a variety of (growing) categories
              and questions to spark up conversations with each other; spend
              some time debating whether savory or sweet is better, or maybe
              come to the realization that you both love the same movies. For
              those who seek to enrich or rebuild existing relationships with
              friends or family, there are even more questions for you.
              Sometimes all it takes is one question to start meaningful
              conversations and open the door to connection. A huge thank you to
              the Banana Boyz, or "BB'z" for short, for inspiring this app idea!
              Check out the GitHub repository{" "}
              <a
                className="repo"
                href="https://github.com/coopertuch/GA-Project-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              , or PLAY below!
            </p>
          </span>
          <embed
            className="website"
            src="https://coopertuch.github.io/GA-Project-1/"
          ></embed>
        </div>
        <div className="project">
          <span>
            <p className="body">
              <a
                className="url"
                href="https://we-work-out.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WeWorkout{" "}
              </a>
              is an open forum for finding workouts, adding your own workouts,
              and a database to track your weights, reps, sets, and progression,
              built using HTML, CSS, Python, Django, PostgreSQL and Materialize.
              There is full CRUD functionality for workouts and lifts, with
              required user authentication. WeWorkout is deployed to Heroku, and
              is responsive for desktop and mobile. On the Home/Workout page,
              workouts are listed with the user's name and muscle group,
              followed by form, breathing, and progression tips; users can add
              workouts from this page using the + sign. Clicking into a workout
              will then display all lifts associated with that user's muscle
              group, with the exercise, desired reps, and weight; users can add
              lifts from this page using the + sign, in addition to being able
              to edit and delete both the workout and lift info from this page.
              The Lifts page will display all lifts, where users can click on
              lifts to view, edit, or delete. To add, edit, or delete workouts
              and lifts, users must sign up and be logged in; users do not need
              to be logged in to just view workouts and lifts. For more
              information on the project with examples, check out the GitHub
              repository{" "}
              <a
                className="repo"
                href="https://github.com/coopertuch/GA-Project-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
          </span>
        </div>
        <div className="project">
          <span>
            <p className="body">
              <a
                className="url"
                href="https://wtsia.github.io/DevQ/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DevQ{" "}
              </a>{" "}
              is a study platform for Software Engineers, built as a team
              project at General Assembly using HTML, CSS, JavaScript, React,
              Express, Node, Mongoose, GitHub, Heroku. Users can route to the
              home page clicking on "DevQ", to the add new question page with
              "Q+", and the about page with "About". The body consists of links
              to various categories of questions, which will then take users to
              the question page; the question page will dynamically fill with
              questions matching that type, with an input to note their answer,
              a hint, an answer, and a link to an addtional resource for
              continued reading. On this page, users can choose to edit the
              question, which will direct them to the edit page; on the edit
              page, users will then re-enter the information for the question
              with any edits they wish to make, with the option to delete the
              question altogether. To create new questions, users can click on
              the "Q+", which will direct them to the new question page. On this
              page, users will enter the question, hint, answer, a link to
              additional resources, and question type, with all inputs being
              required. Submitting the question will push them to the database,
              where they will then be requested and displayed in their
              respective category types when the user goes back to questions.{" "}
              <a
                className="repo"
                href="https://github.com/wtsia/DevQ/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
          </span>
        </div>
      </div>
    );
  }
}

export default Projects;
