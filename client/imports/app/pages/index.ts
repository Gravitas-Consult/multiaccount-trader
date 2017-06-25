/**
 * Created by jasonk on 5/6/17.
 */
import { HomePage } from './home/home.component';
import { BrokerLatencyPage } from './broker-latency/broker-latency.component';
import { AboutUsPage } from '../pages/about-us/about-us.component';
import { FreeVPSPage } from '../pages/free-vps/free-vps.component';
import { MultiaccountPage } from '../pages/multiaccount/multiaccount.component';
import { HowItWorksPage } from '../pages/how-it-works/how-it-works.component';
import { TryItPage } from '../pages/try-it/try-it.component';
// More pages
import { ContactPage } from '../pages/contact/contact.component';
import { FAQPage } from '../pages/faq/faq.component';
import { KnowledgeBasePage } from '../pages/knowledge-base/knowledge-base.component';
import { TermsConditionsPage } from '../pages/terms-conditions/terms-conditions.component';
// Login and Register Pages
import { LoginPage } from '../pages/login/login.component';
import { RegisterPage } from '../pages/register/register.component';

export const PAGES_DECLARATIONS = [
    HomePage, BrokerLatencyPage, AboutUsPage, FreeVPSPage, MultiaccountPage, TryItPage, HowItWorksPage,
    ContactPage, FAQPage, KnowledgeBasePage, TermsConditionsPage,
    LoginPage, RegisterPage
];