Vim�UnDo� �S�Dey�ے���B����X�.?�����4                                     X�I�     _�                      �        ����                                                                                                                                                                                                                                                                                                                            .   	       .          v       X�I�     �              �   $import { isDuration } from 'moment';   Ximport { AbstractControlStatus } from '@angular/forms/src/directives/ng_control_status';   Dimport { identifierToken } from '@angular/compiler/src/identifiers';   Himport { identifierModuleUrl, identifierName } from '@angular/compiler';   import {   '    ScheduleAdvertisingPackageComponent   W} from '../dialog/schedule-advertising-package/schedule-advertising-package.component';   Aimport { AnimationDurations } from '@angular/material/core/core';   import {   $    OfferProgramBudgetPackageService   \} from '../../../service/offer-program-budget-package/offer-program-budget-package.service';   kimport { JsonOfferProgramBudget, OfferProgramBudget } from '../../../resource/offerProgramBudget.resource';   Yimport { JsonOfferProgram, OfferProgram } from '../../../resource/offerProgram.resource';   limport { SchedulePackage, JsonSchedulePackage } from '../../../resource/schedule/schedule-package.resource';   limport { AdvertisingPackage, JsonAdvertisingPackage } from '../../../resource/advertising-package.resource';   Himport { Schedule } from '../../../resource/schedule/schedule.resource';   Simport { TrailerPeriodicity } from '../../../resource/trailerPeriodicity.resource';   Cimport { FormArray, FormBuilder, FormGroup } from '@angular/forms';   mimport { AdvertisingPackageService } from '../../../service/advertising-package/advertising-package.service';   Mimport { ScheduleService } from '../../../service/schedule/schedule.service';   mimport { TrailerPeriodicityService } from '../../../service/trailer-periodicity/trailer-periodicity.service';   dimport { SchedulePackageService } from '../../../service/schedule-package/schedule-package.service';   Oimport { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';   Himport { CustomValidators } from '../../../validator/custom-validators';   +import { ToastsManager } from 'ng2-toastr';   -import { Observable } from 'rxjs/Observable';   import {   "    JsonOfferProgramBudgetPackage,       OfferProgramBudgetPackage   >} from '../../../resource/offerProgramBudgetPackage.resource';       @Component({   "  selector: 'advertising-package',   6  templateUrl: './advertising-package.component.html',   5  styleUrls: ['./advertising-package.component.scss']   })   <export class AdvertisingPackageComponent implements OnInit {         @Input() schedule: Schedule;   &  @Input() offerProgram: OfferProgram;   2  @Output() updateDialogStep = new EventEmitter();     @Input() dialogRef;       6  public advertisingPackageList: AdvertisingPackage[];   -  public schedulePackages: SchedulePackage[];   (  public schedulePackageForm: FormGroup;     public submitted: boolean;   !  public saving: boolean = false;   "  public loading: boolean = false;   4  public trailerPeriodicities: TrailerPeriodicity[];     private filter: any = {};   6  private schedulePackageList: SchedulePackage[] = [];   >  private computedSchedulePackageList: SchedulePackage[] = [];   J  private offerProgramBudgetPackageList: OfferProgramBudgetPackage[] = [];         constructor(       private _fb: FormBuilder,   -    private scheduleService: ScheduleService,   A    private trailerPeriodicityService: TrailerPeriodicityService,   !    public toastr: ToastsManager,   ;    private schedulePackageService: SchedulePackageService,   A    private advertisingPackageService: AdvertisingPackageService,   S    private offerProgramBudgetPackageService: OfferProgramBudgetPackageService) { }         ngOnInit() {       this.loading = true;   7    this.trailerPeriodicityService.getList().subscribe(         periodicities => {   2        this.trailerPeriodicities = periodicities;         }       );       "    this.advertisingPackageService         .getList()         .subscribe(result => {   -        this.advertisingPackageList = result;       W        this.schedulePackageService.getList({schedule_id: this.schedule.id}).subscribe(             schedulePackages => {   5            this.schedulePackages = schedulePackages;   !            this.loading = false;               this.initForm();                this.populateForm();           });   	      });     }         private initForm() {   /    this.schedulePackageForm = this._fb.group({   .        schedulePackages : this._fb.array([]),       });       =    this.schedulePackageForm.valueChanges.subscribe(data => {         this.submitted = false;       });     }         private populateForm() {   @     this.advertisingPackageList.forEach(advertisingPackage => {   3       this.addSchedulePackage(advertisingPackage);        });     }       F  private addSchedulePackage(advertisingPackage: AdvertisingPackage) {   U    const control = <FormArray>this.schedulePackageForm.controls['schedulePackages'];   ?    control.push(this.initSchedulePackage(advertisingPackage));     }       G  private initSchedulePackage(advertisingPackage: AdvertisingPackage) {   [    let packageData = this.getSchedulePackageByAdvertisingPackageId(advertisingPackage.id);   `    let duration = packageData ? packageData.duration : advertisingPackage.getDefaultDuration();   =    let quantity = packageData ? packageData.quantity : null;   1    let id = packageData ? packageData.id : null;   G    let primeQuantity = packageData ? packageData.primeQuantity : null;   I    let periodicityId = packageData ? packageData.periodicity['id'] : -1;           return this._fb.group({           id : id,           quantity: quantity,   S        duration: [duration, CustomValidators.offerProgramSchedulePackageDuration],   %        primeQuantity: primeQuantity,   /        advertisingPackage: advertisingPackage,   $        periodicityId: periodicityId       });     }       I  private getSchedulePackageByAdvertisingPackageId(id): SchedulePackage {       let result = null;   ,    this.schedulePackages.forEach( data => {   3        if (data.advertisingPackage['id'] === id) {             result = data;   	        }       });           return result;     }         toUnderscore(string) {   U    return string.replace(/([A-Z])/g, function($1){return '_' + $1.toLowerCase(); });     };       +  getJsonSchedulePackage(formGroup) : any {       let json = {};   +    Object.keys(formGroup).forEach(key => {   3        let underscoreKey = this.toUnderscore(key);   -        json[underscoreKey] = formGroup[key];       });       return json;     }       #  removeAllFieldsExceptId(object) {   (    Object.keys(object).forEach(key => {         if (key !== 'id') {           delete object[key];         }       });       return object;     }       3  private synchronizeOfferProgramBudgetPackages() {   +    return Observable.create( observer => {             let callCount = 0;   A      let totalCalls = this.offerProgramBudgetPackageList.length;             if (totalCalls === 0) {           observer.next();         }       Q      for (let offerProgramBudgetPackage of this.offerProgramBudgetPackageList) {   =        if (offerProgramBudgetPackage.status === 'created') {   Z          this.offerProgramBudgetPackageService.post(offerProgramBudgetPackage).subscribe(               entity => {   C                if (this.checkCallCount(totalCalls, ++callCount)) {   "                  observer.next();                   }               });   
        };       <        if (offerProgramBudgetPackage.status === 'delete') {   \          this.offerProgramBudgetPackageService.remove(offerProgramBudgetPackage).subscribe(               entity => {   C                if (this.checkCallCount(totalCalls, ++callCount)) {   "                  observer.next();                   }               });           } else {   =          if (this.checkCallCount(totalCalls, ++callCount)) {               observer.next();             }   	        }         }       });         }       7  private manageSchedulePackages(schedulePackageForm) {   +    return Observable.create( observer => {         let entitiesToPost = [];          let entitiesToUpdate = [];          let entitiesToDelete = [];       =      schedulePackageForm._value['schedulePackages'].forEach(   4        (formSchedulePackage: SchedulePackage)  => {       f          let schedulePackage = new SchedulePackage(this.getJsonSchedulePackage(formSchedulePackage));   b          schedulePackage.advertisingPackage = {id: formSchedulePackage.advertisingPackage['id']};   S          schedulePackage.periodicity = {id: formSchedulePackage['periodicityId']};   <          schedulePackage.schedule = {id: this.schedule.id};       @          if (schedulePackage.quantity && !schedulePackage.id) {   1            entitiesToPost.push(schedulePackage);             } else {   p              if (schedulePackage.id && (schedulePackage.quantity === null || schedulePackage.quantity === 0)) {   7                entitiesToDelete.push(schedulePackage);                 }else {   M                if (schedulePackage.id && (schedulePackage.quantity !== 0)) {   9                  entitiesToUpdate.push(schedulePackage);                   }                 }             }   	      });             let callCount = 0;   a      let totalCalls = entitiesToPost.length + entitiesToUpdate.length + entitiesToDelete.length;             if (totalCalls === 0) {           observer.next();         }       (      entitiesToPost.forEach(entity => {   ;        this.schedulePackageService.post(entity).subscribe(                schedulePackage => {   C                if (this.checkCallCount(totalCalls, ++callCount)) {   "                  observer.next();                   }               }             );           });       *      entitiesToUpdate.forEach(entity => {   ;        this.schedulePackageService.edit(entity).subscribe(                schedulePackage => {   A              if (this.checkCallCount(totalCalls, ++callCount)) {                    observer.next();                 }               }   
        );   	      });           *      entitiesToDelete.forEach(entity => {           this.saving = true;   =        this.schedulePackageService.remove(entity).subscribe(                schedulePackage => {   A              if (this.checkCallCount(totalCalls, ++callCount)) {                    observer.next();                 }               }   
        );   	      });       });     }       (  private checkCallCount(total, count) {       return total === count;     }       *  public submitForm(schedulePackageForm) {       this.saving = true;       J    this.manageSchedulePackages(schedulePackageForm).subscribe(result => {   *      this.getSchedulePackage().subscribe(           response => {              this.saving = false;   "           this.dialogRef.close();   	        }         );       })     }           !  getBroadCastSummary(schedule) {   E      return this.scheduleService.generateBroadcastSummary(schedule);     }         getPeriodsSummary(schedule) {   D      return this.scheduleService.generatePerdiodsSummary(schedule);     }         getExpectSummary(schedule) {   C      return this.scheduleService.generateExeptionSumary(schedule);     }         public prev() {   +    this.updateDialogStep.emit('schedule');     }          getSchedulePackage() {   +    return Observable.create( observer => {   :      this.filter.offer_program_id = this.offerProgram.id;   7      this.schedulePackageService.getList(this.filter).           subscribe(             schedulePackages => {   8            this.schedulePackageList = schedulePackages;   1            this.computeOfferProgramBudgetList();   ^            this.filter.offer_program_budget_id = this.offerProgram.offerProgramBudgets[0].id;   G            this.offerProgramBudgetPackageService.getList(this.filter).               subscribe(   -              offerProgramBudgetPackages => {   P                this.offerProgramBudgetPackageList = offerProgramBudgetPackages;   3                this.synchronizeScheduleToBudget();   G                this.synchronizeOfferProgramBudgetPackages().subscribe(   !                    response => {   &                      observer.next();                       }                   )                 }               )             }   	        )       });     }       #  computeOfferProgramBudgetList() {   %    this.schedulePackageList.forEach(                schedulePackage => {   l              if (this.containsSchedulePackage(this.computedSchedulePackageList,schedulePackage) === null) {   G                this.computedSchedulePackageList.push(schedulePackage);                 }             }         );     }       K  containsSchedulePackage(list: SchedulePackage[], item: SchedulePackage) {   (     for (let schedulePackage of list) {   �      if ((schedulePackage.advertisingPackage['id'] === item.advertisingPackage['id']) && (schedulePackage.duration === item.duration)) {           return item;         }       }       return null;     }       !  synchronizeScheduleToBudget() {   C    for (let schedulePackage of this.computedSchedulePackageList) {         let found = false;       Q      for (let offerProgramBudgetPackage of this.offerProgramBudgetPackageList) {   t            if ((offerProgramBudgetPackage.advertisingPackage['id'] === schedulePackage.advertisingPackage['id']) &&   T                (offerProgramBudgetPackage.duration === schedulePackage.duration)) {                   found = true;   H                offerProgramBudgetPackage.price = schedulePackage.price;   <                offerProgramBudgetPackage.status = 'edited';               }         }             if (!found) {   I        let newOfferProgramBudgetPackage = new OfferProgramBudgetPackage(                     {                         id: null,   "                      quantity: 0,                         price: 0,   9                      duration: schedulePackage.duration,   ,                      advertising_package: {   D                        id: schedulePackage.advertisingPackage['id']                         },   -                      offer_program_budget: {   N                        price: this.offerProgram.offerProgramBudgets[0].price,   T                        currency: this.offerProgram.offerProgramBudgets[0].currency,   G                        id: this.offerProgram.offerProgramBudgets[0].id                         }                     }   
        );       8        newOfferProgramBudgetPackage.status = 'created';       P        delete newOfferProgramBudgetPackage.offerProgramBudget.utilitiesService;   E        delete newOfferProgramBudgetPackage.offerProgramBudget.price;   H        delete newOfferProgramBudgetPackage.offerProgramBudget.currency;   L        delete newOfferProgramBudgetPackage.offerProgramBudget.offerProgram;   D        delete newOfferProgramBudgetPackage.advertisingPackage.game;   D        delete newOfferProgramBudgetPackage.advertisingPackage.name;   D        delete newOfferProgramBudgetPackage.advertisingPackage.type;   >        delete newOfferProgramBudgetPackage.theoricalPresence;       N        this.offerProgramBudgetPackageList.push(newOfferProgramBudgetPackage);         }       }       O    for (let offerProgramBudgetPackage of this.offerProgramBudgetPackageList) {         let found = false;   E      for (let schedulePackage of this.computedSchedulePackageList) {   p        if ((offerProgramBudgetPackage.advertisingPackage['id'] === schedulePackage.advertisingPackage['id']) &&   O           (offerProgramBudgetPackage.duration === schedulePackage.duration)) {             found = true;   	        }         }         if (!found) {   4        offerProgramBudgetPackage.status = 'delete';         }       }     }       }5��