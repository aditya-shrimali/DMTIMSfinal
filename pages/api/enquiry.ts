// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const send = require('gmail-send')({
        user: 'dmtims20@gmail.com',
        pass: 'ldyxekoyefbilaro', // mqjkkmyhyhtysmew
        to:   ['connect@dmtims.edu.in','bourgeoisdevelopers@gmail.com'], //connect@dmtims.edu.in
        subject: 'test subject',
    });

    const data = req.body;
    const date = new Date();

    var message = 'Name: '+data.fullName+'\n'
        +'Email: '+data.email+'\n'
        +'Contact: '+data.tel+'\n'
        +'DoB: '+data.dob+'\n'
        +'Address: '+data.address+'\n'
        +'Stream: '+data.stream+'\n'
        +'Education: '+data.education+'\n'
        +'Exam: '+data.exam+'\n'
        +'Score: '+data.score+'\n'
        +'Date: '+date.toDateString();

    var options = {
        subject: 'New Response from '+data.email+' - DMTIMS Admission Enquiry',
        text: message,        // Plain text
        // html:  htmlToSend          // HTML
        // files: [ filepath ],                  // Set filenames to attach (if you need to set attachment filename in email, see example below
    }

    try {
        const {result,full} = await send(options);
        res.status(200).json({
            status: 'SUCCESS',
            subCode: '200'
        });
    } catch(error) {
        res.send(error)
    }
}
