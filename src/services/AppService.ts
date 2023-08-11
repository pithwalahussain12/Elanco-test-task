import http from "../http.common";
import IApplicationData from "../types/application";
import IResoursesData from "../types/resources";

const getApplications = () => {
    return http.get<Array<IApplicationData>>("/applications");
};

const getResourses = () => {
    return http.get<Array<IResoursesData>>("/resources");
};

const getApplicationDetail = (applicationname: any) => {
    return http.get<Array<any>>(`/applications/${applicationname}`);
}
const getresoursesDetail = (resourceName: any) => {
    return http.get<Array<any>>(`/resources/${resourceName}`);
}
const AppServices = {
    getApplications,
    getResourses
};

export { getApplicationDetail, getresoursesDetail }

export default AppServices;