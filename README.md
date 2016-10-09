

Version 0.0.2


# fab-toolbar
A Material Design Fab Toolbar is Ionic v2 component which uses Ionic's fab buttons, buttons.

The floating action button can transform into a toolbar upon press or from a toolbar upon scroll. The toolbar can contain related actions, text and search fields, or any other items that would be useful at hand.

## Usage
```
<fab-toolbar [position]="'left" [color]="'light'" [icon]="'more'" [enableBackdropDismiss]="'false'" [buttons]="buttons"></fab-toolbar>
```

```

buttons =  [
      {icon: 'mail', title: 'Mail', color: 'dark', handler: ()=> {console.log('close me')}},
      {icon: 'alarm', title: 'Alarm', color: 'dark', handler: ()=> {console.log('close me')}},
      {icon: 'laptop', title: 'Laptop', color: 'dark', handler: ()=> {console.log('dont close me'); return false}}
    ]
```

## Options

* color: string - color variable of the fab button
* position: string - `left` or `right`
* icon: string - icon of the fab button
* enableBackdropDismiss: boolean - if false fab toolbar will stay open on click backdrop
* buttons: Array<{icon?: string, title?: string, color?: string, handler?: function}> if handler will return false toolbar will not close 

## Install
Get files inside dist folder and copy to your project

* starting from Ionic 2 RC0.0 (AoT) you should provide all components inside app.module.ts 

```
import { FabToolbar } from '../pages/fab-toolbar/fab-toolbar';

@NgModule({
  declarations: [
    FabToolbar
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FabToolbar
  ]
})
```
##Demo


![alt tag](https://github.com/ekhmoi/Ionic-Component-fab-toolbar/blob/master/demo/Fab%20Toolbar.gif)