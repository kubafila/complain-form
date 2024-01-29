import FormProvider from "./FormContext";
import StepContent from "./Components/StepContent";


function App() {

    return (<>
        <FormProvider>
            <StepContent />
        </FormProvider>
        <pre>
            {/*{JSON.stringify(transactionList, null, 2)}*/}
        </pre>
    </>)

}


export default App;
