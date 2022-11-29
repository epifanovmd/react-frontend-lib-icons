import React, { FC, memo } from 'react';
import StickerTextOutlineSvg from '../svg/sticker-text-outline.svg';

export interface IStickerTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StickerTextOutlineIcon: FC<IStickerTextOutlineIconProps> = memo(props => {
  return <StickerTextOutlineSvg {...props} />;
});
