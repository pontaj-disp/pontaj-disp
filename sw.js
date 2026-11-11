/*
 * Service Worker al ramei „Pontaj Dispecerat”.
 * Nu memorează nimic și nu interceptează cereri: datele vin mereu proaspete din Apps Script.
 * Există pentru instalarea ca aplicație pe telefon. Notificările push se adaugă aici într-o etapă ulterioară.
 */
'use strict';
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
