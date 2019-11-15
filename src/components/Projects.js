import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <h2>
          Explore Code //{" "}
          <a
            className="url"
            href="https://github.com/coopertuch"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h2>
        <div className="project">
          <span>
            <h3>
              <a
                className="url"
                href="https://we-work-out.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                [WeWorkout]{" "}
              </a>
              <a
                className="url"
                href="https://github.com/coopertuch/GA-Project-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                [WeWorkout Repo]
              </a>
            </h3>
            <p className="body">
              WeWorkout is an open forum for finding workouts, adding your own
              workouts, and a database to track your weights, reps, sets, and
              progression. On the Home/Workout page, workouts are listed with
              the user's name and muscle group, followed by form, breathing, and
              progression tips; users can add workouts from this page using the
              + sign. Clicking into a workout will then display all lifts
              associated with that user's muscle group, with the exercise,
              desired reps, and weight; users can add lifts from this page using
              the + sign, in addition to being able to edit and delete both the
              workout and lift info from this page. The Lifts page will display
              all lifts, where users can click on lifts to view, edit, or
              delete. To add, edit, or delete workouts and lifts, users must
              sign up and be logged in; users do not need to be logged in to
              just view workouts and lifts.{" "}
              <span className="hashtag">
                #HTML #CSS #JavaScript #Python #Django #PostgreSQL #Materialize
                #Heroku
              </span>
            </p>
          </span>
        </div>
        <div className="project">
          <span>
            <h3>
              <a
                className="url"
                href="https://coopertuch.github.io/GA-Project-1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                [BB'z Questions]{" "}
              </a>
              <a
                className="url"
                href="https://github.com/coopertuch/GA-Project-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                [BB'z Questions Repo]
              </a>
            </h3>
            <p className="body">
              BB'z Questions is a collection of questions split into several
              various categories. This project is intended for use by new
              friends, old friends, family, anyone you hope to get closer to or
              have some fun with. So often we are paralyzed by social
              interactions and overthinking that we don't even begin to converse
              with each other, always resorting to small talk; I've been doing
              well, the weather is good, so was my weekend. While you may not
              want to get into personal details with co-workers, this project
              offers a variety of (growing) categories and questions to spark up
              conversations with each other; spend some time debating whether
              savory or sweet is better, or maybe come to the realization that
              you both love the same movies. For those who seek to enrich or
              rebuild existing relationships with friends or family, there are
              even more questions for you. Sometimes all it takes is one
              question to start meaningful conversations and open the door to
              connection. A huge thank you to the Banana Boyz, or "BB'z" for
              short, for inspiring this app idea!{" "}
              <span className="hashtag">#HTML #CSS #JavaScript</span>
            </p>
          </span>
        </div>
        <div className="project">
          <span>
            <h3>
              <a
                className="url"
                href="https://coopscheerups.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                [Coop's Cheerups]{" "}
              </a>
              <a
                className="url"
                href="https://github.com/coopertuch/GA-Project-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                [Coop's Cheerups Repo]
              </a>
            </h3>
            <p className="body">
              When you need a little positivity in your life, look no further
              than Cheerups. Coop's Cheerups allows you to read, post, edit, and
              delete from a board of positive quotes, while tracking positive
              and negative feedback through likes. On load, all Cheerups will be
              displayed in single rows, or rows of one to three, responsive to
              your browser. Underneath the logo, there is a "New Cheerup" button
              which directs users to a new page where they can create their own
              cheerup; on this page, they will be required to enter the quote
              and author, with a maximum of 100 and 20 characters for the quote
              and author, respectively. After submitting a new cheerup, they
              will be redirected back to the home page. Each cheerup has the
              option to edit or remove; the edit will direct the user to a new
              page that has pulled the new cheerup and allows users to edit the
              quote, author, and update likes. After submitting an edit, they
              will be redirected back to the home page. The remove button will
              instantly delete the quote.{" "}
              <span className="hashtag">
                #HTML #CSS #JavaScript #Express #Handlebars #Mongoose #Heroku
              </span>
            </p>
          </span>
        </div>
      </div>
    );
  }
}

export default Projects;
