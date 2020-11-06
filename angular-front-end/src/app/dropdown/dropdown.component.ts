import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../interfaces';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
    @Input() type: string;
    @Input() options: Option[];
    selected: Option;
    @Output() changed = new EventEmitter<Option>();
    constructor() { }

    ngOnInit(): void {
    }

    onChange(): void {
        this.changed.emit(this.selected);
    }

}
