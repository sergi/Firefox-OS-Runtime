var FFOS_RUNTIME_MANIFESTS = {}

FFOS_RUNTIME_MANIFESTS['http://bluetooth.gaiamobile.org:8080/manifest.webapp'] = {"name":"Send To Bluetooth Device","type":"certified","description":"Gaia Bluetooth Transfer","launch_path":"/transfer.html","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"locales":{"en-US":{"name":"Bluetooth Transfer","description":"Gaia Bluetooth Transfer"}},"orientation":"portrait-primary","activities":{"share":{"filters":{"number":1},"disposition":"inline","returnValue":true,"href":"/transfer.html"}},"permissions":{"bluetooth":{},"device-storage:sdcard":{"access":"readonly"},"settings":{"access":"readwrite"}}}

FFOS_RUNTIME_MANIFESTS['http://browser.gaiamobile.org:8080/manifest.webapp'] = {"name":"Browser","description":"Gaia Web Browser","launch_path":"/index.html","type":"certified","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"permissions":{"browser":{},"systemXHR":{},"settings":{"access":"readonly"},"geolocation":{},"desktop-notification":{}},"locales":{"ar":{"name":"المتصفح","description":"Gaia متصفح الويب"},"en-US":{"name":"Browser","description":"Gaia Web Browser"},"fr":{"name":"Navigateur","description":"Navigateur Web Gaia"},"zh-TW":{"name":"網路瀏覽器","description":"Gaia 網路瀏覽器"}},"default_locale":"en-US","icons":{"60":"http://homescreen.gaiamobile.org:8080/style/images/default.png","120":"/shared/resources/branding/Browser.png"},"activities":{"view":{"filters":{"type":"url","url":{"required":true,"regexp":"/^https?:/"}}}}}

FFOS_RUNTIME_MANIFESTS['http://calendar.gaiamobile.org:8080/manifest.webapp'] = {"name":"Calendar","description":"Gaia Calendar","type":"certified","launch_path":"/index.html","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"messages":[{"alarm":"/index.html"}],"permissions":{"systemXHR":{},"settings":{"access":"readonly"},"alarms":{},"desktop-notification":{}},"locales":{"ar":{"name":"Calendar","description":"Gaia Calendar"},"en-US":{"name":"Calendar","description":"Gaia Calendar"},"fr":{"name":"Agenda","description":"Agenda Gaia"},"zh-TW":{"name":"Calendar","description":"Gaia Calendar"}},"default_locale":"en-US","icons":{"60":"http://homescreen.gaiamobile.org:8080/style/images/default.png","120":"/style/icons/Calendar.png"},"orientation":"portrait-primary"}

FFOS_RUNTIME_MANIFESTS['http://camera.gaiamobile.org:8080/manifest.webapp'] = {"name":"Camera","description":"Gaia Camera","type":"certified","launch_path":"/index.html","orientation":"portrait-primary","fullscreen":true,"developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"permissions":{"device-storage:pictures":{"access":"readwrite"},"device-storage:videos":{"access":"readwrite"},"settings":{"access":"readonly"},"camera":{},"geolocation":{},"audio-channel-notification":{}},"activities":{"record":{"filters":{"type":"photos"},"disposition":"window"},"pick":{"filters":{"type":["image/jpeg"]},"returnValue":true,"disposition":"inline","href":"/index.html#pick"}},"locales":{"ar":{"name":"الكاميرا","description":" Gaiaالكاميرا"},"en-US":{"name":"Camera","description":"Gaia Camera"},"fr":{"name":"Photo","description":"Appareil photo Gaia"},"zh-TW":{"name":"相機","description":"Gaia 相機"}},"default_locale":"en-US","icons":{"60":"http://homescreen.gaiamobile.org:8080/style/images/default.png","120":"/style/icons/Camera.png"}}

FFOS_RUNTIME_MANIFESTS['http://clock.gaiamobile.org:8080/manifest.webapp'] = {"name":"Clock","description":"Gaia Clock","type":"certified","launch_path":"/index.html","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"permissions":{"alarms":{},"settings":{"access":"readwrite"},"attention":{},"audio-channel-alarm":{}},"locales":{"ar":{"name":"الساعة","description":"Gaia الساعة"},"en-US":{"name":"Clock","description":"Gaia Clock"},"fr":{"name":"Horloge","description":"Horloge Gaia"},"zh-TW":{"name":"時鐘","description":"Gaia 時鐘"}},"default_locale":"en-US","icons":{"60":"http://homescreen.gaiamobile.org:8080/style/images/default.png","120":"/style/icons/Clock.png"},"orientation":"portrait-primary","messages":[{"alarm":"/index.html"}]}

FFOS_RUNTIME_MANIFESTS['http://communications.gaiamobile.org:8080/manifest.webapp'] = {"name":"Communications","description":"Gaia Communications","type":"certified","launch_path":"/","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"entry_points":{"dialer":{"launch_path":"/dialer/index.html#keyboard-view","name":"Phone","icons":{"60":"/dialer/style/icons/60/Dialer.png","120":"/dialer/style/icons/Dialer.png"},"locales":{"ar":{"name":"هاتف","description":"Gaia هاتف"},"en-US":{"name":"Phone","description":"Gaia Phone"},"fr":{"name":"téléphone","description":"téléphone Gaia"},"zh-TW":{"name":"電話","description":"Gaia 電話"}}},"contacts":{"launch_path":"/contacts/index.html","name":"Contacts","icons":{"60":"/contacts/style/icons/60/Contacts.png","120":"/contacts/style/icons/Contacts.png"},"locales":{"ar":{"name":"اتصالات","description":"Gaia اتصالات"},"en-US":{"name":"Contacts","description":"Gaia Contacts"},"fr":{"name":"Contacts","description":"Contacts Gaia"},"zh-TW":{"name":"聯絡人","description":"Gaia 聯絡人"}}},"ftu":{"launch_path":"/ftu/index.html","name":"FTU","fullscreen":"true"}},"permissions":{"telephony":{},"voicemail":{},"contacts":{"access":"readwrite"},"mobileconnection":{},"attention":{},"settings":{"access":"readwrite"},"desktop-notification":{},"alarms":{},"systemXHR":{},"wifi-manage":{},"time":{},"audio-channel-telephony":{},"audio-channel-ringer":{},"browser":{}},"orientation":"portrait-primary","activities":{"pick":{"filters":{"type":["webcontacts/contact","webcontacts/email"]},"disposition":"inline","href":"/contacts/index.html?pick","returnValue":true},"new":{"filters":{"type":"webcontacts/contact"},"disposition":"inline","href":"/contacts/index.html?new","returnValue":true},"update":{"filters":{"type":"webcontacts/contact"},"disposition":"inline","href":"/contacts/index.html?update","returnValue":true},"dial":{"filters":{"type":"webtelephony/number"},"href":"/dialer/index.html#keyboard-view","disposition":"window"}},"messages":[{"alarm":"/facebook/fb_sync.html"},{"bluetooth-dialer-command":"/dialer/index.html#keyboard-view"},{"headset-button":"/dialer/index.html#keyboard-view"},{"notification":"/dialer/index.html#keyboard-view"},{"telephony-new-call":"/dialer/index.html#keyboard-view"},{"ussd-received":"/dialer/index.html#keyboard-view"}]}

FFOS_RUNTIME_MANIFESTS['http://costcontrol.gaiamobile.org:8080/manifest.webapp'] = {"name":"Usage","description":"Usage application to see credit and data usage statistics","type":"certified","launch_path":"/index.html","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"permissions":{"sms":{},"mobileconnection":{},"desktop-notification":{},"settings":{"access":"readonly"},"networkstats-manage":{},"alarms":{},"telephony":{}},"activities":{"costcontrol/balance":{"filters":{},"disposition":"window"},"costcontrol/telephony":{"filters":{},"disposition":"window"},"costcontrol/data_usage":{"filters":{},"disposition":"window"}},"locales":{"en-US":{"name":"Usage","description":"Usage application to see credit and data usage statistics"}},"default_locale":"en-US","icons":{"60":"http://homescreen.gaiamobile.org:8080/style/images/default.png","120":"/style/icons/cost-control.png"},"orientation":"portrait-primary","messages":[{"sms-received":"/message_handler.html"},{"alarm":"/message_handler.html"},{"sms-sent":"/message_handler.html"},{"telephony-call-ended":"/message_handler.html"},{"notification":"/index.html"}]}

FFOS_RUNTIME_MANIFESTS['http://email.gaiamobile.org:8080/manifest.webapp'] = {"name":"E-Mail","description":"Gaia E-Mail","type":"certified","launch_path":"/index.html","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"messages":[{"alarm":"/index.html"}],"permissions":{"alarms":{},"audio-channel-notification":{},"contacts":{"access":"readcreate"},"desktop-notification":{},"device-storage:music":{"access":"readcreate"},"device-storage:pictures":{"access":"readcreate"},"device-storage:videos":{"access":"readcreate"},"systemXHR":{},"settings":{"access":"readonly"},"tcp-socket":{}},"locales":{"ar":{"name":"E-Mail","description":"Gaia E-Mail"},"en-US":{"name":"E-Mail","description":"Gaia E-Mail"},"fr":{"name":"E-Mail","description":"Gaia E-Mail"},"zh-TW":{"name":"E-Mail","description":"Gaia E-Mail"}},"default_locale":"en-US","icons":{"60":"http://homescreen.gaiamobile.org:8080/style/images/default.png","79":"/style/icons/Email.png"},"activities":{"new":{"filters":{"type":"mail"},"disposition":"window"},"share":{"filters":{"type":"image/*"},"disposition":"window","returnValue":true},"view":{"filters":{"type":"url","url":{"required":true,"regexp":"/^mailto:/"}}}},"orientation":"portrait-primary"}

FFOS_RUNTIME_MANIFESTS['http://fm.gaiamobile.org:8080/manifest.webapp'] = {"name":"FM Radio","description":"Gaia FM Radio","type":"certified","launch_path":"/index.html","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"permissions":{"fmradio":{},"settings":{"access":"readonly"}},"locales":{"ar":{"name":"FM Radio","description":"Gaia FM Radio"},"en-US":{"name":"FM Radio","description":"Gaia FM Radio"},"fr":{"name":"Radio FM","description":"Radio FM Gaia"},"zh-TW":{"name":"收音机","description":"收音机"}},"default_locale":"en-US","icons":{"60":"http://homescreen.gaiamobile.org:8080/style/images/default.png","128":"/style/icons/Fm.png"},"orientation":"portrait-primary"}

FFOS_RUNTIME_MANIFESTS['http://gallery.gaiamobile.org:8080/manifest.webapp'] = {"name":"Gallery","description":"Gaia Gallery","type":"certified","launch_path":"/index.html","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"fullscreen":true,"permissions":{"device-storage:pictures":{"access":"readwrite"},"device-storage:videos":{"access":"readwrite"},"deprecated-hwvideo":{},"audio-channel-content":{},"settings":{"access":"readonly"}},"activities":{"browse":{"filters":{"type":"photos"},"disposition":"window"},"pick":{"filters":{"type":["image/jpeg","image/png"]},"disposition":"inline","returnValue":true,"href":"/index.html#pick"},"open":{"filters":{"type":["image/jpeg","image/png","image/gif"]},"disposition":"inline","returnValue":true,"href":"/open.html"}},"locales":{"ar":{"name":"إستديو","description":"Gaia إستديو"},"en-US":{"name":"Gallery","description":"Gaia Gallery"},"fr":{"name":"Galerie","description":"Galerie Gaia"},"zh-TW":{"name":"相簿","description":"Gaia 相簿"}},"default_locale":"en-US","icons":{"60":"http://homescreen.gaiamobile.org:8080/style/images/default.png","120":"/style/icons/Gallery.png"}}

FFOS_RUNTIME_MANIFESTS['http://homescreen.gaiamobile.org:8080/manifest.webapp'] = {"name":"Homescreen","description":"Gaia Homescreen","launch_path":"/index.html#root","type":"certified","developer":{"name":"The Gaia Team","url":"https://github.com/andreasgal/gaia"},"permissions":{"webapps-manage":{},"systemXHR":{},"settings":{"access":"readwrite"},"device-storage:pictures":{"access":"readonly"},"open-remote-window":{},"geolocation":{}},"locales":{"ar":{"name":"الشاشة الرئيسية","description":"Gaia الشاشة الرئيسية"},"en-US":{"name":"Homescreen","description":"Gaia Homescreen"},"fr":{"name":"Écran d’accueil","description":"Écran d’accueil Gaia"},"zh-TW":{"name":"主畫面","description":"Gaia 主畫面"}},"default_locale":"en-US","orientation":"portrait-primary","activities":{"save-bookmark":{"filters":{"type":"url","url":{"required":true,"regexp":"/^https?:/"}},"disposition":"inline","href":"/save-bookmark.html","returnValue":true}}}

FFOS_RUNTIME_MANIFESTS['http://keyboard.gaiamobile.org:8080/manifest.webapp'] = {"name":"Keyboard","description":"Gaia Keyboard","type":"certified","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"permissions":{"settings":{"access":"readwrite"},"keyboard":{}},"locales":{"en-US":{"name":"Keyboard","description":"Gaia Keyboard"}},"default_locale":"en-US"}

FFOS_RUNTIME_MANIFESTS['http://music.gaiamobile.org:8080/manifest.webapp'] = {"name":"Music","description":"Gaia Music","type":"certified","launch_path":"/index.html","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"permissions":{"device-storage:music":{"access":"readwrite"},"settings":{"access":"readonly"},"deprecated-hwvideo":{},"audio-channel-content":{}},"activities":{"open":{"filters":{"type":["audio/mpeg","audio/ogg","audio/mp4"]},"disposition":"inline","returnValue":true,"href":"/open.html"}},"locales":{"ar":{"name":"موسيقى","description":"Gaia موسيقى"},"en-US":{"name":"Music","description":"Gaia Music"},"fr":{"name":"Musique","description":"Lecteur audio Gaia"},"zh-TW":{"name":"音樂","description":"Gaia 音樂"}},"default_locale":"en-US","icons":{"60":"http://homescreen.gaiamobile.org:8080/style/images/default.png","120":"/style/icons/Music.png"},"orientation":"portrait-primary"}

FFOS_RUNTIME_MANIFESTS['http://pdfjs.gaiamobile.org:8080/manifest.webapp'] = {"name":"PDF Viewer","description":"Portable Document Format(PDF) Viewer","type":"certified","developer":{"name":"The pdf.js Team","url":"https://github.com/mozilla/pdf.js"},"locales":{"en-US":{"name":"PDF Viewer","description":"Portable Document Format(PDF) Viewer"}},"default_locale":"en-US","icons":{"48":"/icon.png","64":"/icon64.png"},"orientation":"portrait-primary","activities":{"view":{"filters":{"type":"application/pdf"},"disposition":"inline","href":"/content/web/viewer.html","returnValue":true}},"permissions":{"systemXHR":{},"settings":{"access":"readonly"}}}

FFOS_RUNTIME_MANIFESTS['http://settings.gaiamobile.org:8080/manifest.webapp'] = {"name":"Settings","description":"Gaia Settings","type":"certified","launch_path":"/index.html#root","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"permissions":{"mobileconnection":{},"bluetooth":{},"device-storage:pictures":{"access":"readonly"},"device-storage:music":{"access":"readonly"},"device-storage:videos":{"access":"readonly"},"device-storage:sdcard":{"access":"readonly"},"device-storage:apps":{"access":"readonly"},"webapps-manage":{},"permissions":{},"settings":{"access":"readwrite"},"wifi-manage":{},"attention":{},"time":{},"desktop-notification":{},"power":{},"idle":{},"telephony":{},"audio-channel-notification":{}},"activities":{"configure":{"filters":{"target":"device"},"disposition":"window"}},"messages":["bluetooth-requestconfirmation","bluetooth-requestpasskey","bluetooth-requestpincode","bluetooth-authorize","bluetooth-cancel","bluetooth-pairedstatuschanged","bluetooth-hfp-status-changed"],"locales":{"ar":{"name":"الضبط","description":"Gaia الضبط"},"en-US":{"name":"Settings","description":"Gaia Settings"},"fr":{"name":"Paramètres","description":"Paramètres Gaia"},"tr":{"name":"Ayarlar","description":"Gaia Ayarları"},"zh-TW":{"name":"設定","description":"Gaia 設定"}},"default_locale":"en-US","icons":{"60":"http://homescreen.gaiamobile.org:8080/style/images/default.png","120":"/style/icons/Settings.png"},"orientation":"portrait-primary"}

FFOS_RUNTIME_MANIFESTS['http://sms.gaiamobile.org:8080/manifest.webapp'] = {"name":"Messages","description":"Gaia Messages","type":"certified","launch_path":"/index.html","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"permissions":{"sms":{},"contacts":{"access":"readonly"},"mobileconnection":{},"settings":{"access":"readonly"},"audio-channel-notification":{},"desktop-notification":{}},"locales":{"ar":{"name":"رسائل","description":"Gaia رسائل"},"en-US":{"name":"Messages","description":"Gaia Messages"},"fr":{"name":"Messages","description":"Messages Gaia"},"zh-TW":{"name":"訊息","description":"Gaia 訊息"}},"default_locale":"en-US","background_page":"/background.html#0","icons":{"60":"http://homescreen.gaiamobile.org:8080/style/images/default.png","120":"/style/icons/Sms.png"},"orientation":"portrait-primary","activities":{"new":{"filters":{"type":"websms/sms"},"disposition":"window"}},"messages":[{"sms-received":"/index.html"},{"notification":"/index.html"}]}

FFOS_RUNTIME_MANIFESTS['http://system.gaiamobile.org:8080/manifest.webapp'] = {"name":"System","type":"certified","description":"Main System","launch_path":"/index.html","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"permissions":{"alarms":{},"browser":{},"power":{},"fmradio":{},"webapps-manage":{},"mobileconnection":{},"bluetooth":{},"telephony":{},"voicemail":{},"device-storage:sdcard":{"access":"readonly"},"device-storage:pictures":{"access":"readwrite"},"device-storage:videos":{"access":"readwrite"},"device-storage:music":{"access":"readcreate"},"settings":{"access":"readwrite"},"storage":{},"camera":{},"geolocation":{},"wifi-manage":{},"desktop-notification":{},"idle":{},"network-events":{},"embed-apps":{},"background-sensors":{},"permissions":{},"audio-channel-notification":{},"audio-channel-content":{},"cellbroadcast":{},"keyboard":{}},"locales":{"ar":{"name":"System","description":"Main System"},"en-US":{"name":"System","description":"Main System"},"fr":{"name":"System","description":"Main System"},"zh-TW":{"name":"System","description":"Main System"}},"default_locale":"en-US","messages":[{"alarm":"/index.html"},{"bluetooth-opp-transfer-complete":"/index.html"},{"bluetooth-opp-update-progress":"/index.html"},{"bluetooth-opp-receiving-file-confirmation":"/index.html"},{"bluetooth-opp-transfer-start":"/index.html"},{"icc-stkcommand":"/index.html"},{"bluetooth-hfp-status-changed":"/index.html"}]}

FFOS_RUNTIME_MANIFESTS['http://video.gaiamobile.org:8080/manifest.webapp'] = {"name":"Video","description":"Gaia Video","type":"certified","launch_path":"/index.html","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"permissions":{"device-storage:pictures":{"access":"readwrite"},"device-storage:videos":{"access":"readwrite"},"settings":{"access":"readonly"},"deprecated-hwvideo":{},"audio-channel-content":{},"systemXHR":{}},"locales":{"ar":{"name":"فيديو","description":"Gaia فيديو"},"en-US":{"name":"Video","description":"Gaia Video"},"fr":{"name":"Vidéo","description":"Lecteur vidéo Gaia"},"zh-TW":{"name":"影片","description":"Gaia 影片"}},"default_locale":"en-US","icons":{"60":"http://homescreen.gaiamobile.org:8080/style/images/default.png","120":"/style/icons/Video.png"},"activities":{"view":{"filters":{"type":["video/webm","video/mp4","video/3gpp","video/youtube"]},"href":"view.html","disposition":"inline","returnValue":true}}}

FFOS_RUNTIME_MANIFESTS['http://wallpaper.gaiamobile.org:8080/manifest.webapp'] = {"name":"Wallpaper","description":"Gaia Wallpaper Picker","type":"certified","developer":{"name":"The Gaia Team","url":"https://github.com/mozilla-b2g/gaia"},"permissions":{"settings":{"access":"readwrite"}},"activities":{"pick":{"filters":{"type":["image/jpeg","image/png"],"width":320,"height":480},"disposition":"inline","returnValue":true,"href":"/pick.html"},"share":{"filters":{"type":"image/*","number":1},"disposition":"inline","returnValue":true,"href":"/share.html"}},"icons":{"64":"/style/icons/64/Wallpaper.png"},"locales":{"en-US":{"name":"Wallpaper","description":"Gaia Wallpaper Picker"}},"default_locale":"en-US"}

