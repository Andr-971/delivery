

import React from "react";
import { TitleProps } from "./typeTitle"

const TitleH1 = ({title}:TitleProps) => {
    return (
        <h1 className="title__h1" data-testid="title-h1">
            {title}
        </h1>
    );
}

export default TitleH1;