# eat

”吃啥哟“ 小程序

# Models

Define Some model fields type base on [wxcloud database](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database/data-type.html)

```typescript
Restaurant {
  name: string
  cover: string
  score: number
  recommend: string
  posters: string[]
  location: string[]  // Geo
}
```
