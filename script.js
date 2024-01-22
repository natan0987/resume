const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    themeToggle.addEventListener('change', function() {
        body.classList.toggle('dark-mode');
        });


function openModal() {
    
    var modal = document.getElementById('languageModal');
    var container = document.querySelector('.container');
    modal.style.display = 'block';
        container.classList.add("blur");
    }
    
      function closeModal() {
        var modal = document.getElementById('languageModal');
        var container = document.querySelector('.container');
        modal.style.display = 'none';
        container.classList.remove("blur");
      }
    
      function selectLanguage(language) {
        if (language === 'he') {
          document.documentElement.lang = 'he';
          document.documentElement.setAttribute('dir', 'rtl');
          document.getElementById('page-title').textContent = 'קורות חיים - נתן גולשבסקי';
          document.getElementById('select-language').textContent = 'בחירת שפה / ערכת נושא';
          document.getElementById('telegram').textContent = 'טלגרם';
          document.getElementById('github').textContent = 'גיטהאב';
          document.getElementById('contact-me').textContent = 'צור קשר במייל';
          document.getElementById('adderss1').innerHTML  = 'ברוקלין, ניו יורק - ארה"ב';
          document.getElementById('adderss2').textContent = 'ירושלים, ישראל';
          document.getElementById('skills').textContent = 'מה אני יודע';
          document.getElementById('phone-repair').textContent = 'תיקון פלאפונים';
          document.getElementById('dev-tools').textContent = 'הכלים שלי';
          document.getElementById('about').textContent = 'אודותיי';
          document.getElementById('about-desc').textContent = 'היי, אני נתן גולשבסקי. מאד עצמאי, אוהב ללמוד דברים בכוחות עצמי, והעבודה האידיאלית שלי תאתגר אותי ותוסיף לידע שלי בתכנות.';
          document.getElementById('experience').textContent = 'ניסיון תעסוקתי';
          document.getElementById('technoel-title').textContent = 'איש IT ומתכנת ~ טכנואל, ירושלים, ישראל.';
          document.getElementById('technoel-dates').textContent = 'דצמבר 2022 - ספטמבר 2023';
          document.getElementById('technoel-desc').textContent = 'איש IT, מתכנת, מטמיע פתרונות';
          document.getElementById('munch-title').textContent = 'שירות לקוחות בקדמת העסק ~ MUNCH, ברוקלין, ניו יורק.';
          document.getElementById('munch-dates').textContent = 'ינואר 2022 - אפריל 2022';
          document.getElementById('munch-desc').textContent = 'שירות לקוחות פרונטלית וטלפונית וארגון משלוחים ללקוחות.';
          document.getElementById('peleor-title').textContent = 'ניהול החנות והכלים הטכנולוגיים ~ פלאור סלולר, ירושלים, ישראל.';
          document.getElementById('peleor-dates').textContent = 'ינואר 2020 - ינואר 2022';
          document.getElementById('peleor-desc').textContent = 'ניהול החנות, פתרון בעיות, שירות לקוחות, מתכנת, שירות ותיקון מכשירי סלולר, התקשרות עם ספקים, שיווק ומכירות.';
          document.getElementById('yoni-title').textContent = 'ניהול החנות ~ יוני מרקט, ירושלים, ישראל.';
          document.getElementById('yoni-dates').textContent = 'יוני 2016 - יוני 2019';
          document.getElementById('yoni-desc').textContent = 'שירות לקוחות, ניהול מלאי, התקשרות עם ספקים, ניהול משלוחים, הדרכת עובדים.';
          document.getElementById('education').textContent = 'מאיפה הידע שלי';
          document.getElementById('marketing-title').textContent = 'שיווק';
          document.getElementById('marketing-desc').textContent = 'לימוד עצמי דרך שימוש בתוכנות אונליין כמו Canva, Logomaker, Adobe ועוד.';
          document.getElementById('android-title').textContent = 'פיתוח אנדרואיד';
          document.getElementById('android-desc').textContent = 'לימוד עצמי ע"י מחקר לדברים שהייתי צריך לעבודה בפלאור.';
          document.getElementById('python-title').textContent = 'פיתוח פייתון';
          document.getElementById('python-desc1').textContent = 'לימוד עצמי אונליין';
          document.getElementById('python-desc2').textContent = '-בניתי מספר דברים לעבודה בפלאור.';
          document.getElementById('python-desc3').textContent = '-מערכת שירות לקוחות בצאט ובניית דרך לשנים ארוכות בנושא בשביל טכנואל';
          document.getElementById('python-desc4').textContent = '-שרת שאוסף מידע בזמן אמת מספק מרכזיה בשביל טכנואל';
          document.getElementById('web-title').textContent = 'פיתוח WEB';
          document.getElementById('web-desc').textContent = ' -בניה של מספר אתרים אינפורמטיביים בעלי עמוד אחד.';
          document.getElementById('c-title').textContent = ' -פיתוח C#/.NET';
          document.getElementById('c-desc1').textContent = ' -בניית מתקין לתוכנה לניהול הדפסות פתר בעיה בזמנו בטכנואל';
          document.getElementById('c-desc2').textContent = ' -אפליקציה לבדיקה ששרת SMTP פתוח ושלא יהיה משהו שמפריע בדרך';
          document.getElementById('c-desc3').textContent = ' -אפליקציה שעושה שימוש במידע שנאסף משרת אחר ומציג אותו';
          document.getElementById('dark-mode').textContent = 'מצב חשוך:';
        } else {
          document.documentElement.lang = 'en';
          document.documentElement.setAttribute('dir', 'ltr');
          document.getElementById('page-title').textContent = 'Resume - Natan Golshevsky';
          document.getElementById('select-language').textContent = 'Select Language / Theme';
          document.getElementById('telegram').textContent = 'Telegram';
          document.getElementById('github').textContent = 'Github';
          document.getElementById('contact-me').textContent = 'Contact Me';
          document.getElementById('adderss1').textContent = 'Brooklyn, New York';
          document.getElementById('adderss2').textContent = 'Jerusalem, Israel';
          document.getElementById('skills').textContent = 'Skills';
          document.getElementById('phone-repair').textContent = 'Phone Repair';
          document.getElementById('dev-tools').textContent = 'Development Tools';
          document.getElementById('about').textContent = 'About Me';
          document.getElementById('about-desc').textContent = 'Hi, my name is Natan Golshevsky. I am a self-starter, an independent learner, and my ideal job will expand my programming skills and challenge me.';
          document.getElementById('experience').textContent = 'Professional Experience';
          document.getElementById('technoel-title').textContent = 'IT and Programming ~ TECHNOEL, Jerusalem, Israel.';
          document.getElementById('technoel-dates').textContent = 'Dec 2022 - Sep 2023';
          document.getElementById('technoel-desc').textContent = 'IT service, in-house programmer, solutions implementer.';
          document.getElementById('munch-title').textContent = 'Front Desk ~ MUNCH, Brooklyn, NY.';
          document.getElementById('munch-dates').textContent = 'Jan 2022 - Apr 2022';
          document.getElementById('munch-desc').textContent = 'Customer service, front of the house, telephone interface with customers, organization of the online delivery pipeline.';
          document.getElementById('peleor-title').textContent = 'General Manager and Head Tech ~ PELEOR Cellular service provider and supplier, Jerusalem, Israel.';
          document.getElementById('peleor-dates').textContent = 'Jan 2020 - Jan 2022';
          document.getElementById('peleor-desc').textContent = 'General manager, head tech troubleshooter, customer service, in-house programmer, service and repairs, marketing and sales.';
          document.getElementById('yoni-title').textContent = 'General Manager ~ YONI MARKET, Jerusalem, Israel.';
          document.getElementById('yoni-dates').textContent = 'Jun 2016 - Jun 2019';
          document.getElementById('yoni-desc').textContent = 'Customer service, inventory management, interface with suppliers, management of deliveries, staff training and supervision.';
          document.getElementById('education').textContent = 'Education';
          document.getElementById('marketing-title').textContent = 'Marketing';
          document.getElementById('marketing-desc').textContent = 'Self-taught via utilization of online enrichment resources within Canva, Logomaker, Adobe and more.';
          document.getElementById('android-title').textContent = 'Android Development';
          document.getElementById('android-desc').textContent = 'Self-taught through independent research into Android specifics and potentials.';
          document.getElementById('python-title').textContent = 'Python Development';
          document.getElementById('python-desc1').textContent = 'Self-taught online';
          document.getElementById('python-desc2').textContent = '- Buildup of portfolio of proprietary projects for Peleor Cellular.';
          document.getElementById('python-desc3').textContent = '- Chatbot framework that contains a web chatbot(with no design), telegram chatbot, skeleton for an ivr bot for Technoel';
          document.getElementById('python-desc4').textContent = '- Server that scrapes data about incoming calls and sends it to client apps';
          document.getElementById('web-title').textContent = 'Web Development';
          document.getElementById('web-desc').textContent = ' -Builds of single-page commercial and informational sites.';
          document.getElementById('c-title').textContent = '.NET / C# Development';
          document.getElementById('c-desc1').textContent = '- Installer for management software on client pc';
          document.getElementById('c-desc2').textContent = '- SMTP tester app with trace routing';
          document.getElementById('c-desc3').textContent = '- Plugin for showing incoming data from the web scraper as a sticker on screen at all times';
          document.getElementById('dark-mode').textContent = 'Dark Mode:';
        }
    
        closeModal();
      }
    
      window.onload = function () {
        openModal();
      };
    
    