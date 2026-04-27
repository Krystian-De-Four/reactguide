import "./Card.css"
import Chip from "../Chip/Chip";

export default function Card({ highlighted = false, isRow = false, tags = [], children }) {

    let classString = "card";
    if (highlighted) { classString += " highlighted" }
    if (isRow) { classString += " row" }


    let tagsComponents = tags.map(text => {
        return <Chip text={text} />
    })

    return (
        <div className={classString}>
            {
                tagsComponents.length > 0
                    ? <div className="tags-row">
                        Uses: {tagsComponents}
                    </div>
                    : null
            }
            {children}
        </div>
    )
}