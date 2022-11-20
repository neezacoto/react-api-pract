import apiRoutes from "../api/apiRoutes";
import appStyles from "../config/appStyles";

const requestList = [
    {
        id: 1,
        title: apiRoutes.GET,
        color: appStyles.themes.get
    },
    {
        id: 2,
        title: apiRoutes.POST,
        color: appStyles.themes.post
    },
    {
        id: 3,
        title: apiRoutes.PUT_PATCH,   
        color: appStyles.themes.putPatch
    },
    {
        id: 4,
        title: apiRoutes.DELETE,
        color: appStyles.themes.delete
    },
    {
        id: 5,
        title: apiRoutes.SIM_REQ,
        color: appStyles.themes.other
    },
    {
        id: 6,
        title: apiRoutes.CUSTOM_HEADERS,
        color: appStyles.themes.other
    },
    {
        id: 7,
        title: apiRoutes.TRANSFORM,
        color: appStyles.themes.other
    },
    {
        id: 8,
        title: apiRoutes.ERROR_HANDLING,
        color: appStyles.themes.other
    },
    {
        id: 9,
        title: apiRoutes.CANCEL,
        color: appStyles.themes.other
    },
]



export default requestList;