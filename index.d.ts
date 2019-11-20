

declare module 'api-gateway-mapping-template' {
    namespace mappingTemplate {
        interface Parameters {
            template: string,
            payload: string,
            params: { [key: string]: any },
            context: { [key: string]: any },
        }
    }
    function mappingTemplate(parameters: mappingTemplate.Parameters): string;

    export = mappingTemplate
}