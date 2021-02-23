window.RESTQA_RESULT_1 = [
  {
    'description': '  API consumer\n  get list a device associated to a specific account\n  I can get the device detail',
    'keyword': 'Feature',
    'name': 'GET /account/{accountId}/devices',
    'line': 2,
    'id': 'get-/account/{accountid}/devices',
    'tags': [
      {
        'name': '@userstories-16',
        'line': 1
      }
    ],
    'uri': 'features/get_account{accountid}devices.feature',
    'elements': [
      {
        'id': 'get-/account/{accountid}/devices;staff-to-retrieve-a-list-of-all-devices-related-to-an-account',
        'keyword': 'Scenario',
        'line': 9,
        'name': 'Staff to retrieve a list of all devices related to an account',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 8
          },
          {
            'name': '@pvt',
            'line': 8
          },
          {
            'name': '@openapi',
            'line': 8
          },
          {
            'name': '@role-staff',
            'line': 8
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 56000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'accountId',
                      'type'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '45b08e85-d7f3-49c2-a0c2-84540d56bd1c',
                      'LINE'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2b1aeac5-b545-44e4-98ed-b69ef3f0853b',
                      'LINE'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      'LINE'
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 10,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 15,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 2000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 16,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 17,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 134000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 18,
            'name': 'I have the path "/account/{accountId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 19,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 20,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 2083000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 21,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 22,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 23,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 24,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 25,
            'name': '"0.id" should match "[0-9]"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 26,
            'name': '"0.type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 27,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 28,
            'name': '"0.externalId" should match "[0-9]"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 29,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 30,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 31,
            'name': '"0.updatedDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 32,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'failed',
              'duration': 11000000,
              'error_message': 'AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:\n\n  assert.ok(responseTime < timeMs)\n\n    + expected - actual\n\n    -false\n    +true\n\n    at World.Then.httpTiming (/opt/app-root/src/step_definitions/functions/then.js:16:10)'
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 33,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-4227b2f5-7c24-46fc-b8bd-4ae56b2021d9","curl":"curl \'https://openapi.uat.fwd.co.th/account/2b1aeac5-b545-44e4-98ed-b69ef3f0853b/devices\' -H \'x-correlation-id: e2e-test-4227b2f5-7c24-46fc-b8bd-4ae56b2021d9\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxNjEsImlhdCI6MTYxMzY0NjU2MSwianRpIjoiOWNkZjRiZWQtMjBkZC00N2NjLWE2M2MtZTNkZGI5Njk5NGJjIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiJjODdjNDI4ZS00ZTRlLTRlNjQtYjZiOC0wM2YzMjNjYzMyOWYiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCBlbWFpbCByZWFkOmRldmljZXMgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwicHJvZmlsZXNfc3RhZmZJZCI6IjAwMDAyIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCJ9.LAP8MwIgV4NLN85gViozjR6RonbSUe-8hwztXb09iP3796zt0LZvQ2UcZBkFrmQjmcI47WjSjx9bG8_kRN8PQ9DGD7cYXQJViqEAmYAQiihXASWAWCRTmzJrDnWFw3chYB83o7vDfDhoa-C6UaKQ7vziscoSgqG9FGmvy1yGo6a_9H3hOK67-6Y-qIjqC_1mit3Xcg9uJBpvYbYcPLVmLhe8JcifwS2QEfdvheXdSZp08fGTIVt4Wl3mVfdeO5--tCMbOCN6Q0FQsqYMak56STGRGNWCgzWhJObuUW1RhK-QQY0z9DOKLNNVekH4-oGpWpOLkLBdTs0xVQoeO4WSmA\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/{accountid}/devices;staff-to-retrieve-a-list-of-all-devices-related-to-an-account-filtered-by-type',
        'keyword': 'Scenario',
        'line': 36,
        'name': 'Staff to retrieve a list of all devices related to an account filtered by type',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 35
          },
          {
            'name': '@pvt',
            'line': 35
          },
          {
            'name': '@openapi',
            'line': 35
          },
          {
            'name': '@role-staff',
            'line': 35
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'accountId',
                      'type'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '45b08e85-d7f3-49c2-a0c2-84540d56bd1c',
                      'PHONE'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2b1aeac5-b545-44e4-98ed-b69ef3f0853b',
                      'PHONE'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      'PHONE'
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 37,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 42,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 43,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 44,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 287000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 45,
            'name': 'I have the path "/account/{accountId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 46,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 47,
            'name': 'the query parameter contains "type" as "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 48,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 745000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 49,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 50,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 51,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 52,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 53,
            'name': '"0.id" should match "[0-9]"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 54,
            'name': '"0.type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 55,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 56,
            'name': '"0.externalId" should match "[0-9]"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 57,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 58,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 59,
            'name': '"0.updatedDate" should be null',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 60,
            'name': 'the response time is under 1000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 61,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-d19c11a2-7581-4e95-89a1-019377e63214","curl":"curl \'https://openapi.uat.fwd.co.th/account/2b1aeac5-b545-44e4-98ed-b69ef3f0853b/devices?type=PHONE\' -H \'x-correlation-id: e2e-test-d19c11a2-7581-4e95-89a1-019377e63214\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxNjMsImlhdCI6MTYxMzY0NjU2MywianRpIjoiOWY5NWY5YjctYTU3NC00ZWEyLWIwODMtYjU4OTE2MTMxMDIzIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiIzY2JmODM5MC1jM2FlLTRlNGEtOTIyMy1lYjNiYjM4ZjQ2ODEiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCBlbWFpbCByZWFkOmRldmljZXMgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwicHJvZmlsZXNfc3RhZmZJZCI6IjAwMDAyIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCJ9.B5zDwCShh01MCuwBPalkn-WSIq6Zv5sQIqknZS7A18Xk16Hwn55A9mv206DOvvH0MEaEBFfd5R8rx0ltjwBLk5RnWSa_N95LCA1dKgJTLzGFiUNbcYF4jgT7NC89tJna2p5qJM_22h-244mNhi7YaSbGf2-RNGdVIUxN-C2pg_ZE3zpK79_hrmhiJDyOwbAaioDO4ZUd_Q4_ZvXU35ad0V-oaF0xVDP6eBo-XBZFYqdAmKfBJWHUZSZbYxW_bTks1JIwxRrONQYl3k5qsKbm0MU0HqhtQ3biJ3dURok0QRjnf8nVDGgS4MD82-NTLx_CzLY2ZGEVFXQPoRoqjubLNg\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/{accountid}/devices;security---token-expiration',
        'keyword': 'Scenario',
        'line': 64,
        'name': 'Security - Token Expiration',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 63
          },
          {
            'name': '@pvt',
            'line': 63
          },
          {
            'name': '@openapi',
            'line': 63
          },
          {
            'name': '@role-staff',
            'line': 63
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'accountId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '45b08e85-d7f3-49c2-a0c2-84540d56bd1c'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2b1aeac5-b545-44e4-98ed-b69ef3f0853b'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 65,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 70,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 71,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 72,
            'name': 'I have an expired access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 73,
            'name': 'I have the path "/account/{accountId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 74,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 75,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 35000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 76,
            'name': 'I should see a http code 401',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 77,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 78,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 79,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 80,
            'name': '"id" should be "334411"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 81,
            'name': '"code" should be 411',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 82,
            'name': '"message" should be "Token is expired"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 83,
            'name': '"href" should be "https://developer.fwd.co.th/errors/411"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 84,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 85,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-d51f758a-ce98-47a1-bab1-1fd1109330f8","curl":"curl \'https://openapi.uat.fwd.co.th/account/2b1aeac5-b545-44e4-98ed-b69ef3f0853b/devices\' -H \'x-correlation-id: e2e-test-d51f758a-ce98-47a1-bab1-1fd1109330f8\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJqdGkiOiJkOWJlNjU1Ny1hZGJhLTQ1MzAtODM3MC01MGU1OWY3ZDI4ZWUiLCJleHAiOjE1Nzg0NTA5NTUsIm5iZiI6MCwiaWF0IjoxNTc4NDQ5MTU1LCJpc3MiOiJodHRwczovL2lhbS1zYW5kYm94LnNjYmxpZmUuY28udGgvYXV0aC9yZWFsbXMvc2NibGlmZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjYWM1YWJjMC0wMzc0LTQ5NDQtYTM1Ny1lNmY1Mzk0YjI4N2UiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJBUElfRkFDVE9SWS1DdXN0b21lciIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImU3OTZlODMzLWFiNTItNDA5My1iYzRmLWVhZmIxZWUyMTYzNSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ3VzdG9tZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJyZWFkOnVzZXJzOmNvbnNlbnRzIHJlYWQ6cXVvdGVzIHdyaXRlOmFkdmlzb3JzIHdyaXRlOmFjY291bnQgcmVhZDpjb25zZW50cyByZWFkOnBheW1lbnRzIHJlYWQ6cG9saWNpZXM6Y29uc2VudHMgYWRtaW46d3JpdGU6YWNjb3VudCByZWFkOmRvY3VtZW50cyB3cml0ZTpxdW90ZXMgd3JpdGU6dXNlcnM6Y29uc2VudHMgd3JpdGU6Y2xhaW1zIHdyaXRlOnVzZXJzIHdyaXRlOnBvbGljaWVzOmNvbnNlbnRzIHJlYWQ6YWNjb3VudCB3cml0ZTpwYXltZW50cyBlbWFpbCByZWFkOnJpZGVycyB3cml0ZTphY2NvdW50OmNvbnNlbnRzIHdyaXRlOmRvY3VtZW50cyB3cml0ZTpjb25zZW50cyByZWFkOnVzZXJzIHJlYWQ6aW5mb3MgcmVhZDpwb2xpY2llcyByZWFkOmxlYWRzIHdyaXRlOnBvbGljaWVzIHByb2ZpbGUgdXNlcklkIHJlYWQ6YWR2aXNvcnMgd3JpdGU6bGVhZHMgd3JpdGU6Y2FzZXMgcmVhZDphY2NvdW50OmNvbnNlbnRzIHJlYWQ6Y2xhaW1zIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRhd2VlcG9ybiBEb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIyMDAwMDA0Nzg2ODciLCJnaXZlbl9uYW1lIjoiVGF3ZWVwb3JuIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJlbWFpbCI6InRhd2Vwb3JuLmRvZTFAZXhhbXBsZS5jb20iLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDA0Nzg2ODcifQ.eqVvdweI_v0tvo6-SvVkl6xGgyHLzixN-9FtIMdON04M8e4n8NMX1OeScw5eYNdVZLVJAekPjuc8a1ZRua1GQzr9Pp4hMYOCm2Nqy439v7ZELVxlwz0GDWgIT6MEQwRE1wsKFGk8kY_2aJ_f1RpvGv_FpAxINz7kE5M4qUqrVfkvfBQ2284tbXwHmf_bGtgfSqzIIR6jYFmSLZ-v2Z6QwTckTF0v18aVl_cCRgBH0FA__nU5Girsl-m9hzOEHK6ttHvhPhAH-_3riPLuZcyxarQNW94CrJNlHf0y27u5tdSKJJS7tpNMSlfJLWnRcS6kf0ToTrFVMcajI2ZlVfK86g\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/{accountid}/devices;security---token-signature-invalid',
        'keyword': 'Scenario',
        'line': 88,
        'name': 'Security - Token Signature invalid',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 87
          },
          {
            'name': '@pvt',
            'line': 87
          },
          {
            'name': '@openapi',
            'line': 87
          },
          {
            'name': '@role-staff',
            'line': 87
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'accountId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '45b08e85-d7f3-49c2-a0c2-84540d56bd1c'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2b1aeac5-b545-44e4-98ed-b69ef3f0853b'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 89,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 94,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 95,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 96,
            'name': 'I have an invalid access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 97,
            'name': 'I have the path "/account/{accountId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 98,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 99,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 29000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 100,
            'name': 'I should see a http code 401',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 101,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 102,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 103,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 104,
            'name': '"id" should be "334412"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 105,
            'name': '"code" should be 412',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 106,
            'name': '"message" should be "Invalid signature"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 107,
            'name': '"href" should be "https://developer.fwd.co.th/errors/412"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 108,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 109,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-63b699b5-fdeb-4c6e-ab33-bfe07033b677","curl":"curl \'https://openapi.uat.fwd.co.th/account/2b1aeac5-b545-44e4-98ed-b69ef3f0853b/devices\' -H \'x-correlation-id: e2e-test-63b699b5-fdeb-4c6e-ab33-bfe07033b677\' -H \'authorization: Bearer invalid-access-token\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/{accountid}/devices;security---token-unauthorized-scopes',
        'keyword': 'Scenario',
        'line': 112,
        'name': 'Security - Token unauthorized scopes',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 111
          },
          {
            'name': '@pvt',
            'line': 111
          },
          {
            'name': '@openapi',
            'line': 111
          },
          {
            'name': '@role-staff',
            'line': 111
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'accountId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '45b08e85-d7f3-49c2-a0c2-84540d56bd1c'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2b1aeac5-b545-44e4-98ed-b69ef3f0853b'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 113,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 118,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 119,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 655000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 120,
            'name': 'I have the path "/account/{accountId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 121,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 122,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 347000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 123,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 124,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 125,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 126,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 127,
            'name': '"id" should be "334430"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 128,
            'name': '"code" should be 430',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 129,
            'name': '"message" should be "You are not allowed to consume the resource"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 130,
            'name': '"href" should be "https://developer.fwd.co.th/errors/430"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 131,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 132,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-ef02b181-f7a9-49c2-aaa7-9182bef198ee","curl":"curl \'https://openapi.uat.fwd.co.th/account/2b1aeac5-b545-44e4-98ed-b69ef3f0853b/devices\' -H \'x-correlation-id: e2e-test-ef02b181-f7a9-49c2-aaa7-9182bef198ee\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxNjUsImlhdCI6MTYxMzY0NjU2NSwianRpIjoiOWU2NzVlZmItMGQyZS00NDQwLWIxOGUtYmY3ZWVjOTBiZmFhIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiJlYzUyNWZlYy04NDBlLTQ1NjgtOTRiYS02NTMwNmUwZWU0NmMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsInByb2ZpbGVzX3N0YWZmSWQiOiIwMDAwMiIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgifQ.blPZjSZ_sepuIpuAZVihIqThsdLxEljlUjo0ldXz0W3NnL9rwlATC6gA5wCw2_kOW1m7kFYbe1Vg8QRMUjkwb0hvAIOx_rf66va0YmW-2fwGwDVo4j-LOzAwkvo9pVbhnHrojt91fRQmaj4FkrdTE3KmmSn1q9m0qfDkafnigZPqqhMxTbHcqNrVxv7Z6AHPnxOWVvv1uDD5eb8nqmHbAmbCAlhXdd1Nk26Aff55zmQhfqAPt62Y7I7xDfNK4bE-fXj_Co2Rv4LblYrtUQl2qOiKaXJ99ZhZlsLqzDnxhbpo5P1lFB01QJadd6F8aiNS1gRfXAVFA5By_BKM81OoVw\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/{accountid}/devices;invalid-role-access-token-(prospect)',
        'keyword': 'Scenario',
        'line': 135,
        'name': 'Invalid Role Access Token (Prospect)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 134
          },
          {
            'name': '@pvt',
            'line': 134
          },
          {
            'name': '@openapi',
            'line': 134
          },
          {
            'name': '@role-prospect',
            'line': 134
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'accountId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '45b08e85-d7f3-49c2-a0c2-84540d56bd1c'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2b1aeac5-b545-44e4-98ed-b69ef3f0853b'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 136,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 141,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 142,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 143,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 850000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 144,
            'name': 'I have the path "/account/{accountId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 145,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 146,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 45000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 147,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 148,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 149,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 150,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 151,
            'name': '"id" should be "334431"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 152,
            'name': '"code" should be 431',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 153,
            'name': '"message" should be "You are not allowed to access to the service"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 154,
            'name': '"href" should be "https://developer.fwd.co.th/errors/431"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 155,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 156,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-242ef771-e561-426f-9e20-69e08e072c2b","curl":"curl \'https://openapi.uat.fwd.co.th/account/2b1aeac5-b545-44e4-98ed-b69ef3f0853b/devices\' -H \'x-correlation-id: e2e-test-242ef771-e561-426f-9e20-69e08e072c2b\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxNjYsImlhdCI6MTYxMzY0NjU2NiwianRpIjoiYTUyNjRjMzMtZGQxZi00ZGFjLTlmNzgtNjFmYzA2ODkxM2IzIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1wcm9zcGVjdCIsInNlc3Npb25fc3RhdGUiOiI0M2JjOWJmMC1hMDI1LTQzNWUtYjc3Zi1kN2VmYTZjZWNiNGQiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiUHJvc3BlY3QiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCBlbWFpbCByZWFkOmRldmljZXMgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCJ9.D3B6vMmZDqitfFjnowtBAnix8VyjLyBC6QLUKZQ6DYjQKLYL8Oam9daKxfGQKveRS8kC47Ob0uXmwDkkqJrq0RPbrG_JDV2tLZIveGQ9X_kXwFYnTfKPmwNtuKfEvpXaYcdz2wfu8d6FNbh9nrNzez5Hx2Fo7KJwoQ2sAgdZON15EOkqmxI2ro0Ef3gtydwq4tVwCoYbPwsa6rGl4NqkJ4841h0xRJjNyXMdqqLbUMkU05ElmabINA6DCX0C-nPdsWoxhK6HDlGkmCHothGOf1nzoTdY7jJhpOmaaMaxIYLtGnK7T_xVqarbkeOcMZMyCoXahFDEfk_lmpDTiO0pWw\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/{accountid}/devices;invalid-role-access-token-(customer)',
        'keyword': 'Scenario',
        'line': 159,
        'name': 'Invalid Role Access Token (Customer)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 158
          },
          {
            'name': '@pvt',
            'line': 158
          },
          {
            'name': '@openapi',
            'line': 158
          },
          {
            'name': '@role-customer',
            'line': 158
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'accountId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '45b08e85-d7f3-49c2-a0c2-84540d56bd1c'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2b1aeac5-b545-44e4-98ed-b69ef3f0853b'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 160,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 165,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 166,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 167,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1249000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 168,
            'name': 'I have the path "/account/{accountId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 169,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 170,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 33000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 171,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 172,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 173,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 174,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 175,
            'name': '"id" should be "334431"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 176,
            'name': '"code" should be 431',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 177,
            'name': '"message" should be "You are not allowed to access to the service"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 178,
            'name': '"href" should be "https://developer.fwd.co.th/errors/431"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 179,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 180,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-0cfe11fd-8ccc-4004-ac13-686d4acc52a4","curl":"curl \'https://openapi.uat.fwd.co.th/account/2b1aeac5-b545-44e4-98ed-b69ef3f0853b/devices\' -H \'x-correlation-id: e2e-test-0cfe11fd-8ccc-4004-ac13-686d4acc52a4\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxNjcsImlhdCI6MTYxMzY0NjU2NywianRpIjoiNGE1OGFkNGQtOTJlZC00NTNlLThhNjAtZWI1Y2VjOWVhZWQ1IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI1OGRiODhlMS04MjRiLTQ5ODctODVkNS04MTUyZmQ4ZDU0MjQiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IGVtYWlsIHBob25lIHJlYWQ6ZGV2aWNlcyBwcm9maWxlIHVzZXJJZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYWRkcmVzcyI6e30sImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDI5NTQ5ODIifQ.FA6LFhx4MwACejMt4CldG3FfOIHRGgp0uZfED1s0Z1B6hCkSZ4ksF-ZzkBG3qlCRM4jHzQyZr79srhWesz03BE69vg3B7xWEiyd4hPI2rEDAr2x6is5QmdphLOYet17_3NU_AF-g3u3GoZCGRpXWN1Mx3U6vuMcWgVfvIjn3Uo_WmT6a7uCxM4XPfTFMwkRyQnZRwgUvv2zyytzZG2PR5k2kKAQIoS2Ml9k98NXJWwZOhXZ5z6_KHQ_1810Vr2iSlpRjqbYdH3JMe8G_9IKCgvcRLIFh0QpYtwdwfFBzI2hMgpud7tjQGFtk2qCnTz7xnv1lbsqc_z73HznZfFmNfQ\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/{accountid}/devices;invalid-role-access-token-(sale)',
        'keyword': 'Scenario',
        'line': 183,
        'name': 'Invalid Role Access Token (Sale)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 182
          },
          {
            'name': '@pvt',
            'line': 182
          },
          {
            'name': '@openapi',
            'line': 182
          },
          {
            'name': '@role-sale',
            'line': 182
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'accountId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '45b08e85-d7f3-49c2-a0c2-84540d56bd1c'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2b1aeac5-b545-44e4-98ed-b69ef3f0853b'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 184,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 189,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 190,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 191,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1660000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 192,
            'name': 'I have the path "/account/{accountId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 193,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 194,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 37000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 195,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 196,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 197,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 198,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 199,
            'name': '"id" should be "334431"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 200,
            'name': '"code" should be 431',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 201,
            'name': '"message" should be "You are not allowed to access to the service"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 202,
            'name': '"href" should be "https://developer.fwd.co.th/errors/431"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 203,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 204,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-3dd3479d-7bef-4040-acb1-a35ed5d84c4e","curl":"curl \'https://openapi.uat.fwd.co.th/account/2b1aeac5-b545-44e4-98ed-b69ef3f0853b/devices\' -H \'x-correlation-id: e2e-test-3dd3479d-7bef-4040-acb1-a35ed5d84c4e\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxNjksImlhdCI6MTYxMzY0NjU2OSwianRpIjoiNjQyYTljMDEtYTEzZC00YTdmLTkyOWUtOWZkYmE5MzRkNWNlIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zYWxlIiwic2Vzc2lvbl9zdGF0ZSI6IjY5YTNhMDE3LWU3N2MtNGRjNy1iNDExLTM4YjhiZWI5NzdhMyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiU2FsZSIsIlZlcmlmaWVkIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJyZWFkOmFjY291bnQgZW1haWwgcmVhZDpkZXZpY2VzIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJwcm9maWxlc19hZHZpc29ySWQiOiI2MTUzOTk5IiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIn0.Ysu7CZjnrZAqfeharQVTlo_3_DIfh2vxcez8YegJn18t4bD6zQFk9E5u2ITUqw6Vkjg4EXDNmZggGzTqESdjOa0VDRfDQMhPfOn8WCx80Bi0r4X-2OjB4tirxLwYzVi1IC-BYxj5HzcWh_DXKelAgAR3h_WhKFI-D1ujMOM6qi-tT3uY5dOYZHwqF7HPL0g5Z7Bm7-Z6-FASzu8nLDc7CILQK0mctq_aSWaQUjRxwfJceovBQAjdaoxbrSfTGGaJpts75yOu20Ox6iGjzE8e2OibXJ4UmC3aLGL_wSlQNl_AMDN1ItB13z6l7mWIMhvFQOy3AhMXqrZzMSid9V6CWA\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/{accountid}/devices;account-id-is-not-found',
        'keyword': 'Scenario',
        'line': 207,
        'name': 'Account Id is not found',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 206
          },
          {
            'name': '@pvt',
            'line': 206
          },
          {
            'name': '@openapi',
            'line': 206
          },
          {
            'name': '@role-staff',
            'line': 206
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'accountId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '12308e85-d7f3-49c2-a0c2-84540d56bd1c'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '123aeac5-b545-44e4-98ed-b69ef3f0853b'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 208,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 213,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 214,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 215,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1460000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 216,
            'name': 'I have the path "/account/{accountId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 217,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 218,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 239000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 219,
            'name': 'I should see a http code 404',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 220,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 221,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 222,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 223,
            'name': '"id" should be "334444"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 224,
            'name': '"code" should be 444',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 225,
            'name': '"message" should be "The account is not found"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 226,
            'name': '"href" should be "https://developer.fwd.co.th/errors/444"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 227,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 228,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-2b076860-ff44-466c-9aee-1898c33f9ace","curl":"curl \'https://openapi.uat.fwd.co.th/account/123aeac5-b545-44e4-98ed-b69ef3f0853b/devices\' -H \'x-correlation-id: e2e-test-2b076860-ff44-466c-9aee-1898c33f9ace\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxNzAsImlhdCI6MTYxMzY0NjU3MCwianRpIjoiNTM2MDliZjUtM2UyNy00NTkzLWJiZmUtYjJmZTU1ODJkODZjIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiI5NmZkOTZmNy1lMTM2LTQ5N2EtOTY4OC1jOWY5M2IwYTE1NDMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCBlbWFpbCByZWFkOmRldmljZXMgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwicHJvZmlsZXNfc3RhZmZJZCI6IjAwMDAyIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCJ9.WC21JiBy8qpibVFGPZ5JUdYn-UOukyYeNCUhhAUnSLpPy1Ty1bMMTbpuTgbuUFTq5InzXiF4AX9CYLMzXsv4jP7LGFLFh3rzXO4tL77Wdk6mk_oNJjP6Zn143GDYoeEqVOTt0V3FMRyBj6Jwts_Mt1x2Roi3fsfXuK_4gVqQzCmbbPQFIwa_CLT-CfPheI3x2gD6ahds0i93UiZg5ouxBEQ4EcqhEiuDslaQpHup5Xf45OnVMXYhqYr5Bg2GpKsigJAWOd4jB5PpbUo2TBjO4fXKxvx0Eytg8Vjcv2Qv7R0eYyI4S14Qe1PYIJn8YARHh8PCKvNVSbl2dQkmmltOTA\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/{accountid}/devices;query-not-found',
        'keyword': 'Scenario',
        'line': 231,
        'name': 'Query not found',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 230
          },
          {
            'name': '@pvt',
            'line': 230
          },
          {
            'name': '@openapi',
            'line': 230
          },
          {
            'name': '@role-staff',
            'line': 230
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'accountId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '9491ef57-408b-48d9-9bec-c60885edec9d'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      'ee30fd4e-7522-4b33-ba07-e482c53c5793'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 232,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 237,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 238,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 239,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 958000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 240,
            'name': 'I have the path "/account/{accountId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 241,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 242,
            'name': 'the query parameter contains "type" as "TABLET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 243,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 348000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 244,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 245,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 246,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 247,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 248,
            'name': 'the response should be empty array',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 249,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 250,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-2f3a2a39-44d6-4b2c-b10e-a4f8d83b71c0","curl":"curl \'https://openapi.uat.fwd.co.th/account/ee30fd4e-7522-4b33-ba07-e482c53c5793/devices?type=TABLET\' -H \'x-correlation-id: e2e-test-2f3a2a39-44d6-4b2c-b10e-a4f8d83b71c0\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxNzIsImlhdCI6MTYxMzY0NjU3MiwianRpIjoiNzA2ZmRhYWItMTk2MC00ZTcwLWI5YWUtYWE5ZWRiZTBiYjg3IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiJjYTY5ZDQzNi03NDNmLTQ3M2ItOTFhMS1mZTAxZTIxOGNmMjMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCBlbWFpbCByZWFkOmRldmljZXMgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwicHJvZmlsZXNfc3RhZmZJZCI6IjAwMDAyIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCJ9.kfAATXwUCJIzVvXpTuGW-QpCePbbnEpjeE7ATaP1f62ZEomkbfd98PftWV4nNbr-wtktV6A6Pur9zVaPLoDixI-DQE9655nbRt-amvzdvL69V25FnphISGSHUYSYzRhczvk76cU-_-a34n-8auUaiwfDGbva64gWWS5EZ7gSg7xe7fpvQnj4RoXan95fsOx6xma9m17-Zsv-ZL685uWi6Q3Y9mtTpLQBJWaHzJZ7KroGcrxjXyofza0GAHId_MUdpzif3Gh3a7eovPGCL3zEC4Nvf1eECaq5F67qNXYbvZSpeq2-IWeM_cvWvAmzj2D07LNq1zQIEA95h9j5MD8y7Q\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/{accountid}/devices;type',
        'keyword': 'Scenario',
        'line': 253,
        'name': 'Type',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 252
          },
          {
            'name': '@pvt',
            'line': 252
          },
          {
            'name': '@openapi',
            'line': 252
          },
          {
            'name': '@role-staff',
            'line': 252
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'accountId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '45b08e85-d7f3-49c2-a0c2-84540d56bd1c'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2b1aeac5-b545-44e4-98ed-b69ef3f0853b'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 254,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 259,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 260,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 261,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1635000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 262,
            'name': 'I have the path "/account/{accountId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 263,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 264,
            'name': 'the query parameter contains "type" as "insta"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 265,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 41000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 266,
            'name': 'I should see a http code 406',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 267,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 268,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 269,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 270,
            'name': '"id" should be "334463"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 271,
            'name': '"code" should be 463',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 272,
            'name': '"message" should be "The field type doesn\'t match the values: PHONE, TABLET, FACEBOOK, LINE"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 273,
            'name': '"href" should be "https://developer.fwd.co.th/errors/463"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 274,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 275,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-5c80da67-6a7e-43b4-a55a-7b4bed81983d","curl":"curl \'https://openapi.uat.fwd.co.th/account/2b1aeac5-b545-44e4-98ed-b69ef3f0853b/devices?type=insta\' -H \'x-correlation-id: e2e-test-5c80da67-6a7e-43b4-a55a-7b4bed81983d\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxNzMsImlhdCI6MTYxMzY0NjU3MywianRpIjoiMGIxNDNiYTctYWVmNC00OGRiLTk3YmEtYWE5MTMyOWFkNzdlIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiI3MTMwNjQ1NC1lN2RjLTQ2NjAtYWZhOC01MTdlYTU5NWRlNGEiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCBlbWFpbCByZWFkOmRldmljZXMgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwicHJvZmlsZXNfc3RhZmZJZCI6IjAwMDAyIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCJ9.J4F9WITJZJmfR7_dz28gqsBote9CmrgxVGb3dLaoLa6SfFeXRcSh5eWcZ6oljQdWqGx2rDZvXfwhIfHAqbo8YLg1VaZ0GCxQxx0LVfJBSZR9CEmrtymWpOgc4PM6yUBNBFIoLONcFeJGAozt1tmrg8qQVw5CAG9fWT1kFtmDxanZuh0otH_vKP_ZOSoQ1R3bU30MvnTcqYtL2h9crlsibpVZC7MfqyhImkvN6E4AHPthK_XYa379PSZ8QZk1MV3f_bIBe3jvoomJh6OY_8cl4r1WEUzJjEcYKodXJ3SwNuWoyZLW2l1blY-Xr0g5HQ_IWubyChgs9KK03le82Mdz-A\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'description': '  API consumer\n  get list a device associated to an account\n  I can get the device detail',
    'keyword': 'Feature',
    'name': 'GET /account/devices',
    'line': 2,
    'id': 'get-/account/devices',
    'tags': [
      {
        'name': '@userstories-16',
        'line': 1
      }
    ],
    'uri': 'features/get_accountdevices.feature',
    'elements': [
      {
        'id': 'get-/account/devices;customer-role-requests-to-retrieve-list-a-device--(type-:-phone)',
        'keyword': 'Scenario',
        'line': 9,
        'name': 'Customer role requests to retrieve list a device  (type : PHONE)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 8
          },
          {
            'name': '@openapi',
            'line': 8
          },
          {
            'name': '@role-customer',
            'line': 8
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'id',
                      'type',
                      'externalId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '2',
                      'PHONE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '5',
                      'PHONE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 10,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 15,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 16,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 17,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1557000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 18,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 19,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 20,
            'name': 'the query parameter contains "type" as "PHONE"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 21,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 1090000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 22,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 23,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 24,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 25,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 26,
            'name': '"0.id" should match "\\d"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 27,
            'name': '"0.type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 28,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 29,
            'name': '"0.externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 30,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 31,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 32,
            'name': '"0.updatedDate" should be null',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 33,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 34,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-109ccb16-c7d4-478d-9aa8-5c428b8a36d7","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices?type=PHONE\' -H \'x-correlation-id: e2e-test-109ccb16-c7d4-478d-9aa8-5c428b8a36d7\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxNzUsImlhdCI6MTYxMzY0NjU3NSwianRpIjoiNzc5N2M3ZDAtZDAzYy00ZDg3LWFjNzUtOTE1NGFiNDc2NTI2IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiJiN2I0MzE4Zi02OTU4LTQwZTItYjVmZi1hNDllYmE5NTJlYzciLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IGVtYWlsIHBob25lIHJlYWQ6ZGV2aWNlcyBwcm9maWxlIHVzZXJJZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYWRkcmVzcyI6e30sImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDI5NTQ5ODIifQ.fSiXYK3YQsFvQpXATlsHJzf1hj54ux8wfXlH5ttF1oYtbe1USx3NtyMCoNILU9FIrNukp7rRD4seu1s0_sPPGw3qBMW8S5faIPkVBONWQRra53miQkNbYt2_g4GZCO_vnvGh3dM4IOHY4teFA2pjUh0XfZN9-wQJtRd54nqvhlXbsEeOggD2n6GP45haVEZgtU5QuRQk4N-15eCBDNYkHdq1NBeKMxTf9IF9snrtlkqCuJSwg5NNTKnM2GhbsO3Vg7-G6b4ZRwduPZ9ueWjxwXSNWdD2sMAs47DlTPswOiBfgCStDNgCr0L3xzZYDTgjDgiCTMZrtRuvU8ZcMNvP9A\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices;customer-role-requests-to-retrieve-list-a-device-(type-:-tablet)',
        'keyword': 'Scenario',
        'line': 38,
        'name': 'Customer role requests to retrieve list a device (type : TABLET)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 37
          },
          {
            'name': '@openapi',
            'line': 37
          },
          {
            'name': '@role-customer',
            'line': 37
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'id',
                      'type',
                      'externalId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '9',
                      'TABLET',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '108',
                      'TABLET',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 39,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 44,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 45,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 46,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1398000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 47,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 48,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 49,
            'name': 'the query parameter contains "type" as "TABLET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 50,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 348000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 51,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 52,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 53,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 54,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 55,
            'name': '"0.id" should match "\\d"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 56,
            'name': '"0.type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 57,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 58,
            'name': '"0.externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 59,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 60,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 61,
            'name': '"0.updatedDate" should be null',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 62,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 63,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-fc70f42a-79d6-4e24-b19d-96de48dd2c19","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices?type=TABLET\' -H \'x-correlation-id: e2e-test-fc70f42a-79d6-4e24-b19d-96de48dd2c19\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxNzgsImlhdCI6MTYxMzY0NjU3OCwianRpIjoiYzI2N2UxZDMtMjAyOC00YTczLWExYTctZGUwNWY0NDUwZTA5IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiJjNTYyMWM4OC0xNzcwLTRmZGUtODAxNC04MzRiZjc4MDI0MDUiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IGVtYWlsIHBob25lIHJlYWQ6ZGV2aWNlcyBwcm9maWxlIHVzZXJJZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYWRkcmVzcyI6e30sImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDI5NTQ5ODIifQ.hvWcJoAR_OxPf1-sKBxJau0qcgSfEmOWsCoFOw2Msoh1NtjBLSRBLYKL4iDUMojyTwr7MaMxp8ps8bPEwIOJNA4e41nXkkDgMNjkOS0ZY7rw5GIiOIKMY1m7H2GEjTT1VJEfdxBeL5RACtbMOoKNmYlbGW6a0j-eHf7wSO_zE12OtYpwioN79lcl55YDAD_QfkeR1TyffUwf2JYY4o_7fNjH_G7c_3Sgnq6aNi1PW8b1OlWv1gsK6V82w7Vv5hnFSyPIUa-S17kuME2LWbtRr8jWWxySySGj-o_IvCCwT3EIKNrbB4ASkvclP7uUuLoA6y-FyOKyJsRpWnbEXih4AQ\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices;customer-role-requests-to-retrieve-list-a-device-(type-:-line)',
        'keyword': 'Scenario',
        'line': 66,
        'name': 'Customer role requests to retrieve list a device (type : LINE)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 65
          },
          {
            'name': '@openapi',
            'line': 65
          },
          {
            'name': '@role-customer',
            'line': 65
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'id',
                      'type',
                      'externalId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '4',
                      'LINE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2',
                      'LINE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 67,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 72,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 73,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 74,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1445000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 75,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 76,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 77,
            'name': 'the query parameter contains "type" as "LINE"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 78,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 346000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 79,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 80,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 81,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 82,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 83,
            'name': '"0.id" should match "\\d"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 84,
            'name': '"0.type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 85,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 86,
            'name': '"0.externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 87,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 88,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 89,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 90,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 91,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-05a588ec-8b67-4335-936f-8d1f9f3c92d0","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices?type=LINE\' -H \'x-correlation-id: e2e-test-05a588ec-8b67-4335-936f-8d1f9f3c92d0\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxNzksImlhdCI6MTYxMzY0NjU3OSwianRpIjoiMTYzZWFmMjMtYzI3Yy00ZjUwLWI2ZmUtOTM2MjNkNTcyMzVjIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI4ZjU4MjdmZC02YzVhLTQ4NzctOTE3ZC1jZGU5YmYxOTdmMzEiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IGVtYWlsIHBob25lIHJlYWQ6ZGV2aWNlcyBwcm9maWxlIHVzZXJJZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYWRkcmVzcyI6e30sImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDI5NTQ5ODIifQ.VxkLxeu_Ahc_fqk5pMEIWsGqVr2QedGfCbECAyhOmqCoXktDWqYXEToQXqq7WdFpWMZcrQfpOwJ91PyLFpsZDznQumYEZYBk93OfR9KLfrFIGV0V_2WAsnmVjyMDR2SVzVmB10eXXFYjOwA7qfW7JuLM2RchWo1REWzowW3GBFk5j1HbqrYnCldYUnkdT1mRAcBEFjtMdCFgOzN8IMYwpKwwX637CZO7-lazPAwJy61tybYjEBVdSpoF5Ubeizk4EFq-v7ke_jHCbo9dfaFKD-oTIgvfDl-QfGrEGH5WCmDfAiY5SmzfP8QbTeHsWquYa1jmcfjBNTM1mZcMtaki3g\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices;customer-role-requests-to-retrieve-list-a-device-(type-:-facebook)',
        'keyword': 'Scenario',
        'line': 96,
        'name': 'Customer role requests to retrieve list a device (type : FACEBOOK)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 95
          },
          {
            'name': '@openapi',
            'line': 95
          },
          {
            'name': '@role-customer',
            'line': 95
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'id',
                      'type',
                      'externalId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '632',
                      'FACEBOOK',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '3',
                      'FACEBOOK',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 97,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 102,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 103,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 104,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1040000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 105,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 106,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 107,
            'name': 'the query parameter contains "type" as "FACEBOOK"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 108,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 363000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 109,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 110,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 111,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 112,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 113,
            'name': '"0.id" should be "{id}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 114,
            'name': '"0.type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 115,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 116,
            'name': '"0.externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 117,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 118,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 119,
            'name': '"0.updatedDate" should be null',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 120,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 121,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-554e7d50-119e-4d72-8a5f-106fd9a478b7","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices?type=FACEBOOK\' -H \'x-correlation-id: e2e-test-554e7d50-119e-4d72-8a5f-106fd9a478b7\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxODEsImlhdCI6MTYxMzY0NjU4MSwianRpIjoiZTA3YjBmODItYTQ5Yy00ZDU0LThmNWUtZWMyMDY2MGE5NjE4IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI0MzEwMDgxNS0yYmE2LTQzM2QtYWM4NS1jNGQ5YWUzZmY2M2MiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IGVtYWlsIHBob25lIHJlYWQ6ZGV2aWNlcyBwcm9maWxlIHVzZXJJZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYWRkcmVzcyI6e30sImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDI5NTQ5ODIifQ.JqQj4xmSgCbdmNsLD7kcBM7SRq-4x1l2jwJs9D9hMlhGfYWRx1Om-hR5L33Ap3QyeyPIRviDn__S8KzfS81kCznw9myLgvjv1YvxtX1DLtqU7Ao6dSX1TkQpBI4GzDPa8LDR8y5R_mIhfKml2ISAjBpi8GNzliVBlBXVxvzn1_YLO8Pfg08Yt7jIhuvbotlFToFq0HEXXLGEL6Wc1Tf1WrIpaJb38uKTdQWuGWc3j_ARfK-pBm1lOlSBwmahI7kEzBTdllTJf1-dkuSf7mQxglosVddGTiMrEHZ8d99kJ5DkMxgZHuuxSOi-tT9-XrIThlMcQDJf01_llcLIeQsJoQ\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices;staff-role-requests-to-retrieve-list-a-device-(type-:-phone)',
        'keyword': 'Scenario',
        'line': 126,
        'name': 'Staff role requests to retrieve list a device (type : PHONE)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 125
          },
          {
            'name': '@openapi',
            'line': 125
          },
          {
            'name': '@role-staff',
            'line': 125
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'id',
                      'type',
                      'externalId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '2',
                      'PHONE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '5',
                      'PHONE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 127,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 132,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 133,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 134,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1232000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 135,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 136,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 137,
            'name': 'the query parameter contains "type" as "PHONE"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 138,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 440000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 139,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 140,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 141,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 142,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 143,
            'name': '"0.id" should match "\\d"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 144,
            'name': '"0.type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 145,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 146,
            'name': '"0.externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 147,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 148,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 149,
            'name': '"0.updatedDate" should be null',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 150,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 151,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-5eb4ceb0-bf38-41c8-ac1b-164fa5308a92","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices?type=PHONE\' -H \'x-correlation-id: e2e-test-5eb4ceb0-bf38-41c8-ac1b-164fa5308a92\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxODIsImlhdCI6MTYxMzY0NjU4MiwianRpIjoiMGUyMTIyN2UtMzY1NC00YTY3LTlkZTMtZDBhOGQwMTQ1MGY3IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiJjZmNjYWEzOS05NGMxLTRmYTktODU4ZC1lNzBhODQyMzA5YTEiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCBlbWFpbCByZWFkOmRldmljZXMgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwicHJvZmlsZXNfc3RhZmZJZCI6IjAwMDAyIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCJ9.l-j0rDN72YoKqlBrSQXrhSdzYuF43GL1cFp1GLKfSs0Db2EVboFOwXFOnjoc7deenwVLQsJ3gAk6Z3uWJvaGlQpxxebxD3echRDw1OldodNG3Yp5FBLLyW61g9jJ8Svw1lqWTZFkCL1JUVO5389wqk807NEycCM7s9ZRTunhR0J4X_6oHapK7M4zNqlmsi54oTFmbMixuPaxiNGuVlSfuT5QyG4w-DG8xVwCgf78bKr2ILB6DY-DX58jdtP4bj9X8MOWWL777Kgt1Z8dPgVxO7EuQCtk65offEFfmsyovZj2UuN1B5IS_oUS8ABBr_-H0A79YQTc7-TXLFh_7OCUiA\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices;sale-role-requests-to-retrieve-list-a-device-(type-:-facebook)',
        'keyword': 'Scenario',
        'line': 156,
        'name': 'Sale role requests to retrieve list a device (type : FACEBOOK)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 155
          },
          {
            'name': '@openapi',
            'line': 155
          },
          {
            'name': '@role-sale',
            'line': 155
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'id',
                      'type',
                      'externalId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '632',
                      'FACEBOOK',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '3',
                      'FACEBOOK',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 157,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 162,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 163,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 164,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1052000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 165,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 166,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 167,
            'name': 'the query parameter contains "type" as "FACEBOOK"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 168,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 439000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 169,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 170,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 171,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 172,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 173,
            'name': '"0.id" should be "{id}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 174,
            'name': '"0.type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 175,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 176,
            'name': '"0.externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 177,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 178,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 179,
            'name': '"0.updatedDate" should be null',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 180,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 181,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-19617fcd-2f06-4867-97a9-b9c578660dfe","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices?type=FACEBOOK\' -H \'x-correlation-id: e2e-test-19617fcd-2f06-4867-97a9-b9c578660dfe\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxODQsImlhdCI6MTYxMzY0NjU4NCwianRpIjoiM2E2ZDgzMmYtYmFmMS00NTZiLTkwOGMtY2ExZmUyZTVhZDA2IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zYWxlIiwic2Vzc2lvbl9zdGF0ZSI6IjFkNTY0ZTg1LTg4ZDUtNDk0ZC1hMGNiLTQ3MmM3MmQ2MGZjYSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiU2FsZSIsIlZlcmlmaWVkIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJyZWFkOmFjY291bnQgZW1haWwgcmVhZDpkZXZpY2VzIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJwcm9maWxlc19hZHZpc29ySWQiOiI2MTUzOTk5IiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIn0.RGCcaUt0_Ths-NaSpiOAZuk-wthl_seNBxgEXeksgVbLODyo7-lpXQZPduqJGt5kTVEL7Fd7n_qgCJ-Wc9TnJJ721yk0jcVY0M-ml_-7lHFCUlFzrrXIQE6kElsbjBjKmod-0tDIU9eKSnSPrn9TT-fkyvfGpU1iu_pDyC9S7FP5mqMyOftuxIoqGP6QptFTB7bh6mt1pGEfAoyjfpi5G-quveF8qDCOI5Vqy8Wyf6ylIftYtG2hJ_hOZOwnneZmJFyX4e4v7hYiL4ZvVoktDDuXicou2iLNaSvJtoDU53kDJfqTGivRmY5JbVvY8Hqv8yeTLbrReuHs3mWiggsAMA\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices;prospect-role-requests-to-retrieve-list-a-device-(type-:-line)',
        'keyword': 'Scenario',
        'line': 186,
        'name': 'Prospect role requests to retrieve list a device (type : LINE)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 185
          },
          {
            'name': '@openapi',
            'line': 185
          },
          {
            'name': '@role-prospect',
            'line': 185
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'id',
                      'type',
                      'externalId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '4',
                      'LINE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2',
                      'LINE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 187,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 192,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 193,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 194,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1055000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 195,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 196,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 197,
            'name': 'the query parameter contains "type" as "LINE"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 198,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 248000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 199,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 200,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 201,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 202,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 203,
            'name': '"0.id" should match "\\d"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 204,
            'name': '"0.type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 205,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 206,
            'name': '"0.externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 207,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 208,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 209,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 210,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 211,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-e6d63e2e-d50b-4939-882a-eb542fdac140","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices?type=LINE\' -H \'x-correlation-id: e2e-test-e6d63e2e-d50b-4939-882a-eb542fdac140\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxODUsImlhdCI6MTYxMzY0NjU4NSwianRpIjoiOWUzNGJiN2QtNjllMC00NzcxLWExOTctYTZiNGEyNDNjM2E4IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1wcm9zcGVjdCIsInNlc3Npb25fc3RhdGUiOiIxYTM0M2Q4YS1lODdlLTRjZDMtOTllYy01ZGYyZTBlMGY0MTgiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiUHJvc3BlY3QiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCBlbWFpbCByZWFkOmRldmljZXMgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCJ9.fc9ERuN6Hcnu5ytWAuJwJJgZYvp0KESsCZQMaBbhlCjqRwL-iEXoqO5WMd1RPIwuL5w8sND16LvhKCOd55Ao2gZ2wxDLA0Io7NEpLJocTwxLIBVubjoCDTLAkxpAzXZmqbojmwLnvKs7SQrTC0wJUqGeIxV4jGpI2dsJ9mCJLvprVy6gZDK1PH07RqdJoeIMzDtusJTGhd5MiH0HzYOdLADRrc9tHOUlCajCHpI9pWZBuGXcp9Jx0BnQwdkT-k7J_JSTCNcthVmwCKs1C4WoUFjMbyUK9tByaf2xNFIMx1a2mNSx-9R8SNhXyKpJaWyPW6kt0hW03dIs3H5mdGYtWA\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices;security---token-expiration',
        'keyword': 'Scenario',
        'line': 214,
        'name': 'Security - Token Expiration',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 213
          },
          {
            'name': '@pvt',
            'line': 213
          },
          {
            'name': '@openapi',
            'line': 213
          },
          {
            'name': '@role-customer',
            'line': 213
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 215,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 216,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 217,
            'name': 'I have an expired access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 218,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 219,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 220,
            'name': 'the query parameter contains "type" as "test"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 221,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 73000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 222,
            'name': 'I should see a http code 401',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 223,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 224,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 225,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 226,
            'name': '"id" should be "334411"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 227,
            'name': '"code" should be 411',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 228,
            'name': '"message" should be "Token is expired"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 229,
            'name': '"href" should be "https://developer.fwd.co.th/errors/411"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 230,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 231,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-384285c6-3d4c-4a93-811b-50dd133adcef","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices?type=test\' -H \'x-correlation-id: e2e-test-384285c6-3d4c-4a93-811b-50dd133adcef\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJqdGkiOiJkOWJlNjU1Ny1hZGJhLTQ1MzAtODM3MC01MGU1OWY3ZDI4ZWUiLCJleHAiOjE1Nzg0NTA5NTUsIm5iZiI6MCwiaWF0IjoxNTc4NDQ5MTU1LCJpc3MiOiJodHRwczovL2lhbS1zYW5kYm94LnNjYmxpZmUuY28udGgvYXV0aC9yZWFsbXMvc2NibGlmZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjYWM1YWJjMC0wMzc0LTQ5NDQtYTM1Ny1lNmY1Mzk0YjI4N2UiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJBUElfRkFDVE9SWS1DdXN0b21lciIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImU3OTZlODMzLWFiNTItNDA5My1iYzRmLWVhZmIxZWUyMTYzNSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ3VzdG9tZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJyZWFkOnVzZXJzOmNvbnNlbnRzIHJlYWQ6cXVvdGVzIHdyaXRlOmFkdmlzb3JzIHdyaXRlOmFjY291bnQgcmVhZDpjb25zZW50cyByZWFkOnBheW1lbnRzIHJlYWQ6cG9saWNpZXM6Y29uc2VudHMgYWRtaW46d3JpdGU6YWNjb3VudCByZWFkOmRvY3VtZW50cyB3cml0ZTpxdW90ZXMgd3JpdGU6dXNlcnM6Y29uc2VudHMgd3JpdGU6Y2xhaW1zIHdyaXRlOnVzZXJzIHdyaXRlOnBvbGljaWVzOmNvbnNlbnRzIHJlYWQ6YWNjb3VudCB3cml0ZTpwYXltZW50cyBlbWFpbCByZWFkOnJpZGVycyB3cml0ZTphY2NvdW50OmNvbnNlbnRzIHdyaXRlOmRvY3VtZW50cyB3cml0ZTpjb25zZW50cyByZWFkOnVzZXJzIHJlYWQ6aW5mb3MgcmVhZDpwb2xpY2llcyByZWFkOmxlYWRzIHdyaXRlOnBvbGljaWVzIHByb2ZpbGUgdXNlcklkIHJlYWQ6YWR2aXNvcnMgd3JpdGU6bGVhZHMgd3JpdGU6Y2FzZXMgcmVhZDphY2NvdW50OmNvbnNlbnRzIHJlYWQ6Y2xhaW1zIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRhd2VlcG9ybiBEb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIyMDAwMDA0Nzg2ODciLCJnaXZlbl9uYW1lIjoiVGF3ZWVwb3JuIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJlbWFpbCI6InRhd2Vwb3JuLmRvZTFAZXhhbXBsZS5jb20iLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDA0Nzg2ODcifQ.eqVvdweI_v0tvo6-SvVkl6xGgyHLzixN-9FtIMdON04M8e4n8NMX1OeScw5eYNdVZLVJAekPjuc8a1ZRua1GQzr9Pp4hMYOCm2Nqy439v7ZELVxlwz0GDWgIT6MEQwRE1wsKFGk8kY_2aJ_f1RpvGv_FpAxINz7kE5M4qUqrVfkvfBQ2284tbXwHmf_bGtgfSqzIIR6jYFmSLZ-v2Z6QwTckTF0v18aVl_cCRgBH0FA__nU5Girsl-m9hzOEHK6ttHvhPhAH-_3riPLuZcyxarQNW94CrJNlHf0y27u5tdSKJJS7tpNMSlfJLWnRcS6kf0ToTrFVMcajI2ZlVfK86g\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices;security---token-signature-invalid',
        'keyword': 'Scenario',
        'line': 235,
        'name': 'Security - Token Signature invalid',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 234
          },
          {
            'name': '@pvt',
            'line': 234
          },
          {
            'name': '@openapi',
            'line': 234
          },
          {
            'name': '@role-customer',
            'line': 234
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 236,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 237,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 238,
            'name': 'I have an invalid access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 239,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 240,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 241,
            'name': 'the query parameter contains "type" as "test"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 242,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 96000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 243,
            'name': 'I should see a http code 401',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 244,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 245,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 246,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 247,
            'name': '"id" should be "334412"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 248,
            'name': '"code" should be 412',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 249,
            'name': '"message" should be "Invalid signature"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 250,
            'name': '"href" should be "https://developer.fwd.co.th/errors/412"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 251,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 252,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-a5b07ef4-c4aa-4830-ae2e-a94774c4f902","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices?type=test\' -H \'x-correlation-id: e2e-test-a5b07ef4-c4aa-4830-ae2e-a94774c4f902\' -H \'authorization: Bearer invalid-access-token\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices;security---token-unauthorized-scopes',
        'keyword': 'Scenario',
        'line': 256,
        'name': 'Security - Token unauthorized scopes',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 255
          },
          {
            'name': '@pvt',
            'line': 255
          },
          {
            'name': '@openapi',
            'line': 255
          },
          {
            'name': '@role-customer',
            'line': 255
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 257,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 258,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 959000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 259,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 260,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 261,
            'name': 'the query parameter contains "type" as "test"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 262,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 35000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 263,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 264,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 265,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 266,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 267,
            'name': '"id" should be "334430"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 268,
            'name': '"code" should be 430',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 269,
            'name': '"message" should be "You are not allowed to consume the resource"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 270,
            'name': '"href" should be "https://developer.fwd.co.th/errors/430"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 271,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 272,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-100c67c9-1d58-46fb-b767-16bee9002eea","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices?type=test\' -H \'x-correlation-id: e2e-test-100c67c9-1d58-46fb-b767-16bee9002eea\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxODcsImlhdCI6MTYxMzY0NjU4NywianRpIjoiYTcwMzFiODAtM2NmOC00YWI5LThjNTEtZTM4M2I2ZmRlMDc5IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI1MmQxMjFjMC03YTExLTQ2MjktYjU4YS03ODg0YzNkOWZkMGUiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgZW1haWwgcGhvbmUgcHJvZmlsZSB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.bIfLXgPCm2rEDFFTPRCUM384JelBnbOEoTNnRpgm8X9n1npbWsKIOB-I0kk3YcvvI58xB-35_bDujKI6ITeL6-i00jSu7GmNk5ubnXhKvFMc-mEL0iANO5HciJUyhf5zUwLUDttHGUgLrk0xR9dN1AMIUfe9S7ENs_-agbmm5hQa-rHf9Cd3mU0Z1YldPjC0g9F9jHQ6nvl4Y5Fc9dBSjmVqY2Dp4wIg834eimvco1E48x3ZO_F_kH3HlVm1CuCRJq6AYtV5-xCU4o0p0FHoWde0MgyE1nyFS51ZV1uJnd7IvmklKZAFJJCyvVBD4JMjYEL5fJU8MHLO9puO1cNg4A\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices;invalid-enum-(type)',
        'keyword': 'Scenario',
        'line': 276,
        'name': 'Invalid enum (Type)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 275
          },
          {
            'name': '@pvt',
            'line': 275
          },
          {
            'name': '@openapi',
            'line': 275
          },
          {
            'name': '@role-customer',
            'line': 275
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 277,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 278,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 279,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1153000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 280,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 281,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 282,
            'name': 'the query parameter contains "type" as "FACEBOO"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 283,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 35000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 284,
            'name': 'I should see a http code 406',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 285,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 286,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 287,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 288,
            'name': '"id" should be "334463"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 289,
            'name': '"code" should be 463',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 290,
            'name': '"message" should be "The field type doesn\'t match the values: PHONE, TABLET, FACEBOOK, LINE"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 291,
            'name': '"href" should be "https://developer.fwd.co.th/errors/463"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 292,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 293,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-21c5f314-f4d3-4bb7-8658-99f5aa87a3c7","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices?type=FACEBOO\' -H \'x-correlation-id: e2e-test-21c5f314-f4d3-4bb7-8658-99f5aa87a3c7\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxODgsImlhdCI6MTYxMzY0NjU4OCwianRpIjoiOTIzZTkxN2QtY2IyMC00MzgyLWE4MTUtNmM0ZjQwNTQ4M2VmIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI2ZGUyNzU0Ny0xOWUwLTQyYjEtODBhZC0zZWQ3YTEwNjhjNmQiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IGVtYWlsIHBob25lIHJlYWQ6ZGV2aWNlcyBwcm9maWxlIHVzZXJJZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYWRkcmVzcyI6e30sImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDI5NTQ5ODIifQ.TOBk5Hr2c65oQ9aarj-fVnIsVhGbiGsii6FHFHTqz72QHUvQ9LW1RpTB2D1R_5pYUfjXiX6gvxsNQ125ZTIzjvBxB5HZNZq-1VUZGtuTIPwhfzicHtIKsCWjEr8C6NaWwSI_ucnI03P2DAfLqmgj8UnLDqbM-zDE4dAddU0AsotKpYmue8e_71FY5gaI2_lQxrxaiTakBZbGK9erZzyINK0X59DSXoiJdrBjtBMNnc_srgWYad3F_PFSyUHmE6oWutd-wq4QcyJ1WX74jOlVEKX2Ji2wRg4A4ExPBNPgUAUP41I6GTszhXtromeILjscRctrE-f7eCq3nZEJjcWaIg\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'description': '  API consumer\n  get detail of an account\'s device\n  I can know what is the user\'s device information',
    'keyword': 'Feature',
    'name': 'GET /account/devices/{deviceId}',
    'line': 2,
    'id': 'get-/account/devices/{deviceid}',
    'tags': [
      {
        'name': '@userstories-16',
        'line': 1
      }
    ],
    'uri': 'features/get_accountdevices{deviceid}.feature',
    'elements': [
      {
        'id': 'get-/account/devices/{deviceid};customer-role-requests-to-retrieve-details-of-device-assciated-to-the-account',
        'keyword': 'Scenario',
        'line': 9,
        'name': 'Customer role requests to retrieve details of device assciated to the account',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 8
          },
          {
            'name': '@openapi',
            'line': 8
          },
          {
            'name': '@role-customer',
            'line': 8
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'deviceId',
                      'type',
                      'externalId',
                      'createdDate'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '2',
                      'LINE',
                      '355715565309247',
                      '2019-02-01T03:09:19.000Z'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2',
                      'LINE',
                      '355715565309247',
                      '2019-02-01T03:09:19.000Z'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 10,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 15,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 16,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 17,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1773000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 18,
            'name': 'I have the path "account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 19,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 20,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 138000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 21,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 22,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 23,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 24,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 25,
            'name': '"id" should be "{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 26,
            'name': '"type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 27,
            'name': '"enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 28,
            'name': '"externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 29,
            'name': '"notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 30,
            'name': '"createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 31,
            'name': '"updatedDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 32,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 33,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-c377a8e7-7440-4b06-a072-0fcd5641ab37","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/2\' -H \'x-correlation-id: e2e-test-c377a8e7-7440-4b06-a072-0fcd5641ab37\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxOTAsImlhdCI6MTYxMzY0NjU5MCwianRpIjoiZDhkYjFiNGItYzlhYS00Y2Q3LWEyZjYtNDA1YWViMzA4MzNhIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiIxNTViYjg1NS0xN2Y4LTRkOWYtYWZkNy0xMTBhNjc4MzNkM2QiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IGVtYWlsIHBob25lIHJlYWQ6ZGV2aWNlcyBwcm9maWxlIHVzZXJJZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYWRkcmVzcyI6e30sImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDI5NTQ5ODIifQ.f_h6G2wLIUjXTL4wc76UzNQiAdn-Lq7b71Df2A5r7tazXEZEQWuFnYMc3qKM4ggqtGDJMwdpvTeF2xXU73tt_JYvqW8jI9lqyUcatLdBLAj3LwHJ3sAWdrCB7kOrg6aKNB4U1d0yQrPZo2gMkUjH2P3y4hTvBYiH809_OWFJxaW7hrGKhLylzBYJRVF58cpNeTVEmeNrI3J4eGEUXSc8kVDOLOmD_uYnq6OFuyzzw8tDDAkeUXdml_WCzprjpUo9DO9HryhiUz3mDfIJVFlQvj63KSLdI4TJ4v9U_1ia6M1eaTx5cMaVA7OxACKf8UsM-S7x3HLwTOAoe6xPCV2UTw\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices/{deviceid};staff-role-requests-to-retrieve-details-of-device-assciated-to-the-account',
        'keyword': 'Scenario',
        'line': 37,
        'name': 'Staff role requests to retrieve details of device assciated to the account',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 36
          },
          {
            'name': '@openapi',
            'line': 36
          },
          {
            'name': '@role-staff',
            'line': 36
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'deviceId',
                      'type',
                      'externalId',
                      'notificationToken',
                      'createdDate'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '3',
                      'FACEBOOK',
                      '355715565309247',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...',
                      '2019-02-01T03:09:19.000Z'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '3',
                      'FACEBOOK',
                      '355715565309247',
                      'dW4aDgFo3Ik:APA91bFcT5KyCRWvOoTuHMBV092BYvmMNdspS-QYDSwRpxYAd7_BwrdDn9yrWg-8V8I_ECgoTPmFhO7EnNasjOMN0UuwWIqs8VxVNLxPY1UPdQ1pfnGaLfLU-zK2pqelpPaETfLuQ5VC',
                      '2019-02-01T03:09:19.000Z'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 38,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 43,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 44,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 45,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1243000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 46,
            'name': 'I have the path "account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 47,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 48,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 34000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 49,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 50,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 51,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 52,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 53,
            'name': '"id" should be "{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 54,
            'name': '"type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 55,
            'name': '"enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 56,
            'name': '"externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 57,
            'name': '"notificationToken" should be "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 58,
            'name': '"createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 59,
            'name': '"updatedDate" should be null',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 60,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 61,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-f8804cf1-83e5-4d17-a7b6-424c3742472e","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/3\' -H \'x-correlation-id: e2e-test-f8804cf1-83e5-4d17-a7b6-424c3742472e\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxOTEsImlhdCI6MTYxMzY0NjU5MSwianRpIjoiMjZmOWM2OGYtN2Y3ZS00MzgzLWI2NTUtNDc3Mzc1NDEyNjM2IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiJmMDNiNGJkNy05NjI0LTRlNjEtYTQ1ZS1iM2NmNDRlNzdiYWYiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCBlbWFpbCByZWFkOmRldmljZXMgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwicHJvZmlsZXNfc3RhZmZJZCI6IjAwMDAyIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCJ9.RgpuJe3BoPvx57xF23dZk3Gya7cii_ShoBq0hBca2d-SGfVLtHXPCwl-5qJeoy9zxqOv2IH2Ro48zSLXaRuKa-rqDS3L9ZOYYJVbxT0I4R1XLOtcYE_b2IOvNKwJpDh0CNQVuCvksE-2MldpRVhq9aqFdcZlO_Aq-dMAnphAQvul-oennRvAeFmwsFo2nmrashRy9tpCqa3hZ8SXdtz6W9GrhVuFUie3LuVOXia3TvuqVa-dlV58m9YY3VoyaxC-zqNpdb9-7CjFIyre29hNZCbJcnlHy0Kw3sX-KzBWQrGq7CwVpDIcxIQy-pEp4qkWDKXppPTAM2Eg1DjoyGolEg\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices/{deviceid};sale-role-requests-to-retrieve list-a-device-associated-to-an-account-by-device-id (type-:facebook)',
        'keyword': 'Scenario',
        'line': 64,
        'name': 'Sale role requests to retrieve list a device associated to an account by device Id (type :FACEBOOK)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 63
          },
          {
            'name': '@openapi',
            'line': 63
          },
          {
            'name': '@role-sale',
            'line': 63
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'deviceId',
                      'type',
                      'externalId',
                      'notificationToken',
                      'createdDate',
                      'updatedDate'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '3',
                      'FACEBOOK',
                      '355715565309247',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...',
                      '2019-02-01T03:09:19.000Z',
                      'null'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '3',
                      'FACEBOOK',
                      '355715565309247',
                      'dW4aDgFo3Ik:APA91bFcT5KyCRWvOoTuHMBV092BYvmMNdspS-QYDSwRpxYAd7_BwrdDn9yrWg-8V8I_ECgoTPmFhO7EnNasjOMN0UuwWIqs8VxVNLxPY1UPdQ1pfnGaLfLU-zK2pqelpPaETfLuQ5VC',
                      '2019-02-01T03:09:19.000Z',
                      'null'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 65,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 70,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 71,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 72,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1162000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 73,
            'name': 'I have the path "account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 74,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 75,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 836000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 76,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 77,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 78,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 79,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 80,
            'name': '"id" should be "{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 81,
            'name': '"type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 82,
            'name': '"enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 83,
            'name': '"externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 84,
            'name': '"notificationToken" should be "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 85,
            'name': '"createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 86,
            'name': '"updatedDate" should be null',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 87,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 88,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-3ecd906a-c26a-42d5-b732-b2eea33b0f3f","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/3\' -H \'x-correlation-id: e2e-test-3ecd906a-c26a-42d5-b732-b2eea33b0f3f\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxOTIsImlhdCI6MTYxMzY0NjU5MiwianRpIjoiYjAzODQwMjAtODI0Yi00MDZjLTk4MGMtYWZhOTdiMGUwMGIwIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zYWxlIiwic2Vzc2lvbl9zdGF0ZSI6IjM3NTQxY2ZlLTBiMTUtNDQ1Yy04MzRmLWQyMTFlNmQ0NzM5NiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiU2FsZSIsIlZlcmlmaWVkIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJyZWFkOmFjY291bnQgZW1haWwgcmVhZDpkZXZpY2VzIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJwcm9maWxlc19hZHZpc29ySWQiOiI2MTUzOTk5IiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIn0.APljVexvj7OwSTrNtUQLbr6C5-ZyfE2O-cYsJTv-AOBNpM42PZPmAu7H6g8v2AVKBuVqFIxi9LQAxAwDJEXBCyLJbUviLx72XtP4uisLQc98NeMgbx_h3u041Wy3Q50DyZXNJTzsamw9q47rLHoghWM8d75EpG4lX0u-uIOVnlc3HPucD-mj9KceHNn1PDDy0Q4y83ESc-xN65PLM7_4kC5uLADVmy6IcZYtSdYlsDIej2Wu_GSSHJ1Gpb8ZBffUN_wEi38q7tSEfv9jTulXx4wv-Vam49GO9aTFklLVcotMW6IJaYU7EnhAygt7pLuHu2ny-VO5UbWFcLsz66iz_w\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices/{deviceid};prospect-role-requests-to-retrieve list-a-device-associated-to-an-account-by-device-id (type-:facebook)',
        'keyword': 'Scenario',
        'line': 91,
        'name': 'Prospect role requests to retrieve list a device associated to an account by device Id (type :FACEBOOK)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 90
          },
          {
            'name': '@openapi',
            'line': 90
          },
          {
            'name': '@role-prospect',
            'line': 90
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'deviceId',
                      'type',
                      'externalId',
                      'notificationToken',
                      'createdDate',
                      'updatedDate'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '3',
                      'FACEBOOK',
                      '355715565309247',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...',
                      '2019-02-01T03:09:19.000Z',
                      'null'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '3',
                      'FACEBOOK',
                      '355715565309247',
                      'dW4aDgFo3Ik:APA91bFcT5KyCRWvOoTuHMBV092BYvmMNdspS-QYDSwRpxYAd7_BwrdDn9yrWg-8V8I_ECgoTPmFhO7EnNasjOMN0UuwWIqs8VxVNLxPY1UPdQ1pfnGaLfLU-zK2pqelpPaETfLuQ5VC',
                      '2019-02-01T03:09:19.000Z',
                      'null'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 92,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 97,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 98,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 99,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1668000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 100,
            'name': 'I have the path "account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 101,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 102,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 128000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 103,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 104,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 105,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 106,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 107,
            'name': '"id" should be "{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 108,
            'name': '"type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 109,
            'name': '"enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 110,
            'name': '"externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 111,
            'name': '"notificationToken" should be "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 112,
            'name': '"createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 113,
            'name': '"updatedDate" should be null',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 114,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 115,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-aeab2d87-2bd6-4ca9-8728-99a1b3dccbb2","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/3\' -H \'x-correlation-id: e2e-test-aeab2d87-2bd6-4ca9-8728-99a1b3dccbb2\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxOTUsImlhdCI6MTYxMzY0NjU5NSwianRpIjoiYmVjMGFjZTEtOGQ5Yy00OTVmLTg5YTQtNjhkM2I5OThiYjVmIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1wcm9zcGVjdCIsInNlc3Npb25fc3RhdGUiOiJkNzMyNzZiOS1jNTdmLTQ2NTQtOTM2OC00MzI2YTcxYzMxNjQiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiUHJvc3BlY3QiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCBlbWFpbCByZWFkOmRldmljZXMgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCJ9.Ev7mv0J1cOWwTY53U9SAeTKIrdNcsiaznbOWsjl_4RprQUS6oCcb7hjQWY3mwBCRCnzwE1SJwSWDEhyBL-W3_sQCTfNuvKrQ_l7IPGxryshMoGCYA0MpXTE2dHtdDK5yJhrUFyMFGqezSmXNQAEynnpEI9-X9Tf04NsYbkZ2e4UYt9HZmmz-c2xAkT6bCsRRjl4EHP0oTC8mymKID1gBthOX7nh2CMBPpDaDnbohkTB4K7Up77J3EMchaW7K6bqzYZca-tDVU1L0p6WNDrA7WcrD49Ub8N4LDtsqk6NBqGJfPXIJyyN0pTfMxuFmfEg9hS8Io0d5HNgnqRth8jgpHA\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices/{deviceid};security---token-expiration',
        'keyword': 'Scenario',
        'line': 118,
        'name': 'Security - Token Expiration',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 117
          },
          {
            'name': '@pvt',
            'line': 117
          },
          {
            'name': '@openapi',
            'line': 117
          },
          {
            'name': '@role-customer',
            'line': 117
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 119,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 120,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 121,
            'name': 'I have an expired access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 122,
            'name': 'I have the path "account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 123,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 124,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 26000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 125,
            'name': 'I should see a http code 401',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 126,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 127,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 128,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 129,
            'name': '"id" should be "334411"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 130,
            'name': '"code" should be 411',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 131,
            'name': '"message" should be "Token is expired"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 132,
            'name': '"href" should be "https://developer.fwd.co.th/errors/411"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 133,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 134,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-396b5397-5960-4b62-9a53-e54486e8b9e1","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/undefined\' -H \'x-correlation-id: e2e-test-396b5397-5960-4b62-9a53-e54486e8b9e1\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJqdGkiOiJkOWJlNjU1Ny1hZGJhLTQ1MzAtODM3MC01MGU1OWY3ZDI4ZWUiLCJleHAiOjE1Nzg0NTA5NTUsIm5iZiI6MCwiaWF0IjoxNTc4NDQ5MTU1LCJpc3MiOiJodHRwczovL2lhbS1zYW5kYm94LnNjYmxpZmUuY28udGgvYXV0aC9yZWFsbXMvc2NibGlmZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjYWM1YWJjMC0wMzc0LTQ5NDQtYTM1Ny1lNmY1Mzk0YjI4N2UiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJBUElfRkFDVE9SWS1DdXN0b21lciIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImU3OTZlODMzLWFiNTItNDA5My1iYzRmLWVhZmIxZWUyMTYzNSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ3VzdG9tZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJyZWFkOnVzZXJzOmNvbnNlbnRzIHJlYWQ6cXVvdGVzIHdyaXRlOmFkdmlzb3JzIHdyaXRlOmFjY291bnQgcmVhZDpjb25zZW50cyByZWFkOnBheW1lbnRzIHJlYWQ6cG9saWNpZXM6Y29uc2VudHMgYWRtaW46d3JpdGU6YWNjb3VudCByZWFkOmRvY3VtZW50cyB3cml0ZTpxdW90ZXMgd3JpdGU6dXNlcnM6Y29uc2VudHMgd3JpdGU6Y2xhaW1zIHdyaXRlOnVzZXJzIHdyaXRlOnBvbGljaWVzOmNvbnNlbnRzIHJlYWQ6YWNjb3VudCB3cml0ZTpwYXltZW50cyBlbWFpbCByZWFkOnJpZGVycyB3cml0ZTphY2NvdW50OmNvbnNlbnRzIHdyaXRlOmRvY3VtZW50cyB3cml0ZTpjb25zZW50cyByZWFkOnVzZXJzIHJlYWQ6aW5mb3MgcmVhZDpwb2xpY2llcyByZWFkOmxlYWRzIHdyaXRlOnBvbGljaWVzIHByb2ZpbGUgdXNlcklkIHJlYWQ6YWR2aXNvcnMgd3JpdGU6bGVhZHMgd3JpdGU6Y2FzZXMgcmVhZDphY2NvdW50OmNvbnNlbnRzIHJlYWQ6Y2xhaW1zIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRhd2VlcG9ybiBEb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIyMDAwMDA0Nzg2ODciLCJnaXZlbl9uYW1lIjoiVGF3ZWVwb3JuIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJlbWFpbCI6InRhd2Vwb3JuLmRvZTFAZXhhbXBsZS5jb20iLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDA0Nzg2ODcifQ.eqVvdweI_v0tvo6-SvVkl6xGgyHLzixN-9FtIMdON04M8e4n8NMX1OeScw5eYNdVZLVJAekPjuc8a1ZRua1GQzr9Pp4hMYOCm2Nqy439v7ZELVxlwz0GDWgIT6MEQwRE1wsKFGk8kY_2aJ_f1RpvGv_FpAxINz7kE5M4qUqrVfkvfBQ2284tbXwHmf_bGtgfSqzIIR6jYFmSLZ-v2Z6QwTckTF0v18aVl_cCRgBH0FA__nU5Girsl-m9hzOEHK6ttHvhPhAH-_3riPLuZcyxarQNW94CrJNlHf0y27u5tdSKJJS7tpNMSlfJLWnRcS6kf0ToTrFVMcajI2ZlVfK86g\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices/{deviceid};security---token-signature-invalid',
        'keyword': 'Scenario',
        'line': 137,
        'name': 'Security - Token Signature invalid',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 136
          },
          {
            'name': '@pvt',
            'line': 136
          },
          {
            'name': '@openapi',
            'line': 136
          },
          {
            'name': '@role-customer',
            'line': 136
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 138,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 139,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 140,
            'name': 'I have an invalid access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 141,
            'name': 'I have the path "/account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 142,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 143,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 33000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 144,
            'name': 'I should see a http code 401',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 145,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 146,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 147,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 148,
            'name': '"id" should be "334412"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 149,
            'name': '"code" should be 412',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 150,
            'name': '"message" should be "Invalid signature"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 151,
            'name': '"href" should be "https://developer.fwd.co.th/errors/412"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 152,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 153,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-880c7906-63d2-4f4c-9eb6-cae1f0742299","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/undefined\' -H \'x-correlation-id: e2e-test-880c7906-63d2-4f4c-9eb6-cae1f0742299\' -H \'authorization: Bearer invalid-access-token\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices/{deviceid};security---token-unauthorized-scopes',
        'keyword': 'Scenario',
        'line': 156,
        'name': 'Security - Token unauthorized scopes',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 155
          },
          {
            'name': '@pvt',
            'line': 155
          },
          {
            'name': '@openapi',
            'line': 155
          },
          {
            'name': '@role-customer',
            'line': 155
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 157,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 158,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1684000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 159,
            'name': 'I have the path "/account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 160,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 161,
            'name': 'the query parameter contains "type" as "test"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 162,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 62000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 163,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 164,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 165,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 166,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 167,
            'name': '"id" should be "334430"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 168,
            'name': '"code" should be 430',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 169,
            'name': '"message" should be "You are not allowed to consume the resource"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 170,
            'name': '"href" should be "https://developer.fwd.co.th/errors/430"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 171,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 172,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-51d23ff5-539f-496e-8c21-72e4e5dd3903","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/undefined?type=test\' -H \'x-correlation-id: e2e-test-51d23ff5-539f-496e-8c21-72e4e5dd3903\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxOTcsImlhdCI6MTYxMzY0NjU5NywianRpIjoiZTk2MWE5ZmUtYzJjYS00OGVlLWFlYjItZGU1OGI0ZGFlMWRhIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiIwOTdmNTQwMi1hMTAwLTQxOTEtYjhjZi01YjYyZjFiODVjMWMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgZW1haWwgcGhvbmUgcHJvZmlsZSB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.MpVXjz6qPWImr7U3wZidA4T6mRAc55Z_WchKOdP2DSSzpjLV3WOEKDAW7flRdZ6SFw_sy8yEtxc_Q7DmxJ36eSjibjTZ3i_Q6sx2xmrDIJg6_uZC2xcga5fcFqDuqfs5NT4AdVfPyvFKfNF_oKTNj7VlPAzQZuZt3aCIN1angy33afbdzn_w3Yj6NWXGvXGPWa-smcpfcyHJuz6BmFUwU2-p1VUt9vmWQNq2CRKjC1gPpc2bStTTp4zABvgHGNQJlEdzZzd0Q8NAxM7awshXhv_gN7tBwXRBRY0JzM8Rd5oyo3pNR5YrLZi5OnoTqXDnqvBQWBrFM3dqWy4sG4RV4w\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices/{deviceid};security---customer-should-not-be-able-to-access-devices-which-is-not-his-own-device',
        'keyword': 'Scenario',
        'line': 175,
        'name': 'Security - Customer should not be able to access devices which is not his own device',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 174
          },
          {
            'name': '@pvt',
            'line': 174
          },
          {
            'name': '@openapi',
            'line': 174
          },
          {
            'name': '@role-customer',
            'line': 174
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 176,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 177,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 178,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 943000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 179,
            'name': 'I have the path "/account/devices/1"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 180,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 181,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 32000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 182,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 183,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 184,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 185,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 186,
            'name': '"id" should be "334432"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 187,
            'name': '"code" should be 432',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 188,
            'name': '"message" should be "You are not allowed to access the information"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 189,
            'name': '"href" should be "https://developer.fwd.co.th/errors/432"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 190,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 191,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-ac465c09-1a02-42e4-983d-6f0213548a08","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/1\' -H \'x-correlation-id: e2e-test-ac465c09-1a02-42e4-983d-6f0213548a08\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxOTgsImlhdCI6MTYxMzY0NjU5OCwianRpIjoiOTVlMWViMTEtZTYxNS00ZmNiLWE3YmYtYjAzZDgwNDI5YjEwIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI2YzVjNzM2OC04YmY5LTRjZWUtYjg0Ni0yOWRjYTM5OGMwYzUiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IGVtYWlsIHBob25lIHJlYWQ6ZGV2aWNlcyBwcm9maWxlIHVzZXJJZCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYWRkcmVzcyI6e30sImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDI5NTQ5ODIifQ.OJ0JRPx6tpvbl6W8v0D5k702rmM-aUxK7z5FCrj4aiR-sSrs-njY8xwvo6TKwwUFXlVsGt0kEjmgTUmXNctLhTlQSrBYBA9mfD7M3nZ0u2TJkeQTseDxOeUfx4Sr6GzmPzUtklwPNPqbH-FAVozcg6MfMpgujaaeyCdP5-hDVKdCGKvU5IW0y6kaugGvl1tlP5C79RASkirOsUqW_dFffJKoiAvc_zI0C6ZD-KC1YROeFrmzoqabZZR-RInuTmgsoTCebZyaY20KPr4-9_gb6oWksEwC5zAK-z8ZRX9SZuCEH7u1J0bKT_AzKRPNr5GhML55JD9AlV8qn0_dSec_5w\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/account/devices/{deviceid};input-not-found-(device-id)',
        'keyword': 'Scenario',
        'line': 194,
        'name': 'Input Not Found (Device Id)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 193
          },
          {
            'name': '@pvt',
            'line': 193
          },
          {
            'name': '@openapi',
            'line': 193
          },
          {
            'name': '@role-staff',
            'line': 193
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 195,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 196,
            'name': 'I need the scopes "read:account read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 197,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1259000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 198,
            'name': 'I have the path "/account/devices/9999999999"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 199,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 200,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 33000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 201,
            'name': 'I should see a http code 404',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 202,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 203,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 204,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 205,
            'name': '"id" should be "334444"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 206,
            'name': '"code" should be 444',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 207,
            'name': '"message" should be "Device Id not found"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 208,
            'name': '"href" should be "https://developer.fwd.co.th/errors/444"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 209,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 210,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-e3042d25-d031-42fa-bf51-97c310402fc9","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/9999999999\' -H \'x-correlation-id: e2e-test-e3042d25-d031-42fa-bf51-97c310402fc9\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcxOTksImlhdCI6MTYxMzY0NjU5OSwianRpIjoiZDUxZWEzMWQtMDM1OS00OWE1LWE0ZWYtMGM1NjMxYTk0MGIzIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiIzYTE2ZDY2OC0wNTZlLTRiNzYtYjU1MS02ZWYxOWM5ZmUzOTYiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCBlbWFpbCByZWFkOmRldmljZXMgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwicHJvZmlsZXNfc3RhZmZJZCI6IjAwMDAyIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCJ9.hInssZWFeUEYAYSXuqDtOZkjPDGnB6ZzdnB-w9Dkw0765tuUPxygEGo4rtjM9Rd7mW7UuG8mSC1J19xdkzixERcN8XCsWtGQ8_rrFhlSlYuaxqp1JiJ41jWh7AGTCAmDlwVXbqx8ru5S2R1sTvVgrn7dCYVxGpdamyxTWwQKvaMQkVh0IEeHzJVIixra1qmcnicmhaRDR27bT6DO7a0rQ8SrupjQnVvLoXxJpW7WHsp_djRibhHUifVaQVLG2J6odQb8LxsCc5VLs39aXQCfcIgRE_Eq8KlAkcoe3KMHPeSbfkVWtSp0XmEmFBqoppOFvmv7C0jNbpQRAyZVRGh8ow\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'description': '  API consumer\n  get list a device associated to a customer\n  I can get the device detail',
    'keyword': 'Feature',
    'name': 'GET /users/{userId}/devices',
    'line': 2,
    'id': 'get-/users/{userid}/devices',
    'tags': [
      {
        'name': '@userstories-16',
        'line': 1
      }
    ],
    'uri': 'features/get_users{userid}devices.feature',
    'elements': [
      {
        'id': 'get-/users/{userid}/devices;customer-role-requests-to-retrieve-all-user-devices',
        'keyword': 'Scenario',
        'line': 9,
        'name': 'Customer role requests to retrieve all user devices',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 8
          },
          {
            'name': '@openapi',
            'line': 8
          },
          {
            'name': '@role-customer',
            'line': 8
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'userId',
                      '0.type',
                      '0.externalId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '200002954982',
                      'LINE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '200002954982',
                      'LINE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 10,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 15,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 16,
            'name': 'I need the scopes "read:users read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 17,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 858000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 18,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 19,
            'name': 'I have the path "/users/{userId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 20,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 1861000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 21,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 22,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 23,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 24,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 25,
            'name': '"0.id" should match "[0-9]"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 26,
            'name': '"0.type" should match "(PHONE|LINE|FACEBOOK|TABLET)"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 27,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 28,
            'name': '"0.externalId" should be "{0.externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 29,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 30,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 31,
            'name': '"0.updatedDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 32,
            'name': 'the response time is under 10000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 33,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-2ec115cc-7b16-4e9e-a742-c9bc3934052c","curl":"curl \'https://openapi.uat.fwd.co.th/users/200002954982/devices\' -H \'x-correlation-id: e2e-test-2ec115cc-7b16-4e9e-a742-c9bc3934052c\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMDAsImlhdCI6MTYxMzY0NjYwMCwianRpIjoiY2FiYzhlYjYtM2M0My00ZGI2LTgzMjItNmZmYmFiM2Q4NzViIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiJiODE2MjU3ZS05NGY1LTRlNTQtYmU0ZS1jZDk5ZjBhN2MwY2QiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgZW1haWwgcGhvbmUgcmVhZDpkZXZpY2VzIHByb2ZpbGUgcmVhZDp1c2VycyB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.T7bwzik-BtDVMNOLhjkpAQmTUAFjHkR9MuXcOf9lL1gcppavwes7QedVAwIFNUh69e8FuqrnPqrjNkWMqk52NnpIi-_Ba-yQz04-Ik81_fvd3lmdVMEF9FgSM_9y5AdepEYDwb7NTle3glo6q3dsSCwoitkniGC7HaDmfSVeFC8LKLZTqQwYojldyUUfaz5z6DXWWGUpSGUfUu26LuOwKS513LDdU1tSFDQxe2JD8tXfXu4joaCq_77grOzerseZSTSq85Na5W2TVhBLhN-gE-nOAForxdNQRyCNNpdQf8MnbWF_mBo8hk_N1CwyiQrEQb4m66YnI5tMCu5MG53pMg\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/users/{userid}/devices;customer-role-requests-to-retrieve-all-user-devices-filtered-by-type-[phone]',
        'keyword': 'Scenario',
        'line': 36,
        'name': 'Customer role requests to retrieve all user devices filtered by type [PHONE]',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 35
          },
          {
            'name': '@openapi',
            'line': 35
          },
          {
            'name': '@role-customer',
            'line': 35
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'userId',
                      '0.type',
                      '0.externalId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '200002954982',
                      'PHONE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '200002954982',
                      'PHONE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 37,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 42,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 43,
            'name': 'I need the scopes "read:users read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 44,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 926000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 45,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 46,
            'name': 'I have the path "/users/{userId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 47,
            'name': 'the query parameter contains "type" as "PHONE"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 48,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 1247000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 49,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 50,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 51,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 52,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 53,
            'name': '"0.id" should match "[0-9]"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 54,
            'name': '"0.type" should be "{0.type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 55,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 56,
            'name': '"0.externalId" should be "{0.externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 57,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 58,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 60,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 61,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-159ae08a-5076-4d7a-b201-1ef51aac89ee","curl":"curl \'https://openapi.uat.fwd.co.th/users/200002954982/devices?type=PHONE\' -H \'x-correlation-id: e2e-test-159ae08a-5076-4d7a-b201-1ef51aac89ee\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMDMsImlhdCI6MTYxMzY0NjYwMywianRpIjoiYjExMjViNTctY2RmMC00YzI1LWFhNWQtMjk0OTNlMDJiODk2IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI4YTg1OTM0Mi1lNmQzLTQwYTgtYWU5Ny1jYjBiYjljZDdmYmUiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgZW1haWwgcGhvbmUgcmVhZDpkZXZpY2VzIHByb2ZpbGUgcmVhZDp1c2VycyB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.UlO6-u1YRxPScdI7xXqnuOaPur_xljXDVHvLqxdjee1zZAiHE_jNtENg1HCpXAAtdSgOg0-Z7ssxnDeKmsaN4kBBoQ5RBJ_f06K00F1BDNB19at_2UQ58Ht9ZhdV5gDpiHVQ8OzEfSP2fjH-yo22-AuJsGsa7BwYHxWmONf5LxG0e_5L9kdGFXU0AZ9122OGbOT8J4Ngw52Z4ZmUeB9c1aW1tp--qFNPeCtmQUHLZbVmcGej-6lwO7MycMkY-EYpBKIFavsQPOAuwTxFFeOT61c_APCVob5hkijkmksbQobzpCUpu7gtkEo0_fEMqxiaxEYJQvYIjmRRqR66dyt1Pw\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/users/{userid}/devices;customer-role-requests-to-retrieve-all-user-devices-filtered-by-type-[facebook]',
        'keyword': 'Scenario',
        'line': 64,
        'name': 'Customer role requests to retrieve all user devices filtered by type [FACEBOOK]',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@skip',
            'line': 63
          },
          {
            'name': '@#noData',
            'line': 63
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:36'
            },
            'result': {
              'status': 'pending',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      '0.id',
                      'userId',
                      '0.type',
                      '0.externalId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '3',
                      '200002954982',
                      'FACEBOOK',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '3',
                      '200002954982',
                      'FACEBOOK',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 65,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 70,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 71,
            'name': 'I need the scopes "read:users read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 72,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 73,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 74,
            'name': 'I have the path "/users/{userId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 75,
            'name': 'the query parameter contains "type" as "FACEBOOK"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 76,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 77,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 78,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 79,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 80,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 81,
            'name': '"0.id" should match "[0-9]"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 82,
            'name': '"0.type" should be "{0.type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 83,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 84,
            'name': '"0.externalId" should be "{0.externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 85,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 86,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 87,
            'name': '"0.updatedDate" should be null',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 88,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 89,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-9726e840-d577-4fbc-b357-c0dca32f640a","skipped":true}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/users/{userid}/devices;customer-role-requests-to-retrieve-all-user-devices-filtered-by-type-[line]',
        'keyword': 'Scenario',
        'line': 92,
        'name': 'Customer role requests to retrieve all user devices filtered by type [LINE]',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@skip',
            'line': 91
          },
          {
            'name': '@#noData',
            'line': 91
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:36'
            },
            'result': {
              'status': 'pending',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      '0.id',
                      'userId',
                      '0.type',
                      '0.externalId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '2',
                      '200002954982',
                      'LINE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2',
                      '200002954982',
                      'LINE',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 93,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 98,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 99,
            'name': 'I need the scopes "read:users read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 100,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 101,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 102,
            'name': 'I have the path "/users/{userId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 103,
            'name': 'the query parameter contains "type" as "LINE"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 104,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 105,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 106,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 107,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 108,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 109,
            'name': '"0.id" should match "[0-9]"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 110,
            'name': '"0.type" should be "{0.type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 111,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 112,
            'name': '"0.externalId" should be "{0.externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 113,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 114,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 115,
            'name': '"0.updatedDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 116,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 117,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-d2314443-81a2-410f-8487-20aa5c4568d7","skipped":true}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/users/{userid}/devices;customer-role-requests-to-retrieve-all-user-devices-filtered-by-type-[tablet]',
        'keyword': 'Scenario',
        'line': 120,
        'name': 'Customer role requests to retrieve all user devices filtered by type [TABLET]',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@skip',
            'line': 119
          },
          {
            'name': '@#noData',
            'line': 119
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:36'
            },
            'result': {
              'status': 'pending',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      '0.id',
                      'userId',
                      '0.type',
                      '0.externalId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '145',
                      '200002954982',
                      'TABLET',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '108',
                      '200002954982',
                      'TABLET',
                      '355715565309247'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 121,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 126,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 127,
            'name': 'I need the scopes "read:users read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 128,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 129,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 130,
            'name': 'I have the path "/users/{userId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 131,
            'name': 'the query parameter contains "type" as "TABLET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 132,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 133,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 134,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 135,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 136,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 137,
            'name': '"0.id" should match "[0-9]"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 138,
            'name': '"0.type" should be "{0.type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 139,
            'name': '"0.enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 140,
            'name': '"0.externalId" should be "{0.externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 141,
            'name': '"0.notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 142,
            'name': '"0.createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 143,
            'name': '"0.updatedDate" should be null',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 144,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 145,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'skipped'
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-652c87e5-00bf-4ada-aad5-344dca6a7b64","skipped":true}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/users/{userid}/devices;token-expiration',
        'keyword': 'Scenario',
        'line': 148,
        'name': 'Token Expiration',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 147
          },
          {
            'name': '@openapi',
            'line': 147
          },
          {
            'name': '@role-customer',
            'line': 147
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'userId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '200002954982'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '200002954982'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 149,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 154,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 155,
            'name': 'I need the scopes "read:users read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 156,
            'name': 'I have an expired access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 157,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 158,
            'name': 'I have the path "/users/{userId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 159,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 189000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 160,
            'name': 'I should see a http code 401',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 161,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 162,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 163,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 164,
            'name': '"id" should be "334411"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 165,
            'name': '"code" should be 411',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 166,
            'name': '"message" should be "Token is expired"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 167,
            'name': '"href" should be "https://developer.fwd.co.th/errors/411"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 168,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 169,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-15263436-00df-4421-bfe6-376f9169c96e","curl":"curl \'https://openapi.uat.fwd.co.th/users/200002954982/devices\' -H \'x-correlation-id: e2e-test-15263436-00df-4421-bfe6-376f9169c96e\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJqdGkiOiJkOWJlNjU1Ny1hZGJhLTQ1MzAtODM3MC01MGU1OWY3ZDI4ZWUiLCJleHAiOjE1Nzg0NTA5NTUsIm5iZiI6MCwiaWF0IjoxNTc4NDQ5MTU1LCJpc3MiOiJodHRwczovL2lhbS1zYW5kYm94LnNjYmxpZmUuY28udGgvYXV0aC9yZWFsbXMvc2NibGlmZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjYWM1YWJjMC0wMzc0LTQ5NDQtYTM1Ny1lNmY1Mzk0YjI4N2UiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJBUElfRkFDVE9SWS1DdXN0b21lciIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImU3OTZlODMzLWFiNTItNDA5My1iYzRmLWVhZmIxZWUyMTYzNSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ3VzdG9tZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJyZWFkOnVzZXJzOmNvbnNlbnRzIHJlYWQ6cXVvdGVzIHdyaXRlOmFkdmlzb3JzIHdyaXRlOmFjY291bnQgcmVhZDpjb25zZW50cyByZWFkOnBheW1lbnRzIHJlYWQ6cG9saWNpZXM6Y29uc2VudHMgYWRtaW46d3JpdGU6YWNjb3VudCByZWFkOmRvY3VtZW50cyB3cml0ZTpxdW90ZXMgd3JpdGU6dXNlcnM6Y29uc2VudHMgd3JpdGU6Y2xhaW1zIHdyaXRlOnVzZXJzIHdyaXRlOnBvbGljaWVzOmNvbnNlbnRzIHJlYWQ6YWNjb3VudCB3cml0ZTpwYXltZW50cyBlbWFpbCByZWFkOnJpZGVycyB3cml0ZTphY2NvdW50OmNvbnNlbnRzIHdyaXRlOmRvY3VtZW50cyB3cml0ZTpjb25zZW50cyByZWFkOnVzZXJzIHJlYWQ6aW5mb3MgcmVhZDpwb2xpY2llcyByZWFkOmxlYWRzIHdyaXRlOnBvbGljaWVzIHByb2ZpbGUgdXNlcklkIHJlYWQ6YWR2aXNvcnMgd3JpdGU6bGVhZHMgd3JpdGU6Y2FzZXMgcmVhZDphY2NvdW50OmNvbnNlbnRzIHJlYWQ6Y2xhaW1zIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRhd2VlcG9ybiBEb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIyMDAwMDA0Nzg2ODciLCJnaXZlbl9uYW1lIjoiVGF3ZWVwb3JuIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJlbWFpbCI6InRhd2Vwb3JuLmRvZTFAZXhhbXBsZS5jb20iLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDA0Nzg2ODcifQ.eqVvdweI_v0tvo6-SvVkl6xGgyHLzixN-9FtIMdON04M8e4n8NMX1OeScw5eYNdVZLVJAekPjuc8a1ZRua1GQzr9Pp4hMYOCm2Nqy439v7ZELVxlwz0GDWgIT6MEQwRE1wsKFGk8kY_2aJ_f1RpvGv_FpAxINz7kE5M4qUqrVfkvfBQ2284tbXwHmf_bGtgfSqzIIR6jYFmSLZ-v2Z6QwTckTF0v18aVl_cCRgBH0FA__nU5Girsl-m9hzOEHK6ttHvhPhAH-_3riPLuZcyxarQNW94CrJNlHf0y27u5tdSKJJS7tpNMSlfJLWnRcS6kf0ToTrFVMcajI2ZlVfK86g\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/users/{userid}/devices;token-signature-invalid',
        'keyword': 'Scenario',
        'line': 172,
        'name': 'Token Signature Invalid',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 171
          },
          {
            'name': '@openapi',
            'line': 171
          },
          {
            'name': '@role-customer',
            'line': 171
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'userId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '200002954982'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '200002954982'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 173,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 178,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 179,
            'name': 'I need the scopes "read:users read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 180,
            'name': 'I have an invalid access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 181,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 182,
            'name': 'I have the path "/users/{userId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 183,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 26000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 184,
            'name': 'I should see a http code 401',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 185,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 186,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 187,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 188,
            'name': '"id" should be "334412"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 189,
            'name': '"code" should be 412',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 190,
            'name': '"message" should be "Invalid signature"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 191,
            'name': '"href" should be "https://developer.fwd.co.th/errors/412"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 192,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 193,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-8ea56e3f-f4e6-45f7-8c63-612c65ad3dc0","curl":"curl \'https://openapi.uat.fwd.co.th/users/200002954982/devices\' -H \'x-correlation-id: e2e-test-8ea56e3f-f4e6-45f7-8c63-612c65ad3dc0\' -H \'authorization: Bearer invalid-access-token\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/users/{userid}/devices;token-unauthorized-scopes',
        'keyword': 'Scenario',
        'line': 196,
        'name': 'Token Unauthorized Scopes',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 195
          },
          {
            'name': '@openapi',
            'line': 195
          },
          {
            'name': '@role-customer',
            'line': 195
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'userId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '200002954982'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '200002954982'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 197,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 202,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 203,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1468000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 204,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 205,
            'name': 'I have the path "/users/{userId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 206,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 41000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 207,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 208,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 209,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 210,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 211,
            'name': '"id" should be "334430"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 212,
            'name': '"code" should be 430',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 213,
            'name': '"message" should be "You are not allowed to consume the resource"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 214,
            'name': '"href" should be "https://developer.fwd.co.th/errors/430"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 215,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 216,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-3c8f9a68-6943-4bc6-9404-e121322db86b","curl":"curl \'https://openapi.uat.fwd.co.th/users/200002954982/devices\' -H \'x-correlation-id: e2e-test-3c8f9a68-6943-4bc6-9404-e121322db86b\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMDYsImlhdCI6MTYxMzY0NjYwNiwianRpIjoiMWM2ODU4MzAtMWQyNy00YjRiLTllNzQtNTUzMGVmMzY2MzY4IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiIwNGYxY2UzZi1jZmJhLTQzODMtODhkYi01YzhmNWJiZTM2MTIiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgZW1haWwgcGhvbmUgcHJvZmlsZSB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.fJQtfxdLW3TEgY415xCGfeBH46FkDOVpQ8r3NlO4YrCCYNPb7zc_jvfYKRV6ja3PcfDG6SQ7ocUEaEiGFYDuuJndMVLFEOloHA-Gh5oFgkKtijhMiFrSjkQykZEuFh-Ec0Yith1B6BntVE1luKRlbGZluN9RKyevVpF1pGTiYgS7GEuX4_RlZDW2POjDmv6KteQRoIus40xsp_0ePA-O88RZJgtu9YVNiwGmDDpk5G4AIgZvFIjafvaUUkG2fIDGOJXTacI7IHmQul5LwmqMpnld2zZQLsVGCqZQ0xHui1aLrD_A6Q7p6KODp8KrNDAcoZa9N9M94r-6sHwHbl4onQ\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/users/{userid}/devices;token-unauthorized-roles-(prospect)',
        'keyword': 'Scenario',
        'line': 219,
        'name': 'Token Unauthorized Roles (Prospect)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 218
          },
          {
            'name': '@openapi',
            'line': 218
          },
          {
            'name': '@role-prospect',
            'line': 218
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'userId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '200002954982'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '200002954982'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 220,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 225,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 226,
            'name': 'I need the scopes "read:users read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 227,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1054000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 228,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 229,
            'name': 'I have the path "/users/{userId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 230,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 37000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 231,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 232,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 233,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 234,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 235,
            'name': '"id" should be "334431"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 236,
            'name': '"code" should be 431',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 237,
            'name': '"message" should be "You are not allowed to access to the service"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 238,
            'name': '"href" should be "https://developer.fwd.co.th/errors/431"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 239,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 240,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-e5f36819-f5af-4f3e-bff4-36b85216c666","curl":"curl \'https://openapi.uat.fwd.co.th/users/200002954982/devices\' -H \'x-correlation-id: e2e-test-e5f36819-f5af-4f3e-bff4-36b85216c666\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMDcsImlhdCI6MTYxMzY0NjYwNywianRpIjoiYjllZTlkYjAtOTQzZi00YjQyLTg3YWEtMzE5MGJlZGRmY2RhIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1wcm9zcGVjdCIsInNlc3Npb25fc3RhdGUiOiI1ZDczZWE1Yi1iMTk4LTQ5MDktOTEwNC0zNjAyYTg1M2UzYzEiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiUHJvc3BlY3QiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHJlYWQ6ZGV2aWNlcyBwcm9maWxlIHJlYWQ6dXNlcnMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgifQ.IaG9cRodsstaxnNT1xQYM59kS7VoKj9vR3fJVLziViGKj1D_8nYb0H6FON4CxaEZhOGV_mOpjljXbFsznCUeaAA053s0UXd-b3m70YrqIVUQf8UNbuTrFOxJPexWhj43C9VWPso0_uqBESZNOgHphAe9lRHRtK-eTgcHoQ4tEeInKrZyO8xuVEP0u-zUaWCaYiNys8enIrKk0jEmt1jTtbudtnfq8aJ6WXEkPs1_eKygzisaS4m4h3d75RjFG7VlUZ0IQ-9h3lAJlO0Y6XLHCzipW9DIEdEM4Od8G2VFGBY9HSygum4hzRAq2rtyz8bvCS90Xj8XT2y1O0A0jxiJrQ\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/users/{userid}/devices;customer-role-should-not-be-able-to-access-another-user-id',
        'keyword': 'Scenario',
        'line': 243,
        'name': 'Customer role should not be able to access another user id',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 242
          },
          {
            'name': '@openapi',
            'line': 242
          },
          {
            'name': '@role-customer',
            'line': 242
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'userId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '200002714792'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '200002714792'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 244,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 249,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 250,
            'name': 'I need the scopes "read:users read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 251,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1160000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 252,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 253,
            'name': 'I have the path "/users/{userId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 254,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 39000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 255,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 256,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 257,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 258,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 259,
            'name': '"id" should be "334432"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 260,
            'name': '"code" should be 432',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 261,
            'name': '"message" should be "You are not allowed to access the information"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 262,
            'name': '"href" should be "https://developer.fwd.co.th/errors/432"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 263,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 264,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-9d20ead4-45ac-4064-83ff-ddc7d2e3a12b","curl":"curl \'https://openapi.uat.fwd.co.th/users/200002714792/devices\' -H \'x-correlation-id: e2e-test-9d20ead4-45ac-4064-83ff-ddc7d2e3a12b\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMDgsImlhdCI6MTYxMzY0NjYwOCwianRpIjoiOWJhZTM5MTMtOWIwZC00MmRhLWE2YzgtMDZiZWJhZGQwZTk2IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI0ODc5ZWFlZi0yNjM2LTQ2NmEtYjJkZS0yNjlhNWFmNDA5MWYiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgZW1haWwgcGhvbmUgcmVhZDpkZXZpY2VzIHByb2ZpbGUgcmVhZDp1c2VycyB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.dIgkb7jFixsKAJLfDvPOJYWjPFOqyxtq2QaSwqH5LiAz1tM7nJ3JS-Bjr9NTHSTmCe5F73sr5jpa9dGbej-Cd_c5tAXYEsDvepKn7gj6CVFMFr7K2mk4QglJR_MBfY59LxZ6iKkYdBUmEIjAwD6JAEbLraic6KS70AqGbxERen6mf7__7UPvk__EVg5S6t9vEG-WFubBzsbL1tX53sAeIHEGxz7Zn9ZLlK2sRJif6xa941ALdzCuSuKoo_WHEvsODG8EeUX9Py3FQ9FLBI-dSLjxm1cl4chuY6a4SvEcFO4-Lix2pmdmRqc7eWkmUCezPjggKEE-jO7KVrYYKKb5tw\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/users/{userid}/devices;user-id-is-not-found-by-customer',
        'keyword': 'Scenario',
        'line': 267,
        'name': 'User id is not found by customer',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 266
          },
          {
            'name': '@openapi',
            'line': 266
          },
          {
            'name': '@role-customer',
            'line': 266
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'userId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '999999999999'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '999999999999'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 268,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 273,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 274,
            'name': 'I need the scopes "read:users read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 275,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 952000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 276,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 277,
            'name': 'I have the path "/users/{userId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 278,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 34000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 279,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 280,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 281,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 282,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 283,
            'name': '"id" should be "334432"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 284,
            'name': '"code" should be 432',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 285,
            'name': '"message" should be "You are not allowed to access the information"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 286,
            'name': '"href" should be "https://developer.fwd.co.th/errors/432"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 287,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 288,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-4b4c19dc-b2da-4aa0-b486-6a1f1ede2fb6","curl":"curl \'https://openapi.uat.fwd.co.th/users/999999999999/devices\' -H \'x-correlation-id: e2e-test-4b4c19dc-b2da-4aa0-b486-6a1f1ede2fb6\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMDksImlhdCI6MTYxMzY0NjYwOSwianRpIjoiN2YzNGY5N2EtYTdhMi00MGE5LWFmMjMtNmMxODAxZDg4YTNhIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiIwNDkwNmQ0Zi1kOTg0LTQ5NDUtOTg3Mi0zMTQzYzQ2NThmNDIiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgZW1haWwgcGhvbmUgcmVhZDpkZXZpY2VzIHByb2ZpbGUgcmVhZDp1c2VycyB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.b3a_qm6C68deEftvwwBCwt_NDWlY0xHgkX7CHzBL3DBzYpraZ4Od2XrhN0504uwcxXqMliEIWUt7a9kH4Mwz-MezQlfai4lPWqFzrcAy6onPa7mT1HcGnIvmdT2qCuTlhNtkUcxjTqIh88SY0REheQdzGyZwXVcFuSA8yoUs7CgyM7i86xVN94IfJbVcUDFu79V1o-LlgeTAY6M-fbtGV9KTgQOBgsO_pWWB_ee55LmQClkRxMqBnPB7c0-R3UdU6wwfti0-QlY46hNREvGdrJmS5j5hnRV3h4G1ursGDC2lBO1t3HYM9z1UHncGLewWwxwsZ6OP2SAhEZOVlvAO9w\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'get-/users/{userid}/devices;type-is-not-phone,-line,-facebook,-or-tablet',
        'keyword': 'Scenario',
        'line': 291,
        'name': 'Type is not phone, line, facebook, or tablet',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 290
          },
          {
            'name': '@openapi',
            'line': 290
          },
          {
            'name': '@role-customer',
            'line': 290
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'userId'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '200002954982'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '200002954982'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 292,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 297,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 298,
            'name': 'I need the scopes "read:users read:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 299,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1157000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 300,
            'name': 'I have the method "GET"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 301,
            'name': 'I have the path "/users/{userId}/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 302,
            'name': 'the query parameter contains "type" as "IG"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 303,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 667000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 304,
            'name': 'I should see a http code 406',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 305,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 306,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 307,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 308,
            'name': '"id" should be "334463"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 309,
            'name': '"code" should be 463',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 310,
            'name': '"message" should be "The field type doesn\'t match the values: PHONE, TABLET, FACEBOOK, LINE"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 311,
            'name': '"href" should be "https://developer.fwd.co.th/errors/463"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 312,
            'name': 'the response time is under 5000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 313,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-8ffe9f12-b165-496f-964b-5c7f526abce7","curl":"curl \'https://openapi.uat.fwd.co.th/users/200002954982/devices?type=IG\' -H \'x-correlation-id: e2e-test-8ffe9f12-b165-496f-964b-5c7f526abce7\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMTAsImlhdCI6MTYxMzY0NjYxMCwianRpIjoiNmMwOGQ2YTktZmZhNS00YWE1LWEzNTQtY2FmZjMxOTJlNmZiIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiIyMDJkZmNlNy1mZTU3LTQ4MTYtOWNjZi1iYTRiNjhkMzFhMjkiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgZW1haWwgcGhvbmUgcmVhZDpkZXZpY2VzIHByb2ZpbGUgcmVhZDp1c2VycyB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.hxNHIqsq7Wr3IrSTtzAYSO5emCAEdEm12toWLSzHnOedmwy7c0DoHkD_c_-HAIKBKP2ZJRswAZYmVs6hhxM80q8uDgZP7vj7ccUiLQEXRtQ6yC_xxNX2efpB6tfK3ciHzBizNZFAiEMG_Mq45zkg9JxhoZvvmdzuQs_h5Mdx3aMRxQO5uxID86Wng8TrMfrRxNXczgO0neP5-fty8LaZpSyzWbQggKmkjlO4dSfaLp1ynwzz2rQ6yclszy2k5nXw1sdGvKHOnsGR_zNrgJ1KLhf-b1a_xBgoZGaLtEouPyra-AwIipgSGqlLmpaH8z5SQ4K4lBoC3W38vvXfyiZTmQ\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'description': '  API consumer\n  update a device associated to an account\n  I can keep the user devices up to date',
    'keyword': 'Feature',
    'name': 'PATCH /account/devices/{deviceId}',
    'line': 2,
    'id': 'patch-/account/devices/{deviceid}',
    'tags': [
      {
        'name': '@userstories-16',
        'line': 1
      }
    ],
    'uri': 'features/patch_accountdevices{deviceid}.feature',
    'elements': [
      {
        'id': 'patch-/account/devices/{deviceid};customer-updates-device-info-associated-to-his-account-(type)',
        'keyword': 'Scenario',
        'line': 9,
        'name': 'Customer updates device info associated to his account (Type)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 8
          },
          {
            'name': '@openapi',
            'line': 8
          },
          {
            'name': '@role-customer',
            'line': 8
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'deviceId',
                      'type',
                      'externalId',
                      'notificationToken',
                      'createdDate',
                      'updatedDate'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '2',
                      'LINE',
                      '355715565309247',
                      'ffWm6nixeeg:APA91bEO9b1vTadJExDi706jF8NZ8CPrT7g-xfR2p8rw866vbyiMc427-Yqz8cnQJ8urHfcplHqNN2ZmoE3eHGdgrV1DuyQdj8vwIEJuN6VnLxqS10_jrBrpH2SdHiQRfZB9wx8ZjTFh',
                      '2019-02-01T03:09:19.000Z',
                      '2019-02-01T03:09:19.000Z'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2',
                      'LINE',
                      '355715565309247',
                      'dW4aDgFo3Ik:APA91bFcT5KyCRWvOoTuHMBV092BYvmMNdspS-QYDSwRpxYAd7_BwrdDn9yrWg-8V8I_ECgoTPmFhO7EnNasjOMN0UuwWIqs8VxVNLxPY1UPdQ1pfnGaLfLU-zK2pqelpPaETfLuQ5VC',
                      '2019-02-01T03:09:19.000Z',
                      '2019-02-01T03:09:19.000Z'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 10,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 15,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 16,
            'name': 'I need the scopes "read:account read:devices write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 17,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 737000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 18,
            'name': 'I have the path "account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 19,
            'name': 'I have the method "PATCH"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 20,
            'name': 'the payload contains "type" from notebook as "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 21,
            'name': 'the payload contains "enabled" as true',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 22,
            'name': 'the payload contains "id" from notebook as "{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 23,
            'name': 'the payload contains "createdDate" from notebook as "{createdDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 24,
            'name': 'the payload contains "updatedDate" from notebook as "{updatedDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 25,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 136000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 26,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 27,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 28,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 29,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 30,
            'name': '"id" should be "{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 31,
            'name': '"type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 32,
            'name': '"enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 33,
            'name': '"externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 34,
            'name': '"notificationToken" should be "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 35,
            'name': '"createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 36,
            'name': '"updatedDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 37,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 38,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-fd510fc2-c68a-4838-97e3-e454e00e671b","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/2\' -X PATCH -H \'x-correlation-id: e2e-test-fd510fc2-c68a-4838-97e3-e454e00e671b\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMTIsImlhdCI6MTYxMzY0NjYxMiwianRpIjoiOTgxZjYxZDktN2Y0Ny00Mjk4LTlhOTYtOTZiN2RhMzE2MzBjIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiJmNWExYjBiMi1hNjc0LTQ4ZDItYWEyMC0yMTc5ZWVhNjcwYjUiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IHdyaXRlOmRldmljZXMgZW1haWwgcGhvbmUgcmVhZDpkZXZpY2VzIHByb2ZpbGUgdXNlcklkIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJhZGRyZXNzIjp7fSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsInByb2ZpbGVzX3VzZXJJZCI6IjIwMDAwMjk1NDk4MiJ9.K85Y_uffpMnw3Ch93Te4imeNJ0X6zBApUZ7TrPyWtfjuvb57hrJ7dKHZbCMfJcTwD_SbHYXp3kTERyiVk5Aecksy1nGmaxh8BUij5s8V-PtC7TS3w0z5FBNMkwGUATbe_nQ-WS4vt0jRlGGcdJQraPTGO0KAoeOT0Lzw8O2vA13mSlTtecFbJPI1t4B01WeYivxyrTiGbODXPCa76xuR2Ht1BsQ5aKO_qnVAQqcl_T7peLmo-s74GBN6V4u-4hmPvC6Jtone9GY7pKToccrAM8bdKWUfYwbSJkrMoBEOKzG-1jZCx0aMXWw110ScwU4vBazeNiNEut0RnnVPRXSyxg\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"LINE\\",\\"enabled\\":true,\\"id\\":\\"2\\",\\"createdDate\\":\\"2019-02-01T03:09:19.000Z\\",\\"updatedDate\\":\\"2019-02-01T03:09:19.000Z\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'patch-/account/devices/{deviceid};sale-updates-device-info-associated-to-his-user\'s-account-(type-&-enabled)',
        'keyword': 'Scenario',
        'line': 42,
        'name': 'Sale updates device info associated to his user\'s account (Type & Enabled)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 41
          },
          {
            'name': '@openapi',
            'line': 41
          },
          {
            'name': '@role-sale',
            'line': 41
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'deviceId',
                      'type',
                      'externalId',
                      'notificationToken',
                      'createdDate',
                      'updatedDate'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '9',
                      'PHONE',
                      '355715565309247',
                      '03df25c845d460bcdad7802d2vf6fc1dfde97283bf75cc993eb6dca835ea2e2',
                      '2019-02-01T03:09:19.000Z',
                      '2019-02-01T03:09:19.000Z'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '9',
                      'PHONE',
                      '355715565309247',
                      'dW4aDgFo3Ik:APA91bFcT5KyCRWvOoTuHMBV092BYvmMNdspS-QYDSwRpxYAd7_BwrdDn9yrWg-8V8I_ECgoTPmFhO7EnNasjOMN0UuwWIqs8VxVNLxPY1UPdQ1pfnGaLfLU-zK2pqelpPaETfLuQ5VC',
                      '2019-02-01T03:09:19.000Z',
                      '2019-02-01T03:09:19.000Z'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 43,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 48,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 49,
            'name': 'I need the scopes "read:account read:devices write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 50,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 655000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 51,
            'name': 'I have the path "account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 52,
            'name': 'I have the method "PATCH"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 53,
            'name': 'the payload contains "type" from notebook as "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 54,
            'name': 'the payload contains "enabled" as false',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 55,
            'name': 'the payload contains "id" from notebook as "{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 56,
            'name': 'the payload contains "createdDate" from notebook as "{createdDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 57,
            'name': 'the payload contains "updatedDate" from notebook as "{updatedDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 58,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 40000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 59,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 60,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 61,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 62,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 63,
            'name': '"id" should be "{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 64,
            'name': '"type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 65,
            'name': '"enabled" should be false',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 66,
            'name': '"externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 67,
            'name': '"notificationToken" should be "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 68,
            'name': '"createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 69,
            'name': '"updatedDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 70,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 71,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-775ecd36-4cb0-4e46-8091-4f9bb1e5d3f9","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/9\' -X PATCH -H \'x-correlation-id: e2e-test-775ecd36-4cb0-4e46-8091-4f9bb1e5d3f9\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMTIsImlhdCI6MTYxMzY0NjYxMiwianRpIjoiZDNhODVkMWMtN2I3Ni00M2E0LWE5NWMtOGQxNDFkMWMxMmZjIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zYWxlIiwic2Vzc2lvbl9zdGF0ZSI6ImNhMDUzOWRiLTY4YWEtNDk1NS1hZjVlLTI2ZTdhZDQ4NWJkOCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiU2FsZSIsIlZlcmlmaWVkIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJyZWFkOmFjY291bnQgd3JpdGU6ZGV2aWNlcyBlbWFpbCByZWFkOmRldmljZXMgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsInByb2ZpbGVzX2Fkdmlzb3JJZCI6IjYxNTM5OTkiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgifQ.XuJtgPBypfd1VFWd171v3WgUDoCgSlziFDRWM0cRbdfAT6b_4P2nT5FhYeogiG_ye6yQ2IqZ_cO7PFvCGuVQbAgjXAihODl3v2PoqNNjfGLuE2YWdVSvfR_nIlZVUEfP0mBktmLzWGz8115p5gwMssLmJ5vQR2oBjX3y4NgLvLSBRcb9ZtNftygq_tH5L3MG_8oFfwPzJ-8uohTzNZ9RNaAeYdu044FMiNBzJNr8RjFspCQ0CvAt4W7aCEUsnzHRL8llC8p7JdAJlgAIHGz9oJCdUMv7Eclcu3BWYVskQY8Pkvsw9qmVLBD_wVPa5IJO7X3MrTb-kk8s6-q1UNoz8A\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"PHONE\\",\\"enabled\\":false,\\"id\\":\\"9\\",\\"createdDate\\":\\"2019-02-01T03:09:19.000Z\\",\\"updatedDate\\":\\"2019-02-01T03:09:19.000Z\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'patch-/account/devices/{deviceid};staff-updates-device-info-associated-to-a-user\'s-account-(all-fields)',
        'keyword': 'Scenario',
        'line': 75,
        'name': 'Staff updates device info associated to a user\'s account (All fields)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 74
          },
          {
            'name': '@openapi',
            'line': 74
          },
          {
            'name': '@role-staff',
            'line': 74
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'deviceId',
                      'type',
                      'externalId',
                      'notificationToken',
                      'createdDate',
                      'updatedDate'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '1',
                      'TABLET',
                      'xxx123',
                      'xxxToken123',
                      '2019-02-01T03:09:19.000Z',
                      '2019-02-01T03:09:19.000Z'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '1',
                      'TABLET',
                      '355715565309247',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...',
                      '2019-02-01T03:09:19.000Z',
                      '2019-02-01T03:09:19.000Z'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 76,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 81,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 82,
            'name': 'I need the scopes "read:account read:devices write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 83,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1056000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 84,
            'name': 'I have the path "account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 85,
            'name': 'I have the method "PATCH"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 86,
            'name': 'the payload contains "type" from notebook as "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 87,
            'name': 'the payload contains "enabled" as false',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 88,
            'name': 'the payload contains "externalId" from notebook as "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 89,
            'name': 'the payload contains "notificationToken" from notebook as "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 90,
            'name': 'the payload contains "id" from notebook as "{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 91,
            'name': 'the payload contains "createdDate" from notebook as "{createdDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 92,
            'name': 'the payload contains "updatedDate" from notebook as "{updatedDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 93,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 40000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 94,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 95,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 96,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 97,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 98,
            'name': '"id" should be "{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 99,
            'name': '"type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 100,
            'name': '"enabled" should be false',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 101,
            'name': '"externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 102,
            'name': '"notificationToken" should be "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 103,
            'name': '"createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 104,
            'name': '"updatedDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 105,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 106,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-9d50d61b-fd75-4264-ac73-3c2ce69e5369","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/1\' -X PATCH -H \'x-correlation-id: e2e-test-9d50d61b-fd75-4264-ac73-3c2ce69e5369\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMTQsImlhdCI6MTYxMzY0NjYxNCwianRpIjoiZTFkMmM4MmUtMjFiZS00NjliLWEyZDctNzQ3MzgwN2IxMTRkIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiI2YzdmYjU1MS1kZWJhLTRkODMtOTYwYi0zMjc4MTliZWYxNDMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCB3cml0ZTpkZXZpY2VzIGVtYWlsIHJlYWQ6ZGV2aWNlcyBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJwcm9maWxlc19zdGFmZklkIjoiMDAwMDIiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIn0.WDKNWS5lcGodR3oMkmmwfXQetnAdx7GiFDQsmTOGmiCPr2WJIFWIahIgxmoizhH9SaU04lrhAUA5aUNep1BiHfyJ4wv1SwVdhJ5zxn4xp2JtDcYP5YvJlwdaKbOYal7OBb2JgH9hLejnInSsb6HBd82DtXdL5aBPCxKbiLquS68eh2JvXesWCJbLHvbeNuprpLl-xv-NgLkg-82zco8M0M-KeaErdl7By0V73e73rdvYzfAthullvt6BPmQAWpPNntmWtVr3MHkTpVaT01kL8hhjHjuZ8YtqDZ8l6Hebvqj8AcNR2PQ0naHlHdFGpCpwfggSn25gH7nIy251UgzuWQ\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"TABLET\\",\\"enabled\\":false,\\"externalId\\":\\"355715565309247\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\",\\"id\\":\\"1\\",\\"createdDate\\":\\"2019-02-01T03:09:19.000Z\\",\\"updatedDate\\":\\"2019-02-01T03:09:19.000Z\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'patch-/account/devices/{deviceid};prospect-updates-device-info-associated-to-his-account-(all-fields)',
        'keyword': 'Scenario',
        'line': 110,
        'name': 'Prospect updates device info associated to his account (All fields)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 109
          },
          {
            'name': '@openapi',
            'line': 109
          },
          {
            'name': '@role-prospect',
            'line': 109
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'deviceId',
                      'type',
                      'externalId',
                      'notificationToken',
                      'createdDate',
                      'updatedDate'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '4',
                      'FACEBOOK',
                      'xxx123',
                      'xxxToken123',
                      '2019-02-01T03:09:19.000Z',
                      '2019-02-01T03:09:19.000Z'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '4',
                      'FACEBOOK',
                      '355715565309247',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...',
                      '2019-02-01T03:09:19.000Z',
                      '2019-02-01T03:09:19.000Z'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 111,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 116,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 117,
            'name': 'I need the scopes "read:account read:devices write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 118,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 953000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 119,
            'name': 'I have the path "account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 120,
            'name': 'I have the method "PATCH"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 121,
            'name': 'the payload contains "type" from notebook as "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 122,
            'name': 'the payload contains "enabled" as false',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 123,
            'name': 'the payload contains "externalId" from notebook as "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 124,
            'name': 'the payload contains "notificationToken" from notebook as "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 125,
            'name': 'the payload contains "id" from notebook as "{devicdeId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 126,
            'name': 'the payload contains "createdDate" from notebook as "{createdDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 127,
            'name': 'the payload contains "updatedDate" from notebook as "{updatedDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 128,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 41000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 129,
            'name': 'I should see a http code 200',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 130,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 131,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 132,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 133,
            'name': '"id" should be "{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 134,
            'name': '"type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 135,
            'name': '"enabled" should be false',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 136,
            'name': '"externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 137,
            'name': '"notificationToken" should be "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 138,
            'name': '"createdDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 139,
            'name': '"updatedDate" should match "^\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d\\.\\d+([+-][0-2]\\d:[0-5]\\d|Z)$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 140,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 141,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-adf5ed46-27cf-4d52-a8a7-e9c788439df1","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/4\' -X PATCH -H \'x-correlation-id: e2e-test-adf5ed46-27cf-4d52-a8a7-e9c788439df1\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMTUsImlhdCI6MTYxMzY0NjYxNSwianRpIjoiMGE5ZTk5MTgtOTQzZC00YjA1LTgyYjUtOTAxMGExOWRiYjFlIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1wcm9zcGVjdCIsInNlc3Npb25fc3RhdGUiOiIxNjcyM2U5MS1kMzRlLTRmZWYtOWJjMy02M2Q0MTA2YzlkYjciLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiUHJvc3BlY3QiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCB3cml0ZTpkZXZpY2VzIGVtYWlsIHJlYWQ6ZGV2aWNlcyBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIn0.YwNOOWwKpdaelsJ35-Nht5xnhas1swbWBXQvI70W2stP7eclrFsEWbeZgaiWVqLiXn3poJJNwobY4vUfEdwNiC6JsxMJb6scDEieEsIF8ioaejW_2stfC5ObmR-BHWaRtJclnbkeF5g1kSkltiEFKpF3Yf-SO1HjomR56AgW85NzUgd07sausY_QGrB577lp8V_ItE6QxY8umc0qcCf-42GFxfUmHZnmIdsHxnDVwKFiJMwgrtNpLABFQGD4hOxJt52SBgy-R5GFhGNx3BsgvFFPHTbNKkoPSNxx_qt-vyCPSSZIeQ87pWpr50cZi8orehxwESdJv4YT_aLn595DpA\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"FACEBOOK\\",\\"enabled\\":false,\\"externalId\\":\\"355715565309247\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\",\\"id\\":\\"undefined\\",\\"createdDate\\":\\"2019-02-01T03:09:19.000Z\\",\\"updatedDate\\":\\"2019-02-01T03:09:19.000Z\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'patch-/account/devices/{deviceid};security---token-expiration',
        'keyword': 'Scenario',
        'line': 145,
        'name': 'Security - Token Expiration',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 144
          },
          {
            'name': '@pvt',
            'line': 144
          },
          {
            'name': '@openapi',
            'line': 144
          },
          {
            'name': '@role-customer',
            'line': 144
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 146,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 147,
            'name': 'I need the scopes "read:account read:devices write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 148,
            'name': 'I have an expired access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 149,
            'name': 'I have the path "/account/devices/2"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 150,
            'name': 'I have the method "PATCH"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 151,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 29000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 152,
            'name': 'I should see a http code 401',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 2000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 153,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 154,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 155,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 156,
            'name': '"id" should be "334411"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 157,
            'name': '"code" should be 411',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 158,
            'name': '"message" should be "Token is expired"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 159,
            'name': '"href" should be "https://developer.fwd.co.th/errors/411"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 160,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 161,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-9cc32e57-cdbb-4e41-a909-eb2638a02f8e","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/2\' -X PATCH -H \'x-correlation-id: e2e-test-9cc32e57-cdbb-4e41-a909-eb2638a02f8e\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJqdGkiOiJkOWJlNjU1Ny1hZGJhLTQ1MzAtODM3MC01MGU1OWY3ZDI4ZWUiLCJleHAiOjE1Nzg0NTA5NTUsIm5iZiI6MCwiaWF0IjoxNTc4NDQ5MTU1LCJpc3MiOiJodHRwczovL2lhbS1zYW5kYm94LnNjYmxpZmUuY28udGgvYXV0aC9yZWFsbXMvc2NibGlmZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjYWM1YWJjMC0wMzc0LTQ5NDQtYTM1Ny1lNmY1Mzk0YjI4N2UiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJBUElfRkFDVE9SWS1DdXN0b21lciIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImU3OTZlODMzLWFiNTItNDA5My1iYzRmLWVhZmIxZWUyMTYzNSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ3VzdG9tZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJyZWFkOnVzZXJzOmNvbnNlbnRzIHJlYWQ6cXVvdGVzIHdyaXRlOmFkdmlzb3JzIHdyaXRlOmFjY291bnQgcmVhZDpjb25zZW50cyByZWFkOnBheW1lbnRzIHJlYWQ6cG9saWNpZXM6Y29uc2VudHMgYWRtaW46d3JpdGU6YWNjb3VudCByZWFkOmRvY3VtZW50cyB3cml0ZTpxdW90ZXMgd3JpdGU6dXNlcnM6Y29uc2VudHMgd3JpdGU6Y2xhaW1zIHdyaXRlOnVzZXJzIHdyaXRlOnBvbGljaWVzOmNvbnNlbnRzIHJlYWQ6YWNjb3VudCB3cml0ZTpwYXltZW50cyBlbWFpbCByZWFkOnJpZGVycyB3cml0ZTphY2NvdW50OmNvbnNlbnRzIHdyaXRlOmRvY3VtZW50cyB3cml0ZTpjb25zZW50cyByZWFkOnVzZXJzIHJlYWQ6aW5mb3MgcmVhZDpwb2xpY2llcyByZWFkOmxlYWRzIHdyaXRlOnBvbGljaWVzIHByb2ZpbGUgdXNlcklkIHJlYWQ6YWR2aXNvcnMgd3JpdGU6bGVhZHMgd3JpdGU6Y2FzZXMgcmVhZDphY2NvdW50OmNvbnNlbnRzIHJlYWQ6Y2xhaW1zIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRhd2VlcG9ybiBEb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIyMDAwMDA0Nzg2ODciLCJnaXZlbl9uYW1lIjoiVGF3ZWVwb3JuIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJlbWFpbCI6InRhd2Vwb3JuLmRvZTFAZXhhbXBsZS5jb20iLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDA0Nzg2ODcifQ.eqVvdweI_v0tvo6-SvVkl6xGgyHLzixN-9FtIMdON04M8e4n8NMX1OeScw5eYNdVZLVJAekPjuc8a1ZRua1GQzr9Pp4hMYOCm2Nqy439v7ZELVxlwz0GDWgIT6MEQwRE1wsKFGk8kY_2aJ_f1RpvGv_FpAxINz7kE5M4qUqrVfkvfBQ2284tbXwHmf_bGtgfSqzIIR6jYFmSLZ-v2Z6QwTckTF0v18aVl_cCRgBH0FA__nU5Girsl-m9hzOEHK6ttHvhPhAH-_3riPLuZcyxarQNW94CrJNlHf0y27u5tdSKJJS7tpNMSlfJLWnRcS6kf0ToTrFVMcajI2ZlVfK86g\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'patch-/account/devices/{deviceid};security---token-signature-invalid',
        'keyword': 'Scenario',
        'line': 165,
        'name': 'Security - Token Signature Invalid',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 164
          },
          {
            'name': '@pvt',
            'line': 164
          },
          {
            'name': '@openapi',
            'line': 164
          },
          {
            'name': '@role-customer',
            'line': 164
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 166,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 167,
            'name': 'I need the scopes "read:account read:devices write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 168,
            'name': 'I have an invalid access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 169,
            'name': 'I have the path "/account/devices/2"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 170,
            'name': 'I have the method "PATCH"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 171,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 24000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 172,
            'name': 'I should see a http code 401',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 173,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 174,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 175,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 176,
            'name': '"id" should be "334412"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 177,
            'name': '"code" should be 412',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 178,
            'name': '"message" should be "Invalid signature"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 179,
            'name': '"href" should be "https://developer.fwd.co.th/errors/412"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 180,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 181,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-57f01a1c-4a8e-4e27-ada4-0910cf6d140c","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/2\' -X PATCH -H \'x-correlation-id: e2e-test-57f01a1c-4a8e-4e27-ada4-0910cf6d140c\' -H \'authorization: Bearer invalid-access-token\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'patch-/account/devices/{deviceid};security---token-unauthorized-scopes',
        'keyword': 'Scenario',
        'line': 185,
        'name': 'Security - Token Unauthorized Scopes',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 184
          },
          {
            'name': '@pvt',
            'line': 184
          },
          {
            'name': '@openapi',
            'line': 184
          },
          {
            'name': '@role-staff',
            'line': 184
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 186,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 187,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1282000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 188,
            'name': 'I have the path "/account/devices/2"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 189,
            'name': 'I have the method "PATCH"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 190,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 27000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 191,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 192,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 193,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 194,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 195,
            'name': '"id" should be "334430"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 196,
            'name': '"code" should be 430',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 197,
            'name': '"message" should be "You are not allowed to consume the resource"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 198,
            'name': '"href" should be "https://developer.fwd.co.th/errors/430"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 199,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 200,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-67e3a205-e501-4734-9d65-ec817093043b","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/2\' -X PATCH -H \'x-correlation-id: e2e-test-67e3a205-e501-4734-9d65-ec817093043b\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMTYsImlhdCI6MTYxMzY0NjYxNiwianRpIjoiOTZhNGIwNjgtOTY2Ni00N2Q5LThiYTktNzdiZGMyNTI3NzY3IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiI0YTMyZTY5MC02NWY5LTQ3OTQtODE3Ny02MzQ5YmNhYTVkMTciLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsInByb2ZpbGVzX3N0YWZmSWQiOiIwMDAwMiIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgifQ.fX7EStj7wApTVA9dDiCOHJYQMF_WU8Bu0zgdjJglAmf-0y-dz14Uk5Ybmb-cVenVjwKbXPGofsMmNwEt86MTUnOT4Oxx0eLD30ZzOmWNIwlRK_PIJVyjfJZ2Nt6S69qUus97Dad2_cmFnz5kBO8pMFHOFOitO6EZ3PTgwC0Jlq8so6ris-lGNW1E5bo8uRyr-LlZF_9R3_Xt55Z7jyCAJZoUHMf9U1Vtl7Rzk5kXrjsvkFal3qH_VFRmelu0baW4UcKB8UkwAKATi5vpbrnbb5YEgISmNWohcMS33eXuEQAxVxNiBAkKgCHAapEljoUTvIH7mjZARzFaH9XA7TNuhw\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'patch-/account/devices/{deviceid};security---sale-should-not-be-able-to-read-users-whose-other-sales',
        'keyword': 'Scenario',
        'line': 204,
        'name': 'Security - Sale should not be able to read users whose other sales',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 203
          },
          {
            'name': '@pvt',
            'line': 203
          },
          {
            'name': '@openapi',
            'line': 203
          },
          {
            'name': '@role-sale',
            'line': 203
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 205,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 206,
            'name': 'I need the scopes "read:account read:devices write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 207,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1178000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 208,
            'name': 'I have the path "/account/devices/1"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 209,
            'name': 'I have the method "PATCH"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 210,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 135000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 211,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 212,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 213,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 214,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 215,
            'name': '"id" should be "334432"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 216,
            'name': '"code" should be 432',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 217,
            'name': '"message" should be "You are not allowed to access the information"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 218,
            'name': '"href" should be "https://developer.fwd.co.th/errors/432"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 219,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 220,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-a93d9b95-209f-4fe2-9f52-d74197130b1d","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/1\' -X PATCH -H \'x-correlation-id: e2e-test-a93d9b95-209f-4fe2-9f52-d74197130b1d\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMTcsImlhdCI6MTYxMzY0NjYxNywianRpIjoiNmIyOTMxNTctNmQzYS00MTdlLWE3MDQtNmY3MTdhZWE0N2YxIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zYWxlIiwic2Vzc2lvbl9zdGF0ZSI6IjlhMGFlZDA2LWRhOGEtNDhjOS04MWU4LTkxN2I5MWQ3ZGI5NSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiU2FsZSIsIlZlcmlmaWVkIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJyZWFkOmFjY291bnQgd3JpdGU6ZGV2aWNlcyBlbWFpbCByZWFkOmRldmljZXMgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsInByb2ZpbGVzX2Fkdmlzb3JJZCI6IjYxNTM5OTkiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgifQ.cU3QxuDBRbc1myXgT_ro0CuQUWmv69jD9NsKZRtGZqRl273PjkwTsgN4K1TRb0F-If0RxzR6Otc9HX7lhdXmoKs2nxVeJJDBQInP2Xd_PPWsip93Cwv5f8vWSjt7zVd-WWsk8pCetJSs-pqx6mznU_ueUXSM-0sLW1KcMWcUYUXGhXjuRePWxNu8UfIokkpzmlzZugS5EFLRLAAm5RmMK9oUOPeolD0XvREdRLdIUMYTPEpmo5Hc4e2U1lgEBTMHfwHhItZqYCp6bHwrc6jzmi0rSrKt1-krJA8tFchrNzV52ue9cylMOl5_TJ047VaURQEA7R5MNbCiD1otDEg-SQ\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'patch-/account/devices/{deviceid};security---customer-should-not-be-able-to-read-users-whose-other-sales',
        'keyword': 'Scenario',
        'line': 224,
        'name': 'Security - Customer should not be able to read users whose other sales',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 223
          },
          {
            'name': '@pvt',
            'line': 223
          },
          {
            'name': '@openapi',
            'line': 223
          },
          {
            'name': '@role-customer',
            'line': 223
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 3000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 225,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 226,
            'name': 'I need the scopes "read:account read:devices write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 227,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 947000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 228,
            'name': 'I have the path "/account/devices/1"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 229,
            'name': 'I have the method "PATCH"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 230,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 32000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 231,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 232,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 233,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 234,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 235,
            'name': '"id" should be "334432"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 236,
            'name': '"code" should be 432',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 237,
            'name': '"message" should be "You are not allowed to access the information"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 238,
            'name': '"href" should be "https://developer.fwd.co.th/errors/432"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 239,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 240,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-de78fe41-03fe-4783-88eb-3e9226f3572d","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/1\' -X PATCH -H \'x-correlation-id: e2e-test-de78fe41-03fe-4783-88eb-3e9226f3572d\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMTgsImlhdCI6MTYxMzY0NjYxOCwianRpIjoiODc4MmFmMDgtMzhhZi00ZTc4LWEwN2ItMTIxYmEwZGQ2MTAzIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI4Y2U1NGJlNi0yYThkLTRiNjMtYjg0Yi02MjlkNTdjZDhjNzEiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IHdyaXRlOmRldmljZXMgZW1haWwgcGhvbmUgcmVhZDpkZXZpY2VzIHByb2ZpbGUgdXNlcklkIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJhZGRyZXNzIjp7fSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsInByb2ZpbGVzX3VzZXJJZCI6IjIwMDAwMjk1NDk4MiJ9.EFvu-bTdS3BZognV8xnp51prHjOchXW75BiSJ6_SP4GdOrpZRzV6pKvbuQs-TQZpgT8-rLKXEpTZcUcF8pUyN8bAVTU5lOQ_QgWaAG-iRu8PmK8sbAVV12xbTwDDu6wBaR5rT7BSUk1TgZ7lwyvfsomSMIA1IOE9EAtdaLRP94QpOT4-xbRs4Mj27vyAXYVBud_Zflmq_kzijK2pJCH-POgTHxrIYEnNLDek6TeGTfGSTw-N6GHoEtkbsr0c2RDUxd9V9YkivZiRWxCRhaidpBo_I9yI95RPZaG7UVTOVHGYBtpG_KyjiEny6Lp0EY6xzWsecWpxdy-nZYuqhDGlIQ\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'patch-/account/devices/{deviceid};device-id-doesn\'t-exist---staff-role',
        'keyword': 'Scenario',
        'line': 244,
        'name': 'Device id doesn\'t exist - staff role',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 243
          },
          {
            'name': '@openapi',
            'line': 243
          },
          {
            'name': '@role-staff',
            'line': 243
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'deviceId',
                      'type',
                      'externalId',
                      'notificationToken'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '9999',
                      'TABLET',
                      'xxx123',
                      'xxxToken123'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '9999',
                      'TABLET',
                      '355715565309247',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 245,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 250,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 251,
            'name': 'I need the scopes "read:account read:devices write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 252,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1382000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 253,
            'name': 'I have the path "account/devices/9999"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 254,
            'name': 'I have the method "PATCH"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 255,
            'name': 'the payload contains "type" from notebook as "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 256,
            'name': 'the payload contains "enabled" as true',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 257,
            'name': 'the payload contains "id" from notebook as "{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 258,
            'name': 'the payload contains "externalId" from notebook as "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 259,
            'name': 'the payload contains "notificationToken" from notebook as "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 260,
            'name': 'the payload contains "createdDate" from notebook as "{createdDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 261,
            'name': 'the payload contains "updatedDate" from notebook as "{updatedDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 262,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 39000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 263,
            'name': 'I should see a http code 404',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 264,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 265,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 266,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 267,
            'name': '"id" should be "334444"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 268,
            'name': '"code" should be 444',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 269,
            'name': '"message" should be "The device doesn\'t exist"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 270,
            'name': '"href" should be "https://developer.fwd.co.th/errors/444"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 271,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 272,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-4373dcd3-5f93-421d-83b6-b396e23c7921","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/9999\' -X PATCH -H \'x-correlation-id: e2e-test-4373dcd3-5f93-421d-83b6-b396e23c7921\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMTksImlhdCI6MTYxMzY0NjYxOSwianRpIjoiNDM2YzU0NWUtYjNlMy00ZWIyLTllY2QtZTBjYmRmNDBlZDNiIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiI2MmM4ZmI2Ny0wODhiLTQ4MTEtYTRjNS03MzYyZmQ5N2Q1NTciLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCB3cml0ZTpkZXZpY2VzIGVtYWlsIHJlYWQ6ZGV2aWNlcyBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJwcm9maWxlc19zdGFmZklkIjoiMDAwMDIiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIn0.YTYx2NjZyopJk6Y4fb6DJJx8_hKAxDDYgyqo5cTSAR344bVC5TXZZciiDr1Y0ojfiAxOKNOuuiXr5sb_RaKKeGlSRVdhj4az1o-cwTW_uLHBJ9eOgzbs1QI7V4_EIT_QqD2O1iJIupdxfbNb8Pg7a39lJCN9-BRbAttlMKzDxeaMvNe7IbR6ALjSiubt1jGVNMF9ZyCqvmryZbVB-SlZSY4zCpHWpTXXCrDA3dfpX70fjiaiDPmkVWVkGcCm2e58CNCscUgaZg__13gzlZsdZfA-QHW7VKIoPhnL9V9Prut4v8NpQJMU6Sp9OmGitkkG5-Rb1fcJvUDbZ821BnYhOw\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"TABLET\\",\\"enabled\\":true,\\"id\\":\\"9999\\",\\"externalId\\":\\"355715565309247\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\",\\"createdDate\\":\\"undefined\\",\\"updatedDate\\":\\"undefined\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'patch-/account/devices/{deviceid};device-id-doesn\'t-exist---customer-role',
        'keyword': 'Scenario',
        'line': 275,
        'name': 'Device id doesn\'t exist - customer role',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 274
          },
          {
            'name': '@openapi',
            'line': 274
          },
          {
            'name': '@role-customer',
            'line': 274
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'deviceId',
                      'type',
                      'externalId',
                      'notificationToken'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '9999',
                      'TABLET',
                      'xxx123',
                      'xxxToken123'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '9999',
                      'TABLET',
                      '355715565309247',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 276,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 281,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 282,
            'name': 'I need the scopes "read:account read:devices write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 283,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1449000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 284,
            'name': 'I have the path "account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 285,
            'name': 'I have the method "PATCH"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 286,
            'name': 'the payload contains "type" from notebook as "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 287,
            'name': 'the payload contains "enabled" as true',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 288,
            'name': 'the payload contains "externalId" from notebook as "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 289,
            'name': 'the payload contains "notificationToken" from notebook as "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 290,
            'name': 'the payload contains "createdDate" from notebook as "{createdDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 291,
            'name': 'the payload contains "updatedDate" from notebook as "{updatedDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 292,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 36000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 293,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 294,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 295,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 296,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 297,
            'name': '"id" should be "334432"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 298,
            'name': '"code" should be 432',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 299,
            'name': '"message" should be "You are not allowed to access the information"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 300,
            'name': '"href" should be "https://developer.fwd.co.th/errors/432"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 301,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 302,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-56a82b2c-dfc0-4dfe-b4e1-a88b1050adeb","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/9999\' -X PATCH -H \'x-correlation-id: e2e-test-56a82b2c-dfc0-4dfe-b4e1-a88b1050adeb\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMjEsImlhdCI6MTYxMzY0NjYyMSwianRpIjoiMGIxOTNhYjUtZDQ2Yy00ZjdjLWIyMzgtNmFjNjAxMTliZDc3IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiJlZmU4ZTBhOC05N2EyLTQ2ZDYtOGM0My05M2Q5NzYwYTVkMTEiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IHdyaXRlOmRldmljZXMgZW1haWwgcGhvbmUgcmVhZDpkZXZpY2VzIHByb2ZpbGUgdXNlcklkIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJhZGRyZXNzIjp7fSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsInByb2ZpbGVzX3VzZXJJZCI6IjIwMDAwMjk1NDk4MiJ9.EyMBo3Oalf5gI1QggQtLOKrO4ctcLPdHd-Mc42wLu2DNoazvVjeNmM0cKCfLsH2D4udclb-XhTHrIJBREl1DbkFql0j8bhaXbE4mABQHmR59GGtTgcl7SxsRtiUXwbI8nJ-lCuXWu78WNY-fhbQVg65zoEudhmy2Gaggf9N0zNwRIjsHggNK6YUEy9iZUqABWc0vN8780ouBelQhI6yt0w1o-2EizYUr5RBZqMJuJLdW-Q_84B19lQpBROQ6uQ4qzna9XDTvDXFJijleHVzlnQe8bozTfWYhwHt7uRoMj1KzLz709H3qI_cwbVomti1zceeMNlvzXIuIvkvdKC_a3Q\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"TABLET\\",\\"enabled\\":true,\\"externalId\\":\\"355715565309247\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\",\\"createdDate\\":\\"undefined\\",\\"updatedDate\\":\\"undefined\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'patch-/account/devices/{deviceid};the-field-"enabled"-is-not-boolean',
        'keyword': 'Scenario',
        'line': 305,
        'name': 'The field "enabled" is not boolean',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 304
          },
          {
            'name': '@openapi',
            'line': 304
          },
          {
            'name': '@role-customer',
            'line': 304
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'deviceId',
                      'enabled',
                      'externalId',
                      'notificationToken'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '2',
                      'falseeee',
                      'xxx123',
                      'xxxToken123'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2',
                      'falseeee',
                      '355715565309247',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 306,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 311,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 312,
            'name': 'I need the scopes "read:account read:devices write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 313,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 847000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 314,
            'name': 'I have the path "account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 315,
            'name': 'I have the method "PATCH"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 316,
            'name': 'the payload contains "enabled" from notebook as "{enabled}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 317,
            'name': 'the payload contains "externalId" from notebook as "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 318,
            'name': 'the payload contains "notificationToken" from notebook as "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 319,
            'name': 'the payload contains "createdDate" from notebook as "{createdDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 320,
            'name': 'the payload contains "updatedDate" from notebook as "{updatedDate}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 321,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 36000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 322,
            'name': 'I should see a http code 406',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 323,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 324,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 325,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 326,
            'name': '"id" should be "334462"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 327,
            'name': '"code" should be 462',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 328,
            'name': '"message" should be "The field enabled should be a boolean"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 329,
            'name': '"href" should be "https://developer.fwd.co.th/errors/462"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 330,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 331,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-50e98a86-a3b2-4004-a80a-ba6cfac8f02b","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/2\' -X PATCH -H \'x-correlation-id: e2e-test-50e98a86-a3b2-4004-a80a-ba6cfac8f02b\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMjIsImlhdCI6MTYxMzY0NjYyMiwianRpIjoiZmMxMjAxNWEtMWEzMC00M2U5LThiZWQtNGQ3NTM5ZGYzNTc5IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiJiZjNjNWFkYS01YTQ0LTRmOGMtOGI1MS04Njc5ODIxZjMwMjciLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IHdyaXRlOmRldmljZXMgZW1haWwgcGhvbmUgcmVhZDpkZXZpY2VzIHByb2ZpbGUgdXNlcklkIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJhZGRyZXNzIjp7fSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsInByb2ZpbGVzX3VzZXJJZCI6IjIwMDAwMjk1NDk4MiJ9.Mh3s75xLuPs4UIIyUuek1G3c9K7wjW2AUDHUvbgnXUvyA5XzJ9WuKxbcpmNs8PmuGmvJYLj7oxAas5nj36jE23djtwBw_caitVw1nDmRGAQOnxU9ABUQakbew8Or7641f5-RdVjnJSKzn87qCNoE0BxVFHYABS3bOajz6pFxRAAHU5W03LB8OTFo-993q320jjDkeLqbbHN_JoJHto4yhHPbOkvZe5Hqf_Wup1Lq4RQbD9ObbAU1tw-sM35MQ6VRyPfNkonqP1k5AzzZCD_odfkpX-6NXt1wV-5x1Bjixjkuetk68Y5_cMTHngsNBPKfiBMVgzTK3Mj2xsiHdhrBoQ\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"enabled\\":\\"falseeee\\",\\"externalId\\":\\"355715565309247\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\",\\"createdDate\\":\\"undefined\\",\\"updatedDate\\":\\"undefined\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'patch-/account/devices/{deviceid};type-is-an-invalid-enum-value',
        'keyword': 'Scenario',
        'line': 334,
        'name': 'Type is an invalid enum value',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 333
          },
          {
            'name': '@openapi',
            'line': 333
          },
          {
            'name': '@role-customer',
            'line': 333
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'deviceId',
                      'type',
                      'externalId',
                      'notificationToken'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      '2',
                      'IG',
                      'xxx123',
                      'xxxToken123'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      '2',
                      'IG',
                      '355715565309247',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 335,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 340,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 341,
            'name': 'I need the scopes "read:account read:devices write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 342,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 966000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 343,
            'name': 'I have the path "account/devices/{deviceId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 344,
            'name': 'I have the method "PATCH"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 345,
            'name': 'the payload contains "type" from notebook as "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 346,
            'name': 'the payload contains "enabled" as true',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 347,
            'name': 'the payload contains "externalId" from notebook as "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 348,
            'name': 'the payload contains "notificationToken" from notebook as "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 349,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 40000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 350,
            'name': 'I should see a http code 406',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 351,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 352,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 353,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 354,
            'name': '"id" should be "334463"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 355,
            'name': '"code" should be 463',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 356,
            'name': '"message" should be "The field type doesn\'t match the values: PHONE, TABLET, FACEBOOK, LINE"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 357,
            'name': '"href" should be "https://developer.fwd.co.th/errors/463"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 358,
            'name': 'the response time is under 3000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 359,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-7af48d98-2f6e-4ca7-a79d-487ab7c23b1f","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices/2\' -X PATCH -H \'x-correlation-id: e2e-test-7af48d98-2f6e-4ca7-a79d-487ab7c23b1f\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMjMsImlhdCI6MTYxMzY0NjYyMywianRpIjoiNzA0NDIwNmUtMjc0Ni00MTlmLWE4MjYtMjkxOWRmMzU1MzNiIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiJkMjI4NjRmOS1mNWIyLTQ2MWQtOTIxZC01OTZiYjczMTY3YTgiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IHdyaXRlOmRldmljZXMgZW1haWwgcGhvbmUgcmVhZDpkZXZpY2VzIHByb2ZpbGUgdXNlcklkIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJhZGRyZXNzIjp7fSwiZ2VuZGVyIjoiTUFMRSIsIm5hbWUiOiJUZXN0ZTJlIEFwaWZhY3RvcnkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCIsInByb2ZpbGVzX3VzZXJJZCI6IjIwMDAwMjk1NDk4MiJ9.NjeG_sLiJXrwzgtbnXfoo9meja4wPusTIEsWDE78NgtUKcU0VVyj9P6A2bhqtZlC-KlPIJylvb2nIg_Yh7wYMk07ULu5ULysEUILS62WM5BajGVonX-dXTN279nXX_pBaGVAQPS1h6kYe3AxK-oqPdnOHKUa6fMSAhb4XH-k8NvzUv8_9nnUraj3Gm-S64TkSKq1qQtntcP7CkOCX-BSA59sWH0x7pXETzA_eMhmmEktAb7dAgj3jW5x3ZBElq2xNkJvbq5W33-6hAUeNoY1iTqmMGSADvsKNaiwQo9ll-9QOOWFkTTXGhoVo1M9KDf7YjUsqNWC3WNM5n92rH_Q0Q\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"IG\\",\\"enabled\\":true,\\"externalId\\":\\"355715565309247\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'description': '  API consumer\n  Create a device associated to an account\n  I can manage user\'s device',
    'keyword': 'Feature',
    'name': 'POST /account/devices',
    'line': 2,
    'id': 'post-/account/devices',
    'tags': [
      {
        'name': '@userstories-16',
        'line': 1
      }
    ],
    'uri': 'features/post_accountdevices.feature',
    'elements': [
      {
        'id': 'post-/account/devices;customer-role-requests-to-create-a-device-associated-to-his-account-(type-:-phone)',
        'keyword': 'Scenario',
        'line': 9,
        'name': 'Customer role requests to create a device associated to his account (type : PHONE)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 8
          },
          {
            'name': '@openapi',
            'line': 8
          },
          {
            'name': '@role-customer',
            'line': 8
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'type',
                      'externalId',
                      'accountId',
                      'notificationToken'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      'PHONE',
                      '355715565309247',
                      '8fb86d89-26ac-40a5-b585-4efe97da3b8f',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      'PHONE',
                      '355715565309247',
                      '8fb86d89-26ac-40a5-b585-4efe97da3b8f',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 10,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 15,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 16,
            'name': 'I need the scopes "read:account write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 17,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 952000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 18,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 19,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 20,
            'name': 'the payload contains "type" from notebook as "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 21,
            'name': 'the payload contains "enabled" as true',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 22,
            'name': 'the payload contains "externalId" from notebook as "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 23,
            'name': 'the payload contains "accountId" from notebook as "{accountId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 24,
            'name': 'the payload contains "notificationToken" from notebook as "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 25,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 41000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 26,
            'name': 'I should see a http code 201',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 27,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 28,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 29,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 30,
            'name': '"id" should match "^[a-z0-9\\-]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 31,
            'name': '"type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 32,
            'name': '"enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 33,
            'name': '"externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 34,
            'name': '"notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 35,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 36,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-cfc988eb-7240-432e-a878-56d6441d568b","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -H \'x-correlation-id: e2e-test-cfc988eb-7240-432e-a878-56d6441d568b\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMjQsImlhdCI6MTYxMzY0NjYyNCwianRpIjoiOTAzYmU4ODAtYmJjYS00YjdmLTkwMmUtZDc0Njk5MGJhMzg2IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI3YTYzYWYwYy03YzcwLTQ4NjQtOGEwZS03ZTczYmRiOWZmOGIiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IHdyaXRlOmRldmljZXMgZW1haWwgcGhvbmUgcHJvZmlsZSB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.hym3PxtR2sGplMiFvbU4bclcLuV1OdXFR1PggmG3v4nITZ9aSIMvCh7Q1QNghBSpLb6POmKIpZZdlAKbfpkMn-tGC2vfqmc6x_w0AP3sxpyKMBWVfI7MMBmdWTinVszfbF7m4d9eN3zH9i9Px1rqLFgh_NYM5tdOmC5yobk76ZesOoL6zn40xkOF7TAETSRWoTQ4UPkY1zBgxhqpeC34R6elFDa8nafbIoN96IMvd9X1TjieEee9ZN27R6s2D4343ia77sOK02PvsWqyxExRnVnnC9b8qt-k7M7vJ5c4ntCVyPr_U9NThQSthbMWE6HCAQ-6ydnxseWRzSZyu27HWQ\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"PHONE\\",\\"enabled\\":true,\\"externalId\\":\\"355715565309247\\",\\"accountId\\":\\"8fb86d89-26ac-40a5-b585-4efe97da3b8f\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'post-/account/devices;customer-role-requests-to-create-a-device-associated-to-an-account-(type-:-facebook)',
        'keyword': 'Scenario',
        'line': 40,
        'name': 'Customer role requests to create a device associated to an account (type : FACEBOOK)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 39
          },
          {
            'name': '@openapi',
            'line': 39
          },
          {
            'name': '@role-customer',
            'line': 39
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'type',
                      'externalId',
                      'accountId',
                      'notificationToken'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      'FACEBOOK',
                      '355715565309247',
                      '8fb86d89-26ac-40a5-b585-4efe97da3b8f',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      'FACEBOOK',
                      '355715565309247',
                      '8fb86d89-26ac-40a5-b585-4efe97da3b8f',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 41,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 46,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 47,
            'name': 'I need the scopes "read:account write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 48,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1152000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 49,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 50,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 51,
            'name': 'the payload contains "type" from notebook as "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 52,
            'name': 'the payload contains "enabled" as true',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 53,
            'name': 'the payload contains "externalId" from notebook as "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 54,
            'name': 'the payload contains "accountId" from notebook as "{accountId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 55,
            'name': 'the payload contains "notificationToken" from notebook as "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 56,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 43000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 57,
            'name': 'I should see a http code 201',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 58,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 59,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 60,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 61,
            'name': '"id" should match "^[a-z0-9\\-]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 62,
            'name': '"type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 63,
            'name': '"enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 64,
            'name': '"externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 65,
            'name': '"notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 66,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 67,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-e0f98f5c-6cef-43e0-84e0-80f7b89c2404","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -H \'x-correlation-id: e2e-test-e0f98f5c-6cef-43e0-84e0-80f7b89c2404\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMjUsImlhdCI6MTYxMzY0NjYyNSwianRpIjoiZjkwNmZkMjAtMzczYy00Y2IwLThmODktNTNkNGQwNGZiYjk4IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI3NDMwYWRiZi02OWNlLTRkNDQtYTE1YS1jZDYwMTk4MDFiZjAiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IHdyaXRlOmRldmljZXMgZW1haWwgcGhvbmUgcHJvZmlsZSB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.QMZ-a5fhDvHStnL0PqPk5KcK-V1gNM_TEQN2ic193ux_n7RUB3kIPrUmsKattsg-jywiM3u5ysfvb6AAfogcevdfK_n4cc-jDm1yS_WRHWBj-jWQd8WvzJAcqUYroE6mhSY0ZPX_zXelVAmSRkaWO4gjzgS0AHUsmRPQlKaQxC2-q7vXgNJqW71ML16dv9ElLr2VRQQpjeXy7eel4ZRJBkUkXguM-bRHSlYSOyWU_aMwmrjwRG07h34y8MMxO1Q7XPmItrvD8BXkBTq1CFb5DTlNF0PG3WO8ITqOGzYDit37eGbFPeVelPkpubK_JZPJGlgL-l3oj1Bz2S9-WIJENw\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"FACEBOOK\\",\\"enabled\\":true,\\"externalId\\":\\"355715565309247\\",\\"accountId\\":\\"8fb86d89-26ac-40a5-b585-4efe97da3b8f\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'post-/account/devices;staff-role-requests-to-create-a-device-associated-to-an-account-(type-:-phone)',
        'keyword': 'Scenario',
        'line': 70,
        'name': 'Staff role requests to create a device associated to an account (type : PHONE)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 69
          },
          {
            'name': '@openapi',
            'line': 69
          },
          {
            'name': '@role-staff',
            'line': 69
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'type',
                      'externalId',
                      'accountId',
                      'notificationToken'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      'PHONE',
                      '355715565309247',
                      '8fb86d89-26ac-40a5-b585-4efe97da3b8f',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      'PHONE',
                      '355715565309247',
                      '8fb86d89-26ac-40a5-b585-4efe97da3b8f',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 71,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 76,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 77,
            'name': 'I need the scopes "read:account write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 78,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1148000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 79,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 80,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 81,
            'name': 'the payload contains "type" from notebook as "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 82,
            'name': 'the payload contains "enabled" as true',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 83,
            'name': 'the payload contains "externalId" from notebook as "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 84,
            'name': 'the payload contains "accountId" from notebook as "{accountId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 85,
            'name': 'the payload contains "notificationToken" from notebook as "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 86,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 37000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 87,
            'name': 'I should see a http code 201',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 88,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 89,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 90,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 91,
            'name': '"id" should match "^[a-z0-9\\-]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 92,
            'name': '"type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 93,
            'name': '"enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 94,
            'name': '"externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 95,
            'name': '"notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 96,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 97,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-47f1b4e1-fba1-4f17-a7df-6285a1fa4d96","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -H \'x-correlation-id: e2e-test-47f1b4e1-fba1-4f17-a7df-6285a1fa4d96\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMjYsImlhdCI6MTYxMzY0NjYyNiwianRpIjoiYTMzM2U5YTEtMDNkZC00NmU0LTkyMTUtYTg0ZGIxNjhhMDU3IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiI1YmM3ZGM3Mi1mOGRkLTQzZGQtOTc3ZC0xYWJhNjJlZmIzYWUiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCB3cml0ZTpkZXZpY2VzIGVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsInByb2ZpbGVzX3N0YWZmSWQiOiIwMDAwMiIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgifQ.j-zw5MDL8HyEJF--ttDrXliedRL4LURFlTqRD1jW5WEy3uqvEZvAtmK7glRM1nLWH-XI3TWVtx3D3eLAbJWS632aUZwx20FYpzJ08Yk34kg8p5GZeQwQTSFw7MvKeIra1IAycN_RgkUXbu-Fu8L_snuYhvaixXAxDXoRMpTQNaiPIj1r1RZFUYr-J7OMPB6jrvKHBZ5d8SNTKbaRE98OIxooR2gw66ePgW-hlVwPLgW21mwSe2SXKiEaJDsOMdWdN6xP7L7NbWH4LQdvUHbXGmKkQhrR9TD9VShCzONm4Bm_Glg_9naywspc0f-A_lid9xMwI1eo-rSL2FOOXYWzFg\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"PHONE\\",\\"enabled\\":true,\\"externalId\\":\\"355715565309247\\",\\"accountId\\":\\"8fb86d89-26ac-40a5-b585-4efe97da3b8f\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'post-/account/devices;sale-role-requests-to-create-a-device-associated-to-an-account-(type-:-tablet)',
        'keyword': 'Scenario',
        'line': 100,
        'name': 'Sale role requests to create a device associated to an account (type : TABLET)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 99
          },
          {
            'name': '@openapi',
            'line': 99
          },
          {
            'name': '@role-sale',
            'line': 99
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'type',
                      'externalId',
                      'accountId',
                      'notificationToken'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      'TABLET',
                      '355715565309247',
                      '8fb86d89-26ac-40a5-b585-4efe97da3b8f',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      'TABLET',
                      '355715565309247',
                      '8fb86d89-26ac-40a5-b585-4efe97da3b8f',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 101,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 106,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 107,
            'name': 'I need the scopes "read:account write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 108,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 761000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 109,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 110,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 111,
            'name': 'the payload contains "type" from notebook as "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 112,
            'name': 'the payload contains "enabled" as true',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 113,
            'name': 'the payload contains "externalId" from notebook as "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 114,
            'name': 'the payload contains "accountId" from notebook as "{accountId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 115,
            'name': 'the payload contains "notificationToken" from notebook as "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 116,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 47000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 117,
            'name': 'I should see a http code 201',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 118,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 119,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 120,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 121,
            'name': '"id" should match "^[a-z0-9\\-]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 122,
            'name': '"type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 123,
            'name': '"enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 124,
            'name': '"externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 125,
            'name': '"notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 126,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 127,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-1d68bc01-eac5-49d8-a7ab-74bdd4faf247","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -H \'x-correlation-id: e2e-test-1d68bc01-eac5-49d8-a7ab-74bdd4faf247\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMjcsImlhdCI6MTYxMzY0NjYyNywianRpIjoiNzQyNmE3YTItY2Q1Yi00MTcyLThhMGQtMjEwYjRhMzUwMzU2IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zYWxlIiwic2Vzc2lvbl9zdGF0ZSI6IjY1YmY2NjhjLTRjY2UtNDgyMi1iYjM2LTE5M2IzYjcxYWM2ZSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiU2FsZSIsIlZlcmlmaWVkIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJyZWFkOmFjY291bnQgd3JpdGU6ZGV2aWNlcyBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfYWR2aXNvcklkIjoiNjE1Mzk5OSIsImdpdmVuX25hbWUiOiJUZXN0ZTJlIiwiZmFtaWx5X25hbWUiOiJBcGlmYWN0b3J5IiwiZW1haWwiOiJhcGlfZmFjdG9yeS11c2VyLXJlZ2lzdGVyZWRAc2NibGlmZS5jby50aCJ9.MMZO5Y8m0M_M0tbv4_Tmk75lf_1ZOT7FpGQmlca5_BBUqnN_gPhu6fmkvP2sO-lNSBoZL_7ZJ9LVo1fSGqlRWDuWqksVRPjrmLjn9nLO2qN-Jdyx8-_xTh_KXhZOHAuoLWrk81qhrZ1YO2afJh0jVZjseT-RjVcuRTsEGlxaOLTYecmzIctOs39ZelqiK_bmDIros7nb4mvx4Ayo7E_wV1N0ejXbHonKSW8-ETsyIsQtir0F5WlT6DEl8T8-79z1sgaYEGcx-Aqim7jLRXkaLt4AHccr8FjDIGFhMSAlnk4sReYUmeWPZRm08266OmAE05ZqO-7WhrFmUTNpKksZMw\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"TABLET\\",\\"enabled\\":true,\\"externalId\\":\\"355715565309247\\",\\"accountId\\":\\"8fb86d89-26ac-40a5-b585-4efe97da3b8f\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'post-/account/devices;prospect-role-requests-to-create-a-device-associated-to-an-account-(type-:-line)',
        'keyword': 'Scenario',
        'line': 130,
        'name': 'Prospect role requests to create a device associated to an account (type : LINE)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 129
          },
          {
            'name': '@openapi',
            'line': 129
          },
          {
            'name': '@role-prospect',
            'line': 129
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [
              {
                'rows': [
                  {
                    'cells': [
                      'Env',
                      'type',
                      'externalId',
                      'accountId',
                      'notificationToken'
                    ]
                  },
                  {
                    'cells': [
                      'SIT',
                      'LINE',
                      '355715565309247',
                      '45b08e85-d7f3-49c2-a0c2-84540d56bd1c',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'SANDBOX',
                      'LINE',
                      '355715565309247',
                      '2b1aeac5-b545-44e4-98ed-b69ef3f0853b',
                      'd4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...'
                    ]
                  },
                  {
                    'cells': [
                      'PRODUCTION',
                      '',
                      '',
                      '',
                      ''
                    ]
                  }
                ]
              }
            ],
            'keyword': 'Given ',
            'line': 131,
            'name': 'A dataset:',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 136,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 137,
            'name': 'I need the scopes "read:account write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 138,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1070000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 139,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 140,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 141,
            'name': 'the payload contains "type" from notebook as "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 142,
            'name': 'the payload contains "enabled" as true',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 143,
            'name': 'the payload contains "externalId" from notebook as "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 144,
            'name': 'the payload contains "accountId" from notebook as "{accountId}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 145,
            'name': 'the payload contains "notificationToken" from notebook as "{notificationToken}"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 146,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 53000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 147,
            'name': 'I should see a http code 201',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 148,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 149,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 150,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 151,
            'name': '"id" should match "^[a-z0-9\\-]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 152,
            'name': '"type" should be "{type}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 153,
            'name': '"enabled" should be true',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 154,
            'name': '"externalId" should be "{externalId}"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 155,
            'name': '"notificationToken" should match "^[A-Za-z0-9\\-\\:\\/\\.\\_]+$"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 156,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 157,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-b5fabbbd-4997-493f-8698-530cbd9f692a","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -H \'x-correlation-id: e2e-test-b5fabbbd-4997-493f-8698-530cbd9f692a\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMjgsImlhdCI6MTYxMzY0NjYyOCwianRpIjoiMWVhYTMzMWMtZGZmNy00NjhmLWE3ZmYtODk0OTA1OTNhZWFhIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1wcm9zcGVjdCIsInNlc3Npb25fc3RhdGUiOiIwZDllNzY3Yi1lYTU2LTRkNTItOGMwMy01YjgyMWFmMjI3M2YiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiUHJvc3BlY3QiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJlYWQ6YWNjb3VudCB3cml0ZTpkZXZpY2VzIGVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgifQ.ShKEjuhgtPK6T-UWOfy22whtbYb8MrEOj-B4cbXS2IgC1U6km5vDJBizOw9RZAVvWj9CLVrqy_Q56Qpi72iHIieO-pQNgXFeDZXuyycZQgMgHttIKReeytIUEyIEolISafpfQpwEivFTlxdUHEYyvjeXI05JTwnKGOnC20zKduci28PeWutGX6QSTDCQNcPy3ebpBMQnj_2WR6kDH4orD1vSICbsHEirPkiNFiH1DqRjcgCZ4RJM1Lh_6yz4MCYst9NSc0qtrFl0uPzjUUEmBdyoQ0b9OE7wemMly1ylO5D1etovEEMG_kCAZ3CEhlDUAX-Wd9wLn0OshgHs-N81KQ\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"LINE\\",\\"enabled\\":true,\\"externalId\\":\\"355715565309247\\",\\"accountId\\":\\"2b1aeac5-b545-44e4-98ed-b69ef3f0853b\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'post-/account/devices;security---token-expiration',
        'keyword': 'Scenario',
        'line': 160,
        'name': 'Security - Token Expiration',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 159
          },
          {
            'name': '@pvt',
            'line': 159
          },
          {
            'name': '@openapi',
            'line': 159
          },
          {
            'name': '@role-customer',
            'line': 159
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 161,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 162,
            'name': 'I need the scopes "read:account write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 163,
            'name': 'I have an expired access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 164,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 165,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 166,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 26000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 167,
            'name': 'I should see a http code 401',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 168,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 169,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 170,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 171,
            'name': '"id" should be "334411"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 172,
            'name': '"code" should be 411',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 173,
            'name': '"message" should be "Token is expired"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 174,
            'name': '"href" should be "https://developer.fwd.co.th/errors/411"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 175,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 176,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-8fefa175-cc8d-46a4-9cb2-0c165d9e916d","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -X POST -H \'x-correlation-id: e2e-test-8fefa175-cc8d-46a4-9cb2-0c165d9e916d\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJqdGkiOiJkOWJlNjU1Ny1hZGJhLTQ1MzAtODM3MC01MGU1OWY3ZDI4ZWUiLCJleHAiOjE1Nzg0NTA5NTUsIm5iZiI6MCwiaWF0IjoxNTc4NDQ5MTU1LCJpc3MiOiJodHRwczovL2lhbS1zYW5kYm94LnNjYmxpZmUuY28udGgvYXV0aC9yZWFsbXMvc2NibGlmZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjYWM1YWJjMC0wMzc0LTQ5NDQtYTM1Ny1lNmY1Mzk0YjI4N2UiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJBUElfRkFDVE9SWS1DdXN0b21lciIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImU3OTZlODMzLWFiNTItNDA5My1iYzRmLWVhZmIxZWUyMTYzNSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ3VzdG9tZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJyZWFkOnVzZXJzOmNvbnNlbnRzIHJlYWQ6cXVvdGVzIHdyaXRlOmFkdmlzb3JzIHdyaXRlOmFjY291bnQgcmVhZDpjb25zZW50cyByZWFkOnBheW1lbnRzIHJlYWQ6cG9saWNpZXM6Y29uc2VudHMgYWRtaW46d3JpdGU6YWNjb3VudCByZWFkOmRvY3VtZW50cyB3cml0ZTpxdW90ZXMgd3JpdGU6dXNlcnM6Y29uc2VudHMgd3JpdGU6Y2xhaW1zIHdyaXRlOnVzZXJzIHdyaXRlOnBvbGljaWVzOmNvbnNlbnRzIHJlYWQ6YWNjb3VudCB3cml0ZTpwYXltZW50cyBlbWFpbCByZWFkOnJpZGVycyB3cml0ZTphY2NvdW50OmNvbnNlbnRzIHdyaXRlOmRvY3VtZW50cyB3cml0ZTpjb25zZW50cyByZWFkOnVzZXJzIHJlYWQ6aW5mb3MgcmVhZDpwb2xpY2llcyByZWFkOmxlYWRzIHdyaXRlOnBvbGljaWVzIHByb2ZpbGUgdXNlcklkIHJlYWQ6YWR2aXNvcnMgd3JpdGU6bGVhZHMgd3JpdGU6Y2FzZXMgcmVhZDphY2NvdW50OmNvbnNlbnRzIHJlYWQ6Y2xhaW1zIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRhd2VlcG9ybiBEb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIyMDAwMDA0Nzg2ODciLCJnaXZlbl9uYW1lIjoiVGF3ZWVwb3JuIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJlbWFpbCI6InRhd2Vwb3JuLmRvZTFAZXhhbXBsZS5jb20iLCJwcm9maWxlc191c2VySWQiOiIyMDAwMDA0Nzg2ODcifQ.eqVvdweI_v0tvo6-SvVkl6xGgyHLzixN-9FtIMdON04M8e4n8NMX1OeScw5eYNdVZLVJAekPjuc8a1ZRua1GQzr9Pp4hMYOCm2Nqy439v7ZELVxlwz0GDWgIT6MEQwRE1wsKFGk8kY_2aJ_f1RpvGv_FpAxINz7kE5M4qUqrVfkvfBQ2284tbXwHmf_bGtgfSqzIIR6jYFmSLZ-v2Z6QwTckTF0v18aVl_cCRgBH0FA__nU5Girsl-m9hzOEHK6ttHvhPhAH-_3riPLuZcyxarQNW94CrJNlHf0y27u5tdSKJJS7tpNMSlfJLWnRcS6kf0ToTrFVMcajI2ZlVfK86g\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'post-/account/devices;security---token-signature-invalid',
        'keyword': 'Scenario',
        'line': 180,
        'name': 'Security - Token Signature Invalid',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 179
          },
          {
            'name': '@pvt',
            'line': 179
          },
          {
            'name': '@openapi',
            'line': 179
          },
          {
            'name': '@role-customer',
            'line': 179
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 181,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 182,
            'name': 'I need the scopes "read:account write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 183,
            'name': 'I have an invalid access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 184,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 185,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 186,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 25000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 187,
            'name': 'I should see a http code 401',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 188,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 189,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 190,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 191,
            'name': '"id" should be "334412"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 192,
            'name': '"code" should be 412',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 193,
            'name': '"message" should be "Invalid signature"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 194,
            'name': '"href" should be "https://developer.fwd.co.th/errors/412"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 195,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 196,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-deee0206-c48f-4df0-95b4-5856c6a9f0d5","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -X POST -H \'x-correlation-id: e2e-test-deee0206-c48f-4df0-95b4-5856c6a9f0d5\' -H \'authorization: Bearer invalid-access-token\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'post-/account/devices;security---token-unauthorized-scopes',
        'keyword': 'Scenario',
        'line': 200,
        'name': 'Security - Token Unauthorized Scopes',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 199
          },
          {
            'name': '@pvt',
            'line': 199
          },
          {
            'name': '@openapi',
            'line': 199
          },
          {
            'name': '@role-staff',
            'line': 199
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 201,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 202,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1055000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 203,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 204,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 205,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 33000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 206,
            'name': 'I should see a http code 403',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 207,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 208,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 209,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 210,
            'name': '"id" should be "334430"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 211,
            'name': '"code" should be 430',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 212,
            'name': '"message" should be "You are not allowed to consume the resource"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 213,
            'name': '"href" should be "https://developer.fwd.co.th/errors/430"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 214,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 215,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-be28f665-9a83-4caa-ba65-5b6b6bd8fe4e","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -X POST -H \'x-correlation-id: e2e-test-be28f665-9a83-4caa-ba65-5b6b6bd8fe4e\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMzAsImlhdCI6MTYxMzY0NjYzMCwianRpIjoiNzBlMTAyYmYtZmI5YS00YWI2LTgzYzktOGVhNjRmM2EwY2I0IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1zdGFmZiIsInNlc3Npb25fc3RhdGUiOiJhMGQ3YjA3Yy1iODlkLTQzNjUtYjlhYy01YzQxOWNhYTQwMzgiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiU3RhZmYiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImdlbmRlciI6Ik1BTEUiLCJuYW1lIjoiVGVzdGUyZSBBcGlmYWN0b3J5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgiLCJnaXZlbl9uYW1lIjoiVGVzdGUyZSIsInByb2ZpbGVzX3N0YWZmSWQiOiIwMDAwMiIsImZhbWlseV9uYW1lIjoiQXBpZmFjdG9yeSIsImVtYWlsIjoiYXBpX2ZhY3RvcnktdXNlci1yZWdpc3RlcmVkQHNjYmxpZmUuY28udGgifQ.M6W7aWL79wSHvDmSBmt0gWUVQ1It10vOxTZch0JHhsmrfG17Ze0xKkiFV4ZM-_ZGtZUdB3HGiXzESlPO3iTw9bUvE7_gPIIXXsYguN96oi7OvPwKVQgZGNR3V0aUZa1mg46gof1Y3OYNdvqWeAmSOp1wJiuW8OCT3srjWEyo43FlpJeNDRp61dFW43cE0PLVi6vQ599dNVQO32H1XidbHf6vLsA0YU_meHcDg-fskG60mNCqTtBdS32AX2wu2-efTIANJxAXUCh3Gu8fXy02xkOgta6d_EiD4bs4dq5C28BCED5xutPnLwrYp_vo9EZCGQnyIYER5v7ihlYj1rMuqQ\' -H \'accept: application/json\' -H \'content-length: 0\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'post-/account/devices;enabled-is-not-a-boolean',
        'keyword': 'Scenario',
        'line': 219,
        'name': 'Enabled is not a boolean',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 218
          },
          {
            'name': '@pvt',
            'line': 218
          },
          {
            'name': '@openapi',
            'line': 218
          },
          {
            'name': '@role-customer',
            'line': 218
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 220,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 221,
            'name': 'I need the scopes "read:account write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 222,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 965000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 223,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 224,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 225,
            'name': 'the payload contains "type" as "PHONE"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 226,
            'name': 'the payload contains "enabled" as "true"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 227,
            'name': 'the payload contains "externalId" as "355715565309247"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 228,
            'name': 'the payload contains "notificationToken" as "d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-..."',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 229,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 41000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 230,
            'name': 'I should see a http code 406',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 231,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 232,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 233,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 234,
            'name': '"id" should be "334462"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 235,
            'name': '"code" should be 462',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 236,
            'name': '"message" should be "The field enabled should be a boolean"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 237,
            'name': '"href" should be "https://developer.fwd.co.th/errors/462"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 238,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 239,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-eeb9d347-efcc-4224-8c7f-0b34373fc39a","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -H \'x-correlation-id: e2e-test-eeb9d347-efcc-4224-8c7f-0b34373fc39a\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMzEsImlhdCI6MTYxMzY0NjYzMSwianRpIjoiOTE5ZjIwOTctZTAyYS00YzNmLTg0NmQtNzBmZDA4YjViOTBkIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiJhMDlkNjgwYi1kMzgwLTRmOTMtOTQxNi0xODFlYmFhMWYyOGYiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IHdyaXRlOmRldmljZXMgZW1haWwgcGhvbmUgcHJvZmlsZSB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.fCMs1-foUuGhUVf9f1JIhzi9wn0CSvsM_JfWIBfrnJzsy7GADG596puJvRMsSrFzXetmGRPlt9DFp5a_66KX1z9TmW46C6t2Y8o2njT_RKqYTUVl9lflKaFqd9Pm1SQSxsqZJ2oSDV2m9miSGTw-hDBHeXkhcWEau7K1ScooQUjox3hOE9vqX33DwVFT4lr8_XDxXYtq4GtoI3Tq8qYuycQrCChaawGUUsQ2I7Gp2iI2Khbqhw_drHCJEXZQ-rnV6teeaHV6_KKMSbPRolcxAemf93IYUMBtGw7gaQMI6SfFPxleQoMOQBKAvTuPgLHFDpLiCI3eL_BOJ0HjCmcR2Q\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"PHONE\\",\\"enabled\\":\\"true\\",\\"externalId\\":\\"355715565309247\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'post-/account/devices;invalid-enum-(type)',
        'keyword': 'Scenario',
        'line': 243,
        'name': 'Invalid Enum (type)',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 242
          },
          {
            'name': '@pvt',
            'line': 242
          },
          {
            'name': '@openapi',
            'line': 242
          },
          {
            'name': '@role-customer',
            'line': 242
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 244,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 245,
            'name': 'I need the scopes "read:account write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 246,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1747000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 247,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 248,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 249,
            'name': 'the payload contains "type" as "Instagram"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 250,
            'name': 'the payload contains "enabled" as true',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 251,
            'name': 'the payload contains "externalId" as "355715565309247"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 252,
            'name': 'the payload contains "notificationToken" as "d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-..."',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 253,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 38000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 254,
            'name': 'I should see a http code 406',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 255,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 256,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 257,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 258,
            'name': '"id" should be "334463"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 259,
            'name': '"code" should be 463',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 260,
            'name': '"message" should be "The field type doesn\'t match the values: PHONE, TABLET, FACEBOOK, LINE"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 261,
            'name': '"href" should be "https://developer.fwd.co.th/errors/463"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 262,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 263,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-7a09e354-874c-4b61-85d9-90389b0e6442","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -H \'x-correlation-id: e2e-test-7a09e354-874c-4b61-85d9-90389b0e6442\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMzIsImlhdCI6MTYxMzY0NjYzMiwianRpIjoiNTU1OGM4MTYtNjY4Ny00YmEyLWFmNjAtZmZiYmFmZWJkNzE5IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiIxNGU4YjE2Zi00OThlLTQ3N2ItODYxZi04MjZjZDQ1OGFmNWEiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IHdyaXRlOmRldmljZXMgZW1haWwgcGhvbmUgcHJvZmlsZSB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.KBHVSJI_dRrxS0-3YzxRPSOmJFn6d80MQqdH2XFFWdd53yMxxRnCCkXRmCmALLYm19UWjMI5Zk50lf8CKjfYhj3BY5-Fg90uijb1iT__dhO4sVJFW6qDZCA4XvCuRkeGQhazSqpr74qJJalJglqhXb2Qwg-MZGzey7xmE6mMY1Y0Djr5mlGzUtst7kzoCgkGLVOFuTJfUFsoXJHqg-jGOkGQ7L4x7-YVvIHbkzP5t3Dg438zMcpvB0m1ze1eL_AZDSjExnLPxkGcVeIU7Ily9kALav0M00a6bZznkB8sjUNDTBxQM1Ee4rDGNsKpcheOdvXMY4Ea3ihiZIHU5UbBrw\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"Instagram\\",\\"enabled\\":true,\\"externalId\\":\\"355715565309247\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'post-/account/devices;type-is-missing',
        'keyword': 'Scenario',
        'line': 267,
        'name': 'Type is missing',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 266
          },
          {
            'name': '@pvt',
            'line': 266
          },
          {
            'name': '@openapi',
            'line': 266
          },
          {
            'name': '@role-customer',
            'line': 266
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 268,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 269,
            'name': 'I need the scopes "read:account write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 270,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1155000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 271,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 272,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 273,
            'name': 'the payload contains "enabled" as true',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 274,
            'name': 'the payload contains "externalld" as "355715565309247"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 275,
            'name': 'the payload contains "notificationToken" as "d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-..."',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 276,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 43000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 277,
            'name': 'I should see a http code 406',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 278,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 279,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 280,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 281,
            'name': '"id" should be "334461"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 282,
            'name': '"code" should be 461',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 283,
            'name': '"message" should be "The field type is mandatory"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 284,
            'name': '"href" should be "https://developer.fwd.co.th/errors/461"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 285,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 286,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-d5cfde01-7d63-46e8-8283-ecd0b9068bd0","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -H \'x-correlation-id: e2e-test-d5cfde01-7d63-46e8-8283-ecd0b9068bd0\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMzQsImlhdCI6MTYxMzY0NjYzNCwianRpIjoiYzYwMjkwOGEtM2I4ZS00YjU3LTg4ODUtYjZhNzhlY2JlYzg5IiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiJhMjM4YjZjMS0yNjU4LTQ0ZmUtYjJiYy03OTcxYjZlYjcxMzQiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IHdyaXRlOmRldmljZXMgZW1haWwgcGhvbmUgcHJvZmlsZSB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.RzW8kn88PYhidNP8oF98wqA8sWNb9xiLU2apTZwS-ykeXNGDHUhp6n2fsX6ELcWTPE_gwWHpNb2nGakBVH_2Cb6iqc8a4gKxxopaZ7ZwB29x54siGQ8x1NixrXiyDztlMG3VZwRrMJM4aRVuuQomQIuZdT52UkPNNqHqZiyFTjkIUERTeDoADNSdVzM-i310XWhEAZHBKEvF2bDRqO6xx1LPJC30zqlOtvlB7PNRi5LW1nwF0wVHfSKE6u6MAxPvt_azIUByek5_9LfpeF7CDqWCW5LU1KKzSUtlx3U9L3BCVZxchgT7ZfHkGKNyN4LuPe7qpHpmcIdDT-wwN-vldQ\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"enabled\\":true,\\"externalld\\":\\"355715565309247\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'post-/account/devices;enabled-is-missing',
        'keyword': 'Scenario',
        'line': 290,
        'name': 'Enabled is missing',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 289
          },
          {
            'name': '@pvt',
            'line': 289
          },
          {
            'name': '@openapi',
            'line': 289
          },
          {
            'name': '@role-customer',
            'line': 289
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 291,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 292,
            'name': 'I need the scopes "read:account write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 293,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 954000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 294,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 295,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 296,
            'name': 'the payload contains "type" as "LINE"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 297,
            'name': 'the payload contains "externalld" as "355715565309247"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 298,
            'name': 'the payload contains "notificationToken" as "d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-..."',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 299,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 38000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 300,
            'name': 'I should see a http code 406',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 301,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 302,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 303,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 304,
            'name': '"id" should be "334461"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 305,
            'name': '"code" should be 461',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 306,
            'name': '"message" should be "The field enabled is mandatory"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 307,
            'name': '"href" should be "https://developer.fwd.co.th/errors/461"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 308,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 309,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-460c5a5c-76c7-4e96-a90d-dd3cb07a92a6","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -H \'x-correlation-id: e2e-test-460c5a5c-76c7-4e96-a90d-dd3cb07a92a6\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMzUsImlhdCI6MTYxMzY0NjYzNSwianRpIjoiZmEyYTgzYzItYTNiMi00ZGVkLThkZWQtMWFlZTMzNWRmOWUzIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI4ZjdhNTVlNC05YTE5LTQ1N2MtODA5Ni0wNWQ4ZWY0OWIxNmQiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IHdyaXRlOmRldmljZXMgZW1haWwgcGhvbmUgcHJvZmlsZSB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.cNjkvtE7LROPWlNzw2Tuh75dPADOWK0tEvX18sInlJl3a9dM861ajtTOzbFsNuYTI6HlcnmeD5K7YJYk44YbcJMNV9dugtf2e7ZmDAx38-81RedHUYqLjaMHXK15KQ0NWgxCWIiuGnyMe8M_-qmWFN_Gvbks-Vj4cMnRh4jdgEkoooHFmbcIK0-bxk41HCr16l0REVFM1vsCmHcRudhp7x2Qp7iol_VpUl5a057n6a-E672tj1NfOh9p4-x2Txdb83p1C9Gb_zmDmelcoq8H9SJ4iR1mAuGG0wQpZF4PVxuiWx3nKoMlKSWsvSuWcBvrf1dv_86eVaLu0BdwUmiYcA\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"LINE\\",\\"externalld\\":\\"355715565309247\\",\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'post-/account/devices;external-id-is-missing',
        'keyword': 'Scenario',
        'line': 313,
        'name': 'External Id is missing',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 312
          },
          {
            'name': '@pvt',
            'line': 312
          },
          {
            'name': '@openapi',
            'line': 312
          },
          {
            'name': '@role-customer',
            'line': 312
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 314,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 315,
            'name': 'I need the scopes "read:account write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 316,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1472000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 317,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 318,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 319,
            'name': 'the payload contains "type" as "PHONE"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 320,
            'name': 'the payload contains "enabled" as true',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 321,
            'name': 'the payload contains "notificationToken" as "d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-..."',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 322,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 34000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 323,
            'name': 'I should see a http code 406',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 324,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 325,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 326,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 327,
            'name': '"id" should be "334461"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 328,
            'name': '"code" should be 461',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 329,
            'name': '"message" should be "The field externalId is mandatory"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 330,
            'name': '"href" should be "https://developer.fwd.co.th/errors/461"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 331,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 332,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-fd07a50e-9a25-452b-93c7-94dd06a15727","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -H \'x-correlation-id: e2e-test-fd07a50e-9a25-452b-93c7-94dd06a15727\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMzYsImlhdCI6MTYxMzY0NjYzNiwianRpIjoiMjg5NjMzNmMtZDBkNi00NTQyLTk1ZGItZjhhNGQ2ZTMwNDUzIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI1OTRkMzJkNS1iODViLTQzMjAtYmFiNS03YzE5OGM1NDJhMTciLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IHdyaXRlOmRldmljZXMgZW1haWwgcGhvbmUgcHJvZmlsZSB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.XSXtJ_VsxM65oxV_I8KuQ6N30Uupm7saCbxiMW6nhYsA8rr1NaEeUYkHjWUx1SVgQA2Z604g60Y5vXMpwqJ2nq5Fxd5tdIRwbxoGLDTPVPnZ6U3V5Nw6_l26BHKVoDLWwdEK8HFGvNF__rWuRosJq4RC2WHttWdoFVOlKiZ2W0bWHJN1ELNFqbGogrbk579PjXrJPc-5D-4773UWYJtU-2HKMENKXB-Moap30-q7qvWaGDpfezI-Hqgh88RDDI0QTYBV5v-MHAmU__vK76spVn4h5eK2ximZnD4s95Glha9vlN1v1S_E9-cy2ejJEPZGIml0qQZsQaEsK18l-ZEvQg\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"PHONE\\",\\"enabled\\":true,\\"notificationToken\\":\\"d4oeH_TtOio:APA91bH06uSM5CPHJO9Ul1__Y58llpqtf8-...\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      },
      {
        'id': 'post-/account/devices;notificationtoken-is-missing',
        'keyword': 'Scenario',
        'line': 336,
        'name': 'NotificationToken is missing',
        'tags': [
          {
            'name': '@userstories-16',
            'line': 1
          },
          {
            'name': '@success',
            'line': 335
          },
          {
            'name': '@pvt',
            'line': 335
          },
          {
            'name': '@openapi',
            'line': 335
          },
          {
            'name': '@role-customer',
            'line': 335
          }
        ],
        'type': 'scenario',
        'steps': [
          {
            'keyword': 'Before',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:11'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Given ',
            'line': 337,
            'name': 'I have the api gateway',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 338,
            'name': 'I need the scopes "read:account write:devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 339,
            'name': 'I have an access token',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1159000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 340,
            'name': 'I have the path "/account/devices"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 1000000
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 341,
            'name': 'I have the method "POST"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 342,
            'name': 'the payload contains "type" as "PHONE"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 343,
            'name': 'the payload contains "enabled" as true',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 344,
            'name': 'the payload contains "externalId" as "355715565309247"',
            'match': {
              'location': 'src/step_definitions/api.js:7'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'When ',
            'line': 345,
            'name': 'I call the API',
            'match': {
              'location': 'src/step_definitions/api.js:14'
            },
            'result': {
              'status': 'passed',
              'duration': 29000000
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 346,
            'name': 'I should see a http code 406',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 347,
            'name': '"x-correlation-id" should be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 348,
            'name': '"User-Agent" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 349,
            'name': '"X-Cache" should not be on the response header',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 350,
            'name': '"id" should be "334461"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 351,
            'name': '"code" should be 461',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 352,
            'name': '"message" should be "The field notificationToken is mandatory"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 353,
            'name': '"href" should be "https://developer.fwd.co.th/errors/461"',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'And ',
            'line': 354,
            'name': 'the response time is under 2000 ms',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'arguments': [],
            'keyword': 'Then ',
            'line': 355,
            'name': 'clean',
            'match': {
              'location': 'src/step_definitions/api.js:22'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            }
          },
          {
            'keyword': 'After',
            'hidden': true,
            'match': {
              'location': 'src/step_definitions/hooks.js:53'
            },
            'result': {
              'status': 'passed',
              'duration': 0
            },
            'embeddings': [
              {
                'data': '{"logId":"e2e-test-217ce604-f529-4a3c-9873-96a93c6f215e","curl":"curl \'https://openapi.uat.fwd.co.th/account/devices\' -H \'x-correlation-id: e2e-test-217ce604-f529-4a3c-9873-96a93c6f215e\' -H \'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJKVDM5MnBrX1JKT1IxNlVLcy03QThBZkJVN190dDJqdGNEQzc3MWRiV3NFIn0.eyJleHAiOjE2MTM2NDcyMzcsImlhdCI6MTYxMzY0NjYzNywianRpIjoiNjM3NjQ5OTAtMDAwZS00MWM4LTkwNDAtMmUzYjFhMjFjN2FjIiwiaXNzIjoiaHR0cHM6Ly9pYW0udWF0LmZ3ZC5jby50aC9hdXRoL3JlYWxtcy9zY2JsaWZlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjJiMWFlYWM1LWI1NDUtNDRlNC05OGVkLWI2OWVmM2YwODUzYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImUyZS1jdXN0b21lciIsInNlc3Npb25fc3RhdGUiOiI5MzY2M2VkYi03ZjA0LTQ1NWQtYTY2Ny1hMGFjZDkzZjM1Y2EiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlZlcmlmaWVkIiwiQ3VzdG9tZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImFkZHJlc3MgcmVhZDphY2NvdW50IHdyaXRlOmRldmljZXMgZW1haWwgcGhvbmUgcHJvZmlsZSB1c2VySWQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImFkZHJlc3MiOnt9LCJnZW5kZXIiOiJNQUxFIiwibmFtZSI6IlRlc3RlMmUgQXBpZmFjdG9yeSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwiZ2l2ZW5fbmFtZSI6IlRlc3RlMmUiLCJmYW1pbHlfbmFtZSI6IkFwaWZhY3RvcnkiLCJlbWFpbCI6ImFwaV9mYWN0b3J5LXVzZXItcmVnaXN0ZXJlZEBzY2JsaWZlLmNvLnRoIiwicHJvZmlsZXNfdXNlcklkIjoiMjAwMDAyOTU0OTgyIn0.GkzBnMPEQrKnYiQ1HQItWKzCO7qNjfqhWruiMSPXX8TFTNUYoUvM_9nRrUet_HwjrbocQvA4aDDnC1U0I9SDuAfEpyEEs3Ypeet7nQhn5DjKWA6oQDGjaZ215NsTLheaahvVWhIcTUBeGzw6gxcg-Prl25WR_cRIGV2GaFRrQmIBZiAG-kJg6wKRr_jCVySx22kfj2nuRCiC3HrN9XtDd0O4naeEurQWRTmVtiz5gZfTaJJnzwG4l_kX86t-4Q1jGjUxo9oizOTG3A9aImNXobmlpOX8uUwkGcq2sUWDfhB-_F2TRGAIqIOZhPGEEn-wilnjfJSG50QYOvb9c8p1Lw\' -H \'accept: application/json\' -H \'content-type: application/json\' --data-binary \'{\\"type\\":\\"PHONE\\",\\"enabled\\":true,\\"externalId\\":\\"355715565309247\\"}\' --compressed","skipped":false}',
                'mime_type': 'application/json'
              }
            ]
          }
        ]
      }
    ]
  }
]
