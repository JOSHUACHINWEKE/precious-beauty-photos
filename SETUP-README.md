# Precious Beauty Photos admin integration

This package is an **initial working implementation**, not a fully configured live deployment. It keeps the original static website and adds `/admin/` for the two Firebase Authentication users.

## 1. Configure Firebase
Open `js/firebase-config.js` and replace the `PASTE_*` values with the **Web app config** from Firebase Console > Project settings > Your apps. Use the config from the same project that contains your two Auth users and Firestore admin documents. Firebase web config is public, but never add service-account credentials.

## 2. Firestore rules
Replace Firestore Database > Rules with the included `firestore.rules` and publish. These rules supersede the earlier draft. The earlier rules kept the booking setting private, which would prevent the public website from loading the Square URL. The updated rules allow public read only for `settings/booking`, and public queries of **published** portfolio and service documents.

The two Firestore documents must exist at `admins/<firebase-auth-uid>` with `role` exactly `super_admin` and `business_admin`. Never use an email address or an auto-generated ID in place of the UID. Only project owners should be able to manage these initial records in the Firebase Console.

## 3. Enable Firebase Storage for photo uploads
Firebase Cloud Storage may require upgrading the project to Blaze and linking a billing account. Check pricing and set budget alerts before doing so. When Storage is enabled, paste the included `storage.rules` into Storage > Rules and publish. The storage bucket in `js/firebase-config.js` must match the bucket shown in Firebase. These rules allow public reads of published and unpublished uploaded image objects if someone knows their URL: do not upload private/unapproved client photos. For private drafts, use a separate protected storage design.

## 4. Local test and deployment
Keep your original `images/` and `videos/` folders in your local website directory. Copy the contents of this package over your site files, preserving those two folders. Run a local web server (for example `python -m http.server 8000`) from the site root and open `http://localhost:8000/admin/`. Do not open the HTML as `file://`. In Firebase Authentication > Settings > Authorized domains, add the domain(s) where the site runs, such as your Vercel domain. If needed, add localhost for local testing.

Once tested, push all updated code to the existing GitHub repo; Vercel will deploy. The dashboard will be at `https://YOUR-DOMAIN/admin/`.

## Current behavior and limitations
- Secure Email/Password login using Firebase Auth and Firestore `admins` roles.
- Photo upload to Firebase Storage, publish/hide, delete; upload limit 10 MB per image. Existing static gallery images are untouched.
- Service prices stored in Firestore and applied to public booking estimates after the Firebase module loads. The existing contact/booking UI may need refresh or a further event integration if a visitor opens it before remote prices load.
- Public portfolio displays **published** dashboard uploads in addition to the original static portfolio.
- Square booking URL is stored in `settings/booking` and loaded on the public site. **No payment collection or Square API integration is implemented.**
- Admin does not yet support video uploads, image reordering, category creation, private draft storage, advanced auditing, or admin user provisioning.
- For production, consider a stronger review workflow, stricter field and URL validation, image compression, App Check, and an account recovery process.
