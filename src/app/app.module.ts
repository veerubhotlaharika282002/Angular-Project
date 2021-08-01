import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import {SidebarModule} from 'ng-sidebar';


import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AuthGuard } from './auth.guard';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import {A11yModule} from '@angular/cdk/a11y';


import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { AmazingTimePickerModule } from 'amazing-time-picker';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { RegularComponent } from './regular/regular.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { DriverrentComponent } from './driverrent/driverrent.component';
import { ContactComponent } from './contact/contact.component';
import { CarsearchComponent } from './carsearch/carsearch.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { PaymentComponent } from './payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    RegularComponent,
    LoginComponent,
    DriverrentComponent,
    ContactComponent,
    CarsearchComponent,
    ServicesComponent,
    AboutComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSidenavModule,
    LayoutModule,
    LoadingBarRouterModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    AmazingTimePickerModule
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }

