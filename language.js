(() => {
  'use strict';

  const messages = {
    'Dashboard — Blue Detected': ['Dashboard — Blue Detected', 'لوحة التحكم — Blue Detected'],
    'Télécharger Blue Detected': ['Download Blue Detected', 'تنزيل Blue Detected'],
    'Vendeur — Blue Detected': ['Seller — Blue Detected', 'البائع — Blue Detected'],
    "Conditions d'utilisation — Blue Detected": ['Terms of Service — Blue Detected', 'شروط الاستخدام — Blue Detected'],
    'Politique de confidentialité — Blue Detected': ['Privacy Policy — Blue Detected', 'سياسة الخصوصية — Blue Detected'],
    'Blue Detected — Protection FiveM': ['Blue Detected — FiveM Protection', 'Blue Detected — حماية FiveM'],
    'Fonctionnalités': ['Features', 'الميزات'],
    'Comment ça marche': ['How it works', 'كيف يعمل'],
    'Questions fréquentes': ['Frequently asked questions', 'الأسئلة الشائعة'],
    'Télécharger': ['Download', 'تنزيل'],
    'Télécharger l’outil': ['Download the tool', 'تنزيل الأداة'],
    'Se connecter': ['Sign in', 'تسجيل الدخول'],
    'Se connecter avec Discord': ['Sign in with Discord', 'تسجيل الدخول عبر Discord'],
    'Accéder au dashboard': ['Open the dashboard', 'فتح لوحة التحكم'],
    'En savoir plus': ['Learn more', 'معرفة المزيد'],
    'Analysez. Détectez.': ['Scan. Detect.', 'افحص. اكتشف.'],
    'Protégez votre serveur.': ['Protect your server.', 'احمِ خادمك.'],
    'Une vérification PC claire pour votre équipe. Détectez les traces suspectes et consultez les rapports depuis un tableau de bord sécurisé.': ['Clear PC checks for your team. Look for suspicious indicators and review reports in a secure dashboard.', 'فحوصات واضحة لأجهزة الكمبيوتر لفريقك. تحقّق من المؤشرات المشبوهة وراجع التقارير من لوحة تحكم آمنة.'],
    'Rapports détaillés': ['Detailed reports', 'تقارير مفصلة'],
    'Accès staff sécurisé': ['Secure staff access', 'وصول آمن لفريق الإدارة'],
    'Détection avancée': ['Advanced detection', 'كشف متقدم'],
    'Signatures et indicateurs connus': ['Known signatures and indicators', 'التواقيع والمؤشرات المعروفة'],
    'Résultats clairs et organisés': ['Clear, organized results', 'نتائج واضحة ومنظمة'],
    'Dashboard sécurisé': ['Secure dashboard', 'لوحة تحكم آمنة'],
    'Vos vérifications au même endroit': ['All your checks in one place', 'جميع فحوصاتك في مكان واحد'],
    'Windows compatible': ['Windows compatible', 'متوافق مع Windows'],
    'Windows 10 et Windows 11': ['Windows 10 and Windows 11', 'Windows 10 وWindows 11'],
    'Un processus simple.': ['A simple process.', 'عملية بسيطة.'],
    'Des résultats exploitables.': ['Actionable results.', 'نتائج قابلة للاستخدام.'],
    'Créez une vérification, transmettez le code au joueur et consultez le rapport dans votre espace staff.': ['Create a check, share the code with the player, and review the report in your staff area.', 'أنشئ فحصًا، وشارك الرمز مع اللاعب، ثم راجع التقرير في مساحة فريق الإدارة.'],
    'Créez un code': ['Create a code', 'إنشاء رمز'],
    'Depuis votre tableau de bord, créez une vérification liée à votre compte.': ['Create a check linked to your account from the dashboard.', 'أنشئ فحصًا مرتبطًا بحسابك من لوحة التحكم.'],
    'Le joueur lance le scan': ['The player starts the scan', 'يبدأ اللاعب الفحص'],
    'Le joueur saisit le code dans l’application et accepte la vérification.': ['The player enters the code in the app and agrees to the check.', 'يدخل اللاعب الرمز في التطبيق ويوافق على الفحص.'],
    'Consultez le rapport': ['Review the report', 'راجع التقرير'],
    'Les résultats remontent dans votre espace, rattachés au code utilisé.': ['Results appear in your area, linked to the code used.', 'تظهر النتائج في مساحتك وترتبط بالرمز المستخدم.'],
    'Tout votre suivi': ['All your activity', 'كل نشاطك'],
    'dans un seul espace.': ['in one place.', 'في مكان واحد.'],
    'Gardez une vue d’ensemble des vérifications, de leur statut et des résultats reçus. Les indicateurs sont des signaux à examiner, pas une preuve automatique de triche.': ['Track checks, their status, and incoming results in one place. Indicators are signals to review, not automatic proof of cheating.', 'تابع الفحوصات وحالاتها ونتائجها في مكان واحد. المؤشرات إشارات تستحق المراجعة وليست دليلًا تلقائيًا على الغش.'],
    'Mes rapports': ['My reports', 'تقاريري'],
    'Paramètres': ['Settings', 'الإعدادات'],
    'Bienvenue sur Blue Detected': ['Welcome to Blue Detected', 'مرحبًا بك في Blue Detected'],
    'Total des scans': ['Total scans', 'إجمالي الفحوصات'],
    'À examiner': ['Needs review', 'بحاجة إلى مراجعة'],
    'À vérifier': ['Review needed', 'تحتاج إلى مراجعة'],
    'Dernier scan': ['Latest scan', 'آخر فحص'],
    'Mis à jour': ['Updated', 'تم التحديث'],
    'Activité des vérifications': ['Check activity', 'نشاط الفحوصات'],
    '7 derniers jours': ['Last 7 days', 'آخر 7 أيام'],
    'Questions fréquentes': ['Frequently asked questions', 'الأسئلة الشائعة'],
    'Les informations importantes avant de commencer.': ['Important information before you begin.', 'معلومات مهمة قبل البدء.'],
    'Comment les résultats sont-ils associés au joueur ?': ['How are results linked to a player?', 'كيف ترتبط النتائج باللاعب؟'],
    'Chaque vérification utilise un code unique. Le rapport envoyé par l’application est associé à ce code et apparaît dans le compte qui l’a créé.': ['Each check uses a unique code. The report submitted by the app is linked to that code and appears in the account that created it.', 'يستخدم كل فحص رمزًا فريدًا. يرتبط التقرير المرسل من التطبيق بهذا الرمز ويظهر في الحساب الذي أنشأه.'],
    'Le score signifie-t-il automatiquement que le joueur triche ?': ['Does a score automatically mean the player is cheating?', 'هل تعني النتيجة تلقائيًا أن اللاعب يغش؟'],
    'Non. Un score et des détections sont des indicateurs. Le staff doit examiner les détails avant de prendre une décision.': ['No. Scores and detections are indicators. Staff should review the details before making a decision.', 'لا. النتائج والاكتشافات مؤشرات فقط. على فريق الإدارة مراجعة التفاصيل قبل اتخاذ أي قرار.'],
    'Comment accéder au tableau de bord ?': ['How do I access the dashboard?', 'كيف أصل إلى لوحة التحكم؟'],
    'Connectez-vous avec Discord, puis activez une clé valide si votre compte le demande.': ['Sign in with Discord, then activate a valid key if prompted.', 'سجّل الدخول عبر Discord، ثم فعّل مفتاحًا صالحًا إذا طُلب منك ذلك.'],
    'Prêt à mieux gérer vos vérifications ?': ['Ready to manage your checks more easily?', 'هل أنت مستعد لإدارة فحوصاتك بسهولة أكبر؟'],
    'Connectez votre compte et retrouvez vos rapports dans un espace organisé.': ['Sign in to find your reports in one organized place.', 'سجّل الدخول للعثور على تقاريرك في مساحة منظمة.'],
    'Un outil d’analyse pour une communauté mieux protégée.': ['A scanning tool for a better-protected community.', 'أداة فحص لمجتمع أكثر حماية.'],
    'Confidentialité': ['Privacy', 'الخصوصية'],
    'Conditions': ['Terms', 'الشروط'],
    'Administration': ['Administration', 'الإدارة'],
    'Tous droits réservés.': ['All rights reserved.', 'جميع الحقوق محفوظة.'],
    'Application de vérification': ['PC Check Application', 'تطبيق فحص الكمبيوتر'],
    "Un membre du staff d'un serveur vous a demandé de lancer cette vérification de votre PC.": ['A server staff member has asked you to run this PC check.', 'طلب منك أحد أعضاء إدارة الخادم إجراء هذا الفحص لجهاز الكمبيوتر.'],
    'Télécharger pour Windows': ['Download for Windows', 'تنزيل لنظام Windows'],
    'Moins de 1 Mo': ['Less than 1 MB', 'أقل من 1 ميجابايت'],
    'Droits administrateur requis': ['Administrator permission required', 'مطلوب إذن المسؤول'],
    'Lancez le fichier téléchargé et acceptez la demande d’autorisation de Windows.': ['Run the downloaded file and accept the Windows permission prompt.', 'شغّل الملف الذي تم تنزيله ووافق على طلب الإذن من Windows.'],
    'Lisez ce qui sera analysé, cochez l’acceptation et saisissez le code reçu.': ['Review what will be scanned, accept the check, and enter the code you received.', 'راجع ما سيتم فحصه، ووافق على الفحص، ثم أدخل الرمز الذي استلمته.'],
    'Patientez une minute. Vous n’avez rien d’autre à faire.': ['Wait while the scan runs. No further action is required.', 'انتظر حتى يكتمل الفحص. لا يلزمك القيام بأي شيء آخر.'],
    'Windows affiche « Windows a protégé votre ordinateur »': ['Windows displays “Windows protected your PC”', 'يعرض Windows رسالة «قام Windows بحماية الكمبيوتر»'],
    'Cliquez sur « Informations complémentaires », puis sur « Exécuter quand même ». Ce message apparaît pour les applications récentes qui ne sont pas encore signées.': ['Select “More info”, then “Run anyway”. This message can appear for newer apps that are not yet signed.', 'اختر «مزيد من المعلومات»، ثم «التشغيل على أي حال». قد تظهر هذه الرسالة للتطبيقات الحديثة التي لم تحصل على توقيع بعد.'],
    'Que vérifie l’application ?': ['What does the app check?', 'ما الذي يفحصه التطبيق؟'],
    'Détails dans la': ['See details in the', 'للتفاصيل راجع'],
    'Espace staff': ['Staff area', 'مساحة فريق الإدارة'],
    'Espace vendeur': ['Seller area', 'مساحة البائع'],
    "Conditions d'utilisation": ['Terms of Service', 'شروط الاستخدام'],
    'Pour les propriétaires et le staff de serveurs utilisant Blue Detected.': ['For server owners and staff using Blue Detected.', 'لمالكي الخوادم وفرق الإدارة التي تستخدم Blue Detected.'],
    '1. Objet': ['1. Purpose', '1. الغرض'],
    'Blue Detected fournit un outil permettant à un staff de demander à un joueur une vérification anti-triche de son PC, avec son accord, et de consulter le rapport.': ['Blue Detected lets server staff request a PC anti-cheat check from a player with their consent, and review the resulting report.', 'تتيح Blue Detected لفريق إدارة الخادم طلب فحص لمكافحة الغش على جهاز اللاعب بعد موافقته، ثم مراجعة التقرير الناتج.'],
    '2. Obligations du staff': ['2. Staff responsibilities', '2. مسؤوليات فريق الإدارة'],
    "Informer le joueur avant la vérification et obtenir son consentement libre et explicite ; ne jamais imposer l'outil à une personne qui n'a pas accepté.": ['Inform the player before the check and obtain their free and explicit consent. Never force the tool on someone who has not agreed.', 'أبلغ اللاعب قبل الفحص واحصل على موافقته الصريحة والطوعية. لا تفرض الأداة على من لم يوافق.'],
    'Utiliser les rapports uniquement pour la modération anti-triche de son serveur, et ne pas les diffuser publiquement.': ['Use reports only for anti-cheat moderation on your server; do not publish them.', 'استخدم التقارير فقط لإدارة مكافحة الغش في خادمك، ولا تنشرها للعامة.'],
    "Ne pas conclure à de la triche sur la seule base d'un indice : le rapport est un indicateur à vérifier manuellement.": ['Do not conclude that someone cheated based only on an indicator; reports require manual review.', 'لا تستنتج وقوع الغش اعتمادًا على مؤشر واحد؛ يجب مراجعة التقارير يدويًا.'],
    "Ne pas conclure à de la triche sur la seule base d'un indice : le rapport est un": ['Do not conclude that someone cheated based only on an indicator; a report is an', 'لا تستنتج وقوع الغش اعتمادًا على مؤشر واحد؛ فالتقرير عبارة عن'],
    ' à vérifier manuellement.': [' that requires manual review.', ' الذي يتطلب مراجعة يدوية.'],
    'Les indicateurs sont des signaux à examiner, pas une preuve automatique de triche.': ['Indicators are signals to review, not automatic proof of cheating.', 'المؤشرات إشارات تستحق المراجعة وليست دليلًا تلقائيًا على الغش.'],
    'Respecter les lois de protection des données applicables et supprimer les rapports devenus inutiles (suppression automatique après {{DAYS}} jours).': ['Follow applicable data-protection laws and delete reports that are no longer needed (automatic deletion after {{DAYS}} days).', 'التزم بقوانين حماية البيانات المعمول بها واحذف التقارير التي لم تعد مطلوبة (تحذف تلقائيًا بعد {{DAYS}} يومًا).'],
    'Ne pas partager sa clé ni son compte ; la clé est liée à un seul compte Discord.': ['Do not share your key or account. A key is linked to one Discord account only.', 'لا تشارك مفتاحك أو حسابك؛ يرتبط المفتاح بحساب Discord واحد فقط.'],
    '3. Abonnement': ['3. Subscription', '3. الاشتراك'],
    'Une clé donne accès au service pour la durée achetée (par exemple 30 jours), à compter de son activation. Elle peut être désactivée en cas d’abus ou de non-respect des présentes conditions.': ['A key provides access for the purchased period (for example, 30 days) starting when activated. It may be disabled for abuse or violations of these terms.', 'يمنح المفتاح إمكانية الوصول طوال المدة المدفوعة (مثل 30 يومًا) بدءًا من تفعيله. ويمكن تعطيله في حالة إساءة الاستخدام أو مخالفة هذه الشروط.'],
    '4. Limites': ['4. Limitations', '4. الحدود'],
    'Aucun outil ne détecte 100 % des logiciels de triche, et des faux positifs sont possibles. Le service est fourni « en l’état » ; l’exploitant ne peut être tenu responsable des décisions de sanction prises par le staff.': ['No tool detects every cheat, and false positives are possible. The service is provided “as is”; the operator is not responsible for moderation decisions made by staff.', 'لا تستطيع أي أداة اكتشاف جميع برامج الغش، وقد تحدث نتائج إيجابية كاذبة. تُقدّم الخدمة «كما هي»، ولا يتحمل مشغّلها مسؤولية قرارات العقوبة التي يتخذها فريق الإدارة.'],
    '5. Données personnelles': ['5. Personal data', '5. البيانات الشخصية'],
    'Voir la': ['See the', 'راجع'],
    'Dernière mise à jour : octobre 2026.': ['Last updated: October 2026.', 'آخر تحديث: أكتوبر 2026.'],
    'Contact :': ['Contact:', 'التواصل:'],
    'Politique de confidentialité': ['Privacy Policy', 'سياسة الخصوصية'],
    'Blue Detected — outil de vérification anti-triche pour serveurs FiveM.': ['Blue Detected — anti-cheat checking tool for FiveM servers.', 'Blue Detected — أداة فحص لمكافحة الغش لخوادم FiveM.'],
    '1. Qui reçoit vos données ?': ['1. Who receives your data?', '1. من يتلقى بياناتك؟'],
    "La vérification est demandée par le staff d'un serveur de jeu. Les résultats sont visibles uniquement par le staff du serveur qui vous a donné le code, via son compte Discord. Nous ne vendons pas ces données. Les hébergeurs et prestataires de stockage nécessaires au fonctionnement du service peuvent les traiter pour notre compte.": ['A game server’s staff requests the check. Results are visible only to that server’s staff through its Discord account. We do not sell this data. Hosting and storage providers needed to operate the service may process it on our behalf.', 'يطلب فريق إدارة خادم اللعبة إجراء الفحص. ولا تظهر النتائج إلا لفريق الخادم الذي زودك بالرمز عبر حسابه على Discord. لا نبيع هذه البيانات. وقد يعالجها مزودو الاستضافة والتخزين اللازمون لتشغيل الخدمة نيابةً عنا.'],
    '2. Ce qui est analysé sur votre PC': ['2. What is scanned on your PC', '2. ما الذي يتم فحصه على جهازك'],
    'Noms des programmes en cours d’exécution et de l’historique de lancement de Windows (Prefetch, PcaSvc, BAM)': ['Names of running programs and Windows execution history (Prefetch, PcaSvc, BAM)', 'أسماء البرامج قيد التشغيل وسجل تشغيل Windows (Prefetch وPcaSvc وBAM)'],
    'Noms et empreintes numériques (hash) de fichiers dans vos dossiers utilisateur, et dans les dossiers FiveM et GTA V': ['File names and hashes in your user folders and FiveM/GTA V folders', 'أسماء الملفات وبصماتها الرقمية (hash) في مجلدات المستخدم ومجلدات FiveM وGTA V'],
    'Noms de domaines récemment contactés (cache DNS)': ['Recently contacted domain names (DNS cache)', 'أسماء النطاقات التي تم الاتصال بها مؤخرًا (ذاكرة DNS المؤقتة)'],
    'État des journaux Windows (activés, effacés) et de certains services système': ['Status of Windows logs (enabled or cleared) and selected system services', 'حالة سجلات Windows (مفعّلة أو ممسوحة) وبعض خدمات النظام'],
    'Programmes de nettoyage installés ou lancés': ['Installed or recently run cleanup programs', 'برامج التنظيف المثبتة أو التي تم تشغيلها'],
    'Présence de mots-clés liés à des logiciels de triche dans les derniers logs FiveM (seul le résultat est envoyé, pas le contenu des logs)': ['Cheat-related keywords in recent FiveM logs (only the result is sent, not log contents)', 'كلمات مفتاحية مرتبطة بالغش في سجلات FiveM الحديثة (يُرسل ملخص النتيجة فقط، وليس محتوى السجلات)'],
    '3. Ce qui est envoyé au staff': ['3. What is sent to staff', '3. ما يتم إرساله لفريق الإدارة'],
    'Un rapport contenant : le nom de votre PC, la version de Windows, un identifiant matériel (HWID), la date de l’analyse, et la liste des éléments trouvés avec leur chemin (qui peut contenir votre nom d’utilisateur Windows).': ['A report containing your PC name, Windows version, hardware identifier (HWID), scan date, and findings with their paths (which may include your Windows username).', 'يتضمن التقرير اسم جهازك وإصدار Windows ومعرّف الجهاز (HWID) وتاريخ الفحص والعناصر التي تم العثور عليها مع مساراتها (وقد تحتوي على اسم مستخدم Windows).'],
    '4. Ce qui n’est jamais lu ni envoyé': ['4. What is never read or sent', '4. ما لا تتم قراءته أو إرساله مطلقًا'],
    'Vos documents personnels, mots de passe, historique de navigation, messages, photos, captures d’écran ou le contenu de vos fichiers.': ['Your personal documents, passwords, browsing history, messages, photos, screenshots, or file contents.', 'مستنداتك الشخصية أو كلمات المرور أو سجل التصفح أو الرسائل أو الصور أو لقطات الشاشة أو محتويات ملفاتك.'],
    '5. Votre consentement': ['5. Your consent', '5. موافقتك'],
    'L’analyse ne démarre qu’après que vous avez coché la case d’acceptation et saisi le code. Vous pouvez refuser en fermant l’application ; le staff décidera alors des suites selon le règlement de son serveur.': ['The scan starts only after you accept and enter the code. You can decline by closing the app; staff will then proceed according to their server rules.', 'لا يبدأ الفحص إلا بعد الموافقة وإدخال الرمز. يمكنك الرفض بإغلاق التطبيق؛ وسيتصرف فريق الإدارة بعد ذلك وفقًا لقواعد خادمه.'],
    '6. Durée de conservation': ['6. Retention period', '6. مدة الاحتفاظ'],
    'Les rapports sont supprimés automatiquement après {{DAYS}} jours. Le staff peut aussi les supprimer à tout moment.': ['Reports are automatically deleted after {{DAYS}} days. Staff may also delete them at any time.', 'تحذف التقارير تلقائيًا بعد {{DAYS}} يومًا. ويمكن لفريق الإدارة حذفها في أي وقت.'],
    'En production, les données sont stockées dans la base MongoDB configurée par l’exploitant du service. Les données de connexion au compte Discord ne comprennent que l’identifiant, le nom d’affichage et l’avatar.': ['In production, data is stored in the MongoDB database configured by the service operator. Discord sign-in data is limited to your ID, display name, and avatar.', 'في بيئة الإنتاج، تُخزّن البيانات في قاعدة MongoDB التي يهيئها مشغّل الخدمة. تقتصر بيانات تسجيل الدخول عبر Discord على المعرّف واسم العرض والصورة الرمزية.'],
    '7. Comptes du staff': ['7. Staff accounts', '7. حسابات فريق الإدارة'],
    'La connexion du staff se fait via Discord (autorisation « identify » uniquement). Nous conservons l’identifiant Discord, le nom d’affichage et l’avatar pour gérer l’accès. Aucun e-mail ni mot de passe Discord n’est reçu.': ['Staff sign in through Discord using the “identify” permission only. We store the Discord ID, display name, and avatar to manage access. We do not receive Discord email addresses or passwords.', 'يسجل فريق الإدارة الدخول عبر Discord باستخدام صلاحية «identify» فقط. نحتفظ بمعرّف Discord واسم العرض والصورة الرمزية لإدارة الوصول. ولا نتلقى البريد الإلكتروني أو كلمة مرور Discord.'],
    '8. Vos droits': ['8. Your rights', '8. حقوقك'],
    'Vous pouvez demander l’accès, la rectification ou la suppression de vos données, ou vous opposer à leur traitement, en écrivant à': ['You may request access, correction, or deletion of your data, or object to its processing, by contacting', 'يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها أو الاعتراض على معالجتها عبر مراسلة'],
    '9. Sécurité et limites': ['9. Security and limitations', '9. الأمان والحدود'],
    'En production, les échanges doivent être chiffrés par HTTPS et l’accès aux rapports est protégé par connexion. Les résultats sont des indicateurs et ne constituent pas une preuve : une décision de sanction doit toujours être vérifiée manuellement par un humain.': ['In production, connections must be encrypted with HTTPS and reports are protected by sign-in. Results are indicators, not proof; a person must review them before any disciplinary decision.', 'في بيئة الإنتاج، يجب تشفير الاتصالات باستخدام HTTPS وحماية التقارير بتسجيل الدخول. النتائج مؤشرات وليست دليلًا؛ ويجب أن يراجعها شخص قبل اتخاذ أي إجراء تأديبي.'],
    'Clés d’abonnement': ['Subscription keys', 'مفاتيح الاشتراك'],
    'Générez, désactivez ou déliez les clés de vos clients.': ['Create, disable, or unlink your customers’ keys.', 'أنشئ مفاتيح عملائك أو عطّلها أو ألغِ ربطها.'],
    'Mot de passe vendeur': ['Seller password', 'كلمة مرور البائع'],
    'Générer des clés': ['Create keys', 'إنشاء مفاتيح'],
    'Durée (jours)': ['Duration (days)', 'المدة (أيام)'],
    'Nombre': ['Quantity', 'العدد'],
    'Client': ['Customer', 'العميل'],
    'Nom du client': ['Customer name', 'اسم العميل'],
    'Générer': ['Generate', 'إنشاء'],
    'Voir toutes les clés': ['View all keys', 'عرض جميع المفاتيح'],
    'Gérer une clé': ['Manage a key', 'إدارة مفتاح'],
    'Désactiver': ['Disable', 'تعطيل'],
    'Délier du compte Discord': ['Unlink from Discord account', 'إلغاء الربط بحساب Discord'],
    'Connectez-vous avec votre jeton vendeur pour commencer.': ['Enter your seller token to get started.', 'أدخل رمز البائع للبدء.'],
    'Chargement…': ['Loading…', 'جارٍ التحميل…'],
    'Espace staff': ['Staff area', 'مساحة فريق الإدارة'],
    'Connectez-vous pour créer des codes d’accès et lire les rapports. Votre session reste active 24 heures avant de demander une nouvelle connexion.': ['Sign in to create access codes and view reports. Your session lasts 24 hours before you need to sign in again.', 'سجّل الدخول لإنشاء رموز الوصول وقراءة التقارير. تستمر الجلسة 24 ساعة قبل طلب تسجيل الدخول مجددًا.'],
    'New here? Same button — your Discord ID becomes your login.': ['New here? Use the same button — your Discord ID becomes your login.', 'جديد هنا؟ استخدم الزر نفسه — سيصبح معرّف Discord وسيلة تسجيل دخولك.'],
    'En continuant, vous acceptez les': ['By continuing, you agree to the', 'بالمتابعة، فإنك توافق على'],
    'Activez votre clé': ['Activate your key', 'فعّل مفتاحك'],
    'La clé sera liée à ce compte Discord et ne pourra plus servir à un autre. Les jours commencent à l’activation.': ['The key will be linked to this Discord account and cannot be used with another. Your subscription starts when activated.', 'سيتم ربط المفتاح بحساب Discord هذا ولن يمكن استخدامه مع حساب آخر. تبدأ مدة الاشتراك عند التفعيل.'],
    'Activer la clé': ['Activate key', 'تفعيل المفتاح'],
    'Codes d’accès': ['Access codes', 'رموز الوصول'],
    'Résultats': ['Results', 'النتائج'],
    'Générer un code': ['Create a code', 'إنشاء رمز'],
    'Télécharger l’outil': ['Download the tool', 'تنزيل الأداة'],
    'Déconnexion': ['Sign out', 'تسجيل الخروج'],
    '// Registre d’accès': ['// Access register', '// سجل الوصول'],
    'Créez jusqu’à': ['Create up to', 'أنشئ حتى'],
    'codes à la fois. Un code reste disponible jusqu’à ce que le joueur l’utilise ou qu’il expire (24 h).': ['codes at a time. A code stays available until used by a player or until it expires (24 hours).', 'رموز في المرة الواحدة. يظل الرمز متاحًا حتى يستخدمه اللاعب أو تنتهي صلاحيته (24 ساعة).'],
    'Rechercher par joueur, code ou statut': ['Search by player, code, or status', 'ابحث باللاعب أو الرمز أو الحالة'],
    'Rechercher joueur, code, statut…': ['Search player, code, status…', 'ابحث عن لاعب أو رمز أو حالة…'],
    'Effacer la recherche': ['Clear search', 'مسح البحث'],
    'Effacer': ['Clear', 'مسح'],
    'Actualiser': ['Refresh', 'تحديث'],
    'Disponibles': ['Available', 'متاح'],
    'En scan': ['Scanning', 'قيد الفحص'],
    'Utilisés': ['Used', 'مستخدم'],
    'Expirés': ['Expired', 'منتهي الصلاحية'],
    'Code': ['Code', 'الرمز'],
    'Statut': ['Status', 'الحالة'],
    'Résultat': ['Result', 'النتيجة'],
    'Jeu': ['Game', 'اللعبة'],
    'Expire': ['Expires', 'ينتهي'],
    'Détection': ['Detection', 'الاكتشاف'],
    'Nom': ['Name', 'الاسم'],
    'Créé': ['Created', 'تاريخ الإنشاء'],
    '1 code = 1 scan · valable 24 h · jusqu’à': ['1 code = 1 scan · valid for 24 hours · up to', 'رمز واحد = فحص واحد · صالح لمدة 24 ساعة · حتى'],
    'codes disponibles · Les rapports sont supprimés après': ['available codes · Reports are deleted after', 'رموز متاحة · تُحذف التقارير بعد'],
    'jours.': ['days.', 'يومًا.'],
    'Nom du joueur (facultatif) pour le retrouver dans la liste.': ['Player name (optional), to find them in the list.', 'اسم اللاعب (اختياري) لتسهيل العثور عليه في القائمة.'],
    'Nom du joueur': ['Player name', 'اسم اللاعب'],
    'Créer': ['Create', 'إنشاء'],
    'Copier': ['Copy', 'نسخ'],
    'Copier le code': ['Copy code', 'نسخ الرمز'],
    'Copier lien + code': ['Copy link + code', 'نسخ الرابط والرمز'],
    'Code créé': ['Code created', 'تم إنشاء الرمز'],
    'Code copié': ['Code copied', 'تم نسخ الرمز'],
    'Lien et code copiés': ['Link and code copied', 'تم نسخ الرابط والرمز'],
    'Disponible': ['Available', 'متاح'],
    'Utilisé': ['Used', 'مستخدم'],
    'Expiré': ['Expired', 'منتهي الصلاحية'],
    'En attente': ['Waiting', 'قيد الانتظار'],
    'Risque élevé': ['High risk', 'خطورة عالية'],
    'Propre': ['No known indicators', 'لا توجد مؤشرات معروفة'],
    'Tous': ['All', 'الكل'],
    'Tout': ['All', 'الكل'],
    'propres': ['no known indicators', 'دون مؤشرات معروفة'],
    'à vérifier': ['to review', 'تحتاج إلى مراجعة'],
    'risque élevé': ['high risk', 'خطورة عالية'],
    'Code actif': ['Active code', 'رمز نشط'],
    'DISPONIBLE': ['AVAILABLE', 'متاح'],
    'Copier le résumé': ['Copy summary', 'نسخ الملخص'],
    'Supprimer': ['Delete', 'حذف'],
    'Fermer': ['Close', 'إغلاق'],
    'En attente du joueur. Le rapport apparaîtra ici dès que la vérification sera terminée.': ['Waiting for the player. The report will appear here when the check is complete.', 'بانتظار اللاعب. سيظهر التقرير هنا بعد اكتمال الفحص.'],
    'PC': ['PC', 'الكمبيوتر'],
    'Système': ['System', 'النظام'],
    'Analyse': ['Scan', 'الفحص'],
    'Fichiers': ['Files', 'الملفات'],
    'analysés': ['scanned', 'تم فحصها'],
    'processus': ['processes', 'عمليات'],
    'Détail technique': ['Technical details', 'التفاصيل التقنية'],
    'Détail copié': ['Details copied', 'تم نسخ التفاصيل'],
    'Aucun élément pour ce filtre.': ['No items match this filter.', 'لا توجد عناصر تطابق عامل التصفية.'],
    'Rien à signaler.': ['Nothing to report.', 'لا توجد نتائج للإبلاغ عنها.'],
    'Aucun résultat pour ce filtre.': ['No results match this filter.', 'لا توجد نتائج تطابق عامل التصفية.'],
    'Aucun code pour le moment. Cliquez sur « Générer un code ».': ['No codes yet. Select “Create a code” to get started.', 'لا توجد رموز بعد. اختر «إنشاء رمز» للبدء.'],
    'Aucun code connu détecté': ['No known cheat detected', 'لم يتم اكتشاف غش معروف'],
    'Aucun cheat connu détecté': ['No known cheat detected', 'لم يتم اكتشاف غش معروف'],
    'Aucun cheat connu, éléments à vérifier': ['No known cheat; some items need review', 'لا يوجد غش معروف؛ توجد عناصر تحتاج إلى مراجعة'],
    'Éléments très suspects': ['Highly suspicious items', 'عناصر مثيرة للريبة بدرجة كبيرة'],
    'Menace détectée par Microsoft Defender — vérifier dans Sécurité Windows': ['Microsoft Defender detected a threat — review in Windows Security', 'اكتشف Microsoft Defender تهديدًا — راجعه في أمان Windows'],
    'Cheat détecté :': ['Cheat detected:', 'تم اكتشاف غش:'],
    'Programme de nettoyage détecté :': ['Cleanup program detected:', 'تم اكتشاف برنامج تنظيف:'],
    'Aucun programme de nettoyage détecté': ['No cleanup program detected', 'لم يتم اكتشاف برنامج تنظيف'],
    'L’indice clean est indicatif : ce n’est pas une preuve. La décision finale appartient au staff.': ['The clean score is an indicator, not proof. The staff makes the final decision.', 'مؤشر النظافة إرشادي وليس دليلًا. القرار النهائي لفريق الإدارة.'],
    'Critique': ['Critical', 'حرج'],
    'Info': ['Info', 'معلومات'],
    'Filtrer…': ['Filter…', 'تصفية…'],
    'Comprendre l’alerte Microsoft Defender': ['Understanding the Microsoft Defender alert', 'فهم تنبيه Microsoft Defender'],
    'Copier le résumé': ['Copy summary', 'نسخ الملخص'],
    'Supprimer définitivement ce rapport ?': ['Permanently delete this report?', 'هل تريد حذف هذا التقرير نهائيًا؟'],
    'Impossible de charger les rapports. Réessayez.': ['Could not load reports. Please try again.', 'تعذر تحميل التقارير. حاول مرة أخرى.'],
    'Rapport reçu :': ['Report received:', 'تم استلام التقرير:'],
    'Sans nom': ['Unnamed', 'بلا اسم'],
    'à l’instant': ['just now', 'الآن'],
    'à l’instant': ['just now', 'الآن'],
    'il y a': ['ago', 'منذ'],
    'restant': ['remaining', 'متبقية'],
    'restants': ['remaining', 'متبقية'],
    'restante': ['remaining', 'متبقية'],
    'restantes': ['remaining', 'متبقية'],
    'jour': ['day', 'يوم'],
    'jours': ['days', 'أيام'],
    'Clean': ['Clean', 'نظيف'],
    'Résumé copié': ['Summary copied', 'تم نسخ الملخص'],
    'HWID copié': ['HWID copied', 'تم نسخ HWID'],
    'Ouvrir ↗': ['Open ↗', 'فتح ↗'],
    'Délai expiré. Reconnectez-vous avec Discord pour continuer.': ['Your session expired. Sign in with Discord to continue.', 'انتهت جلستك. سجّل الدخول عبر Discord للمتابعة.'],
    'Votre session de 24 heures a expiré. Reconnectez-vous avec Discord pour continuer.': ['Your 24-hour session expired. Sign in with Discord to continue.', 'انتهت جلسة الـ24 ساعة. سجّل الدخول عبر Discord للمتابعة.'],
    'Votre clé a expiré. Entrez une nouvelle clé.': ['Your key has expired. Enter a new key.', 'انتهت صلاحية مفتاحك. أدخل مفتاحًا جديدًا.'],
    'Votre clé a été désactivée.': ['Your key has been disabled.', 'تم تعطيل مفتاحك.'],
    'Erreur': ['Error', 'خطأ'],
    "La vérification est demandée par le staff d'un serveur de jeu. Les résultats sont visibles": ['A game server’s staff requests the check. Results are visible', 'يطلب فريق إدارة خادم اللعبة إجراء الفحص. وتظهر النتائج'],
    'uniquement par le staff du serveur qui vous a donné le code': ['only to the staff of the server that gave you the code', 'لفريق الخادم الذي أعطاك الرمز فقط'],
    ', via son compte Discord. Nous ne vendons pas ces données. Les hébergeurs et prestataires de stockage nécessaires au fonctionnement du service peuvent les traiter pour notre compte.': [', via its Discord account. We do not sell this data. Hosting and storage providers needed to operate the service may process it on our behalf.', ' عبر حساب Discord الخاص به. لا نبيع هذه البيانات. وقد يعالجها مزودو الاستضافة والتخزين اللازمون لتشغيل الخدمة نيابةً عنا.'],
    'consentement libre et explicite': ['free and explicit consent', 'الموافقة الصريحة والطوعية'],
    'Informer le joueur avant la vérification et obtenir son': ['Inform the player before the check and obtain their', 'أبلغ اللاعب قبل الفحص واحصل على'],
    "; ne jamais imposer l'outil à une personne qui n'a pas accepté.": ['. Never force the tool on someone who has not agreed.', '. لا تفرض الأداة على من لم يوافق.'],
    'indicateur': ['indicator', 'مؤشر'],
    'indicateurs': ['indicators', 'مؤشرات'],
    'un indicateur': ['an indicator', 'مؤشر'],
    'preuve': ['proof', 'دليل'],
    'Conditions d’utilisation': ['Terms of Service', 'شروط الاستخدام'],
    'Confidentialité': ['Privacy', 'الخصوصية'],
    'Accueil': ['Home', 'الرئيسية'],
    'Activez votre clé': ['Activate your key', 'فعّل مفتاحك'],
    'La clé sera liée à ce compte Discord et ne pourra plus servir à un autre. Les jours commencent à l’activation.': ['The key will be linked to this Discord account and cannot be used with another. Your subscription starts when activated.', 'سيتم ربط المفتاح بحساب Discord هذا ولن يمكن استخدامه مع حساب آخر. تبدأ مدة الاشتراك عند التفعيل.'],
    "Connectez-vous pour créer des codes d'accès et lire les rapports. Votre session reste active 24 heures avant de demander une nouvelle connexion.": ['Sign in to create access codes and view reports. Your session lasts 24 hours before you need to sign in again.', 'سجّل الدخول لإنشاء رموز الوصول وقراءة التقارير. تستمر الجلسة 24 ساعة قبل طلب تسجيل الدخول مجددًا.'],
    'Activez la clé': ['Activate key', 'تفعيل المفتاح'],
    'Anti-Cheat Dashboard': ['Anti-cheat dashboard', 'لوحة مكافحة الغش'],
    'Codes d’accès': ['Access codes', 'رموز الوصول'],
    "Créez jusqu'à": ['Create up to', 'أنشئ حتى'],
    "codes à la fois. Un code reste disponible jusqu'à ce que le joueur l'utilise ou qu'il expire (24 h).": ['codes at a time. A code stays available until used by a player or expires (24 hours).', 'رموز في المرة الواحدة. يظل الرمز متاحًا حتى يستخدمه اللاعب أو تنتهي صلاحيته (24 ساعة).'],
    'Filtrer les codes disponibles': ['Filter available codes', 'تصفية الرموز المتاحة'],
    'Filtrer les codes en scan': ['Filter codes being scanned', 'تصفية الرموز قيد الفحص'],
    'Filtrer les codes utilisés': ['Filter used codes', 'تصفية الرموز المستخدمة'],
    'Filtrer les codes expirés': ['Filter expired codes', 'تصفية الرموز المنتهية'],
    'restant': ['remaining', 'متبقٍ'],
    'restants': ['remaining', 'متبقية'],
    'En attente du joueur. Le rapport apparaîtra ici dès que la vérification sera terminée.': ['Waiting for the player. The report will appear here when the check is complete.', 'بانتظار اللاعب. سيظهر التقرير هنا بعد اكتمال الفحص.'],
    'Ouvrir le rapport de': ['Open report for', 'فتح تقرير'],
    'Le rapport est un indicateur à vérifier manuellement.': ['The report is an indicator that must be reviewed manually.', 'التقرير مؤشر يجب مراجعته يدويًا.'],
    'Aucun élément pour ce filtre.': ['No items match this filter.', 'لا توجد عناصر تطابق عامل التصفية.'],
    'Requête en cours…': ['Request in progress…', 'جارٍ تنفيذ الطلب…'],
    'Connectez-vous avec votre jeton vendeur pour commencer.': ['Enter your seller token to get started.', 'أدخل رمز البائع للبدء.'],
    'Saisissez le jeton vendeur configuré sur le serveur.': ['Enter the seller token configured on the server.', 'أدخل رمز البائع الذي تم إعداده على الخادم.'],
    'Échec :': ['Failed:', 'فشل:'],
    'Windows 10 et 11': ['Windows 10 and 11', 'Windows 10 و11'],
    'En production, les échanges doivent être chiffrés par HTTPS et l’accès aux rapports est protégé par connexion. Les résultats sont des': ['In production, connections must be encrypted with HTTPS and reports are protected by sign-in. Results are', 'في بيئة الإنتاج، يجب تشفير الاتصالات باستخدام HTTPS وحماية التقارير بتسجيل الدخول. النتائج'],
    ' et ne constituent pas une ': [' and are not ', ' وليست '],
    ' : une décision de sanction doit toujours être vérifiée manuellement par un humain.': ['. A person must review the results before any disciplinary decision.', '. ويجب على شخص مراجعة النتائج قبل اتخاذ أي إجراء تأديبي.'],
    'Coordonnées de contact non configurées.': ['Contact details are not configured.', 'بيانات التواصل غير مُهيأة.'],
    'Coordonnées de contact non configurées': ['Contact details are not configured', 'بيانات التواصل غير مُهيأة'],
    ' en indiquant votre code de vérification.': [' and include your verification code.', ' مع ذكر رمز التحقق الخاص بك.'],
    'Les rapports sont supprimés automatiquement après': ['Reports are automatically deleted after', 'تحذف التقارير تلقائيًا بعد'],
    '. Le staff peut aussi les supprimer à tout moment.': ['. Staff may also delete them at any time.', '. ويمكن لفريق الإدارة حذفها في أي وقت.'],
    'Opération terminée.': ['Operation completed.', 'اكتملت العملية.'],
    'Aucune clé créée.': ['No keys created.', 'لم يتم إنشاء أي مفاتيح.'],
    'Erreur HTTP': ['HTTP error', 'خطأ HTTP'],
    'conditions': ['terms', 'الشروط'],
    'politique de confidentialité': ['privacy policy', 'سياسة الخصوصية'],
    'et la': ['and the', 'و'],
    'Continue with Discord': ['Continue with Discord', 'المتابعة عبر Discord'],
    'Dashboard': ['Dashboard', 'لوحة التحكم'],
    'OVERVIEW': ['OVERVIEW', 'نظرة عامة'],
    'Fichiers analysés': ['Files scanned', 'الملفات التي تم فحصها'],
    'Analyse du système': ['System scan', 'فحص النظام'],
    'Registre Windows': ['Windows Registry', 'سجل Windows'],
    'Clés et traces': ['Keys and traces', 'المفاتيح والآثار'],
    'Processus actifs': ['Active processes', 'العمليات النشطة'],
    'Signatures connues': ['Known signatures', 'التواقيع المعروفة'],
    'Logs système': ['System logs', 'سجلات النظام'],
    'Éléments pertinents': ['Relevant items', 'العناصر ذات الصلة'],
    'LIVE SCAN': ['LIVE SCAN', 'فحص مباشر'],
    'ANALYSIS': ['ANALYSIS', 'تحليل'],
    'Rapports générés': ['Reports generated', 'التقارير المنشأة'],
    'Protection active': ['Protection active', 'الحماية نشطة'],
    'System secured': ['System secured', 'النظام محمي'],
    'Scan engine ready': ['Scan engine ready', 'محرك الفحص جاهز'],
    'SIMPLE WORKFLOW': ['SIMPLE WORKFLOW', 'سير عمل بسيط'],
    'BUILT FOR COMMUNITIES': ['BUILT FOR COMMUNITIES', 'مصمم للمجتمعات'],
    'READY TO START?': ['READY TO START?', 'هل أنت مستعد للبدء؟'],
    'Blue Detected : vérifications PC et rapports anti-triche pour les communautés FiveM.': ['Blue Detected: PC checks and anti-cheat reports for FiveM communities.', 'Blue Detected: فحوصات الكمبيوتر وتقارير مكافحة الغش لمجتمعات FiveM.'],
    'À examiner': ['Needs review', 'بحاجة إلى مراجعة'],
    '© 2026 Blue Detected. Tous droits réservés.': ['© 2026 Blue Detected. All rights reserved.', '© 2026 Blue Detected. جميع الحقوق محفوظة.'],
    'Échec :': ['Failed:', 'فشل:'],
    'Privacy — Blue Detected': ['Privacy — Blue Detected', 'الخصوصية — Blue Detected'],
    'Privacy notice': ['Privacy notice', 'إشعار الخصوصية'],
    'A scan is sent only after the person using the device enters a valid one-time code and explicitly accepts the scan and report submission.': ['A scan is sent only after the person using the device enters a valid one-time code and explicitly accepts the scan and report submission.', 'لا يُرسل الفحص إلا بعد أن يُدخل مستخدم الجهاز رمزًا صالحًا لمرة واحدة ويوافق صراحةً على الفحص وإرسال التقرير.'],
    'Who receives the report': ['Who receives the report', 'من يتلقى التقرير'],
    'The report is linked to the owner account that created the code and is visible to that owner and the site administrator. The client cannot select a different recipient.': ['The report is linked to the owner account that created the code and is visible to that owner and the site administrator. The client cannot select a different recipient.', 'يرتبط التقرير بحساب المالك الذي أنشأ الرمز، ويظهر لذلك المالك ولمدير الموقع فقط. ولا يمكن للتطبيق تحديد مستلم آخر.'],
    'Report contents and retention': ['Report contents and retention', 'محتوى التقرير ومدة الاحتفاظ'],
    'Reports may contain device identifiers, operating-system and hardware details, antivirus status, scan coverage and findings. Reports remain stored until the responsible owner or administrator deletes them.': ['Reports may contain device identifiers, operating-system and hardware details, antivirus status, scan coverage and findings. Reports remain stored until the responsible owner or administrator deletes them.', 'قد تتضمن التقارير معرّفات الجهاز وتفاصيل نظام التشغيل والأجهزة وحالة مضاد الفيروسات وتغطية الفحص والنتائج. وتظل التقارير محفوظة حتى يحذفها المالك المسؤول أو مدير الموقع.'],
    'Storage': ['Storage', 'التخزين'],
    'The local demo uses temporary in-memory storage. Data is lost when its process stops.': ['The local demo uses temporary in-memory storage. Data is lost when its process stops.', 'يستخدم العرض المحلي تخزينًا مؤقتًا في الذاكرة. تُفقد البيانات عند إيقاف تشغيله.'],
    'Reports are stored in the configured PostgreSQL database.': ['Reports are stored in the configured PostgreSQL database.', 'تُخزّن التقارير في قاعدة بيانات PostgreSQL التي تم إعدادها.'],
    'This service does not perform hidden scans or forward reports to an arbitrary webhook. Results are indicators, not proof of wrongdoing.': ['This service does not perform hidden scans or forward reports to an arbitrary webhook. Results are indicators, not proof of wrongdoing.', 'لا تجري هذه الخدمة عمليات فحص خفية ولا ترسل التقارير إلى عناوين webhook عشوائية. النتائج مؤشرات وليست دليلًا على ارتكاب مخالفة.'],
    'Sign in': ['Sign in', 'تسجيل الدخول'],
    'Sign in · Blue Detected': ['Sign in · Blue Detected', 'تسجيل الدخول · Blue Detected'],
    'Privacy': ['Privacy', 'الخصوصية'],
    'Administrator dashboard': ['Administrator dashboard', 'لوحة تحكم المسؤول'],
    'Administrator dashboard · Blue Detected': ['Administrator dashboard · Blue Detected', 'لوحة تحكم المسؤول · Blue Detected'],
    'Owner dashboard': ['Owner dashboard', 'لوحة تحكم المالك'],
    'Report details': ['Report details', 'تفاصيل التقرير'],
    'Report details · Blue Detected': ['Report details · Blue Detected', 'تفاصيل التقرير · Blue Detected'],
    'Confirm report deletion': ['Confirm report deletion', 'تأكيد حذف التقرير'],
    'Confirm report deletion · Blue Detected': ['Confirm report deletion · Blue Detected', 'تأكيد حذف التقرير · Blue Detected'],
    'Key created': ['Key created', 'تم إنشاء المفتاح'],
    'Key created · Blue Detected': ['Key created · Blue Detected', 'تم إنشاء المفتاح · Blue Detected'],
    'Username or password': ['Username or password', 'اسم المستخدم أو كلمة المرور'],
    'Username': ['Username', 'اسم المستخدم'],
    'Temporary password': ['Temporary password', 'كلمة مرور مؤقتة'],
    'Password': ['Password', 'كلمة المرور'],
    'Sign out': ['Sign out', 'تسجيل الخروج'],
    'Sign-out form': ['Sign-out form', 'نموذج تسجيل الخروج'],
    'Administrator dashboard ·': ['Administrator dashboard ·', 'لوحة تحكم المسؤول ·'],
    'owner accounts': ['owner accounts', 'حسابات المالك'],
    'keys': ['keys', 'مفاتيح'],
    'reports': ['reports', 'تقارير'],
    'Create owner account': ['Create owner account', 'إنشاء حساب مالك'],
    'Owner accounts': ['Owner accounts', 'حسابات المالك'],
    'Created': ['Created', 'تاريخ الإنشاء'],
    'Status': ['Status', 'الحالة'],
    'Action': ['Action', 'الإجراء'],
    'Create account': ['Create account', 'إنشاء الحساب'],
    'Access keys': ['Access keys', 'مفاتيح الوصول'],
    'Keys are created by owner accounts and displayed only once.': ['Keys are created by owner accounts and displayed only once.', 'ينشئ مالكو الحسابات المفاتيح وتُعرض مرة واحدة فقط.'],
    'Hint': ['Hint', 'تلميح'],
    'Owner': ['Owner', 'المالك'],
    'Reports': ['Reports', 'التقارير'],
    'Search': ['Search', 'بحث'],
    'Device': ['Device', 'الجهاز'],
    'Received': ['Received', 'تاريخ الاستلام'],
    'Assessment': ['Assessment', 'التقييم'],
    'Disable': ['Disable', 'تعطيل'],
    'Disabled': ['Disabled', 'معطّل'],
    'Active': ['Active', 'نشط'],
    'Unassigned': ['Unassigned', 'غير معيّن'],
    'Revoked': ['Revoked', 'ملغى'],
    'Used': ['Used', 'مستخدم'],
    'Expired': ['Expired', 'منتهي الصلاحية'],
    'Available': ['Available', 'متاح'],
    'Unknown device': ['Unknown device', 'جهاز غير معروف'],
    'Unknown': ['Unknown', 'غير معروف'],
    'Reports and keys for this owner account only.': ['Reports and keys for this owner account only.', 'التقارير والمفاتيح الخاصة بحساب المالك هذا فقط.'],
    'Create one-time scan key': ['Create one-time scan key', 'إنشاء مفتاح فحص لمرة واحدة'],
    'Expires after': ['Expires after', 'تنتهي صلاحيته بعد'],
    '1 day': ['1 day', 'يوم واحد'],
    '7 days': ['7 days', '7 أيام'],
    '30 days': ['30 days', '30 يومًا'],
    '1 year': ['1 year', 'سنة واحدة'],
    'Never': ['Never', 'مطلقًا'],
    'Create key': ['Create key', 'إنشاء مفتاح'],
    'Revoke': ['Revoke', 'إلغاء'],
    'Your reports': ['Your reports', 'تقاريرك'],
    'Change password': ['Change password', 'تغيير كلمة المرور'],
    'New password': ['New password', 'كلمة مرور جديدة'],
    'Reports and keys for this owner account only.': ['Reports and keys for this owner account only.', 'التقارير والمفاتيح الخاصة بحساب المالك هذا فقط.'],
    'Back to dashboard': ['Back to dashboard', 'العودة إلى لوحة التحكم'],
    'Summary': ['Summary', 'الملخص'],
    'Findings': ['Findings', 'النتائج'],
    'No findings recorded.': ['No findings recorded.', 'لم يتم تسجيل نتائج.'],
    'Raw report': ['Raw report', 'التقرير الخام'],
    'Delete report': ['Delete report', 'حذف التقرير'],
    'Deletion is permanent; it does not restore the consumed one-time code.': ['Deletion is permanent; it does not restore the consumed one-time code.', 'الحذف نهائي ولا يعيد الرمز المستخدم لمرة واحدة.'],
    'Delete report permanently': ['Delete report permanently', 'حذف التقرير نهائيًا'],
    'Understanding Microsoft Defender detections': ['Understanding Microsoft Defender detections', 'فهم اكتشافات Microsoft Defender'],
    'A Defender detection indicates a security concern to review. It does not by itself prove cheating, and a detection recorded during the scan window does not prove that the scan caused it. The report cannot confirm whether the item is still present.': ['A Defender detection indicates a security concern to review. It does not by itself prove cheating, and a detection recorded during the scan window does not prove that the scan caused it. The report cannot confirm whether the item is still present.', 'يشير اكتشاف Defender إلى مشكلة أمنية تستحق المراجعة. ولا يثبت وحده حدوث غش، كما أن تسجيل اكتشاف أثناء الفحص لا يثبت أن الفحص تسبب فيه. ولا يؤكد التقرير ما إذا كان العنصر لا يزال موجودًا.'],
    'Open Windows Security → Virus & threat protection → Protection history.': ['Open Windows Security → Virus & threat protection → Protection history.', 'افتح أمان Windows ← الحماية من الفيروسات والتهديدات ← سجل الحماية.'],
    'Match the threat name, affected resource and time, then check the current status and action taken.': ['Match the threat name, affected resource and time, then check the current status and action taken.', 'طابق اسم التهديد والمورد المتأثر والوقت، ثم تحقق من الحالة الحالية والإجراء المتخذ.'],
    'If action success is false or unclear, update Defender security intelligence and run a custom or offline scan.': ['If action success is false or unclear, update Defender security intelligence and run a custom or offline scan.', 'إذا لم ينجح الإجراء أو كانت حالته غير واضحة، حدّث معلومات أمان Defender وشغّل فحصًا مخصصًا أو دون اتصال.'],
    'Do not restore or delete a file based only on this report. Verify its source and seek a second trusted scan if you suspect a false positive.': ['Do not restore or delete a file based only on this report. Verify its source and seek a second trusted scan if you suspect a false positive.', 'لا تستعد ملفًا أو تحذفه استنادًا إلى هذا التقرير وحده. تحقق من مصدره واطلب فحصًا موثوقًا ثانيًا إذا اشتبهت في نتيجة إيجابية كاذبة.'],
    'These results are taken from Defender history available during the scan. They can include detections that are not related to the game.': ['These results are taken from Defender history available during the scan. They can include detections that are not related to the game.', 'هذه النتائج مأخوذة من سجل Defender المتاح أثناء الفحص، وقد تتضمن اكتشافات غير مرتبطة باللعبة.'],
    'Deletion is permanent; it does not restore the consumed one-time code.': ['Deletion is permanent; it does not restore the consumed one-time code.', 'الحذف نهائي ولا يعيد الرمز المستخدم لمرة واحدة.'],
    'Copy this code now; it is shown once and cannot be recovered.': ['Copy this code now; it is shown once and cannot be recovered.', 'انسخ هذا الرمز الآن؛ سيظهر مرة واحدة فقط ولا يمكن استعادته لاحقًا.'],
    'Expires:': ['Expires:', 'ينتهي في:'],
    'Return to dashboard': ['Return to dashboard', 'العودة إلى لوحة التحكم'],
    'Invalid credentials.': ['Invalid credentials.', 'بيانات الدخول غير صحيحة.'],
    'Request origin rejected.': ['Request origin rejected.', 'تم رفض مصدر الطلب.'],
    'Reports and keys for this owner account only.': ['Reports and keys for this owner account only.', 'التقارير والمفاتيح الخاصة بحساب المالك هذا فقط.'],
    'Language': ['Language', 'اللغة']
  };

  const localeNames = { en: 'English', ar: 'العربية' };
  const normalize = value => value.trim().replace(/[’‘]/g, "'").replace(/\s+/g, ' ');
  const normalizedMessages = new Map(
    Object.entries(messages).map(([source, translations]) => [normalize(source), translations])
  );
  const sourceText = new WeakMap();
  const sourceAttributes = new WeakMap();
  const sourceTitle = document.title;
  let language;

  try {
    const saved = localStorage.getItem('bd-language');
    language = saved === 'en' || saved === 'ar'
      ? saved
      : (navigator.language || '').toLowerCase().startsWith('ar') ? 'ar' : 'en';
  } catch {
    language = (navigator.language || '').toLowerCase().startsWith('ar') ? 'ar' : 'en';
  }

  function translated(value) {
    const trimmed = value.trim();
    if (!trimmed) return value;
    const normalized = normalize(trimmed);
    const pair = normalizedMessages.get(normalized);
    if (!pair) {
      const prefixed = trimmed.match(/^([^\p{L}\p{N}]+)([\p{L}\p{N}].*)$/u);
      const prefixedMessage = prefixed && normalizedMessages.get(normalize(prefixed[2]));
      if (prefixedMessage) {
        const start = value.indexOf(trimmed);
        const translatedSuffix = prefixedMessage[language === 'ar' ? 1 : 0];
        return value.slice(0, start) + prefixed[1] + translatedSuffix + value.slice(start + trimmed.length);
      }
      const dynamic = [
        [/^(\d+)\s*\/\s*(\d+)\s+dispo$/, (_, n, max) => language === 'ar' ? `${n} من ${max} متاح` : `${n}/${max} available`],
        [/^(\d+)\s+actifs$/, (_, n) => language === 'ar' ? `${n} نشط` : `${n} active`],
        [/^(\d+)\s*\/\s*(\d+)\s+résultat(?:s)?$/, (_, n, total) => language === 'ar' ? `${n} من ${total} نتيجة` : `${n} / ${total} results`],
        [/^(\d+)\s+jours?\s+restants?$/, (_, n) => language === 'ar' ? `${n} يوم متبقٍ` : `${n} days remaining`],
        [/^Expire dans (.+)$/, (_, remaining) => language === 'ar' ? `ينتهي خلال ${remaining}` : `Expires in ${remaining}`],
        [/^il y a (\d+)\s+min$/, (_, n) => language === 'ar' ? `منذ ${n} دقيقة` : `${n} min ago`],
        [/^il y a (\d+)\s+h$/, (_, n) => language === 'ar' ? `منذ ${n} ساعة` : `${n} hr ago`],
        [/^il y a (\d+)\s+j$/, (_, n) => language === 'ar' ? `منذ ${n} يوم` : `${n} days ago`],
        [/^Rapport reçu : (.+)$/, (_, name) => language === 'ar' ? `تم استلام التقرير: ${name}` : `Report received: ${name}`],
        [/^Owner dashboard — (.+)$/, (_, name) => language === 'ar' ? `لوحة المالك — ${name}` : `Owner dashboard — ${name}`],
        [/^Owner dashboard — (.+) · Blue Detected$/, (_, name) => language === 'ar' ? `لوحة المالك — ${name} · Blue Detected` : `Owner dashboard — ${name} · Blue Detected`],
        [/^(\d+)\s+jours?$/, (_, days) => language === 'ar' ? `${days} يومًا` : `${days} days`],
        [/^Respecter les lois de protection des données applicables et supprimer les rapports devenus inutiles \(suppression automatique après (\d+) jours\)\.$/,
          (_, days) => language === 'ar' ? `التزم بقوانين حماية البيانات واحذف التقارير التي لم تعد مطلوبة (تحذف تلقائيًا بعد ${days} يومًا).` : `Follow applicable data-protection laws and delete reports that are no longer needed (automatically deleted after ${days} days).`],
        [/^et ne constituent pas une preuve : une décision de sanction doit toujours être vérifiée manuellement par un humain\.$/,
          () => language === 'ar' ? 'وليست دليلًا. ويجب على شخص مراجعتها قبل اتخاذ أي إجراء تأديبي.' : 'and are not proof. A person must review them before any disciplinary decision.'],
        [/^\.\s*Contact\s*:\s*Coordonnées de contact non configurées\.\.$/,
          () => language === 'ar' ? '. للتواصل: بيانات التواصل غير مُهيأة.' : '. Contact: Contact details are not configured.'],
        [/^Vous pouvez demander l'accès, la rectification ou la suppression de vos données, ou vous opposer à leur traitement, en écrivant à (.+)\. en indiquant votre code de vérification\.$/,
          (_, contact) => {
            const localizedContact = normalizedMessages.get(normalize(contact));
            const contactText = localizedContact ? localizedContact[language === 'ar' ? 1 : 0] : contact;
            return language === 'ar'
              ? `يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها أو الاعتراض على معالجتها عبر مراسلة ${contactText}. ويرجى ذكر رمز التحقق الخاص بك.`
              : `You may request access, correction, or deletion of your data, or object to its processing, by contacting ${contactText}. Please include your verification code.`;
          }]
      ];
      for (const [pattern, replace] of dynamic) {
        if (pattern.test(trimmed)) {
          const start = value.indexOf(trimmed);
          return value.slice(0, start) + trimmed.replace(pattern, replace) + value.slice(start + trimmed.length);
        }
      }
      return value;
    }
    const start = value.indexOf(trimmed);
    return value.slice(0, start) + pair[language === 'ar' ? 1 : 0] + value.slice(start + trimmed.length);
  }

  function translateTextNode(node) {
    if (!sourceText.has(node)) sourceText.set(node, node.nodeValue);
    const value = translated(sourceText.get(node));
    if (node.nodeValue !== value) node.nodeValue = value;
  }

  function translateElement(element) {
    if (!(element instanceof Element) || element.id === 'bd-language-control') return;
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let node;
    for (node = element; node; node = walker.nextNode()) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.parentElement && !node.parentElement.closest('script,style,code,svg,#bd-language-control')) {
          translateTextNode(node);
        }
        continue;
      }
      if (node.matches('script,style,code,svg,#bd-language-control')) continue;
      for (const attribute of ['placeholder', 'aria-label', 'title', 'content']) {
        if (attribute === 'content' && node.getAttribute('name') !== 'description') continue;
        if (!node.hasAttribute(attribute)) continue;
        let stored = sourceAttributes.get(node);
        if (!stored) {
          stored = {};
          sourceAttributes.set(node, stored);
        }
        if (!(attribute in stored)) stored[attribute] = node.getAttribute(attribute);
        const value = translated(stored[attribute]);
        if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
      }
    }
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = translated(sourceTitle);
    translateElement(document.body);
    const control = document.getElementById('bd-language-control');
    if (control) {
      control.value = language;
      control.setAttribute('aria-label', language === 'ar' ? 'اختيار اللغة' : 'Choose language');
    }
  }

  function addControl() {
    if (document.getElementById('bd-language-control')) return;
    const control = document.createElement('select');
    control.id = 'bd-language-control';
    control.setAttribute('aria-label', 'Choose language');
    control.title = 'Choose language';
    control.style.cssText = 'font:600 13px system-ui,sans-serif;color:#eef4ff;background:#081437;border:1px solid rgba(90,150,255,.45);border-radius:8px;padding:8px 10px;min-width:108px;cursor:pointer';
    for (const code of ['en', 'ar']) {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = localeNames[code];
      control.append(option);
    }
    control.addEventListener('change', () => {
      language = control.value;
      try {
        localStorage.setItem('bd-language', language);
      } catch {
        // Language selection still works for the current page when storage is unavailable.
      }
      applyLanguage();
    });
    const nav = document.querySelector('.nav .wrap');
    if (nav) {
      control.style.marginInlineStart = '10px';
      nav.append(control);
    } else {
      control.style.cssText += ';position:fixed;top:14px;right:14px;z-index:80;box-shadow:0 6px 20px rgba(0,0,0,.3)';
      document.body.append(control);
    }
  }

  const style = document.createElement('style');
  style.textContent = 'html[dir="rtl"] body{direction:rtl}html[dir="rtl"] body[dir="rtl"] .drawer{left:0;right:auto;border-left:0;border-right:1px solid var(--line)}html[dir="rtl"] th{text-align:right}html[dir="rtl"] .cat>summary::before{margin-right:0;margin-left:4px}#bd-language-control{font-family:system-ui,sans-serif}';
  document.head.append(style);

  addControl();
  applyLanguage();
  new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData') translateTextNode(record.target);
      for (const added of record.addedNodes) {
        if (added.nodeType === Node.TEXT_NODE) translateTextNode(added);
        else if (added.nodeType === Node.ELEMENT_NODE) translateElement(added);
      }
    }
  }).observe(document.body, { childList: true, subtree: true, characterData: true });
})();
