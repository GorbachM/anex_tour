import React from 'react';
import PageHeader from '../../components/common/PageHeader'
import NavBar from "../../layout/Header/NavBar";
import '/scss/styles/home.css'
import LastMinuteTour from "../../components/homeBlock/lastMinuteTour";


const Home = () => {
    return (
        <div className="p-0">
            <NavBar />
            <PageHeader />
            <LastMinuteTour/>


        </div>
    )

}

export default Home;