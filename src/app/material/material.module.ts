import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// tslint:disable-next-line: max-line-length
const MaterialComponents = [MatCardModule, MatTabsModule, MatFormFieldModule, MatIconModule, FormsModule , MatButtonModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatProgressBarModule, LoadingBarRouterModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
