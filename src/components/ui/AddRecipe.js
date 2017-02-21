import { Component } from 'react'
import Form from "react-jsonschema-form";
import '../../styles/bootstrap.min.css'

class AddRecipe extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "blurb": {
      "type": "string"
    },
    "id": {
      "type": "integer"
    },
    "date": {
      "type": "string"
    },
    "ingredients": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "quantity": {
            "type": "integer"
          },
          "unit": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        },
        "required": [
          "quantity",
          "unit",
          "type"
        ]
      }
    },
    "images": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        },
        "required": [
          "url",
          "type"
        ]
      }
    },
    "method": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "tags": {
      "type": "object",
      "properties": {
        "taste": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "size": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "type": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "taste",
        "size",
        "type"
      ]
    }
  },
  "required": [
    "name",
    "blurb",
    "id",
    "date",
    "ingredients",
    "images",
    "method",
    "tags"
  ]
};

    const log = (type) => console.log.bind(console, type);
    const onSubmit = ({formData}) => console.log(formData);

    return (
      <div className="page">
          <div>
              <h1>Add new recipe</h1>
              <Form schema={schema}
                    onChange={log("changed")}
                    onSubmit={onSubmit}
                    onError={log("errors")} />
          </div>
      </div>
    )
  }
}

export default AddRecipe
