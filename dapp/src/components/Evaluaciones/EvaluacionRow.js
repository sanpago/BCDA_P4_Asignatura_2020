import {drizzleReactHooks} from '@drizzle/react-plugin'
import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;
const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const EvaluacionRow = ({evaluacionIndex}) => {
    const {drizzle} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    return <ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract={"Asignatura"}
        method={"evaluaciones"}
        methodArgs={[evaluacionIndex]}
        render={ev =>
            <tr key={"EVA-" + evaluacionIndex}>
                <th>E<sub>{evaluacionIndex}</sub></th>
                <td>{ev.nombre}</td>
                <td>{ev.fecha ? (new Date(1000 * ev.fecha))
                    .toLocaleString() : ""}</td>
                <td>{(ev.puntos / 10).toFixed(1)}</td>
            </tr>
        }
    />;
};

export default EvaluacionRow;
