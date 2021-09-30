import {drizzleReactHooks} from '@drizzle/react-plugin'
import {newContextComponents} from "@drizzle/react-components";

import CalificacionesHead from "./CalificacionesHead";
import CalificacionesBody from "./CalificacionesBody";
import {CalificarV0, CalificarV1, CalificarV2, CalificarV3} from "./Calificar";

const {ContractData} = newContextComponents;
const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const Calificaciones = () => {
    const {drizzle} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    return (
        <section className="AppCalificaciones">
            <h2>Calificaciones</h2>

            <ContractData drizzle={drizzle}
                          drizzleState={drizzleState}
                          contract={"Asignatura"}
                          method={"matriculasLength"}
                          render={ml => <ContractData
                              drizzle={drizzle}
                              drizzleState={drizzleState}
                              contract={"Asignatura"}
                              method={"evaluacionesLength"}
                              render={el => <table>
                                  <CalificacionesHead evaluacionesLength={el}/>
                                  <CalificacionesBody
                                      matriculasLength={ml}
                                      evaluacionesLength={el}/>
                              </table>}
                          />}
            />

            <CalificarV0/>

            <CalificarV1/>

            <CalificarV2/>

            <CalificarV3/>
        </section>
    );
};

export default Calificaciones;
