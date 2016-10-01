

Version 0.0.1


# ekhmoi-fab-toolbar
A Material Design Fab Toolbar is Ionic v2 component which uses Ionic's fab buttons, buttons.

The floating action button can transform into a toolbar upon press or from a toolbar upon scroll. The toolbar can contain related actions, text and search fields, or any other items that would be useful at hand.

## Usage
```
<ekhmoi-fab-toolbar [options]="options"></ekhmoi-fab-toolbar>
```

```
import { EkhmoiFabToolbar } from '../fab-toolbar/fab-toolbar';

options = {
    color: "danger",
    icon: 'car',
    enableBackdropDismiss: true,
    buttons: [
      {icon: 'mail', handler: ()=> {console.log('close me')}},
      {icon: 'alarm', handler: ()=> {console.log('close me')}},
      {icon: 'laptop', handler: ()=> {console.log('dont close me'); return false}}
    ]
}
```

## Install
Get files inside dist folder and copy to your project

* starting from Ionic 2 RC0.0 (AoT) you should provide all components inside app.module.ts 

```
import { EkhmoiFabToolbar } from '../pages/fab-toolbar/fab-toolbar';

@NgModule({
  declarations: [
    EkhmoiFabToolbar
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    EkhmoiFabToolbar
  ]
})
```
##Demo


![alt tag](https://github.com/ekhmoi/Ionic-Component-fab-toolbar/blob/master/demo/Fab%20Toolbar.gif)