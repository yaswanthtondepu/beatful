import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStaus, setLibraryStatus }) => {
    return (
        <nav>
            <h1>BEATFUL</h1>
            <button onClick={() => setLibraryStatus(!libraryStaus)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav;