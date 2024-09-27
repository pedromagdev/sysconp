import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsService {



    async sendMensage(){
        const { SinchClient } = require('@sinch/sdk-core');

        const sinchClient = new SinchClient({
            projectId: "f6fe8355-dc0b-4da4-9d7c-43d93d88fa02",
            keyId: "5116d930-adae-4a54-9503-bbbb4a9b4688",
            keySecret: "uQsemeYpgohE5s2qrQln8.v9Id"
        });
        
        const response = await sinchClient.sms.batches.send({
            sendSMSRequestBody: {
                to: [
                    " +244930381137"
                ],
                from: "Pedromag",
                body: "A sua visita esta marcada para o dia 15 de setembro!"
            }
        });
        console.log(JSON.stringify(response));
        return
    }
}
