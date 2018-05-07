import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListProvider } from '../providers/list/list';
import { AuthProvider } from '../providers/auth/auth';

import { firebaseConfig } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { LoginPage } from '../pages/login/login';
import { CadastrarUsuarioPage } from '../pages/cadastrar-usuario/cadastrar-usuario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastrarUsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), //criado arquivo deo configuracao e inicia o firebase
    AngularFireDatabaseModule, // modulo database
    AngularFireAuthModule // modulo de autenticacao
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastrarUsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListProvider,
    AuthProvider
  ]
})
export class AppModule {}
