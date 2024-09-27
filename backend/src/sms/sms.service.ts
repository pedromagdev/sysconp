import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsService {



    async sendMensage(){
        const { SinchClient } = require('@sinch/sdk-core');

        const sinchClient = new SinchClient({
            projectId: "4798acd0-47cd-42dd-aa16-94b5bd70b758",
            keyId: "aeafc352-dba1-4602-8668-8ed9f89f3360",
            keySecret: "a.sulxD.r9y3d8Vb9yzNyFR8rO"
        });
        
        const response = await sinchClient.sms.batches.send({
            sendSMSRequestBody: {
                to: [
                    "+244956433899"
                ],
                from: "Pedromag",
                body: "Bem vindo a Pedromag, mensagem enviada com api"
            }
        });
        console.log(JSON.stringify(response));
        return
    }
}
