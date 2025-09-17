import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vc-logs',
  standalone: true,
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss'],
  imports: [CommonModule]
 
})
export class VcLogsComponent {
  private _vName: string = '';

  @Input()
  set vName(name: string) {
    if (!name) return;
    if (!this._vName){
      this.logs.push(`initial version is ${name.trim()}`)
    } else {
      this.logs.push(`version changed to ${name.trim()}`)
    }
    this._vName = name;
  }
  get vName(): string {
    return this._vName;
  }

  logs: string[] = [];
 
}
