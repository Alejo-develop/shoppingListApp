import React, { SetStateAction } from "react";
import { CategoryInterface } from "./cateogry.interface";

export interface SelectComponentProps{
    data: CategoryInterface[],
    setName: React.Dispatch<SetStateAction<string | null>>,
    setColor: React.Dispatch<SetStateAction<string>>
}