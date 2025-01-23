import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p className="text-for-small-screens"> Count: <span data-testid="count"> {count} </span> </p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
} 