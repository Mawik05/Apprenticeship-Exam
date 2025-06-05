import { useGetEmployeeDetails } from "../../hooks/useGetEmployeeDetails";
import EmployeeInfo from "./EmployeeInfo";
import styles from "./employeeList.module.css";

const EmployeeList = () => {
    const { employeeDetails, isLoading, error } = useGetEmployeeDetails();

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Møt våre instruktører</h2>
            {isLoading || error ? (
                <div>
                    {isLoading
                        ? "Laster..."
                        : "Klarte ikke å hente instruktør informasjonen. Prøv igjen senere."}
                </div>
            ) : (
                <div className={styles.employeeListWrapper}>
                    {employeeDetails?.map((details) => (
                        <EmployeeInfo
                            key={details.name}
                            employeeDetails={details}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default EmployeeList;
