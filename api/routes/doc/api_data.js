define({ "api": [
  {
    "type": "delete",
    "url": "/role/:id",
    "title": "Delete Role Record By ID",
    "name": "DeleteRoleID",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Role's Unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Record deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"Message\": \"Record deleted\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Message",
            "description": "<p>Searching for record</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Record",
            "description": "<p>There is no record by that id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 OK\n{\n  \"Message\": \"Searching for record\"\n  \"Record\": \"There is no record by that id\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./role.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/role/:id",
    "title": "Request Role Record By ID",
    "name": "GetRoleID",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Role's Unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Searching for record</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Record",
            "description": "<p>JSON data of the record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"Message\": \"Searching for record\",\n      \"Record\": {\n                  \"role_name\": \"Admin\",\n                  \"role_status\": \"Active\"   \n                 }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Message",
            "description": "<p>Searching for record</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Record",
            "description": "<p>There is no record by that id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 OK\n{\n  \"Message\": \"Searching for record\"\n  \"Record\": \"There is no record by that id\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./role.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/role/",
    "title": "Request All User's Records",
    "name": "GetRoles",
    "group": "Role",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>List of all records in the database</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Records",
            "description": "<p>JSON list of all records in the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"Message\": \"List of all records in the database\",\n      \"Records\": {\n                  \"role_name\": \"Admin\",\n                  \"role_status\": \"Active\"\n                 }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Message",
            "description": "<p>There are no records in the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 OK\n{\n  \"Message\": \"There are no records in the database\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./role.js",
    "groupTitle": "Role"
  },
  {
    "type": "patch",
    "url": "/role/:id",
    "title": "Update Role Record By ID",
    "name": "PatchRoleID",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's Unique ID</p>"
          }
        ],
        "Request Body Fields": [
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": false,
            "field": "role_name",
            "description": "<p>Role of the user</p>"
          },
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": true,
            "field": "role_status",
            "description": "<p>Current status of role of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Record Updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"Message\": \"Record Updated\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Message",
            "description": "<p>Updating record</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Record",
            "description": "<p>There is no record by that id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 OK\n{\n  \"Message\": \"Updating record\"\n  \"Record\": \"There is no record by that id\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./role.js",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/role/",
    "title": "Provide Role Record",
    "name": "PostRoles",
    "group": "Role",
    "parameter": {
      "fields": {
        "Request Body Fields": [
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": false,
            "field": "role_name",
            "description": "<p>Name of role of the user</p>"
          },
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": true,
            "field": "role_status",
            "description": "<p>Current status of the role</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>New user created</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Record",
            "description": "<p>JSON of the role record in database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"Message\": \"New role created\",\n      \"Record\": {\n                  \"role_name\": \"Admin\",\n                  \"role_status\": \"Active\"\n                 }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Message",
            "description": "<p>Error while inserting record</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Input",
            "description": "<p>role_name cannot be null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 OK\n{\n  \"Message\": \"Error while inserting record\",\n  \"Input\": \"role_name cannot be null\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./role.js",
    "groupTitle": "Role"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete User Record By ID",
    "name": "DeleteUserID",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's Unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Record deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"Message\": \"Record deleted\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Message",
            "description": "<p>Searching for record</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Record",
            "description": "<p>There is no record by that id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 OK\n{\n  \"Message\": \"Searching for record\"\n  \"Record\": \"There is no record by that id\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request User Record By ID",
    "name": "GetUserID",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's Unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Searching for record</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Record",
            "description": "<p>JSON data of the record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"Message\": \"Searching for record\",\n      \"Record\": {\n                  \"user_ email\": \"email1\",\n                  \"user_phone\": \"9500623044\"\n                  \"user_password\": \"Ae512xx59qwe0\"\n                  \"user_activation_code\": \"ACTIVATE1\"\n                  \"user_status\": \"inactive\"\n                 }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Message",
            "description": "<p>Searching for record</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Record",
            "description": "<p>There is no record by that id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 OK\n{\n  \"Message\": \"Searching for record\"\n  \"Record\": \"There is no record by that id\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "Request All User's Records",
    "name": "GetUsers",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>List of all records in the database</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Records",
            "description": "<p>JSON list of all records in the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"Message\": \"List of all records in the database\",\n      \"Records\": {\n                  \"user_ email\": \"email1\",\n                  \"user_phone\": \"9500623044\"\n                  \"user_password\": \"Ae512xx59qwe0\"\n                  \"user_activation_code\": \"ACTIVATE1\"\n                  \"user_status\": \"inactive\"\n                 }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Message",
            "description": "<p>There are no records in the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 OK\n{\n  \"Message\": \"There are no records in the database\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/user/:id",
    "title": "Update User Record By ID",
    "name": "PatchUserID",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's Unique ID</p>"
          }
        ],
        "Request Body Fields": [
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": true,
            "field": "user_email",
            "description": "<p>User email address</p>"
          },
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": true,
            "field": "user_phone",
            "description": "<p>User phone number</p>"
          },
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": false,
            "field": "user_password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>Record updated with hashed password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"Message\": \"Record updated with hashed password\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Message",
            "description": "<p>Searching for record</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Record",
            "description": "<p>There is no record by that id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 OK\n{\n  \"Message\": \"Searching for record\"\n  \"Record\": \"There is no record by that id\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "Provide User Record",
    "name": "PostUsers",
    "group": "User",
    "parameter": {
      "fields": {
        "Request Body Fields": [
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": true,
            "field": "user_email",
            "description": "<p>User email address</p>"
          },
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": true,
            "field": "user_phone",
            "description": "<p>User phone number</p>"
          },
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": false,
            "field": "user_password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>New user created</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Record",
            "description": "<p>JSON of the user record in database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"Message\": \"New user created\",\n      \"Record\": {\n                  \"user_ email\": \"email1\",\n                  \"user_phone\": \"9500623044\"\n                  \"user_password\": \"Ae512xx59qwe0\"\n                  \"user_activation_code\": \"ACTIVATE1\"\n                 }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Message",
            "description": "<p>Error while inserting record</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Input",
            "description": "<p>user_password cannot be null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 OK\n{\n  \"Message\": \"Error while inserting record\",\n  \"Input\": \"user_password cannot be null\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user.js",
    "groupTitle": "User"
  }
] });
