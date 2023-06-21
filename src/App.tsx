import './App.css'
import Header from "./Header";
import StudentList from "./StudentList";
import {Student} from "./models";

function App() {

    const students: Student[] = [
        {
            id: "1",
            name: "Florian"
        },
        {
            id: "2",
            name: "Daniel"
        },
        {
            id: "3",
            name: "Zeshan"
        },
    ]
    return (
        <>
            <h1>Willkommen an der Musterschule</h1>
            <Header title={"2022/2023"}/>
            <StudentList students={students}/>
        </>
    )
}

export default App
