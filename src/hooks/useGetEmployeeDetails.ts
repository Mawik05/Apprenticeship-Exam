import { useQuery } from "@tanstack/react-query";
import type { EmployeeDetails } from "../types/EmployeeDetails";
// import { baseUrl } from "../constants";

export const useGetEmployeeDetails = () => {
    const { data, isLoading, error } = useQuery<EmployeeDetails[]>({
        queryKey: ["EmployeeDetails"],
        queryFn: async () => {
            // const url = new URL("/employee-details", baseUrl);
            // const result = await fetch(url);

            const result = new Response(
                '[{"name": "Ola Nordmann","contactInfo": "81549300","expertise": ["Førstehjelpsinstruktør","Avanserte HMS-kurs"]},{"name": "Kari Nordmann","contactInfo": "81549300","expertise": ["Førstehjelpsinstruktør"]}] '
            );

            if (result.status === 200) {
                return result.json();
            }
            throw new Error(`Status code: ${result.status}`);
        },
    });

    return {
        employeeDetails: data,
        isLoading,
        error,
    };
};
