import { Component, ElementRef, Input, Renderer, HostListener } from '@angular/core';


/**
 * @name FabToolbar
 * @description
 * FabToolbar is Ionic v2 component which uses ionic fab buttons, buttons. Inspired by Google's Material Design
 *
 * On click Fab button will transform into tab like area with provided buttons
 *
 * @usage
 * ```html - simply add below tag and bind options property
 * <ekhmoi-fab-toolbar [options]="options"></ekhmoi-fab-toolbar>
 * ```
 * 
 * ```javascript - starting from Ionic 2 RC0.0 (AoT) you should provide all components inside app.module.ts 
 *                 after adding them into app.module.ts import EkhmoiFabToolbar
 * import { EkhmoiFabToolbar } from './fab-toolbar/fab-toolbar';
 * public options = {
 *      color: 'secondary',
 *      icon: 'more',
 *      button: [{icon: 'add', handler: () => {console.log('added');}}]
 * };
 * ```
 *
 * @see {@link https://github.com/ekhmoi/Ionic-Component-fab-toolbar Ionic-Component-fab-toolbar}
 *
 */

@Component({ 
    selector: 'ekhmoi-fab-toolbar',
    template: `
        <div class="ekhmoi-fab-toolbar">
            <ion-row [style.transform]="">
                <ion-col *ngFor="let b of options.buttons">
                    <button (click)="click(b)" ion-button clear color="light" icon-only><ion-icon name="{{b.icon}}"></ion-icon></button>
                </ion-col>
            </ion-row>
            <button [style.transform]="active ? calculateWidth() : 'scale(1)' "ion-fab color="{{options.color}}"><ion-icon name="{{options.icon}}"></ion-icon></button>
        </div>
        `
})

export class EkhmoiFabToolbar {
    
    public _options: any = {};
    public active: boolean = false;
    constructor(public el: ElementRef, public renderer: Renderer) {}

    @Input() options = {
        color: 'secondary',
        icon: 'more',
        cssClass: '',
        buttons: [],
        enableBackdropDismiss: true
    };

    @HostListener('click') onClick(): void {
        this.renderer.setElementClass(this.el.nativeElement, 'activated', !this.active);
        if(this.active) {
            setTimeout(() => {
                this.renderer.setElementClass(this.el.nativeElement, 'opened', false)
                this.renderer.setElementClass(this.el.nativeElement, 'closed', true);
                this.renderer.setElementStyle(this.el.nativeElement, 'width', '68px');
            }, 400);
        } else {
            setTimeout(() => {
                this.renderer.setElementClass(this.el.nativeElement, 'closed', false)
                this.renderer.setElementClass(this.el.nativeElement, 'opened', true);
            }, 400);
            this.renderer.setElementStyle(this.el.nativeElement, 'width', '100%');
        }
        this.active = !this.active;
    }
    
    public calculateWidth() {
        let width = window.innerWidth / 56 * 2;
        return 'scale(' + width + ')';
    }

    click(button: any) {
        let shouldDismiss = true;
        if (button.handler) {
            // a handler has been provided, execute it
            if (button.handler() === false) {
                // if the return value of the handler is false then do not dismiss
                // not working right now
                shouldDismiss = false; 
            }
        }
    }
}