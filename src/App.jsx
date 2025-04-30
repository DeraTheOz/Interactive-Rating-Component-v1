import { useState } from 'react';

function App() {
    const [selectedRate, setSelectedRate] = useState(null);

    function handleSelectedRate(num) {
        setSelectedRate(num);
    }

    return (
        <main>
            <Rating
                selectedRate={selectedRate}
                onSelectRate={handleSelectedRate}
            />
            <Result />
        </main>
    );
}

function Rating({ selectedRate, onSelectRate }) {
    const [isClicked, setIsClicked] = useState(false);
    const [curClicked, setCurClicked] = useState(null);

    const selected = curClicked;

    function handleIsClicked(value) {
        // const clicked = value === curClicked;

        setCurClicked(value);

        // setIsClicked((clicked) => !clicked);
        // if (!isClicked) return;
    }
    console.log(selected);

    return (
        <div className="hidde flex flex-col max-w-sm p-7 rounded-3xl bg-dark-blue">
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-very-dark-blue-gradient">
                <img src="images/icon-star.svg" alt="Icon Star" />
            </span>
            <h1 className="header">How did we do?</h1>
            <p className="">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </p>

            <ul className="flex justify-between items-center gap-1.5 text-medium-grey text-center font-semibold py-1 my-6">
                {Array.from({ length: 5 }, (_, i) => i + 1).map((num, i) => (
                    <li
                        className="rating"
                        key={num}
                        onClick={(e) => setCurClicked(e.target)}>
                        {num}
                    </li>
                ))}
            </ul>

            <button
                className="font-semibold uppercase text-center text-white tracking-widest bg-orange min-w-full 
                py-3 px-6 rounded-full transition-all duration-300 ease-in-out hover:text-orange
                active:text-orange hover:bg-white active:bg-white focus:outline-none">
                Submit
            </button>
        </div>
    );
}

function Result() {
    return (
        <div className="hidden flex flex-col items-center justify-center max-w-sm min-h-[25.563rem] p-7 rounded-3xl bg-dark-blue">
            <img
                src="images/illustration-thank-you.svg"
                alt="Thank you Illustration"
                className="success-image"
            />
            <p className="text-orange bg-very-dark-blue-gradient py-2 px-4 mt-6 rounded-full">
                You selected X out of X
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
