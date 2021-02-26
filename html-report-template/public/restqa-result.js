/*
 * *****************************************************************************************
 * *****************************************************************************************
 * *****************************************************************************************
 * *****************************************************************************************
 *
 * THIS FILE IS USED FOR DEVELOPMENT PURPOSED ONLY
 *
 * *****************************************************************************************
 * *****************************************************************************************
 * *****************************************************************************************
 * *****************************************************************************************
 * */


window.RESTQA_RESULT = {
  "id": "3bb63b07-d80c-4576-8922-73faa08f48fa",
  "startTime": "2021-02-26T04:01:04+00:00",
  "name": "Payment API",
  "key": "PAY-API",
  "env": "uat",
  "duration": 12.015,
  "success": false,
  "durationFormat": "00:00",
  "timestamp": "2021-02-26T04:01:04+00:00",
  "type": "testSuite",
  "total": 2,
  "passed": 0,
  "failed": 2,
  "scenarios": {
    "passed": 0,
    "failed": 4,
    "skipped": 0,
    "undefined": 0
  },
  "features": [
    {
      "keyword": "Feature",
      "line": 1,
      "id": "as-a-user-i-can-manage-my-account",
      "tags": [],
      "uri": "features/test.feature",
      "elements": [
        {
          "id": "as-a-user-i-can-manage-my-account;access-to-my-account-from-the-dashboad-page",
          "keyword": "Scenario",
          "line": 3,
          "name": "Access to my account from the dashboad page",
          "tags": [],
          "type": "scenario",
          "steps": [
            {
              "arguments": [],
              "keyword": "Given ",
              "line": 4,
              "name": "I have the dashboard page",
              "match": {
                "location": "features/setup.js:7"
              },
              "result": {
                "status": "passed",
                "duration": 3006000000
              }
            },
            {
              "arguments": [],
              "keyword": "When ",
              "line": 5,
              "name": "I click on my account",
              "match": {
                "location": "features/setup.js:11"
              },
              "result": {
                "status": "failed",
                "duration": 0,
                "error_message": "Error: The button my button hasn't been found\n    at World.<anonymous> (/usr/src/app/features/setup.js:12:9)"
              }
            },
            {
              "arguments": [],
              "keyword": "Then ",
              "line": 6,
              "name": "The title of the page should be \"My account\"",
              "match": {
                "location": "features/setup.js:15"
              },
              "result": {
                "status": "skipped"
              }
            },
            {
              "arguments": [],
              "keyword": "And ",
              "line": 7,
              "name": "this is whut ?",
              "result": {
                "status": "undefined"
              }
            }
          ],
          "step_passed": 1,
          "step_failed": 1,
          "step_skipped": 1,
          "step_undefined": 1,
          "result": false,
          "status": "failed",
          "duration": 3.006,
          "timestamp": "2021-02-26T04:01:04+00:00",
          "metadata": {
            "id": "3bb63b07-d80c-4576-8922-73faa08f48fa",
            "startTime": "2021-02-26T04:01:04+00:00",
            "name": "Payment API",
            "key": "PAY-API",
            "env": "uat",
            "duration": 12.015,
            "success": false,
            "durationFormat": "00:00"
          }
        },
        {
          "id": "as-a-user-i-can-manage-my-account;access-to-my-account-from-the-menu",
          "keyword": "Scenario",
          "line": 9,
          "name": "Access to my account from the menu",
          "tags": [],
          "type": "scenario",
          "steps": [
            {
              "arguments": [],
              "keyword": "Given ",
              "line": 10,
              "name": "I have the dashboard page",
              "match": {
                "location": "features/setup.js:7"
              },
              "result": {
                "status": "passed",
                "duration": 3002000000
              }
            },
            {
              "arguments": [],
              "keyword": "When ",
              "line": 11,
              "name": "I click on my account",
              "match": {
                "location": "features/setup.js:11"
              },
              "result": {
                "status": "failed",
                "duration": 1000000,
                "error_message": "Error: The button my button hasn't been found\n    at World.<anonymous> (/usr/src/app/features/setup.js:12:9)"
              }
            },
            {
              "arguments": [],
              "keyword": "Then ",
              "line": 12,
              "name": "The title of the page should be \"My account\"",
              "match": {
                "location": "features/setup.js:15"
              },
              "result": {
                "status": "skipped"
              }
            }
          ],
          "step_passed": 1,
          "step_failed": 1,
          "step_skipped": 1,
          "step_undefined": 0,
          "result": false,
          "status": "failed",
          "duration": 3.003,
          "timestamp": "2021-02-26T04:01:04+00:00",
          "metadata": {
            "id": "3bb63b07-d80c-4576-8922-73faa08f48fa",
            "startTime": "2021-02-26T04:01:04+00:00",
            "name": "Payment API",
            "key": "PAY-API",
            "env": "uat",
            "duration": 12.015,
            "success": false,
            "durationFormat": "00:00"
          }
        }
      ],
      "total": 2,
      "passed": 0,
      "failed": 2,
      "skipped": 0,
      "undefined": 0,
      "result": false,
      "duration": 6.009,
      "timestamp": "2021-02-26T04:01:04+00:00",
      "type": "feature",
      "feature_name": "As a user i can manage my account",
      "metadata": {
        "id": "3bb63b07-d80c-4576-8922-73faa08f48fa",
        "startTime": "2021-02-26T04:01:04+00:00",
        "name": "Payment API",
        "key": "PAY-API",
        "env": "uat",
        "duration": 12.015,
        "success": false,
        "durationFormat": "00:00"
      }
    },
    {
      "keyword": "Feature",
      "line": 1,
      "id": "as-a-user-i-can-manage-my-orders",
      "tags": [],
      "uri": "features/test2.feature",
      "elements": [
        {
          "id": "as-a-user-i-can-manage-my-orders;access-to-my-orders-from-the-dashboad-page",
          "keyword": "Scenario",
          "line": 3,
          "name": "Access to my orders from the dashboad page",
          "tags": [],
          "type": "scenario",
          "steps": [
            {
              "arguments": [],
              "keyword": "Given ",
              "line": 4,
              "name": "I have the dashboard page",
              "match": {
                "location": "features/setup.js:7"
              },
              "result": {
                "status": "passed",
                "duration": 3002000000
              }
            },
            {
              "arguments": [],
              "keyword": "When ",
              "line": 5,
              "name": "I click on my account",
              "match": {
                "location": "features/setup.js:11"
              },
              "result": {
                "status": "failed",
                "duration": 1000000,
                "error_message": "Error: The button my button hasn't been found\n    at World.<anonymous> (/usr/src/app/features/setup.js:12:9)"
              }
            },
            {
              "arguments": [],
              "keyword": "Then ",
              "line": 6,
              "name": "The title of the page should be \"My account\"",
              "match": {
                "location": "features/setup.js:15"
              },
              "result": {
                "status": "skipped"
              }
            }
          ],
          "step_passed": 1,
          "step_failed": 1,
          "step_skipped": 1,
          "step_undefined": 0,
          "result": false,
          "status": "failed",
          "duration": 3.003,
          "timestamp": "2021-02-26T04:01:04+00:00",
          "metadata": {
            "id": "3bb63b07-d80c-4576-8922-73faa08f48fa",
            "startTime": "2021-02-26T04:01:04+00:00",
            "name": "Payment API",
            "key": "PAY-API",
            "env": "uat",
            "duration": 12.015,
            "success": false,
            "durationFormat": "00:00"
          }
        },
        {
          "id": "as-a-user-i-can-manage-my-orders;access-to-my-orders-from-the-menu",
          "keyword": "Scenario",
          "line": 8,
          "name": "Access to my orders from the menu",
          "tags": [],
          "type": "scenario",
          "steps": [
            {
              "arguments": [],
              "keyword": "Given ",
              "line": 9,
              "name": "I have the dashboard page",
              "match": {
                "location": "features/setup.js:7"
              },
              "result": {
                "status": "passed",
                "duration": 3002000000
              }
            },
            {
              "arguments": [],
              "keyword": "When ",
              "line": 10,
              "name": "I click on my account",
              "match": {
                "location": "features/setup.js:11"
              },
              "result": {
                "status": "failed",
                "duration": 1000000,
                "error_message": "Error: The button my button hasn't been found\n    at World.<anonymous> (/usr/src/app/features/setup.js:12:9)"
              }
            }
          ],
          "step_passed": 1,
          "step_failed": 1,
          "step_skipped": 0,
          "step_undefined": 0,
          "result": false,
          "status": "failed",
          "duration": 3.003,
          "timestamp": "2021-02-26T04:01:04+00:00",
          "metadata": {
            "id": "3bb63b07-d80c-4576-8922-73faa08f48fa",
            "startTime": "2021-02-26T04:01:04+00:00",
            "name": "Payment API",
            "key": "PAY-API",
            "env": "uat",
            "duration": 12.015,
            "success": false,
            "durationFormat": "00:00"
          }
        }
      ],
      "total": 2,
      "passed": 0,
      "failed": 2,
      "skipped": 0,
      "undefined": 0,
      "result": false,
      "duration": 6.006,
      "timestamp": "2021-02-26T04:01:04+00:00",
      "type": "feature",
      "feature_name": "As a user i can manage my orders",
      "metadata": {
        "id": "3bb63b07-d80c-4576-8922-73faa08f48fa",
        "startTime": "2021-02-26T04:01:04+00:00",
        "name": "Payment API",
        "key": "PAY-API",
        "env": "uat",
        "duration": 12.015,
        "success": false,
        "durationFormat": "00:00"
      }
    }
  ]
}
