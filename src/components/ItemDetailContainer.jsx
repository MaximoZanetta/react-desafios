import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const dataBase = [{
        "id": 1,
        "car": "Audi",
        "model": "S8",
        "year": 2003,
        "price": 30000,
        "stock": 4,
        "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ3SURBVBgZBcHPi5RlHADwz/POOzu7o21bIWVsiiAR1kYdJOwHdAgKO3QQDMqCTv4XdQikg1BCUnTQCIK6REVdOnWTClIRjAwNCdFy1t1xdnZm3nee59vnkyICAOSTJyu5HCsdR6PESju4fXG6vvFBOxzOVd7r7tn7Zju4vbF58dJnk7Y9VQMAaNu3PbTr03rtyR6hGqw/N/3u+6ct9mYrrx5+cXHfXpHLzqVffn3/2pnPl2oAgNJfPN5de7xnNGK8re733Xf0yCFtq2oKl/+UcO/aE1K3+1YNAJBTtdptC+sbRGHzrqruUDLDIaUw3mbnDlFKrwYAyFujmbZhe8w8kzOzGfM5udDMmGyjaPM86is/HrywuHzgQEoVWKh0ujf2WFjewfUb5DklyC2TGbMpqw+7c/6CzeHdH+oU1WOPPH+2m1IiyPtvWf/oQ/es7ra0Z5Wr19gYkVt6XQ486s6li37/+tvfxpPJido8pkrTm936RG46VMv6x9YMf7rhvzNn7T78soUqsT3R7Fzyx6mPjfdv5eF4/NqRweBmrU0VlHkfYevaOcPL5+nhFa6XL+mhB/TfqfWtdJ796spNqJWqo+oY/X1Fc+cfZbbtgYOvW3nqDUlS5q1mMKEU3fsX1Mv7/HX6GQC1OUnHrhfeJTJRkDWDb8hjZEkjTDSDic6OEwCg1kZEZM2/X6AQgUwUES3RijIhjykTAAC1JgqBIAqRRTTEnGhEmZK3lTwSeQsFANRmUaREFBFzoqXMRJkRU1GmooxF3qJMUAGAOtrSy+NN0oNSSuiITiXpgKRCIhJqeTICAHXMZj9fPf3SIYEEAAAACCSUcg7gf+9HV+4TlzZTAAAAAElFTkSuQmCC"
      }, {
        "id": 2,
        "car": "Toyota",
        "model": "Sequoia",
        "year": 2009,
        "price": 25000,
        "stock": 5,
        "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH0SURBVDjLlZPLbxJRGMX5X/xbjBpjjCtXLl2L0YWkaZrhNQwdIA4FZxygC22wltYYSltG1HGGl8nopCMPX9AUKQjacdW4GNPTOywak7ZAF/eRe/M73/nOzXUAcEwaqVTKmUgkGqIoWoIgWP/fTYSTyaSTgAfdbhemaSIej+NcAgRudDod9Pt95PN5RKPR8wnwPG/Z1XVdB8dxin0WDofBsiyCwaA1UYBY/tdqtVAqlRCJRN6FQiE1k8mg2WyCpunxArFY7DKxfFir1VCtVlEoFCBJEhRFQbFYhM/na5wKzq/+4ALprzqxbFUqFWiaBnstl8tQVRWyLMPr9R643W7nCZhZ3uUS+T74jR7Y5c8wDAO5XA4MwxzalklVy+PxNCiKcp4IkbbhzR4K+h9IH02wax3MiAYCgcBfv99/4TS3xxtfepcTCPyKgGl5gCevfyJb/Q3q6Q5uMcb7s3IaTZ6lHY5f70H6YGLp7QDx9T0kSRtr5V9wLbZxw1N/fqbAHIEXsj1saQR+M8BCdg8icbJaHOJBqo3r1KfMuJdyuBZb2NT2R5a5l108JuFl1CHuJ9q4NjceHgncefSN9LoPcYskT9pYIfA9Al+Z3X4xzUdz3H74RbODWlGGeCYPcVf4jksz08HHId6k63USFK7ObuOia3rYHkdyavlR+267GwAAAABJRU5ErkJggg=="
      }, {
        "id": 3,
        "car": "Toyota",
        "model": "4Runner",
        "year": 2003,
        "price": 21000,
        "stock": 3,
        "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALeSURBVDjLY/j//z8DDKvNusuTturRzro9L95NO/b674RDr37W73z+Pmnxg9PypRcUkNXCMIaAcu9Nj7rjb24ee/rt/9HH3/47zry7Si7/vKZM5hlGggYodd5g1J9wc+KiKx8+Wk+5vSh367OLlp3XF8kknxbGphnDAIWGK4kbb37+pV13pV82+6xF1Y7nt90m3NwinX3JWrP51hzz3nsHTTrv7jZpvbPbrPXWQc3Sa8sQmqsuq5bsfHF15ul3b2TSzphJx5/UmXLw9Wv/KbcPSGdecFauuDnZZ97jz9kbX/zPXPPiv07pjXXisRfK4AYYtVydufn6pz/zTr77MOHAqxczDr5+e+Dmp/+xs+6eEfM6IKffcGt9wLxH/5x6795NXPbkv0T0+Wax8LNsDMAAYgEGUOySM+8++027s1cy9GikRODhYHG/g3lT97x4mzL77mXJhLMZMUue/rdtu3sZaKt7xNzH/2WizveCwwAYQHrZax5fmnTg1SuJoCOGMBeJeu5VT5px52LGrHsP3Cbff+824d5Lsajz1kBbgyJnPvyvmnhhGdiAjp3Pv087+Op/89ZnX5Jn3N4GEhRx32Mc3HPj5LJDb/5HT7r3P3HJk/9iEWdrwXIhp73Dp97/r518YQvWdICMgc6NiZ7/+H/yoif/U2fM/58zJf5/Wp///6hWj/82ucU3BL2OCOPWHH3ezLr+5mWv3rvffKvrTzeuTvy/5crU/xee7frfvzvrf3i/7n/jdJ15OA3QzL60JmHeo/9iwSebY9tdvm+8POH/xmuT/oNAz57U//170v+bZ0v9wNAIDCRj0dAzxe5tdz54tN35Kux3Itin2vD/titz/iODTZemAg2QxLTZvfPuJ9++u/99e+789+m4898o7eIxyxzp7927kv6370oAa27fmQB2gUW2/H+8gQjDQJtagns0/vfuSgHbDKJBfKB4D1EGQA3pAOJPIGdD6Q6QOADllJVJzH+HzQAAAABJRU5ErkJggg=="
      }, {
        "id": 4,
        "car": "Ford",
        "model": "Expedition",
        "year": 1999,
        "price": 37000,
        "stock": 4,
        "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAK9SURBVBgZBcHLi1VlAADw3/edc+fRmOP4YEzERxQYZGaQaQ8qRDCK+gPcGC1rYbjRWtqiTaAULWrRItwVVAaFBUIvhqjAyixIE41JB8fxzsy9c+855ztfv1/IOYPDH1/bg5N3rxnb169b/bpVt62Vpu1iCTeRsIB5fIizJUDbNI/s2rhq39EnNwCAXtVO9qt2cmGQNlc1S8Pkys1lX1zqHcCREqBtmunVIwFcu510QlAGipLRTrRlNCpi1CnYvXncpsmJte//OPtWBEh1vXqipGlZqoJuze0h3QHdAfMrzC0ncPz0Vfu2T7h/fWdDCZDqeu2dI1FvSG+QxBiUKApiQSEoAi1CWjRzecEvV7uzJUCqqunJ8UJ3pdEfZjFmRSSmoIgUsqJALtxYHDr11d+LOFwCNFW1dXp1R3eQNZApUhAzEoWszFGbSZ2kqZrtn7762K0IkKrh1o2To3pVFiJFCCIiAiBkcqYZDqVqmKCEgye+HC+LODLaiaqURBlZRhJAQIzUKVnu9RssQgnNsNowMTEmBlrIhEAU5EwIXLx0xl+XP7fUXzAV+0V3+cbrHHyjhFQN7ygnRpSRIgapDeSsRQj8+udH5vtfe/rxh21ee69zFz4JM79fP7H3lU1r4hNHTq9vqurEnh1bXF/MrtxIbi0lvYqUsxCyny6c9uCOXVJMdt11QAq1vTsfhZfLVFX78ezPF/+xsFJaHmZ1yoZ1UDWtJrWWuv/phFWeue8lcHT/e8789i4+GytTXT/0wlMPjL92aC8ASJk6ZVXD88e7Lsz+4Pzsd44d+MCbZ180VozCoNi48+A9U5MTz80v1a7O9cwtDiz2a3WTFTEa6QQpDX3zxxnbpre52f9Xtzfn+/PfWrw9PBV2Hzq5HkewFeuwDlOYwuTYSKczNtYRRs5ZSTPaPEDok9+eeWf22P/PLlOL9Py8xgAAAABJRU5ErkJggg=="
      }, {
        "id": 5,
        "car": "Pontiac",
        "model": "Grand Am",
        "year": 1997,
        "price": 44000,
        "stock": 8,
        "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMUSURBVDjLbZNLaFx1HIW/O5ln6jSZJE3SJE1L+pym1aSbirXoogah1KZUIYISRerCot34orjTBsQigt2I+EAEFwouRBMogdgniUmkIMZMpulMY2eaSdqYed659/5/PxelXWjO+vBtvnMsVWWtzP78TDciH6hoVEXeih8b/n2tnvVfQGL4aLOKvqEiJxu3Hqs3lWXupkaLKvqZGvl4z8BoZk3A3Eh/QFVfUpG3o+1921riz+ITQzE7SSBUQy45xj9/T6VV5KyKfNEzeKnyAJAY6e9D9L1QrOdgy67jhGPbQR28lTlujJ1h0+4D+Go3Uy0tsZicorA0M67GnNl3Yvwna3b46FeIDDZtG7DCDXuxC8usLs1gnCJuKUvIqtLauRPsFWoe6sQXjpLPJlhMTlFeSX/nVyMv7Dh0znILyxSzY4iTJ1ReopzPkl+4xb6BTwlE1kEphZaSWPkEjW0PU9cA07/MP+dXkZJi1QXDIaINnVSW/qQ2Vk99LEKEMtg3wQTBvgWVBcq3xymmrhDechw1UvKrCAhgBQnUbScQimLnJpFijkANWOXr4FPemfiBlWqV97e0QDCEuh4qgk+NcM+DAa2Cfx3h5l6CDXHC0Vrk9nlW0z9iey4dTXFOzaaQso04HmoMfjXmnlA1IC5IGbTKmxPfg7o44uJ4HhtjO4i37qdgl3h5fpxvmx5HjeBXkYgvEAAi4N0BqYLYeOLwVPcgRgUjBkHJrC6wt+MARafCkYtDfCTtYb8auTB/4ZNDbbueJhLrAM2AcxfbczAqpO/M4YqHJy6ucclXC/RsOkjRLXPixuWgT4w5XFi49OpfI6eT6YlvMAQhuhPbs/GMR8v6TlrXb2ZjXReBmggbou1ML1zm2vWri4elfsODKU9/vr9ZRU6pkdfaHumvf/2Pr7EdB0ccbM+hq3E3j3b1MXnzCr8mzs+UPe3NDGn1f2f67Vxvtxo5rSLPb33iFauSS5GZucbJ0sXqns4nQ2OJ0SlHeCwzpM6ab7yfq2e7+1TkXUSCKvLhi3bySyM1TRUxgdyQevd7/wI8lcwGoqfWawAAAABJRU5ErkJggg=="
      }, {
        "id": 6,
        "car": "Ford",
        "model": "Explorer",
        "year": 2012,
        "price": 40000,
        "stock": 1,
        "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHtSURBVDjLpVPJqiJBEHwf1f/UH+DydBTtLxBRUAS9eFH04MGTINIHUQQRt3I5eHBfW20XFBVzKgq75TGPNwxTEFSTXREZmVn1QUQf/4M/Av1+X+r1ekq321U7nY7GGNNarZbabDaVer0u/SjAyTIns/V6TefzmR6Ph8DpdKLFYkG1Wo1Vq1X5W4EXWb9er4SF/XA4kK7rdLlcRAyilUpFL5fL8heBl21mkHe7HW23W1ouV7Tf72mz2RBcGSKqqrJCoSCZArxexThgkEejMbndbrLb7S+xpQDWYDCgbDarmAK8WSqUYVXTNJrNZoJos9nJ6fzFd5uIow/oBwTT6bRqCrTbbQ3Ngl0c/Px0CDKIgMPhJKvVKsqAi9vtRolEQjMF+JiEAOzj0Gq1Mi0jKxxNp1MBw0U8Hn8LNBoNFR1HGSAhKzICFotFwOVy0WQyEZMZDocUi8XeJfD5Kvj5fD5FBq/XS4qikMfjMXfERqMR3e93KpVKFIlE3k3kc5WKxSJDD7AMuxAdj8eCiKxIgG9OZhzSl4uUz+flXC6nY+Y4eDwehZv5fC4uEzJDhBP1YDAof3uVM5mMnEqlGC9JNA49Qc2YO788xInM7/fLPz6mZDIpRaNRJRwOq6FQSAsEAhonqT6fT+Hf0l9f47/iN5+1McdPrPQwAAAAAElFTkSuQmCC"
      }, {
        "id": 7,
        "car": "Chevrolet",
        "model": "Camaro",
        "year": 1993,
        "price": 56000,
        "stock": 10,
        "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHcSURBVDjLhZPZihpBFIbrJeY2wbcQmjxdIGSSTC4zQxLyAK4o7igoKm7TPW49LoiYjqLG3DWpZmx7/tQpsR1xycW5qTr/9/+n+jTTdR3dbhftdhutVgvNZhOapkFVVTQajSsA7FKxTqcDx3GOajqdSki1Wr0IYeRMAsMwpPNkMnEhdCZSoFQqnYUwikzN5EYH9XpdNU0Ttm3LcwJWKhXk8/mTEEauu0YhfhKRDcuysDBt5H5tk4zHYxSLReRyuSMII+dd5M1mAxL//uvgw8Mz3t4DWWN7NxqNKAXS6fQBhIkZ+Wq1kk3r9Rpz4XytPeNLF/iqAx8f9pDhcEgpEI/HXQir1WpvxIx8uVzKps7Kls53AvCjB3x7PIQMBgNKgUgkIiGSUi6XFTEjXywWsunxj433qoM7fQ+51oDMzy2k1+tRCoRCoSt3lkKhoIgZ+Xw+P4J8F4DPTeDm3oK92aZIJpMIBAKvD15UzKdks1k+m81cyDsB+SRGuG2tYVpPL8Ued4SXlclklFQqxWkTCaILyG3bgWXvnf1+v8d9xFPLkUgklFgsxmkTd5+YxOL8QHwWQBWNRr3ipTktWL/fPym+CKAKh8PeYDDISezz+TwnV/l/v6tw9Qrxq3P3/wBazDrstPR7KQAAAABJRU5ErkJggg=="
      }, {
        "id": 8,
        "car": "Ford",
        "model": "F150",
        "year": 2010,
        "price": 60000,
        "stock": 5,
        "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHiSURBVDjLpZPNaxNBGMb33/DWoxcPngr+B4pQggdL8WNbaxQbGtugkESE0IZEkiYhpC2GtJQatKW5pFYl2yrKCrZVrMYo2jbHfJElm/1IPJXHmdklbZGURBd+PPO++84zM+/ucAC4/4GzjC2PTKXzuvvZPlxPCcldOBd/4v7Cd9ybz8Exl8V4fAd3H3+GfeYjbLEtuOLvdTqPGXhT+YNopoxusUfeHTADuvK/YA28BTNwJffQbDa75obvtWHgfPILjUYDOkOHrutsLIpiWxqkhvcKpgFpmKqq6J/IttBITAvbPZqm4ZrnlWFAu11XFCh1glI3VTnRgL6/8vCFYUA/Va0mQ5Zlpgy5RrRGcoYeIht5wsCDVcPAkfgKSZJQNaFjqSr9de54KozxmauwhvrAPzoPi3PMMLDPfkKlUjnWAxofPcLzD0vwrAxiLTeNL0UB4fU7uBw+g96RU0FuNLaNUqlEKJtqcNRgKHAB6W8RpH9EWRzcuInwxi1q8JuzRTdRKBQJBRQJhRbFll50n8XLXOJYI1ez09QA9C4s3w6J7M8a9r/BoHcd1ycypMtrrFH97jTO2XoQEIbgE3g22ZfhD3fQyY0jhZOXgqcxJQyzlanSmPWg02tLiv0ElW7bVD/N/wGu4yJFlYuLaQAAAABJRU5ErkJggg=="
      }, {
        "id": 9,
        "car": "Land Rover",
        "model": "Range Rover",
        "year": 2006,
        "stock": 10,
        "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKOSURBVDjLbVLNS+JRFP3BwPwJLWY9BLMI5j+IGEmQWlSLdrPScnAVbapFRB8DUi0qIitSShIsKyJaTFL0BS5KxaKMhj5Ew5Ssnz+nyVI7885jksnpwYHLffeec959VwGglGJ7e/v7yspKbGZm5plgzNxbtf8lFhYWytxu9xNKDnMul+vDmwR/FS+EWkEAy8vLOD4+RqFQQD6fx+HhoczxjjWsfXEkCQR79l+1y8tLeDwehEIhifn5eZkrcZSVBIuLiw4BHB0dSUXC5/NhdXUVTqdTgjFzdJPL5XBwcAD2TE1NuRShlDs5OYHf70cgEJCKVC89L4729/extbWFjY0NTE5O5hRhT81kMkgkEjg7O8P5+TnE+3B6elp0xHhnZwfhcBher1ciGAxiYmJCVebm5iRBOp3G7e0tIpGItLu3t1ecAVU5RDZubm5K0O34+LjKAUoCVVVxc3ODZDKJWCwmVfm03d1d2UjLdEYnJKCAzWZTFfG3j/f399A0DfF4XD5DkKK/vx92ux29vb1YWlrC2toa+vr6ZM5qtXKAGBoayiqzs7NeskejUaRSKYyMjPAC19fXkowDY8PAwIB0xBxdscZsNkcV8U3vxXKYpqenf46OjqKjowMBsTidnZ2ora2FyWTC8PAw2tvbZVxTU8PG3yRpbW1NF1fS4XCUNTQ0+Hp6ep5JcHV1Bb1ej/X1dTkwvl+sOaqqqp66uro+kqC7u/vh1V5XVFR8E+waCZqamqDT6VBdXY26ujoJxiSor6//QYLm5ua7VwSfxBG2w4ODg3fiezVu29jYGFpaWtDW1iZj5sRdijWsfUVQXl7+rrKy8rPBYLgwGo2/LBbLg8BjY2PjV4EvItaY4x1rWPsHDKf5+VmuapYAAAAASUVORK5CYII="
      }, {
        "id": 10,
        "car": "Lexus",
        "model": "GS",
        "year": 1996,
        "price": 30000,
        "stock": 9,
        "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIvSURBVDjLpZNPiBJRHMffG6aZHcd1RNaYSspxSbFkWTpIh+iwVEpsFC1EYO2hQ9BlDx067L1b0KVDRQUa3jzWEughiDDDZRXbDtauU5QV205R6jo6at+3lNShKdgHH77zm9/f994MHQwGZCuLI1tctgVKpZJQLBYluxj6ty3M3V+alfvNG1Efzy03XGT9e3vu+rkD9/5rAiTPiGI/2RvZNrrSkmWL52ReGNw9f+3hzD8LIHmC9M2M4pHI2upbEqD18tdPnwmzOWJlpi/fmrAtcMrfnld5k+gvdeKTrcXT07FJxVovMHuMtsiUv3/xjzOoVCo3Lcs6DEi32xVAIBKJ0MzCY3My6BN1XSeqqpKnperGiamDUi6Xa3U6nTemaRLoGodEy+v1hlEsjBdXBEGg+Xz+2fgORazVamclSSLVavXMnjGHlM1m78iy7Gi321dDoVAYRQK0UCiMU0pfN5vNXShggH2gDud21gloeNahO6EfoSr4Iopi3TCMBS4aja40Go1vmOA9Ao7DsYgORx0ORxkadzqdS9AYdBn+uKIoTI9omsa28GTzO3iEBeMCHGyCIPQDdDd0lU0AaswG7L0X52QAHbs/uXkL6HD7twnKrIPL5Sqyjm63m00U93g8JdjHoC9QJIYCdfB8+CWmUqkuHKMI8rPThQahr8BeUEWwBt4BFZ33g0vJZPIQ/+s+kcCDDQSTn1c0BElD2HXj0Emv13tg+y/YrUQiITBNp9OdH302kDq15BFkAAAAAElFTkSuQmCC"
      }, {
        "id": 11,
        "car": "Rolls-Royce",
        "model": "Phantom",
        "year": 2012,
        "price": 30000,
        "stock": 8,
        "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJlSURBVDjLhZPfa5JhFMcH3dX/Meiuv8CBoRdjIvOieRUYmjkzmBaowXCbU9E5U5KhtmX7QbrpyF3UuhDRVFoXgnrhmJO2CSFELaIYw7FvzznU+uGqA+d9znuecz7v9zkPbx+APrPZ7F1YWGgnEgmsra0hlUohnU7zSu+UX15eRiwWez8+Ph6inh/Oj7m5uapYD/F/O45EIu96AIuLi12xnirMT/EvJxNK0QMgeWTX7j+D1pfHTf8r6AMlGB6UYQy9xu2Hb3iPLB6P9wKWlpbOAHrRfOuP5jvhn4DH8SfnA05OTrCzs4NGo4FarYZKpYKtrS2USiUUCgXkcrm/K/ie5MnPzs5ie3sbKysr8Hq9DOrctaCpVqHb7Z4/g/l5TqLdbmN/fx+7u7toNpuspl6vs1erVa55NH8OIBKN8mYmk0EwGMTBwQGrCQQCDEsmk/D7/awgEon2AsLhMAM6nQ729va42efzsVyPx4NyucwKCEK56enpj6Ojo/ckEsklBgSDoTMFJpOJVRCs1Wohn8/D7XbD4XDwkClXLBa5ZmhoyMsA38wMAzY2NmC321ERZ56YmIBCoYBOp0MoFILNZuNYNEGtVj8niMVi+cQAl8vVzRcKp2NjY3A6nQx4sbkJmUyGbDbLN0FXSUeTSqVQKpUXCTA5OXnEAPHV+tSU86tGcwMGg4EBGo2Gi+VyOYaHh9kpFrlTlUr1kgB6vf6w79eJXhYmZDfEsA5XV1c/rK+vQ/xoIGVWq5VjytEe1VDtb4D+/v4LAwMDVwYHB99qtdovRqPxSPjxyMjIdeFXRfyZcrRHNVT7DWZq3D+QvMywAAAAAElFTkSuQmCC"
      }, {
        "id": 12,
        "car": "Chevrolet",
        "model": "Suburban 2500",
        "year": 1996,
        "price": 30000,
        "stock": 10,
        "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAK/SURBVDjLldPPb5MFHMfx9/O0K+3W51m3tbBmkU0XfFLdgmjUjMTEgwSNIIwdhBiPcJAT4WC8IfwHxGjUgwkJN6KJDK1HJQYzdRIMgtW2MMfWbZ3r6Npnz6/v1xONJFPj9/z9vPK5fAxV5f/cb9POdODr/mYtmn7+rfJk/D8Dl52cQM40WBDV00nTerUv2c/cn+UDAP8KVIrOhxi8oiG9gWjaSmXM+V/rivhG29PiPwKVorNLlBt2fn+yd+gQhka4fxTxF69jpwKjstg4c+Rc9d0tgUrRmYolBy7ZOybpzY7hzn9E1KoT1JdQI012ZIC55cYx4GGgUnTywIVU9umXrNwkXTEP9+57iOcivoeZSqKhC/F+tqfjow9y8d+vOLvMGF9HIYN9I0eNzCMH8Ve/orlwFXFdwk2PTS+B2TNMKipDpDRdkQeAGXr6gT20Oz/87NtGj+0T1N7HbM+igc/91SbrdRdJZLEfO4ZnZpFIWG/JUqdB0NTCtp4sXuset69Nk0gIXZpmG2D3drHspcmNTmHn97By00K8Bp6vM50G7oZcqd36mTD06e4eZf6WTW2pmztzK7RaQsLqx8pmiO5/zvbx4zRbIGJ+0gGeO1k+USvdu3Z39gt27n6SoN1m4rUD7Nn3OqvrFgOFN2FzlpkLF0lnXKIohlMYSXYAgBdOVfauVNdKv1z9krxToFZeRMUnO7wXq6+NeFVQIdr4nkdfPE3oeedmzk9YHQBg3zsVZ7m69lmrcZvyT99S/u4HMjufQto3UHF5ZspB/AWSyRI7xo8WQs8/9RAAcPBM9Uijvv6y+hsMjh2m26qj4SoYMX78tAQIslki9/gwkRec/Obs2BPGVmucOT8xP/7GxaGYeQcN14C//5jEUg5LN69Tunz20pZbCD0/OfvxlKuiiEhcI4mrCCqqqPgqqoigqoN/Abi5XyBiV8YvAAAAAElFTkSuQmCC"
      }]

    let [item, setItem]= useState([])

      useEffect(()=>{

          let promiseItem = new Promise((resolve,reject)=>{
              setTimeout(
                  ()=>{
                      resolve(dataBase)
                  },2000
              )
          })
      
          promiseItem.then((respuesta)=> {setItem(respuesta[0])}
          ).catch((err)=>{console.log(err)})
      },[])

    return (
        <>
        <div className="mt-5">

           <ItemDetail item={item} />
        </div>

        </>
           
        
    );
}

export default ItemDetailContainer;