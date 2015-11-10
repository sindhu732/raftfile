'use strict';

module.exports = {
  db: 'mongodb://rafters:raft@ds047484.mongolab.com:47484/raftfile',
  /**
   * Database options that will be passed directly to mongoose.connect
   * Below are some examples.
   * See http://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#mongoclient-connect-options
   * and http://mongoosejs.com/docs/connections.html for more information
   */
  dbOptions: {
    /*
    server: {
        socketOptions: {
            keepAlive: 1
        },
        poolSize: 5
    },
    replset: {
      rs_name: 'myReplicaSet',
      poolSize: 5
    },
    db: {
      w: 1,
      numberOfRetries: 2
    }
    */
  },
  hostname: 'http://localhost:3000',
  app: {
    name: 'Moonraft Innovation Labs'
  },
  logging: {
    format: 'combined'
  },
  strategies: {
      local: {
        enabled: true
      },
      facebook: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/api/auth/facebook/callback',
        enabled: false
      },
      twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/api/auth/twitter/callback',
        enabled: false
      },
      github: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/api/auth/github/callback',
        enabled: false
      },
      google: {
        clientID: '648871424071-4d06o10ehs98u7ior6idm4i0a6biau30.apps.googleusercontent.com',
        clientSecret: 'xk4rxUIIMkOa0RoitnDNQLbA',
        callbackURL: 'http://localhost:3000/api/auth/google/callback',
        enabled: true
      },
      linkedin: {
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
        callbackURL: 'http://localhost:3000/api/auth/linkedin/callback',
        enabled: false
      }
  },
  emailFrom: 'SENDER EMAIL ADDRESS', // sender address like ABC <abc@example.com>
  mailer: {
    service: 'SERVICE_PROVIDER',
    auth: {
      user: 'EMAIL_ID',
      pass: 'PASSWORD'
    }
  },
  secret: 'SOME_TOKEN_SECRET'
};
