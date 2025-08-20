import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { I18nService } from '../i18n/i18n.service';
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
  
  constructor(public i18n: I18nService) {
    this.selectedLanguage = this.i18n['locale$'].value;
  }
  
  languages: { code: Language; label: string, logo: string }[] = [
    { code: 'en', label: 'English', logo: 'united-states.png' },
    { code: 'ru', label: 'Русский', logo: 'russia.png' },
    { code: 'uz', label: 'O‘zbekcha', logo: 'flag.png' },
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