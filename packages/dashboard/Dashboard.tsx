import { useEffect } from "react";


export const Dashboard = () => {

    useEffect(() => {
        document.title = "SiRBO.com - Welcome";
    }, []);


    return (
        <div>
        <h1>Dashboard</h1>
        <p>This is the dashboard page.</p>
        </div>
    );
    }