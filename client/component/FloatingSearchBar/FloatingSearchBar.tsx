import './floatingSearchBar.css'; // Import CSS file for styling

const FloatingWindow = () => {

    return (
        <div className={`floating-window float-on`} >
            {/*float-on for manupulate display of search window*/}
            <div className="content">
                {/* Content of the floating window */}
                <h2>Floating Window</h2>
                <p>This is a floating window content.</p>
            </div>
        </div>
    );
};

export default FloatingWindow;