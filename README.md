# Electroneum Vendor Payment Widget

Our Instant Payment Vendor Payment Widget allows you to generate a
QR code online; suitable for e-commerce websites.

You can sign up for an Electroneum user account at
[my.electroneum.com/register](https://my.electroneum.com/register) and
apply for a vendor account at
[my.electroneum.com/user/vendor](https://my.electroneum.com/user/vendor).

## Status

This project is currently in BETA phase. During this phase, we accept no
responsibility for any false notifications nor affirm the identity of
any vendors.

There is a maximum spend limit of €50.00 per transaction; this figure
is converted to ETN at a regular interval based on market data. Please
do not try to present a QR code to users above this limit as the
transaction will fail.

## [Unreleased]

### 2019-03-20
* Replaced Google Chart with QR Server to generate QR images
* Fixed spelling mistake of "Portuguese" in README

### 2018-11-07
* Added language support

### 2018-09-14
* Fixed QR image width when used with Bootstrap
* Replaced var declarations with ES6 let or const
* Remove version number from asset filenames

### 2018-09-07
* First beta release of the Electroneum Vendor Payment Widget

## Support

Community support is available at
[community.electroneum.com](https://community.electroneum.com/c/api-developers).

## Documentation

Further documentation on data structures (useful to create your own
integration or to create the QR code yourself) and our Vendor API can
be found at [community.electroneum.com/t/using-the-etn-instant-payment-api/121](https://community.electroneum.com/t/using-the-etn-instant-payment-api/121).

## Requirements

You must have already generated your payment string containing your
vendor address, payment id and ETN amount.

The payment string structure, detailed in the link above, is:

```
{vendor-address}/{payment-id}/{amount}
```

## Download

You can download the latest version of this project from
[github.com/electroneum/vendor-payment-widget](https://github.com/electroneum/vendor-payment-widget).

## Installation

Unpack the minified javascript file from `src/` and include it in your
HTML. For example:

```html
<script src="src/etn.vendor-widget.min.js"></script>
```

## How To Use

Once you have your payment string (see the documentation link above),
you simply include this in a `data-etn-vendor` attribute of a `div`. For
example:

```html
<div data-etn-vendor="etn-it-0abc123def456/7ce25b4dc0/1234.56"></div>
```

The default rendering language is English. You can provide a second
attribute of `data-lang` to specify one of the supported language codes
below. For example:

```html
<div data-etn-vendor="etn-it-0abc123def456/7ce25b4dc0/1234.56" data-lang="br-pt"></div>
```

Supported languages are restricted to the following:

| Language             | Code  |
|----------------------|-------|
| English (default)    | en    |
| Brazilian Portuguese | pt-br |
| Chinese              | zh    |
| Dutch                | nl    |
| French               | fr    |
| Hindi                | hi    |
| Indonesian           | id    |
| Italian              | it    |
| Japanese             | jp    |
| Korean               | ko    |
| Portuguese           | pt    |
| Romanian             | ro    |
| Russian              | ru    |
| Spanish              | es    |
| Thai                 | th    |
| Turkish              | tr    |
| Urdu                 | ur    |

On page load, the Javascript file will replace this div with a scannable
and clicking QR code.
