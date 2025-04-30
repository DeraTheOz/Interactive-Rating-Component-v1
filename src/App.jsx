function App() {
    return (
        <main>
            <Rating />
            <Result />
        </main>
    );
}

function Rating() {
    return (
        <div className="rating__container">
            <span className="star">
                <img src="images/icon-star.svg" alt="Icon Star" />
            </span>
            <h1 className="rating__header">How did we do?</h1>
            <p className="rating__summary">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </p>

            <ul className="rating__scale">
                <li className="scale-num">1</li>
                <li className="scale-nm">2</li>
                <li className="scale-num">3</li>
                <li className="scale-num">4</li>
                <li className="scale-num">5</li>
            </ul>

            <button className="btn">Submit</button>
        </div>
    );
}

function Result() {
    return (
        <div className="hidden">
            <img
                src="images/illustration-thank-you.svg"
                alt="Thank you Illustration"
                className="success-image"
            />
            <p className="rating__feedback-text"></p>
            <h2 className="rating__header rating-text">Thank you!</h2>
            <p className="rating__summary">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
            </p>
        </div>
    );
}

export default App;
