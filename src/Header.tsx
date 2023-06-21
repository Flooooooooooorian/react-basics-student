
type Props = {
    title: string
}

export default function Header(props: Props) {


    return (
        <h2>Das aktuelle Schuljahr ist {props.title}</h2>
    )
}
