
import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, observeOn, retry } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './app.component.header.html',
    styleUrls: ['./app.component.header.css']
})

export class HeaderComponent{
    constructor() {
    }
    ngOnInit(): void {
        
    }
    
}

