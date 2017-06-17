/**
 * Created by jasonk on 5/6/17.
 */
import { Routes } from '@angular/router';

import { HomePage } from '../pages/home/home.component';
import { MultiaccountPage } from '../pages/multiaccount/multiaccount.component';
import { BrokerLatencyPage } from '../pages/broker-latency/broker-latency.component';
import { AboutUsPage } from '../pages/about-us/about-us.component';
import { FreeVPSPage } from '../pages/free-vps/free-vps.component';
// More pages
import { ContactPage } from '../pages/contact/contact.component';
import { FAQPage } from '../pages/faq/faq.component';
import { KnowledgeBasePage } from '../pages/knowledge-base/knowledge-base.component';
import { TermsConditionsPage } from '../pages/terms-conditions/terms-conditions.component';
// Login and Register Pages
import { LoginPage } from '../pages/login/login.component';
import { RegisterPage } from '../pages/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'multiaccount', component: MultiaccountPage },
    { path: 'latency', component: BrokerLatencyPage },
    { path: 'about-us', component: AboutUsPage },
    { path: 'promos', component: FreeVPSPage },
    // More pages
    { path: 'contact', component: ContactPage },
    { path: 'faq', component: FAQPage },
    { path: 'knowledge-base', component: KnowledgeBasePage },
    { path: 'terms-conditions', component: TermsConditionsPage },
    // Login and Register Pages
    { path: 'login', component: LoginPage },
    { path: 'register', component: RegisterPage }
];