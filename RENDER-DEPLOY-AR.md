# نشر Blue Detected على Render

## مهم: هناك خدمتان وقاعدتا بيانات منفصلتان
- `blue-detected-site`: الموقع وتسجيل Discord وواجهة البائع وواجهة API لاستقبال تقارير الفحص. هذا الكود يستخدم MongoDB، لذلك يحتاج `MONGODB_URI` (مثل رابط MongoDB Atlas). `MONGODB_DATABASE=pccheck` هو اسم قاعدة البيانات فقط وليس رابط اتصال.
- `blue-detected-owner-reports`: لوحة المالكين والتقارير المنفصلة، وتستخدم PostgreSQL عبر `DATABASE_URL`. ملف Render Blueprint ينشئ قاعدة PostgreSQL لهذه الخدمة.

## الخطوات
1. ارفع محتويات هذا المجلد إلى مستودع GitHub.
2. في Render اختر New → Blueprint واربط المستودع الذي يحتوي `render.yaml`.
3. أنشئ قاعدة MongoDB في مزود مثل MongoDB Atlas، ثم ضع رابطها في `MONGODB_URI` لخدمة `blue-detected-site`، واسمح باتصالات Render في إعدادات الشبكة لدى مزود MongoDB.
4. بعد إنشاء خدمة الموقع، ضع رابطها العام الكامل HTTPS في `BASE_URL`، مثل `https://blue-detected-site.onrender.com`، بدون `/` في النهاية.
5. في Discord Developer Portal، أضف Redirect URL التالي حرفيًا: `https://YOUR-SITE-SERVICE.onrender.com/auth/discord/callback`، ثم ضع `DISCORD_CLIENT_ID` و`DISCORD_CLIENT_SECRET` في خدمة الموقع.
6. Render يولّد `ADMIN_TOKEN` و`SESSION_SECRET` لخدمة الموقع. لا تستخدم القيمة نفسها للاثنين ولا تنشرهما في HTML أو GitHub.
7. لخدمة `blue-detected-owner-reports`، ضع `OWNER_PASSWORD` قويًا وفريدًا. Render يولّد `SESSION_SECRET` و`KEY_PEPPER` منفصلين، وتُوصل `DATABASE_URL` بقاعدة PostgreSQL التي يعرّفها Blueprint.
8. عيّن `RETENTION_DAYS=30` و`MAX_ACTIVE_CODES=3`. لا تغيّر `TRUST_PROXY=1` إلا إذا كنت تعرف أنك لا تستخدم وكيل Render.
9. اختبر `/health` للخدمتين. يجب أن تعيد حالة ناجحة بعد اتصال قاعدة البيانات. لا تنشر أسرارًا حقيقية في المحادثة أو في المستودع.

## حول DATABASE_URL وMongoDB
المشروع الحالي لا يستخدم `DATABASE_URL` لتخزين الموقع الرئيسي؛ يستخدم `MONGODB_URI`. أما `DATABASE_URL` فهو خاص بخدمة لوحة المالكين المنفصلة. لا تضع رابط PostgreSQL في `MONGODB_URI` أو العكس.
