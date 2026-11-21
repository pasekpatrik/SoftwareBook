# Software Book

Software Book je statická studijní webová příručka určená k rychlé orientaci ve vývoji a správe IT systémů. Obsah je primárně česky a spojuje Linuxové příkazy, Git konvence, návrhové vzory, síťové laboratoře a základy kryptografie a bezpečnosti.

## Obsah

- **Hlavní přehled** — Linux CLI, conventional commity, GoF návrhové vzory a React patterny.
- **Unix Operating Systems** — studijní tahák k předmětu UOP o shellu, uživatelích, procesech, úložištích, systemd, balíčcích a sítích.
- **Praktická laboratoř** — postupné příkazy a ověření konfigurace routeru, VLAN, DHCP, NAT/PAT, podsítí a zachytávání provozu ve Wiresharku.
- **Laboratorní úlohy** — praktické návodné materiály pro Port Security, DHCP Snooping, DAI, IP Source Guard a site-to-site IPsec VPN.

## Struktura projektu

- `index.html` — hlavní stránka a rychlý přehled pro vývojáře.
- `uop.html` — materiály k předmětu Unix Operating Systems.
- `lab.html` — obecné příkazy a postupy pro síťovou laboratoř.
- `lab1.html` — úloha o zabezpečení přepínače.
- `lab2.html` — úloha o virtuálních privátních sítích IPsec.
- `lab3.html` — úloha o vzdáleném přístupu pomocí WireGuard VPN.
- `styles.css` — společný vzhled, layout a responzivní styly.
- `clipboard.js` — kopírování příkazů a reakce tlačítek.
- `docs/` — původní laboratorní zadání ve formátu PDF.

## Spuštění

Projekt nepotřebuje instalaci závislostí ani sestavení. V kořenovém adresáři spusť jednoduchý místní webový server:

#### Python

```sh
python3 -m http.server
```

#### Node.js

```sh
npx serve
```
