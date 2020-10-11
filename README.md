This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn install
```

After, run the development server:

```bash
yarn dev
```

Export

Uygulama FTP'ye yüklenmek istendiği için, Next.JS'in SSR özellikleri kullanılmadı. Komutu çalıştırdıktan sonra out
klasörünü FTP'ye yükleyebilsiniz.
```bash
build-export
```



Tüm sayfaların(/pages) kendi component klasör'ü var. ortak özellikleri olanlar /components klasöründen paylaşıyorlar.

Sayfalarda gözüken tüm TEXT'ler /context/locales/[language].ts dosyasından çekiliyor. LocalizationContextProvider ile
componentler Consume ediyor.
