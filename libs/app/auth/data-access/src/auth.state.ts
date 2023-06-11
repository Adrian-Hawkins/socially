import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { produce } from 'immer';

export interface AuthStateModel {
    User:{
        model: {
            User:any;
        }
    }
}

@State<AuthStateModel>({
  name: 'library',
    defaults: {
        User: {
            model: {
                User: null
            }
        
        }
    }
    
})

@Injectable()
export class AuthState {

  constructor(
    private readonly store: Store,
  ){}

  // @Action(Example)
  // example(ctx: StateContext<ReadingStateModel>, action: Example) {
  //   const request = {
  //     word: this.word,
  //     definition: 'A fruit that grows on trees'
  //   } as ReadingRequest;

  //   this.readingService.getVocab(request).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}

