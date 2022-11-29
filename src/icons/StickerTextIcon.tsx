import React, { FC, memo } from 'react';
import StickerTextSvg from '../svg/sticker-text.svg';

export interface IStickerTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerTextIcon: FC<IStickerTextIconProps> = memo(props => {
  return <StickerTextSvg {...props} />;
});
