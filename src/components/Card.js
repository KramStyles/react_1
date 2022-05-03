import './Card.css'

export default function Card(props){
    const classes = `class ${props.className}`; // So that classes on Card would work.
    return <div className={classes}>{props.children}</div>;
}