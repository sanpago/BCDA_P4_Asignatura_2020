import {drizzleReactHooks} from '@drizzle/react-plugin'
import {newContextComponents} from "@drizzle/react-components";
import CalificacionRow from "./CalificacionRow";

const {ContractData} = newContextComponents;
const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const CalificacionesBody = ({matriculasLength, evaluacionesLength}) => {
    const {drizzle} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    let rows = [];
    for (let i = 0; i < matriculasLength; i++) {
        rows.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"matriculas"}
                methodArgs={[i]}
                render={addr => <CalificacionRow
                   alumnoIndex={i}
                    alumnoAddr={addr}
                    evaluacionesLength={evaluacionesLength}/>}
            />);
    }
    return <tbody>{rows}</tbody>;
};

export default CalificacionesBody;
