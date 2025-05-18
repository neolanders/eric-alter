import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons() {
    // Front-End Icons
    this.matIconRegistry.addSvgIcon(
      'javascript',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/javascript.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'typescript',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/typescript.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'react',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/react.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'redux',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/redux.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'next_js',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/nextjs.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'html',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/html5.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'css',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/css3.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'scss',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/sass.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'tailwind',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/tailwind.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'material_ui',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-ui.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'jest',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/jest.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'cypress',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/cypress.svg')
    );

    // Back-End Icons
    this.matIconRegistry.addSvgIcon(
      'node_js',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/nodejs.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'express',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/express.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'graphql',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/graphql.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'mongodb',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mongodb.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'mongoose',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mongoose.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'mysql',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mysql.svg')
    );

    // DevOps & Tools Icons
    this.matIconRegistry.addSvgIcon(
      'aws',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/aws.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'vercel',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/vercel.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'jira',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/jira.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'figma',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/figma.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'webstorm',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/webstorm.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'webpack',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/webpack.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'git',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/git.svg')
    );
  }
} 