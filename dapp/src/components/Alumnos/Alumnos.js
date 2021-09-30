import {drizzleReactHooks} from '@drizzle/react-plugin'
import {newContextComponents} from "@drizzle/react-components";
import {useParams, Link} from "react-router-dom";

import AlumnosHead from "./AlumnosHead";
import AlumnosBody from "./AlumnosBody";

const {ContractData} = newContextComponents;
const {useDrizzle, useDrizzleState} = drizzleReactHooks;

export const Alumnos = () => {
    const {drizzle} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    return (
        <section className="AppAlumnos">
            <h2>Alumnos</h2>

            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"matriculasLength"}
                render={ml => (
                    <table>
                        <AlumnosHead/>
                        <AlumnosBody matriculasLength={ml}/>
                    </table>
                )}
            />
        </section>
    );
};


export const Alumno = () => {
    const {drizzle} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    let {addr} = useParams();

    return <>
        <header className="AppAlumno">
            <h2>Alumno</h2>
        </header>

        <ul>
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"datosAlumno"}
                methodArgs={[addr]}
                render={datos => <>
                    <li><b>Nombre:</b> {datos?.nombre ?? "Desconocido"}</li>
                    <li><b>Email:</b> {datos?.email ?? "Desconocido"}</li>
                </>}
            />
            <li><b>Address:</b> {addr}</li>
        </ul>

        <Link to="/alumnos">Volver</Link>
    </>
};
