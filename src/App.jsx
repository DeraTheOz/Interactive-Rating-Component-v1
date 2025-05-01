import { useState } from 'react';

function App() {
    const [curClicked, setCurClicked] = useState(null);
    const [isClicked, setisClicked] = useState(false);

    const rateData = Array.from({ length: 5 }, (_, i) => i + 1);

    function handleCurClicked(num) {
        setCurClicked(num);
    }

    function handleShowResult() {
        setisClicked(true);

        setTimeout(() => {
            setisClicked(false);
            setCurClicked(null);
        }, 3000);
    }

    return (
        <main>
            <Rating
                isClicked={isClicked}
                rateData={rateData}
                curClicked={curClicked}
                onCurClicked={handleCurClicked}
                onShowResult={handleShowResult}
            />

            {isClicked && (
                <Result
                    isClicked={isClicked}
                    rateData={rateData}
                    curClicked={curClicked}
                />
            )}
        </main>
    );
}

function Rating({
    isClicked,
    rateData,
    curClicked,
    onCurClicked,
    onShowResult
}) {
    

    return (
        <div
            className={`${
                isClicked ? 'hidden' : 'flex'
            } flex-col max-w-sm p-7 rounded-3xl bg-dark-blue transition-display duration-500 ease-in-out`}>
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-very-dark-blue-gradient">
                <img src="images/icon-star.svg" alt="Icon Star" />
            </span>
            <h1 className="header">How did we do?</h1>
            <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </p>

            <ul className="flex justify-between items-center gap-1.5 text-medium-grey text-center font-semibold py-1 my-6">
                {rateData.map((num) => (
                    <li
                        className={`rating ${
                            curClicked === num ? 'active' : ''
                        }`}
                        key={num}
                        onClick={(e) =>
                            onCurClicked(Number(e.target.textContent))
                        }>
                        {num}
                    </li>
                ))}
            </ul>

            <button
                className="font-semibold uppercase text-center text-white tracking-widest bg-orange min-w-full 
                py-3 px-6 rounded-full transition-all duration-300 ease-in-out hover:text-orange
                active:text-orange hover:bg-white active:bg-white focus:outline-none"
                onClick={onShowResult}>
                Submit
            </button>
        </div>
    );
}

function Result({ isClicked, rateData, curClicked }) {
    return (
        <div
            className={`${
                isClicked ? 'flex' : 'hidden'
            } flex-col items-center justify-center max-w-sm min-h-[24.438rem] p-7 rounded-3xl poin bg-dark-blue transition-display duration-500 ease-in-out`}>
            <img
                src="images/illustration-thank-you.svg"
                alt="Thank you Illustration"
                className="success-image"
            />
            <p className="text-orange bg-very-dark-blue-gradient py-2 px-4 mt-6 rounded-full">
                You selected {curClicked} out of {rateData.length}
            </p>
            <h1 className="header">Thank you!</h1>
            <p className="text-center">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
            </p>
        </div>
    );
}

export default App;
