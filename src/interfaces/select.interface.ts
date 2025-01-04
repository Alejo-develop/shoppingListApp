import React, { SetStateAction } from "react";
import { CategoryResponseInterface } from "./cateogry.interface";

export interface SelectComponentProps{
    data: CategoryResponseInterface[],
    setName: React.Dispatch<SetStateAction<string | null>>,
    setColor: React.Dispatch<SetStateAction<string>>
    setCategorieId: React.Dispatch<SetStateAction<number>>
}