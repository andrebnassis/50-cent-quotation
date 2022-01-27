import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { handleRequest } from "./httpRequestHandler";
import { isNumber } from "./numberUtils";

const getClient = (): AxiosInstance => {
    const ax = axios.create();
    ax.interceptors.request.use(async (config) => {
        const customConfig = config;
        customConfig.baseURL = `https://economia.awesomeapi.com.br`;
        return customConfig;
    });
    ax.interceptors.response.use(async (res) => {
        return res;
    })
    return ax;
}

export const getDollarQuotationRawData = async (target:string): Promise<number|undefined|Error> => {
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
        throw new Error(`Unexpected response`);
    }
    }
    catch(err){
        throw err;
    }
    return undefined;
};