import { Injectable } from '@angular/core';
import { StorageKeyEnum } from "../../enums/storage-key.enum";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setItem<T>(key: StorageKeyEnum, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem<T>(key: StorageKeyEnum): T {
    return JSON.parse(localStorage.getItem(key) as string) as T;
  }
}
