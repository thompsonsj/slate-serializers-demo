export const initialValue: any[] = [
  {
      "children": [
          {
              "text": "slateToHtml"
          }
      ],
      "type": "h2"
  },
  {
      "children": [
          {
              "text": "Demo"
          }
      ],
      "type": "h3"
  },
  {
      "type": "p",
      "children": [
          {
              "text": "Try changing the contents of this editor. The rest of the page updates as you make changes to demonstrate:"
          }
      ]
  },
  {
      "type": "ul",
      "children": [
          {
              "children": [
                  {
                      "text": "the Slate JSON value;"
                  }
              ],
              "type": "li"
          },
          {
              "type": "li",
              "children": [
                  {
                      "text": "serialized HTML; and"
                  }
              ]
          },
          {
              "type": "li",
              "children": [
                  {
                      "text": "re-serialized Slate JSON from the serialized HTML using "
                  },
                  {
                      "text": "htmlToSlate",
                      "code": true
                  },
                  {
                      "text": "."
                  }
              ]
          }
      ]
  },
]
