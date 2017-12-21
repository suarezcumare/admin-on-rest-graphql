import { englishMessages } from 'admin-on-rest';
import spanishMessages from 'aor-language-spanish';

import customSpanishMessages from './es';
import customEnglishMessages from './en';

export default {
    es: { ...spanishMessages, ...customSpanishMessages },
    en: { ...englishMessages, ...customEnglishMessages },
};