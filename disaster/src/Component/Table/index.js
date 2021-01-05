import react from 'react'
import { TableAll } from '../TableAll';
import {TableVictims} from "../TableVictims";
import {TableSOS} from "../TableSOS";


 
function renderSwitch(param){
    switch(param) {
        case "Victims":
            return <TableFirst />;
        case "SOS":
            return <TableSecond />;
        case "All":
            return <TableAll />;
    }
}

export const Table = (props) =>{

    return (
        <div>
           {renderSwitch(props.isClicked)}
        </div>

    );

};