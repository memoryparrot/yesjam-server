# ๊ธฐ์ต๋ฌด์๐ฆ

์ด๋ค ๋ง์ ์ ์ด์ผํ ์ง ๊ธฐ์ต์ด ์๋์ ๋ค๊ตฌ์? `๊ธฐ์ต๋ฌด์`๊ฐ ๋์  ์จ๋๋ฆด๊ฒ์! ๐ต
![KakaoTalk_20210523_021513517](https://user-images.githubusercontent.com/68318945/119236378-0cc78400-bb72-11eb-9030-15f8b2bf381c.png)

<div align=center>

<img src="https://user-images.githubusercontent.com/68318945/119236213-2a481e00-bb71-11eb-8963-e4d47fdd79e9.png" width="300" height="300">
<img src="https://user-images.githubusercontent.com/68318945/119236293-962a8680-bb71-11eb-82b9-e82bd2eda114.png" width="300" height="300">

</div>

<br>
<br>

## ๐จmodels๐จ
**`User`**
```
import mongoose from 'mongoose';
import { IUser } from "../interfaces/IUser"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true
    },
})

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);
```

**`Comment`**
```
import mongoose from 'mongoose';
import { IComment } from "../interfaces/IComment"

const CommentSchema = new mongoose.Schema({
    division: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sentence: {
        type: String,
        required: true,
        unique: true
    }
})

export default mongoose.model<IComment & mongoose.Document>("Comment", CommentSchema);
```

### [๐API ๋ช์ธ์](https://www.notion.so/API-d4ea698670ad4006813f589d83d492a3)
