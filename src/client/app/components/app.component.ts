import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/all';
import {NavbarComponent} from './navbar.component';
// import {ToolbarComponent} from './toolbar.component';
import {NameListService} from '../shared/index';
import {HomeComponent} from '../+home/index';
import {AboutComponent} from '../+about/index';
import {TimersIntroComponent} from '../Timers/index';
import {ToolbarComponent} from '../toolbar/index';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, NavbarComponent, ToolbarComponent],
  providers: [MATERIAL_PROVIDERS]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: 'overview',
    name: 'Overview',
    component: TimersIntroComponent
  }
])
export class AppComponent {}
