import MenuItem from "../MenuItem/MenuItem";
import { sections } from "./sections";
import React from "react";
import "./Directory.scss";

//

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: sections
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem imageUrl={imageUrl} key={id} title={title} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
