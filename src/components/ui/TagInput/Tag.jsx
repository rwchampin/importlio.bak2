import { CrossCircledIcon } from "@radix-ui/react-icons";
const Tag = props => {
    return (
        <div className="tag">
            <CrossCircledIcon className="tag-close"  onClick={()=>{props.cullTagFromTags(props.text)}}/>
          <div className="tag-text" >{props.text}</div>

        </div>
    )
  }

    export default Tag;