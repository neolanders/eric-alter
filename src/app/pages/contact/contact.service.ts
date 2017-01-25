import { Observable } from 'rxjs/Observable';
import { Message } from '../../models/message';

//import * as Firebase from 'firebase/firebase';

// var Firebase = require('firebase/firebase');

// let Firebase = firebaseLib.initializeApp({
//     apiKey: '<your-api-key>',
//     authDomain: '<your-auth-domain>',
//     databaseURL: '<your-database-url>',
//     storageBucket: '<your-storage-bucket>',
//     messagingSenderId: '<your-sender-id>'
// });

// var Firebase = require('firebase/lib/firebase-web');

export class ContactService {
    public db: any; // Firebase;

    constructor() {
        // this.db = new Firebase('https://eric-alter.firebaseio.com/messages');
    }

    create(name: string, email: string, message: string, date?: string) {
        console.log('#--CREATED--#', this.db);

        if (!date) {
            date = new Date().toDateString();
        }

        var that = this;
        return new Promise(function(resolve, reject) {
            that.db.push({
                name,
                email,
                message,
                date
            }, res => {
                resolve(res)
            });
        });

    }

    getAll(): Observable<Message> {
        return Observable.create(observer => {
            let listener = this.db.on('child_added', snapshot => {
                let data = snapshot.val();
                observer.next(new Message(
                    data.name,
                    data.email,
                    data.message,
                    data.date
                ));
            }, observer.error);

            return () => {
                this.db.off('child_added', listener);
            };
        });
    }
};


/*
Sample code:
 https://github.com/OasisDigital/angular2-firebase-demo/blob/master/app/app.ts


 import * as Firebase from 'firebase';

 import {fbName} from './fbConfig';

 export class Generator {
 ref: Firebase;

 constructor() {
 this.ref = new Firebase(fbName).child("stuff");
 }

 next() {
 let category = "cat" + Math.floor((Math.random() * 3) + 1);
 let id = "id" + Math.floor((Math.random() * 10) + 2001);
 let name = "Joe" + Math.floor((Math.random() * 900) + 1001);
 let score = Math.floor((Math.random() * 100) + 1);

 this.ref.child(category).child(id).set({
 name: name,
 score: score,
 present: score>2
 });
 }
 }
 */