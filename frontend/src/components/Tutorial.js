import React, { useState, useEffect } from "react";
import TutorialService from "../service/TutorialService";

const Tutorial = props => {
    const initialTutorialState = {
        id: null,
        title: "",
        description: ""
    };
    const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
    const [message, setMessage] = useState("");

    const getTutorial = id => {
        TutorialService.get(id)
            .then(response => {
                setCurrentTutorial(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getTutorial(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentTutorial({ ...currentTutorial, [name]: value });
    };

    const updatePublished = status => {
        var data = {
            id: currentTutorial.id,
            title: currentTutorial.title,
            description: currentTutorial.description
        };

        TutorialService.update(currentTutorial.id, data)
            .then(response => {
                setCurrentTutorial({ ...currentTutorial});
            })
            .catch(e => {
                console.log(e);
            });
    };

    const updateTutorial = () => {
        TutorialService.update(currentTutorial.id, currentTutorial)
            .then(response => {
                setMessage("The tutorial was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteTutorial = () => {
        TutorialService.remove(currentTutorial.id)
            .then(response => {
                props.history.push("/tutorials");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentTutorial ? (
                <div className="edit-form">
                    <h4>Tutorial</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={currentTutorial.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                value={currentTutorial.description}
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>
                    <button className="badge badge-danger mr-2" onClick={deleteTutorial}>Delete</button>
                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={updateTutorial}>Update</button>
                    <p>{message}</p>
                </div>
            ) : (
                    <div>
                        <br />
                        <p>Please click on a Tutorial...</p>
                    </div>
                )}
        </div>
    );
};

export default Tutorial;