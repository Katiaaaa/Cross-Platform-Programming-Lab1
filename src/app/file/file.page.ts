import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
  data: any[];
  dataUrl = 'https://api.jsonbin.io/b/6289df24449a1f3821e8f921';
  loading: any;
  searchFaculty: string;

  constructor(public loadingController: LoadingController) {}
  async load() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Loading...',
    });

    await this.loading.present();

    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
        console.log(this.data);
        this.loading.dismiss();
      });
  }

  searchDean(faculty: string) {
    this.searchFaculty = faculty;
    console.log(this.searchFaculty);
  }

  getColor(faculty: string) {
    return faculty === this.searchFaculty ? 'green' : '';
  }
  ngOnInit() {}
}