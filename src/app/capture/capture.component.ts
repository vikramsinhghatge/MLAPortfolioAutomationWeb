import {Component} from '@angular/core';
import {WebCamComponent, WebCamModule} from 'ack-angular-webcam';

@Component({
    selector: 'capture',
    templateUrl: 'capture.component.html',
    styleUrls: ['capture.component.css']
})

export class CaptureComponent {
    public webcam: WebCamComponent;
    public base64: any;
    public options = {
        audio: false,
        video: true,
        width: 500,
        height: 500,
        fallbackMode: 'callback',
        fallbackQuality: 85,
        cameraType: 'front' || 'back'
    };

    genBase64(){
        this.webcam.getBase64()
            .then( base=>this.base64=base)
            .catch( e=>console.error(e) )
    }

    genPostData(){
        this.webcam.captureAsFormData({fileName:'file.jpg'})
            .then( formData=>this.postFormData(formData) )
            .catch( e=>console.error(e) )
    }

    postFormData(formData: any): void {
        alert(formData);
    }

    onCamError(err: any){}

    onCamSuccess(){
        console.log("Success");
    }
}