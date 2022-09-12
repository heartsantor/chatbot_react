import AWS from "aws-sdk";
import { REGION, POOL_ID } from "./aws-config";

const myCredentials = new AWS.CognitoIdentityCredentials(
  {
    IdentityPoolId: POOL_ID
  },
  { region: REGION }
);

var params = {
  botName: "BookTrip",
  botAlias: "botwithcustomres",
  userId: "varnit",
  contentType: "text/plain; charset=utf-8",
  accept: "text/plain; charset=utf-8"
};

var lexruntime = new AWS.LexRuntime({
  region: REGION,
  credentials: myCredentials
});

function postContent(text) {
  params.inputStream = text;
  return new Promise((resolve, reject) => {
    lexruntime.postContent(params, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

export { postContent };
