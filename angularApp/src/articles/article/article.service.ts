import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getArticles(): any[] {
    return [
      {
        "source": {
          "id": "the-verge",
          "name": "The Verge"
        },
        "author": "Dieter Bohn",
        "title": "Microsoft's HoloLens 2: a $3500 mixed reality headset for the factory, not the living room - The Verge",
        "description": "Compared to the HoloLens we first saw demonstrated four years ago, the second version is better in nearly every important way. It’s more comfortable, has a much larger field of view, and it’s better able to detect real physical objects in the room. It feature…",
        "url": "https://www.theverge.com/2019/2/24/18235460/microsoft-hololens-2-price-specs-mixed-reality-ar-vr-business-work-features-mwc-2019",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/O7QzBcuUiSumX3EiybpPOLjFFC8=/0x292:2040x1360/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/14130271/vpavic_190131_3213_0046.jpg",
        "publishedAt": "2019-02-24T17:20:00Z",
        "content": "I am in a tiny room in a basement somewhere in Microsofts Redmond, Washington headquarters, wearing an early version of the HoloLens 2 headset. In front of me is a very real ATV, which is missing a bolt. Not quite at the corner of my vision but certainly off … [+24501 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Npr.org"
        },
        "author": null,
        "title": "Pope Calls For 'All-Out-Battle' On Clergy Sex Abuse, With Few Specifics - NPR",
        "description": "In a Mass at the end of his four-day summit, Pope Francis called priests who had abused minors \"instruments of Satan.\" But critics said his address did not offer a strong message against clergy abuse.",
        "url": "https://www.npr.org/2019/02/24/697498640/pope-calls-for-all-out-battle-on-clergy-sex-abuse-with-few-specifics",
        "urlToImage": "https://media.npr.org/assets/img/2019/02/24/ap_19055376671674_wide-34a024ab630c66419653602b194adf2cdc89779e.jpg?s=1400",
        "publishedAt": "2019-02-24T17:07:00Z",
        "content": "Pope Francis celebrated a final Mass on Sunday to conclude his unprecedented summit of Catholic leaders on clergy sexual abuse. Giuseppe Lami/AP Wrapping up an unprecedented Vatican summit, Pope Francis denounced the abuse of minors and called for an end to t… [+3997 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cnet.com"
        },
        "author": "Jessica Dolcourt",
        "title": "Mate X: What Huawei's $2,600 foldable 5G phone with three screens feels like - CNET",
        "description": "We hold and fold Huawei's new high-priced phone that rivals Samsung's Galaxy Fold.",
        "url": "https://www.cnet.com/news/mate-x-huaweis-2600-foldable-phone-rivals-samsung-galaxy-fold-with-three-screens-5g-hands-on/",
        "urlToImage": "https://cnet1.cbsistatic.com/img/hSMC93EiXLvzuJQvpxaASD8StP8=/724x407/2019/02/23/fa919dc1-0841-4868-8c0a-48398f78dceb/huawei-mate-x-mwc-2019-2.jpg",
        "publishedAt": "2019-02-24T16:54:23Z",
        "content": "Huawei wants its turn in the foldable phone spotlight, and with the Mate X, it makes a convincing -- but expensive -- audition. The main competition: Samsung's Galaxy Fold phone, which has two screens, six cameras total and unfolds in the center to open into … [+5452 chars]"
      }
    ];
  }
}
