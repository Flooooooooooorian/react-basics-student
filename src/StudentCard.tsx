import "./StudentCard.css"
import {Student} from "./models";

type Props = {
    student: Student
}

export default function StudentCard(props: Props) {

    return (
        <div className="student">
            <p>
                {props.student.name}
            </p>
        </div>
    )
}
