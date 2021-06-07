import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    @Input()
    open = true;
    @Output()
    openChange = new EventEmitter<boolean>();

    constructor() { }

    toggle() {
        this.openChange.emit(!this.open);
    }
}
