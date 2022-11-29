import React, { FC, memo } from 'react';
import StickerEmojiSvg from '../svg/sticker-emoji.svg';

export interface IStickerEmojiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerEmojiIcon: FC<IStickerEmojiIconProps> = memo(props => {
  return <StickerEmojiSvg {...props} />;
});
