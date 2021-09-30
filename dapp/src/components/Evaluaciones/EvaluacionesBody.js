import {drizzleReactHooks} from '@drizzle/react-plugin'

import EvaluacionRow from "./EvaluacionRow";

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const EvaluacionesBody = ({evaluacionesLength}) => {
    const {drizzle} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);
    let rows = [];
    for (let i = 0; i < evaluacionesLength; i++) {
        rows.push(<EvaluacionRow evaluacionIndex={i}/>);
    }
    return <tbody>{rows}</tbody>;
};

export default EvaluacionesBody;
