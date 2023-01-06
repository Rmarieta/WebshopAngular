import { Injectable } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Injectable({
  providedIn: "root",
})
export class DrawerService {
  private drawer!: MatDrawer;

  public setDrawer(_drawer: MatDrawer) {
    this.drawer = _drawer;
  }

  public open() {
    return this.drawer.open();
  }

  public close() {
    return this.drawer.close();
  }

  public toggle(): void {
    this.drawer.toggle();
  }
}
