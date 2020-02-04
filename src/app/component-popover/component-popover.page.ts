import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ComponentPopoverInternoComponent } from '../component-popover-interno/component-popover-interno.component';

@Component({
  selector: 'app-component-popover',
  templateUrl: './component-popover.page.html',
  styleUrls: ['./component-popover.page.scss'],
})
export class ComponentPopoverPage implements OnInit {

  constructor(private popoverCtrl : PopoverController) { }

  ngOnInit() {
  }
 async showPopover(event: any){
  let popover = await this.popoverCtrl.create({
    component: ComponentPopoverInternoComponent,
    event:event,
    mode:"md"
    
  });
  return await popover.present();
  }

  async showPopoverTrans(event: any){
    let popover = await this.popoverCtrl.create({
      component: ComponentPopoverInternoComponent,
      event:event,
      translucent: true,
      mode:"ios"
    });
    return await popover.present();
    }
}
