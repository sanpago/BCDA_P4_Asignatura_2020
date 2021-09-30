import {drizzleReactHooks} from '@drizzle/react-plugin'
import {newContextComponents} from "@drizzle/react-components";

import EvaluacionesHead from "./EvaluacionesHead";
import EvaluacionesBody from "./EvaluacionesBody";

const {ContractData} = newContextComponents;
const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const Evaluaciones = () => {
        const {drizzle} = useDrizzle();
        const drizzleState = useDrizzleState(state => state);

        return (
            <section className="AppEvaluaciones">
                <h2>Evaluaciones</h2>

                <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract={"Asignatura"}
                    method={"evaluacionesLength"}
                    render={el => (
                        <table>
                            <EvaluacionesHead/>
                            <EvaluacionesBody evaluacionesLength={el}/>
                        </table>
                    )}
                />
            </section>
        );
    }
;

export default Evaluaciones;
