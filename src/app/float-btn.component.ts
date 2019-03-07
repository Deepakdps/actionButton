import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {
  GestureEventData,
  TouchGestureEventData
} from 'tns-core-modules/ui/gestures/gestures';

@Component({
  selector: 'ns-float',
  moduleId: module.id,
  template: `
    <StackLayout
      class="float-btn"
      (touch)="onTouch($event)"
      (tap)="onTap($event)"
    >
      <Label class="float-btn-text" [text]="text"></Label>
    </StackLayout>
  `,
  styles: [
    `
      .float-btn {
        background-color: #fc2525;
        border-radius: 28;
        width: 50;
        height: 50;
        text-align: center;
        vertical-align: middle;
      }
      .float-btn.down {
        animation-name: down;
        animation-duration: 0.1ms;
        animation-fill-mode: forwards;
      }

      .float-btn-text {
        color: #ffffff;
        font-size: 36;
        margin-top: -4;
      }

      @keyframes down {
        from {
          background-color: #fc2525;
        }
        to {
          background-color: black;
        }
      }
    `
  ]
})
export class FloatBtnComponent {
  @Output() taphere: EventEmitter<GestureEventData> = new EventEmitter<
    GestureEventData
  >();
  @Input() text: String;

  public onTap(args: GestureEventData) {
    console.log('tapeddddddddddddddddd');
    this.taphere.emit(args);
  }

  public onTouch(args: TouchGestureEventData) {
    let btn = args.view;
    switch (args.action) {
      case 'down':
        btn.className = 'float-btn down';
        break;
      case 'up':
        btn.className = 'float-btn ';
        break;
    }
  }
}
