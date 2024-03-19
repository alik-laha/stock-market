import './Sidebar.css'; // Import CSS for styling

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <h2>My Stocks</h2>
                <ul>
                    <li>Holding</li>
                    <li>UserInfo</li>
                    <li>Position</li>
                    <li>Deposit</li>
                    <li>Withdraw</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;