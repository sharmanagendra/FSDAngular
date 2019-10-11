import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MentorComponent} from './mentor/mentor.component';
import {UloginComponent} from './mentor/ulogin/ulogin.component';
import {MloginComponent} from './mentor/mlogin/mlogin.component';
import {MsignupComponent} from './mentor/msignup/msignup.component';
import {MprofileComponent} from './mentor/mprofile/mprofile.component';
import {MmenuComponent} from './mentor/mmenu/mmenu.component';
import {MprogressComponent} from './mentor/mprogress/mprogress.component';
import {UprogressComponent} from './mentor/uprogress/uprogress.component';
import {MeditComponent} from './mentor/medit/medit.component';
import { TsearchComponent } from './mentor/tsearch/tsearch.component';
import { AloginComponent } from './mentor/alogin/alogin.component';
import { AmenuComponent } from './mentor/amenu/amenu.component';
import { CtrainingComponent } from './mentor/ctraining/ctraining.component';
import { MpaymentComponent } from './mentor/mpayment/mpayment.component';
import { UpaymentComponent } from './mentor/upayment/upayment.component';
import { UmenuComponent } from './mentor/umenu/umenu.component';
import { UsignupComponent } from './mentor/usignup/usignup.component';
import { AfeeComponent } from './mentor/afee/afee.component';
import { AtechComponent } from './mentor/atech/atech.component';
import { AmanComponent } from './mentor/aman/aman.component';
import { HomeComponent } from './mentor/home/home.component';
import{TsearchService} from './mentor/tsearch/tsearch.service';
import { AtechService } from './mentor/atech/atech.service';
import { AmanService } from './mentor/aman/aman.service';
import { UsignupService } from './mentor/usignup/usignup.service';
import { UloginService } from './mentor/ulogin/ulogin.service';
import {MsignupService} from './mentor/msignup/msignup.service';
import { MloginService } from './mentor/mlogin/mlogin.service';
import { AloginService } from './mentor/alogin/alogin.service';
import { UprogressService } from './mentor/uprogress/uprogress.service';
import { MprogressService } from './mentor/mprogress/mprogress.service';
import { CtrainingService } from './mentor/ctraining/ctraining.service';
import { UpaymentService } from './mentor/upayment/upayment.service';
import { MeditService } from './mentor/medit/medit.service';
import { TrainingComponent } from './mentor/trainings/training.component';
import { TrainingService } from './mentor/trainings/training.service';
import { MmenuService } from './mentor/mmenu/mmenu.service';
import { UmenuService } from './mentor/umenu/umenu.service';
import { MprofileService } from './mentor/mprofile/mprofile.service';
import { AfeeService } from './mentor/afee/afee.service';
import { MpaymentService } from './mentor/mpayment/mpayment.service';

@NgModule({
  declarations: [
    AppComponent,AmenuComponent,TrainingComponent,AmanComponent,AtechComponent,AfeeComponent,UpaymentComponent,UprogressComponent,UsignupComponent,UmenuComponent,MpaymentComponent,CtrainingComponent,MentorComponent,AloginComponent,TsearchComponent,MeditComponent,MprogressComponent,UloginComponent,MloginComponent,MsignupComponent,MprofileComponent,HomeComponent,MmenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
   


    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 10,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      titleFontSize: "10",
      showSubtitle: false,
  
    })
    



  ],
  providers: [MpaymentService,AfeeService,MeditService,MprofileService,MmenuService,UmenuService,UpaymentService,TrainingService,CtrainingService,MprogressService,UprogressService,AloginService,MloginService,MsignupService,UloginService,TsearchService,AtechService,AmanService,UsignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
