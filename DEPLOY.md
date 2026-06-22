# Деплой Loboda.dew

Пошаговая инструкция: GitHub → Vercel → домен → форма заявок.

---

## 1. Что уже готово в проекте

| Файл | Назначение |
|------|------------|
| `vercel.json` | Настройки хостинга Vercel |
| `src/app/sitemap.ts` | Карта сайта (SEO) |
| `src/app/robots.ts` | robots.txt |
| `public/favicon.svg` | Иконка вкладки |
| `.env.example` | Переменные окружения |
| `.github/workflows/ci.yml` | Автосборка при push |

Контакты: **loboda.kakapo@icloud.com**, Telegram **@DmitryWebbRazrab**

---

## 2. GitHub (хранилище кода)

В PowerShell:

```powershell
cd "C:\Users\user\Desktop\Портфолио\digital-studio"

git init
git add .
git commit -m "Initial commit: Loboda.dew portfolio"
```

Создайте репозиторий на https://github.com/new (имя, например: `loboda-dew`, **без** README).

```powershell
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/loboda-dew.git
git push -u origin main
```

---

## 3. Vercel (бесплатный хостинг)

1. Зайдите на https://vercel.com → **Sign Up** через GitHub  
2. **Add New → Project** → выберите репозиторий `loboda-dew`  
3. Framework: **Next.js** (определится сам)  
4. **Environment Variables** (важно):

   | Имя | Значение |
   |-----|----------|
   | `NEXT_PUBLIC_SITE_URL` | `https://loboda-dew.vercel.app` (ваш URL от Vercel) |
   | `WEB3FORMS_ACCESS_KEY` | ключ с web3forms.com (см. §5) |

5. **Deploy** — через 2–3 минуты сайт онлайн.

После деплоя URL будет вида: `https://loboda-dew-xxxxx.vercel.app`

---

## 4. Домен loboda.dew (~$5)

### Где купить

| Регистратор | Зона `.dew` | Примечание |
|-------------|-------------|------------|
| Проверьте **Porkbun**, **Namecheap**, **Cloudflare** | Ищите `loboda.dew` | Если `.dew` недоступна — `loboda.dev` или `loboda-dew.xyz` (~$3/год) |

> `.dew` — редкая зона. Если занята, альтернативы: `loboda.dev`, `loboda-dew.xyz`, `loboda.site`

### Подключить к Vercel

1. Vercel → проект → **Settings → Domains**  
2. Добавьте: `loboda.dew` и `www.loboda.dew`  
3. Vercel покажет DNS-записи — внесите их у регистратора:

   ```
   Тип A     →  76.76.21.21
   Тип CNAME →  cname.vercel-dns.com  (для www)
   ```

4. Подождите 5–60 мин (иногда до 24 ч)  
5. В Vercel обновите переменную:

   ```
   NEXT_PUBLIC_SITE_URL = https://loboda.dew
   ```

6. **Redeploy** (Deployments → ⋮ → Redeploy)

---

## 5. Форма заявок на почту

### Вариант A — Web3Forms (рекомендуется)

1. https://web3forms.com → **Create your Access Key**  
2. Укажите email: `loboda.kakapo@icloud.com`  
3. Скопируйте ключ → Vercel → **Settings → Environment Variables**:

   ```
   WEB3FORMS_ACCESS_KEY = ваш_ключ
   ```

4. Redeploy. Заявки приходят на iCloud.

### Вариант B — FormSubmit (уже в коде, без ключа)

При **первой** заявке на проде придёт письмо от FormSubmit с кнопкой **Confirm** — обязательно нажмите.

---

## 6. Чеклист перед публикацией

- [ ] Сайт открывается на Vercel  
- [ ] Блог → Контакты / Портфолио работают  
- [ ] Тестовая заявка пришла на `loboda.kakapo@icloud.com`  
- [ ] Telegram-ссылка открывает @DmitryWebbRazrab  
- [ ] Домен `loboda.dew` подключён (когда купите)  
- [ ] `NEXT_PUBLIC_SITE_URL` обновлён на финальный домен  

---

## 7. Обновление сайта в будущем

```powershell
cd "C:\Users\user\Desktop\Портфолио\digital-studio"
# ... правки в коде ...
git add .
git commit -m "Update portfolio"
git push
```

Vercel задеплоит автоматически за ~2 мин.

---

## 8. Альтернативы (если Vercel не подойдёт)

| Платформа | Цена | Сложность |
|-----------|------|-----------|
| **Vercel** | $0 | ★☆☆ лучший для Next.js |
| **Netlify** | $0 | ★★☆ |
| **Cloudflare Pages** | $0 | ★★☆ |
| **Render** | $0 | ★★☆ (медленнее cold start) |

Docker (локально / VPS): `docker-compose up --build` — для продвинутых.

---

## 9. SEO после запуска

- Отправьте сайт в [Google Search Console](https://search.google.com/search-console)  
- Добавьте ссылку в Telegram-био и на авито/фриланс-площадки  
- Sitemap: `https://loboda.dew/sitemap.xml`
