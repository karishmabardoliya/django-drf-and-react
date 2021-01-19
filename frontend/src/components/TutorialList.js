import React, { useState, useEffect } from "react";
import TutorialService from "../service/TutorialService";
import { Link } from 'react-router-dom'

const TutorialList = () => {
    const [tutorials, setTutorials] = useState([]);
    const [currentTutorial, setCurrentTutorial] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    // const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        retrieveTutorials();
    }, []);

    // const onChangeSearchTitle = e => {
    //     const searchTitle = e.target.value;
    //     setSearchTitle(searchTitle);
    // };

    const retrieveTutorials = () => {
        TutorialService.getAll()
            .then(response => {
                setTutorials(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const setActiveTutorial = (tutorial, index) => {
        setCurrentTutorial(tutorial);
        setCurrentIndex(index);
    };


    // const findByTitle = () => {
    //     TutorialDataService.findByTitle(searchTitle)
    //         .then(response => {
    //             setTutorials(response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };

    return (
        <div className="list row">
            {/* <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByTitle}>Search</button>
                    </div>
                </div>
            </div> */}
            <div className="col-md-6">
                <h4>Tutorials List</h4>
                <ul className="list-group">
                    {tutorials &&
                        tutorials.map((tutorial, index) => (
                            <li className={"list-group-item " + (index === currentIndex ? "active" : "")}
                                onClick={() => setActiveTutorial(tutorial, index)}
                                key={index}>
                                {tutorial.title}</li>
                        ))}
                </ul>
            </div>
            <div className="col-md-6">
                {currentTutorial ? (
                    <div>
                        <h4>Tutorial</h4>
                        <div>
                            <label>
                                <strong>Title:</strong>
                            </label>{" "}
                            {currentTutorial.title}
                        </div>
                        <div>
                            <label>
                                <strong>Description:</strong>
                            </label>{" "}
                            {currentTutorial.description}
                        </div>
                        <Link to={"/tutorials/" + currentTutorial.id} className="badge badge-warning">Edit</Link>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Please click on a Tutorial...</p>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default TutorialList;