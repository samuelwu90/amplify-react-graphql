export const schema = {
    "models": {
        "Input": {
            "name": "Input",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "gleason": {
                    "name": "gleason",
                    "isArray": false,
                    "type": {
                        "enum": "YesNo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "histology": {
                    "name": "histology",
                    "isArray": false,
                    "type": {
                        "enum": "YesNo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "visceral_metastases": {
                    "name": "visceral_metastases",
                    "isArray": false,
                    "type": {
                        "enum": "YesNo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "family_history": {
                    "name": "family_history",
                    "isArray": false,
                    "type": {
                        "enum": "YesNo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "bone_metastases": {
                    "name": "bone_metastases",
                    "isArray": false,
                    "type": {
                        "enum": "YesNo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ln_metastases": {
                    "name": "ln_metastases",
                    "isArray": false,
                    "type": {
                        "enum": "YesNo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Inputs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "YesNo": {
            "name": "YesNo",
            "values": [
                "YES",
                "NO"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.3.6",
    "version": "38654fbc4f326f4e448c0e5e00566b21"
};