import { Injectable } from "@angular/core";

function _window(): any {
    return window;
}

@Injectable()
export class WindowService {
    public getWindowObject(): any {
        return _window();
    }
}