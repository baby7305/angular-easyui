import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-icon',
  templateUrl: './node-icon.component.html',
  styleUrls: ['./node-icon.component.css']
})
export class NodeIconComponent implements OnInit {

  selection: any = null;
  data: any[] = [{
    "id": 1,
    "text": "My Documents",
    "children": [{
      "id": 11,
      "text": "Photos",
      "state": "closed",
      "children": [{
        "id": 111,
        "text": "Friend"
      }, {
        "id": 112,
        "text": "Wife"
      }, {
        "id": 113,
        "text": "Company"
      }]
    }, {
      "id": 12,
      "text": "Program Files",
      "state": "closed",
      "children": [{
        "id": 121,
        "text": "Intel"
      }, {
        "id": 122,
        "text": "Java"
      }, {
        "id": 123,
        "text": "Microsoft Office"
      }, {
        "id": 124,
        "text": "Games"
      }]
    }, {
      "id": 16,
      "text": "Actions",
      "children": [{
        "text": "Add",
        "iconCls": "icon-add"
      }, {
        "text": "Remove",
        "iconCls": "icon-remove"
      }, {
        "text": "Save",
        "iconCls": "icon-save"
      }, {
        "text": "Search",
        "iconCls": "icon-search"
      }]
    }, {
      "id": 13,
      "text": "index.html"
    }, {
      "id": 14,
      "text": "about.html"
    }, {
      "id": 15,
      "text": "welcome.html"
    }]
  }]

  constructor() { }

  ngOnInit() {
  }

}
