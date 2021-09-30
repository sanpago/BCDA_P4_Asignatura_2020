import {drizzleReactHooks} from '@drizzle/react-plugin'
import {newContextComponents} from "@drizzle/react-components";

import AlumnoRow from "./AlumnoRow";

const {ContractData} = newContextComponents;
const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const AlumnosBody = ({matriculasLength}) => {
    const {drizzle} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    let rows = [];
    for (let i = 0; i < matriculasLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Asignatura"}
            method={"matriculas"}
            methodArgs={[i]}
            render={addr => <AlumnoRow alumnoIndex={i}
                                       alumnoAddr={addr}/>
            }
        />);
    }
    return <tbody>{rows}</tbody>;
};

export default AlumnosBody;
