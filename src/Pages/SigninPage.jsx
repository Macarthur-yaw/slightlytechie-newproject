import { useReducer } from "react";

const initialState = {
    name: "",
    password: "",
    error:false
};

function reducer(state, action) {
    switch (action.type) {
        case 'update_input':
            return {
                ...state,
                [action.field]: action.payload
            };
        default:
            return state;
    }
}


const SigninPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit=(e)=>{
e.preventDefault();
console.log(state.name)
console.log(state.password);
if(state.name ===" " && state.password === " "){
    state.error=true
}
    }
    return (
        <div>
            <div className="flex flex-col">
     <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="border-2"
                    placeholder="Name"
                    value={state.name}
                    onChange={(e) => { dispatch({ type: 'update_input', field: 'name', payload: e.target.value }) }}
                />
                <input
                    type="password"
                    className="border-2"
                    placeholder="Enter your password"
                    value={state.password}
                    onChange={(e) => { dispatch({ type: 'update_input', field: 'password', payload: e.target.value }) }}
                />
                {state.name}

                <button>Sign in</button>
                </form>
                {state.error && (
    <div className="text-red font-bold">
Please fill any of the forms you have left empty.
    </div>
)}

            </div>
        </div>
    );
}

export default SigninPage;
