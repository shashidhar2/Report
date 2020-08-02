import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pdf;
  urlSafe: SafeResourceUrl;
  constructor(private http: HttpClient, private _sanitizer: DomSanitizer) {
    this.http.get('api/Default').subscribe(resp => {
      console.log(resp)
      this.pdf = resp;
 
    })
  }
  ngOnInit() {
    
  }
  pdfFile() {
    const linkSource = 'data:application/pdf;base64,' + this.pdf;
    const downloadLink = document.createElement("a");
    const fileName = "SAReport.pdf";

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

}
