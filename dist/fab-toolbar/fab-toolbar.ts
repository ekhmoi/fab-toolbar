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
 * <fab-toolbar [options]="options"></fab-toolbar>
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
    selector: 'fab-toolbar',
    template: `
        <div class="fab-toolbar">
            <ion-row>
                <ion-col *ngFor="let b of buttons">
                    <button (click)="onClick($event, b)" ion-button clear color="light" icon-only><ion-icon name="{{b.icon}}"></ion-icon></button>
                </ion-col>
            </ion-row>
            <button [style.transform]="active ? width: 'scale(1)' "ion-fab color="{{color}}"><ion-icon name="{{icon}}"></ion-icon></button>
        </div>
        `
})

export class EkhmoiFabToolbar {
    
    public active: boolean = false;
    constructor(public el: ElementRef, public renderer: Renderer) {

        document.addEventListener('click', (event) => {
            console.log('clicked');
            this.onClick(event, false);
        });
    }

    @Input() position: string = 'left';
    @Input() color: string = 'secondary';
    @Input() icon: string = 'more';
    @Input() cssClass: string = '';
    @Input() enableBackdropDismiss: boolean = true;
    @Input() buttons: Array<any> = [];

    ngOnInit() {
        this.renderer.setElementClass(this.el.nativeElement, this.position, true)
    }

    onClick(event, button: any) {
        // We are listening to click event on document in order to be able to close button on backdrop click
        // Therefore we need to check if user clicked on our component or outside
        if (this.el.nativeElement.contains(event.target)) {
            // User has clicked on our component. Check if he clicked on sub button or no.
            if(button) {
                let shouldDismiss = true;
                if (button.handler) {
                    // a handler has been provided, execute it
                    if (button.handler() === false) {
                        // if the return value of the handler is false then do not dismiss
                        shouldDismiss = false; 
                    }
                }

                if (shouldDismiss) {
                    setTimeout(() => {
                        this.closeButton();
                    }, 10);
                }
            } else {
                if(!this.active)  {
                    this.openButton();
                }
            }
        } else {
            // User has clicked outside our component.
            // Check if `enableBackdropDismiss` is true and if component is opened.
            if(this.enableBackdropDismiss === true && this.active) {
                this.closeButton();
            }
        }
    }

    public get width() {
        let width = window.innerWidth / 56 * 2;
        return 'scale(' + width + ')';
    }

    public openButton(): void {
        this.renderer.setElementClass(this.el.nativeElement, 'activated', !this.active);
        setTimeout(() => {
            this.renderer.setElementClass(this.el.nativeElement, 'closed', false)
            this.renderer.setElementClass(this.el.nativeElement, 'opened', true);
        }, 400);
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '100%');
        this.active = !this.active;
    }

    public closeButton(): void {
        this.renderer.setElementClass(this.el.nativeElement, 'activated', !this.active);
        setTimeout(() => {
            this.renderer.setElementClass(this.el.nativeElement, 'opened', false)
            this.renderer.setElementClass(this.el.nativeElement, 'closed', true);
            this.renderer.setElementStyle(this.el.nativeElement, 'width', '68px');
        }, 400);
        this.active = !this.active;
    }
}