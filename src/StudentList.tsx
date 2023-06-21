import {Student} from "./models";
import StudentCard from "./StudentCard";

type Props = {
    students: Student[]
}

export default function StudentList(props: Props) {


    return (
        <>
            {props.students.map(student => <StudentCard student={student} key={student.id}/>)}
        </>
    )
}
