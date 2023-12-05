import React from 'react';
import HeaderForm from "../forms/home-header-form/HeaderForm";


const PageHeader = () => {
    return (
        <>
            <div className="page-header">
                <div className="page-header__title d-flex flex-column align-items-center">
                    <h1 className="text-secondary text-uppercase text-center mb-0">
                        путешествия<br />
                        мечты</h1>
                    <p className="chooseYours text-secondary text-uppercase text-center">выбери свою</p>
                    <svg className="point-svg align-items-center" width="16" height="88" viewBox="0 0 16 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 1C8.5 0.723858 8.27614 0.5 8 0.5C7.72386 0.5 7.5 0.723858 7.5 1H8.5ZM8 77.3333C6.52724 77.3333 5.33333 78.5272 5.33333 80C5.33333 81.4728 6.52724 82.6667 8 82.6667C9.47276 82.6667 10.6667 81.4728 10.6667 80C10.6667 78.5272 9.47276 77.3333 8 77.3333ZM7.5 1L7.5 80H8.5L8.5 1H7.5Z" fill="white"/>
                        <circle cx="8" cy="80" r="7.5" stroke="white"/>
                    </svg>
                </div>
                <HeaderForm />


            </div>
        </>

    )

}

export default PageHeader;