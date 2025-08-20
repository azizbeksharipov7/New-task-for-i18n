import { Component } from '@angular/core';
import { I18nService } from '../i18n/services/i18n.service';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from "../i18n/translate.pipe";
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
type Language = 'uz' | 'ru' | 'en';
type Gender = 'male' | 'female';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TranslatePipe, FormsModule, Select],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count = 5;
  title = 'i18n';
  selectedLanguage: Language = 'en';
  selectedGender: Gender = 'male';
  loading = true;

  ngOnInit() {
    this.i18n.translations$.subscribe(trans => {
      if (trans) {
        setTimeout(() => this.loading = false, 800);
      }
    });
  }

  constructor(public i18n: I18nService) {
    this.selectedLanguage = this.i18n['locale$'].value;
  }

  languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'uz', label: 'O‘zbekcha' },
  ];

  genders: { code: Gender; label: "profile.gender.male" | "profile.gender.female" }[] = [
    { code: 'male', label: 'profile.gender.male' },
    { code: 'female', label: 'profile.gender.female' },
  ];

  changeLanguage(lang: Language) {
    this.selectedLanguage = lang;
    this.i18n.switchLanguage(lang);
  }
  changeGender(g: Gender) {
    this.selectedGender = g;
  }
  get genderKey(): "profile.gender.male" | "profile.gender.female" {
    return `profile.gender.${this.selectedGender}` as const;
  }

  switch(lang: 'en' | 'ru' | 'uz') {
    this.i18n.switchLanguage(lang);
  }

}