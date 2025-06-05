import type { EmployeeDetails } from "../../types/EmployeeDetails";
import styles from "./employeeInfo.module.css";

const EmployeeInfo = ({
    employeeDetails,
}: {
    employeeDetails: EmployeeDetails;
}) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.nameTitle}>{employeeDetails.name}</h3>
            <p>Kompetanse: {employeeDetails.expertise.join(", ")}</p>
            <p>Kontaktinfo: {employeeDetails.contactInfo}</p>
        </div>
    );
};

export default EmployeeInfo;
