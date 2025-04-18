import { RegistroAutocompletarGenCuentaBanco } from './../../../../interfaces/comunes/autocompletar/general/gen-cuenta-banco.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../core/layout.service';
import { MenuComponent } from '../../../kt/components';
import { ILayout, LayoutType } from '../../core/configs/config';
import { SubdominioService } from '@comun/services/subdominio.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { KeeniconComponent } from '../../../shared/keenicon/keenicon.component';
import { NgClass, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgStyle,
    KeeniconComponent,
    RouterLink,
    HeaderMenuComponent,
    NavbarComponent,
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private unsubscribe: Subscription[] = [];
  // Public props
  currentLayoutType: LayoutType | null = 'light-header';

  appHeaderDisplay: boolean;
  appHeaderDefaultFixedDesktop: boolean;
  appHeaderDefaultFixedMobile: boolean;

  appHeaderDefaultContainer: 'fixed' | 'fluid';
  headerContainerCssClass: string = '';
  appHeaderDefaultContainerClass: string = '';

  appHeaderDefaultStacked: boolean;

  // view
  appSidebarDefaultCollapseDesktopEnabled: boolean;
  appSidebarDisplay: boolean;
  appHeaderDefaultContent: string = '';
  appHeaderDefaulMenuDisplay: boolean;
  appPageTitleDisplay: boolean;

  theme_value = localStorage.getItem('kt_theme_mode_value');

  navegar = '/contenedor/lista';

  constructor(
    private layout: LayoutService,
    private router: Router,
    private subdominioService: SubdominioService,
  ) {
    this.routingChanges();
  }

  updateProps(config: ILayout) {
    this.appHeaderDisplay = this.layout.getProp(
      'app.header.display',
      config,
    ) as boolean;
    // view
    this.appSidebarDefaultCollapseDesktopEnabled = this.layout.getProp(
      'app.sidebar.default.collapse.desktop.enabled',
      config,
    ) as boolean;
    this.appSidebarDisplay = this.layout.getProp(
      'app.sidebar.display',
      config,
    ) as boolean;
    this.appHeaderDefaultContent = this.layout.getProp(
      'app.header.default.content',
      config,
    ) as string;
    this.appHeaderDefaulMenuDisplay = this.layout.getProp(
      'app.header.default.menu.display',
      config,
    ) as boolean;
    this.appPageTitleDisplay = this.layout.getProp(
      'app.pageTitle.display',
      config,
    ) as boolean;

    // body attrs and container css classes
    this.appHeaderDefaultFixedDesktop = this.layout.getProp(
      'app.header.default.fixed.desktop',
      config,
    ) as boolean;
    if (this.appHeaderDefaultFixedDesktop) {
      document.body.setAttribute('data-kt-app-header-fixed', 'true');
    }

    this.appHeaderDefaultFixedMobile = this.layout.getProp(
      'app.header.default.fixed.mobile',
      config,
    ) as boolean;
    if (this.appHeaderDefaultFixedMobile) {
      document.body.setAttribute('data-kt-app-header-fixed-mobile', 'true');
    }

    this.appHeaderDefaultContainer = this.layout.getProp(
      'appHeaderDefaultContainer',
      config,
    ) as 'fixed' | 'fluid';
    this.headerContainerCssClass =
      this.appHeaderDefaultContainer === 'fixed'
        ? 'container-xxl'
        : 'container-fluid';

    this.appHeaderDefaultContainerClass = this.layout.getProp(
      'app.header.default.containerClass',
      config,
    ) as string;
    if (this.appHeaderDefaultContainerClass) {
      this.headerContainerCssClass += ` ${this.appHeaderDefaultContainerClass}`;
    }

    this.appHeaderDefaultStacked = this.layout.getProp(
      'app.header.default.stacked',
      config,
    ) as boolean;
    if (this.appHeaderDefaultStacked) {
      document.body.setAttribute('data-kt-app-header-stacked', 'true');
    }

    // Primary header
    // Secondary header
  }

  ngOnInit(): void {
    const subscr = this.layout.layoutConfigSubject
      .asObservable()
      .subscribe((config: ILayout) => {
        this.updateProps(config);
      });
    this.unsubscribe.push(subscr);
    const layoutSubscr = this.layout.currentLayoutTypeSubject
      .asObservable()
      .subscribe((layout) => {
        this.currentLayoutType = layout;
      });
    this.unsubscribe.push(layoutSubscr);
  }

  getBackground() {
    let color = '#fff';
    if (this.theme_value === 'dark') {
      color = '#0c0e13';
    }
    if (this.currentLayoutType === 'dark-header') {
      color = '#0c0e13';
    }
    return {
      'background-color': color,
    };
  }

  routingChanges() {
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        MenuComponent.reinitialization();
      }
    });
    this.unsubscribe.push(routerSubscription);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
