import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { handleRequest } from "./httpRequestHandler";
import { isNumber } from "./numberUtils";

const getClient = (): AxiosInstance => {
    const ax = axios.create();
    ax.interceptors.request.use(async (config) => {
        const customConfig = config;
        customConfig.baseURL = process.env.REACT_APP_QUOTATION_BASE_URL;
        return customConfig;
    });

    ax.interceptors.response.use(async (value) => {
        // console.log(value);
        return value;
    })
    return ax;
}

export const getDollarQuotationRawData = async (target:string): Promise<number|Error> => {
    const source = "USD"
    const client = getClient();

    const httpRequestConfig: AxiosRequestConfig = {
        method: 'GET',
        url: `last/${source}-${target}`,
        validateStatus(status) {
            return status === 200;
        },
    };
    try
    {
    const response = await handleRequest(httpRequestConfig, client);
    
    if(response[`${source}${target}`])
    {
        const quotation = parseFloat(response[`${source}${target}`].high);
        if(isNumber(quotation)){
            return quotation;
        }
    }
    
    throw new Error(`Unexpected response`);
    }
    catch(err){
        throw err;
    }
};