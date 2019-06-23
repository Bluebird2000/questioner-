import { Server } from "../../server";
import * as chai from "chai";

import chaiHttp = require('chai-http');
import 'mocha';
import { expect } from "chai";

process.env.DB_NAME = 'questioner_api';

chai.use(chaiHttp);

let app = Server.bootstrap().app;

describe('Api Index Request ', () => {

    const apiIndex = '/v1/questioner/'
    it('should return status 200 & get api index request', async () => {
     await chai.request(app)
        .get(apiIndex)
        .send({})
        .then(res => {
          expect(res).to.have.status(200)
          expect(res.body.status).to.equal('SUCCESS')
          expect(res.body.data).to.be.eql("questioner- Encryption at rest API that provides data to questioner\'s- client. Questioner is a crowd-source questions for meetups which helps people interact with one another, It helps share great times with wonderful experience.")
        })
    })
  })
