# Meine App

Eine einfache Progressive Web App (PWA) für die Aufgabenverwaltung.

## Funktionen

- Aufgaben hinzufügen
- Aufgaben als erledigt markieren
- Aufgaben löschen
- Offline-Funktionalität
- Installierbar auf Mobilgeräten

## Anleitung zur APK-Erstellung

### Methode 1: PWA2APK-Dienst verwenden

1. Hoste diese Webseite auf einem kostenlosen Dienst wie GitHub Pages oder Netlify
2. Besuche [PWA2APK](https://pwa2apk.com/) oder [PWA Builder](https://www.pwabuilder.com/)
3. Gib die URL deiner gehosteten Webseite ein
4. Lade die generierte APK herunter und installiere sie auf deinem Android-Gerät

### Methode 2: Direkt als PWA auf Android installieren

1. Öffne die Website in Chrome auf deinem Android-Gerät
2. Tippe auf die drei Punkte im Menü
3. Wähle "Zum Startbildschirm hinzufügen"
4. Die App wird nun auf deinem Startbildschirm installiert

## Lokaler Server für Entwicklung

Um die App lokal zu testen, kannst du einen einfachen HTTP-Server verwenden:

1. Python-Server (wenn Python installiert ist):
   ```
   python -m http.server 8000
   ```

2. Oder installiere `serve` mit npm:
   ```
   npm install -g serve
   serve -s .
   ```

## Icon-Erstellung

Die Icons in `icons/icon-192x192.png` und `icons/icon-512x512.png` sollten durch tatsächliche Bilder ersetzt werden. Du kannst Plattformen wie [Canva](https://www.canva.com/) oder [favicon.io](https://favicon.io/) verwenden, um App-Icons zu erstellen. 