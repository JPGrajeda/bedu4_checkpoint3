import React from 'react';

// styles
import styles from './Dashboard.module.css';

// component
import Upbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

const Dashboard = props => {

    return (
        <>
            <Upbar/>
            <Sidebar/>
            <div className={styles.content}>
                <Content/>
            </div>
        </>
    )
    
}

export default Dashboard;